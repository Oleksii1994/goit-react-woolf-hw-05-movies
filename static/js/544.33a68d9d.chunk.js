"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{6713:function(n,t,e){e.d(t,{Hx:function(){return d},NX:function(){return x},V0:function(){return s},fP:function(){return p},i7:function(){return u},uV:function(){return f}});var r=e(5861),a=e(4687),c=e.n(a),i=e(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="298a5b49d75fb843dc4c4c38d9d64139",u=function(){var n=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/week?api_key=".concat(o));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/videos?api_key=").concat(o,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4672:function(n,t,e){e.d(t,{O:function(){return m}});var r,a,c,i,o=e(168),u=e(3237),p=u.Z.li(r||(r=(0,o.Z)(["\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: #af93aa12;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 352px;\n  transition-duration: 250ms;\n  transition-property: scale;\n  transition-timing-function: ease-in-out;\n\n  &:hover {\n    scale: 1.02;\n    box-shadow: 0px 1px 2px rgb(255 0 249 / 31%),\n      0px 2px 4px rgb(255 0 245 / 50%), 0px 4px 8px rgb(255 235 0 / 31%),\n      0px 8px 16px rgb(255 247 254 / 35%);\n  }\n"]))),s=u.Z.div(a||(a=(0,o.Z)(["\n  width: 352px;\n  height: 528px;\n"]))),f=u.Z.ul(c||(c=(0,o.Z)(["\n  padding: 32px 0;\n\n  display: flex;\n\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),d=u.Z.div(i||(i=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: 60px;\n  padding: 16px 0;\n  text-align: center;\n  font-size: 12px;\n"]))),x=e(7689),h=e(1087),l=e(155),g=e(184),m=function(n){var t=n.movies,e=(0,x.TH)();return(0,g.jsx)(f,{children:t.map((function(n){var t=n.id,r=n.poster_path,a=n.title;return(0,g.jsx)(p,{children:(0,g.jsxs)(h.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,g.jsx)(s,{children:(0,g.jsx)(l.D,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://media.istockphoto.com/id/147273331/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BD%D1%94-%D0%B2%D1%96%D0%B4%D1%80%D0%BE-%D0%BF%D0%BE%D0%BF%D0%BA%D0%BE%D1%80%D0%BD%D1%83.jpg?s=2048x2048&w=is&k=20&c=EVEpgBCnZmkrieihX5eDgsssBgcGyU71woNkj5N4FiM=",alt:a,width:"352"})}),(0,g.jsx)(d,{children:(0,g.jsx)("h2",{children:a})})]})},t)}))})}},6094:function(n,t,e){e.d(t,{I5:function(){return r},Vu:function(){return a},oO:function(){return c}});var r=function(n){return n.map((function(n){return{id:n.id,poster_path:n.poster_path,title:n.title}}))},a=function(n){return n.map((function(n){return{id:n.id,content:n.content}}))},c=function(n){return n.map((function(n){return{cast_id:n.cast_id,character:n.character,name:n.name,profile_path:n.profile_path}}))}},9544:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),c=e(4687),i=e.n(c),o=e(2791),u=e(1686),p=e(6713),s=e(6094),f=e(4672),d=e(184);t.default=function(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1];return(0,o.useEffect)((function(){try{var n=function(){var n=(0,r.Z)(i().mark((function n(){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.i7)();case 2:t=n.sent,e=t.data.results,c((0,s.I5)(e));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(t){console.log(t.message),u.Notify.error("Oops, something went wrong, try to reload the page")}}),[]),(0,d.jsx)(f.O,{movies:e})}},155:function(n,t,e){e.d(t,{D:function(){return u},O:function(){return o}});var r,a,c=e(168),i=e(3237),o=i.Z.header(r||(r=(0,c.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #392b3754;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),u=i.Z.img(a||(a=(0,c.Z)(["\n  object-fit: cover;\n"])))}}]);
//# sourceMappingURL=544.33a68d9d.chunk.js.map