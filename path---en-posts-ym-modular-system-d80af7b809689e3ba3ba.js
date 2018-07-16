webpackJsonp([0x9ead7ed5fb7d],{597:function(n,s){n.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/ym-modular-system/index_en.md absPath of file >>> MarkdownRemark",html:'<p>The recently published <a href="http://bem.info/tutorials/articles/bem-js-tutorial/">step-by-step tutorial on\ni-bem.js</a> mentioned <strong>YM\nmodular system</strong> as a base for component JavaScript solution behind BEM. Why do\nwe need another modular system? Let us see…\n<excerpt/></p>\n<p>The author of YM modules, <a href="https://github.com/dfilatov">Dmitry Filatov</a> recently\ncame up with an <a href="http://habrahabr.ru/post/213627/">article about YM modules</a> in\nRussian. And below you can find the translation.</p>\n<hr/>\n<p>So, one more modular system? Besides CommonJS and AMD? Why should we care?</p>\n<p>I will not write why modules and modular systems are needed, there are plenty of\narticles about it. Let us rather proceed to the main question: why do we need\n<em>another</em> modular system?<br/>\nFor sure, there are CommonJS and AMD, but working on large projects with them I faced\nlarge drawbacks. One is that they are synchronous. This is not fatal, but in my\nproject we often had to provie different hacks for it.</p>\n<p>Let us say, we have 3 modules: moduleA, moduleB and moduleC. moduleC depends on\nboth moduleA and moduleB. Initially I will describe this in code for all the\nthree solutions:</p>\n<h4>CommonJS</h4>\n<p><em>moduleA.js:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token string">\'A\'</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><em>moduleB.js:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token string">\'B\'</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><em>moduleC.js:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> moduleA <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'A\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    moduleB <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'B\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> moduleA <span class="token operator">+</span> moduleB <span class="token operator">+</span> <span class="token string">\'C\'</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><em>Linking and usage:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> moduleC <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'C\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleC<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints "ABC"</span></code></pre>\n      </div>\n<h4>AMD</h4>\n<p><em>moduleA.js:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">\'A\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">\'A\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><em>moduleB.js:</em>:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">\'B\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">\'B\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><em>moduleC.js:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">\'С\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'A\'</span><span class="token punctuation">,</span> <span class="token string">\'B\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>moduleA<span class="token punctuation">,</span> moduleB<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> moduleA <span class="token operator">+</span> moduleB <span class="token operator">+</span> <span class="token string">\'C\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><em>Linking and usage:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'С\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>moduleC<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleC<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints "ABC"</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h4>YM</h4>\n<p><em>moduleA.js:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">modules<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">\'A\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>provide<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">\'A\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><em>moduleB.js:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">modules<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">\'B\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>provide<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">\'B\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><em>moduleC.js:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">modules<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">\'C\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'A\'</span><span class="token punctuation">,</span> <span class="token string">\'B\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>provide<span class="token punctuation">,</span> moduleA<span class="token punctuation">,</span> moduleB<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">provide</span><span class="token punctuation">(</span>moduleA <span class="token operator">+</span> moduleB <span class="token operator">+</span> <span class="token string">\'C\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><em>Linking and usage:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">modules<span class="token punctuation">.</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'С\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>moduleC<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleC<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// prints "ABC"</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Nothing interesting yet. All three examples are similar, although you may\nnotice the <code class="language-text">provide</code> callback in the YM example. What is it for?</p>\n<p>Let us imagine a case that <code class="language-text">moduleA</code> and <code class="language-text">moduleB</code> cannot be resolved immediately\n(synchronously, as it is required by CommonJS and AMD). Sometimes you need to\ndo an asynchronous action first. The simpliest example can be <code class="language-text">setTimeout</code>.\nThere is no way to implement it elegantly with CommonJS and AMD.\nBut with <code class="language-text">YM</code> it can be coded as follows:</p>\n<p><em>moduleA.js:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">modules<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">\'A\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>provide<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">\'A\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><em>moduleB.js:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">modules<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">\'B\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>provide<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">\'B\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><em>moduleC.js:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">modules<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">\'C\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'A\'</span><span class="token punctuation">,</span> <span class="token string">\'B\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>provide<span class="token punctuation">,</span> moduleA<span class="token punctuation">,</span> moduleB<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">provide</span><span class="token punctuation">(</span>moduleA <span class="token operator">+</span> moduleB <span class="token operator">+</span> <span class="token string">\'C\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Interestingly <code class="language-text">moduleC</code> does not know anything about asynchronous actions in\nits dependant modules. <em>Win!</em></p>\n<h3>Real life example</h3>\n<p>As for real file example, I often use the YandexMaps API\n(<a href="http://api.yandex.com/maps/">http://api.yandex.com/maps/</a>, API of\n<a href="http://maps.yandex.com/">Yandex.Maps</a>\npublic service). Yandex.Maps API has a complex loading scheme and this cannot be\ndone synchronously. This means that I cannot simply link it to a page\n<code class="language-text">&lt;script type=&quot;text/javascript&quot; src=&quot;url-of-ymaps.js&quot;&gt;&lt;/script&gt;</code> and be sure that\nall the following scripts will get the API code ready. First I need to wait for\nthe event <code class="language-text">ymaps.ready</code> to fire.</p>\n<p>The project I am working for is quite complex; we have many classes inherited\nfrom the basic API. For example, we have a <code class="language-text">ComplexLayer</code> class based on <code class="language-text">ymaps.Layer</code>.\nWith YM modules it is simple to implement. We define a <code class="language-text">ymaps</code> module which loads\nthe API code, waits for the <code class="language-text">ymaps.ready</code> event and then provides itself. All\nthe modules which have the <code class="language-text">ymaps</code> module as a dependency only start to resolve\nafter this. As you can see, other modules know nothing about the asynchronicity of the\nYandex.Map API. <em>No hacks in code!</em></p>\n<p><em>ymaps.js:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">modules<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span>\n    <span class="token string">\'ymaps\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token string">\'loader\'</span><span class="token punctuation">,</span> <span class="token string">\'config\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>provide<span class="token punctuation">,</span> loader<span class="token punctuation">,</span> config<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">var</span> url <span class="token operator">=</span> config<span class="token punctuation">.</span>hosts<span class="token punctuation">.</span>ymaps <span class="token operator">+</span> <span class="token string">\'/2.1.4/?lang=ru-RU\'</span> <span class="token operator">+</span>\n              <span class="token string">\'&amp;load=package.full&amp;coordorder=longlat\'</span><span class="token punctuation">;</span>\n\n    <span class="token function">loader</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        ymaps<span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token function">provide</span><span class="token punctuation">(</span>ymaps<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>There are 2 other modules in use here: <code class="language-text">loader</code> and <code class="language-text">config</code>. I do not show\ntheir code, but the first one loads scripts and the second one is a hash with\nconstant values.</p>\n<p><em>ComplexLayer.js:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">modules<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">\'ComplexLayer\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'inherit\'</span><span class="token punctuation">,</span> <span class="token string">\'ymaps\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>provide<span class="token punctuation">,</span> inherit<span class="token punctuation">,</span> ymaps<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> ComplexLayer <span class="token operator">=</span> <span class="token function">inherit</span><span class="token punctuation">(</span>ymaps<span class="token punctuation">.</span>Layer<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">provide</span><span class="token punctuation">(</span>ComplexLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>We can do the same if jQuery is needed. There is a module to load jQuery:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">modules<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span>\n    <span class="token string">\'jquery\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token string">\'loader\'</span><span class="token punctuation">,</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>provide<span class="token punctuation">,</span> loader<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">\'//yandex.st/jquery/2.1.0/jquery.min.js\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">provide</span><span class="token punctuation">(</span>jQuery<span class="token punctuation">.</span><span class="token function">noConflict</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Then we make other modules dependent on <code class="language-text">jquery</code> module.</p>\n<p>Thus, the whole project code is represented with modules. There is no global, no\nneed for agreement on the order of linking the scripts (including third-party ones),\nno dirty hacks for asynchronicity.</p>\n<p>And to wrap up, let me demonstrate you the YM modular system API (indeed, it has more\nmethods, and these are only the basic ones).</p>\n<p><em>Defining a module:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">void</span> modules<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span>\n    String moduleName<span class="token punctuation">,</span>\n    <span class="token punctuation">[</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> dependencies<span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token function">Function</span><span class="token punctuation">(</span>\n        <span class="token function">Function</span><span class="token punctuation">(</span>Object objectToProvide<span class="token punctuation">)</span> provide<span class="token punctuation">,</span>\n        <span class="token punctuation">[</span>Object resolvedDependency<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">[</span>Object previousDeclaration<span class="token punctuation">]</span>\n    <span class="token punctuation">)</span> declarationFunction\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p><em>Requiring a module:</em></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">void</span> modules<span class="token punctuation">.</span><span class="token function">require</span><span class="token punctuation">(</span>\n    String<span class="token punctuation">[</span><span class="token punctuation">]</span> dependencies<span class="token punctuation">,</span>\n    <span class="token function">Function</span><span class="token punctuation">(</span>\n        <span class="token punctuation">[</span>Object resolvedDependency<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">]</span>\n    <span class="token punctuation">)</span> callbackFunction\n<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>The project is open source and hosted at GitHub:\n<a href="https://github.com/ymaps/modules">github.com/ymaps/modules</a>.</p>',fields:{slug:"en/posts/ym-modular-system/",prefix:"",disqusIdentifier:"en-posts-ym-modular-system"},frontmatter:{title:"YM Modular System. Why?",date:"25 February 2014",v2:null,old:!0,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"en/posts/ym-modular-system/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/xslt-recursion/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/xslt-recursion/",prefix:"",lang:"ru",disqusIdentifier:"ru-posts-xslt-recursion"},frontmatter:{title:"Эффективное использование рекурсии в XSL"}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/xpath-prime-numbers/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/xpath-prime-numbers/",prefix:"",lang:"ru",disqusIdentifier:"ru-posts-xpath-prime-numbers"},frontmatter:{title:"Простые числа и XPath"}}}}}});
//# sourceMappingURL=path---en-posts-ym-modular-system-d80af7b809689e3ba3ba.js.map