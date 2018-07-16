webpackJsonp([58501920654978],{657:function(n,s){n.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya-gatsby/content/posts/javascript-in-bemjson/index_ru.md absPath of file >>> MarkdownRemark",html:'<p>Обычно разработка страницы начинается с прототипирования интерфейса и затем\nпродолжается созданием статической странички при помощи HTML/CSS и элементарного\nJavaScript. Если использууется полный стек БЭМ, переход от прототипирования к\nполноценному сайту происходит постепенно. Можно склонировать проект\n<a href="https://github.com/bem/project-stub">project-stub</a>\nи сделать статическую страницу, об этом уже опубликован\n<a href="http://bem.info/articles/start-with-project-stub/">туториал</a>.<excerpt/></p>\n<p>Благодаря <code class="language-text">BEMHTML</code> вам не нужно писать весь HTML для страницы вручную. Описывая\nстраницу в BEMJSON, вы экономите время, ведь не нужно писать каждый тег. Но в\nслучае больших страниц этого мало.</p>\n<p>К счастью, в BEMJSON можно включать JavaScript, результатом которого будет\nописание блоков.\nВот пример такой страницы:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    block<span class="token punctuation">:</span> <span class="token string">\'page\'</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n    content<span class="token punctuation">:</span><span class="token punctuation">[</span>\n        <span class="token operator">...</span>\n        <span class="token punctuation">{</span>\n            block<span class="token punctuation">:</span> <span class="token string">\'content\'</span><span class="token punctuation">,</span>\n            content<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                        block<span class="token punctuation">:</span> <span class="token string">\'button\'</span><span class="token punctuation">,</span>\n                        content<span class="token punctuation">:</span> <span class="token string">\'Button \'</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                <span class="token keyword">return</span> res<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><a href="https://github.com/varya/dynamic-bemjson/blob/master/desktop.bundles/page1/page1.bemjson.js">полный\nкод</a></p>\n<p>Когда страница собирается при помощи <code class="language-text">bem-tools</code>, этот JavaScript создает 10\nблоков <code class="language-text">button</code>.\nМожете проверить <a href="http://varya.me/dynamic-bemjson/desktop.bundles/page1/page1.html">результирующую страницу</a>\nчтобы увидеть их.</p>\n<p>Ещё одним примером может служить блок <code class="language-text">menu</code>. Такой интерфейсный компонент\nобычно состоит из множества повторяющихся пунктов с минимальными различиями.\nПолучается копипаст, которого можно избежать, используя JavaScript в BEMJSON.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    block<span class="token punctuation">:</span> <span class="token string">\'page\'</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n    content<span class="token punctuation">:</span><span class="token punctuation">[</span>\n        <span class="token operator">...</span>\n        <span class="token punctuation">{</span>\n            block<span class="token punctuation">:</span> <span class="token string">\'menu\'</span><span class="token punctuation">,</span>\n            content<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'Index\'</span><span class="token punctuation">,</span>\n                    isSelected<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'Products\'</span><span class="token punctuation">,</span>\n                    isSelected<span class="token punctuation">:</span> <span class="token boolean">true</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'Contact\'</span><span class="token punctuation">,</span>\n                    isSelected<span class="token punctuation">:</span> <span class="token boolean">false</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">var</span> block <span class="token operator">=</span> <span class="token punctuation">{</span>\n                    block<span class="token punctuation">:</span> <span class="token string">\'menu\'</span><span class="token punctuation">,</span>\n                    elem<span class="token punctuation">:</span> <span class="token string">\'item\'</span><span class="token punctuation">,</span>\n                    content<span class="token punctuation">:</span> item<span class="token punctuation">.</span>title<span class="token punctuation">,</span>\n                    mods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                        selected<span class="token punctuation">:</span> item<span class="token punctuation">.</span>isSelected\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span><span class="token punctuation">;</span>\n                <span class="token keyword">return</span> block<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><a href="https://github.com/varya/dynamic-bemjson/blob/master/desktop.bundles/page2/page2.bemjson.js">full\ncode</a></p>\n<p>В результате получается <a href="http://varya.me/dynamic-bemjson/desktop.bundles/page2/page2.html">страница с меню из 3х пунктов</a>.\nЧем больше массив с пунктами меню, тем больше пользы. Особенно если структура\nменю меняется в процессе разработки.</p>\n<p>Конечно, этой возможностью не придется пользоваться, если BEMJSON — это\nрезультат первого слоя шаблонов (таких как BEMTREE или priv.js) — там вы можете\nпроизвести столько BEMJSON, сколько требуется. Но на первом этапе разработки,\nкогда делается статическая страница, трюки с JavaScript в BEMJSON помогут\nизбежат копипаста.</p>',fields:{slug:"ru/posts/javascript-in-bemjson/",prefix:"",disqusIdentifier:"ru-posts-javascript-in-bemjson"},frontmatter:{title:"JavaScript в BEMJSON",date:"21 January 2014",v2:null,old:!0,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya-gatsby/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"ru/posts/javascript-in-bemjson/",prev:{id:"/Users/varya/WebDev/Personal/varya-gatsby/content/posts/learn-english/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/learn-english/",prefix:"",lang:"ru",disqusIdentifier:"ru-posts-learn-english"},frontmatter:{title:"Мой опыт изучения английского"}},next:{id:"/Users/varya/WebDev/Personal/varya-gatsby/content/posts/javascript-in-bemjson/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/javascript-in-bemjson/",prefix:"",lang:"en",disqusIdentifier:"en-posts-javascript-in-bemjson"},frontmatter:{title:"JavaScript in BEMJSON"}}}}}});
//# sourceMappingURL=path---ru-posts-javascript-in-bemjson-80a08089348543a559db.js.map