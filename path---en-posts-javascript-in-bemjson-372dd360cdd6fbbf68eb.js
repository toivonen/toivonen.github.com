webpackJsonp([0xf9dc979539a7],{717:function(e,t){e.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/javascript-in-bemjson/index_en.md absPath of file >>> MarkdownRemark",html:'<p>We usually start developing a web site prototyping the interface and then\nimplementing HTML/CSS and bacis JavaScript. In case\nof using the full BEM stack a tranformation from prototype to a functioning web\nsite goes smoothly. You can clone the project from\n<a href="https://github.com/bem/project-stub">project-stub</a> and create a static web page\nas it was <a href="http://bem.info/articles/start-with-project-stub/">described\nearlier</a>.\n<excerpt/></p>\n<p>Thanks to <code class="language-text">BEMHTML</code> templates, you do not need write all the HTML manually.\nDescribing page sructure in <code class="language-text">BEMJSON</code> rather than writing all the tags manually\nsaves time. But sometimes this is still a lot of work to do, especially for large\npages.</p>\n<p>Luckily BEMJSON can include JavaScript pieces to produce some blocks dymamically.\nI created an example of such usage:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    block<span class="token punctuation">:</span> <span class="token string">\'page\'</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n    content<span class="token punctuation">:</span><span class="token punctuation">[</span>\n        <span class="token operator">...</span>\n        <span class="token punctuation">{</span>\n            block<span class="token punctuation">:</span> <span class="token string">\'content\'</span><span class="token punctuation">,</span>\n            content<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                        block<span class="token punctuation">:</span> <span class="token string">\'button\'</span><span class="token punctuation">,</span>\n                        content<span class="token punctuation">:</span> <span class="token string">\'Button \'</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                <span class="token keyword">return</span> res<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><a href="https://github.com/varya/dynamic-bemjson/blob/master/desktop.bundles/page1/page1.bemjson.js">full\ncode</a></p>\n<p>This JavaScript creates 10 <code class="language-text">button</code> blocks when the page is being built with\n<code class="language-text">bem-tools</code>.\nCheck the <a href="http://varya.me/dynamic-bemjson/desktop.bundles/page1/page1.html">result\npage</a>\nto see them.</p>\n<p>Another example is a <code class="language-text">menu</code> block. Such interface pieces usually consist of a\nlot of items with minor differences which cases a lot of copy-paste on a page.\nWith JavaScript in BEMJSON this can be easily reduced.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    block<span class="token punctuation">:</span> <span class="token string">\'page\'</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n    content<span class="token punctuation">:</span><span class="token punctuation">[</span>\n        <span class="token operator">...</span>\n        <span class="token punctuation">{</span>\n            block<span class="token punctuation">:</span> <span class="token string">\'menu\'</span><span class="token punctuation">,</span>\n            content<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'Index\'</span><span class="token punctuation">,</span>\n                    isSelected<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'Products\'</span><span class="token punctuation">,</span>\n                    isSelected<span class="token punctuation">:</span> <span class="token boolean">true</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'Contact\'</span><span class="token punctuation">,</span>\n                    isSelected<span class="token punctuation">:</span> <span class="token boolean">false</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">var</span> block <span class="token operator">=</span> <span class="token punctuation">{</span>\n                    block<span class="token punctuation">:</span> <span class="token string">\'menu\'</span><span class="token punctuation">,</span>\n                    elem<span class="token punctuation">:</span> <span class="token string">\'item\'</span><span class="token punctuation">,</span>\n                    content<span class="token punctuation">:</span> item<span class="token punctuation">.</span>title<span class="token punctuation">,</span>\n                    mods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                        selected<span class="token punctuation">:</span> item<span class="token punctuation">.</span>isSelected\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span><span class="token punctuation">;</span>\n                <span class="token keyword">return</span> block<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><a href="https://github.com/varya/dynamic-bemjson/blob/master/desktop.bundles/page2/page2.bemjson.js">full\ncode</a></p>\n<p>This gives a <a href="http://varya.me/dynamic-bemjson/desktop.bundles/page2/page2.html">page with a menu of 3 items</a>.\nThe bigger is the array of items, the more you save. Especially when the structure\nof every item changes while developing.</p>\n<p>Indeed, this feature is not needed when BEMJSON is a result of 1st layer templates\n(like BEMTREE, priv.js) you can produce as much BEMJSON as is necessary. But with\ninitial development of a static web page, the JavaScript tricks help to avoid\ncopy-paste.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"We usually start developing a web site prototyping the interface and then\nimplementing HTML/CSS and bacis JavaScript. In case\nof using the full BEM stack a tranformation from prototype to a functioning web\nsite goes smoothly. You can clone the project from\n"},{type:"element",tagName:"a",properties:{href:"https://github.com/bem/project-stub"},children:[{type:"text",value:"project-stub"}]},{type:"text",value:" and create a static web page\nas it was "},{type:"element",tagName:"a",properties:{href:"http://bem.info/articles/start-with-project-stub/"},children:[{type:"text",value:"described\nearlier"}]},{type:"text",value:".\n"},{type:"element",tagName:"excerpt",properties:{},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Thanks to "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"BEMHTML"}]},{type:"text",value:" templates, you do not need write all the HTML manually.\nDescribing page sructure in "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"BEMJSON"}]},{type:"text",value:" rather than writing all the tags manually\nsaves time. But sometimes this is still a lot of work to do, especially for large\npages."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Luckily BEMJSON can include JavaScript pieces to produce some blocks dymamically.\nI created an example of such usage:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"js"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-js"]},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    block"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'page'"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"..."}]},{type:"text",value:"\n    content"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"..."}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n            block"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'content'"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n            content"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"function"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n                "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"var"}]},{type:"text",value:" res "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n                "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"for"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"var"}]},{type:"text",value:" i "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"0"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:" i "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"<"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"10"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:" i"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"++"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n                    res"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"push"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n                        block"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'button'"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n                        content"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'Button '"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"+"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"i "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"+"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","number"]},children:[{type:"text",value:"1"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n                    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n                "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n                "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" res"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n            "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"..."}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/varya/dynamic-bemjson/blob/master/desktop.bundles/page1/page1.bemjson.js"},children:[{type:"text",value:"full\ncode"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This JavaScript creates 10 "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"button"}]},{type:"text",value:" blocks when the page is being built with\n"},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"bem-tools"}]},{type:"text",value:".\nCheck the "},{type:"element",tagName:"a",properties:{href:"http://varya.me/dynamic-bemjson/desktop.bundles/page1/page1.html"},children:[{type:"text",value:"result\npage"}]},{type:"text",value:"\nto see them."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Another example is a "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"menu"}]},{type:"text",value:" block. Such interface pieces usually consist of a\nlot of items with minor differences which cases a lot of copy-paste on a page.\nWith JavaScript in BEMJSON this can be easily reduced."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"js"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-js"]},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    block"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'page'"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"..."}]},{type:"text",value:"\n    content"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"..."}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n            block"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'menu'"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n            content"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"["}]},{type:"text",value:"\n                "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n                    title"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'Index'"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n                    isSelected"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","boolean"]},children:[{type:"text",value:"false"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n                "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n                "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n                    title"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'Products'"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n                    isSelected"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","boolean"]},children:[{type:"text",value:"true"}]},{type:"text",value:"\n                "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n                "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n                    title"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'Contact'"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n                    isSelected"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","boolean"]},children:[{type:"text",value:"false"}]},{type:"text",value:"\n                "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n            "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"map"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"function"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"item"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n                "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"var"}]},{type:"text",value:" block "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n                    block"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'menu'"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n                    elem"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'item'"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n                    content"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" item"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"title"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n                    mods"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n                        selected"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" item"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"text",value:"isSelected\n                    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n                "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n                "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"return"}]},{type:"text",value:" block"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n            "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{
type:"text",value:"..."}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"]"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/varya/dynamic-bemjson/blob/master/desktop.bundles/page2/page2.bemjson.js"},children:[{type:"text",value:"full\ncode"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This gives a "},{type:"element",tagName:"a",properties:{href:"http://varya.me/dynamic-bemjson/desktop.bundles/page2/page2.html"},children:[{type:"text",value:"page with a menu of 3 items"}]},{type:"text",value:".\nThe bigger is the array of items, the more you save. Especially when the structure\nof every item changes while developing."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Indeed, this feature is not needed when BEMJSON is a result of 1st layer templates\n(like BEMTREE, priv.js) you can produce as much BEMJSON as is necessary. But with\ninitial development of a static web page, the JavaScript tricks help to avoid\ncopy-paste."}]}],data:{quirksMode:!1}},fields:{slug:"en/posts/javascript-in-bemjson/",prefix:"",disqusIdentifier:"en-issues-javascript-in-bemjson"},frontmatter:{title:"JavaScript in BEMJSON",subTitle:null,date:"21 January 2014",v2:null,old:!0,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"en/posts/javascript-in-bemjson/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/javascript-component-solutions/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/javascript-component-solutions/",prefix:"",lang:"en",disqusIdentifier:"en-issues-javascript-component-solutions",level:1},frontmatter:{title:"JavaScript components low basics",subTitle:null,v2:null,old:!0}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/image-diffs-with-git/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/image-diffs-with-git/",prefix:"",lang:"en",disqusIdentifier:"posts-image-diffs-with-git-index-en",level:1},frontmatter:{title:"Visual diffs for the images in a git repo",subTitle:null,v2:!0,old:null}}}}}});
//# sourceMappingURL=path---en-posts-javascript-in-bemjson-372dd360cdd6fbbf68eb.js.map