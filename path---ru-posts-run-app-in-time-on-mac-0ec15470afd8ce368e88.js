webpackJsonp([87497837164065],{788:function(e,t){e.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/run-app-in-time-on-mac/index_ru.md absPath of file >>> MarkdownRemark",html:'<p>Я использую один и тот же ноутбук и для работы, и для личных дел. Это удобно, но за соблюдением баланса «работа-жизнь»\nприходится следить дополнительно. Я поступаю просто: уходя с работы, закрываю все приложения. Главное не забывать их\nоткрывать следующим утром. Но этот процесс можно автоматизировать :-)\n<excerpt/>\nОсобенно важно держать открытыми приложения, от которых зависит работа других членов команды. Например, с началом\nрабочего дня должен быть запущен джаббер (или другой используемый мессенджер).</p>\n<p>В AppGyver для общения всех со всеми\nиспользуют <a href="https://www.flowdock.com">Flowdock</a>. Вот мне и понадобилось гарантированно иметь его открытым с утра.</p>\n<p>Оказалось, что на Mac запуск приложения в определенное время можно сделать штатными средствами — при помощи приложения\nCalendar. Вот как:</p>\n<h3 id="Создайте-в-Календаре-новое-событие"><a href="#%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%B9%D1%82%D0%B5-%D0%B2-%D0%9A%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D0%B5-%D0%BD%D0%BE%D0%B2%D0%BE%D0%B5-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Создайте в Календаре новое событие</h3>\n<p>Я назвала своё «Run Flowdock». Время события не обязательно устанавливать с учетом того, чтобы компьютер был уже открыт.\nМожно и удобно запускать всё заранее. У моего события стоит <code class="language-text">9:35</code>.</p>\n<h3 id="Сделайте-событие-повторяющимся"><a href="#%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D0%B9%D1%82%D0%B5-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B5-%D0%BF%D0%BE%D0%B2%D1%82%D0%BE%D1%80%D1%8F%D1%8E%D1%89%D0%B8%D0%BC%D1%81%D1%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Сделайте событие повторяющимся</h3>\n<p>Событие должно повторяться каждую неделю по рабочим дням.</p>\n<h3 id="Запускайте-приложение"><a href="#%D0%97%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%D0%B9%D1%82%D0%B5-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Запускайте приложение</h3>\n<p>А теперь самое интересное. Приложение можно запускать как кастомное уведомление о событии.<br/><br/>\nВ выпадушке <code class="language-text">alert</code> нужно выбрать самый последний пункт — <code class="language-text">Custom</code>.<br/>\n<img class="article__image" src="http://img-fotki.yandex.ru/get/4802/14441195.32/0_88921_7d53950e_L.png" width="300" height="500" border="0" title="" alt=""></p>\n<p>В появившемся диалоге вместо <code class="language-text">Message</code> нужно выбрать <code class="language-text">Open file</code></p>\n<p><img class="article__image" src="http://img-fotki.yandex.ru/get/4813/14441195.32/0_88925_47986a79_M.png" width="300" height="167" border="0" title="" alt="">\n<img class="article__image" src="http://img-fotki.yandex.ru/get/5109/14441195.32/0_88924_ea39983e_M.png" width="300" height="162" border="0" title="" alt=""></p>\n<p>Под файлом здесь понимается приложение. По умолчанию это <code class="language-text">Calendar</code>, но можно выбрать и другое.</p>\n<p><img class="article__image" src="http://img-fotki.yandex.ru/get/4810/14441195.32/0_88922_22d155c7_M.png" width="300" height="193" border="0" title="" alt=""></p>\n<p>Затем в диалоговом окне Finder выбрать нужное приложение из папки <code class="language-text">Applications</code>. В моём случае это Flowdock.</p>\n<p><img class="article__image" src="http://img-fotki.yandex.ru/get/4809/14441195.32/0_88923_7597bf28_M.png" width="300" height="196" border="0" title="" alt=""></p>\n<p>Затем корректируем время. За 5 минут до 9:35 — как раз будет полдесятого. Напоминаю, это вовсе не означает, что к этому\nвремени нужно сидеть на работе с открытым ноутбуком. Можно ехать в автобусе или вообще спать. Приложение запустится\nтогда, когда вы откроете крышку.</p>\n<h3 id="Минусы"><a href="#%D0%9C%D0%B8%D0%BD%D1%83%D1%81%D1%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Минусы</h3>\n<p>Не без минусов. Этот же календарь на iPhone в 9:30 пиликает уведомлением о событии. Файл на телефоне он открыть не\nможет, поэтому просто радостно сообщает, что вот оно событие наступает.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Я использую один и тот же ноутбук и для работы, и для личных дел. Это удобно, но за соблюдением баланса «работа-жизнь»\nприходится следить дополнительно. Я поступаю просто: уходя с работы, закрываю все приложения. Главное не забывать их\nоткрывать следующим утром. Но этот процесс можно автоматизировать :-)\n"},{type:"element",tagName:"excerpt",properties:{},children:[{type:"text",value:"\nОсобенно важно держать открытыми приложения, от которых зависит работа других членов команды. Например, с началом\nрабочего дня должен быть запущен джаббер (или другой используемый мессенджер)."}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"В AppGyver для общения всех со всеми\nиспользуют "},{type:"element",tagName:"a",properties:{href:"https://www.flowdock.com"},children:[{type:"text",value:"Flowdock"}]},{type:"text",value:". Вот мне и понадобилось гарантированно иметь его открытым с утра."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Оказалось, что на Mac запуск приложения в определенное время можно сделать штатными средствами — при помощи приложения\nCalendar. Вот как:"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"Создайте-в-Календаре-новое-событие"},children:[{type:"element",tagName:"a",properties:{href:"#%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%B9%D1%82%D0%B5-%D0%B2-%D0%9A%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D0%B5-%D0%BD%D0%BE%D0%B2%D0%BE%D0%B5-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B5",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Создайте в Календаре новое событие"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Я назвала своё «Run Flowdock». Время события не обязательно устанавливать с учетом того, чтобы компьютер был уже открыт.\nМожно и удобно запускать всё заранее. У моего события стоит "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"9:35"}]},{type:"text",value:"."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"Сделайте-событие-повторяющимся"},children:[{type:"element",tagName:"a",properties:{href:"#%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D0%B9%D1%82%D0%B5-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B5-%D0%BF%D0%BE%D0%B2%D1%82%D0%BE%D1%80%D1%8F%D1%8E%D1%89%D0%B8%D0%BC%D1%81%D1%8F",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Сделайте событие повторяющимся"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Событие должно повторяться каждую неделю по рабочим дням."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"Запускайте-приложение"},children:[{type:"element",tagName:"a",properties:{href:"#%D0%97%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%D0%B9%D1%82%D0%B5-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Запускайте приложение"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"А теперь самое интересное. Приложение можно запускать как кастомное уведомление о событии."},{type:"element",tagName:"br",properties:{},children:[]},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nВ выпадушке "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"alert"}]},{type:"text",value:" нужно выбрать самый последний пункт — "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Custom"}]},{type:"text",value:"."},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"img",properties:{className:["article__image"],src:"http://img-fotki.yandex.ru/get/4802/14441195.32/0_88921_7d53950e_L.png",width:300,height:500,border:"0",title:"",alt:""},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"В появившемся диалоге вместо "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Message"}]},{type:"text",value:" нужно выбрать "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Open file"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"img",properties:{className:["article__image"],src:"http://img-fotki.yandex.ru/get/4813/14441195.32/0_88925_47986a79_M.png",width:300,height:167,border:"0",title:"",alt:""},children:[]},{type:"text",value:"\n"},{type:"element",tagName:"img",properties:{className:["article__image"],src:"http://img-fotki.yandex.ru/get/5109/14441195.32/0_88924_ea39983e_M.png",width:300,height:162,border:"0",title:"",alt:""},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Под файлом здесь понимается приложение. По умолчанию это "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Calendar"}]},{type:"text",value:", но можно выбрать и другое."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"img",properties:{className:["article__image"],src:"http://img-fotki.yandex.ru/get/4810/14441195.32/0_88922_22d155c7_M.png",width:300,height:193,border:"0",title:"",alt:""},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Затем в диалоговом окне Finder выбрать нужное приложение из папки "},{type:"element",tagName:"code",properties:{className:["language-text"]},children:[{type:"text",value:"Applications"}]},{type:"text",value:". В моём случае это Flowdock."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"img",properties:{className:["article__image"],src:"http://img-fotki.yandex.ru/get/4809/14441195.32/0_88923_7597bf28_M.png",width:300,height:196,border:"0",title:"",alt:""},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Затем корректируем время. За 5 минут до 9:35 — как раз будет полдесятого. Напоминаю, это вовсе не означает, что к этому\nвремени нужно сидеть на работе с открытым ноутбуком. Можно ехать в автобусе или вообще спать. Приложение запустится\nтогда, когда вы откроете крышку."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"Минусы"},children:[{type:"element",tagName:"a",properties:{href:"#%D0%9C%D0%B8%D0%BD%D1%83%D1%81%D1%8B",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Минусы"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Не без минусов. Этот же календарь на iPhone в 9:30 пиликает уведомлением о событии. Файл на телефоне он открыть не\nможет, поэтому просто радостно сообщает, что вот оно событие наступает."}]}],data:{quirksMode:!1}},fields:{slug:"ru/posts/run-app-in-time-on-mac/",prefix:"",disqusIdentifier:"posts-run-app-in-time-on-mac-index-ru"},frontmatter:{title:"Запускать вовремя (о приложениях на Mac)",subTitle:null,date:"10 September 2014",v2:!0,old:null,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"ru/posts/run-app-in-time-on-mac/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/sc5-style-guide-next-level/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/sc5-style-guide-next-level/",prefix:"",lang:"en",disqusIdentifier:"posts-sc5-style-guide-next-level-index-en",level:1},frontmatter:{title:"Living SC5 Styleguide, the next level",subTitle:null,v2:!0,old:null}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/run-app-in-time-on-mac/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/run-app-in-time-on-mac/",prefix:"",lang:"en",disqusIdentifier:"posts-run-app-in-time-on-mac-index-en",level:1},frontmatter:{title:"Run on time (about Mac applications)",subTitle:null,v2:!0,old:null}}}}}});
//# sourceMappingURL=path---ru-posts-run-app-in-time-on-mac-0ec15470afd8ce368e88.js.map