webpackJsonp([0xcec859244de2],{670:function(n,s){n.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/jscs-in-use/index_ru.md absPath of file >>> MarkdownRemark",html:'<p>Хочу поделиться опытом поддержания единого стиля JavaScript в одном из своих проектов. Недавно мы решили пробовать\nмолодой инструмент JSCS, и результат его использования понравился всем членам команды.\n<excerpt/></p>\n<p>Когда я присоединилась к проекту <a href="http://styleguide.sc5.io/">SC5 Styleguide</a>, мне сразу бросилось в глаза отсутствие\nединого стиля для JavaScript кода. Это ещё не было ужасающим, но было ясно, что проект в скором времени будет расти и чем раньше мы начнём\nприлагать усилия к соблюдению единого стиля, тем лучше. Тем более, я уже знала о существовании и особенностях JSCS,\nпотому что на одном из моих проектов <a href="http://frontendbabel.info/articles/jscs-javascript-code-style/">публиковался перевод\nстатьи о нем</a>. Поэтому мы даже не стояли перед вопросом,\nкакой инструмент выбрать.</p>\n<p>Конечно, есть и другие решения. Чаще всего называют JSLint и JSHint. Но давайте я сначала расскажу вам одну историю.</p>\n<p>Оказывается, когда авторы JSHint познакомились с JSCS, он им так понравился, что они предпочли стать его\nконтрибьютерами, чем развивать проверку стиля в своём инструменте. А у себя оставили более сложные штуки, не про стиль,\nа про программирование.</p>\n<blockquote class="twitter-tweet" lang="ru"><p>And with that, JSCS now has all the style enforcement rules that are\nbeing dropped in <a href="https://twitter.com/JSHint">@JSHint</a> 3.0: <a\nhref="https://t.co/W98EMSiTN5">https://t.co/W98EMSiTN5</a> cc <a\nhref="https://twitter.com/valueof">@valueof</a></p>&mdash; Mike Sherov (@mikesherov) <a\nhref="https://twitter.com/mikesherov/status/419596672520318976">4 января 2014</a></blockquote>\n<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>\n<p>Получается, выбор стоит не между JSLint, JSHint и JSCS, а между JSLint и комбинацией JSHint + JSCS.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">\'jslint\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span> <span class="token string">\'jshint\'</span><span class="token punctuation">,</span> <span class="token string">\'jscs\'</span> <span class="token punctuation">]</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>А учитывая, что инструмент новый, со стройной архитектурой, контрибьютить в него будет одно удовольствие да и меньше\nшансов на слишком долгую жизнь багов из-за какого-нибудь непроходимого легаси.</p>\n<p>Вдохновляет также и тот факт, что JSCS уже выбрали такие уважаемые команды как разработчики jQuery, Bootsrap и\nAngularJS.</p>\n<p>Итак, JSCS — это npm-пакет, и установить его можно как глобально на свою машину так и локально на конкретный проект:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">npm install jscs</code></pre>\n      </div>\n<p>Кроме того, понадобится создать конфигурационный файл <code class="language-text">.jscsrc</code> и там описать, какого стиля должен придерживаться\nJavaScript на вашем проекте. Этот файл помещается в корень проекта.</p>\n<p>Несмотря на большое количество правил, которые поддерживает JSCS, конфиг вряд ли будет большим, потому что в инструменте\nпредусмотрены пресеты. Популярных стилей для JavaScript кода не так много, и если вы выбрали один из них, то нет нужды\nописывать стиль полностью. Достаточно указать, на кого вы хотели бы быть похожим:</p>\n<ul>\n<li>airbnb</li>\n<li>crockford</li>\n<li>google</li>\n<li>jquery</li>\n<li>mdcs</li>\n<li>wikimedia</li>\n<li>yandex</li>\n</ul>\n<p>Даже если у вас есть расхождения с этими стилями, всё равно удобно выбрать максимально похожий пресет, потому что в JSCS\nвозможно переопределить правила пресета.</p>\n<p>И, конечно, важно, что инструмент уже достаточно зрелый. А значит, есть все необходимые дружественные пакеты и плагины\nдля разных редакторов.</p>\n<h2>Как это было</h2>\n<p>В общем, учитывая все эти факты, мы остановились на JSCS. Начали с того, что написали подходящую нам конфигурацию и тут\nже исключили из списка для проверки все наши файлы. У проекта уже была модульная структура, поэтому это оказалось\nнесложным.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">{\n    ...\n\n    &quot;excludeFiles&quot;: [\n      &quot;node_modules/**&quot;,\n      &quot;src/modules/a/**&quot;,\n      &quot;src/modules/b/**&quot;,\n      &quot;src/*.js\n    ]\n}</code></pre>\n      </div>\n<p>Мы договорились, что начиная работать с каким-нибудь модулем, кроме реализации фич, мы также будем править стиль и\nвычеркивать исправленные модули из списка непроверяемых файлов. Соблюдая это, мы довольно быстро исправили все файлы и\nобошлись без конфликтов.</p>\n<p>Гораздо важнее оказалось поддержание исправленных файлов в их исправленном состоянии во время будуших правок. Конечно,\nтут нам помогают автоматические проверки. Но возникает вопрос, настолько строги мы должны быть в этих проверках и когда\nименно проверять. Ведь поддержка стиля не должна становиться самоцелью и должна перетягивать на себя весь фокус\nразработки.</p>\n<p>В итоге мы пришли к концепции раздения ответственности. Так, для основного репозитория мы выбрали жесткую политику\nв вопросе соблюдения стиля, а для форков — рекомендательную. Мы настроили Travis так, чтобы он проверял стиль для\nпул-реквестов. Если стиль не соблюден, пул-реквест не может быть влит в основной репозиторий. Таким образом, там вообще\nникогда нет кода с плохим стилем. В то же время для форков всё гораздо мягче. Мы отказались от насильственных pre-push\nхуков с проверкой стиля, но рекомендуем самостоятельную установку pre-commit хука и использование плагинов JSCS для\nредакторов, чтобы узнавать об ошибках в процессе разработки, а не тогда, когда ломается пул-реквест. Все рекомендации\nнаписаны у нас в разработческой документации, и новые члены команды активно ими пользуются.</p>\n<p>Всем особенно нравится, как реализована поддержка в редакторах. Ведь конфигурация стиля приезжает в репозиторий проекта\nвместе с кодом, и редактор считывает её самостоятельно. А, главное, у разных проектов может быть разный стиль, и для\nперекрестной работы не требуется никакая перенастройка.</p>\n<p><img src="http://varya.me/jscs-talk/pictures/sublime.gif"></p>\n<p>Ну и, конечно, всегда есть возможность запустить проверку стиля вручную как gulp-таск.</p>\n<p><img src="http://varya.me/jscs-talk/pictures/travis.png"></p>\n<h2>Предостережения</h2>\n<p>Во время внедрения инструмента мы столкнулись с парочкой неудобств. Думаю, стоит о них упомянуть, тем более, что к ним\nнашлись решения.</p>\n<p>Основное расстройство — ошибка “out of memory” при запуске gulp-таска с проверкой. Оказалось, что недостаточно исключить\nфайлы в конфигурации JSCS. Gulp всё равно сначала пытается работать с ними всеми и пока дело доходит до JSCS, память уже\nкончается. В итоге мы пришли к использованию пакета <code class="language-text">gulp-ignore</code>:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">gulp.task(&#39;jscs&#39;, function() {\n  return gulp.src([\n    &#39;**/*.js&#39;\n  ])\n  .pipe(gulpIgnore.exclude([\n    &#39;node_modules/**&#39;,\n    &#39;demo-output/**&#39;\n  ]))\n  .pipe(jscs());\n})</code></pre>\n      </div>\n<p>Это не очень хорошее решение, ведь здесь пришлось перечислить все те исключения, которые уже задекларированы в <code class="language-text">.jscsrc</code>.\nНо лучшего варианта у нас пока нет.</p>\n<p>И, второй момент: если вы используете watch в разработке, то скорее всего захотите видеть ошибки в терминале, но не\nпрерывать исполнение таска. Для этого потребуется <code class="language-text">gulp-plumber</code>:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">gulp.task(&#39;jscs&#39;, function() {\n  return gulp.src([\n    &#39;**/*.js&#39;\n  ])\n  ...\n  .pipe(plumber())\n  .pipe(jscs());\n});</code></pre>\n      </div>\n<p>Всё, больше никаких проблем или вопросов относительно иструмента у нас не было. Он прекрасно работает и уже сохранил нам\nтысячи человекочасов.</p>\n<h2>А также</h2>\n<p>Возможно, вас также заинтересует <a href="http://habrahabr.ru/post/220229/">рассказ автора JSCS</a> и мои\n<a href="http://varya.me/jscs-talk/">слайды</a> от доклада на эту тему.</p>',fields:{slug:"ru/posts/jscs-in-use/",prefix:"",disqusIdentifier:"posts-jscs-in-use-index-ru"},frontmatter:{title:"Использование JSCS",date:"25 November 2014",v2:!0,old:null,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"ru/posts/jscs-in-use/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/learn-english/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/learn-english/",prefix:"",lang:"ru",disqusIdentifier:"ru-posts-learn-english"},frontmatter:{title:"Мой опыт изучения английского"}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/jscs-in-use/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/jscs-in-use/",prefix:"",lang:"en",disqusIdentifier:"posts-jscs-in-use-index-en"},frontmatter:{title:"JSCS in use"}}}}}});
//# sourceMappingURL=path---ru-posts-jscs-in-use-434295033f5eebd79ae1.js.map