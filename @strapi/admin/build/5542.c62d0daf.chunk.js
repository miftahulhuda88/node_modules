(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[5542],{88058:function(o,u,n){var t=n(87650);function r(e,s){var i=e==null?0:e.length;return!!i&&t(e,s,0)>-1}o.exports=r},37431:function(o){function u(n,t,r){for(var e=-1,s=n==null?0:n.length;++e<s;)if(r(t,n[e]))return!0;return!1}o.exports=u},91096:function(o,u,n){var t=n(61124),r=n(88058),e=n(37431),s=n(26460),i=n(76535),d=n(30555),a=200;function x(g,m,E,v){var c=-1,l=r,p=!0,h=g.length,f=[],M=m.length;if(!h)return f;E&&(m=s(m,i(E))),v?(l=e,p=!1):m.length>=a&&(l=d,p=!1,m=new t(m));n:for(;++c<h;){var j=g[c],P=E==null?j:E(j);if(j=v||j!==0?j:0,p&&P===P){for(var O=M;O--;)if(m[O]===P)continue n;f.push(j)}else l(m,P,v)||f.push(j)}return f}o.exports=x},56671:function(o,u,n){var t=n(35897),r=n(74741),e=r(t);o.exports=e},60528:function(o){function u(n,t,r,e){for(var s=n.length,i=r+(e?1:-1);e?i--:++i<s;)if(t(n[i],i,n))return i;return-1}o.exports=u},87650:function(o,u,n){var t=n(60528),r=n(25556),e=n(54256);function s(i,d,a){return d===d?e(i,d,a):t(i,r,a)}o.exports=s},25556:function(o){function u(n){return n!==n}o.exports=u},52920:function(o,u,n){var t=n(56671),r=n(81580);function e(s,i){var d=-1,a=r(s)?Array(s.length):[];return t(s,function(x,g,m){a[++d]=i(x,g,m)}),a}o.exports=e},50690:function(o,u,n){var t=n(26460),r=n(80166),e=n(88904),s=n(52920),i=n(36024),d=n(76535),a=n(1397),x=n(15362),g=n(77236);function m(E,v,c){v.length?v=t(v,function(h){return g(h)?function(f){return r(f,h.length===1?h[0]:h)}:h}):v=[x];var l=-1;v=t(v,d(e));var p=s(E,function(h,f,M){var j=t(v,function(P){return P(h)});return{criteria:j,index:++l,value:h}});return i(p,function(h,f){return a(h,f,c)})}o.exports=m},36024:function(o){function u(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}o.exports=u},40709:function(o,u,n){var t=n(22945);function r(e,s){if(e!==s){var i=e!==void 0,d=e===null,a=e===e,x=t(e),g=s!==void 0,m=s===null,E=s===s,v=t(s);if(!m&&!v&&!x&&e>s||x&&g&&E&&!m&&!v||d&&g&&E||!i&&E||!a)return 1;if(!d&&!x&&!v&&e<s||v&&i&&a&&!d&&!x||m&&i&&a||!g&&a||!E)return-1}return 0}o.exports=r},1397:function(o,u,n){var t=n(40709);function r(e,s,i){for(var d=-1,a=e.criteria,x=s.criteria,g=a.length,m=i.length;++d<g;){var E=t(a[d],x[d]);if(E){if(d>=m)return E;var v=i[d];return E*(v=="desc"?-1:1)}}return e.index-s.index}o.exports=r},74741:function(o,u,n){var t=n(81580);function r(e,s){return function(i,d){if(i==null)return i;if(!t(i))return e(i,d);for(var a=i.length,x=s?a:-1,g=Object(i);(s?x--:++x<a)&&d(g[x],x,g)!==!1;);return i}}o.exports=r},54256:function(o){function u(n,t,r){for(var e=r-1,s=n.length;++e<s;)if(n[e]===t)return e;return-1}o.exports=u},37213:function(o,u,n){var t=n(26460),r=n(88904),e=n(52920),s=n(77236);function i(d,a){var x=s(d)?t:e;return x(d,r(a,3))}o.exports=i},98978:function(o,u,n){var t=n(40314),r=n(50690),e=n(94569),s=n(63108),i=e(function(d,a){if(d==null)return[];var x=a.length;return x>1&&s(d,a[0],a[1])?a=[]:x>2&&s(a[0],a[1],a[2])&&(a=[a[0]]),r(d,t(a,1),[])});o.exports=i},15738:function(o,u,n){var t=n(4293);function r(e){var s=e==null?0:e.length;return s?t(e,1,s):[]}o.exports=r},88708:function(o,u,n){var t=n(4293),r=n(25225);function e(s,i,d){return s&&s.length?(i=d||i===void 0?1:r(i),t(s,0,i<0?0:i)):[]}o.exports=e},86205:function(o,u,n){var t=n(91096),r=n(94569),e=n(99747),s=r(function(i,d){return e(i)?t(i,d):[]});o.exports=s},83828:function(o,u,n){"use strict";n.d(u,{U:function(){return v},y:function(){return m}});var t=n(74512),r=n(32735),e=n(8471),s=n(91045),i=n(74971),d=n(49372),a=n(87933),x=n(72850);const g=({theme:c,expanded:l,variant:p,disabled:h,error:f})=>f?`1px solid ${c.colors.danger600} !important`:h?`1px solid ${c.colors.neutral150}`:l?`1px solid ${c.colors.primary600}`:p==="primary"?`1px solid ${c.colors.neutral0}`:`1px solid ${c.colors.neutral100}`,m=(0,e.ZP)(d.Z)``,E=(0,e.ZP)(x.x)`
  border: ${g};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:c})=>c.colors.primary600};

    ${m} {
      color: ${({theme:c,expanded:l})=>l?void 0:c.colors.primary700};
    }

    ${d.Z} {
      color: ${({theme:c,expanded:l})=>l?void 0:c.colors.primary600};
    }

    & > ${a.k} {
      background: ${({theme:c})=>c.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:c})=>c.colors.primary200};
    }
  }
`,v=({children:c,disabled:l=!1,error:p,expanded:h=!1,hasErrorMessage:f=!0,id:M,onToggle:j,toggle:P,size:O="M",variant:_="primary",shadow:y})=>{const b=(0,i.M)(M),A=r.useMemo(()=>({expanded:h,onToggle:j,toggle:P,id:b,size:O,variant:_,disabled:l}),[l,h,b,j,O,P,_]);return(0,t.jsxs)(s.S.Provider,{value:A,children:[(0,t.jsx)(E,{"data-strapi-expanded":h,disabled:l,"aria-disabled":l,expanded:h,hasRadius:!0,variant:_,error:p,shadow:y,children:c}),p&&f&&(0,t.jsx)(x.x,{paddingTop:1,children:(0,t.jsx)(d.Z,{variant:"pi",textColor:"danger600",children:p})})]})}},89966:function(o,u,n){"use strict";n.d(u,{v:function(){return s}});var t=n(74512),r=n(91045),e=n(72850);const s=({children:i,...d})=>{const{expanded:a,id:x}=(0,r.A)();if(!a)return null;const g=`accordion-content-${x}`,m=`accordion-label-${x}`,E=`accordion-desc-${x}`;return(0,t.jsx)(e.x,{role:"region",id:g,"aria-labelledby":m,"aria-describedby":E,...d,children:i})}},91045:function(o,u,n){"use strict";n.d(u,{A:function(){return e},S:function(){return r}});var t=n(32735);const r=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),e=()=>(0,t.useContext)(r)},61762:function(o,u,n){"use strict";n.d(u,{B:function(){return c}});var t=n(74512),r=n(16899),e=n(8471),s=n(83828),i=n(91045);const d=({expanded:l,disabled:p,variant:h})=>{let f="neutral100";return l?f="primary100":p?f="neutral150":h==="primary"&&(f="neutral0"),f};var a=n(7563),x=n(99140),g=n(87933),m=n(49372);const E=(0,e.ZP)(a.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:l,expanded:p})=>p?l.colors.primary600:l.colors.neutral500};
    }
  }
