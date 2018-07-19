webpackJsonp([0xfce24eabf162],{601:function(e,t){e.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/jscs-in-use/index_en.md absPath of file >>> MarkdownRemark",html:'<p>This time I would like to share my experience of keeping a codestyle in one of my working projects. This is about a new\ntool called <strong>JSCS</strong> which we have recently chosen with the team and now are very pleased with the result.\n<excerpt/></p>\n<p>Once I joined <a href="http://styleguide.sc5.io/">SC5 Styleguide</a> project, I discovered that it was not consistent enough from\nits codestyle perspective. It was not frightening by that time, but it was already clear that the project was going to\ngrow fast and the sooner we start bothering about keeping the codestyle the better. I was already aware about JSCS and\nits features because had published <a href="http://frontendbabel.info/articles/jscs-javascript-code-style/">a translation of author’s tool\nintroduction</a> in one of my side-projects. So the\ndecision which tool to use was made quickly.</p>\n<p>There are indeed many other solutions, such as JSLint and JSHint, the most mentioned once. But let me first tell you a\nstory.</p>\n<p>Interesting enough that JSHint authors liked JSCS so much that they prefered to contribute into it rather than develop\nstyle checkings in their tool. So they removed all the style enforcement rules out of JSHint and keep it now for\nmore complex things not about coding style but about programming patterns.</p>\n<blockquote class="twitter-tweet" lang="en"><p>And with that, JSCS now has all the style enforcement rules that are\nbeing dropped in <a href="https://twitter.com/JSHint">@JSHint</a> 3.0: <a\nhref="https://t.co/W98EMSiTN5">https://t.co/W98EMSiTN5</a> cc <a\nhref="https://twitter.com/valueof">@valueof</a></p>&mdash; Mike Sherov (@mikesherov) <a\nhref="https://twitter.com/mikesherov/status/419596672520318976">4 Jan 2014</a></blockquote>\n<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>\n<p>This means that there is no question if you choose JSLint, JSHint <strong>or</strong> JSCS. Currently you can choose between\nJSLint and JSHint + JSCS working together.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">\'jslint\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span> <span class="token string">\'jshint\'</span><span class="token punctuation">,</span> <span class="token string">\'jscs\'</span> <span class="token punctuation">]</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Assuming that JSCS is a new tool with not yet spoiled structure, I suppose that it would be a pleasure to contribute\ninto it. Also, the tool’s youth promises that future possible bugs would be fixed soon as there is no legacy.</p>\n<p>Moreover, I personally find encouraging that JSCS has been already chosen by such respectable teams as jQuery, Bootsrap\nand AngularJS.</p>\n<p>Long story short, JSCS is an npm package. You can install it either globally or locally for a particular project:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">npm install jscs</code></pre>\n      </div>\n<p>Besides, you will need a configuration file <code class="language-text">.jscsrc</code> and define what kind of JavaScript style you prefer for the\nproject. This file should be put into the root of your project.</p>\n<p>JSCS support tonns of rules. Nethertheless, your config file would not be too heavy thanks to presets. In most cases we\nchoose from popular JavaScript styles and so there is no need to define the rules over and over again. You only need to\nwrite who you prefer to look like:</p>\n<ul>\n<li>airbnb</li>\n<li>crockford</li>\n<li>google</li>\n<li>jquery</li>\n<li>mdcs</li>\n<li>wikimedia</li>\n<li>yandex</li>\n</ul>\n<p>Even if you want to be special, you still can choose the most similar preset and redefine some of its rules below.</p>\n<p>Important thing is that JSCS is already quite a mature thing, which means that you can easily find acompanying packages\nand needed plug-ins for editors.</p>\n<h2>The Success Story</h2>\n<p>Assuming these facts, we decided to give JSCS a try. We started with defining a lovely configuration but excluded all\nthe files from the checking process yet. Our project already had modular structure, so this was easy.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">{\n    ...\n\n    &quot;excludeFiles&quot;: [\n      &quot;node_modules/**&quot;,\n      &quot;src/modules/a/**&quot;,\n      &quot;src/modules/b/**&quot;,\n      &quot;src/*.js\n    ]\n}</code></pre>\n      </div>\n<p>Then, we agreed that if any of us starts coding or changing a module, he/she will fix the codestyle and swipe out the\nfixed module from the <code class="language-text">excludeFiles</code> list. Following this, we got our files fixed quite fast and even avoid conflicts.</p>\n<p>Keeping the codestyle when maintaining these files lately turned out to be more challengeable. Automatic checkings are\nvery helpful here, but we needed to decide how strict we should be. The codestyle should not be our main goal instead of\ndevelopment.</p>\n<p>Finally we came up with “separation of concerns” model. Thus, for the upstream repository we have strict codestyle\npolicy, and for the forks it is more suggestive. We taught Travis to check codestyle in the pull requests we are\ngetting. If codestyle is broken, the Travis build fails. So, pull requests with wrong codestyle cannot be merged into\nthe upstream. This ensures us that we will never get bad code there. However for the forks it is not that strict. We\nturned down the idea of using pre-push hooks but recommend a developer to install a pre-commit hook in their repository\nclone as well as using JSCS IDE plugins in order to learn about wrong codestyle while developing and not when their pull\nrequest gets broken. These recommendations are described in our documentation for developers and all the team members\nfollow them.</p>\n<p>Everyone especially likes that JSCS can work with the code editors. The codestyle configuration is stored in the project\nrepository and so an editor reads on its own. The most wonderful thing is that when switching between the projects with\ndifferent codestyles, it does not require any change of settings.</p>\n<p><img src="http://varya.me/jscs-talk/pictures/sublime.gif"></p>\n<p>And of course it is always possible to check the codestyle manually running a gulp task.</p>\n<p><img src="http://varya.me/jscs-talk/pictures/travis.png"></p>\n<h2>Word of caution</h2>\n<p>We faced a couple of problems when applying the tool. I believe they are worth to be mentioned, especially as I can\nprovide the solutions.</p>\n<p>The most painful was “out of memory” error when running a gulp task with JSCS checking. Turned out, that excluding files\nin the configuration is not enough. Gulp tries to process all the files that match the mask and is soon run out of\nmemory. We fixed this with using <code class="language-text">gulp-ingnore</code> package:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">gulp.task(&#39;jscs&#39;, function() {\n  return gulp.src([\n    &#39;**/*.js&#39;\n  ])\n  .pipe(gulpIgnore.exclude([\n    &#39;node_modules/**&#39;,\n    &#39;demo-output/**&#39;\n  ]))\n  .pipe(jscs());\n})</code></pre>\n      </div>\n<p>This is not the best solution because we need to list the excluded files in both <code class="language-text">.jscs</code> configuration and the\n<code class="language-text">gulpfile.js</code>. But there is nothing better yet.</p>\n<p>The second trick is about checking the codestyle while watching the project files with Gulp. You would probably like to\nsee the errors reported in your terminal but still have the <code class="language-text">watch</code> task running. This is possible with the help of\n<code class="language-text">gulp-plumber</code>:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">gulp.task(&#39;jscs&#39;, function() {\n  return gulp.src([\n    &#39;**/*.js&#39;\n  ])\n  ...\n  .pipe(plumber())\n  .pipe(jscs());\n});</code></pre>\n      </div>\n<p>This is all, we did not face any other problem with the tool. It works just fine and has already saved thousands of\nman-hours.</p>\n<h2>Besides</h2>\n<p>If you are interested in the slides for this talk, here they are\n<a href="http://varya.me/jscs-talk/">http://varya.me/jscs-talk/</a>.</p>',fields:{slug:"en/posts/jscs-in-use/",prefix:"",disqusIdentifier:"posts-jscs-in-use-index-en"},frontmatter:{title:"JSCS in use",date:"11 February 2015",v2:!0,old:null,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"en/posts/jscs-in-use/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/jscs-in-use/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/jscs-in-use/",prefix:"",lang:"ru",disqusIdentifier:"posts-jscs-in-use-index-ru"},frontmatter:{title:"Использование JSCS"}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/javascript-in-bemjson/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/issues/javascript-in-bemjson/",prefix:"",lang:"ru",disqusIdentifier:"ru-issues-javascript-in-bemjson"},frontmatter:{title:"JavaScript в BEMJSON"}}}}}});
//# sourceMappingURL=path---en-posts-jscs-in-use-7396dd5953b350cc0862.js.map