"use strict";(self.webpackChunkschedula_form=self.webpackChunkschedula_form||[]).push([[1724],{61724:(e,t,a)=>{a.r(t),a.d(t,{Store:()=>R,default:()=>q});a(72791);var r=a(70737),n=a(91082),i=a(87309),o=a(76688),s=a(83099),l=a(98583),c=a(61431),d=a(18050),m=a(14516),h=a(81694),p=a.n(h),u=a(45005),x=a(74151),g=a(98472),f=a(82622),y=a(40447),S=a(31752),j=a(72351),C=a(92365),Z=a(79286),b=a(1025),I=a.n(b),k=a(8092),F=a.n(k),v=a(26181),w=a.n(v),D=a(17805),T=a.n(D),z=a(37481),P=a(55692),A=a(80184);const{useToken:E}=r.Z;function L(e){return Array.isArray(e)?e.map((e=>e.item)):[]}function R(e){let{children:t}=e;const{getLocale:a}=(0,z.useLocaleStore)();return t({getLocale:a})}class q extends P.Z{constructor(e){super(e),this.state.pagination={current:1,pageSize:10,showQuickJumper:!0,hideOnSinglePage:!0}}renderNormalArray(){return(0,A.jsx)(R,{children:e=>{let{getLocale:t}=e;const a=t("TableField"),{schema:r,uiSchema:h={},errorSchema:b,idSchema:k,name:v,disabled:D=!1,readonly:z=!1,autofocus:P=!1,required:R=!1,registry:q,onBlur:B,onFocus:N,idPrefix:$,idSeparator:_="_",rawErrors:O,hideError:Q}=this.props,{fields:U,formContext:W,schemaUtils:G}=q,M={...W,parent:this},J={...q,formContext:M},{form:K}=M,{SchemaField:V}=U,H=(0,d.LI)(h),{columns:X,rows:Y={},description:ee,title:te=(void 0===r.title?v:r.title),removable:ae=!0,filename:re=v,expandable:ne=!1,uploadable:ie=!0,downloadable:oe=!0,removeEmpty:se=!1,summary:le=null,...ce}=H,de=r.items,me=L(this.state.keyedFormData),he=this.canAddItem(me),pe=new Set(me.reduce(((e,t)=>[...e,...Object.keys(t)]),[])),ue=X.filter((e=>!se||e.render||pe.has(e.dataIndex)||me.some((t=>T()(t,e.dataIndex.replace("/",".")))))).map((e=>({key:e.dataIndex,title:w()(de,["properties",e.dataIndex,"title"]),...e,render:(t,a,r)=>{const{pagination:n,keyedFormData:i}=this.state;if(void 0===i[r+=(n.current-1)*n.pageSize])return null;const{item:o}=i[r],s=o,l=G.retrieveSchema(de,s),c=b?b[r]:void 0,d=k.$id+_+r,m=G.toIdSchema(l,d,s,"".concat(r,"-").concat($),_),p={...M,arrayItemIndex:r},u={...J,formContext:p},{rows:x={}}=e,g={...e,...Y[String(r)],...x[String(r)]};return(0,A.jsx)(V,{name:v&&"".concat(v,"-").concat(g.dataIndex,"-").concat(r),index:r,schema:l,uiSchema:{...h.items,"ui:layout":{path:g.dataIndex,uiSchema:{"ui:label":"","ui:onlyChildren":!0,"ui:disabled":D||!!ne,"ui:readonly":z||!!ne,...g.uiSchema}},"ui:onlyChildren":!0},formData:s,formContext:p,errorSchema:c,idPrefix:"".concat(r,"-").concat($),idSeparator:_,idSchema:m,required:this.isItemRequired(l),onChange:this.onChangeForIndex(r),onBlur:B,onFocus:N,registry:u,disabled:D,readonly:z,hideError:Q,autofocus:P&&0===r,rawErrors:O},"".concat(v,"-").concat(r))}}))),{token:xe}=E();!ae||z||D||ue.push({title:()=>me.length>=1?(0,A.jsx)(n.Z,{title:a.deleteAllConfirm,placement:"left",onConfirm:e=>{e&&e.preventDefault();const{pagination:t}=this.state,{onChange:a}=this.props,r=this.state.keyedFormData.filter(((e,t)=>{const{removable:a=!0}=Y[String(t)]||{};return!a}));this.setState({...this.state,keyedFormData:r,updatedKeyedFormData:!0,pagination:{...t,current:1}},(()=>a(L(r),[])))},children:(0,A.jsx)(i.ZP,{danger:!0,shape:"circle",ghost:!0,size:"small",icon:(0,A.jsx)(f.Z,{})})}):null,width:33,render:(e,t,r)=>{const{removable:o=!0}=Y[String(r)]||{};return me.length>=1&&o?(0,A.jsx)(n.Z,{title:a.deleteItemConfirm,placement:"left",onConfirm:e=>{const{pagination:t,keyedFormData:a}=this.state,n=1+Math.floor((a.length-2)/t.pageSize);this.onDropIndexClick(r+(t.current-1)*t.pageSize)(e),t.current>n&&this.setState({...this.state,pagination:{...t,current:n}})},children:(0,A.jsx)(i.ZP,{danger:!0,shape:"circle",ghost:!0,size:"small",icon:(0,A.jsx)(f.Z,{})})}):null}});const{labelAlign:ge="right",rowGutter:fe=24}=M,ye=(0,d.t4)("ArrayFieldDescriptionTemplate",J,H),Se=(0,d.t4)("ArrayFieldTitleTemplate",J,H),je=(e,t,a)=>{this.setState({...this.state,pagination:e})},Ce=(e,t)=>{const{pagination:a,keyedFormData:r}=this.state;if(void 0===r[t+=(a.current-1)*a.pageSize])return null;const{item:n}=r[t],i=n,o=G.retrieveSchema(de,i),s=b?b[t]:void 0,l=k.$id+_+t,c=G.toIdSchema(o,l,i,"".concat(t,"-").concat($),_),d={...M,arrayItemIndex:t},m={...J,formContext:d};return(0,A.jsx)(V,{name:v&&"".concat(v,"-expand-").concat(t),index:t,schema:o,uiSchema:{...h.items,...F()(ne)?ne:{}},formData:i,formContext:d,errorSchema:s,idPrefix:$,idSeparator:_,idSchema:c,required:this.isItemRequired(o),onChange:this.onChangeForIndex(t),onBlur:B,onFocus:N,registry:m,disabled:D,readonly:z,hideError:Q,autofocus:P&&0===t,rawErrors:O},"".concat(v,"-expand-").concat(t))},Ze=e=>{let{expanded:t,onExpand:a,record:r}=e;return(0,A.jsx)(i.ZP,{type:"primary",shape:"circle",ghost:!0,size:"small",icon:t?(0,A.jsx)(y.Z,{}):(0,A.jsx)(S.Z,{}),onClick:e=>a(r,e)},"expand-icon")};let be;if(null!==le){let e=K.compileFunc(le)(this);be=()=>(0,A.jsxs)(o.Z.Summary.Row,{style:{backgroundColor:w()(xe,"Table.colorFillQuaternary",xe.colorFillQuaternary),fontWeight:w()(xe,"Table.fontWeightStrong",xe.fontWeightStrong)},children:[ne?(0,A.jsx)(o.Z.Summary.Cell,{index:-1},-1):null,ue.map(((t,a)=>{let{dataIndex:r}=t;return(0,A.jsx)(o.Z.Summary.Cell,{index:a,children:w()(e,r,null)},a)}))]})}return(0,A.jsx)(m.ConfigConsumer,{children:e=>{const{getPrefixCls:n}=e,d=n("form"),m="".concat(d,"-item-label"),f=p()(m,"left"===ge&&"".concat(m,"-left"),"ant-table-label-custom");return(0,A.jsx)(o.Z,{locale:t("Table"),caption:(0,A.jsxs)(x.Z,{justify:"space-between",align:"middle",children:[(0,A.jsx)(u.Z,{children:(0,A.jsxs)(x.Z,{gutter:fe,children:[te&&(0,A.jsx)(u.Z,{className:f,span:24,children:(0,A.jsx)(Se,{idSchema:k,required:R,title:te,schema:r,uiSchema:h,registry:J})}),(ee||r.description)&&(0,A.jsx)(u.Z,{span:24,style:{paddingBottom:"8px"},children:(0,A.jsx)(ye,{description:ee||r.description||"",idSchema:k,schema:r,uiSchema:h,registry:J})})]})}),(0,A.jsx)(u.Z,{children:(0,A.jsxs)(s.Z.Compact,{block:!0,size:"small",style:{padding:8},children:[z||D||!ie?null:(0,A.jsx)(l.Z,{locale:t("Upload"),accept:".csv",disabled:!(!D&&!z),beforeUpload:e=>{const t=new FileReader;return t.onload=e=>{let t,{target:a}=e,r=I().parse(a.result,{header:!1}).data,n=X.map((e=>e.dataIndex)),i=X.map((e=>e.title));r[0].every((e=>n.includes(e)))?(t=r[0],r=r.slice(1)):r[0].every((e=>i.includes(e)))?(t=r[0].map((e=>X.find((t=>t.headerName===e)).field)),r=r.slice(1)):t=X.map((e=>e.field)),this.props.onChange(r.map((e=>e.reduce(((e,a,r)=>(e[t[r]]=a,e)),{}))))},t.readAsText(e),l.Z.LIST_IGNORE},children:(0,A.jsx)(c.Z,{title:a.importTooltip,placement:"bottom",children:(0,A.jsx)(i.ZP,{type:"primary",shape:"circle",ghost:!0,disabled:!(!D&&!z),icon:(0,A.jsx)(j.Z,{})})})}),oe?(0,A.jsx)(g.CSVLink,{filename:"".concat(re,".csv"),data:me,children:(0,A.jsx)(c.Z,{title:a.exportTooltip,placement:"bottom",children:(0,A.jsx)(i.ZP,{type:"primary",shape:"circle",ghost:!0,icon:(0,A.jsx)(C.Z,{})})})}):null,he&&!(D||z)&&(0,A.jsx)(c.Z,{title:a.addItemTooltip,placement:"bottom",children:(0,A.jsx)(i.ZP,{type:"primary",shape:"circle",ghost:!0,icon:(0,A.jsx)(Z.Z,{}),onClick:e=>{this.onAddClick(e);const{pagination:t,keyedFormData:a}=this.state;this.setState({...this.state,pagination:{...t,current:1+Math.floor(a.length/t.pageSize)}})}})})]})})]}),size:"small",expandable:ne?{expandedRowRender:Ce,expandIcon:Ze}:{},summary:me.length?be:void 0,columns:me.length?ue:[],dataSource:me.map(((e,t)=>({key:t,...e}))),pagination:this.state.pagination,onChange:je,...ce},k.$id)}},k.$id)}})}}}}]);
//# sourceMappingURL=1724.adc5d158.chunk.js.map