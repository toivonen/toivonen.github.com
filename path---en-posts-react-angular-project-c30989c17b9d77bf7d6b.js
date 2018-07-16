webpackJsonp([93940825143710],{585:function(e,t){e.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya-gatsby/content/posts/react-angular-project/index_en.md absPath of file >>> MarkdownRemark",html:'<p>Earlier this year, I participated in a development of a single page application. With the team, we started this\nproject from scratch. This situation was the most suitable to practice the new technologies.</p>\n<p>The stack I’ve tried was React + ES2015 + postcss + webpack. However, keeping in mind that most of the\nteam (who were supposed to maintain the project later) are mainly experienced in Angular, I was looking for some\nsort of combination of these frameworks.</p>\n<excerpt/>\n<p>Finally, I made a project with React used for the view and Angular governing the data layer. I\nbelieve that such project is ideal for the a bridge role. Often happens that the development team has a\nstrict deadline. There is no time to invent new rocket science approaches. However, we can introduce them gradually.</p>\n<p>For that project, I decided that we can introduce React with ES2015. The project structure is easy to refactor\ninto a React-only project in the next iterations.</p>\n<p>I cannot share the exact code of the project, but I created a dummy repository with the same structure:\n<a href="https://github.com/varya/angular-react-stub">varya/angular-react-stub</a>.</p>\n<p>A new project may be forked/copied from it. After installation of the required npm packages, the development starts with\nrunning</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">npm start</code></pre>\n      </div>\n<p>It starts a local server that builds of html, js and css files related to the project. The magic\nhappens with <code class="language-text">webpack</code>. Let me explain it below.</p>\n<p>For now, let’s concentrate on the file structure.</p>\n<p>A human produced code of the project is placed in the <code class="language-text">src</code> folder.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">src/\n\n  _helpers/\n\n  modules/\n    menu/\n      menu.component.js\n      menu.css\n\n  pages/\n    contact/\n      contact.ctrl.js\n      contact.html\n\n  index.html\n  index.js</code></pre>\n      </div>\n<p>The <a href="https://github.com/varya/angular-react-stub/blob/3870766a28adb61fc2f1fc86fbfbe538c00da1f9/src/index.js">index.js</a> file\nis ‘entering point’ of the building process. Here, the webpack finds out what the modules required for the\napp are.</p>\n<p>In this file, I create an Angular application and define the rules for routing. Roughly, each routing path corresponds\nto its page. It takes a page template (an <code class="language-text">html</code> file) and a page controller (a <code class="language-text">js</code> module), and make them work\ntogether.</p>\n<p>To keep everything neat, I made <code class="language-text">pages</code> folder, where each page has a subfolder with a template\nand a controller.</p>\n<p>The controller is normal Angular code. It manipulates the data for future usage in the view. Also, controller is\nresponsible for extraction the data fromthe server and any transformation of it.</p>\n<p>However, the given example contains no such\nheavy code. Anyway, you can see how the <code class="language-text">$scope</code> is filled in\n<a href="https://github.com/varya/angular-react-stub/blob/3870766a28adb61fc2f1fc86fbfbe538c00da1f9/src/pages/components/components.ctrl.js">pages/components/components.ctrl.js</a>.</p>\n<p>The data from <code class="language-text">$scope</code> is accessible in the template. From <a href="https://github.com/varya/angular-react-stub/blob/3870766a28adb61fc2f1fc86fbfbe538c00da1f9/src/pages/components/components.html">pages/components/components.html</a>\nyou can see how it is passed down to the only used Angular directive, <code class="language-text">react-component</code>. This directive is a bridge\nbetween Angular-cooked data and React-operated view. In the directive you declare what React component to render and\npass the properties to it. After that, the React component operates independently from the Angular.</p>\n<h2>Modules</h2>\n<p>There is a special <code class="language-text">modules</code> folder at the same level as <code class="language-text">pages</code>. It contains all the React modules used in the\napplication. The modules can be complex and include other modules. However, the file structure is flat. Each component\nis represented by a folder with its JavaScript file and any other related content inside. Often, it is CSS, however\nthe pictures and other required stuff may be in the same folder.</p>\n<p>You can check out a typical component code in the file\n<a href="https://github.com/varya/angular-react-stub/blob/3870766a28adb61fc2f1fc86fbfbe538c00da1f9/src/modules/menu/menu.component.js">modules/menu/menu.component.js</a>.</p>\n<p>Note that the required CSS is imported in the JavaScript as</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">import styles from &#39;./menu.css&#39;;</code></pre>\n      </div>\n<p>This is one of the webpack’s features which makes developing with it so awesome. A component declares the CSS it uses.\nThen, the bundled CSS is built according to these declarations. In refactoring, the process will\nautomatically exclude out-of-date CSS if its module is no longer in use.</p>\n<p><a href="https://github.com/varya/angular-react-stub/blob/3870766a28adb61fc2f1fc86fbfbe538c00da1f9/webpack.config.js">webpack.config.js</a>\nstores the data what files to process and how to do it.\nIt gets the file types from their extensions. Thus, <code class="language-text">*.js</code> and <code class="language-text">*.jsx</code> files are ES2015 and transform\ninto plain JavaScript. <code class="language-text">*.html</code> files are inserted as raw strings. This is why they can be used as Angular templates.\n<code class="language-text">*.css</code> files are required as styles but first transform with Postcss. I also use <code class="language-text">precss</code> as a plugin, which\nmakes possible to enjoy most of the usual pre-processing features.</p>\n<p>This covers pretty much all about the basic structure. A real project can use external libraries and modules as\nwell as have more complex building process. But here is its starting point: <a href="https://github.com/varya/angular-react-stub/">varya/angular-react-stub</a>.</p>',fields:{slug:"en/posts/react-angular-project/",prefix:"",disqusIdentifier:"posts-react-angular-project-index-en"},frontmatter:{title:"Simple React Angular project",date:"19 May 2016",v2:!0,old:null,tumblr:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya-gatsby/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"en/posts/react-angular-project/",prev:{id:"/Users/varya/WebDev/Personal/varya-gatsby/content/posts/react-redux-simple-project/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/react-redux-simple-project/",prefix:"",lang:"en",disqusIdentifier:"posts-react-redux-simple-project-index-en"},frontmatter:{title:"Simple yet promising structure for React/Redux project"}},next:{id:"/Users/varya/WebDev/Personal/varya-gatsby/content/posts/new-post/index.md absPath of file >>> MarkdownRemark",fields:{slug:"blog/new-post/",prefix:"",lang:"en",disqusIdentifier:"blog-new-post"},frontmatter:{title:"I am new post"}}}}}});
//# sourceMappingURL=path---en-posts-react-angular-project-c30989c17b9d77bf7d6b.js.map