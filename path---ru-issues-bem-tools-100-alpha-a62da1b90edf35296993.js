webpackJsonp([0xa7494b66a248],{617:function(e,a){e.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/bem-tools-100-alpha/index_ru.md absPath of file >>> MarkdownRemark",html:'<p><a href="http://bem.info/tools/bem/">bem tools</a> — пакет для сборки проекта с\nБЭМ-структурой развивается семимильными шагами. На подходе версия 1.0.0. Точнее,\nуже сейчас её можно использовать как alpha. Я попробовала на блоге, и уже этот\nтекст отображается со статикой, собранной <code class="language-text">bem tools 1.0.0</code>.<excerpt/></p>\n<p>Воспользоваться этой версией можно из ветки\n<a href="https://github.com/bem/bem-tools/tree/release-1.0.0">release-1.0.0</a>, то есть\nвместо версии написать в package.json</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js">  <span class="token string">"dependencies"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    <span class="token string">"bem"</span><span class="token punctuation">:</span> <span class="token string">"git://github.com/bem/bem-tools.git#7b07045b17ff"</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span></code></pre>\n      </div>\n<p>Или, ещё легче, структуру проекта можно позаимстровать из\n<a href="https://github.com/bem/project-stub/tree/feature/bt-1.0.0">project-stub/feature/bt-1.0.0</a>.\nВообще <code class="language-text">project-stub</code> очень удобное изобретение. Я все свои проекты начинаю с\nнего. Для перехода между версиями тоже отлично: просто делается сравнение\nтекущего проекта с другой веткой project-stub, и при применении всех изменений,\nпроект заводится из коробки.</p>\n<p>Итак, что у нас нового? Не принципиально в проекте, а с моей пользовательской\nточки зрения.</p>\n<p>Появилась возможность складывать минимизированные файлы не в\n<code class="language-text">_page.css</code> и <code class="language-text">_page.js</code>, а в файлы <code class="language-text">page.min.css</code> и <code class="language-text">page.min.js</code>. Кстати,\nproject-stub <a href="https://github.com/bem/project-stub/blob/142e92c58e2ecf0ea3b658f71c203fee214df8d1/.bem/make.js#L34">именно так и\nнастроен</a>.\nЭто для меня критичное изменение, потому что оно наконец-то дало возможность\nиспользовать <code class="language-text">bem tools</code> в блоге. Блог запущен на Jekyll, встроенном в GitHub,\nто есть хостится на технологии gh-pages. По умолчанию gh-pages не показывает\nфайлы, начинающиеся с подчеркивания. Есть трюк — добавить в корень репозитория\nфайл <code class="language-text">.nojekyll</code>, но тогда перестаёт работать Jekyll :-) В общем, мне\nприходилось пользоваться <a href="https://github.com/enb-make/enb">ENB</a> ради единственной\nфичи - возможности минимизировать в <code class="language-text">page.min.*</code>. ENB хорош, но мейнстрим есть\nмейнстрим, прехожу обратно на <code class="language-text">bem tools</code>.</p>\n<p>Еще одно важное user friendly изменение — уровни страниц теперь не содержат\nпапку <code class="language-text">.bem</code> с настройками, по крайней мере по умолчанию. Все настройки\nсосредоточены в папке <code class="language-text">.bem</code> <a href="https://github.com/bem/project-stub/tree/5231f6a2de35dabfd2017574673e40a2a36ed435/.bem">в корне\nпроекта</a>.</p>\n<p>Это изменеие не заметно, если начинать проект с project-stub и ничего не\nменять. Тогда не важно, какая структура. А вот внесение изменений стало\nпсихологически комфортнее. По крайней мере точно известно, что надо менять\n<code class="language-text">.bem</code> в корне.</p>\n<p>Для доставки библиотек на проект теперь использутеся\n<a href="https://github.com/bower/bower">Bower</a>, пакетный менеджер от Twitter. Про него\nтоже интересно почитать.</p>\n<p>Соответственно, в корне проекта появился файл\n<a href="https://github.com/bem/project-stub/blob/5231f6a2de35dabfd2017574673e40a2a36ed435/bower.json">bower.json</a>\nсо списком библиотек.</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n    <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"bem-project-stub"</span><span class="token punctuation">,</span>\n    <span class="token string">"version"</span><span class="token punctuation">:</span> <span class="token string">"0.0.1"</span><span class="token punctuation">,</span>\n    <span class="token string">"dependencies"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">"bem-core"</span><span class="token punctuation">:</span> <span class="token string">"9e5dc255421304fd652552c948cdf7af35dc8a68"</span><span class="token punctuation">,</span>\n        <span class="token string">"bem-components"</span><span class="token punctuation">:</span> <span class="token string">"bem/bem-components"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>И служебный файл <a href="https://github.com/bem/project-stub/blob/5231f6a2de35dabfd2017574673e40a2a36ed435/.bowerrc">.bowerrc</a>.</p>\n<p>Вместе с новой версией <code class="language-text">bem tools</code> блог теперь пользуется новыми библиотеками,\nхотя вообще это не взаимосвязано — библиотеки могут быть использованы и со старым\nсборщиком.</p>\n<p>Вместо <code class="language-text">bem-bl</code> в основе лежат блоки библиотеки <a href="https://github.com/bem/bem-core/tree/v1">bem-core</a>.\nОна только только <a href="http://clubs.ya.ru/bem/replies.xml?item_no=4301">анонсирована</a>.\nМиграция на библиотеку делается <a href="https://github.com/bem/bem-core/blob/v1/MIGRATION.ru.md">по инструкции</a>,\nи она несложная. Несмотря на введение нового JavaScript-based синтаксиса для\nBEMHTML шаблонов, старый лаконичный синтаксис тоже поддерживается. Так что в моём\nслучае нужно было только перевести JavaScript блоков на новую модульную систему.\n<a href="https://github.com/varya/bem-js-tutorial">Туториал по BEM JavaScript</a> как обычно\n— готовится.</p>\n<p>Таким образом, сборка блога наконец-то вошла в относительно стабильное состояние,\nа я теперь могу заниматься его контентом и улучшением frontend части.</p>',fields:{slug:"ru/issues/bem-tools-100-alpha/",prefix:"",disqusIdentifier:"ru-issues-bem-tools-100-alpha"},frontmatter:{title:"Бложик на bem tools 1.0.0alpha",date:"01 November 2013",v2:null,old:!0,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"ru/issues/bem-tools-100-alpha/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/beml-html-preprocessor/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/issues/beml-html-preprocessor/",prefix:"",lang:"en",disqusIdentifier:"en-issues-beml-html-preprocessor"},frontmatter:{title:"BEML - an HTML preprocessor for BEM"}}}}}});
//# sourceMappingURL=path---ru-issues-bem-tools-100-alpha-a62da1b90edf35296993.js.map