(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{211:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return i});var n=a(0),r=a.n(n),l=a(219),o=a(227),c=a(222),s=a(223);t.default=function(e){var t=e.data,a=Object(o.b)({to:{opacity:1,transform:"translateX(0)"},from:{opacity:.1,transform:"translateX(-100%)"}});return r.a.createElement(c.a,null,r.a.createElement(s.a,{title:"Articles"}),r.a.createElement("div",null,r.a.createElement(l.a,{to:"/",className:"btn mb-4 self-start"},"back"),r.a.createElement(l.a,{to:"/all-tags",className:"btn mb-4 self-start ml-2 text-gray-600"},r.a.createElement("span",{className:"text-purple-700"},"#")," all tags")),r.a.createElement(o.a.div,{style:a},t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id},r.a.createElement(l.a,{to:t.frontmatter.path,className:"flex flex-col lg:flex-row my-4 lg:items-center"},r.a.createElement("span",{className:"text-sm text-gray-600 font-default order-3 lg:order-1"},t.frontmatter.date),r.a.createElement("span",{className:"text-gray-600 h-full ml-3 mr-2 lg:border-l-2 lg:border-purple-800 order-1 lg:order-2"}," "),r.a.createElement("h1",{className:"btn-no-uppercase font-bold order-2 lg:order-3"},t.frontmatter.title)))})))};var i="1600852293"},216:function(e,t,a){var n;e.exports=(n=a(220))&&n.default||n},217:function(e,t,a){"use strict";a(25),a(26),a(13),a(43),a(18),a(32);var n=a(0),r=a.n(n),l=a(225);t.a=function(e){var t=e.name,a=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["name"]);return r.a.createElement(l.a,Object.assign({icon:t},a))}},218:function(e,t,a){"use strict";a.d(t,"a",function(){return l});a(25),a(26),a(13),a(43),a(18);var n=a(0),r=a.n(n);var l=function(e){var t=e.symbol,a=e.label,n=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["symbol","label"]);return r.a.createElement("span",Object.assign({role:"img","aria-label":a||"","aria-hidden":!a},n),t)}},219:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(71),o=a.n(l);a.d(t,"a",function(){return o.a});a(216),a(9).default.enqueue,r.a.createContext({})},220:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),l=a(102);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},221:function(e){e.exports={data:{site:{siteMetadata:{title:"⚡ James Robert Rooke Portfolio"}}}}},222:function(e,t,a){"use strict";var n=a(221),r=a(0),l=a.n(r),o=(a(205),a(101)),c=a(218),s=a(217),i=function(e){return l.a.createElement("label",{className:"toggle-switch","aria-label":"theme toggle"},l.a.createElement("div",{className:"absolute flex justify-between w-full",style:{padding:"3px"}},l.a.createElement(s.a,{name:"moon",className:"text-yellow-500"}),l.a.createElement(s.a,{name:"sun",className:"text-yellow-500"})),l.a.createElement("input",{type:"checkbox",className:"h-0 w-0 appearance-none",checked:e.checked,onChange:function(t){return e.onToggle.call(null,t.target.checked)}}),l.a.createElement("span",{className:"slider round"}))};t.a=function(e){var t=e.children,a=Object(o.b)();n.data;return l.a.createElement("div",{className:"flex min-h-screen flex-col w-full antialiased p-3 md:p-4 lg:p-6"},l.a.createElement("div",{className:"absolute top-0 right-0 text-gray-600 m-4"},l.a.createElement(i,{checked:a.checked,onToggle:a.changeTheme})),l.a.createElement("main",{className:"flex flex-col flex-grow"},t),l.a.createElement("footer",{className:"mt-auto text-gray-600 font-default leading-normal tracking-wide"},"© ",(new Date).getFullYear(),", Built with",l.a.createElement(c.a,{symbol:"❤",label:"heart",className:"text-red-500 mx-1"}),", and"," ",l.a.createElement("a",{href:"https://www.gatsbyjs.org",className:"btn-no-uppercase"},"Gatsby")))}},223:function(e,t,a){"use strict";var n=a(224),r=a(0),l=a.n(r),o=a(226),c=a.n(o);function s(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,s=n.data.site,i=t||s.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},224:function(e){e.exports={data:{site:{siteMetadata:{title:"⚡ James Robert Rooke Portfolio",description:"A software developer portfolio built with gatsbyJs",author:"James Robert Rooke <thepoltergeist23@gmail.com>"}}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-e5b893b79f5d0038ce35.js.map