"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,i,c,o,p=e(861),s=e(439),d=e(687),u=e.n(d),l=e(243),h=e(791),f=e(689),x=e(168),g=e(931),m=g.Z.li(r||(r=(0,x.Z)(["\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: #af93aa12;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 280px;\n  transition-duration: 250ms;\n  transition-property: scale;\n  transition-timing-function: ease-in-out;\n"]))),v=g.Z.div(a||(a=(0,x.Z)(["\n  // width: 280px;\n  // height: 352px;\n"]))),j=g.Z.ul(i||(i=(0,x.Z)(["\n  padding: 32px 0;\n\n  display: flex;\n\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),w=g.Z.div(c||(c=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  justify-content: center;\n  align-items: center;\n\n  height: 60px;\n  padding: 16px 0;\n  text-align: center;\n  font-size: 12px;\n"]))),Z=g.Z.img(o||(o=(0,x.Z)(["\n  object-fit: cover;\n"]))),_=e(184),b=function(){var n=(0,h.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,f.UO)().movieId;return(0,h.useEffect)((function(){var n=function(){var n=(0,p.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.Z.get("https://api.themoviedb.org/3/movie/".concat(a,"/credits?api_key=").concat("298a5b49d75fb843dc4c4c38d9d64139","&language=en-US"));case 3:return t=n.sent,e=t.data.cast,r(e.map((function(n){return{id:n.id,character:n.character,name:n.name,profile_path:n.profile_path}}))),n.abrupt("return",e);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[e,a]),(0,_.jsx)(j,{children:e.map((function(n){var t=n.id,e=n.character,r=n.name,a=n.profile_path;return(0,_.jsxs)(m,{children:[(0,_.jsx)(v,{children:(0,_.jsx)(Z,{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):"https://as1.ftcdn.net/v2/jpg/05/64/45/52/1000_F_564455291_RRMiR6jlecxRBpSdtOT1KAX8a8FRhinM.jpg",alt:r,width:"280",height:"420"})}),(0,_.jsxs)(w,{children:[(0,_.jsx)("h3",{children:r}),(0,_.jsx)("p",{children:e})]})]},t)}))})}}}]);
//# sourceMappingURL=736.20dc119b.chunk.js.map