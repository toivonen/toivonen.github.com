const path = require("path");
const config = require("./content/meta/config");

const { createFilePath } = require(`gatsby-source-filesystem`);

const REPO_URL = "https://github.com/varya/varya.github.com";
const REPO_BRANCH = "develop";

// TODO: move to separate file
//#Source https://bit.ly/2neWfJ2
const toKebabCase = (str) =>
  str &&
  str
    .trim()
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  const isOldPost = (node) => node.frontmatter.v2 || node.frontmatter.old;
  const createNewSlug = (fileNode, filePath, isOld) => {
    const slugBase = fileNode.relativeDirectory;
    const slugPrefix =
      // for newer posts replace "posts" in path to "blog" to match previous urls
      !isOld && fileNode.sourceInstanceName === "posts"
        ? "blog"
        : fileNode.sourceInstanceName;

    if (isOld) {
      const langPrefix = filePath.split("index_")[1] || "";
      return `${langPrefix}${slugPrefix}/${slugBase}/`;
    }
    return `${slugPrefix}/${slugBase}/`;
  };

  if (node.internal.type === "Mdx") {
    const fileNode = getNode(node.parent);
    const filePath = createFilePath({ node, getNode, basePath: `/` });

    let slug = createNewSlug(fileNode, filePath, isOldPost(node));

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });

    // detect Node language
    let lang = "en";
    if (fileNode.base.endsWith("_ru.md")) {
      lang = "ru";
    }
    createNodeField({
      node,
      name: `lang`,
      value: lang,
    });

    let disqusIdentifier = slug.split("/").filter((item) => item != "");
    if (node.frontmatter.v2) {
      if (disqusIdentifier[0] === "en" || disqusIdentifier[0] === "ru") {
        disqusIdentifier.shift();
      }
      disqusIdentifier.push("index");
      disqusIdentifier.push(lang);
    }
    if (node.frontmatter.old) {
      disqusIdentifier = disqusIdentifier.map((item) =>
        item === "posts" ? "issues" : item
      );
    }
    disqusIdentifier = disqusIdentifier.join("-");

    createNodeField({
      node,
      name: `disqusIdentifier`,
      value: disqusIdentifier,
    });

    createNodeField({
      node,
      name: "fileRelativePath",
      value: fileNode.relativePath,
    });

    const level = (fileNode.relativePath.match(/\//g) || []).length;
    createNodeField({
      node,
      name: `level`,
      value: level,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const postTemplate = path.resolve("./src/templates/Post.js");
  const blogTemplate = path.resolve("./src/templates/BlogIndex.js");
  const tagTemplate = path.resolve("./src/templates/TagIndex.js");

  const postsData = await graphql(`
    query {
      blogPosts: allMdx(
        filter: {
          fileAbsolutePath: { regex: "//posts//" }
          fields: { lang: { eq: "en" } }
        }
        sort: { fields: [frontmatter___date], order: [DESC, DESC] }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            fields {
              slug
              disqusIdentifier
              level
              fileRelativePath
              lang
            }
            frontmatter {
              title
              subTitle
              v2
              old
              date
              layout
              tags
            }
          }
        }
      }
      projectPosts: allMdx(
        filter: { fileAbsolutePath: { regex: "//projects//" } }
        sort: { fields: [frontmatter___date], order: [DESC] }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            fields {
              slug
              level
              fileRelativePath
              lang
            }
            frontmatter {
              title
              subTitle
              date
            }
          }
        }
      }
      designSystemsPosts: allMdx(
        filter: { fileAbsolutePath: { regex: "//design-systems//" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      ruPosts: allMdx(
        filter: {
          fileAbsolutePath: { regex: "//posts//" }
          fields: { lang: { ne: "en" } }
        }
        sort: { fields: [frontmatter___date], order: [DESC, DESC] }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            fields {
              slug
              disqusIdentifier
              level
              fileRelativePath
              lang
            }
            frontmatter {
              title
              subTitle
              v2
              old
              date
              layout
              tags
            }
          }
        }
      }
      lifePosts: allMdx(
        filter: { fileAbsolutePath: { regex: "//life//" } }
        sort: { fields: [frontmatter___date], order: [DESC, DESC] }
      ) {
        edges {
          node {
            id
            fileAbsolutePath
            fields {
              slug
              disqusIdentifier
              level
              fileRelativePath
              lang
            }
            frontmatter {
              title
              subTitle
              v2
              old
              date
              layout
              tags
            }
          }
        }
      }
    }
  `);

  if (postsData.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const blogPosts = postsData.data.blogPosts.edges;

  const otherPosts = [
    ...postsData.data.ruPosts.edges,
    ...postsData.data.lifePosts.edges,
    ...postsData.data.projectPosts.edges,
    ...postsData.data.designSystemsPosts.edges,
  ];

  const tagSet = new Set();

  blogPosts.forEach(({ node }, index) => {
    const slug = node.fields && node.fields.slug;
    const next = index === 0 ? undefined : blogPosts[index - 1].node;
    const prev =
      index === blogPosts.length - 1 ? undefined : blogPosts[index + 1].node;
    const fileSourceUrl = `${REPO_URL}/edit/${REPO_BRANCH}/content/posts/${node.fields.fileRelativePath}`;

    // Generate a list of tags
    const tags = node.frontmatter.tags && node.frontmatter.tags.split(",");
    if (tags) {
      tags.forEach((tag) => {
        tagSet.add(tag);
      });
    }

    createPage({
      path: slug,
      component: postTemplate,
      context: {
        slug,
        prev,
        next,
        fileSourceUrl,
      },
    });
  });

  // Create all the old post which only need to be served t the urls, but do not need to appear in blog index.
  otherPosts.forEach(({ node }) => {
    const slug = node.fields.slug;

    createPage({
      path: slug,
      component: postTemplate,
      context: {
        slug,
      },
    });
  });

  // Create blog index pages
  // Adapted from: https://github.com/Vagr9K/gatsby-advanced-starter/blob/master/gatsby-node.js
  const { postsPerPage } = config || 10; //default value
  const pageCount = Math.ceil(blogPosts.length / postsPerPage);

  [...Array(pageCount)].forEach((_val, pageNum) => {
    createPage({
      path: pageNum === 0 ? `/blog` : `/blog/${pageNum + 1}/`,
      component: blogTemplate,
      context: {
        limit: postsPerPage,
        skip: pageNum * postsPerPage,
        pageCount,
        currentPage: pageNum + 1,
      },
    });
  });

  //  Create tag pages
  tagSet.forEach((tag) => {
    const tagSlug = toKebabCase(tag);
    createPage({
      path: `/blog/${tagSlug}/`,
      component: tagTemplate,
      context: { tag, tagSlug },
    });
  });
};

// https://levelup.gitconnected.com/how-to-set-up-import-aliases-for-gatsby-32398ae67e7f
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@templates": path.resolve(__dirname, "src/templates"),
        "@static": path.resolve(__dirname, "static"),
      },
    },
  });
};
