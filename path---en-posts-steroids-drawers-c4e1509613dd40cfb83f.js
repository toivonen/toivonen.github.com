webpackJsonp([0x743b0bce7110],{724:function(e,t){e.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/steroids-drawers/index_en.md absPath of file >>> MarkdownRemark",html:'<p>As a mobile apps user you may be already familiar to drawers.\nThey are quite popular solution for a side menu. Using <code class="language-text">Steroids</code>\nHTML5/JavaScript framework for hybrid mobile applications, you\ncan bring such an interface solution into your product very easy.\n<excerpt/></p>\n<p>The usage of drawers explained here is demonstrated in the <a href="https://github.com/AppGyver/kitchensink">Steroids\nKitchensink</a> open source application.\nThis is now being developed set of most useful examples for Steroids.\nAs the application is constantly changing, I will freeze the code examples\nat <a href="https://github.com/AppGyver/kitchensink/tree/ceacb0ea80799b1d81454e2e966b553b807fbadc">28 May 2014</a>.</p>\n<p>To explore the application in your mobile device or in a\nsimulator clone the repository and run the project. You may need some information\nabout how to start Steroids projects. That can be learned from tutorials:</p>\n<ul>\n<li><a href="https://academy.appgyver.com/categories/1-setup-and-getting-started/contents/1-installing-steroids">Installing\nSteroids</a></li>\n<li><a href="https://academy.appgyver.com/categories/1-setup-and-getting-started/contents/2-hello-world">Hello World application</a></li>\n</ul>\n<p>Or from my recent article about <a href="/en/posts/html5-mobile-app-width-native-ui/">HTML5 mobile apps with native UI on\nSteroids</a>.</p>\n<p>Once run the project you will see a page with a list of examples\nand a navigation bar.</p>\n<img class="article__image" src="http://img-fotki.yandex.ru/get/9652/14441195.32/0_8477d_3b6d66a5_L.png" width="282" height="500" border="0">\n<p>The button to teh left of a menu bar opens a side menu. But before we start to\nstudy side drawers let’s look at how this button is shown.</p>\n<p>The initial view is coded in <a href="https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/views/example/index.html"><code class="language-text">app/views/example/index.html</code></a>.\nThis is an angular view with directives for the list and for the navigation bar.</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ng-controller</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>IndexCtrl<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>navigation-bar</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Steroids Kitchensink<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>left-button</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/vendor/icons8/menu-32<span class="token punctuation">"</span></span>\n        <span class="token attr-name">onTap</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>showMenu()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>left-button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>navigation-bar</span><span class="token punctuation">></span></span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>The <code class="language-text">navigation-bar</code> directive is custom and described in <a href="https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/directives/navigationBar.coffee"><code class="language-text">app/directives/navigationBar.coffee</code></a>.\nUsing such a directive rather than <code class="language-text">steroids.view.navigationBar</code> helpers at every page is\nmore useful for the applications with many views.</p>\n<p>Indeed inside the directive the same helpers are used. But declaring navigation bar\ntitle and buttons in the view makes our programmers lifes a little bit\neasier.</p>\n<p>Here the navigation bar titled “Steroids Kitchensink” contains a “hamburger”\nmenu button which responds to the tapping with calling <code class="language-text">showMenu</code> methods of\nthe corresponding controller.</p>\n<p>This controller is coded in <a href="https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/controllers/example.coffee"><code class="language-text">app/controllers/example.coffee</code></a>.\nAs you can see, the <code class="language-text">showMenu</code> method is pretty short.</p>\n<div class="gatsby-highlight" data-language="coffee">\n      <pre class="language-coffee"><code class="language-coffee">$scope.showMenu = ()-&gt;\n  steroids.drawers.show {\n    edge: steroids.screen.edges.LEFT\n  }</code></pre>\n      </div>\n<p>It uses the drawers <code class="language-text">show</code> method and slide the initial view to\nthe right which uncovers the menu view.</p>\n<p>Of course, the code needs to know what is the view we mean by ‘left’.\nWe have to provide it with such a knowledge declaring the list of drawers\nin the <a href="https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/config/application.coffee#L39"><code class="language-text">config/application.coffee</code></a>\nconfiguration file.</p>\n<div class="gatsby-highlight" data-language="coffee">\n      <pre class="language-coffee"><code class="language-coffee">steroids.config.drawers =\n  left:\n    id: &quot;sidemenu&quot;\n    location: &quot;http://localhost/views/sidemenu/index.html&quot;\n    showOnAppLoad: false\n    widthOfDrawerInPixels: 250\n  options:\n    centerViewInteractionMode: &quot;Full&quot;\n    closeGestures: [&quot;PanNavBar&quot;, &quot;PanCenterView&quot;, &quot;TapCenterView&quot;]\n    openGestures: [&quot;PanNavBar&quot;, &quot;PanCenterView&quot;]\n    showShadow: true\n    stretchDrawer: true\n    widthOfLayerInPixels: 0</code></pre>\n      </div>\n<p>Here the menu view file and some parameters. You can learn about\nwhat they mean from a special tutorial about <a href="https://academy.appgyver.com/categories/3-user-interface-and-design/contents/98-configuring-drawers-on-app-load">configuring drawers</a>.</p>\n<p>This will make the sidemenu shown.</p>\n<img class="article__image" src="http://img-fotki.yandex.ru/get/9766/14441195.32/0_8477e_dbe7889e_L.png" width="282" height="500" border="0">\n<p>To make it look like in the picture you need to provide a\ncorresponding view with the list of menu items. Here it is defined\nin <a href="https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/views/sidemenu/index.html"><code class="language-text">app/views/sidemenu/index.html</code></a>.\nThis is pretty similar to the list of examples in the initial view. To make it function\nwe provide:</p>\n<ul>\n<li>a list of items and the corresponding view in <a href="https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/www/data/sidemenu.json"><code class="language-text">www/data/sidemenu.json</code></a>;</li>\n<li>data model in <a href="https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/models/sidemenu.js"><code class="language-text">app/models/sidemenu.js</code></a>;</li>\n<li>controller in <a href="https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/controllers/sidemenu.coffee"><code class="language-text">app/controllers/sidemenu.coffee</code></a>.</li>\n</ul>\n<p>From the drawers perspective the most important piece of code\nto study is the controller. It says to hide the opened drawer if you\ntap the currently active menu item. Opening other menu items goes\ndifferently; it replaces the current central view with some animation.</p>\n<div class="gatsby-highlight" data-language="coffee">\n      <pre class="language-coffee"><code class="language-coffee">if item.active\n  steroids.drawers.hide {}\nelse\n  webView = new steroids.views.WebView {\n    id: item.id,\n    location: item.url\n  }\n  steroids.drawers.hide {\n    center: webView\n  }</code></pre>\n      </div>\n<p>Hiding the currently opened drawer with <code class="language-text">steroids.drawers.hide</code> simply\ngets back the previously shown central view.</p>\n<p>If you want to show a different page, you would also use <code class="language-text">steroids.drawers.hide</code> but\nwith an additional <code class="language-text">center</code> parameter to pass the needed view. This view has to be\ncreated in advance with <code class="language-text">steroids.views.WebView</code>.</p>\n<p>Besides, such a view must be configured as preloaded in <a href="https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/config/application.coffee#L31"><code class="language-text">config/application.coffee</code></a>.</p>\n<div class="gatsby-highlight" data-language="coffee">\n      <pre class="language-coffee"><code class="language-coffee">steroids.config.preloads = [\n  {\n    id: &quot;settings&quot;\n    location: &quot;http://localhost/views/settings/index.html&quot;\n  }\n]</code></pre>\n      </div>\n<p>Thus, with tapping on the <em>Settings</em> menu item you will get the settings\npage shown.</p>\n<img class="article__image" src="http://img-fotki.yandex.ru/get/9667/14441195.32/0_8477f_2aafe347_L.png" width="282" height="500" border="0">\n<p>This page is empty yet. The upcoming posts will fill it in with something\ninteresting. Stay tuned :-)</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"As a mobile apps user you may be already familiar to drawers.\nThey are quite popular solution for a side menu. Using "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Steroids"}]},{type:"text",value:"\nHTML5/JavaScript framework for hybrid mobile applications, you\ncan bring such an interface solution into your product very easy.\n"},{type:"element",tagName:"excerpt",properties:{},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The usage of drawers explained here is demonstrated in the "},{type:"element",tagName:"a",properties:{href:"https://github.com/AppGyver/kitchensink"},children:[{type:"text",value:"Steroids\nKitchensink"}]},{type:"text",value:" open source application.\nThis is now being developed set of most useful examples for Steroids.\nAs the application is constantly changing, I will freeze the code examples\nat "},{type:"element",tagName:"a",properties:{href:"https://github.com/AppGyver/kitchensink/tree/ceacb0ea80799b1d81454e2e966b553b807fbadc"},children:[{type:"text",value:"28 May 2014"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"To explore the application in your mobile device or in a\nsimulator clone the repository and run the project. You may need some information\nabout how to start Steroids projects. That can be learned from tutorials:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://academy.appgyver.com/categories/1-setup-and-getting-started/contents/1-installing-steroids"},children:[{type:"text",value:"Installing\nSteroids"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"https://academy.appgyver.com/categories/1-setup-and-getting-started/contents/2-hello-world"},children:[{type:"text",value:"Hello World application"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Or from my recent article about "},{type:"element",tagName:"a",properties:{href:"/en/posts/html5-mobile-app-width-native-ui/"},children:[{type:"text",value:"HTML5 mobile apps with native UI on\nSteroids"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Once run the project you will see a page with a list of examples\nand a navigation bar."}]},{type:"text",value:"\n"},{type:"element",tagName:"img",properties:{className:["article__image"],src:"http://img-fotki.yandex.ru/get/9652/14441195.32/0_8477d_3b6d66a5_L.png",width:282,height:500,border:"0"},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The button to teh left of a menu bar opens a side menu. But before we start to\nstudy side drawers let’s look at how this button is shown."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The initial view is coded in "},{type:"element",tagName:"a",properties:{href:"https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/views/example/index.html"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"app/views/example/index.html"}]}]},{type:"text",value:".\nThis is an angular view with directives for the list and for the navigation bar."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"html"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-html"]},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"div"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","attr-name"]},children:[{type:"text",value:"ng-controller"}]},{type:"element",tagName:"span",properties:{className:["token","attr-value"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"="}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]},{type:"text",value:"IndexCtrl"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"navigation-bar"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","attr-name"]},children:[{type:"text",value:"title"}]},{type:"element",tagName:"span",properties:{className:["token","attr-value"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"="}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]},{type:"text",value:"Steroids Kitchensink"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"left-button"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","attr-name"]},children:[{type:"text",value:"icon"}]},{type:"element",tagName:"span",properties:{className:["token","attr-value"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"="}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]},{type:"text",value:"/vendor/icons8/menu-32"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]}]},{type:"text",value:"\n        "},{type:"element",tagName:"span",properties:{className:["token","attr-name"]},children:[{type:"text",value:"onTap"}]},{type:"element",tagName:"span",properties:{className:["token","attr-value"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"="}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]},{type:"text",value:"showMenu()"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"left-button"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"navigation-bar"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n  ...\n"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"div"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"navigation-bar"}]},{type:"text",value:" directive is custom and described in "},{type:"element",tagName:"a",properties:{href:"https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/directives/navigationBar.coffee"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"app/directives/navigationBar.coffee"}]}]},{type:"text",value:".\nUsing such a directive rather than "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"steroids.view.navigationBar"}]},{type:"text",value:" helpers at every page is\nmore useful for the applications with many views."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Indeed inside the directive the same helpers are used. But declaring navigation bar\ntitle and buttons in the view makes our programmers lifes a little bit\neasier."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Here the navigation bar titled “Steroids Kitchensink” contains a “hamburger”\nmenu button which responds to the tapping with calling "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"showMenu"}]},{type:"text",value:" methods of\nthe corresponding controller."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This controller is coded in "},{type:"element",tagName:"a",properties:{href:"https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/controllers/example.coffee"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"app/controllers/example.coffee"}]}]},{type:"text",value:".\nAs you can see, the "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"showMenu"}]},{type:"text",value:" method is pretty short."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"coffee"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-coffee"]},children:[{type:"element",tagName:"code",properties:{className:["language-coffee"]},children:[{type:"text",value:"$scope.showMenu = ()->\n  steroids.drawers.show {\n    edge: steroids.screen.edges.LEFT\n  }"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"It uses the drawers "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"show"}]},{type:"text",value:" method and slide the initial view to\nthe right which uncovers the menu view."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Of course, the code needs to know what is the view we mean by ‘left’.\nWe have to provide it with such a knowledge declaring the list of drawers\nin the "},{type:"element",tagName:"a",properties:{href:"https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/config/application.coffee#L39"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"config/application.coffee"}]}]},{type:"text",value:"\nconfiguration file."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"coffee"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-coffee"]},children:[{type:"element",tagName:"code",properties:{className:["language-coffee"]},children:[{type:"text",value:'steroids.config.drawers =\n  left:\n    id: "sidemenu"\n    location: "http://localhost/views/sidemenu/index.html"\n    showOnAppLoad: false\n    widthOfDrawerInPixels: 250\n  options:\n    centerViewInteractionMode: "Full"\n    closeGestures: ["PanNavBar", "PanCenterView", "TapCenterView"]\n    openGestures: ["PanNavBar", "PanCenterView"]\n    showShadow: true\n    stretchDrawer: true\n    widthOfLayerInPixels: 0'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Here the menu view file and some parameters. You can learn about\nwhat they mean from a special tutorial about "},{type:"element",tagName:"a",properties:{href:"https://academy.appgyver.com/categories/3-user-interface-and-design/contents/98-configuring-drawers-on-app-load"},children:[{type:"text",value:"configuring drawers"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This will make the sidemenu shown."}]},{type:"text",value:"\n"},{type:"element",tagName:"img",properties:{className:["article__image"],src:"http://img-fotki.yandex.ru/get/9766/14441195.32/0_8477e_dbe7889e_L.png",width:282,height:500,border:"0"},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"To make it look like in the picture you need to provide a\ncorresponding view with the list of menu items. Here it is defined\nin "},{type:"element",tagName:"a",properties:{href:"https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/views/sidemenu/index.html"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"app/views/sidemenu/index.html"}]}]},{type:"text",value:".\nThis is pretty similar to the list of examples in the initial view. To make it function\nwe provide:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"a list of items and the corresponding view in "},{type:"element",tagName:"a",properties:{href:"https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/www/data/sidemenu.json"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"www/data/sidemenu.json"}]}]},{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"data model in "},{type:"element",tagName:"a",properties:{href:"https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/models/sidemenu.js"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"app/models/sidemenu.js"}]}]},{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"controller in "},{type:"element",tagName:"a",properties:{href:"https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/app/controllers/sidemenu.coffee"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"app/controllers/sidemenu.coffee"}]}]},{type:"text",value:"."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"From the drawers perspective the most important piece of code\nto study is the controller. It says to hide the opened drawer if you\ntap the currently active menu item. Opening other menu items goes\ndifferently; it replaces the current central view with some animation."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"coffee"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-coffee"]},children:[{type:"element",tagName:"code",properties:{className:["language-coffee"]},children:[{type:"text",value:"if item.active\n  steroids.drawers.hide {}\nelse\n  webView = new steroids.views.WebView {\n    id: item.id,\n    location: item.url\n  }\n  steroids.drawers.hide {\n    center: webView\n  }"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Hiding the currently opened drawer with "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"steroids.drawers.hide"}]},{type:"text",value:" simply\ngets back the previously shown central view."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"If you want to show a different page, you would also use "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"steroids.drawers.hide"}]},{type:"text",value:" but\nwith an additional "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"center"}]},{type:"text",value:" parameter to pass the needed view. This view has to be\ncreated in advance with "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"steroids.views.WebView"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Besides, such a view must be configured as preloaded in "},{type:"element",tagName:"a",properties:{href:"https://github.com/AppGyver/kitchensink/blob/ceacb0ea80799b1d81454e2e966b553b807fbadc/config/application.coffee#L31"},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"config/application.coffee"}]}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"coffee"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-coffee"]},children:[{type:"element",tagName:"code",properties:{className:["language-coffee"]},children:[{type:"text",value:'steroids.config.preloads = [\n  {\n    id: "settings"\n    location: "http://localhost/views/settings/index.html"\n  }\n]'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Thus, with tapping on the "},{type:"element",tagName:"em",properties:{},children:[{type:"text",value:"Settings"}]},{type:"text",value:" menu item you will get the settings\npage shown."}]},{type:"text",value:"\n"},{type:"element",tagName:"img",properties:{className:["article__image"],src:"http://img-fotki.yandex.ru/get/9667/14441195.32/0_8477f_2aafe347_L.png",width:282,height:500,border:"0"},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"This page is empty yet. The upcoming posts will fill it in with something\ninteresting. Stay tuned :-)"}]}],data:{quirksMode:!1}},fields:{slug:"en/posts/steroids-drawers/",prefix:"",disqusIdentifier:"posts-steroids-drawers-index-en"},frontmatter:{title:"Using side drawers in mobile apps on Steroids.js",subTitle:null,date:"09 June 2014",v2:!0,old:null,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"en/posts/steroids-drawers/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/switching-to-bem-core-2/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/switching-to-bem-core-2/",prefix:"",lang:"en",disqusIdentifier:"en-issues-switching-to-bem-core-2",level:1},frontmatter:{title:"Switching to bem-core#v2",subTitle:null,v2:null,old:!0}},next:{
id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/scotland-css-and-js-2016/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/scotland-css-and-js-2016/",prefix:"",lang:"ru",disqusIdentifier:"posts-scotland-css-and-js-2016-index-ru",level:1},frontmatter:{title:"Конференции ScotlandCSS и ScotlandJS. Организация",subTitle:null,v2:!0,old:null}}}}}});
//# sourceMappingURL=path---en-posts-steroids-drawers-c4e1509613dd40cfb83f.js.map