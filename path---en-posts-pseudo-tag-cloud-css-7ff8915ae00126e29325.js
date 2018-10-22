webpackJsonp([0xeaf4de5ac9bb],{603:function(n,s){n.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/pseudo-tag-cloud-css/index_en.md absPath of file >>> MarkdownRemark",html:'<p>Last week I faced a need to make a fake tag cloud, where the words need to be of different size. This was needed for\na presentation slide, and as my slides are always in HTML/CSS, must be implemented with these technologies. It is always\npossible to inject some JavaScript and code anything. But what about pure CSS, do we get random sizes there?</p>\n<excerpt/>\n<div class="testings" markdown="1">\n<ul class="cloud">\n<li>performance testing</li>\n<li>stress testing</li>\n<li>conformance testing</li>\n<li>acceptane testing</li>\n<li>smoke testing</li>\n<li>regression testing</li>\n<li>white box testing</li>\n<li>functional testing</li>\n<li>system testing</li>\n<li>black box testing</li>\n<li>load testing</li>\n<li>compatibility testing</li>\n<li>unit testing</li>\n</ul>\n</div>\n<style>\n.testings {\n    text-align: center;\n    width: 400px;\n}\n.testings .cloud {\n    display: inline;\n    list-style-type: none;\n    width: 400px;\n}\n.testings .cloud li {\n    list-style: none;\n    display: inline;\n}\n\n/* Random sizes */\n\n.testings .cloud li:nth-of-type(3n + 1) {\n    font-size: 1.25em;\n}\n.testings .cloud li:nth-of-type(4n+3) {\n    font-size: 1.5em;\n}\n.testings .cloud li:nth-of-type(5n - 3) {\n    font-size: 1em;\n}\n\n</style>\n<p>The tag cloud you see above is what I get. You may notice it’s not real random; after refreshing you will always get the\nsame result. But still looks like a tag cloud of different sizes and works perfectly as an example.</p>\n<p>This is a list, it’s easy to generate from markdown:</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cloud<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>performance testing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>stress testing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>conformance testing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>acceptane testing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>smoke testing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n    ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Then, flattened as usual:</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.cloud</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span>\n    <span class="token property">list-style-type</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.cloud li</span> <span class="token punctuation">{</span>\n    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> inline<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>And then different sizes are made with a few <code class="language-text">nth-of-type</code> combined in different variants:</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.cloud li:nth-of-type(3n + 1)</span> <span class="token punctuation">{</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.25em<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.cloud li:nth-of-type(4n+3)</span> <span class="token punctuation">{</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5em<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.cloud li:nth-of-type(5n - 3)</span> <span class="token punctuation">{</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>I tuned the <code class="language-text">nth-of-type</code> values so that it would look nicely. Depending on the length of the words used, you may need\nto play arownd with the values and maybe use more than 3 sizes.</p>',fields:{slug:"en/posts/pseudo-tag-cloud-css/",prefix:"",disqusIdentifier:"posts-pseudo-tag-cloud-css-index-en"},frontmatter:{title:"Tag cloud of random sizes in pure CSS",date:"02 November 2015",v2:!0,old:null,tumblr:null,meta:{desc:"Tag cloud of different with random sizes of the words with pure CSS.\n"},cover:{childImageSharp:{resize:{src:"/static/thumb-56dd12d33db3da0cf256e530f31c2600-160fa.png"}}}}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"en/posts/pseudo-tag-cloud-css/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/react-angular-project/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/react-angular-project/",prefix:"",lang:"en",disqusIdentifier:"posts-react-angular-project-index-en"},frontmatter:{title:"Simple React Angular project"}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/patterned-triangle/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/patterned-triangle/",prefix:"",lang:"en",disqusIdentifier:"en-posts-patterned-triangle"},frontmatter:{title:"Patterned triangles with  CSS"}}}}}});
//# sourceMappingURL=path---en-posts-pseudo-tag-cloud-css-7ff8915ae00126e29325.js.map