webpackJsonp([0xa144845b996c],{570:function(n,a){n.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/beml-html-preprocessor/index_en.md absPath of file >>> MarkdownRemark",html:'<p>Depending on a project people prefer different ways to adapt BEM.\nThis results\ninto a range of tools for our choice. Today, I am translating Maxim Shkalin’s\ndescription of the <code class="language-text">BEML</code> templating pre-processor.</p>\n<p>Willing to lighten the development with BEM I propose a tiny extension for the\nHTML syntax (yes, I used to writ all those long CSS classes manually). As the\nname <code class="language-text">BEMHTML</code> is greedily taken by the Yandex guys, let us call it <code class="language-text">BEML</code>.<excerpt/></p>\n<h2>Objective</h2>\n<ol>\n<li>Smooth learning curve<br/>\nHTML-syntax with no need to transform one language into another.</li>\n<li>Portability<br/>\nThe tool has to be easy to use with other languages.</li>\n<li>Compatiblity with template engines<br/>\nInstead of trying to replace them.</li>\n<li>Simplicity<br/>\nEasy to use at any project.</li>\n</ol>\n<p>It might be my habit, but I do not see the need to transform JSON into HTML.\nBEMJSON page description usually looks like spaghetti and is very hard to read\ndue to its syntax. Also I do not think that HTML is wrong. AngularJS has already\nshown that HTML can be much flexible than now. Thus, I decided to follow this\nexample.</p>\n<p>Moreover, there is anothe problem with using BEMHTML. You need Node.js running\nfor your backend; or use another JavaScript engine for PHP or Rython with dirty\nhacks like V8JS or PyV8. The otehr way round could be preparation of a rendered\ntemplate, but this sounds even more unnatural.</p>\n<p>It would be nice to have a JavaScript-preprocessor and a relative Grunt task\nwhich can be used for creating the prototypes. Then, with transforming to PHP\nyou can use the same templates in the backend.</p>\n<h2>Concept</h2>\n<p>I had a lot of ideas how to extend HTML with inheritance, includes and loops.\nBut finally I cut them off. It would be too complex to support and then provide\nthe portability. Besides, there is a lot of other template engines; I would\nrather enter into alliance with them than to compete. Finally I got not a\ntemplate engine but a preprocessor (or postprocessor) to the current one.</p>\n<p>The scenario is the following. First, create BEML markup using your template\nengine. Then, past it not to the client but to the post-processor which turns\nBEM syntax into HTML. Funally the HTML goes to the client.</p>\n<p>Or, there is a faster way for the braves. You can change your template with\npre-processor which turns BEM attributes into HTML, cache it and use this\nchached copy with your dear template engine. Indeed, the pre-processor does not\ntouch the template engine code.</p>\n<h2>Syntax</h2>\n<p>This is very simple, you just use 4 more attributes like <code class="language-text">block</code>, <code class="language-text">elem</code>, <code class="language-text">mod</code>\nand <code class="language-text">mix</code>. I suppose it is clear what each of them is responsible for. For the\ncomplex values you can use light JSON dialect with no quotation marks and\noptional curly braces. Finally the tool turns this code:</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">block</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>b-animals<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">elem</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cat<span class="token punctuation">"</span></span> <span class="token attr-name">mod</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>size:big, color:red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>into the following HTML.</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>b-animals<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>b-animals__cat\n              b-animals__cat_size_big\n              b-animals__cat_color_red\n              <span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Much readable.</p>\n<p>Full information about the syntax you can learn from the <a href="https://github.com/zenwalker/node-beml">README on GitHub</a>.</p>\n<h2>Try now</h2>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> beml</code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> beml <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'beml\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> template <span class="token operator">=</span> <span class="token string">\'&lt;div block="b-block" mod="size:big">&lt;/div>\'</span><span class="token punctuation">;</span>\n\nbeml<span class="token punctuation">.</span><span class="token function">process</span><span class="token punctuation">(</span>template<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> html<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2>Author</h2>\n<p>This article is a translaton.\nThe original article by Maxim Shkalin was <a href="http://zenwalker.ru/blog/2014/1/html-preprocessor-for-bem.html">posted in his\nblog</a>. Follow him in the social networks:\n<a class="link social-ico__ico social-ico__ico_in-text social-ico__ico_type_twitter"\nhref="https://twitter.com/zenwalker2/" target="_blank"></a>\n<a class="link social-ico__ico social-ico__ico_in-text social-ico__ico_type_github"\nhref="https://github.com/zenwalker/" target="_blank"></a></p>',fields:{slug:"en/issues/beml-html-preprocessor/",prefix:"",disqusIdentifier:"en-issues-beml-html-preprocessor"},frontmatter:{title:"BEML - an HTML preprocessor for BEM",date:"09 April 2014",v2:null,old:!0,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"en/issues/beml-html-preprocessor/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/blocks-and-bundles/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/issues/blocks-and-bundles/",prefix:"",lang:"en",disqusIdentifier:"en-issues-blocks-and-bundles"},frontmatter:{title:"Blocks are bricks, and bundles are buildings"}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/articulation-exercises/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/issues/articulation-exercises/",prefix:"",lang:"ru",disqusIdentifier:"ru-issues-articulation-exercises"},frontmatter:{title:"Упражнения для дикции"}}}}}});
//# sourceMappingURL=path---en-issues-beml-html-preprocessor-12837b8b28f48f372bf2.js.map