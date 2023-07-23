"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[8418],{218:function(U,y,t){t.r(y),t.d(y,{default:function(){return oe}});var e=t(32735),r=t(94638),x=t(27649),T=t(82055),O=t(17e3),a=t(19565),m=t(67879),v=t(20108),g=t(39079),n=t(59677),b=t(85025),j=t(55225),l=t(31600),i=t(15335),s=t(5803),d=t(33475),c=t(11406),f=t(41415),Z=t(26858),I=t(51654),A=t(92802),S=t(60216),u=t.n(S),R=t(24346),Y=R.Ry().shape({options:R.Ry().shape({from:R.Ry().shape({name:R.Z_().required(a.I0.required),email:R.Z_().email(a.I0.email).required(a.I0.required)}).required(),response_email:R.Z_().email(a.I0.email),object:R.Z_().required(a.I0.required),message:R.Z_().required(a.I0.required)}).required(a.I0.required)});const W=({template:o,onToggle:p,onSubmit:E})=>{const{formatMessage:h}=(0,m.Z)();return e.createElement(b.P,{onClose:p,labelledBy:`${h({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${h({id:(0,n.OB)(o.display),defaultMessage:o.display})}`},e.createElement(j.x,null,e.createElement(Z.O,{label:`${h({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${h({id:(0,n.OB)(o.display),defaultMessage:o.display})}`},e.createElement(I.$,null,h({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),e.createElement(I.$,{isCurrent:!0},h({id:(0,n.OB)(o.display),defaultMessage:o.display})))),e.createElement(A.J9,{onSubmit:E,initialValues:o,validateOnChange:!1,validationSchema:Y,enableReinitialize:!0},({errors:B,values:P,handleChange:C,isSubmitting:$})=>e.createElement(a.l0,null,e.createElement(l.f,null,e.createElement(i.r,{gap:5},e.createElement(s.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:C,value:P.options.from.name,error:B?.options?.from?.name,type:"text"})),e.createElement(s.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:C,value:P.options.from.email,error:B?.options?.from?.email,type:"text"})),e.createElement(s.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:C,value:P.options.response_email,error:B?.options?.response_email,type:"text"})),e.createElement(s.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:C,value:P.options.object,error:B?.options?.object,type:"text"})),e.createElement(s.P,{col:12,s:12},e.createElement(d.g,{label:h({id:(0,n.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:C,value:P.options.message,error:B?.options?.message&&h({id:B.options.message,defaultMessage:B.options.message})})))),e.createElement(c.m,{startActions:e.createElement(f.z,{onClick:p,variant:"tertiary"},"Cancel"),endActions:e.createElement(f.z,{loading:$,type:"submit"},"Finish")}))))};W.propTypes={template:u().shape({display:u().string,icon:u().string,options:u().shape({from:u().shape({name:u().string,email:u().string}),message:u().string,object:u().string,response_email:u().string})}).isRequired,onSubmit:u().func.isRequired,onToggle:u().func.isRequired};var w=W,k=t(56755),q=t(33827),F=t(94547),M=t(19786),N=t(3685),D=t(49372),_=t(35658),z=t(99140),G=t(50563),ee=t(44647),K=t(68625),te=t(66456);const J=({canUpdate:o,onEditClick:p})=>{const{formatMessage:E}=(0,m.Z)();return e.createElement(k.i,{colCount:3,rowCount:3},e.createElement(q.h,null,e.createElement(F.Tr,null,e.createElement(M.Th,{width:"1%"},e.createElement(N.T,null,E({id:(0,n.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),e.createElement(M.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},E({id:(0,n.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),e.createElement(M.Th,{width:"1%"},e.createElement(N.T,null,E({id:(0,n.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),e.createElement(_.p,null,e.createElement(F.Tr,{...(0,a.X7)({fn:()=>p("reset_password")})},e.createElement(M.Td,null,e.createElement(z.J,null,e.createElement(ee.Z,{"aria-label":E({id:"global.reset-password",defaultMessage:"Reset password"})}))),e.createElement(M.Td,null,e.createElement(D.Z,null,E({id:"global.reset-password",defaultMessage:"Reset password"}))),e.createElement(M.Td,{...a.UW},e.createElement(G.h,{onClick:()=>p("reset_password"),label:E({id:(0,n.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:o&&e.createElement(K.Z,null)}))),e.createElement(F.Tr,{...(0,a.X7)({fn:()=>p("email_confirmation")})},e.createElement(M.Td,null,e.createElement(z.J,null,e.createElement(te.Z,{"aria-label":E({id:(0,n.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),e.createElement(M.Td,null,e.createElement(D.Z,null,E({id:(0,n.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),e.createElement(M.Td,{...a.UW},e.createElement(G.h,{onClick:()=>p("email_confirmation"),label:E({id:(0,n.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:o&&e.createElement(K.Z,null)})))))};J.propTypes={canUpdate:u().bool.isRequired,onEditClick:u().func.isRequired};var ae=J;const ne=async()=>{const{get:o}=(0,a.tg)(),{data:p}=await o((0,n.Gc)("email-templates"));return p},le=o=>{const{put:p}=(0,a.tg)();return p((0,n.Gc)("email-templates"),o)},se=()=>e.createElement(a.O4,{permissions:g._.readEmailTemplates},e.createElement(ie,null)),ie=()=>{const{formatMessage:o}=(0,m.Z)(),{trackUsage:p}=(0,a.rS)(),{notifyStatus:E}=(0,r.G)(),h=(0,a.lm)(),{lockApp:B,unlockApp:P}=(0,a.o1)(),C=(0,e.useRef)(p),$=(0,v.useQueryClient)();(0,a.go)();const[re,me]=(0,e.useState)(!1),[Q,de]=(0,e.useState)(null),{isLoading:ce,allowedActions:{canUpdate:ue}}=(0,a.ss)({update:g._.updateEmailTemplates}),{status:pe,data:X}=(0,v.useQuery)("email-templates",()=>ne(),{onSuccess(){E(o({id:(0,n.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(){h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Ee=ce||pe!=="success",H=()=>{me(L=>!L)},ge=L=>{de(L),H()},V=(0,v.useMutation)(L=>le({"email-templates":L}),{async onSuccess(){await $.invalidateQueries("email-templates"),h({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),C.current("didEditEmailTemplates"),P(),H()},onError(){h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),P()},refetchActive:!0}),{isLoading:fe}=V,he=L=>{B(),C.current("willEditEmailTemplates");const ve={...X,[Q]:L};V.mutate(ve)};return Ee?e.createElement(x.o,{"aria-busy":"true"},e.createElement(a.SL,{name:o({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(T.T,{title:o({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(O.D,null,e.createElement(a.dO,null))):e.createElement(x.o,{"aria-busy":fe},e.createElement(a.SL,{name:o({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(T.T,{title:o({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(O.D,null,e.createElement(ae,{onEditClick:ge,canUpdate:ue}),re&&e.createElement(w,{template:X[Q],onToggle:H,onSubmit:he})))};var oe=se},59677:function(U,y,t){t.d(y,{YX:function(){return T},Gc:function(){return m},OB:function(){return v.Z}});var e=t(86834),r=t.n(e),T=g=>Object.keys(g).reduce((n,b)=>{const j=g[b].controllers,l=Object.keys(j).reduce((i,s)=>(r()(j[s])||(i[s]=j[s]),i),{});return r()(l)||(n[b]={controllers:l}),n},{}),O=t(90201),m=g=>`/${O.Z}/${g}`,v=t(82069)},17e3:function(U,y,t){t.d(y,{D:function(){return x}});var e=t(74512),r=t(72850);const x=({children:T})=>(0,e.jsx)(r.x,{paddingLeft:10,paddingRight:10,children:T})},82055:function(U,y,t){t.d(y,{T:function(){return n}});var e=t(74512),r=t(32735),x=t(8471);const T=l=>{const i=(0,r.useRef)(null),[s,d]=(0,r.useState)(!0),c=([f])=>{d(f.isIntersecting)};return(0,r.useEffect)(()=>{const f=i.current,Z=new IntersectionObserver(c,l);return f&&Z.observe(i.current),()=>{f&&Z.disconnect()}},[i,l]),[i,s]};var O=t(2285);const a=(l,i)=>{const s=(0,O.W)(i);(0,r.useLayoutEffect)(()=>{const d=new ResizeObserver(s);return Array.isArray(l)?l.forEach(c=>{c.current&&d.observe(c.current)}):l.current&&d.observe(l.current),()=>{d.disconnect()}},[l,s])};var m=t(72850),v=t(87933),g=t(49372);const n=l=>{const i=(0,r.useRef)(null),[s,d]=(0,r.useState)(null),[c,f]=T({root:null,rootMargin:"0px",threshold:0});return a(c,()=>{c.current&&d(c.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{i.current&&d(i.current.getBoundingClientRect())},[i]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:s?.height},ref:c,children:f&&(0,e.jsx)(j,{ref:i,...l})}),!f&&(0,e.jsx)(j,{...l,sticky:!0,width:s?.width})]})};n.displayName="HeaderLayout";const b=(0,x.ZP)(m.x)`
  width: ${({width:l})=>l?`${l/16}rem`:void 0};
  z-index: ${({theme:l})=>l.zIndices[1]};
