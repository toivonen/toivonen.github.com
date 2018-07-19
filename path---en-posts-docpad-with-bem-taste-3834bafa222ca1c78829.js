webpackJsonp([0x83e9740a5080],{597:function(e,t){e.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/docpad-with-bem-taste/index_en.md absPath of file >>> MarkdownRemark",html:'<p>Let me present a stub for <strong>docpad-run</strong> project with\n<strong>bem-built</strong> static assets. If you ever wanted to be\na generic blog holder equiped with nice and neat static\nfiles, here we go.\n<excerpt/></p>\n<h2>How to start</h2>\n<p>You need install the docpad first. Follow their <a href="http://docpad.org/docs/install">Installation Guide</a>.</p>\n<p>Then, the installation of the blog is super short and easy. Clone, fork or\ncopy from the <a href="https://github.com/varya/docpad-bem-stub">docpad-bem-stub repository</a>.\nThen, go though the 3 installation steps:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span>\n./node_modules/bower-npm-install/bin/bower-npm-install\ndocpad run</code></pre>\n      </div>\n<p>With these 3 steps you will get:</p>\n<ul>\n<li>a local server with a generic docpad blog;</li>\n<li><a href="http://bem.info/libs/bem-core/2.2.0/">bem-core</a> and <a href="http://bem.info/libs/bem-components/v2/">bem-components</a>\nlibraries of reusable CSS/JavaScript/templates code;</li>\n<li>fully tuned static-build instructions which run on changes\nin your source code;</li>\n<li>initial blog structure.</li>\n</ul>\n<h2>How to write</h2>\n<p>In the given structure you can write either pages or blog posts.\nThe posts are listed in the index page. Once you added a new\nitem, you can see it in this list and navigate to its page;\nthe docpad rebuilds from source automatically.</p>\n<p>Place the pages as <code class="language-text">*.html.md</code> files into <code class="language-text">src/documents/pages</code>\ndirectory. The posts are kept into <code class="language-text">src/documents/posts</code>.</p>\n<h2>How to develop statics</h2>\n<p>The statics is developed with <a href="http://bem.info/">BEM</a>.\nYou can get CSS and JavaScript files for your pages in\n<code class="language-text">desktop.bundles</code> directory. The pages are built with blocks\nfrom <code class="language-text">desktop.blocks</code> folder.</p>\n<p>The rebuild process for statics runs under docpad server.</p>\n<p>Sometimes you may prefer to develop static pages separately.\nFor this run</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">./node_modules/enb/bin/enb server</code></pre>\n      </div>\n<p>You will get another server which rebuilds statics. It\nproduces static html files from <code class="language-text">*.bemjson.js</code> files in\n<code class="language-text">desktop.bundles</code>. You can develop the layout inserting\njson there and providing <code class="language-text">BEMHTML</code> templates for the\ncorresponding block. Find the documentation about <code class="language-text">BEMHTML</code>\nhere:</p>\n<ul>\n<li><a href="http://bem.info/libs/bem-core/2.2.0/templating/intro/">BEMHTML quick start</a></li>\n</ul>\n<p>For the same blocks you can provide <code class="language-text">*.css</code> and <code class="language-text">*.js</code> files\nand get them built into pages.</p>\n<h2>How to publish</h2>\n<p>The blog is tuned to be deployed on GitHub. Thus, your\nrepository has to be named as <code class="language-text">&lt;username&gt;.github.com</code>. You\ncan develop in its <code class="language-text">source</code> branch. For deploying on\n<code class="language-text">&lt;username&gt;.github.io</code> host run this command:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">docpad deploy-ghpages</code></pre>\n      </div>\n<p>This will create <code class="language-text">master</code> branch of the repository whose\nsource is linked to the host.</p>\n<p>You can also attach your own domain to the blog like I did.\nAlso, it is possible to host your blog in differently named\nrepository. However this will make you to provide changes\non <code class="language-text">docpad.coffee</code> configuration file.<br/>\nStudy <a href="https://pages.github.com/">Github Pages</a> to learn more.</p>\n<h2>Why Docpad?</h2>\n<p>This blog had been running on Jekyll for a while. This was an\nacceptable soltuion for a quick start. However with the growth\nof the posts base I started to suffer from not very fast\nrebuilds. Also, sometimes providing changes into the blog\nlayout was hard, mostly due to the limitations of <code class="language-text">liquid</code>\ntemplates.</p>\n<p>I’ve decided that <a href="http://docpad.org/">Docpad</a> should be much\nbetter alternative. It is served as an npm package, possible to\nbe extended with plugins and has an active fast-growing\ndevelopers community.</p>\n<p>The <code class="language-text">docpad-bem-stub</code> gives you initial structure, from which\nyou already can write and publish. If you want to provide changes\ninto the build process, modify the templates or extend with\nplugins, <a href="http://docpad.org/">learn at Docpad website</a>.</p>\n<p>Moreover, <a href="http://stackoverflow.com/">Stackoverflow</a> indeed already\nhas an answer to almost all the questions you have. If not, create a new\none.</p>\n<h2>Why BEM?</h2>\n<p>BEM is a very flexible modular solution for frontend which\nenables to develop reusable CSS and JavaScript components. Plus, some code\ncan be taken from their open source libraries.</p>\n<p>You can learn a lot about BEM from <a href="/en/content">my articles and talks</a>\nor at the <a href="http://bem.info/">official BEM site</a>.</p>\n<h2>Inside about</h2>\n<p>Above I described all you need to know for using your blog. Below there\nare a little more technical details on what is behind.</p>\n<h3>ENB</h3>\n<p>I use <a href="https://github.com/enb-make/enb">enb</a> for building pages with block\ncomponents. This solution is preferable to bem-tools because of it is much\nfaster. When rebuilding pages on every change, this is sensetive.</p>\n<h3>i-bem.js and modules</h3>\n<p>I personally love that this solution brings <code class="language-text">i-bem.js</code> library to the\nproject. Hope to demonstrate its amazing capabilities here in near future.\nBut before I stuff my blog with complex JavaScript components, you\ncan see some examples and very detailed explanations in <a href="http://bem.info/tutorials/bem-js-tutorial/">Step-by-step tutorial on\ni-bem.js</a>.</p>\n<p>Another JavaScript feature you can enjoy is <a href="/en/issues/ym-modular-system">YM modular system</a>.\nThese are JavaScript modules with asynchronious resolving.</p>\n<h3>BEMHTML</h3>\n<p>As mentioned above, <code class="language-text">BEMHTML</code> is a templating solution. Being JavaScript-based,\nthese templates can be applied on both server and client side. There are\na couple of documents for a deeper dive into it here:</p>\n<ul>\n<li><a href="http://bem.info/libs/bem-core/2.2.0/templating/rationale/">BEMHTML templates description</a></li>\n<li><a href="http://bem.info/libs/bem-core/2.2.0/templating/reference/">BEMHTML tutorial</a></li>\n</ul>\n<h3>bem-core and bem-components</h3>\n<p>BEM is also nice for a possibility to borrow the components from libraries.\n<code class="language-text">docpad-bem-stub</code> uses 2 now available libraries:</p>\n<ul>\n<li><a href="http://bem.info/libs/bem-core/2.2.0/">bem-core</a></li>\n<li><a href="http://bem.info/libs/bem-components/v2/">bem-components</a></li>\n</ul>\n<p>I hope to see more in the future.</p>\n<h2>What next?</h2>\n<p>Indeed everything can be improved. These are my thoughts on how\nto continue.</p>\n<ul>\n<li>detect changes in static files<br/>\nDocpad watches over the changes in <code class="language-text">src</code> directory. This means that\nwhen developing statics you will not get the rebuild. I am thinking\non running <code class="language-text">enb server</code> under <code class="language-text">docpad run</code> and proxy. This maybe\nbetter than watch over a lot of files in <code class="language-text">desktop.blocks</code>, <code class="language-text">desktop.bundles</code>\nand all the libraries.</li>\n<li>css preprocessors<br/>\nThe blog styles are in pure CSS now. But with a little\nchange into enb configuration we can learn it to build with\npreprocessors.</li>\n<li>fresh design<br/>\nCreating a simple layout is the most difficult design task. Don’t you agree?</li>\n<li>nice initial posts<br/>\nThis is even harder than the desing tasks but I think the users feel much\nmore comfortable when getting a blog with predefined texts.</li>\n</ul>\n<p>If you feel your oats and want to do your bit, fork <a href="https://github.com/varya/docpad-bem-stub">the repository</a>\nand start :-)</p>',fields:{slug:"en/posts/docpad-with-bem-taste/",prefix:"",disqusIdentifier:"posts-docpad-with-bem-taste-index-en"},frontmatter:{title:"Docpad with the taste of BEM",date:"04 June 2014",v2:!0,old:null,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"en/posts/docpad-with-bem-taste/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/efficient_xslt_techniques/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/issues/efficient_xslt_techniques/",prefix:"",lang:"ru",disqusIdentifier:"ru-issues-efficient_xslt_techniques"},frontmatter:{title:"XSLT - результативные технологии программирования"}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/communication-culture/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/communication-culture/",prefix:"",lang:"en",disqusIdentifier:"posts-communication-culture-index-en"},frontmatter:{title:"Aspect of in-company communication for innovation"}}}}}});
//# sourceMappingURL=path---en-posts-docpad-with-bem-taste-3834bafa222ca1c78829.js.map