webpackJsonp([0xf9dc979539a7],{584:function(n,s){n.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/javascript-in-bemjson/index_en.md absPath of file >>> MarkdownRemark",html:'<p>We usually start developing a web site prototyping the interface and then\nimplementing HTML/CSS and bacis JavaScript. In case\nof using the full BEM stack a tranformation from prototype to a functioning web\nsite goes smoothly. You can clone the project from\n<a href="https://github.com/bem/project-stub">project-stub</a> and create a static web page\nas it was <a href="http://bem.info/articles/start-with-project-stub/">described\nearlier</a>.\n<excerpt/></p>\n<p>Thanks to <code class="language-text">BEMHTML</code> templates, you do not need write all the HTML manually.\nDescribing page sructure in <code class="language-text">BEMJSON</code> rather than writing all the tags manually\nsaves time. But sometimes this is still a lot of work to do, especially for large\npages.</p>\n<p>Luckily BEMJSON can include JavaScript pieces to produce some blocks dymamically.\nI created an example of such usage:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    block<span class="token punctuation">:</span> <span class="token string">\'page\'</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n    content<span class="token punctuation">:</span><span class="token punctuation">[</span>\n        <span class="token operator">...</span>\n        <span class="token punctuation">{</span>\n            block<span class="token punctuation">:</span> <span class="token string">\'content\'</span><span class="token punctuation">,</span>\n            content<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                        block<span class="token punctuation">:</span> <span class="token string">\'button\'</span><span class="token punctuation">,</span>\n                        content<span class="token punctuation">:</span> <span class="token string">\'Button \'</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                <span class="token keyword">return</span> res<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><a href="https://github.com/varya/dynamic-bemjson/blob/master/desktop.bundles/page1/page1.bemjson.js">full\ncode</a></p>\n<p>This JavaScript creates 10 <code class="language-text">button</code> blocks when the page is being built with\n<code class="language-text">bem-tools</code>.\nCheck the <a href="http://varya.me/dynamic-bemjson/desktop.bundles/page1/page1.html">result\npage</a>\nto see them.</p>\n<p>Another example is a <code class="language-text">menu</code> block. Such interface pieces usually consist of a\nlot of items with minor differences which cases a lot of copy-paste on a page.\nWith JavaScript in BEMJSON this can be easily reduced.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    block<span class="token punctuation">:</span> <span class="token string">\'page\'</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n    content<span class="token punctuation">:</span><span class="token punctuation">[</span>\n        <span class="token operator">...</span>\n        <span class="token punctuation">{</span>\n            block<span class="token punctuation">:</span> <span class="token string">\'menu\'</span><span class="token punctuation">,</span>\n            content<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'Index\'</span><span class="token punctuation">,</span>\n                    isSelected<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'Products\'</span><span class="token punctuation">,</span>\n                    isSelected<span class="token punctuation">:</span> <span class="token boolean">true</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'Contact\'</span><span class="token punctuation">,</span>\n                    isSelected<span class="token punctuation">:</span> <span class="token boolean">false</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">var</span> block <span class="token operator">=</span> <span class="token punctuation">{</span>\n                    block<span class="token punctuation">:</span> <span class="token string">\'menu\'</span><span class="token punctuation">,</span>\n                    elem<span class="token punctuation">:</span> <span class="token string">\'item\'</span><span class="token punctuation">,</span>\n                    content<span class="token punctuation">:</span> item<span class="token punctuation">.</span>title<span class="token punctuation">,</span>\n                    mods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                        selected<span class="token punctuation">:</span> item<span class="token punctuation">.</span>isSelected\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span><span class="token punctuation">;</span>\n                <span class="token keyword">return</span> block<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><a href="https://github.com/varya/dynamic-bemjson/blob/master/desktop.bundles/page2/page2.bemjson.js">full\ncode</a></p>\n<p>This gives a <a href="http://varya.me/dynamic-bemjson/desktop.bundles/page2/page2.html">page with a menu of 3 items</a>.\nThe bigger is the array of items, the more you save. Especially when the structure\nof every item changes while developing.</p>\n<p>Indeed, this feature is not needed when BEMJSON is a result of 1st layer templates\n(like BEMTREE, priv.js) you can produce as much BEMJSON as is necessary. But with\ninitial development of a static web page, the JavaScript tricks help to avoid\ncopy-paste.</p>',fields:{slug:"en/posts/javascript-in-bemjson/",prefix:"",disqusIdentifier:"en-posts-javascript-in-bemjson"},frontmatter:{title:"JavaScript in BEMJSON",date:"21 January 2014",v2:null,old:!0,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"en/posts/javascript-in-bemjson/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/javascript-in-bemjson/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/javascript-in-bemjson/",prefix:"",lang:"ru",disqusIdentifier:"ru-posts-javascript-in-bemjson"},frontmatter:{title:"JavaScript в BEMJSON"}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/javascript-component-solutions/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/javascript-component-solutions/",prefix:"",lang:"en",disqusIdentifier:"en-posts-javascript-component-solutions"},frontmatter:{title:"JavaScript components low basics"}}}}}});
//# sourceMappingURL=path---en-posts-javascript-in-bemjson-93af49f1a7e8be5ecb82.js.map