`,v=(0,e.ZP)(g.k)`
  min-height: ${({theme:l,size:p})=>l.sizes.accordions[p]};
  border-radius: ${({theme:l,expanded:p})=>p?`${l.borderRadius} ${l.borderRadius} 0 0`:l.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:l})=>l.colors.primary600};
      }
    }
  }
`,c=({title:l,description:p,as:h="span",togglePosition:f="right",action:M,...j})=>{const{onToggle:P,toggle:O,expanded:_,id:y,size:b,variant:A,disabled:B}=(0,i.A)(),w=`accordion-content-${y}`,D=`accordion-label-${y}`,W=`accordion-desc-${y}`,C=b==="M"?6:4,L=b==="M"?C:C-2,U=d({expanded:_,disabled:B,variant:A}),I={as:h,fontWeight:b==="S"?"bold":void 0,id:D,textColor:_?"primary600":"neutral700",ellipsis:!0,variant:b==="M"?"delta":void 0},K=_?"primary600":"neutral600",Z=_?"primary200":"neutral200",T=b==="M"?`${32/16}rem`:`${24/16}rem`,R=()=>{B||(O&&!P?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),O()):P&&P())},$=(0,t.jsx)(g.k,{justifyContent:"center",borderRadius:"50%",height:T,width:T,transform:_?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:Z,cursor:B?"not-allowed":"pointer",onClick:R,shrink:0,children:(0,t.jsx)(x.J,{as:r.Z,width:b==="M"?`${11/16}rem`:`${8/16}rem`,color:_?"primary600":"neutral600"})});return(0,t.jsx)(v,{paddingBottom:L,paddingLeft:C,paddingRight:C,paddingTop:L,background:U,expanded:_,size:b,justifyContent:"space-between",cursor:B?"not-allowed":"",children:(0,t.jsxs)(g.k,{gap:3,flex:1,maxWidth:"100%",children:[f==="left"&&$,(0,t.jsx)(E,{onClick:R,"aria-disabled":B,"aria-expanded":_,"aria-controls":w,"aria-labelledby":D,"data-strapi-accordion-toggle":!0,expanded:_,type:"button",flex:1,minWidth:0,...j,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.y,{...I,children:l}),p&&(0,t.jsx)(m.Z,{as:"p",id:W,textColor:K,children:p})]})}),f==="right"&&(0,t.jsxs)(g.k,{gap:3,children:[$,M]}),f==="left"&&M]})})}},99223:function(o,u,n){"use strict";n.d(u,{Z:function(){return e}});var t=n(74512),r=n(87933);const e=({startActions:s,endActions:i})=>!s&&!i?null:(0,t.jsxs)(r.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(r.k,{gap:2,wrap:"wrap",children:s}),(0,t.jsx)(r.k,{gap:2,shrink:0,wrap:"wrap",children:i})]})},17e3:function(o,u,n){"use strict";n.d(u,{D:function(){return e}});var t=n(74512),r=n(72850);const e=({children:s})=>(0,t.jsx)(r.x,{paddingLeft:10,paddingRight:10,children:s})},82055:function(o,u,n){"use strict";n.d(u,{T:function(){return m}});var t=n(74512),r=n(32735),e=n(8471);const s=c=>{const l=(0,r.useRef)(null),[p,h]=(0,r.useState)(!0),f=([M])=>{h(M.isIntersecting)};return(0,r.useEffect)(()=>{const M=l.current,j=new IntersectionObserver(f,c);return M&&j.observe(l.current),()=>{M&&j.disconnect()}},[l,c]),[l,p]};var i=n(2285);const d=(c,l)=>{const p=(0,i.W)(l);(0,r.useLayoutEffect)(()=>{const h=new ResizeObserver(p);return Array.isArray(c)?c.forEach(f=>{f.current&&h.observe(f.current)}):c.current&&h.observe(c.current),()=>{h.disconnect()}},[c,p])};var a=n(72850),x=n(87933),g=n(49372);const m=c=>{const l=(0,r.useRef)(null),[p,h]=(0,r.useState)(null),[f,M]=s({root:null,rootMargin:"0px",threshold:0});return d(f,()=>{f.current&&h(f.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{l.current&&h(l.current.getBoundingClientRect())},[l]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{style:{height:p?.height},ref:f,children:M&&(0,t.jsx)(v,{ref:l,...c})}),!M&&(0,t.jsx)(v,{...c,sticky:!0,width:p?.width})]})};m.displayName="HeaderLayout";const E=(0,e.ZP)(a.x)`
  width: ${({width:c})=>c?`${c/16}rem`:void 0};
  z-index: ${({theme:c})=>c.zIndices[1]};
