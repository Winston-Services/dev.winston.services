"use strict";(self.webpackChunkwinston=self.webpackChunkwinston||[]).push([[6588],{85990:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(65043),r=t(97950),i=t(53855),s=t(63159),a=t(72614);const c=o.forwardRef((function(e,n){const{children:t,container:c,disablePortal:l=!1}=e,[d,u]=o.useState(null),p=(0,i.A)(o.isValidElement(t)?t.ref:null,n);return(0,s.A)((()=>{l||u(function(e){return"function"===typeof e?e():e}(c)||document.body)}),[c,l]),(0,s.A)((()=>{if(d&&!l)return(0,a.A)(n,d),()=>{(0,a.A)(n,null)}}),[n,d,l]),l?o.isValidElement(t)?o.cloneElement(t,{ref:p}):t:d?r.createPortal(t,d):d}))},61604:(e,n,t)=>{t.d(n,{A:()=>d});var o=t(65043),r=t(53855),i=t(84445),s=t(70579);const a=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function c(e){const n=[],t=[];return Array.from(e.querySelectorAll(a)).forEach(((e,o)=>{const r=function(e){const n=parseInt(e.getAttribute("tabindex"),10);return Number.isNaN(n)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:n}(e);-1!==r&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;const n=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let t=n(`[name="${e.name}"]:checked`);return t||(t=n(`[name="${e.name}"]`)),t!==e}(e))}(e)&&(0===r?n.push(e):t.push({documentOrder:o,tabIndex:r,node:e}))})),t.sort(((e,n)=>e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex)).map((e=>e.node)).concat(n)}function l(){return!0}const d=function(e){const{children:n,disableAutoFocus:t=!1,disableEnforceFocus:a=!1,disableRestoreFocus:d=!1,getTabbable:u=c,isEnabled:p=l,open:f}=e,m=o.useRef(),h=o.useRef(null),b=o.useRef(null),A=o.useRef(null),v=o.useRef(null),g=o.useRef(!1),y=o.useRef(null),E=(0,r.A)(n.ref,y),x=o.useRef(null);o.useEffect((()=>{f&&y.current&&(g.current=!t)}),[t,f]),o.useEffect((()=>{if(!f||!y.current)return;const e=(0,i.A)(y.current);return y.current.contains(e.activeElement)||(y.current.hasAttribute("tabIndex")||y.current.setAttribute("tabIndex",-1),g.current&&y.current.focus()),()=>{d||(A.current&&A.current.focus&&(m.current=!0,A.current.focus()),A.current=null)}}),[f]),o.useEffect((()=>{if(!f||!y.current)return;const e=(0,i.A)(y.current),n=n=>{const{current:t}=y;if(null!==t)if(e.hasFocus()&&!a&&p()&&!m.current){if(!t.contains(e.activeElement)){if(n&&v.current!==n.target||e.activeElement!==v.current)v.current=null;else if(null!==v.current)return;if(!g.current)return;let i=[];if(e.activeElement!==h.current&&e.activeElement!==b.current||(i=u(y.current)),i.length>0){var o,r;const e=Boolean((null==(o=x.current)?void 0:o.shiftKey)&&"Tab"===(null==(r=x.current)?void 0:r.key)),n=i[0],t=i[i.length-1];e?t.focus():n.focus()}else t.focus()}}else m.current=!1},t=n=>{x.current=n,!a&&p()&&"Tab"===n.key&&e.activeElement===y.current&&n.shiftKey&&(m.current=!0,b.current.focus())};e.addEventListener("focusin",n),e.addEventListener("keydown",t,!0);const o=setInterval((()=>{"BODY"===e.activeElement.tagName&&n()}),50);return()=>{clearInterval(o),e.removeEventListener("focusin",n),e.removeEventListener("keydown",t,!0)}}),[t,a,d,p,f,u]);const k=e=>{null===A.current&&(A.current=e.relatedTarget),g.current=!0};return(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)("div",{tabIndex:0,onFocus:k,ref:h,"data-test":"sentinelStart"}),o.cloneElement(n,{ref:E,onFocus:e=>{null===A.current&&(A.current=e.relatedTarget),g.current=!0,v.current=e.target;const t=n.props.onFocus;t&&t(e)}}),(0,s.jsx)("div",{tabIndex:0,onFocus:k,ref:b,"data-test":"sentinelEnd"})]})}},90540:(e,n,t)=>{t.d(n,{A:()=>o});const o=function(e){return"string"===typeof e}},12220:(e,n,t)=>{t.d(n,{A:()=>b});var o=t(98587),r=t(58168),i=t(65043),s=t(43024),a=t(60222),c=t(34535),l=t(37864),d=t(56258),u=t(63088);function p(e){return(0,u.A)("MuiBackdrop",e)}(0,t(15904).A)("MuiBackdrop",["root","invisible"]);var f=t(70579);const m=["children","component","components","componentsProps","className","invisible","open","transitionDuration","TransitionComponent"],h=(0,c.Ay)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.invisible&&n.invisible]}})((e=>{let{ownerState:n}=e;return(0,r.A)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})})),b=i.forwardRef((function(e,n){var t,i;const c=(0,l.A)({props:e,name:"MuiBackdrop"}),{children:u,component:b="div",components:A={},componentsProps:v={},className:g,invisible:y=!1,open:E,transitionDuration:x,TransitionComponent:k=d.A}=c,w=(0,o.A)(c,m),R=(0,r.A)({},c,{component:b,invisible:y}),T=(e=>{const{classes:n,invisible:t}=e,o={root:["root",t&&"invisible"]};return(0,a.A)(o,p,n)})(R);return(0,f.jsx)(k,(0,r.A)({in:E,timeout:x},w,{children:(0,f.jsx)(h,{"aria-hidden":!0,as:null!=(t=A.Root)?t:b,className:(0,s.A)(T.root,g),ownerState:(0,r.A)({},R,null==(i=v.root)?void 0:i.ownerState),classes:T,ref:n,children:u})}))}))},56258:(e,n,t)=>{t.d(n,{A:()=>f});var o=t(58168),r=t(98587),i=t(65043),s=t(88692),a=t(26240),c=t(80653),l=t(95849),d=t(70579);const u=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],p={entering:{opacity:1},entered:{opacity:1}},f=i.forwardRef((function(e,n){const t=(0,a.A)(),f={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:m,appear:h=!0,children:b,easing:A,in:v,onEnter:g,onEntered:y,onEntering:E,onExit:x,onExited:k,onExiting:w,style:R,timeout:T=f,TransitionComponent:S=s.Ay}=e,P=(0,r.A)(e,u),F=i.useRef(null),M=(0,l.A)(b.ref,n),C=(0,l.A)(F,M),I=e=>n=>{if(e){const t=F.current;void 0===n?e(t):e(t,n)}},N=I(E),B=I(((e,n)=>{(0,c.q)(e);const o=(0,c.c)({style:R,timeout:T,easing:A},{mode:"enter"});e.style.webkitTransition=t.transitions.create("opacity",o),e.style.transition=t.transitions.create("opacity",o),g&&g(e,n)})),L=I(y),D=I(w),j=I((e=>{const n=(0,c.c)({style:R,timeout:T,easing:A},{mode:"exit"});e.style.webkitTransition=t.transitions.create("opacity",n),e.style.transition=t.transitions.create("opacity",n),x&&x(e)})),O=I(k);return(0,d.jsx)(S,(0,o.A)({appear:h,in:v,nodeRef:F,onEnter:B,onEntered:L,onEntering:N,onExit:j,onExited:O,onExiting:D,addEndListener:e=>{m&&m(F.current,e)},timeout:T},P,{children:(e,n)=>i.cloneElement(b,(0,o.A)({style:(0,o.A)({opacity:0,visibility:"exited"!==e||v?void 0:"hidden"},p[e],R,b.props.style),ref:C},n))}))}))},35721:(e,n,t)=>{t.d(n,{A:()=>b});var o=t(98587),r=t(58168),i=t(65043),s=t(43024),a=t(60222),c=t(34535),l=t(37864),d=t(51347),u=t(63088);function p(e){return(0,u.A)("MuiList",e)}(0,t(15904).A)("MuiList",["root","padding","dense","subheader"]);var f=t(70579);const m=["children","className","component","dense","disablePadding","subheader"],h=(0,c.Ay)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,!t.disablePadding&&n.padding,t.dense&&n.dense,t.subheader&&n.subheader]}})((e=>{let{ownerState:n}=e;return(0,r.A)({listStyle:"none",margin:0,padding:0,position:"relative"},!n.disablePadding&&{paddingTop:8,paddingBottom:8},n.subheader&&{paddingTop:0})})),b=i.forwardRef((function(e,n){const t=(0,l.A)({props:e,name:"MuiList"}),{children:c,className:u,component:b="ul",dense:A=!1,disablePadding:v=!1,subheader:g}=t,y=(0,o.A)(t,m),E=i.useMemo((()=>({dense:A})),[A]),x=(0,r.A)({},t,{component:b,dense:A,disablePadding:v}),k=(e=>{const{classes:n,disablePadding:t,dense:o,subheader:r}=e,i={root:["root",!t&&"padding",o&&"dense",r&&"subheader"]};return(0,a.A)(i,p,n)})(x);return(0,f.jsx)(d.A.Provider,{value:E,children:(0,f.jsxs)(h,(0,r.A)({as:b,className:(0,s.A)(k.root,u),ref:n,ownerState:x},y,{children:[g,c]}))})}))},51347:(e,n,t)=>{t.d(n,{A:()=>o});const o=t(65043).createContext({})},62066:(e,n,t)=>{t.d(n,{A:()=>L});var o=t(98587),r=t(58168),i=t(65043),s=t(90540),a=t(43024),c=t(53855),l=t(84445),d=t(45413),u=t(27107),p=t(60222),f=t(85990),m=t(94636),h=t(19544);function b(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function A(e){return parseInt((0,m.A)(e).getComputedStyle(e).paddingRight,10)||0}function v(e,n,t){let o=arguments.length>4?arguments[4]:void 0;const r=[n,t,...arguments.length>3&&void 0!==arguments[3]?arguments[3]:[]],i=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,(e=>{-1===r.indexOf(e)&&-1===i.indexOf(e.tagName)&&b(e,o)}))}function g(e,n){let t=-1;return e.some(((e,o)=>!!n(e)&&(t=o,!0))),t}function y(e,n){const t=[],o=e.container;if(!n.disableScrollLock){if(function(e){const n=(0,l.A)(e);return n.body===e?(0,m.A)(e).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(o)){const e=(0,h.A)((0,l.A)(o));t.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${A(o)+e}px`;const n=(0,l.A)(o).querySelectorAll(".mui-fixed");[].forEach.call(n,(n=>{t.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${A(n)+e}px`}))}const e=o.parentElement,n=(0,m.A)(o),r="HTML"===(null==e?void 0:e.nodeName)&&"scroll"===n.getComputedStyle(e).overflowY?e:o;t.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{t.forEach((e=>{let{value:n,el:t,property:o}=e;n?t.style.setProperty(o,n):t.style.removeProperty(o)}))}}var E=t(61604),x=t(15904),k=t(63088);function w(e){return(0,k.A)("MuiModal",e)}(0,x.A)("MuiModal",["root","hidden"]);var R=t(70579);const T=["BackdropComponent","BackdropProps","children","classes","className","closeAfterTransition","component","components","componentsProps","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","theme","onTransitionEnter","onTransitionExited"];const S=new class{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,n){let t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&b(e.modalRef,!1);const o=function(e){const n=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);v(n,e.mount,e.modalRef,o,!0);const r=g(this.containers,(e=>e.container===n));return-1!==r?(this.containers[r].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblings:o}),t)}mount(e,n){const t=g(this.containers,(n=>-1!==n.modals.indexOf(e))),o=this.containers[t];o.restore||(o.restore=y(o,n))}remove(e){const n=this.modals.indexOf(e);if(-1===n)return n;const t=g(this.containers,(n=>-1!==n.modals.indexOf(e))),o=this.containers[t];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&b(e.modalRef,!0),v(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(t,1);else{const e=o.modals[o.modals.length-1];e.modalRef&&b(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}},P=i.forwardRef((function(e,n){const{BackdropComponent:t,BackdropProps:m,children:h,classes:A,className:v,closeAfterTransition:g=!1,component:y="div",components:x={},componentsProps:k={},container:P,disableAutoFocus:F=!1,disableEnforceFocus:M=!1,disableEscapeKeyDown:C=!1,disablePortal:I=!1,disableRestoreFocus:N=!1,disableScrollLock:B=!1,hideBackdrop:L=!1,keepMounted:D=!1,manager:j=S,onBackdropClick:O,onClose:K,onKeyDown:q,open:W,theme:$,onTransitionEnter:H,onTransitionExited:V}=e,Y=(0,o.A)(e,T),[z,U]=i.useState(!0),X=i.useRef({}),G=i.useRef(null),J=i.useRef(null),Q=(0,c.A)(J,n),Z=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(e),_=()=>(X.current.modalRef=J.current,X.current.mountNode=G.current,X.current),ee=()=>{j.mount(_(),{disableScrollLock:B}),J.current.scrollTop=0},ne=(0,d.A)((()=>{const e=function(e){return"function"===typeof e?e():e}(P)||(0,l.A)(G.current).body;j.add(_(),e),J.current&&ee()})),te=i.useCallback((()=>j.isTopModal(_())),[j]),oe=(0,d.A)((e=>{G.current=e,e&&(W&&te()?ee():b(J.current,!0))})),re=i.useCallback((()=>{j.remove(_())}),[j]);i.useEffect((()=>()=>{re()}),[re]),i.useEffect((()=>{W?ne():Z&&g||re()}),[W,re,Z,g,ne]);const ie=(0,r.A)({},e,{classes:A,closeAfterTransition:g,disableAutoFocus:F,disableEnforceFocus:M,disableEscapeKeyDown:C,disablePortal:I,disableRestoreFocus:N,disableScrollLock:B,exited:z,hideBackdrop:L,keepMounted:D}),se=(e=>{const{open:n,exited:t,classes:o}=e,r={root:["root",!n&&t&&"hidden"]};return(0,p.A)(r,w,o)})(ie);if(!D&&!W&&(!Z||z))return null;const ae=()=>{U(!1),H&&H()},ce=()=>{U(!0),V&&V(),g&&re()},le={};void 0===h.props.tabIndex&&(le.tabIndex="-1"),Z&&(le.onEnter=(0,u.A)(ae,h.props.onEnter),le.onExited=(0,u.A)(ce,h.props.onExited));const de=x.Root||y,ue=k.root||{};return(0,R.jsx)(f.A,{ref:oe,container:P,disablePortal:I,children:(0,R.jsxs)(de,(0,r.A)({role:"presentation"},ue,!(0,s.A)(de)&&{as:y,ownerState:(0,r.A)({},ie,ue.ownerState),theme:$},Y,{ref:Q,onKeyDown:e=>{q&&q(e),"Escape"===e.key&&te()&&(C||(e.stopPropagation(),K&&K(e,"escapeKeyDown")))},className:(0,a.A)(se.root,ue.className,v),children:[!L&&t?(0,R.jsx)(t,(0,r.A)({"aria-hidden":!0,open:W,onClick:e=>{e.target===e.currentTarget&&(O&&O(e),K&&K(e,"backdropClick"))}},m)):null,(0,R.jsx)(E.A,{disableEnforceFocus:M,disableAutoFocus:F,disableRestoreFocus:N,isEnabled:te,open:W,children:i.cloneElement(h,le)})]}))})}));var F=t(34535),M=t(37864),C=t(12220);const I=["BackdropComponent","closeAfterTransition","children","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted"],N=(0,F.Ay)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,!t.open&&t.exited&&n.hidden]}})((e=>{let{theme:n,ownerState:t}=e;return(0,r.A)({position:"fixed",zIndex:n.zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})})),B=(0,F.Ay)(C.A,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,n)=>n.backdrop})({zIndex:-1}),L=i.forwardRef((function(e,n){var t;const a=(0,M.A)({name:"MuiModal",props:e}),{BackdropComponent:c=B,closeAfterTransition:l=!1,children:d,components:u={},componentsProps:p={},disableAutoFocus:f=!1,disableEnforceFocus:m=!1,disableEscapeKeyDown:h=!1,disablePortal:b=!1,disableRestoreFocus:A=!1,disableScrollLock:v=!1,hideBackdrop:g=!1,keepMounted:y=!1}=a,E=(0,o.A)(a,I),[x,k]=i.useState(!0),w={closeAfterTransition:l,disableAutoFocus:f,disableEnforceFocus:m,disableEscapeKeyDown:h,disablePortal:b,disableRestoreFocus:A,disableScrollLock:v,hideBackdrop:g,keepMounted:y},T=(e=>e.classes)((0,r.A)({},a,w,{exited:x}));return(0,R.jsx)(P,(0,r.A)({components:(0,r.A)({Root:N},u),componentsProps:{root:(0,r.A)({},p.root,(!u.Root||!(0,s.A)(u.Root))&&{ownerState:(0,r.A)({},null==(t=p.root)?void 0:t.ownerState)})},BackdropComponent:c,onTransitionEnter:()=>k(!1),onTransitionExited:()=>k(!0),ref:n},E,{classes:T},w,{children:d}))}))},26240:(e,n,t)=>{t.d(n,{A:()=>i});t(65043);var o=t(45527),r=t(15170);function i(){return(0,o.A)(r.A)}},80653:(e,n,t)=>{t.d(n,{c:()=>r,q:()=>o});const o=e=>e.scrollTop;function r(e,n){var t,o;const{timeout:r,easing:i,style:s={}}=e;return{duration:null!=(t=s.transitionDuration)?t:"number"===typeof r?r:r[n.mode]||0,easing:null!=(o=s.transitionTimingFunction)?o:"object"===typeof i?i[n.mode]:i,delay:s.transitionDelay}}},80950:(e,n,t)=>{t.d(n,{A:()=>o});const o=t(79344).A},36078:(e,n,t)=>{t.d(n,{A:()=>o});const o=t(94636).A},27107:(e,n,t)=>{function o(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce(((e,n)=>null==n?e:function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];e.apply(this,o),n.apply(this,o)}),(()=>{}))}t.d(n,{A:()=>o})},79344:(e,n,t)=>{function o(e){let n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];clearTimeout(n),n=setTimeout((()=>{e.apply(this,r)}),t)}return o.clear=()=>{clearTimeout(n)},o}t.d(n,{A:()=>o})},19544:(e,n,t)=>{function o(e){const n=e.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}t.d(n,{A:()=>o})},84445:(e,n,t)=>{function o(e){return e&&e.ownerDocument||document}t.d(n,{A:()=>o})},94636:(e,n,t)=>{t.d(n,{A:()=>r});var o=t(84445);function r(e){return(0,o.A)(e).defaultView||window}}}]);
//# sourceMappingURL=6588.730cff65.chunk.js.map