webpackJsonp([0xed74cf750429],{257:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(){return"undefined"==typeof _&&"undefined"!=typeof window&&window.IntersectionObserver&&(_=new window.IntersectionObserver(function(e){e.forEach(function(e){z.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),_}t.__esModule=!0;var o=a(160),l=r(o),i=a(174),s=r(i),u=a(173),d=r(u),f=a(216),c=r(f),p=a(215),h=r(p),v=a(2),y=r(v),m=a(3),g=r(m),b=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},E=function(e){var t=b(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},_=void 0,z=[],O=function(e,t){n().observe(e),z.push([e,t])},S=null,j=function(){if(null!==S)return S;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return S=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},q=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",i=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",u=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+l+i+t+a+o+n+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+u+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},L=function(e){var t=e.style,a=e.onLoad,r=(0,c.default)(e,["style","onLoad"]);return y.default.createElement("img",(0,h.default)({},r,{onLoad:a,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};L.propTypes={style:g.default.object,onLoad:g.default.func};var M=function(e){function t(a){(0,l.default)(this,t);var r=(0,s.default)(this,e.call(this,a)),n=!0,o=!0,i=!1,u=E(a);return!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,o=!1,i=!0),"undefined"==typeof window&&(n=!1,o=!1),r.state={isVisible:n,imgLoaded:o,IOSupported:i},r.handleRef=r.handleRef.bind(r),r}return(0,d.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&O(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=b(this.props),a=t.title,r=t.alt,n=t.className,o=t.outerWrapperClassName,l=t.style,i=void 0===l?{}:l,s=t.imgStyle,u=void 0===s?{}:s,d=t.placeholderStyle,f=void 0===d?{}:d,c=t.sizes,p=t.resolutions,v=t.backgroundColor,m=t.Tag,g=void 0;g="boolean"==typeof v?"lightgray":v;var w=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},u,f),E=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},u);if(c){var _=c;return _.srcWebp&&_.srcSetWebp&&j()&&(_.src=_.srcWebp,_.srcSet=_.srcSetWebp),y.default.createElement(m,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===i.position?"initial":"relative"}},y.default.createElement(m,{className:(n?n:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef},y.default.createElement(m,{style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),_.base64&&y.default.createElement(L,{alt:r,title:a,src:_.base64,style:w}),_.tracedSVG&&y.default.createElement(L,{alt:r,title:a,src:_.tracedSVG,style:w}),g&&y.default.createElement(m,{title:a,style:{backgroundColor:g,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&y.default.createElement(L,{alt:r,title:a,srcSet:_.srcSet,src:_.src,sizes:_.sizes,style:E,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:q((0,h.default)({alt:r,title:a},_))}})))}if(p){var z=p,O=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},i);return"inherit"===i.display&&delete O.display,z.srcWebp&&z.srcSetWebp&&j()&&(z.src=z.srcWebp,z.srcSet=z.srcSetWebp),y.default.createElement(m,{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===i.position?"initial":"relative"}},y.default.createElement(m,{className:(n?n:"")+" gatsby-image-wrapper",style:O,ref:this.handleRef},z.base64&&y.default.createElement(L,{alt:r,title:a,src:z.base64,style:w}),z.tracedSVG&&y.default.createElement(L,{alt:r,title:a,src:z.tracedSVG,style:w}),g&&y.default.createElement(m,{title:a,style:{backgroundColor:g,width:z.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:z.height}}),this.state.isVisible&&y.default.createElement(L,{alt:r,title:a,width:z.width,height:z.height,srcSet:z.srcSet,src:z.src,style:E,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:q((0,h.default)({alt:r,title:a,width:z.width,height:z.height},z))}})))}return null},t}(y.default.Component);M.defaultProps={fadeIn:!0,alt:"",Tag:"div"},M.propTypes={responsiveResolution:g.default.object,responsiveSizes:g.default.object,resolutions:g.default.object,sizes:g.default.object,fadeIn:g.default.bool,title:g.default.string,alt:g.default.string,className:g.default.oneOfType([g.default.string,g.default.object]),outerWrapperClassName:g.default.oneOfType([g.default.string,g.default.object]),style:g.default.object,imgStyle:g.default.object,placeholderStyle:g.default.object,position:g.default.string,backgroundColor:g.default.oneOfType([g.default.string,g.default.bool]),onLoad:g.default.func,Tag:g.default.string},t.default=M},29:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l=a(2),i=r(l),s=a(3),u=r(s),d=function(e,t){var a=e.children,r=e.color,l=e.size,s=e.style,u=e.width,d=e.height,f=n(e,["children","color","size","style","width","height"]),c=t.reactIconBase,p=void 0===c?{}:c,h=l||p.size||"1em";return i.default.createElement("svg",o({children:a,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:d||h,width:u||h},p,f,{style:o({verticalAlign:"middle",color:r||p.color},p.style||{},s)}))};d.propTypes={color:u.default.string,size:u.default.oneOfType([u.default.string,u.default.number]),width:u.default.oneOfType([u.default.string,u.default.number]),height:u.default.oneOfType([u.default.string,u.default.number]),style:u.default.object},d.contextTypes={reactIconBase:u.default.shape(d.propTypes)},t.default=d,e.exports=t.default},184:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o=a(2),l=r(o),i=a(29),s=r(i),u=function(e){return l.default.createElement(s.default,n({viewBox:"0 0 40 40"},e),l.default.createElement("g",null,l.default.createElement("path",{d:"m36.4 21.4q0 1.2-0.9 2.1l-14.5 14.5q-0.9 0.8-2 0.8-1.2 0-2-0.8l-1.7-1.7q-0.9-0.8-0.9-2t0.9-2l6.5-6.6h-15.7q-1.1 0-1.9-0.8t-0.7-2v-2.9q0-1.2 0.7-2t1.9-0.9h15.7l-6.5-6.5q-0.9-0.8-0.9-2t0.9-2l1.7-1.7q0.8-0.9 2-0.9 1.2 0 2 0.9l14.5 14.5q0.9 0.8 0.9 2z"})))};t.default=u,e.exports=t.default},185:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o=a(2),l=r(o),i=a(29),s=r(i),u=function(e){return l.default.createElement(s.default,n({viewBox:"0 0 40 40"},e),l.default.createElement("g",null,l.default.createElement("path",{d:"m4.4 37.1h6.4v-6.4h-6.4v6.4z m7.8 0h7.2v-6.4h-7.2v6.4z m-7.8-7.8h6.4v-7.2h-6.4v7.2z m7.8 0h7.2v-7.2h-7.2v7.2z m-7.8-8.6h6.4v-6.4h-6.4v6.4z m16.4 16.4h7.1v-6.4h-7.1v6.4z m-8.6-16.4h7.2v-6.4h-7.2v6.4z m17.2 16.4h6.4v-6.4h-6.4v6.4z m-8.6-7.8h7.1v-7.2h-7.1v7.2z m-7.9-19.3v-6.4q0-0.3-0.2-0.5t-0.5-0.2h-1.4q-0.3 0-0.5 0.2t-0.2 0.5v6.4q0 0.3 0.2 0.5t0.5 0.2h1.4q0.3 0 0.5-0.2t0.2-0.5z m16.5 19.3h6.4v-7.2h-6.4v7.2z m-8.6-8.6h7.1v-6.4h-7.1v6.4z m8.6 0h6.4v-6.4h-6.4v6.4z m0.7-10.7v-6.4q0-0.3-0.2-0.5t-0.5-0.2h-1.5q-0.3 0-0.5 0.2t-0.2 0.5v6.4q0 0.3 0.2 0.5t0.5 0.2h1.5q0.2 0 0.5-0.2t0.2-0.5z m8.5-1.4v28.5q0 1.2-0.8 2.1t-2 0.8h-31.4q-1.2 0-2.1-0.9t-0.8-2v-28.5q0-1.2 0.8-2t2.1-0.9h2.8v-2.1q0-1.5 1.1-2.6t2.5-1h1.4q1.5 0 2.5 1.1t1.1 2.5v2.1h8.6v-2.1q0-1.5 1-2.6t2.5-1h1.5q1.4 0 2.5 1.1t1 2.5v2.1h2.9q1.1 0 2 0.9t0.8 2z"})))};t.default=u,e.exports=t.default},208:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(3),o=r(n),l=a(2),i=r(l),s=a(209),u=r(s),d=function(e){var t=e.posts;return i.default.createElement("main",{className:"main"},i.default.createElement("ul",null,t.map(function(e){var t=e.node,a=e.node.fields.slug;return i.default.createElement(u.default,{key:a,post:t})})))};d.propTypes={posts:o.default.array.isRequired},t.default=d,e.exports=t.default},209:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(184),o=(r(n),a(185)),l=r(o),i=a(257),s=(r(i),a(62)),u=r(s),d=a(3),f=r(d),c=a(2),p=r(c),h=function(e){var t=e.post,a=t.excerpt,r=t.fields,n=r.slug,o=(r.prefix,t.frontmatter),i=o.title,s=o.date;return p.default.createElement("li",null,p.default.createElement(u.default,{to:"/"+n,key:n,className:"link"},p.default.createElement("h3",null,i),p.default.createElement("p",{className:"meta"},p.default.createElement("span",null,p.default.createElement(l.default,{size:18})," ",s)),p.default.createElement("p",null,a)))};h.propTypes={post:f.default.object.isRequired},t.default=h,e.exports=t.default},210:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(208);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(n).default}}),e.exports=t.default},336:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.guery=void 0;var i=a(3),s=r(i),u=a(2),d=r(u),f=a(210),c=r(f),p=function(e){function t(){return n(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.posts.edges,t=void 0===e?[]:e;return d.default.createElement("div",null,d.default.createElement(c.default,{posts:t}))},t}(d.default.Component);p.propTypes={data:s.default.object.isRequired},t.default=p;t.guery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-posts-js-21160ca4c1b6f97547cd.js.map