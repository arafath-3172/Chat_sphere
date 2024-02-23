/*! For license information please see 0.3d0c4829.chunk.js.LICENSE.txt */
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{156:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(361)},361:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return c})),n.d(t,"createChainedFunction",(function(){return l})),n.d(t,"createSvgIcon",(function(){return Tt})),n.d(t,"debounce",(function(){return Rt})),n.d(t,"deprecatedPropType",(function(){return Ct})),n.d(t,"isMuiElement",(function(){return It})),n.d(t,"ownerDocument",(function(){return _t})),n.d(t,"ownerWindow",(function(){return Kt})),n.d(t,"requirePropFactory",(function(){return Pt})),n.d(t,"setRef",(function(){return Bt})),n.d(t,"unstable_useEnhancedEffect",(function(){return Wt})),n.d(t,"unstable_useId",(function(){return Nt})),n.d(t,"unsupportedProp",(function(){return Gt})),n.d(t,"useControlled",(function(){return Vt})),n.d(t,"useEventCallback",(function(){return Dt})),n.d(t,"useForkRef",(function(){return Xt})),n.d(t,"useIsFocusVisible",(function(){return tn})),n.d(t,"unstable_ClassNameGenerator",(function(){return nn}));const r=e=>e;var o=(()=>{let e=r;return{configure(t){e=t},generate:t=>e(t),reset(){e=r}}})();function i(e){let t="https://mui.com/production-error/?code="+e;for(let n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function a(e){if("string"!==typeof e)throw new Error(i(7));return e.charAt(0).toUpperCase()+e.slice(1)}var c=a;var l=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t)=>null==t?e:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}),(()=>{}))},s=n(2),u=n(0),f=n(15);function d(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=d(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var p=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=d(e))&&(r&&(r+=" "),r+=t);return r};function m(e,t){const n=Object(s.a)({},t);return Object.keys(e).forEach((r=>{if(r.toString().match(/^(components|slots)$/))n[r]=Object(s.a)({},e[r],n[r]);else if(r.toString().match(/^(componentsProps|slotProps)$/)){const o=e[r]||{},i=t[r];n[r]={},i&&Object.keys(i)?o&&Object.keys(o)?(n[r]=Object(s.a)({},i),Object.keys(o).forEach((e=>{n[r][e]=m(o[e],i[e])}))):n[r]=i:n[r]=o}else void 0===n[r]&&(n[r]=e[r])})),n}function h(e){const{theme:t,name:n,props:r}=e;return t&&t.components&&t.components[n]&&t.components[n].defaultProps?m(t.components[n].defaultProps,r):r}function g(e){return null!==e&&"object"===typeof e&&e.constructor===Object}function y(e){if(!g(e))return e;const t={};return Object.keys(e).forEach((n=>{t[n]=y(e[n])})),t}function b(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{clone:!0};const r=n.clone?Object(s.a)({},e):e;return g(e)&&g(t)&&Object.keys(t).forEach((o=>{"__proto__"!==o&&(g(t[o])&&o in e&&g(e[o])?r[o]=b(e[o],t[o],n):n.clone?r[o]=g(t[o])?y(t[o]):t[o]:r[o]=t[o])})),r}const v=["values","unit","step"],x=e=>{const t=Object.keys(e).map((t=>({key:t,val:e[t]})))||[];return t.sort(((e,t)=>e.val-t.val)),t.reduce(((e,t)=>Object(s.a)({},e,{[t.key]:t.val})),{})};var O={borderRadius:4};var w=function(e,t){return t?b(e,t,{clone:!1}):e};const k={xs:0,sm:600,md:900,lg:1200,xl:1536},j={keys:["xs","sm","md","lg","xl"],up:e=>"@media (min-width:".concat(k[e],"px)")};function S(e,t,n){const r=e.theme||{};if(Array.isArray(t)){const e=r.breakpoints||j;return t.reduce(((r,o,i)=>(r[e.up(e.keys[i])]=n(t[i]),r)),{})}if("object"===typeof t){const e=r.breakpoints||j;return Object.keys(t).reduce(((r,o)=>{if(-1!==Object.keys(e.values||k).indexOf(o)){r[e.up(o)]=n(t[o],o)}else{const e=o;r[e]=t[e]}return r}),{})}return n(t)}function A(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var t;return(null==(t=e.keys)?void 0:t.reduce(((t,n)=>(t[e.up(n)]={},t)),{}))||{}}function T(e,t){return e.reduce(((e,t)=>{const n=e[t];return(!n||0===Object.keys(n).length)&&delete e[t],e}),t)}function R(e,t){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!t||"string"!==typeof t)return null;if(e&&e.vars&&n){const n="vars.".concat(t).split(".").reduce(((e,t)=>e&&e[t]?e[t]:null),e);if(null!=n)return n}return t.split(".").reduce(((e,t)=>e&&null!=e[t]?e[t]:null),e)}function C(e,t,n){let r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;return r="function"===typeof e?e(n):Array.isArray(e)?e[n]||o:R(e,n)||o,t&&(r=t(r,o,e)),r}var I=function(e){const{prop:t,cssProperty:n=e.prop,themeKey:r,transform:o}=e,i=e=>{if(null==e[t])return null;const i=e[t],c=R(e.theme,r)||{};return S(e,i,(e=>{let r=C(c,o,e);return e===r&&"string"===typeof e&&(r=C(c,o,"".concat(t).concat("default"===e?"":a(e)),e)),!1===n?r:{[n]:r}}))};return i.propTypes={},i.filterProps=[t],i};const E={m:"margin",p:"padding"},_={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},K={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},P=function(e){const t={};return n=>(void 0===t[n]&&(t[n]=e(n)),t[n])}((e=>{if(e.length>2){if(!K[e])return[e];e=K[e]}const[t,n]=e.split(""),r=E[t],o=_[n]||"";return Array.isArray(o)?o.map((e=>r+e)):[r+o]})),z=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],B=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],M=[...z,...B];function W(e,t,n,r){var o;const i=null!=(o=R(e,t,!1))?o:n;return"number"===typeof i?e=>"string"===typeof e?e:i*e:Array.isArray(i)?e=>"string"===typeof e?e:i[e]:"function"===typeof i?i:()=>{}}function F(e){return W(e,"spacing",8)}function L(e,t){if("string"===typeof t||null==t)return t;const n=e(Math.abs(t));return t>=0?n:"number"===typeof n?-n:"-".concat(n)}function N(e,t,n,r){if(-1===t.indexOf(n))return null;const o=function(e,t){return n=>e.reduce(((e,r)=>(e[r]=L(t,n),e)),{})}(P(n),r);return S(e,e[n],o)}function G(e,t){const n=F(e.theme);return Object.keys(e).map((r=>N(e,t,r,n))).reduce(w,{})}function V(e){return G(e,z)}function H(e){return G(e,B)}function D(e){return G(e,M)}V.propTypes={},V.filterProps=z,H.propTypes={},H.filterProps=B,D.propTypes={},D.filterProps=M;var X=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce(((e,t)=>(t.filterProps.forEach((n=>{e[n]=t})),e)),{}),o=e=>Object.keys(e).reduce(((t,n)=>r[n]?w(t,r[n](e)):t),{});return o.propTypes={},o.filterProps=t.reduce(((e,t)=>e.concat(t.filterProps)),[]),o};function Y(e){return"number"!==typeof e?e:"".concat(e,"px solid")}const U=I({prop:"border",themeKey:"borders",transform:Y}),$=I({prop:"borderTop",themeKey:"borders",transform:Y}),q=I({prop:"borderRight",themeKey:"borders",transform:Y}),J=I({prop:"borderBottom",themeKey:"borders",transform:Y}),Q=I({prop:"borderLeft",themeKey:"borders",transform:Y}),Z=I({prop:"borderColor",themeKey:"palette"}),ee=I({prop:"borderTopColor",themeKey:"palette"}),te=I({prop:"borderRightColor",themeKey:"palette"}),ne=I({prop:"borderBottomColor",themeKey:"palette"}),re=I({prop:"borderLeftColor",themeKey:"palette"}),oe=e=>{if(void 0!==e.borderRadius&&null!==e.borderRadius){const t=W(e.theme,"shape.borderRadius",4),n=e=>({borderRadius:L(t,e)});return S(e,e.borderRadius,n)}return null};oe.propTypes={},oe.filterProps=["borderRadius"];X(U,$,q,J,Q,Z,ee,te,ne,re,oe);const ie=e=>{if(void 0!==e.gap&&null!==e.gap){const t=W(e.theme,"spacing",8),n=e=>({gap:L(t,e)});return S(e,e.gap,n)}return null};ie.propTypes={},ie.filterProps=["gap"];const ae=e=>{if(void 0!==e.columnGap&&null!==e.columnGap){const t=W(e.theme,"spacing",8),n=e=>({columnGap:L(t,e)});return S(e,e.columnGap,n)}return null};ae.propTypes={},ae.filterProps=["columnGap"];const ce=e=>{if(void 0!==e.rowGap&&null!==e.rowGap){const t=W(e.theme,"spacing",8),n=e=>({rowGap:L(t,e)});return S(e,e.rowGap,n)}return null};ce.propTypes={},ce.filterProps=["rowGap"];X(ie,ae,ce,I({prop:"gridColumn"}),I({prop:"gridRow"}),I({prop:"gridAutoFlow"}),I({prop:"gridAutoColumns"}),I({prop:"gridAutoRows"}),I({prop:"gridTemplateColumns"}),I({prop:"gridTemplateRows"}),I({prop:"gridTemplateAreas"}),I({prop:"gridArea"}));function le(e,t){return"grey"===t?t:e}X(I({prop:"color",themeKey:"palette",transform:le}),I({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:le}),I({prop:"backgroundColor",themeKey:"palette",transform:le}));function se(e){return e<=1&&0!==e?"".concat(100*e,"%"):e}const ue=I({prop:"width",transform:se}),fe=e=>{if(void 0!==e.maxWidth&&null!==e.maxWidth){const t=t=>{var n;return{maxWidth:(null==(n=e.theme)||null==(n=n.breakpoints)||null==(n=n.values)?void 0:n[t])||k[t]||se(t)}};return S(e,e.maxWidth,t)}return null};fe.filterProps=["maxWidth"];const de=I({prop:"minWidth",transform:se}),pe=I({prop:"height",transform:se}),me=I({prop:"maxHeight",transform:se}),he=I({prop:"minHeight",transform:se});I({prop:"size",cssProperty:"width",transform:se}),I({prop:"size",cssProperty:"height",transform:se});X(ue,fe,de,pe,me,he,I({prop:"boxSizing"}));var ge={border:{themeKey:"borders",transform:Y},borderTop:{themeKey:"borders",transform:Y},borderRight:{themeKey:"borders",transform:Y},borderBottom:{themeKey:"borders",transform:Y},borderLeft:{themeKey:"borders",transform:Y},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:oe},color:{themeKey:"palette",transform:le},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:le},backgroundColor:{themeKey:"palette",transform:le},p:{style:H},pt:{style:H},pr:{style:H},pb:{style:H},pl:{style:H},px:{style:H},py:{style:H},padding:{style:H},paddingTop:{style:H},paddingRight:{style:H},paddingBottom:{style:H},paddingLeft:{style:H},paddingX:{style:H},paddingY:{style:H},paddingInline:{style:H},paddingInlineStart:{style:H},paddingInlineEnd:{style:H},paddingBlock:{style:H},paddingBlockStart:{style:H},paddingBlockEnd:{style:H},m:{style:V},mt:{style:V},mr:{style:V},mb:{style:V},ml:{style:V},mx:{style:V},my:{style:V},margin:{style:V},marginTop:{style:V},marginRight:{style:V},marginBottom:{style:V},marginLeft:{style:V},marginX:{style:V},marginY:{style:V},marginInline:{style:V},marginInlineStart:{style:V},marginInlineEnd:{style:V},marginBlock:{style:V},marginBlockStart:{style:V},marginBlockEnd:{style:V},displayPrint:{cssProperty:!1,transform:e=>({"@media print":{display:e}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:ie},rowGap:{style:ce},columnGap:{style:ae},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:se},maxWidth:{style:fe},minWidth:{transform:se},height:{transform:se},maxHeight:{transform:se},minHeight:{transform:se},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};const ye=function(){function e(e,t,n,r){const o={[e]:t,theme:n},i=r[e];if(!i)return{[e]:t};const{cssProperty:c=e,themeKey:l,transform:s,style:u}=i;if(null==t)return null;if("typography"===l&&"inherit"===t)return{[e]:t};const f=R(n,l)||{};if(u)return u(o);return S(o,t,(t=>{let n=C(f,s,t);return t===n&&"string"===typeof t&&(n=C(f,s,"".concat(e).concat("default"===t?"":a(t)),t)),!1===c?n:{[c]:n}}))}return function t(n){var r;const{sx:o,theme:i={}}=n||{};if(!o)return null;const a=null!=(r=i.unstable_sxConfig)?r:ge;function c(n){let r=n;if("function"===typeof n)r=n(i);else if("object"!==typeof n)return n;if(!r)return null;const o=A(i.breakpoints),c=Object.keys(o);let l=o;return Object.keys(r).forEach((n=>{const o=(c=r[n],s=i,"function"===typeof c?c(s):c);var c,s;if(null!==o&&void 0!==o)if("object"===typeof o)if(a[n])l=w(l,e(n,o,i,a));else{const e=S({theme:i},o,(e=>({[n]:e})));!function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];const r=t.reduce(((e,t)=>e.concat(Object.keys(t))),[]),o=new Set(r);return t.every((e=>o.size===Object.keys(e).length))}(e,o)?l=w(l,e):l[n]=t({sx:o,theme:i})}else l=w(l,e(n,o,i,a))})),T(c,l)}return Array.isArray(o)?o.map(c):c(o)}}();ye.filterProps=["sx"];var be=ye;const ve=["breakpoints","palette","spacing","shape"];var xe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{breakpoints:t={},palette:n={},spacing:r,shape:o={}}=e,i=Object(f.a)(e,ve),a=function(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5}=e,o=Object(f.a)(e,v),i=x(t),a=Object.keys(i);function c(e){const r="number"===typeof t[e]?t[e]:e;return"@media (min-width:".concat(r).concat(n,")")}function l(e){const o="number"===typeof t[e]?t[e]:e;return"@media (max-width:".concat(o-r/100).concat(n,")")}function u(e,o){const i=a.indexOf(o);return"@media (min-width:".concat("number"===typeof t[e]?t[e]:e).concat(n,") and ")+"(max-width:".concat((-1!==i&&"number"===typeof t[a[i]]?t[a[i]]:o)-r/100).concat(n,")")}return Object(s.a)({keys:a,values:i,up:c,down:l,between:u,only:function(e){return a.indexOf(e)+1<a.length?u(e,a[a.indexOf(e)+1]):c(e)},not:function(e){const t=a.indexOf(e);return 0===t?c(a[1]):t===a.length-1?l(a[t]):u(e,a[a.indexOf(e)+1]).replace("@media","@media not all and")},unit:n},o)}(t),c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;if(e.mui)return e;const t=F({spacing:e}),n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return(0===n.length?[1]:n).map((e=>{const n=t(e);return"number"===typeof n?"".concat(n,"px"):n})).join(" ")};return n.mui=!0,n}(r);let l=b({breakpoints:a,direction:"ltr",components:{},palette:Object(s.a)({mode:"light"},n),spacing:c,shape:Object(s.a)({},O,o)},i);for(var u=arguments.length,d=new Array(u>1?u-1:0),p=1;p<u;p++)d[p-1]=arguments[p];return l=d.reduce(((e,t)=>b(e,t)),l),l.unstable_sxConfig=Object(s.a)({},ge,null==i?void 0:i.unstable_sxConfig),l.unstable_sx=function(e){return be({sx:e,theme:this})},l},Oe=n(8);var we=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const t=u.useContext(Oe.b);return t&&(n=t,0!==Object.keys(n).length)?t:e;var n};const ke=xe();var je=function(){return we(arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke)};function Se(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(t,e),n)}function Ae(e){if(e.type)return e;if("#"===e.charAt(0))return Ae(function(e){e=e.slice(1);const t=new RegExp(".{1,".concat(e.length>=6?2:1,"}"),"g");let n=e.match(t);return n&&1===n[0].length&&(n=n.map((e=>e+e))),n?"rgb".concat(4===n.length?"a":"","(").concat(n.map(((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3)).join(", "),")"):""}(e));const t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(n))throw new Error(i(9,e));let r,o=e.substring(t+1,e.length-1);if("color"===n){if(o=o.split(" "),r=o.shift(),4===o.length&&"/"===o[3].charAt(0)&&(o[3]=o[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(r))throw new Error(i(10,r))}else o=o.split(",");return o=o.map((e=>parseFloat(e))),{type:n,values:o,colorSpace:r}}function Te(e){const{type:t,colorSpace:n}=e;let{values:r}=e;return-1!==t.indexOf("rgb")?r=r.map(((e,t)=>t<3?parseInt(e,10):e)):-1!==t.indexOf("hsl")&&(r[1]="".concat(r[1],"%"),r[2]="".concat(r[2],"%")),r=-1!==t.indexOf("color")?"".concat(n," ").concat(r.join(" ")):"".concat(r.join(", ")),"".concat(t,"(").concat(r,")")}function Re(e){let t="hsl"===(e=Ae(e)).type||"hsla"===e.type?Ae(function(e){e=Ae(e);const{values:t}=e,n=t[0],r=t[1]/100,o=t[2]/100,i=r*Math.min(o,1-o),a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+n/30)%12;return o-i*Math.max(Math.min(t-3,9-t,1),-1)};let c="rgb";const l=[Math.round(255*a(0)),Math.round(255*a(8)),Math.round(255*a(4))];return"hsla"===e.type&&(c+="a",l.push(t[3])),Te({type:c,values:l})}(e)).values:e.values;return t=t.map((t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4))),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function Ce(e,t){if(e=Ae(e),t=Se(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]*=1-t;return Te(e)}function Ie(e,t){if(e=Ae(e),t=Se(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;else if(-1!==e.type.indexOf("color"))for(let n=0;n<3;n+=1)e.values[n]+=(1-e.values[n])*t;return Te(e)}var Ee={black:"#000",white:"#fff"};var _e={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"};var Ke={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"};var Pe={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"};var ze={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"};var Be={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"};var Me={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"};var We={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};const Fe=["mode","contrastThreshold","tonalOffset"],Le={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Ee.white,default:Ee.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Ne={text:{primary:Ee.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Ee.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Ge(e,t,n,r){const o=r.light||r,i=r.dark||1.5*r;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=Ie(e.main,o):"dark"===t&&(e.dark=Ce(e.main,i)))}function Ve(e){const{mode:t="light",contrastThreshold:n=3,tonalOffset:r=.2}=e,o=Object(f.a)(e,Fe),a=e.primary||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:Be[200],light:Be[50],dark:Be[400]}:{main:Be[700],light:Be[400],dark:Be[800]}}(t),c=e.secondary||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:Ke[200],light:Ke[50],dark:Ke[400]}:{main:Ke[500],light:Ke[300],dark:Ke[700]}}(t),l=e.error||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:Pe[500],light:Pe[300],dark:Pe[700]}:{main:Pe[700],light:Pe[400],dark:Pe[800]}}(t),u=e.info||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:Me[400],light:Me[300],dark:Me[700]}:{main:Me[700],light:Me[500],dark:Me[900]}}(t),d=e.success||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:We[400],light:We[300],dark:We[700]}:{main:We[800],light:We[500],dark:We[900]}}(t),p=e.warning||function(){return"dark"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light")?{main:ze[400],light:ze[300],dark:ze[700]}:{main:"#ed6c02",light:ze[500],dark:ze[900]}}(t);function m(e){const t=function(e,t){const n=Re(e),r=Re(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}(e,Ne.text.primary)>=n?Ne.text.primary:Le.text.primary;return t}const h=e=>{let{color:t,name:n,mainShade:o=500,lightShade:a=300,darkShade:c=700}=e;if(t=Object(s.a)({},t),!t.main&&t[o]&&(t.main=t[o]),!t.hasOwnProperty("main"))throw new Error(i(11,n?" (".concat(n,")"):"",o));if("string"!==typeof t.main)throw new Error(i(12,n?" (".concat(n,")"):"",JSON.stringify(t.main)));return Ge(t,"light",a,r),Ge(t,"dark",c,r),t.contrastText||(t.contrastText=m(t.main)),t},g={dark:Ne,light:Le};return b(Object(s.a)({common:Object(s.a)({},Ee),mode:t,primary:h({color:a,name:"primary"}),secondary:h({color:c,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:h({color:l,name:"error"}),warning:h({color:p,name:"warning"}),info:h({color:u,name:"info"}),success:h({color:d,name:"success"}),grey:_e,contrastThreshold:n,getContrastText:m,augmentColor:h,tonalOffset:r},g[t]),o)}const He=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];const De={textTransform:"uppercase"},Xe='"Roboto", "Helvetica", "Arial", sans-serif';function Ye(e,t){const n="function"===typeof t?t(e):t,{fontFamily:r=Xe,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:a=400,fontWeightMedium:c=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:d,pxToRem:p}=n,m=Object(f.a)(n,He);const h=o/14,g=p||(e=>"".concat(e/u*h,"rem")),y=(e,t,n,o,i)=>{return Object(s.a)({fontFamily:r,fontWeight:e,fontSize:g(t),lineHeight:n},r===Xe?{letterSpacing:"".concat((a=o/t,Math.round(1e5*a)/1e5),"em")}:{},i,d);var a},v={h1:y(i,96,1.167,-1.5),h2:y(i,60,1.2,-.5),h3:y(a,48,1.167,0),h4:y(a,34,1.235,.25),h5:y(a,24,1.334,0),h6:y(c,20,1.6,.15),subtitle1:y(a,16,1.75,.15),subtitle2:y(c,14,1.57,.1),body1:y(a,16,1.5,.15),body2:y(a,14,1.43,.15),button:y(c,14,1.75,.4,De),caption:y(a,12,1.66,.4),overline:y(a,12,2.66,1,De),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return b(Object(s.a)({htmlFontSize:u,pxToRem:g,fontFamily:r,fontSize:o,fontWeightLight:i,fontWeightRegular:a,fontWeightMedium:c,fontWeightBold:l},v),m,{clone:!1})}function Ue(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(.2,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(.14,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat(.12,")")].join(",")}var $e=["none",Ue(0,2,1,-1,0,1,1,0,0,1,3,0),Ue(0,3,1,-2,0,2,2,0,0,1,5,0),Ue(0,3,3,-2,0,3,4,0,0,1,8,0),Ue(0,2,4,-1,0,4,5,0,0,1,10,0),Ue(0,3,5,-1,0,5,8,0,0,1,14,0),Ue(0,3,5,-1,0,6,10,0,0,1,18,0),Ue(0,4,5,-2,0,7,10,1,0,2,16,1),Ue(0,5,5,-3,0,8,10,1,0,3,14,2),Ue(0,5,6,-3,0,9,12,1,0,3,16,2),Ue(0,6,6,-3,0,10,14,1,0,4,18,3),Ue(0,6,7,-4,0,11,15,1,0,4,20,3),Ue(0,7,8,-4,0,12,17,2,0,5,22,4),Ue(0,7,8,-4,0,13,19,2,0,5,24,4),Ue(0,7,9,-4,0,14,21,2,0,5,26,4),Ue(0,8,9,-5,0,15,22,2,0,6,28,5),Ue(0,8,10,-5,0,16,24,2,0,6,30,5),Ue(0,8,11,-5,0,17,26,2,0,6,32,5),Ue(0,9,11,-5,0,18,28,2,0,7,34,6),Ue(0,9,12,-6,0,19,29,2,0,7,36,6),Ue(0,10,13,-6,0,20,31,3,0,8,38,7),Ue(0,10,13,-6,0,21,33,3,0,8,40,7),Ue(0,10,14,-6,0,22,35,3,0,8,42,7),Ue(0,11,14,-7,0,23,36,3,0,9,44,8),Ue(0,11,15,-7,0,24,38,3,0,9,46,8)];const qe=["duration","easing","delay"],Je={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Qe={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Ze(e){return"".concat(Math.round(e),"ms")}function et(e){if(!e)return 0;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}function tt(e){const t=Object(s.a)({},Je,e.easing),n=Object(s.a)({},Qe,e.duration);return Object(s.a)({getAutoHeightDuration:et,create:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{duration:o=n.standard,easing:i=t.easeInOut,delay:a=0}=r;Object(f.a)(r,qe);return(Array.isArray(e)?e:[e]).map((e=>"".concat(e," ").concat("string"===typeof o?o:Ze(o)," ").concat(i," ").concat("string"===typeof a?a:Ze(a)))).join(",")}},e,{easing:t,duration:n})}var nt={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};const rt=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function ot(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{mixins:t={},palette:n={},transitions:r={},typography:o={}}=e,a=Object(f.a)(e,rt);if(e.vars)throw new Error(i(18));const c=Ve(n),l=xe(e);let u=b(l,{mixins:(d=l.breakpoints,p=t,Object(s.a)({toolbar:{minHeight:56,[d.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[d.up("sm")]:{minHeight:64}}},p)),palette:c,shadows:$e.slice(),typography:Ye(c,o),transitions:tt(r),zIndex:Object(s.a)({},nt)});var d,p;u=b(u,a);for(var m=arguments.length,h=new Array(m>1?m-1:0),g=1;g<m;g++)h[g-1]=arguments[g];return u=h.reduce(((e,t)=>b(e,t)),u),u.unstable_sxConfig=Object(s.a)({},ge,null==a?void 0:a.unstable_sxConfig),u.unstable_sx=function(e){return be({sx:e,theme:this})},u}var it=ot(),at="$$material";function ct(e){let{props:t,name:n}=e;return function(e){let{props:t,name:n,defaultTheme:r,themeId:o}=e,i=je(r);return o&&(i=i[o]||i),h({theme:i,name:n,props:t})}({props:t,name:n,defaultTheme:it,themeId:at})}var lt=n(62);const st=["variant"];function ut(e){return 0===e.length}function ft(e){const{variant:t}=e,n=Object(f.a)(e,st);let r=t||"";return Object.keys(n).sort().forEach((t=>{r+="color"===t?ut(r)?e[t]:a(e[t]):"".concat(ut(r)?t:a(t)).concat(a(e[t].toString()))})),r}const dt=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function pt(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const mt=xe();function ht(e){let{defaultTheme:t,theme:n,themeId:r}=e;return o=n,0===Object.keys(o).length?t:n[r]||n;var o}const gt=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:n=mt,rootShouldForwardProp:r=pt,slotShouldForwardProp:o=pt}=e,i=e=>be(Object(s.a)({},e,{theme:ht(Object(s.a)({},e,{defaultTheme:n,themeId:t}))}));return i.__mui_systemSx=!0,function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};((e,t)=>{Array.isArray(e.__emotion_styles)&&(e.__emotion_styles=t(e.__emotion_styles))})(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:c,slot:l,skipVariantsResolver:u,skipSx:d,overridesResolver:p}=a,m=Object(f.a)(a,dt),h=void 0!==u?u:l&&"Root"!==l||!1,g=d||!1;let y=pt;"Root"===l?y=r:l?y=o:function(e){return"string"===typeof e&&e.charCodeAt(0)>96}(e)&&(y=void 0);const b=function(e,t){return Object(lt.a)(e,t)}(e,Object(s.a)({shouldForwardProp:y,label:undefined},m)),v=function(r){for(var o=arguments.length,a=new Array(o>1?o-1:0),l=1;l<o;l++)a[l-1]=arguments[l];const u=a?a.map((e=>"function"===typeof e&&e.__emotion_real!==e?r=>e(Object(s.a)({},r,{theme:ht(Object(s.a)({},r,{defaultTheme:n,themeId:t}))})):e)):[];let f=r;c&&p&&u.push((e=>{const r=ht(Object(s.a)({},e,{defaultTheme:n,themeId:t})),o=((e,t)=>t.components&&t.components[e]&&t.components[e].styleOverrides?t.components[e].styleOverrides:null)(c,r);if(o){const t={};return Object.entries(o).forEach((n=>{let[o,i]=n;t[o]="function"===typeof i?i(Object(s.a)({},e,{theme:r})):i})),p(e,t)}return null})),c&&!h&&u.push((e=>{const r=ht(Object(s.a)({},e,{defaultTheme:n,themeId:t}));return((e,t,n,r)=>{var o;const{ownerState:i={}}=e,a=[],c=null==n||null==(o=n.components)||null==(o=o[r])?void 0:o.variants;return c&&c.forEach((n=>{let r=!0;Object.keys(n.props).forEach((t=>{i[t]!==n.props[t]&&e[t]!==n.props[t]&&(r=!1)})),r&&a.push(t[ft(n.props)])})),a})(e,((e,t)=>{let n=[];t&&t.components&&t.components[e]&&t.components[e].variants&&(n=t.components[e].variants);const r={};return n.forEach((e=>{const t=ft(e.props);r[t]=e.style})),r})(c,r),r,c)})),g||u.push(i);const d=u.length-a.length;if(Array.isArray(r)&&d>0){const e=new Array(d).fill("");f=[...r,...e],f.raw=[...r.raw,...e]}else"function"===typeof r&&r.__emotion_real!==r&&(f=e=>r(Object(s.a)({},e,{theme:ht(Object(s.a)({},e,{defaultTheme:n,themeId:t}))})));const m=b(f,...u);return e.muiName&&(m.muiName=e.muiName),m};return b.withConfig&&(v.withConfig=b.withConfig),v}}({themeId:at,defaultTheme:it,rootShouldForwardProp:e=>pt(e)&&"classes"!==e});var yt=gt;const bt={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function vt(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui";const r=bt[t];return r?"".concat(n,"-").concat(r):"".concat(o.generate(e),"-").concat(t)}function xt(e){return vt("MuiSvgIcon",e)}!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui";const r={};t.forEach((t=>{r[t]=vt(e,t,n)}))}("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var Ot=n(4);const wt=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],kt=e=>{const{color:t,fontSize:n,classes:r}=e;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;const r={};return Object.keys(e).forEach((o=>{r[o]=e[o].reduce(((e,r)=>{if(r){const o=t(r);""!==o&&e.push(o),n&&n[r]&&e.push(n[r])}return e}),[]).join(" ")})),r}({root:["root","inherit"!==t&&"color".concat(c(t)),"fontSize".concat(c(n))]},xt,r)},jt=yt("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t["color".concat(c(n.color))],t["fontSize".concat(c(n.fontSize))]]}})((e=>{let{theme:t,ownerState:n}=e;var r,o,i,a,c,l,s,u,f,d,p,m,h;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:n.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(r=t.transitions)||null==(o=r.create)?void 0:o.call(r,"fill",{duration:null==(i=t.transitions)||null==(i=i.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(a=t.typography)||null==(c=a.pxToRem)?void 0:c.call(a,20))||"1.25rem",medium:(null==(l=t.typography)||null==(s=l.pxToRem)?void 0:s.call(l,24))||"1.5rem",large:(null==(u=t.typography)||null==(f=u.pxToRem)?void 0:f.call(u,35))||"2.1875rem"}[n.fontSize],color:null!=(d=null==(p=(t.vars||t).palette)||null==(p=p[n.color])?void 0:p.main)?d:{action:null==(m=(t.vars||t).palette)||null==(m=m.action)?void 0:m.active,disabled:null==(h=(t.vars||t).palette)||null==(h=h.action)?void 0:h.disabled,inherit:void 0}[n.color]}})),St=u.forwardRef((function(e,t){const n=ct({props:e,name:"MuiSvgIcon"}),{children:r,className:o,color:i="inherit",component:a="svg",fontSize:c="medium",htmlColor:l,inheritViewBox:d=!1,titleAccess:m,viewBox:h="0 0 24 24"}=n,g=Object(f.a)(n,wt),y=u.isValidElement(r)&&"svg"===r.type,b=Object(s.a)({},n,{color:i,component:a,fontSize:c,instanceFontSize:e.fontSize,inheritViewBox:d,viewBox:h,hasSvgAsChild:y}),v={};d||(v.viewBox=h);const x=kt(b);return Object(Ot.jsxs)(jt,Object(s.a)({as:a,className:p(x.root,o),focusable:"false",color:l,"aria-hidden":!m||void 0,role:m?"img":void 0,ref:t},v,g,y&&r.props,{ownerState:b,children:[y?r.props.children:r,m?Object(Ot.jsx)("title",{children:m}):null]}))}));St.muiName="SvgIcon";var At=St;function Tt(e,t){function n(n,r){return Object(Ot.jsx)(At,Object(s.a)({"data-testid":"".concat(t,"Icon"),ref:r},n,{children:e}))}return n.muiName=At.muiName,u.memo(u.forwardRef(n))}var Rt=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];clearTimeout(t),t=setTimeout((()=>{e.apply(this,o)}),n)}return r.clear=()=>{clearTimeout(t)},r};var Ct=function(e,t){return()=>null};var It=function(e,t){return u.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)};function Et(e){return e&&e.ownerDocument||document}var _t=Et;var Kt=function(e){return Et(e).defaultView||window};var Pt=function(e,t){return()=>null};function zt(e,t){"function"===typeof e?e(t):e&&(e.current=t)}var Bt=zt;var Mt="undefined"!==typeof window?u.useLayoutEffect:u.useEffect,Wt=Mt;let Ft=0;const Lt=u["useId".toString()];var Nt=function(e){if(void 0!==Lt){const t=Lt();return null!=e?e:t}return function(e){const[t,n]=u.useState(e),r=e||t;return u.useEffect((()=>{null==t&&(Ft+=1,n("mui-".concat(Ft)))}),[t]),r}(e)};var Gt=function(e,t,n,r,o){return null};var Vt=function(e){let{controlled:t,default:n,name:r,state:o="value"}=e;const{current:i}=u.useRef(void 0!==t),[a,c]=u.useState(n);return[i?t:a,u.useCallback((e=>{i||c(e)}),[])]};var Ht=function(e){const t=u.useRef(e);return Mt((()=>{t.current=e})),u.useCallback((function(){return(0,t.current)(...arguments)}),[])},Dt=Ht;var Xt=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return u.useMemo((()=>t.every((e=>null==e))?null:e=>{t.forEach((t=>{zt(t,e)}))}),t)};let Yt,Ut=!0,$t=!1;const qt={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Jt(e){e.metaKey||e.altKey||e.ctrlKey||(Ut=!0)}function Qt(){Ut=!1}function Zt(){"hidden"===this.visibilityState&&$t&&(Ut=!0)}function en(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch(n){}return Ut||function(e){const{type:t,tagName:n}=e;return!("INPUT"!==n||!qt[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}(t)}var tn=function(){const e=u.useCallback((e=>{var t;null!=e&&((t=e.ownerDocument).addEventListener("keydown",Jt,!0),t.addEventListener("mousedown",Qt,!0),t.addEventListener("pointerdown",Qt,!0),t.addEventListener("touchstart",Qt,!0),t.addEventListener("visibilitychange",Zt,!0))}),[]),t=u.useRef(!1);return{isFocusVisibleRef:t,onFocus:function(e){return!!en(e)&&(t.current=!0,!0)},onBlur:function(){return!!t.current&&($t=!0,window.clearTimeout(Yt),Yt=window.setTimeout((()=>{$t=!1}),100),t.current=!1,!0)},ref:e}};const nn={configure:e=>{o.configure(e)}}}}]);
//# sourceMappingURL=0.3d0c4829.chunk.js.map