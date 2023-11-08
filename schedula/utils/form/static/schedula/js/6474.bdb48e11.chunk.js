"use strict";(self.webpackChunkschedula_form=self.webpackChunkschedula_form||[]).push([[6474],{56474:(e,a,s)=>{s.r(a),s.d(a,{default:()=>x});var r=s(10916),t=s(49389),l=s(87309),i=s(72791),c=s(28007),n=s(29529),m=s(99214),o=s(1413);const d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 000 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM459.7 834.7L189.3 564.3 589 164.6 836 188l23.4 247-399.7 399.7zM680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"}}]},name:"tag",theme:"outlined"};var u=s(54291),h=function(e,a){return i.createElement(u.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:a,icon:d}))};h.displayName="TagOutlined";const f=i.forwardRef(h);var p=s(37481),g=s(90868),Z=s(80184);function x(e){let{form:a,formContext:s,urlContact:o,setSpinning:d}=e;const{reCAPTCHA:u}=s,{userInfo:h={}}=a.state,[x]=r.Z.useForm();(0,i.useEffect)((()=>{x.setFieldsValue({name:((h.firstname||"")+" "+(h.lastname||"")).trim(),email:h.email})}),[x,h]);const j=(0,i.createRef)(),[v,y]=(0,i.useState)({}),{getLocale:b}=(0,p.useLocaleStore)(),q=b("Contact");return(0,Z.jsxs)(r.Z,{form:x,style:{maxWidth:"300px",margin:"auto",paddingBottom:"15px"},onFinish:e=>{let{name:s,email:r,subject:t,message:l}=e;d(!0);const i=j.current.getValue();(0,g.Z)({url:o,data:{name:s,email:r,subject:t,message:l,"g-recaptcha-response":i},form:a}).then((e=>{let{data:s,messages:r}=e;d(!1),r&&r.forEach((e=>{let[s,r]=e;a.props.notify({type:s,message:r})})),s.error&&(a.props.notify({message:q.errorTitle,description:(s.errors||[s.error]).join("\n")}),s.field_errors&&y(s.field_errors||{}))})).catch((e=>{d(!1),a.props.notify({message:q.errorTitle,description:e.message})}))},children:[(0,Z.jsx)(r.Z.Item,{rules:[{required:!0,message:q.nameRequired}],name:"name",children:(0,Z.jsx)(t.Z,{prefix:(0,Z.jsx)(n.Z,{className:"site-form-item-icon"}),placeholder:q.namePlaceholder})}),(0,Z.jsx)(r.Z.Item,{name:"email",validateStatus:v.email?"error":void 0,help:v.email,rules:[{required:!0,message:q.emailRequired},{type:"email",message:q.emailInvalid}],children:(0,Z.jsx)(t.Z,{prefix:(0,Z.jsx)(m.Z,{className:"site-form-item-icon"}),placeholder:q.emailPlaceholder,onChange:()=>{v.email&&y({...v,email:void 0})}})}),(0,Z.jsx)(r.Z.Item,{rules:[{required:!0,message:q.subjectRequired}],name:"subject",children:(0,Z.jsx)(t.Z,{prefix:(0,Z.jsx)(f,{className:"site-form-item-icon"}),placeholder:q.subjectPlaceholder})}),(0,Z.jsx)(r.Z.Item,{rules:[{required:!0,message:q.messageRequired}],name:"message",children:(0,Z.jsx)(t.Z.TextArea,{placeholder:q.messagePlaceholder,rows:5})}),u?(0,Z.jsx)(r.Z.Item,{rules:[{required:!0,message:q.messageRequired}],name:"recaptcha",children:(0,Z.jsx)(c.Z,{ref:j,sitekey:u,hl:a.state.language.replace("_","-")})}):null,(0,Z.jsx)(r.Z.Item,{children:(0,Z.jsx)(l.ZP,{type:"primary",htmlType:"submit",style:{width:"100%"},children:q.submitButton})})]})}},99214:(e,a,s)=>{s.d(a,{Z:()=>n});var r=s(1413),t=s(72791);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]},name:"mail",theme:"outlined"};var i=s(54291),c=function(e,a){return t.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:a,icon:l}))};c.displayName="MailOutlined";const n=t.forwardRef(c)},29529:(e,a,s)=>{s.d(a,{Z:()=>n});var r=s(1413),t=s(72791);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};var i=s(54291),c=function(e,a){return t.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:a,icon:l}))};c.displayName="UserOutlined";const n=t.forwardRef(c)}}]);
//# sourceMappingURL=6474.bdb48e11.chunk.js.map