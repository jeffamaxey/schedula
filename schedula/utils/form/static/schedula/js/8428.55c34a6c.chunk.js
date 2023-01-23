"use strict";(self.webpackChunkschedula_form=self.webpackChunkschedula_form||[]).push([[8428],{98428:function(e,t,a){a.r(t),a.d(t,{Store:function(){return T},default:function(){return U}});var n=a(93433),r=a(45987),i=a(1413),o=a(15671),c=a(43144),l=a(60136),s=a(29388),d=a(72791),u=a(18050),h=a(41583),m=a(83388),f=a(87309),v=a(83099),p=a(36864),Z=a(45863),y=a(23414),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"},g=a(54291),b=function(e,t){return d.createElement(g.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:x}))};b.displayName="ArrowUpOutlined";var C=d.forwardRef(b),k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"}}]},name:"arrow-down",theme:"outlined"},w=function(e,t){return d.createElement(g.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:k}))};w.displayName="ArrowDownOutlined";var j=d.forwardRef(w),S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},L=function(e,t){return d.createElement(g.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:S}))};L.displayName="ArrowLeftOutlined";var D=d.forwardRef(L),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},I=function(e,t){return d.createElement(g.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:t,icon:E}))};I.displayName="ArrowRightOutlined";var K=d.forwardRef(I),A=a(60732),P=a(68944),R=a(75033),F=a(41938),z=a(76864),O=a(58121),B=a.n(O),M=a(25984),N=a(37481),q=a(55692),H=a(80184),V=["description","removable","editable","orderable","tabPosition","itemLabel","fieldReplacesAnyOrOneOf","tabLegend","activeKey","collapsed","onlyChildren"];function _(e){return Array.isArray(e)?e.map((function(e){return e.item})):[]}function T(e){return(0,e.children)({getLocale:(0,N.useLocaleStore)().getLocale})}var U=function(e){(0,l.Z)(a,e);var t=(0,s.Z)(a);function a(e){var n;(0,o.Z)(this,a),n=t.call(this,e);var r=e.uiSchema,i=void 0===r?{}:r,c=(0,u.LI)(i),l=c.activeKey,s=void 0===l?0:l,d=c.collapsed,h=void 0===d||d;return n.state.activeKey=s,n.state.collapsed=h,n}return(0,c.Z)(a,[{key:"renderNormalArray",value:function(){var e=this;return(0,H.jsx)(T,{children:function(t){var a=(0,t.getLocale)("TabsField"),o=e.props,c=o.schema,l=o.uiSchema,s=void 0===l?{}:l,d=o.errorSchema,x=o.idSchema,g=o.name,b=o.disabled,k=void 0!==b&&b,w=o.readonly,S=void 0!==w&&w,L=o.autofocus,E=void 0!==L&&L,I=o.registry,O=o.onBlur,N=o.onFocus,q=o.idPrefix,T=o.idSeparator,U=void 0===T?"_":T,$=o.rawErrors,G=o.hideError,J=I.fields,Q=I.formContext,W=I.schemaUtils,X=(0,i.Z)((0,i.Z)({},Q),{},{parent:e}),Y=(0,i.Z)((0,i.Z)({},I),{},{formContext:X}),ee=J.SchemaField,te=(0,u.LI)(s),ae=(te.description,te.removable),ne=void 0===ae||ae,re=te.editable,ie=void 0===re||re,oe=te.orderable,ce=void 0===oe||oe,le=te.tabPosition,se=void 0===le?"left":le,de=te.itemLabel,ue=(te.fieldReplacesAnyOrOneOf,te.tabLegend),he=void 0===ue?null:ue,me=(te.activeKey,te.collapsed,te.onlyChildren,(0,r.Z)(te,V)),fe=ie&&!(S||k),ve=c.items,pe=e.state,Ze=pe.keyedFormData,ye=pe.activeKey,xe=pe.collapsed,ge=!ne||!c.minItems||Ze.length>c.minItems,be=_(Ze),Ce=e.canAddItem(be),ke=xe&&("left"===se||"right"===se),we=Math.min(ye,Ze.length-1),je=Ze.map((function(t,r){if(void 0===Ze[r])return null;var o,c=Ze[r],l=c.key,u=c.item,p=W.retrieveSchema(ve,u),Z=d?d[r]:void 0,b=x.$id+U+r,w=W.toIdSchema(p,b,u,q,U),L=[];if(fe&&Ce&&L.push({key:"clone",label:a.clone,icon:(0,H.jsx)(y.Z,{})}),fe&&ce&&("left"===se||"right"===se?(r>0&&L.push({key:"moveup",label:a.moveup,icon:(0,H.jsx)(C,{})}),r<be.length-1&&L.push({key:"movedown",label:a.movedown,icon:(0,H.jsx)(j,{})})):(r>0&&L.push({key:"moveup",label:a.moveleft,icon:(0,H.jsx)(D,{})}),r<be.length-1&&L.push({key:"movedown",label:a.moveright,icon:(0,H.jsx)(K,{})}))),fe&&ge&&L.push({key:"delete",label:a.delete,icon:(0,H.jsx)(A.Z,{})}),ke)L.length?(r!==we&&(L=[{key:"select",label:a.select,icon:(0,H.jsx)(P.Z,{})}].concat((0,n.Z)(L))),o=(0,H.jsx)(h.Z,{placement:"bottomRight",overlay:(0,H.jsx)(m.Z,{items:L,onClick:function(t){var a=t.key,o=t.domEvent;if("delete"===a)o&&o.preventDefault(),Le(r);else if("clone"===a){var c=(0,n.Z)(Ze),l=B()(Ze[r]),s=e.props.onChange;l.key=(0,M.x0)(),c.splice(r+1,0,l),e.setState((0,i.Z)((0,i.Z)({},e.state),{},{keyedFormData:c,updatedKeyedFormData:!0,activeKey:r+1}),(function(){s(_(c))}))}else"moveup"===a?De(r,r-1,o):"movedown"===a?De(r,r+1,o):"select"===a&&Se(r)}}),onClick:function(e){e.preventDefault(),Se(r)},arrow:!0,children:(0,H.jsx)(f.ZP,{type:r===we?"primary":"text",children:r+1})})):o=[(0,H.jsx)(f.ZP,{type:r===we?"primary":"text",onClick:function(e){e.preventDefault(),Se(r)},children:r+1},"change-".concat(r+1))],o=(0,H.jsx)(v.Z.Compact,{block:!0,size:"small",children:o});else{if(de){var I=(0,i.Z)((0,i.Z)({},X),{},{arrayItemIndex:r}),F=(0,i.Z)((0,i.Z)({},Y),{},{formContext:I}),z=(0,H.jsx)(ee,{name:g&&"".concat(g,"-tab-name-").concat(r),index:r,schema:p,uiSchema:(0,i.Z)((0,i.Z)({},s.items),{},{"ui:layout":{path:de,uiSchema:{"ui:label":"","ui:onlyChildren":!0,"ui:disabled":k,"ui:readonly":S,"ui:inputProps":{size:"small"}}},"ui:onlyChildren":!0}),formData:u,formContext:I,errorSchema:Z,idPrefix:q,idSeparator:U,idSchema:w,required:e.isItemRequired(p),onChange:e.onChangeForIndex(r),onBlur:O,onFocus:function(e){Se(r),N(e)},registry:F,disabled:k,readonly:S,hideError:G,autofocus:E&&0===r,rawErrors:$},"".concat(g,"-tab-name-").concat(r));o=[(0,H.jsx)(f.ZP,{type:r===we?"primary":"text",onClick:function(e){e.preventDefault(),Se(r)},children:r+1},"change-".concat(r+1)),z]}else o=(0,H.jsx)(f.ZP,{type:r===we?"primary":"text",onClick:function(e){e.preventDefault(),Se(r)},children:g&&"".concat(g,"-").concat(r)||"item-".concat(r)});o=(0,H.jsxs)(v.Z.Compact,{block:!0,size:"small",children:[o,L.length?(0,H.jsx)(h.Z,{placement:"bottomRight",overlay:(0,H.jsx)(m.Z,{items:L,onClick:function(t){var a=t.key,o=t.domEvent;if("delete"===a)o&&o.preventDefault(),Le(r);else if("clone"===a){var c=(0,n.Z)(Ze),l=B()(Ze[r]),s=e.props.onChange;l.key=(0,M.x0)(),c.splice(r+1,0,l),e.setState((0,i.Z)((0,i.Z)({},e.state),{},{keyedFormData:c,updatedKeyedFormData:!0,activeKey:r+1}),(function(){s(_(c))}))}else"moveup"===a?De(r,r-1,o):"movedown"===a&&De(r,r+1,o)}}),onClick:function(e){e.preventDefault(),Se(r)},arrow:!0,children:(0,H.jsx)(f.ZP,{type:r===we?"primary":"text",icon:(0,H.jsx)(R.Z,{})})}):null]})}var V=(0,i.Z)((0,i.Z)({},X),{},{arrayItemIndex:r}),T=(0,i.Z)((0,i.Z)({},Y),{},{formContext:V});return{key:r,closable:ge,label:o,children:(0,H.jsx)("div",{className:"hide-fieldset-border h-100",children:(0,H.jsx)(ee,{name:g,index:r,schema:p,uiSchema:(0,i.Z)({"ui:onlyChildren":!0},s.items),formData:u,formContext:V,errorSchema:Z,idPrefix:q,idSeparator:U,idSchema:w,required:e.isItemRequired(p),onChange:e.onChangeForIndex(r),onBlur:O,onFocus:N,registry:T,disabled:k,readonly:S,hideError:G,autofocus:E&&0===r,rawErrors:$},l)})}})),Se=function(t){e.setState((0,i.Z)((0,i.Z)({},e.state),{},{activeKey:t}))},Le=function(t){e.onDropIndexClick(t)(),Ze.length>1&&t<=we&&e.setState((0,i.Z)((0,i.Z)({},e.state),{},{activeKey:Math.max(we-1,0)}))},De=function(t,a,n){e.onReorderClick(t,a)(n),t===we?e.setState((0,i.Z)((0,i.Z)({},e.state),{},{activeKey:a})):a===we&&e.setState((0,i.Z)((0,i.Z)({},e.state),{},{activeKey:t}))},Ee=(0,H.jsx)(f.ZP,{type:"primary",shape:"circle",icon:("left"===se?xe:!xe)?(0,H.jsx)(F.Z,{}):(0,H.jsx)(z.Z,{}),onClick:function(){e.setState((0,i.Z)((0,i.Z)({},e.state),{},{collapsed:!xe}))}});return(0,H.jsx)(p.Z,(0,i.Z)({style:{height:"100%"},hideAdd:!(fe&&Ce),tabBarExtraContent:{left:(0,H.jsxs)(v.Z.Compact,{block:!0,size:"small",style:{justifyContent:ke?"center":"left"===se?"right":"right"===se?"left":"center"},children:["right"===se?Ee:null,ke||!he?null:(0,H.jsx)(Z.Z.Text,{style:{width:"100%",textAlign:"center"},children:he}),"left"===se?Ee:null]})},tabPosition:se,type:"editable-card",activeKey:Math.min(we,je.length-1),onEdit:function(t,a){"add"===a?(e.onAddClick(t),e.setState((0,i.Z)((0,i.Z)({},e.state),{},{activeKey:Ze.length}))):Le(t)},items:je},me),x.$id)}})}}]),a}(q.Z)},68944:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(1413),r=a(72791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"},o=a(54291),c=function(e,t){return r.createElement(o.Z,(0,n.Z)((0,n.Z)({},e),{},{ref:t,icon:i}))};c.displayName="CheckCircleOutlined";var l=r.forwardRef(c)}}]);
//# sourceMappingURL=8428.55c34a6c.chunk.js.map