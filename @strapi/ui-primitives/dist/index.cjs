"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const u=require("react/jsx-runtime"),_t=require("react"),O=require("@radix-ui/react-compose-refs"),ve=require("@radix-ui/react-context"),Ee=require("@radix-ui/react-slot"),w=require("@radix-ui/primitive"),nt=require("@radix-ui/react-dismissable-layer"),rt=require("@radix-ui/react-focus-guards"),st=require("@radix-ui/react-focus-scope"),re=require("@radix-ui/react-id"),Ae=require("@radix-ui/react-popper"),lt=require("@radix-ui/react-portal"),_=require("@radix-ui/react-primitive"),ie=require("@radix-ui/react-use-controllable-state"),F=require("@radix-ui/react-use-layout-effect"),ct=require("aria-hidden"),Nt=require("react-dom"),it=require("react-remove-scroll"),et=require("@radix-ui/number"),At=require("@radix-ui/react-collection"),Ot=require("@radix-ui/react-direction"),Mt=require("@radix-ui/react-use-previous"),jt=require("@radix-ui/react-visually-hidden"),at=require("@radix-ui/react-use-callback-ref");function Oe(n){const l=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(n){for(const e in n)if(e!=="default"){const t=Object.getOwnPropertyDescriptor(n,e);Object.defineProperty(l,e,t.get?t:{enumerable:!0,get:()=>n[e]})}}return l.default=n,Object.freeze(l)}const s=Oe(_t),se=Oe(Ae),Ce=Oe(Nt);function ut(n){const l=`${n}CollectionProvider`,[e,t]=ve.createContextScope(l),[o,r]=e(l,{collectionRef:{current:null},itemMap:new Map,listeners:new Set}),i=f=>{const{scope:h,children:C}=f,v=s.useRef(null),b=s.useRef(new Map).current,x=s.useRef(new Set).current;return u.jsx(o,{scope:h,itemMap:b,collectionRef:v,listeners:x,children:C})};i.displayName=l;const c=`${n}CollectionSlot`,a=s.forwardRef((f,h)=>{const{scope:C,children:v}=f,b=r(c,C),x=O.useComposedRefs(h,b.collectionRef);return u.jsx(Ee.Slot,{ref:x,children:v})});a.displayName=c;const m=`${n}CollectionItemSlot`,d="data-radix-collection-item",g=s.forwardRef((f,h)=>{const{scope:C,children:v,...b}=f,x=s.useRef(null),y=O.useComposedRefs(h,x),V=r(m,C);return s.useEffect(()=>{const M=Array.from(V.itemMap.values());return V.itemMap.set(x,{ref:x,...b}),V.listeners.forEach(N=>N(Array.from(V.itemMap.values()),M)),()=>{const N=Array.from(V.itemMap.values());V.itemMap.delete(x),V.listeners.forEach(A=>A(Array.from(V.itemMap.values()),N))}}),u.jsx(Ee.Slot,{[d]:"",ref:y,children:v})});g.displayName=m;function p(f){const h=r(`${n}CollectionConsumer`,f),C=s.useCallback(()=>{const b=h.collectionRef.current;if(!b)return[];const x=Array.from(b.querySelectorAll(`[${d}]`));return Array.from(h.itemMap.values()).sort((M,N)=>x.indexOf(M.ref.current)-x.indexOf(N.ref.current))},[h.collectionRef,h.itemMap]),v=s.useCallback(b=>(h.listeners.add(b),()=>h.listeners.delete(b)),[h.listeners]);return{getItems:C,subscribe:v}}return[{Provider:i,Slot:a,ItemSlot:g},p,t]}let Te=new Map;function Dt(n,l){let e=n+(l?Object.entries(l).sort((o,r)=>o[0]<r[0]?-1:1).join():"");if(Te.has(e))return Te.get(e);let t=new Intl.Collator(n,l);return Te.set(e,t),t}function Me(n,l){let e=Dt(n,{usage:"search",...l});return{startsWith(t,o){return o.length===0?!0:(t=t.normalize("NFC"),o=o.normalize("NFC"),e.compare(t.slice(0,o.length),o)===0)},endsWith(t,o){return o.length===0?!0:(t=t.normalize("NFC"),o=o.normalize("NFC"),e.compare(t.slice(-o.length),o)===0)},contains(t,o){if(o.length===0)return!0;t=t.normalize("NFC"),o=o.normalize("NFC");let r=0,i=o.length;for(;r+i<=t.length;r++){let c=t.slice(r,r+i);if(e.compare(o,c)===0)return!0}return!1}}}const Lt=n=>{const l=s.useRef();return s.useEffect(()=>{l.current=n}),l.current},Ft=[" ","Enter","ArrowUp","ArrowDown"],kt=["Enter"],Ht=n=>!!(n.length===1&&n.match(/\S| /)),dt="Combobox",[ae,me]=ut(dt),[Bt,$]=ve.createContext(dt),Ut=({children:n})=>u.jsx(se.Root,{children:u.jsx(ae.Provider,{scope:void 0,children:n})}),$t=n=>{const{allowCustomValue:l=!1,autocomplete:e="none",children:t,open:o,defaultOpen:r,onOpenChange:i,value:c,defaultValue:a,onValueChange:m,disabled:d,required:g=!1,locale:p="en-EN",onTextValueChange:f,textValue:h,defaultTextValue:C,filterValue:v,defaultFilterValue:b,onFilterValueChange:x,isPrintableCharacter:y=Ht}=n,[V,M]=s.useState(null),[N,A]=s.useState(null),[D,Y]=s.useState(null),[q,k]=s.useState(null),[j=!1,H]=ie.useControllableState({prop:o,defaultProp:r,onChange:i}),[L,K]=ie.useControllableState({prop:c,defaultProp:a,onChange:m}),[W,B]=ie.useControllableState({prop:h,defaultProp:l&&!C?c:C,onChange:f}),[X,U]=ie.useControllableState({prop:v,defaultProp:b,onChange:x}),de=re.useId(),le=s.useCallback((fe,Q)=>{const Z=Q.map(T=>T.ref.current),[ce,...ee]=Z,[S]=ee.slice(-1),E=q??Q.find(T=>T.value===L)?.ref.current;for(const T of fe){if(T===E)return;if(T?.scrollIntoView({block:"nearest"}),T===ce&&N&&(N.scrollTop=0),T===S&&N&&(N.scrollTop=N.scrollHeight),k(T),e==="both"){const I=Q.find(P=>P.ref.current===T);I&&B(I.textValue)}if(T!==E)return}},[e,B,N,q,L]);return s.useEffect(()=>{e!=="both"&&k(null)},[W,e]),s.useEffect(()=>{if(D&&V)return ct.hideOthers([D,V])},[D,V]),u.jsx(Ut,{children:u.jsx(Bt,{allowCustomValue:l,autocomplete:e,required:g,trigger:V,onTriggerChange:M,contentId:de,value:L,onValueChange:K,open:j,onOpenChange:H,disabled:d,locale:p,focusFirst:le,textValue:W,onTextValueChange:B,onViewportChange:A,onContentChange:Y,visuallyFocussedItem:q,filterValue:X,onFilterValueChange:U,onVisuallyFocussedItemChange:k,isPrintableCharacter:y,children:t})})},qt="ComboboxTrigger",Kt=s.forwardRef((n,l)=>{const{...e}=n,t=$(qt),o=()=>{t.disabled||t.onOpenChange(!0)};return u.jsx(se.Anchor,{asChild:!0,children:u.jsx(st.FocusScope,{asChild:!0,trapped:t.open,onMountAutoFocus:r=>{r.preventDefault()},onUnmountAutoFocus:r=>{t.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),r.preventDefault()},children:u.jsx("div",{ref:l,"data-disabled":t.disabled?"":void 0,...e,onClick:w.composeEventHandlers(e.onClick,()=>{t.trigger?.focus()}),onPointerDown:w.composeEventHandlers(e.onPointerDown,r=>{const i=r.target;i.hasPointerCapture(r.pointerId)&&i.releasePointerCapture(r.pointerId),(i.closest("button")??i.closest("div"))===r.currentTarget&&r.button===0&&r.ctrlKey===!1&&(o(),t.trigger?.focus())})})})})}),ft="ComboboxInput",Wt=s.forwardRef((n,l)=>{const e=$(ft),t=s.useRef(null),{getItems:o}=me(void 0),{startsWith:r}=Me(e.locale,{sensitivity:"base"}),i=e.disabled,c=O.useComposedRefs(t,l,e.onTriggerChange),a=()=>{i||e.onOpenChange(!0)},m=Lt(e.filterValue);return F.useLayoutEffect(()=>{const d=setTimeout(()=>{if(e.textValue===""||e.textValue===void 0||e.filterValue===""||e.filterValue===void 0)return;const g=o().find(f=>f.type==="option"&&r(f.textValue,e.textValue)),p=So(m??"",e.filterValue);g&&!e.visuallyFocussedItem&&p===e.filterValue.length&&t.current?.setSelectionRange(e.filterValue.length,e.textValue.length)});return()=>clearTimeout(d)},[e.textValue,e.filterValue,r,e.visuallyFocussedItem,o,m]),u.jsx("input",{type:"text",role:"combobox","aria-controls":e.contentId,"aria-expanded":e.open,"aria-required":e.required,"aria-autocomplete":e.autocomplete,"data-state":e.open?"open":"closed","aria-disabled":i,"aria-activedescendant":e.visuallyFocussedItem?.id,disabled:i,"data-disabled":i?"":void 0,"data-placeholder":e.textValue===void 0?"":void 0,value:e.textValue??"",...n,ref:c,onKeyDown:w.composeEventHandlers(n.onKeyDown,d=>{if(["ArrowUp","ArrowDown","Home","End"].includes(d.key))e.open||a(),setTimeout(()=>{let p=o().filter(f=>!f.disabled&&f.isVisible).map(f=>f.ref.current);if(["ArrowUp","End"].includes(d.key)&&(p=p.slice().reverse()),["ArrowUp","ArrowDown"].includes(d.key)){const f=e.visuallyFocussedItem??o().find(h=>h.value===e.value)?.ref.current;if(f){let h=p.indexOf(f);h===p.length-1&&(h=-1),p=p.slice(h+1)}}if(["ArrowDown"].includes(d.key)&&e.autocomplete==="both"&&p.length>1){const[f,...h]=p,C=o().find(v=>v.ref.current===f).textValue;e.textValue===C&&(p=h)}e.focusFirst(p,o())}),d.preventDefault();else if(["Tab"].includes(d.key)&&e.open)d.preventDefault();else if(["Escape"].includes(d.key))e.open?e.onOpenChange(!1):(e.onValueChange(void 0),e.onTextValueChange("")),d.preventDefault();else if(kt.includes(d.key)){if(e.visuallyFocussedItem){const g=o().find(p=>p.ref.current===e.visuallyFocussedItem);g&&(e.onValueChange(g.value),e.onTextValueChange(g.textValue),e.autocomplete==="both"&&e.onFilterValueChange(g.textValue),g.ref.current?.click())}else{const g=o().find(p=>p.type==="option"&&!p.disabled&&p.textValue===e.textValue);g&&(e.onValueChange(g.value),e.onTextValueChange(g.textValue),e.autocomplete==="both"&&e.onFilterValueChange(g.textValue),g.ref.current?.click())}e.onOpenChange(!1),d.preventDefault()}else e.onVisuallyFocussedItemChange(null)}),onChange:w.composeEventHandlers(n.onChange,d=>{e.onTextValueChange(d.currentTarget.value),e.autocomplete==="both"&&e.onFilterValueChange(d.currentTarget.value)}),onKeyUp:w.composeEventHandlers(n.onKeyUp,d=>{if(!e.open&&(e.isPrintableCharacter(d.key)||["Backspace"].includes(d.key))&&a(),setTimeout(()=>{if(e.autocomplete==="both"&&e.isPrintableCharacter(d.key)&&e.filterValue!==void 0){const g=e.filterValue,p=o().find(f=>r(f.textValue,g));p&&e.onTextValueChange(p.textValue)}}),e.autocomplete==="none"&&e.isPrintableCharacter(d.key)){const g=e.textValue??"",p=o().find(f=>r(f.textValue,g));p&&(e.onVisuallyFocussedItemChange(p.ref.current),p.ref.current?.scrollIntoView())}}),onBlur:w.composeEventHandlers(n.onBlur,()=>{if(e.open)return;e.onVisuallyFocussedItemChange(null);const[d]=o().filter(p=>p.textValue===e.textValue&&p.type==="option");if(d){e.onValueChange(d.value),e.autocomplete==="both"&&e.onFilterValueChange(d.textValue);return}if(e.allowCustomValue){e.onValueChange(e.textValue),e.autocomplete==="both"&&e.onFilterValueChange(e.textValue);return}const[g]=o().filter(p=>p.value===e.value&&p.type==="option");g&&e.textValue!==""?(e.onTextValueChange(g.textValue),e.autocomplete==="both"&&e.onFilterValueChange(g.textValue)):(e.onValueChange(void 0),e.onTextValueChange(""))})})}),zt=s.forwardRef((n,l)=>{const{children:e,...t}=n,o=$(ft),r=o.disabled,i=()=>{r||(o.onOpenChange(!0),o.trigger?.focus())};return u.jsx(_.Primitive.button,{"aria-hidden":!0,type:"button","aria-disabled":r,"aria-controls":o.contentId,"aria-expanded":o.open,disabled:r,"data-disabled":r?"":void 0,...t,tabIndex:-1,ref:l,onClick:w.composeEventHandlers(t.onClick,()=>{o.trigger?.focus()}),onPointerDown:w.composeEventHandlers(t.onPointerDown,c=>{c.button===0&&c.ctrlKey===!1&&(i(),c.preventDefault())}),onKeyDown:w.composeEventHandlers(t.onKeyDown,c=>{Ft.includes(c.key)&&(i(),c.preventDefault())}),children:e||"▼"})}),Gt="ComboboxPortal",pt=n=>u.jsx(lt.Portal,{asChild:!0,...n});pt.displayName=Gt;const mt="ComboboxContent",Yt=s.forwardRef((n,l)=>{const e=$(mt),{getItems:t}=me(void 0),[o,r]=s.useState();if(F.useLayoutEffect(()=>{r(new DocumentFragment)},[]),F.useLayoutEffect(()=>{e.open&&e.autocomplete==="none"&&setTimeout(()=>{t().find(c=>c.value===e.value)?.ref.current?.scrollIntoView({block:"nearest"})})},[t,e.autocomplete,e.value,e.open]),!e.open){const i=o;return i?Ce.createPortal(u.jsx(ae.Slot,{scope:void 0,children:u.jsx("div",{children:n.children})}),i):null}return u.jsx(Zt,{...n,ref:l})}),Xt=10,Zt=s.forwardRef((n,l)=>{const{onEscapeKeyDown:e,onPointerDownOutside:t,...o}=n,r=$(mt),i=O.useComposedRefs(l,a=>r.onContentChange(a)),{onOpenChange:c}=r;return rt.useFocusGuards(),s.useEffect(()=>{const a=()=>{c(!1)};return window.addEventListener("blur",a),window.addEventListener("resize",a),()=>{window.removeEventListener("blur",a),window.removeEventListener("resize",a)}},[c]),u.jsx(it.RemoveScroll,{allowPinchZoom:!0,children:u.jsx(nt.DismissableLayer,{asChild:!0,onEscapeKeyDown:e,onPointerDownOutside:t,onFocusOutside:a=>{a.preventDefault()},onDismiss:()=>{r.onOpenChange(!1),r.trigger?.focus({preventScroll:!0})},children:u.jsx(Jt,{role:"listbox",id:r.contentId,"data-state":r.open?"open":"closed",onContextMenu:a=>a.preventDefault(),...o,ref:i,style:{display:"flex",flexDirection:"column",outline:"none",...o.style}})})})}),Jt=s.forwardRef((n,l)=>{const{align:e="start",collisionPadding:t=Xt,...o}=n;return u.jsx(se.Content,{...o,ref:l,align:e,collisionPadding:t,style:{boxSizing:"border-box",...o.style,"--radix-combobox-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-combobox-content-available-width":"var(--radix-popper-available-width)","--radix-combobox-content-available-height":"var(--radix-popper-available-height)","--radix-combobox-trigger-width":"var(--radix-popper-anchor-width)","--radix-combobox-trigger-height":"var(--radix-popper-anchor-height)"}})}),Qt="ComboboxViewport",eo=s.forwardRef((n,l)=>{const e=$(Qt),t=O.useComposedRefs(l,e.onViewportChange);return u.jsxs(u.Fragment,{children:[u.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"}}),u.jsx(ae.Slot,{scope:void 0,children:u.jsx(_.Primitive.div,{"data-radix-combobox-viewport":"",role:"presentation",...n,ref:t,style:{position:"relative",flex:1,overflow:"auto",...n.style}})})]})}),je="ComboboxItem",[tt,De]=ve.createContext(je),ht=s.forwardRef((n,l)=>{const{value:e,disabled:t=!1,textValue:o,...r}=n,[i,c]=s.useState();F.useLayoutEffect(()=>{c(new DocumentFragment)},[]);const{onTextValueChange:a,textValue:m,...d}=$(je),g=re.useId(),[p,f]=s.useState(o??""),h=d.value===e,{startsWith:C}=Me(d.locale,{sensitivity:"base"}),v=s.useCallback(b=>{f(x=>x||(b?.textContent??"").trim())},[]);return s.useEffect(()=>{h&&m===void 0&&p!==""&&a(p)},[p,h,m,a]),d.autocomplete==="both"&&p&&d.filterValue&&!C(p,d.filterValue)||d.autocomplete==="list"&&p&&m&&!C(p,m)?i?Ce.createPortal(u.jsx(tt,{textId:g,onTextValueChange:v,isSelected:h,textValue:p,children:u.jsx(ae.ItemSlot,{scope:void 0,value:e,textValue:p,disabled:t,type:"option",isVisible:!1,children:u.jsx(ot,{ref:l,value:e,disabled:t,...r})})}),i):null:u.jsx(tt,{textId:g,onTextValueChange:v,isSelected:h,textValue:p,children:u.jsx(ae.ItemSlot,{scope:void 0,value:e,textValue:p,disabled:t,type:"option",isVisible:!0,children:u.jsx(ot,{ref:l,value:e,disabled:t,...r})})})}),to="ComboboxItemImpl",ot=s.forwardRef((n,l)=>{const{value:e,disabled:t=!1,...o}=n,r=s.useRef(null),i=O.useComposedRefs(l,r),{getItems:c}=me(void 0),{onTextValueChange:a,visuallyFocussedItem:m,...d}=$(je),{isSelected:g,textValue:p,textId:f}=De(to),h=()=>{t||(d.onValueChange(e),a(p),d.onOpenChange(!1),d.autocomplete==="both"&&d.onFilterValueChange(p),d.trigger?.focus({preventScroll:!0}))},C=s.useMemo(()=>m===c().find(b=>b.ref.current===r.current)?.ref.current,[c,m]),v=re.useId();return u.jsx(_.Primitive.div,{role:"option","aria-labelledby":f,"data-highlighted":C?"":void 0,"aria-selected":g&&C,"data-state":g?"checked":"unchecked","aria-disabled":t||void 0,"data-disabled":t?"":void 0,tabIndex:t?void 0:-1,...o,id:v,ref:i,onPointerUp:w.composeEventHandlers(o.onPointerUp,h)})}),oo="ComboboxItemText",no=s.forwardRef((n,l)=>{const{className:e,style:t,...o}=n,r=De(oo),i=O.useComposedRefs(l,r.onTextValueChange);return u.jsx(_.Primitive.span,{id:r.textId,...o,ref:i})}),ro="ComboboxItemIndicator",so=s.forwardRef((n,l)=>{const{isSelected:e}=De(ro);return e?u.jsx(_.Primitive.span,{"aria-hidden":!0,...n,ref:l}):null}),xt="ComboboxNoValueFound",lo=s.forwardRef((n,l)=>{const{textValue:e="",filterValue:t="",locale:o,autocomplete:r}=$(xt),[i,c]=s.useState([]),{subscribe:a}=me(void 0),{startsWith:m}=Me(o,{sensitivity:"base"});return s.useEffect(()=>{const d=a(g=>{c(g)});return()=>{d()}},[a]),i.length===0||r==="none"||r==="list"&&i.some(d=>m(d.textValue,e))||r==="both"&&i.some(d=>m(d.textValue,t))?null:u.jsx(_.Primitive.div,{...n,ref:l})}),co=s.forwardRef((n,l)=>{const{disabled:e=!1,...t}=n,o=$(xt),{textValue:r,visuallyFocussedItem:i}=o,{getItems:c,subscribe:a}=me(void 0),m=s.useRef(null),[d,g]=s.useState(!1),p=O.useComposedRefs(l,m),f=s.useMemo(()=>i===c().find(v=>v.ref.current===m.current)?.ref.current,[c,i]),h=re.useId(),C=()=>{!e&&r&&(o.onValueChange(r),o.onTextValueChange(r),o.onOpenChange(!1),o.autocomplete==="both"&&o.onFilterValueChange(r),o.trigger?.focus({preventScroll:!0}))};return F.useLayoutEffect(()=>{const v=a(b=>{g(!b.some(x=>x.textValue===r&&x.type!=="create"))});return c().length===0&&g(!0),()=>{v()}},[r,a,c]),!r||!d?null:u.jsx(ae.ItemSlot,{scope:void 0,value:r??"",textValue:r??"",disabled:e,isVisible:!0,type:"create",children:u.jsx(_.Primitive.div,{role:"option",tabIndex:e?void 0:-1,"aria-disabled":e||void 0,"data-disabled":e?"":void 0,"data-highlighted":f?"":void 0,...t,id:h,ref:p,onPointerUp:w.composeEventHandlers(t.onPointerUp,C)})})}),io=$t,ao=Kt,uo=Wt,fo=zt,po=pt,mo=Yt,ho=eo,xo=ht,go=no,vo=so,Co=lo,bo=co;function So(n,l){const e=Math.min(n.length,l.length);for(let t=0;t<e;t++)if(n[t]!==l[t])return t;return e}const yo=Object.freeze(Object.defineProperty({__proto__:null,ComboboxItem:ht,Content:mo,CreateItem:bo,Icon:fo,Item:xo,ItemIndicator:vo,ItemText:go,NoValueFound:Co,Portal:po,Root:io,TextInput:uo,Trigger:ao,Viewport:ho},Symbol.toStringTag,{value:"Module"})),Io=[" ","Enter","ArrowUp","ArrowDown"],wo=[" ","Enter"],he="Select",[be,xe,To]=At.createCollection(he),[ue,Eo]=ve.createContextScope(he,[To,Ae.createPopperScope]),Se=Ae.createPopperScope(),[Po,G]=ue(he),[Vo,Ro]=ue(he),Le=n=>{const{__scopeSelect:l,children:e,open:t,defaultOpen:o,onOpenChange:r,value:i,defaultValue:c,onValueChange:a,dir:m,disabled:d,required:g,multi:p=!1}=n,f=Se(l),[h,C]=s.useState(null),[v,b]=s.useState(null),[x,y]=s.useState(!1),V=Ot.useDirection(m),[M=!1,N]=ie.useControllableState({prop:t,defaultProp:o,onChange:r}),[A,D]=ie.useControllableState({prop:i,defaultProp:c,onChange(j){a&&(Array.isArray(j),a(j))}}),Y=s.useRef(null),[q,k]=s.useState(new Set);return u.jsx(se.Root,{...f,children:u.jsx(Po,{required:g,scope:l,trigger:h,onTriggerChange:C,valueNode:v,onValueNodeChange:b,valueNodeHasChildren:x,onValueNodeHasChildrenChange:y,contentId:re.useId(),value:A,onValueChange:D,open:M,onOpenChange:N,dir:V,triggerPointerDownPosRef:Y,disabled:d,multi:p,children:u.jsx(be.Provider,{scope:l,children:u.jsx(Vo,{scope:n.__scopeSelect,onNativeOptionAdd:s.useCallback(j=>{k(H=>new Set(H).add(j))},[]),onNativeOptionRemove:s.useCallback(j=>{k(H=>{const L=new Set(H);return L.delete(j),L})},[]),children:e})})})})};Le.displayName=he;const gt="SelectTrigger",Fe=s.forwardRef((n,l)=>{const{__scopeSelect:e,...t}=n,o=Se(e),r=G(gt,e),i=r.disabled,c=O.useComposedRefs(l,r.onTriggerChange),a=xe(e),[m,d,g]=Pt(f=>{const h=a().filter(b=>!b.disabled),C=h.find(b=>b.value===r.value),v=Vt(h,f,C);if(v!==void 0&&!Array.isArray(v.value)){const b=r.multi?[v.value]:v.value;r.onValueChange(b)}}),p=()=>{i||(r.onOpenChange(!0),g())};return u.jsx(se.Anchor,{asChild:!0,...o,children:u.jsx(_.Primitive.div,{role:"combobox","aria-controls":r.contentId,"aria-expanded":r.open,"aria-required":r.required,"aria-autocomplete":"none",dir:r.dir,"data-state":r.open?"open":"closed","data-disabled":i?"":void 0,"data-placeholder":r.value===void 0?"":void 0,tabIndex:i?void 0:0,...t,ref:c,onClick:w.composeEventHandlers(t.onClick,f=>{f.currentTarget.focus()}),onPointerDown:w.composeEventHandlers(t.onPointerDown,f=>{const h=f.target;h.hasPointerCapture(f.pointerId)&&h.releasePointerCapture(f.pointerId),(h.closest("button")??h.closest("div"))===f.currentTarget&&f.button===0&&f.ctrlKey===!1&&(p(),r.triggerPointerDownPosRef.current={x:Math.round(f.pageX),y:Math.round(f.pageY)},f.preventDefault())}),onKeyDown:w.composeEventHandlers(t.onKeyDown,f=>{const h=m.current!=="",C=f.ctrlKey||f.altKey||f.metaKey,v=f.target;(v.closest("button")??v.closest("div"))===f.currentTarget&&(!C&&f.key.length===1&&d(f.key),!(h&&f.key===" ")&&Io.includes(f.key)&&(p(),f.preventDefault()))})})})});Fe.displayName=gt;const vt="SelectValue",ke=s.forwardRef((n,l)=>{const{__scopeSelect:e,children:t,placeholder:o,...r}=n,i=G(vt,e),{onValueNodeHasChildrenChange:c}=i,a=t!==void 0,m=O.useComposedRefs(l,i.onValueNodeChange),[d,g]=s.useState([]),p=xe(e);F.useLayoutEffect(()=>{c(a)},[c,a]),s.useLayoutEffect(()=>{if(Array.isArray(i.value)&&d.length!==i.value.length){const h=setTimeout(()=>{const C=p().filter(v=>Array.isArray(v.value)?!1:i.value?.includes(v.value));g(C)});return()=>{clearTimeout(h)}}},[i.value,p,d]);let f;if((i.value===void 0||i.value.length===0)&&o!==void 0)f=u.jsx("span",{children:o});else if(typeof t=="function")if(Array.isArray(i.value)){const h=i.value.map(C=>{const v=d.find(b=>b.value===C);return v?t({value:C,textValue:v?.textValue}):null});f=h.every(C=>C===null)?o:h}else f=t(i.value);else f=t;return u.jsx(_.Primitive.span,{...r,ref:m,children:f||null})});ke.displayName=vt;const _o="SelectIcon",He=s.forwardRef((n,l)=>{const{__scopeSelect:e,children:t,...o}=n;return u.jsx(_.Primitive.span,{"aria-hidden":!0,...o,ref:l,children:t||"▼"})});He.displayName=_o;const No="SelectPortal",Be=n=>u.jsx(lt.Portal,{asChild:!0,...n});Be.displayName=No;const ne="SelectContent",Ue=s.forwardRef((n,l)=>{const e=G(ne,n.__scopeSelect),[t,o]=s.useState();if(F.useLayoutEffect(()=>{o(new DocumentFragment)},[]),!e.open){const r=t;return r?Ce.createPortal(u.jsx(Ct,{scope:n.__scopeSelect,children:u.jsx(be.Slot,{scope:n.__scopeSelect,children:u.jsx("div",{children:n.children})})}),r):null}return u.jsx(bt,{...n,ref:l})});Ue.displayName=ne;const z=10,[Ct,J]=ue(ne),Ao="SelectContentImpl",bt=s.forwardRef((n,l)=>{const{__scopeSelect:e,position:t="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:r,onPointerDownOutside:i,side:c,sideOffset:a,align:m,alignOffset:d,arrowPadding:g,collisionBoundary:p,collisionPadding:f,sticky:h,hideWhenDetached:C,avoidCollisions:v,...b}=n,x=G(ne,e),[y,V]=s.useState(null),[M,N]=s.useState(null),A=O.useComposedRefs(l,S=>V(S)),[D,Y]=s.useState(null),[q,k]=s.useState(null),j=xe(e),[H,L]=s.useState(!1),K=s.useRef(!1);s.useEffect(()=>{if(y)return ct.hideOthers(y)},[y]),rt.useFocusGuards();const W=s.useCallback(S=>{const[E,...T]=j().map(R=>R.ref.current),[I]=T.slice(-1),P=document.activeElement;for(const R of S)if(R===P||(R?.scrollIntoView({block:"nearest"}),R===E&&M&&(M.scrollTop=0),R===I&&M&&(M.scrollTop=M.scrollHeight),R?.focus(),document.activeElement!==P))return},[j,M]),B=s.useCallback(()=>W([D,y]),[W,D,y]);s.useEffect(()=>{H&&B()},[H,B]);const{onOpenChange:X,triggerPointerDownPosRef:U}=x;s.useEffect(()=>{if(y){let S={x:0,y:0};const E=I=>{S={x:Math.abs(Math.round(I.pageX)-(U.current?.x??0)),y:Math.abs(Math.round(I.pageY)-(U.current?.y??0))}},T=I=>{S.x<=10&&S.y<=10?I.preventDefault():y.contains(I.target)||X(!1),document.removeEventListener("pointermove",E),U.current=null};return U.current!==null&&(document.addEventListener("pointermove",E),document.addEventListener("pointerup",T,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",E),document.removeEventListener("pointerup",T,{capture:!0})}}},[y,X,U]),s.useEffect(()=>{const S=()=>X(!1);return window.addEventListener("blur",S),window.addEventListener("resize",S),()=>{window.removeEventListener("blur",S),window.removeEventListener("resize",S)}},[X]);const[de,le]=Pt(S=>{const E=j().filter(P=>!P.disabled),T=E.find(P=>P.ref.current===document.activeElement),I=Vt(E,S,T);I&&setTimeout(()=>I.ref.current.focus())}),fe=s.useCallback((S,E,T)=>{const I=!K.current&&!T;(x.value!==void 0&&x.value===E||I)&&(Y(S),I&&(K.current=!0))},[x.value]),Q=s.useCallback(()=>y?.focus(),[y]),Z=s.useCallback((S,E,T)=>{const I=!K.current&&!T;(x.value!==void 0&&(Array.isArray(E)?E.every(R=>x.value?.includes(R)):x.value===E)||I)&&k(S)},[x.value]),ce=t==="popper"?Pe:St,ee=ce===Pe?{side:c,sideOffset:a,align:m,alignOffset:d,arrowPadding:g,collisionBoundary:p,collisionPadding:f,sticky:h,hideWhenDetached:C,avoidCollisions:v}:{};return u.jsx(Ct,{scope:e,content:y,viewport:M,onViewportChange:N,itemRefCallback:fe,selectedItem:D,onItemLeave:Q,itemTextRefCallback:Z,focusSelectedItem:B,selectedItemText:q,position:t,isPositioned:H,searchRef:de,children:u.jsx(it.RemoveScroll,{as:Ee.Slot,allowPinchZoom:!0,children:u.jsx(st.FocusScope,{asChild:!0,trapped:x.open,onMountAutoFocus:S=>{S.preventDefault()},onUnmountAutoFocus:w.composeEventHandlers(o,S=>{x.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),S.preventDefault()}),children:u.jsx(nt.DismissableLayer,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:S=>S.preventDefault(),onDismiss:()=>x.onOpenChange(!1),children:u.jsx(ce,{role:"listbox",id:x.contentId,"data-state":x.open?"open":"closed","aria-multiselectable":x.multi?"true":void 0,dir:x.dir,onContextMenu:S=>S.preventDefault(),...b,...ee,onPlaced:()=>L(!0),ref:A,style:{display:"flex",flexDirection:"column",outline:"none",...b.style},onKeyDown:w.composeEventHandlers(b.onKeyDown,S=>{const E=S.ctrlKey||S.altKey||S.metaKey;if(S.key==="Tab"&&S.preventDefault(),!E&&S.key.length===1&&le(S.key),["ArrowUp","ArrowDown","Home","End"].includes(S.key)){let I=j().filter(P=>!P.disabled).map(P=>P.ref.current);if(["ArrowUp","End"].includes(S.key)&&(I=I.slice().reverse()),["ArrowUp","ArrowDown"].includes(S.key)){const P=S.target,R=I.indexOf(P);I=I.slice(R+1)}setTimeout(()=>W(I)),S.preventDefault()}})})})})})})});bt.displayName=Ao;const Oo="SelectItemAlignedPosition",St=s.forwardRef((n,l)=>{const{__scopeSelect:e,onPlaced:t,...o}=n,r=G(ne,e),i=J(ne,e),[c,a]=s.useState(null),[m,d]=s.useState(null),g=O.useComposedRefs(l,A=>d(A)),p=xe(e),f=s.useRef(!1),h=s.useRef(!0),{viewport:C,selectedItem:v,selectedItemText:b,focusSelectedItem:x}=i,y=s.useCallback(()=>{if(r.trigger&&r.valueNode&&c&&m&&C&&v&&b){const A=r.trigger.getBoundingClientRect(),D=m.getBoundingClientRect(),Y=r.valueNode.getBoundingClientRect(),q=b.getBoundingClientRect();if(r.dir!=="rtl"){const P=q.left-D.left,R=Y.left-P,te=A.left-R,oe=A.width+te,ye=Math.max(oe,D.width),Ie=window.innerWidth-z,we=et.clamp(R,[z,Ie-ye]);c.style.minWidth=`${oe}px`,c.style.left=`${we}px`}else{const P=D.right-q.right,R=window.innerWidth-Y.right-P,te=window.innerWidth-A.right-R,oe=A.width+te,ye=Math.max(oe,D.width),Ie=window.innerWidth-z,we=et.clamp(R,[z,Ie-ye]);c.style.minWidth=`${oe}px`,c.style.right=`${we}px`}const k=p(),j=window.innerHeight-z*2,H=C.scrollHeight,L=window.getComputedStyle(m),K=parseInt(L.borderTopWidth,10),W=parseInt(L.paddingTop,10),B=parseInt(L.borderBottomWidth,10),X=parseInt(L.paddingBottom,10),U=K+W+H+X+B,de=Math.min(v.offsetHeight*5,U),le=window.getComputedStyle(C),fe=parseInt(le.paddingTop,10),Q=parseInt(le.paddingBottom,10),Z=A.top+A.height/2-z,ce=j-Z,ee=v.offsetHeight/2,S=v.offsetTop+ee,E=K+W+S,T=U-E;if(E<=Z){const P=v===k[k.length-1].ref.current;c.style.bottom="0px";const R=m.clientHeight-C.offsetTop-C.offsetHeight,te=Math.max(ce,ee+(P?Q:0)+R+B),oe=E+te;c.style.height=`${oe}px`}else{const P=v===k[0].ref.current;c.style.top="0px";const te=Math.max(Z,K+C.offsetTop+(P?fe:0)+ee)+T;c.style.height=`${te}px`,C.scrollTop=E-Z+C.offsetTop}c.style.margin=`${z}px 0`,c.style.minHeight=`${de}px`,c.style.maxHeight=`${j}px`,t?.(),requestAnimationFrame(()=>f.current=!0)}},[p,r.trigger,r.valueNode,c,m,C,v,b,r.dir,t]);F.useLayoutEffect(()=>y(),[y]);const[V,M]=s.useState();F.useLayoutEffect(()=>{m&&M(window.getComputedStyle(m).zIndex)},[m]);const N=s.useCallback(A=>{A&&h.current===!0&&(y(),x?.(),h.current=!1)},[y,x]);return u.jsx(jo,{scope:e,contentWrapper:c,shouldExpandOnScrollRef:f,onScrollButtonChange:N,children:u.jsx("div",{ref:a,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:V},children:u.jsx(_.Primitive.div,{...o,ref:g,style:{boxSizing:"border-box",maxHeight:"100%",...o.style}})})})});St.displayName=Oo;const Mo="SelectPopperPosition",Pe=s.forwardRef((n,l)=>{const{__scopeSelect:e,align:t="start",collisionPadding:o=z,...r}=n,i=Se(e);return u.jsx(se.Content,{...i,...r,ref:l,align:t,collisionPadding:o,style:{boxSizing:"border-box",...r.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Pe.displayName=Mo;const[jo,$e]=ue(ne,{}),Ve="SelectViewport",qe=s.forwardRef((n,l)=>{const{__scopeSelect:e,...t}=n,o=J(Ve,e),r=$e(Ve,e),i=O.useComposedRefs(l,o.onViewportChange),c=s.useRef(0);return u.jsxs(u.Fragment,{children:[u.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),u.jsx(be.Slot,{scope:e,children:u.jsx(_.Primitive.div,{"data-radix-select-viewport":"",role:"presentation",...t,ref:i,style:{position:"relative",flex:1,overflow:"auto",...t.style},onScroll:w.composeEventHandlers(t.onScroll,a=>{const m=a.currentTarget,{contentWrapper:d,shouldExpandOnScrollRef:g}=r;if(g?.current&&d){const p=Math.abs(c.current-m.scrollTop);if(p>0){const f=window.innerHeight-z*2,h=parseFloat(d.style.minHeight),C=parseFloat(d.style.height),v=Math.max(h,C);if(v<f){const b=v+p,x=Math.min(f,b),y=b-x;d.style.height=`${x}px`,d.style.bottom==="0px"&&(m.scrollTop=y>0?y:0,d.style.justifyContent="flex-end")}}}c.current=m.scrollTop})})})]})});qe.displayName=Ve;const yt="SelectGroup",[Do,Lo]=ue(yt),Ke=s.forwardRef((n,l)=>{const{__scopeSelect:e,...t}=n,o=re.useId();return u.jsx(Do,{scope:e,id:o,children:u.jsx(_.Primitive.div,{role:"group","aria-labelledby":o,...t,ref:l})})});Ke.displayName=yt;const It="SelectLabel",We=s.forwardRef((n,l)=>{const{__scopeSelect:e,...t}=n,o=Lo(It,e);return u.jsx(_.Primitive.div,{id:o.id,...t,ref:l})});We.displayName=It;const ge="SelectItem",[Fo,wt]=ue(ge),ze=s.forwardRef((n,l)=>{const{__scopeSelect:e,value:t,disabled:o=!1,textValue:r,...i}=n,c=G(ge,e),a=J(ge,e),m=typeof t=="string"?Array.isArray(c.value)?c.value.includes(t):c.value===t:t.every(x=>c.value?.includes(x)),d=Array.isArray(c.value)&&Array.isArray(t)&&t.some(x=>c.value?.includes(x)),[g,p]=s.useState(r??""),[f,h]=s.useState(!1),C=O.useComposedRefs(l,x=>a.itemRefCallback?.(x,t,o)),v=re.useId(),b=()=>{if(!o){let x=c.multi&&typeof t=="string"?[t]:t;d&&!m?c.onValueChange(x):Array.isArray(c.value)&&(x=Rt(t,c.value)),c.onValueChange(x),c.multi||c.onOpenChange(!1)}};if(!c.multi&&Array.isArray(t))throw new Error("You can only pass an array of values in multi selects");return u.jsx(Fo,{scope:e,value:t,disabled:o,textId:v,isSelected:m,isIntermediate:d,onItemTextChange:s.useCallback(x=>{p(y=>y||(x?.textContent??"").trim())},[]),children:u.jsx(be.ItemSlot,{scope:e,value:t,disabled:o,textValue:g,children:u.jsx(_.Primitive.div,{role:"option","aria-labelledby":v,"data-highlighted":f?"":void 0,"aria-selected":c.multi?void 0:m&&f,"aria-checked":c.multi?m:void 0,"data-state":m?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...i,ref:C,onFocus:w.composeEventHandlers(i.onFocus,()=>h(!0)),onBlur:w.composeEventHandlers(i.onBlur,()=>h(!1)),onPointerUp:w.composeEventHandlers(i.onPointerUp,b),onPointerMove:w.composeEventHandlers(i.onPointerMove,x=>{o?a.onItemLeave?.():x.currentTarget.focus({preventScroll:!0})}),onPointerLeave:w.composeEventHandlers(i.onPointerLeave,x=>{x.currentTarget===document.activeElement&&a.onItemLeave?.()}),onKeyDown:w.composeEventHandlers(i.onKeyDown,x=>{a.searchRef?.current!==""&&x.key===" "||(wo.includes(x.key)&&b(),x.key===" "&&x.preventDefault())})})})})});ze.displayName=ge;const pe="SelectItemText",Ge=s.forwardRef((n,l)=>{const{__scopeSelect:e,className:t,style:o,...r}=n,i=G(pe,e),c=J(pe,e),a=wt(pe,e),m=Ro(pe,e),[d,g]=s.useState(null),p=O.useComposedRefs(l,b=>g(b),a.onItemTextChange,b=>c.itemTextRefCallback?.(b,a.value,a.disabled)),f=d?.textContent,h=s.useMemo(()=>u.jsx("option",{value:a.value,disabled:a.disabled,children:f},Array.isArray(a.value)?a.value.join(";"):a.value),[a.disabled,a.value,f]),{onNativeOptionAdd:C,onNativeOptionRemove:v}=m;return F.useLayoutEffect(()=>(C(h),()=>v(h)),[C,v,h]),u.jsxs(u.Fragment,{children:[u.jsx(_.Primitive.span,{id:a.textId,...r,ref:p}),a.isSelected&&i.valueNode&&!i.valueNodeHasChildren?Ce.createPortal(r.children,i.valueNode):null]})});Ge.displayName=pe;const Tt="SelectItemIndicator",Ye=s.forwardRef((n,l)=>{const{__scopeSelect:e,children:t,...o}=n,r=wt(Tt,e);return typeof t=="function"?u.jsx(_.Primitive.span,{"aria-hidden":!0,...o,ref:l,children:t({isSelected:r.isSelected,isIntermediate:r.isIntermediate})}):r.isSelected?u.jsx(_.Primitive.span,{"aria-hidden":!0,...o,ref:l,children:t}):null});Ye.displayName=Tt;const Re="SelectScrollUpButton",Xe=s.forwardRef((n,l)=>{const e=J(Re,n.__scopeSelect),t=$e(Re,n.__scopeSelect),[o,r]=s.useState(!1),i=O.useComposedRefs(l,t.onScrollButtonChange);return F.useLayoutEffect(()=>{if(e.viewport&&e.isPositioned){const c=e.viewport,a=()=>{const m=c.scrollTop>0;r(m)};return a(),c.addEventListener("scroll",a),()=>c.removeEventListener("scroll",a)}},[e.viewport,e.isPositioned]),o?u.jsx(Et,{...n,ref:i,onAutoScroll:()=>{const{viewport:c,selectedItem:a}=e;c&&a&&(c.scrollTop-=a.offsetHeight)}}):null});Xe.displayName=Re;const _e="SelectScrollDownButton",Ze=s.forwardRef((n,l)=>{const e=J(_e,n.__scopeSelect),t=$e(_e,n.__scopeSelect),[o,r]=s.useState(!1),i=O.useComposedRefs(l,t.onScrollButtonChange);return F.useLayoutEffect(()=>{if(e.viewport&&e.isPositioned){const c=e.viewport,a=()=>{const m=c.scrollHeight-c.clientHeight,d=Math.ceil(c.scrollTop)<m;r(d)};return a(),c.addEventListener("scroll",a),()=>c.removeEventListener("scroll",a)}},[e.viewport,e.isPositioned]),o?u.jsx(Et,{...n,ref:i,onAutoScroll:()=>{const{viewport:c,selectedItem:a}=e;c&&a&&(c.scrollTop+=a.offsetHeight)}}):null});Ze.displayName=_e;const Et=s.forwardRef((n,l)=>{const{__scopeSelect:e,onAutoScroll:t,...o}=n,r=J("SelectScrollButton",e),i=s.useRef(null),c=xe(e),a=s.useCallback(()=>{i.current!==null&&(window.clearInterval(i.current),i.current=null)},[]);return s.useEffect(()=>()=>a(),[a]),F.useLayoutEffect(()=>{c().find(d=>d.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[c]),u.jsx(_.Primitive.div,{"aria-hidden":!0,...o,ref:l,style:{flexShrink:0,...o.style},onPointerMove:w.composeEventHandlers(o.onPointerMove,()=>{r.onItemLeave?.(),i.current===null&&(i.current=window.setInterval(t,50))}),onPointerLeave:w.composeEventHandlers(o.onPointerLeave,()=>{a()})})}),ko="SelectSeparator",Je=s.forwardRef((n,l)=>{const{__scopeSelect:e,...t}=n;return u.jsx(_.Primitive.div,{"aria-hidden":!0,...t,ref:l})});Je.displayName=ko;const Ne="SelectArrow",Qe=s.forwardRef((n,l)=>{const{__scopeSelect:e,...t}=n,o=Se(e),r=G(Ne,e),i=J(Ne,e);return r.open&&i.position==="popper"?u.jsx(se.Arrow,{...o,...t,ref:l}):null});Qe.displayName=Ne;const Ho="BubbleSelect",Bo=s.forwardRef((n,l)=>{const{value:e,...t}=n,o=s.useRef(null),r=O.useComposedRefs(l,o),i=Mt.usePrevious(e),c=G(Ho,void 0);s.useEffect(()=>{const m=o.current,d=window.HTMLSelectElement.prototype,p=Object.getOwnPropertyDescriptor(d,"value").set;if(i!==e&&p){const f=new Event("change",{bubbles:!0});p.call(m,e),m.dispatchEvent(f)}},[i,e]);let a=e;return c.multi&&!Array.isArray(e)&&(a=[]),u.jsx(jt.VisuallyHidden,{asChild:!0,children:u.jsx("select",{...t,multiple:c.multi?!0:void 0,ref:r,defaultValue:a})})});Bo.displayName="BubbleSelect";function Pt(n){const l=at.useCallbackRef(n),e=s.useRef(""),t=s.useRef(0),o=s.useCallback(i=>{const c=e.current+i;l(c),function a(m){e.current=m,window.clearTimeout(t.current),m!==""&&(t.current=window.setTimeout(()=>a(""),1e3))}(c)},[l]),r=s.useCallback(()=>{e.current="",window.clearTimeout(t.current)},[]);return s.useEffect(()=>()=>window.clearTimeout(t.current),[]),[e,o,r]}function Vt(n,l,e){const o=l.length>1&&Array.from(l).every(m=>m===l[0])?l[0]:l,r=e?n.indexOf(e):-1;let i=Uo(n,Math.max(r,0));o.length===1&&(i=i.filter(m=>m!==e));const a=i.find(m=>m.textValue.toLowerCase().startsWith(o.toLowerCase()));return a!==e?a:void 0}function Uo(n,l){return n.map((e,t)=>n[(l+t)%n.length])}const Rt=(n,l=[])=>{if(Array.isArray(n))return n.reduce((t,o)=>Rt(o,t),l);const e=l.indexOf(n);return e===-1?[...l,n]:[...l.slice(0,e),...l.slice(e+1)]},$o=Le,qo=Fe,Ko=ke,Wo=He,zo=Be,Go=Ue,Yo=qe,Xo=Ke,Zo=We,Jo=ze,Qo=Ge,en=Ye,tn=Xe,on=Ze,nn=Je,rn=Qe,sn=Object.freeze(Object.defineProperty({__proto__:null,Arrow:rn,Content:Go,Group:Xo,Icon:Wo,Item:Jo,ItemIndicator:en,ItemText:Qo,Label:Zo,Portal:zo,Root:$o,ScrollDownButton:on,ScrollUpButton:tn,Select:Le,SelectArrow:Qe,SelectContent:Ue,SelectGroup:Ke,SelectIcon:He,SelectItem:ze,SelectItemIndicator:Ye,SelectItemText:Ge,SelectLabel:We,SelectPortal:Be,SelectScrollDownButton:Ze,SelectScrollUpButton:Xe,SelectSeparator:Je,SelectTrigger:Fe,SelectValue:ke,SelectViewport:qe,Separator:nn,Trigger:qo,Value:Ko,Viewport:Yo,createSelectScope:Eo},Symbol.toStringTag,{value:"Module"}));Object.defineProperty(exports,"composeEventHandlers",{enumerable:!0,get:()=>w.composeEventHandlers});Object.defineProperty(exports,"useCallbackRef",{enumerable:!0,get:()=>at.useCallbackRef});exports.Combobox=yo;exports.Select=sn;exports.createCollection=ut;
