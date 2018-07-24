webpackJsonp([0x63dc42a80c26],{586:function(n,s){n.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/best-way-to-hide/index_en.md absPath of file >>> MarkdownRemark",html:'<p>There is a well-known front-end pattern which is to have hidden elements in DOM\nand make them visible when necessary. As with any good pattern, it can be\ncompromised by wrong implementation.\n<excerpt/></p>\n<p>Most times, <strong>hidden</strong> means that the DOM element gets a <code class="language-text">display: none</code> property.\nThis approach has become even more widespread thanks to <code class="language-text">.hide()</code> and <code class="language-text">.show()</code> jQuery helpers.</p>\n<p>Whenever you need to hide a visible block you use the <code class="language-text">.hide()</code> helper which in\ncharge of assigning an inline <code class="language-text">display: none</code> style property, making the block\ninvisible. When it has to become visible again, the <code class="language-text">.show()</code> helper changes the\ninline CSS <code class="language-text">display</code> property.</p>\n<p>I believe this is a very nice example of wrong implementation.</p>\n<p>The solution unifies all the elements around the world and assumes all of them\ncan be hidden in the same way. But this assumption is far from reality.</p>\n<p>Let us say we have an element in a visible state. Guess what will happen when we\nuse <code class="language-text">.hide()</code> and <code class="language-text">.show()</code>?\nYes, an inline style with a <code class="language-text">display</code> property will be added.\nIn other words, the element will not return back to its original visible state.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.my-block\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// &lt;span class="my-block">..&lt;/span></span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.my-block\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// &lt;span class="my-block" style="display: none;">..&lt;/span></span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.my-block\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// &lt;span class="my-block" style="display: block;">..&lt;/span></span></code></pre>\n      </div>\n<p>jQuery is clever enough to detect inline elements. By applying <code class="language-text">.hide()</code> and\n<code class="language-text">.show()</code>, you get something like this:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.my-block\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// &lt;span class="my-block">...&lt;/span></span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.my-block\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// &lt;span class="my-block" style="display: none;">...&lt;/span></span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.my-block\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// &lt;span class="my-block" style="display: inline;">...&lt;/span></span></code></pre>\n      </div>\n<p>Again, the block did not <strong>return</strong> to its original state after being shown. For\nsure, it became visible, but this state is not equivalent to the original one.\nAny new CSS class appended to the element with an intention to change its\n<code class="language-text">display</code> property will not work as the inline style rule prevails.</p>\n<p>The other problem is that setting <code class="language-text">display</code> property to <code class="language-text">none</code> doesn’t always\nwork for making an element invisible. Maybe for some reason it has to be hidden\nfrom a user with <code class="language-text">left: -9999px</code>?</p>\n<p>It’s only the interface block implementation that should know about all the\nblock states, including the hidden one.</p>\n<p>Modifiers (no matter if you prefer <a href="http://smacss.com/">SMACCS</a>,\n<a href="http://oocss.org/">OOCSS</a> or <a href="http://bem.info/">BEM</a>) are designed to express\nstates of interface components. The same goes for the hidden state.</p>\n<p>Every block you would like to hide and show should be equipped with a proper\nmodifier:</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.my-block_hidden</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Then, by applying this modifier and removing it from a block you can be sure it\ntransitions into one of its predefined states:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.my-block\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// &lt;span class="my-block">...&lt;/span></span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.my-block\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">\'my-block_hidden\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// &lt;span class="my-block my-block_hidden">...&lt;/span></span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.my-block\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token string">\'my-block_hidden\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// &lt;span class="my-block">...&lt;/span></span></code></pre>\n      </div>\n<p>This enables you to provide any type of hiding, not necessarily <code class="language-text">display: none</code>,\nand ensures the block returns to its original visible state when shown again.</p>\n<p>If you prefer not to mess with all those <code class="language-text">.addClass()</code> and <code class="language-text">.removeClass()</code>\nhelpers, you can teach your JavaScript to work with modifiers (e.g. <a href="https://github.com/varya/bem-js-tutorial/blob/master/02-Modifiers.md">as\nBEM does\nit</a>) which\nwill make your code even better:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">$<span class="token punctuation">.</span><span class="token function">block</span><span class="token punctuation">(</span><span class="token string">\'my-block\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// &lt;span class="my-block">...&lt;/span></span>\n\n$<span class="token punctuation">.</span><span class="token function">block</span><span class="token punctuation">(</span><span class="token string">\'my-block\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setMod</span><span class="token punctuation">(</span><span class="token string">\'hidden\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// &lt;span class="my-block my-block_hidden">...&lt;/span></span>\n\n$<span class="token punctuation">.</span><span class="token function">block</span><span class="token punctuation">(</span><span class="token string">\'my-block\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delMod</span><span class="token punctuation">(</span><span class="token string">\'hidden\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// &lt;span class="my-block">...&lt;/span></span></code></pre>\n      </div>\n<p>That’s all. From now on you are not allowed to use <code class="language-text">.hide()</code> and <code class="language-text">.show()</code>.\nEven for prototyping :-)</p>',fields:{slug:"en/posts/best-way-to-hide/",prefix:"",disqusIdentifier:"en-issues-best-way-to-hide"},frontmatter:{title:"The Best Way to Hide",date:"31 October 2013",v2:null,old:!0,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"en/posts/best-way-to-hide/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/blocks-and-bundles/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/blocks-and-bundles/",prefix:"",lang:"en",disqusIdentifier:"en-issues-blocks-and-bundles"},frontmatter:{title:"Blocks are bricks, and bundles are buildings",old:!0}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/beml-html-preprocessor/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/beml-html-preprocessor/",prefix:"",lang:"en",disqusIdentifier:"en-issues-beml-html-preprocessor"},frontmatter:{title:"BEML - an HTML preprocessor for BEM",old:!0}}}}}});
//# sourceMappingURL=path---en-posts-best-way-to-hide-8427b6da9809280495f3.js.map