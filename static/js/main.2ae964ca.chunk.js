(this["webpackJsonpdelta-defense"]=this["webpackJsonpdelta-defense"]||[]).push([[0],{148:function(e,t,a){e.exports=a(290)},153:function(e,t,a){},289:function(e,t,a){},290:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(33),c=a.n(l),s=(a(153),a(85)),o=a(13),m=a(24),i=a.n(m),u=a(41),p=a(23),E=a(19),d=a(129),h={posts:[],users:[],comments:[],postDetails:{},userId:null,user:{}},f=function(e,t){switch(t.type){case"SET_POSTS":return Object(E.a)(Object(E.a)({},e),{},{posts:t.posts});case"SET_USERS":return Object(E.a)(Object(E.a)({},e),{},{users:t.users});case"SET_COMMENTS":return Object(E.a)(Object(E.a)({},e),{},{comments:t.comments});case"SET_USERID":return Object(E.a)(Object(E.a)({},e),{},{userId:t.userId});case"SET_USER_DETAILS":return Object(E.a)(Object(E.a)({},e),{},{user:t.user});case"SET_POST_DETAILS":return Object(E.a)(Object(E.a)({},e),{},{postDetails:t.postDetails});default:return e}},g=Object(d.a)((function(){var e=Object(o.g)(),t=Object(n.useReducer)(f,h),a=Object(p.a)(t,2),r=a[0],l=a[1],c=r.users,s=r.posts,m=r.comments,E=r.userId,d=r.user,g=r.postDetails;function b(){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://jsonplaceholder.typicode.com/posts",t={method:"get"},e.next=5,fetch("https://jsonplaceholder.typicode.com/posts",t);case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,l({type:"SET_POSTS",posts:n}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.warn("Error getting posts: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function v(){return(v=Object(u.a)(i.a.mark((function t(){var a,n,r,c,s,o,m,u,E,d,h,f,g,b;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l({type:"SET_POST_DETAILS",postDetails:[]}),a=e.location.pathname,n=new URLSearchParams(window.location.search),r=n.get("user"),c=a.split("/")[2],s={method:"get"},o="https://jsonplaceholder.typicode.com/users/".concat(r),m="https://jsonplaceholder.typicode.com/posts/".concat(c),u="https://jsonplaceholder.typicode.com/comments?postId=".concat(c),E=[m,o,u].map((function(e){return fetch(e,s).then((function(e){if(e.ok)return e.json();throw e}))})),t.next=12,Promise.all(E);case 12:d=t.sent,h=Object(p.a)(d,3),f=h[0],g=h[1],b=h[2],l({type:"SET_POST_DETAILS",postDetails:{postData:f,userData:g,commentsData:b}});case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://jsonplaceholder.typicode.com/users",t={method:"get"},e.next=5,fetch("https://jsonplaceholder.typicode.com/users",t);case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,l({type:"SET_USERS",users:n}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.warn("Error getting users: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function S(){return(S=Object(u.a)(i.a.mark((function t(){var a,n,r,c,s,o,m,u,E,d,h;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l({type:"SET_USER_DETAILS",user:{}}),a=e.location.pathname,n=a.split("/")[2],r="https://jsonplaceholder.typicode.com/posts/",c="https://jsonplaceholder.typicode.com/users/".concat(n),s={method:"get"},o=[c,r].map((function(e){return fetch(e,s).then((function(e){if(e.ok)return e.json();throw e}))})),t.next=9,Promise.all(o);case 9:m=t.sent,u=Object(p.a)(m,2),E=u[0],d=u[1],h=d.filter((function(e){return e.userId===Number(n)})),l({type:"SET_USER_DETAILS",user:{data:E,posts:h}});case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://jsonplaceholder.typicode.com/comments",t={method:"get"},e.next=5,fetch("https://jsonplaceholder.typicode.com/comments",t);case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,l({type:"SET_COMMENTS",comments:n}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.warn("Error getting comments: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){b(),y(),D()}),[]),{users:c,posts:s,comments:m,userId:E,user:d,postDetails:g,getPosts:b,getUsers:y,getUser:function(){return S.apply(this,arguments)},getComments:D,getPostDetails:function(){return v.apply(this,arguments)},routeToDetails:function(t,a){e.push("/posts/".concat(t,"?user=").concat(a)),l({type:"SET_USERID",userId:a})},routeToUser:function(t){e.push("/users/".concat(t))},routeToUri:function(t){e.push("/".concat(t))}}})),b=Object(p.a)(g,2),w=b[0],v=b[1],y=a(300),j=a(137),S=a(294),D=a(299),O=function(){var e=v().routeToUri,t=Object(n.useState)({}),a=Object(p.a)(t,2),l=a[0],c=a[1],s=function(t,a){var n=a.name;c(n),e(n)};return r.a.createElement(D.a,{pointing:!0,secondary:!0,fluid:!0,id:"app-menu"},r.a.createElement(D.a.Item,{header:!0,className:"menu-logo"},"Company Blog"),r.a.createElement(D.a.Item,{name:"posts",active:"posts"===l,onClick:s}),r.a.createElement(D.a.Item,{name:"users",active:"users"===l,onClick:s}))},T=function(e){var t=e.children;return r.a.createElement(y.a,{id:"app-wrapper"},r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Column,{width:"16",id:"nav-header"},r.a.createElement(j.a,{size:"small",src:"https://www.deltadefense.com/public/img/USCCA-DD-logo.png"})),r.a.createElement(O,null)),r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Column,{width:16},r.a.createElement(y.a.Row,null,r.a.createElement(S.a,null,t)))),r.a.createElement(y.a.Row,{id:"app-footer"},r.a.createElement(y.a.Column,{width:16},"\xa9 2003-2020 Delta Defense, LLC. All Rights Reserved. Reproduction without permission prohibited.")))},C=a(297),I=a(301),L=a(298),k=a(302),x=function(){var e=r.a.createElement(y.a.Column,{key:Math.random()},r.a.createElement(I.a,{raised:!0},r.a.createElement(L.a,null,r.a.createElement(L.a.Header,{image:!0},r.a.createElement(L.a.Line,null),r.a.createElement(L.a.Line,null)),r.a.createElement(L.a.Paragraph,null,r.a.createElement(L.a.Line,{length:"medium"}),r.a.createElement(L.a.Line,{length:"short"}))))),t=Array(12).fill(e);return r.a.createElement("div",{style:{width:"100%",height:"500px",padding:"30px"}},r.a.createElement(k.a,null,"We're getting sh*t done...",r.a.createElement(k.a.Subheader,null,"Hold tight!")),r.a.createElement(y.a,{columns:4,stackable:!0},t.map((function(e,t){return r.a.createElement(n.Fragment,{key:t},e)}))))},R=function(e){var t=v().users,a=e.userId,l=Object(n.useState)(""),c=Object(p.a)(l,2),s=c[0],o=c[1];return Object(n.useEffect)((function(){var e=t.filter((function(e){return e.id===a}));o(e)}),[t,a]),r.a.createElement("div",null,s&&s[0]&&s[0].name)},A=a(138),P=function(e){var t=v().comments,a=e.id,l=Object(n.useState)(""),c=Object(p.a)(l,2),s=c[0],o=c[1];return Object(n.useEffect)((function(){var e=t.filter((function(e){return e.postId===a}));o(e.length)}),[t,a]),r.a.createElement(A.a,null,"Comments:",r.a.createElement(A.a.Detail,null,s))},_=function(e,t){return e.split(" ").splice(0,t).join(" ")+"..."},U=function(){var e=v(),t=e.posts,a=e.routeToDetails,n=function(e){var t=e.currentTarget.dataset.postid,n=e.currentTarget.dataset.userid;a(t,n)};return r.a.createElement(y.a,{stackable:!0,columns:4},t&&t.length>0?r.a.createElement(y.a.Row,{id:"posts-row"},t.map((function(e,t){return r.a.createElement(y.a.Column,{key:e.title,"data-postid":e.id,"data-userid":e.userId,onClick:n,className:"post-column"},r.a.createElement(C.a,{fluid:!0,image:"https://picsum.photos/id/".concat(Math.floor(50*Math.random())+1,"/200/300"),header:_(e.title,3),meta:r.a.createElement(R,{userId:e.userId}),description:_(e.body,8),extra:r.a.createElement(P,{id:e.id})}))}))):r.a.createElement(x,null))},H=a(295),M=function(){return r.a.createElement("div",{style:{width:"100%",height:"500px",padding:"30px"}},r.a.createElement(k.a,null,"We're getting sh*t done...",r.a.createElement(k.a.Subheader,null,"Hold tight!")),r.a.createElement(L.a,{fluid:!0},r.a.createElement(L.a.Header,{image:!0},r.a.createElement(L.a.Line,null),r.a.createElement(L.a.Line,null)),r.a.createElement(L.a.Paragraph,null,r.a.createElement(L.a.Line,null),r.a.createElement(L.a.Line,null),r.a.createElement(L.a.Line,null),r.a.createElement(L.a.Line,null)),r.a.createElement(L.a.Paragraph,null,r.a.createElement(L.a.Line,null),r.a.createElement(L.a.Line,null),r.a.createElement(L.a.Line,null),r.a.createElement(L.a.Line,null),r.a.createElement(L.a.Line,null),r.a.createElement(L.a.Line,null)),r.a.createElement(L.a.Paragraph,null,r.a.createElement(L.a.Line,null),r.a.createElement(L.a.Line,null),r.a.createElement(L.a.Line,null)),r.a.createElement(L.a.Paragraph,null,r.a.createElement(L.a.Line,null),r.a.createElement(L.a.Line,null),r.a.createElement(L.a.Line,null),r.a.createElement(L.a.Line,null),r.a.createElement(L.a.Line,null),r.a.createElement(L.a.Line,null))))},z=function(){var e=v(),t=e.getPostDetails,a=e.postDetails,l=e.routeToUser;Object(n.useEffect)((function(){t()}),[]);return r.a.createElement(y.a,{stackable:!0},a&&a.postData?r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Column,{width:5},r.a.createElement(j.a,{src:"https://picsum.photos/200/300?random=1",fluid:!0})),r.a.createElement(y.a.Column,{width:8},r.a.createElement(k.a,{as:"h1"},a.postData.title,r.a.createElement(k.a.Subheader,{className:"post-author",onClick:function(){l(a.userData.id)}},"By ",a.userData.name)),r.a.createElement("p",null,a.postData.body),r.a.createElement(H.a.Group,null,r.a.createElement(k.a,{as:"h3",dividing:!0},"Comments"),a.commentsData.map((function(e){return r.a.createElement(H.a,{key:e.email},r.a.createElement(H.a.Avatar,{src:"https://react.semantic-ui.com/images/avatar/small/matt.jpg"}),r.a.createElement(H.a.Content,null,r.a.createElement(H.a.Author,{as:"a"},e.email),r.a.createElement(H.a.Metadata,null,r.a.createElement("div",null,r.a.createElement("b",null,e.name))),r.a.createElement(H.a.Text,null,e.body),r.a.createElement(H.a.Actions,null,r.a.createElement(H.a.Action,null,"Reply"))))}))))):r.a.createElement(M,null))},N=a(296),W=a(48),B=function(){var e=v(),t=e.getUser,a=e.user,l=e.routeToDetails;Object(n.useEffect)((function(){t()}),[]);var c=function(e){var t=e.currentTarget.dataset.postid,a=e.currentTarget.dataset.userid;l(t,a)};return r.a.createElement(y.a,{stackable:!0,columns:3},a&&a.data?r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a.Row,{id:"user-details"},r.a.createElement(y.a.Column,{width:16,className:"user-details-header"},r.a.createElement(k.a,{as:"h1"},a.data.name)),r.a.createElement(y.a.Column,{width:3},r.a.createElement(j.a,{fluid:!0,src:"https://picsum.photos/300/400?random=1"})),r.a.createElement(y.a.Column,{width:5},r.a.createElement(k.a,{as:"h3"},"Contect Info"),r.a.createElement(N.a,{relaxed:!0},r.a.createElement(N.a.Item,null,r.a.createElement(N.a.Icon,{name:"user",size:"large",verticalAlign:"middle"}),r.a.createElement(N.a.Content,null,r.a.createElement(N.a.Header,{as:"a"},"Username"),r.a.createElement(N.a.Description,{as:"a"},a.data.username))),r.a.createElement(N.a.Item,null,r.a.createElement(N.a.Icon,{name:"mail",size:"large",verticalAlign:"middle"}),r.a.createElement(N.a.Content,null,r.a.createElement(N.a.Header,{as:"a"},"Email"),r.a.createElement(N.a.Description,{as:"a"},a.data.email))),r.a.createElement(N.a.Item,null,r.a.createElement(N.a.Icon,{name:"phone",size:"large",verticalAlign:"middle"}),r.a.createElement(N.a.Content,null,r.a.createElement(N.a.Header,{as:"a"},"Phone"),r.a.createElement(N.a.Description,{as:"a"},a.data.phone))),r.a.createElement(N.a.Item,null,r.a.createElement(N.a.Icon,{name:"github",size:"large",verticalAlign:"middle"}),r.a.createElement(N.a.Content,null,r.a.createElement(N.a.Header,{as:"a"},"Website"),r.a.createElement(N.a.Description,{as:"a"},a.data.website))))),r.a.createElement(y.a.Column,{width:6},r.a.createElement(k.a,{as:"h3"},"Company"),r.a.createElement(N.a,{relaxed:!0},r.a.createElement(N.a.Item,null,r.a.createElement(N.a.Icon,{name:"building outline",size:"large",verticalAlign:"middle"}),r.a.createElement(N.a.Content,null,r.a.createElement(N.a.Header,{as:"a"},"Company"),r.a.createElement(N.a.Description,{as:"a"},a.data.company.name))),r.a.createElement(N.a.Item,null,r.a.createElement(N.a.Icon,{name:"briefcase",size:"large",verticalAlign:"middle"}),r.a.createElement(N.a.Content,null,r.a.createElement(N.a.Header,{as:"a"},"Services"),r.a.createElement(N.a.Description,{as:"a"},a.data.company.catchPhrase))),r.a.createElement(N.a.Item,null,r.a.createElement(N.a.Icon,{name:"comment alternate outline",size:"large",verticalAlign:"middle"}),r.a.createElement(N.a.Content,null,r.a.createElement(N.a.Header,{as:"a"},"Slogan"),r.a.createElement(N.a.Description,{as:"a"},'"',"".concat(a.data.company.bs),'"')))))),r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Column,{width:3}),r.a.createElement(y.a.Column,{width:8,id:"posts-list-wrapper"},r.a.createElement(N.a,{relaxed:!0},r.a.createElement(k.a,{as:"h3"},"Recent Posts"),a.posts.map((function(e){return r.a.createElement(N.a.Item,{key:e.title,"data-userid":a.data.id,"data-postid":e.id,onClick:c},r.a.createElement(N.a.Content,null,r.a.createElement(N.a.Header,{as:"a"},e.title),r.a.createElement(N.a.Description,{as:"a"},r.a.createElement(W.a,{name:"long arrow alternate right"}))))})))))):r.a.createElement(M,null))},F=function(){var e=v(),t=e.users,a=e.routeToUser,n=function(e){var t=e.currentTarget.dataset.userid;a(t)};return r.a.createElement(y.a,{stackable:!0},t&&t.length>0?r.a.createElement(y.a.Row,{id:"posts-row"},r.a.createElement(C.a.Group,null,t.map((function(e){return r.a.createElement(C.a,{key:e.id,fluid:!0,"data-userid":e.id,onClick:n},r.a.createElement(C.a.Content,null,r.a.createElement(j.a,{floated:"right",size:"mini",src:"https://picsum.photos/id/".concat(Math.floor(50*Math.random())+1,"/200")}),r.a.createElement(C.a.Header,null,e.name),r.a.createElement(C.a.Meta,null,e.username),r.a.createElement(C.a.Description,null,"".concat(e.name," works for ").concat(e.company.name,", a ").concat(e.company.catchPhrase,'. Their thing is to "').concat(e.company.bs,'"'))))})))):x)};a(288),a(289);function G(){return r.a.createElement(s.a,null,r.a.createElement(w,null,r.a.createElement(T,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/posts/"},r.a.createElement(U,null)),r.a.createElement(o.b,{exact:!0,path:"/posts/:id"},r.a.createElement(z,null)),r.a.createElement(o.b,{exact:!0,path:"/users/"},r.a.createElement(F,null)),r.a.createElement(o.b,{exact:!0,path:"/users/:id"},r.a.createElement(B,null)),r.a.createElement(o.a,{from:"/",to:"posts"})))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[148,1,2]]]);
//# sourceMappingURL=main.2ae964ca.chunk.js.map