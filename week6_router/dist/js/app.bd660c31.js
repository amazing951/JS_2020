(function(e){function n(n){for(var r,u,a=n[0],d=n[1],i=n[2],f=0,l=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&l.push(c[u][0]),c[u]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);h&&h(n);while(l.length)l.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,u=1;u<t.length;u++){var a=t[u];0!==c[a]&&(r=!1)}r&&(o.splice(n--,1),e=d(d.s=t[0]))}return e}var r={},u={app:0},c={app:0},o=[];function a(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-08f37a46":"544e3ef6","chunk-2d0e2114":"6c5079dd","chunk-2d0e456b":"1440c633","chunk-2d2102cc":"a9a4297d","chunk-2d216626":"b169932f","chunk-2d22d746":"ddbe4bfb","chunk-328f5dbd":"9a873b51","chunk-3d421a87":"2f09553b","chunk-4e9d9d92":"066567c2","chunk-60046916":"1d854190","chunk-62915e1e":"9329ded2"}[e]+".js"}function d(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t={"chunk-3d421a87":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-08f37a46":"31d6cfe0","chunk-2d0e2114":"31d6cfe0","chunk-2d0e456b":"31d6cfe0","chunk-2d2102cc":"31d6cfe0","chunk-2d216626":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-328f5dbd":"31d6cfe0","chunk-3d421a87":"08fa8e76","chunk-4e9d9d92":"31d6cfe0","chunk-60046916":"31d6cfe0","chunk-62915e1e":"31d6cfe0"}[e]+".css",c=d.p+r,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var i=o[a],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===c))return n()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){i=l[a],f=i.getAttribute("data-href");if(f===r||f===c)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete u[e],h.parentNode.removeChild(h),t(o)},h.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){u[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=o);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.src=a(e);var l=new Error;i=function(n){f.onerror=f.onload=null,clearTimeout(h);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",l.name="ChunkLoadError",l.type=r,l.request=u,t[1](l)}c[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(n)},d.m=e,d.c=r,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)d.d(t,r,function(n){return e[n]}.bind(null,r));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(n,"a",n),n},d.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},d.p="/JS_2020/week6_router/dist/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var h=f;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}}),t("router-view")],1)},c=[],o=(t("5c0b"),t("2877")),a={},d=Object(o["a"])(a,u,c,!1,null,null,null),i=d.exports,f=(t("d3b7"),t("8c4f"));r["a"].use(f["a"]);var l=[{path:"/",name:"首頁",component:function(){return t.e("chunk-62915e1e").then(t.bind(null,"bb51"))},children:[{path:"products",name:"前台產品頁",component:function(){return t.e("chunk-08f37a46").then(t.bind(null,"e6dc"))}},{path:"about",name:"關於",component:function(){return t.e("chunk-2d22d746").then(t.bind(null,"f820"))}},{path:"product/:id",name:"前台單一產品頁",component:function(){return t.e("chunk-328f5dbd").then(t.bind(null,"d2f1"))}},{path:"cart",name:"購物車頁",component:function(){return t.e("chunk-2d2102cc").then(t.bind(null,"b789"))}},{path:"checkout",name:"結帳",component:function(){return t.e("chunk-2d0e2114").then(t.bind(null,"7cb4"))}},{path:"login",name:"登入頁",component:function(){return t.e("chunk-3d421a87").then(t.bind(null,"a55b"))}}]},{path:"/admin",component:function(){return t.e("chunk-60046916").then(t.bind(null,"e124"))},children:[{path:"products",name:"後台產品頁",component:function(){return t.e("chunk-4e9d9d92").then(t.bind(null,"1143"))}},{path:"coupons",name:"後台酷碰",component:function(){return t.e("chunk-2d0e456b").then(t.bind(null,"9097"))}},{path:"orders",name:"後台訂單",component:function(){return t.e("chunk-2d216626").then(t.bind(null,"c1df"))}}]}],h=new f["a"]({routes:l}),p=h,s=t("9062"),b=t.n(s),m=(t("e40d"),t("7338")),k=t.n(m),v=t("a7fe"),g=t.n(v);t("3a6a"),t("ada9");r["a"].config.productionTip=!1,r["a"].use(g.a,k.a),r["a"].use(b.a),new r["a"]({router:p,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var r=t("9c0c"),u=t.n(r);u.a},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.bd660c31.js.map