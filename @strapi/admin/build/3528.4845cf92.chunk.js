(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[3528],{53528:function(R,m,c){"use strict";c.r(m),c.d(m,{ROUTES_EE:function(){return t}});var u=c(32735),a=c(19565),l=c(49189),d=c.n(l),h=c(67879),n=c(53038),r=c(8997);const g=()=>{const{params:{authResponse:o}}=(0,n.$B)("/auth/login/:authResponse"),{formatMessage:e}=(0,h.Z)(),{push:f}=(0,n.k6)(),p=(0,u.useRef)(e);let i=(0,u.useCallback)(()=>{f(`/auth/oops?info=${encodeURIComponent(p.current({id:"Auth.form.button.login.providers.error",defaultMessage:"We cannot connect you through the selected provider."}))}`)},[f]);const{get:s}=(0,a.kY)(),v=(0,u.useCallback)(async()=>{try{const E=d().get("jwtToken");if(a.I8.clearAppStorage(),E){a.I8.setToken(E,!0);const I=(0,r.IF)("users/me"),{data:{data:A}}=await s(I);a.I8.setUserInfo(A,!0),d().remove("jwtToken"),f("/auth/login")}}catch{i()}},[s,f,i]);return(0,u.useEffect)(()=>{o==="error"&&i(),o==="success"&&v()},[o,v,i]),u.createElement(a.dO,null)};var C=null;const t=[{Component:()=>({default:g}),to:"/auth/login/:authResponse",exact:!0}]},49189:function(R,m,c){var u,a;/*!
* JavaScript Cookie v2.2.1
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/(function(l){var d;if(u=l,a=typeof u=="function"?u.call(m,c,m,R):u,a!==void 0&&(R.exports=a),d=!0,R.exports=l(),d=!0,!d){var h=window.Cookies,n=window.Cookies=l();n.noConflict=function(){return window.Cookies=h,n}}})(function(){function l(){for(var n=0,r={};n<arguments.length;n++){var g=arguments[n];for(var C in g)r[C]=g[C]}return r}function d(n){return n.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function h(n){function r(){}function g(t,o,e){if(!(typeof document>"u")){e=l({path:"/"},r.defaults,e),typeof e.expires=="number"&&(e.expires=new Date(new Date*1+e.expires*864e5)),e.expires=e.expires?e.expires.toUTCString():"";try{var f=JSON.stringify(o);/^[\{\[]/.test(f)&&(o=f)}catch{}o=n.write?n.write(o,t):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var p="";for(var i in e)e[i]&&(p+="; "+i,e[i]!==!0&&(p+="="+e[i].split(";")[0]));return document.cookie=t+"="+o+p}}function C(t,o){if(!(typeof document>"u")){for(var e={},f=document.cookie?document.cookie.split("; "):[],p=0;p<f.length;p++){var i=f[p].split("="),s=i.slice(1).join("=");!o&&s.charAt(0)==='"'&&(s=s.slice(1,-1));try{var v=d(i[0]);if(s=(n.read||n)(s,v)||d(s),o)try{s=JSON.parse(s)}catch{}if(e[v]=s,t===v)break}catch{}}return t?e[t]:e}}return r.set=g,r.get=function(t){return C(t,!1)},r.getJSON=function(t){return C(t,!0)},r.remove=function(t,o){g(t,"",l(o,{expires:-1}))},r.defaults={},r.withConverter=h,r}return h(function(){})})}}]);
