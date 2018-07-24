webpackJsonp([44726415966994],{705:function(e,t){e.exports={data:{post:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/xpath-prime-numbers/index_ru.md absPath of file >>> MarkdownRemark",html:'<p>Иногда мы на работе решаем интересные задачки. Вот, например, одна (почти первая) в постановке\n<a href="http://alpha-san.ya.ru/"><span style="color: #000000;"><strong><span style="color: #ff0000;">n</span>op`а</strong></span></a>:\n<excerpt/></p>\n<h2>Частный случай</h2>\n<p>Дан такой xml:</p>\n<div class="gatsby-highlight" data-language="xml">\n      <pre class="language-xml"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>items</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">></span></span>\n  ...\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">></span></span>N-1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">></span></span>N<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>items</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>т.е. выписаны все натуральные числа от 1 до N включительно. Про N ничего заранее не известно —\nбольшое, маленькое, еще какое-то — мы не знаем.</p>\n<p>Нужно. Написать <strong>xpath</strong>, выбирающий все item’ы с простыми числами.\nПодчеркиваю - <strong>xpath</strong>.\nТ.е. внутри тега xsl:stylesheet должен быть один примерно такой шаблон:</p>\n<div class="gatsby-highlight" data-language="xslt">\n      <pre class="language-xslt"><code class="language-xslt">&lt;xsl:template match=&quot;/&quot;&gt;\n  &lt;xsl:copy-of select=&quot;.......&quot;/&gt;\n&lt;/xsl:template&gt;</code></pre>\n      </div>\n<p>и больше ничего — ни переменных, ни других шаблонов, ни функций.</p>\n<p>На выходе будет что-то типа:</p>\n<div class="gatsby-highlight" data-language="xml">\n      <pre class="language-xml"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">></span></span>7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">></span></span>\n...</code></pre>\n      </div>\n<p>Решение следующее:</p>\n<div class="gatsby-highlight" data-language="xslt">\n      <pre class="language-xslt"><code class="language-xslt">&lt;xsl:template match=&quot;/&quot;&gt;\n  &lt;items&gt;\n    &lt;xsl:copy-of\n      select=&quot;items/item[\n        not(preceding-sibling::item[(last() + 1) mod . = 0 and . != 1])\n        and\n        . != 1\n      ]&quot;/&gt;\n  &lt;/items&gt;\n&lt;/xsl:template&gt;</code></pre>\n      </div>\n<h2>Общая задача</h2>\n<p>Усложненный вариант — все тоже самое, но в xml просто набор item’ов с какими-то натуральными числами\nв каком-то порядке, например:</p>\n<div class="gatsby-highlight" data-language="xml">\n      <pre class="language-xml"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>items</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">></span></span>142<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">></span></span>73<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">></span></span>10000341<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">></span></span>10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">></span></span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>items</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Решение:</p>\n<div class="gatsby-highlight" data-language="xslt">\n      <pre class="language-xslt"><code class="language-xslt">&lt;xsl:template match=&quot;/&quot;&gt;\n  &lt;items&gt;\n    &lt;xsl:copy-of select=&quot;items/item[\n      not(\n        str:tokenize(str:padding(. - 1, &#39;1&#39;), &#39;&#39;)[\n          (last() + 1 ) mod position()= 0\n          and position() != 1\n        ]\n      ) and . != 1\n      ]&quot;/&gt;\n  &lt;/items&gt;\n&lt;/xsl:template&gt;</code></pre>\n      </div>\n<p>Чтобы понять, что тут делается, надо прочитать про функции\n<a href="http://exslt.org/str/functions/padding/index.html">padding</a> и\n<a href="http://exslt.org/str/functions/tokenize/index.html">tokenize</a> на EXSLT.org.</p>',htmlAst:{type:"root",children:[{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Иногда мы на работе решаем интересные задачки. Вот, например, одна (почти первая) в постановке\n"},{type:"element",tagName:"a",properties:{href:"http://alpha-san.ya.ru/"},children:[{type:"element",tagName:"span",properties:{style:"color: #000000;"},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"element",tagName:"span",properties:{style:"color: #ff0000;"},children:[{type:"text",value:"n"}]},{type:"text",value:"op`а"}]}]}]},{type:"text",value:":\n"},{type:"element",tagName:"excerpt",properties:{},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Частный случай"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Дан такой xml:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"xml"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-xml"]},children:[{type:"element",tagName:"code",properties:{className:["language-xml"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"items"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"1"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"2"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n  ...\n  "},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"N-1"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"N"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"items"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"т.е. выписаны все натуральные числа от 1 до N включительно. Про N ничего заранее не известно —\nбольшое, маленькое, еще какое-то — мы не знаем."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Нужно. Написать "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"xpath"}]},{type:"text",value:", выбирающий все item’ы с простыми числами.\nПодчеркиваю - "},{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"xpath"}]},{type:"text",value:".\nТ.е. внутри тега xsl:stylesheet должен быть один примерно такой шаблон:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"xslt"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-xslt"]},children:[{type:"element",tagName:"code",properties:{className:["language-xslt"]},children:[{type:"text",value:'<xsl:template match="/">\n  <xsl:copy-of select="......."/>\n</xsl:template>'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"и больше ничего — ни переменных, ни других шаблонов, ни функций."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"На выходе будет что-то типа:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"xml"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-xml"]},children:[{type:"element",tagName:"code",properties:{className:["language-xml"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"2"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"3"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"5"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"7"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n..."}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Решение следующее:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"xslt"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-xslt"]},children:[{type:"element",tagName:"code",properties:{className:["language-xslt"]},children:[{type:"text",value:'<xsl:template match="/">\n  <items>\n    <xsl:copy-of\n      select="items/item[\n        not(preceding-sibling::item[(last() + 1) mod . = 0 and . != 1])\n        and\n        . != 1\n      ]"/>\n  </items>\n</xsl:template>'}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Общая задача"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Усложненный вариант — все тоже самое, но в xml просто набор item’ов с какими-то натуральными числами\nв каком-то порядке, например:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"xml"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-xml"]},children:[{type:"element",tagName:"code",properties:{className:["language-xml"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"items"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"142"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"73"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"10000341"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"10"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"item"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]},{type:"text",value:"\n  ...\n"},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"items"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Решение:"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"],dataLanguage:"xslt"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-xslt"]},children:[{type:"element",tagName:"code",properties:{className:["language-xslt"]},children:[{type:"text",value:"<xsl:template match=\"/\">\n  <items>\n    <xsl:copy-of select=\"items/item[\n      not(\n        str:tokenize(str:padding(. - 1, '1'), '')[\n          (last() + 1 ) mod position()= 0\n          and position() != 1\n        ]\n      ) and . != 1\n      ]\"/>\n  </items>\n</xsl:template>"}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Чтобы понять, что тут делается, надо прочитать про функции\n"},{type:"element",tagName:"a",properties:{href:"http://exslt.org/str/functions/padding/index.html"},children:[{type:"text",value:"padding"}]},{type:"text",value:" и\n"},{type:"element",tagName:"a",properties:{href:"http://exslt.org/str/functions/tokenize/index.html"},children:[{type:"text",value:"tokenize"}]},{type:"text",value:" на EXSLT.org."}]}],data:{quirksMode:!1}},fields:{slug:"ru/posts/xpath-prime-numbers/",prefix:"",disqusIdentifier:"ru-issues-xpath-prime-numbers"},frontmatter:{title:"Простые числа и XPath",subTitle:null,date:"21 June 2009",v2:null,old:!0,tumblr:null,meta:null,cover:null}},authornote:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/parts/author.md absPath of file >>> MarkdownRemark",html:'<p><strong>Mr. Gatsby</strong> Proin ornare ligula eu tellus tempus elementum. Aenean <a href="/">bibendum</a> iaculis mi, nec blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus. Blandit lacus interdum vitae. Vestibulum non nibh risus, a scelerisque purus.</p>'},site:{siteMetadata:{siteUrl:"http://varya.me/"}}},pathContext:{slug:"ru/posts/xpath-prime-numbers/",prev:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/xslt-recursion/index_ru.md absPath of file >>> MarkdownRemark",fields:{slug:"ru/posts/xslt-recursion/",prefix:"",lang:"ru",disqusIdentifier:"ru-issues-xslt-recursion",level:1},frontmatter:{title:"Эффективное использование рекурсии в XSL",subTitle:null,v2:null,old:!0}},next:{id:"/Users/varya/WebDev/Personal/varya.github.com/content/posts/what-makes-entrepreneurs-entrepreneurial/index_en.md absPath of file >>> MarkdownRemark",fields:{slug:"en/posts/what-makes-entrepreneurs-entrepreneurial/",prefix:"",lang:"en",disqusIdentifier:"posts-what-makes-entrepreneurs-entrepreneurial-index-en",level:1},frontmatter:{title:"What   makes   entrepreneurs   entrepreneurial?",subTitle:null,v2:!0,old:null}}}}}});
//# sourceMappingURL=path---ru-posts-xpath-prime-numbers-79459f63d113b3ea42a5.js.map