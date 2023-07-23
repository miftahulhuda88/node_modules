"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),N=require("react"),o=require("./SelectParts.cjs"),E=require("../helpers/strings.cjs"),b=require("../hooks/useId.cjs"),V=require("../hooks/useIntersection.cjs"),q=require("../Box/Box.cjs"),H=require("../Typography/Typography.cjs"),W=require("../Field/Field.cjs"),z=require("../Flex/Flex.cjs"),D=require("../Field/FieldLabel.cjs"),A=require("../Field/FieldHint.cjs"),G=require("../Field/FieldError.cjs");function J(e){if(e&&e.__esModule)return e;const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:()=>e[r]})}}return n.default=e,Object.freeze(n)}const h=J(N),K=({error:e,hint:n,id:r,label:i,labelAction:s,required:f,selectButtonTitle:x,...d})=>{const c=b.useId(r),u=h.useRef(null),g=()=>{u.current.focus()};return t.jsx(W.Field,{hint:n,error:e,id:c,required:f,children:t.jsxs(z.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[t.jsx(D.FieldLabel,{onClick:g,action:s,children:i}),t.jsx(O,{label:i,id:c,triggerRef:u,required:f,...d}),t.jsx(A.FieldHint,{}),t.jsx(G.FieldError,{})]})})},O=({id:e,children:n,clearLabel:r="Clear",customizeContent:i,disabled:s,error:f,label:x,onChange:d,onClear:c,onReachEnd:u,placeholder:g,required:m,selectButtonTitle:U,startIcon:y,size:F="M",value:p,triggerRef:R,...T})=>{const[B,j]=h.useState(),[C,_]=h.useState(!1),$=l=>{_(l)},v=l=>{c&&c(l),d||j("")},w=`${e}-hint`,P=`${e}-error`,k=l=>{d?d(typeof p=="number"?Number(l):l):j(l)},S=h.useRef(null),L=b.useId(),I=`intersection-${E.stripReactIdOfColon(L)}`,M=l=>{u&&u(l)};V.useIntersection(S,M,{selectorToWatch:`#${I}`,skipWhen:!C});const a=(typeof p<"u"&&p!==null?p.toString():B)??"";return t.jsxs(o.Root,{onOpenChange:$,disabled:s,required:m,onValueChange:k,value:a,...T,children:[t.jsx(o.Trigger,{ref:R,"aria-label":x,"aria-describedby":e?`${w} ${P}`:void 0,id:e,startIcon:y,size:F,hasError:!!f,disabled:s,clearLabel:r,onClear:a&&c?v:void 0,children:t.jsx(o.Value,{placeholder:g,textColor:a?"neutral800":"neutral600",children:a&&i?i(a):void 0})}),t.jsx(o.Portal,{children:t.jsx(o.Content,{position:"popper",sideOffset:4,children:t.jsxs(o.Viewport,{ref:S,children:[n,t.jsx(q.Box,{id:I,width:"100%",height:"1px"})]})})})]})},Q=h.forwardRef(({value:e,startIcon:n,children:r,...i},s)=>t.jsxs(o.Item,{ref:s,value:e.toString(),...i,children:[n&&t.jsx(q.Box,{as:"span","aria-hidden":!0,children:n}),t.jsx(H.Typography,{textColor:"neutral800",children:t.jsx(o.ItemText,{children:r})})]}));exports.SingleSelect=K;exports.SingleSelectInput=O;exports.SingleSelectOption=Q;