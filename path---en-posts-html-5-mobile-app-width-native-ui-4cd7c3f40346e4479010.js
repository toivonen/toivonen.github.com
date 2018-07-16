webpackJsonp([0x9af0852e8a5],{576:function(n,a){n.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/html5-mobile-app-width-native-ui/index_en.md absPath of file >>> MarkdownRemark",html:'<p>Recently I attended <a href="http://2014.front-trends.com/">Front Trends 2014</a> in Warsaw.\nThis is an awesome conference which you should (no, definitely have to!) attend\nin 2015. Besides incredible main programm Front Trends provides a set of Lighting Talks.\nThis year I was a part of it presenting <a href="http://www.appgyver.com/steroids">Steroids</a>,\na framework and a toolkit for developing HTML5 mobile apps. If you did not have\na chance to hear it, this offline text presentation is for you.<excerpt/></p>\n<div class="slide">\n  <iframe class="slide__frame" scrolling="no"\n    src="http://varya.me/start-with-steroids/?full#Cover">\n  </iframe>\n</div>\n<p>Being an absolute newbie in developing mobile apps I decided to showcase\nSteroids because it enables me to create pretty native-looking application\nand smoothly go through the developing and releasing flow in a few minutes.</p>\n<div class="slide">\n  <iframe class="slide__frame" scrolling="no"\n    src="http://varya.me/start-with-steroids/?full#summary">\n  </iframe>\n</div>\n<p>The Steroids toolkit is a CLI; it brings Steroids JavaScript framewrok into\nyour project and takes care of building an app, developing flow, debugging\nand releasing. It is based on NodeJs, so you have to have it installed.</p>\n<div class="slide">\n  <iframe class="slide__frame" scrolling="no"\n    src="http://varya.me/start-with-steroids/?full#3">\n  </iframe>\n</div>\n<p>The required version for now is <code class="language-text">0.10.25</code>. Follow the <a href="http://academy.appgyver.com/categories/1/contents/1">Installation and Setup\nGuide</a>.</p>\n<div class="slide">\n  <iframe class="slide__frame" scrolling="no"\n    src="http://varya.me/start-with-steroids/?full#4">\n  </iframe>\n</div>\n<p>Your very first start would be creating a project using <code class="language-text">steroids create</code>\ncommand. Then, typing <code class="language-text">steroids connect --watch</code> in the gotten project\nfolder launches steroids process. The <code class="language-text">--watch</code> flag as you can guess tells\nSteroids to watch over the file changes, rebuild the app and push the results\nto the connected devices.</p>\n<p>You can connect a physical smartphone to the project. After running\n<code class="language-text">steroids connect</code> you get a web page with a QR code opened in your browser.\nUse <code class="language-text">AppGyver Scanner</code> to read this QR code, it will bring the application\ninto your phone and keep it connected.</p>\n<div style="text-align:center;">\n<a href="https://itunes.apple.com/us/app/appgyver-scanner/id575076515?mt=8" target="_blank"><img alt="Appstore" class="appstore_icon" src="https://share.appgyver.com/assets/appstore-df950585b54bd081a7826913fc715cd4.png"></a>\n<a href="https://play.google.com/store/apps/details?id=com.appgyver.android&amp;feature=nav_result#?t=W251bGwsMSwxLDMsImNvbS5hcHBneXZlci5hbmRyb2lkIl0." target="_blank"><img alt="Googleplay" class="appstore_icon" src="https://share.appgyver.com/assets/googleplay-2cef882d62e402fbdbfe8cdac5794069.png"></a>\n</div>\n<p>Another way to watch the app is to bring it into a desktop simulator.\nTo do this, type <code class="language-text">simulator</code> in the terminal wich launched\n<code class="language-text">steroids connect</code>.</p>\n<p>You can change the application source files. E.g. edit a text\nin <code class="language-text">www/index.html</code> and make sure that the app in the connected device\nor in the simulator has been changed.</p>\n<p>To provide more powerful changes you can learn from the examples\nand tutorials. Run <code class="language-text">steroids generate</code> command and get the relevant\ncode.</p>\n<div class="slide">\n  <iframe class="slide__frame" scrolling="no"\n    src="http://varya.me/start-with-steroids/?full#5">\n  </iframe>\n</div>\n<p>You can learn from this code examples, from <a href="http://academy.appgyver.com/">tutorials</a>\nand <a href="http://docs.appgyver.com/en/stable/index.html">API Docs</a>.\nBelow I demonstrated some of the features which enable\nto use <em>native UI</em>.</p>\n<div class="slide">\n  <iframe class="slide__frame" scrolling="no"\n    src="http://varya.me/start-with-steroids/?full#examples-list">\n  </iframe>\n</div>\n<p>Let us start with showing the native tabs.</p>\n<div class="slide">\n  <iframe class="slide__frame" scrolling="no"\n    src="http://varya.me/start-with-steroids/?full#7">\n  </iframe>\n</div>\n<p>In the <code class="language-text">config/application.coffee</code> file you can find a commented\nexample of defining a list of tabs with their icons and\nlocations (URLs) they lead to.</p>\n<p>In my application I created 3 tabs. They are for</p>\n<ul>\n<li>index.html</li>\n<li>notificationExample.html</li>\n<li>knowledge.html</li>\n</ul>\n<div class="gatsby-highlight" data-language="coffee">\n      <pre class="language-coffee"><code class="language-coffee">steroids.config.tabBar.enabled = true\nsteroids.config.tabBar.tabs = [\n  {\n    title: &quot;Index&quot;\n    icon: &quot;icons/pill@2x.png&quot;\n    location: &quot;http://localhost/index.html&quot;\n  },\n  {\n    title: &quot;Notifications&quot;\n    icon: &quot;icons/bell.png&quot;\n    location: &quot;http://localhost/notificationExample.html&quot;\n  },\n  {\n    title: &quot;Knowledge base&quot;\n    icon: &quot;icons/coding.png&quot;\n    location: &quot;http://localhost/knowledge.html&quot;\n  }\n]</code></pre>\n      </div>\n<p>Place the pages into <code class="language-text">www</code> directory and keep them empty yet.\nDo not forget the icons. You can borrow the whole <a href="https://github.com/varya/steroids-fronttrends2014/tree/master/www/icons">icon\nfolder</a>.</p>\n<p>After making the change wait for rebuild and check.</p>\n<div style="text-align:center;">\n<img src="http://img-fotki.yandex.ru/get/9088/14441195.32/0_84262_ae854cb8_orig.png" width="340" height="89" border="0" title="" alt="">\n</div>\n<p>Next, we can play with notifications.</p>\n<div class="slide">\n  <iframe class="slide__frame" scrolling="no"\n    src="http://varya.me/start-with-steroids/?full#8">\n  </iframe>\n</div>\n<p>Place these buttons inside the <code class="language-text">&lt;body&gt;</code> container of the\n<code class="language-text">www/notificationExample.html</code> file.</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>\n  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button button-block<span class="token punctuation">"</span></span>\n  <span class="token attr-name">ontouchend</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>showAlert()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show alert dialogue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>\n  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button button-block<span class="token punctuation">"</span></span>\n  <span class="token attr-name">ontouchend</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>showConfirm()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show confirm dialogue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>\n  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button button-block<span class="token punctuation">"</span></span>\n  <span class="token attr-name">ontouchend</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>showPrompt()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Show prompt dialogue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>\n  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button button-block<span class="token punctuation">"</span></span>\n  <span class="token attr-name">ontouchend</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vibrate()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vibrate the device<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>As you can see, they run different JavaScript functions on\ntouch. To finish the page you need to define these functions\nin the <code class="language-text">&lt;head&gt;</code> or linked <code class="language-text">*.js</code> file. Each function demonstrates\na kind of notification which are:</p>\n<ul>\n<li><code class="language-text">navigator.notification.alert</code></li>\n<li><code class="language-text">navigator.notification.confirm</code></li>\n<li><code class="language-text">navigator.notification.prompt</code></li>\n<li><code class="language-text">navigator.notification.vibrate</code></li>\n</ul>\n<p>Borrow the JavaScript code from <a href="https://github.com/varya/steroids-fronttrends2014/blob/master/www/notificationExample.html#L15">my repo</a>.</p>\n<p>Now you can navigate to this page using the tabs and try\neach type of notification with tapping.</p>\n<p>Another native element could be a button in the application navigation\nbar.</p>\n<div class="slide">\n  <iframe class="slide__frame" scrolling="no"\n    src="http://varya.me/start-with-steroids/?full#9">\n  </iframe>\n</div>\n<p>The navigation bar can be modified with JavaScript on Steroids.\nIf you want it to be the same across all the application pages,\nprovide this JavaScript in the <code class="language-text">www/javascripts/application.js</code> file\nwhich is linked to all the <code class="language-text">*.html</code> files.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">var</span> loginButton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">steroids<span class="token punctuation">.</span>buttons<span class="token punctuation">.</span>NavigationBarButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nloginButton<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">"the Button"</span><span class="token punctuation">;</span>\n\nloginButton<span class="token punctuation">.</span><span class="token function-variable function">onTap</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    navigator<span class="token punctuation">.</span>notification<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span>\n        <span class="token string">\'You tapped the button!\'</span><span class="token punctuation">,</span>\n        <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token string">\'the Alert\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'I did!\'</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nsteroids<span class="token punctuation">.</span>view<span class="token punctuation">.</span>navigationBar<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    buttons<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      right<span class="token punctuation">:</span> <span class="token punctuation">[</span>loginButton<span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>This will bring the button to the right side of the\nnavigation bar. Tapping on it you can see a notification; one\nof those you studied recently.</p>\n<div style="text-align:center;">\n<img src="http://img-fotki.yandex.ru/get/9115/14441195.32/0_84264_7f27d435_L.png" width="282" height="500" border="0" title="" alt="">\n</div>\n<p>The last of native UI examples in this app is showing\nmodal views.</p>\n<div class="slide">\n  <iframe class="slide__frame" scrolling="no"\n    src="http://varya.me/start-with-steroids/?full#10">\n  </iframe>\n</div>\n<p>Add this button into <code class="language-text">www/index.html</code>:</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>\n  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button button-block<span class="token punctuation">"</span></span>\n  <span class="token attr-name">ontouchend</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>showModal()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Open modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>And code <code class="language-text">showModal</code> method to open a view as a modal.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">function</span> <span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> webView <span class="token operator">=</span>\n    <span class="token keyword">new</span> <span class="token class-name">steroids<span class="token punctuation">.</span>views<span class="token punctuation">.</span>WebView</span><span class="token punctuation">(</span><span class="token string">"/views/modalExample/show.html"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  steroids<span class="token punctuation">.</span>modal<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>webView<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The related view is a piece of html, which you should place into\n<code class="language-text">app/views/modalExample/show.html</code>. BTW, it has to have an interface\nelement closing the view. To make the process faster, pick up the\n<a href="https://github.com/varya/steroids-fronttrends2014/blob/master/app/views/modalExample/show.html">code from the application repo</a>.</p>\n<p>With this and <a href="http://docs.appgyver.com/en/stable/steroids_Steroids%20Native%20UI_index.md.html#Steroids%C2%A0Native%C2%A0UI">other UI features</a>\nyou can build a mobile interface which looks absolutely native for a\ndevice where you application runs.</p>\n<p>Once finished coding (or even in process) you may need to show the\napplication to your friend, client or Mom.</p>\n<div class="slide">\n  <iframe class="slide__frame" scrolling="no"\n    src="http://varya.me/start-with-steroids/?full#sharing">\n  </iframe>\n</div>\n<p>You can use the QR code from the beginning of our session which can\nbring your application to any any device directly from your computer.\nHowever this only will work if them both are connected to the same\nnetwork.</p>\n<p>If you want to share with someone remotely, deploy your app into the cloud.\nThe <code class="language-text">steroids deploy</code> command serves for it. As a result you get\na page (also with a QR code) which can be scanned with AppGyver Scaner on\na phone and thus your pal get the same app from the cloud.</p>\n<p>All your applications in the cloud can be shared, tuned and built with\nweb interface at <a href="https://cloud.appgyver.com/applications">cloud.appgyver.com</a>.</p>\n<p>From there you also push the app into AppStore and GooglePlay.</p>\n<div style="text-align:center;">\n<img src="http://img-fotki.yandex.ru/get/9062/14441195.32/0_84265_d03d686e_orig.png" width="500" height="327" border="0" title="" alt="">\n</div>\n<p>This is easy. As easy that a newbie can develop an app in a few minutes\nand show you the how-to.</p>\n<div class="slide">\n  <iframe class="slide__frame" scrolling="no"\n    src="http://varya.me/start-with-steroids/?full#links">\n  </iframe>\n</div>\n<p>You can learn more about Steroids and Cordova (Steroids is based on PhoneGap)\nat the <a href="http://academy.appgyver.com/">AppGyver Academy</a> where you find:</p>\n<ul>\n<li>detailed tutorials,</li>\n<li>documentation,</li>\n<li>big community of devs.</li>\n</ul>\n<p>And, of course, you can read <a href="/en/posts/">this blog</a>. I promise to share my next findings\nregarding Steroids soon :-)</p>',fields:{slug:"en/posts/html5-mobile-app-width-native-ui/",prefix:"",disqusIdentifier:"posts-html5-mobile-app-width-native-ui-index-en"},frontmatter:{title:"HTML5 mobile apps with native UI on Steroids",date:"26 May 2014",v2:!0,old:null,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"en/posts/html5-mobile-app-width-native-ui/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/image-diffs-with-git/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/image-diffs-with-git/",prefix:"",lang:"en",disqusIdentifier:"posts-image-diffs-with-git-index-en"},frontmatter:{title:"Visual diffs for the images in a git repo"}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/html5-mobile-app-width-native-ui/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/html5-mobile-app-width-native-ui/",prefix:"",lang:"ru",disqusIdentifier:"posts-html5-mobile-app-width-native-ui-index-ru"},frontmatter:{title:"Мобильное приложение на HTML5 со штатным интерфейсом"}}}}}});
//# sourceMappingURL=path---en-posts-html-5-mobile-app-width-native-ui-4cd7c3f40346e4479010.js.map