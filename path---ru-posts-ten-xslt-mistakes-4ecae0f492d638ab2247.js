webpackJsonp([0xd19c30094c5a],{675:function(e,t){e.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/ten-xslt-mistakes/index_ru.md absPath of file >>> MarkdownRemark",html:'<p>Перевод <a href="http://saxonica.blogharbor.com/blog/_archives/2010/6/11/4550606.html">статьи “The ten most common XSLT programming\nmistakes”</a>,\nссылка на которую недавно опубликована в <a href="http://clubs.ya.ru/xslt/">клубе XSLT на\nЯ.ру</a>.</p>\n<p>Недавно я сказал в ответ пользователю, что он попадает в наиболее\nраспространённые ловушки для программистов на XSLT. Вместо того, чтобы быть\nраздраженным, что я почти ожидал, он поблагодарил меня и спросил, не мог бы я\nрассказать ему о двугих ловушках.<excerpt/> Некоторые из нас помогают людям избежать этих\nловушек в течение многих лет, но, несмотря на это, я не припомню, чтобы видел\nсписок таких ловушек. Так что я решил потратить полчаса, чтобы составить такой\nсписок.</p>\n<ul>\n<li>Обрабатывать элементы в дефолтном пространстве имён (namespace). Если\nисходный XML-документ содержит декларацию дефолтного пространства имён\n<code class="language-text">xmlns=&quot;something&quot;</code>, то каждый раз, когда вы ссылаетесь на имя элемента в\nXPath-выражении или значении атрибута match, вы должны ясно давать понять, что\nвы имеете в виду элементы из этого пространства имён. В XSLT 1.0 вы должны\nсвязать префикс с этим пространством имён (например <code class="language-text">xmlns:p=&quot;something&quot;</code> в\nэлементе <code class="language-text">xsl:stylesheet</code>) и затем везде использовать этот префикс, напимер,\n<code class="language-text">match=&quot;p:chapter/p:section&quot;</code>. В XSLT 2.0 есть альтернатива - задекларировать в\nэлементе xslt:stylesheet <code class="language-text">default-xpath-namespace=&quot;something&quot;</code>.</li>\n<li>Использование относительных путей. xsl:apply и xsl:for-each принимают текущий\nузел; в рамках “цикла” пути должны быть написаны относительно текущего узла.\nНапример,</li>\n</ul>\n<p>  &#x3C;xsl:for-each select=“chapter”>&#x3C;xsl:value-of select=“title”/>&#x3C;/xsl:for-each></p>\n<p>Распространённая ошибка - использование абсолютных путей внутри цикла (например <em>select=“//title”</em>) или повторение имени контекстного узла в относительном пути (<em>select=“chapter/title”</em>).</li></p>\n  <li>Переменные содержат значения, а не фрагменты синтаксических выражений. Некоторые люди думают, что ссылка на переменную $x подобна макросу, распространяющемуся и на синтаксис xPath-выражений путйм буквального замещения - как в языках типа shell. Это не так: вы можете использовать переменные только там, где вы можете использовать значение. Например, если $N содержит строку \'para\', то выражение <em>chapter/$N</em> не означает того же, что и <em>chapter/para</em>. Вместо этого вам нужно <em>chapter/*[name()=$N]</em>. Если переменная содержит что-то более сложное, чем просто имя (например, запись xPath-пути), вам понадобится расширение, подобное saxon:evaluate(), чтобы вычислить это.</li>\n  <li>Шаблонные правила <em>xsl:apply-templates</em> - это не расширенные возможности языка для подвинутых пользователей. Это самые основные, фундаментальные конструкции в XSLT. Не откладывайте тот день, когда вы начнёте их использовать. Если вы не используете их, вы делаете свою жизнь излишне сложной.</li>\n  <li>XSLT принимает дерево на вход и отдаёт дерево на выходе. Непонимание этого является причиной многих разочарований, которые возникают у новичков в XSLT. XSLT не может обработать вещи, которые не представлены в дереве, предоставленном XML-парсером (области CDATA, ссылки на сущности (entity), XML-декларация), и не может сгенерировать эти вещи на выходе. Если вы думаете, что вам это необходимо, спросите "почему?". Возможно что-то не так с вашими требованиями или замыслом.</li>\n  <li>Пространства имён (namespace) - это трудно. Нет лёгкого способа опровергнуть это. Возможно, это требует отдельной статьи. Разгадка в понимании модели пространств имён. Пространства имён проявляются в двух ипостасях:\n<ol>  <li>Каждый элемент или атрибут имеет имя, состоящее из префикса, собственно имени и URI.</li>\n  <li>Элементы обладают узлами пространств имён, представляющими все префикс-uri соответствия в границах этого элемента.</li>\n</ol>\nКогда вы поймёте это, вы сможете понять особенности различных правил и их влияние на пространства имён в результирующем дереве. Чаще всего, всё, что вам нужно делать, это гарантировать, что создаваемые вами элементы находятся в верном пространстве имён, всё остальное произойдёт само собой.\n</li>\n  <li>Не используйте <em>disable-output-escaping</em>. Некоторые люди используют эту магическую приправу, но не понимают, что она делает. Они надеются, что это может заставить код работать лучше. Этот атрибут только для профессионалов, и профессионалы используют это только как последнее средство спасения. В 95% случаях, если вы встретили в преобразовании <em>disable-output-escaping</em>, это говорит о том, что автор был новичком, не понимающим, что он делает.</li>\n  <li>Инструкция <em><xsl:copy-of></em> создаёт точную копию исходного дерева, пространств имён и всего остального. (Есть исключение - в XSLT 2.0 вы можете сказать <em>copy-namespaces="no"</em>). Если вы хотите скопировать дерево с изменениями, вы не можете использовать <em>xsl:copy-of</em>. Вместо этого используйте шаблон идентичного преобразования: шаблон, который использует создание поверхностной копии элемента и применяет <em>applies-templates</em> ко всем его потомкам, дополненный шаблонами, переопределяющими это поведение для отдельных элементов.</li>\n  <li>Не используйте\n[cc lang="xml"]\n<xsl:variable name="x"><xsl:value-of select="y"/></xsl:variable>\n[/cc]\nВместо этого используйте\n[cc lang="xml"]\n<xsl:variable name="x" select="y"/>\n[/cc]\nПоследняя запись короче, более действенна при исполнении, и в любом случае она корректна.</li>\n  <li>Когда вам нужно найти информацию, используйте ключи. Также как и в случае с шаблонами, не откладывайте изучение использования ключей и не выбрасыйте их из головы как "продвинутую" возможность. Это важнейший инструмент разработки. Поиск информации без использования ключей сродни забиванию гвоздей отвёрткой.</li>\n</ol>',fields:{slug:"ru/posts/ten-xslt-mistakes/",prefix:"",disqusIdentifier:"ru-issues-ten-xslt-mistakes"},frontmatter:{title:"10 ошибок XSLT-программистов",date:"12 August 2010",v2:null,old:!0,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"ru/posts/ten-xslt-mistakes/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/scotland-css-and-js-2016/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/scotland-css-and-js-2016/",prefix:"",lang:"ru",disqusIdentifier:"posts-scotland-css-and-js-2016-index-ru"},frontmatter:{title:"Конференции ScotlandCSS и ScotlandJS. Организация",old:null}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/switching-to-bem-core-2/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/switching-to-bem-core-2/",prefix:"",lang:"en",disqusIdentifier:"en-issues-switching-to-bem-core-2"},frontmatter:{title:"Switching to bem-core#v2",old:!0}}}}}});
//# sourceMappingURL=path---ru-posts-ten-xslt-mistakes-4ecae0f492d638ab2247.js.map