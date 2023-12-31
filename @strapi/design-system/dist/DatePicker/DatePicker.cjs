"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("react/jsx-runtime"),ye=require("react"),$=require("@floating-ui/react-dom"),D=require("@internationalized/date"),xe=require("@radix-ui/react-focus-guards"),Ce=require("@radix-ui/react-focus-scope"),oe=require("@strapi/icons"),q=require("@strapi/ui-primitives"),be=require("react-dom"),we=require("react-remove-scroll"),ke=require("styled-components"),Te=require("../DesignSystemProvider.cjs"),Pe=require("../DismissibleLayer/index.cjs"),Se=require("../helpers/context.cjs"),Ee=require("../helpers/deprecations.cjs"),J=require("../hooks/useComposeRefs.cjs"),je=require("../hooks/useControllableState.cjs"),F=require("../hooks/useDateFormatter.cjs"),se=require("../hooks/useId.cjs"),Y=require("../Select/SingleSelect.cjs"),Ie=require("../Portal/Portal.cjs"),B=require("../Flex/Flex.cjs"),ne=require("../themes/utils.cjs"),U=require("../Box/Box.cjs"),W=require("../Typography/Typography.cjs"),Re=require("../Field/Field.cjs"),Fe=require("../Field/FieldLabel.cjs"),ve=require("../Field/FieldHint.cjs"),Ae=require("../Field/FieldError.cjs"),Me=e=>e&&e.__esModule?e:{default:e};function qe(e){if(e&&e.__esModule)return e;const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const t=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,t.get?t:{enumerable:!0,get:()=>e[n]})}}return r.default=e,Object.freeze(r)}const c=qe(ye),j=Me(ke),_e=200,re=15,[Oe,_]=Se.createContext("DatePicker"),le=c.forwardRef(({calendarLabel:e,className:r,initialDate:n,locale:t,maxDate:o,minDate:i,monthSelectLabel:g="Month",onChange:d,selectedDate:l,yearSelectLabel:b="Year",error:k,id:x,disabled:f=!1,placeholder:T,required:w=!1,onClear:S,clearLabel:E="Clear",size:u,ariaLabel:p,selectedDateLabel:s,...h},m)=>{const P=D.getLocalTimeZone(),v=Te.useDesignSystem("DatePicker"),A=t??v.locale,M=F.useDateFormatter(A,{day:"2-digit",month:"2-digit",year:"numeric"}),[O,H]=c.useState(!1),[Z,C]=c.useState(null),[I,G]=c.useState(null),[ce,ue]=c.useState(null),[V,L]=c.useState(),[N,Q]=je.useControllableState({defaultProp:n?R(n):void 0,prop:l?R(l):void 0,onChange(y){d&&d(y?.toDate(P))}}),[ee,te]=c.useMemo(()=>{const y=n?R(n):D.today("UTC"),z=i?R(i):y.set({day:1,month:1,year:y.year-_e});let X=o?R(o):y.set({day:31,month:12,year:y.year+re});return X.compare(z)<0&&(X=z.set({day:31,month:12,year:z.year+re})),[z,X]},[i,o,n]),[de,K]=c.useState(Le({currentValue:N,minDate:ee,maxDate:te})),fe=se.useId(),he=c.useRef(null),me=y=>{S&&!f&&(L(""),Q(void 0),S(y),I?.focus())},pe=c.useCallback(y=>{y&&N&&K(N),H(y)},[N]);c.useLayoutEffect(()=>{if(l){const y=R(l);L(M.format(y.toDate(P))),K(y)}else L("")},[l,M,P]),c.useLayoutEffect(()=>{if(n&&V===void 0){const y=R(n);L(M.format(y.toDate(P)))}},[n,V,M,P]);const ge=`${x}-hint`,De=`${x}-error`;return a.jsxs(Oe,{calendarDate:de,content:ce,contentId:fe,disabled:f,locale:A,minDate:ee,maxDate:te,open:O,onCalendarDateChange:K,onContentChange:ue,onOpenChange:pe,onTextInputChange:G,onTextValueChange:L,onTriggerChange:C,onValueChange:Q,required:w,textInput:I,textValue:V,timeZone:P,trigger:Z,value:N,children:[a.jsxs($e,{className:r,size:u,hasError:!!k,children:[a.jsx(Ye,{"aria-hidden":!0}),a.jsx(Ue,{ref:m,placeholder:T,"aria-describedby":`${ge} ${De}`,id:x,...h}),V&&S?a.jsx(ze,{as:"button",hasRadius:!0,background:"transparent",type:"button",onClick:me,"aria-disabled":f,"aria-label":E,title:E,ref:he,children:a.jsx(oe.Cross,{})}):null]}),a.jsx(Ie.Portal,{children:a.jsx(Ge,{label:e,children:a.jsx(et,{monthSelectLabel:g,yearSelectLabel:b})})})]})}),ae=e=>!!e.match(/^[^a-zA-Z]*$/),Le=({currentValue:e,minDate:r,maxDate:n})=>{const t=D.today("UTC");return e||(D.minDate(r,t)===r&&D.maxDate(n,t)===n?t:D.minDate(r,t)===t?r:D.maxDate(n,t)===t?n:t)},Ne="DatePickerTrigger",$e=c.forwardRef(({hasError:e,size:r="M",...n},t)=>{const o=_(Ne),i=J.useComposedRefs(t,d=>o.onTriggerChange(d)),g=()=>{o.disabled||o.onOpenChange(!0)};return a.jsx(Ce.FocusScope,{asChild:!0,trapped:o.open,onMountAutoFocus:d=>{d.preventDefault()},onUnmountAutoFocus:d=>{document.getSelection()?.empty(),d.preventDefault()},children:a.jsx(Ve,{ref:i,$hasError:e,$size:r,...n,paddingLeft:3,paddingRight:3,hasRadius:!0,gap:3,overflow:"hidden",background:o.disabled?"neutral150":"neutral0",onClick:q.composeEventHandlers(n.onClick,()=>{o.textInput?.focus()}),onPointerDown:q.composeEventHandlers(n.onPointerDown,d=>{const l=d.target;l.hasPointerCapture(d.pointerId)&&l.releasePointerCapture(d.pointerId),(l.closest("button")??l.closest("div"))===d.currentTarget&&d.button===0&&d.ctrlKey===!1&&(g(),o.textInput?.focus())})})})}),Ve=j.default(B.Flex)`
  border: 1px solid ${({theme:e,$hasError:r})=>r?e.colors.danger600:e.colors.neutral200};
  min-height: ${({theme:e,$size:r})=>ne.getThemeSize("input")({theme:e,size:r})};

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:r})=>ne.inputFocusStyle()({theme:e,hasError:r})};
`,ze=j.default(U.Box)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,Ye=j.default(oe.Calendar)`
  & > path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Be="DatePickerTextInput",Ue=c.forwardRef(({placeholder:e,...r},n)=>{const t=_(Be),{onTextValueChange:o,textValue:i,onTextInputChange:g,onOpenChange:d,disabled:l,locale:b}=t,k=J.useComposedRefs(n,u=>g(u)),x=()=>{l||d(!0)},f=F.useDateFormatter(b,{year:"numeric",month:"2-digit",day:"2-digit"}),[T,w,S]=c.useMemo(()=>{const u=f.formatToParts(new Date),p=u.filter(m=>m.type==="year"||m.type==="month"||m.type==="day"),s=p.map(m=>{switch(m.type){case"day":return"DD";case"month":return"MM";case"year":return"YYYY";default:return""}}),h=u.find(m=>m.type==="literal")?.value??"";return[s,h,p]},[f]),E=T.map(u=>`\\d${u.length}`).join(w);return a.jsx(He,{role:"combobox",type:"text",inputMode:"numeric",ref:k,"aria-autocomplete":"none","aria-controls":t.contentId,"aria-disabled":t.disabled,"aria-expanded":t.open,"aria-required":t.required,"aria-haspopup":"dialog","data-state":t.open?"open":"closed",disabled:l,"data-disabled":l?"":void 0,pattern:E,placeholder:e??T.join(w),...r,value:i??"",onBlur:q.composeEventHandlers(r.onBlur,()=>{if(!t.textValue){t.onValueChange(void 0);return}t.onTextValueChange(f.format(t.calendarDate.toDate(t.timeZone))),t.onValueChange(t.calendarDate)}),onChange:q.composeEventHandlers(r.onChange,u=>{if(ae(u.target.value)){const p=u.target.value.split(w),[s,h,m]=S.map((C,I)=>{const G=p[I];return{...C,value:G}}).sort((C,I)=>C.type==="year"?1:I.type==="year"?-1:C.type==="month"?1:I.type==="month"?-1:0).map(C=>C.value),P=t.calendarDate.year;let v=t.calendarDate.year;if(m){let C=m.length===1?`0${m}`:m;v=m.length<3?Number(`${P}`.slice(0,4-C.length)+C):Number(C)}m&&m.length<3&&v>t.maxDate.year&&(v-=100);const A=t.calendarDate.set({year:v}),M=A.calendar.getMonthsInYear(A),O=A.set({month:h&&Number(h)<=M?Number(h):void 0}),H=O.calendar.getDaysInMonth(O),Z=O.set({day:s&&Number(s)<=H?Number(s):void 0});t.onCalendarDateChange(We(Z,t.minDate,t.maxDate)),t.onTextValueChange(u.target.value)}}),onKeyDown:q.composeEventHandlers(r.onKeyDown,u=>{if(!t.open&&(ae(u.key)||["ArrowDown","Backspace"].includes(u.key)))x();else if(["Tab"].includes(u.key)&&t.open)u.preventDefault();else if(["Escape"].includes(u.key))t.open?t.onOpenChange(!1):(t.onValueChange(void 0),t.onTextValueChange("")),u.preventDefault();else if(t.open&&["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(u.key))switch(u.preventDefault(),u.key){case"ArrowDown":{const p=t.calendarDate.add({weeks:1});if(t.maxDate&&p.compare(t.maxDate)>0)return;t.onCalendarDateChange(p);return}case"ArrowRight":{const p=t.calendarDate.add({days:1});if(t.maxDate&&p.compare(t.maxDate)>0)return;t.onCalendarDateChange(p);return}case"ArrowUp":{const p=t.calendarDate.subtract({weeks:1});if(t.minDate&&p.compare(t.minDate)<0)return;t.onCalendarDateChange(p);return}case"ArrowLeft":{const p=t.calendarDate.subtract({days:1});if(t.minDate&&p.compare(t.minDate)<0)return;t.onCalendarDateChange(p)}}else t.open&&["Enter"].includes(u.key)&&(u.preventDefault(),o(f.format(t.calendarDate.toDate(t.timeZone))),t.onValueChange(t.calendarDate),t.onOpenChange(!1))})})});function We(e,r,n){return r&&(e=D.maxDate(e,r)),n&&(e=D.minDate(e,n)),e}const He=j.default.input`
  width: 100%;
  font-size: ${14/16}rem;
  color: ${({theme:e})=>e.colors.neutral800};
  height: 100%;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Ze="DatePickerContent",Ge=c.forwardRef((e,r)=>{const[n,t]=c.useState(),o=_(Ze);if(c.useLayoutEffect(()=>{t(new DocumentFragment)},[]),!o.open){const i=n;return i?be.createPortal(a.jsx("div",{children:e.children}),i):null}return a.jsx(Xe,{...e,ref:r})}),Ke="DatePickerContent",Xe=c.forwardRef((e,r)=>{const{label:n="Choose date",...t}=e,{onOpenChange:o,...i}=_(Ke),{x:g,y:d,reference:l,floating:b,strategy:k}=$.useFloating({strategy:"fixed",placement:"bottom-start",middleware:[$.offset({mainAxis:4}),$.shift(),$.flip()],whileElementsMounted:$.autoUpdate});c.useEffect(()=>{const f=()=>{o(!1)};return window.addEventListener("blur",f),window.addEventListener("resize",f),()=>{window.removeEventListener("blur",f),window.removeEventListener("resize",f)}},[o]),c.useLayoutEffect(()=>{l(i.trigger)},[l,i.trigger]);const x=J.useComposedRefs(r,f=>i.onContentChange(f),b);return xe.useFocusGuards(),a.jsx(we.RemoveScroll,{allowPinchZoom:!0,children:a.jsx(Pe.DismissibleLayer,{asChild:!0,onFocusOutside:f=>{f.preventDefault()},onDismiss:()=>{o(!1)},children:a.jsx(Je,{ref:x,"data-state":i.open?"open":"closed",onContextMenu:f=>f.preventDefault(),id:i.contentId,role:"dialog","aria-modal":"true","aria-label":n,style:{left:g,top:d,position:k},hasRadius:!0,background:"neutral0",padding:1,...t})})})}),Je=j.default(U.Box)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices[0]};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Qe="DatePickerCalendar",et=c.forwardRef(({monthSelectLabel:e,yearSelectLabel:r,...n},t)=>{const{locale:o,timeZone:i,minDate:g,maxDate:d,calendarDate:l,onCalendarDateChange:b}=_(Qe),k=D.startOfMonth(l),x=c.useMemo(()=>{const s=g.year,h=d.year;return[...Array(h-s+1).keys()].map(m=>(s+m).toString())},[g,d]),f=F.useDateFormatter(o,{month:"long"}),T=c.useMemo(()=>[...Array(l.calendar.getMonthsInYear(l)).keys()].map(s=>f.format(l.set({month:s+1}).toDate(i))),[l,f,i]),w=F.useDateFormatter(o,{weekday:"short"}),S=c.useMemo(()=>{let s=D.startOfWeek(D.today(i),o);return[...new Array(7).keys()].map(h=>{let P=s.add({days:h}).toDate(i);return w.format(P)})},[i,o,w]),E=s=>{if(typeof s=="number")return;const h=l.set({month:T.indexOf(s)+1});b(h)},u=s=>{if(typeof s=="number")return;const h=l.set({year:parseInt(s,10)});b(h)},p=tt(k,o);return a.jsxs(B.Flex,{ref:t,direction:"column",alignItems:"stretch",padding:4,...n,children:[a.jsxs(nt,{justifyContent:"flex-start",paddingBottom:4,paddingLeft:2,paddingRight:2,gap:2,children:[a.jsx(Y.SingleSelectInput,{label:e,size:"S",value:T[l.month-1],onChange:E,children:T.map(s=>a.jsx(Y.SingleSelectOption,{value:s,children:s},s))}),a.jsx(Y.SingleSelectInput,{size:"S",value:l.year.toString(),label:r,onChange:u,children:x.map(s=>a.jsx(Y.SingleSelectOption,{value:s,children:s},s))})]}),a.jsxs("table",{role:"grid",children:[a.jsx("thead",{"aria-hidden":!0,children:a.jsx("tr",{"aria-rowindex":0,children:S.map((s,h)=>a.jsx(rt,{"aria-colindex":h,children:s},s))})}),a.jsx("tbody",{children:[...new Array(6).keys()].map(s=>a.jsx("tr",{"aria-rowindex":s+2,children:p(s).map((h,m)=>h?a.jsx(st,{"aria-colindex":m+1,date:h,startDate:k},h.toString()):a.jsx(ie,{"aria-colindex":m+1}))},s))})]})]})}),tt=(e,r)=>n=>{let t=e.add({weeks:n}),o=[];t=D.startOfWeek(t,r);let i=D.getDayOfWeek(t,r);for(let g=0;g<i;g++)o.push(null);for(;o.length<7;){o.push(t);let g=t.add({days:1});if(D.isSameDay(t,g))break;t=g}for(;o.length<7;)o.push(null);return o},nt=j.default(B.Flex)`
  div[role='combobox'] {
    border: 1px solid transparent;
    background: transparent;
    font-weight: ${e=>e.theme.fontWeights.bold};

    ${W.Typography} {
      color: ${({theme:e})=>e.colors.neutral800};
    }

    svg {
      > g,
      path {
        fill: ${({theme:e})=>e.colors.neutral500};
      }
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};
    }
  }
`,rt=c.forwardRef(({children:e,...r},n)=>a.jsx(at,{as:"th",role:"gridcell",ref:n,...r,height:`${24/16}rem`,width:`${32/16}rem`,children:a.jsx(W.Typography,{variant:"pi",fontWeight:"bold",color:"neutral800",children:e.slice(0,2)})})),at=j.default(U.Box)`
  border-radius: ${({theme:e})=>e.borderRadius};
  text-transform: capitalize;
`,ot="DatePickerCalendarCell",st=c.forwardRef(({date:e,startDate:r,...n},t)=>{const{timeZone:o,locale:i,calendarDate:g,onValueChange:d,onOpenChange:l,onTextValueChange:b,onCalendarDateChange:k}=_(ot),x=D.isSameDay(g,e),f=F.useDateFormatter(i,{weekday:"long",day:"numeric",month:"long",year:"numeric"}),T=c.useMemo(()=>f.format(e.toDate(o)),[f,e,o]),w=F.useDateFormatter(i,{day:"numeric",calendar:e.calendar.identifier}),S=c.useMemo(()=>w.formatToParts(e.toDate(o)).find(h=>h.type==="day").value,[w,e,o]),E=F.useDateFormatter(i,{day:"2-digit",month:"2-digit",year:"numeric"}),u=D.endOfMonth(r),p=e.compare(r)<0||e.compare(u)>0;let s="neutral900";return x?s="primary600":p&&(s="neutral600"),a.jsx(ie,{as:"td",role:"gridcell",ref:t,"aria-selected":x,...n,hasRadius:!0,"aria-label":T,tabIndex:x?0:-1,background:x?"primary100":"neutral0",cursor:"pointer",onPointerDown:q.composeEventHandlers(n.onPointerDown,h=>{h.preventDefault(),k(e),d(e),b(E.format(e.toDate(o))),l(!1)}),children:a.jsx(W.Typography,{variant:"pi",textColor:s,children:S})})}),ie=j.default(U.Box)`
  text-align: center;
  padding: ${7/16}rem;
  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px !important;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};

    & > ${W.Typography} {
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`,lt=c.forwardRef((e,r)=>{const{error:n,hint:t,id:o,required:i,label:g,...d}=e,l=se.useId(o);return a.jsx(Re.Field,{error:n,hint:t,required:i,ref:r,id:l,children:a.jsxs(B.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[a.jsx(Fe.FieldLabel,{children:g}),a.jsx(le,{id:l,error:n,required:i,...d}),a.jsx(ve.FieldHint,{}),a.jsx(Ae.FieldError,{})]})})}),it=Ee.once(console.warn),R=e=>{if(typeof e=="string"){it("It looks like you're passing a string as representation of a Date to the DatePicker. This is deprecated, look to passing a Date instead.");const t=Date.parse(e);Number.isNaN(t)?e=new Date:e=new Date(t)}const r=e.toISOString(),n=D.parseAbsolute(r,"UTC");return D.toCalendarDate(n)},ct=lt;exports.DatePicker=ct;exports.DatePickerInput=le;
