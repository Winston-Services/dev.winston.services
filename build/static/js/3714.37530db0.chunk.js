"use strict";(self.webpackChunkwinston=self.webpackChunkwinston||[]).push([[3714],{7126:(e,n,t)=>{t.d(n,{A:()=>d});var s=t(65043),r=t(66360),i=t(61596),a=t(83243),l=t(29840),o=t(51787),c=t(70579);const d=function(e){let{data:n,searchBy:t,searchInput:d,setSearchInput:x,setSearchData:m}=e;return s.useEffect((()=>{m(d?n.filter((e=>e[t].toString().toLowerCase().includes(d.toLowerCase()))):n)}),[n,t,d,m]),(0,c.jsx)(a.A,{freeSolo:!0,PaperComponent:e=>(0,c.jsx)(i.A,{...e,sx:{width:"calc(100% + 50px)",ml:"-25px",borderRadius:"0 0 20px 20px"}}),options:n.map((e=>e[t].toString())),onChange:(e,n)=>x(n),renderInput:e=>(0,c.jsx)(l.A,{...e,value:d,onChange:e=>x(e.target.value),variant:"standard",fullWidth:!0,color:"filled",placeholder:"Search",InputProps:{...e.InputProps,startAdornment:(0,c.jsx)(o.A,{position:"start",children:(0,c.jsx)(r.A,{})}),disableUnderline:!0},sx:{...!0===e.inputProps["aria-expanded"]&&{borderRadius:"20px 20px 0 0"}}})})}},50501:(e,n,t)=>{t.d(n,{A:()=>g});var s=t(65043),r=t(58293),i=t(74802),a=t(46946),l=t(26494),o=t(85865),c=t(17392),d=t(90889),x=t(86605),m=t(68903),u=t(45100),h=t(40710),p=t(53404),A=t(94109),j=t(12110),y=t(70579);const g=function(e){let{toggleDrawer:n,openDrawer:t,filterPanels:g}=e;const[f,C]=s.useState("panel1"),v=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l.A,{sx:{p:4},children:(0,y.jsxs)(a.A,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,y.jsx)(o.A,{variant:"h6",children:"Filter"}),(0,y.jsx)(c.A,{sx:{display:{xs:"flex",md:"none"}},"aria-label":"close",onClick:n,children:(0,y.jsx)(i.A,{})})]})}),g.map((e=>{return(0,y.jsxs)(d.A,{disableGutters:!0,elevation:0,expanded:f===e.summaryText,onChange:(n=e.summaryText,(e,t)=>{C(!!t&&n)}),children:[(0,y.jsx)(x.A,{expandIcon:(0,y.jsx)(r.A,{}),sx:{px:4,py:1},"aria-controls":`${e.summaryText}-content`,children:(0,y.jsxs)(m.Ay,{display:"flex",alignItems:"center",children:[(0,y.jsx)(o.A,{children:e.summaryText}),(0,y.jsx)(u.A,{sx:{ml:2.5},color:"primary",invisible:!e.summaryCount,badgeContent:e.summaryCount,max:9})]})}),(0,y.jsx)(h.A,{sx:{px:4,py:1,pb:3},children:e.detailsComponent})]},e.summaryText);var n})),(0,y.jsx)(l.A,{sx:{p:4},children:(0,y.jsxs)(a.A,{display:"flex",justifyContent:"center",alignItems:"center",children:[(0,y.jsx)(p.A,{variant:"contained",color:"secondary",sx:{mr:2},children:"Apply Filter"}),(0,y.jsx)(p.A,{variant:"outlined",children:"Clear"})]})})]});return(0,y.jsxs)("div",{children:[(0,y.jsx)(A.Ay,{anchor:"right",open:t,onClose:n,className:"filterDrawer",children:(0,y.jsx)(a.A,{role:"presentation",children:v()})}),(0,y.jsx)(j.A,{elevation:0,sx:{display:{xs:"none",md:"block"}},children:v()})]})}},43714:(e,n,t)=>{t.r(n),t.d(n,{default:()=>g});var s=t(65043),r=t(85865),i=t(43845),a=t(8070),l=t(68903),o=t(53404),c=t(61596),d=t(80077),x=t(86971),m=t(7126),u=t(33868);const h=t.p+"static/media/academy_icon.4b2600e3ff2f22b5f6d8912ba5772468.svg";var p=t(50501),A=t(93463),j=t(70579);const y=[{summaryText:"Sort",summaryCount:0,detailsComponent:(0,j.jsx)(r.A,{children:"Sort Filter Coming Soon...!"})},{summaryText:"Topic",summaryCount:0,detailsComponent:(0,j.jsx)(j.Fragment,{children:["Altcoin","Music","Domain Names","Music","Photography","Sports","Trading Cards","Utility","Virtual Worlds"].map(((e,n)=>(0,j.jsx)(i.A,{variant:"filled",label:e,onClick:()=>{console.log("first")},sx:{mr:1.25,mt:1.25}},e+n)))})},{summaryText:"Difficulty",summaryCount:0,detailsComponent:(0,j.jsx)(r.A,{children:"Difficulty Filter Coming Soon...!"})},{summaryText:"Price",summaryCount:0,detailsComponent:(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(r.A,{children:"Price Filter Coming Soon...!"})})},{summaryText:"Rating",summaryCount:0,detailsComponent:(0,j.jsx)(r.A,{children:"Rating Filter Coming Soon...!"})}];const g=function(){const e=(0,d.d4)(u.CU),[n,t]=s.useState(!1),[i,g]=s.useState(""),[f,C]=s.useState(e),v=(0,x.Zp)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a.A,{children:(0,j.jsxs)(l.Ay,{container:!0,columnSpacing:3,children:[(0,j.jsxs)(l.Ay,{item:!0,xl:12,container:!0,mb:5,columnSpacing:3,alignItems:"center",children:[(0,j.jsx)(l.Ay,{item:!0,xl:4,display:"flex",children:(0,j.jsx)(r.A,{variant:"h3",textAlign:"center",children:"Academy"})}),(0,j.jsx)(l.Ay,{item:!0,xl:8,children:(0,j.jsx)(m.A,{data:e,searchBy:"title",searchInput:i,setSearchInput:g,setSearchData:C})})]}),(0,j.jsx)(l.Ay,{item:!0,xl:4,children:(0,j.jsx)(p.A,{toggleDrawer:()=>{t(!n)},openDrawer:n,filterPanels:y})}),(0,j.jsxs)(l.Ay,{item:!0,xl:8,children:[(0,j.jsx)(l.Ay,{container:!0,spacing:3,children:f&&0!==f.length?f.map(((e,n)=>(0,j.jsx)(l.Ay,{item:!0,xs:12,sm:6,lg:4,children:(0,j.jsx)(A.A,{item:e})},e.title+n))):(0,j.jsxs)(r.A,{textAlign:"center",width:"100%",children:["No results for '",i,"'"]})}),(0,j.jsx)(l.Ay,{container:!0,justifyContent:"center",mt:5,children:(0,j.jsx)(o.A,{variant:"outlined",children:"Load more videos"})})]})]})}),(0,j.jsx)(c.A,{elevation:0,sx:{py:10,mt:10,borderRadius:0},children:(0,j.jsx)(a.A,{children:(0,j.jsxs)(l.Ay,{container:!0,rowSpacing:6,columnSpacing:3,display:"flex",alignItems:"center",children:[(0,j.jsxs)(l.Ay,{item:!0,md:6.5,children:[(0,j.jsx)(r.A,{variant:"h3",children:"Add course"}),(0,j.jsx)(r.A,{variant:"subtitle1",mt:3,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sollicitudin venenatis feugiat magna feugiat urna cursus turpis. Consectetur arcu quis vel nec, nibh id nisl praesent ac. Neque."}),(0,j.jsx)(o.A,{variant:"contained",color:"secondary",sx:{mt:{xs:5,md:12.4},mb:5,width:{xs:"100%",sm:"auto"}},onClick:()=>v("/academy/add-course"),children:"Add course"})]}),(0,j.jsx)(l.Ay,{item:!0,md:5.5,children:(0,j.jsx)("img",{src:h,style:{width:"100%"}})})]})})})]})}}}]);
//# sourceMappingURL=3714.37530db0.chunk.js.map