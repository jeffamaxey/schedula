"use strict";(self.webpackChunkschedula_form=self.webpackChunkschedula_form||[]).push([[4459],{14459:(e,r,t)=>{t.r(r),t.d(r,{Store:()=>p,default:()=>y});t(72791);var a=t(76688),n=t(18050),i=t(14516),o=t(81694),c=t.n(o),d=t(45005),l=t(74151),s=t(37295),m=t(41938),h=t(37481),u=t(55692),x=t(80184);function p(e){let{children:r}=e;const{getLocale:t}=(0,h.useLocaleStore)();return r({getLocale:t})}class y extends u.Z{renderNormalArray(){return(0,x.jsx)(p,{children:e=>{let{getLocale:r}=e;const{schema:t,uiSchema:o={},errorSchema:h,idSchema:u,name:p,disabled:y=!1,readonly:f=!1,autofocus:S=!1,required:g=!1,registry:b,onBlur:j,onFocus:k,idPrefix:w,idSeparator:C="_",rawErrors:I,hideError:Z}=this.props,{fields:v,formContext:F,schemaUtils:E}=b,A={...F,parent:this},L={...b,formContext:A},{SchemaField:q}=v,D=(0,n.LI)(o),{rows:P,columnIndex:T={},description:z,removeEmpty:B=!1,title:N=(void 0===t.title?p:t.title),...R}=D,$=t.items,_=(H=this.state.keyedFormData,Array.isArray(H)?H.map((e=>e.item)):[]);var H;const O=this,G=new Set(_.reduce(((e,r)=>[...e,...Object.keys(r)]),[])),U=e=>e.filter((e=>!B||e.render||G.has(e.dataIndex))).map((e=>({...e,children:U(e.children||[])}))),J=U(P);function K(e){let r=[{rowScope:"row",...T,key:"id",dataIndex:"id"},..._.map(((r,t)=>{const a=e=>{const{keyedFormData:r}=O.state;if(void 0===r[t])return null;const{item:a}=r[t],n=a,i=E.retrieveSchema($,n),c=h?h[t]:void 0,d=u.$id+C+t,l=E.toIdSchema(i,d,n,"".concat(t,"-").concat(w),C),s={...A,arrayItemIndex:t},m={...L,formContext:s};return(0,x.jsx)(q,{name:p&&"".concat(p,"-").concat(e.dataIndex,"-").concat(t),index:t,schema:i,uiSchema:{...o.items,"ui:layout":{...e.hasOwnProperty("dataIndex")?{path:e.dataIndex,uiSchema:{"ui:label":"","ui:onlyChildren":!0,"ui:disabled":y,"ui:readonly":f,...e.uiSchema}}:e},"ui:onlyChildren":!0},formData:n,formContext:s,errorSchema:c,idPrefix:"".concat(t,"-").concat(w),idSeparator:C,idSchema:l,required:O.isItemRequired(i),onChange:O.onChangeForIndex(t),onBlur:j,onFocus:k,registry:m,disabled:y,readonly:f,hideError:Z,autofocus:S&&0===t,rawErrors:I},"".concat(p,"-").concat(t))};return{key:t,dataIndex:t,title:a(T),render:(r,t,n)=>a(e[n])}}))],t=e.map(((e,r)=>_.reduce(((r,t,a)=>(r[a]=t[e.dataIndex],r)),{id:e.title,key:r})));const n={expandedRowRender:r=>(0,x.jsx)(a.Z,{size:R.size||"small",...K(e[r.key].children)}),rowExpandable:r=>(e[r.key].children||[]).length>0,expandIcon:r=>{let{expanded:t,onExpand:a,record:n}=r;return(e[n.key].children||[]).length>0?t?(0,x.jsx)(s.Z,{onClick:e=>a(n,e)}):(0,x.jsx)(m.Z,{onClick:e=>a(n,e)}):null}};return{showHeader:!1,className:"vertical-table",columns:t.length?r:[],dataSource:t,pagination:!1,expandable:n}}const{labelAlign:M="right",rowGutter:Q=24}=A,V=(0,n.t4)("ArrayFieldDescriptionTemplate",L,D),W=(0,n.t4)("ArrayFieldTitleTemplate",L,D);return(0,x.jsx)(i.ConfigConsumer,{children:e=>{const{getPrefixCls:n}=e,i=n("form"),s="".concat(i,"-item-label"),m=c()(s,"left"===M&&"".concat(s,"-left"),"ant-table-label-custom");return(0,x.jsx)(a.Z,{locale:r("Table"),caption:(0,x.jsx)(l.Z,{justify:"space-between",align:"middle",children:(0,x.jsx)(d.Z,{children:(0,x.jsxs)(l.Z,{gutter:Q,children:[N&&(0,x.jsx)(d.Z,{className:m,span:24,children:(0,x.jsx)(W,{idSchema:u,required:g,title:N,schema:t,uiSchema:o,registry:L})}),(z||t.description)&&(0,x.jsx)(d.Z,{span:24,style:{paddingBottom:"8px"},children:(0,x.jsx)(V,{description:z||t.description||"",idSchema:u,schema:t,uiSchema:o,registry:L})})]})})}),size:"small",...K(J),showHeader:!0,...R},u.$id)}},u.$id)}})}}}}]);
//# sourceMappingURL=4459.82fb7e23.chunk.js.map