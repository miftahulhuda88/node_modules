import{createTranslatorFactory as r,ITSELF as t}from"@ucast/core";export*from"@ucast/core";import{MongoQueryParser as o,allParsingInstructions as n,defaultParsers as e}from"@ucast/mongo";export*from"@ucast/mongo";import{createJsInterpreter as f,allInterpreters as i,compare as u}from"@ucast/js";export*from"@ucast/js";function c(){return(c=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(r[n]=o[n])}return r}).apply(this,arguments)}function a(r){return r instanceof Date?r.getTime():r&&"function"==typeof r.toJSON?r.toJSON():r}var m=function(r,t){return u(a(r),a(t))};function p(n,e,i){var u=new o(n),a=f(e,c({compare:m},i));if(i&&i.forPrimitives){var p={field:t},s=u.parse;u.setParse((function(r){return s(r,p)}))}return r(u.parse,a)}var s=p(n,i),v=p(["$and","$or"].reduce((function(r,t){return r[t]=c({},r[t],{type:"field"}),r}),c({},n,{$nor:c({},n.$nor,{type:"field",parse:e.compound})})),i,{forPrimitives:!0}),d=s;export{p as createFactory,d as filter,s as guard,v as squire};
//# sourceMappingURL=index.js.map
