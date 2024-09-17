"use strict";(self.webpackChunkwinston=self.webpackChunkwinston||[]).push([[7059],{43845:(e,o,t)=>{t.d(o,{A:()=>k});var l=t(98587),a=t(58168),r=t(65043),n=t(43024),i=t(60222),c=t(90310),d=t(66734),s=t(70579);const u=(0,d.A)((0,s.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");var p=t(95849),m=t(6803),f=t(75429),g=t(37864),h=t(34535),v=t(63088);function b(e){return(0,v.A)("MuiChip",e)}const A=(0,t(15904).A)("MuiChip",["root","sizeSmall","sizeMedium","colorPrimary","colorSecondary","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","focusVisible"]),y=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"],$=(0,h.Ay)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e,{color:l,clickable:a,onDelete:r,size:n,variant:i}=t;return[{[`& .${A.avatar}`]:o.avatar},{[`& .${A.avatar}`]:o[`avatar${(0,m.A)(n)}`]},{[`& .${A.avatar}`]:o[`avatarColor${(0,m.A)(l)}`]},{[`& .${A.icon}`]:o.icon},{[`& .${A.icon}`]:o[`icon${(0,m.A)(n)}`]},{[`& .${A.icon}`]:o[`iconColor${(0,m.A)(l)}`]},{[`& .${A.deleteIcon}`]:o.deleteIcon},{[`& .${A.deleteIcon}`]:o[`deleteIcon${(0,m.A)(n)}`]},{[`& .${A.deleteIcon}`]:o[`deleteIconColor${(0,m.A)(l)}`]},{[`& .${A.deleteIcon}`]:o[`deleteIconOutlinedColor${(0,m.A)(l)}`]},o.root,o[`size${(0,m.A)(n)}`],o[`color${(0,m.A)(l)}`],a&&o.clickable,a&&"default"!==l&&o[`clickableColor${(0,m.A)(l)})`],r&&o.deletable,r&&"default"!==l&&o[`deletableColor${(0,m.A)(l)}`],o[i],"outlined"===i&&o[`outlined${(0,m.A)(l)}`]]}})((e=>{let{theme:o,ownerState:t}=e;const l=(0,c.X4)(o.palette.text.primary,.26);return(0,a.A)({maxWidth:"100%",fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:o.palette.text.primary,backgroundColor:o.palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:o.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${A.disabled}`]:{opacity:o.palette.action.disabledOpacity,pointerEvents:"none"},[`& .${A.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===o.palette.mode?o.palette.grey[700]:o.palette.grey[300],fontSize:o.typography.pxToRem(12)},[`& .${A.avatarColorPrimary}`]:{color:o.palette.primary.contrastText,backgroundColor:o.palette.primary.dark},[`& .${A.avatarColorSecondary}`]:{color:o.palette.secondary.contrastText,backgroundColor:o.palette.secondary.dark},[`& .${A.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:o.typography.pxToRem(10)},[`& .${A.icon}`]:(0,a.A)({color:"light"===o.palette.mode?o.palette.grey[700]:o.palette.grey[300],marginLeft:5,marginRight:-6},"small"===t.size&&{fontSize:18,marginLeft:4,marginRight:-4},"default"!==t.color&&{color:"inherit"}),[`& .${A.deleteIcon}`]:(0,a.A)({WebkitTapHighlightColor:"transparent",color:l,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,c.X4)(l,.4)}},"small"===t.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==t.color&&{color:(0,c.X4)(o.palette[t.color].contrastText,.7),"&:hover, &:active":{color:o.palette[t.color].contrastText}})},"small"===t.size&&{height:24},"default"!==t.color&&{backgroundColor:o.palette[t.color].main,color:o.palette[t.color].contrastText},t.onDelete&&{[`&.${A.focusVisible}`]:{backgroundColor:(0,c.X4)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}},t.onDelete&&"default"!==t.color&&{[`&.${A.focusVisible}`]:{backgroundColor:o.palette[t.color].dark}})}),(e=>{let{theme:o,ownerState:t}=e;return(0,a.A)({},t.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:(0,c.X4)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)},[`&.${A.focusVisible}`]:{backgroundColor:(0,c.X4)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)},"&:active":{boxShadow:o.shadows[1]}},t.clickable&&"default"!==t.color&&{[`&:hover, &.${A.focusVisible}`]:{backgroundColor:o.palette[t.color].dark}})}),(e=>{let{theme:o,ownerState:t}=e;return(0,a.A)({},"outlined"===t.variant&&{backgroundColor:"transparent",border:`1px solid ${"light"===o.palette.mode?o.palette.grey[400]:o.palette.grey[700]}`,[`&.${A.clickable}:hover`]:{backgroundColor:o.palette.action.hover},[`&.${A.focusVisible}`]:{backgroundColor:o.palette.action.focus},[`& .${A.avatar}`]:{marginLeft:4},[`& .${A.avatarSmall}`]:{marginLeft:2},[`& .${A.icon}`]:{marginLeft:4},[`& .${A.iconSmall}`]:{marginLeft:2},[`& .${A.deleteIcon}`]:{marginRight:5},[`& .${A.deleteIconSmall}`]:{marginRight:3}},"outlined"===t.variant&&"default"!==t.color&&{color:o.palette[t.color].main,border:`1px solid ${(0,c.X4)(o.palette[t.color].main,.7)}`,[`&.${A.clickable}:hover`]:{backgroundColor:(0,c.X4)(o.palette[t.color].main,o.palette.action.hoverOpacity)},[`&.${A.focusVisible}`]:{backgroundColor:(0,c.X4)(o.palette[t.color].main,o.palette.action.focusOpacity)},[`& .${A.deleteIcon}`]:{color:(0,c.X4)(o.palette[t.color].main,.7),"&:hover, &:active":{color:o.palette[t.color].main}}})})),S=(0,h.Ay)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,o)=>{const{ownerState:t}=e,{size:l}=t;return[o.label,o[`label${(0,m.A)(l)}`]]}})((e=>{let{ownerState:o}=e;return(0,a.A)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===o.size&&{paddingLeft:8,paddingRight:8})}));function C(e){return"Backspace"===e.key||"Delete"===e.key}const k=r.forwardRef((function(e,o){const t=(0,g.A)({props:e,name:"MuiChip"}),{avatar:c,className:d,clickable:h,color:v="default",component:A,deleteIcon:k,disabled:w=!1,icon:x,label:I,onClick:z,onDelete:R,onKeyDown:N,onKeyUp:M,size:L="medium",variant:O="filled"}=t,T=(0,l.A)(t,y),V=r.useRef(null),D=(0,p.A)(V,o),E=e=>{e.stopPropagation(),R&&R(e)},P=!(!1===h||!z)||h,X="small"===L,j=P||R?f.A:A||"div",B=(0,a.A)({},t,{component:j,disabled:w,size:L,color:v,onDelete:!!R,clickable:P,variant:O}),K=(e=>{const{classes:o,disabled:t,size:l,color:a,onDelete:r,clickable:n,variant:c}=e,d={root:["root",c,t&&"disabled",`size${(0,m.A)(l)}`,`color${(0,m.A)(a)}`,n&&"clickable",n&&`clickableColor${(0,m.A)(a)}`,r&&"deletable",r&&`deletableColor${(0,m.A)(a)}`,`${c}${(0,m.A)(a)}`],label:["label",`label${(0,m.A)(l)}`],avatar:["avatar",`avatar${(0,m.A)(l)}`,`avatarColor${(0,m.A)(a)}`],icon:["icon",`icon${(0,m.A)(l)}`,`iconColor${(0,m.A)(a)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,m.A)(l)}`,`deleteIconColor${(0,m.A)(a)}`,`deleteIconOutlinedColor${(0,m.A)(a)}`]};return(0,i.A)(d,b,o)})(B),F=j===f.A?(0,a.A)({component:A||"div",focusVisibleClassName:K.focusVisible},R&&{disableRipple:!0}):{};let U=null;if(R){const e=(0,n.A)("default"!==v&&("outlined"===O?K[`deleteIconOutlinedColor${(0,m.A)(v)}`]:K[`deleteIconColor${(0,m.A)(v)}`]),X&&K.deleteIconSmall);U=k&&r.isValidElement(k)?r.cloneElement(k,{className:(0,n.A)(k.props.className,K.deleteIcon,e),onClick:E}):(0,s.jsx)(u,{className:(0,n.A)(K.deleteIcon,e),onClick:E})}let W=null;c&&r.isValidElement(c)&&(W=r.cloneElement(c,{className:(0,n.A)(K.avatar,c.props.className)}));let H=null;return x&&r.isValidElement(x)&&(H=r.cloneElement(x,{className:(0,n.A)(K.icon,x.props.className)})),(0,s.jsxs)($,(0,a.A)({as:j,className:(0,n.A)(K.root,d),disabled:!(!P||!w)||void 0,onClick:z,onKeyDown:e=>{e.currentTarget===e.target&&C(e)&&e.preventDefault(),N&&N(e)},onKeyUp:e=>{e.currentTarget===e.target&&(R&&C(e)?R(e):"Escape"===e.key&&V.current&&V.current.blur()),M&&M(e)},ref:D,ownerState:B},F,T,{children:[W||H,(0,s.jsx)(S,{className:(0,n.A)(K.label),ownerState:B,children:I}),U]}))}))},8122:(e,o,t)=>{t.d(o,{A:()=>v});var l=t(58168),a=t(98587),r=t(65043),n=t(43024),i=t(60222),c=t(6803),d=t(37864),s=t(34535),u=t(63088);function p(e){return(0,u.A)("MuiSvgIcon",e)}(0,t(15904).A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var m=t(70579);const f=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],g=(0,s.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,"inherit"!==t.color&&o[`color${(0,c.A)(t.color)}`],o[`fontSize${(0,c.A)(t.fontSize)}`]]}})((e=>{let{theme:o,ownerState:t}=e;var l,a,r,n,i,c,d,s,u,p,m,f,g,h,v,b,A;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(l=o.transitions)||null==(a=l.create)?void 0:a.call(l,"fill",{duration:null==(r=o.transitions)||null==(n=r.duration)?void 0:n.shorter}),fontSize:{inherit:"inherit",small:(null==(i=o.typography)||null==(c=i.pxToRem)?void 0:c.call(i,20))||"1.25rem",medium:(null==(d=o.typography)||null==(s=d.pxToRem)?void 0:s.call(d,24))||"1.5rem",large:(null==(u=o.typography)||null==(p=u.pxToRem)?void 0:p.call(u,35))||"2.1875"}[t.fontSize],color:null!=(m=null==(f=o.palette)||null==(g=f[t.color])?void 0:g.main)?m:{action:null==(h=o.palette)||null==(v=h.action)?void 0:v.active,disabled:null==(b=o.palette)||null==(A=b.action)?void 0:A.disabled,inherit:void 0}[t.color]}})),h=r.forwardRef((function(e,o){const t=(0,d.A)({props:e,name:"MuiSvgIcon"}),{children:r,className:s,color:u="inherit",component:h="svg",fontSize:v="medium",htmlColor:b,inheritViewBox:A=!1,titleAccess:y,viewBox:$="0 0 24 24"}=t,S=(0,a.A)(t,f),C=(0,l.A)({},t,{color:u,component:h,fontSize:v,instanceFontSize:e.fontSize,inheritViewBox:A,viewBox:$}),k={};A||(k.viewBox=$);const w=(e=>{const{color:o,fontSize:t,classes:l}=e,a={root:["root","inherit"!==o&&`color${(0,c.A)(o)}`,`fontSize${(0,c.A)(t)}`]};return(0,i.A)(a,p,l)})(C);return(0,m.jsxs)(g,(0,l.A)({as:h,className:(0,n.A)(w.root,s),ownerState:C,focusable:"false",color:b,"aria-hidden":!y||void 0,role:y?"img":void 0,ref:o},k,S,{children:[r,y?(0,m.jsx)("title",{children:y}):null]}))}));h.muiName="SvgIcon";const v=h},66734:(e,o,t)=>{t.d(o,{A:()=>i});var l=t(58168),a=t(65043),r=t(8122),n=t(70579);function i(e,o){const t=(t,a)=>(0,n.jsx)(r.A,(0,l.A)({"data-testid":`${o}Icon`,ref:a},t,{children:e}));return t.muiName=r.A.muiName,a.memo(a.forwardRef(t))}},63159:(e,o,t)=>{t.d(o,{A:()=>a});var l=t(65043);const a="undefined"!==typeof window?l.useLayoutEffect:l.useEffect}}]);
//# sourceMappingURL=7059.2960989b.chunk.js.map