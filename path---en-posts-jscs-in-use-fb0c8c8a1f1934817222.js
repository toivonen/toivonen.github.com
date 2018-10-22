webpackJsonp([0xfce24eabf162],{718:function(e,t){e.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/jscs-in-use/index_en.md absPath of file >>> MarkdownRemark",html:'<p>This time I would like to share my experience of keeping a codestyle in one of my working projects. This is about a new\ntool called <strong>JSCS</strong> which we have recently chosen with the team and now are very pleased with the result.\n<excerpt/></p>\n<p>Once I joined <a href="http://styleguide.sc5.io/">SC5 Styleguide</a> project, I discovered that it was not consistent enough from\nits codestyle perspective. It was not frightening by that time, but it was already clear that the project was going to\ngrow fast and the sooner we start bothering about keeping the codestyle the better. I was already aware about JSCS and\nits features because had published <a href="http://frontendbabel.info/articles/jscs-javascript-code-style/">a translation of author’s tool\nintroduction</a> in one of my side-projects. So the\ndecision which tool to use was made quickly.</p>\n<p>There are indeed many other solutions, such as JSLint and JSHint, the most mentioned once. But let me first tell you a\nstory.</p>\n<p>Interesting enough that JSHint authors liked JSCS so much that they prefered to contribute into it rather than develop\nstyle checkings in their tool. So they removed all the style enforcement rules out of JSHint and keep it now for\nmore complex things not about coding style but about programming patterns.</p>\n<blockquote class="twitter-tweet" lang="en"><p>And with that, JSCS now has all the style enforcement rules that are\nbeing dropped in <a href="https://twitter.com/JSHint">@JSHint</a> 3.0: <a\nhref="https://t.co/W98EMSiTN5">https://t.co/W98EMSiTN5</a> cc <a\nhref="https://twitter.com/valueof">@valueof</a></p>&mdash; Mike Sherov (@mikesherov) <a\nhref="https://twitter.com/mikesherov/status/419596672520318976">4 Jan 2014</a></blockquote>\n<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>\n<p>This means that there is no question if you choose JSLint, JSHint <strong>or</strong> JSCS. Currently you can choose between\nJSLint and JSHint + JSCS working together.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">\'jslint\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span> <span class="token string">\'jshint\'</span><span class="token punctuation">,</span> <span class="token string">\'jscs\'</span> <span class="token punctuation">]</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Assuming that JSCS is a new tool with not yet spoiled structure, I suppose that it would be a pleasure to contribute\ninto it. Also, the tool’s youth promises that future possible bugs would be fixed soon as there is no legacy.</p>\n<p>Moreover, I personally find encouraging that JSCS has been already chosen by such respectable teams as jQuery, Bootsrap\nand AngularJS.</p>\n<p>Long story short, JSCS is an npm package. You can install it either globally or locally for a particular project:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">npm install jscs</code></pre>\n      </div>\n<p>Besides, you will need a configuration file <code class="language-text">.jscsrc</code> and define what kind of JavaScript style you prefer for the\nproject. This file should be put into the root of your project.</p>\n<p>JSCS support tonns of rules. Nethertheless, your config file would not be too heavy thanks to presets. In most cases we\nchoose from popular JavaScript styles and so there is no need to define the rules over and over again. You only need to\nwrite who you prefer to look like:</p>\n<ul>\n<li>airbnb</li>\n<li>crockford</li>\n<li>google</li>\n<li>jquery</li>\n<li>mdcs</li>\n<li>wikimedia</li>\n<li>yandex</li>\n</ul>\n<p>Even if you want to be special, you still can choose the most similar preset and redefine some of its rules below.</p>\n<p>Important thing is that JSCS is already quite a mature thing, which means that you can easily find acompanying packages\nand needed plug-ins for editors.</p>\n<h2 id="the-success-story"><a href="#the-success-story" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Success Story</h2>\n<p>Assuming these facts, we decided to give JSCS a try. We started with defining a lovely configuration but excluded all\nthe files from the checking process yet. Our project already had modular structure, so this was easy.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">{\n    ...\n\n    &quot;excludeFiles&quot;: [\n      &quot;node_modules/**&quot;,\n      &quot;src/modules/a/**&quot;,\n      &quot;src/modules/b/**&quot;,\n      &quot;src/*.js\n    ]\n}</code></pre>\n      </div>\n<p>Then, we agreed that if any of us starts coding or changing a module, he/she will fix the codestyle and swipe out the\nfixed module from the <code class="language-text">excludeFiles</code> list. Following this, we got our files fixed quite fast and even avoid conflicts.</p>\n<p>Keeping the codestyle when maintaining these files lately turned out to be more challengeable. Automatic checkings are\nvery helpful here, but we needed to decide how strict we should be. The codestyle should not be our main goal instead of\ndevelopment.</p>\n<p>Finally we came up with “separation of concerns” model. Thus, for the upstream repository we have strict codestyle\npolicy, and for the forks it is more suggestive. We taught Travis to check codestyle in the pull requests we are\ngetting. If codestyle is broken, the Travis build fails. So, pull requests with wrong codestyle cannot be merged into\nthe upstream. This ensures us that we will never get bad code there. However for the forks it is not that strict. We\nturned down the idea of using pre-push hooks but recommend a developer to install a pre-commit hook in their repository\nclone as well as using JSCS IDE plugins in order to learn about wrong codestyle while developing and not when their pull\nrequest gets broken. These recommendations are described in our documentation for developers and all the team members\nfollow them.</p>\n<p>Everyone especially likes that JSCS can work with the code editors. The codestyle configuration is stored in the project\nrepository and so an editor reads on its own. The most wonderful thing is that when switching between the projects with\ndifferent codestyles, it does not require any change of settings.</p>\n<p><img src="http://varya.me/jscs-talk/pictures/sublime.gif"></p>\n<p>And of course it is always possible to check the codestyle manually running a gulp task.</p>\n<p><img src="http://varya.me/jscs-talk/pictures/travis.png"></p>\n<h2 id="word-of-caution"><a href="#word-of-caution" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Word of caution</h2>\n<p>We faced a couple of problems when applying the tool. I believe they are worth to be mentioned, especially as I can\nprovide the solutions.</p>\n<p>The most painful was “out of memory” error when running a gulp task with JSCS checking. Turned out, that excluding files\nin the configuration is not enough. Gulp tries to process all the files that match the mask and is soon run out of\nmemory. We fixed this with using <code class="language-text">gulp-ingnore</code> package:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">gulp.task(&#39;jscs&#39;, function() {\n  return gulp.src([\n    &#39;**/*.js&#39;\n  ])\n  .pipe(gulpIgnore.exclude([\n    &#39;node_modules/**&#39;,\n    &#39;demo-output/**&#39;\n  ]))\n  .pipe(jscs());\n})</code></pre>\n      </div>\n<p>This is not the best solution because we need to list the excluded files in both <code class="language-text">.jscs</code> configuration and the\n<code class="language-text">gulpfile.js</code>. But there is nothing better yet.</p>\n<p>The second trick is about checking the codestyle while watching the project files with Gulp. You would probably like to\nsee the errors reported in your terminal but still have the <code class="language-text">watch</code> task running. This is possible with the help of\n<code class="language-text">gulp-plumber</code>:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">gulp.task(&#39;jscs&#39;, function() {\n  return gulp.src([\n    &#39;**/*.js&#39;\n  ])\n  ...\n  .pipe(plumber())\n  .pipe(jscs());\n});</code></pre>\n      </div>\n<p>This is all, we did not face any other problem with the tool. It works just fine and has already saved thousands of\nman-hours.</p>\n<h2 id="besides"><a href="#besides" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Besides</h2>\n<p>If you are interested in the slides for this talk, here they are\n<a href="http://varya.me/jscs-talk/">http://varya.me/jscs-talk/</a>.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This time I would like to share my experience of keeping a codestyle in one of my working projects. This is about a new\ntool called "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"JSCS"}]},{type:"text",value:" which we have recently chosen with the team and now are very pleased with the result.\n"},{type:"element",tagName:"excerpt",properties:{},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Once I joined "},{type:"element",tagName:"a",properties:{href:"http://styleguide.sc5.io/"},children:[{type:"text",value:"SC5 Styleguide"}]},{type:"text",value:" project, I discovered that it was not consistent enough from\nits codestyle perspective. It was not frightening by that time, but it was already clear that the project was going to\ngrow fast and the sooner we start bothering about keeping the codestyle the better. I was already aware about JSCS and\nits features because had published "},{type:"element",tagName:"a",properties:{href:"http://frontendbabel.info/articles/jscs-javascript-code-style/"},children:[{type:"text",value:"a translation of author’s tool\nintroduction"}]},{type:"text",value:" in one of my side-projects. So the\ndecision which tool to use was made quickly."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"There are indeed many other solutions, such as JSLint and JSHint, the most mentioned once. But let me first tell you a\nstory."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Interesting enough that JSHint authors liked JSCS so much that they prefered to contribute into it rather than develop\nstyle checkings in their tool. So they removed all the style enforcement rules out of JSHint and keep it now for\nmore complex things not about coding style but about programming patterns."}]},{type:"text",value:"\n"},{type:"element",tagName:"blockquote",properties:{className:["twitter-tweet"],lang:"en"},children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"And with that, JSCS now has all the style enforcement rules that are\nbeing dropped in "},{type:"element",tagName:"a",properties:{href:"https://twitter.com/JSHint"},children:[{type:"text",value:"@JSHint"}]},{type:"text",value:" 3.0: "},{type:"element",tagName:"a",properties:{href:"https://t.co/W98EMSiTN5"},children:[{type:"text",value:"https://t.co/W98EMSiTN5"}]},{type:"text",value:" cc "},{type:"element",tagName:"a",properties:{href:"https://twitter.com/valueof"},children:[{type:"text",value:"@valueof"}]}]},{type:"text",value:"— Mike Sherov (@mikesherov) "},{type:"element",tagName:"a",properties:{href:"https://twitter.com/mikesherov/status/419596672520318976"},children:[{type:"text",value:"4 Jan 2014"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"script",properties:{async:!0,src:"//platform.twitter.com/widgets.js",charSet:"utf-8"},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This means that there is no question if you choose JSLint, JSHint "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"or"}]},{type:"text",value:" JSCS. Currently you can choose between\nJSLint and JSHint + JSCS working together."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"js"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-js"]},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"text",value:"gulp"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"task"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'jslint'"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'jshint'"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'jscs'"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Assuming that JSCS is a new tool with not yet spoiled structure, I suppose that it would be a pleasure to contribute\ninto it. Also, the tool’s youth promises that future possible bugs would be fixed soon as there is no legacy."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Moreover, I personally find encouraging that JSCS has been already chosen by such respectable teams as jQuery, Bootsrap\nand AngularJS."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Long story short, JSCS is an npm package. You can install it either globally or locally for a particular project:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"npm install jscs"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Besides, you will need a configuration file "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:".jscsrc"}]},{type:"text",value:" and define what kind of JavaScript style you prefer for the\nproject. This file should be put into the root of your project."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"JSCS support tonns of rules. Nethertheless, your config file would not be too heavy thanks to presets. In most cases we\nchoose from popular JavaScript styles and so there is no need to define the rules over and over again. You only need to\nwrite who you prefer to look like:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"airbnb"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"crockford"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"google"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"jquery"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"mdcs"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"wikimedia"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"yandex"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Even if you want to be special, you still can choose the most similar preset and redefine some of its rules below."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Important thing is that JSCS is already quite a mature thing, which means that you can easily find acompanying packages\nand needed plug-ins for editors."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"the-success-story"},children:[{type:"element",tagName:"a",properties:{href:"#the-success-story",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"The Success Story"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Assuming these facts, we decided to give JSCS a try. We started with defining a lovely configuration but excluded all\nthe files from the checking process yet. Our project already had modular structure, so this was easy."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:'{\n    ...\n\n    "excludeFiles": [\n      "node_modules/**",\n      "src/modules/a/**",\n      "src/modules/b/**",\n      "src/*.js\n    ]\n}'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Then, we agreed that if any of us starts coding or changing a module, he/she will fix the codestyle and swipe out the\nfixed module from the "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"excludeFiles"}]},{type:"text",value:" list. Following this, we got our files fixed quite fast and even avoid conflicts."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Keeping the codestyle when maintaining these files lately turned out to be more challengeable. Automatic checkings are\nvery helpful here, but we needed to decide how strict we should be. The codestyle should not be our main goal instead of\ndevelopment."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Finally we came up with “separation of concerns” model. Thus, for the upstream repository we have strict codestyle\npolicy, and for the forks it is more suggestive. We taught Travis to check codestyle in the pull requests we are\ngetting. If codestyle is broken, the Travis build fails. So, pull requests with wrong codestyle cannot be merged into\nthe upstream. This ensures us that we will never get bad code there. However for the forks it is not that strict. We\nturned down the idea of using pre-push hooks but recommend a developer to install a pre-commit hook in their repository\nclone as well as using JSCS IDE plugins in order to learn about wrong codestyle while developing and not when their pull\nrequest gets broken. These recommendations are described in our documentation for developers and all the team members\nfollow them."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Everyone especially likes that JSCS can work with the code editors. The codestyle configuration is stored in the project\nrepository and so an editor reads on its own. The most wonderful thing is that when switching between the projects with\ndifferent codestyles, it does not require any change of settings."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"img",properties:{src:"http://varya.me/jscs-talk/pictures/sublime.gif"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"And of course it is always possible to check the codestyle manually running a gulp task."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"img",properties:{src:"http://varya.me/jscs-talk/pictures/travis.png"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"word-of-caution"},children:[{type:"element",tagName:"a",properties:{href:"#word-of-caution",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Word of caution"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"We faced a couple of problems when applying the tool. I believe they are worth to be mentioned, especially as I can\nprovide the solutions."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The most painful was “out of memory” error when running a gulp task with JSCS checking. Turned out, that excluding files\nin the configuration is not enough. Gulp tries to process all the files that match the mask and is soon run out of\nmemory. We fixed this with using "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"gulp-ingnore"}]},{type:"text",value:" package:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"gulp.task('jscs', function() {\n  return gulp.src([\n    '**/*.js'\n  ])\n  .pipe(gulpIgnore.exclude([\n    'node_modules/**',\n    'demo-output/**'\n  ]))\n  .pipe(jscs());\n})"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This is not the best solution because we need to list the excluded files in both "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:".jscs"}]},{type:"text",value:" configuration and the\n"},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"gulpfile.js"}]},{type:"text",value:". But there is nothing better yet."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The second trick is about checking the codestyle while watching the project files with Gulp. You would probably like to\nsee the errors reported in your terminal but still have the "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"watch"}]},{type:"text",value:" task running. This is possible with the help of\n"},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"gulp-plumber"}]},{type:"text",value:":"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"gulp.task('jscs', function() {\n  return gulp.src([\n    '**/*.js'\n  ])\n  ...\n  .pipe(plumber())\n  .pipe(jscs());\n});"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This is all, we did not face any other problem with the tool. It works just fine and has already saved thousands of\nman-hours."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"besides"},children:[{type:"element",tagName:"a",properties:{href:"#besides",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Besides"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you are interested in the slides for this talk, here they are\n"},{type:"element",tagName:"a",properties:{href:"http://varya.me/jscs-talk/"},children:[{type:"text",value:"http://varya.me/jscs-talk/"}]},{type:"text",value:"."}]}],data:{quirksMode:!1}},fields:{slug:"en/posts/jscs-in-use/",prefix:"",disqusIdentifier:"posts-jscs-in-use-index-en"},frontmatter:{title:"JSCS in use",subTitle:null,date:"11 February 2015",v2:!0,old:null,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"en/posts/jscs-in-use/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/learn-english/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/learn-english/",prefix:"",lang:"ru",disqusIdentifier:"ru-issues-learn-english",level:1},frontmatter:{title:"Мой опыт изучения английского",subTitle:null,v2:null,old:!0}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/javascript-in-bemjson/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/javascript-in-bemjson/",prefix:"",lang:"ru",disqusIdentifier:"ru-issues-javascript-in-bemjson",level:1},frontmatter:{title:"JavaScript в BEMJSON",subTitle:null,v2:null,old:!0}}}}}});
//# sourceMappingURL=path---en-posts-jscs-in-use-fb0c8c8a1f1934817222.js.map