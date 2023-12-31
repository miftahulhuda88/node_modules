"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime"),me=require("react"),M=require("@strapi/icons"),n=require("@strapi/ui-primitives"),Ce=require("styled-components"),$e=require("../helpers/strings.cjs"),j=require("../hooks/useControllableState.cjs"),I=require("../hooks/useId.cjs"),je=require("../hooks/useIntersection.cjs"),N=require("../themes/utils.cjs"),Ie=require("../Loader/Loader.cjs"),y=require("../Box/Box.cjs"),u=require("../Typography/Typography.cjs"),b=require("../Flex/Flex.cjs"),ye=require("../Field/Field.cjs"),we=require("../Field/FieldLabel.cjs"),qe=require("../Field/FieldHint.cjs"),Fe=require("../Field/FieldError.cjs"),Te=e=>e&&e.__esModule?e:{default:e};function ve(e){if(e&&e.__esModule)return e;const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const s in e)if(s!=="default"){const i=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(r,s,i.get?i:{enumerable:!0,get:()=>e[s]})}}return r.default=e,Object.freeze(r)}const x=ve(me),a=Te(Ce),H=({allowCustomValue:e,autocomplete:r,children:s,className:i,clearLabel:d="clear",creatable:l=!1,createMessage:f=p=>`Create "${p}"`,defaultFilterValue:h,defaultTextValue:w,defaultOpen:W=!1,open:U,onOpenChange:A,disabled:m=!1,error:q,filterValue:G,hasMoreItems:J=!1,id:F,isPrintableCharacter:K,loading:C=!1,loadingMessage:Q="Loading content...",noOptionsMessage:X=()=>"No results found",onChange:T,onClear:$,onCreateOption:v,onFilterValueChange:Y,onInputChange:R,onTextValueChange:Z,onLoadMore:k,placeholder:ee="Select or enter a value",required:oe=!1,size:re="M",startIcon:O,textValue:te,value:V,...ne})=>{const[p,se]=j.useControllableState({prop:U,defaultProp:W,onChange:A}),[c,S]=j.useControllableState({prop:te,defaultProp:e&&!w?V:w,onChange:Z}),[le,B]=j.useControllableState({prop:G,defaultProp:h,onChange:Y}),P=x.useRef(null),_=x.useRef(null),ie=x.useRef(null),ae=t=>{$&&!m&&(S(""),B(""),$(t),_.current.focus())},de=t=>{se(t)},ce=t=>{S(t)},ue=t=>{B(t)},he=t=>{R&&R(t)},pe=t=>{T&&T(t)},be=t=>{k&&J&&!C&&k(t)},z=()=>{v&&c&&v(c)},E=I.useId(F),xe=I.useId(),D=`intersection-${$e.stripReactIdOfColon(xe)}`;je.useIntersection(P,be,{selectorToWatch:`#${D}`,skipWhen:!p});const ge=`${E}-hint`,fe=`${E}-error`;return o.jsxs(n.Combobox.Root,{autocomplete:r||(l?"list":"both"),onOpenChange:de,open:p,onTextValueChange:ce,textValue:c,allowCustomValue:l||e,disabled:m,required:oe,value:V,onValueChange:pe,filterValue:le,onFilterValueChange:ue,isPrintableCharacter:K,children:[o.jsxs(Oe,{$hasError:!!q,$size:re,className:i,children:[o.jsxs(b.Flex,{flex:"1",as:"span",gap:3,children:[O?o.jsx(y.Box,{as:"span","aria-hidden":!0,children:O}):null,o.jsx(Ve,{placeholder:ee,id:F,"aria-invalid":!!q,"aria-describedby":`${ge} ${fe}`,onChange:he,ref:_,...ne})]}),o.jsxs(b.Flex,{as:"span",gap:3,children:[c&&$?o.jsx(ke,{as:"button",hasRadius:!0,background:"transparent",type:"button",onClick:ae,"aria-disabled":m,"aria-label":d,title:d,ref:ie,children:o.jsx(M.Cross,{})}):null,o.jsx(Se,{children:o.jsx(M.CarretDown,{})})]})]}),o.jsx(n.Combobox.Portal,{children:o.jsx(Be,{sideOffset:4,children:o.jsxs(Pe,{ref:P,children:[s,l?o.jsx(n.Combobox.CreateItem,{onPointerUp:z,onClick:z,asChild:!0,children:o.jsx(g,{children:o.jsx(u.Typography,{children:f(c??"")})})}):null,!l&&!C?o.jsx(n.Combobox.NoValueFound,{asChild:!0,children:o.jsx(g,{$hasHover:!1,children:o.jsx(u.Typography,{children:X(c??"")})})}):null,C?o.jsx(b.Flex,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:o.jsx(Ie.Loader,{small:!0,children:Q})}):null,o.jsx(y.Box,{id:D,width:"100%",height:"1px"})]})})})]})},L=({error:e,hint:r,id:s,label:i,labelAction:d,required:l=!1,...f})=>{const h=I.useId(s);return o.jsx(ye.Field,{hint:r,error:e,id:h,required:l,children:o.jsxs(b.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[o.jsx(we.FieldLabel,{action:d,children:i}),o.jsx(H,{id:h,error:e,required:l,...f}),o.jsx(qe.FieldHint,{}),o.jsx(Fe.FieldError,{})]})})},Re=e=>o.jsx(L,{...e,creatable:!0}),ke=a.default(y.Box)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,Oe=a.default(n.Combobox.Trigger)`
  position: relative;
  border: 1px solid ${({theme:e,$hasError:r})=>r?e.colors.danger600:e.colors.neutral200};
  padding-right: ${({theme:e})=>e.spaces[3]};
  padding-left: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spaces[4]};
  min-height: ${({theme:e,$size:r})=>N.getThemeSize("input")({theme:e,size:r})};

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:r})=>N.inputFocusStyle()({theme:e,hasError:r})};
`,Ve=a.default(n.Combobox.TextInput)`
  width: 100%;
  font-size: ${14/16}rem;
  color: ${({theme:e})=>e.colors.neutral800};
  padding: 0;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Se=a.default(n.Combobox.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Be=a.default(n.Combobox.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:e})=>e.zIndices[1]};
`,Pe=a.default(n.Combobox.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,_e=x.forwardRef(({children:e,value:r,disabled:s,textValue:i,...d},l)=>o.jsx(n.Combobox.ComboboxItem,{asChild:!0,value:r,disabled:s,textValue:i,children:o.jsx(g,{ref:l,...d,children:o.jsx(n.Combobox.ItemText,{asChild:!0,children:o.jsx(u.Typography,{children:e})})})})),g=a.default.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  user-select: none;

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.primary100};

    ${u.Typography} {
      color: ${({theme:e})=>e.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:e,$hasHover:r=!0})=>r?e.colors.primary100:e.colors.neutral0};
  }

  &[data-highlighted] {
    ${u.Typography} {
      color: ${({theme:e})=>e.colors.primary600};
      font-weight: bold;
    }
  }
`;exports.Combobox=L;exports.ComboboxInput=H;exports.CreatableCombobox=Re;exports.Option=_e;exports.OptionBox=g;
