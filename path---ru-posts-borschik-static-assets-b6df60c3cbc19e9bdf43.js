webpackJsonp([69835175137051],{783:function(e,t){e.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/borschik-static-assets/index_ru.md absPath of file >>> MarkdownRemark",html:'<p>На прошлой неделе мне понадобилось сделать сайт, статика которого раздаётся с\nдругого сервера. Это касалось всех статических файлов: как подключенных к HTML\nдокументу CSS и JavaScript, так и изображений и шрифтов, использованных уже в\nих коде.<excerpt/> Хотя очевидно, что все они эти ресурсы должны быть локальными во\nвремя разработки. То есть задача была придумать магию, которая знает, где будет\nразмещена статика, и преобразовывает относительные пути в коде в абсолютные\nсогласно этому знанию.</p>\n<p>Эту задачу я решила при помощи инструмента\n<a href="http://bem.info/tools/optimizers/borschik/">Borschik</a>. Борщик-сборщик, всем\nдолжно быть понятно. :-)</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 80.11811023622047%; position: relative; height: 0; overflow: hidden;margin-bottom: 2em"\n          >\n            <center>\n<iframe src="//embed.gettyimages.com/embed/135591409?et=B_T3l-shrE-pr9-ELe_wJw&amp;sig=5haG67PAzCxGourA96ZB7m9LwSket1v9PpvXEXNIkBM=" frameborder="0" scrolling="no" style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n</center>\n          </div>\n          </div>\n<p>Демо-проект с этим решением находится в репозитории\n<a href="https://github.com/varya/st-deliverer">varya/st-deliverer</a></p>\n<h3 id="Структура-проекта"><a href="#%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Структура проекта</h3>\n<p>Как вы позже увидите, <code class="language-text">borschik</code> можно гибко настроить. Так что возможна любая\nструктура проекта. В моём проекте все хранится в директории\n<a href="b.com/varya/st-deliverer/tree/master/src">src</a>.\nПосле сборки получается HTML-файлы в папке\n<a href="https://github.com/varya/st-deliverer/tree/gh-pages/dist/html">dist/html</a>.\nПроверьте его код, и вы убедитесь, что статические файлы подключены с другого\nхоста по абсолютному пути.</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Deliver static assets with Borschik<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span>\n      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://varya.github.io/stor.../styles.css<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span>\n    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>page<span class="token punctuation">"</span></span>\n    <span class="token attr-name">background</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://varya.github.io/stor.../grungy.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  ...</code></pre>\n      </div>\n<p>Страничку можно <a href="http://varya.me/st-deliverer/dist/html/">открыть в браузере</a> и\nнасладиться моим дизайном и прекрасным котиком.</p>\n<h3 id="borschik-в-вашем-проекте"><a href="#borschik-%D0%B2-%D0%B2%D0%B0%D1%88%D0%B5%D0%BC-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Borschik в вашем проекте</h3>\n<p>Borschik — это npm-пакет. Его можно установить глобально при помощи команды</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> -g borschik</code></pre>\n      </div>\n<p>Но лично я предпочитаю локальные зависимости, так что завожу в корне проекта\nфайл\n<a href="https://github.com/varya/st-deliverer/blob/master/package.json">package.json</a>:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  <span class="token operator">...</span>\n  <span class="token string">"dependencies"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"borschik"</span><span class="token punctuation">:</span> <span class="token string">"0.4.2"</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<h3 id="Настройка"><a href="#%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Настройка</h3>\n<p>Прежде чем начинать преобразования, нужно проинструктировать <code class="language-text">borschik</code>, что\nпреобразовывать и как. Для этого нужен конфигурационный файл\n<a href="https://github.com/varya/st-deliverer/blob/master/.borschik">.borschik</a>:</p>\n<div class="gatsby-highlight" data-language="js">\n      <pre class="language-js"><code class="language-js"><span class="token punctuation">{</span>\n  <span class="token string">"paths"</span> <span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token string">"src/img/"</span><span class="token punctuation">:</span> <span class="token string">"http://varya.github.io/stor.../st-deliverer/img/"</span><span class="token punctuation">,</span>\n    <span class="token string">"src/css/"</span><span class="token punctuation">:</span> <span class="token string">"http://varya.github.io/stor.../st-deliverer/css/"</span><span class="token punctuation">,</span>\n    <span class="token string">"src/font/"</span><span class="token punctuation">:</span> <span class="token string">"http://varya.github.io/storage/fonts/"</span>\n\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Заметьте, для разных путей можно настроить разную замену. Здесь это видно на\nпримере с фонами.</p>\n<h3 id="Запускаем"><a href="#%D0%97%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%D0%B5%D0%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Запускаем!</h3>\n<p>Запустите <code class="language-text">borschik</code> над файлом, содержащим ссылки на локальные статические\nресурсы, и вы получите результат преобразования. Например,</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash">./node_modules/borschik/bin/borschik \\\n  --input<span class="token operator">=</span>src/css/styles.css</code></pre>\n      </div>\n<p>Чтобы использовать это в сборке, понадобится ещё один флаг <code class="language-text">--output</code>,\nсообщающий куда записать получившееся.</p>\n<p><code class="language-text">borschik</code> знаком с синтаксисом web-технологий. То есть “ссылки” размещенные в\nпростом тексте останутся нетронутыми.</p>\n<h3 id="Система-сборки"><a href="#%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Система сборки</h3>\n<p>Теперь <code class="language-text">borschik</code> можно включить в систему сборки проекта. В моём случае это\nнебольшой\n<a href="https://github.com/varya/st-deliverer/blob/master/Makefile">Makefile</a>, спасибо\n<a href="https://github.com/alexeyten">@alexeyten</a> за 90% его содержания. :-) Но есть\nтакже и плагин для grunt <a href="https://github.com/megatolya/grunt-borschik">megatolya/grunt-borschik</a>.<br/>\nКонечно, <code class="language-text">borschik</code> включен в системы сборки БЭМ-проектов\n<a href="http://bem.info/tools/bem/bem-tools/">bem-tools</a>\nи <a href="https://github.com/enb-make/enb">enb</a></p>\n<h3 id="Результат"><a href="#%D0%A0%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Результат</h3>\n<p>Для закрепления <a href="http://varya.me/st-deliverer/dist/html/">проведайте котика ещё раз</a>.</p>\n<p>А узнать о многих других возможностях <code class="language-text">borschik</code> можно из статьи\n<a href="http://ru.bem.info/articles/borschik/">http://ru.bem.info/articles/borschik/</a>.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"На прошлой неделе мне понадобилось сделать сайт, статика которого раздаётся с\nдругого сервера. Это касалось всех статических файлов: как подключенных к HTML\nдокументу CSS и JavaScript, так и изображений и шрифтов, использованных уже в\nих коде."},{type:"element",tagName:"excerpt",properties:{},children:[{type:"text",value:" Хотя очевидно, что все они эти ресурсы должны быть локальными во\nвремя разработки. То есть задача была придумать магию, которая знает, где будет\nразмещена статика, и преобразовывает относительные пути в коде в абсолютные\nсогласно этому знанию."}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Эту задачу я решила при помощи инструмента\n"},{type:"element",tagName:"a",properties:{href:"http://bem.info/tools/optimizers/borschik/"},children:[{type:"text",value:"Borschik"}]},{type:"text",value:". Борщик-сборщик, всем\nдолжно быть понятно. :-)"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{},children:[{type:"text",value:"\n          "},{type:"element",tagName:"div",properties:{className:["gatsby-resp-iframe-wrapper"],style:"padding-bottom: 80.11811023622047%; position: relative; height: 0; overflow: hidden;margin-bottom: 2em"},children:[{type:"text",value:"\n            "},{type:"element",tagName:"center",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"iframe",properties:{src:"//embed.gettyimages.com/embed/135591409?et=B_T3l-shrE-pr9-ELe_wJw&sig=5haG67PAzCxGourA96ZB7m9LwSket1v9PpvXEXNIkBM=",frameBorder:"0",scrolling:"no",style:"\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "},children:[]},{type:"text",value:"\n"}]},{type:"text",value:"\n          "}]},{type:"text",value:"\n          "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Демо-проект с этим решением находится в репозитории\n"},{type:"element",tagName:"a",properties:{href:"https://github.com/varya/st-deliverer"},children:[{type:"text",value:"varya/st-deliverer"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"Структура-проекта"},children:[{type:"element",tagName:"a",properties:{href:"#%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Структура проекта"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Как вы позже увидите, "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"borschik"}]},{type:"text",value:" можно гибко настроить. Так что возможна любая\nструктура проекта. В моём проекте все хранится в директории\n"},{type:"element",tagName:"a",properties:{href:"b.com/varya/st-deliverer/tree/master/src"},children:[{type:"text",value:"src"}]},{type:"text",value:".\nПосле сборки получается HTML-файлы в папке\n"},{type:"element",tagName:"a",properties:{href:"https://github.com/varya/st-deliverer/tree/gh-pages/dist/html"},children:[{type:"text",value:"dist/html"}]},{type:"text",value:".\nПроверьте его код, и вы убедитесь, что статические файлы подключены с другого\nхоста по абсолютному пути."}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"html"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-html"]},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"html"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"head"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"title"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"Deliver static assets with Borschik"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"title"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"link"}]},{type:"text",value:"\n      "},{type:"element",tagName:"span",properties:{className:["token","attr-name"]},children:[{type:"text",value:"rel"}]},{type:"element",tagName:"span",properties:{className:["token","attr-value"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"="}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]},{type:"text",value:"stylesheet"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]}]},{type:"text",value:"\n      "},{type:"element",tagName:"span",properties:{className:["token","attr-name"]},children:[{type:"text",value:"href"}]},{type:"element",tagName:"span",properties:{className:["token","attr-value"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"="}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]},{type:"text",value:"http://varya.github.io/stor.../styles.css"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"/>"}]}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"head"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"body"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","attr-name"]},children:[{type:"text",value:"class"}]},{type:"element",tagName:"span",properties:{className:["token","attr-value"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"="}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]},{type:"text",value:"page"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","attr-name"]},children:[{type:"text",value:"background"}]},{type:"element",tagName:"span",properties:{className:["token","attr-value"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"="}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]},{type:"text",value:"http://varya.github.io/stor.../grungy.jpg"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n  ..."}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Страничку можно "},{type:"element",tagName:"a",properties:{href:"http://varya.me/st-deliverer/dist/html/"},children:[{type:"text",value:"открыть в браузере"}]},{type:"text",value:" и\nнасладиться моим дизайном и прекрасным котиком."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"borschik-в-вашем-проекте"},children:[{type:"element",tagName:"a",properties:{href:"#borschik-%D0%B2-%D0%B2%D0%B0%D1%88%D0%B5%D0%BC-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B5",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Borschik в вашем проекте"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Borschik — это npm-пакет. Его можно установить глобально при помощи команды"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"bash"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-bash"]},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"npm"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"install"}]},{type:"text",value:" -g borschik"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Но лично я предпочитаю локальные зависимости, так что завожу в корне проекта\nфайл\n"},{type:"element",tagName:"a",properties:{href:"https://github.com/varya/st-deliverer/blob/master/package.json"},children:[{type:"text",value:"package.json"}]},{type:"text",value:":"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"js"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-js"]},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"..."}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"dependencies"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"borschik"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"0.4.2"'}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"..."}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"Настройка"},children:[{type:"element",tagName:"a",properties:{href:"#%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Настройка"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Прежде чем начинать преобразования, нужно проинструктировать "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"borschik"}]},{type:"text",value:", что\nпреобразовывать и как. Для этого нужен конфигурационный файл\n"},{type:"element",tagName:"a",properties:{href:"https://github.com/varya/st-deliverer/blob/master/.borschik"},children:[{type:"text",value:".borschik"}]},{type:"text",value:":"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"js"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-js"]},children:[{type:"element",tagName:"code",properties:{className:["language-js"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"paths"'}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"{"}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"src/img/"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"http://varya.github.io/stor.../st-deliverer/img/"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"src/css/"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"http://varya.github.io/stor.../st-deliverer/css/"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:","}]},{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"src/font/"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:":"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"http://varya.github.io/storage/fonts/"'}]},{type:"text",value:"\n\n  "},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"}"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Заметьте, для разных путей можно настроить разную замену. Здесь это видно на\nпримере с фонами."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"Запускаем"},children:[{type:"element",tagName:"a",properties:{href:"#%D0%97%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%D0%B5%D0%BC",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Запускаем!"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Запустите "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"borschik"
}]},{type:"text",value:" над файлом, содержащим ссылки на локальные статические\nресурсы, и вы получите результат преобразования. Например,"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"bash"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-bash"]},children:[{type:"element",tagName:"code",properties:{className:["language-bash"]},children:[{type:"text",value:"./node_modules/borschik/bin/borschik \\\n  --input"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:"src/css/styles.css"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Чтобы использовать это в сборке, понадобится ещё один флаг "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"--output"}]},{type:"text",value:",\nсообщающий куда записать получившееся."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"borschik"}]},{type:"text",value:" знаком с синтаксисом web-технологий. То есть “ссылки” размещенные в\nпростом тексте останутся нетронутыми."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"Система-сборки"},children:[{type:"element",tagName:"a",properties:{href:"#%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B8",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Система сборки"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Теперь "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"borschik"}]},{type:"text",value:" можно включить в систему сборки проекта. В моём случае это\nнебольшой\n"},{type:"element",tagName:"a",properties:{href:"https://github.com/varya/st-deliverer/blob/master/Makefile"},children:[{type:"text",value:"Makefile"}]},{type:"text",value:", спасибо\n"},{type:"element",tagName:"a",properties:{href:"https://github.com/alexeyten"},children:[{type:"text",value:"@alexeyten"}]},{type:"text",value:" за 90% его содержания. :-) Но есть\nтакже и плагин для grunt "},{type:"element",tagName:"a",properties:{href:"https://github.com/megatolya/grunt-borschik"},children:[{type:"text",value:"megatolya/grunt-borschik"}]},{type:"text",value:"."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nКонечно, "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"borschik"}]},{type:"text",value:" включен в системы сборки БЭМ-проектов\n"},{type:"element",tagName:"a",properties:{href:"http://bem.info/tools/bem/bem-tools/"},children:[{type:"text",value:"bem-tools"}]},{type:"text",value:"\nи "},{type:"element",tagName:"a",properties:{href:"https://github.com/enb-make/enb"},children:[{type:"text",value:"enb"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"Результат"},children:[{type:"element",tagName:"a",properties:{href:"#%D0%A0%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Результат"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Для закрепления "},{type:"element",tagName:"a",properties:{href:"http://varya.me/st-deliverer/dist/html/"},children:[{type:"text",value:"проведайте котика ещё раз"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"А узнать о многих других возможностях "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"borschik"}]},{type:"text",value:" можно из статьи\n"},{type:"element",tagName:"a",properties:{href:"http://ru.bem.info/articles/borschik/"},children:[{type:"text",value:"http://ru.bem.info/articles/borschik/"}]},{type:"text",value:"."}]}],data:{quirksMode:!1}},fields:{slug:"ru/posts/borschik-static-assets/",prefix:"",disqusIdentifier:"ru-issues-borschik-static-assets"},frontmatter:{title:"Локальная разработка и удаленный хостинг статики",subTitle:null,date:"12 March 2014",v2:null,old:!0,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"ru/posts/borschik-static-assets/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/communication-culture/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/communication-culture/",prefix:"",lang:"en",disqusIdentifier:"posts-communication-culture-index-en",level:1},frontmatter:{title:"Aspect of in-company communication for innovation",subTitle:null,v2:!0,old:null}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/borschik-static-assets/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/borschik-static-assets/",prefix:"",lang:"en",disqusIdentifier:"en-issues-borschik-static-assets",level:1},frontmatter:{title:"Borschik helps with remote static assets",subTitle:null,v2:null,old:!0}}}}}});
//# sourceMappingURL=path---ru-posts-borschik-static-assets-b6df60c3cbc19e9bdf43.js.map