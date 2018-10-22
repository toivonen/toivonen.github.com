webpackJsonp([0x9b2d378d01ee],{723:function(e,t){e.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/react-hackathon-materials/index_en.md absPath of file >>> MarkdownRemark",html:'<p>Being a frontend developer these days means to learn the new things every day. We read articles and blog posts,\nexamine the changelogs, follow the Twitter announcements and participate in the GitHub discussions.\nThis helps to keep up.</p>\n<p>However,\nwhen it comes to something bigger, like the exploring of a new framework or an ecosystem, it is not enough.\nThe perfect solution is to organize a whole day hackathon for the developers in your company.\nAt SC5 online, we took this advantage mastering the React development. Few ecosystem components such as\nwebpack and redux came along.</p>\n<excerpt/>\n<p>The private companies have hard time to find an opportunity and organize such event.\nMoreover, the preparations for the hackathon consume a lot of resources. To ease the hardship, I’ve decided to share\nthe materials that I prepared for our event. The hackathon plan and the detailed description of slides are given below.\nhackathon. Below you can find the hackathon plan and the slides explained.</p>\n<p>It is the presentation that I used for a pre-coding section:\n<a href="http://varya.me/reactjs-hackathon/">varya.me/reactjs-hackathon</a>.</p>\n<p>At the moment, the slides were hosted online, and before starting I provided a short link to them.\nDuring the coding event, the developers need a bunch of online materials, including starting projects, documentation,\ntips and tricks. The links to these meterials were inserted in my presentation, and it was important to let the others\ncheck them out. Also, we had a special Slack channel where the links were shared one more time.</p>\n<p>The next slide showed the plan of event to the participants:</p>\n<ol>\n<li>About the event</li>\n<li>Choosing the projects</li>\n<li>Introduction to React</li>\n<li>Stub projects</li>\n<li>Linking UI libraries</li>\n<li>React Native</li>\n<li>Relay&#x26;GraphQL</li>\n<li>Coding</li>\n</ol>\n<p>The slides included everything listed besides the coding part, which was devoted directly to the development.\nAltogether, the presentation took about 50 minutes. This amount of time ensured that I made all the needed\nintroductions. Also, it was not too long to make people bored.</p>\n<p>On the next stage, I offered the applications that we could write using React during the event.</p>\n<p>Here are the listed options:</p>\n<ul>\n<li>Instagram-like</li>\n<li>Twitter dashboard</li>\n<li>Shopping list</li>\n<li><a href="http://kipp.is/map">Bars on map</a></li>\n<li><a href="https://claudiopro.github.io/2048-react/">2048</a></li>\n<li>Tetris</li>\n<li><a href="https://reake-react-snake.firebaseapp.com/">Snake game</a></li>\n<li>Your own idea</li>\n</ul>\n<p>I believe that the product goals should be defined at the start. It is especially important for the React hackathon.\nPeople start to think how they would code it in the way they are used to work. When it comes to React, they are\nimpressed by the elegance and easiness of the approach.</p>\n<p>After that, I provided the links to the official documentation and tutorials. It is evident that even whole day event\nis not sufficient to learn how to work with a new framework. However, it lets ignite an initial interest that can lead\nto the following independet research. A link to an interesting tutorial can be the first step.</p>\n<p>At the time of hackathon, some developers had a React experience, some have read the articles, and some at least heard\nabout the approach. The hackathon is not a ‘teach-you-how’ workshop but a collaborative and even team-building event.\nThis why I wanted all the people to be involved.</p>\n<p>When giving\na presentation, you can make a contact with the audience by asking the questions. Moreover, you can add the given\nanswers into the presentation on-the-go. One of my slides had the same a title as the famous Reddit’s question\n’<a href="https://www.reddit.com/r/javascript/comments/2uvz0x/whats_so_great_about_reactjs/">What is so great about React.js</a>’.\nI wrote the answers from the audience into a big textarea in the slide. It visualised the contribution that everyone\nmade in the introduction.</p>\n<p>When it came to the React buzz words, we had not a solo talk but a proper discussion.</p>\n<ul>\n<li>ES2015 (ES6)</li>\n<li>React</li>\n<li>webpack</li>\n<li>Flux / Redux</li>\n<li>Relay &#x26; GraphQL</li>\n</ul>\n<p>To save the developers’ time in the codung section, I gave the definitions and explanations in advance.\nAlso, the most of the applications usually start with cloning the starter project. In the hackathon, I aimed not to give\na fish but to teach how to fish. To do that, I provided the link to the starter kit search:\n<a href="http://andrewhfarmer.com/starter-project/">andrewhfarmer.com/starter-project</a>.</p>\n<p>However, we were limited in our time, so I explained some essentials and shortcuts for the efficient start.</p>\n<p>The top priority of the hackathon was diving into React ecosystem. The ultimate goal was to write an application\nusing ES2015 (aka ES6), build it with webpack and use Readux. However, it might have been too complicated for the\nReact beginners, and I did not want to exclude them.</p>\n<p>To ensure the inclusiveness, I recommended the simplest React starter kit. Many developers did not realise that they\ncan code React applications by linking two scripts hosted at CDN that is similar to write-on-jQuery approach.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://fb.me/react-0.14.7.js"</span>\n    integrity<span class="token operator">=</span><span class="token string">"sha384-xQae1pUPdAKUe0u0KUTNt09zzdwheX4VSUsV8vatqM+t6X7rta01qOzessL808ox"</span>\n    crossorigin<span class="token operator">=</span><span class="token string">"anonymous"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://fb.me/react-dom-0.14.7.js"</span>\n    integrity<span class="token operator">=</span><span class="token string">"sha384-A1t0GCrR06cTHvMjaxeSE8XOiz6j7NvWdmxhN/9z748wEvJTVk13Rr8gMzTUnd8G"</span>\n    crossorigin<span class="token operator">=</span><span class="token string">"anonymous"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></code></pre>\n      </div>\n<p>With these two scripts and a single one local JavaScript file, you can follow <a href="https://facebook.github.io/react/downloads.html">the official documentation</a>\nand start your React application right away.</p>\n<p>The other option is suited for those who are comfortable with builders and don’t want to dedicate their time\nfor sort out ES2015 and prefer plain JavaScript. When I’ve started with React, I dived deeply into the new\nthings. However it took some time, which is not availabe during the one day event.\nSo, ‘ES5 + builder’ solution is reasonable for the developers who want get their hands on React quickly.\nTo provide the different options, I gave the links to the other starter kits:</p>\n<ul>\n<li><a href="https://github.com/petehunt/ReactHack">with webpack</a></li>\n<li><a href="https://github.com/artyomtrityak/react-hackathon">with gulp</a></li>\n</ul>\n<p>The last stubs ‘ES2015 + webpack’ type. I’ve given two:</p>\n<ul>\n<li><a href="https://github.com/pheuter/essential-react">Essential</a></li>\n<li>\n<p><a href="https://github.com/varya/react-stub">varya/react-stub</a></p>\n<ul>\n<li>ES2015, BEM, PostCSS, webpack</li>\n</ul>\n</li>\n</ul>\n<p>Despite the existence of a good starter project Essential, I’ve created my own and recommended it.\nI keep it minimalistic, so there is no redux linking there. I believe that the first project is better without\nexessive complexity.</p>\n<p>One more reason to create my starter kit was to demonstrate the different UI libraries linked and used\nwithin the React project. Honestly, I don’t see any ideal solution for the React UI library yet.\nThe ecosystem misses a crucial part, but the existing libraries can help at the initial bootstrapping stage.\nMoreover, it provides a knowledge to use when it comes to building your own UI library for the React projects.</p>\n<ul>\n<li><a href="http://react-toolbox.com/#/">React ToolBox</a> -\n<a href="https://github.com/varya/react-stub/tree/with-react-toolbox">react-stub@with-react-toolbox</a></li>\n<li><a href="http://www.material-ui.com/#/">Material UI</a> -\n<a href="https://github.com/varya/react-stub/tree/with-material-ui">react-stub@with-material-ui</a></li>\n<li><a href="http://nikgraf.github.io/belle/#/?_k=xvldj2">Belle</a> -\n<a href="https://github.com/varya/react-stub/tree/with-belle">react-stub@with-belle</a></li>\n</ul>\n<p>To demonstrate how React works with UI libraries, I prepared a branch for each option. These branches\nare in the public GitHub repository and available for using. Also, I was able to run the code on my computer\nand show how the application changes after I alter the code.</p>\n<p>Live coding section always makes a good impression. Moreover, it connects the theory with actual coding.</p>\n<p>Before the development, I provided the dummy JSONs for the applications based on the\nthird-party services data (Instagram or Twitter). That helped the developers to be focused on React rather\nthan exploring APIs.</p>\n<p>During the hackathon, we had React Native and Relay &#x26; GraphQL sections for the advanced React users. These topics\nwere covered by my colleague <a href="https://fi.linkedin.com/in/anssiherranen">Anssi Herranen</a> and our quest <a href="https://fi.linkedin.com/in/freiksenet">Mikhail\nNovikov</a> from <a href="https://www.reindex.io/">Reindex</a>.</p>\n<p>After all the presentations, it was time to code. It is important that the hackathon organizers take care of the\ndevelopers’ basic needs and let the people be focused on the programming. I’m thankful for our Head of Technology\n<a href="https://fi.linkedin.com/in/laurisvan">Lauri Svan</a> for ordering pizza and drinks, and organizing the people.\nThe developers can stay active much longer if they are taken care.</p>\n<p>As a result of our hackathon, some developers came up with the applications and demostrated them in the demo part.\nThe others got stable base to continues their studies later. And no doubt we all had huge fun.</p>\n<p>Feel free to take my presentation and materials for a hackathon in your company or at the community meeting. React\nrocks! :-)</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Being a frontend developer these days means to learn the new things every day. We read articles and blog posts,\nexamine the changelogs, follow the Twitter announcements and participate in the GitHub discussions.\nThis helps to keep up."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"However,\nwhen it comes to something bigger, like the exploring of a new framework or an ecosystem, it is not enough.\nThe perfect solution is to organize a whole day hackathon for the developers in your company.\nAt SC5 online, we took this advantage mastering the React development. Few ecosystem components such as\nwebpack and redux came along."}]},{type:"text",value:"\n"},{type:"element",tagName:"excerpt",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The private companies have hard time to find an opportunity and organize such event.\nMoreover, the preparations for the hackathon consume a lot of resources. To ease the hardship, I’ve decided to share\nthe materials that I prepared for our event. The hackathon plan and the detailed description of slides are given below.\nhackathon. Below you can find the hackathon plan and the slides explained."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"It is the presentation that I used for a pre-coding section:\n"},{type:"element",tagName:"a",properties:{href:"http://varya.me/reactjs-hackathon/"},children:[{type:"text",value:"varya.me/reactjs-hackathon"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"At the moment, the slides were hosted online, and before starting I provided a short link to them.\nDuring the coding event, the developers need a bunch of online materials, including starting projects, documentation,\ntips and tricks. The links to these meterials were inserted in my presentation, and it was important to let the others\ncheck them out. Also, we had a special Slack channel where the links were shared one more time."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The next slide showed the plan of event to the participants:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ol",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"About the event"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Choosing the projects"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Introduction to React"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Stub projects"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Linking UI libraries"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"React Native"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Relay&GraphQL"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Coding"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The slides included everything listed besides the coding part, which was devoted directly to the development.\nAltogether, the presentation took about 50 minutes. This amount of time ensured that I made all the needed\nintroductions. Also, it was not too long to make people bored."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"On the next stage, I offered the applications that we could write using React during the event."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Here are the listed options:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Instagram-like"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Twitter dashboard"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Shopping list"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://kipp.is/map"},children:[{type:"text",value:"Bars on map"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://claudiopro.github.io/2048-react/"},children:[{type:"text",value:"2048"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Tetris"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://reake-react-snake.firebaseapp.com/"},children:[{type:"text",value:"Snake game"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Your own idea"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"I believe that the product goals should be defined at the start. It is especially important for the React hackathon.\nPeople start to think how they would code it in the way they are used to work. When it comes to React, they are\nimpressed by the elegance and easiness of the approach."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"After that, I provided the links to the official documentation and tutorials. It is evident that even whole day event\nis not sufficient to learn how to work with a new framework. However, it lets ignite an initial interest that can lead\nto the following independet research. A link to an interesting tutorial can be the first step."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"At the time of hackathon, some developers had a React experience, some have read the articles, and some at least heard\nabout the approach. The hackathon is not a ‘teach-you-how’ workshop but a collaborative and even team-building event.\nThis why I wanted all the people to be involved."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"When giving\na presentation, you can make a contact with the audience by asking the questions. Moreover, you can add the given\nanswers into the presentation on-the-go. One of my slides had the same a title as the famous Reddit’s question\n’"},{type:"element",tagName:"a",properties:{href:"https://www.reddit.com/r/javascript/comments/2uvz0x/whats_so_great_about_reactjs/"},children:[{type:"text",value:"What is so great about React.js"}]},{type:"text",value:"’.\nI wrote the answers from the audience into a big textarea in the slide. It visualised the contribution that everyone\nmade in the introduction."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"When it came to the React buzz words, we had not a solo talk but a proper discussion."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"ES2015 (ES6)"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"React"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"webpack"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Flux / Redux"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Relay & GraphQL"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"To save the developers’ time in the codung section, I gave the definitions and explanations in advance.\nAlso, the most of the applications usually start with cloning the starter project. In the hackathon, I aimed not to give\na fish but to teach how to fish. To do that, I provided the link to the starter kit search:\n"},{type:"element",tagName:"a",properties:{href:"http://andrewhfarmer.com/starter-project/"},children:[{type:"text",value:"andrewhfarmer.com/starter-project"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"However, we were limited in our time, so I explained some essentials and shortcuts for the efficient start."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The top priority of the hackathon was diving into React ecosystem. The ultimate goal was to write an application\nusing ES2015 (aka ES6), build it with webpack and use Readux. However, it might have been too complicated for the\nReact beginners, and I did not want to exclude them."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"To ensure the inclusiveness, I recommended the simplest React starter kit. Many developers did not realise that they\ncan code React applications by linking two scripts hosted at CDN that is similar to write-on-jQuery approach."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"js"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-js"]},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"<"}]},{type:"text",value:"script src"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"https://fb.me/react-0.14.7.js"'}]},{type:"text",value:"\n    integrity"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"sha384-xQae1pUPdAKUe0u0KUTNt09zzdwheX4VSUsV8vatqM+t6X7rta01qOzessL808ox"'}]},{type:"text",value:"\n    crossorigin"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"anonymous"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:">"}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"<"}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"/"}]},{type:"text",value:"script"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:">"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"<"}]},{type:"text",value:"script src"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"https://fb.me/react-dom-0.14.7.js"'}]},{type:"text",value:"\n    integrity"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"sha384-A1t0GCrR06cTHvMjaxeSE8XOiz6j7NvWdmxhN/9z748wEvJTVk13Rr8gMzTUnd8G"'}]},{type:"text",value:"\n    crossorigin"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"anonymous"'}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:">"}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"<"}]},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"/"}]},{type:"text",value:"script"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:">"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"With these two scripts and a single one local JavaScript file, you can follow "},{type:"element",tagName:"a",properties:{href:"https://facebook.github.io/react/downloads.html"},children:[{type:"text",value:"the official documentation"}]},{type:"text",value:"\nand start your React application right away."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The other option is suited for those who are comfortable with builders and don’t want to dedicate their time\nfor sort out ES2015 and prefer plain JavaScript. When I’ve started with React, I dived deeply into the new\nthings. However it took some time, which is not availabe during the one day event.\nSo, ‘ES5 + builder’ solution is reasonable for the developers who want get their hands on React quickly.\nTo provide the different options, I gave the links to the other starter kits:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/petehunt/ReactHack"},children:[{type:"text",value:"with webpack"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/artyomtrityak/react-hackathon"},children:[{type:"text",value:"with gulp"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The last stubs ‘ES2015 + webpack’ type. I’ve given two:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/pheuter/essential-react"},children:[{type:"text",value:"Essential"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://github.com/varya/react-stub"},children:[{type:"text",value:"varya/react-stub"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"ES2015, BEM, PostCSS, webpack"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Despite the existence of a good starter project Essential, I’ve created my own and recommended it.\nI keep it minimalistic, so there is no redux linking there. I believe that the first project is better without\nexessive complexity."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"One more reason to create my starter kit was to demonstrate the different UI libraries linked and used\nwithin the React project. Honestly, I don’t see any ideal solution for the React UI library yet.\nThe ecosystem misses a crucial part, but the existing libraries can help at the initial bootstrapping stage.\nMoreover, it provides a knowledge to use when it comes to building your own UI library for the React projects."}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://react-toolbox.com/#/"},children:[{type:"text",value:"React ToolBox"}]},{type:"text",value:" -\n"},{type:"element",tagName:"a",properties:{href:"https://github.com/varya/react-stub/tree/with-react-toolbox"},children:[{type:"text",value:"react-stub@with-react-toolbox"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://www.material-ui.com/#/"},children:[{type:"text",value:"Material UI"}]},{type:"text",value:" -\n"},{type:"element",tagName:"a",properties:{href:"https://github.com/varya/react-stub/tree/with-material-ui"},children:[{type:"text",value:"react-stub@with-material-ui"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"http://nikgraf.github.io/belle/#/?_k=xvldj2"},children:[{type:"text",value:"Belle"}]},{type:"text",value:" -\n"},{type:"element",tagName:"a",properties:{href:"https://github.com/varya/react-stub/tree/with-belle"},children:[{type:"text",value:"react-stub@with-belle"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"To demonstrate how React works with UI libraries, I prepared a branch for each option. These branches\nare in the public GitHub repository and available for using. Also, I was able to run the code on my computer\nand show how the application changes after I alter the code."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Live coding section always makes a good impression. Moreover, it connects the theory with actual coding."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Before the development, I provided the dummy JSONs for the applications based on the\nthird-party services data (Instagram or Twitter). That helped the developers to be focused on React rather\nthan exploring APIs."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"During the hackathon, we had React Native and Relay & GraphQL sections for the advanced React users. These topics\nwere covered by my colleague "},{type:"element",tagName:"a",properties:{href:"https://fi.linkedin.com/in/anssiherranen"},children:[{type:"text",value:"Anssi Herranen"}]},{type:"text",value:" and our quest "},{type:"element",tagName:"a",properties:{href:"https://fi.linkedin.com/in/freiksenet"},children:[{type:"text",value:"Mikhail\nNovikov"}]},{type:"text",value:" from "},{type:"element",tagName:"a",properties:{href:"https://www.reindex.io/"},children:[{type:"text",value:"Reindex"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"After all the presentations, it was time to code. It is important that the hackathon organizers take care of the\ndevelopers’ basic needs and let the people be focused on the programming. I’m thankful for our Head of Technology\n"},{type:"element",tagName:"a",properties:{href:"https://fi.linkedin.com/in/laurisvan"},children:[{type:"text",value:"Lauri Svan"}]},{type:"text",value:" for ordering pizza and drinks, and organizing the people.\nThe developers can stay active much longer if they are taken care."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"As a result of our hackathon, some developers came up with the applications and demostrated them in the demo part.\nThe others got stable base to continues their studies later. And no doubt we all had huge fun."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Feel free to take my presentation and materials for a hackathon in your company or at the community meeting. React\nrocks! :-)"}]}]}],data:{quirksMode:!1}},fields:{slug:"en/posts/react-hackathon-materials/",prefix:"",disqusIdentifier:"posts-react-hackathon-materials-index-en"},frontmatter:{title:"Materials for your React hackathon",subTitle:null,date:"16 April 2016",v2:!0,old:null,tumblr:null,meta:{desc:"Hackathon is a perfect solution for getting hands on React quickly. These materials ease the hardship of preparations. Take it to deliver a whole day hackathon into your company.\n"
},cover:{childImageSharp:{resize:{src:"/static/thumb-44157a8ee6ed1f55b18a51d30e9dd838-160fa.png"}}}}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"en/posts/react-hackathon-materials/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/run-app-in-time-on-mac/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/run-app-in-time-on-mac/",prefix:"",lang:"en",disqusIdentifier:"posts-run-app-in-time-on-mac-index-en",level:1},frontmatter:{title:"Run on time (about Mac applications)",subTitle:null,v2:!0,old:null}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/react-redux-simple-project/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/react-redux-simple-project/",prefix:"",lang:"en",disqusIdentifier:"posts-react-redux-simple-project-index-en",level:1},frontmatter:{title:"Simple yet promising structure for React/Redux project",subTitle:null,v2:!0,old:null}}}}}});
//# sourceMappingURL=path---en-posts-react-hackathon-materials-b435fec294d7d41bbbe9.js.map