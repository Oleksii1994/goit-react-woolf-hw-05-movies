"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{544:function(n,t,e){e.r(t);var r=e(439),i=e(861),o=e(687),p=e.n(o),c=e(791),a=e(87),s=e(243),d=e(398),u=e(155),f=e(184),l=function(){var n=(0,i.Z)(p().mark((function n(){return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,"298a5b49d75fb843dc4c4c38d9d64139",n.next=4,s.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat("298a5b49d75fb843dc4c4c38d9d64139"));case 4:return n.abrupt("return",n.sent);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();t.default=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],o=t[1];return(0,c.useEffect)((function(){try{var n=function(){var n=(0,i.Z)(p().mark((function n(){var t,e,r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l();case 2:t=n.sent,e=t.data.results,r=e.map((function(n){return{id:n.id,poster_path:n.poster_path,overview:n.overview,popularity:n.popularity,genre_ids:n.genre_ids,title:n.title}})),o(r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(t){console.log(t)}}),[]),(0,f.jsx)(d.yc,{children:e.map((function(n){var t=n.id,e=n.poster_path,r=n.title;return(0,f.jsx)(a.rU,{to:"/movies/".concat(t),children:(0,f.jsxs)(d._f,{children:[(0,f.jsx)(d.N$,{children:(0,f.jsx)(u.DF,{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://media.istockphoto.com/id/147273331/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%B8%D0%BD%D1%94-%D0%B2%D1%96%D0%B4%D1%80%D0%BE-%D0%BF%D0%BE%D0%BF%D0%BA%D0%BE%D1%80%D0%BD%D1%83.jpg?s=2048x2048&w=is&k=20&c=EVEpgBCnZmkrieihX5eDgsssBgcGyU71woNkj5N4FiM=",alt:r,width:"352"})}),(0,f.jsx)(d.Bq,{children:(0,f.jsx)("h2",{children:r})})]})},t)}))})}},398:function(n,t,e){e.d(t,{Bq:function(){return f},N$:function(){return d},_f:function(){return s},yc:function(){return u}});var r,i,o,p,c=e(168),a=e(931),s=a.Z.li(r||(r=(0,c.Z)(["\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: #af93aa12;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 352px;\n  transition-duration: 250ms;\n  transition-property: scale;\n  transition-timing-function: ease-in-out;\n\n  &:hover {\n    scale: 1.02;\n    box-shadow: 0px 1px 2px rgb(255 0 249 / 31%),\n      0px 2px 4px rgb(255 0 245 / 50%), 0px 4px 8px rgb(255 235 0 / 31%),\n      0px 8px 16px rgb(255 247 254 / 35%);\n  }\n"]))),d=a.Z.div(i||(i=(0,c.Z)(["\n  width: 352px;\n  height: 528px;\n"]))),u=a.Z.ul(o||(o=(0,c.Z)(["\n  padding: 32px 0;\n\n  display: flex;\n\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),f=a.Z.div(p||(p=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: 60px;\n  padding: 16px 0;\n  text-align: center;\n  font-size: 12px;\n"])))},155:function(n,t,e){e.d(t,{DF:function(){return g},Hq:function(){return x},Mj:function(){return h},Ow:function(){return u},UI:function(){return f},l4:function(){return l}});var r,i,o,p,c,a,s=e(168),d=e(931),u=d.Z.header(r||(r=(0,s.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #392b3754;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),f=d.Z.form(i||(i=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #140e1294;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),l=d.Z.button(o||(o=(0,s.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-color: #5d425b;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),x=d.Z.span(p||(p=(0,s.Z)(["\n  position: absolute;\n  width: 16px;\n  height: 16px;\n\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),h=d.Z.input(c||(c=(0,s.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 24px;\n  padding-right: 4px;\n  background-color: #140e1200;\n  color: #ffffff;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n    color: #ffffff;\n  }\n"]))),g=d.Z.img(a||(a=(0,s.Z)(["\n  object-fit: cover;\n"])))}}]);
//# sourceMappingURL=544.37a54a23.chunk.js.map