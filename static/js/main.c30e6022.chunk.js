(this.webpackJsonppetfriends=this.webpackJsonppetfriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(3),s=n.n(r),a=(n(12),n(4)),i=n(5),o=n(7),h=n(6),l=n(0),d=function(e){var t=e.name,n=e.email,c=e.id;return Object(l.jsxs)("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"pets",src:"https://placedog.net/200/300/?id=".concat(c)}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("p",{children:n})]})]})},u=function(e){var t=e.pets;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},j=function(e){e.searchfield;var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Dogs..",onChange:t,style:{"border-radius":"130px"}})})},b=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"560px"},children:e.children})},p=(n(14),function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={pets:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({pets:t})}))}},{key:"render",value:function(){var e=this.state,t=e.pets,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"PetFriends"}),Object(l.jsx)(j,{searchChange:this.onSearchChange}),Object(l.jsx)(b,{children:Object(l.jsx)(u,{pets:c})})]}):Object(l.jsx)("h1",{children:"Loading"})}}]),n}(c.Component)),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(15);s.a.render(Object(l.jsx)(p,{}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.c30e6022.chunk.js.map