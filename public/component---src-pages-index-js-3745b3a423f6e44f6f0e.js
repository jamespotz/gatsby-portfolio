(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{214:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(219),l=a(222),s=(a(18),a(263)),o=a(264),c=a.n(o),d=function(e){var t=s.data;return i.a.createElement(c.a,Object.assign({fluid:t.placeholderImage.childImageSharp.fluid},e))},u=a(223),f=a(217),m=a(267),A=a.n(m),g=function(e){var t=e.children;return i.a.createElement("div",{className:"avatar"},t,i.a.createElement("img",{src:A.a,className:"avatar-border",alt:"avatar"}))};t.default=function(){return i.a.createElement(l.a,null,i.a.createElement(u.a,{title:"James Robert Rooke"}),i.a.createElement("div",{className:"flex flex-col my-auto"},i.a.createElement(g,null,i.a.createElement(d,null)),i.a.createElement("article",{className:"font-default text-gray-700 w-full md:w-4/12 md:my-10",alt:"James Robert Rooke"},i.a.createElement("p",{className:"text-xl font-normal leading-relaxed tracking-wide mb-4"},"James is a Software Developer skilled with Ruby on Rails, Javascript, ReactJs, Databases, CSS, and HTML."),i.a.createElement("p",{className:"text-xl font-normal leading-relaxed tracking-wide mb-2"},"James is fueled by his curiosity and his hunger for knowledge. He considers himself a ",i.a.createElement("span",{className:"italic"},"'forever student'")," ","eager to learn and grow, and stay tuned with the latest technology stack.")),i.a.createElement("ul",null,i.a.createElement("li",{className:"mb-2"},i.a.createElement(n.a,{to:"/blog/",className:"btn"},"article")),i.a.createElement("li",{className:"mb-2"},i.a.createElement(n.a,{to:"/skills/",className:"btn"},"skills")),i.a.createElement("li",{className:"mb-2"},i.a.createElement(n.a,{to:"/work/",className:"btn"},"work")),i.a.createElement("li",{className:"mb-2"},i.a.createElement(n.a,{to:"/projects/",className:"btn"},"personal projects")),i.a.createElement("li",{className:"mb-2"},i.a.createElement("a",{href:"mailto:thepoltergeist23@gmail.com",className:"btn"},"get in touch")),i.a.createElement("li",null,i.a.createElement("ul",{className:"flex"},i.a.createElement("li",{className:"mr-2"},i.a.createElement("a",{href:"https://dev.to/jamespotz",className:"social-link","aria-label":"dev.to profile"},i.a.createElement(f.a,{name:["fab","dev"]}))),i.a.createElement("li",{className:"mr-2"},i.a.createElement("a",{href:"https://github.com/jamespotz",className:"social-link","aria-label":"github profile"},i.a.createElement(f.a,{name:["fab","github"]}))),i.a.createElement("li",{className:"mr-2"},i.a.createElement("a",{href:"https://facebook.com/jameslrooke",className:"social-link","aria-label":"facebook profile"},i.a.createElement(f.a,{name:["fab","facebook"]}))))))))}},216:function(e,t,a){var r;e.exports=(r=a(220))&&r.default||r},217:function(e,t,a){"use strict";a(25),a(26),a(13),a(43),a(18),a(32);var r=a(0),i=a.n(r),n=a(225);t.a=function(e){var t=e.name,a=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["name"]);return i.a.createElement(n.a,Object.assign({icon:t},a))}},218:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(25),a(26),a(13),a(43),a(18);var r=a(0),i=a.n(r);var n=function(e){var t=e.symbol,a=e.label,r=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["symbol","label"]);return i.a.createElement("span",Object.assign({role:"img","aria-label":a||"","aria-hidden":!a},r),t)}},219:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(71),l=a.n(n);a.d(t,"a",function(){return l.a});a(216),a(9).default.enqueue,i.a.createContext({})},220:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),i=a.n(r),n=a(102);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},221:function(e){e.exports={data:{site:{siteMetadata:{title:"⚡ James Robert Rooke Portfolio"}}}}},222:function(e,t,a){"use strict";var r=a(221),i=a(0),n=a.n(i),l=(a(205),a(101)),s=a(218),o=a(217),c=function(e){return n.a.createElement("label",{className:"toggle-switch","aria-label":"theme toggle"},n.a.createElement("div",{className:"absolute flex justify-between w-full",style:{padding:"3px"}},n.a.createElement(o.a,{name:"moon",className:"text-yellow-500"}),n.a.createElement(o.a,{name:"sun",className:"text-yellow-500"})),n.a.createElement("input",{type:"checkbox",className:"h-0 w-0 appearance-none",checked:e.checked,onChange:function(t){return e.onToggle.call(null,t.target.checked)}}),n.a.createElement("span",{className:"slider round"}))};t.a=function(e){var t=e.children,a=Object(l.b)();r.data;return n.a.createElement("div",{className:"flex min-h-screen flex-col w-full antialiased p-3 md:p-4 lg:p-6"},n.a.createElement("div",{className:"absolute top-0 right-0 text-gray-600 m-4"},n.a.createElement(c,{checked:a.checked,onToggle:a.changeTheme})),n.a.createElement("main",{className:"flex flex-col flex-grow"},t),n.a.createElement("footer",{className:"mt-auto text-gray-600 font-default leading-normal tracking-wide"},"© ",(new Date).getFullYear(),", Built with",n.a.createElement(s.a,{symbol:"❤",label:"heart",className:"text-red-500 mx-1"}),", and"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org",className:"btn-no-uppercase"},"Gatsby")))}},223:function(e,t,a){"use strict";var r=a(224),i=a(0),n=a.n(i),l=a(226),s=a.n(l);function o(e){var t=e.description,a=e.lang,i=e.meta,l=e.title,o=r.data.site,c=t||o.siteMetadata.description;return n.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:c}].concat(i)})}o.defaultProps={lang:"en",meta:[],description:""},t.a=o},224:function(e){e.exports={data:{site:{siteMetadata:{title:"⚡ James Robert Rooke Portfolio",description:"A software developer portfolio built with gatsbyJs",author:"James Robert Rooke <thepoltergeist23@gmail.com>"}}}}},263:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABcBAAMBAAAAAAAAAAAAAAAAAAECAwD/2gAMAwEAAhADEAAAAZ99qZV3SmSnhAPWGH//xAAZEAADAQEBAAAAAAAAAAAAAAABAgMAEhH/2gAIAQEAAQUCWXR4Mt6MV4yc4z9Lj2buyaNDSf8A/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEBEEH/2gAIAQMBAT8BUDMr/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAECAQE/AdYT/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAECETEDEiFRcf/aAAgBAQAGPwKr2pClpyb7MlyRwjBLwVMUmf/EABoQAQEBAAMBAAAAAAAAAAAAAAERACFhsTH/2gAIAQEAAT8hqn2Mxqjwu6WrALeHBUhcKPvANxkt8t0qb1v/2gAMAwEAAgADAAAAEIMIgf/EABgRAAMBAQAAAAAAAAAAAAAAAAABESFB/9oACAEDAQE/EKKkHQlh/8QAGBEBAQADAAAAAAAAAAAAAAAAAQARITH/2gAIAQIBAT8QAsN0S7v/xAAdEAEBAQEAAQUAAAAAAAAAAAABEQAhcUFRYZGh/9oACAEBAAE/EHsq52qxQrhLNfv65ezb3gzEGI1PfHRxfRmIGlPhmMGYaaqPDx8YES+Mw+t//9k=",aspectRatio:1,src:"/static/bb5e57d45563e9fe7e7627d90a30b5a8/4d406/avatar.jpg",srcSet:"/static/bb5e57d45563e9fe7e7627d90a30b5a8/9f2fa/avatar.jpg 63w,\n/static/bb5e57d45563e9fe7e7627d90a30b5a8/0aa4b/avatar.jpg 125w,\n/static/bb5e57d45563e9fe7e7627d90a30b5a8/4d406/avatar.jpg 250w",sizes:"(max-width: 250px) 100vw, 250px"}}}}}},264:function(e,t,a){"use strict";a(25),a(26),a(13),a(73),a(147),a(265);var r=a(17);t.__esModule=!0,t.default=void 0;var i,n=r(a(79)),l=r(a(80)),s=r(a(148)),o=r(a(149)),c=r(a(0)),d=r(a(57)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),A=function(e){var t=u(e),a=f(t);return m[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,h=p&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function y(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)}).join("")+"<img "+c+l+s+a+r+t+n+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=c.default.createElement(x,(0,o.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,r(a),n):n},x=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},m,{onLoad:l,onError:d,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});x.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=p&&A(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||p&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:A(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,function(){var e=A(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,A=e.fluid,g=e.fixed,p=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,v=e.itemProp,S=e.loading,I=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,B=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,o.default)({opacity:R?1:0,transition:B?"opacity "+h+"ms":"none"},s),L="boolean"==typeof p?"lightgray":p,M={transitionDelay:h+"ms"},G=(0,o.default)({opacity:this.state.imgLoaded?0:1},B&&M,s,f),P={title:t,alt:this.state.isVisible?"":a,style:G,className:m};if(A){var z=A,C=z[0];return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),L&&c.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:L,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},B&&M)}),C.base64&&c.default.createElement(j,{src:C.base64,spreadProps:P,imageVariants:z,generateSources:w}),C.tracedSVG&&c.default.createElement(j,{src:C.tracedSVG,spreadProps:P,imageVariants:z,generateSources:y}),this.state.isVisible&&c.default.createElement("picture",null,E(z),c.default.createElement(x,{alt:a,title:t,sizes:C.sizes,src:C.src,crossOrigin:this.props.crossOrigin,srcSet:C.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:S},C,{imageVariants:z}))}}))}if(g){var O=g,Z=O[0],T=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Z.width,height:Z.height},n);return"inherit"===n.display&&delete T.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(Z.srcSet)},L&&c.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:L,width:Z.width,opacity:this.state.imgLoaded?0:1,height:Z.height},B&&M)}),Z.base64&&c.default.createElement(j,{src:Z.base64,spreadProps:P,imageVariants:O,generateSources:w}),Z.tracedSVG&&c.default.createElement(j,{src:Z.tracedSVG,spreadProps:P,imageVariants:O,generateSources:y}),this.state.isVisible&&c.default.createElement("picture",null,E(O),c.default.createElement(x,{alt:a,title:t,width:Z.width,height:Z.height,sizes:Z.sizes,src:Z.src,crossOrigin:this.props.crossOrigin,srcSet:Z.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:S},Z,{imageVariants:O}))}}))}return null},t}(c.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var B=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),k=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});R.propTypes={resolutions:B,sizes:k,fixed:d.default.oneOfType([B,d.default.arrayOf(B)]),fluid:d.default.oneOfType([k,d.default.arrayOf(k)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var L=R;t.default=L},265:function(e,t,a){"use strict";a(266)("fixed",function(e){return function(){return e(this,"tt","","")}})},266:function(e,t,a){var r=a(1),i=a(8),n=a(37),l=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(l,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},267:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCEtLSBHZW5lcmF0b3I6IEdyYXZpdC5pbyAtLT48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJpc29sYXRpb246aXNvbGF0ZSIgdmlld0JveD0iMCAwIDEyMCAxMjAiIHdpZHRoPSIxMjBwdCIgaGVpZ2h0PSIxMjBwdCI+PGxpbmVhckdyYWRpZW50IGlkPSJfbGdyYWRpZW50XzAiIHgxPSIwIiB5MT0iMC41IiB4Mj0iMSIgeTI9IjAuNSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1vcGFjaXR5PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjU1LDEzOCwwKSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1vcGFjaXR5PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjpyZ2IoMjE4LDI3LDk2KSIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSB2ZWN0b3ItZWZmZWN0PSJub24tc2NhbGluZy1zdHJva2UiIGN4PSI2MCIgY3k9IjYwIiByPSI1Ny41IiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZT0idXJsKCNfbGdyYWRpZW50XzApIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbWl0ZXJsaW1pdD0iMyIvPjwvc3ZnPg=="}}]);
//# sourceMappingURL=component---src-pages-index-js-3745b3a423f6e44f6f0e.js.map