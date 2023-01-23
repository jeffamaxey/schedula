"use strict";(self.webpackChunkschedula_form=self.webpackChunkschedula_form||[]).push([[78],{20078:function(e,t,n){n.r(t);var o=n(29439),c=n(67174),a=n(80184);t.default=function(e){var t=e.userInfo;return(0,a.jsx)(c.Z,{size:"small",column:1,children:Object.entries(t).map((function(e,t){var n=(0,o.Z)(e,2),l=n[0],i=n[1];return(0,a.jsx)(c.Z.Item,{label:l,children:i},t)}))})}},67174:function(e,t,n){n.d(t,{K:function(){return C},Z:function(){return j}});var o=n(4942),c=n(29439),a=n(81694),l=n.n(a),i=n(85501),r=n(72791),s=n(71929),d=n(61113),m=n(70635),p=function(e){return e.children};function u(e){return void 0!==e&&null!==e}var b=function(e){var t,n=e.itemPrefixCls,c=e.component,a=e.span,i=e.className,s=e.style,d=e.labelStyle,m=e.contentStyle,p=e.bordered,b=e.label,f=e.content,g=e.colon,y=c;return p?r.createElement(y,{className:l()((t={},(0,o.Z)(t,"".concat(n,"-item-label"),u(b)),(0,o.Z)(t,"".concat(n,"-item-content"),u(f)),t),i),style:s,colSpan:a},u(b)&&r.createElement("span",{style:d},b),u(f)&&r.createElement("span",{style:m},f)):r.createElement(y,{className:l()("".concat(n,"-item"),i),style:s,colSpan:a},r.createElement("div",{className:"".concat(n,"-item-container")},(b||0===b)&&r.createElement("span",{className:l()("".concat(n,"-item-label"),(0,o.Z)({},"".concat(n,"-item-no-colon"),!g)),style:d},b),(f||0===f)&&r.createElement("span",{className:l()("".concat(n,"-item-content")),style:m},f)))};function f(e,t,n){var o=t.colon,c=t.prefixCls,a=t.bordered,l=n.component,i=n.type,s=n.showLabel,d=n.showContent,m=n.labelStyle,p=n.contentStyle;return e.map((function(e,t){var n=e.props,u=n.label,f=n.children,g=n.prefixCls,y=void 0===g?c:g,h=n.className,x=n.style,v=n.labelStyle,S=n.contentStyle,Z=n.span,C=void 0===Z?1:Z,E=e.key;return"string"===typeof l?r.createElement(b,{key:"".concat(i,"-").concat(E||t),className:h,style:x,labelStyle:Object.assign(Object.assign({},m),v),contentStyle:Object.assign(Object.assign({},p),S),span:C,colon:o,component:l,itemPrefixCls:y,bordered:a,label:s?u:null,content:d?f:null}):[r.createElement(b,{key:"label-".concat(E||t),className:h,style:Object.assign(Object.assign(Object.assign({},m),x),v),span:1,colon:o,component:l[0],itemPrefixCls:y,bordered:a,label:u}),r.createElement(b,{key:"content-".concat(E||t),className:h,style:Object.assign(Object.assign(Object.assign({},p),x),S),span:2*C-1,component:l[1],itemPrefixCls:y,bordered:a,content:f})]}))}var g=function(e){var t=r.useContext(C),n=e.prefixCls,o=e.vertical,c=e.row,a=e.index,l=e.bordered;return o?r.createElement(r.Fragment,null,r.createElement("tr",{key:"label-".concat(a),className:"".concat(n,"-row")},f(c,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),r.createElement("tr",{key:"content-".concat(a),className:"".concat(n,"-row")},f(c,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):r.createElement("tr",{key:a,className:"".concat(n,"-row")},f(c,e,Object.assign({component:l?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},y=n(55564),h=n(89922),x=n(67521),v=function(e){var t,n,c=e.componentCls,a=e.descriptionsExtraColor,l=e.descriptionItemPaddingBottom,i=e.descriptionsItemLabelColonMarginRight,r=e.descriptionsItemLabelColonMarginLeft,s=e.descriptionsTitleMarginBottom;return(0,o.Z)({},c,Object.assign(Object.assign(Object.assign({},(0,x.Wf)(e)),function(e){var t,n=e.componentCls,c=e.descriptionsSmallPadding,a=e.descriptionsDefaultPadding,l=e.descriptionsMiddlePadding,i=e.descriptionsBg;return(0,o.Z)({},"&".concat(n,"-bordered"),(t={},(0,o.Z)(t,"".concat(n,"-view"),{border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"> table":{tableLayout:"auto",borderCollapse:"collapse"}}),(0,o.Z)(t,"".concat(n,"-item-label, ").concat(n,"-item-content"),{padding:a,borderInlineEnd:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderInlineEnd:"none"}}),(0,o.Z)(t,"".concat(n,"-item-label"),{color:e.colorTextSecondary,backgroundColor:i,"&::after":{display:"none"}}),(0,o.Z)(t,"".concat(n,"-row"),{borderBottom:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),"&:last-child":{borderBottom:"none"}}),(0,o.Z)(t,"&".concat(n,"-middle"),(0,o.Z)({},"".concat(n,"-item-label, ").concat(n,"-item-content"),{padding:l})),(0,o.Z)(t,"&".concat(n,"-small"),(0,o.Z)({},"".concat(n,"-item-label, ").concat(n,"-item-content"),{padding:c})),t))}(e)),(n={},(0,o.Z)(n,"&-rtl",{direction:"rtl"}),(0,o.Z)(n,"".concat(c,"-header"),{display:"flex",alignItems:"center",marginBottom:s}),(0,o.Z)(n,"".concat(c,"-title"),Object.assign(Object.assign({},x.vS),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG})),(0,o.Z)(n,"".concat(c,"-extra"),{marginInlineStart:"auto",color:a,fontSize:e.fontSize}),(0,o.Z)(n,"".concat(c,"-view"),{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}}),(0,o.Z)(n,"".concat(c,"-row"),{"> th, > td":{paddingBottom:l},"&:last-child":{borderBottom:"none"}}),(0,o.Z)(n,"".concat(c,"-item-label"),(0,o.Z)({color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:"".concat(r,"px ").concat(i,"px")}},"&".concat(c,"-item-no-colon::after"),{content:'""'})),(0,o.Z)(n,"".concat(c,"-item-no-label"),{"&::after":{margin:0,content:'""'}}),(0,o.Z)(n,"".concat(c,"-item-content"),{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"}),(0,o.Z)(n,"".concat(c,"-item"),{paddingBottom:0,verticalAlign:"top","&-container":(t={display:"flex"},(0,o.Z)(t,"".concat(c,"-item-label"),{display:"inline-flex",alignItems:"baseline"}),(0,o.Z)(t,"".concat(c,"-item-content"),{display:"inline-flex",alignItems:"baseline"}),t)}),(0,o.Z)(n,"&-middle",(0,o.Z)({},"".concat(c,"-row"),{"> th, > td":{paddingBottom:e.paddingSM}})),(0,o.Z)(n,"&-small",(0,o.Z)({},"".concat(c,"-row"),{"> th, > td":{paddingBottom:e.paddingXS}})),n)))},S=(0,y.Z)("Descriptions",(function(e){var t=e.colorFillAlter,n=e.fontSizeSM*e.lineHeightSM,o=e.colorText,c="".concat(e.paddingXS,"px ").concat(e.padding,"px"),a="".concat(e.padding,"px ").concat(e.paddingLG,"px"),l="".concat(e.paddingSM,"px ").concat(e.paddingLG,"px"),i=e.padding,r=e.marginXS,s=e.marginXXS/2,d=(0,h.TS)(e,{descriptionsBg:t,descriptionsTitleMarginBottom:n,descriptionsExtraColor:o,descriptionItemPaddingBottom:i,descriptionsSmallPadding:c,descriptionsDefaultPadding:a,descriptionsMiddlePadding:l,descriptionsItemLabelColonMarginRight:r,descriptionsItemLabelColonMarginLeft:s});return[v(d)]})),Z=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(o=Object.getOwnPropertySymbols(e);c<o.length;c++)t.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(e,o[c])&&(n[o[c]]=e[o[c]])}return n},C=r.createContext({}),E={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function w(e,t,n){var o=e;return(void 0===n||n>t)&&(o=(0,d.Tm)(e,{span:t})),o}function O(e){var t,n=e.prefixCls,a=e.title,d=e.extra,p=e.column,u=void 0===p?E:p,b=e.colon,f=void 0===b||b,y=e.bordered,h=e.layout,x=e.children,v=e.className,O=e.rootClassName,j=e.style,N=e.size,I=e.labelStyle,P=e.contentStyle,k=Z(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle"]),L=r.useContext(s.E_),B=L.getPrefixCls,M=L.direction,T=B("descriptions",n),z=r.useState({}),W=(0,c.Z)(z,2),H=W[0],G=W[1],X=function(e,t){if("number"===typeof e)return e;if("object"===typeof e)for(var n=0;n<m.c.length;n++){var o=m.c[n];if(t[o]&&void 0!==e[o])return e[o]||E[o]}return 3}(u,H),R=S(T),A=(0,c.Z)(R,2),D=A[0],_=A[1],F=(0,m.Z)();r.useEffect((function(){var e=F.subscribe((function(e){"object"===typeof u&&G(e)}));return function(){F.unsubscribe(e)}}),[]);var K=function(e,t){var n=(0,i.Z)(e).filter((function(e){return e})),o=[],c=[],a=t;return n.forEach((function(e,l){var i,r=null===(i=e.props)||void 0===i?void 0:i.span,s=r||1;if(l===n.length-1)return c.push(w(e,a,r)),void o.push(c);s<a?(a-=s,c.push(e)):(c.push(w(e,a,s)),o.push(c),a=t,c=[])})),o}(x,X),q=r.useMemo((function(){return{labelStyle:I,contentStyle:P}}),[I,P]);return D(r.createElement(C.Provider,{value:q},r.createElement("div",Object.assign({className:l()(T,(t={},(0,o.Z)(t,"".concat(T,"-").concat(N),N&&"default"!==N),(0,o.Z)(t,"".concat(T,"-bordered"),!!y),(0,o.Z)(t,"".concat(T,"-rtl"),"rtl"===M),t),v,O,_),style:j},k),(a||d)&&r.createElement("div",{className:"".concat(T,"-header")},a&&r.createElement("div",{className:"".concat(T,"-title")},a),d&&r.createElement("div",{className:"".concat(T,"-extra")},d)),r.createElement("div",{className:"".concat(T,"-view")},r.createElement("table",null,r.createElement("tbody",null,K.map((function(e,t){return r.createElement(g,{key:t,index:t,colon:f,prefixCls:T,vertical:"vertical"===h,bordered:y,row:e})}))))))))}O.Item=p;var j=O}}]);
//# sourceMappingURL=78.338f7e1c.chunk.js.map