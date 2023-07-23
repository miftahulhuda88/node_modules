"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react/jsx-runtime"),o=require("react"),u=require("./MainNavContext.cjs"),r=require("../../Flex/Flex.cjs"),l=require("../../Box/Box.cjs"),x=require("../../Divider/Divider.cjs"),g=require("../../VisuallyHidden/VisuallyHidden.cjs"),p=require("../../Typography/Typography.cjs"),h=({label:s,children:a,horizontal:n=!1,spacing:d=2,...c})=>u.useMainNav()?e.jsxs(r.Flex,{direction:"column",alignItems:"stretch",gap:2,children:[e.jsxs(l.Box,{paddingTop:1,paddingBottom:1,background:"neutral0",hasRadius:!0,as:"span",children:[e.jsx(x.Divider,{}),e.jsx(g.VisuallyHidden,{children:e.jsx("span",{children:s})})]}),e.jsx(r.Flex,{as:"ul",gap:d,direction:n?"row":"column",alignItems:n?"center":"stretch",...c,children:o.Children.map(a,(i,t)=>e.jsx("li",{children:i},t))})]}):e.jsxs(r.Flex,{direction:"column",alignItems:"stretch",gap:2,children:[e.jsx(l.Box,{paddingTop:1,paddingBottom:1,background:"neutral0",paddingRight:3,paddingLeft:3,hasRadius:!0,as:"span",children:e.jsx(p.Typography,{variant:"sigma",textColor:"neutral600",children:s})}),e.jsx(r.Flex,{as:"ul",gap:d,direction:n?"row":"column",alignItems:n?"center":"stretch",...c,children:o.Children.map(a,(i,t)=>e.jsx("li",{children:i},t))})]});exports.NavSection=h;