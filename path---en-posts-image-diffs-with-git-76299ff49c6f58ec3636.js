webpackJsonp([0x9d6b0b1960e7],{595:function(e,a){e.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/image-diffs-with-git/index_en.md absPath of file >>> MarkdownRemark",html:'<p>My first task for new projects is to create a git repository. Whether it is a new app, or conference slides, or even an\narticle, I prefer to keep everything in Git. It is an excellent tool, and, personally, I enjoy its command line\ninterface.</p>\n<p>However, there is always room for improvement. Recently I found an idea how to make my git visualize the changes that\nI’ve done to the images in a repository.</p>\n<excerpt/>\n<div class="gatsby-highlight" data-language="sh">\n      <pre class="language-sh"><code class="language-sh">Varyas-MBP £ ~/path/to/project ⤳ master*\n  › git status\nOn branch master\nChanges not staged for commit:\n  (use &quot;git add &lt;file&gt;...&quot; to update what will be committed)\n  (use &quot;git checkout -- &lt;file&gt;...&quot; to discard changes in working directory)\n\n    modified:   desktop.blocks/social-ico/social-ico__rss.png\n    modified:   desktop.blocks/social-ico/social-ico__twitter.png\n\nno changes added to commit (use &quot;git add&quot; and/or &quot;git commit -a&quot;)\nVaryas-MBP £ ~/path/to/project ⤳ master*</code></pre>\n      </div>\n<p>I can run <code class="language-text">git diff</code> over each of the modified images to see the following:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/diff1-46040b6f4a288812c1abdb04c0faf888-f911d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 432px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 43.51851851851851%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAACcElEQVQozyWSWUhUARSG72MbFERQDwa99CBED9J7Qk/Ri8/1JpolFWRRZASBSlAmYRsZ0aKjpU4lEjkTUpFCOs6UszneZruzXWfGZba7zHK/rnrg5xz4+Q/nnP8I+bFxVkKzhuodYDoyw8t/g0jBKMFQEJ/Hi9PpwjE/b8KBz+dn0e1m3qzdHjfxWAw5mTBSqaQhyzImSkLqYZ8R8trJOe4z4vvK7YUePAtuZmdnsE3ZeW0Z4Z1lGOunCUY+jGL9OIFlaJhxq5U5l4elUBwxGGY5sGSIoohQBNZDDiPjnESJ+6EKiqKgaBrqehY1EkCPiCb3j/xaAl0rUTVA11XWfN9YdY4b+XTEUCubupIhFGw95HqOke+uZ/3BCQqOt2yFplIJLFDLLpsQqYRdFP9OU6uVqZVLbLw/T66rnrypXe9vRA3PbMkE+VYd6TfnSA+3kLlbj9x9HG01RDUpUY66UAeeotsnqJpN9cBvakWFjZ+PkTsPkx6/QuZFE+nOI6SfnaFaVhCkq/tJjLaTif5AHmxG6jhAwW+jkoxSji9SbGmleLYZbXKMcspHJZshPXIR6WYdqV/9ZPwTJHtPIt05ir4aQRAv7yPS20h0qJlo/2nEa4dQV5aoxCNo0h+UoVcUb1xHtX1Gi7gwCgrpqR7ES3uJPm9CsrQQ7mog3N1gTlhCiA224r2wG1/bLrzte5Cn7m3dolbIofrnUJNu1EwAJeQg77RTq+iUS1mCfafwtu0wdTvxdxw0zbFSNs0SjE2XPV+Qpx+RD81uG2Jsp0p+DS3qRw96Uc2s5hLUqvo2pxfJzg+z8v0JirmRZn5HLCbxH5tWWnYW+h0aAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="diff1"\n        title=""\n        src="/static/diff1-46040b6f4a288812c1abdb04c0faf888-f911d.png"\n        srcset="/static/diff1-46040b6f4a288812c1abdb04c0faf888-908da.png 200w,\n/static/diff1-46040b6f4a288812c1abdb04c0faf888-28198.png 400w,\n/static/diff1-46040b6f4a288812c1abdb04c0faf888-f911d.png 432w"\n        sizes="(max-width: 432px) 100vw, 432px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/diff2-cdaec8aed7a78f5fa4a8c7a6e4c41d24-f911d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 432px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 43.51851851851851%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAACh0lEQVQozyWRW0iTcRjGv4sguqibIomCiC4KJTKqYQepEEsQsgNFZQQdbgvKiCAIutnqIpSiZrUWpQt1zbZZUZkXaeZh+1K3zzlb37RNt9mROXc0/7++1gsvD7wPz3t4Xmn6mY1YsEckh810jPdg+mIhpH5FDar4lGFkt4y7tx93nwufbwSP14vL5carKITCE0QiURGJRkUsFkPLpBStrRUTygtyrmvYfG1ckQ0ospfu7g+8ff2GhtZWLA479pcvaWlq4rndgcXShE2re4Y+EfqqMqYN9/tHRSAQQMoiGAj/Fg7fLwKTcchBKpUincsyo2HM2cH3h1amegeJzqTyNTRNJpOhsy9AW4cixsPfhJjLkUylhGSSI+x7rlJlH6NKwxYlxr8Q2RzB6hqGFuvwFmzFs2wbQ4YH/GuXSWe5UvuO3acaKNfy0LkWegZCeZ1U/tTHwdbPnHb6OWYPsKfRi5oRTJutfFqwjuHVZYys2olvRSkDy0sRmm8Nr7zoDtzl6PlmLt14xY5qE9U1zcwkM0hbzAOccypkM2nufAyy6b5Mx2SCnxf1uBdtQNXtJ3tZj7qyFPcSHdk377lq6qa4spYL+jbM1j62H6ln1/F7qKEfSBuNvRxvHuT2B5W9lkFKjD2MJP8QNzbSP28to0UVhCpP4ykoQV5aAgGVepvMmjIDh88+4eSlJjZW1VF5xsR0Io10rX2E9be6KKzrovh2F7c6A3kvZuMJ/BWn6J9fhEs73b2wGPm8Ie9hPJ7kRE0ja8sNFO6+zuaqmzjaPRozh4QQdH6Z4nH/GH3j3/n/EZGHdCJJ+OEzJvVGIq+7iGobpHOzeS6VzuFs9/LI2stocAoxN0s4HOYvWZUyA88lwgAAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px transparent;"\n        alt="diff2"\n        title=""\n        src="/static/diff2-cdaec8aed7a78f5fa4a8c7a6e4c41d24-f911d.png"\n        srcset="/static/diff2-cdaec8aed7a78f5fa4a8c7a6e4c41d24-908da.png 200w,\n/static/diff2-cdaec8aed7a78f5fa4a8c7a6e4c41d24-28198.png 400w,\n/static/diff2-cdaec8aed7a78f5fa4a8c7a6e4c41d24-f911d.png 432w"\n        sizes="(max-width: 432px) 100vw, 432px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>For every picture displayed, I can see a previous version (on the left side), a current version (on the right side) and\nvisually represented difference (in between). This feature is useful for tracking exact changes in the image. Now, I can\neasily spot if some particular details were shifted, some colors were changed, or a picture was accidentally blended\nwith another one.</p>\n<p>You can configure git to do the same. First, install ImageMagick to provide a visual comparison. Note that for the\nlatest versions of OS X you need to install a package with a support of X11. To install with <code class="language-text">brew</code>, do the following:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">  › brew install imagemagick --with-x11</code></pre>\n      </div>\n<p>Then, create a script to compare two given images. Run <code class="language-text">cat ~/bin/git-imgdiff</code>, and paste inside:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">#!/bin/sh\ncompare $2 $1 png:- | montage -geometry +4+4 $2 - $1 png:- | display -title &quot;$1&quot; -</code></pre>\n      </div>\n<p>Now, test the script. It should do the comparison of two processed images:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">  › ~/bin/git-imgdiff img1.png img2.png</code></pre>\n      </div>\n<p>At this step, you need to show git how to use compariing script. For that, define the image files their extensions\nin a special file. Run <code class="language-text">cat ~/.gitattributes</code> and paste the following:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">*.gif diff=image\n*.jpg diff=image\n*.png diff=image</code></pre>\n      </div>\n<p>Provide git with this configuration by:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">  › git config --global core.attributesfile &#39;~/.gitattributes&#39;</code></pre>\n      </div>\n<p>The last step is to instruct git to use your script when <code class="language-text">diff</code> command is applied to the matching files:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">  › git config --global diff.image.command &#39;~/bin/git-imgdiff&#39;</code></pre>\n      </div>\n<p>That’s it. Now, running a <code class="language-text">git diff</code> over your images you will get a human-friendly output. Enjoy!</p>\n<h3>References</h3>\n<ul>\n<li>[1] <a href="http://www.akikoskinen.info/image-diffs-with-git/">http://www.akikoskinen.info/image-diffs-with-git/</a></li>\n<li>[2] <a href="http://paulmestemaker.com/imagemagick-display-mac-os-x/">http://paulmestemaker.com/imagemagick-display-mac-os-x/</a></li>\n</ul>',fields:{slug:"en/posts/image-diffs-with-git/",prefix:"",disqusIdentifier:"posts-image-diffs-with-git-index-en"},frontmatter:{title:"Visual diffs for the images in a git repo",date:"18 March 2016",v2:!0,old:null,tumblr:null,meta:{desc:"The modified images in git repositories can have a decent visual representation of file changes. For that, you simply run `git diff` command. However, to get this output, you have to do a little configuration. This article shows how.\n"},cover:{childImageSharp:{resize:{src:"/static/thumb-46040b6f4a288812c1abdb04c0faf888-160fa.png"}}}}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"en/posts/image-diffs-with-git/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/javascript-component-solutions/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/javascript-component-solutions/",prefix:"",lang:"en",disqusIdentifier:"en-posts-javascript-component-solutions"},frontmatter:{title:"JavaScript components low basics"}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/frontend-babel-first-week/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/frontend-babel-first-week/",prefix:"",lang:"ru",disqusIdentifier:"posts-frontend-babel-first-week-index-ru"},frontmatter:{title:"Первая неделя Frontend Babel"}}}}}});
//# sourceMappingURL=path---en-posts-image-diffs-with-git-76299ff49c6f58ec3636.js.map