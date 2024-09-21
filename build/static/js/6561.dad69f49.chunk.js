"use strict";(self.webpackChunkwinston=self.webpackChunkwinston||[]).push([[6561],{94363:(e,t,o)=>{o.d(t,{A:()=>c});o(65043);var r=o(79650),n=o(71806),i=o(84882),a=o(28076),s=o(39652),l=o(73460),d=o(70579);function c(e){let{columns:t,rows:o}=e;return(0,d.jsx)(r.A,{sx:{maxHeight:"100%"},children:(0,d.jsxs)(n.A,{sx:{minWidth:900},children:[(0,d.jsx)(i.A,{children:(0,d.jsx)(a.A,{children:t.map((e=>(0,d.jsx)(s.A,{children:e.headerName},e.id)))})}),(0,d.jsx)(l.A,{children:o&&0!=o.length?o.map((e=>(0,d.jsx)(a.A,{hover:!0,sx:{"&:last-child td, &:last-child th":{border:0}},children:t.map((t=>(0,d.jsx)(s.A,{children:e[t.id]},t.id)))},e.id))):(0,d.jsx)(d.Fragment,{})})]})})}},6561:(e,t,o)=>{o.r(t),o.d(t,{default:()=>I});var r=o(65043),n=o(66734),i=o(70579);const a=(0,n.A)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search"),s=(0,n.A)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"}),"PlayCircleFilled");var l=o(8070),d=o(68903),c=o(85865),u=o(29840),p=o(51787),h=o(53193),m=o(72221),A=o(32143),g=o(12110),v=o(79650),f=o(71806),x=o(84882),b=o(28076),y=o(39652),w=o(73460),j=o(91894),S=o(94363);const C=[{id:"videoTitle",headerName:"Video title"},{id:"for",headerName:"For"},{id:"uploadDate",headerName:"Upload date"},{id:"status",headerName:"Status"}],M=[{id:1,videoTitle:"Learn how to design NFT cards",for:"Beginner",uploadDate:"01/04/2023",status:"Rejected"},{id:2,videoTitle:"Learn how to design NFT cards1",for:"Basics",uploadDate:"02/04/2023",status:"Approved"},{id:3,videoTitle:"Learn how to design NFT cards2",for:"Intermediary",uploadDate:"03/04/2023",status:"Approved"},{id:4,videoTitle:"Learn how to design NFT cards3",for:"Intermediary",uploadDate:"04/05/2022",status:"Rejected"},{id:5,videoTitle:"Learn how to design NFT cards4",for:"Beginner",uploadDate:"05/05/2022",status:"Approved"},{id:6,videoTitle:"Learn how to design NFT cards5",for:"Intermediary",uploadDate:"06/05/2022",status:"Approved"}];const I=function(){const[e,t]=r.useState(""),[o,n]=r.useState(M),[I,N]=r.useState("");return r.useEffect((()=>{(0,j.s)((()=>n(e?M.filter((t=>t.videoTitle.toLowerCase().includes(e.toLowerCase()))):M)),500)}),[e]),(0,i.jsxs)(l.A,{children:[(0,i.jsxs)(d.Ay,{container:!0,justifyContent:"space-between",alignItems:"center",children:[(0,i.jsx)(c.A,{variant:"h5",children:"Courses"}),(0,i.jsxs)(d.Ay,{display:"flex",alignItems:"baseline",children:[(0,i.jsx)(u.A,{autoComplete:"off",value:e,onChange:e=>t(e.target.value),sx:{backgroundColor:"#362A70",mt:{xs:1.5,sm:0},borderRadius:"5px",height:"47px",mr:2,px:2},variant:"standard",hiddenLabel:!0,color:"filled",placeholder:"Search ",InputProps:{startAdornment:(0,i.jsx)(p.A,{position:"start",children:(0,i.jsx)(a,{})}),disableUnderline:!0}}),(0,i.jsx)(h.A,{children:(0,i.jsxs)(m.A,{value:I,onChange:e=>{switch(N(e.target.value),console.log(e.target.value,I),e.target.value){case"newestFirst":n(o.sort((function(e,t){return new Date(e.uploadDate)-new Date(t.uploadDate)})));break;case"oldestFirst":n((e=>e&&e.sort((function(e,t){return new Date(t.uploadDate)-new Date(e.uploadDate)})))(o));break;default:n(M)}},displayEmpty:!0,inputProps:{"aria-label":"Without label"},sx:{background:"linear-gradient(92.44deg, #EA7A8F 3.93%, #E452C8 98.71%)",borderRadius:"5px",height:"47px",width:"154px",border:"none"},children:[(0,i.jsx)(A.A,{value:"",children:"Select"}),(0,i.jsx)(A.A,{value:"newestFirst",children:"Oldest"}),(0,i.jsx)(A.A,{value:"oldestFirst",children:"Newest"})]})})]})]}),(0,i.jsx)(g.A,{elevation:0,sx:{mt:3,pb:2},children:o&&0!==o.length?(0,i.jsx)(v.A,{sx:{maxHeight:"100%"},children:(0,i.jsxs)(f.A,{sx:{minWidth:900},children:[(0,i.jsx)(x.A,{children:(0,i.jsx)(b.A,{children:C.map((e=>(0,i.jsx)(y.A,{sx:{fontWeight:"600",fontSize:"16px"},children:e.headerName},e.id)))})}),(0,i.jsx)(w.A,{children:o&&0!=o.length?o.map((e=>(0,i.jsxs)(b.A,{hover:!0,sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,i.jsx)(y.A,{children:(0,i.jsxs)(d.Ay,{container:!0,width:"560px",gap:1.5,alignItems:"center",children:[(0,i.jsx)(s,{}),e.videoTitle]})}),(0,i.jsx)(y.A,{children:e.for}),(0,i.jsx)(y.A,{children:e.uploadDate}),(0,i.jsx)(y.A,{children:(0,i.jsx)(c.A,{sx:{color:"Rejected"===e.status?"#F84335":"#23B000"},children:e.status})})]},e.id))):(0,i.jsx)(i.Fragment,{})})]})}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(S.A,{columns:C}),(0,i.jsxs)(c.A,{mt:2,textAlign:"center",children:["No results for '",e,"'"]})]})})]})}},12110:(e,t,o)=>{o.d(t,{A:()=>g});var r=o(58168),n=o(98587),i=o(65043),a=o(43024),s=o(60222),l=o(34535),d=o(37864),c=o(61596),u=o(63088);function p(e){return(0,u.A)("MuiCard",e)}(0,o(15904).A)("MuiCard",["root"]);var h=o(70579);const m=["className","raised"],A=(0,l.Ay)(c.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),g=i.forwardRef((function(e,t){const o=(0,d.A)({props:e,name:"MuiCard"}),{className:i,raised:l=!1}=o,c=(0,n.A)(o,m),u=(0,r.A)({},o,{raised:l}),g=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},p,t)})(u);return(0,h.jsx)(A,(0,r.A)({className:(0,a.A)(g.root,i),elevation:l?8:void 0,ref:t,ownerState:u},c))}))},5658:(e,t,o)=>{o.d(t,{A:()=>i,K:()=>n});var r=o(63088);function n(e){return(0,r.A)("MuiDivider",e)}const i=(0,o(15904).A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"])},51787:(e,t,o)=>{o.d(t,{A:()=>y});var r=o(98587),n=o(58168),i=o(65043),a=o(43024),s=o(60222),l=o(6803),d=o(85865),c=o(41053),u=o(85213),p=o(34535),h=o(63088);function m(e){return(0,h.A)("MuiInputAdornment",e)}const A=(0,o(15904).A)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var g,v=o(37864),f=o(70579);const x=["children","className","component","disablePointerEvents","disableTypography","position","variant"],b=(0,p.Ay)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${(0,l.A)(o.position)}`],!0===o.disablePointerEvents&&t.disablePointerEvents,t[o.variant]]}})((e=>{let{theme:t,ownerState:o}=e;return(0,n.A)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:t.palette.action.active},"filled"===o.variant&&{[`&.${A.positionStart}&:not(.${A.hiddenLabel})`]:{marginTop:16}},"start"===o.position&&{marginRight:8},"end"===o.position&&{marginLeft:8},!0===o.disablePointerEvents&&{pointerEvents:"none"})})),y=i.forwardRef((function(e,t){const o=(0,v.A)({props:e,name:"MuiInputAdornment"}),{children:p,className:h,component:A="div",disablePointerEvents:y=!1,disableTypography:w=!1,position:j,variant:S}=o,C=(0,r.A)(o,x),M=(0,u.A)()||{};let I=S;S&&M.variant,M&&!I&&(I=M.variant);const N=(0,n.A)({},o,{hiddenLabel:M.hiddenLabel,size:M.size,disablePointerEvents:y,position:j,variant:I}),T=(e=>{const{classes:t,disablePointerEvents:o,hiddenLabel:r,position:n,size:i,variant:a}=e,d={root:["root",o&&"disablePointerEvents",n&&`position${(0,l.A)(n)}`,a,r&&"hiddenLabel",i&&`size${(0,l.A)(i)}`]};return(0,s.A)(d,m,t)})(N);return(0,f.jsx)(c.A.Provider,{value:null,children:(0,f.jsx)(b,(0,n.A)({as:A,ownerState:N,className:(0,a.A)(T.root,h),ref:t},C,{children:"string"!==typeof p||w?(0,f.jsxs)(i.Fragment,{children:["start"===j?g||(g=(0,f.jsx)("span",{className:"notranslate",children:"\u200b"})):null,p]}):(0,f.jsx)(d.A,{color:"text.secondary",children:p})}))})}))},71424:(e,t,o)=>{o.d(t,{A:()=>i,f:()=>n});var r=o(63088);function n(e){return(0,r.A)("MuiListItemIcon",e)}const i=(0,o(15904).A)("MuiListItemIcon",["root","alignItemsFlexStart"])},28052:(e,t,o)=>{o.d(t,{A:()=>i,b:()=>n});var r=o(63088);function n(e){return(0,r.A)("MuiListItemText",e)}const i=(0,o(15904).A)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"])},32143:(e,t,o)=>{o.d(t,{A:()=>S});var r=o(98587),n=o(58168),i=o(65043),a=o(43024),s=o(60222),l=o(90310),d=o(34535),c=o(37864),u=o(51347),p=o(75429),h=o(55013),m=o(95849),A=o(5658),g=o(71424),v=o(28052),f=o(63088);function x(e){return(0,f.A)("MuiMenuItem",e)}const b=(0,o(15904).A)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var y=o(70579);const w=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],j=(0,d.Ay)(p.A,{shouldForwardProp:e=>(0,d.ep)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.divider&&t.divider,!o.disableGutters&&t.gutters]}})((e=>{let{theme:t,ownerState:o}=e;return(0,n.A)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!o.disableGutters&&{paddingLeft:16,paddingRight:16},o.divider&&{borderBottom:`1px solid ${t.palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:t.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.selected}`]:{backgroundColor:(0,l.X4)(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${b.focusVisible}`]:{backgroundColor:(0,l.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${b.selected}:hover`]:{backgroundColor:(0,l.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,l.X4)(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${b.focusVisible}`]:{backgroundColor:t.palette.action.focus},[`&.${b.disabled}`]:{opacity:t.palette.action.disabledOpacity},[`& + .${A.A.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${A.A.inset}`]:{marginLeft:52},[`& .${v.A.root}`]:{marginTop:0,marginBottom:0},[`& .${v.A.inset}`]:{paddingLeft:36},[`& .${g.A.root}`]:{minWidth:36}},!o.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},o.dense&&(0,n.A)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${g.A.root} svg`]:{fontSize:"1.25rem"}}))})),S=i.forwardRef((function(e,t){const o=(0,c.A)({props:e,name:"MuiMenuItem"}),{autoFocus:l=!1,component:d="li",dense:p=!1,divider:A=!1,disableGutters:g=!1,focusVisibleClassName:v,role:f="menuitem",tabIndex:b}=o,S=(0,r.A)(o,w),C=i.useContext(u.A),M={dense:p||C.dense||!1,disableGutters:g},I=i.useRef(null);(0,h.A)((()=>{l&&I.current&&I.current.focus()}),[l]);const N=(0,n.A)({},o,{dense:M.dense,divider:A,disableGutters:g}),T=(e=>{const{disabled:t,dense:o,divider:r,disableGutters:i,selected:a,classes:l}=e,d={root:["root",o&&"dense",t&&"disabled",!i&&"gutters",r&&"divider",a&&"selected"]},c=(0,s.A)(d,x,l);return(0,n.A)({},l,c)})(o),R=(0,m.A)(I,t);let L;return o.disabled||(L=void 0!==b?b:-1),(0,y.jsx)(u.A.Provider,{value:M,children:(0,y.jsx)(j,(0,n.A)({ref:R,role:f,tabIndex:L,component:d,focusVisibleClassName:(0,a.A)(T.focusVisible,v)},S,{ownerState:N,classes:T}))})}))},8122:(e,t,o)=>{o.d(t,{A:()=>v});var r=o(58168),n=o(98587),i=o(65043),a=o(43024),s=o(60222),l=o(6803),d=o(37864),c=o(34535),u=o(63088);function p(e){return(0,u.A)("MuiSvgIcon",e)}(0,o(15904).A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var h=o(70579);const m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],A=(0,c.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"inherit"!==o.color&&t[`color${(0,l.A)(o.color)}`],t[`fontSize${(0,l.A)(o.fontSize)}`]]}})((e=>{let{theme:t,ownerState:o}=e;var r,n,i,a,s,l,d,c,u,p,h,m,A,g,v,f,x;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(r=t.transitions)||null==(n=r.create)?void 0:n.call(r,"fill",{duration:null==(i=t.transitions)||null==(a=i.duration)?void 0:a.shorter}),fontSize:{inherit:"inherit",small:(null==(s=t.typography)||null==(l=s.pxToRem)?void 0:l.call(s,20))||"1.25rem",medium:(null==(d=t.typography)||null==(c=d.pxToRem)?void 0:c.call(d,24))||"1.5rem",large:(null==(u=t.typography)||null==(p=u.pxToRem)?void 0:p.call(u,35))||"2.1875"}[o.fontSize],color:null!=(h=null==(m=t.palette)||null==(A=m[o.color])?void 0:A.main)?h:{action:null==(g=t.palette)||null==(v=g.action)?void 0:v.active,disabled:null==(f=t.palette)||null==(x=f.action)?void 0:x.disabled,inherit:void 0}[o.color]}})),g=i.forwardRef((function(e,t){const o=(0,d.A)({props:e,name:"MuiSvgIcon"}),{children:i,className:c,color:u="inherit",component:g="svg",fontSize:v="medium",htmlColor:f,inheritViewBox:x=!1,titleAccess:b,viewBox:y="0 0 24 24"}=o,w=(0,n.A)(o,m),j=(0,r.A)({},o,{color:u,component:g,fontSize:v,instanceFontSize:e.fontSize,inheritViewBox:x,viewBox:y}),S={};x||(S.viewBox=y);const C=(e=>{const{color:t,fontSize:o,classes:r}=e,n={root:["root","inherit"!==t&&`color${(0,l.A)(t)}`,`fontSize${(0,l.A)(o)}`]};return(0,s.A)(n,p,r)})(j);return(0,h.jsxs)(A,(0,r.A)({as:g,className:(0,a.A)(C.root,c),ownerState:j,focusable:"false",color:f,"aria-hidden":!b||void 0,role:b?"img":void 0,ref:t},S,w,{children:[i,b?(0,h.jsx)("title",{children:b}):null]}))}));g.muiName="SvgIcon";const v=g},85865:(e,t,o)=>{o.d(t,{A:()=>x});var r=o(98587),n=o(58168),i=o(65043),a=o(43024),s=o(18698),l=o(60222),d=o(34535),c=o(37864),u=o(6803),p=o(63088);function h(e){return(0,p.A)("MuiTypography",e)}(0,o(15904).A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=o(70579);const A=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,d.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.variant&&t[o.variant],"inherit"!==o.align&&t[`align${(0,u.A)(o.align)}`],o.noWrap&&t.noWrap,o.gutterBottom&&t.gutterBottom,o.paragraph&&t.paragraph]}})((e=>{let{theme:t,ownerState:o}=e;return(0,n.A)({margin:0},o.variant&&t.typography[o.variant],"inherit"!==o.align&&{textAlign:o.align},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.paragraph&&{marginBottom:16})})),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},f={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=i.forwardRef((function(e,t){const o=(0,c.A)({props:e,name:"MuiTypography"}),i=(e=>f[e]||e)(o.color),d=(0,s.A)((0,n.A)({},o,{color:i})),{align:p="inherit",className:x,component:b,gutterBottom:y=!1,noWrap:w=!1,paragraph:j=!1,variant:S="body1",variantMapping:C=v}=d,M=(0,r.A)(d,A),I=(0,n.A)({},d,{align:p,color:i,className:x,component:b,gutterBottom:y,noWrap:w,paragraph:j,variant:S,variantMapping:C}),N=b||(j?"p":C[S]||v[S])||"span",T=(e=>{const{align:t,gutterBottom:o,noWrap:r,paragraph:n,variant:i,classes:a}=e,s={root:["root",i,"inherit"!==e.align&&`align${(0,u.A)(t)}`,o&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,l.A)(s,h,a)})(I);return(0,m.jsx)(g,(0,n.A)({as:N,ref:t,ownerState:I,className:(0,a.A)(T.root,x)},M))}))},66734:(e,t,o)=>{o.d(t,{A:()=>s});var r=o(58168),n=o(65043),i=o(8122),a=o(70579);function s(e,t){const o=(o,n)=>(0,a.jsx)(i.A,(0,r.A)({"data-testid":`${t}Icon`,ref:n},o,{children:e}));return o.muiName=i.A.muiName,n.memo(n.forwardRef(o))}},55013:(e,t,o)=>{o.d(t,{A:()=>r});const r=o(63159).A},63159:(e,t,o)=>{o.d(t,{A:()=>n});var r=o(65043);const n="undefined"!==typeof window?r.useLayoutEffect:r.useEffect}}]);
//# sourceMappingURL=6561.dad69f49.chunk.js.map