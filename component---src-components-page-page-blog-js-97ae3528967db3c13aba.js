(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"9eSz":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var n,i=a(r("PJYZ")),o=a(r("VbXa")),s=a(r("8OQS")),l=a(r("pVnL")),d=a(r("q1tI")),c=a(r("17x9")),u=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,n=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,a=m(t||r||[]);return a&&a.src},m=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),r=p(t);return h[r]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,b=v&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},a&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:a,sizes:i}),r&&d.default.createElement("source",{media:n,srcSet:r,sizes:i}))}))}function w(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function x(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function O(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function I(e,t){var r=e.srcSet,a=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?a:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var z=function(e,t){var r=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+o+s+r+a+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=d.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=d.default.createElement(P,(0,l.default)({ref:t,src:r},i,{ariaHidden:o}));return a.length>1?d.default.createElement("picture",null,n(a),s):s})),P=d.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:r,srcSet:a,src:n},m,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));P.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var j=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=v&&g(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!y&&b&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||v&&(y||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=d.default.createRef(),r.placeholderRef=t.placeholderRef||d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),(r=p(t))&&(h[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,v=e.durationFadeIn,b=e.Tag,S=e.itemProp,w=e.loading,I=e.draggable,z=h||g;if(!z)return null;var j=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,l.default)({opacity:j?1:0,transition:k?"opacity "+v+"ms":"none"},s),q="boolean"==typeof y?"lightgray":y,_={transitionDelay:v+"ms"},V=(0,l.default)({opacity:this.state.imgLoaded?0:1},k&&_,s,f),N={title:t,alt:this.state.isVisible?"":r,style:V,className:p,itemProp:S},T=this.state.isHydrated?m(z):z[0];if(h)return d.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),q&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&_)}),T.base64&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:N,imageVariants:z,generateSources:O}),T.tracedSVG&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:N,imageVariants:z,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,E(z),d.default.createElement(P,{alt:r,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:r,title:t,loading:w},T,{imageVariants:z}))}}));if(g){var H=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},i);return"inherit"===i.display&&delete H.display,d.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},q&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:q,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},k&&_)}),T.base64&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:N,imageVariants:z,generateSources:O}),T.tracedSVG&&d.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:N,imageVariants:z,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,E(z),d.default.createElement(P,{alt:r,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:r,title:t,loading:w},T,{imageVariants:z}))}}))}return null},t}(d.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),C=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function q(e){return function(t,r,a){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[r]=e,n),t,"prop",a)}}j.propTypes={resolutions:k,sizes:C,fixed:q(c.default.oneOfType([k,c.default.arrayOf(k)])),fluid:q(c.default.oneOfType([C,c.default.arrayOf(C)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var _=j;t.default=_},"A2+M":function(e,t,r){var a=r("X8hv");e.exports={MDXRenderer:a}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,r){var a=r("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},RIqP:function(e,t,r){var a=r("Ijbi"),n=r("EbDI"),i=r("ZhPi"),o=r("Bnag");e.exports=function(e){return a(e)||n(e)||i(e)||o()}},SksO:function(e,t){function r(t,a){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,a)}e.exports=r},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}},X8hv:function(e,t,r){var a=r("sXyB"),n=r("RIqP"),i=r("lSNA"),o=r("8OQS");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=r("q1tI"),c=r("7ljp").mdx,u=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,i=o(e,["scope","children"]),s=u(t),f=d.useMemo((function(){if(!r)return null;var e=l({React:d,mdx:c},s),t=Object.keys(e),i=t.map((function(t){return e[t]}));return a(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(i)))}),[r,t]);return d.createElement(f,l({},i))}},ZhPi:function(e,t,r){var a=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}},aczs:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n=o(r("q1tI")),i=o(r("TR4N"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return n.default.createElement(i.default,a({viewBox:"0 0 40 40"},e),n.default.createElement("g",null,n.default.createElement("path",{d:"m4.4 37.1h6.4v-6.4h-6.4v6.4z m7.8 0h7.2v-6.4h-7.2v6.4z m-7.8-7.8h6.4v-7.2h-6.4v7.2z m7.8 0h7.2v-7.2h-7.2v7.2z m-7.8-8.6h6.4v-6.4h-6.4v6.4z m16.4 16.4h7.1v-6.4h-7.1v6.4z m-8.6-16.4h7.2v-6.4h-7.2v6.4z m17.2 16.4h6.4v-6.4h-6.4v6.4z m-8.6-7.8h7.1v-7.2h-7.1v7.2z m-7.9-19.3v-6.4q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v6.4q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m16.5 19.3h6.4v-7.2h-6.4v7.2z m-8.6-8.6h7.1v-6.4h-7.1v6.4z m8.6 0h6.4v-6.4h-6.4v6.4z m0.7-10.7v-6.4q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5v6.4q0 0.3 0.2 0.5t0.5 0.2h1.5q0.2 0 0.5-0.2t0.2-0.5z m8.5-1.4v28.5q0 1.2-0.8 2.1t-2 0.8h-31.4q-1.2 0-2.1-0.9t-0.8-2v-28.5q0-1.2 0.8-2t2.1-0.9h2.8v-2.1q0-1.5 1.1-2.6t2.5-1h1.4q1.5 0 2.5 1.1t1.1 2.5v2.1h8.6v-2.1q0-1.5 1-2.6t2.5-1h1.5q1.4 0 2.5 1.1t1 2.5v2.1h2.9q1.1 0 2 0.9t0.8 2z"})))},e.exports=t.default},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},sXyB:function(e,t,r){var a=r("SksO"),n=r("b48C");function i(t,r,o){return n()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&a(i,r.prototype),i},i.apply(null,arguments)}e.exports=i},volB:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return O})),r.d(t,"query",(function(){return I}));var a=r("q1tI"),n=r.n(a),i=r("EylK"),o=r("vOnD"),s=r("Wbzz"),l=r("aczs"),d=r.n(l),c=r("9eSz"),u=r.n(c),f=r("Xpz+"),p=r("A2+M"),m=o.c.div.withConfig({displayName:"Item__Container",componentId:"sh1awg-0"})([""," margin-bottom:3em;"],Object(f.a)({})),h=o.c.div.withConfig({displayName:"Item__PostHeader",componentId:"sh1awg-1"})([""," h3{margin-top:0;margin-bottom:0.5em;}"],f.a.unit({size:{desktop:1}})),g=o.c.div.withConfig({displayName:"Item__Cover",componentId:"sh1awg-2"})(["padding:0.5em 2em 0 0;",""],f.a.unit({size:{desktop:4/12}})),y=o.c.div.withConfig({displayName:"Item__TextByCover",componentId:"sh1awg-3"})([""," p:first-child{margin-top:0;}p:last-child{margin-bottom:0;}"],f.a.unit({size:{desktop:8/12}})),v=o.c.div.withConfig({displayName:"Item__Text",componentId:"sh1awg-4"})(["p:first-child{margin-top:0;}p:last-child{margin-bottom:0;}"]),b=function(e){var t=e.post,r=e.post,a=r.excerpt,i=r.fields.slug,o=r.frontmatter,l=o.title,c=o.date,f=o.cover,b=a?a.replace(/(<h2[^>]*>|<h3[^>]*>)(.+)(<\/h2>|<\/h3>)/gm,""):"read more";return n.a.createElement(s.Link,{to:"/"+i,key:i,className:"link"},n.a.createElement(m,null,n.a.createElement(h,null,n.a.createElement("h3",null,l),n.a.createElement("p",{className:"meta"},n.a.createElement("span",null,n.a.createElement(d.a,{size:18})," ",c))),f&&n.a.createElement(g,null,n.a.createElement(u.a,{fluid:f.childImageSharp.sizes})),f?n.a.createElement(y,null,n.a.createElement(p.MDXRenderer,{onlyExcerpt:!0,excerptBackup:b},t.body)):n.a.createElement(v,null,n.a.createElement(p.MDXRenderer,{onlyExcerpt:!0,excerptBackup:b},t.body))))},S=o.c.main.withConfig({displayName:"Blog__Container",componentId:"sc-1ljz12i-0"})(["a{text-decoration:none;}"]),E=function(e){var t=e.pageContext,r=t.currentPage,a=t.numPages,i=t.pathPrefix,o=1===r,l=r===a,d=r-1==1?i:i+(r-1).toString(),c=i+(r+1).toString();return n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"center",listStyle:"none",padding:0}},n.a.createElement(s.Link,{to:d,rel:"prev",style:{visibility:o&&"hidden"}},"← Previous Page"),Array.from({length:a},(function(e,t){return n.a.createElement("li",{key:"pagination-number"+(t+1),style:{margin:0}},n.a.createElement(s.Link,{to:i+(0===t?"":t+1),style:{textDecoration:"none",padding:"0.5em",color:t+1===r?"#ffffff":"",background:t+1===r?"#ec4e48":""}},t+1))})),n.a.createElement(s.Link,{to:c,rel:"next",style:{visibility:l&&"hidden"}},"Next Page →"))},w=function(e){var t=e.data,r=e.pageContext,a=t.posts.edges;return n.a.createElement(n.a.Fragment,null,n.a.createElement(S,null,a.map((function(e){var t=e.node,r=e.node.fields.slug;return n.a.createElement(b,{key:r,post:t})}))),n.a.createElement(E,{pageContext:r}))},x=r("hkyM");function O(e){var t=e.data,r=e.location,a=e.pageContext;return n.a.createElement(i.a,{content:n.a.createElement(n.a.Fragment,null,n.a.createElement(x.a,{title:"Varya Stepanova — Blog",keywords:["blog","design systems","design system","frontend"],defer:!1}),n.a.createElement(w,{pageContext:a,data:t,location:r})),location:r})}var I="3375384461"}}]);