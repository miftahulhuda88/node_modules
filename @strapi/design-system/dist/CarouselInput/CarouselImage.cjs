"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),l=require("react"),u=require("styled-components"),n=require("../Typography/utils.cjs"),a=require("../Box/Box.cjs"),c=require("../Tooltip/Tooltip.cjs"),d=e=>e&&e.__esModule?e:{default:e},g=d(u),r=g.default(a.Box)`
  ${n.ellipsisStyle({ellipsis:!0})}
`,m=e=>{const[s,o]=l.useState(!1),i=()=>{o(!0)};return s?t.jsx(c.Tooltip,{description:e.alt??"",children:t.jsx(r,{as:"img",height:"100%",maxWidth:"100%",...e})}):t.jsx(r,{as:"img",height:"100%",maxWidth:"100%",...e,onError:i})};exports.CarouselImage=m;