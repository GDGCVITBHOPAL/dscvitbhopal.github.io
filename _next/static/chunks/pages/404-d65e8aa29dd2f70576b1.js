_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{BdxU:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),o=(t("q1tI"),t("g4pe")),c=t.n(o),a=t("YFqc"),i=t.n(a),u=t("FaW0");n.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c.a,{children:Object(r.jsx)("title",{children:"DSC VIT Bhopal - 404 Not Found"})}),"Not Found",Object(r.jsx)(i.a,{href:"/",children:"Home"}),Object(r.jsx)(u.a,{})]})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),i=t("nOHt"),u=t("vNVm"),l={};function s(e,n,t,r){if(e&&(0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),o=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],i=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):i||c}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var m=c.Children.only(v),_=m&&"object"===typeof m&&m.ref,w=(0,u.useIntersection)({rootMargin:"200px"}),E=r(w,2),L=E[0],j=E[1],M=c.default.useCallback((function(e){L(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,L]);(0,c.useEffect)((function(){var e=j&&n&&(0,a.isLocalURL)(d),r="undefined"!==typeof g?g:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(t,d,p,{locale:r})}),[p,d,j,g,n,t]);var I={ref:M,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:u,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,t,d,p,h,b,y,g)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),s(t,d,p,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var N="undefined"!==typeof g?g:t&&t.locale,O=t&&t.isLocaleDomain&&(0,a.getDomainLocale)(p,N,t&&t.locales,t&&t.domainLocales);I.href=O||(0,a.addBasePath)((0,a.addLocale)(p,N,t&&t.defaultLocale))}return c.default.cloneElement(m,I)};n.default=f},i67r:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t("BdxU")}])},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,u=(0,o.useRef)(),l=(0,o.useState)(!1),s=r(l,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("q1tI"),c=t("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map}},[["i67r",0,1,5,2,3,4]]]);