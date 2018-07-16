webpackJsonp([62242555722090],{650:function(e,s){e.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/blocks-and-bundles/index_ru.md absPath of file >>> MarkdownRemark",html:'<p>Некотрое время назад мой знакомый, который делает проект на полном стеке БЭМ\n(BEM-CSS, i-bem.js и BEMHTML-шаблоны),\nзадал мне несколько вопросов об использовании\n<a href="https://github.com/bem/project-stub/tree/14e24fd17ba66a357a2f6fcdce045065b4eb5d6c">BEM project\nstub</a>.\nОтвечая на вопрос, я пообещала опубликовать ответ в виде текста, потому что\nмногие вещи вокруг БЭМ не проговариваются, считаясь слишком простыми — и\nошибочно!<excerpt/></p>\n<p>Вопрос был о конфигурационном файле <code class="language-text">.bem/make.js</code>, который нужен при\nиспользовании\n<a href="http://bem.info/tools/bem/bem-tools/">bem tools</a>\nдля сборки страниц.\n<a href="https://github.com/bem/project-stub/blob/14e24fd17ba66a357a2f6fcdce045065b4eb5d6c/.bem/make.js#L12">Строчки 12 и\n13</a>\nописывают регулярные выражения для <code class="language-text">blocks</code> и <code class="language-text">bundles</code>. Не сразу понятно,\nчто это значит.</p>\n<p>Вообще эти выражения нужны, чтобы распознать папки на файловой системе. Те,\nкоторые заканчиваются на <code class="language-text">.blocks</code> — для блоков, а те, что заканчиваются на\n<code class="language-text">.bundles</code> — для бандлов (страниц). Под эти выражения, например, подходят папки\n<code class="language-text">desktop.blocks</code> и <code class="language-text">desktop.bundles</code> из project-stub.</p>\n<p>Для чего нужна папка <code class="language-text">desktop.blocks</code>, должно быть понятно. Поскольку БЭМ —\nмодульный паттерн, необходимо место для хранения модулей, то есть блоков. Каждый\nблок — это директория, содержащая все файлы, нужные для каждого конкретного\nинтерфейсного модуля.</p>\n<p>Вот, например, <a href="https://github.com/varya/online-shop-dummy/tree/master/desktop.blocks">набор блоков одного\nпроекта</a>.</p>\n<p>Папка <code class="language-text">desktop.bundles</code> нуждается в пояснении. Она содержит страницы – результат\nиспользования блоков. Каждая страница помещена в отдельную директорию, внутри\nкоторой располагаются все файлы, нужные для страницы.\nМожно снова посмотреть\n<a href="https://github.com/varya/online-shop-dummy/tree/gh-pages/desktop.bundles">пример из предыдущего\nпроекта</a>.</p>\n<p>Разница в том, что файлы блоков созданы разработчиком, а файлы бандлов созданы\nbem tools. Для блоков это знакомые нам CSS, JavaScript и иногда шаблоны.</p>\n<pre><code>├── desktop.blocks/\n│   ├── goods/\n│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/master/desktop.blocks/goods/goods.bemhtml">goods.bemhtml</a>\n│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/master/desktop.blocks/goods/goods.css">goods.css</a>\n│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/master/desktop.blocks/goods/goods.deps.js">goods.deps.js</a>\n│   │   └── <a href="https://github.com/varya/online-shop-dummy/blob/master/desktop.blocks/goods/goods.ie.css">goods.ie.css</a></code></pre>\n<p>Проводя параллели для БЭМ (и любого другого модульного паттерна) в реальном\nмире, можно сказать, что блок — это кирпичик.</p>\n<p><img src="http://img-fotki.yandex.ru/get/6730/14441195.30/0_7e0f8_33c1c86c_L.jpg"></p>\n<p>Файлы бандлов — это тоже файлы, нужные для браузера: CSS, JavaScript, HTML. <em>Ни\nодин из них не написан разработчиком, они созданы bem tools</em>. Можете посмотреть\nвнутрь файлов и убедиться, что код абсолютно “роботный”.</p>\n<pre><code>├── desktop.bundles/\n│   ├── index/\n│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/_index.css">_index.css</a>\n│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/_index.js">_index.js</a>\n│   │   ├── <a href="https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/index.bemjson.js">index.bemjson.js</a>\n│   │   └── <a href="https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/index.html">index.html</a></code></pre>\n<p>Для понимания bem tools представьте, что это строительный кран. Он берет\nстроительные блоки и возводит из них дом.</p>\n<p><img src="http://img-fotki.yandex.ru/get/9058/14441195.30/0_7e0f3_ff76f66a_L.jpg"></p>\n<p>Хотя, кроме *.js, *.css и *.html файлов, всё-таки есть один файл, написанный\nразрабочиком.\nЭто\n<a href="https://github.com/varya/online-shop-dummy/blob/gh-pages/desktop.bundles/index/index.bemjson.js">index.bemjson.js</a>\n— JSON описание того, что за блоки нужны на странице и какова их древовидная\nструктура. Звучит логично, ведь только человек знает, что нужно показать на\nстранице. Всё остальное делают bem tools. Получив информацию о том, какие блоки\nнужны для страницы, они берут их код из <code class="language-text">desktop.blocks</code> и формируют с их\nпомощью страницу.</p>\n<p>Продолжая пример со строительством дома, можно сказать что <code class="language-text">page.bemjson.js</code> —\nэто чертеж.</p>\n<p><img src="http://img-fotki.yandex.ru/get/6704/14441195.30/0_7e1ba_9dacd537_L.jpg"></p>\n<p>Но почему же <code class="language-text">bem tools</code> нужно регулярное выражение в настройках?</p>\n<p>Это несложно. Все папки, которыми оперирует <code class="language-text">bem tools</code> — это <code class="language-text">уровни\nпереопределения</code>. Должно быть легче, если представлять уровень как набор\nсущностей. Уровень блоков представлен папкой <code class="language-text">desktop.blocks</code>, а уровень страниц\n— папкой <code class="language-text">desktop.pages</code>. В конфигурационной папке\n<a href="https://github.com/bem/project-stub/tree/14e24fd17ba66a357a2f6fcdce045065b4eb5d6c/.bem/levels">.bem/levels/</a>\nесть инструкции, по которым bem tools понимают, что делать с уровнями разных\nтипов.</p>\n<p>Выделяя в проекте блоки и бандлы, можно делать разные наборы блоков и разные\nбандлы, собранные из этих наборов. Например, блоки для desktop и touch версий\nсайта могут храниться в одном репозитории. И страницы, собранные из таких блоков\n— тоже.</p>\n<pre><code>├── desktop.blocks/\n├── desktop.bundles/\n├── touch.blocks/\n└── touch.bundles/</code></pre>\n<p>Возвращаясь к примерам из реального мира, не только кирпичики могут быть\nмодулями, но и детальки LEGO.</p>\n<p><img src="http://img-fotki.yandex.ru/get/6704/14441195.30/0_7e0f6_f69c7d44_L.jpg"></p>\n<p>Из них также можно построить дом. Немножечко другой, конечно.</p>\n<p><img src="http://img-fotki.yandex.ru/get/9326/14441195.30/0_7e0f4_3d999550_L.jpg"></p>\n<p>Если пойти дальше, вы можете выделить код блоков, общий для всех платформ, и\nхранить его отдельно.</p>\n<pre><code>├── common.blocks/\n├── desktop.blocks/\n├── desktop.bundles/\n├── touch.blocks/\n└── touch.bundles/</code></pre>\n<p>С такой структурой desktop версия формируется из кода блоков уровней\n<code class="language-text">common.blocks</code> и <code class="language-text">desktop.blocks</code>, а touch версия — из уровней <code class="language-text">common.blocks</code>\nи <code class="language-text">touch.blocks</code>.</p>\n<p><img src="http://img-fotki.yandex.ru/get/6725/14441195.30/0_7e0f5_3e107fd4_L.jpg"></p>\n<p>И в заключении, я не перестаю радоваться идее проекта\n<a href="https://github.com/bem/project-stub/">BEM project\nstub</a>. Сама постоянно использую его,\nначиная новые проекты. Туториал о\n<a href="http://ru.bem.info/articles/start-with-project-stub/">старте проекта на полном стеке\nБЭМ</a> показывает, как именно.\nТак же БЭМ использует и знакомый, задавший мне вопрос. Я никогда раньше не\nподозревала, что project stub позволяет начать работы с БЭМ без знания всего\nтого, что описано выше. :-)</p>\n<p>Кстати, написав все это, я поняла, что описание основ БЭМ для меня несложно и\nзанимает разумное время. При этом (я надеюсь!), это очень полезно для других.\nТак что спрашивайте всё, что вы хотите знать.</p>',fields:{slug:"ru/posts/blocks-and-bundles/",prefix:"",disqusIdentifier:"ru-posts-blocks-and-bundles"},frontmatter:{title:"Блоки как кирпичи и бандлы как дома",date:"15 January 2014",v2:null,old:!0,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"ru/posts/blocks-and-bundles/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/borschik-static-assets/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/borschik-static-assets/",prefix:"",lang:"en",disqusIdentifier:"en-posts-borschik-static-assets"},frontmatter:{title:"Borschik helps with remote static assets"}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/blocks-and-bundles/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/blocks-and-bundles/",prefix:"",lang:"en",disqusIdentifier:"en-posts-blocks-and-bundles"},frontmatter:{title:"Blocks are bricks, and bundles are buildings"}}}}}});
//# sourceMappingURL=path---ru-posts-blocks-and-bundles-06e00ec9fbf5d643c401.js.map