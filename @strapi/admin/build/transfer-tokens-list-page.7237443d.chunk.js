"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[9600],{81450:function(W,E,t){t.d(E,{Z:function(){return H}});var e=t(32735),r=t(35658),N=t(94547),m=t(19786),h=t(49372),P=t(87933),l=t(19565),V=t(60216),n=t.n(V),A=t(67879),b=t(53038),O=t(72850),L=t(50563),x=t(4038);const T=({tokenName:a,onClickDelete:i,tokenType:c})=>{const{formatMessage:v}=(0,A.Z)(),{trackUsage:u}=(0,l.rS)(),[f,g]=(0,e.useState)(!1),C=()=>{g(!1),u("willDeleteToken",{tokenType:c}),i()};return e.createElement(O.x,{paddingLeft:1,onClick:d=>d.stopPropagation()},e.createElement(L.h,{onClick:()=>{g(!0)},label:v({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${a}`}),name:"delete",noBorder:!0,icon:e.createElement(x.Z,null)}),e.createElement(l.QH,{onToggleDialog:()=>g(!1),onConfirm:C,isOpen:f}))};T.propTypes={tokenName:n().string.isRequired,onClickDelete:n().func.isRequired,tokenType:n().string.isRequired};var F=T,z=t(54894),$=t(8471);const J={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},Q=(0,$.ZP)(l.rU)`
  svg {
    path {
      fill: ${({theme:a})=>a.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:a})=>a.colors.neutral800};
      }
    }
  }
