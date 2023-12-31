"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[4121],{32393:function(I,h,t){t.r(h),t.d(h,{default:function(){return me}});var e=t(32735),s=t(19565),c=t(15062),m=t(78125),g=t(94638),T=t(96709),D=t(27649),S=t(82055),P=t(99223),l=t(49372),y=t(41415),j=t(17e3),U=t(72850),_=t(56755),ee=t(73269),te=t(33827),K=t(94547),i=t(19786),V=t(82884),ne=t(3685),ae=t(35658),k=t(87933),E=t(74512),F=t(8471);const $=F.ZP.div`
  background: ${({theme:o})=>o.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:o})=>o?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:o})=>o.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:o})=>o.spaces[1]};
    top: ${({theme:o})=>o.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,se=F.ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${$} {
    background: ${({theme:o})=>o.colors.success500};
  }

  &[aria-checked='true'] ${$}:before {
    transform: translateX(1rem);
  }
`,oe=e.forwardRef(({label:o,onChange:u,onLabel:f="On",offLabel:d="Off",selected:M,visibleLabels:a=!1,...b},v)=>(0,E.jsx)(se,{ref:v,role:"switch","aria-checked":M,"aria-label":o,onClick:u,visibleLabels:a,type:"button",...b,children:(0,E.jsxs)(k.k,{children:[(0,E.jsxs)($,{children:[(0,E.jsx)("span",{children:f}),(0,E.jsx)("span",{children:d})]}),a&&(0,E.jsx)(U.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:M?"success600":"danger600",children:M?f:d})]})}));var z=t(50563),le=t(9695),w=t(19406),H=t(4038),re=t(68625),ie=t(54725),de=t(67879),O=t(20108),N=t(53038),ce=()=>{const[o,u]=(0,e.useState)(!1),[f,d]=(0,e.useState)([]),M=(0,c.v9)(m._),{formatMessage:a}=(0,de.Z)(),{formatAPIError:b}=(0,s.So)(),v=(0,s.lm)();(0,s.go)();const{push:ue}=(0,N.k6)(),{pathname:Q}=(0,N.TH)(),{isLoading:he,allowedActions:{canCreate:Z,canUpdate:Y,canDelete:G}}=(0,s.ss)(M.settings.webhooks),{get:ge,post:Ee,put:fe}=(0,s.kY)(),{notifyStatus:X}=(0,g.G)(),be="webhooks",{isLoading:ve,data:x,error:A,refetch:J}=(0,O.useQuery)(be,async()=>{const{data:{data:n}}=await ge("/admin/webhooks");return n});(0,e.useEffect)(()=>{if(A){v({type:"warning",message:b(A)});return}x&&X(a({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[x,A,v,a,X,b]);const q=(0,O.useMutation)(async()=>{await Ee("/admin/webhooks/batch-delete",{ids:f})},{onError(n){v({type:"warning",message:b(n)}),u(!1)},onSuccess(){d([]),u(!1),J()}}),xe=(0,O.useMutation)(async({isEnabled:n,id:r})=>{const{id:L,...R}=x.find(Le=>Le.id===r)??{},Ce={...R,isEnabled:n};await fe(`/admin/webhooks/${r}`,Ce)},{onError(n){v({type:"warning",message:b(n)})},onSuccess(){J()}}),Me=()=>q.mutate(),pe=n=>d(n?x.map(r=>r.id):[]),ye=(n,r)=>d(n?L=>[...L,r]:L=>L.filter(R=>R!==r)),B=n=>ue(`${Q}/${n}`),W=he||ve,C=x?.length??0,p=f.length;return e.createElement(T.A,null,e.createElement(s.SL,{name:"Webhooks"}),e.createElement(D.o,{"aria-busy":W},e.createElement(S.T,{title:a({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:a({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:Z&&!W&&e.createElement(s.Qj,{startIcon:e.createElement(w.Z,null),variant:"default",to:`${Q}/create`,size:"S"},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),p>0&&G&&e.createElement(P.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(l.Z,{variant:"epsilon",textColor:"neutral600"},a({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:p})),e.createElement(y.z,{onClick:()=>u(!0),startIcon:e.createElement(H.Z,null),size:"L",variant:"danger-light"},a({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(j.D,null,W?e.createElement(U.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(s.dO,null)):C>0?e.createElement(_.i,{colCount:5,rowCount:C+1,footer:e.createElement(ee.c,{onClick:()=>Z?B("create"):{},icon:e.createElement(w.Z,null)},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(te.h,null,e.createElement(K.Tr,null,e.createElement(i.Th,null,e.createElement(V.C,{"aria-label":a({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:p>0&&p<C,value:p===C,onValueChange:pe})),e.createElement(i.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},a({id:"global.name",defaultMessage:"Name"}))),e.createElement(i.Th,{width:"60%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},a({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(i.Th,{width:"20%"},e.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(i.Th,null,e.createElement(ne.T,null,a({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(ae.p,null,x.map(n=>e.createElement(K.Tr,{key:n.id,...(0,s.X7)({fn:()=>B(n.id),condition:Y})},e.createElement(i.Td,{...s.UW},e.createElement(V.C,{"aria-label":`${a({id:"global.select",defaultMessage:"Select"})} ${n.name}`,value:f?.includes(n.id),onValueChange:r=>ye(r,n.id),name:"select"})),e.createElement(i.Td,null,e.createElement(l.Z,{fontWeight:"semiBold",textColor:"neutral800"},n.name)),e.createElement(i.Td,null,e.createElement(l.Z,{textColor:"neutral800"},n.url)),e.createElement(i.Td,null,e.createElement(k.k,null,e.createElement(oe,{onLabel:a({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:a({id:"global.disabled",defaultMessage:"Disabled"}),label:`${n.name} ${a({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:n.isEnabled,onChange:r=>{r.stopPropagation(),xe.mutate({isEnabled:!n.isEnabled,id:n.id})},visibleLabels:!0}))),e.createElement(i.Td,null,e.createElement(k.k,{gap:1},Y&&e.createElement(z.h,{label:a({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(re.Z,null),noBorder:!0}),G&&e.createElement(z.h,{onClick:r=>{r.stopPropagation(),d([n.id]),u(!0)},label:a({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),icon:e.createElement(H.Z,null),noBorder:!0}))))))):e.createElement(le.x,{icon:e.createElement(ie.Z,{width:"160px"}),content:a({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(y.z,{variant:"secondary",startIcon:e.createElement(w.Z,null),onClick:()=>Z?B("create"):{}},a({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(s.QH,{isOpen:o,onToggleDialog:()=>u(n=>!n),onConfirm:Me,isConfirmButtonLoading:q.isLoading}))},me=()=>{const o=(0,c.v9)(m._);return e.createElement(s.O4,{permissions:o.settings.webhooks.main},e.createElement(ce,null))}},99223:function(I,h,t){t.d(h,{Z:function(){return c}});var e=t(74512),s=t(87933);const c=({startActions:m,endActions:g})=>!m&&!g?null:(0,e.jsxs)(s.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(s.k,{gap:2,wrap:"wrap",children:m}),(0,e.jsx)(s.k,{gap:2,shrink:0,wrap:"wrap",children:g})]})},73269:function(I,h,t){t.d(h,{c:function(){return P}});var e=t(74512),s=t(8471),c=t(72850),m=t(9026),g=t(87933),T=t(49372);const D=(0,s.ZP)(c.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:l})=>l.colors.primary600};
  }
`,S=(0,s.ZP)(c.x)`
  border-radius: 0 0 ${({theme:l})=>l.borderRadius} ${({theme:l})=>l.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,P=({children:l,icon:y,...j})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(m.i,{}),(0,e.jsx)(S,{as:"button",background:"primary100",padding:5,...j,children:(0,e.jsxs)(g.k,{children:[(0,e.jsx)(D,{"aria-hidden":!0,background:"primary200",children:y}),(0,e.jsx)(c.x,{paddingLeft:3,children:(0,e.jsx)(T.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:l})})]})})]})}}]);
