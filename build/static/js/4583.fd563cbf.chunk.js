"use strict";(self.webpackChunkwinston=self.webpackChunkwinston||[]).push([[4583],{24583:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var s=t(65043),o=t(35721),a=t(30681),r=t(12110),i=t(26494),l=t(85865),c=t(68903),d=t(53404),u=t(29840),g=t(76371),x=t(70579);function h(e){let{messages:n}=e;const t=s.useRef(null);return s.useEffect((()=>{t.current&&(t.current.scrollTop=t.current.scrollHeight)}),[n]),(0,x.jsx)(o.A,{ref:t,style:{maxHeight:"400px",overflow:"auto"},children:n.map(((e,n)=>(0,x.jsx)(a.Ay,{children:(0,x.jsx)(r.A,{variant:"outlined",style:{width:"100%"},children:(0,x.jsxs)(i.A,{children:[(0,x.jsxs)(l.A,{variant:"body2",color:"textSecondary",component:"p",children:[(0,x.jsx)("strong",{children:"To:"})," ",e.to]}),(0,x.jsxs)(l.A,{variant:"body2",color:"textSecondary",component:"p",children:[(0,x.jsx)("strong",{children:"Message:"})," ",e.message]}),(0,x.jsxs)(l.A,{variant:"body2",color:"textSecondary",component:"p",children:[(0,x.jsx)("strong",{children:"Date:"})," ",e.date]})]})})},n)))})}function m(){const{connection:e}=(0,g.Ay)(),[n,t]=s.useState([]),[o,a]=s.useState(""),[r,i]=s.useState("");return s.useEffect((()=>{e.onmessage=async s=>{try{const o=JSON.parse(await s.data.text(),!1,2);((e,s)=>{console.log("incoming",e,s),s.SIG&&""!==s.SIG&&s.OP_CODE&&("MESSAGE"===s.OP_CODE?(console.log("Message Data",s.data),t([...n,s.data])):console.log(e))})(e,o)}catch(o){console.error(o)}}})),(0,x.jsx)("div",{children:(0,x.jsxs)(c.Ay,{container:!0,spacing:1,children:[(0,x.jsxs)(c.Ay,{item:!0,xs:12,children:[(0,x.jsx)("h2",{children:"Message Log"}),(0,x.jsx)(h,{messages:n})]}),(0,x.jsxs)(c.Ay,{item:!0,xs:12,children:[(0,x.jsx)("h2",{children:"Send Message"}),(0,x.jsxs)("form",{onSubmit:function(s){s.preventDefault();const l={to:o,message:r,date:(new Date).toISOString().split("T")[0]};console.log("Handle Send :",e),e.send(JSON.stringify({OP_CODE:"MESSAGE",SIG:"No_Sig",from:"anonymous",to:o,data:l})),t([...n,l]),a(""),i("")},style:{display:"flex",flexDirection:"column",gap:"16px"},children:[(0,x.jsx)(u.A,{id:"recipient",name:"recipient",label:"Recipient",variant:"outlined",fullWidth:!0,required:!0,value:o,onChange:e=>a(e.target.value),autoComplete:"off"}),(0,x.jsx)(u.A,{id:"message",name:"message",label:"Message",variant:"outlined",multiline:!0,rows:4,fullWidth:!0,required:!0,value:r,onChange:e=>i(e.target.value),autoComplete:"off"}),(0,x.jsx)(d.A,{type:"submit",variant:"contained",color:"primary",children:"Send"})]})]})]})})}}}]);
//# sourceMappingURL=4583.fd563cbf.chunk.js.map