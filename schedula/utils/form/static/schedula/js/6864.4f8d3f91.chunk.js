"use strict";(self.webpackChunkschedula_form=self.webpackChunkschedula_form||[]).push([[6864],{79286:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(1413),o=n(72791);const c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};var r=n(54291),i=function(t,e){return o.createElement(r.Z,(0,a.Z)((0,a.Z)({},t),{},{ref:e,icon:c}))};i.displayName="PlusOutlined";const l=o.forwardRef(i)},36864:(t,e,n)=>{n.d(e,{Z:()=>Rt});var a=n(60732),o=n(75033),c=n(79286),r=n(81694),i=n.n(r),l=n(87462),s=n(4942),d=n(1413),u=n(29439),p=n(71002),v=n(45987),f=n(72791),b=n(33786),m=n(75179),h=n(15207);const g=(0,f.createContext)(null);var k=f.forwardRef((function(t,e){var n=t.prefixCls,a=t.className,o=t.style,c=t.id,r=t.active,l=t.tabKey,s=t.children;return f.createElement("div",{id:c&&"".concat(c,"-panel-").concat(l),role:"tabpanel",tabIndex:r?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(l),"aria-hidden":!r,style:o,className:i()(n,r&&"".concat(n,"-active"),a),ref:e},s)}));const x=k;var y=["key","forceRender","style","className"];function _(t){var e=t.id,n=t.activeKey,a=t.animated,o=t.tabPosition,c=t.destroyInactiveTabPane,r=f.useContext(g),u=r.prefixCls,p=r.tabs,b=a.tabPane,m="".concat(u,"-tabpane");return f.createElement("div",{className:i()("".concat(u,"-content-holder"))},f.createElement("div",{className:i()("".concat(u,"-content"),"".concat(u,"-content-").concat(o),(0,s.Z)({},"".concat(u,"-content-animated"),b))},p.map((function(t){var o=t.key,r=t.forceRender,s=t.style,u=t.className,p=(0,v.Z)(t,y),g=o===n;return f.createElement(h.default,(0,l.Z)({key:o,visible:g,forceRender:r,removeOnLeave:!!c,leavedClassName:"".concat(m,"-hidden")},a.tabPaneMotion),(function(t,n){var a=t.style,c=t.className;return f.createElement(x,(0,l.Z)({},p,{prefixCls:m,id:e,tabKey:o,animated:b,active:g,style:(0,d.Z)((0,d.Z)({},s),a),className:i()(u,c),ref:n}))}))}))))}var w=n(93433),C=n(88829),S=n(63739),E=n(75314),Z=n(88834),R={width:0,height:0,left:0,top:0};function T(t,e){var n=f.useRef(t),a=f.useState({}),o=(0,u.Z)(a,2)[1];return[n.current,function(t){var a="function"===typeof t?t(n.current):t;a!==n.current&&e(a,n.current),n.current=a,o({})}]}var P=.1,N=.01,L=20,I=Math.pow(.995,L);var B=n(71605);function O(t){var e=(0,f.useState)(0),n=(0,u.Z)(e,2),a=n[0],o=n[1],c=(0,f.useRef)(0),r=(0,f.useRef)();return r.current=t,(0,B.o)((function(){var t;null===(t=r.current)||void 0===t||t.call(r)}),[a]),function(){c.current===a&&(c.current+=1,o(c.current))}}var D={width:0,height:0,left:0,top:0,right:0};function M(t){var e;return t instanceof Map?(e={},t.forEach((function(t,n){e[n]=t}))):e=t,JSON.stringify(e)}var j="TABS_DQ";function H(t){return String(t).replace(/"/g,j)}function z(t,e){var n=t.prefixCls,a=t.editable,o=t.locale,c=t.style;return a&&!1!==a.showAdd?f.createElement("button",{ref:e,type:"button",className:"".concat(n,"-nav-add"),style:c,"aria-label":(null===o||void 0===o?void 0:o.addAriaLabel)||"Add tab",onClick:function(t){a.onEdit("add",{event:t})}},a.addIcon||"+"):null}const A=f.forwardRef(z);const G=f.forwardRef((function(t,e){var n,a=t.position,o=t.prefixCls,c=t.extra;if(!c)return null;var r={};return"object"!==(0,p.Z)(c)||f.isValidElement(c)?r.right=c:r=c,"right"===a&&(n=r.right),"left"===a&&(n=r.left),n?f.createElement("div",{className:"".concat(o,"-extra-content"),ref:e},n):null}));var W=n(93241),X=n(82257),K=n(11354);function q(t,e){var n=t.prefixCls,a=t.id,o=t.tabs,c=t.locale,r=t.mobile,l=t.moreIcon,d=void 0===l?"More":l,p=t.moreTransitionName,v=t.style,b=t.className,m=t.editable,h=t.tabBarGutter,g=t.rtl,k=t.removeAriaLabel,x=t.onTabClick,y=t.getPopupContainer,_=t.popupClassName,w=(0,f.useState)(!1),C=(0,u.Z)(w,2),S=C[0],E=C[1],Z=(0,f.useState)(null),R=(0,u.Z)(Z,2),T=R[0],P=R[1],N="".concat(a,"-more-popup"),L="".concat(n,"-dropdown"),I=null!==T?"".concat(N,"-").concat(T):null,B=null===c||void 0===c?void 0:c.dropdownAriaLabel;var O=f.createElement(X.default,{onClick:function(t){var e=t.key,n=t.domEvent;x(e,n),E(!1)},prefixCls:"".concat(L,"-menu"),id:N,tabIndex:-1,role:"listbox","aria-activedescendant":I,selectedKeys:[T],"aria-label":void 0!==B?B:"expanded dropdown"},o.map((function(t){var e=m&&!1!==t.closable&&!t.disabled;return f.createElement(X.MenuItem,{key:t.key,id:"".concat(N,"-").concat(t.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(t.key),disabled:t.disabled},f.createElement("span",null,t.label),e&&f.createElement("button",{type:"button","aria-label":k||"remove",tabIndex:0,className:"".concat(L,"-menu-item-remove"),onClick:function(e){var n,a;e.stopPropagation(),n=e,a=t.key,n.preventDefault(),n.stopPropagation(),m.onEdit("remove",{key:a,event:n})}},t.closeIcon||m.removeIcon||"\xd7"))})));function D(t){for(var e=o.filter((function(t){return!t.disabled})),n=e.findIndex((function(t){return t.key===T}))||0,a=e.length,c=0;c<a;c+=1){var r=e[n=(n+t+a)%a];if(!r.disabled)return void P(r.key)}}(0,f.useEffect)((function(){var t=document.getElementById(I);t&&t.scrollIntoView&&t.scrollIntoView(!1)}),[T]),(0,f.useEffect)((function(){S||P(null)}),[S]);var M=(0,s.Z)({},g?"marginRight":"marginLeft",h);o.length||(M.visibility="hidden",M.order=1);var j=i()((0,s.Z)({},"".concat(L,"-rtl"),g)),H=r?null:f.createElement(W.default,{prefixCls:L,overlay:O,trigger:["hover"],visible:!!o.length&&S,transitionName:p,onVisibleChange:E,overlayClassName:i()(j,_),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:y},f.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:M,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":N,id:"".concat(a,"-more"),"aria-expanded":S,onKeyDown:function(t){var e=t.which;if(S)switch(e){case K.Z.UP:D(-1),t.preventDefault();break;case K.Z.DOWN:D(1),t.preventDefault();break;case K.Z.ESC:E(!1);break;case K.Z.SPACE:case K.Z.ENTER:null!==T&&x(T,t)}else[K.Z.DOWN,K.Z.SPACE,K.Z.ENTER].includes(e)&&(E(!0),t.preventDefault())}},d));return f.createElement("div",{className:i()("".concat(n,"-nav-operations"),b),style:v,ref:e},H,f.createElement(A,{prefixCls:n,locale:c,editable:m}))}const V=f.memo(f.forwardRef(q),(function(t,e){return e.tabMoving}));const Y=function(t){var e,n=t.prefixCls,a=t.id,o=t.active,c=t.tab,r=c.key,l=c.label,d=c.disabled,u=c.closeIcon,p=t.closable,v=t.renderWrapper,b=t.removeAriaLabel,m=t.editable,h=t.onClick,g=t.onFocus,k=t.style,x="".concat(n,"-tab"),y=m&&!1!==p&&!d;function _(t){d||h(t)}var w=f.createElement("div",{key:r,"data-node-key":H(r),className:i()(x,(e={},(0,s.Z)(e,"".concat(x,"-with-remove"),y),(0,s.Z)(e,"".concat(x,"-active"),o),(0,s.Z)(e,"".concat(x,"-disabled"),d),e)),style:k,onClick:_},f.createElement("div",{role:"tab","aria-selected":o,id:a&&"".concat(a,"-tab-").concat(r),className:"".concat(x,"-btn"),"aria-controls":a&&"".concat(a,"-panel-").concat(r),"aria-disabled":d,tabIndex:d?null:0,onClick:function(t){t.stopPropagation(),_(t)},onKeyDown:function(t){[K.Z.SPACE,K.Z.ENTER].includes(t.which)&&(t.preventDefault(),_(t))},onFocus:g},l),y&&f.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(x,"-remove"),onClick:function(t){var e;t.stopPropagation(),(e=t).preventDefault(),e.stopPropagation(),m.onEdit("remove",{key:r,event:e})}},u||m.removeIcon||"\xd7"));return v?v(w):w};var F=function(t){var e=t.current||{},n=e.offsetWidth,a=void 0===n?0:n,o=e.offsetHeight;return[a,void 0===o?0:o]},Q=function(t,e){return t[e?0:1]};function J(t,e){var n,a=f.useContext(g),o=a.prefixCls,c=a.tabs,r=t.className,p=t.style,v=t.id,b=t.animated,m=t.activeKey,h=t.rtl,k=t.extra,x=t.editable,y=t.locale,_=t.tabPosition,B=t.tabBarGutter,j=t.children,z=t.onTabClick,W=t.onTabScroll,X=(0,f.useRef)(),K=(0,f.useRef)(),q=(0,f.useRef)(),J=(0,f.useRef)(),U=(0,f.useRef)(),$=(0,f.useRef)(),tt=(0,f.useRef)(),et="top"===_||"bottom"===_,nt=T(0,(function(t,e){et&&W&&W({direction:t>e?"left":"right"})})),at=(0,u.Z)(nt,2),ot=at[0],ct=at[1],rt=T(0,(function(t,e){!et&&W&&W({direction:t>e?"top":"bottom"})})),it=(0,u.Z)(rt,2),lt=it[0],st=it[1],dt=(0,f.useState)([0,0]),ut=(0,u.Z)(dt,2),pt=ut[0],vt=ut[1],ft=(0,f.useState)([0,0]),bt=(0,u.Z)(ft,2),mt=bt[0],ht=bt[1],gt=(0,f.useState)([0,0]),kt=(0,u.Z)(gt,2),xt=kt[0],yt=kt[1],_t=(0,f.useState)([0,0]),wt=(0,u.Z)(_t,2),Ct=wt[0],St=wt[1],Et=function(t){var e=(0,f.useRef)([]),n=(0,f.useState)({}),a=(0,u.Z)(n,2)[1],o=(0,f.useRef)("function"===typeof t?t():t),c=O((function(){var t=o.current;e.current.forEach((function(e){t=e(t)})),e.current=[],o.current=t,a({})}));return[o.current,function(t){e.current.push(t),c()}]}(new Map),Zt=(0,u.Z)(Et,2),Rt=Zt[0],Tt=Zt[1],Pt=function(t,e,n){return(0,f.useMemo)((function(){for(var n,a=new Map,o=e.get(null===(n=t[0])||void 0===n?void 0:n.key)||R,c=o.left+o.width,r=0;r<t.length;r+=1){var i,l=t[r].key,s=e.get(l);s||(s=e.get(null===(i=t[r-1])||void 0===i?void 0:i.key)||R);var u=a.get(l)||(0,d.Z)({},s);u.right=c-u.left-u.width,a.set(l,u)}return a}),[t.map((function(t){return t.key})).join("_"),e,n])}(c,Rt,mt[0]),Nt=Q(pt,et),Lt=Q(mt,et),It=Q(xt,et),Bt=Q(Ct,et),Ot=Nt<Lt+It,Dt=Ot?Nt-Bt:Nt-It,Mt="".concat(o,"-nav-operations-hidden"),jt=0,Ht=0;function zt(t){return t<jt?jt:t>Ht?Ht:t}et&&h?(jt=0,Ht=Math.max(0,Lt-Dt)):(jt=Math.min(0,Dt-Lt),Ht=0);var At=(0,f.useRef)(),Gt=(0,f.useState)(),Wt=(0,u.Z)(Gt,2),Xt=Wt[0],Kt=Wt[1];function qt(){Kt(Date.now())}function Vt(){window.clearTimeout(At.current)}!function(t,e){var n=(0,f.useState)(),a=(0,u.Z)(n,2),o=a[0],c=a[1],r=(0,f.useState)(0),i=(0,u.Z)(r,2),l=i[0],s=i[1],d=(0,f.useState)(0),p=(0,u.Z)(d,2),v=p[0],b=p[1],m=(0,f.useState)(),h=(0,u.Z)(m,2),g=h[0],k=h[1],x=(0,f.useRef)(),y=(0,f.useRef)(),_=(0,f.useRef)(null);_.current={onTouchStart:function(t){var e=t.touches[0],n=e.screenX,a=e.screenY;c({x:n,y:a}),window.clearInterval(x.current)},onTouchMove:function(t){if(o){t.preventDefault();var n=t.touches[0],a=n.screenX,r=n.screenY;c({x:a,y:r});var i=a-o.x,d=r-o.y;e(i,d);var u=Date.now();s(u),b(u-l),k({x:i,y:d})}},onTouchEnd:function(){if(o&&(c(null),k(null),g)){var t=g.x/v,n=g.y/v,a=Math.abs(t),r=Math.abs(n);if(Math.max(a,r)<P)return;var i=t,l=n;x.current=window.setInterval((function(){Math.abs(i)<N&&Math.abs(l)<N?window.clearInterval(x.current):e((i*=I)*L,(l*=I)*L)}),L)}},onWheel:function(t){var n=t.deltaX,a=t.deltaY,o=0,c=Math.abs(n),r=Math.abs(a);c===r?o="x"===y.current?n:a:c>r?(o=n,y.current="x"):(o=a,y.current="y"),e(-o,-o)&&t.preventDefault()}},f.useEffect((function(){function e(t){_.current.onTouchMove(t)}function n(t){_.current.onTouchEnd(t)}return document.addEventListener("touchmove",e,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),t.current.addEventListener("touchstart",(function(t){_.current.onTouchStart(t)}),{passive:!1}),t.current.addEventListener("wheel",(function(t){_.current.onWheel(t)})),function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",n)}}),[])}(J,(function(t,e){function n(t,e){t((function(t){return zt(t+e)}))}return!!Ot&&(et?n(ct,t):n(st,e),Vt(),qt(),!0)})),(0,f.useEffect)((function(){return Vt(),Xt&&(At.current=window.setTimeout((function(){Kt(0)}),100)),Vt}),[Xt]);var Yt=function(t,e,n,a,o,c,r){var i,l,s,d=r.tabs,u=r.tabPosition,p=r.rtl;return["top","bottom"].includes(u)?(i="width",l=p?"right":"left",s=Math.abs(n)):(i="height",l="top",s=-n),(0,f.useMemo)((function(){if(!d.length)return[0,0];for(var n=d.length,a=n,o=0;o<n;o+=1){var c=t.get(d[o].key)||D;if(c[l]+c[i]>s+e){a=o-1;break}}for(var r=0,u=n-1;u>=0;u-=1)if((t.get(d[u].key)||D)[l]<s){r=u+1;break}return[r,a]}),[t,e,a,o,c,s,u,d.map((function(t){return t.key})).join("_"),p])}(Pt,Dt,et?ot:lt,Lt,It,Bt,(0,d.Z)((0,d.Z)({},t),{},{tabs:c})),Ft=(0,u.Z)(Yt,2),Qt=Ft[0],Jt=Ft[1],Ut=(0,S.Z)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=Pt.get(t)||{width:0,height:0,left:0,right:0,top:0};if(et){var n=ot;h?e.right<ot?n=e.right:e.right+e.width>ot+Dt&&(n=e.right+e.width-Dt):e.left<-ot?n=-e.left:e.left+e.width>-ot+Dt&&(n=-(e.left+e.width-Dt)),st(0),ct(zt(n))}else{var a=lt;e.top<-lt?a=-e.top:e.top+e.height>-lt+Dt&&(a=-(e.top+e.height-Dt)),ct(0),st(zt(a))}})),$t={};"top"===_||"bottom"===_?$t[h?"marginRight":"marginLeft"]=B:$t.marginTop=B;var te=c.map((function(t,e){var n=t.key;return f.createElement(Y,{id:v,prefixCls:o,key:n,tab:t,style:0===e?void 0:$t,closable:t.closable,editable:x,active:n===m,renderWrapper:j,removeAriaLabel:null===y||void 0===y?void 0:y.removeAriaLabel,onClick:function(t){z(n,t)},onFocus:function(){Ut(n),qt(),J.current&&(h||(J.current.scrollLeft=0),J.current.scrollTop=0)}})})),ee=function(){return Tt((function(){var t=new Map;return c.forEach((function(e){var n,a=e.key,o=null===(n=U.current)||void 0===n?void 0:n.querySelector('[data-node-key="'.concat(H(a),'"]'));o&&t.set(a,{width:o.offsetWidth,height:o.offsetHeight,left:o.offsetLeft,top:o.offsetTop})})),t}))};(0,f.useEffect)((function(){ee()}),[c.map((function(t){return t.key})).join("_")]);var ne=O((function(){var t=F(X),e=F(K),n=F(q);vt([t[0]-e[0]-n[0],t[1]-e[1]-n[1]]);var a=F(tt);yt(a);var o=F($);St(o);var c=F(U);ht([c[0]-a[0],c[1]-a[1]]),ee()})),ae=c.slice(0,Qt),oe=c.slice(Jt+1),ce=[].concat((0,w.Z)(ae),(0,w.Z)(oe)),re=(0,f.useState)(),ie=(0,u.Z)(re,2),le=ie[0],se=ie[1],de=Pt.get(m),ue=(0,f.useRef)();function pe(){E.Z.cancel(ue.current)}(0,f.useEffect)((function(){var t={};return de&&(et?(h?t.right=de.right:t.left=de.left,t.width=de.width):(t.top=de.top,t.height=de.height)),pe(),ue.current=(0,E.Z)((function(){se(t)})),pe}),[de,et,h]),(0,f.useEffect)((function(){Ut()}),[m,jt,Ht,M(de),M(Pt),et]),(0,f.useEffect)((function(){ne()}),[h]);var ve,fe,be,me,he=!!ce.length,ge="".concat(o,"-nav-wrap");return et?h?(fe=ot>0,ve=ot!==Ht):(ve=ot<0,fe=ot!==jt):(be=lt<0,me=lt!==jt),f.createElement(C.Z,{onResize:ne},f.createElement("div",{ref:(0,Z.x1)(e,X),role:"tablist",className:i()("".concat(o,"-nav"),r),style:p,onKeyDown:function(){qt()}},f.createElement(G,{ref:K,position:"left",extra:k,prefixCls:o}),f.createElement("div",{className:i()(ge,(n={},(0,s.Z)(n,"".concat(ge,"-ping-left"),ve),(0,s.Z)(n,"".concat(ge,"-ping-right"),fe),(0,s.Z)(n,"".concat(ge,"-ping-top"),be),(0,s.Z)(n,"".concat(ge,"-ping-bottom"),me),n)),ref:J},f.createElement(C.Z,{onResize:ne},f.createElement("div",{ref:U,className:"".concat(o,"-nav-list"),style:{transform:"translate(".concat(ot,"px, ").concat(lt,"px)"),transition:Xt?"none":void 0}},te,f.createElement(A,{ref:tt,prefixCls:o,locale:y,editable:x,style:(0,d.Z)((0,d.Z)({},0===te.length?void 0:$t),{},{visibility:he?"hidden":null})}),f.createElement("div",{className:i()("".concat(o,"-ink-bar"),(0,s.Z)({},"".concat(o,"-ink-bar-animated"),b.inkBar)),style:le})))),f.createElement(V,(0,l.Z)({},t,{removeAriaLabel:null===y||void 0===y?void 0:y.removeAriaLabel,ref:$,prefixCls:o,tabs:ce,className:!he&&Mt,tabMoving:!!Xt})),f.createElement(G,{ref:q,position:"right",extra:k,prefixCls:o})))}const U=f.forwardRef(J);var $=["renderTabBar"],tt=["label","key"];function et(t){var e=t.renderTabBar,n=(0,v.Z)(t,$),a=f.useContext(g).tabs;return e?e((0,d.Z)((0,d.Z)({},n),{},{panes:a.map((function(t){var e=t.label,n=t.key,a=(0,v.Z)(t,tt);return f.createElement(x,(0,l.Z)({tab:e,key:n,tabKey:n},a))}))}),U):f.createElement(U,n)}n(60632);var nt=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],at=0;function ot(t,e){var n,a=t.id,o=t.prefixCls,c=void 0===o?"rc-tabs":o,r=t.className,h=t.items,k=t.direction,x=t.activeKey,y=t.defaultActiveKey,w=t.editable,C=t.animated,S=t.tabPosition,E=void 0===S?"top":S,Z=t.tabBarGutter,R=t.tabBarStyle,T=t.tabBarExtraContent,P=t.locale,N=t.moreIcon,L=t.moreTransitionName,I=t.destroyInactiveTabPane,B=t.renderTabBar,O=t.onChange,D=t.onTabClick,M=t.onTabScroll,j=t.getPopupContainer,H=t.popupClassName,z=(0,v.Z)(t,nt),A=f.useMemo((function(){return(h||[]).filter((function(t){return t&&"object"===(0,p.Z)(t)&&"key"in t}))}),[h]),G="rtl"===k,W=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(t=!1===e?{inkBar:!1,tabPane:!1}:!0===e?{inkBar:!0,tabPane:!1}:(0,d.Z)({inkBar:!0},"object"===(0,p.Z)(e)?e:{})).tabPaneMotion&&void 0===t.tabPane&&(t.tabPane=!0),!t.tabPaneMotion&&t.tabPane&&(t.tabPane=!1),t}(C),X=(0,f.useState)(!1),K=(0,u.Z)(X,2),q=K[0],V=K[1];(0,f.useEffect)((function(){V((0,b.Z)())}),[]);var Y=(0,m.Z)((function(){var t;return null===(t=A[0])||void 0===t?void 0:t.key}),{value:x,defaultValue:y}),F=(0,u.Z)(Y,2),Q=F[0],J=F[1],U=(0,f.useState)((function(){return A.findIndex((function(t){return t.key===Q}))})),$=(0,u.Z)(U,2),tt=$[0],ot=$[1];(0,f.useEffect)((function(){var t,e=A.findIndex((function(t){return t.key===Q}));-1===e&&(e=Math.max(0,Math.min(tt,A.length-1)),J(null===(t=A[e])||void 0===t?void 0:t.key));ot(e)}),[A.map((function(t){return t.key})).join("_"),Q,tt]);var ct=(0,m.Z)(null,{value:a}),rt=(0,u.Z)(ct,2),it=rt[0],lt=rt[1];(0,f.useEffect)((function(){a||(lt("rc-tabs-".concat(at)),at+=1)}),[]);var st={id:it,activeKey:Q,animated:W,tabPosition:E,rtl:G,mobile:q},dt=(0,d.Z)((0,d.Z)({},st),{},{editable:w,locale:P,moreIcon:N,moreTransitionName:L,tabBarGutter:Z,onTabClick:function(t,e){null===D||void 0===D||D(t,e);var n=t!==Q;J(t),n&&(null===O||void 0===O||O(t))},onTabScroll:M,extra:T,style:R,panes:null,getPopupContainer:j,popupClassName:H});return f.createElement(g.Provider,{value:{tabs:A,prefixCls:c}},f.createElement("div",(0,l.Z)({ref:e,id:a,className:i()(c,"".concat(c,"-").concat(E),(n={},(0,s.Z)(n,"".concat(c,"-mobile"),q),(0,s.Z)(n,"".concat(c,"-editable"),w),(0,s.Z)(n,"".concat(c,"-rtl"),G),n),r)},z),undefined,f.createElement(et,(0,l.Z)({},dt,{renderTabBar:B})),f.createElement(_,(0,l.Z)({destroyInactiveTabPane:I},st,{animated:W}))))}const ct=f.forwardRef(ot);var rt=n(71929),it=n(1815),lt=n(29464);const st={motionAppear:!1,motionEnter:!0,motionLeave:!0};var dt=n(85501),ut=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(n[a[o]]=t[a[o]])}return n};const pt=()=>null;var vt=n(55564),ft=n(89922),bt=n(67521),mt=n(25541);const ht=t=>{const{componentCls:e,motionDurationSlow:n}=t;return[{[e]:{["".concat(e,"-switch")]:{"&-appear, &-enter":{transition:"none","&-start":{opacity:0},"&-active":{opacity:1,transition:"opacity ".concat(n)}},"&-leave":{position:"absolute",transition:"none",inset:0,"&-start":{opacity:1},"&-active":{opacity:0,transition:"opacity ".concat(n)}}}}},[(0,mt.oN)(t,"slide-up"),(0,mt.oN)(t,"slide-down")]]},gt=t=>{const{componentCls:e,tabsCardHorizontalPadding:n,tabsCardHeadBackground:a,tabsCardGutter:o,colorBorderSecondary:c}=t;return{["".concat(e,"-card")]:{["> ".concat(e,"-nav, > div > ").concat(e,"-nav")]:{["".concat(e,"-tab")]:{margin:0,padding:n,background:a,border:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(c),transition:"all ".concat(t.motionDurationSlow," ").concat(t.motionEaseInOut)},["".concat(e,"-tab-active")]:{color:t.colorPrimary,background:t.colorBgContainer},["".concat(e,"-ink-bar")]:{visibility:"hidden"}},["&".concat(e,"-top, &").concat(e,"-bottom")]:{["> ".concat(e,"-nav, > div > ").concat(e,"-nav")]:{["".concat(e,"-tab + ").concat(e,"-tab")]:{marginLeft:{_skip_check_:!0,value:"".concat(o,"px")}}}},["&".concat(e,"-top")]:{["> ".concat(e,"-nav, > div > ").concat(e,"-nav")]:{["".concat(e,"-tab")]:{borderRadius:"".concat(t.borderRadiusLG,"px ").concat(t.borderRadiusLG,"px 0 0")},["".concat(e,"-tab-active")]:{borderBottomColor:t.colorBgContainer}}},["&".concat(e,"-bottom")]:{["> ".concat(e,"-nav, > div > ").concat(e,"-nav")]:{["".concat(e,"-tab")]:{borderRadius:"0 0 ".concat(t.borderRadiusLG,"px ").concat(t.borderRadiusLG,"px")},["".concat(e,"-tab-active")]:{borderTopColor:t.colorBgContainer}}},["&".concat(e,"-left, &").concat(e,"-right")]:{["> ".concat(e,"-nav, > div > ").concat(e,"-nav")]:{["".concat(e,"-tab + ").concat(e,"-tab")]:{marginTop:"".concat(o,"px")}}},["&".concat(e,"-left")]:{["> ".concat(e,"-nav, > div > ").concat(e,"-nav")]:{["".concat(e,"-tab")]:{borderRadius:{_skip_check_:!0,value:"".concat(t.borderRadiusLG,"px 0 0 ").concat(t.borderRadiusLG,"px")}},["".concat(e,"-tab-active")]:{borderRightColor:{_skip_check_:!0,value:t.colorBgContainer}}}},["&".concat(e,"-right")]:{["> ".concat(e,"-nav, > div > ").concat(e,"-nav")]:{["".concat(e,"-tab")]:{borderRadius:{_skip_check_:!0,value:"0 ".concat(t.borderRadiusLG,"px ").concat(t.borderRadiusLG,"px 0")}},["".concat(e,"-tab-active")]:{borderLeftColor:{_skip_check_:!0,value:t.colorBgContainer}}}}}}},kt=t=>{const{componentCls:e,tabsHoverColor:n,dropdownEdgeChildVerticalPadding:a}=t;return{["".concat(e,"-dropdown")]:Object.assign(Object.assign({},(0,bt.Wf)(t)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:t.zIndexPopup,display:"block","&-hidden":{display:"none"},["".concat(e,"-dropdown-menu")]:{maxHeight:t.tabsDropdownHeight,margin:0,padding:"".concat(a,"px 0"),overflowX:"hidden",overflowY:"auto",textAlign:{_skip_check_:!0,value:"left"},listStyleType:"none",backgroundColor:t.colorBgContainer,backgroundClip:"padding-box",borderRadius:t.borderRadiusLG,outline:"none",boxShadow:t.boxShadowSecondary,"&-item":Object.assign(Object.assign({},bt.vS),{display:"flex",alignItems:"center",minWidth:t.tabsDropdownWidth,margin:0,padding:"".concat(t.paddingXXS,"px ").concat(t.paddingSM,"px"),color:t.colorText,fontWeight:"normal",fontSize:t.fontSize,lineHeight:t.lineHeight,cursor:"pointer",transition:"all ".concat(t.motionDurationSlow),"> span":{flex:1,whiteSpace:"nowrap"},"&-remove":{flex:"none",marginLeft:{_skip_check_:!0,value:t.marginSM},color:t.colorTextDescription,fontSize:t.fontSizeSM,background:"transparent",border:0,cursor:"pointer","&:hover":{color:n}},"&:hover":{background:t.controlItemBgHover},"&-disabled":{"&, &:hover":{color:t.colorTextDisabled,background:"transparent",cursor:"not-allowed"}}})}})}},xt=t=>{const{componentCls:e,margin:n,colorBorderSecondary:a}=t;return{["".concat(e,"-top, ").concat(e,"-bottom")]:{flexDirection:"column",["> ".concat(e,"-nav, > div > ").concat(e,"-nav")]:{margin:"0 0 ".concat(n,"px 0"),"&::before":{position:"absolute",right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},borderBottom:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(a),content:"''"},["".concat(e,"-ink-bar")]:{height:t.lineWidthBold,"&-animated":{transition:"width ".concat(t.motionDurationSlow,", left ").concat(t.motionDurationSlow,",\n            right ").concat(t.motionDurationSlow)}},["".concat(e,"-nav-wrap")]:{"&::before, &::after":{top:0,bottom:0,width:t.controlHeight},"&::before":{left:{_skip_check_:!0,value:0},boxShadow:t.boxShadowTabsOverflowLeft},"&::after":{right:{_skip_check_:!0,value:0},boxShadow:t.boxShadowTabsOverflowRight},["&".concat(e,"-nav-wrap-ping-left::before")]:{opacity:1},["&".concat(e,"-nav-wrap-ping-right::after")]:{opacity:1}}}},["".concat(e,"-top")]:{["> ".concat(e,"-nav,\n        > div > ").concat(e,"-nav")]:{"&::before":{bottom:0},["".concat(e,"-ink-bar")]:{bottom:0}}},["".concat(e,"-bottom")]:{["> ".concat(e,"-nav, > div > ").concat(e,"-nav")]:{order:1,marginTop:"".concat(n,"px"),marginBottom:0,"&::before":{top:0},["".concat(e,"-ink-bar")]:{top:0}},["> ".concat(e,"-content-holder, > div > ").concat(e,"-content-holder")]:{order:0}},["".concat(e,"-left, ").concat(e,"-right")]:{["> ".concat(e,"-nav, > div > ").concat(e,"-nav")]:{flexDirection:"column",minWidth:1.25*t.controlHeight,["".concat(e,"-tab")]:{padding:"".concat(t.paddingXS,"px ").concat(t.paddingLG,"px"),textAlign:"center"},["".concat(e,"-tab + ").concat(e,"-tab")]:{margin:"".concat(t.margin,"px 0 0 0")},["".concat(e,"-nav-wrap")]:{flexDirection:"column","&::before, &::after":{right:{_skip_check_:!0,value:0},left:{_skip_check_:!0,value:0},height:t.controlHeight},"&::before":{top:0,boxShadow:t.boxShadowTabsOverflowTop},"&::after":{bottom:0,boxShadow:t.boxShadowTabsOverflowBottom},["&".concat(e,"-nav-wrap-ping-top::before")]:{opacity:1},["&".concat(e,"-nav-wrap-ping-bottom::after")]:{opacity:1}},["".concat(e,"-ink-bar")]:{width:t.lineWidthBold,"&-animated":{transition:"height ".concat(t.motionDurationSlow,", top ").concat(t.motionDurationSlow)}},["".concat(e,"-nav-list, ").concat(e,"-nav-operations")]:{flex:"1 0 auto",flexDirection:"column"}}},["".concat(e,"-left")]:{["> ".concat(e,"-nav, > div > ").concat(e,"-nav")]:{["".concat(e,"-ink-bar")]:{right:{_skip_check_:!0,value:0}}},["> ".concat(e,"-content-holder, > div > ").concat(e,"-content-holder")]:{marginLeft:{_skip_check_:!0,value:"-".concat(t.lineWidth,"px")},borderLeft:{_skip_check_:!0,value:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorBorder)},["> ".concat(e,"-content > ").concat(e,"-tabpane")]:{paddingLeft:{_skip_check_:!0,value:t.paddingLG}}}},["".concat(e,"-right")]:{["> ".concat(e,"-nav, > div > ").concat(e,"-nav")]:{order:1,["".concat(e,"-ink-bar")]:{left:{_skip_check_:!0,value:0}}},["> ".concat(e,"-content-holder, > div > ").concat(e,"-content-holder")]:{order:0,marginRight:{_skip_check_:!0,value:-t.lineWidth},borderRight:{_skip_check_:!0,value:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(t.colorBorder)},["> ".concat(e,"-content > ").concat(e,"-tabpane")]:{paddingRight:{_skip_check_:!0,value:t.paddingLG}}}}}},yt=t=>{const{componentCls:e,padding:n}=t;return{[e]:{"&-small":{["> ".concat(e,"-nav")]:{["".concat(e,"-tab")]:{padding:"".concat(t.paddingXS,"px 0"),fontSize:t.fontSize}}},"&-large":{["> ".concat(e,"-nav")]:{["".concat(e,"-tab")]:{padding:"".concat(n,"px 0"),fontSize:t.fontSizeLG}}}},["".concat(e,"-card")]:{["&".concat(e,"-small")]:{["> ".concat(e,"-nav")]:{["".concat(e,"-tab")]:{padding:"".concat(1.5*t.paddingXXS,"px ").concat(n,"px")}},["&".concat(e,"-bottom")]:{["> ".concat(e,"-nav ").concat(e,"-tab")]:{borderRadius:"0 0 ".concat(t.borderRadius,"px ").concat(t.borderRadius,"px")}},["&".concat(e,"-top")]:{["> ".concat(e,"-nav ").concat(e,"-tab")]:{borderRadius:"".concat(t.borderRadius,"px ").concat(t.borderRadius,"px 0 0")}},["&".concat(e,"-right")]:{["> ".concat(e,"-nav ").concat(e,"-tab")]:{borderRadius:{_skip_check_:!0,value:"0 ".concat(t.borderRadius,"px ").concat(t.borderRadius,"px 0")}}},["&".concat(e,"-left")]:{["> ".concat(e,"-nav ").concat(e,"-tab")]:{borderRadius:{_skip_check_:!0,value:"".concat(t.borderRadius,"px 0 0 ").concat(t.borderRadius,"px")}}}},["&".concat(e,"-large")]:{["> ".concat(e,"-nav")]:{["".concat(e,"-tab")]:{padding:"".concat(t.paddingXS,"px ").concat(n,"px ").concat(1.5*t.paddingXXS,"px")}}}}}},_t=t=>{const{componentCls:e,tabsActiveColor:n,tabsHoverColor:a,iconCls:o,tabsHorizontalGutter:c}=t,r="".concat(e,"-tab");return{[r]:{position:"relative",display:"inline-flex",alignItems:"center",padding:"".concat(t.paddingSM,"px 0"),fontSize:"".concat(t.fontSize,"px"),background:"transparent",border:0,outline:"none",cursor:"pointer","&-btn, &-remove":Object.assign({"&:focus:not(:focus-visible), &:active":{color:n}},(0,bt.Qy)(t)),"&-btn":{outline:"none",transition:"all 0.3s"},"&-remove":{flex:"none",marginRight:{_skip_check_:!0,value:-t.marginXXS},marginLeft:{_skip_check_:!0,value:t.marginXS},color:t.colorTextDescription,fontSize:t.fontSizeSM,background:"transparent",border:"none",outline:"none",cursor:"pointer",transition:"all ".concat(t.motionDurationSlow),"&:hover":{color:t.colorTextHeading}},"&:hover":{color:a},["&".concat(r,"-active ").concat(r,"-btn")]:{color:t.colorPrimary,textShadow:t.tabsActiveTextShadow},["&".concat(r,"-disabled")]:{color:t.colorTextDisabled,cursor:"not-allowed"},["&".concat(r,"-disabled ").concat(r,"-btn, &").concat(r,"-disabled ").concat(e,"-remove")]:{"&:focus, &:active":{color:t.colorTextDisabled}},["& ".concat(r,"-remove ").concat(o)]:{margin:0},[o]:{marginRight:{_skip_check_:!0,value:t.marginSM}}},["".concat(r," + ").concat(r)]:{margin:{_skip_check_:!0,value:"0 0 0 ".concat(c,"px")}}}},wt=t=>{const{componentCls:e,tabsHorizontalGutter:n,iconCls:a,tabsCardGutter:o}=t;return{["".concat(e,"-rtl")]:{direction:"rtl",["".concat(e,"-nav")]:{["".concat(e,"-tab")]:{margin:{_skip_check_:!0,value:"0 0 0 ".concat(n,"px")},["".concat(e,"-tab:last-of-type")]:{marginLeft:{_skip_check_:!0,value:0}},[a]:{marginRight:{_skip_check_:!0,value:0},marginLeft:{_skip_check_:!0,value:"".concat(t.marginSM,"px")}},["".concat(e,"-tab-remove")]:{marginRight:{_skip_check_:!0,value:"".concat(t.marginXS,"px")},marginLeft:{_skip_check_:!0,value:"-".concat(t.marginXXS,"px")},[a]:{margin:0}}}},["&".concat(e,"-left")]:{["> ".concat(e,"-nav")]:{order:1},["> ".concat(e,"-content-holder")]:{order:0}},["&".concat(e,"-right")]:{["> ".concat(e,"-nav")]:{order:0},["> ".concat(e,"-content-holder")]:{order:1}},["&".concat(e,"-card").concat(e,"-top, &").concat(e,"-card").concat(e,"-bottom")]:{["> ".concat(e,"-nav, > div > ").concat(e,"-nav")]:{["".concat(e,"-tab + ").concat(e,"-tab")]:{marginRight:{_skip_check_:!0,value:"".concat(o,"px")},marginLeft:{_skip_check_:!0,value:0}}}}},["".concat(e,"-dropdown-rtl")]:{direction:"rtl"},["".concat(e,"-menu-item")]:{["".concat(e,"-dropdown-rtl")]:{textAlign:{_skip_check_:!0,value:"right"}}}}},Ct=t=>{const{componentCls:e,tabsCardHorizontalPadding:n,tabsCardHeight:a,tabsCardGutter:o,tabsHoverColor:c,tabsActiveColor:r,colorBorderSecondary:i}=t;return{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,bt.Wf)(t)),{display:"flex",["> ".concat(e,"-nav, > div > ").concat(e,"-nav")]:{position:"relative",display:"flex",flex:"none",alignItems:"center",["".concat(e,"-nav-wrap")]:{position:"relative",display:"flex",flex:"auto",alignSelf:"stretch",overflow:"hidden",whiteSpace:"nowrap",transform:"translate(0)","&::before, &::after":{position:"absolute",zIndex:1,opacity:0,transition:"opacity ".concat(t.motionDurationSlow),content:"''",pointerEvents:"none"}},["".concat(e,"-nav-list")]:{position:"relative",display:"flex",transition:"opacity ".concat(t.motionDurationSlow)},["".concat(e,"-nav-operations")]:{display:"flex",alignSelf:"stretch"},["".concat(e,"-nav-operations-hidden")]:{position:"absolute",visibility:"hidden",pointerEvents:"none"},["".concat(e,"-nav-more")]:{position:"relative",padding:n,background:"transparent",border:0,color:t.colorText,"&::after":{position:"absolute",right:{_skip_check_:!0,value:0},bottom:0,left:{_skip_check_:!0,value:0},height:t.controlHeightLG/8,transform:"translateY(100%)",content:"''"}},["".concat(e,"-nav-add")]:Object.assign({minWidth:"".concat(a,"px"),marginLeft:{_skip_check_:!0,value:"".concat(o,"px")},padding:"0 ".concat(t.paddingXS,"px"),background:"transparent",border:"".concat(t.lineWidth,"px ").concat(t.lineType," ").concat(i),borderRadius:"".concat(t.borderRadiusLG,"px ").concat(t.borderRadiusLG,"px 0 0"),outline:"none",cursor:"pointer",color:t.colorText,transition:"all ".concat(t.motionDurationSlow," ").concat(t.motionEaseInOut),"&:hover":{color:c},"&:active, &:focus:not(:focus-visible)":{color:r}},(0,bt.Qy)(t))},["".concat(e,"-extra-content")]:{flex:"none"},["".concat(e,"-ink-bar")]:{position:"absolute",background:t.colorPrimary,pointerEvents:"none"}}),_t(t)),{["".concat(e,"-content")]:{position:"relative",width:"100%"},["".concat(e,"-content-holder")]:{flex:"auto",minWidth:0,minHeight:0},["".concat(e,"-tabpane")]:{outline:"none","&-hidden":{display:"none"}}}),["".concat(e,"-centered")]:{["> ".concat(e,"-nav, > div > ").concat(e,"-nav")]:{["".concat(e,"-nav-wrap")]:{["&:not([class*='".concat(e,"-nav-wrap-ping'])")]:{justifyContent:"center"}}}}}},St=(0,vt.Z)("Tabs",(t=>{const e=t.controlHeightLG,n=(0,ft.TS)(t,{tabsHoverColor:t.colorPrimaryHover,tabsActiveColor:t.colorPrimaryActive,tabsCardHorizontalPadding:"".concat((e-Math.round(t.fontSize*t.lineHeight))/2-t.lineWidth,"px ").concat(t.padding,"px"),tabsCardHeight:e,tabsCardGutter:t.marginXXS/2,tabsHorizontalGutter:32,tabsCardHeadBackground:t.colorFillAlter,dropdownEdgeChildVerticalPadding:t.paddingXXS,tabsActiveTextShadow:"0 0 0.25px currentcolor",tabsDropdownHeight:200,tabsDropdownWidth:120});return[yt(n),wt(n),xt(n),kt(n),gt(n),Ct(n),ht(n)]}),(t=>({zIndexPopup:t.zIndexPopupBase+50})));var Et=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(n[a[o]]=t[a[o]])}return n};function Zt(t){var{type:e,className:n,rootClassName:r,size:l,onEdit:s,hideAdd:d,centered:u,addIcon:p,popupClassName:v,children:b,items:m,animated:h}=t,g=Et(t,["type","className","rootClassName","size","onEdit","hideAdd","centered","addIcon","popupClassName","children","items","animated"]);const{prefixCls:k,moreIcon:x=f.createElement(o.Z,null)}=g,{direction:y,getPrefixCls:_,getPopupContainer:w}=f.useContext(rt.E_),C=_("tabs",k),[S,E]=St(C);let Z;"editable-card"===e&&(Z={onEdit:(t,e)=>{let{key:n,event:a}=e;null===s||void 0===s||s("add"===t?a:n,t)},removeIcon:f.createElement(a.Z,null),addIcon:p||f.createElement(c.Z,null),showAdd:!0!==d});const R=_(),T=function(t,e){return t||function(t){return t.filter((t=>t))}((0,dt.Z)(e).map((t=>{if(f.isValidElement(t)){const{key:e,props:n}=t,a=n||{},{tab:o}=a,c=ut(a,["tab"]);return Object.assign(Object.assign({key:String(e)},c),{label:o})}return null})))}(m,b),P=function(t){let e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return e=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:Object.assign({inkBar:!0},"object"===typeof n?n:{}),e.tabPane&&(e.tabPaneMotion=Object.assign(Object.assign({},st),{motionName:(0,lt.mL)(t,"switch")})),e}(C,h),N=f.useContext(it.Z),L=void 0!==l?l:N;return S(f.createElement(ct,Object.assign({direction:y,getPopupContainer:w,moreTransitionName:"".concat(R,"-slide-up")},g,{items:T,className:i()({["".concat(C,"-").concat(L)]:L,["".concat(C,"-card")]:["card","editable-card"].includes(e),["".concat(C,"-editable-card")]:"editable-card"===e,["".concat(C,"-centered")]:u},n,r,E),popupClassName:i()(v,E),editable:Z,moreIcon:x,prefixCls:C,animated:P})))}Zt.TabPane=pt;const Rt=Zt}}]);
//# sourceMappingURL=6864.4f8d3f91.chunk.js.map