(this.webpackJsonpdgcharts=this.webpackJsonpdgcharts||[]).push([[0],{184:function(t,e,a){},340:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(60),s=a.n(c),i=(a(184),a(34)),u=a.n(i),o=a(80),j=a(16),d=a(341),l=a(342),b=a(346),O=a(89),f=a(90),h=a(69),p=a(171),x=a(82),g=a.n(x),m=a(83),v=a.n(m);function k(t,e){var a,n=t.length-1,r=e-1,c=[];if(e<1||e>t.length)return console.log("Invalid selection count!"),c;for(a in t){if(1===e){c.push(t[a]);break}var s=Math.round(n*a/r);if(!(s<t.length))break;c.push(t[s])}return c}var y=["#003f5c","#2f4b7c","#665191","#a05195","#d45087","#f95d6a","#ff7c43","#ffa600"],w=a(11);function M(t){var e=t.url,a=Object(n.useState)(null),r=Object(j.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(null),x=Object(j.a)(i,2),m=x[0],M=x[1],S=Object(n.useState)(y),D=Object(j.a)(S,2),I=D[0],K=D[1],E=Object(n.useState)(!0),q=Object(j.a)(E,2),F=q[0],G=q[1];return Object(n.useEffect)((function(){null===c&&function(){var t=Object(o.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get(e);case 3:a=t.sent,s(a.data.reverse()),n=Object.keys(a.data[0]).filter((function(t){return t.includes("total")})),M(n),K(k(y,n.length)),G(!1),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}()()}),[c,e]),!F&&Object(w.jsx)("div",{children:Object(w.jsx)(d.a,{width:"96%",height:360,children:Object(w.jsxs)(l.a,{data:c,margin:{top:10,right:30,left:50,bottom:10},children:[Object(w.jsx)(b.a,{strokeDasharray:"3 3"}),Object(w.jsx)(O.a,{dataKey:"data",minTickGap:25,tickFormatter:function(t){return v()(t).format("DD/MM/Y")}}),Object(w.jsx)(f.a,{padding:{top:100},domain:["dataMin","dataMax"]}),Object(w.jsx)(h.a,{}),m.map((function(t,e){return Object(w.jsx)(p.a,{type:"monotone",dataKey:t,stroke:I[e],strokeWidth:2,dot:!1},e)}))]})})})}var S=a(347),D=a(66),I=a(174);function K(t){var e=t.url,a=Object(n.useState)(null),r=Object(j.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(null),l=Object(j.a)(i,2),p=l[0],x=l[1],m=Object(n.useState)(y),M=Object(j.a)(m,2),K=M[0],E=M[1],q=Object(n.useState)(!0),F=Object(j.a)(q,2),G=F[0],J=F[1];return Object(n.useEffect)((function(){null===c&&function(){var t=Object(o.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.get(e);case 3:a=t.sent,s(a.data.reverse()),n=Object.keys(a.data[0]).filter((function(t){return!t.includes("data")&&!t.includes("total")&&!t.includes("all")})),x(n),E(k(y,n.length)),J(!1),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}()()}),[c,e]),!G&&Object(w.jsx)("div",{children:Object(w.jsx)(d.a,{width:"96%",height:360,children:Object(w.jsxs)(S.a,{data:c,margin:{top:5,right:30,left:50,bottom:5},children:[Object(w.jsx)(b.a,{strokeDasharray:"3 3"}),Object(w.jsx)(O.a,{dataKey:"data",minTickGap:25,tickFormatter:function(t){return v()(t).format("DD/MM/Y")}}),Object(w.jsx)(f.a,{padding:{top:100},domain:["dataMin","dataMax"]}),Object(w.jsx)(h.a,{}),Object(w.jsx)(D.a,{}),p.map((function(t,e){return Object(w.jsx)(I.a,{stackId:"a",dataKey:t,fill:K[e],strokeWidth:2,dot:!1},e)}))]})})})}var E="https://raw.githubusercontent.com/ministero-salute/it-dgc-opendata/master/data/dgc-acquired.json",q="https://raw.githubusercontent.com/ministero-salute/it-dgc-opendata/master/data/dgc-issued.json";function F(){return Object(w.jsxs)("div",{style:{margin:"10px auto"},children:[Object(w.jsx)("h1",{children:"Acquired by"}),Object(w.jsx)(K,{url:E}),Object(w.jsx)(M,{url:E}),Object(w.jsx)("h1",{children:"Issued for"}),Object(w.jsx)(K,{url:q}),Object(w.jsx)(M,{url:q})]})}s.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(F,{})}),document.getElementById("root"))}},[[340,1,2]]]);
//# sourceMappingURL=main.28bb8909.chunk.js.map