webpackJsonp([69835175137051],{647:function(s,a){s.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya-gatsby/content/posts/borschik-static-assets/index_ru.md absPath of file >>> MarkdownRemark",html:'<p>На прошлой неделе мне понадобилось сделать сайт, статика которого раздаётся с\nдругого сервера. Это касалось всех статических файлов: как подключенных к HTML\nдокументу CSS и JavaScript, так и изображений и шрифтов, использованных уже в\nих коде.<excerpt/> Хотя очевидно, что все они эти ресурсы должны быть локальными во\nвремя разработки. То есть задача была придумать магию, которая знает, где будет\nразмещена статика, и преобразовывает относительные пути в коде в абсолютные\nсогласно этому знанию.</p>\n<p>Эту задачу я решила при помощи инструмента\n<a href="http://bem.info/tools/optimizers/borschik/">Borschik</a>. Борщик-сборщик, всем\nдолжно быть понятно. :-)</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 80.11811023622047%; position: relative; height: 0; overflow: hidden;margin-bottom: 2em"\n          >\n            <center>\n<iframe src="//embed.gettyimages.com/embed/135591409?et=B_T3l-shrE-pr9-ELe_wJw&amp;sig=5haG67PAzCxGourA96ZB7m9LwSket1v9PpvXEXNIkBM=" frameborder="0" scrolling="no" style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n</center>\n          </div>\n          </div>\n<p>Демо-проект с этим решением находится в репозитории\n<a href="https://github.com/varya/st-deliverer">varya/st-deliverer</a></p>\n<h3>Структура проекта</h3>\n<p>Как вы позже увидите, <code class="language-text">borschik</code> можно гибко настроить. Так что возможна любая\nструктура проекта. В моём проекте все хранится в директории\n<a href="b.com/varya/st-deliverer/tree/master/src">src</a>.\nПосле сборки получается HTML-файлы в папке\n<a href="https://github.com/varya/st-deliverer/tree/gh-pages/dist/html">dist/html</a>.\nПроверьте его код, и вы убедитесь, что статические файлы подключены с другого\nхоста по абсолютному пути.</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Deliver static assets with Borschik<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>\n      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://varya.github.io/stor.../styles.css<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span>\n    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>page<span class="token punctuation">"</span></span>\n    <span class="token attr-name">background</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://varya.github.io/stor.../grungy.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  ...</code></pre>\n      </div>\n<p>Страничку можно <a href="http://varya.me/st-deliverer/dist/html/">открыть в браузере</a> и\nнасладиться моим дизайном и прекрасным котиком.</p>\n<h3>Borschik в вашем проекте</h3>\n<p>Borschik — это npm-пакет. Его можно установить глобально при помощи команды</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> -g borschik</code></pre>\n      </div>\n<p>Но лично я предпочитаю локальные зависимости, так что завожу в корне проекта\nфайл\n<a href="https://github.com/varya/st-deliverer/blob/master/package.json">package.json</a>:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  <span class="token string">"dependencies"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"borschik"</span><span class="token punctuation">:</span> <span class="token string">"0.4.2"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3>Настройка</h3>\n<p>Прежде чем начинать преобразования, нужно проинструктировать <code class="language-text">borschik</code>, что\nпреобразовывать и как. Для этого нужен конфигурационный файл\n<a href="https://github.com/varya/st-deliverer/blob/master/.borschik">.borschik</a>:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  <span class="token string">"paths"</span> <span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"src/img/"</span><span class="token punctuation">:</span> <span class="token string">"http://varya.github.io/stor.../st-deliverer/img/"</span><span class="token punctuation">,</span>\n    <span class="token string">"src/css/"</span><span class="token punctuation">:</span> <span class="token string">"http://varya.github.io/stor.../st-deliverer/css/"</span><span class="token punctuation">,</span>\n    <span class="token string">"src/font/"</span><span class="token punctuation">:</span> <span class="token string">"http://varya.github.io/storage/fonts/"</span>\n\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Заметьте, для разных путей можно настроить разную замену. Здесь это видно на\nпримере с фонами.</p>\n<h3>Запускаем!</h3>\n<p>Запустите <code class="language-text">borschik</code> над файлом, содержащим ссылки на локальные статические\nресурсы, и вы получите результат преобразования. Например,</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">./node_modules/borschik/bin/borschik \\\n  --input<span class="token operator">=</span>src/css/styles.css</code></pre>\n      </div>\n<p>Чтобы использовать это в сборке, понадобится ещё один флаг <code class="language-text">--output</code>,\nсообщающий куда записать получившееся.</p>\n<p><code class="language-text">borschik</code> знаком с синтаксисом web-технологий. То есть “ссылки” размещенные в\nпростом тексте останутся нетронутыми.</p>\n<h3>Система сборки</h3>\n<p>Теперь <code class="language-text">borschik</code> можно включить в систему сборки проекта. В моём случае это\nнебольшой\n<a href="https://github.com/varya/st-deliverer/blob/master/Makefile">Makefile</a>, спасибо\n<a href="https://github.com/alexeyten">@alexeyten</a> за 90% его содержания. :-) Но есть\nтакже и плагин для grunt <a href="https://github.com/megatolya/grunt-borschik">megatolya/grunt-borschik</a>.<br/>\nКонечно, <code class="language-text">borschik</code> включен в системы сборки БЭМ-проектов\n<a href="http://bem.info/tools/bem/bem-tools/">bem-tools</a>\nи <a href="https://github.com/enb-make/enb">enb</a></p>\n<h3>Результат</h3>\n<p>Для закрепления <a href="http://varya.me/st-deliverer/dist/html/">проведайте котика ещё раз</a>.</p>\n<p>А узнать о многих других возможностях <code class="language-text">borschik</code> можно из статьи\n<a href="http://ru.bem.info/articles/borschik/">http://ru.bem.info/articles/borschik/</a>.</p>',fields:{slug:"ru/posts/borschik-static-assets/",prefix:"",disqusIdentifier:"ru-posts-borschik-static-assets"},frontmatter:{title:"Локальная разработка и удаленный хостинг статики",date:"12 March 2014",v2:null,old:!0,tumblr:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya-gatsby/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"ru/posts/borschik-static-assets/",prev:{id:"/Users/varya/WebDev/Personal/varya-gatsby/content/posts/borschik-static-assets/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/borschik-static-assets/",prefix:"",lang:"en",disqusIdentifier:"en-posts-borschik-static-assets"},frontmatter:{title:"Borschik helps with remote static assets"}},next:{id:"/Users/varya/WebDev/Personal/varya-gatsby/content/posts/blocks-and-bundles/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/blocks-and-bundles/",prefix:"",lang:"ru",disqusIdentifier:"ru-posts-blocks-and-bundles"},frontmatter:{title:"Блоки как кирпичи и бандлы как дома"}}}}}});
//# sourceMappingURL=path---ru-posts-borschik-static-assets-593f89be16259813e6d8.js.map