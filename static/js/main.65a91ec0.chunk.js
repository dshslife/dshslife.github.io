(this["webpackJsonpds-study"]=this["webpackJsonpds-study"]||[]).push([[0],{127:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),c=a.n(r),o=(a(95),a(26)),i=(a(96),a(72)),u=a.n(i)()(),s=a(22),m=a(27),d=a(23),f=(a(60),a(157)),p=a(165),h=a(166),v=a(168),g=a(167),E=a(169),b=a(78),j=a.n(b),x=a(171),y=a(173),O=a(160),w=a(170),S=a(164),k=a(43),N=a.n(k),C=a(50),q=a(36),B=a.n(q);function I(){var e=Object(s.a)(["\n  margin-top: 20px;\n  font-size: 30px;\n  margin-bottom: 20px;\n"]);return I=function(){return e},e}function W(){var e=Object(s.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nbackground-color: #ffffff;\nmin-height: 100vh;\n@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);\nfont-family: 'NanumSquare', sans-serif;\n"]);return W=function(){return e},e}var A=Object(f.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:"95%",height:"100%"},icon:{color:"rgba(255, 255, 255, 0.54)"},select:{width:"95%"},searchButton:{width:"95%",marginTop:2}}}));function z(){var e=A(),t=Object(n.useState)(0),a=Object(m.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)([]),i=Object(m.a)(o,2),u=i[0],s=i[1];Object(n.useEffect)((function(){document.title="\ud559\uc2b5\uc790\ub8cc \uacf5\uc720 \uc2dc\uc2a4\ud15c"}),[]);return l.a.createElement(D,null,l.a.createElement(T,null,"\ub300\uc2e0\uace0\ub4f1\ud559\uad50 \ud559\uc2b5\uc790\ub8cc \uacf5\uc720\ubc29"),l.a.createElement(O.a,{variant:"outlined",className:e.select},l.a.createElement(x.a,{id:"demo-simple-select-outlined-label"},"\ud559\uc2b5\uc790\ub8cc \ubaa9\ub85d"),l.a.createElement(w.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:r,onChange:function(e){c(e.target.value)},label:"\uacfc\ubaa9",className:e.select},l.a.createElement(y.a,{value:0},"==\uc120\ud0dd\ud574\uc8fc\uc138\uc694=="),l.a.createElement(y.a,{value:1},"\ud654\ud559"),l.a.createElement(y.a,{value:2},"\uc601\uc5b4"),l.a.createElement(y.a,{value:3},"\ubb38\ud559"),l.a.createElement(y.a,{value:4},"\uc9c0\uad6c\uacfc\ud559"),l.a.createElement(y.a,{value:5},"\uc218\ud5591"),l.a.createElement(y.a,{value:6},"\uc218\ud5592"),l.a.createElement(y.a,{value:7},"\uc77c\ubcf8\uc5b4"))),l.a.createElement(S.a,{variant:"contained",color:"primary",className:e.searchButton,onClick:function(){N.a.get("https://happycastle.xyz:2095/api/postlist?id=".concat(r)).then((function(e){var t=e.data;s(t),0==e.data.length&&(console.log("NO SEARCH DATA"),B.a.fire("\ub370\uc774\ud130 \uc5c6\uc74c","\uac80\uc0c9 \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4","error"))}))}},"\uac80\uc0c9\ud558\uae30"),l.a.createElement(p.a,{cellHeight:180,className:e.gridList},l.a.createElement(h.a,{key:"Subheader",cols:2,style:{height:"auto"}},l.a.createElement(g.a,{component:"div"},"\uac80\uc0c9\uacb0\uacfc")),u.map((function(t){return l.a.createElement(h.a,{key:t.title},l.a.createElement("img",{src:t.fileurl,alt:t.title}),l.a.createElement(v.a,{title:t.title,subtitle:l.a.createElement("span",null,"by: ",t.author),actionIcon:l.a.createElement(C.a,{to:{pathname:"/details",state:t}},l.a.createElement(E.a,{"aria-label":"info about ".concat(t.title),className:e.icon},l.a.createElement(j.a,null)))}))}))))}var D=d.a.div(W()),T=d.a.text(I());function L(){var e=Object(s.a)(["\n  margin-top: 20px;\n  font-size: 30px;\n  margin-bottom: 20px;\n"]);return L=function(){return e},e}function F(){var e=Object(s.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nbackground-color: #ffffff;\nmin-height: 100vh;\n@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);\nfont-family: 'NanumSquare', sans-serif;\n"]);return F=function(){return e},e}function H(e){var t=e.location;return console.log(t.state.title),Object(n.useEffect)((function(){document.title=t.state.title}),[]),l.a.createElement(J,null,l.a.createElement(M,null,t.state.title),l.a.createElement(M,null,t.state.author),l.a.createElement("img",{src:t.state.fileurl}))}var J=d.a.div(F()),M=d.a.text(L()),P=a(52),G=(a(125),a(79)),R=a.n(G),$=a(80),K=a.n($),Q=(a(126),a(174));function U(){var e=Object(s.a)(["\n  margin: 20px;\n  \n"]);return U=function(){return e},e}function V(){var e=Object(s.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\njustify-content: center;\nbackground-color: #ffffff;\nmin-height: 100vh;\n@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);\nfont-family: 'NanumSquare', sans-serif;\n"]);return V=function(){return e},e}Object(P.registerPlugin)(R.a,K.a);var X=Object(f.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:"100%",height:"100%"},icon:{color:"rgba(255, 255, 255, 0.54)"},select:{width:"100%"},searchButton:{width:"100%",marginTop:2}}}));function Y(){var e=X(),t=Object(n.useState)([]),a=Object(m.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(0),i=Object(m.a)(o,2),u=i[0],s=i[1],d=Object(n.useState)(""),f=Object(m.a)(d,2),p=f[0],h=f[1],v=Object(n.useState)(""),g=Object(m.a)(v,2),E=g[0],b=g[1];Object(n.useEffect)((function(){document.title="\ud30c\uc77c \uc5c5\ub85c\ub4dc"}),[]);return l.a.createElement(Z,null,l.a.createElement(_,null,l.a.createElement(O.a,{variant:"outlined",className:e.select},l.a.createElement(x.a,{id:"demo-simple-select-outlined-label"},"\ud559\uc2b5\uc790\ub8cc \ubaa9\ub85d"),l.a.createElement(w.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:u,onChange:function(e){s(e.target.value)},label:"\uacfc\ubaa9",className:e.select},l.a.createElement(y.a,{value:0},"==\uc120\ud0dd\ud574\uc8fc\uc138\uc694=="),l.a.createElement(y.a,{value:1},"\ud654\ud559"),l.a.createElement(y.a,{value:2},"\uc601\uc5b4"),l.a.createElement(y.a,{value:3},"\ubb38\ud559"),l.a.createElement(y.a,{value:4},"\uc9c0\uad6c\uacfc\ud559"),l.a.createElement(y.a,{value:5},"\uc218\ud5591"),l.a.createElement(y.a,{value:6},"\uc218\ud5592"),l.a.createElement(y.a,{value:7},"\uc77c\ubcf8\uc5b4"))),l.a.createElement(Q.a,{fullWidth:!0,label:"\uc81c\ubaa9",id:"standard-basic",value:p,onChange:function(e){return h(e.target.value)}}),l.a.createElement(Q.a,{fullWidth:!0,label:"\uc5c5\ub85c\ub4dc \uc791\uc131\uc790",id:"standard-basic",value:E,onChange:function(e){return b(e.target.value)}}),l.a.createElement(P.FilePond,{files:r,allowMultiple:!0,onupdatefiles:function(e){return c(e)},labelIdle:'Drag & Drop your files or <span class="filepond--label-action">Browse</span>'}),l.a.createElement(S.a,{variant:"contained",color:"primary",className:e.searchButton,onClick:function(){console.log(r[0]);var e=new FormData;0==u||""==p||""==E||0==r.length?B.a.fire("\ub370\uc774\ud130 \uc5c6\uc74c","\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4","error"):(e.set("id",u.toString()),e.append("author",E),e.append("title",p),e.append("multiplefiles",r[0].file),N.a.post("https://happycastle.xyz:2095/api/upload",e).then((function(e){B.a.fire("\uc131\uacf5","\ub370\uc774\ud130 \uc5c5\ub85c\ub4dc \uc131\uacf5","info")})).catch((function(e){B.a.fire("\ud1b5\uc2e0 \uc2e4\ud328","\uc11c\ubc84\uc640\uc758 \ud1b5\uc2e0\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4","error")})))}},"\ud30c\uc77c \uc5c5\ub85c\ub4dc\ud558\uae30")))}var Z=d.a.div(V()),_=d.a.div(U());var ee=function(){var e=-1!==window.navigator.userAgent.indexOf("Edge");return-1!==window.navigator.userAgent.indexOf("Trident")&&!e?l.a.createElement("div",null,"Goodbye, Internet Explorer"):l.a.createElement(o.b,{history:u},l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:z}),l.a.createElement(o.a,{exact:!0,path:"/details",component:H}),l.a.createElement(o.a,{exact:!0,path:"/uploadfile",component:Y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,t,a){e.exports=a(127)},95:function(e,t,a){},96:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.65a91ec0.chunk.js.map