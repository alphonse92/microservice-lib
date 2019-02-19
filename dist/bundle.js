!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(global,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t){e.exports=require("winston")},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("redis")},function(e,t){e.exports=require("util")},function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"REDIS",function(){return i});var o=r(2),s=r.n(o),u=r(3),c=r.n(u);const i=function(e){return function(e){const t=s.a.createClient(e.port,e.url,e.opt),r={get:null,set:null};return Object.keys(r).reduce((e,r)=>Object.assign(e,{[r]:c.a.promisify(t[r].bind(t))}),r)}(e)};class a extends Error{constructor(){super(STR_CACHE_SYSTEM_NOT_FOUND),this.status=500}}const f={Types:Object.keys(n),Factory:{get(e,t){if(!n[e])throw new a;return n[e](t)}}},l="Internal Error",d="Gateway Error",p="Invalid chromium protocol",m="Not allowed to render",g="Resource not found",b="Acces denied to microservice";class E extends Error{constructor(e){super(e||l),this.status=500}}const O=500,y=401,v={SERVER_ERROR:O,GATEWAY_ERROR:502,NOT_FOUND:404,FORBIDDEN:403,UNAUTHORIZED:y,SUCCESSFULL:200,SERVICE_UNAVAILABLE:503};class x extends E{constructor(e){super(d),this.status=v.GATEWAY_ERROR,this.data=e}}class R extends E{constructor(e){super(),this.status=v.UNAUTHORIZED,this.message=b,this.data={name:e}}}class h extends E{constructor(e){super(),this.status=v.NOT_FOUND,this.message=g,this.data={name:e}}}class j extends E{constructor(){super(p),this.status=O}}class _ extends E{constructor(){super(m),this.status=y}}var N=r(0);const S=new N.transports.Console,A=N.format.printf(e=>`[${e.level}]${e.timestamp}:${e.message}`),T={format:N.format.combine(N.format.timestamp(),N.format.simple(),N.format.colorize(),N.format.json(),A),transports:[S]},w=Object(N.createLogger)(T),I=["error","warn","info","verbose","debug","silly"],L=I.reduce((e,t)=>Object.assign(e,{[t]:e=>w.log({level:t,message:e})}),{});var U=r(1);const C={merge:U.merge,set:U.set},D={create(e={},t={},r={}){const n=Object.keys(t).reduce((e,r)=>C.set(e,r.replace(new RegExp("_","g"),"."),t[r]),{});return C.merge(C.merge(e,r),n)}};r.d(t,"Errors",function(){return f}),r.d(t,"InternalError",function(){return E}),r.d(t,"GatewayError",function(){return x}),r.d(t,"MicroserviceNotAllowed",function(){return R}),r.d(t,"MicroserviceDoesNotExist",function(){return h}),r.d(t,"ChromiumInvalidProtocol",function(){return j}),r.d(t,"NotAllowedToRender",function(){return _}),r.d(t,"LoggerOptions",function(){return T}),r.d(t,"WinstonLogger",function(){return w}),r.d(t,"LoggerLevels",function(){return I}),r.d(t,"Logger",function(){return L}),r.d(t,"Config",function(){return D})}])});