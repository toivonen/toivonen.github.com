webpackJsonp([0xe941607a1f16],{621:function(e,t){e.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/first-steroids-app/index_ru.md absPath of file >>> MarkdownRemark",html:'<p>На днях я написала своё первое мобильное приложение. Суммарно это заняло всего\nпару часов, и всё благодаря фреймворку\n<a href="http://www.appgyver.com/steroids">Steroids</a> от AppGyver. С его помощью делать\nгибридные приложения (это когда HTML5/JavaScript внутри) очень легко, а\nинструменты <code class="language-text">Steroids</code> позволяют легко деплоить приложение и делиться им с\nдрузьями.<excerpt/></p>\n<h3>Легко посмотреть приложение</h3>\n<p>Приложение у меня пока “игрушечное” — это всего одна страница, где озвучены\nслучайные числительные на финском языке.</p>\n<div style="text-align:center;">\n<img src="http://img-fotki.yandex.ru/get/9827/14441195.30/0_81ae7_60ff43b1_L.png" width="282" height="500" title="" alt="" border="0">\n</div>\n<p>Сейчас увидеть работающее приложение в телефоне можно только через <code class="language-text">Appgyver\nScaner</code> — вспомогательную программу для обмена Steroids-based мобильными\nприложениями до релиза. Поставьте сейчас, чтобы позже загрузить моё приложение:</p>\n<div style="text-align:center;">\n<a href="https://itunes.apple.com/us/app/appgyver-scanner/id575076515?mt=8" target="_blank"><img alt="Appstore" class="appstore_icon" src="https://share.appgyver.com/assets/appstore-df950585b54bd081a7826913fc715cd4.png"></a>\n<a href="https://play.google.com/store/apps/details?id=com.appgyver.android&amp;feature=nav_result#?t=W251bGwsMSwxLDMsImNvbS5hcHBneXZlci5hbmRyb2lkIl0." target="_blank"><img alt="Googleplay" class="appstore_icon" src="https://share.appgyver.com/assets/googleplay-2cef882d62e402fbdbfe8cdac5794069.png"></a>\n</div>\n<p>Теперь вы можете открыть в компьютере эту\n<a href="http://bit.ly/finnish-counting-001">страницу с QR-кодом</a>. Отсканируйте QR-код\nпри помощи\nсвежеустановленного AppGyver Scaner, и моё приложение загрузится к вам в\nтелефон.</p>\n<p>Я сознательно не релизила пока приложение. Во-первых, оно ещё сырое. А\nво-вторых, хочу, чтобы вы увидели как легко поделиться готовящимся\nприложением с другими, причем на любом этапе разработки.</p>\n<h3>Запустить dev-версию</h3>\n<p>Код приложения открытый, хостится на Github:\n<a href="https://github.com/varya/finnish-counting">varya/finnish-counting</a>. Чтобы\nразвернуть проект у себя на машине, понадобится npm-пакет <code class="language-text">steroids</code>:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">npm install steroids -g</code></pre>\n      </div>\n<p>Если до этого npm-пакеты на машину не устанавливались, то придется пройти через\nвсе шаги <a href="http://academy.appgyver.com/categories/1/contents/1">инструкции по\nустановке</a>.</p>\n<p>Затем нужно склонировать код проекта и установить зависимости:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">git clone git@github.com:varya/finnish-counting.git -b develop\ncd finnish-counting\nnpm install</code></pre>\n      </div>\n<p>Для начала работы с проектом запускаем</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">steroids connect --watch</code></pre>\n      </div>\n<p>Ключ <code class="language-text">--watch</code> нужен для отслеживания изменений и перезагрузки приложения.</p>\n<p>После запуска этой команды в браузере откроется страница с QR-кодом.\nОтсканировав QR-код всё тем же AppGyver Scaner, вы получите приложение прямо в\nтелефоне. Только имейте в виду, что телефон и компьютер должны находиться в\nодной сети. При каждой редакции кода приложение будет обновляться – очень\nудобно, особенно если работаешь над внешним видом интерфейса.</p>\n<p>Если телефона под рукой нет, можно открыть приложение на макет в iOS simulator.\nДля этого в терминале с запущенным <code class="language-text">steroids</code> нужно просто написать</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">simulator</code></pre>\n      </div>\n<h3>Что писать?</h3>\n<p>Основной код приложения находится в\n<a href="https://github.com/varya/finnish-counting/blob/vesions/0.0.1/www/javascripts/application.js">www/application.js</a>.\nОно ещё маленькое и не использует все возможности Steroids. Но уже очевидно, что\nкогда страниц станет больше, мне понадобится <a href="http://docs.appgyver.com/en/edge/steroids_Steroids%20Native%20UI_index.md.html#Steroids%C2%A0Native%C2%A0UI">Steroids Native\nUI</a>.</p>\n<p>Другие возможности фреймворка такие как удобное обращение к камере, файловой\nсистеме телефона, нотификациям — хорошо задокументированы на страницах <a href="http://docs.appgyver.com/en/edge/index.html">API\nDocs</a>. Там же есть примеры\nиспользования <code class="language-text">Cordova API</code> — именно с его помощью в моём приложении\nпроигрывается звук.</p>\n<p>Новые приложения появляются каждый день, можно релизить и хвастаться в <a href="http://x.appgyver.com/xapps">AppGyver\nApps Gallery</a>. Только успевай с идеями: я вот\nхотела написать мобильный аналог игры 2048, а он уже там есть. Значит, буду\nразвивать свою «считалку» :-)</p>\n<p>Кстати, у кого есть телефон на Андроиде — проверьте, скачивается у вас моё\nприложение, работает ли? Я пока могу проверить только на iOS, а одно из\nпреимуществ приложений на Steroids — то, что они кросс-платформенные, с\nнативными фичами для каждой платформы, конечно.</p>',fields:{slug:"ru/issues/first-steroids-app/",prefix:"",disqusIdentifier:"ru-issues-first-steroids-app"},frontmatter:{title:"Мобильное приложение на Steroids",date:"02 April 2014",v2:null,old:!0,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"ru/issues/first-steroids-app/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/frontend-babel-alpha/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/frontend-babel-alpha/",prefix:"",lang:"en",disqusIdentifier:"posts-frontend-babel-alpha-index-en"},frontmatter:{title:"The so different frontend community and how we deal with it"}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/fonts-no-cramp/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/issues/fonts-no-cramp/",prefix:"",lang:"en",disqusIdentifier:"en-issues-fonts-no-cramp"},frontmatter:{title:"Custom fonts with no cramp"}}}}}});
//# sourceMappingURL=path---ru-issues-first-steroids-app-9c8121e0727958840f35.js.map