"use strict";(self.webpackChunkwinston=self.webpackChunkwinston||[]).push([[332],{97014:(e,n,t)=>{t.r(n),t.d(n,{default:()=>p});t(65043);var r=t(80077),i=t(50108),o=t(877),a=t(86150),c=t(6026),u=t(21327),l=t(13839),s=t(70579);const d=[{name:"Page A",In:0,Out:0},{name:"Page B",In:2800,Out:1398},{name:"Page C",In:2e3,Out:7800},{name:"Page D",In:6080,Out:3908},{name:"Page E",In:4090,Out:4800},{name:"Page F",In:3e3,Out:3800},{name:"Page G",In:4900,Out:2500},{name:"Page H",In:1890,Out:2e3},{name:"Page I",In:2390,Out:3800},{name:"Page J",In:0,Out:0}];const p=function(){const e=(0,r.d4)((e=>e.themeColors.chartColors.inOutAreaChartColor));return(0,s.jsx)(i.u,{children:(0,s.jsxs)(o.Q,{data:d,children:[(0,s.jsx)(a.m,{cursor:{stroke:`${e.stroke}`,strokeDasharray:"3"}}),(0,s.jsx)(c.h,{stroke:e.stroke,mirror:!0}),(0,s.jsx)(u.s,{iconType:"circle",verticalAlign:"top",align:"right"}),(0,s.jsx)(l.G,{type:"monotone",dataKey:"In",stroke:e.area[0],strokeOpacity:0,fill:e.area[0]}),(0,s.jsx)(l.G,{type:"monotone",dataKey:"Out",stroke:e.area[1],strokeOpacity:0,fill:e.area[1]})]})})}},73523:(e,n,t)=>{t.d(n,{A:()=>h});var r=t(98587),i=t(58168);var o=t(25540),a=t(65043),c=t(88726);function u(e,n){var t=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,a.isValidElement)(e)?n(e):e}(e)})),t}function l(e,n,t){return null!=t[n]?t[n]:e.props[n]}function s(e,n,t){var r=u(e.children),i=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var r,i=Object.create(null),o=[];for(var a in e)a in n?o.length&&(i[a]=o,o=[]):o.push(a);var c={};for(var u in n){if(i[u])for(r=0;r<i[u].length;r++){var l=i[u][r];c[i[u][r]]=t(l)}c[u]=t(u)}for(r=0;r<o.length;r++)c[o[r]]=t(o[r]);return c}(n,r);return Object.keys(i).forEach((function(o){var c=i[o];if((0,a.isValidElement)(c)){var u=o in n,s=o in r,d=n[o],p=(0,a.isValidElement)(d)&&!d.props.in;!s||u&&!p?s||!u||p?s&&u&&(0,a.isValidElement)(d)&&(i[o]=(0,a.cloneElement)(c,{onExited:t.bind(null,c),in:d.props.in,exit:l(c,"exit",e),enter:l(c,"enter",e)})):i[o]=(0,a.cloneElement)(c,{in:!1}):i[o]=(0,a.cloneElement)(c,{onExited:t.bind(null,c),in:!0,exit:l(c,"exit",e),enter:l(c,"enter",e)})}})),i}var d=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},p=function(e){function n(n,t){var r,i=(r=e.call(this,n,t)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,o.A)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,r,i=n.children,o=n.handleExited;return{children:n.firstRender?(t=e,r=o,u(t.children,(function(e){return(0,a.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:l(e,"appear",t),enter:l(e,"enter",t),exit:l(e,"exit",t)})}))):s(e,i,o),firstRender:!1}},t.handleExited=function(e,n){var t=u(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,i.A)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,i=(0,r.A)(e,["component","childFactory"]),o=this.state.contextValue,u=d(this.state.children).map(t);return delete i.appear,delete i.enter,delete i.exit,null===n?a.createElement(c.A.Provider,{value:o},u):a.createElement(c.A.Provider,{value:o},a.createElement(n,i,u))},n}(a.Component);p.propTypes={},p.defaultProps={component:"div",childFactory:function(e){return e}};const h=p},88726:(e,n,t)=>{t.d(n,{A:()=>r});const r=t(65043).createContext(null)},25540:(e,n,t)=>{function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}function i(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,r(e,n)}t.d(n,{A:()=>i})}}]);
//# sourceMappingURL=332.94332493.chunk.js.map