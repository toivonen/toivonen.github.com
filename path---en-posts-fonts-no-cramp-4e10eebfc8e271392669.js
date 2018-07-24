webpackJsonp([0xe1e1dfeb5230],{592:function(n,s){n.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/fonts-no-cramp/index_en.md absPath of file >>> MarkdownRemark",html:'<p>A developer using custom fonts in web (don’t say this is evil) usually face a\ndilemma.</p>\n<p>The users’ main interest is the content of the page not the\nview. It is nice to provide it as fast as possible and then apply a custom font.\nThis blog used to work this way. I provided a script among others in the bundle\nlinked by the end of the page.\n<excerpt/></p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n<span class="token keyword">function</span> <span class="token function">addFont</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> h<span class="token punctuation">,</span> l<span class="token punctuation">)</span> <span class="token punctuation">{</span>\nh <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">\'head\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nl <span class="token operator">=</span> d<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'link\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nl<span class="token punctuation">.</span>href <span class="token operator">=</span> url<span class="token punctuation">;</span>\nl<span class="token punctuation">.</span>rel <span class="token operator">=</span> <span class="token string">\'stylesheet\'</span><span class="token punctuation">;</span>\nh<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">addFont</span><span class="token punctuation">(</span><span class="token string">\'//fonts.googleapis.com/css?\'</span> <span class="token operator">+</span>\n<span class="token string">\'family=Noto+Serif&amp;subset=latin,cyrillic-ext,cyrillic\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>The drawback is obvious. Once a font is loaded and apllied, a user notice\ntwitching as a page is being re-rendering. It is recommended to define a\nsuitable system font in the <code class="language-text">font-face</code>. But there never is a good fit.\nOtherwise there was no need in a custom font.</p>\n<p>The only way to avoid the font rendering jerk is to provide the font in advance.\nWith inlining a base64 of a font into CSS and linking it in <code class="language-text">&lt;head&gt;</code> no\ntwitching is guaranteed as well as increasing page loading time.</p>\n<p>For a while I was deciding between the two variants until my colleague <a href="http://kizu.ru/en/">Roman\nKomarov aka kizu</a> suggested an elegant solution which is in\nuse right now.</p>\n<p>At the first time a user opens any page of this site, a CSS with the font is\nloaded and stored as a piece of text in the <code class="language-text">localStorage</code>.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>Storage<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">\'undefined\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">\'varya.me.fonts\'</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n        $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            url<span class="token punctuation">:</span> <span class="token string">\'../../data/fonts.css\'</span><span class="token punctuation">,</span>\n            success<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">\'varya.me.fonts\'</span><span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            dataType<span class="token punctuation">:</span> <span class="token string">\'text\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>But I do not apply this CSS after loading. So, not jerks. As request is only to\nfill up the storage, it goes after the <code class="language-text">domReady</code>.</p>\n<p>By the time of requesting the next page the custom font is already in the user’s\ncomputer. Checking that it is available I apply it to the page. The faster the\nbetter, and as the action costs almost nothing an inline <code class="language-text">&lt;head&gt;</code> script goes\nhere.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> s<span class="token punctuation">,</span> l<span class="token punctuation">,</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">\'undefined\'</span> <span class="token operator">&amp;&amp;</span> l<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">\'varya.me.fonts\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    r <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token string">\'&lt;style>\'</span><span class="token punctuation">,</span>\n        l<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">\'varya.me.fonts\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token string">\'&lt;/style>\'</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>r<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>document<span class="token punctuation">,</span> Storage<span class="token punctuation">,</span> localStorage<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>With that the blog looks as it should do with 2+ pages loaded. I consider this\nprice for no-twitching custom font as reasonable.</p>\n<p>Any ideas of making it even better?</p>',fields:{slug:"en/posts/fonts-no-cramp/",prefix:"",disqusIdentifier:"en-issues-fonts-no-cramp"},frontmatter:{title:"Custom fonts with no cramp",date:"26 November 2013",v2:null,old:!0,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"en/posts/fonts-no-cramp/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/html5-mobile-app-width-native-ui/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/html5-mobile-app-width-native-ui/",prefix:"",lang:"ru",disqusIdentifier:"posts-html5-mobile-app-width-native-ui-index-ru"},frontmatter:{title:"Мобильное приложение на HTML5 со штатным интерфейсом",old:null}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/frontend-babel-first-week/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/frontend-babel-first-week/",prefix:"",lang:"ru",disqusIdentifier:"posts-frontend-babel-first-week-index-ru"},frontmatter:{title:"Первая неделя Frontend Babel",old:null}}}}}});
//# sourceMappingURL=path---en-posts-fonts-no-cramp-4e10eebfc8e271392669.js.map