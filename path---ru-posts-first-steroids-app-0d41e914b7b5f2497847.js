webpackJsonp([0x88c222cc3714],{694:function(e,t){e.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/first-steroids-app/index_ru.md absPath of file >>> MarkdownRemark",html:'<p>На днях я написала своё первое мобильное приложение. Суммарно это заняло всего\nпару часов, и всё благодаря фреймворку\n<a href="http://www.appgyver.com/steroids">Steroids</a> от AppGyver. С его помощью делать\nгибридные приложения (это когда HTML5/JavaScript внутри) очень легко, а\nинструменты <code class="language-text">Steroids</code> позволяют легко деплоить приложение и делиться им с\nдрузьями.<excerpt/></p>\n<h3>Легко посмотреть приложение</h3>\n<p>Приложение у меня пока “игрушечное” — это всего одна страница, где озвучены\nслучайные числительные на финском языке.</p>\n<div style="text-align:center;">\n<img src="http://img-fotki.yandex.ru/get/9827/14441195.30/0_81ae7_60ff43b1_L.png" width="282" height="500" title="" alt="" border="0">\n</div>\n<p>Сейчас увидеть работающее приложение в телефоне можно только через <code class="language-text">Appgyver\nScaner</code> — вспомогательную программу для обмена Steroids-based мобильными\nприложениями до релиза. Поставьте сейчас, чтобы позже загрузить моё приложение:</p>\n<div style="text-align:center;">\n<a href="https://itunes.apple.com/us/app/appgyver-scanner/id575076515?mt=8" target="_blank"><img alt="Appstore" class="appstore_icon" src="https://share.appgyver.com/assets/appstore-df950585b54bd081a7826913fc715cd4.png"></a>\n<a href="https://play.google.com/store/apps/details?id=com.appgyver.android&amp;feature=nav_result#?t=W251bGwsMSwxLDMsImNvbS5hcHBneXZlci5hbmRyb2lkIl0." target="_blank"><img alt="Googleplay" class="appstore_icon" src="https://share.appgyver.com/assets/googleplay-2cef882d62e402fbdbfe8cdac5794069.png"></a>\n</div>\n<p>Теперь вы можете открыть в компьютере эту\n<a href="http://bit.ly/finnish-counting-001">страницу с QR-кодом</a>. Отсканируйте QR-код\nпри помощи\nсвежеустановленного AppGyver Scaner, и моё приложение загрузится к вам в\nтелефон.</p>\n<p>Я сознательно не релизила пока приложение. Во-первых, оно ещё сырое. А\nво-вторых, хочу, чтобы вы увидели как легко поделиться готовящимся\nприложением с другими, причем на любом этапе разработки.</p>\n<h3>Запустить dev-версию</h3>\n<p>Код приложения открытый, хостится на Github:\n<a href="https://github.com/varya/finnish-counting">varya/finnish-counting</a>. Чтобы\nразвернуть проект у себя на машине, понадобится npm-пакет <code class="language-text">steroids</code>:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">npm install steroids -g</code></pre>\n      </div>\n<p>Если до этого npm-пакеты на машину не устанавливались, то придется пройти через\nвсе шаги <a href="http://academy.appgyver.com/categories/1/contents/1">инструкции по\nустановке</a>.</p>\n<p>Затем нужно склонировать код проекта и установить зависимости:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">git clone git@github.com:varya/finnish-counting.git -b develop\ncd finnish-counting\nnpm install</code></pre>\n      </div>\n<p>Для начала работы с проектом запускаем</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">steroids connect --watch</code></pre>\n      </div>\n<p>Ключ <code class="language-text">--watch</code> нужен для отслеживания изменений и перезагрузки приложения.</p>\n<p>После запуска этой команды в браузере откроется страница с QR-кодом.\nОтсканировав QR-код всё тем же AppGyver Scaner, вы получите приложение прямо в\nтелефоне. Только имейте в виду, что телефон и компьютер должны находиться в\nодной сети. При каждой редакции кода приложение будет обновляться – очень\nудобно, особенно если работаешь над внешним видом интерфейса.</p>\n<p>Если телефона под рукой нет, можно открыть приложение на макет в iOS simulator.\nДля этого в терминале с запущенным <code class="language-text">steroids</code> нужно просто написать</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">simulator</code></pre>\n      </div>\n<h3>Что писать?</h3>\n<p>Основной код приложения находится в\n<a href="https://github.com/varya/finnish-counting/blob/vesions/0.0.1/www/javascripts/application.js">www/application.js</a>.\nОно ещё маленькое и не использует все возможности Steroids. Но уже очевидно, что\nкогда страниц станет больше, мне понадобится <a href="http://docs.appgyver.com/en/edge/steroids_Steroids%20Native%20UI_index.md.html#Steroids%C2%A0Native%C2%A0UI">Steroids Native\nUI</a>.</p>\n<p>Другие возможности фреймворка такие как удобное обращение к камере, файловой\nсистеме телефона, нотификациям — хорошо задокументированы на страницах <a href="http://docs.appgyver.com/en/edge/index.html">API\nDocs</a>. Там же есть примеры\nиспользования <code class="language-text">Cordova API</code> — именно с его помощью в моём приложении\nпроигрывается звук.</p>\n<p>Новые приложения появляются каждый день, можно релизить и хвастаться в <a href="http://x.appgyver.com/xapps">AppGyver\nApps Gallery</a>. Только успевай с идеями: я вот\nхотела написать мобильный аналог игры 2048, а он уже там есть. Значит, буду\nразвивать свою «считалку» :-)</p>\n<p>Кстати, у кого есть телефон на Андроиде — проверьте, скачивается у вас моё\nприложение, работает ли? Я пока могу проверить только на iOS, а одно из\nпреимуществ приложений на Steroids — то, что они кросс-платформенные, с\nнативными фичами для каждой платформы, конечно.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"На днях я написала своё первое мобильное приложение. Суммарно это заняло всего\nпару часов, и всё благодаря фреймворку\n"},{type:"element",tagName:"a",properties:{href:"http://www.appgyver.com/steroids"},children:[{type:"text",value:"Steroids"}]},{type:"text",value:" от AppGyver. С его помощью делать\nгибридные приложения (это когда HTML5/JavaScript внутри) очень легко, а\nинструменты "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Steroids"}]},{type:"text",value:" позволяют легко деплоить приложение и делиться им с\nдрузьями."},{type:"element",tagName:"excerpt",properties:{},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Легко посмотреть приложение"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Приложение у меня пока “игрушечное” — это всего одна страница, где озвучены\nслучайные числительные на финском языке."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{style:"text-align:center;"},children:[{type:"text",value:"\n"},{type:"element",tagName:"img",properties:{src:"http://img-fotki.yandex.ru/get/9827/14441195.30/0_81ae7_60ff43b1_L.png",width:282,height:500,title:"",alt:"",border:"0"},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Сейчас увидеть работающее приложение в телефоне можно только через "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Appgyver\nScaner"}]},{type:"text",value:" — вспомогательную программу для обмена Steroids-based мобильными\nприложениями до релиза. Поставьте сейчас, чтобы позже загрузить моё приложение:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{style:"text-align:center;"},children:[{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"https://itunes.apple.com/us/app/appgyver-scanner/id575076515?mt=8",target:"_blank"},children:[{type:"element",tagName:"img",properties:{alt:"Appstore",className:["appstore_icon"],src:"https://share.appgyver.com/assets/appstore-df950585b54bd081a7826913fc715cd4.png"},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"a",properties:{href:"https://play.google.com/store/apps/details?id=com.appgyver.android&feature=nav_result#?t=W251bGwsMSwxLDMsImNvbS5hcHBneXZlci5hbmRyb2lkIl0.",target:"_blank"},children:[{type:"element",tagName:"img",properties:{alt:"Googleplay",className:["appstore_icon"],src:"https://share.appgyver.com/assets/googleplay-2cef882d62e402fbdbfe8cdac5794069.png"},children:[]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Теперь вы можете открыть в компьютере эту\n"},{type:"element",tagName:"a",properties:{href:"http://bit.ly/finnish-counting-001"},children:[{type:"text",value:"страницу с QR-кодом"}]},{type:"text",value:". Отсканируйте QR-код\nпри помощи\nсвежеустановленного AppGyver Scaner, и моё приложение загрузится к вам в\nтелефон."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Я сознательно не релизила пока приложение. Во-первых, оно ещё сырое. А\nво-вторых, хочу, чтобы вы увидели как легко поделиться готовящимся\nприложением с другими, причем на любом этапе разработки."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Запустить dev-версию"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Код приложения открытый, хостится на Github:\n"},{type:"element",tagName:"a",properties:{href:"https://github.com/varya/finnish-counting"},children:[{type:"text",value:"varya/finnish-counting"}]},{type:"text",value:". Чтобы\nразвернуть проект у себя на машине, понадобится npm-пакет "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"steroids"}]},{type:"text",value:":"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"npm install steroids -g"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Если до этого npm-пакеты на машину не устанавливались, то придется пройти через\nвсе шаги "},{type:"element",tagName:"a",properties:{href:"http://academy.appgyver.com/categories/1/contents/1"},children:[{type:"text",value:"инструкции по\nустановке"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Затем нужно склонировать код проекта и установить зависимости:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"git clone git@github.com:varya/finnish-counting.git -b develop\ncd finnish-counting\nnpm install"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Для начала работы с проектом запускаем"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"steroids connect --watch"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Ключ "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--watch"}]},{type:"text",value:" нужен для отслеживания изменений и перезагрузки приложения."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"После запуска этой команды в браузере откроется страница с QR-кодом.\nОтсканировав QR-код всё тем же AppGyver Scaner, вы получите приложение прямо в\nтелефоне. Только имейте в виду, что телефон и компьютер должны находиться в\nодной сети. При каждой редакции кода приложение будет обновляться – очень\nудобно, особенно если работаешь над внешним видом интерфейса."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Если телефона под рукой нет, можно открыть приложение на макет в iOS simulator.\nДля этого в терминале с запущенным "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"steroids"}]},{type:"text",value:" нужно просто написать"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"text"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-text"]},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"simulator"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Что писать?"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Основной код приложения находится в\n"},{type:"element",tagName:"a",properties:{href:"https://github.com/varya/finnish-counting/blob/vesions/0.0.1/www/javascripts/application.js"},children:[{type:"text",value:"www/application.js"}]},{type:"text",value:".\nОно ещё маленькое и не использует все возможности Steroids. Но уже очевидно, что\nкогда страниц станет больше, мне понадобится "},{type:"element",tagName:"a",properties:{href:"http://docs.appgyver.com/en/edge/steroids_Steroids%20Native%20UI_index.md.html#Steroids%C2%A0Native%C2%A0UI"},children:[{type:"text",value:"Steroids Native\nUI"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Другие возможности фреймворка такие как удобное обращение к камере, файловой\nсистеме телефона, нотификациям — хорошо задокументированы на страницах "},{type:"element",tagName:"a",properties:{href:"http://docs.appgyver.com/en/edge/index.html"},children:[{type:"text",value:"API\nDocs"}]},{type:"text",value:". Там же есть примеры\nиспользования "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Cordova API"}]},{type:"text",value:" — именно с его помощью в моём приложении\nпроигрывается звук."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Новые приложения появляются каждый день, можно релизить и хвастаться в "},{type:"element",tagName:"a",properties:{href:"http://x.appgyver.com/xapps"},children:[{type:"text",value:"AppGyver\nApps Gallery"}]},{type:"text",value:". Только успевай с идеями: я вот\nхотела написать мобильный аналог игры 2048, а он уже там есть. Значит, буду\nразвивать свою «считалку» :-)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Кстати, у кого есть телефон на Андроиде — проверьте, скачивается у вас моё\nприложение, работает ли? Я пока могу проверить только на iOS, а одно из\nпреимуществ приложений на Steroids — то, что они кросс-платформенные, с\nнативными фичами для каждой платформы, конечно."}]}],data:{quirksMode:!1}},fields:{slug:"ru/posts/first-steroids-app/",prefix:"",disqusIdentifier:"ru-issues-first-steroids-app"},frontmatter:{title:"Мобильное приложение на Steroids",subTitle:null,date:"02 April 2014",v2:null,old:!0,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"ru/posts/first-steroids-app/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/fonts-no-cramp/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/fonts-no-cramp/",prefix:"",lang:"en",disqusIdentifier:"en-issues-fonts-no-cramp",level:1},frontmatter:{title:"Custom fonts with no cramp",subTitle:null,v2:null,old:!0}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/efficient_xslt_techniques/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/efficient_xslt_techniques/",prefix:"",lang:"ru",disqusIdentifier:"ru-issues-efficient_xslt_techniques",level:1},frontmatter:{title:"XSLT - результативные технологии программирования",subTitle:null,v2:null,old:!0}}}}}});
//# sourceMappingURL=path---ru-posts-first-steroids-app-0d41e914b7b5f2497847.js.map