`,v=r.forwardRef(({navigationAction:c,primaryAction:l,secondaryAction:p,subtitle:h,title:f,sticky:M,width:j,...P},O)=>{const _=typeof h=="string";return M?(0,t.jsx)(E,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:j,"data-strapi-header-sticky":!0,children:(0,t.jsxs)(x.k,{justifyContent:"space-between",children:[(0,t.jsxs)(x.k,{children:[c&&(0,t.jsx)(a.x,{paddingRight:3,children:c}),(0,t.jsxs)(a.x,{children:[(0,t.jsx)(g.Z,{variant:"beta",as:"h1",...P,children:f}),_?(0,t.jsx)(g.Z,{variant:"pi",textColor:"neutral600",children:h}):h]}),p?(0,t.jsx)(a.x,{paddingLeft:4,children:p}):null]}),(0,t.jsx)(x.k,{children:l?(0,t.jsx)(a.x,{paddingLeft:2,children:l}):void 0})]})}):(0,t.jsxs)(a.x,{ref:O,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:c?6:8,background:"neutral100","data-strapi-header":!0,children:[c?(0,t.jsx)(a.x,{paddingBottom:2,children:c}):null,(0,t.jsxs)(x.k,{justifyContent:"space-between",children:[(0,t.jsxs)(x.k,{minWidth:0,children:[(0,t.jsx)(g.Z,{as:"h1",variant:"alpha",...P,children:f}),p?(0,t.jsx)(a.x,{paddingLeft:4,children:p}):null]}),l]}),_?(0,t.jsx)(g.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:h}):h]})})},96709:function(o,u,n){"use strict";n.d(u,{A:function(){return d}});var t=n(74512),r=n(8471),e=n(72850);const s=(0,r.ZP)(e.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,i=(0,r.ZP)(e.x)`
  overflow-x: hidden;
`,d=({sideNav:a,children:x})=>(0,t.jsxs)(s,{hasSideNav:!!a,children:[a,(0,t.jsx)(i,{paddingBottom:10,children:x})]})},27649:function(o,u,n){"use strict";n.d(u,{o:function(){return i}});var t=n(74512),r=n(8471),e=n(72850);const s=(0,r.ZP)(e.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,i=({labelledBy:d="main-content-title",...a})=>(0,t.jsx)(s,{"aria-labelledby":d,as:"main",id:"main-content",tabIndex:-1,...a})},29439:function(o,u,n){"use strict";n.d(u,{Z:function(){return e}});var t=n(74512);const r=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,t.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),e=r},45112:function(o,u,n){"use strict";n.d(u,{Z:function(){return e}});var t=n(74512);const r=s=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...s,children:(0,t.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),e=r}}]);