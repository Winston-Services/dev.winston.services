"use strict";(self.webpackChunkwinston=self.webpackChunkwinston||[]).push([[3453],{55665:(e,t,n)=>{n.d(t,{A:()=>h});n(65043);var r=n(59454),a=n(12110),o=n(46946),i=n(36591),s=n(53404),l=n(26494),c=n(68903),d=n(85865),u=n(17392),m=n(25754),v=n(60587),p=n(86971),x=n(70579);const h=function(e){let{item:t}=e;const n=(0,p.Zp)();return(0,x.jsxs)(a.A,{className:"nft-container",elevation:0,children:[(0,x.jsxs)(o.A,{className:"hover-nft-button-container",children:[(0,x.jsx)(i.A,{component:"img",height:"300px",image:t.image,alt:"green iguana"}),(0,x.jsx)(s.A,{fullWidth:!0,className:"hover-nft-button",variant:"contained",color:"secondary",sx:{borderRadius:0},onClick:()=>{n("/marketplace/product-details")},children:"Buy"})]}),(0,x.jsxs)(l.A,{sx:{pb:3},children:[(0,x.jsxs)(c.Ay,{container:!0,rowGap:1,children:[(0,x.jsxs)(c.Ay,{item:!0,xs:12,display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,x.jsxs)(d.A,{variant:"subtitle2",children:["#",t.id]}),(0,x.jsx)(u.A,{children:(0,x.jsx)(r.A,{})})]}),(0,x.jsxs)(c.Ay,{item:!0,xs:12,display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,x.jsx)(d.A,{variant:"h6",children:t.name}),(0,x.jsxs)(d.A,{variant:"h5",children:["$",t.price]})]}),(0,x.jsxs)(c.Ay,{item:!0,xs:12,display:"flex",justifyContent:"space-between",alignItems:"center",children:[(0,x.jsxs)(c.Ay,{children:[(0,x.jsx)(d.A,{variant:"subtitle2",children:"Start BID"}),(0,x.jsxs)(d.A,{mt:"-5px",variant:"subtitle1",children:["$",t.startBid]})]}),(0,x.jsxs)(c.Ay,{children:[(0,x.jsx)(d.A,{variant:"subtitle2",children:"End BID in"}),(0,x.jsxs)(d.A,{mt:"-5px",variant:"subtitle1",children:[t.endBidIn," Days"]})]})]})]}),t.donners&&(0,x.jsxs)(c.Ay,{display:"flex",justifyContent:"space-between",alignItems:"center",mt:1,children:[(0,x.jsx)(m.A,{children:t.donners.map((e=>(0,x.jsx)(v.A,{className:"borderNone",alt:e.name,src:e.avatar},e.name)))}),(0,x.jsxs)(d.A,{children:[t.donners.length," donners"]})]})]})]})}},40915:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var r=n(65043),a=n(28458),o=n(57525),i=n(43640),s=n(98440),l=n(85865),c=n(87488),d=n(68903),u=n(8070),m=n(61596),v=n(17392),p=n(39336),x=n(39127),h=n(45679),A=n(46946),f=n(16704),y=n(24056),g=n(53404),j=n(80077),b=n(86971),w=n(19926),S=n(10605),C=n(68100),k=n(78043),M=n(55665),R=n(70579);function I(e){const{children:t,value:n,index:r,...a}=e;return(0,R.jsx)("div",{role:"tabpanel",hidden:n!==r,id:`simple-tabpanel-${r}`,"aria-labelledby":`simple-tab-${r}`,...a,children:n===r&&(0,R.jsx)(A.A,{sx:{mt:"30px"},children:(0,R.jsx)(l.A,{component:"span",children:t})})})}function N(e){return{id:`simple-tab-${e}`,"aria-controls":`simple-tabpanel-${e}`}}const z=[{image:w,id:5161,name:"PsychoMolly",price:59,startBid:15,endBidIn:5},{image:S,id:5161,name:"PsychoMolly",price:59,startBid:15,endBidIn:5},{image:C,id:5161,name:"PsychoMolly",price:59,startBid:15,endBidIn:5},{image:k,id:5161,name:"PsychoMolly",price:59,startBid:15,endBidIn:5}];const B=function(){const e=(0,b.Zp)(),[t,n]=r.useState(0),a=(0,j.d4)((e=>e.themeColors.colors.components.MuiTab.tabIndicatorStyle));return(0,R.jsxs)(A.A,{sx:{width:"100%",mt:2},children:[(0,R.jsx)(A.A,{children:(0,R.jsxs)(f.A,{value:t,onChange:(e,t)=>{n(t)},TabIndicatorProps:{...a},children:[(0,R.jsx)(y.A,{label:"Collectibles",...N(0)}),(0,R.jsx)(y.A,{label:"Selling",...N(1)}),(0,R.jsx)(y.A,{label:"Created",...N(2)}),(0,R.jsx)(y.A,{label:"Liked",...N(2)})]})}),(0,R.jsx)(I,{value:t,index:0,children:(0,R.jsx)(d.Ay,{container:!0,rowSpacing:4,columnSpacing:{xs:2,md:2,lg:4},children:z.map(((e,t)=>(0,R.jsx)(d.Ay,{item:!0,xs:12,sm:6,md:6,lg:3,children:(0,R.jsx)(M.A,{item:e})},e+t)))})}),(0,R.jsx)(I,{value:t,index:1,children:"Coming Soon...!"}),(0,R.jsxs)(I,{value:t,index:2,children:[(0,R.jsx)(m.A,{elevation:0,sx:{py:3,border:"1px solid #FFFFFF",borderRadius:"10px",mt:10},children:(0,R.jsx)(l.A,{textAlign:"center",variant:"subtitle1",children:"You have not created any NFT"})}),(0,R.jsx)(d.Ay,{item:!0,textAlign:"center",children:(0,R.jsx)(g.A,{variant:"contained",color:"secondary",type:"submit",sx:{width:{xs:"100%",sm:"auto"},mt:5},onClick:()=>{e("/user-profile/connect-your-wallet")},children:"Create your first NFT"})})]}),(0,R.jsx)(I,{value:t,index:3,children:"Coming Soon...!"})]})},$=[{name:"Likes",number:"131.8K"},{name:"Views",number:"2.6M"},{name:"Created",number:"21K"},{name:"Minted",number:"21.1K"}],F=e=>{let{children:t}=e;const n=t,[a,o]=r.useState(!0);return(0,R.jsxs)(l.A,{children:[a?n.slice(0,280)+"... ":n,(0,R.jsx)(c.A,{variant:"",onClick:()=>{o(!a)},children:a?"Read more":"Show less"})]})};const P=function(){return(0,R.jsxs)(d.Ay,{container:!0,item:!0,xs:12,sx:{mt:{xs:"-40px",sm:"-80px"}},children:[(0,R.jsx)("img",{src:h,style:{width:"100%",height:"338px",objectFit:"cover"}}),(0,R.jsxs)(u.A,{children:[(0,R.jsx)(d.Ay,{container:!0,display:"flex",justifyContent:"end",mt:-10,children:(0,R.jsxs)(m.A,{opacity:"50",children:[(0,R.jsx)(v.A,{children:(0,R.jsx)(a.A,{sx:{fontSize:{xs:20,sm:25}}})}),(0,R.jsx)(v.A,{children:(0,R.jsx)(o.A,{sx:{fontSize:{xs:20,sm:25}}})}),(0,R.jsx)(v.A,{children:(0,R.jsx)(i.A,{sx:{fontSize:{xs:20,sm:25}}})})]})}),(0,R.jsxs)(d.Ay,{container:!0,display:"flex",justifyContent:"space-between",mt:5,children:[(0,R.jsxs)(d.Ay,{item:!0,display:"flex",children:[(0,R.jsx)(d.Ay,{item:!0,sx:{mt:{xs:"-50px",sm:"-90px",md:"-100px"},width:{xs:"135px",sm:"200px",md:"245px"}},children:(0,R.jsx)("img",{src:x,style:{border:"10px solid #271d5a",borderRadius:"50%",width:"100%",height:"auto"}})}),(0,R.jsxs)(d.Ay,{item:!0,m:3,children:[(0,R.jsx)(l.A,{variant:"h4",fontWeight:800,children:"Winston Art"}),(0,R.jsxs)(d.Ay,{display:"flex",alignItems:"center",children:[(0,R.jsx)(l.A,{variant:"h6",sx:{mr:2},children:"winston_art"}),(0,R.jsx)(s.A,{sx:{color:"#3D96FF"}})]})]})]}),(0,R.jsx)(d.Ay,{item:!0,display:"flex",sx:{mt:{xs:2,sm:4}},children:null===$||void 0===$?void 0:$.map(((e,t)=>(0,R.jsxs)(d.Ay,{item:!0,display:"flex",children:[(0,R.jsxs)(d.Ay,{px:2,children:[(0,R.jsx)(l.A,{variant:"subtitle2",children:e.name}),(0,R.jsx)(l.A,{variant:"subtitle1",fontWeight:700,children:e.number})]},e.name+t),$.length-1!==t?(0,R.jsx)(p.A,{orientation:"vertical",sx:{height:"50px"}}):null]},e.name)))})]}),(0,R.jsx)(d.Ay,{item:!0,md:12,mt:5,children:(0,R.jsx)(F,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Read More GeeksforGeeks: A Computer Science portal for geeks. It contains well written, well thought and well explained computer science, programming articles and quizzes. It provides a variety of services for you to learn, so thrive and also have fun! Free Tutorials, Millions of Articles, Live, Online and Classroom Courses ,Frequent Coding Competitions, Webinars by Industry Experts, Internship opportunities, and Job Opportunities. Knowledge is power!"})}),(0,R.jsx)(d.Ay,{item:!0,md:12,mt:2,children:(0,R.jsx)(B,{})})]})]})}},59454:(e,t,n)=>{var r=n(95709);t.A=void 0;var a=r(n(40039)),o=n(70579),i=(0,a.default)((0,o.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");t.A=i},25754:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(98587),a=n(58168),o=n(65043),i=(n(2086),n(43024)),s=n(60222),l=n(34535),c=n(37864),d=n(15294),u=n(60587),m=n(63088);function v(e){return(0,m.A)("MuiAvatarGroup",e)}const p=(0,n(15904).A)("MuiAvatarGroup",["root","avatar"]);var x=n(70579);const h=["children","className","componentsProps","max","spacing","total","variant"],A={small:-16,medium:null},f=(0,l.Ay)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(e,t)=>(0,a.A)({[`& .${p.avatar}`]:t.avatar},t.root)})((e=>{let{theme:t}=e;return{[`& .${d.A.root}`]:{border:`2px solid ${t.palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"}})),y=(0,l.Ay)(u.A,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})((e=>{let{theme:t}=e;return{border:`2px solid ${t.palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),g=o.forwardRef((function(e,t){var n,l;const d=(0,c.A)({props:e,name:"MuiAvatarGroup"}),{children:u,className:m,componentsProps:p={},max:g=5,spacing:j="medium",total:b,variant:w="circular"}=d,S=(0,r.A)(d,h);let C=g<2?2:g;const k=(0,a.A)({},d,{max:g,spacing:j,variant:w}),M=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"],avatar:["avatar"]},v,t)})(k),R=o.Children.toArray(u).filter((e=>o.isValidElement(e))),I=b||R.length;I===C&&(C+=1),C=Math.min(I+1,C);const N=Math.min(R.length,C-1),z=Math.max(I-C,I-N,0),B=j&&void 0!==A[j]?A[j]:-j;return(0,x.jsxs)(f,(0,a.A)({ownerState:k,className:(0,i.A)(M.root,m),ref:t},S,{children:[z?(0,x.jsxs)(y,(0,a.A)({ownerState:k,variant:w},p.additionalAvatar,{className:(0,i.A)(M.avatar,null==(n=p.additionalAvatar)?void 0:n.className),style:(0,a.A)({marginLeft:B},null==(l=p.additionalAvatar)?void 0:l.style),children:["+",z]})):null,R.slice(0,N).reverse().map(((e,t)=>o.cloneElement(e,{className:(0,i.A)(e.props.className,M.avatar),style:(0,a.A)({marginLeft:t===N-1?void 0:B},e.props.style),variant:e.props.variant||w})))]}))}))},60587:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(98587),a=n(58168),o=n(65043),i=n(43024),s=n(60222),l=n(34535),c=n(37864),d=n(66734),u=n(70579);const m=(0,d.A)((0,u.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var v=n(15294);const p=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],x=(0,l.Ay)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})((e=>{let{theme:t,ownerState:n}=e;return(0,a.A)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===n.variant&&{borderRadius:t.shape.borderRadius},"square"===n.variant&&{borderRadius:0},n.colorDefault&&{color:t.palette.background.default,backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]})})),h=(0,l.Ay)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),A=(0,l.Ay)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});const f=o.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiAvatar"}),{alt:l,children:d,className:m,component:f="div",imgProps:y,sizes:g,src:j,srcSet:b,variant:w="circular"}=n,S=(0,r.A)(n,p);let C=null;const k=function(e){let{crossOrigin:t,referrerPolicy:n,src:r,srcSet:a}=e;const[i,s]=o.useState(!1);return o.useEffect((()=>{if(!r&&!a)return;s(!1);let e=!0;const o=new Image;return o.onload=()=>{e&&s("loaded")},o.onerror=()=>{e&&s("error")},o.crossOrigin=t,o.referrerPolicy=n,o.src=r,a&&(o.srcset=a),()=>{e=!1}}),[t,n,r,a]),i}((0,a.A)({},y,{src:j,srcSet:b})),M=j||b,R=M&&"error"!==k,I=(0,a.A)({},n,{colorDefault:!R,component:f,variant:w}),N=(e=>{const{classes:t,variant:n,colorDefault:r}=e,a={root:["root",n,r&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.A)(a,v.k,t)})(I);return C=R?(0,u.jsx)(h,(0,a.A)({alt:l,src:j,srcSet:b,sizes:g,ownerState:I,className:N.img},y)):null!=d?d:M&&l?l[0]:(0,u.jsx)(A,{className:N.fallback}),(0,u.jsx)(x,(0,a.A)({as:f,ownerState:I,className:(0,i.A)(N.root,m),ref:t},S,{children:C}))}))},15294:(e,t,n)=>{n.d(t,{A:()=>o,k:()=>a});var r=n(63088);function a(e){return(0,r.A)("MuiAvatar",e)}const o=(0,n(15904).A)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"])},26494:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(58168),a=n(98587),o=n(65043),i=n(43024),s=n(60222),l=n(34535),c=n(37864),d=n(63088);function u(e){return(0,d.A)("MuiCardContent",e)}(0,n(15904).A)("MuiCardContent",["root"]);var m=n(70579);const v=["className","component"],p=(0,l.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),x=o.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiCardContent"}),{className:o,component:l="div"}=n,d=(0,a.A)(n,v),x=(0,r.A)({},n,{component:l}),h=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"]},u,t)})(x);return(0,m.jsx)(p,(0,r.A)({as:l,className:(0,i.A)(h.root,o),ownerState:x,ref:t},d))}))},61596:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(98587),a=n(58168),o=n(65043),i=n(43024),s=n(60222),l=n(90310),c=n(34535),d=n(37864),u=n(63088);function m(e){return(0,u.A)("MuiPaper",e)}(0,n(15904).A)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var v=n(70579);const p=["className","component","elevation","square","variant"],x=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},h=(0,c.Ay)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,a.A)({backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},!n.square&&{borderRadius:t.shape.borderRadius},"outlined"===n.variant&&{border:`1px solid ${t.palette.divider}`},"elevation"===n.variant&&(0,a.A)({boxShadow:t.shadows[n.elevation]},"dark"===t.palette.mode&&{backgroundImage:`linear-gradient(${(0,l.X4)("#fff",x(n.elevation))}, ${(0,l.X4)("#fff",x(n.elevation))})`}))})),A=o.forwardRef((function(e,t){const n=(0,d.A)({props:e,name:"MuiPaper"}),{className:o,component:l="div",elevation:c=1,square:u=!1,variant:x="elevation"}=n,A=(0,r.A)(n,p),f=(0,a.A)({},n,{component:l,elevation:c,square:u,variant:x}),y=(e=>{const{square:t,elevation:n,variant:r,classes:a}=e,o={root:["root",r,!t&&"rounded","elevation"===r&&`elevation${n}`]};return(0,s.A)(o,m,a)})(f);return(0,v.jsx)(h,(0,a.A)({as:l,ownerState:f,className:(0,i.A)(y.root,o),ref:t},A))}))},8122:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(58168),a=n(98587),o=n(65043),i=n(43024),s=n(60222),l=n(6803),c=n(37864),d=n(34535),u=n(63088);function m(e){return(0,u.A)("MuiSvgIcon",e)}(0,n(15904).A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var v=n(70579);const p=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],x=(0,d.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,l.A)(n.color)}`],t[`fontSize${(0,l.A)(n.fontSize)}`]]}})((e=>{let{theme:t,ownerState:n}=e;var r,a,o,i,s,l,c,d,u,m,v,p,x,h,A,f,y;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(r=t.transitions)||null==(a=r.create)?void 0:a.call(r,"fill",{duration:null==(o=t.transitions)||null==(i=o.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(s=t.typography)||null==(l=s.pxToRem)?void 0:l.call(s,20))||"1.25rem",medium:(null==(c=t.typography)||null==(d=c.pxToRem)?void 0:d.call(c,24))||"1.5rem",large:(null==(u=t.typography)||null==(m=u.pxToRem)?void 0:m.call(u,35))||"2.1875"}[n.fontSize],color:null!=(v=null==(p=t.palette)||null==(x=p[n.color])?void 0:x.main)?v:{action:null==(h=t.palette)||null==(A=h.action)?void 0:A.active,disabled:null==(f=t.palette)||null==(y=f.action)?void 0:y.disabled,inherit:void 0}[n.color]}})),h=o.forwardRef((function(e,t){const n=(0,c.A)({props:e,name:"MuiSvgIcon"}),{children:o,className:d,color:u="inherit",component:h="svg",fontSize:A="medium",htmlColor:f,inheritViewBox:y=!1,titleAccess:g,viewBox:j="0 0 24 24"}=n,b=(0,a.A)(n,p),w=(0,r.A)({},n,{color:u,component:h,fontSize:A,instanceFontSize:e.fontSize,inheritViewBox:y,viewBox:j}),S={};y||(S.viewBox=j);const C=(e=>{const{color:t,fontSize:n,classes:r}=e,a={root:["root","inherit"!==t&&`color${(0,l.A)(t)}`,`fontSize${(0,l.A)(n)}`]};return(0,s.A)(a,m,r)})(w);return(0,v.jsxs)(x,(0,r.A)({as:h,className:(0,i.A)(C.root,d),ownerState:w,focusable:"false",color:f,"aria-hidden":!g||void 0,role:g?"img":void 0,ref:t},S,b,{children:[o,g?(0,v.jsx)("title",{children:g}):null]}))}));h.muiName="SvgIcon";const A=h},66734:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(58168),a=n(65043),o=n(8122),i=n(70579);function s(e,t){const n=(n,a)=>(0,i.jsx)(o.A,(0,r.A)({"data-testid":`${t}Icon`,ref:a},n,{children:e}));return n.muiName=o.A.muiName,a.memo(a.forwardRef(n))}},15758:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(65043);const a=function(e,t){return r.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},54516:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(84818).A},27107:(e,t,n)=>{function r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t)=>null==t?e:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}),(()=>{}))}n.d(t,{A:()=>r})},84818:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(65043);function a(e){let{controlled:t,default:n,name:a,state:o="value"}=e;const{current:i}=r.useRef(void 0!==t),[s,l]=r.useState(n);return[i?t:s,r.useCallback((e=>{i||l(e)}),[])]}},63159:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(65043);const a="undefined"!==typeof window?r.useLayoutEffect:r.useEffect},39713:(e,t,n)=>{var r;n.d(t,{A:()=>s});var a=n(65043);let o=0;const i=(r||(r=n.t(a,2))).useId;function s(e){if(void 0!==i){const t=i();return null!=e?e:t}return function(e){const[t,n]=a.useState(e),r=e||t;return a.useEffect((()=>{null==t&&(o+=1,n(`mui-${o}`))}),[t]),r}(e)}},19926:(e,t,n)=>{e.exports=n.p+"static/media/nft_marketplace_1.766e77618c2e9f9bece1.png"},10605:(e,t,n)=>{e.exports=n.p+"static/media/nft_marketplace_2.8a6777782d7e4802d7cc.png"},68100:(e,t,n)=>{e.exports=n.p+"static/media/nft_marketplace_3.139f7f6363bbefa285c4.png"},78043:(e,t,n)=>{e.exports=n.p+"static/media/nft_marketplace_4.b889ae49e92c5e387cb7.png"},39127:(e,t,n)=>{e.exports=n.p+"static/media/user_profile.7003f03d5477727d6159.png"},45679:(e,t,n)=>{e.exports=n.p+"static/media/user_profile_cover.b71b5430be45b5a7d582.png"}}]);
//# sourceMappingURL=3453.3b03d7ae.chunk.js.map