`,j=r.forwardRef(({navigationAction:l,primaryAction:i,secondaryAction:s,subtitle:d,title:c,sticky:f,width:Z,...I},A)=>{const S=typeof d=="string";return f?(0,e.jsx)(b,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:Z,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(v.k,{justifyContent:"space-between",children:[(0,e.jsxs)(v.k,{children:[l&&(0,e.jsx)(m.x,{paddingRight:3,children:l}),(0,e.jsxs)(m.x,{children:[(0,e.jsx)(g.Z,{variant:"beta",as:"h1",...I,children:c}),S?(0,e.jsx)(g.Z,{variant:"pi",textColor:"neutral600",children:d}):d]}),s?(0,e.jsx)(m.x,{paddingLeft:4,children:s}):null]}),(0,e.jsx)(v.k,{children:i?(0,e.jsx)(m.x,{paddingLeft:2,children:i}):void 0})]})}):(0,e.jsxs)(m.x,{ref:A,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:l?6:8,background:"neutral100","data-strapi-header":!0,children:[l?(0,e.jsx)(m.x,{paddingBottom:2,children:l}):null,(0,e.jsxs)(v.k,{justifyContent:"space-between",children:[(0,e.jsxs)(v.k,{minWidth:0,children:[(0,e.jsx)(g.Z,{as:"h1",variant:"alpha",...I,children:c}),s?(0,e.jsx)(m.x,{paddingLeft:4,children:s}):null]}),i]}),S?(0,e.jsx)(g.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:d}):d]})})},27649:function(U,y,t){t.d(y,{o:function(){return O}});var e=t(74512),r=t(8471),x=t(72850);const T=(0,r.ZP)(x.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,O=({labelledBy:a="main-content-title",...m})=>(0,e.jsx)(T,{"aria-labelledby":a,as:"main",id:"main-content",tabIndex:-1,...m})}}]);
