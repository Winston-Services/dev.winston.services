"use strict";(self.webpackChunkwinston=self.webpackChunkwinston||[]).push([[410],{61460:(e,n,o)=>{o.d(n,{A:()=>r});o(65043);const r=o.p+"static/media/logo.9a9e4c673c53990567979cbf6a06d5ac.svg"},19322:(e,n,o)=>{o.d(n,{A:()=>d});o(65043);var r=o(53193),t=o(68903),i=o(69413),a=o(74605),l=o(51962),s=o(81673),c=o(63516),u=o(70579);const d=e=>{let{name:n,label:o,helperText:d="",onChange:m,...p}=e;const{setFieldValue:h}=(0,c.j7)(),[x,A]=(0,c.Mt)(n),g={...x,...p,checked:x.value,onChange:e=>{const{checked:o}=e.target;h(n,o),m&&m(o)}},y={};return A&&A.touched&&A.error&&(y.error=!0),(0,u.jsx)(r.A,{...y,children:(0,u.jsxs)(t.Ay,{display:"flex",alignItems:"center",children:[(0,u.jsx)(i.A,{children:(0,u.jsx)(a.A,{control:(0,u.jsx)(l.A,{...g}),label:o})}),d&&(0,u.jsxs)(s.A,{sx:{ml:-1},children:["(",y.error?o+"must be selected":d,")"]})]})})}},84866:(e,n,o)=>{o.d(n,{A:()=>a});o(65043);var r=o(29840),t=o(63516),i=o(70579);const a=e=>{let{name:n,onChange:o,...a}=e;const[l,s,{setValue:c}]=(0,t.Mt)(n),u={...l,...a,fullWidth:!0,variant:"outlined",onChange:e=>{c(e.target.value),o&&o(e.target.value)}};return s&&s.touched&&s.error&&(u.error=!0,u.helperText=s.error),(0,i.jsx)(r.A,{autoComplete:"off",...u})}},55785:(e,n,o)=>{o.r(n),o.d(n,{default:()=>v});o(65043);var r=o(46946),t=o(8070),i=o(68903),a=o(85865),l=o(87488),s=o(81673),c=o(53404),u=o(63516),d=o(86971),m=o(73033),p=o(19322),h=o(84866);const x=o.p+"static/media/campain.536dc450861dab7fb7b18610cba4547c.svg";var A=o(61460),g=(o(43239),o(70579));const y=m.Ik().shape({fullName:m.Yj().min(2,"Too Short!").max(50,"Too Long!").matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed for this field ").required("Name is required"),country:m.Yj().required("Country is required"),pinCode:m.Yj().required(" PinCode is required"),tnc:m.zM().oneOf([!0],"accept term and condition")}),f={fullName:"",country:"",pinCode:"",tnc:!1};const v=function(){const e=(0,d.Zp)();return(0,g.jsxs)(r.A,{sx:{display:"flex",height:"100%"},children:[(0,g.jsx)(r.A,{className:"campainGradient",component:"div",sx:{display:{xs:"none",lg:"block"}}}),(0,g.jsx)(t.A,{maxWidth:"xl",sx:{margin:"auto"},children:(0,g.jsxs)(i.Ay,{container:!0,sx:{display:"flex",msFlexDirection:"column"},children:[(0,g.jsxs)(i.Ay,{item:!0,lg:4,children:[(0,g.jsx)(r.A,{component:"img",src:A.A,alt:"crypto",onClick:()=>{e("/")},sx:{mb:10.5,mt:14,height:"72px",cursor:"pointer"}}),(0,g.jsxs)(i.Ay,{container:!0,display:"flex",flexDirection:"column",children:[(0,g.jsx)(a.A,{sx:{fontSize:"50px"},children:"Let\u2019s Start with Basic"}),(0,g.jsx)(a.A,{variant:"subtitle2",mt:1,children:"We are here to guid you for Crowd Funding Journey"}),(0,g.jsx)(u.l1,{initialValues:{...f},validationSchema:y,onSubmit:n=>{console.log(n),e("/campaign/user-dashboard")},children:(0,g.jsxs)(u.lV,{children:[(0,g.jsxs)(i.Ay,{container:!0,mt:4.6,gap:2,children:[(0,g.jsx)(h.A,{fullWidth:!0,name:"fullName",variant:"outlined",label:"Full Name",placeholder:"Enter your name"}),(0,g.jsx)(h.A,{fullWidth:!0,name:"country",variant:"outlined",label:"Country",placeholder:"Select your Country"}),(0,g.jsx)(h.A,{fullWidth:!0,name:"pinCode",variant:"outlined",label:"Pincode",placeholder:"Select your PinCode"})]}),(0,g.jsxs)(i.Ay,{container:!0,my:5,display:"flex",alignItems:"start",flexDirection:"column",children:[(0,g.jsxs)(i.Ay,{display:"flex",alignItems:"center",children:[(0,g.jsx)(p.A,{name:"tnc"}),(0,g.jsxs)(i.Ay,{item:!0,display:"flex",gap:1,children:[(0,g.jsx)(l.A,{children:(0,g.jsx)(a.A,{variant:"subtitle1",children:"Terms"})}),(0,g.jsx)(a.A,{variant:"subtitle1",children:"&"}),(0,g.jsx)(l.A,{children:(0,g.jsx)(a.A,{variant:"subtitle1",children:"Conditions"})}),(0,g.jsx)(a.A,{variant:"subtitle1",children:"of Winston"})]})]}),!0===f.tnc?(0,g.jsx)(g.Fragment,{}):(0,g.jsx)(s.A,{error:!0,children:(0,g.jsx)(u.Kw,{name:"tnc"})})]}),(0,g.jsx)(c.A,{type:"submit",variant:"contained",color:"secondary",sx:{width:{xs:"100%",sm:"auto"}},children:"Next"})]})})]})]}),(0,g.jsx)(i.Ay,{item:!0,md:0,lg:2}),(0,g.jsxs)(i.Ay,{item:!0,lg:6,flexDirection:"column",sx:{alignItems:"end",display:{xs:"none",lg:"flex"}},children:[(0,g.jsx)(i.Ay,{item:!0,mt:14,sx:{display:{xs:"none",lg:"block"}},children:(0,g.jsx)("img",{src:x,alt:"campain-image",width:"100%"})}),(0,g.jsx)(c.A,{type:"submit",variant:"outlined",sx:{mt:{xs:2,sm:4.7}},onClick:()=>e("/campaign/user-dashboard"),children:"Skip"})]})]})})]})}},87488:(e,n,o)=>{o.d(n,{A:()=>w});var r=o(98587),t=o(58168),i=o(65043),a=o(43024),l=o(60222),s=o(17162),c=o(90310),u=o(6803),d=o(34535),m=o(26240),p=o(37864),h=o(87844),x=o(95849),A=o(85865),g=o(63088);function y(e){return(0,g.A)("MuiLink",e)}const f=(0,o(15904).A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var v=o(70579);const b=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],j={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=(0,d.Ay)(A.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[`underline${(0,u.A)(o.underline)}`],"button"===o.component&&n.button]}})((e=>{let{theme:n,ownerState:o}=e;const r=(0,s.Y)(n,`palette.${(e=>j[e]||e)(o.color)}`)||o.color;return(0,t.A)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?(0,c.X4)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===o.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${f.focusVisible}`]:{outline:"auto"}})})),w=i.forwardRef((function(e,n){const o=(0,m.A)(),s=(0,p.A)({props:e,name:"MuiLink"}),{className:c,color:d="primary",component:A="a",onBlur:g,onFocus:f,TypographyClasses:w,underline:C="always",variant:B="inherit",sx:k}=s,N=(0,r.A)(s,b),z="function"===typeof k?k(o).color:null==k?void 0:k.color,{isFocusVisibleRef:M,onBlur:W,onFocus:R,ref:T}=(0,h.A)(),[V,I]=i.useState(!1),$=(0,x.A)(n,T),D=(0,t.A)({},s,{color:("function"===typeof z?z(o):z)||d,component:A,focusVisible:V,underline:C,variant:B}),F=(e=>{const{classes:n,component:o,focusVisible:r,underline:t}=e,i={root:["root",`underline${(0,u.A)(t)}`,"button"===o&&"button",r&&"focusVisible"]};return(0,l.A)(i,y,n)})(D);return(0,v.jsx)(S,(0,t.A)({color:d,className:(0,a.A)(F.root,c),classes:w,component:A,onBlur:e=>{W(e),!1===M.current&&I(!1),g&&g(e)},onFocus:e=>{R(e),!0===M.current&&I(!0),f&&f(e)},ref:$,ownerState:D,variant:B,sx:[...e.color?[{color:j[d]||d}]:[],...Array.isArray(k)?k:[k]]},N))}))},8122:(e,n,o)=>{o.d(n,{A:()=>g});var r=o(58168),t=o(98587),i=o(65043),a=o(43024),l=o(60222),s=o(6803),c=o(37864),u=o(34535),d=o(63088);function m(e){return(0,d.A)("MuiSvgIcon",e)}(0,o(15904).A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=o(70579);const h=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],x=(0,u.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,"inherit"!==o.color&&n[`color${(0,s.A)(o.color)}`],n[`fontSize${(0,s.A)(o.fontSize)}`]]}})((e=>{let{theme:n,ownerState:o}=e;var r,t,i,a,l,s,c,u,d,m,p,h,x,A,g,y,f;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(r=n.transitions)||null==(t=r.create)?void 0:t.call(r,"fill",{duration:null==(i=n.transitions)||null==(a=i.duration)?void 0:a.shorter}),fontSize:{inherit:"inherit",small:(null==(l=n.typography)||null==(s=l.pxToRem)?void 0:s.call(l,20))||"1.25rem",medium:(null==(c=n.typography)||null==(u=c.pxToRem)?void 0:u.call(c,24))||"1.5rem",large:(null==(d=n.typography)||null==(m=d.pxToRem)?void 0:m.call(d,35))||"2.1875"}[o.fontSize],color:null!=(p=null==(h=n.palette)||null==(x=h[o.color])?void 0:x.main)?p:{action:null==(A=n.palette)||null==(g=A.action)?void 0:g.active,disabled:null==(y=n.palette)||null==(f=y.action)?void 0:f.disabled,inherit:void 0}[o.color]}})),A=i.forwardRef((function(e,n){const o=(0,c.A)({props:e,name:"MuiSvgIcon"}),{children:i,className:u,color:d="inherit",component:A="svg",fontSize:g="medium",htmlColor:y,inheritViewBox:f=!1,titleAccess:v,viewBox:b="0 0 24 24"}=o,j=(0,t.A)(o,h),S=(0,r.A)({},o,{color:d,component:A,fontSize:g,instanceFontSize:e.fontSize,inheritViewBox:f,viewBox:b}),w={};f||(w.viewBox=b);const C=(e=>{const{color:n,fontSize:o,classes:r}=e,t={root:["root","inherit"!==n&&`color${(0,s.A)(n)}`,`fontSize${(0,s.A)(o)}`]};return(0,l.A)(t,m,r)})(S);return(0,p.jsxs)(x,(0,r.A)({as:A,className:(0,a.A)(C.root,u),ownerState:S,focusable:"false",color:y,"aria-hidden":!v||void 0,role:v?"img":void 0,ref:n},w,j,{children:[i,v?(0,p.jsx)("title",{children:v}):null]}))}));A.muiName="SvgIcon";const g=A},85865:(e,n,o)=>{o.d(n,{A:()=>f});var r=o(98587),t=o(58168),i=o(65043),a=o(43024),l=o(18698),s=o(60222),c=o(34535),u=o(37864),d=o(6803),m=o(63088);function p(e){return(0,m.A)("MuiTypography",e)}(0,o(15904).A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=o(70579);const x=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],A=(0,c.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,o.variant&&n[o.variant],"inherit"!==o.align&&n[`align${(0,d.A)(o.align)}`],o.noWrap&&n.noWrap,o.gutterBottom&&n.gutterBottom,o.paragraph&&n.paragraph]}})((e=>{let{theme:n,ownerState:o}=e;return(0,t.A)({margin:0},o.variant&&n.typography[o.variant],"inherit"!==o.align&&{textAlign:o.align},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.paragraph&&{marginBottom:16})})),g={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},f=i.forwardRef((function(e,n){const o=(0,u.A)({props:e,name:"MuiTypography"}),i=(e=>y[e]||e)(o.color),c=(0,l.A)((0,t.A)({},o,{color:i})),{align:m="inherit",className:f,component:v,gutterBottom:b=!1,noWrap:j=!1,paragraph:S=!1,variant:w="body1",variantMapping:C=g}=c,B=(0,r.A)(c,x),k=(0,t.A)({},c,{align:m,color:i,className:f,component:v,gutterBottom:b,noWrap:j,paragraph:S,variant:w,variantMapping:C}),N=v||(S?"p":C[w]||g[w])||"span",z=(e=>{const{align:n,gutterBottom:o,noWrap:r,paragraph:t,variant:i,classes:a}=e,l={root:["root",i,"inherit"!==e.align&&`align${(0,d.A)(n)}`,o&&"gutterBottom",r&&"noWrap",t&&"paragraph"]};return(0,s.A)(l,p,a)})(k);return(0,h.jsx)(A,(0,t.A)({as:N,ref:n,ownerState:k,className:(0,a.A)(z.root,f)},B))}))},66734:(e,n,o)=>{o.d(n,{A:()=>l});var r=o(58168),t=o(65043),i=o(8122),a=o(70579);function l(e,n){const o=(o,t)=>(0,a.jsx)(i.A,(0,r.A)({"data-testid":`${n}Icon`,ref:t},o,{children:e}));return o.muiName=i.A.muiName,t.memo(t.forwardRef(o))}},55013:(e,n,o)=>{o.d(n,{A:()=>r});const r=o(63159).A},63159:(e,n,o)=>{o.d(n,{A:()=>t});var r=o(65043);const t="undefined"!==typeof window?r.useLayoutEffect:r.useEffect},43239:()=>{}}]);
//# sourceMappingURL=410.33eb6e4b.chunk.js.map