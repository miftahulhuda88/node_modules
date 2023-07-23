"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime"),V=require("react"),M=require("@strapi/icons"),O=require("styled-components"),C=require("../Combobox/Combobox.cjs"),N=require("../DesignSystemProvider.cjs"),v=require("../hooks/useControllableState.cjs"),A=require("../hooks/useDateFormatter.cjs"),T=require("../hooks/useId.cjs"),B=require("../Field/Field.cjs"),L=require("../Flex/Flex.cjs"),$=require("../Field/FieldLabel.cjs"),E=require("../Field/FieldHint.cjs"),R=require("../Field/FieldError.cjs"),z=t=>t&&t.__esModule?t:{default:t};function H(t){if(t&&t.__esModule)return t;const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(t){for(const s in t)if(s!=="default"){const u=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,u.get?u:{enumerable:!0,get:()=>t[s]})}}return n.default=t,Object.freeze(n)}const m=H(V),Z=z(O),x=t=>!!t.match(/^[^a-zA-Z]*$/),F=({id:t,step:n=15,ariaLabel:s,selectButtonTitle:u,value:a,defaultValue:f,onChange:p,...d})=>{const _=N.useDesignSystem("TimePicker"),k=T.useId(t),[I,l]=m.useState(""),[g,h]=v.useControllableState({prop:a,defaultProp:f,onChange:p}),c=A.useDateFormatter(_.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),b=m.useMemo(()=>{const e=c.formatToParts(new Date),{value:r}=e.find(i=>i.type==="literal");return r},[c]),S=m.useMemo(()=>{const e=60/n;return[...Array(24).keys()].flatMap(r=>[...Array(e).keys()].map(i=>c.format(new Date(0,0,0,r,i*n))))},[n,c]),w=e=>{(!e||x(e))&&l(e)},y=e=>{const[r,i]=e.split(b);if(!r&&!i)return;const j=Number(r??"0"),q=Number(i??"0");if(!(j>23||q>59))return c.format(new Date(0,0,0,j,q))},D=e=>{const r=y(e.target.value);r?(l(r),h(r)):l(g)},P=e=>{if(typeof e<"u"){const r=y(e);h(r)}else h(e)};return m.useEffect(()=>{const e=typeof a>"u"?"":a;x(e)&&l(e)},[a,l]),o.jsx(C.ComboboxInput,{...d,value:g,onChange:P,isPrintableCharacter:x,allowCustomValue:!0,placeholder:`--${b}--`,autocomplete:"none",startIcon:o.jsx(G,{}),id:k,inputMode:"numeric",pattern:`\\d{2}${b}\\d{2}`,textValue:I,onTextValueChange:w,onBlur:D,children:S.map(e=>o.jsx(C.Option,{value:e,children:e},e))})},G=Z.default(M.Clock)`
  height: 1rem;
  width: 1rem;

  & > path {
    fill: ${({theme:t})=>t.colors.neutral500};
  }
`,J=({label:t,error:n,hint:s,id:u,required:a,labelAction:f,...p})=>{const d=T.useId(u);return o.jsx(B.Field,{hint:s,error:n,id:d,required:a,children:o.jsxs(L.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[o.jsx($.FieldLabel,{action:f,children:t}),o.jsx(F,{id:d,error:n,required:a,...p}),o.jsx(E.FieldHint,{}),o.jsx(R.FieldError,{})]})})};exports.TimePicker=J;exports.TimePickerInput=F;