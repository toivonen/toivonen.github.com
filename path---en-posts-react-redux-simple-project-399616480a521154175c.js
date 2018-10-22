webpackJsonp([0x8fea7530abf9],{606:function(e,t){e.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/react-redux-simple-project/index_en.md absPath of file >>> MarkdownRemark",html:'<p>Two weeks ago, I have started a new project of migrating a large website to React. Although this is not developing from\nscratch but refactoring, there still was a great chance to reconsider the project file structure in its client part.</p>\n<p>As a proof-of-concept, I have chosen a pair of components: shopping cart and adding button. This is e-commerce what we\nare building here :-) My initial goal was to create simple components and demonstrate their reusing as well as introduce\nRedux as a glue to the components in the data area. As a result, I think I provided a nice and neat structure which\nhelps a developer to understand what serves what. On the other hand, I tried to keep it simple. In the beginning, there\nis no need in overcomplicated.</p>\n<excerpt/>\nIn this post, I present the initial state of the project structure, extracted from the working repository. In our actual\nproject, it has already evolved to use other patterns and helping tools. I hope I will make it to present these changes\nin the following posts.\n<p>The demonstrative extract is a public repository at\n<a href="https://github.com/varya/react-redux-project">varya/react-redux-project</a>. To run it locally, you need to check it out\nrun <code class="language-text">npm install</code> and then <code class="language-text">npm start</code>. You will see a page, similar to what is <a href="http://varya.me/react-redux-project/index.html">hosted\nhere</a>.</p>\n<p>In this page, two React components are sharing one data store. You can see how the number in <code class="language-text">Cart</code> increments every\ntime you click a button.</p>\n<p>Now, let’s have a look at the project file structure. You will find all the source files in <code class="language-text">src</code> folder in the\nrepository:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">src/\n  components/\n    AddToCartButton/\n    Button/\n    Cart/\n    Icon/\n  containers/\n    AddToCartButton/\n  redux/\n    modules/\n      cart.js\n      reducer.js\n  index.js</code></pre>\n      </div>\n<p>The <code class="language-text">components</code> folder is dedicated for representative, “static” components. The components can reuse one another. For\nexample, in the project, the <code class="language-text">AddToCartButton</code> wraps the <code class="language-text">Button</code>.</p>\n<p>On the file system, each component is a folder. Inside there are usually <code class="language-text">index.js</code>, almost always <code class="language-text">style.css</code> and other\nfiles such as images if needed. I used to name the JavaScript file by the component name, like <code class="language-text">Button.js</code> and\n<code class="language-text">Button.css</code>. But in this\nproject, I tried more unified structure. It turned out to be very handy, especially in the beginning, when we make a lot\nof small components. Now the component folders can be copied and renamed easily.</p>\n<p>Next folder is named <code class="language-text">containers</code>. It is for the wrappers around the components. These wrappers often have the same\nnames. Unlike representative components, which only know about how to render the data, the containers are for getting\nthe data and passing it down. Technically the containers are also React components, but they are decorated with\n<code class="language-text">connect</code> from Redux. This provides the glue for view and data. You can see typical container here:\n<a href="https://github.com/varya/react-redux-project/blob/eb0e7a24ba8a723ce373d3763c299b95661fdfc6/src/containers/AddToCartButton/index.js">src/containers/AddToCartButton</a></p>\n<p>For the data, the containers use reducers from Redux. The project is made in a hope for future growing. This is why the\nreducers are divided into modules (meaning, separate files) according to what are the entities they operate with. They\nare stores in <a href="https://github.com/varya/react-redux-project/tree/master/src/redux/modules">src/modules</a> directory. It\nhas yet one module and the\n<a href="https://github.com/varya/react-redux-project/blob/master/src/redux/modules/reducer.js">src/modules/reducer.js</a> which\ncombines them all.</p>\n<p>Take a look at the module code.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> <span class="token constant">ADD</span> <span class="token operator">=</span> <span class="token string">\'cart/ADD\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span>\n  goods<span class="token punctuation">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">cart</span><span class="token punctuation">(</span>state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">switch</span> <span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token constant">ADD</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>state<span class="token punctuation">,</span>\n        goods<span class="token punctuation">:</span> <span class="token operator">++</span>state<span class="token punctuation">.</span>goods\n      <span class="token punctuation">}</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> <span class="token constant">ADD</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>This style of organizing reducers is called <a href="https://github.com/erikras/ducks-modular-redux">Ducks</a>.</p>\n<p>The entering file of the application <a href="https://github.com/varya/react-redux-project/blob/master/src/index.js">src/index.js</a>\ntakes the components or containers, makes the Redux store and creates the app with them. In here, you can also decorate\nrepresentative components with Redux’ <code class="language-text">connect</code> if they do not have a special container.</p>\n<p>As the following weeks showed, this structure turned out to be very convenient. Of course, it has evolved more. I hope\nto cover the changes in the next posts.</p>',fields:{slug:"en/posts/react-redux-simple-project/",prefix:"",disqusIdentifier:"posts-react-redux-simple-project-index-en"},frontmatter:{title:"Simple yet promising structure for React/Redux project",date:"21 November 2016",v2:!0,old:null,tumblr:null,meta:{desc:"Very simple React/Redux project structure with a lot of space for evolving into bigger but still neat project. This is an extract from real project of migrating large e-commerce website from old-school stack to modern cutting edge solutions.\n"},cover:{childImageSharp:{resize:{src:"/static/thumb-0f64a7e54ac619f71019bcf603d463fe-160fa.png"}}}}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"en/posts/react-redux-simple-project/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/run-app-in-time-on-mac/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/run-app-in-time-on-mac/",prefix:"",lang:"en",disqusIdentifier:"posts-run-app-in-time-on-mac-index-en"},frontmatter:{title:"Run on time (about Mac applications)"}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/bem-tools-100-alpha/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/issues/bem-tools-100-alpha/",prefix:"",lang:"ru",disqusIdentifier:"ru-issues-bem-tools-100-alpha"},frontmatter:{title:"Бложик на bem tools 1.0.0alpha"}}}}}});
//# sourceMappingURL=path---en-posts-react-redux-simple-project-399616480a521154175c.js.map