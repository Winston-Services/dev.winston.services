"use strict";(self.webpackChunkwinston=self.webpackChunkwinston||[]).push([[8434],{23650:(i,t,e)=>{e.d(t,{A:()=>n});e(65043);const n=e.p+"static/media/coin.dc6ab896c5d134d42b1af6ae79faf80f.svg"},48733:(i,t,e)=>{e.d(t,{A:()=>x});e(65043);var n=e(8070),s=e(68903),a=e(46946),c=e(85865),r=e(12110),o=e(26494),l=e(53404);const u=e.p+"static/media/verification.8625c178ac7964ea40d2d928bfd07f6c.svg";var d=e(70579);function m(i){let{data:t}=i;return(0,d.jsx)(r.A,{className:"wizardCard",sx:{p:6,height:"100%"},elevation:0,children:(0,d.jsx)(o.A,{sx:{height:"100%"},children:(0,d.jsxs)(a.A,{display:"flex",sx:{height:"100%"},flexDirection:"column",gap:3,children:[(0,d.jsx)(c.A,{variant:"h5",children:t.title}),(0,d.jsx)(c.A,{variant:"h4",sx:{mb:3},children:t.price}),null!==t&&void 0!==t&&t.duration?(0,d.jsxs)(c.A,{variant:"h6",display:"flex",alignItems:"center",children:[(0,d.jsx)(a.A,{component:"img",sx:{mr:1},src:u}),t.duration]}):null,(0,d.jsx)(c.A,{variant:"subtitle2",sx:{flexGrow:1,display:"flex",alignItems:"end"},children:t.text}),(0,d.jsx)(l.A,{fullWidth:!0,variant:"contained",color:"secondary",className:"purchase-button",onClick:t.onBtnClick,children:t.buttonText})]})})})}function x(i){let{checkoutData:t}=i;return(0,d.jsx)(n.A,{children:t.map((i=>{var t;return(0,d.jsxs)(s.Ay,{container:!0,spacing:4,sx:{mb:10},children:[(0,d.jsxs)(s.Ay,{item:!0,xs:12,sx:{display:"flex",alignItems:"center"},children:[(0,d.jsx)(a.A,{component:"img",sx:{mr:3},src:i.icon,alt:"icon"}),(0,d.jsx)(c.A,{variant:"h3",sx:{flexGrow:1},children:i.title})]}),(0,d.jsx)(s.Ay,{item:!0,container:!0,xs:12,children:(0,d.jsx)(c.A,{children:i.description})}),(0,d.jsx)(s.Ay,{item:!0,container:!0,spacing:4,children:null===(t=i.items)||void 0===t?void 0:t.map((i=>(0,d.jsx)(s.Ay,{item:!0,xs:12,md:6,lg:6,children:(0,d.jsx)(m,{data:i})},i.title)))})]},i.title)}))})}},38434:(i,t,e)=>{e.r(t),e.d(t,{default:()=>r});e(65043);var n=e(86971),s=e(48733),a=e(23650),c=e(70579);const r=function(i){let{setWizardData:t}=i;const e=(0,n.zy)(),r=(0,n.Zp)(),o=e.pathname.indexOf("/wizard/custom")>-1,l=[{title:"Coin name",icon:a.A,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim lorem a purus semper volutpat. Nam non nulla augue. Curabitur dignissim velit a tortor blandit, at vehicula libero gravida. Proin faucibus, nisl vel condimentum fringilla, arcu neque gravida nulla, id euismod tortor dolor eu sem. Sed blandit tincidunt velit ac vulputate. Mauris consequat efficitur lobortis. Sed nec congue est",items:[{title:"Monthly Hosting",price:"$XX/month",duration:"First 1 month free",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim lorem a purus semper volutpat. Nam non nulla augue. Curabitur dignissim velit a tortor blandit.",buttonText:"Subscribe",onBtnClick:()=>{t({coinSuccessText:"Successfully subscribe Monthly Hosting!"}),r(o?"/wizard/custom/coin-checkout-success":"/wizard/coin/checkout-success")}},{title:"Purchase Coin",price:"$XX/one time",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent dignissim lorem a purus semper volutpat. Nam nonnulla augue. Curabitur dignissim velit a tortor blandit.",buttonText:"Purchase Coin",onBtnClick:()=>{t({coinSuccessText:"Successfully purchased coin!"}),r(o?"/wizard/custom/coin-checkout-success":"/wizard/coin/checkout-success")}}]}];return(0,c.jsx)(s.A,{checkoutData:l})}}}]);
//# sourceMappingURL=8434.836fcf75.chunk.js.map