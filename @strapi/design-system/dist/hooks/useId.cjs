"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react"),n=t=>t&&t.__esModule?t:{default:t},c=n(e),d=c.default["useId".toString()]||(()=>{});let r=0;const a=t=>{const[u,o]=e.useState(d());return e.useLayoutEffect(()=>{t||o(s=>s??String(r++))},[t]),t?.toString()??(u||"")};exports.useId=a;