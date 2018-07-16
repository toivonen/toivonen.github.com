webpackJsonp([0x8d7b5a37339b],{659:function(n,s){n.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/sc5-styleguide-for-smallers/index_ru.md absPath of file >>> MarkdownRemark",html:'<p>В этом году у меня было несколько презентаций про <a href="http://styleguide.sc5.io/">SC5 Style Guide</a>, в которых\nя делилась опытом использования инструмента на проектах одного их наших клиентов — мобильного оператора Elisa.\nУчитывая, что Elisa — огромная компания с массой вебсайтов, на которых нужно поддерживать единый стиль, не\nудивительно, что SC5 Style Guide как инструмент там очень полезен. Но как насчет небольших проектов? Стоит ли для них\nделать стайл гайды? Я сама не знала ответ на этот вопрос и захотела поэкспериментировать. В качестве подопытного\nсайта взяла собственный блог.\n<excerpt/></p>\n<p>Живой стайл гайд моего блога выглядит вот так: <a href="http://varya.me/styleguide">varya.me/styleguide</a>. Вы можете видеть\nвесь интерфейс, разделенный на блоки, каждый из которых подразумевает самостоятельный компонент. Я до сих пор не\nсмотрела на интерфейс своего блога в таком ключе, и это заставляет меня даже пересмотреть CSS-архитектуру проекта. Но\nдавайте обо всём по порядку.</p>\n<h2>Настройка SC5 Style Guide</h2>\n<p>Всё начинается с установки пакета</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">npm install --save-dev sc5-styleguide</code></pre>\n      </div>\n<p>После этого я смогла сгенерировать веб-сайт стайл гайда. Для этого понадобилась\n<a href="https://github.com/varya/varya.github.com/blob/af38b1fb0bd6e5a1b043d002ad5dbf107f17e6c1/Gulpfile.js">парочка gulp тасков</a>.</p>\n<p>Мне нужно было немного отступить от конфигурации, которая предлагается в документации, чтобы решить свои задачи. Напишу\nоб этом подробно.</p>\n<h3>Использование параметра <code class="language-text">appRoot</code></h3>\n<p>Мой стайл гайд находится не в корне домена, а в папке, которая называется <code class="language-text">styleguide</code>. Об этом нужно сообщить\nинструменту, чтобы сгенерированное им приложение использовало верные ссылки:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">"styleguide:generate"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"desktop.blocks/**/*.css"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>styleguide<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      title<span class="token punctuation">:</span> <span class="token string">"Varya.me Styleguide"</span><span class="token punctuation">,</span>\n      appRoot<span class="token punctuation">:</span> <span class="token string">\'/styleguide\'</span><span class="token punctuation">,</span>\n      <span class="token operator">...</span></code></pre>\n      </div>\n<h3>Подключение JavaScript</h3>\n<p>В качестве значения параметра <code class="language-text">extraHead</code> можно перечислить все, что нужно подключить к странице. У меня для некоторых\nкомпонент требуется JavaScript. Конечно, не обязательно делать так, чтобы он работал, можно просто делать стайл гайд\nтолько на базе CSS. Но мне хотелось, чтобы компоненты в документации выглядели бы абсолютно так же как в блоге. И\nблагодаря <code class="language-text">extraHead</code> я могу указать, какой JavaScript файл нужен.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">"styleguide:generate"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"desktop.blocks/**/*.css"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>styleguide<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      title<span class="token punctuation">:</span> <span class="token string">"Varya.me Styleguide"</span><span class="token punctuation">,</span>\n      <span class="token operator">...</span>\n      extraHead<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token string">\'&lt;script src="http://yandex.st/jquery/1.7.2/jquery.min.js">&lt;/script>\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'&lt;script src="/desktop.bundles/index/index.min.js">&lt;/script>\'</span><span class="token punctuation">,</span>\n        <span class="token operator">...</span>\n      <span class="token punctuation">]</span>\n    <span class="token operator">...</span></code></pre>\n      </div>\n<p>Но на самом деле нужна ещё одна хитрость. Мои компоненты написаны на <code class="language-text">i-bem.js</code> и автоматически инициализируются по\n<code class="language-text">domReady</code>. Это как раз то что нужно для блога, ведь страницы статические и вся HTML-разметка сразу загружается. Но сайт\nстайл гайда — это SPA (одностраничное приложение), и там это не работало. Компоненты отрисовываются на страницах\nстайлгайда “на лету”, и очевидно, что это происходит позже <code class="language-text">domReady</code>. То есть они не инициализируются автоматически.\nК счастью, можно использовать событие <code class="language-text">styleguide:onRendered</code> на объекте <code class="language-text">window</code>, которое SC5 Style Guide создаёт\nкаждый раз, когда компонент перересовывается. Я сделала инициализацию компонент на это событие, то есть сразу после того\nкак они появляются на странице. Такая инициализация нужна только на сайте стайл гайда, поэтому этот код не включается\nв общую сборку и подключается к стайл гайду как дополнительный файл.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">gulp.task(&quot;styleguide:generate&quot;, function() {\n\n  return gulp.src([&quot;desktop.blocks/**/*.css&quot;])\n    .pipe(styleguide.generate({\n      title: &quot;Varya.me Styleguide&quot;,\n      ...\n      extraHead: [\n        ...\n        &#39;&lt;script src=&quot;/styleguide/i-bem__init_styleguide.js&quot;&gt;&lt;/script&gt;&#39;\n      ]\n    ...</code></pre>\n      </div>\n<p>Вы можете посмотреть, как работают компоненты с JavaScript на примере блока, который показывает список репозиториев\nна GitHub после того как сделает запрос в GitHub API:\n<a href="http://varya.me/styleguide/#/section/4.3">varya.me/styleguide/#/section/4.3</a>. Или на странице блока с кружочками,\nкоторые генерируются случайным образом: <a href="http://varya.me/styleguide/#/section/5.1">varya.me/styleguide/#/section/5.1</a>.</p>\n<p>И последняя, очень важная деталь для того, чтобы заставить JavaScript работать — это использование параметра\n<code class="language-text">disableEncapsulation: true</code>. По умолчанию Style Guide оборачивает каждый компонент в ShadowDOM. Это даёт разработчику\nвозможность не беспокоиться о том, что его стили пересекутся со стилями сгенерированного веб-сайта. Но в то же время\nэто инкапсулирует компонент, в том числе и от JavaScript, подключённого в <code class="language-text">&lt;head&gt;</code>. Но благодаря специальному параметру\nэту инкапсуляцию можно предотвратить. Так что у меня компоненты просто вставляются в HTML-код сайта как есть. Что\nкасается возможности перезаписать стили сайта, этого не случится. Я использую БЭМ, поэтому все компоненты уже\n“инкапсулированы” на уровне методологии.</p>\n<h3>Стайл гайд как статическая страница</h3>\n<p>Для режима разработки у SC5 Style Guide запускается сервер, который разруливает все пути в корневой каталог, откуда и\nраздаётся сгененированный SPA-сайт. Если вы хотите пользоваться результатом в своём сервере, о такой маршрутизации\nпридется позаботиться самостоятельно. Но в моём случае сайт располагается на GitHub Pages, это статический хостинг и там\nникакой маршрутизации не предусмотрено. Однако на этот случай есть настройка <code class="language-text">disableHtml5Mode: true</code>. Она говорит\nгенератору, что в приложении должны быть старые добрые ссылки с решеткой <code class="language-text">#</code>. Так что всё работает.</p>\n<h2>Документирование компонент</h2>\n<p>Ещё до внедрения стайл гайда, у меня весь CSS был написан по БЭМ, то есть с компонентым подходом. Для стайл гайда нужно\nбыло только задать компонентам структуру и задокументировать блоки при помощи KSS.</p>\n<h3>Структурирование кода</h3>\n<p>Оказалось, что файловая структура, которую предлагает БЭМ, не самое лучшее решение для разработки живого стайлгайда. На\nфайловой системе все компоненты представлены длинным плоским списком:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">desktop.blocks/\n├── article\n├── articles-list\n├── box\n├── ...\n└── text</code></pre>\n      </div>\n<p><a href="https://github.com/varya/varya.github.com/tree/af38b1fb0bd6e5a1b043d002ad5dbf107f17e6c1/desktop.blocks">github/varya/varya.github.com/desktop-blocks</a></p>\n<p>То есть маленькие атомарные компоненты никак не отличаются от блоков для структуры страницы (таких как Header или\nFooter), от блоков из сайдбара или от CSS для сторонних виджетов. Разумеется, плоская структура более удобна для\nсборщиков, но с точки зрения разработки нужна какая-то каталогизация.</p>\n<p>Для этого я сделала файл <code class="language-text">overview.css</code>, в котором нет никакого активного CSS, но он помогает мне организовать блоки.\nУ меня там 5 секций, и в каждой относящиеся к ней компоненты:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">/*\nAtoms\n\nStyleguide 1\n\nstyleguide:ignore:start\n\n@import url(&quot;logo/logo.css&quot;); // 1.1\n@import url(&quot;text/text.css&quot;); // 1.2\n...\n\nstyleguide:ignore:end\n*/\n\n/*\nMain blocks\n\nStyleguide 2\n\nstyleguide:ignore:start\n\n@import url(&quot;header/header.css&quot;); // 2.1\n...\n\nstyleguide:ignore:end\n*/</code></pre>\n      </div>\n<p><a href="https://github.com/varya/varya.github.com/blob/af38b1fb0bd6e5a1b043d002ad5dbf107f17e6c1/desktop.blocks/overview.css">github/varya/varya.github.com/desktop-blocks/overview.css</a></p>\n<p>По сути в файле кроме комментариев ничего нет. А в комментариях — описание каждой секции. Также перечислены\nфайлы блоков, имеющие к ней отношение. Это удобно для навигации по коду. В этом перечислении я использовала <code class="language-text">@import</code>\n(просто потому что могу).</p>\n<p>Здесь только одна особенность — использование волшебных комментариев <code class="language-text">styleguide:ignore:start</code> и\n<code class="language-text">styleguide:ignore:end</code>. Ими можно обернуть любой кусок CSS (SASS или LESS) кода и таким образом сказать генератору SC5\nStyle Guide, что этот кусок нужно проигнорировать.</p>\n<p>Я игнорирую свои списки блоков, потому что они никак не влияют на код. Но описания секций остаются.</p>\n<h3>Описание блоков</h3>\n<p>Все остальное легко. Перед каждым компонентом я размещаю комментарий с KSS описанием. Например, один из простых блоков,\nLogo:</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token comment">/*\n\nLogo\n\nmarkup:\n&lt;logo class="logo">···&lt;b class="var">var&lt;/b>·&lt;b class="ya">ya&lt;/b>;&lt;b class="cursor">&lt;/b>&lt;/logo>\n\nStyleguide 1.1\n\n*/</span>\n<span class="token selector">.logo</span>\n<span class="token punctuation">{</span>\n...</code></pre>\n      </div>\n<p><a href="https://github.com/varya/varya.github.com/blob/af38b1fb0bd6e5a1b043d002ad5dbf107f17e6c1/desktop.blocks/logo/logo.css">github/varya/varya.github.com/desktop-blocks/logo/logo.css</a></p>\n<p>See it rendered: <a href="http://varya.me/styleguide/#/section/1.1">varya.me/styleguide/#/section/1.1</a></p>\n<p>В некоторых компонентах использованы дополнительные возможности. Например, социальные иконки — это один и тот же блок\nс разными модификаторыми. Такое можно задокументировать одним махом:</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token comment">/*\nSocial icon\n\n.social-ico__ico_type_rss         - RSS\n.social-ico__ico_type_twitter     - Twitter\n.social-ico__ico_type_github      - Github\n.social-ico__ico_type_facebook    - Facebook\n.social-ico__ico_type_linkedin    - LinkedIn\n\nmarkup:\n&lt;a class="link social-ico__ico {$modifiers}" href="#" title="Icon title">&lt;/a>\n\nStyleguide 1.5.1\n*/</span>\n\n<span class="token selector">.social-ico__ico</span>\n<span class="token punctuation">{</span>\n...</code></pre>\n      </div>\n<p><a href="https://github.com/varya/varya.github.com/blob/af38b1fb0bd6e5a1b043d002ad5dbf107f17e6c1/desktop.blocks/social-ico/social-ico.css#L49">github/varya/varya.github.com/desktop-blocks/social-ico/social-ico.css</a></p>\n<p>В документации компоненты прорисованны по отдельности для каждого модификатора:\n<a href="http://varya.me/styleguide/#/section/1.5.1">varya.me/styleguide/#/section/1.5.1</a></p>\n<p>Для сложносоставных компоненты, которые используют внутри себя другие, я использовала ключевой тег <code class="language-text">&lt;sg-insert&gt;</code>.\nОн вставляет вместо себя код компонента с соответствующим номером.</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token comment">/*\nSidebar\nmarkup:\n&lt;nav class="sidebar">\n  &lt;sg-insert>4.2&lt;/sg-insert>\n  &lt;sg-insert>4.3&lt;/sg-insert>\n&lt;/nav>\nStyleguide 4.1\n*/</span>\n\n<span class="token selector">.sidebar</span>\n<span class="token punctuation">{</span>\n...</code></pre>\n      </div>\n<p><a href="https://github.com/varya/varya.github.com/blob/af38b1fb0bd6e5a1b043d002ad5dbf107f17e6c1/desktop.blocks/sidebar/sidebar.css">github/varya/varya.github.com/desktop-blocks/sidebar/sidebar.css</a></p>\n<p>Благодаря этому документация в коде приемлемого размера, а на сайте все раскрывается в полном виде:\n<a href="http://varya.me/styleguide/#/section/4.1">varya.me/styleguide/#/section/4.1</a></p>\n<h2>Style-Guide-Driven Development</h2>\n<p>Если в получившемся стайл гайде в поле для поиска вы наберете “logo”, то увидите все компоненты, который используют\nлоготип! Поиск проводится по всему коду. Точно так же можно поискать компоненты, в разметке которых используется <code class="language-text">&lt;em&gt;</code>.\nИли в чьих стилях есть <code class="language-text">font:</code>.</p>\n<p>Мне лично особенно нравится, что можно искать и по разметке. Этим можно пользоваться во время рефакторинга. Например,\nизменив input, я могу найти все использующие его блоки и посмотреть, не сломались ли они.</p>\n<p>Хотя на самом деле это лишь небольшое дополнение к главному преимуществу использования стайл гайда. По-моему, его\nосновной плюс — <strong>демонстрация ошибок вёрстки</strong>.</p>\n<p>В CSS моего блога ещё до внедрения стайл гайда использовался компонентый подход. Учитывая мой БЭМ опыт, я была на 100%\nуверена, что компоненты написаны хорошо. Но даже такая компонентная разработка всё равно происходила с точки зрения\nстраницы. До того как блоки были внедрены в блог, я делала их на отдельной статической странице. То есть отдельно, вне\nстраницы, они никогда и не существовали.</p>\n<p>Блоки разрабатывались как независимые, я писала код, пытаясь этого достигнуть. Но <strong>будучи размещенными вместе на одной и\nтой же странице, они никогда независимыми не были</strong>.</p>\n<p>После того как SC5 Style Guide волшебным образом отрисовал их по отдельности, я могу видеть, что блок\n<a href="http://varya.me/styleguide/#/section/1.1">logo</a> выровнен по правому краю. Хотя почему бы это? Очевидно, это моя ошибка,\nдопущенная, когда я верстала логитип внутри блока Header.</p>\n<p>То же самое произошло с <a href="http://varya.me/styleguide/#/section/1.4">переключалкой языков</a>, она так же выровнена вправо.</p>\n<p>В <a href="http://varya.me/styleguide/#/section/1.5">блоке социальных иконок</a> переключалка языков подразумевалась рядом с\nиконкой RSS. Но на странице они располагаются близко друг к другу только потому что весь блок помещен в узкий контейнер.\nВ стайл гайде блок отрисован отдельно, и мне теперь видно, что он свёрстан неидеально.</p>\n<p>Конечно, такие открытия подразумевают скорый рефакторинг :-)</p>\n<p>И в довершение нужно сказать, что эксперимент не закончен. Есть и другие открытия для новых постов.</p>',fields:{slug:"ru/posts/sc5-styleguide-for-smallers/",prefix:"",disqusIdentifier:"posts-sc5-styleguide-for-smallers-index-ru"},frontmatter:{title:"Стайл гайд для самых маленьких",date:"18 August 2015",v2:!0,old:null,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"ru/posts/sc5-styleguide-for-smallers/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/sc5-styleguide-for-smallers/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/sc5-styleguide-for-smallers/",prefix:"",lang:"en",disqusIdentifier:"posts-sc5-styleguide-for-smallers-index-en"},frontmatter:{title:"Style-guide the smaller things"}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/sc5-style-guide-next-level/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/sc5-style-guide-next-level/",prefix:"",lang:"en",disqusIdentifier:"posts-sc5-style-guide-next-level-index-en"},frontmatter:{title:"Living SC5 Styleguide, the next level"}}}}}});
//# sourceMappingURL=path---ru-posts-sc-5-styleguide-for-smallers-810dbb40cbcdc01dee1a.js.map