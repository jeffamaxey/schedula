"use strict";(self.webpackChunkschedula_form=self.webpackChunkschedula_form||[]).push([[3850],{75104:function(r,n,o){o.d(n,{Z:function(){return A}});var t=o(93433),e=o(45987),a=o(1413),i=o(87653),c=o.n(i),u=o(80131),f=o(8092),l=o.n(f),m=o(93629),s=o.n(m),d=o(26181),p=o.n(d),g=o(17805),y=o.n(g),v=["empty","footerEmpty","footer","removeEmpty","format","footerFormat"],h=["children","formData"],w=new(c().Environment);function A(r){var n=r.children,o=r.formData,t=(0,e.Z)(r,h),a=[],i={},c=o||{};l()(c)?s()(c)?a=c:i=c:a=[c];try{return function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=-1;return r.replace(/{(\d+)}/g,(function(r,o){return"undefined"!=typeof n[o]?n[o]:r})).replace(/{(\w[^}]*)}/g,(function(r,n){return"undefined"!=typeof o[n]?o[n]:r})).replace(/{(\s*)}/g,(function(r){return t++,"undefined"!=typeof n[t]?n[t]:r}))}(w.renderString(n.join(""),{data:c,props:t,window:window}),a,i)}catch(u){return console.log("Error in formatting md ".concat(n.join(""))),console.log(u),null}}w.addFilter("decimal",(function(r,n,o){var t=n?Math.pow(10,n):1;return(Math.round((r+Number.EPSILON)*t)/t).toLocaleString(o||"it")})),w.addFilter("locale",(function(r,n){return r.toLocaleString(n||"it")})),w.addFilter("n",(function(r,n,o){return String(new Intl.NumberFormat(n.replace("_","-"),(0,a.Z)({minimumFractionDigits:0,maximumFractionDigits:20},o)).format(r))})),w.addFilter("table",(function(r,n,o){var a=o.empty,i=void 0===a?" ":a,c=o.footerEmpty,f=void 0===c?" ":c,l=o.footer,m=void 0!==l&&l,s=o.removeEmpty,d=void 0!==s&&s,g=o.format,h=o.footerFormat,w=(0,e.Z)(o,v);try{if(console.log("0",r,n,i,f,m,d,g,h,w),!Array.isArray(r))return console.log("Error in rendering table: wrong type ".concat(typeof r)),null;var A={};if(n&&(n=n.map((function(r){return Array.isArray(r)?(A[r[0]]=r[1],r[0]):(A[r]=r,r)}))),console.log("1",A,n),!0===h&&(h=g),console.log("2",h),n){if(d){var E=r.reduce((function(r,n){return[].concat((0,t.Z)(r),(0,t.Z)(Object.keys(n)))}),[]);console.log("3",E),m&&!0!==m&&!Array.isArray(m)&&(Object.keys(m).forEach((function(r){E.push(r)})),m=n.map((function(r){return p()(m,r,f)}))),E=new Set(E),console.log("4",E,m);var Z=n.map((function(r){return E.has(r)}));console.log("5",Z),n=n.filter((function(r,n){return Z[n]})),Array.isArray(m)&&(m=m.filter((function(r,n){return Z[n]}))),console.log("6",m,n)}}else n=new Set(r.reduce((function(r,n){return[].concat((0,t.Z)(r),(0,t.Z)(Object.keys(n)))}),[])),(n=Array.from(n).sort()).forEach((function(r){A[r]=r}));if(g){var F=p()(g,"DEFAULT");r=r.map((function(r){return n.map((function(n){if((F||y()(g,n))&&y()(r,n)){var o=p()(g,n,F);if(Array.isArray(o))return o[0](r[n],o[1]);if(o)return o(r[n])}return p()(r,n,i)}))})),console.log("7",r,F)}else r=r.map((function(r){return n.map((function(n){return p()(r,n,i)}))})),console.log("7",r);if(!0===m)m=r[r.length-1],r=r.slice(0,-1);else if(m&&h){var b=p()(h,"DEFAULT");m=m.map((function(r,o){var t=n[o];if((b||y()(h,t))&&r!==f){var e=p()(h,t,b);return Array.isArray(e)?e[0](r,e[1]):e(r)}return r})),console.log("8",m,b)}var k=(0,u.x)([n.map((function(r){return A[r]}))].concat((0,t.Z)(r)),w);return m&&(k=k+"\n"+(0,u.x)([m],w)),k}catch(D){throw console.log("Error in rendering table: data ".concat(D)),D}}))},53850:function(r,n,o){o.r(n),o.d(n,{default:function(){return c}});var t=o(1413),e=o(45987),a=o(75104),i=["value","options","formContext"];function c(r){var n=r.value,o=r.options,c=r.formContext,u=(0,e.Z)(r,i),f=c.form,l=o.format,m=o.markdown;return m?(0,a.Z)((0,t.Z)({children:[m],formData:n,form:f,formContext:c},u)):l?f.n(n,l):n}}}]);
//# sourceMappingURL=3850.79e2eae6.chunk.js.map