`,Z=({tokenName:a,tokenId:i,buttonType:c,children:v})=>{const{formatMessage:u}=(0,A.Z)(),{location:{pathname:f}}=(0,b.k6)();return e.createElement(Q,{to:`${f}/${i}`,title:u(J[c],{target:a})},v)};Z.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired,buttonType:n().string,children:n().node.isRequired},Z.defaultProps={buttonType:"edit"};var I=Z;const k=({tokenName:a,tokenId:i})=>e.createElement(I,{tokenName:a,tokenId:i,buttonType:"read"},e.createElement(z.Z,null));k.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired};var p=k,y=t(68625);const B=({tokenName:a,tokenId:i})=>e.createElement(I,{tokenName:a,tokenId:i},e.createElement(y.Z,null));B.propTypes={tokenName:n().string.isRequired,tokenId:n().oneOfType([n().string,n().number]).isRequired};var D=B;const M=({permissions:a,headers:i,contentType:c,isLoading:v,tokens:u,onConfirmDelete:f,tokenType:g})=>{const{canDelete:C,canUpdate:d,canRead:S}=a,U=C||d||S,[{query:R}]=(0,l.Kx)(),{formatMessage:Y}=(0,A.Z)(),[,K]=R?R.sort.split(":"):"ASC",{push:j,location:{pathname:w}}=(0,b.k6)(),{trackUsage:s}=(0,l.rS)(),X=u.sort((o,q)=>{const G=o.name.localeCompare(q.name);return K==="DESC"?-G:G});return e.createElement(l.tM,{headers:i,contentType:c,rows:u,withBulkActions:U,isLoading:v,onConfirmDelete:f},e.createElement(r.p,null,X.map(o=>e.createElement(N.Tr,{key:o.id,...(0,l.X7)({fn(){s("willEditTokenFromList",{tokenType:g}),j(`${w}/${o.id}`)},condition:d})},e.createElement(m.Td,{maxWidth:(0,l.Q1)(250)},e.createElement(h.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0},o.name)),e.createElement(m.Td,{maxWidth:(0,l.Q1)(250)},e.createElement(h.Z,{textColor:"neutral800",ellipsis:!0},o.description)),e.createElement(m.Td,null,e.createElement(h.Z,{textColor:"neutral800"},e.createElement(l.ij,{timestamp:new Date(o.createdAt)}))),e.createElement(m.Td,null,o.lastUsedAt&&e.createElement(h.Z,{textColor:"neutral800"},e.createElement(l.ij,{timestamp:new Date(o.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:Y({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]}))),U&&e.createElement(m.Td,null,e.createElement(P.k,{justifyContent:"end"},d&&e.createElement(D,{tokenName:o.name,tokenId:o.id}),!d&&S&&e.createElement(p,{tokenName:o.name,tokenId:o.id}),C&&e.createElement(F,{tokenName:o.name,onClickDelete:()=>f(o.id),tokenType:g})))))))};M.propTypes={tokens:n().array,permissions:n().shape({canRead:n().bool,canDelete:n().bool,canUpdate:n().bool}).isRequired,headers:n().arrayOf(n().shape({cellFormatter:n().func,key:n().string.isRequired,metadatas:n().shape({label:n().string.isRequired,sortable:n().bool}).isRequired,name:n().string.isRequired})),contentType:n().string.isRequired,isLoading:n().bool,onConfirmDelete:n().func,tokenType:n().string.isRequired},M.defaultProps={tokens:[],headers:[],isLoading:!1,onConfirmDelete(){}};var H=M},68774:function(W,E,t){t.d(E,{Z:function(){return e},f:function(){return r}});const e="api-token",r="transfer-token"},38286:function(W,E,t){t.r(E),t.d(E,{default:function(){return I}});var e=t(32735),r=t(19565),N=t(15062),m=t(78125),h=t(27649),P=t(82055),l=t(17e3),V=t(41415),n=t(19406),A=t(33348),b=t.n(A),O=t(67879),L=t(20108),x=t(53038),T=t(68774),F=t(81450),$=[{name:"name",key:"name",metadatas:{label:{id:"Settings.tokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.tokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],Q=()=>{(0,r.go)();const k=(0,L.useQueryClient)(),{formatMessage:p}=(0,O.Z)(),y=(0,r.lm)(),B=(0,N.v9)(m._),{allowedActions:{canCreate:D,canDelete:M,canUpdate:H,canRead:a}}=(0,r.ss)(B.settings["transfer-tokens"]),{push:i}=(0,x.k6)(),{trackUsage:c}=(0,r.rS)(),{startSection:v}=(0,r.c1)(),u=(0,e.useRef)(v),{get:f,del:g}=(0,r.kY)();(0,e.useEffect)(()=>{u.current&&u.current("transferTokens")},[]),(0,e.useEffect)(()=>{i({search:b().stringify({sort:"name:ASC"},{encode:!1})})},[i]);const C=$.map(s=>({...s,metadatas:{...s.metadatas,label:p(s.metadatas.label)}})),{data:d,status:S,isFetching:U}=(0,L.useQuery)(["transfer-tokens"],async()=>{c("willAccessTokenList",{tokenType:T.f});const{data:{data:s}}=await f("/admin/transfer/tokens");return c("didAccessTokenList",{number:s.length,tokenType:T.f}),s},{enabled:a,onError(s){console.log("error",s),s?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?y({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),R=a&&(S!=="success"&&S!=="error"||S==="success"&&U),Y=(0,L.useMutation)(async s=>{await g(`/admin/transfer/tokens/${s}`)},{async onSuccess(){await k.invalidateQueries(["transfer-tokens"])},onError(s){s?.response?.data?.data?y({type:"warning",message:s.response.data.data}):s?.response?.data?.error?.details?.code==="INVALID_TOKEN_SALT"?y({type:"warning",message:{id:"notification.error.invalid.configuration",defaultMessage:"You have an invalid configuration, check your server log for more information."}}):y({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),K=a&&d,j=a&&!d&&!D,w=a&&!d&&D;return e.createElement(h.o,{"aria-busy":R},e.createElement(r.SL,{name:"Transfer Tokens"}),e.createElement(P.T,{title:p({id:"Settings.transferTokens.title",defaultMessage:"Transfer Tokens"}),subtitle:p({id:"Settings.transferTokens.description",defaultMessage:'"List of generated transfer tokens"'}),primaryAction:D?e.createElement(r.Qj,{"data-testid":"create-transfer-token-button",startIcon:e.createElement(n.Z,null),size:"S",onClick:()=>c("willAddTokenFromList",{tokenType:T.f}),to:"/settings/transfer-tokens/create"},p({id:"Settings.transferTokens.create",defaultMessage:"Create new Transfer Token"})):void 0}),e.createElement(l.D,null,!a&&e.createElement(r.ZF,null),K&&e.createElement(F.Z,{permissions:{canRead:a,canDelete:M,canUpdate:H},headers:C,contentType:"trasfer-tokens",rows:d,isLoading:R,onConfirmDelete:s=>Y.mutateAsync(s),tokens:d,tokenType:T.f}),w&&e.createElement(r.dJ,{content:{id:"Settings.transferTokens.addFirstToken",defaultMessage:"Add your first Transfer Token"},action:e.createElement(V.z,{variant:"secondary",startIcon:e.createElement(n.Z,null)},p({id:"Settings.transferTokens.addNewToken",defaultMessage:"Add new Transfer Token"}))}),j&&e.createElement(r.dJ,{content:{id:"Settings.transferTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})))},I=()=>{const k=(0,N.v9)(m._);return e.createElement(r.O4,{permissions:k.settings["transfer-tokens"].main},e.createElement(Q,null))}}}]);