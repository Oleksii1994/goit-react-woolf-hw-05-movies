"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{6713:function(n,t,e){e.d(t,{Hx:function(){return d},NX:function(){return l},V0:function(){return p},fP:function(){return s},i7:function(){return o},uV:function(){return f}});var r=e(5861),u=e(4687),a=e.n(u),c=e(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="298a5b49d75fb843dc4c4c38d9d64139",o=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/week?api_key=".concat(i));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/videos?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4387:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,u,a=e(5861),c=e(9439),i=e(4687),o=e.n(i),s=e(2791),p=e(7689),f=e(168),d=e(3237),l=d.Z.ul(r||(r=(0,f.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  padding: 24px;\n"]))),x=d.Z.li(u||(u=(0,f.Z)(["\n  border-radius: 4px;\n  background-color: #221c21;\n  padding: 20px;\n  box-shadow: 0px 1px 2px rgb(255 158 0 / 40%), 0px 2px 4px rgb(255 0 245 / 30%),\n    0px 4px 8px rgb(255 221 0 / 40%), 0px 4px 16px rgb(255 247 254 / 10%);\n"]))),h=e(6713),v=e(6094),g=e(184),m=function(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],u=(0,p.UO)().movieId;return(0,s.useEffect)((function(){var n=function(){var n=(0,a.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,h.Hx)(u);case 3:t=n.sent,e=t.data.results,r((0,v.Vu)(e)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),r([]);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[u]),e.length?(0,g.jsx)(l,{children:e.map((function(n){var t=n.id,e=n.content;return(0,g.jsx)(x,{children:(0,g.jsx)("p",{children:e})},t)}))}):(0,g.jsx)("p",{className:"msg",children:"Possibly, there are no reviews"})}},6094:function(n,t,e){e.d(t,{I5:function(){return r},Vu:function(){return u},oO:function(){return a}});var r=function(n){return n.map((function(n){return{id:n.id,poster_path:n.poster_path,title:n.title}}))},u=function(n){return n.map((function(n){return{id:n.id,content:n.content}}))},a=function(n){return n.map((function(n){return{cast_id:n.cast_id,character:n.character,name:n.name,profile_path:n.profile_path}}))}}}]);
//# sourceMappingURL=387.5dd43dc5.chunk.js.map