webpackJsonp([0xed74cf750429],{208:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof _&&"undefined"!=typeof window&&window.IntersectionObserver&&(_=new window.IntersectionObserver(function(e){e.forEach(function(e){S.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),_}t.__esModule=!0;var r=a(43),l=n(r),i=a(70),s=n(i),u=a(69),d=n(u),f=a(148),c=n(f),p=a(147),h=n(p),v=a(2),m=n(v),y=a(3),b=n(y),g=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},E=function(e){var t=g(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},_=void 0,S=[],z=function(e,t){o().observe(e),S.push([e,t])},q=null,j=function(){if(null!==q)return q;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return q=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.sizes?'sizes="'+e.sizes+'" ':"",o=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",i=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",u=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+l+i+t+a+r+o+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+u+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},L=function(e){var t=e.style,a=e.onLoad,n=(0,c.default)(e,["style","onLoad"]);return m.default.createElement("img",(0,h.default)({},n,{onLoad:a,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};L.propTypes={style:b.default.object,onLoad:b.default.func};var x=function(e){function t(a){(0,l.default)(this,t);var n=(0,s.default)(this,e.call(this,a)),o=!0,r=!0,i=!1,u=E(a);return!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,r=!1,i=!0),"undefined"==typeof window&&(o=!1,r=!1),n.state={isVisible:o,imgLoaded:r,IOSupported:i},n.handleRef=n.handleRef.bind(n),n}return(0,d.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&z(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=g(this.props),a=t.title,n=t.alt,o=t.className,r=t.outerWrapperClassName,l=t.style,i=void 0===l?{}:l,s=t.imgStyle,u=void 0===s?{}:s,d=t.placeholderStyle,f=void 0===d?{}:d,c=t.sizes,p=t.resolutions,v=t.backgroundColor,y=t.Tag,b=void 0;b="boolean"==typeof v?"lightgray":v;var w=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},u,f),E=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},u);if(c){var _=c;return _.srcWebp&&_.srcSetWebp&&j()&&(_.src=_.srcWebp,_.srcSet=_.srcSetWebp),m.default.createElement(y,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===i.position?"initial":"relative"}},m.default.createElement(y,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef},m.default.createElement(y,{style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),_.base64&&m.default.createElement(L,{alt:n,title:a,src:_.base64,style:w}),_.tracedSVG&&m.default.createElement(L,{alt:n,title:a,src:_.tracedSVG,style:w}),b&&m.default.createElement(y,{title:a,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&m.default.createElement(L,{alt:n,title:a,srcSet:_.srcSet,src:_.src,sizes:_.sizes,style:E,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,h.default)({alt:n,title:a},_))}})))}if(p){var S=p,z=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},i);return"inherit"===i.display&&delete z.display,S.srcWebp&&S.srcSetWebp&&j()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),m.default.createElement(y,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===i.position?"initial":"relative"}},m.default.createElement(y,{className:(o?o:"")+" gatsby-image-wrapper",style:z,ref:this.handleRef},S.base64&&m.default.createElement(L,{alt:n,title:a,src:S.base64,style:w}),S.tracedSVG&&m.default.createElement(L,{alt:n,title:a,src:S.tracedSVG,style:w}),b&&m.default.createElement(y,{title:a,style:{backgroundColor:b,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&m.default.createElement(L,{alt:n,title:a,width:S.width,height:S.height,srcSet:S.srcSet,src:S.src,style:E,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,h.default)({alt:n,title:a,width:S.width,height:S.height},S))}})))}return null},t}(m.default.Component);x.defaultProps={fadeIn:!0,alt:"",Tag:"div"},x.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,placeholderStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=x},95:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(2),l=n(r),i=a(16),s=n(i),u=function(e){return l.default.createElement(s.default,o({viewBox:"0 0 40 40"},e),l.default.createElement("g",null,l.default.createElement("path",{d:"m36.4 21.4q0 1.2-0.9 2.1l-14.5 14.5q-0.9 0.8-2 0.8-1.2 0-2-0.8l-1.7-1.7q-0.9-0.8-0.9-2t0.9-2l6.5-6.6h-15.7q-1.1 0-1.9-0.8t-0.7-2v-2.9q0-1.2 0.7-2t1.9-0.9h15.7l-6.5-6.5q-0.9-0.8-0.9-2t0.9-2l1.7-1.7q0.8-0.9 2-0.9 1.2 0 2 0.9l14.5 14.5q0.9 0.8 0.9 2z"})))};t.default=u,e.exports=t.default},96:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(2),l=n(r),i=a(16),s=n(i),u=function(e){return l.default.createElement(s.default,o({viewBox:"0 0 40 40"},e),l.default.createElement("g",null,l.default.createElement("path",{d:"m4.4 37.1h6.4v-6.4h-6.4v6.4z m7.8 0h7.2v-6.4h-7.2v6.4z m-7.8-7.8h6.4v-7.2h-6.4v7.2z m7.8 0h7.2v-7.2h-7.2v7.2z m-7.8-8.6h6.4v-6.4h-6.4v6.4z m16.4 16.4h7.1v-6.4h-7.1v6.4z m-8.6-16.4h7.2v-6.4h-7.2v6.4z m17.2 16.4h6.4v-6.4h-6.4v6.4z m-8.6-7.8h7.1v-7.2h-7.1v7.2z m-7.9-19.3v-6.4q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v6.4q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m16.5 19.3h6.4v-7.2h-6.4v7.2z m-8.6-8.6h7.1v-6.4h-7.1v6.4z m8.6 0h6.4v-6.4h-6.4v6.4z m0.7-10.7v-6.4q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5v6.4q0 0.3 0.2 0.5t0.5 0.2h1.5q0.2 0 0.5-0.2t0.2-0.5z m8.5-1.4v28.5q0 1.2-0.8 2.1t-2 0.8h-31.4q-1.2 0-2.1-0.9t-0.8-2v-28.5q0-1.2 0.8-2t2.1-0.9h2.8v-2.1q0-1.5 1.1-2.6t2.5-1h1.4q1.5 0 2.5 1.1t1.1 2.5v2.1h8.6v-2.1q0-1.5 1-2.6t2.5-1h1.5q1.4 0 2.5 1.1t1 2.5v2.1h2.9q1.1 0 2 0.9t0.8 2z"})))};t.default=u,e.exports=t.default},135:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return e.raw=t,e}t.__esModule=!0;var r=o(["\n  a {\n    text-decoration: none;\n  }\n"],["\n  a {\n    text-decoration: none;\n  }\n"]),l=a(3),i=n(l),s=a(2),u=n(s),d=a(4),f=n(d),c=a(136),p=n(c),h=f.default.main(r),v=function(e){var t=e.posts;return u.default.createElement(h,null,u.default.createElement("ul",null,t.map(function(e){var t=e.node,a=e.node.fields.slug;return u.default.createElement(p.default,{key:a,post:t})})))};v.propTypes={posts:i.default.array.isRequired},t.default=v,e.exports=t.default},136:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=a(95),r=(n(o),a(96)),l=n(r),i=a(208),s=(n(i),a(24)),u=n(s),d=a(3),f=n(d),c=a(2),p=n(c),h=function(e){var t=e.post,a=t.excerpt,n=t.fields,o=n.slug,r=(n.prefix,t.frontmatter),i=r.title,s=r.date;return p.default.createElement("li",null,p.default.createElement(u.default,{to:"/"+o,key:o,className:"link"},p.default.createElement("h3",null,i),p.default.createElement("p",{className:"meta"},p.default.createElement("span",null,p.default.createElement(l.default,{size:18})," ",s)),p.default.createElement("p",null,a)))};h.propTypes={post:f.default.object.isRequired},t.default=h,e.exports=t.default},137:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=a(135);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}}),e.exports=t.default},322:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.guery=void 0;var i=a(3),s=n(i),u=a(2),d=n(u),f=a(137),c=n(f),p=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.posts.edges,t=void 0===e?[]:e;return d.default.createElement("div",null,d.default.createElement(c.default,{posts:t}))},t}(d.default.Component);p.propTypes={data:s.default.object.isRequired},t.default=p;t.guery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-posts-js-149ce7e4f90c7d1d5d0e.js.map