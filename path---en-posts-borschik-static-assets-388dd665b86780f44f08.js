webpackJsonp([0xab2f2129a1b9],{570:function(s,a){s.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/borschik-static-assets/index_en.md absPath of file >>> MarkdownRemark",html:'<p>Last week I met the need to develop a web site which static assets have to be\nhosted on a different server and respond by different URLs than its HTML. This\nis the requirement to all the static files: stylesheets and JavaScript linked to\nthe page as well as imges and fonts mentioned in HTML, CSS and JavaScript\ncode.<excerpt/> However it is obvious that these resources should be local when developing.\nThus, the challenge was to introduce a piece of magic which knows where we aim\nto host the statics and transforms all the relative paths into absolute ones\naccording to it.</p>\n<p>The tools which helped me is called\n<a href="http://bem.info/tools/optimizers/borschik/">Borschik</a>. The name is funny.\nBesides it reffers to a famous Russian/Ukranian soup, it also alludes to a word\n“сборщик” [sborschik], and so might be translated as\n<strike>ass</strike>embler. “Removing the ass part” as one of my friends says.\n:-)</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 80.11811023622047%; position: relative; height: 0; overflow: hidden;margin-bottom: 2em"\n          >\n            <center>\n<iframe src="//embed.gettyimages.com/embed/135591409?et=B_T3l-shrE-pr9-ELe_wJw&amp;sig=5haG67PAzCxGourA96ZB7m9LwSket1v9PpvXEXNIkBM=" frameborder="0" scrolling="no" style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n</center>\n          </div>\n          </div>\n<p>In the <a href="https://github.com/varya/st-deliverer">varya/st-deliverer</a> public repository\nyou can find a stub project illustrating the solution.</p>\n<h3>Project structure</h3>\n<p>As you will be able to see later <code class="language-text">borschik</code> is very flexible. So you can use any\nproject structure. In my project I store everything in\n<a href="b.com/varya/st-deliverer/tree/master/src">src folder</a>.\nWhen building I get HTML files in\n<a href="https://github.com/varya/st-deliverer/tree/gh-pages/dist/html">dist/html directory</a>.\nCheck out the code and make sure that static files are linked from a different\nserver by their absolute paths.</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Deliver static assets with Borschik<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>\n      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://varya.github.io/stor.../styles.css<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span>\n    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>page<span class="token punctuation">"</span></span>\n    <span class="token attr-name">background</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://varya.github.io/stor.../grungy.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  ...</code></pre>\n      </div>\n<p><a href="http://varya.me/st-deliverer/dist/html/">Open in your browser</a> to enjoy my visual\ndesign and a tom-cat.</p>\n<h3>Bring borschik to your project</h3>\n<p>Borschik is an npm package. So, you can install it globally by runing</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> -g borschik</code></pre>\n      </div>\n<p>I personally prefer local project dependencies, so my project has a\n<a href="https://github.com/varya/st-deliverer/blob/master/package.json">package.json</a>\nfile:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  <span class="token string">"dependencies"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"borschik"</span><span class="token punctuation">:</span> <span class="token string">"0.4.2"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3>Configuration</h3>\n<p>Before we start the magic transformation it is needed to instruct <code class="language-text">borschik</code> what\nto transform and how to transform. The <a href="https://github.com/varya/st-deliverer/blob/master/.borschik">.borschik</a>\nconfiguration file serves for that.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  <span class="token string">"paths"</span> <span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"src/img/"</span><span class="token punctuation">:</span> <span class="token string">"http://varya.github.io/stor.../st-deliverer/img/"</span><span class="token punctuation">,</span>\n    <span class="token string">"src/css/"</span><span class="token punctuation">:</span> <span class="token string">"http://varya.github.io/stor.../st-deliverer/css/"</span><span class="token punctuation">,</span>\n    <span class="token string">"src/font/"</span><span class="token punctuation">:</span> <span class="token string">"http://varya.github.io/storage/fonts/"</span>\n\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Note that you can tune different replacements for different paths. Here I tried\nto illustrate with the fonts.</p>\n<h3>Run the command</h3>\n<p>Run borschik over a file which contains links to local static assets, and you\nwill get the transformation result. For example,</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">./node_modules/borschik/bin/borschik \\\n  --input<span class="token operator">=</span>src/css/styles.css</code></pre>\n      </div>\n<p>Fot the building process you will also need an <code class="language-text">--output</code> flag to instruct\n<code class="language-text">borschik</code> where to place the result.</p>\n<p>Borschik knows the syntax of web technologies. It will not touch the links\nmentioned in text, for example.</p>\n<h3>Build system</h3>\n<p>Now you can use <code class="language-text">borschik</code> in your project build process. I simply wrote a\n<a href="https://github.com/varya/st-deliverer/blob/master/Makefile">Makefile</a> with a\nlot of help from <a href="https://github.com/alexeyten">@alexeyten</a> (tnx!).\nThere is also a grunt plugin <a href="https://github.com/megatolya/grunt-borschik">megatolya/grunt-borschik</a>.<br/>\nIndeed, <code class="language-text">borschik</code> is included into <a href="http://bem.info/tools/bem/bem-tools/">bem-tools</a>\nand <a href="https://github.com/enb-make/enb">enb</a> — the two competitive solutions for\nbuilding the projects with BEM structure.</p>\n<h3>Result</h3>\n<p><a href="http://varya.me/st-deliverer/dist/html/">Check the cat again</a>. Still there?</p>\n<p>You also can learn about other features of <code class="language-text">borschik</code> from the article:\n<a href="http://bem.info/articles/borschik/">http://bem.info/articles/borschik/</a>.</p>',fields:{slug:"en/posts/borschik-static-assets/",prefix:"",disqusIdentifier:"en-posts-borschik-static-assets"},frontmatter:{title:"Borschik helps with remote static assets",date:"10 March 2014",v2:null,old:!0,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"en/posts/borschik-static-assets/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/borschik-static-assets/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/borschik-static-assets/",prefix:"",lang:"ru",disqusIdentifier:"ru-posts-borschik-static-assets"},frontmatter:{title:"Локальная разработка и удаленный хостинг статики"}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/blocks-and-bundles/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/blocks-and-bundles/",prefix:"",lang:"en",disqusIdentifier:"en-posts-blocks-and-bundles"},frontmatter:{title:"Blocks are bricks, and bundles are buildings"}}}}}});
//# sourceMappingURL=path---en-posts-borschik-static-assets-388dd665b86780f44f08.js.map