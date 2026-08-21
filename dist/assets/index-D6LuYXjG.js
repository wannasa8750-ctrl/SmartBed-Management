(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function dv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ap={exports:{}},_l={},Op={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ws=Symbol.for("react.element"),hv=Symbol.for("react.portal"),fv=Symbol.for("react.fragment"),pv=Symbol.for("react.strict_mode"),mv=Symbol.for("react.profiler"),gv=Symbol.for("react.provider"),_v=Symbol.for("react.context"),yv=Symbol.for("react.forward_ref"),vv=Symbol.for("react.suspense"),wv=Symbol.for("react.memo"),xv=Symbol.for("react.lazy"),nh=Symbol.iterator;function Ev(t){return t===null||typeof t!="object"?null:(t=nh&&t[nh]||t["@@iterator"],typeof t=="function"?t:null)}var Dp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mp=Object.assign,Lp={};function ni(t,e,n){this.props=t,this.context=e,this.refs=Lp,this.updater=n||Dp}ni.prototype.isReactComponent={};ni.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ni.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function jp(){}jp.prototype=ni.prototype;function du(t,e,n){this.props=t,this.context=e,this.refs=Lp,this.updater=n||Dp}var hu=du.prototype=new jp;hu.constructor=du;Mp(hu,ni.prototype);hu.isPureReactComponent=!0;var rh=Array.isArray,Fp=Object.prototype.hasOwnProperty,fu={current:null},Up={key:!0,ref:!0,__self:!0,__source:!0};function zp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Fp.call(e,r)&&!Up.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ws,type:t,key:s,ref:o,props:i,_owner:fu.current}}function Sv(t,e){return{$$typeof:ws,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pu(t){return typeof t=="object"&&t!==null&&t.$$typeof===ws}function Cv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ih=/\/+/g;function ta(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Cv(""+t.key):e.toString(36)}function so(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ws:case hv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ta(o,0):r,rh(i)?(n="",t!=null&&(n=t.replace(ih,"$&/")+"/"),so(i,e,n,"",function(c){return c})):i!=null&&(pu(i)&&(i=Sv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ih,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",rh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+ta(s,l);o+=so(s,e,n,a,i)}else if(a=Ev(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+ta(s,l++),o+=so(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Us(t,e,n){if(t==null)return t;var r=[],i=0;return so(t,r,"","",function(s){return e.call(n,s,i++)}),r}function kv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ze={current:null},oo={transition:null},Iv={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:oo,ReactCurrentOwner:fu};function Bp(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Us,forEach:function(t,e,n){Us(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Us(t,function(){e++}),e},toArray:function(t){return Us(t,function(e){return e})||[]},only:function(t){if(!pu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$.Component=ni;$.Fragment=fv;$.Profiler=mv;$.PureComponent=du;$.StrictMode=pv;$.Suspense=vv;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iv;$.act=Bp;$.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Mp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=fu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Fp.call(e,a)&&!Up.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:ws,type:t.type,key:i,ref:s,props:r,_owner:o}};$.createContext=function(t){return t={$$typeof:_v,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gv,_context:t},t.Consumer=t};$.createElement=zp;$.createFactory=function(t){var e=zp.bind(null,t);return e.type=t,e};$.createRef=function(){return{current:null}};$.forwardRef=function(t){return{$$typeof:yv,render:t}};$.isValidElement=pu;$.lazy=function(t){return{$$typeof:xv,_payload:{_status:-1,_result:t},_init:kv}};$.memo=function(t,e){return{$$typeof:wv,type:t,compare:e===void 0?null:e}};$.startTransition=function(t){var e=oo.transition;oo.transition={};try{t()}finally{oo.transition=e}};$.unstable_act=Bp;$.useCallback=function(t,e){return ze.current.useCallback(t,e)};$.useContext=function(t){return ze.current.useContext(t)};$.useDebugValue=function(){};$.useDeferredValue=function(t){return ze.current.useDeferredValue(t)};$.useEffect=function(t,e){return ze.current.useEffect(t,e)};$.useId=function(){return ze.current.useId()};$.useImperativeHandle=function(t,e,n){return ze.current.useImperativeHandle(t,e,n)};$.useInsertionEffect=function(t,e){return ze.current.useInsertionEffect(t,e)};$.useLayoutEffect=function(t,e){return ze.current.useLayoutEffect(t,e)};$.useMemo=function(t,e){return ze.current.useMemo(t,e)};$.useReducer=function(t,e,n){return ze.current.useReducer(t,e,n)};$.useRef=function(t){return ze.current.useRef(t)};$.useState=function(t){return ze.current.useState(t)};$.useSyncExternalStore=function(t,e,n){return ze.current.useSyncExternalStore(t,e,n)};$.useTransition=function(){return ze.current.useTransition()};$.version="18.3.1";Op.exports=$;var F=Op.exports;const Nv=dv(F);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv=F,bv=Symbol.for("react.element"),Rv=Symbol.for("react.fragment"),Pv=Object.prototype.hasOwnProperty,Av=Tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ov={key:!0,ref:!0,__self:!0,__source:!0};function $p(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Pv.call(e,r)&&!Ov.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:bv,type:t,key:s,ref:o,props:i,_owner:Av.current}}_l.Fragment=Rv;_l.jsx=$p;_l.jsxs=$p;Ap.exports=_l;var u=Ap.exports,Wa={},Wp={exports:{}},et={},Hp={exports:{}},Vp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,A){var O=I.length;I.push(A);e:for(;0<O;){var Q=O-1>>>1,X=I[Q];if(0<i(X,A))I[Q]=A,I[O]=X,O=Q;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var A=I[0],O=I.pop();if(O!==A){I[0]=O;e:for(var Q=0,X=I.length,$e=X>>>1;Q<$e;){var Qe=2*(Q+1)-1,pe=I[Qe],Un=Qe+1,Fs=I[Un];if(0>i(pe,O))Un<X&&0>i(Fs,pe)?(I[Q]=Fs,I[Un]=O,Q=Un):(I[Q]=pe,I[Qe]=O,Q=Qe);else if(Un<X&&0>i(Fs,O))I[Q]=Fs,I[Un]=O,Q=Un;else break e}}return A}function i(I,A){var O=I.sortIndex-A.sortIndex;return O!==0?O:I.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],c=[],f=1,d=null,h=3,_=!1,y=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=I)r(c),A.sortIndex=A.expirationTime,e(a,A);else break;A=n(c)}}function w(I){if(v=!1,g(I),!y)if(n(a)!==null)y=!0,G(k);else{var A=n(c);A!==null&&se(w,A.startTime-I)}}function k(I,A){y=!1,v&&(v=!1,m(R),R=-1),_=!0;var O=h;try{for(g(A),d=n(a);d!==null&&(!(d.expirationTime>A)||I&&!x());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,h=d.priorityLevel;var X=Q(d.expirationTime<=A);A=t.unstable_now(),typeof X=="function"?d.callback=X:d===n(a)&&r(a),g(A)}else r(a);d=n(a)}if(d!==null)var $e=!0;else{var Qe=n(c);Qe!==null&&se(w,Qe.startTime-A),$e=!1}return $e}finally{d=null,h=O,_=!1}}var N=!1,T=null,R=-1,j=5,L=-1;function x(){return!(t.unstable_now()-L<j)}function W(){if(T!==null){var I=t.unstable_now();L=I;var A=!0;try{A=T(!0,I)}finally{A?H():(N=!1,T=null)}}else N=!1}var H;if(typeof p=="function")H=function(){p(W)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,V=P.port2;P.port1.onmessage=W,H=function(){V.postMessage(null)}}else H=function(){C(W,0)};function G(I){T=I,N||(N=!0,H())}function se(I,A){R=C(function(){I(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){y||_||(y=!0,G(k))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var A=3;break;default:A=h}var O=h;h=A;try{return I()}finally{h=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,A){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var O=h;h=I;try{return A()}finally{h=O}},t.unstable_scheduleCallback=function(I,A,O){var Q=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?Q+O:Q):O=Q,I){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=O+X,I={id:f++,callback:A,priorityLevel:I,startTime:O,expirationTime:X,sortIndex:-1},O>Q?(I.sortIndex=O,e(c,I),n(a)===null&&I===n(c)&&(v?(m(R),R=-1):v=!0,se(w,O-Q))):(I.sortIndex=X,e(a,I),y||_||(y=!0,G(k))),I},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(I){var A=h;return function(){var O=h;h=A;try{return I.apply(this,arguments)}finally{h=O}}}})(Vp);Hp.exports=Vp;var Dv=Hp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv=F,Ze=Dv;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gp=new Set,Vi={};function lr(t,e){zr(t,e),zr(t+"Capture",e)}function zr(t,e){for(Vi[t]=e,t=0;t<e.length;t++)Gp.add(e[t])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ha=Object.prototype.hasOwnProperty,Lv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sh={},oh={};function jv(t){return Ha.call(oh,t)?!0:Ha.call(sh,t)?!1:Lv.test(t)?oh[t]=!0:(sh[t]=!0,!1)}function Fv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Uv(t,e,n,r){if(e===null||typeof e>"u"||Fv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Te[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Te[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Te[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Te[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Te[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Te[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Te[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Te[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Te[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var mu=/[\-:]([a-z])/g;function gu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mu,gu);Te[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mu,gu);Te[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mu,gu);Te[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Te[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Te[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function _u(t,e,n,r){var i=Te.hasOwnProperty(e)?Te[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Uv(e,n,i,r)&&(n=null),r||i===null?jv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yt=Mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zs=Symbol.for("react.element"),mr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),yu=Symbol.for("react.strict_mode"),Va=Symbol.for("react.profiler"),Kp=Symbol.for("react.provider"),qp=Symbol.for("react.context"),vu=Symbol.for("react.forward_ref"),Ga=Symbol.for("react.suspense"),Ka=Symbol.for("react.suspense_list"),wu=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),Qp=Symbol.for("react.offscreen"),lh=Symbol.iterator;function hi(t){return t===null||typeof t!="object"?null:(t=lh&&t[lh]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,na;function Ci(t){if(na===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);na=e&&e[1]||""}return`
`+na+t}var ra=!1;function ia(t,e){if(!t||ra)return"";ra=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ra=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ci(t):""}function zv(t){switch(t.tag){case 5:return Ci(t.type);case 16:return Ci("Lazy");case 13:return Ci("Suspense");case 19:return Ci("SuspenseList");case 0:case 2:case 15:return t=ia(t.type,!1),t;case 11:return t=ia(t.type.render,!1),t;case 1:return t=ia(t.type,!0),t;default:return""}}function qa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gr:return"Fragment";case mr:return"Portal";case Va:return"Profiler";case yu:return"StrictMode";case Ga:return"Suspense";case Ka:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qp:return(t.displayName||"Context")+".Consumer";case Kp:return(t._context.displayName||"Context")+".Provider";case vu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wu:return e=t.displayName||null,e!==null?e:qa(t.type)||"Memo";case nn:e=t._payload,t=t._init;try{return qa(t(e))}catch{}}return null}function Bv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qa(e);case 8:return e===yu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $v(t){var e=Yp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bs(t){t._valueTracker||(t._valueTracker=$v(t))}function Xp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Yp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function So(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qa(t,e){var n=e.checked;return ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ah(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Nn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jp(t,e){e=e.checked,e!=null&&_u(t,"checked",e,!1)}function Ya(t,e){Jp(t,e);var n=Nn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xa(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xa(t,e.type,Nn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ch(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xa(t,e,n){(e!=="number"||So(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ki=Array.isArray;function br(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Nn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ja(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function uh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(ki(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nn(n)}}function Zp(t,e){var n=Nn(e.value),r=Nn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function dh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function em(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Za(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?em(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $s,tm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($s=$s||document.createElement("div"),$s.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$s.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Gi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wv=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(t){Wv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ri[e]=Ri[t]})});function nm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ri.hasOwnProperty(t)&&Ri[t]?(""+e).trim():e+"px"}function rm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Hv=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ec(t,e){if(e){if(Hv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function tc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nc=null;function xu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rc=null,Rr=null,Pr=null;function hh(t){if(t=Ss(t)){if(typeof rc!="function")throw Error(E(280));var e=t.stateNode;e&&(e=El(e),rc(t.stateNode,t.type,e))}}function im(t){Rr?Pr?Pr.push(t):Pr=[t]:Rr=t}function sm(){if(Rr){var t=Rr,e=Pr;if(Pr=Rr=null,hh(t),e)for(t=0;t<e.length;t++)hh(e[t])}}function om(t,e){return t(e)}function lm(){}var sa=!1;function am(t,e,n){if(sa)return t(e,n);sa=!0;try{return om(t,e,n)}finally{sa=!1,(Rr!==null||Pr!==null)&&(lm(),sm())}}function Ki(t,e){var n=t.stateNode;if(n===null)return null;var r=El(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var ic=!1;if(Wt)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){ic=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{ic=!1}function Vv(t,e,n,r,i,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Pi=!1,Co=null,ko=!1,sc=null,Gv={onError:function(t){Pi=!0,Co=t}};function Kv(t,e,n,r,i,s,o,l,a){Pi=!1,Co=null,Vv.apply(Gv,arguments)}function qv(t,e,n,r,i,s,o,l,a){if(Kv.apply(this,arguments),Pi){if(Pi){var c=Co;Pi=!1,Co=null}else throw Error(E(198));ko||(ko=!0,sc=c)}}function ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fh(t){if(ar(t)!==t)throw Error(E(188))}function Qv(t){var e=t.alternate;if(!e){if(e=ar(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fh(i),t;if(s===r)return fh(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function um(t){return t=Qv(t),t!==null?dm(t):null}function dm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dm(t);if(e!==null)return e;t=t.sibling}return null}var hm=Ze.unstable_scheduleCallback,ph=Ze.unstable_cancelCallback,Yv=Ze.unstable_shouldYield,Xv=Ze.unstable_requestPaint,me=Ze.unstable_now,Jv=Ze.unstable_getCurrentPriorityLevel,Eu=Ze.unstable_ImmediatePriority,fm=Ze.unstable_UserBlockingPriority,Io=Ze.unstable_NormalPriority,Zv=Ze.unstable_LowPriority,pm=Ze.unstable_IdlePriority,yl=null,It=null;function e0(t){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(yl,t,void 0,(t.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:r0,t0=Math.log,n0=Math.LN2;function r0(t){return t>>>=0,t===0?32:31-(t0(t)/n0|0)|0}var Ws=64,Hs=4194304;function Ii(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function No(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ii(l):(s&=o,s!==0&&(r=Ii(s)))}else o=n&~i,o!==0?r=Ii(o):s!==0&&(r=Ii(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-gt(e),i=1<<n,r|=t[n],e&=~i;return r}function i0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-gt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=i0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function oc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mm(){var t=Ws;return Ws<<=1,!(Ws&4194240)&&(Ws=64),t}function oa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gt(e),t[e]=n}function o0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-gt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Su(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function gm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _m,Cu,ym,vm,wm,lc=!1,Vs=[],pn=null,mn=null,gn=null,qi=new Map,Qi=new Map,sn=[],l0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mh(t,e){switch(t){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":gn=null;break;case"pointerover":case"pointerout":qi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(e.pointerId)}}function pi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ss(e),e!==null&&Cu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function a0(t,e,n,r,i){switch(e){case"focusin":return pn=pi(pn,t,e,n,r,i),!0;case"dragenter":return mn=pi(mn,t,e,n,r,i),!0;case"mouseover":return gn=pi(gn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return qi.set(s,pi(qi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qi.set(s,pi(Qi.get(s)||null,t,e,n,r,i)),!0}return!1}function xm(t){var e=Hn(t.target);if(e!==null){var n=ar(e);if(n!==null){if(e=n.tag,e===13){if(e=cm(n),e!==null){t.blockedOn=e,wm(t.priority,function(){ym(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ac(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);nc=r,n.target.dispatchEvent(r),nc=null}else return e=Ss(n),e!==null&&Cu(e),t.blockedOn=n,!1;e.shift()}return!0}function gh(t,e,n){lo(t)&&n.delete(e)}function c0(){lc=!1,pn!==null&&lo(pn)&&(pn=null),mn!==null&&lo(mn)&&(mn=null),gn!==null&&lo(gn)&&(gn=null),qi.forEach(gh),Qi.forEach(gh)}function mi(t,e){t.blockedOn===e&&(t.blockedOn=null,lc||(lc=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,c0)))}function Yi(t){function e(i){return mi(i,t)}if(0<Vs.length){mi(Vs[0],t);for(var n=1;n<Vs.length;n++){var r=Vs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pn!==null&&mi(pn,t),mn!==null&&mi(mn,t),gn!==null&&mi(gn,t),qi.forEach(e),Qi.forEach(e),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)xm(n),n.blockedOn===null&&sn.shift()}var Ar=Yt.ReactCurrentBatchConfig,To=!0;function u0(t,e,n,r){var i=Y,s=Ar.transition;Ar.transition=null;try{Y=1,ku(t,e,n,r)}finally{Y=i,Ar.transition=s}}function d0(t,e,n,r){var i=Y,s=Ar.transition;Ar.transition=null;try{Y=4,ku(t,e,n,r)}finally{Y=i,Ar.transition=s}}function ku(t,e,n,r){if(To){var i=ac(t,e,n,r);if(i===null)ga(t,e,r,bo,n),mh(t,r);else if(a0(i,t,e,n,r))r.stopPropagation();else if(mh(t,r),e&4&&-1<l0.indexOf(t)){for(;i!==null;){var s=Ss(i);if(s!==null&&_m(s),s=ac(t,e,n,r),s===null&&ga(t,e,r,bo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ga(t,e,r,null,n)}}var bo=null;function ac(t,e,n,r){if(bo=null,t=xu(r),t=Hn(t),t!==null)if(e=ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bo=t,null}function Em(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jv()){case Eu:return 1;case fm:return 4;case Io:case Zv:return 16;case pm:return 536870912;default:return 16}default:return 16}}var dn=null,Iu=null,ao=null;function Sm(){if(ao)return ao;var t,e=Iu,n=e.length,r,i="value"in dn?dn.value:dn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ao=i.slice(t,1<r?1-r:void 0)}function co(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gs(){return!0}function _h(){return!1}function tt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gs:_h,this.isPropagationStopped=_h,this}return ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gs)},persist:function(){},isPersistent:Gs}),e}var ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nu=tt(ri),Es=ue({},ri,{view:0,detail:0}),h0=tt(Es),la,aa,gi,vl=ue({},Es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gi&&(gi&&t.type==="mousemove"?(la=t.screenX-gi.screenX,aa=t.screenY-gi.screenY):aa=la=0,gi=t),la)},movementY:function(t){return"movementY"in t?t.movementY:aa}}),yh=tt(vl),f0=ue({},vl,{dataTransfer:0}),p0=tt(f0),m0=ue({},Es,{relatedTarget:0}),ca=tt(m0),g0=ue({},ri,{animationName:0,elapsedTime:0,pseudoElement:0}),_0=tt(g0),y0=ue({},ri,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),v0=tt(y0),w0=ue({},ri,{data:0}),vh=tt(w0),x0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=S0[t])?!!e[t]:!1}function Tu(){return C0}var k0=ue({},Es,{key:function(t){if(t.key){var e=x0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=co(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?E0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(t){return t.type==="keypress"?co(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?co(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),I0=tt(k0),N0=ue({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=tt(N0),T0=ue({},Es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),b0=tt(T0),R0=ue({},ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),P0=tt(R0),A0=ue({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),O0=tt(A0),D0=[9,13,27,32],bu=Wt&&"CompositionEvent"in window,Ai=null;Wt&&"documentMode"in document&&(Ai=document.documentMode);var M0=Wt&&"TextEvent"in window&&!Ai,Cm=Wt&&(!bu||Ai&&8<Ai&&11>=Ai),xh=" ",Eh=!1;function km(t,e){switch(t){case"keyup":return D0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _r=!1;function L0(t,e){switch(t){case"compositionend":return Im(e);case"keypress":return e.which!==32?null:(Eh=!0,xh);case"textInput":return t=e.data,t===xh&&Eh?null:t;default:return null}}function j0(t,e){if(_r)return t==="compositionend"||!bu&&km(t,e)?(t=Sm(),ao=Iu=dn=null,_r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cm&&e.locale!=="ko"?null:e.data;default:return null}}var F0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!F0[t.type]:e==="textarea"}function Nm(t,e,n,r){im(r),e=Ro(e,"onChange"),0<e.length&&(n=new Nu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Oi=null,Xi=null;function U0(t){Fm(t,0)}function wl(t){var e=wr(t);if(Xp(e))return t}function z0(t,e){if(t==="change")return e}var Tm=!1;if(Wt){var ua;if(Wt){var da="oninput"in document;if(!da){var Ch=document.createElement("div");Ch.setAttribute("oninput","return;"),da=typeof Ch.oninput=="function"}ua=da}else ua=!1;Tm=ua&&(!document.documentMode||9<document.documentMode)}function kh(){Oi&&(Oi.detachEvent("onpropertychange",bm),Xi=Oi=null)}function bm(t){if(t.propertyName==="value"&&wl(Xi)){var e=[];Nm(e,Xi,t,xu(t)),am(U0,e)}}function B0(t,e,n){t==="focusin"?(kh(),Oi=e,Xi=n,Oi.attachEvent("onpropertychange",bm)):t==="focusout"&&kh()}function $0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(Xi)}function W0(t,e){if(t==="click")return wl(e)}function H0(t,e){if(t==="input"||t==="change")return wl(e)}function V0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vt=typeof Object.is=="function"?Object.is:V0;function Ji(t,e){if(vt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ha.call(e,i)||!vt(t[i],e[i]))return!1}return!0}function Ih(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nh(t,e){var n=Ih(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ih(n)}}function Rm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Pm(){for(var t=window,e=So();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=So(t.document)}return e}function Ru(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function G0(t){var e=Pm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Rm(n.ownerDocument.documentElement,n)){if(r!==null&&Ru(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Nh(n,s);var o=Nh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var K0=Wt&&"documentMode"in document&&11>=document.documentMode,yr=null,cc=null,Di=null,uc=!1;function Th(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;uc||yr==null||yr!==So(r)||(r=yr,"selectionStart"in r&&Ru(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Di&&Ji(Di,r)||(Di=r,r=Ro(cc,"onSelect"),0<r.length&&(e=new Nu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=yr)))}function Ks(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vr={animationend:Ks("Animation","AnimationEnd"),animationiteration:Ks("Animation","AnimationIteration"),animationstart:Ks("Animation","AnimationStart"),transitionend:Ks("Transition","TransitionEnd")},ha={},Am={};Wt&&(Am=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function xl(t){if(ha[t])return ha[t];if(!vr[t])return t;var e=vr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Am)return ha[t]=e[n];return t}var Om=xl("animationend"),Dm=xl("animationiteration"),Mm=xl("animationstart"),Lm=xl("transitionend"),jm=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(t,e){jm.set(t,e),lr(e,[t])}for(var fa=0;fa<bh.length;fa++){var pa=bh[fa],q0=pa.toLowerCase(),Q0=pa[0].toUpperCase()+pa.slice(1);Dn(q0,"on"+Q0)}Dn(Om,"onAnimationEnd");Dn(Dm,"onAnimationIteration");Dn(Mm,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(Lm,"onTransitionEnd");zr("onMouseEnter",["mouseout","mouseover"]);zr("onMouseLeave",["mouseout","mouseover"]);zr("onPointerEnter",["pointerout","pointerover"]);zr("onPointerLeave",["pointerout","pointerover"]);lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ni));function Rh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qv(r,e,void 0,t),t.currentTarget=null}function Fm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Rh(i,l,c),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Rh(i,l,c),s=a}}}if(ko)throw t=sc,ko=!1,sc=null,t}function re(t,e){var n=e[mc];n===void 0&&(n=e[mc]=new Set);var r=t+"__bubble";n.has(r)||(Um(e,t,2,!1),n.add(r))}function ma(t,e,n){var r=0;e&&(r|=4),Um(n,t,r,e)}var qs="_reactListening"+Math.random().toString(36).slice(2);function Zi(t){if(!t[qs]){t[qs]=!0,Gp.forEach(function(n){n!=="selectionchange"&&(Y0.has(n)||ma(n,!1,t),ma(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qs]||(e[qs]=!0,ma("selectionchange",!1,e))}}function Um(t,e,n,r){switch(Em(e)){case 1:var i=u0;break;case 4:i=d0;break;default:i=ku}n=i.bind(null,e,n,t),i=void 0,!ic||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ga(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Hn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}am(function(){var c=s,f=xu(n),d=[];e:{var h=jm.get(t);if(h!==void 0){var _=Nu,y=t;switch(t){case"keypress":if(co(n)===0)break e;case"keydown":case"keyup":_=I0;break;case"focusin":y="focus",_=ca;break;case"focusout":y="blur",_=ca;break;case"beforeblur":case"afterblur":_=ca;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=p0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=b0;break;case Om:case Dm:case Mm:_=_0;break;case Lm:_=P0;break;case"scroll":_=h0;break;case"wheel":_=O0;break;case"copy":case"cut":case"paste":_=v0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=wh}var v=(e&4)!==0,C=!v&&t==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var p=c,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Ki(p,m),w!=null&&v.push(es(p,w,g)))),C)break;p=p.return}0<v.length&&(h=new _(h,y,null,n,f),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",h&&n!==nc&&(y=n.relatedTarget||n.fromElement)&&(Hn(y)||y[Ht]))break e;if((_||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,_?(y=n.relatedTarget||n.toElement,_=c,y=y?Hn(y):null,y!==null&&(C=ar(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(_=null,y=c),_!==y)){if(v=yh,w="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=wh,w="onPointerLeave",m="onPointerEnter",p="pointer"),C=_==null?h:wr(_),g=y==null?h:wr(y),h=new v(w,p+"leave",_,n,f),h.target=C,h.relatedTarget=g,w=null,Hn(f)===c&&(v=new v(m,p+"enter",y,n,f),v.target=g,v.relatedTarget=C,w=v),C=w,_&&y)t:{for(v=_,m=y,p=0,g=v;g;g=hr(g))p++;for(g=0,w=m;w;w=hr(w))g++;for(;0<p-g;)v=hr(v),p--;for(;0<g-p;)m=hr(m),g--;for(;p--;){if(v===m||m!==null&&v===m.alternate)break t;v=hr(v),m=hr(m)}v=null}else v=null;_!==null&&Ph(d,h,_,v,!1),y!==null&&C!==null&&Ph(d,C,y,v,!0)}}e:{if(h=c?wr(c):window,_=h.nodeName&&h.nodeName.toLowerCase(),_==="select"||_==="input"&&h.type==="file")var k=z0;else if(Sh(h))if(Tm)k=H0;else{k=$0;var N=B0}else(_=h.nodeName)&&_.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=W0);if(k&&(k=k(t,c))){Nm(d,k,n,f);break e}N&&N(t,h,c),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Xa(h,"number",h.value)}switch(N=c?wr(c):window,t){case"focusin":(Sh(N)||N.contentEditable==="true")&&(yr=N,cc=c,Di=null);break;case"focusout":Di=cc=yr=null;break;case"mousedown":uc=!0;break;case"contextmenu":case"mouseup":case"dragend":uc=!1,Th(d,n,f);break;case"selectionchange":if(K0)break;case"keydown":case"keyup":Th(d,n,f)}var T;if(bu)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else _r?km(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Cm&&n.locale!=="ko"&&(_r||R!=="onCompositionStart"?R==="onCompositionEnd"&&_r&&(T=Sm()):(dn=f,Iu="value"in dn?dn.value:dn.textContent,_r=!0)),N=Ro(c,R),0<N.length&&(R=new vh(R,t,null,n,f),d.push({event:R,listeners:N}),T?R.data=T:(T=Im(n),T!==null&&(R.data=T)))),(T=M0?L0(t,n):j0(t,n))&&(c=Ro(c,"onBeforeInput"),0<c.length&&(f=new vh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=T))}Fm(d,e)})}function es(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ro(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ki(t,n),s!=null&&r.unshift(es(t,s,i)),s=Ki(t,e),s!=null&&r.push(es(t,s,i))),t=t.return}return r}function hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ph(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=Ki(n,s),a!=null&&o.unshift(es(n,a,l))):i||(a=Ki(n,s),a!=null&&o.push(es(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var X0=/\r\n?/g,J0=/\u0000|\uFFFD/g;function Ah(t){return(typeof t=="string"?t:""+t).replace(X0,`
`).replace(J0,"")}function Qs(t,e,n){if(e=Ah(e),Ah(t)!==e&&n)throw Error(E(425))}function Po(){}var dc=null,hc=null;function fc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pc=typeof setTimeout=="function"?setTimeout:void 0,Z0=typeof clearTimeout=="function"?clearTimeout:void 0,Oh=typeof Promise=="function"?Promise:void 0,ew=typeof queueMicrotask=="function"?queueMicrotask:typeof Oh<"u"?function(t){return Oh.resolve(null).then(t).catch(tw)}:pc;function tw(t){setTimeout(function(){throw t})}function _a(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Yi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yi(e)}function _n(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ii=Math.random().toString(36).slice(2),Ct="__reactFiber$"+ii,ts="__reactProps$"+ii,Ht="__reactContainer$"+ii,mc="__reactEvents$"+ii,nw="__reactListeners$"+ii,rw="__reactHandles$"+ii;function Hn(t){var e=t[Ct];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ht]||n[Ct]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dh(t);t!==null;){if(n=t[Ct])return n;t=Dh(t)}return e}t=n,n=t.parentNode}return null}function Ss(t){return t=t[Ct]||t[Ht],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function El(t){return t[ts]||null}var gc=[],xr=-1;function Mn(t){return{current:t}}function ie(t){0>xr||(t.current=gc[xr],gc[xr]=null,xr--)}function ne(t,e){xr++,gc[xr]=t.current,t.current=e}var Tn={},De=Mn(Tn),Ge=Mn(!1),Yn=Tn;function Br(t,e){var n=t.type.contextTypes;if(!n)return Tn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(t){return t=t.childContextTypes,t!=null}function Ao(){ie(Ge),ie(De)}function Mh(t,e,n){if(De.current!==Tn)throw Error(E(168));ne(De,e),ne(Ge,n)}function zm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,Bv(t)||"Unknown",i));return ue({},n,r)}function Oo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tn,Yn=De.current,ne(De,t),ne(Ge,Ge.current),!0}function Lh(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=zm(t,e,Yn),r.__reactInternalMemoizedMergedChildContext=t,ie(Ge),ie(De),ne(De,t)):ie(Ge),ne(Ge,n)}var Ot=null,Sl=!1,ya=!1;function Bm(t){Ot===null?Ot=[t]:Ot.push(t)}function iw(t){Sl=!0,Bm(t)}function Ln(){if(!ya&&Ot!==null){ya=!0;var t=0,e=Y;try{var n=Ot;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ot=null,Sl=!1}catch(i){throw Ot!==null&&(Ot=Ot.slice(t+1)),hm(Eu,Ln),i}finally{Y=e,ya=!1}}return null}var Er=[],Sr=0,Do=null,Mo=0,nt=[],rt=0,Xn=null,Dt=1,Mt="";function zn(t,e){Er[Sr++]=Mo,Er[Sr++]=Do,Do=t,Mo=e}function $m(t,e,n){nt[rt++]=Dt,nt[rt++]=Mt,nt[rt++]=Xn,Xn=t;var r=Dt;t=Mt;var i=32-gt(r)-1;r&=~(1<<i),n+=1;var s=32-gt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dt=1<<32-gt(e)+i|n<<i|r,Mt=s+t}else Dt=1<<s|n<<i|r,Mt=t}function Pu(t){t.return!==null&&(zn(t,1),$m(t,1,0))}function Au(t){for(;t===Do;)Do=Er[--Sr],Er[Sr]=null,Mo=Er[--Sr],Er[Sr]=null;for(;t===Xn;)Xn=nt[--rt],nt[rt]=null,Mt=nt[--rt],nt[rt]=null,Dt=nt[--rt],nt[rt]=null}var Je=null,Xe=null,oe=!1,ft=null;function Wm(t,e){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Je=t,Xe=_n(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Je=t,Xe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xn!==null?{id:Dt,overflow:Mt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Je=t,Xe=null,!0):!1;default:return!1}}function _c(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yc(t){if(oe){var e=Xe;if(e){var n=e;if(!jh(t,e)){if(_c(t))throw Error(E(418));e=_n(n.nextSibling);var r=Je;e&&jh(t,e)?Wm(r,n):(t.flags=t.flags&-4097|2,oe=!1,Je=t)}}else{if(_c(t))throw Error(E(418));t.flags=t.flags&-4097|2,oe=!1,Je=t}}}function Fh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Je=t}function Ys(t){if(t!==Je)return!1;if(!oe)return Fh(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fc(t.type,t.memoizedProps)),e&&(e=Xe)){if(_c(t))throw Hm(),Error(E(418));for(;e;)Wm(t,e),e=_n(e.nextSibling)}if(Fh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xe=_n(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xe=null}}else Xe=Je?_n(t.stateNode.nextSibling):null;return!0}function Hm(){for(var t=Xe;t;)t=_n(t.nextSibling)}function $r(){Xe=Je=null,oe=!1}function Ou(t){ft===null?ft=[t]:ft.push(t)}var sw=Yt.ReactCurrentBatchConfig;function _i(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Xs(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Uh(t){var e=t._init;return e(t._payload)}function Vm(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=xn(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,w){return p===null||p.tag!==6?(p=ka(g,m.mode,w),p.return=m,p):(p=i(p,g),p.return=m,p)}function a(m,p,g,w){var k=g.type;return k===gr?f(m,p,g.props.children,w,g.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===nn&&Uh(k)===p.type)?(w=i(p,g.props),w.ref=_i(m,p,g),w.return=m,w):(w=_o(g.type,g.key,g.props,null,m.mode,w),w.ref=_i(m,p,g),w.return=m,w)}function c(m,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Ia(g,m.mode,w),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function f(m,p,g,w,k){return p===null||p.tag!==7?(p=Qn(g,m.mode,w,k),p.return=m,p):(p=i(p,g),p.return=m,p)}function d(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ka(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case zs:return g=_o(p.type,p.key,p.props,null,m.mode,g),g.ref=_i(m,null,p),g.return=m,g;case mr:return p=Ia(p,m.mode,g),p.return=m,p;case nn:var w=p._init;return d(m,w(p._payload),g)}if(ki(p)||hi(p))return p=Qn(p,m.mode,g,null),p.return=m,p;Xs(m,p)}return null}function h(m,p,g,w){var k=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(m,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case zs:return g.key===k?a(m,p,g,w):null;case mr:return g.key===k?c(m,p,g,w):null;case nn:return k=g._init,h(m,p,k(g._payload),w)}if(ki(g)||hi(g))return k!==null?null:f(m,p,g,w,null);Xs(m,g)}return null}function _(m,p,g,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,l(p,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case zs:return m=m.get(w.key===null?g:w.key)||null,a(p,m,w,k);case mr:return m=m.get(w.key===null?g:w.key)||null,c(p,m,w,k);case nn:var N=w._init;return _(m,p,g,N(w._payload),k)}if(ki(w)||hi(w))return m=m.get(g)||null,f(p,m,w,k,null);Xs(p,w)}return null}function y(m,p,g,w){for(var k=null,N=null,T=p,R=p=0,j=null;T!==null&&R<g.length;R++){T.index>R?(j=T,T=null):j=T.sibling;var L=h(m,T,g[R],w);if(L===null){T===null&&(T=j);break}t&&T&&L.alternate===null&&e(m,T),p=s(L,p,R),N===null?k=L:N.sibling=L,N=L,T=j}if(R===g.length)return n(m,T),oe&&zn(m,R),k;if(T===null){for(;R<g.length;R++)T=d(m,g[R],w),T!==null&&(p=s(T,p,R),N===null?k=T:N.sibling=T,N=T);return oe&&zn(m,R),k}for(T=r(m,T);R<g.length;R++)j=_(T,m,R,g[R],w),j!==null&&(t&&j.alternate!==null&&T.delete(j.key===null?R:j.key),p=s(j,p,R),N===null?k=j:N.sibling=j,N=j);return t&&T.forEach(function(x){return e(m,x)}),oe&&zn(m,R),k}function v(m,p,g,w){var k=hi(g);if(typeof k!="function")throw Error(E(150));if(g=k.call(g),g==null)throw Error(E(151));for(var N=k=null,T=p,R=p=0,j=null,L=g.next();T!==null&&!L.done;R++,L=g.next()){T.index>R?(j=T,T=null):j=T.sibling;var x=h(m,T,L.value,w);if(x===null){T===null&&(T=j);break}t&&T&&x.alternate===null&&e(m,T),p=s(x,p,R),N===null?k=x:N.sibling=x,N=x,T=j}if(L.done)return n(m,T),oe&&zn(m,R),k;if(T===null){for(;!L.done;R++,L=g.next())L=d(m,L.value,w),L!==null&&(p=s(L,p,R),N===null?k=L:N.sibling=L,N=L);return oe&&zn(m,R),k}for(T=r(m,T);!L.done;R++,L=g.next())L=_(T,m,R,L.value,w),L!==null&&(t&&L.alternate!==null&&T.delete(L.key===null?R:L.key),p=s(L,p,R),N===null?k=L:N.sibling=L,N=L);return t&&T.forEach(function(W){return e(m,W)}),oe&&zn(m,R),k}function C(m,p,g,w){if(typeof g=="object"&&g!==null&&g.type===gr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case zs:e:{for(var k=g.key,N=p;N!==null;){if(N.key===k){if(k=g.type,k===gr){if(N.tag===7){n(m,N.sibling),p=i(N,g.props.children),p.return=m,m=p;break e}}else if(N.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===nn&&Uh(k)===N.type){n(m,N.sibling),p=i(N,g.props),p.ref=_i(m,N,g),p.return=m,m=p;break e}n(m,N);break}else e(m,N);N=N.sibling}g.type===gr?(p=Qn(g.props.children,m.mode,w,g.key),p.return=m,m=p):(w=_o(g.type,g.key,g.props,null,m.mode,w),w.ref=_i(m,p,g),w.return=m,m=w)}return o(m);case mr:e:{for(N=g.key;p!==null;){if(p.key===N)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Ia(g,m.mode,w),p.return=m,m=p}return o(m);case nn:return N=g._init,C(m,p,N(g._payload),w)}if(ki(g))return y(m,p,g,w);if(hi(g))return v(m,p,g,w);Xs(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=ka(g,m.mode,w),p.return=m,m=p),o(m)):n(m,p)}return C}var Wr=Vm(!0),Gm=Vm(!1),Lo=Mn(null),jo=null,Cr=null,Du=null;function Mu(){Du=Cr=jo=null}function Lu(t){var e=Lo.current;ie(Lo),t._currentValue=e}function vc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Or(t,e){jo=t,Du=Cr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(He=!0),t.firstContext=null)}function lt(t){var e=t._currentValue;if(Du!==t)if(t={context:t,memoizedValue:e,next:null},Cr===null){if(jo===null)throw Error(E(308));Cr=t,jo.dependencies={lanes:0,firstContext:t}}else Cr=Cr.next=t;return e}var Vn=null;function ju(t){Vn===null?Vn=[t]:Vn.push(t)}function Km(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ju(e)):(n.next=i.next,i.next=n),e.interleaved=n,Vt(t,r)}function Vt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rn=!1;function Fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Vt(t,n)}return i=r.interleaved,i===null?(e.next=e,ju(r)):(e.next=i.next,i.next=e),r.interleaved=e,Vt(t,n)}function uo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Su(t,n)}}function zh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fo(t,e,n,r){var i=t.updateQueue;rn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,f=c=a=null,l=s;do{var h=l.lane,_=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,v=l;switch(h=e,_=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(_,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(_,d,h):y,h==null)break e;d=ue({},d,h);break e;case 2:rn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else _={eventTime:_,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=_,a=d):f=f.next=_,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(a=d),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Zn|=o,t.lanes=o,t.memoizedState=d}}function Bh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Cs={},Nt=Mn(Cs),ns=Mn(Cs),rs=Mn(Cs);function Gn(t){if(t===Cs)throw Error(E(174));return t}function Uu(t,e){switch(ne(rs,e),ne(ns,t),ne(Nt,Cs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Za(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Za(e,t)}ie(Nt),ne(Nt,e)}function Hr(){ie(Nt),ie(ns),ie(rs)}function Qm(t){Gn(rs.current);var e=Gn(Nt.current),n=Za(e,t.type);e!==n&&(ne(ns,t),ne(Nt,n))}function zu(t){ns.current===t&&(ie(Nt),ie(ns))}var ae=Mn(0);function Uo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var va=[];function Bu(){for(var t=0;t<va.length;t++)va[t]._workInProgressVersionPrimary=null;va.length=0}var ho=Yt.ReactCurrentDispatcher,wa=Yt.ReactCurrentBatchConfig,Jn=0,ce=null,_e=null,Ee=null,zo=!1,Mi=!1,is=0,ow=0;function Pe(){throw Error(E(321))}function $u(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vt(t[n],e[n]))return!1;return!0}function Wu(t,e,n,r,i,s){if(Jn=s,ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ho.current=t===null||t.memoizedState===null?uw:dw,t=n(r,i),Mi){s=0;do{if(Mi=!1,is=0,25<=s)throw Error(E(301));s+=1,Ee=_e=null,e.updateQueue=null,ho.current=hw,t=n(r,i)}while(Mi)}if(ho.current=Bo,e=_e!==null&&_e.next!==null,Jn=0,Ee=_e=ce=null,zo=!1,e)throw Error(E(300));return t}function Hu(){var t=is!==0;return is=0,t}function St(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ce.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function at(){if(_e===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=_e.next;var e=Ee===null?ce.memoizedState:Ee.next;if(e!==null)Ee=e,_e=t;else{if(t===null)throw Error(E(310));_e=t,t={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ee===null?ce.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function ss(t,e){return typeof e=="function"?e(t):e}function xa(t){var e=at(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=_e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,c=s;do{var f=c.lane;if((Jn&f)===f)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,ce.lanes|=f,Zn|=f}c=c.next}while(c!==null&&c!==s);a===null?o=r:a.next=l,vt(r,e.memoizedState)||(He=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ce.lanes|=s,Zn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ea(t){var e=at(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);vt(s,e.memoizedState)||(He=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ym(){}function Xm(t,e){var n=ce,r=at(),i=e(),s=!vt(r.memoizedState,i);if(s&&(r.memoizedState=i,He=!0),r=r.queue,Vu(eg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,os(9,Zm.bind(null,n,r,i,e),void 0,null),Ce===null)throw Error(E(349));Jn&30||Jm(n,e,i)}return i}function Jm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zm(t,e,n,r){e.value=n,e.getSnapshot=r,tg(e)&&ng(t)}function eg(t,e,n){return n(function(){tg(e)&&ng(t)})}function tg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vt(t,n)}catch{return!0}}function ng(t){var e=Vt(t,1);e!==null&&_t(e,t,1,-1)}function $h(t){var e=St();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:t},e.queue=t,t=t.dispatch=cw.bind(null,ce,t),[e.memoizedState,t]}function os(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rg(){return at().memoizedState}function fo(t,e,n,r){var i=St();ce.flags|=t,i.memoizedState=os(1|e,n,void 0,r===void 0?null:r)}function Cl(t,e,n,r){var i=at();r=r===void 0?null:r;var s=void 0;if(_e!==null){var o=_e.memoizedState;if(s=o.destroy,r!==null&&$u(r,o.deps)){i.memoizedState=os(e,n,s,r);return}}ce.flags|=t,i.memoizedState=os(1|e,n,s,r)}function Wh(t,e){return fo(8390656,8,t,e)}function Vu(t,e){return Cl(2048,8,t,e)}function ig(t,e){return Cl(4,2,t,e)}function sg(t,e){return Cl(4,4,t,e)}function og(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lg(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4,4,og.bind(null,e,t),n)}function Gu(){}function ag(t,e){var n=at();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$u(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function cg(t,e){var n=at();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$u(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ug(t,e,n){return Jn&21?(vt(n,e)||(n=mm(),ce.lanes|=n,Zn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,He=!0),t.memoizedState=n)}function lw(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=wa.transition;wa.transition={};try{t(!1),e()}finally{Y=n,wa.transition=r}}function dg(){return at().memoizedState}function aw(t,e,n){var r=wn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hg(t))fg(e,n);else if(n=Km(t,e,n,r),n!==null){var i=je();_t(n,t,r,i),pg(n,e,r)}}function cw(t,e,n){var r=wn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hg(t))fg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,vt(l,o)){var a=e.interleaved;a===null?(i.next=i,ju(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Km(t,e,i,r),n!==null&&(i=je(),_t(n,t,r,i),pg(n,e,r))}}function hg(t){var e=t.alternate;return t===ce||e!==null&&e===ce}function fg(t,e){Mi=zo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Su(t,n)}}var Bo={readContext:lt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},uw={readContext:lt,useCallback:function(t,e){return St().memoizedState=[t,e===void 0?null:e],t},useContext:lt,useEffect:Wh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fo(4194308,4,og.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fo(4194308,4,t,e)},useInsertionEffect:function(t,e){return fo(4,2,t,e)},useMemo:function(t,e){var n=St();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=St();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=aw.bind(null,ce,t),[r.memoizedState,t]},useRef:function(t){var e=St();return t={current:t},e.memoizedState=t},useState:$h,useDebugValue:Gu,useDeferredValue:function(t){return St().memoizedState=t},useTransition:function(){var t=$h(!1),e=t[0];return t=lw.bind(null,t[1]),St().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ce,i=St();if(oe){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),Ce===null)throw Error(E(349));Jn&30||Jm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Wh(eg.bind(null,r,s,t),[t]),r.flags|=2048,os(9,Zm.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=St(),e=Ce.identifierPrefix;if(oe){var n=Mt,r=Dt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=is++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ow++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dw={readContext:lt,useCallback:ag,useContext:lt,useEffect:Vu,useImperativeHandle:lg,useInsertionEffect:ig,useLayoutEffect:sg,useMemo:cg,useReducer:xa,useRef:rg,useState:function(){return xa(ss)},useDebugValue:Gu,useDeferredValue:function(t){var e=at();return ug(e,_e.memoizedState,t)},useTransition:function(){var t=xa(ss)[0],e=at().memoizedState;return[t,e]},useMutableSource:Ym,useSyncExternalStore:Xm,useId:dg,unstable_isNewReconciler:!1},hw={readContext:lt,useCallback:ag,useContext:lt,useEffect:Vu,useImperativeHandle:lg,useInsertionEffect:ig,useLayoutEffect:sg,useMemo:cg,useReducer:Ea,useRef:rg,useState:function(){return Ea(ss)},useDebugValue:Gu,useDeferredValue:function(t){var e=at();return _e===null?e.memoizedState=t:ug(e,_e.memoizedState,t)},useTransition:function(){var t=Ea(ss)[0],e=at().memoizedState;return[t,e]},useMutableSource:Ym,useSyncExternalStore:Xm,useId:dg,unstable_isNewReconciler:!1};function dt(t,e){if(t&&t.defaultProps){e=ue({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function wc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ue({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=je(),i=wn(t),s=zt(r,i);s.payload=e,n!=null&&(s.callback=n),e=yn(t,s,i),e!==null&&(_t(e,t,i,r),uo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=je(),i=wn(t),s=zt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yn(t,s,i),e!==null&&(_t(e,t,i,r),uo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=je(),r=wn(t),i=zt(n,r);i.tag=2,e!=null&&(i.callback=e),e=yn(t,i,r),e!==null&&(_t(e,t,r,n),uo(e,t,r))}};function Hh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ji(n,r)||!Ji(i,s):!0}function mg(t,e,n){var r=!1,i=Tn,s=e.contextType;return typeof s=="object"&&s!==null?s=lt(s):(i=Ke(e)?Yn:De.current,r=e.contextTypes,s=(r=r!=null)?Br(t,i):Tn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function xc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Fu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=lt(s):(s=Ke(e)?Yn:De.current,i.context=Br(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&kl.enqueueReplaceState(i,i.state,null),Fo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vr(t,e){try{var n="",r=e;do n+=zv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Sa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ec(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fw=typeof WeakMap=="function"?WeakMap:Map;function gg(t,e,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wo||(Wo=!0,Ac=r),Ec(t,e)},n}function _g(t,e,n){n=zt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ec(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ec(t,e),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Gh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new fw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Nw.bind(null,t,e,n),e.then(t,t))}function Kh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zt(-1,1),e.tag=2,yn(n,e,1))),n.lanes|=1),t)}var pw=Yt.ReactCurrentOwner,He=!1;function Me(t,e,n,r){e.child=t===null?Gm(e,null,n,r):Wr(e,t.child,n,r)}function Qh(t,e,n,r,i){n=n.render;var s=e.ref;return Or(e,i),r=Wu(t,e,n,r,s,i),n=Hu(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(oe&&n&&Pu(e),e.flags|=1,Me(t,e,r,i),e.child)}function Yh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ed(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,yg(t,e,s,r,i)):(t=_o(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ji,n(o,r)&&t.ref===e.ref)return Gt(t,e,i)}return e.flags|=1,t=xn(s,r),t.ref=e.ref,t.return=e,e.child=t}function yg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ji(s,r)&&t.ref===e.ref)if(He=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(He=!0);else return e.lanes=t.lanes,Gt(t,e,i)}return Sc(t,e,n,r,i)}function vg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Ir,Ye),Ye|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(Ir,Ye),Ye|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ne(Ir,Ye),Ye|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ne(Ir,Ye),Ye|=r;return Me(t,e,i,n),e.child}function wg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sc(t,e,n,r,i){var s=Ke(n)?Yn:De.current;return s=Br(e,s),Or(e,i),n=Wu(t,e,n,r,s,i),r=Hu(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(oe&&r&&Pu(e),e.flags|=1,Me(t,e,n,i),e.child)}function Xh(t,e,n,r,i){if(Ke(n)){var s=!0;Oo(e)}else s=!1;if(Or(e,i),e.stateNode===null)po(t,e),mg(e,n,r),xc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=lt(c):(c=Ke(n)?Yn:De.current,c=Br(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&Vh(e,o,r,c),rn=!1;var h=e.memoizedState;o.state=h,Fo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Ge.current||rn?(typeof f=="function"&&(wc(e,n,f,r),a=e.memoizedState),(l=rn||Hh(e,n,l,r,h,a,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,qm(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:dt(e.type,l),o.props=c,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=lt(a):(a=Ke(n)?Yn:De.current,a=Br(e,a));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&Vh(e,o,r,a),rn=!1,h=e.memoizedState,o.state=h,Fo(e,r,o,i);var y=e.memoizedState;l!==d||h!==y||Ge.current||rn?(typeof _=="function"&&(wc(e,n,_,r),y=e.memoizedState),(c=rn||Hh(e,n,c,r,h,y,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Cc(t,e,n,r,s,i)}function Cc(t,e,n,r,i,s){wg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Lh(e,n,!1),Gt(t,e,s);r=e.stateNode,pw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Wr(e,t.child,null,s),e.child=Wr(e,null,l,s)):Me(t,e,l,s),e.memoizedState=r.state,i&&Lh(e,n,!0),e.child}function xg(t){var e=t.stateNode;e.pendingContext?Mh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mh(t,e.context,!1),Uu(t,e.containerInfo)}function Jh(t,e,n,r,i){return $r(),Ou(i),e.flags|=256,Me(t,e,n,r),e.child}var kc={dehydrated:null,treeContext:null,retryLane:0};function Ic(t){return{baseLanes:t,cachePool:null,transitions:null}}function Eg(t,e,n){var r=e.pendingProps,i=ae.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ne(ae,i&1),t===null)return yc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tl(o,r,0,null),t=Qn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ic(n),e.memoizedState=kc,t):Ku(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return mw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=xn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=xn(l,s):(s=Qn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ic(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kc,r}return s=t.child,t=s.sibling,r=xn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ku(t,e){return e=Tl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Js(t,e,n,r){return r!==null&&Ou(r),Wr(e,t.child,null,n),t=Ku(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Sa(Error(E(422))),Js(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Tl({mode:"visible",children:r.children},i,0,null),s=Qn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Wr(e,t.child,null,o),e.child.memoizedState=Ic(o),e.memoizedState=kc,s);if(!(e.mode&1))return Js(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=Sa(s,r,void 0),Js(t,e,o,r)}if(l=(o&t.childLanes)!==0,He||l){if(r=Ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vt(t,i),_t(r,t,i,-1))}return Zu(),r=Sa(Error(E(421))),Js(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Tw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Xe=_n(i.nextSibling),Je=e,oe=!0,ft=null,t!==null&&(nt[rt++]=Dt,nt[rt++]=Mt,nt[rt++]=Xn,Dt=t.id,Mt=t.overflow,Xn=e),e=Ku(e,r.children),e.flags|=4096,e)}function Zh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),vc(t.return,e,n)}function Ca(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Sg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Me(t,e,r.children,n),r=ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zh(t,n,e);else if(t.tag===19)Zh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Uo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ca(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Uo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ca(e,!0,n,null,s);break;case"together":Ca(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function po(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=xn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gw(t,e,n){switch(e.tag){case 3:xg(e),$r();break;case 5:Qm(e);break;case 1:Ke(e.type)&&Oo(e);break;case 4:Uu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ne(Lo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ne(ae,ae.current&1),e.flags|=128,null):n&e.child.childLanes?Eg(t,e,n):(ne(ae,ae.current&1),t=Gt(t,e,n),t!==null?t.sibling:null);ne(ae,ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Sg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(ae,ae.current),r)break;return null;case 22:case 23:return e.lanes=0,vg(t,e,n)}return Gt(t,e,n)}var Cg,Nc,kg,Ig;Cg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nc=function(){};kg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Gn(Nt.current);var s=null;switch(n){case"input":i=Qa(t,i),r=Qa(t,r),s=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),s=[];break;case"textarea":i=Ja(t,i),r=Ja(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Po)}ec(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Vi.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Vi.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&re("scroll",t),s||l===a||(s=[])):(s=s||[]).push(c,a))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Ig=function(t,e,n,r){n!==r&&(e.flags|=4)};function yi(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function _w(t,e,n){var r=e.pendingProps;switch(Au(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return Ke(e.type)&&Ao(),Ae(e),null;case 3:return r=e.stateNode,Hr(),ie(Ge),ie(De),Bu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ys(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ft!==null&&(Mc(ft),ft=null))),Nc(t,e),Ae(e),null;case 5:zu(e);var i=Gn(rs.current);if(n=e.type,t!==null&&e.stateNode!=null)kg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Ae(e),null}if(t=Gn(Nt.current),Ys(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ct]=e,r[ts]=s,t=(e.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<Ni.length;i++)re(Ni[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":ah(r,s),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},re("invalid",r);break;case"textarea":uh(r,s),re("invalid",r)}ec(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Qs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Qs(r.textContent,l,t),i=["children",""+l]):Vi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":Bs(r),ch(r,s,!0);break;case"textarea":Bs(r),dh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Po)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=em(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ct]=e,t[ts]=r,Cg(t,e,!1,!1),e.stateNode=t;e:{switch(o=tc(n,r),n){case"dialog":re("cancel",t),re("close",t),i=r;break;case"iframe":case"object":case"embed":re("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ni.length;i++)re(Ni[i],t);i=r;break;case"source":re("error",t),i=r;break;case"img":case"image":case"link":re("error",t),re("load",t),i=r;break;case"details":re("toggle",t),i=r;break;case"input":ah(t,r),i=Qa(t,r),re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),re("invalid",t);break;case"textarea":uh(t,r),i=Ja(t,r),re("invalid",t);break;default:i=r}ec(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?rm(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&tm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Gi(t,a):typeof a=="number"&&Gi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Vi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&re("scroll",t):a!=null&&_u(t,s,a,o))}switch(n){case"input":Bs(t),ch(t,r,!1);break;case"textarea":Bs(t),dh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Nn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?br(t,!!r.multiple,s,!1):r.defaultValue!=null&&br(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Po)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)Ig(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Gn(rs.current),Gn(Nt.current),Ys(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ct]=e,(s=r.nodeValue!==n)&&(t=Je,t!==null))switch(t.tag){case 3:Qs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=e,e.stateNode=r}return Ae(e),null;case 13:if(ie(ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&Xe!==null&&e.mode&1&&!(e.flags&128))Hm(),$r(),e.flags|=98560,s=!1;else if(s=Ys(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Ct]=e}else $r(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),s=!1}else ft!==null&&(Mc(ft),ft=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ae.current&1?we===0&&(we=3):Zu())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return Hr(),Nc(t,e),t===null&&Zi(e.stateNode.containerInfo),Ae(e),null;case 10:return Lu(e.type._context),Ae(e),null;case 17:return Ke(e.type)&&Ao(),Ae(e),null;case 19:if(ie(ae),s=e.memoizedState,s===null)return Ae(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)yi(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Uo(t),o!==null){for(e.flags|=128,yi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(ae,ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&me()>Gr&&(e.flags|=128,r=!0,yi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Uo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),yi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return Ae(e),null}else 2*me()-s.renderingStartTime>Gr&&n!==1073741824&&(e.flags|=128,r=!0,yi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=me(),e.sibling=null,n=ae.current,ne(ae,r?n&1|2:n&1),e):(Ae(e),null);case 22:case 23:return Ju(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ye&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function yw(t,e){switch(Au(e),e.tag){case 1:return Ke(e.type)&&Ao(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hr(),ie(Ge),ie(De),Bu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zu(e),null;case 13:if(ie(ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));$r()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(ae),null;case 4:return Hr(),null;case 10:return Lu(e.type._context),null;case 22:case 23:return Ju(),null;case 24:return null;default:return null}}var Zs=!1,Oe=!1,vw=typeof WeakSet=="function"?WeakSet:Set,b=null;function kr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(t,e,r)}else n.current=null}function Tc(t,e,n){try{n()}catch(r){de(t,e,r)}}var ef=!1;function ww(t,e){if(dc=To,t=Pm(),Ru(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)h=d,d=_;for(;;){if(d===t)break t;if(h===n&&++c===i&&(l=o),h===s&&++f===r&&(a=o),(_=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(hc={focusedElem:t,selectionRange:n},To=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,C=y.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:dt(e.type,v),C);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){de(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return y=ef,ef=!1,y}function Li(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Tc(e,n,s)}i=i.next}while(i!==r)}}function Il(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ng(t){var e=t.alternate;e!==null&&(t.alternate=null,Ng(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ct],delete e[ts],delete e[mc],delete e[nw],delete e[rw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tg(t){return t.tag===5||t.tag===3||t.tag===4}function tf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Po));else if(r!==4&&(t=t.child,t!==null))for(Rc(t,e,n),t=t.sibling;t!==null;)Rc(t,e,n),t=t.sibling}function Pc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Pc(t,e,n),t=t.sibling;t!==null;)Pc(t,e,n),t=t.sibling}var ke=null,ht=!1;function Zt(t,e,n){for(n=n.child;n!==null;)bg(t,e,n),n=n.sibling}function bg(t,e,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(yl,n)}catch{}switch(n.tag){case 5:Oe||kr(n,e);case 6:var r=ke,i=ht;ke=null,Zt(t,e,n),ke=r,ht=i,ke!==null&&(ht?(t=ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(ht?(t=ke,n=n.stateNode,t.nodeType===8?_a(t.parentNode,n):t.nodeType===1&&_a(t,n),Yi(t)):_a(ke,n.stateNode));break;case 4:r=ke,i=ht,ke=n.stateNode.containerInfo,ht=!0,Zt(t,e,n),ke=r,ht=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tc(n,e,o),i=i.next}while(i!==r)}Zt(t,e,n);break;case 1:if(!Oe&&(kr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){de(n,e,l)}Zt(t,e,n);break;case 21:Zt(t,e,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,Zt(t,e,n),Oe=r):Zt(t,e,n);break;default:Zt(t,e,n)}}function nf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vw),e.forEach(function(r){var i=bw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ut(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ke=l.stateNode,ht=!1;break e;case 3:ke=l.stateNode.containerInfo,ht=!0;break e;case 4:ke=l.stateNode.containerInfo,ht=!0;break e}l=l.return}if(ke===null)throw Error(E(160));bg(s,o,i),ke=null,ht=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){de(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rg(e,t),e=e.sibling}function Rg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ut(e,t),Et(t),r&4){try{Li(3,t,t.return),Il(3,t)}catch(v){de(t,t.return,v)}try{Li(5,t,t.return)}catch(v){de(t,t.return,v)}}break;case 1:ut(e,t),Et(t),r&512&&n!==null&&kr(n,n.return);break;case 5:if(ut(e,t),Et(t),r&512&&n!==null&&kr(n,n.return),t.flags&32){var i=t.stateNode;try{Gi(i,"")}catch(v){de(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Jp(i,s),tc(l,o);var c=tc(l,s);for(o=0;o<a.length;o+=2){var f=a[o],d=a[o+1];f==="style"?rm(i,d):f==="dangerouslySetInnerHTML"?tm(i,d):f==="children"?Gi(i,d):_u(i,f,d,c)}switch(l){case"input":Ya(i,s);break;case"textarea":Zp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?br(i,!!s.multiple,_,!1):h!==!!s.multiple&&(s.defaultValue!=null?br(i,!!s.multiple,s.defaultValue,!0):br(i,!!s.multiple,s.multiple?[]:"",!1))}i[ts]=s}catch(v){de(t,t.return,v)}}break;case 6:if(ut(e,t),Et(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){de(t,t.return,v)}}break;case 3:if(ut(e,t),Et(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yi(e.containerInfo)}catch(v){de(t,t.return,v)}break;case 4:ut(e,t),Et(t);break;case 13:ut(e,t),Et(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Yu=me())),r&4&&nf(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Oe=(c=Oe)||f,ut(e,t),Oe=c):ut(e,t),Et(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(b=t,f=t.child;f!==null;){for(d=b=f;b!==null;){switch(h=b,_=h.child,h.tag){case 0:case 11:case 14:case 15:Li(4,h,h.return);break;case 1:kr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){de(r,n,v)}}break;case 5:kr(h,h.return);break;case 22:if(h.memoizedState!==null){sf(d);continue}}_!==null?(_.return=h,b=_):sf(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=nm("display",o))}catch(v){de(t,t.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){de(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ut(e,t),Et(t),r&4&&nf(t);break;case 21:break;default:ut(e,t),Et(t)}}function Et(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Tg(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gi(i,""),r.flags&=-33);var s=tf(t);Pc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=tf(t);Rc(t,l,o);break;default:throw Error(E(161))}}catch(a){de(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xw(t,e,n){b=t,Pg(t)}function Pg(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Zs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Oe;l=Zs;var c=Oe;if(Zs=o,(Oe=a)&&!c)for(b=i;b!==null;)o=b,a=o.child,o.tag===22&&o.memoizedState!==null?of(i):a!==null?(a.return=o,b=a):of(i);for(;s!==null;)b=s,Pg(s),s=s.sibling;b=i,Zs=l,Oe=c}rf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):rf(t)}}function rf(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||Il(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:dt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Bh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Yi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Oe||e.flags&512&&bc(e)}catch(h){de(e,e.return,h)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function sf(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function of(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Il(4,e)}catch(a){de(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){de(e,i,a)}}var s=e.return;try{bc(e)}catch(a){de(e,s,a)}break;case 5:var o=e.return;try{bc(e)}catch(a){de(e,o,a)}}}catch(a){de(e,e.return,a)}if(e===t){b=null;break}var l=e.sibling;if(l!==null){l.return=e.return,b=l;break}b=e.return}}var Ew=Math.ceil,$o=Yt.ReactCurrentDispatcher,qu=Yt.ReactCurrentOwner,ot=Yt.ReactCurrentBatchConfig,K=0,Ce=null,ge=null,Ne=0,Ye=0,Ir=Mn(0),we=0,ls=null,Zn=0,Nl=0,Qu=0,ji=null,We=null,Yu=0,Gr=1/0,At=null,Wo=!1,Ac=null,vn=null,eo=!1,hn=null,Ho=0,Fi=0,Oc=null,mo=-1,go=0;function je(){return K&6?me():mo!==-1?mo:mo=me()}function wn(t){return t.mode&1?K&2&&Ne!==0?Ne&-Ne:sw.transition!==null?(go===0&&(go=mm()),go):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Em(t.type)),t):1}function _t(t,e,n,r){if(50<Fi)throw Fi=0,Oc=null,Error(E(185));xs(t,n,r),(!(K&2)||t!==Ce)&&(t===Ce&&(!(K&2)&&(Nl|=n),we===4&&on(t,Ne)),qe(t,r),n===1&&K===0&&!(e.mode&1)&&(Gr=me()+500,Sl&&Ln()))}function qe(t,e){var n=t.callbackNode;s0(t,e);var r=No(t,t===Ce?Ne:0);if(r===0)n!==null&&ph(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ph(n),e===1)t.tag===0?iw(lf.bind(null,t)):Bm(lf.bind(null,t)),ew(function(){!(K&6)&&Ln()}),n=null;else{switch(gm(r)){case 1:n=Eu;break;case 4:n=fm;break;case 16:n=Io;break;case 536870912:n=pm;break;default:n=Io}n=Ug(n,Ag.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ag(t,e){if(mo=-1,go=0,K&6)throw Error(E(327));var n=t.callbackNode;if(Dr()&&t.callbackNode!==n)return null;var r=No(t,t===Ce?Ne:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vo(t,r);else{e=r;var i=K;K|=2;var s=Dg();(Ce!==t||Ne!==e)&&(At=null,Gr=me()+500,qn(t,e));do try{kw();break}catch(l){Og(t,l)}while(!0);Mu(),$o.current=s,K=i,ge!==null?e=0:(Ce=null,Ne=0,e=we)}if(e!==0){if(e===2&&(i=oc(t),i!==0&&(r=i,e=Dc(t,i))),e===1)throw n=ls,qn(t,0),on(t,r),qe(t,me()),n;if(e===6)on(t,r);else{if(i=t.current.alternate,!(r&30)&&!Sw(i)&&(e=Vo(t,r),e===2&&(s=oc(t),s!==0&&(r=s,e=Dc(t,s))),e===1))throw n=ls,qn(t,0),on(t,r),qe(t,me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Bn(t,We,At);break;case 3:if(on(t,r),(r&130023424)===r&&(e=Yu+500-me(),10<e)){if(No(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){je(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=pc(Bn.bind(null,t,We,At),e);break}Bn(t,We,At);break;case 4:if(on(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-gt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ew(r/1960))-r,10<r){t.timeoutHandle=pc(Bn.bind(null,t,We,At),r);break}Bn(t,We,At);break;case 5:Bn(t,We,At);break;default:throw Error(E(329))}}}return qe(t,me()),t.callbackNode===n?Ag.bind(null,t):null}function Dc(t,e){var n=ji;return t.current.memoizedState.isDehydrated&&(qn(t,e).flags|=256),t=Vo(t,e),t!==2&&(e=We,We=n,e!==null&&Mc(e)),t}function Mc(t){We===null?We=t:We.push.apply(We,t)}function Sw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!vt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function on(t,e){for(e&=~Qu,e&=~Nl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gt(e),r=1<<n;t[n]=-1,e&=~r}}function lf(t){if(K&6)throw Error(E(327));Dr();var e=No(t,0);if(!(e&1))return qe(t,me()),null;var n=Vo(t,e);if(t.tag!==0&&n===2){var r=oc(t);r!==0&&(e=r,n=Dc(t,r))}if(n===1)throw n=ls,qn(t,0),on(t,e),qe(t,me()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Bn(t,We,At),qe(t,me()),null}function Xu(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(Gr=me()+500,Sl&&Ln())}}function er(t){hn!==null&&hn.tag===0&&!(K&6)&&Dr();var e=K;K|=1;var n=ot.transition,r=Y;try{if(ot.transition=null,Y=1,t)return t()}finally{Y=r,ot.transition=n,K=e,!(K&6)&&Ln()}}function Ju(){Ye=Ir.current,ie(Ir)}function qn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Z0(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Au(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ao();break;case 3:Hr(),ie(Ge),ie(De),Bu();break;case 5:zu(r);break;case 4:Hr();break;case 13:ie(ae);break;case 19:ie(ae);break;case 10:Lu(r.type._context);break;case 22:case 23:Ju()}n=n.return}if(Ce=t,ge=t=xn(t.current,null),Ne=Ye=e,we=0,ls=null,Qu=Nl=Zn=0,We=ji=null,Vn!==null){for(e=0;e<Vn.length;e++)if(n=Vn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Vn=null}return t}function Og(t,e){do{var n=ge;try{if(Mu(),ho.current=Bo,zo){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zo=!1}if(Jn=0,Ee=_e=ce=null,Mi=!1,is=0,qu.current=null,n===null||n.return===null){we=1,ls=e,ge=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ne,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=Kh(o);if(_!==null){_.flags&=-257,qh(_,o,l,s,e),_.mode&1&&Gh(s,c,e),e=_,a=c;var y=e.updateQueue;if(y===null){var v=new Set;v.add(a),e.updateQueue=v}else y.add(a);break e}else{if(!(e&1)){Gh(s,c,e),Zu();break e}a=Error(E(426))}}else if(oe&&l.mode&1){var C=Kh(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),qh(C,o,l,s,e),Ou(Vr(a,l));break e}}s=a=Vr(a,l),we!==4&&(we=2),ji===null?ji=[s]:ji.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=gg(s,a,e);zh(s,m);break e;case 1:l=a;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(vn===null||!vn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=_g(s,l,e);zh(s,w);break e}}s=s.return}while(s!==null)}Lg(n)}catch(k){e=k,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function Dg(){var t=$o.current;return $o.current=Bo,t===null?Bo:t}function Zu(){(we===0||we===3||we===2)&&(we=4),Ce===null||!(Zn&268435455)&&!(Nl&268435455)||on(Ce,Ne)}function Vo(t,e){var n=K;K|=2;var r=Dg();(Ce!==t||Ne!==e)&&(At=null,qn(t,e));do try{Cw();break}catch(i){Og(t,i)}while(!0);if(Mu(),K=n,$o.current=r,ge!==null)throw Error(E(261));return Ce=null,Ne=0,we}function Cw(){for(;ge!==null;)Mg(ge)}function kw(){for(;ge!==null&&!Yv();)Mg(ge)}function Mg(t){var e=Fg(t.alternate,t,Ye);t.memoizedProps=t.pendingProps,e===null?Lg(t):ge=e,qu.current=null}function Lg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yw(n,e),n!==null){n.flags&=32767,ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,ge=null;return}}else if(n=_w(n,e,Ye),n!==null){ge=n;return}if(e=e.sibling,e!==null){ge=e;return}ge=e=t}while(e!==null);we===0&&(we=5)}function Bn(t,e,n){var r=Y,i=ot.transition;try{ot.transition=null,Y=1,Iw(t,e,n,r)}finally{ot.transition=i,Y=r}return null}function Iw(t,e,n,r){do Dr();while(hn!==null);if(K&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(o0(t,s),t===Ce&&(ge=Ce=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eo||(eo=!0,Ug(Io,function(){return Dr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ot.transition,ot.transition=null;var o=Y;Y=1;var l=K;K|=4,qu.current=null,ww(t,n),Rg(n,t),G0(hc),To=!!dc,hc=dc=null,t.current=n,xw(n),Xv(),K=l,Y=o,ot.transition=s}else t.current=n;if(eo&&(eo=!1,hn=t,Ho=i),s=t.pendingLanes,s===0&&(vn=null),e0(n.stateNode),qe(t,me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wo)throw Wo=!1,t=Ac,Ac=null,t;return Ho&1&&t.tag!==0&&Dr(),s=t.pendingLanes,s&1?t===Oc?Fi++:(Fi=0,Oc=t):Fi=0,Ln(),null}function Dr(){if(hn!==null){var t=gm(Ho),e=ot.transition,n=Y;try{if(ot.transition=null,Y=16>t?16:t,hn===null)var r=!1;else{if(t=hn,hn=null,Ho=0,K&6)throw Error(E(331));var i=K;for(K|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(b=c;b!==null;){var f=b;switch(f.tag){case 0:case 11:case 15:Li(8,f,s)}var d=f.child;if(d!==null)d.return=f,b=d;else for(;b!==null;){f=b;var h=f.sibling,_=f.return;if(Ng(f),f===c){b=null;break}if(h!==null){h.return=_,b=h;break}b=_}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Li(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,b=m;break e}b=s.return}}var p=t.current;for(b=p;b!==null;){o=b;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,b=g;else e:for(o=p;b!==null;){if(l=b,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Il(9,l)}}catch(k){de(l,l.return,k)}if(l===o){b=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,b=w;break e}b=l.return}}if(K=i,Ln(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(yl,t)}catch{}r=!0}return r}finally{Y=n,ot.transition=e}}return!1}function af(t,e,n){e=Vr(n,e),e=gg(t,e,1),t=yn(t,e,1),e=je(),t!==null&&(xs(t,1,e),qe(t,e))}function de(t,e,n){if(t.tag===3)af(t,t,n);else for(;e!==null;){if(e.tag===3){af(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){t=Vr(n,t),t=_g(e,t,1),e=yn(e,t,1),t=je(),e!==null&&(xs(e,1,t),qe(e,t));break}}e=e.return}}function Nw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=je(),t.pingedLanes|=t.suspendedLanes&n,Ce===t&&(Ne&n)===n&&(we===4||we===3&&(Ne&130023424)===Ne&&500>me()-Yu?qn(t,0):Qu|=n),qe(t,e)}function jg(t,e){e===0&&(t.mode&1?(e=Hs,Hs<<=1,!(Hs&130023424)&&(Hs=4194304)):e=1);var n=je();t=Vt(t,e),t!==null&&(xs(t,e,n),qe(t,n))}function Tw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jg(t,n)}function bw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),jg(t,n)}var Fg;Fg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ge.current)He=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return He=!1,gw(t,e,n);He=!!(t.flags&131072)}else He=!1,oe&&e.flags&1048576&&$m(e,Mo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;po(t,e),t=e.pendingProps;var i=Br(e,De.current);Or(e,n),i=Wu(null,e,r,t,i,n);var s=Hu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ke(r)?(s=!0,Oo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fu(e),i.updater=kl,e.stateNode=i,i._reactInternals=e,xc(e,r,t,n),e=Cc(null,e,r,!0,s,n)):(e.tag=0,oe&&s&&Pu(e),Me(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(po(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Pw(r),t=dt(r,t),i){case 0:e=Sc(null,e,r,t,n);break e;case 1:e=Xh(null,e,r,t,n);break e;case 11:e=Qh(null,e,r,t,n);break e;case 14:e=Yh(null,e,r,dt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),Sc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),Xh(t,e,r,i,n);case 3:e:{if(xg(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,qm(t,e),Fo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vr(Error(E(423)),e),e=Jh(t,e,r,n,i);break e}else if(r!==i){i=Vr(Error(E(424)),e),e=Jh(t,e,r,n,i);break e}else for(Xe=_n(e.stateNode.containerInfo.firstChild),Je=e,oe=!0,ft=null,n=Gm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($r(),r===i){e=Gt(t,e,n);break e}Me(t,e,r,n)}e=e.child}return e;case 5:return Qm(e),t===null&&yc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,fc(r,i)?o=null:s!==null&&fc(r,s)&&(e.flags|=32),wg(t,e),Me(t,e,o,n),e.child;case 6:return t===null&&yc(e),null;case 13:return Eg(t,e,n);case 4:return Uu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Wr(e,null,r,n):Me(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),Qh(t,e,r,i,n);case 7:return Me(t,e,e.pendingProps,n),e.child;case 8:return Me(t,e,e.pendingProps.children,n),e.child;case 12:return Me(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ne(Lo,r._currentValue),r._currentValue=o,s!==null)if(vt(s.value,o)){if(s.children===i.children&&!Ge.current){e=Gt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=zt(-1,n&-n),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),vc(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),vc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Me(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Or(e,n),i=lt(i),r=r(i),e.flags|=1,Me(t,e,r,n),e.child;case 14:return r=e.type,i=dt(r,e.pendingProps),i=dt(r.type,i),Yh(t,e,r,i,n);case 15:return yg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:dt(r,i),po(t,e),e.tag=1,Ke(r)?(t=!0,Oo(e)):t=!1,Or(e,n),mg(e,r,i),xc(e,r,i,n),Cc(null,e,r,!0,t,n);case 19:return Sg(t,e,n);case 22:return vg(t,e,n)}throw Error(E(156,e.tag))};function Ug(t,e){return hm(t,e)}function Rw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(t,e,n,r){return new Rw(t,e,n,r)}function ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pw(t){if(typeof t=="function")return ed(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vu)return 11;if(t===wu)return 14}return 2}function xn(t,e){var n=t.alternate;return n===null?(n=it(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _o(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ed(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gr:return Qn(n.children,i,s,e);case yu:o=8,i|=8;break;case Va:return t=it(12,n,e,i|2),t.elementType=Va,t.lanes=s,t;case Ga:return t=it(13,n,e,i),t.elementType=Ga,t.lanes=s,t;case Ka:return t=it(19,n,e,i),t.elementType=Ka,t.lanes=s,t;case Qp:return Tl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Kp:o=10;break e;case qp:o=9;break e;case vu:o=11;break e;case wu:o=14;break e;case nn:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=it(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qn(t,e,n,r){return t=it(7,t,r,e),t.lanes=n,t}function Tl(t,e,n,r){return t=it(22,t,r,e),t.elementType=Qp,t.lanes=n,t.stateNode={isHidden:!1},t}function ka(t,e,n){return t=it(6,t,null,e),t.lanes=n,t}function Ia(t,e,n){return e=it(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Aw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function td(t,e,n,r,i,s,o,l,a){return t=new Aw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=it(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fu(s),t}function Ow(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function zg(t){if(!t)return Tn;t=t._reactInternals;e:{if(ar(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ke(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Ke(n))return zm(t,n,e)}return e}function Bg(t,e,n,r,i,s,o,l,a){return t=td(n,r,!0,t,i,s,o,l,a),t.context=zg(null),n=t.current,r=je(),i=wn(n),s=zt(r,i),s.callback=e??null,yn(n,s,i),t.current.lanes=i,xs(t,i,r),qe(t,r),t}function bl(t,e,n,r){var i=e.current,s=je(),o=wn(i);return n=zg(n),e.context===null?e.context=n:e.pendingContext=n,e=zt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=yn(i,e,o),t!==null&&(_t(t,i,o,s),uo(t,i,o)),o}function Go(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nd(t,e){cf(t,e),(t=t.alternate)&&cf(t,e)}function Dw(){return null}var $g=typeof reportError=="function"?reportError:function(t){console.error(t)};function rd(t){this._internalRoot=t}Rl.prototype.render=rd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));bl(t,e,null,null)};Rl.prototype.unmount=rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;er(function(){bl(null,t,null,null)}),e[Ht]=null}};function Rl(t){this._internalRoot=t}Rl.prototype.unstable_scheduleHydration=function(t){if(t){var e=vm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sn.length&&e!==0&&e<sn[n].priority;n++);sn.splice(n,0,t),n===0&&xm(t)}};function id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function uf(){}function Mw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Go(o);s.call(c)}}var o=Bg(e,r,t,0,null,!1,!1,"",uf);return t._reactRootContainer=o,t[Ht]=o.current,Zi(t.nodeType===8?t.parentNode:t),er(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Go(a);l.call(c)}}var a=td(t,0,!1,null,null,!1,!1,"",uf);return t._reactRootContainer=a,t[Ht]=a.current,Zi(t.nodeType===8?t.parentNode:t),er(function(){bl(e,a,n,r)}),a}function Al(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Go(o);l.call(a)}}bl(e,o,t,i)}else o=Mw(n,e,t,i,r);return Go(o)}_m=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ii(e.pendingLanes);n!==0&&(Su(e,n|1),qe(e,me()),!(K&6)&&(Gr=me()+500,Ln()))}break;case 13:er(function(){var r=Vt(t,1);if(r!==null){var i=je();_t(r,t,1,i)}}),nd(t,1)}};Cu=function(t){if(t.tag===13){var e=Vt(t,134217728);if(e!==null){var n=je();_t(e,t,134217728,n)}nd(t,134217728)}};ym=function(t){if(t.tag===13){var e=wn(t),n=Vt(t,e);if(n!==null){var r=je();_t(n,t,e,r)}nd(t,e)}};vm=function(){return Y};wm=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};rc=function(t,e,n){switch(e){case"input":if(Ya(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=El(r);if(!i)throw Error(E(90));Xp(r),Ya(r,i)}}}break;case"textarea":Zp(t,n);break;case"select":e=n.value,e!=null&&br(t,!!n.multiple,e,!1)}};om=Xu;lm=er;var Lw={usingClientEntryPoint:!1,Events:[Ss,wr,El,im,sm,Xu]},vi={findFiberByHostInstance:Hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jw={bundleType:vi.bundleType,version:vi.version,rendererPackageName:vi.rendererPackageName,rendererConfig:vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=um(t),t===null?null:t.stateNode},findFiberByHostInstance:vi.findFiberByHostInstance||Dw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{yl=to.inject(jw),It=to}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lw;et.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!id(e))throw Error(E(200));return Ow(t,e,null,n)};et.createRoot=function(t,e){if(!id(t))throw Error(E(299));var n=!1,r="",i=$g;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=td(t,1,!1,null,null,n,!1,r,i),t[Ht]=e.current,Zi(t.nodeType===8?t.parentNode:t),new rd(e)};et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=um(e),t=t===null?null:t.stateNode,t};et.flushSync=function(t){return er(t)};et.hydrate=function(t,e,n){if(!Pl(e))throw Error(E(200));return Al(null,t,e,!0,n)};et.hydrateRoot=function(t,e,n){if(!id(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$g;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bg(e,null,t,1,n??null,i,!1,s,o),t[Ht]=e.current,Zi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Rl(e)};et.render=function(t,e,n){if(!Pl(e))throw Error(E(200));return Al(null,t,e,!1,n)};et.unmountComponentAtNode=function(t){if(!Pl(t))throw Error(E(40));return t._reactRootContainer?(er(function(){Al(null,null,t,!1,function(){t._reactRootContainer=null,t[Ht]=null})}),!0):!1};et.unstable_batchedUpdates=Xu;et.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Pl(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Al(t,e,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function Wg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wg)}catch(t){console.error(t)}}Wg(),Wp.exports=et;var Fw=Wp.exports,df=Fw;Wa.createRoot=df.createRoot,Wa.hydrateRoot=df.hydrateRoot;/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=t=>{const e=zw(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=F.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},a)=>F.createElement("svg",{ref:a,...Bw,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Hg("lucide",i),...!s&&!$w(l)&&{"aria-hidden":"true"},...l},[...o.map(([c,f])=>F.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=(t,e)=>{const n=F.forwardRef(({className:r,...i},s)=>F.createElement(Ww,{ref:s,iconNode:e,className:Hg(`lucide-${Uw(hf(t))}`,`lucide-${t}`,r),...i}));return n.displayName=hf(t),n};/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Lc=le("activity",Hw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]],jc=le("bed-double",Vw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]],Kw=le("bed",Gw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],Fc=le("building-2",qw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],sd=le("calendar",Qw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],ff=le("chart-column",Yw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Uc=le("circle-check",Xw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v.832",key:"1ujtp2"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2",key:"qvpao1"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",key:"ublpy"}]],Zw=le("clipboard-clock",Jw);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],pf=le("clipboard-list",ex);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],zc=le("clock",tx);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],rx=le("history",nx);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],mf=le("moon",ix);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],ox=le("shield",sx);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ax=le("sparkles",lx);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]],Vg=le("stethoscope",cx);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],gf=le("sun",ux);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],hx=le("trending-down",dx);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Gg=le("trending-up",fx);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Kg=le("triangle-alert",px);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],qg=le("user",mx);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],_f=le("users",gx);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],yx=le("wifi",_x);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],wx=le("wrench",vx);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ex=le("zap",xx),Ol={available:{label:"ว่าง",color:"#10b981",bg:"#d1fae5",icon:"🟢"},occupied:{label:"มีผู้ป่วย",color:"#ef4444",bg:"#fee2e2",icon:"🔴"},maintenance:{label:"ซ่อมบำรุง",color:"#f59e0b",bg:"#fef3c7",icon:"🟡"},cleaning:{label:"ทำความสะอาด",color:"#3b82f6",bg:"#dbeafe",icon:"🔵"}},Kr={none:{label:"เลือกเพศ"},male:{label:"ชาย"},female:{label:"หญิง"},other:{label:"อื่นๆ"}},Dl=["ICU","ศัลยกรรม","อายุรกรรม","กุมารเวช","สูติกรรม","ออร์โธปิดิกส์"],Sx=["สมชาย","มาลี","วิชัย","นภา","ประเสริฐ","สุดา","อนุชา","ลัดดา","บุญมี","สมหญิง","ชาญชัย","วรรณา","ธนพล","กัญญา","สุรชัย","นิตยา","ปิยะ","รัตนา","เกรียงไกร","อารี","สมศักดิ์","พรทิพย์","ณัฐพล","สุภาพ","วีระ","จิราภรณ์","ธีรยุทธ","ศิริพร","อภิชัย","นวลจันทร์","สุวิทย์","กนกวรรณ","ภูมิพัฒน์","มนัส","ชุติมา","ประวิทย์","ศิริวรรณ","วิเชียร","ปาณิสรา","สุเมธ","ขวัญใจ","อัครเดช","เบญจมาศ","วรพงษ์","จันทิมา","ธนาธิป","สุกัญญา","ชัยวัฒน์","ปิยนุช","รัตนชัย","ไพรัช","นฤมล","อิทธิพล","วาสนา","เดชา","ปรารถนา","ศราวุธ","กาญจนา","พิษณุ","สายฝน"],Cx=["ใจดี","รักสวย","สุขใจ","แสงทอง","มีสุข","พรมมา","ดีงาม","วงศ์ไทย","แก้วใส","ทองคำ","ศรีสุข","พันธุ์ดี","รุ่งเรือง","หวังดี","มั่นคง","สดใส","วิไล","แสนดี","พูลสุข","ใจงาม","ภูมิดี","เจริญสุข","ทรัพย์มาก","วิชาดี","คงดี","สุขสันต์","มงคล","แสนสุข","ดีเด่น","ผลดี","ใจเย็น","สว่าง","รักดี","ศรีงาม","วงศ์ดี","สุขสม","ทองใส","คุณดี","มีศิล","ใจบุญ","รุ่งโรจน์","พรหมดี","ทองดี","สุขศรี","แก้วดี","ศรีดี","วิทยา","ดีงาม","สำเร็จ","มีสุขทุกวัน"],yf={ICU:["หัวใจล้มเหลว","ระบบหายใจล้มเหลว","ความดันโลหิตต่ำวิกฤต","ติดเชื้อในกระแสเลือด","บาดเจ็บสาหัส","ภาวะช็อก","เนื้อสมองขาดเลือด","ไตวายเฉียบพลัน","ตับวาย"],ศัลยกรรม:["ผ่าตัดไส้ติ่ง","ผ่าตัดนิ่วในถุงน้ำดี","ผ่าตัดเนื้องอก","ผ่าตัดลำไส้","บาดแผลจากอุบัติเหตุ","ผ่าตัดไส้เลื่อน","ผ่าตัดกระเพาะอาหาร","ผ่าตัดตับ"],อายุรกรรม:["เบาหวาน","ความดันโลหิตสูง","โรคไต","ปอดอักเสบ","โรคหัวใจ","ตับอักเสบ","โรคเกาต์","ไทรอยด์","โรคหลอดเลือดสมอง","ลูปัส"],กุมารเวช:["ไข้เลือดออก","ปอดอักเสบในเด็ก","ท้องร่วงรุนแรง","ชักจากไข้สูง","ภูมิแพ้รุนแรง","หืดหอบ","สุกใส","คางทูม","หัดเยอรมัน"],สูติกรรม:["คลอดปกติ","ผ่าตัดคลอด","ภาวะครรภ์เป็นพิษ","รกเกาะต่ำ","ตั้งครรภ์แฝด","เบาหวานขณะตั้งครรภ์","ภาวะแท้งบุตร"],ออร์โธปิดิกส์:["กระดูกหักจากอุบัติเหตุ","เปลี่ยนข้อเข่า","เปลี่ยนข้อสะโพก","กระดูกสันหลังเสื่อม","ข้ออักเสบรูมาตอยด์","เอ็นฉีกขาด","กระดูกผุ","หมอนรองกระดูกทับเส้นประสาท"]},kx=["อาการดีขึ้นต่อเนื่อง","ติดตามอาการใกล้ชิด","รอผลตรวจเพิ่มเติม","เตรียมจำหน่ายพรุ่งนี้","ต้องการกายภาพบำบัด","นัดตรวจติดตาม 1 สัปดาห์","ควบคุมอาหารเข้มงวด","แพ้ยา Penicillin","เตรียมผ่าตัดพรุ่งนี้","รับการรักษาวันที่ 3","ครอบครัวรับทราบแล้ว","","",""],Ix=["เปลี่ยนที่นอน","ซ่อมรั้วเตียง","ตรวจเช็กอุปกรณ์","รอช่างมาซ่อม","เปลี่ยนราวกั้น"],Nx=["ทำความสะอาดหลังจำหน่าย","รอทำความสะอาด","ฆ่าเชื้อโรค","ผู้ป่วยเพิ่งจำหน่าย",""],Tx=["2026-01-10","2026-01-15","2026-01-20","2026-01-25","2026-01-28","2026-02-01","2026-02-05","2026-02-08","2026-02-10","2026-02-12","2026-02-14","2026-02-15","2026-02-17","2026-02-18","2026-02-19","2026-02-20","2026-02-21","2026-02-22","2026-02-23"],bx=t=>{let e=t;return()=>(e=e*1664525+1013904223&4294967295,(e>>>0)/4294967295)},en=(t,e)=>e[Math.floor(t()*e.length)],Rx=t=>{const e=t();return e<.45?"occupied":e<.8?"available":e<.9?"maintenance":"cleaning"},fr=(t,e,n,r)=>{const i=bx(r*31337);return Array.from({length:n},(s,o)=>{const l=r+o,a=`${e}-${String(o+1).padStart(3,"0")}`,c=Rx(i);if(c==="occupied"){const f=t==="กุมารเวช",d=t==="สูติกรรม",h=yf[t]??yf.อายุรกรรม,_=f?Math.floor(i()*14)+1:d?Math.floor(i()*20)+20:Math.floor(i()*65)+18,v=en(i,d?["female"]:["male","male","female","female","other"]);return{id:l,bedNumber:a,ward:t,status:c,patient:`${en(i,Sx)} ${en(i,Cx)}`,gender:v,age:_,admitDate:en(i,Tx),diagnosis:en(i,h),notes:en(i,kx)}}return c==="maintenance"?{id:l,bedNumber:a,ward:t,status:c,patient:"",age:"",admitDate:"",diagnosis:"",notes:en(i,Ix)}:c==="cleaning"?{id:l,bedNumber:a,ward:t,status:c,patient:"",age:"",admitDate:"",diagnosis:"",notes:en(i,Nx)}:{id:l,bedNumber:a,ward:t,status:c,patient:"",age:"",admitDate:"",diagnosis:"",notes:""}})},Px=[...fr("ICU","ICU",40,1),...fr("ศัลยกรรม","SUR",40,41),...fr("อายุรกรรม","MED",40,81),...fr("กุมารเวช","PED",30,121),...fr("สูติกรรม","OBS",25,151),...fr("ออร์โธปิดิกส์","ORT",25,176)],Qg=F.createContext({isDark:!0,toggleTheme:()=>{}});function Ax({children:t}){const[e,n]=F.useState(!1),r=()=>n(i=>!i);return u.jsx(Qg.Provider,{value:{isDark:e,toggleTheme:r},children:t})}const xt=()=>F.useContext(Qg);function Ox({filters:t,onChange:e,totalFiltered:n,totalAll:r}){const{isDark:i}=xt(),{ward:s,status:o,search:l}=t,a=i?"rgba(15,23,42,0.85)":"#ffffff",c=i?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.06)",f=i?"0 4px 16px rgba(0,0,0,0.3)":"0 2px 8px rgba(0,0,0,0.07)",d=i?"#1e293b":"#f8faff",h=i?"rgba(255,255,255,0.1)":"#e2e8f0",_=i?"#818cf8":"#6366f1",y=i?"#e2e8f0":"#1e293b",v=i?"#64748b":"#94a3b8",C={background:d,border:`1.5px solid ${h}`,color:y,fontFamily:"'Sarabun', sans-serif",outline:"none",borderRadius:"10px",padding:"0.6rem 0.85rem",fontSize:"0.875rem",transition:"border-color 0.2s, box-shadow 0.2s"},m={onFocus:p=>{p.target.style.borderColor=_,p.target.style.boxShadow=`0 0 0 3px ${_}22`},onBlur:p=>{p.target.style.borderColor=h,p.target.style.boxShadow="none"}};return u.jsxs("div",{className:"rounded-xl px-5 py-4 mb-5 flex gap-3 flex-wrap items-center",style:{background:a,border:`1px solid ${c}`,boxShadow:f,fontFamily:"'Sarabun', sans-serif"},children:[u.jsx("input",{placeholder:"🔍 ค้นหาเตียงหรือผู้ป่วย...",value:l,onChange:p=>e({...t,search:p.target.value}),style:{...C,width:"620px",cursor:"text"},...m}),u.jsxs("select",{value:s,onChange:p=>e({...t,ward:p.target.value}),style:{...C,width:"160px",cursor:"pointer"},...m,children:[u.jsx("option",{value:"ทั้งหมด",style:{background:i?"#1e293b":"#fff"},children:"วอร์ดทั้งหมด"}),Dl.map(p=>u.jsx("option",{style:{background:i?"#1e293b":"#fff"},children:p},p))]}),u.jsxs("select",{value:o,onChange:p=>e({...t,status:p.target.value}),style:{...C,width:"160px",cursor:"pointer"},...m,children:[u.jsx("option",{value:"ทั้งหมด",style:{background:i?"#1e293b":"#fff"},children:"สถานะทั้งหมด"}),Object.entries(Ol).map(([p,g])=>u.jsx("option",{value:p,style:{background:i?"#1e293b":"#fff"},children:g.label},p))]}),u.jsxs("span",{className:"text-[0.85rem] ml-auto font-medium",style:{color:v},children:["แสดง"," ",u.jsx("span",{className:"font-bold",style:{color:i?"#818cf8":"#6366f1"},children:n})," ","จาก ",r," เตียง"]})]})}function Dx({bed:t,onView:e,onEdit:n,onDelete:r}){const{isDark:i}=xt(),s=Ol[t.status],o=i?"rgba(15,23,42,0.85)":"#ffffff",l=i?`${s.color}25`:`${s.color}30`,a=i?`linear-gradient(135deg, ${s.color}18, ${s.color}08)`:s.bg,c=i?`${s.color}25`:`${s.color}30`,f=i?"#e2e8f0":"#1e3a5f",d=i?"rgba(99,102,241,0.12)":"#f1f5f9",h=i?"#818cf8":"#475569",_=i?"#f1f5f9":"#1e293b",y=i?"#64748b":"#6b7280",v=i?"rgba(255,255,255,0.04)":"#f8faff",C=i?"#94a3b8":"#374151",m=i?"rgba(255,255,255,0.06)":"#f1f5f9",p=i?"#64748b":"#9ca3af",g=i?"rgba(255,255,255,0.03)":"#f8faff",w=i?"rgba(255,255,255,0.06)":"#f1f5f9",k=i?"#334155":"#9ca3af";return u.jsxs("div",{style:{background:o,border:`1.5px solid ${l}`,fontFamily:"'Sarabun', sans-serif",boxShadow:i?`0 4px 20px rgba(0,0,0,0.4), 0 0 0 0.5px ${s.color}15`:"0 2px 12px rgba(0,0,0,0.08)",transition:"all 0.2s"},className:"rounded-2xl overflow-hidden flex flex-col h-full hover:-translate-y-[3px]",onMouseEnter:N=>{N.currentTarget.style.boxShadow=i?`0 12px 32px rgba(0,0,0,0.5), 0 0 0 1px ${s.color}35`:"0 8px 24px rgba(0,0,0,0.12)"},onMouseLeave:N=>{N.currentTarget.style.boxShadow=i?`0 4px 20px rgba(0,0,0,0.4), 0 0 0 0.5px ${s.color}15`:"0 2px 12px rgba(0,0,0,0.08)"},children:[u.jsxs("div",{style:{background:a,borderBottom:`2px solid ${c}`},className:"px-4 py-3 flex justify-between items-center",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-[1.1rem]",children:"🛏️"}),u.jsx("span",{className:"font-bold text-[0.95rem]",style:{color:f},children:t.bedNumber})]}),u.jsx("span",{className:"px-[0.65rem] py-[0.2rem] rounded-full text-[0.75rem] font-semibold text-white",style:{background:s.color,boxShadow:i?`0 0 10px ${s.color}60`:"none"},children:s.label})]}),u.jsxs("div",{className:"px-4 py-[0.875rem] flex-1",children:[u.jsx("span",{className:"text-[0.78rem] px-2 py-[0.2rem] rounded-md inline-block mb-2 font-medium",style:{background:d,color:h},children:t.ward}),t.patient?u.jsxs("div",{children:[u.jsxs("div",{className:"text-[0.95rem] font-bold mb-1",style:{color:_},children:["👤 ",t.patient]}),u.jsxs("div",{className:"text-[0.8rem]",style:{color:y},children:[t.gender&&Kr[t.gender]?`${Kr[t.gender].label} | `:"","อายุ: ",t.age," ปี | รับ: ",t.admitDate]}),u.jsxs("div",{className:"text-[0.8rem] mt-1 px-2 py-[0.35rem] rounded-md",style:{background:v,color:C},children:["🩺 ",t.diagnosis]})]}):u.jsx("div",{className:"text-[0.85rem] italic py-2",style:{color:k},children:"ไม่มีผู้ป่วย"}),t.notes&&u.jsxs("div",{className:"text-[0.75rem] mt-[0.4rem] pt-[0.4rem]",style:{borderTop:`1px solid ${m}`,color:p},children:["📝 ",t.notes]})]}),u.jsxs("div",{className:"flex gap-2 px-4 py-3 mt-auto",style:{background:g,borderTop:`1px solid ${w}`},children:[u.jsx(Na,{isDark:i,onClick:()=>e(t),label:"📋 ดู"}),u.jsx(Na,{isDark:i,onClick:()=>n(t),label:"✏️ แก้ไข",color:"#2563eb",bg:i?"rgba(37,99,235,0.12)":"#eff6ff",border:i?"rgba(59,130,246,0.3)":"#3b82f6"}),u.jsx(Na,{isDark:i,onClick:()=>r(t),label:"🗑️ ลบ",color:"#ef4444",bg:i?"rgba(239,68,68,0.1)":"#fef2f2",border:i?"rgba(239,68,68,0.3)":"#ef4444"})]})]})}function Na({isDark:t,onClick:e,label:n,color:r,bg:i,border:s}){const o=r??(t?"#94a3b8":"#374151"),l=i??(t?"rgba(255,255,255,0.05)":"#ffffff"),a=s??(t?"rgba(255,255,255,0.1)":"#e5e7eb");return u.jsx("button",{onClick:e,style:{border:`1.5px solid ${a}`,background:l,color:o,fontFamily:"'Sarabun', sans-serif"},className:"flex-1 py-[0.45rem] rounded-[7px] cursor-pointer text-[0.8rem] font-semibold hover:opacity-80 transition-opacity",children:n})}function Ml({title:t,children:e,onClose:n}){const{isDark:r}=xt(),i=r?"#0f172a":"#ffffff",s=r?"rgba(0,0,0,0.75)":"rgba(0,0,0,0.5)";return u.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-[1000] p-4",style:{background:s},children:u.jsxs("div",{className:"rounded-2xl w-full max-w-[540px] shadow-2xl overflow-hidden max-h-screen overflow-y-auto",style:{background:i,border:`1px solid ${r?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)"}`},children:[u.jsxs("div",{className:"bg-gradient-to-br from-[#1e3a5f] to-[#2563eb] px-6 py-5 flex justify-between items-center",children:[u.jsx("h2",{className:"text-white m-0 text-[1.1rem] font-bold",style:{fontFamily:"'Sarabun', sans-serif"},children:t}),u.jsx("button",{onClick:n,className:"bg-white/20 border-none text-white w-8 h-8 rounded-full cursor-pointer text-[1.1rem] flex items-center justify-center hover:bg-white/30 transition-colors",children:"✕"})]}),u.jsx("div",{className:"p-6",children:e})]})})}function Pt({label:t,type:e="text",value:n,onChange:r,options:i,required:s,disabled:o,lock:l=!1}){const{isDark:a}=xt();if(o)return null;const c=a?"#1e293b":"#f8faff",f=a?"rgba(255,255,255,0.1)":"#e2e8f0",d=a?"#818cf8":"#6366f1",h=a?"#e2e8f0":"#1e293b",_=a?"#94a3b8":"#475569",y="w-full px-[0.85rem] py-[0.6rem] rounded-lg text-sm outline-none box-border transition-all",v={background:c,border:`1.5px solid ${f}`,color:h,fontFamily:"'Sarabun', sans-serif"},C={onFocus:m=>{m.target.style.borderColor=d,m.target.style.boxShadow=`0 0 0 3px ${d}22`},onBlur:m=>{m.target.style.borderColor=f,m.target.style.boxShadow="none"}};return u.jsxs("div",{className:"mb-4",children:[u.jsxs("label",{className:"block text-[0.8rem] font-semibold mb-[0.35rem]",style:{color:_,fontFamily:"'Sarabun', sans-serif"},children:[t," ",s&&u.jsx("span",{className:"text-red-400",children:"*"})]}),i?u.jsx("select",{value:n,onChange:m=>r(m.target.value),className:y,style:{...v,cursor:"pointer"},...C,children:i.map(m=>u.jsx("option",{value:m.value??m,style:{background:a?"#1e293b":"#ffffff",color:h},children:m.label??m},m.value??m))}):e==="textarea"?u.jsx("textarea",{value:n,onChange:m=>r(m.target.value),rows:3,className:`${y} resize-y`,style:v,...C}):u.jsx("input",{type:e,value:n,onChange:m=>r(m.target.value),className:y,style:v,readOnly:l,...C})]})}function Ll({onClick:t,children:e,color:n="#2563eb",disabled:r}){return u.jsx("button",{onClick:t,disabled:r,style:{background:r?"#4b5563":n,fontFamily:"'Sarabun', sans-serif"},className:"text-white border-none px-5 py-[0.6rem] rounded-lg cursor-pointer font-semibold text-sm transition-all disabled:cursor-not-allowed disabled:opacity-60 hover:opacity-85 hover:-translate-y-px active:scale-95",children:e})}function jl({onClick:t,children:e,color:n,bg:r,border:i,disabled:s}){const{isDark:o}=xt(),l=n??(o?"#94a3b8":"#374151"),a=r??(o?"rgba(255,255,255,0.05)":"#ffffff"),c=i??(o?"rgba(255,255,255,0.15)":"#e2e8f0");return u.jsx("button",{onClick:t,disabled:s,style:{border:`1.5px solid ${c}`,background:a,color:l,fontFamily:"'Sarabun', sans-serif"},className:"px-5 py-[0.6rem] rounded-lg cursor-pointer font-semibold text-sm disabled:cursor-not-allowed disabled:opacity-60 hover:opacity-80 transition-all",children:e})}function Mx({toast:t}){return t?u.jsxs("div",{style:{background:t.type==="error"?"#dc2626":"#059669",fontFamily:"'Sarabun', sans-serif",animation:"fadeIn 0.3s ease"},className:"fixed bottom-6 right-6 z-[2000] text-white px-5 py-[0.85rem] rounded-xl shadow-2xl text-[0.9rem] font-semibold",children:[t.type==="error"?"🗑️":"✅"," ",t.msg]}):null}const Lx={ICU:"ICU",อายุรกรรม:"MED",ศัลยกรรม:"SUR",กุมารเวช:"PED",สูติกรรม:"OBG",ออร์โธปิดิกส์:"ORT"};function Yg({form:t,setForm:e}){const n=(a,c)=>e(f=>({...f,[a]:c})),r=Lx[t.ward]||"",i=t.status==="occupied",s=!i,o=Object.entries(Ol).map(([a,c])=>({value:a,label:c.label})),l=Object.entries(Kr).map(([a,c])=>({value:a,label:c.label}));return F.useEffect(()=>{if(!t.bedNumber)return;const a=t.bedNumber.replace(/^[A-Z]+-/,"");r&&e(c=>({...c,bedNumber:`${r}-${a}`}))},[t.ward]),F.useEffect(()=>{i||e(a=>({...a,patient:"",age:"",admitDate:"",diagnosis:""}))},[t.status]),u.jsxs(u.Fragment,{children:[u.jsx(Pt,{label:"วอร์ด",value:t.ward,onChange:a=>n("ward",a),options:Dl,required:!0}),u.jsx(Pt,{label:"หมายเลขเตียง",value:t.bedNumber.replace(`${r}-`,""),onChange:a=>{const c=a.replace(/\D/g,"");n("bedNumber",r?`${r}-${c}`:c)},required:!0}),u.jsx(Pt,{label:"สถานะ",value:t.status,onChange:a=>n("status",a),options:o}),u.jsx(Pt,{label:"ชื่อผู้ป่วย",value:t.patient,onChange:a=>n("patient",a),disabled:s,required:!0}),u.jsx(Pt,{label:"เพศ",value:t.gender,onChange:a=>n("gender",a),options:l,disabled:s,required:!0}),u.jsx(Pt,{label:"อายุ",min:1,value:t.age,onChange:a=>{const c=Number(a);c>0?n("age",c):a||n("age","")},disabled:s,required:!0}),u.jsx(Pt,{label:"วันที่รับเข้า",type:"date",value:t.admitDate,onChange:a=>n("admitDate",a),disabled:s,required:!0}),u.jsx(Pt,{label:"การวินิจฉัย",value:t.diagnosis,onChange:a=>n("diagnosis",a),disabled:s}),u.jsx(Pt,{label:"หมายเหตุ",type:"textarea",value:t.notes,onChange:a=>n("notes",a)})]})}function jx({form:t,setForm:e,onSave:n,onClose:r,saving:i}){return u.jsxs(Ml,{title:"➕ เพิ่มเตียงใหม่",onClose:r,children:[u.jsx(Yg,{form:t,setForm:e}),u.jsxs("div",{className:"flex gap-3 justify-end mt-2",children:[u.jsx(jl,{onClick:r,disabled:i,children:"ยกเลิก"}),u.jsx(Ll,{onClick:n,color:"#059669",disabled:i,children:i?"⏳ กำลังบันทึก...":"บันทึก"})]})]})}function Fx({bed:t,form:e,setForm:n,onSave:r,onClose:i,saving:s}){return u.jsxs(Ml,{title:`✏️ แก้ไขเตียง ${t.bedNumber}`,onClose:i,children:[u.jsx(Yg,{form:e,setForm:n}),u.jsxs("div",{className:"flex gap-3 justify-end mt-2",children:[u.jsx(jl,{onClick:i,disabled:s,children:"ยกเลิก"}),u.jsx(Ll,{onClick:r,color:"#2563eb",disabled:s,children:s?"⏳ กำลังบันทึก...":"บันทึกการแก้ไข"})]})]})}function Ux({bed:t,onEdit:e,onClose:n}){var f,d;const{isDark:r}=xt(),i=r?"#64748b":"#6b7280",s=r?"#e2e8f0":"#1e293b",o=r?"rgba(255,255,255,0.06)":"#f1f5f9",l=((f=Ol[t.status])==null?void 0:f.label)??t.status??"-",a=((d=Kr[t.gender])==null?void 0:d.label)??"-",c=[["🏥 วอร์ด",t.ward||"-"],["🛏️ หมายเลขเตียง",t.bedNumber||"-"],["🔖 สถานะ",l],...t.patient?[["👤 ชื่อผู้ป่วย",t.patient],["⚧️ เพศ",a],["🎂 อายุ",t.age?`${t.age} ปี`:"-"],["📅 วันที่รับเข้า",t.admitDate||"-"],["🩺 การวินิจฉัย",t.diagnosis||"-"]]:[["ℹ️ ผู้ป่วย","ไม่มีผู้ป่วยในขณะนี้"]],["📝 หมายเหตุ",t.notes||"-"]];return u.jsxs(Ml,{title:`📋 รายละเอียดเตียง ${t.bedNumber}`,onClose:n,children:[c.map(([h,_],y)=>u.jsxs("div",{className:"flex py-[0.6rem]",style:{borderBottom:`1px solid ${o}`},children:[u.jsx("span",{className:"w-40 text-[0.875rem] font-semibold shrink-0",style:{color:i,fontFamily:"'Sarabun', sans-serif"},children:h}),u.jsx("span",{className:"text-[0.875rem]",style:{color:s,fontFamily:"'Sarabun', sans-serif"},children:_})]},y)),u.jsxs("div",{className:"flex gap-3 justify-end mt-4",children:[u.jsx(jl,{onClick:e,color:"#2563eb",bg:r?"rgba(37,99,235,0.12)":"#eff6ff",border:r?"rgba(59,130,246,0.3)":"#3b82f6",children:"✏️ แก้ไข"}),u.jsx(Ll,{onClick:n,color:r?"#334155":"#6b7280",children:"ปิด"})]})]})}function zx({bed:t,onConfirm:e,onClose:n,saving:r}){const{isDark:i}=xt(),s=i?"#cbd5e1":"#374151",o=i?"rgba(239,68,68,0.1)":"#fef2f2",l=i?"rgba(239,68,68,0.2)":"#fecaca",a=i?"#f87171":"#dc2626",c=i?"#64748b":"#9ca3af";return u.jsxs(Ml,{title:"🗑️ ยืนยันการลบ",onClose:n,children:[u.jsxs("div",{className:"text-center py-4",style:{fontFamily:"'Sarabun', sans-serif"},children:[u.jsx("div",{className:"text-[3rem] mb-4",children:"⚠️"}),u.jsxs("p",{className:"text-base mb-2",style:{color:s},children:["คุณต้องการลบเตียง"," ",u.jsx("strong",{style:{color:a},children:t.bedNumber})," ใช่หรือไม่?"]}),t.patient&&u.jsxs("p",{className:"text-[0.85rem] p-2 rounded-lg mb-2 border",style:{background:o,borderColor:l,color:a},children:["⚠️ เตียงนี้มีผู้ป่วย ",u.jsx("strong",{children:t.patient})," อยู่!"]}),u.jsx("p",{className:"text-[0.8rem]",style:{color:c},children:"การดำเนินการนี้ไม่สามารถย้อนกลับได้"})]}),u.jsxs("div",{className:"flex gap-3 justify-center",children:[u.jsx(jl,{onClick:n,disabled:r,children:"ยกเลิก"}),u.jsx(Ll,{onClick:e,color:"#dc2626",disabled:r,children:r?"⏳ กำลังลบ...":"ยืนยันการลบ"})]})]})}var vf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw si(e)},si=function(t){return new Error("Firebase Database ("+Xg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},od={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,f=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(h=64)),r.push(n[f],n[d],n[h],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||d==null)throw new $x;const h=s<<2|l>>4;if(r.push(h),c!==64){const _=l<<4&240|c>>2;if(r.push(_),d!==64){const y=c<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $x extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zg=function(t){const e=Jg(t);return od.encodeByteArray(e,!0)},Ko=function(t){return Zg(t).replace(/\./g,"")},qo=function(t){try{return od.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(t){return e_(void 0,t)}function e_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Hx(n)||(t[n]=e_(t[n],e[n]));return t}function Hx(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx=()=>Vx().__FIREBASE_DEFAULTS__,Kx=()=>{if(typeof process>"u"||typeof vf>"u")return;const t=vf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qo(t[1]);return e&&JSON.parse(e)},ld=()=>{try{return Gx()||Kx()||qx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},t_=t=>{var e,n;return(n=(e=ld())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qx=t=>{const e=t_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},n_=()=>{var t;return(t=ld())===null||t===void 0?void 0:t.config},r_=t=>{var e;return(e=ld())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ko(JSON.stringify(n)),Ko(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ad(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function Xx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function i_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zx(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function e1(){return Xg.NODE_ADMIN===!0}function t1(){try{return typeof indexedDB=="object"}catch{return!1}}function n1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=r1,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?i1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new jn(i,l,r)}}function i1(t,e){return t.replace(s1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const s1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=as(qo(s[0])||""),n=as(qo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},o1=function(t){const e=s_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},l1=function(t){const e=s_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function qr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Bc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Yo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(wf(s)&&wf(o)){if(!Yo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function wf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ti(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function bi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,f;for(let d=0;d<80;d++){d<40?d<20?(c=l^s&(o^l),f=1518500249):(c=s^o^l,f=1859775393):d<60?(c=s&o|l&(s|o),f=2400959708):(c=s^o^l,f=3395469782);const h=(i<<5|i>>>27)+c+a+f+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function c1(t,e){const n=new u1(t,e);return n.subscribe.bind(n)}class u1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");d1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ta),i.error===void 0&&(i.error=Ta),i.complete===void 0&&(i.complete=Ta);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function d1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ta(){}function Fl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ul=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(t){return t&&t._delegate?t._delegate:t}class tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ks;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(m1(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:p1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p1(t){return t===$n?void 0:t}function m1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new f1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const _1={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},y1=J.INFO,v1={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},w1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=v1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cd{constructor(e){this.name=e,this._logLevel=y1,this._logHandler=w1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const x1=(t,e)=>e.some(n=>t instanceof n);let xf,Ef;function E1(){return xf||(xf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function S1(){return Ef||(Ef=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const o_=new WeakMap,$c=new WeakMap,l_=new WeakMap,ba=new WeakMap,ud=new WeakMap;function C1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(En(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&o_.set(n,t)}).catch(()=>{}),ud.set(e,t),e}function k1(t){if($c.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});$c.set(t,e)}let Wc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $c.get(t);if(e==="objectStoreNames")return t.objectStoreNames||l_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function I1(t){Wc=t(Wc)}function N1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ra(this),e,...n);return l_.set(r,e.sort?e.sort():[e]),En(r)}:S1().includes(t)?function(...e){return t.apply(Ra(this),e),En(o_.get(this))}:function(...e){return En(t.apply(Ra(this),e))}}function T1(t){return typeof t=="function"?N1(t):(t instanceof IDBTransaction&&k1(t),x1(t,E1())?new Proxy(t,Wc):t)}function En(t){if(t instanceof IDBRequest)return C1(t);if(ba.has(t))return ba.get(t);const e=T1(t);return e!==t&&(ba.set(t,e),ud.set(e,t)),e}const Ra=t=>ud.get(t);function b1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=En(o);return r&&o.addEventListener("upgradeneeded",a=>{r(En(o.result),a.oldVersion,a.newVersion,En(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const R1=["get","getKey","getAll","getAllKeys","count"],P1=["put","add","delete","clear"],Pa=new Map;function Sf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pa.get(e))return Pa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=P1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||R1.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Pa.set(e,s),s}I1(t=>({...t,get:(e,n,r)=>Sf(e,n)||t.get(e,n,r),has:(e,n)=>!!Sf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(O1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function O1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hc="@firebase/app",Cf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new cd("@firebase/app"),D1="@firebase/app-compat",M1="@firebase/analytics-compat",L1="@firebase/analytics",j1="@firebase/app-check-compat",F1="@firebase/app-check",U1="@firebase/auth",z1="@firebase/auth-compat",B1="@firebase/database",$1="@firebase/data-connect",W1="@firebase/database-compat",H1="@firebase/functions",V1="@firebase/functions-compat",G1="@firebase/installations",K1="@firebase/installations-compat",q1="@firebase/messaging",Q1="@firebase/messaging-compat",Y1="@firebase/performance",X1="@firebase/performance-compat",J1="@firebase/remote-config",Z1="@firebase/remote-config-compat",eE="@firebase/storage",tE="@firebase/storage-compat",nE="@firebase/firestore",rE="@firebase/vertexai-preview",iE="@firebase/firestore-compat",sE="firebase",oE="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="[DEFAULT]",lE={[Hc]:"fire-core",[D1]:"fire-core-compat",[L1]:"fire-analytics",[M1]:"fire-analytics-compat",[F1]:"fire-app-check",[j1]:"fire-app-check-compat",[U1]:"fire-auth",[z1]:"fire-auth-compat",[B1]:"fire-rtdb",[$1]:"fire-data-connect",[W1]:"fire-rtdb-compat",[H1]:"fire-fn",[V1]:"fire-fn-compat",[G1]:"fire-iid",[K1]:"fire-iid-compat",[q1]:"fire-fcm",[Q1]:"fire-fcm-compat",[Y1]:"fire-perf",[X1]:"fire-perf-compat",[J1]:"fire-rc",[Z1]:"fire-rc-compat",[eE]:"fire-gcs",[tE]:"fire-gcs-compat",[nE]:"fire-fst",[iE]:"fire-fst-compat",[rE]:"fire-vertex","fire-js":"fire-js",[sE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Map,aE=new Map,Gc=new Map;function kf(t,e){try{t.container.addComponent(e)}catch(n){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qr(t){const e=t.name;if(Gc.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;Gc.set(e,t);for(const n of Xo.values())kf(n,t);for(const n of aE.values())kf(n,t);return!0}function dd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function kt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sn=new Is("app","Firebase",cE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=oE;function a_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Sn.create("bad-app-name",{appName:String(i)});if(n||(n=n_()),!n)throw Sn.create("no-options");const s=Xo.get(i);if(s){if(Yo(n,s.options)&&Yo(r,s.config))return s;throw Sn.create("duplicate-app",{appName:i})}const o=new g1(i);for(const a of Gc.values())o.addComponent(a);const l=new uE(n,r,o);return Xo.set(i,l),l}function c_(t=Vc){const e=Xo.get(t);if(!e&&t===Vc&&n_())return a_();if(!e)throw Sn.create("no-app",{appName:t});return e}function Cn(t,e,n){var r;let i=(r=lE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(l.join(" "));return}Qr(new tr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="firebase-heartbeat-database",hE=1,cs="firebase-heartbeat-store";let Aa=null;function u_(){return Aa||(Aa=b1(dE,hE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(cs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sn.create("idb-open",{originalErrorMessage:t.message})})),Aa}async function fE(t){try{const n=(await u_()).transaction(cs),r=await n.objectStore(cs).get(d_(t));return await n.done,r}catch(e){if(e instanceof jn)Kt.warn(e.message);else{const n=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kt.warn(n.message)}}}async function If(t,e){try{const r=(await u_()).transaction(cs,"readwrite");await r.objectStore(cs).put(e,d_(t)),await r.done}catch(n){if(n instanceof jn)Kt.warn(n.message);else{const r=Sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kt.warn(r.message)}}}function d_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE=1024,mE=30*24*60*60*1e3;class gE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=mE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Kt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nf(),{heartbeatsToSend:r,unsentEntries:i}=_E(this._heartbeatsCache.heartbeats),s=Ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Kt.warn(n),""}}}function Nf(){return new Date().toISOString().substring(0,10)}function _E(t,e=pE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Tf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return t1()?n1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return If(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return If(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tf(t){return Ko(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t){Qr(new tr("platform-logger",e=>new A1(e),"PRIVATE")),Qr(new tr("heartbeat",e=>new gE(e),"PRIVATE")),Cn(Hc,Cf,t),Cn(Hc,Cf,"esm2017"),Cn("fire-js","")}vE("");var wE="firebase",xE="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn(wE,xE,"app");var bf={};const Rf="@firebase/database",Pf="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h_="";function EE(t){h_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:as(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Rt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new SE(e)}}catch{}return new CE},Kn=f_("localStorage"),kE=f_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new cd("@firebase/database"),IE=function(){let t=1;return function(){return t++}}(),p_=function(t){const e=h1(t),n=new a1;n.update(e);const r=n.digest();return od.encodeByteArray(r)},Ns=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ns.apply(null,r):typeof r=="object"?e+=ve(r):e+=r,e+=" "}return e};let Ui=null,Af=!0;const NE=function(t,e){S(!0,"Can't turn on custom loggers persistently."),Mr.logLevel=J.VERBOSE,Ui=Mr.log.bind(Mr)},Ie=function(...t){if(Af===!0&&(Af=!1,Ui===null&&kE.get("logging_enabled")===!0&&NE()),Ui){const e=Ns.apply(null,t);Ui(e)}},Ts=function(t){return function(...e){Ie(t,...e)}},Kc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ns(...t);Mr.error(e)},qt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ns(...t)}`;throw Mr.error(e),new Error(e)},Fe=function(...t){const e="FIREBASE WARNING: "+Ns(...t);Mr.warn(e)},TE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Fe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},bE=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Yr="[MIN_NAME]",nr="[MAX_NAME]",cr=function(t,e){if(t===e)return 0;if(t===Yr||e===nr)return-1;if(e===Yr||t===nr)return 1;{const n=Of(t),r=Of(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},RE=function(t,e){return t===e?0:t<e?-1:1},wi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},fd=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ve(e[r]),n+=":",n+=fd(t[e[r]]);return n+="}",n},m_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const g_=function(t){S(!hd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const f=c.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(f.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},PE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},AE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function OE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const DE=new RegExp("^-?(0*)\\d{1,10}$"),ME=-2147483648,LE=2147483647,Of=function(t){if(DE.test(t)){const e=Number(t);if(e>=ME&&e<=LE)return e}return null},ai=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Fe("Exception was thrown by user callback.",n),e},Math.floor(0))}},jE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Fe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Fe(e)}}class yo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="5",__="v",y_="s",v_="r",w_="f",x_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,E_="ls",S_="p",qc="ac",C_="websocket",k_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function zE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function N_(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===C_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===k_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);zE(t)&&(n.ns=t.namespace);const i=[];return be(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(){this.counters_={}}incrementCounter(e,n=1){Rt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Wx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa={},Da={};function md(t){const e=t.toString();return Oa[e]||(Oa[e]=new BE),Oa[e]}function $E(t,e){const n=t.toString();return Da[n]||(Da[n]=e()),Da[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ai(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="start",HE="close",VE="pLPCommand",GE="pRTLPCB",T_="id",b_="pw",R_="ser",KE="cb",qE="seg",QE="ts",YE="d",XE="dframe",P_=1870,A_=30,JE=P_-A_,ZE=25e3,eS=3e4;class Nr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ts(e),this.stats_=md(n),this.urlFn=a=>(this.appCheckToken&&(a[qc]=this.appCheckToken),N_(n,k_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new WE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eS)),bE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gd((...s)=>{const[o,l,a,c,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Df)this.id=l,this.password=a;else if(o===HE)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Df]="t",r[R_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[KE]=this.scriptTagHolder.uniqueCallbackIdentifier),r[__]=pd,this.transportSessionId&&(r[y_]=this.transportSessionId),this.lastSessionId&&(r[E_]=this.lastSessionId),this.applicationId&&(r[S_]=this.applicationId),this.appCheckToken&&(r[qc]=this.appCheckToken),typeof location<"u"&&location.hostname&&x_.test(location.hostname)&&(r[v_]=w_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Nr.forceAllow_=!0}static forceDisallow(){Nr.forceDisallow_=!0}static isAvailable(){return Nr.forceAllow_?!0:!Nr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!PE()&&!AE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Zg(n),i=m_(r,JE);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[XE]="t",r[T_]=e,r[b_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class gd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=IE(),window[VE+this.uniqueCallbackIdentifier]=e,window[GE+this.uniqueCallbackIdentifier]=n,this.myIFrame=gd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ie("frame writing exception"),l.stack&&Ie(l.stack),Ie(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[T_]=this.myID,e[b_]=this.myPW,e[R_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+A_+r.length<=P_;){const o=this.pendingSegs.shift();r=r+"&"+qE+i+"="+o.seg+"&"+QE+i+"="+o.ts+"&"+YE+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(ZE)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=16384,nS=45e3;let Jo=null;typeof MozWebSocket<"u"?Jo=MozWebSocket:typeof WebSocket<"u"&&(Jo=WebSocket);class pt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ts(this.connId),this.stats_=md(n),this.connURL=pt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[__]=pd,typeof location<"u"&&location.hostname&&x_.test(location.hostname)&&(o[v_]=w_),n&&(o[y_]=n),r&&(o[E_]=r),i&&(o[qc]=i),s&&(o[S_]=s),N_(e,C_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kn.set("previous_websocket_failure",!0);try{let r;e1(),this.mySock=new Jo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){pt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Jo!==null&&!pt.forceDisallow_}static previouslyFailed(){return Kn.isInMemoryStorage||Kn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=as(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=m_(n,tS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pt.responsesRequiredToBeHealthy=2;pt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Nr,pt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=pt&&pt.isAvailable();let r=n&&!pt.previouslyFailed();if(e.webSocketOnly&&(n||Fe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[pt];else{const i=this.transports_=[];for(const s of us.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);us.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}us.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=6e4,iS=5e3,sS=10*1024,oS=100*1024,Ma="t",Mf="d",lS="s",Lf="r",aS="e",jf="o",Ff="a",Uf="n",zf="p",cS="h";class uS{constructor(e,n,r,i,s,o,l,a,c,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ts("c:"+this.id+":"),this.transportManager_=new us(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=zi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>oS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ma in e){const n=e[Ma];n===Ff?this.upgradeIfSecondaryHealthy_():n===Lf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===jf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=wi("t",e),r=wi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ff,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Uf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=wi("t",e),r=wi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=wi(Ma,e);if(Mf in e){const r=e[Mf];if(n===cS){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Uf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===lS?this.onConnectionShutdown_(r):n===Lf?this.onReset_(r):n===aS?Kc("Server Error: "+r):n===jf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Kc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),pd!==r&&Fe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),zi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(rS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(iS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends D_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ad()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Zo}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=32,$f=768;class Z{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function q(){return new Z("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function bn(t){return t.pieces_.length-t.pieceNum_}function te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Z(t.pieces_,e)}function _d(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function dS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ds(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function M_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Z(e,0)}function he(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Z)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Z(n,0)}function B(t){return t.pieceNum_>=t.pieces_.length}function Le(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return Le(te(t),te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function hS(t,e){const n=ds(t,0),r=ds(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=cr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function yd(t,e){if(bn(t)!==bn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function st(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(bn(t)>bn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class fS{constructor(e,n){this.errorPrefix_=n,this.parts_=ds(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ul(this.parts_[r]);L_(this)}}function pS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ul(e),L_(t)}function mS(t){const e=t.parts_.pop();t.byteLength_-=Ul(e),t.parts_.length>0&&(t.byteLength_-=1)}function L_(t){if(t.byteLength_>$f)throw new Error(t.errorPrefix_+"has a key path longer than "+$f+" bytes ("+t.byteLength_+").");if(t.parts_.length>Bf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bf+") or object contains a cycle "+Wn(t))}function Wn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd extends D_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new vd}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=1e3,gS=60*5*1e3,Wf=30*1e3,_S=1.3,yS=3e4,vS="server_kill",Hf=3;class Bt extends O_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Bt.nextPersistentConnectionId_++,this.log_=Ts("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xi,this.maxReconnectDelay_=gS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ve(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ks,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,c=l.s;Bt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Rt(e,"w")){const r=qr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Fe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||l1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Wf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=o1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Kc("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yS&&(this.reconnectDelay_=xi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_S)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Bt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},c=function(d){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:c};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new uS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Fe(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(vS)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Fe(d),a())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bc(this.interruptReasons_)&&(this.reconnectDelay_=xi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>fd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new Z(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ie("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hf&&(this.reconnectDelay_=Wf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ie("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+h_.replace(/\./g,"-")]=1,ad()?e["framework.cordova"]=1:i_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zo.getInstance().currentlyOnline();return Bc(this.interruptReasons_)&&e}}Bt.nextPersistentConnectionId_=0;Bt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(Yr,e),i=new z(Yr,n);return this.compare(r,i)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no;class j_ extends zl{static get __EMPTY_NODE(){return no}static set __EMPTY_NODE(e){no=e}compare(e,n){return cr(e.name,n.name)}isDefinedOn(e){throw si("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(nr,no)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,no)}toString(){return".key"}}const Lr=new j_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Se.RED,this.left=i??Ve.EMPTY_NODE,this.right=s??Ve.EMPTY_NODE}copy(e,n,r,i,s){return new Se(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ve.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class wS{copy(e,n,r,i,s){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ve{constructor(e,n=Ve.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ve(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new Ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ro(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ro(this.root_,null,this.comparator_,!0,e)}}Ve.EMPTY_NODE=new wS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(t,e){return cr(t.name,e.name)}function wd(t,e){return cr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qc;function ES(t){Qc=t}const F_=function(t){return typeof t=="number"?"number:"+g_(t):"string:"+t},U_=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Rt(e,".sv"),"Priority must be a string or number.")}else S(t===Qc||t.isEmpty(),"priority of unexpected type.");S(t===Qc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vf;class xe{constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),U_(this.priorityNode_)}static set __childrenNodeConstructor(e){Vf=e}static get __childrenNodeConstructor(){return Vf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:U(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+F_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=g_(this.value_):e+=this.value_,this.lazyHash_=p_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=xe.VALUE_TYPE_ORDER.indexOf(n),s=xe.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let z_,B_;function SS(t){z_=t}function CS(t){B_=t}class kS extends zl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?cr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(nr,new xe("[PRIORITY-POST]",B_))}makePost(e,n){const r=z_(e);return new z(n,new xe("[PRIORITY-POST]",r))}toString(){return".priority"}}const fe=new kS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=Math.log(2);class NS{constructor(e){const n=s=>parseInt(Math.log(s)/IS,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const el=function(t,e,n,r){t.sort(e);const i=function(a,c){const f=c-a;let d,h;if(f===0)return null;if(f===1)return d=t[a],h=n?n(d):d,new Se(h,d.node,Se.BLACK,null,null);{const _=parseInt(f/2,10)+a,y=i(a,_),v=i(_+1,c);return d=t[_],h=n?n(d):d,new Se(h,d.node,Se.BLACK,y,v)}},s=function(a){let c=null,f=null,d=t.length;const h=function(y,v){const C=d-y,m=d;d-=y;const p=i(C+1,m),g=t[C],w=n?n(g):g;_(new Se(w,g.node,v,null,p))},_=function(y){c?(c.left=y,c=y):(f=y,c=y)};for(let y=0;y<a.count;++y){const v=a.nextBitIsOne(),C=Math.pow(2,a.count-(y+1));v?h(C,Se.BLACK):(h(C,Se.BLACK),h(C,Se.RED))}return f},o=new NS(t.length),l=s(o);return new Ve(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La;const pr={};class Lt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(pr&&fe,"ChildrenNode.ts has not been loaded"),La=La||new Lt({".priority":pr},{".priority":fe}),La}get(e){const n=qr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ve?n:null}hasIndex(e){return Rt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Lr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=el(r,e.getCompare()):l=pr;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const f=Object.assign({},this.indexes_);return f[a]=l,new Lt(f,c)}addToIndexes(e,n){const r=Qo(this.indexes_,(i,s)=>{const o=qr(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===pr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(z.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),el(l,o.getCompare())}else return pr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new z(e.name,l))),a.insert(e,e.node)}});return new Lt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Qo(this.indexes_,i=>{if(i===pr)return i;{const s=n.get(e.name);return s?i.remove(new z(e.name,s)):i}});return new Lt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei;class D{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&U_(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ei||(Ei=new D(new Ve(wd),null,Lt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ei}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ei:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ei:this.priorityNode_;return new D(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{S(U(e)!==".priority"||bn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(te(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(fe,(o,l)=>{n[o]=l.val(e),r++,s&&D.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+F_(this.getPriority().val())+":"),this.forEachChild(fe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":p_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bs?-1:0}withIndex(e){if(e===Lr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Lr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(fe),i=n.getIterator(fe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Lr?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class TS extends D{constructor(){super(new Ve(wd),D.EMPTY_NODE,Lt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const bs=new TS;Object.defineProperties(z,{MIN:{value:new z(Yr,D.EMPTY_NODE)},MAX:{value:new z(nr,bs)}});j_.__EMPTY_NODE=D.EMPTY_NODE;xe.__childrenNodeConstructor=D;ES(bs);CS(bs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=!0;function ye(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,ye(e))}if(!(t instanceof Array)&&bS){const n=[];let r=!1;if(be(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ye(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new z(o,a)))}}),n.length===0)return D.EMPTY_NODE;const s=el(n,xS,o=>o.name,wd);if(r){const o=el(n,fe.getCompare());return new D(s,ye(e),new Lt({".priority":o},{".priority":fe}))}else return new D(s,ye(e),Lt.Default)}else{let n=D.EMPTY_NODE;return be(t,(r,i)=>{if(Rt(t,r)&&r.substring(0,1)!=="."){const s=ye(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ye(e))}}SS(ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS extends zl{constructor(e){super(),this.indexPath_=e,S(!B(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?cr(e.name,n.name):s}makePost(e,n){const r=ye(e),i=D.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,i)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,bs);return new z(nr,e)}toString(){return ds(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS extends zl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?cr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=ye(e);return new z(n,r)}toString(){return".value"}}const AS=new PS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(t){return{type:"value",snapshotNode:t}}function Xr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function hs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function OS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(hs(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Xr(n,r)):o.trackChildChange(fs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,s)=>{n.hasChild(i)||r.trackChildChange(hs(i,s))}),n.isLeafNode()||n.forEachChild(fe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(fs(i,s,o))}else r.trackChildChange(Xr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.indexedFilter_=new xd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ps.getStartPost_(e),this.endPost_=ps.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new z(n,r))||(r=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const s=this;return n.forEachChild(fe,(o,l)=>{s.matches(new z(o,l))||(i=i.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ps(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new z(n,r))||(r=D.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,_)=>d(_,h)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new z(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(f&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(fs(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(hs(n,d));const v=l.updateImmediateChild(n,D.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Xr(h.name,h.node)),v.updateImmediateChild(h.name,h.node)):v}}else return r.isEmpty()?e:f&&o(c,a)>=0?(s!=null&&(s.trackChildChange(hs(c.name,c.node)),s.trackChildChange(Xr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,D.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yr}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new Ed;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function MS(t){return t.loadsAllData()?new xd(t.getIndex()):t.hasLimit()?new DS(t):new ps(t)}function Gf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===AS?n="$value":t.index_===Lr?n="$key":(S(t.index_ instanceof RS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ve(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ve(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ve(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Kf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends O_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Ts("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=tl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Gf(e._queryParams);this.restRequest_(s+".json",a,(c,f)=>{let d=f;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),qr(this.listens_,o)===l){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const r=tl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Gf(e._queryParams),r=e._path.toString(),i=new ks;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+oi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=as(l.responseText)}catch{Fe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Fe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(){return{value:null,children:new Map}}function W_(t,e,n){if(B(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,nl());const i=t.children.get(r);e=te(e),W_(i,e,n)}}function Yc(t,e,n){t.value!==null?n(e,t.value):jS(t,(r,i)=>{const s=new Z(e.toString()+"/"+r);Yc(i,s,n)})}function jS(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&be(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=10*1e3,US=30*1e3,zS=5*60*1e3;class BS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new FS(e);const r=qf+(US-qf)*Math.random();zi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;be(e,(i,s)=>{s>0&&Rt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),zi(this.reportStats_.bind(this),Math.floor(Math.random()*2*zS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mt||(mt={}));function Sd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Cd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function kd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=mt.ACK_USER_WRITE,this.source=Sd()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Z(e));return new rl(q(),n,this.revert)}}else return S(U(this.path)===e,"operationForChild called for unrelated child."),new rl(te(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.source=e,this.path=n,this.type=mt.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new ms(this.source,q()):new ms(this.source,te(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=mt.OVERWRITE}operationForChild(e){return B(this.path)?new rr(this.source,q(),this.snap.getImmediateChild(e)):new rr(this.source,te(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=mt.MERGE}operationForChild(e){if(B(this.path)){const n=this.children.subtree(new Z(e));return n.isEmpty()?null:n.value?new rr(this.source,q(),n.value):new Jr(this.source,q(),n)}else return S(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Jr(this.source,te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function WS(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(OS(o.childName,o.snapshotNode))}),Si(t,i,"child_removed",e,r,n),Si(t,i,"child_added",e,r,n),Si(t,i,"child_moved",s,r,n),Si(t,i,"child_changed",e,r,n),Si(t,i,"value",e,r,n),i}function Si(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>VS(t,l,a)),o.forEach(l=>{const a=HS(t,l,s);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function HS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function VS(t,e,n){if(e.childName==null||n.childName==null)throw si("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t,e){return{eventCache:t,serverCache:e}}function Bi(t,e,n,r){return Bl(new Rn(e,n,r),t.serverCache)}function H_(t,e,n,r){return Bl(t.eventCache,new Rn(e,n,r))}function il(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ir(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ja;const GS=()=>(ja||(ja=new Ve(RE)),ja);class ee{constructor(e,n=GS()){this.value=e,this.children=n}static fromObject(e){let n=new ee(null);return be(e,(r,i)=>{n=n.set(new Z(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:q(),value:this.value};if(B(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(te(e),n);return s!=null?{path:he(new Z(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(te(e)):new ee(null)}}set(e,n){if(B(e))return new ee(n,this.children);{const r=U(e),s=(this.children.get(r)||new ee(null)).set(te(e),n),o=this.children.insert(r,s);return new ee(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new ee(null):new ee(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(te(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ee(null):new ee(this.value,s)}else return this}}get(e){if(B(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(te(e)):null}}setTree(e,n){if(B(e))return n;{const r=U(e),s=(this.children.get(r)||new ee(null)).setTree(te(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ee(this.value,o)}}fold(e){return this.fold_(q(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(he(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,q(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(te(e),he(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,q(),n)}foreachOnPath_(e,n,r){if(B(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(te(e),he(n,i),r):new ee(null)}}foreach(e){this.foreach_(q(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(he(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.writeTree_=e}static empty(){return new yt(new ee(null))}}function $i(t,e,n){if(B(e))return new yt(new ee(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Le(i,e);return s=s.updateChild(o,n),new yt(t.writeTree_.set(i,s))}else{const i=new ee(n),s=t.writeTree_.setTree(e,i);return new yt(s)}}}function Xc(t,e,n){let r=t;return be(n,(i,s)=>{r=$i(r,he(e,i),s)}),r}function Qf(t,e){if(B(e))return yt.empty();{const n=t.writeTree_.setTree(e,new ee(null));return new yt(n)}}function Jc(t,e){return ur(t,e)!=null}function ur(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Le(n.path,e)):null}function Yf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(r,i)=>{e.push(new z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new z(r,i.value))}),e}function kn(t,e){if(B(e))return t;{const n=ur(t,e);return n!=null?new yt(new ee(n)):new yt(t.writeTree_.subtree(e))}}function Zc(t){return t.writeTree_.isEmpty()}function Zr(t,e){return V_(q(),t.writeTree_,e)}function V_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=V_(he(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(he(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t,e){return Q_(e,t)}function KS(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=$i(t.visibleWrites,e,n)),t.lastWriteId=r}function qS(t,e,n,r){S(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Xc(t.visibleWrites,e,n),t.lastWriteId=r}function QS(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function YS(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&XS(l,r.path)?i=!1:st(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return JS(t),!0;if(r.snap)t.visibleWrites=Qf(t.visibleWrites,r.path);else{const l=r.children;be(l,a=>{t.visibleWrites=Qf(t.visibleWrites,he(r.path,a))})}return!0}else return!1}function XS(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(he(t.path,n),e))return!0;return!1}function JS(t){t.visibleWrites=G_(t.allWrites,ZS,q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ZS(t){return t.visible}function G_(t,e,n){let r=yt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)st(n,o)?(l=Le(n,o),r=$i(r,l,s.snap)):st(o,n)&&(l=Le(o,n),r=$i(r,q(),s.snap.getChild(l)));else if(s.children){if(st(n,o))l=Le(n,o),r=Xc(r,l,s.children);else if(st(o,n))if(l=Le(o,n),B(l))r=Xc(r,q(),s.children);else{const a=qr(s.children,U(l));if(a){const c=a.getChild(te(l));r=$i(r,q(),c)}}}else throw si("WriteRecord should have .snap or .children")}}return r}function K_(t,e,n,r,i){if(!r&&!i){const s=ur(t.visibleWrites,e);if(s!=null)return s;{const o=kn(t.visibleWrites,e);if(Zc(o))return n;if(n==null&&!Jc(o,q()))return null;{const l=n||D.EMPTY_NODE;return Zr(o,l)}}}else{const s=kn(t.visibleWrites,e);if(!i&&Zc(s))return n;if(!i&&n==null&&!Jc(s,q()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(st(c.path,e)||st(e,c.path))},l=G_(t.allWrites,o,e),a=n||D.EMPTY_NODE;return Zr(l,a)}}}function eC(t,e,n){let r=D.EMPTY_NODE;const i=ur(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=kn(t.visibleWrites,e);return n.forEachChild(fe,(o,l)=>{const a=Zr(kn(s,new Z(o)),l);r=r.updateImmediateChild(o,a)}),Yf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=kn(t.visibleWrites,e);return Yf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function tC(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=he(e,n);if(Jc(t.visibleWrites,s))return null;{const o=kn(t.visibleWrites,s);return Zc(o)?i.getChild(n):Zr(o,i.getChild(n))}}function nC(t,e,n,r){const i=he(e,n),s=ur(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=kn(t.visibleWrites,i);return Zr(o,r.getNode().getImmediateChild(n))}else return null}function rC(t,e){return ur(t.visibleWrites,e)}function iC(t,e,n,r,i,s,o){let l;const a=kn(t.visibleWrites,e),c=ur(a,q());if(c!=null)l=c;else if(n!=null)l=Zr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=h.getNext();for(;_&&f.length<i;)d(_,r)!==0&&f.push(_),_=h.getNext();return f}else return[]}function sC(){return{visibleWrites:yt.empty(),allWrites:[],lastWriteId:-1}}function sl(t,e,n,r){return K_(t.writeTree,t.treePath,e,n,r)}function Id(t,e){return eC(t.writeTree,t.treePath,e)}function Xf(t,e,n,r){return tC(t.writeTree,t.treePath,e,n,r)}function ol(t,e){return rC(t.writeTree,he(t.treePath,e))}function oC(t,e,n,r,i,s){return iC(t.writeTree,t.treePath,e,n,r,i,s)}function Nd(t,e,n){return nC(t.writeTree,t.treePath,e,n)}function q_(t,e){return Q_(he(t.treePath,e),t.writeTree)}function Q_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,fs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,hs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Xr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,fs(r,e.snapshotNode,i.oldSnap));else throw si("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Y_=new aC;class Td{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Rn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Nd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ir(this.viewCache_),s=oC(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){return{filter:t}}function uC(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function dC(t,e,n,r,i){const s=new lC;let o,l;if(n.type===mt.OVERWRITE){const c=n;c.source.fromUser?o=eu(t,e,c.path,c.snap,r,i,s):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!B(c.path),o=ll(t,e,c.path,c.snap,r,i,l,s))}else if(n.type===mt.MERGE){const c=n;c.source.fromUser?o=fC(t,e,c.path,c.children,r,i,s):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=tu(t,e,c.path,c.children,r,i,l,s))}else if(n.type===mt.ACK_USER_WRITE){const c=n;c.revert?o=gC(t,e,c.path,r,i,s):o=pC(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===mt.LISTEN_COMPLETE)o=mC(t,e,n.path,r,s);else throw si("Unknown operation type: "+n.type);const a=s.getChanges();return hC(e,o,a),{viewCache:o,changes:a}}function hC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=il(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push($_(il(e)))}}function X_(t,e,n,r,i,s){const o=e.eventCache;if(ol(r,n)!=null)return e;{let l,a;if(B(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ir(e),f=c instanceof D?c:D.EMPTY_NODE,d=Id(r,f);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=sl(r,ir(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=U(n);if(c===".priority"){S(bn(n)===1,"Can't have a priority with additional path components");const f=o.getNode();a=e.serverCache.getNode();const d=Xf(r,n,f,a);d!=null?l=t.filter.updatePriority(f,d):l=o.getNode()}else{const f=te(n);let d;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const h=Xf(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(c).updateChild(f,h):d=o.getNode().getImmediateChild(c)}else d=Nd(r,c,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),c,d,f,i,s):l=o.getNode()}}return Bi(e,l,o.isFullyInitialized()||B(n),t.filter.filtersNodes())}}function ll(t,e,n,r,i,s,o,l){const a=e.serverCache;let c;const f=o?t.filter:t.filter.getIndexedFilter();if(B(n))c=f.updateFullNode(a.getNode(),r,null);else if(f.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);c=f.updateFullNode(a.getNode(),_,null)}else{const _=U(n);if(!a.isCompleteForPath(n)&&bn(n)>1)return e;const y=te(n),C=a.getNode().getImmediateChild(_).updateChild(y,r);_===".priority"?c=f.updatePriority(a.getNode(),C):c=f.updateChild(a.getNode(),_,C,y,Y_,null)}const d=H_(e,c,a.isFullyInitialized()||B(n),f.filtersNodes()),h=new Td(i,d,s);return X_(t,d,n,i,h,l)}function eu(t,e,n,r,i,s,o){const l=e.eventCache;let a,c;const f=new Td(i,e,s);if(B(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Bi(e,c,!0,t.filter.filtersNodes());else{const d=U(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),a=Bi(e,c,l.isFullyInitialized(),l.isFiltered());else{const h=te(n),_=l.getNode().getImmediateChild(d);let y;if(B(h))y=r;else{const v=f.getCompleteChild(d);v!=null?_d(h)===".priority"&&v.getChild(M_(h)).isEmpty()?y=v:y=v.updateChild(h,r):y=D.EMPTY_NODE}if(_.equals(y))a=e;else{const v=t.filter.updateChild(l.getNode(),d,y,h,f,o);a=Bi(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Jf(t,e){return t.eventCache.isCompleteForChild(e)}function fC(t,e,n,r,i,s,o){let l=e;return r.foreach((a,c)=>{const f=he(n,a);Jf(e,U(f))&&(l=eu(t,l,f,c,i,s,o))}),r.foreach((a,c)=>{const f=he(n,a);Jf(e,U(f))||(l=eu(t,l,f,c,i,s,o))}),l}function Zf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function tu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;B(n)?c=r:c=new ee(null).setTree(n,r);const f=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(f.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),y=Zf(t,_,h);a=ll(t,a,new Z(d),y,i,s,o,l)}}),c.children.inorderTraversal((d,h)=>{const _=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!f.hasChild(d)&&!_){const y=e.serverCache.getNode().getImmediateChild(d),v=Zf(t,y,h);a=ll(t,a,new Z(d),v,i,s,o,l)}}),a}function pC(t,e,n,r,i,s,o){if(ol(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ll(t,e,n,a.getNode().getChild(n),i,s,l,o);if(B(n)){let c=new ee(null);return a.getNode().forEachChild(Lr,(f,d)=>{c=c.set(new Z(f),d)}),tu(t,e,n,c,i,s,l,o)}else return e}else{let c=new ee(null);return r.foreach((f,d)=>{const h=he(n,f);a.isCompleteForPath(h)&&(c=c.set(f,a.getNode().getChild(h)))}),tu(t,e,n,c,i,s,l,o)}}function mC(t,e,n,r,i){const s=e.serverCache,o=H_(e,s.getNode(),s.isFullyInitialized()||B(n),s.isFiltered());return X_(t,o,n,r,Y_,i)}function gC(t,e,n,r,i,s){let o;if(ol(r,n)!=null)return e;{const l=new Td(r,e,i),a=e.eventCache.getNode();let c;if(B(n)||U(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=sl(r,ir(e));else{const d=e.serverCache.getNode();S(d instanceof D,"serverChildren would be complete if leaf node"),f=Id(r,d)}f=f,c=t.filter.updateFullNode(a,f,s)}else{const f=U(n);let d=Nd(r,f,e.serverCache);d==null&&e.serverCache.isCompleteForChild(f)&&(d=a.getImmediateChild(f)),d!=null?c=t.filter.updateChild(a,f,d,te(n),l,s):e.eventCache.getNode().hasChild(f)?c=t.filter.updateChild(a,f,D.EMPTY_NODE,te(n),l,s):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=sl(r,ir(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||ol(r,q())!=null,Bi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new xd(r.getIndex()),s=MS(r);this.processor_=cC(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(D.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(D.EMPTY_NODE,l.getNode(),null),f=new Rn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Rn(c,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Bl(d,f),this.eventGenerator_=new $S(this.query_)}get query(){return this.query_}}function yC(t){return t.viewCache_.serverCache.getNode()}function vC(t){return il(t.viewCache_)}function wC(t,e){const n=ir(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!B(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function ep(t){return t.eventRegistrations_.length===0}function xC(t,e){t.eventRegistrations_.push(e)}function tp(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function np(t,e,n,r){e.type===mt.MERGE&&e.source.queryId!==null&&(S(ir(t.viewCache_),"We should always have a full cache before handling merges"),S(il(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=dC(t.processor_,i,e,n,r);return uC(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,J_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function EC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(s,o)=>{r.push(Xr(s,o))}),n.isFullyInitialized()&&r.push($_(n.getNode())),J_(t,r,n.getNode(),e)}function J_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return WS(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let al;class Z_{constructor(){this.views=new Map}}function SC(t){S(!al,"__referenceConstructor has already been defined"),al=t}function CC(){return S(al,"Reference.ts has not been loaded"),al}function kC(t){return t.views.size===0}function bd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),np(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(np(o,e,n,r));return s}}function ey(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=sl(n,i?r:null),a=!1;l?a=!0:r instanceof D?(l=Id(n,r),a=!1):(l=D.EMPTY_NODE,a=!1);const c=Bl(new Rn(l,a,!1),new Rn(r,i,!1));return new _C(e,c)}return o}function IC(t,e,n,r,i,s){const o=ey(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),xC(o,n),EC(o,n)}function NC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Pn(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(tp(c,n,r)),ep(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||s.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(tp(a,n,r)),ep(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Pn(t)&&s.push(new(CC())(e._repo,e._path)),{removed:s,events:o}}function ty(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function In(t,e){let n=null;for(const r of t.views.values())n=n||wC(r,e);return n}function ny(t,e){if(e._queryParams.loadsAllData())return Wl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function ry(t,e){return ny(t,e)!=null}function Pn(t){return Wl(t)!=null}function Wl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cl;function TC(t){S(!cl,"__referenceConstructor has already been defined"),cl=t}function bC(){return S(cl,"Reference.ts has not been loaded"),cl}let RC=1;class rp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ee(null),this.pendingWriteTree_=sC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function iy(t,e,n,r,i){return KS(t.pendingWriteTree_,e,n,r,i),i?ci(t,new rr(Sd(),e,n)):[]}function PC(t,e,n,r){qS(t.pendingWriteTree_,e,n,r);const i=ee.fromObject(n);return ci(t,new Jr(Sd(),e,i))}function fn(t,e,n=!1){const r=QS(t.pendingWriteTree_,e);if(YS(t.pendingWriteTree_,e)){let s=new ee(null);return r.snap!=null?s=s.set(q(),!0):be(r.children,o=>{s=s.set(new Z(o),!0)}),ci(t,new rl(r.path,s,n))}else return[]}function Rs(t,e,n){return ci(t,new rr(Cd(),e,n))}function AC(t,e,n){const r=ee.fromObject(n);return ci(t,new Jr(Cd(),e,r))}function OC(t,e){return ci(t,new ms(Cd(),e))}function DC(t,e,n){const r=Pd(t,n);if(r){const i=Ad(r),s=i.path,o=i.queryId,l=Le(s,e),a=new ms(kd(o),l);return Od(t,s,a)}else return[]}function ul(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||ry(o,e))){const a=NC(o,e,n,r);kC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=a.removed;if(l=a.events,!i){const f=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,_)=>Pn(_));if(f&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const _=jC(h);for(let y=0;y<_.length;++y){const v=_[y],C=v.query,m=ay(t,v);t.listenProvider_.startListening(Wi(C),gs(t,C),m.hashFn,m.onComplete)}}}!d&&c.length>0&&!r&&(f?t.listenProvider_.stopListening(Wi(e),null):c.forEach(h=>{const _=t.queryToTagMap.get(Hl(h));t.listenProvider_.stopListening(Wi(h),_)}))}FC(t,c)}return l}function sy(t,e,n,r){const i=Pd(t,r);if(i!=null){const s=Ad(i),o=s.path,l=s.queryId,a=Le(o,e),c=new rr(kd(l),a,n);return Od(t,o,c)}else return[]}function MC(t,e,n,r){const i=Pd(t,r);if(i){const s=Ad(i),o=s.path,l=s.queryId,a=Le(o,e),c=ee.fromObject(n),f=new Jr(kd(l),a,c);return Od(t,o,f)}else return[]}function nu(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,_)=>{const y=Le(h,i);s=s||In(_,y),o=o||Pn(_)});let l=t.syncPointTree_.get(i);l?(o=o||Pn(l),s=s||In(l,q())):(l=new Z_,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=D.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const v=In(y,q());v&&(s=s.updateImmediateChild(_,v))}));const c=ry(l,e);if(!c&&!e._queryParams.loadsAllData()){const h=Hl(e);S(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const _=UC();t.queryToTagMap.set(h,_),t.tagToQueryMap.set(_,h)}const f=$l(t.pendingWriteTree_,i);let d=IC(l,e,n,f,s,a);if(!c&&!o&&!r){const h=ny(l,e);d=d.concat(zC(t,e,h))}return d}function Rd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Le(o,e),c=In(l,a);if(c)return c});return K_(i,e,s,n,!0)}function LC(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,f)=>{const d=Le(c,n);r=r||In(f,d)});let i=t.syncPointTree_.get(n);i?r=r||In(i,q()):(i=new Z_,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Rn(r,!0,!1):null,l=$l(t.pendingWriteTree_,e._path),a=ey(i,e,l,s?o.getNode():D.EMPTY_NODE,s);return vC(a)}function ci(t,e){return oy(e,t.syncPointTree_,null,$l(t.pendingWriteTree_,q()))}function oy(t,e,n,r){if(B(t.path))return ly(t,e,n,r);{const i=e.get(q());n==null&&i!=null&&(n=In(i,q()));let s=[];const o=U(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,f=q_(r,o);s=s.concat(oy(l,a,c,f))}return i&&(s=s.concat(bd(i,t,r,n))),s}}function ly(t,e,n,r){const i=e.get(q());n==null&&i!=null&&(n=In(i,q()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=q_(r,o),f=t.operationForChild(o);f&&(s=s.concat(ly(f,l,a,c)))}),i&&(s=s.concat(bd(i,t,r,n))),s}function ay(t,e){const n=e.query,r=gs(t,n);return{hashFn:()=>(yC(e)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?DC(t,n._path,r):OC(t,n._path);{const s=OE(i,n);return ul(t,n,null,s)}}}}function gs(t,e){const n=Hl(e);return t.queryToTagMap.get(n)}function Hl(t){return t._path.toString()+"$"+t._queryIdentifier}function Pd(t,e){return t.tagToQueryMap.get(e)}function Ad(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Z(t.substr(0,e))}}function Od(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=$l(t.pendingWriteTree_,e);return bd(r,n,i,null)}function jC(t){return t.fold((e,n,r)=>{if(n&&Pn(n))return[Wl(n)];{let i=[];return n&&(i=ty(n)),be(r,(s,o)=>{i=i.concat(o)}),i}})}function Wi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(bC())(t._repo,t._path):t}function FC(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Hl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function UC(){return RC++}function zC(t,e,n){const r=e._path,i=gs(t,e),s=ay(t,n),o=t.listenProvider_.startListening(Wi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)S(!Pn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,f,d)=>{if(!B(c)&&f&&Pn(f))return[Wl(f).query];{let h=[];return f&&(h=h.concat(ty(f).map(_=>_.query))),be(d,(_,y)=>{h=h.concat(y)}),h}});for(let c=0;c<a.length;++c){const f=a[c];t.listenProvider_.stopListening(Wi(f),gs(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Dd(n)}node(){return this.node_}}class Md{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=he(this.path_,e);return new Md(this.syncTree_,n)}node(){return Rd(this.syncTree_,this.path_)}}const BC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ip=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return $C(t[".sv"],e,n);if(typeof t[".sv"]=="object")return WC(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},$C=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},WC=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},cy=function(t,e,n,r){return Ld(e,new Md(n,t),r)},uy=function(t,e,n){return Ld(t,new Dd(e),n)};function Ld(t,e,n){const r=t.getPriority().val(),i=ip(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=ip(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new xe(l,ye(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new xe(i))),o.forEachChild(fe,(l,a)=>{const c=Ld(a,e.getImmediateChild(l),n);c!==a&&(s=s.updateImmediateChild(l,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Fd(t,e){let n=e instanceof Z?e:new Z(e),r=t,i=U(n);for(;i!==null;){const s=qr(r.node.children,i)||{children:{},childCount:0};r=new jd(i,r,s),n=te(n),i=U(n)}return r}function ui(t){return t.node.value}function dy(t,e){t.node.value=e,ru(t)}function hy(t){return t.node.childCount>0}function HC(t){return ui(t)===void 0&&!hy(t)}function Vl(t,e){be(t.node.children,(n,r)=>{e(new jd(n,t,r))})}function fy(t,e,n,r){n&&e(t),Vl(t,i=>{fy(i,e,!0)})}function VC(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ps(t){return new Z(t.parent===null?t.name:Ps(t.parent)+"/"+t.name)}function ru(t){t.parent!==null&&GC(t.parent,t.name,t)}function GC(t,e,n){const r=HC(n),i=Rt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ru(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ru(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=/[\[\].#$\/\u0000-\u001F\u007F]/,qC=/[\[\].#$\u0000-\u001F\u007F]/,Fa=10*1024*1024,Ud=function(t){return typeof t=="string"&&t.length!==0&&!KC.test(t)},py=function(t){return typeof t=="string"&&t.length!==0&&!qC.test(t)},QC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),py(t)},YC=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!hd(t)||t&&typeof t=="object"&&Rt(t,".sv")},my=function(t,e,n,r){r&&e===void 0||Gl(Fl(t,"value"),e,n)},Gl=function(t,e,n){const r=n instanceof Z?new fS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Wn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Wn(r)+" with contents = "+e.toString());if(hd(e))throw new Error(t+"contains "+e.toString()+" "+Wn(r));if(typeof e=="string"&&e.length>Fa/3&&Ul(e)>Fa)throw new Error(t+"contains a string greater than "+Fa+" utf8 bytes "+Wn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(be(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ud(o)))throw new Error(t+" contains an invalid key ("+o+") "+Wn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);pS(r,o),Gl(t,l,r),mS(r)}),i&&s)throw new Error(t+' contains ".value" child '+Wn(r)+" in addition to actual children.")}},XC=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ds(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Ud(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(hS);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&st(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},JC=function(t,e,n,r){const i=Fl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];be(e,(o,l)=>{const a=new Z(o);if(Gl(i,l,he(n,a)),_d(a)===".priority"&&!YC(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),XC(i,s)},gy=function(t,e,n,r){if(!py(n))throw new Error(Fl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ZC=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gy(t,e,n)},zd=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},ek=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ud(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!QC(n))throw new Error(Fl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Kl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!yd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function _y(t,e,n){Kl(t,n),yy(t,r=>yd(r,e))}function ct(t,e,n){Kl(t,n),yy(t,r=>st(r,e)||st(e,r))}function yy(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(nk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function nk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ui&&Ie("event: "+n.toString()),ai(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk="repo_interrupt",ik=25;class sk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nl(),this.transactionQueueTree_=new jd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ok(t,e,n){if(t.stats_=md(t.repoInfo_),t.forceRestClient_||jE())t.server_=new tl(t.repoInfo_,(r,i,s,o)=>{sp(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>op(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Bt(t.repoInfo_,e,(r,i,s,o)=>{sp(t,r,i,s,o)},r=>{op(t,r)},r=>{lk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=$E(t.repoInfo_,()=>new BS(t.stats_,t.server_)),t.infoData_=new LS,t.infoSyncTree_=new rp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Rs(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Bd(t,"connected",!1),t.serverSyncTree_=new rp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const c=o(l,a);ct(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function vy(t){const n=t.infoData_.getNode(new Z(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ql(t){return BC({timestamp:vy(t)})}function sp(t,e,n,r,i){t.dataUpdateCount++;const s=new Z(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Qo(n,c=>ye(c));o=MC(t.serverSyncTree_,s,a,i)}else{const a=ye(n);o=sy(t.serverSyncTree_,s,a,i)}else if(r){const a=Qo(n,c=>ye(c));o=AC(t.serverSyncTree_,s,a)}else{const a=ye(n);o=Rs(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ei(t,s)),ct(t.eventQueue_,l,o)}function op(t,e){Bd(t,"connected",e),e===!1&&dk(t)}function lk(t,e){be(e,(n,r)=>{Bd(t,n,r)})}function Bd(t,e,n){const r=new Z("/.info/"+e),i=ye(n);t.infoData_.updateSnapshot(r,i);const s=Rs(t.infoSyncTree_,r,i);ct(t.eventQueue_,r,s)}function $d(t){return t.nextWriteId_++}function ak(t,e,n){const r=LC(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ye(i).withIndex(e._queryParams.getIndex());nu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Rs(t.serverSyncTree_,e._path,s);else{const l=gs(t.serverSyncTree_,e);o=sy(t.serverSyncTree_,e._path,s,l)}return ct(t.eventQueue_,e._path,o),ul(t.serverSyncTree_,e,n,null,!0),s},i=>(As(t,"get for query "+ve(e)+" failed: "+i),Promise.reject(new Error(i))))}function ck(t,e,n,r,i){As(t,"set",{path:e.toString(),value:n,priority:r});const s=ql(t),o=ye(n,r),l=Rd(t.serverSyncTree_,e),a=uy(o,l,s),c=$d(t),f=iy(t.serverSyncTree_,e,a,c,!0);Kl(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(h,_)=>{const y=h==="ok";y||Fe("set at "+e+" failed: "+h);const v=fn(t.serverSyncTree_,c,!y);ct(t.eventQueue_,e,v),iu(t,i,h,_)});const d=Hd(t,e);ei(t,d),ct(t.eventQueue_,d,[])}function uk(t,e,n,r){As(t,"update",{path:e.toString(),value:n});let i=!0;const s=ql(t),o={};if(be(n,(l,a)=>{i=!1,o[l]=cy(he(e,l),ye(a),t.serverSyncTree_,s)}),i)Ie("update() called with empty data.  Don't do anything."),iu(t,r,"ok",void 0);else{const l=$d(t),a=PC(t.serverSyncTree_,e,o,l);Kl(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,f)=>{const d=c==="ok";d||Fe("update at "+e+" failed: "+c);const h=fn(t.serverSyncTree_,l,!d),_=h.length>0?ei(t,e):e;ct(t.eventQueue_,_,h),iu(t,r,c,f)}),be(n,c=>{const f=Hd(t,he(e,c));ei(t,f)}),ct(t.eventQueue_,e,[])}}function dk(t){As(t,"onDisconnectEvents");const e=ql(t),n=nl();Yc(t.onDisconnect_,q(),(i,s)=>{const o=cy(i,s,t.serverSyncTree_,e);W_(n,i,o)});let r=[];Yc(n,q(),(i,s)=>{r=r.concat(Rs(t.serverSyncTree_,i,s));const o=Hd(t,i);ei(t,o)}),t.onDisconnect_=nl(),ct(t.eventQueue_,q(),r)}function hk(t,e,n){let r;U(e._path)===".info"?r=nu(t.infoSyncTree_,e,n):r=nu(t.serverSyncTree_,e,n),_y(t.eventQueue_,e._path,r)}function wy(t,e,n){let r;U(e._path)===".info"?r=ul(t.infoSyncTree_,e,n):r=ul(t.serverSyncTree_,e,n),_y(t.eventQueue_,e._path,r)}function fk(t){t.persistentConnection_&&t.persistentConnection_.interrupt(rk)}function As(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ie(n,...e)}function iu(t,e,n,r){e&&ai(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function xy(t,e,n){return Rd(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function Wd(t,e=t.transactionQueueTree_){if(e||Ql(t,e),ui(e)){const n=Sy(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&pk(t,Ps(e),n)}else hy(e)&&Vl(e,n=>{Wd(t,n)})}function pk(t,e,n){const r=n.map(c=>c.currentWriteId),i=xy(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const f=n[c];S(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const d=Le(e,f.path);s=s.updateChild(d,f.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,c=>{As(t,"transaction put response",{path:a.toString(),status:c});let f=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,f=f.concat(fn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Ql(t,Fd(t.transactionQueueTree_,e)),Wd(t,t.transactionQueueTree_),ct(t.eventQueue_,e,f);for(let h=0;h<d.length;h++)ai(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Fe("transaction at "+a.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}ei(t,e)}},o)}function ei(t,e){const n=Ey(t,e),r=Ps(n),i=Sy(t,n);return mk(t,i,r),r}function mk(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=Le(n,a.path);let f=!1,d;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)f=!0,d=a.abortReason,i=i.concat(fn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=ik)f=!0,d="maxretry",i=i.concat(fn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=xy(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){Gl("transaction failed: Data returned ",_,a.path);let y=ye(_);typeof _=="object"&&_!=null&&Rt(_,".priority")||(y=y.updatePriority(h.getPriority()));const C=a.currentWriteId,m=ql(t),p=uy(y,h,m);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=p,a.currentWriteId=$d(t),o.splice(o.indexOf(C),1),i=i.concat(iy(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(fn(t.serverSyncTree_,C,!0))}else f=!0,d="nodata",i=i.concat(fn(t.serverSyncTree_,a.currentWriteId,!0))}ct(t.eventQueue_,n,i),i=[],f&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Ql(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ai(r[l]);Wd(t,t.transactionQueueTree_)}function Ey(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&ui(r)===void 0;)r=Fd(r,n),e=te(e),n=U(e);return r}function Sy(t,e){const n=[];return Cy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Cy(t,e,n){const r=ui(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Vl(e,i=>{Cy(t,i,n)})}function Ql(t,e){const n=ui(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,dy(e,n.length>0?n:void 0)}Vl(e,r=>{Ql(t,r)})}function Hd(t,e){const n=Ps(Ey(t,e)),r=Fd(t.transactionQueueTree_,e);return VC(r,i=>{Ua(t,i)}),Ua(t,r),fy(r,i=>{Ua(t,i)}),n}function Ua(t,e){const n=ui(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(fn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?dy(e,void 0):n.length=s+1,ct(t.eventQueue_,Ps(e),i);for(let o=0;o<r.length;o++)ai(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _k(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Fe(`Invalid query segment '${n}' in query '${t}'`)}return e}const lp=function(t,e){const n=yk(t),r=n.namespace;n.domain==="firebase.com"&&qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||TE();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new I_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new Z(n.pathString)}},yk=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let f=t.indexOf("/");f===-1&&(f=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(f,d)),f<d&&(i=gk(t.substring(f,d)));const h=_k(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",vk=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=ap.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ap.charAt(e[i]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class xk{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:_d(this._path)}get ref(){return new Xt(this._repo,this._path)}get _queryIdentifier(){const e=Kf(this._queryParams),n=fd(e);return n==="{}"?"default":n}get _queryObject(){return Kf(this._queryParams)}isEqual(e){if(e=Re(e),!(e instanceof Vd))return!1;const n=this._repo===e._repo,r=yd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+dS(this._path)}}class Xt extends Vd{constructor(e,n){super(e,n,new Ed,!1)}get parent(){const e=M_(this._path);return e===null?null:new Xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _s{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Z(e),r=ys(this.ref,e);return new _s(this._node.getChild(n),r,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new _s(i,ys(this.ref,r),fe)))}hasChild(e){const n=new Z(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function An(t,e){return t=Re(t),t._checkNotDeleted("ref"),e!==void 0?ys(t._root,e):t._root}function ys(t,e){return t=Re(t),U(t._path)===null?ZC("child","path",e):gy("child","path",e),new Xt(t._repo,he(t._path,e))}function Iy(t,e){t=Re(t),zd("push",t._path),my("push",e,t._path,!0);const n=vy(t._repo),r=vk(n),i=ys(t,r),s=ys(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Ek(t){return zd("remove",t._path),Gd(t,null)}function Gd(t,e){t=Re(t),zd("set",t._path),my("set",e,t._path,!1);const n=new ks;return ck(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Sk(t,e){JC("update",e,t._path);const n=new ks;return uk(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Ck(t){t=Re(t);const e=new ky(()=>{}),n=new Yl(e);return ak(t._repo,t,n).then(r=>new _s(r,new Xt(t._repo,t._path),t._queryParams.getIndex()))}class Yl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new wk("value",this,new _s(e.snapshotNode,new Xt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new xk(this,e,n):null}matches(e){return e instanceof Yl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function kk(t,e,n,r,i){const s=new ky(n,void 0),o=new Yl(s);return hk(t._repo,t,o),()=>wy(t._repo,t,o)}function Ny(t,e,n,r){return kk(t,"value",e)}function Ty(t,e,n){wy(t._repo,t,null)}SC(Xt);TC(Xt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik="FIREBASE_DATABASE_EMULATOR_HOST",su={};let Nk=!1;function Tk(t,e,n,r){t.repoInfo_=new I_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function bk(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=lp(s,i),l=o.repoInfo,a;typeof process<"u"&&bf&&(a=bf[Ik]),a?(s=`http://${a}?ns=${l.namespace}`,o=lp(s,i),l=o.repoInfo):o.repoInfo.secure;const c=new UE(t.name,t.options,e);ek("Invalid Firebase Database URL",o),B(o.path)||qt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=Pk(l,t,c,new FE(t.name,n));return new Ak(f,t)}function Rk(t,e){const n=su[e];(!n||n[t.key]!==t)&&qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),fk(t),delete n[t.key]}function Pk(t,e,n,r){let i=su[e.name];i||(i={},su[e.name]=i);let s=i[t.toURLString()];return s&&qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new sk(t,Nk,n,r),i[t.toURLString()]=s,s}class Ak{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ok(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xt(this._repo,q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Rk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&qt("Cannot call "+e+" on a deleted database.")}}function Ok(t=c_(),e){const n=dd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Qx("database");r&&Dk(n,...r)}return n}function Dk(t,e,n,r={}){t=Re(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&qt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new yo(yo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Yx(r.mockUserToken,t.app.options.projectId);s=new yo(o)}Tk(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(t){EE(li),Qr(new tr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return bk(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Cn(Rf,Pf,t),Cn(Rf,Pf,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk={".sv":"timestamp"};function dl(){return Lk}Bt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Bt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Mk();function Kd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function by(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jk=by,Ry=new Is("auth","Firebase",by());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new cd("@firebase/auth");function Fk(t,...e){hl.logLevel<=J.WARN&&hl.warn(`Auth (${li}): ${t}`,...e)}function vo(t,...e){hl.logLevel<=J.ERROR&&hl.error(`Auth (${li}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,...e){throw qd(t,...e)}function Tt(t,...e){return qd(t,...e)}function Py(t,e,n){const r=Object.assign(Object.assign({},jk()),{[e]:n});return new Is("auth","Firebase",r).create(e,{appName:t.name})}function $t(t){return Py(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ry.create(t,...e)}function M(t,e,...n){if(!t)throw qd(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vo(e),new Error(e)}function Qt(t,e){t||jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Uk(){return cp()==="http:"||cp()==="https:"}function cp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uk()||Jx()||"connection"in navigator)?navigator.onLine:!0}function Bk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=ad()||i_()}get(){return zk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk=new Os(3e4,6e4);function Fn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jt(t,e,n,r,i={}){return Oy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=oi(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:a},s);return Xx()||(c.referrerPolicy="no-referrer"),Ay.fetch()(Dy(t,t.config.apiHost,n,l),c)})}async function Oy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$k),e);try{const i=new Vk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw io(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw io(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw io(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Py(t,f,c);wt(t,f)}}catch(i){if(i instanceof jn)throw i;wt(t,"network-request-failed",{message:String(i)})}}async function Ds(t,e,n,r,i={}){const s=await Jt(t,e,n,r,i);return"mfaPendingCredential"in s&&wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Dy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Qd(t.config,i):`${t.config.apiScheme}://${i}`}function Hk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Vk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tt(this.auth,"network-request-failed")),Wk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Tt(t,e,r);return i.customData._tokenResponse=n,i}function up(t){return t!==void 0&&t.enterprise!==void 0}class Gk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Hk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Kk(t,e){return Jt(t,"GET","/v2/recaptchaConfig",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qk(t,e){return Jt(t,"POST","/v1/accounts:delete",e)}async function My(t,e){return Jt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qk(t,e=!1){const n=Re(t),r=await n.getIdToken(e),i=Yd(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Hi(za(i.auth_time)),issuedAtTime:Hi(za(i.iat)),expirationTime:Hi(za(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function za(t){return Number(t)*1e3}function Yd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const i=qo(n);return i?JSON.parse(i):(vo("Failed to decode base64 JWT payload"),null)}catch(i){return vo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dp(t){const e=Yd(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&Yk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Yk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hi(this.lastLoginAt),this.creationTime=Hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ti(t,My(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ly(s.providerUserInfo):[],l=Zk(t.providerData,o),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=a?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new lu(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function Jk(t){const e=Re(t);await fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ly(t){return t.map(e=>{var{providerId:n}=e,r=Kd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(t,e){const n=await Oy(t,{},async()=>{const r=oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Dy(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ay.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tI(t,e){return Jt(t,"POST","/v2/accounts:revokeToken",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=dp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await eI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new jr;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Kd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new lu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ti(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qk(this,e)}reload(){return Jk(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject($t(this.auth));const e=await this.getIdToken();return await ti(this,qk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,c,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:g,emailVerified:w,isAnonymous:k,providerData:N,stsTokenManager:T}=n;M(g&&T,e,"internal-error");const R=jr.fromJSON(this.name,T);M(typeof g=="string",e,"internal-error"),tn(d,e.name),tn(h,e.name),M(typeof w=="boolean",e,"internal-error"),M(typeof k=="boolean",e,"internal-error"),tn(_,e.name),tn(y,e.name),tn(v,e.name),tn(C,e.name),tn(m,e.name),tn(p,e.name);const j=new Ft({uid:g,auth:e,email:h,emailVerified:w,displayName:d,isAnonymous:k,photoURL:y,phoneNumber:_,tenantId:v,stsTokenManager:R,createdAt:m,lastLoginAt:p});return N&&Array.isArray(N)&&(j.providerData=N.map(L=>Object.assign({},L))),C&&(j._redirectEventId=C),j}static async _fromIdTokenResponse(e,n,r=!1){const i=new jr;i.updateFromServerResponse(n);const s=new Ft({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ly(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new jr;l.updateFromIdToken(r);const a=new Ft({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new lu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,c),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=new Map;function Ut(t){Qt(t instanceof Function,"Expected a class definition");let e=hp.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jy.type="NONE";const fp=jy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t,e,n){return`firebase:${t}:${e}:${n}`}class Fr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wo(this.userKey,i.apiKey,s),this.fullPersistenceKey=wo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fr(Ut(fp),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ut(fp);const o=wo(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const d=Ft._fromJSON(e,f);c!==s&&(l=d),s=c;break}}catch{}const a=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Fr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Fr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(By(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wy(e))return"Blackberry";if(Hy(e))return"Webos";if(Uy(e))return"Safari";if((e.includes("chrome/")||zy(e))&&!e.includes("edge/"))return"Chrome";if($y(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fy(t=Ue()){return/firefox\//i.test(t)}function Uy(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zy(t=Ue()){return/crios\//i.test(t)}function By(t=Ue()){return/iemobile/i.test(t)}function $y(t=Ue()){return/android/i.test(t)}function Wy(t=Ue()){return/blackberry/i.test(t)}function Hy(t=Ue()){return/webos/i.test(t)}function Xd(t=Ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nI(t=Ue()){var e;return Xd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rI(){return Zx()&&document.documentMode===10}function Vy(t=Ue()){return Xd(t)||$y(t)||Hy(t)||Wy(t)||/windows phone/i.test(t)||By(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(t,e=[]){let n;switch(t){case"Browser":n=pp(Ue());break;case"Worker":n=`${pp(Ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${li}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(t,e={}){return Jt(t,"GET","/v2/passwordPolicy",Fn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=6;class lI{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:oI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mp(this),this.idTokenSubscription=new mp(this),this.beforeStateQueue=new iI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ry,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await My(this,{idToken:e}),r=await Ft._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(kt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kt(this.app))return Promise.reject($t(this));const n=e?Re(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject($t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kt(this.app)?Promise.reject($t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sI(this),n=new lI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ut(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[Ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Fk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function dr(t){return Re(t)}class mp{constructor(e){this.auth=e,this.observer=null,this.addObserver=c1(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cI(t){Xl=t}function Ky(t){return Xl.loadJS(t)}function uI(){return Xl.recaptchaEnterpriseScript}function dI(){return Xl.gapiScript}function hI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const fI="recaptcha-enterprise",pI="NO_RECAPTCHA";class mI{constructor(e){this.type=fI,this.auth=dr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Kk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new Gk(a);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function i(s,o,l){const a=window.grecaptcha;up(a)?a.enterprise.ready(()=>{a.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(pI)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&up(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=uI();a.length!==0&&(a+=l),Ky(a).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function gp(t,e,n,r=!1){const i=new mI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function au(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await gp(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await gp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t,e){const n=dd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Yo(s,e??{}))return i;wt(i,"already-initialized")}return n.initialize({options:e})}function _I(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yI(t,e,n){const r=dr(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=qy(e),{host:o,port:l}=vI(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),wI()}function qy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vI(t){const e=qy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:_p(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:_p(o)}}}function _p(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,n){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function xI(t,e){return Jt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e){return Ds(t,"POST","/v1/accounts:signInWithPassword",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(t,e){return Ds(t,"POST","/v1/accounts:signInWithEmailLink",Fn(t,e))}async function CI(t,e){return Ds(t,"POST","/v1/accounts:signInWithEmailLink",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends Jd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new vs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new vs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return au(e,n,"signInWithPassword",EI);case"emailLink":return SI(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return au(e,r,"signUpPassword",xI);case"emailLink":return CI(e,{idToken:n,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(t,e){return Ds(t,"POST","/v1/accounts:signInWithIdp",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI="http://localhost";class sr extends Jd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Kd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ur(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ur(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ur(e,n)}buildRequest(){const e={requestUri:kI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NI(t){const e=Ti(bi(t)).link,n=e?Ti(bi(e)).deep_link_id:null,r=Ti(bi(t)).deep_link_id;return(r?Ti(bi(r)).link:null)||r||n||e||t}class Zd{constructor(e){var n,r,i,s,o,l;const a=Ti(bi(e)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,f=(r=a.oobCode)!==null&&r!==void 0?r:null,d=II((i=a.mode)!==null&&i!==void 0?i:null);M(c&&f&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=f,this.continueUrl=(s=a.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=NI(e);try{return new Zd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.providerId=di.PROVIDER_ID}static credential(e,n){return vs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Zd.parseLink(n);return M(r,"argument-error"),vs._fromEmailAndCode(e,r.code,r.tenantId)}}di.PROVIDER_ID="password";di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends Qy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Ms{constructor(){super("facebook.com")}static credential(e){return sr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Ms{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sr._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return an.credential(n,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Ms{constructor(){super("github.com")}static credential(e){return sr._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.GITHUB_SIGN_IN_METHOD="github.com";cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Ms{constructor(){super("twitter.com")}static credential(e,n){return sr._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return un.credential(n,r)}catch{return null}}}un.TWITTER_SIGN_IN_METHOD="twitter.com";un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TI(t,e){return Ds(t,"POST","/v1/accounts:signUp",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ft._fromIdTokenResponse(e,r,i),o=yp(r);return new or({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=yp(r);return new or({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function yp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends jn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new pl(e,n,r,i)}}function Yy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pl._fromErrorAndOperation(t,s,e,r):s})}async function bI(t,e,n=!1){const r=await ti(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return or._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(t,e,n=!1){const{auth:r}=t;if(kt(r.app))return Promise.reject($t(r));const i="reauthenticate";try{const s=await ti(t,Yy(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=Yd(s.idToken);M(o,r,"internal-error");const{sub:l}=o;return M(t.uid===l,r,"user-mismatch"),or._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&wt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(t,e,n=!1){if(kt(t.app))return Promise.reject($t(t));const r="signIn",i=await Yy(t,r,e),s=await or._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function PI(t,e){return Xy(dr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(t){const e=dr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function AI(t,e,n){if(kt(t.app))return Promise.reject($t(t));const r=dr(t),o=await au(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",TI).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Jy(t),a}),l=await or._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function OI(t,e,n){return kt(t.app)?Promise.reject($t(t)):PI(Re(t),di.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jy(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(t,e){return Jt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Re(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ti(r,DI(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:a})=>a==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function LI(t,e,n,r){return Re(t).onIdTokenChanged(e,n,r)}function jI(t,e,n){return Re(t).beforeAuthStateChanged(e,n)}function FI(t,e,n,r){return Re(t).onAuthStateChanged(e,n,r)}function UI(t){return Re(t).signOut()}const ml="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ml,"1"),this.storage.removeItem(ml),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=1e3,BI=10;class ev extends Zy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);rI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,BI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ev.type="LOCAL";const $I=ev;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv extends Zy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tv.type="SESSION";const nv=tv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Jl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),a=await WI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const c=eh("",20);i.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(f),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return window}function VI(t){bt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function GI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qI(){return rv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv="firebaseLocalStorageDb",QI=1,gl="firebaseLocalStorage",sv="fbase_key";class Ls{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zl(t,e){return t.transaction([gl],e?"readwrite":"readonly").objectStore(gl)}function YI(){const t=indexedDB.deleteDatabase(iv);return new Ls(t).toPromise()}function cu(){const t=indexedDB.open(iv,QI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gl,{keyPath:sv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gl)?e(r):(r.close(),await YI(),e(await cu()))})})}async function vp(t,e,n){const r=Zl(t,!0).put({[sv]:e,value:n});return new Ls(r).toPromise()}async function XI(t,e){const n=Zl(t,!1).get(e),r=await new Ls(n).toPromise();return r===void 0?null:r.value}function wp(t,e){const n=Zl(t,!0).delete(e);return new Ls(n).toPromise()}const JI=800,ZI=3;class ov{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jl._getInstance(qI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await GI(),!this.activeServiceWorker)return;this.sender=new HI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cu();return await vp(e,ml,"1"),await wp(e,ml),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zl(i,!1).getAll();return new Ls(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ov.type="LOCAL";const eN=ov;new Os(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(t,e){return e?Ut(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th extends Jd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ur(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ur(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ur(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nN(t){return Xy(t.auth,new th(t),t.bypassAuthState)}function rN(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),RI(n,new th(t),t.bypassAuthState)}async function iN(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),bI(n,new th(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nN;case"linkViaPopup":case"linkViaRedirect":return iN;case"reauthViaPopup":case"reauthViaRedirect":return rN;default:wt(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=new Os(2e3,1e4);class Tr extends lv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Tr.currentPopupAction&&Tr.currentPopupAction.cancel(),Tr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=eh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sN.get())};e()}}Tr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN="pendingRedirect",xo=new Map;class lN extends lv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xo.get(this.auth._key());if(!e){try{const r=await aN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xo.set(this.auth._key(),e)}return this.bypassAuthState||xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aN(t,e){const n=dN(e),r=uN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function cN(t,e){xo.set(t._key(),e)}function uN(t){return Ut(t._redirectPersistence)}function dN(t){return wo(oN,t.config.apiKey,t.name)}async function hN(t,e,n=!1){if(kt(t.app))return Promise.reject($t(t));const r=dr(t),i=tN(r,e),o=await new lN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN=10*60*1e3;class pN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!av(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fN&&this.cachedEventUids.clear(),this.cachedEventUids.has(xp(e))}saveEventToCache(e){this.cachedEventUids.add(xp(e)),this.lastProcessedEventTime=Date.now()}}function xp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function av({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return av(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(t,e={}){return Jt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yN=/^https?/;async function vN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gN(t);for(const n of e)try{if(wN(n))return}catch{}wt(t,"unauthorized-domain")}function wN(t){const e=ou(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yN.test(n))return!1;if(_N.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN=new Os(3e4,6e4);function Ep(){const t=bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EN(t){return new Promise((e,n)=>{var r,i,s;function o(){Ep(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ep(),n(Tt(t,"network-request-failed"))},timeout:xN.get()})}if(!((i=(r=bt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=bt().gapi)===null||s===void 0)&&s.load)o();else{const l=hI("iframefcb");return bt()[l]=()=>{gapi.load?o():n(Tt(t,"network-request-failed"))},Ky(`${dI()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function SN(t){return Eo=Eo||EN(t),Eo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN=new Os(5e3,15e3),kN="__/auth/iframe",IN="emulator/auth/iframe",NN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bN(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qd(e,IN):`https://${t.config.authDomain}/${kN}`,r={apiKey:e.apiKey,appName:t.name,v:li},i=TN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${oi(r).slice(1)}`}async function RN(t){const e=await SN(t),n=bt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:bN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Tt(t,"network-request-failed"),l=bt().setTimeout(()=>{s(o)},CN.get());function a(){bt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AN=500,ON=600,DN="_blank",MN="http://localhost";class Sp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LN(t,e,n,r=AN,i=ON){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},PN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ue().toLowerCase();n&&(l=zy(c)?DN:n),Fy(c)&&(e=e||MN,a.scrollbars="yes");const f=Object.entries(a).reduce((h,[_,y])=>`${h}${_}=${y},`,"");if(nI(c)&&l!=="_self")return jN(e||"",l),new Sp(null);const d=window.open(e||"",l,f);M(d,t,"popup-blocked");try{d.focus()}catch{}return new Sp(d)}function jN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN="__/auth/handler",UN="emulator/auth/handler",zN=encodeURIComponent("fac");async function Cp(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:li,eventId:i};if(e instanceof Qy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof Ms){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const a=await t._getAppCheckToken(),c=a?`#${zN}=${encodeURIComponent(a)}`:"";return`${BN(t)}?${oi(l).slice(1)}${c}`}function BN({config:t}){return t.emulator?Qd(t,UN):`https://${t.authDomain}/${FN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="webStorageSupport";class $N{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nv,this._completeRedirectFn=hN,this._overrideRedirectResult=cN}async _openPopup(e,n,r,i){var s;Qt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Cp(e,n,r,ou(),i);return LN(e,o,eh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Cp(e,n,r,ou(),i);return VI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await RN(e),r=new pN(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ba,{type:Ba},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ba];o!==void 0&&n(!!o),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vy()||Uy()||Xd()}}const WN=$N;var kp="@firebase/auth",Ip="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function GN(t){Qr(new tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gy(t)},c=new aI(r,i,s,a);return _I(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qr(new tr("auth-internal",e=>{const n=dr(e.getProvider("auth").getImmediate());return(r=>new HN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(kp,Ip,VN(t)),Cn(kp,Ip,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=5*60,qN=r_("authIdTokenMaxAge")||KN;let Np=null;const QN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qN)return;const i=n==null?void 0:n.token;Np!==i&&(Np=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function YN(t=c_()){const e=dd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gI(t,{popupRedirectResolver:WN,persistence:[eN,$I,nv]}),r=r_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=QN(s.toString());jI(n,o,()=>o(n.currentUser)),LI(n,l=>o(l))}}const i=t_("auth");return i&&yI(n,`http://${i}`),n}function XN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}cI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Tt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",XN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});GN("Browser");const JN={apiKey:"AIzaSyDJjI0KWxpkdzdF9HZNbHjdvfC7BDQmymc",authDomain:"smart-bed-4c402.firebaseapp.com",projectId:"smart-bed-4c402",storageBucket:"smart-bed-4c402.firebasestorage.app",messagingSenderId:"928489789074",appId:"1:928489789074:web:fc1ea97f991c544b4a384b",measurementId:"G-15TKEH90BK",databaseURL:"https://smart-bed-4c402-default-rtdb.asia-southeast1.firebasedatabase.app/"},cv=a_(JN),On=Ok(cv),ea=YN(cv);async function ZN(t,e){return(await OI(ea,t,e)).user}async function eT(t,e,n){const r=await AI(ea,t,e);return await MI(r.user,{displayName:n}),r.user}async function tT(){await UI(ea)}function nT(t){return FI(ea,t)}function rT(){const[t,e]=F.useState("login"),[n,r]=F.useState(""),[i,s]=F.useState(""),[o,l]=F.useState(""),[a,c]=F.useState(""),[f,d]=F.useState(!1),h=async()=>{if(c(""),!n||!i)return c("กรุณากรอก Email และ Password");if(t==="register"&&!o)return c("กรุณากรอกชื่อผู้ใช้");if(i.length<6)return c("Password ต้องมีอย่างน้อย 6 ตัวอักษร");d(!0);try{t==="login"?await ZN(n,i):await eT(n,i,o)}catch(_){const y={"auth/user-not-found":"ไม่พบบัญชีนี้ในระบบ","auth/wrong-password":"Password ไม่ถูกต้อง","auth/email-already-in-use":"Email นี้ถูกใช้แล้ว","auth/invalid-email":"รูปแบบ Email ไม่ถูกต้อง","auth/invalid-credential":"Email หรือ Password ไม่ถูกต้อง"}[_.code]||_.message;c(y)}finally{d(!1)}};return u.jsxs("div",{className:"min-h-screen flex items-center justify-center p-4 relative overflow-hidden",style:{background:"linear-gradient(135deg, #0f1f3d 0%, #1e3a5f 50%, #1d4ed8 100%)",fontFamily:"'Sarabun', sans-serif"},children:[[300,200,400,150,250,180].map((_,y)=>u.jsx("div",{style:{width:_,height:_,top:`${[10,60,30,80,5,50][y]}%`,left:`${[70,10,80,20,40,90][y]}%`},className:"absolute rounded-full border border-white/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none"},y)),u.jsxs("div",{className:"flex w-full max-w-[960px] min-h-[540px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] relative z-10",children:[u.jsxs("div",{className:"flex-1 p-12 flex flex-col justify-center relative overflow-hidden",style:{background:"linear-gradient(160deg, #1e40af, #1e3a5f)"},children:[u.jsx("div",{className:"absolute w-[280px] h-[280px] rounded-full bg-white/[0.04] -top-[60px] -right-[80px]"}),u.jsx("div",{className:"absolute w-[180px] h-[180px] rounded-full bg-white/[0.04] bottom-10 -left-10"}),u.jsx("img",{src:"logo.png",alt:"Hospital Logo",style:{width:"100px",height:"100px",objectFit:"contain"}}),u.jsxs("h1",{className:"text-white text-[1.8rem] font-extrabold m-0 mb-3 leading-tight",children:["Smart Bed",u.jsx("br",{}),"Management"]}),u.jsxs("p",{className:"text-[#93c5fd] text-[0.95rem] leading-[1.7] m-0 mb-8",children:["ระบบจัดการเตียงผู้ป่วยอัจฉริยะ",u.jsx("br",{}),"เชื่อมต่อข้อมูลแบบ Realtime",u.jsx("br",{}),"ด้วย Firebase"]}),["🔴  ติดตามสถานะเตียง Realtime","📊  Dashboard วิเคราะห์ข้อมูล","✏️  จัดการข้อมูลผู้ป่วย","🔒  ระบบ Login ปลอดภัย"].map((_,y)=>u.jsx("div",{className:"text-[#bfdbfe] text-[0.85rem] mb-2",children:_},y))]}),u.jsxs("div",{className:"w-[400px] bg-white px-10 py-12 flex flex-col justify-center",children:[u.jsx("h2",{className:"m-0 mb-1 text-[1.5rem] font-extrabold text-[#1e3a5f]",children:t==="login"?"เข้าสู่ระบบ":"สมัครสมาชิก"}),u.jsx("p",{className:"text-gray-500 text-[0.85rem] m-0 mb-7",children:t==="login"?"กรอก Email และ Password ของคุณ":"สร้างบัญชีใหม่เพื่อเข้าใช้งาน"}),a&&u.jsxs("div",{className:"bg-red-50 border border-red-300 text-red-600 px-[0.85rem] py-[0.65rem] rounded-lg text-[0.83rem] mb-4",children:["⚠️ ",a]}),t==="register"&&u.jsx($a,{label:"ชื่อผู้ใช้",icon:"👤",type:"text",value:o,onChange:l,placeholder:"ชื่อ-นามสกุล"}),u.jsx($a,{label:"Email",icon:"📧",type:"email",value:n,onChange:r,placeholder:"example@hospital.com"}),u.jsx($a,{label:"Password",icon:"🔒",type:"password",value:i,onChange:s,placeholder:"อย่างน้อย 6 ตัวอักษร",onKeyDown:_=>_.key==="Enter"&&h()}),u.jsx("button",{onClick:h,disabled:f,className:"w-full py-[0.85rem] text-white border-none rounded-xl font-bold text-base cursor-pointer mt-2 disabled:cursor-not-allowed transition-opacity hover:opacity-90",style:{background:f?"#93c5fd":"linear-gradient(135deg,#1e3a5f,#2563eb)",fontFamily:"'Sarabun', sans-serif"},children:f?"⏳ กำลังดำเนินการ...":t==="login"?"🔑 เข้าสู่ระบบ":"✅ สมัครสมาชิก"}),u.jsxs("p",{className:"text-center mt-6 text-[0.875rem] text-gray-500",children:[t==="login"?"ยังไม่มีบัญชี?":"มีบัญชีแล้ว?"," ",u.jsx("button",{onClick:()=>{e(t==="login"?"register":"login"),c("")},className:"bg-transparent border-none text-blue-600 font-bold cursor-pointer text-[0.875rem] hover:underline",style:{fontFamily:"'Sarabun', sans-serif"},children:t==="login"?"สมัครสมาชิก":"เข้าสู่ระบบ"})]})]})]})]})}function $a({label:t,icon:e,type:n,value:r,onChange:i,placeholder:s,onKeyDown:o}){return u.jsxs("div",{className:"mb-[1.1rem]",children:[u.jsx("label",{className:"block text-[0.8rem] font-semibold text-gray-700 mb-[0.4rem]",style:{fontFamily:"'Sarabun', sans-serif"},children:t}),u.jsxs("div",{className:"relative",children:[u.jsx("span",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-base",children:e}),u.jsx("input",{type:n,value:r,onChange:l=>i(l.target.value),onKeyDown:o,placeholder:s,className:"w-full py-[0.7rem] pr-[0.85rem] pl-[2.4rem] border-[1.5px] border-gray-200 rounded-[9px] text-[0.875rem] outline-none box-border bg-gray-50 focus:border-blue-500 transition-colors",style:{fontFamily:"'Sarabun', sans-serif"}})]})]})}function iT({pct:t,isDark:e}){const l=v=>v*Math.PI/180,a=(v,C)=>({x:100+C*Math.cos(l(v)),y:100+C*Math.sin(l(v))}),c=(v,C,m)=>{const p=a(v,m),g=a(v+C,m);return`M ${p.x} ${p.y} A ${m} ${m} 0 ${C>180?1:0} 1 ${g.x} ${g.y}`},f=t/100*240,d=t>80?"#ef4444":t>60?"#f59e0b":"#06b6d4",h=a(-210+f,70),_=e?"#1e293b":"#e2e8f0",y=e?"#475569":"#94a3b8";return u.jsxs("svg",{viewBox:"0 0 200 170",className:"w-full max-w-[200px]",children:[u.jsx("path",{d:c(-210,240,70),fill:"none",stroke:_,strokeWidth:"14",strokeLinecap:"round"}),u.jsx("path",{d:c(-210,f,70),fill:"none",stroke:d,strokeWidth:"14",strokeLinecap:"round",style:{filter:`drop-shadow(0 0 6px ${d}80)`}}),t>0&&u.jsx("circle",{cx:h.x,cy:h.y,r:"7",fill:d,style:{filter:`drop-shadow(0 0 8px ${d})`}}),u.jsxs("text",{x:"100",y:"108",textAnchor:"middle",fill:d,style:{fontSize:34,fontWeight:800,fontFamily:"monospace"},children:[t,"%"]}),u.jsx("text",{x:"100",y:"130",textAnchor:"middle",fill:y,style:{fontSize:11,fontFamily:"sans-serif"},children:"Occupancy Rate"})]})}function sT({ward:t,occupied:e,available:n,total:r,isDark:i}){const s=r?Math.round(e/r*100):0,o=s>80?"#ef4444":s>60?"#f59e0b":"#06b6d4",l=i?"#94a3b8":"#64748b",a=i?"#1e293b":"#e2e8f0";return u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"w-1.5 h-1.5 rounded-full",style:{background:o}}),u.jsx("span",{className:"text-sm font-medium",style:{color:i?"#cbd5e1":"#334155"},children:t})]}),u.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[u.jsxs("span",{style:{color:l},children:[e,"/",r]}),u.jsxs("span",{className:"font-mono font-bold",style:{color:o},children:[s,"%"]})]})]}),u.jsx("div",{className:"h-1.5 rounded-full overflow-hidden",style:{background:a},children:u.jsx("div",{className:"h-full rounded-full transition-all duration-700",style:{width:`${s}%`,background:`linear-gradient(90deg, ${o}80, ${o})`}})})]})}function oT({days:t}){return t>14?u.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-bold bg-red-500/15 text-red-400 border border-red-500/20",children:[u.jsx(Kg,{size:10})," ",t,"d"]}):t>7?u.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-bold bg-amber-500/15 text-amber-400 border border-amber-500/20",children:[u.jsx(zc,{size:10})," ",t,"d"]}):u.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",children:[u.jsx(Uc,{size:10})," ",t,"d"]})}function lT({icon:t,label:e,value:n,color:r,sub:i,isDark:s}){const o=s?"rgba(15,23,42,0.8)":"rgba(255,255,255,0.9)",l=s?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.07)",a=s?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.14)",c=s?"#ffffff":"#1e293b",f=s?"#94a3b8":"#64748b";return u.jsxs("div",{className:"relative overflow-hidden rounded-2xl p-5 group transition-all duration-300",style:{background:o,border:`1px solid ${l}`},onMouseEnter:d=>d.currentTarget.style.borderColor=a,onMouseLeave:d=>d.currentTarget.style.borderColor=l,children:[u.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",style:{background:`radial-gradient(circle at 0% 0%, ${r}10 0%, transparent 60%)`}}),u.jsx("div",{className:"flex items-start justify-between mb-4",children:u.jsx("div",{className:"p-2.5 rounded-xl",style:{background:`${r}18`,border:`1px solid ${r}25`},children:u.jsx(t,{size:18,style:{color:r},strokeWidth:2})})}),u.jsx("div",{className:"font-mono text-3xl font-bold mb-0.5",style:{color:c,textShadow:`0 0 20px ${r}40`},children:n}),u.jsx("div",{className:"text-xs font-medium tracking-wide",style:{color:f},children:e}),i&&u.jsx("div",{className:"mt-2 text-xs font-semibold",style:{color:r},children:i}),u.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity",style:{background:`linear-gradient(90deg, transparent, ${r}, transparent)`}})]})}function aT({beds:t,isDark:e}){var W,H;const[n,r]=F.useState("daily"),i=F.useMemo(()=>{const P=new Date;P.setHours(0,0,0,0);let V=[];if(n==="daily")for(let G=6;G>=0;G--){const se=new Date(P);se.setDate(se.getDate()-G);const I=se.getFullYear(),A=String(se.getMonth()+1).padStart(2,"0"),O=String(se.getDate()).padStart(2,"0"),Q=`${I}-${A}-${O}`,X=t.filter($e=>$e.admitDate===Q).length;V.push({date:Q,label:se.toLocaleDateString("th-TH",{day:"numeric",month:"short"}),count:X})}else if(n==="weekly"){const G=P.getFullYear(),se=P.getMonth();let I=new Date(G,se,1),A=1;for(;I.getMonth()===se;){let O=new Date(I);O.setDate(I.getDate()-I.getDay());let Q=new Date(O);Q.setDate(O.getDate()+6);let X=0;t.forEach($e=>{if($e.admitDate){const Qe=new Date($e.admitDate);Qe.setHours(0,0,0,0),Qe>=O&&Qe<=Q&&X++}}),V.push({label:`สัปดาห์ ${A}`,count:X}),A++,I.setDate(I.getDate()-I.getDay()+7)}}else if(n==="monthly")for(let G=5;G>=0;G--){const se=new Date(P.getFullYear(),P.getMonth()-G,1),I=se.getFullYear(),A=String(se.getMonth()+1).padStart(2,"0"),O=`${I}-${A}`,Q=t.filter(X=>X.admitDate&&X.admitDate.startsWith(O)).length;V.push({label:se.toLocaleDateString("th-TH",{month:"short",year:"2-digit"}),count:Q})}return V},[t,n]),s=Math.max(...i.map(P=>P.count),1),o=i.length,l=600,a=110,c={top:15,right:15,bottom:20,left:25},f=l-c.left-c.right,d=a-c.top-c.bottom,h=P=>c.left+P/(o-1)*f,_=P=>c.top+d-P/(s*1.15)*d,y=i.map((P,V)=>`${V===0?"M":"L"} ${h(V)} ${_(P.count)}`).join(" "),v=y+` L ${h(o-1)} ${c.top+d} L ${h(0)} ${c.top+d} Z`,C=i.reduce((P,V,G)=>V.count>i[P].count?G:P,0),m=i[o-1].count,p=m-(((W=i[o-2])==null?void 0:W.count)||0),g=(i.reduce((P,V)=>P+V.count,0)/o).toFixed(1),w=i.reduce((P,V)=>P+V.count,0),k=e?"rgba(15,23,42,0.8)":"rgba(255,255,255,0.9)",N=e?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.07)",T=e?"#1e293b":"#e2e8f0",R=e?"#334155":"#94a3b8",j=e?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)",L=e?"#475569":"#94a3b8",x=e?"#cbd5e1":"#334155";return u.jsxs("div",{className:"rounded-2xl p-5",style:{background:k,border:`1px solid ${N}`},children:[u.jsxs("div",{className:"flex items-start justify-between mb-3",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[u.jsx(sd,{size:15,className:"text-blue-500"}),u.jsx("span",{className:"text-slate-800 text-sm font-semibold",style:{color:x},children:"จำนวนผู้ป่วย Admit"})]}),u.jsx("p",{className:"text-xs",style:{color:L},children:"14 วันย้อนหลัง · อัปเดตแบบ Real-time"})]}),u.jsx("div",{className:"flex items-center bg-slate-100 p-1 rounded-lg",children:[{id:"daily",label:"รายวัน"},{id:"weekly",label:"รายสัปดาห์"},{id:"monthly",label:"รายเดือน"}].map(P=>u.jsx("button",{onClick:()=>r(P.id),className:`px-3 py-1 text-xs font-semibold rounded-md transition-all ${n===P.id?"bg-white text-blue-600 shadow-sm":"text-slate-500 hover:text-slate-700"}`,children:P.label},P.id))})]}),u.jsx("div",{className:"relative mt-2",children:u.jsxs("svg",{viewBox:`0 0 ${l} ${a}`,className:"w-full",style:{overflow:"visible"},children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"admitGradLight",x1:"0",y1:"0",x2:"0",y2:"1",children:[u.jsx("stop",{offset:"0%",stopColor:"#3b82f6",stopOpacity:"0.2"}),u.jsx("stop",{offset:"100%",stopColor:"#3b82f6",stopOpacity:"0"})]}),u.jsxs("linearGradient",{id:"lineGradLight",x1:"0",y1:"0",x2:"1",y2:"0",children:[u.jsx("stop",{offset:"0%",stopColor:"#6366f1"}),u.jsx("stop",{offset:"50%",stopColor:"#3b82f6"}),u.jsx("stop",{offset:"100%",stopColor:"#0ea5e9"})]})]}),[0,Math.round(s*.5),s].map(P=>u.jsxs("g",{children:[u.jsx("line",{x1:c.left,y1:_(P),x2:c.left+f,y2:_(P),stroke:T,strokeWidth:"1"}),u.jsx("text",{x:c.left-5,y:_(P)+4,textAnchor:"end",fill:R,style:{fontSize:9,fontFamily:"monospace"},children:P})]},P)),u.jsx("path",{d:v,fill:"url(#admitGradLight)"}),u.jsx("path",{d:y,fill:"none",stroke:"url(#lineGradLight)",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),i.map((P,V)=>{const G=V===C&&P.count>0,se=V===o-1;return u.jsxs("g",{children:[u.jsx("circle",{cx:h(V),cy:_(P.count),r:G||se?4:3,fill:G?"#f59e0b":se?"#3b82f6":"#ffffff",stroke:G?"#f59e0b":se?"#3b82f6":"#94a3b8",strokeWidth:"2"}),(G||se)&&u.jsx("text",{x:h(V),y:_(P.count)-8,textAnchor:"middle",fill:G?"#d97706":"#2563eb",style:{fontSize:9,fontWeight:700,fontFamily:"monospace"},children:P.count})]},V)}),i.map((P,V)=>u.jsx("text",{x:h(V),y:a-2,textAnchor:"middle",fill:V===o-1?"#3b82f6":"#64748b",style:{fontSize:8.5,fontFamily:"sans-serif"},children:P.label},V))]})}),u.jsxs("div",{className:"flex items-center gap-6 mt-4 pt-4",style:{borderTop:`1px solid ${j}`},children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-slate-500 text-[10px] mb-0.5",children:"สูงสุดในรอบนี้"}),u.jsxs("p",{className:"font-mono text-xs font-bold text-amber-500",children:[((H=i[C])==null?void 0:H.count)||0," คน"]})]}),u.jsx("div",{className:"w-px h-8",style:{background:j}}),u.jsxs("div",{children:[u.jsx("p",{className:"text-slate-500 text-[10px] mb-0.5",children:"เฉลี่ย"}),u.jsxs("p",{className:"font-mono text-xs font-bold text-blue-500",children:[g," คน/หน่วย"]})]}),u.jsx("div",{className:"w-px h-8",style:{background:j}}),u.jsxs("div",{children:[u.jsx("p",{className:"text-slate-500 text-[10px] mb-0.5",children:"รวมทั้งหมด"}),u.jsxs("p",{className:"font-mono text-xs font-bold text-indigo-500",children:[w," คน"]})]}),u.jsxs("div",{className:"ml-auto flex items-center gap-2 justify-end",children:[u.jsx("span",{className:"font-mono text-lg font-bold text-slate-700",children:m}),u.jsxs("span",{className:`flex items-center text-[10px] font-bold ${p>=0?"text-red-500":"text-emerald-500"}`,children:[p>=0?u.jsx(Gg,{size:11}):u.jsx(hx,{size:11}),Math.abs(p)]})]})]})]})}function cT({beds:t}){const{isDark:e}=xt(),[n,r]=F.useState(new Date);F.useEffect(()=>{const x=setInterval(()=>r(new Date),1e3);return()=>clearInterval(x)},[]);const i=t.length,s=x=>t.filter(W=>W.status===x).length,o=s("occupied"),l=s("available"),a=s("maintenance"),c=s("cleaning"),f=i?Math.round(o/i*100):0,d=Dl.map(x=>{const W=t.filter(H=>H.ward===x);return{ward:x,total:W.length,occupied:W.filter(H=>H.status==="occupied").length,available:W.filter(H=>H.status==="available").length}}).filter(x=>x.total>0),h=t.filter(x=>x.status==="occupied"&&x.admitDate).sort((x,W)=>new Date(x.admitDate)-new Date(W.admitDate)).slice(0,6),_=x=>Math.floor((new Date-new Date(x))/864e5),y=n.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),v=n.toLocaleDateString("th-TH",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),C=e?"#060d1f":"#f0f5ff",m=e?"rgba(15,23,42,0.8)":"rgba(255,255,255,0.9)",p=e?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.07)",g=e?"#cbd5e1":"#334155",w=e?"#475569":"#94a3b8",k=e?"#94a3b8":"#64748b",N=e?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)",T=e?"#1e293b":"#e2e8f0",R=e?"linear-gradient(rgba(6,182,212,0.03) 1px, transparent 1px),linear-gradient(90deg, rgba(6,182,212,0.03) 1px, transparent 1px)":"linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",j=[{icon:jc,label:"เตียงทั้งหมด",value:i,color:"#818cf8",sub:null},{icon:_f,label:"มีผู้ป่วย",value:o,color:"#f87171",sub:`${f}% utilization`},{icon:Uc,label:"ว่าง",value:l,color:"#34d399",sub:null},{icon:wx,label:"ซ่อมบำรุง",value:a,color:"#fbbf24",sub:null},{icon:ax,label:"ทำความสะอาด",value:c,color:"#60a5fa",sub:null}],L=[{label:"มีผู้ป่วย",key:"occupied",color:"#f87171"},{label:"ว่าง",key:"available",color:"#34d399"},{label:"ซ่อมบำรุง",key:"maintenance",color:"#fbbf24"},{label:"ทำความสะอาด",key:"cleaning",color:"#60a5fa"}];return u.jsxs("div",{className:"min-h-full font-sarabun",style:{background:C,transition:"background 0.35s"},children:[u.jsx("div",{className:"fixed inset-0 pointer-events-none",style:{backgroundImage:R,backgroundSize:"40px 40px"}}),u.jsxs("div",{className:"relative z-10 px-6 py-5 max-w-screen-2xl mx-auto",children:[u.jsxs("div",{className:"flex items-start justify-between mb-6",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-2.5 mb-1",children:[u.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),u.jsx("span",{className:"text-xs font-mono tracking-widest uppercase",style:{color:"#0992C2"},children:"Live · Firebase Realtime"})]}),u.jsx("h1",{className:"text-2xl font-bold tracking-tight",style:{color:e?"#ffffff":"#1e293b"},children:"Hospital Operations Dashboard"}),u.jsx("p",{className:"text-sm mt-0.5",style:{color:w},children:"โรงพยาบาลสมาร์ทแคร์ · ภาพรวมระบบบริหารเตียงผู้ป่วย"})]}),u.jsxs("div",{className:"text-right",children:[u.jsx("div",{className:"text-3xl font-bold tracking-widest tabular-nums",style:{color:e?"#ffffff":"#1e293b",textShadow:e?"0 0 30px rgba(6,182,212,0.4)":"none"},children:y}),u.jsx("div",{className:"text-xs mt-1",style:{color:w},children:v})]})]}),u.jsx("div",{className:"grid-res",children:u.jsx("div",{className:"grid grid-cols-5 gap-3 mb-5",children:j.map((x,W)=>u.jsx(lT,{...x,isDark:e},W))})}),u.jsx("div",{className:"mb-4",children:u.jsx(aT,{beds:t,isDark:e})}),u.jsxs("div",{className:"grid grid-cols-12 gap-4 mb-4",children:[u.jsxs("div",{className:"col-span-3 rounded-2xl p-5 flex flex-col",style:{background:m,border:`1px solid ${p}`},children:[u.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[u.jsx(Lc,{size:15,className:"text-cyan-400"}),u.jsx("span",{className:"text-sm font-semibold",style:{color:g},children:"อัตราการใช้เตียง"})]}),u.jsx("div",{className:"flex justify-center",children:u.jsx(iT,{pct:f,isDark:e})}),u.jsx("div",{className:"mt-3 space-y-2",children:L.map(x=>u.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[u.jsx("div",{className:"w-2 h-2 rounded-full flex-shrink-0",style:{background:x.color}}),u.jsx("span",{className:"flex-1",style:{color:k},children:x.label}),u.jsx("span",{className:"font-mono font-bold",style:{color:x.color},children:s(x.key)})]},x.key))})]}),u.jsxs("div",{className:"col-span-4 rounded-2xl p-5",style:{background:m,border:`1px solid ${p}`},children:[u.jsxs("div",{className:"flex items-center gap-2 mb-5",children:[u.jsx(Fc,{size:15,className:"text-cyan-400"}),u.jsx("span",{className:"text-sm font-semibold",style:{color:g},children:"การใช้งานแต่ละวอร์ด"})]}),d.length>0?u.jsx("div",{className:"space-y-4",children:d.map(x=>u.jsx(sT,{...x,isDark:e},x.ward))}):u.jsxs("div",{className:"flex flex-col items-center justify-center h-32",style:{color:w},children:[u.jsx(ff,{size:32,className:"mb-2 opacity-40"}),u.jsx("span",{className:"text-sm",children:"ยังไม่มีข้อมูล"})]})]}),u.jsxs("div",{className:"col-span-5 rounded-2xl p-5",style:{background:m,border:`1px solid ${p}`},children:[u.jsxs("div",{className:"flex items-center gap-2 mb-5",children:[u.jsx(ff,{size:15,className:"text-cyan-400"}),u.jsx("span",{className:"text-sm font-semibold",style:{color:g},children:"สัดส่วนสถานะเตียง"})]}),i>0?u.jsxs("div",{className:"space-y-4",children:[L.map(x=>{const W=s(x.key),H=i?Math.round(W/i*100):0;return u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[u.jsx("span",{className:"text-sm",style:{color:g},children:x.label}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("span",{className:"text-xs font-mono",style:{color:k},children:[W," เตียง"]}),u.jsxs("span",{className:"font-mono font-bold text-sm w-10 text-right",style:{color:x.color},children:[H,"%"]})]})]}),u.jsx("div",{className:"h-2 rounded-full overflow-hidden",style:{background:T},children:u.jsx("div",{className:"h-full rounded-full transition-all duration-700",style:{width:`${H}%`,background:`linear-gradient(90deg, ${x.color}60, ${x.color})`,boxShadow:`0 0 8px ${x.color}50`}})})]},x.key)}),u.jsxs("div",{className:"mt-4 pt-4",style:{borderTop:`1px solid ${N}`},children:[u.jsxs("div",{className:"flex justify-between text-xs mb-2",style:{color:k},children:[u.jsxs("span",{children:["เตียงทั้งหมด ",i," เตียง"]}),u.jsxs("span",{className:"flex items-center gap-1 text-cyan-400",children:[u.jsx(ox,{size:10}),"capacity"]})]}),u.jsx("div",{className:"h-3 rounded-full overflow-hidden flex",style:{background:T},children:L.map(x=>{const W=s(x.key),H=i?W/i*100:0;return H>0?u.jsx("div",{className:"h-full transition-all duration-700",style:{width:`${H}%`,background:x.color}},x.key):null})})]})]}):u.jsxs("div",{className:"flex flex-col items-center justify-center h-32",style:{color:w},children:[u.jsx(Ex,{size:32,className:"mb-2 opacity-40"}),u.jsx("span",{className:"text-sm",children:"ยังไม่มีข้อมูลเตียง"})]})]})]}),u.jsxs("div",{className:"rounded-2xl overflow-auto",style:{border:`1px solid ${p}`,background:m},children:[u.jsxs("div",{className:"px-6 py-4 flex items-center justify-between",style:{borderBottom:`1px solid ${N}`},children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(zc,{size:15,className:"text-cyan-400"}),u.jsx("span",{className:"text-sm font-semibold",style:{color:g},children:"ผู้ป่วยที่พักรักษานานที่สุด"}),h.length>0&&u.jsx("span",{className:"ml-1 px-2 py-0.5 rounded-full text-xs font-mono border border-cyan-400/20 bg-cyan-400/10 text-cyan-400",children:h.length})]}),u.jsxs("div",{className:"flex items-center gap-1.5 text-xs",style:{color:w},children:[u.jsx(yx,{size:11}),u.jsx("span",{children:"อัปเดตอัตโนมัติ"})]})]}),h.length>0?u.jsxs("table",{className:"w-full",children:[u.jsx("thead",{children:u.jsx("tr",{style:{borderBottom:`1px solid ${N}`},children:[{label:"เตียง",icon:jc},{label:"ผู้ป่วย",icon:qg},{label:"วอร์ด",icon:Fc},{label:"การวินิจฉัย",icon:Vg},{label:"วันรับเข้า",icon:sd},{label:"ระยะเวลา",icon:zc},{label:"ความเสี่ยง",icon:Gg}].map(({label:x,icon:W})=>u.jsx("th",{className:"px-5 py-3 text-left",children:u.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase",style:{color:w},children:[u.jsx(W,{size:11}),x]})},x))})}),u.jsx("tbody",{children:h.map((x,W)=>{var V;const H=_(x.admitDate),P=H>14?e?"rgba(239,68,68,0.02)":"rgba(254,226,226,0.4)":"transparent";return u.jsxs("tr",{style:{borderBottom:`1px solid ${N}`,background:P},onMouseEnter:G=>G.currentTarget.style.background=e?"rgba(255,255,255,0.02)":"rgba(239,246,255,0.6)",onMouseLeave:G=>G.currentTarget.style.background=P,children:[u.jsx("td",{className:"px-5 py-3.5",children:u.jsx("span",{className:"font-mono text-sm font-bold text-cyan-400",children:x.bedNumber})}),u.jsx("td",{className:"px-5 py-3.5",children:u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0",style:{background:e?"#334155":"#e0e7ff",color:e?"#cbd5e1":"#4338ca"},children:((V=x.patient)==null?void 0:V[0])||"?"}),u.jsx("span",{className:"text-sm font-medium",style:{color:e?"#e2e8f0":"#1e293b"},children:x.patient})]})}),u.jsx("td",{className:"px-5 py-3.5",children:u.jsx("span",{className:"px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/20",children:x.ward})}),u.jsx("td",{className:"px-5 py-3.5",children:u.jsx("span",{className:"text-sm",style:{color:k},children:x.diagnosis||"—"})}),u.jsx("td",{className:"px-5 py-3.5",children:u.jsx("span",{className:"font-mono text-xs",style:{color:k},children:x.admitDate})}),u.jsx("td",{className:"px-5 py-3.5",children:u.jsx(oT,{days:H})}),u.jsx("td",{className:"px-5 py-3.5",children:H>14?u.jsxs("div",{className:"flex items-center gap-1.5 text-red-400 text-xs font-semibold",children:[u.jsx(Kg,{size:13}),u.jsx("span",{children:"ต้องติดตาม"})]}):H>7?u.jsxs("div",{className:"flex items-center gap-1.5 text-amber-400 text-xs font-semibold",children:[u.jsx(Lc,{size:13}),u.jsx("span",{children:"เฝ้าระวัง"})]}):u.jsxs("div",{className:"flex items-center gap-1.5 text-emerald-500 text-xs font-semibold",children:[u.jsx(Uc,{size:13}),u.jsx("span",{children:"ปกติ"})]})})]},x.firebaseKey||W)})})]}):u.jsxs("div",{className:"flex flex-col items-center justify-center py-16",style:{color:w},children:[u.jsx(_f,{size:40,className:"mb-3 opacity-30"}),u.jsx("span",{className:"text-sm",children:"ยังไม่มีผู้ป่วยในระบบ"})]})]}),u.jsxs("div",{className:"mt-4 flex items-center justify-between text-xs pb-4",style:{color:e?"#334155":"#94a3b8"},children:[u.jsx("span",{children:"Smart Bed Management System · v1.0"}),u.jsxs("span",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"}),"Connected to Firebase Realtime Database"]})]})]})]})}const uT={status_change:{label:"เปลี่ยนสถานะ",color:"#f59e0b",bg:"#fef3c7",bgDark:"rgba(245,158,11,0.12)"},deleted:{label:"ลบเตียง",color:"#ef4444",bg:"#fee2e2",bgDark:"rgba(239,68,68,0.12)"}},Tp={occupied:"มีผู้ป่วย",available:"ว่าง",maintenance:"ซ่อมบำรุง",cleaning:"ทำความสะอาด"};function dT(t){return t?new Date(t).toLocaleString("th-TH",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"—"}function hT({history:t}){const{isDark:e}=xt(),[n,r]=F.useState(""),[i,s]=F.useState("ทั้งหมด"),o=t.filter(x=>{var P,V,G;const W=!n||((P=x.patient)==null?void 0:P.includes(n))||((V=x.bedNumber)==null?void 0:V.toLowerCase().includes(n.toLowerCase()))||((G=x.ward)==null?void 0:G.includes(n)),H=i==="ทั้งหมด"||x.action===i;return W&&H}),l=e?"rgba(15,23,42,0.9)":"#ffffff",a=e?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)",c=e?"rgba(15,23,42,0.6)":"#f8faff",f=e?"rgba(99,102,241,0.05)":"rgba(239,246,255,0.7)",d=e?"#e2e8f0":"#1e293b",h=e?"#64748b":"#94a3b8",_=e?"#94a3b8":"#64748b",y=e?"#cbd5e1":"#334155",v=e?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.06)",C=e?"rgba(15,23,42,0.8)":"#ffffff",m=e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)",p=e?"#818cf8":"#6366f1",g=e?"rgba(99,102,241,0.12)":"#eff6ff",w=e?"rgba(99,102,241,0.2)":"#bfdbfe",k=e?"#818cf8":"#4338ca",N=e?"#1e3a5f":"#e0e7ff",T=e?"#93c5fd":"#4338ca",R=e?"rgba(99,102,241,0.12)":"#eff6ff",j=e?"rgba(99,102,241,0.25)":"#bfdbfe",L=e?"#818cf8":"#4338ca";return u.jsxs("div",{className:"min-h-full px-8 py-6 max-w-[1400px] mx-auto",style:{fontFamily:"'Sarabun', sans-serif",transition:"all 0.35s"},children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(pf,{size:22,style:{color:e?"#818cf8":"#4338ca"}}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-xl font-bold",style:{color:d},children:"ประวัติผู้ป่วย"}),u.jsx("p",{className:"text-sm",style:{color:h},children:"บันทึกอัตโนมัติเมื่อมีการเปลี่ยนสถานะเตียงหรือลบเตียงที่มีผู้ป่วย"})]})]}),u.jsxs("div",{className:"rounded-xl px-4 py-2 text-sm font-semibold border",style:{background:R,borderColor:j,color:L},children:[t.length," รายการ"]})]}),u.jsxs("div",{className:"flex gap-3 mb-5 flex-wrap",children:[u.jsx("input",{value:n,onChange:x=>r(x.target.value),placeholder:"🔍 ค้นหาชื่อผู้ป่วย, เตียง, วอร์ด...",className:"rounded-xl px-4 py-2 text-sm outline-none flex-1 min-w-[220px] transition-all",style:{background:C,border:`1.5px solid ${m}`,color:d,fontFamily:"'Sarabun', sans-serif"},onFocus:x=>x.target.style.borderColor=p,onBlur:x=>x.target.style.borderColor=m}),["ทั้งหมด","status_change","deleted"].map(x=>u.jsx("button",{onClick:()=>s(x),className:"px-4 py-2 rounded-xl text-sm font-semibold border transition-all",style:{background:i===x?e?"#4f46e5":"#4338ca":e?"rgba(15,23,42,0.6)":"#ffffff",borderColor:i===x?e?"#6366f1":"#4338ca":e?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.1)",color:i===x?"#ffffff":e?"#94a3b8":"#475569"},children:x==="ทั้งหมด"?"ทั้งหมด":x==="status_change"?"เปลี่ยนสถานะ":"ลบเตียง"},x))]}),o.length===0?u.jsxs("div",{className:"text-center py-20",style:{color:h},children:[u.jsx(pf,{size:48,className:"mx-auto mb-3 opacity-30"}),u.jsx("p",{className:"text-base",children:"ยังไม่มีประวัติผู้ป่วย"}),u.jsx("p",{className:"text-sm mt-1",children:"ประวัติจะถูกบันทึกอัตโนมัติเมื่อมีการเปลี่ยนสถานะเตียงหรือลบเตียงที่มีผู้ป่วย"})]}):u.jsx("div",{className:"rounded-2xl overflow-auto shadow-sm",style:{background:l,border:`1px solid ${a}`},children:u.jsxs("table",{className:"w-full text-sm",children:[u.jsx("thead",{children:u.jsx("tr",{style:{background:c,borderBottom:`1px solid ${v}`},children:[{label:"เวลาบันทึก",icon:sd},{label:"การกระทำ",icon:Lc},{label:"ผู้ป่วย",icon:qg},{label:"เตียง",icon:jc},{label:"วอร์ด",icon:Fc},{label:"การวินิจฉัย",icon:Vg},{label:"สถานะเดิม → ใหม่",icon:null},{label:"หมายเหตุ",icon:null}].map(({label:x,icon:W},H)=>u.jsx("th",{className:"px-4 py-3 text-left",children:u.jsxs("div",{className:"flex items-center gap-1.5 text-xs font-semibold tracking-wide",style:{color:_},children:[W&&u.jsx(W,{size:12}),x]})},H))})}),u.jsx("tbody",{children:o.map((x,W)=>{var V;const H=uT[x.action]??{label:x.action,color:"#6b7280",bg:"#f3f4f6",bgDark:"rgba(107,114,128,0.12)"},P=e?H.bgDark:H.bg;return u.jsxs("tr",{style:{borderBottom:`1px solid ${v}`},onMouseEnter:G=>G.currentTarget.style.background=f,onMouseLeave:G=>G.currentTarget.style.background="transparent",children:[u.jsx("td",{className:"px-4 py-3 text-xs whitespace-nowrap",style:{color:_},children:dT(x.recordedAt)}),u.jsx("td",{className:"px-4 py-3",children:u.jsx("span",{className:"px-2.5 py-1 rounded-lg text-xs font-bold",style:{color:H.color,background:P},children:H.label})}),u.jsx("td",{className:"px-4 py-3",children:u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0",style:{background:N,color:T},children:((V=x.patient)==null?void 0:V[0])||"?"}),u.jsxs("div",{children:[u.jsx("div",{className:"font-semibold",style:{color:d},children:x.patient||"—"}),x.gender&&Kr[x.gender]&&u.jsx("div",{className:"text-xs",style:{color:_},children:Kr[x.gender].label}),x.age&&u.jsxs("div",{className:"text-xs",style:{color:_},children:[x.age," ปี"]})]})]})}),u.jsx("td",{className:"px-4 py-3",children:u.jsx("span",{className:"font-mono text-sm font-bold",style:{color:e?"#38bdf8":"#2563eb"},children:x.bedNumber})}),u.jsx("td",{className:"px-4 py-3",children:u.jsx("span",{className:"px-2.5 py-1 rounded-lg text-xs font-semibold border",style:{background:g,color:k,borderColor:w},children:x.ward})}),u.jsx("td",{className:"px-4 py-3 text-xs max-w-[150px]",style:{color:_},children:x.diagnosis||"—"}),u.jsx("td",{className:"px-4 py-3 text-xs whitespace-nowrap",style:{color:_},children:x.fromStatus?u.jsxs("span",{className:"flex items-center gap-1",children:[u.jsx("span",{className:"font-medium",style:{color:y},children:Tp[x.fromStatus]??x.fromStatus}),x.toStatus&&u.jsxs(u.Fragment,{children:[u.jsx("span",{style:{color:h},children:"→"}),u.jsx("span",{className:"font-medium",style:{color:e?"#818cf8":"#4338ca"},children:Tp[x.toStatus]??x.toStatus})]})]}):"—"}),u.jsx("td",{className:"px-4 py-3 text-xs max-w-[140px] truncate",style:{color:h},children:x.notes||"—"})]},x.firebaseKey||W)})})]})})]})}const js="beds",uu="patient_history";function fT(t){const e=t.val();return e?Object.entries(e).map(([n,r])=>({...r,firebaseKey:n})):[]}function pT(t){const e=An(On,js);return Ny(e,n=>{t(fT(n))}),()=>Ty(e)}async function uv(t){const e=An(On,js),n=Iy(e);return await Gd(n,{...t,createdAt:dl(),updatedAt:dl()}),n.key}async function mT(t,e){const n=An(On,`${js}/${t}`),{firebaseKey:r,...i}=e;await Sk(n,{...i,updatedAt:dl()})}async function gT(t){const e=An(On,`${js}/${t}`);await Ek(e)}async function bp(t,e,n={}){if(!t.patient)return;const r=An(On,uu),i=Iy(r);return await Gd(i,{bedNumber:t.bedNumber??"",ward:t.ward??"",patient:t.patient??"",gender:t.gender??"",age:t.age??"",admitDate:t.admitDate??"",diagnosis:t.diagnosis??"",notes:t.notes??"",action:e,...n,recordedAt:dl()}),i.key}function _T(t){const e=An(On,uu);return Ny(e,n=>{const r=n.val();if(!r){t([]);return}const i=Object.entries(r).map(([s,o])=>({...o,firebaseKey:s})).sort((s,o)=>(o.recordedAt??0)-(s.recordedAt??0));t(i)}),()=>Ty(An(On,uu))}async function yT(t){console.log("🌱 กำลัง seed ข้อมูลเริ่มต้น...");const e=An(On,js);if((await Ck(e)).exists()){console.warn("⚠️ มีข้อมูลใน DB อยู่แล้ว ยกเลิก seed");return}for(const r of t){const{id:i,...s}=r;await uv(s)}console.log(`✅ Seed สำเร็จ: ${t.length} เตียง`)}function vT(){const[t,e]=F.useState([]),[n,r]=F.useState([]),[i,s]=F.useState(!0),[o,l]=F.useState(null);return F.useEffect(()=>{s(!0);const h=pT(y=>{e(y),s(!1)}),_=_T(y=>{r(y)});return()=>{h(),_()}},[]),{beds:t,patientHistory:n,loading:i,error:o,addBed:async h=>{try{const{id:_,firebaseKey:y,...v}=h;return await uv({...v,age:v.age?parseInt(v.age):""})}catch(_){throw l(_.message),_}},editBed:async(h,_)=>{try{const{id:y,firebaseKey:v,...C}=_,m=t.find(w=>w.firebaseKey===h),p=m==null?void 0:m.status,g=C.status;m&&p!==g&&m.patient&&await bp(m,"status_change",{fromStatus:p,toStatus:g}),await mT(h,{...C,age:C.age?parseInt(C.age):""})}catch(y){throw l(y.message),y}},removeBed:async h=>{try{const _=t.find(y=>y.firebaseKey===h);_!=null&&_.patient&&await bp(_,"deleted",{fromStatus:_.status}),await gT(h)}catch(_){throw l(_.message),_}},filterBeds:({ward:h,status:_,search:y})=>t.filter(v=>{var g,w;const C=h==="ทั้งหมด"||v.ward===h,m=_==="ทั้งหมด"||v.status===_,p=!y||((g=v.bedNumber)==null?void 0:g.toLowerCase().includes(y.toLowerCase()))||((w=v.patient)==null?void 0:w.includes(y));return C&&m&&p})}}function wT(){const[t,e]=F.useState(null);return{toast:t,showToast:(r,i="success")=>{e({msg:r,type:i}),setTimeout(()=>e(null),3e3)}}}function xT(){const[t,e]=F.useState(null),[n,r]=F.useState(!0);return F.useEffect(()=>nT(s=>{e(s),r(!1)}),[]),{user:t,authLoading:n}}const Rp={bedNumber:"",ward:Dl[0],status:"available",patient:"",gender:"",age:"",admitDate:"",diagnosis:"",notes:""};function Pp(){const{isDark:t,toggleTheme:e}=xt();return u.jsxs("button",{onClick:e,title:t?"สลับเป็น Light Mode":"สลับเป็น Dark Mode",className:"relative w-16 h-10 rounded-full flex items-center p-1 transition-all duration-500 ease-in-out overflow-hidden",style:{background:t?"linear-gradient(135deg, #1e293b 0%, #0f172a 100%)":"linear-gradient(135deg, #7dd3fc 0%, #38bdf8 100%)",border:t?"1px solid rgba(255,255,255,0.1)":"1px solid rgba(0,0,0,0.1)",boxShadow:t?"inset 0 2px 4px rgba(0,0,0,0.3), 0 0 10px rgba(139,92,246,0.2)":"inset 0 2px 4px rgba(255,255,255,0.3), 0 0 10px rgba(251,191,36,0.3)"},children:[u.jsx("div",{className:"absolute w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)",style:{background:t?"#1e293b":"#fff",transform:t?"translateX(32px)":"translateX(0px)",boxShadow:"0 2px 5px rgba(0,0,0,0.2)"},children:t?u.jsx(mf,{size:14,className:"rotate-[-(360deg)] transition-transform duration-500",style:{color:"#c7d2fe",filter:"drop-shadow(0 0 4px #818cf8)"}}):u.jsx(gf,{size:14,className:"rotate-0 transition-transform duration-500",style:{color:"#fbbf24",filter:"drop-shadow(0 0 4px #fbbf24)"}})}),u.jsxs("div",{className:"flex justify-between w-full px-1 opacity-40",children:[u.jsx(gf,{size:12,color:"#fff"}),u.jsx(mf,{size:12,color:"#fff"})]})]})}function ET(){const{user:t,authLoading:e}=xT(),{beds:n,patientHistory:r,loading:i,error:s,addBed:o,editBed:l,removeBed:a,filterBeds:c}=vT(),{toast:f,showToast:d}=wT(),{isDark:h}=xt(),[_,y]=F.useState("beds"),[v,C]=F.useState(null),[m,p]=F.useState(null),[g,w]=F.useState(Rp),[k,N]=F.useState({ward:"ทั้งหมด",status:"ทั้งหมด",search:""}),[T,R]=F.useState(!1),j=()=>{C(null),p(null)},L=()=>{w(Rp),C("add")},x=pe=>{p(pe),w({...pe}),C("edit")},W=pe=>{p(pe),C("view")},H=pe=>{p(pe),C("delete")},P=async()=>{if(!g.bedNumber||!g.ward)return alert("กรุณากรอกหมายเลขเตียงและวอร์ด");if(g.status!=="occupied"&&(g.patient="",g.age="",g.gender="",g.admitDate="",g.diagnosis="",g.notes=""),g.status==="occupied"){if(console.log(g),!g.patient.trim())return alert("กรุณากรอกชื่อผู้ป่วยเมื่อสถานะเป็น 'มีผู้ป่วย'");if(g.age<=0)return alert("กรุณากรอกอายุผู้ป่วย");if(!g.gender||g.gender==="none")return alert("กรุณากรอกเพศผู้ป่วย");if(!g.admitDate)return alert("กรุณากรอกวันที่เข้า Admit")}try{await o(g),j(),d(`เพิ่มเตียง ${g.bedNumber} สำเร็จ`)}catch{d("ไม่สามารถเพิ่มข้อมูลได้","error")}},V=async()=>{if(g.status!=="occupied"&&(g.patient="",g.gender="",g.age="",g.admitDate="",g.diagnosis="",g.notes=""),g.status==="occupied"){if(!g.patient.trim())return alert("กรุณากรอกชื่อผู้ป่วยเมื่อสถานะเป็น 'มีผู้ป่วย'");if(g.age<=0)return alert("กรุณากรอกอายุผู้ป่วย");if(!g.gender||g.gender==="none")return alert("กรุณากรอกเพศผู้ป่วย");if(!g.admitDate)return alert("กรุณากรอกวันที่เข้า Admit")}try{await l(m.firebaseKey,g),d(`อัปเดต ${g.bedNumber} สำเร็จ`),j()}catch{d("ไม่สามารถแก้ไขข้อมูลได้","error")}},G=async()=>{const pe=m.bedNumber;try{await a(m.firebaseKey),j(),d(`ลบเตียง ${pe} แล้ว`,"error")}catch{d("ไม่สามารถลบข้อมูลได้","error")}},se=async()=>{window.confirm("ต้องการเพิ่มข้อมูลตัวอย่างเข้า Firebase หรือไม่?")&&(await yT(Px),d("เพิ่มข้อมูลตัวอย่างสำเร็จ"))},I=async()=>{await tT(),d("ออกจากระบบแล้ว","error")},A=c(k),O=h?"#060d1f":"#f0f5ff",Q=h?"#0f172a":"#ffffff",X=h?"#f1f5f9":"#1e293b",$e=h?"#94a3b8":"#64748b",Qe=h?"rgba(255,255,255,0.07)":"rgba(0,0,0,0.08)";return e?u.jsx("div",{className:"min-h-screen flex items-center justify-center",style:{background:O,fontFamily:"'Sarabun',sans-serif"},children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"text-[3rem] animate-spin inline-block",children:"⚙️"}),u.jsx("p",{className:"mt-4",style:{color:$e},children:"กำลังตรวจสอบสถานะการเข้าสู่ระบบ..."})]})}):t?u.jsxs(u.Fragment,{children:[u.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700;800&display=swap",rel:"stylesheet"}),u.jsx("style",{children:`
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:${O};transition:background 0.35s;}
        @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      `}),u.jsxs("div",{className:"min-h-screen flex flex-col",style:{background:O,transition:"background 0.35s"},children:[u.jsx("div",{className:"px-8 flex items-center justify-between min-h-[75px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] shrink-0 py-2",style:{background:"linear-gradient(135deg,#1e3a5f 0%,#1d4ed8 100%)",flexDirection:"column"},children:u.jsxs("div",{className:"nav-top",children:[u.jsxs("div",{className:"flex items-center justify-between w-full",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("img",{src:"../logo.png",alt:"Hospital Logo",className:"w-[50px] h-[50px] object-contain"}),u.jsxs("div",{children:[u.jsx("div",{className:"text-white font-extrabold text-base",style:{fontFamily:"'Sarabun',sans-serif"},children:"Smart Bed Management"}),u.jsx("div",{className:"text-[#93c5fd] text-[0.7rem]",style:{fontFamily:"'Sarabun',sans-serif"},children:"โรงพยาบาลสมาร์ทแคร์"})]})]}),u.jsxs("div",{className:"hidden md:flex items-center gap-3",children:[u.jsx(Pp,{}),u.jsxs("div",{className:"bg-white/15 rounded-[20px] px-[0.85rem] py-[0.3rem] pl-2 flex items-center gap-2",children:[u.jsx("div",{className:"w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center text-[0.9rem]",children:(t.displayName||t.email||"?")[0].toUpperCase()}),u.jsx("span",{className:"text-white text-[0.82rem] font-semibold",style:{fontFamily:"'Sarabun',sans-serif"},children:t.displayName||t.email})]}),u.jsx("button",{onClick:I,className:"bg-gradient-to-r from-red-600 to-rose-700 text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-lg hover:from-red-500 hover:to-rose-600 active:scale-95 transition-all duration-200",style:{fontFamily:"'Sarabun',sans-serif"},children:"ออกจากระบบ"})]}),u.jsxs("button",{className:"md:hidden flex flex-col gap-[5px]",onClick:()=>R(!T),children:[u.jsx("span",{className:"w-6 h-[2px] bg-white"}),u.jsx("span",{className:"w-6 h-[2px] bg-white"}),u.jsx("span",{className:"w-6 h-[2px] bg-white"})]})]}),T&&u.jsxs("div",{className:"md:hidden mt-3 bg-white/10 backdrop-blur-md rounded-xl p-4 flex flex-col gap-4 menu",children:[u.jsx(Pp,{}),u.jsxs("div",{className:"bg-white/15 rounded-[20px] px-[0.85rem] py-[0.5rem] flex items-center gap-2",children:[u.jsx("div",{className:"w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center text-[0.9rem]",children:(t.displayName||t.email||"?")[0].toUpperCase()}),u.jsx("span",{className:"text-white text-sm font-semibold",style:{fontFamily:"'Sarabun',sans-serif"},children:t.displayName||t.email})]}),u.jsx("button",{onClick:I,className:"bg-gradient-to-r from-red-600 to-rose-700 text-white py-2 rounded-xl font-semibold text-sm",style:{fontFamily:"'Sarabun',sans-serif"},children:"ออกจากระบบ"})]})]})}),u.jsx("div",{className:"nav-bottom flex justify-center items-center py-3",style:{position:"rela tive",zIndex:20},children:u.jsx("div",{className:"flex gap-3 bg-white/10 backdrop-blur-md px-3 py-2 rounded-2xl shadow-md",children:[{icon:u.jsx(Zw,{}),id:"dashboard",label:"Dashboard"},{icon:u.jsx(Kw,{}),id:"beds",label:"จัดการเตียง"},{icon:u.jsx(rx,{}),id:"history",label:"ประวัติการใช้งาน"}].map(pe=>u.jsxs("button",{onClick:()=>y(pe.id),style:{fontFamily:"'Sarabun',sans-serif"},className:`flex flexDirection-row px-5 py-2 rounded-xl cursor-pointer font-semibold text-sm transition-all duration-200 border ${_===pe.id?"bg-white text-blue-700 shadow-md border-white":"bg-transparent text-[#93c5fd] border-transparent hover:text-blue hover:bg-white/50"}`,children:[u.jsx("i",{style:{paddingRight:5},children:pe.icon})," ",pe.label]},pe.id))})}),u.jsxs("div",{className:"flex-1 overflow-auto",children:[s&&u.jsxs("div",{className:"mx-8 mt-4 px-4 py-3 rounded-xl border",style:{background:h?"rgba(239,68,68,0.1)":"#fff1f2",borderColor:h?"rgba(239,68,68,0.3)":"#fca5a5",color:h?"#f87171":"#dc2626",fontFamily:"'Sarabun',sans-serif"},children:["⚠️ Firebase Error: ",s]}),i?u.jsxs("div",{className:"text-center py-20",style:{color:$e},children:[u.jsx("div",{className:"text-[2.5rem] animate-spin inline-block",children:"⚙️"}),u.jsx("div",{className:"mt-4",style:{fontFamily:"'Sarabun',sans-serif"},children:"กำลังโหลดข้อมูลจาก Firebase..."})]}):_==="dashboard"?u.jsx(cT,{beds:n}):_==="history"?u.jsx(hT,{history:r}):u.jsxs("div",{className:"px-8 py-6 max-w-[1400px] mx-auto",children:[u.jsxs("div",{className:"flex justify-between items-center mb-5",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 bg-emerald-500 rounded-full inline-block shadow-[0_0_0_3px_#d1fae5]"}),u.jsx("span",{className:"text-[0.78rem]",style:{color:$e},children:"Firebase Realtime — อัปเดตอัตโนมัติ"})]}),u.jsxs("div",{className:"flex gap-3",children:[n.length===0&&u.jsx("button",{onClick:se,className:"px-4 py-[0.55rem] rounded-lg cursor-pointer font-semibold text-[0.85rem] transition-colors",style:{background:Q,border:`1.5px solid ${Qe}`,color:X,fontFamily:"'Sarabun',sans-serif"},children:"🌱 เพิ่มข้อมูลตัวอย่าง"}),u.jsx("button",{onClick:L,className:"bg-emerald-600 border-none text-white px-[1.1rem] py-[0.55rem] rounded-lg cursor-pointer font-bold text-[0.9rem] hover:bg-emerald-700 transition-colors",style:{fontFamily:"'Sarabun',sans-serif"},children:"+ เพิ่มเตียง"})]})]}),u.jsx(Ox,{filters:k,onChange:N,totalFiltered:A.length,totalAll:n.length}),A.length>0?u.jsx("div",{className:"grid gap-4",style:{gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))"},children:A.map(pe=>u.jsx(Dx,{bed:pe,onView:W,onEdit:x,onDelete:H},pe.firebaseKey))}):u.jsxs("div",{className:"text-center py-12",style:{color:$e},children:[u.jsx("div",{className:"text-[3rem]",children:n.length===0?"🗄️":"🔍"}),u.jsx("div",{className:"mt-2",style:{fontFamily:"'Sarabun',sans-serif"},children:n.length===0?"ยังไม่มีข้อมูลเตียง":"ไม่พบข้อมูลที่ค้นหา"})]})]})]}),v==="add"&&u.jsx(jx,{form:g,setForm:w,onSave:P,onClose:j}),v==="edit"&&m&&u.jsx(Fx,{bed:m,form:g,setForm:w,onSave:V,onClose:j}),v==="view"&&m&&u.jsx(Ux,{bed:m,onEdit:()=>{j(),x(m)},onClose:j}),v==="delete"&&m&&u.jsx(zx,{bed:m,onConfirm:G,onClose:j}),u.jsx(Mx,{toast:f})]})]}):u.jsxs(u.Fragment,{children:[u.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700;800&display=swap",rel:"stylesheet"}),u.jsx("style",{children:"*{box-sizing:border-box;margin:0;padding:0;}"}),u.jsx(rT,{})]})}function ST(){return u.jsx(Ax,{children:u.jsx(ET,{})})}Wa.createRoot(document.getElementById("root")).render(u.jsx(Nv.StrictMode,{children:u.jsx(ST,{})}));
