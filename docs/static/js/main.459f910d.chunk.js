(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a.n(n),s=a(31),i=a.n(s),r=(a(94),a(95),a(13)),o=a(58),l=a.n(o),d=a(35),b=a.n(d),u=a.p+"static/media/check-square-solid.f3a42b26.svg",j=a.p+"static/media/snowboarding-solid.2c965320.svg",p=a.p+"static/media/th-list-solid.ac61fcb0.svg",O=a(19),m=a(1),f=a.n(m),h=a(9),x=a(2),v=a(83),_=a(25),g=a(38),y=Object(v.a)({apiKey:"AIzaSyClsqxQ3kKwx3zklxxkBqh-i2eE4Z_hh5g",authDomain:"list-todo-personal.firebaseapp.com",projectId:"list-todo-personal",storageBucket:"list-todo-personal.appspot.com",messagingSenderId:"756631768915",appId:"1:756631768915:web:26f4843ef4a2da96319ba6"}),k=Object(_.f)(),N=Object(g.b)(y),w="GET_TASKS",T="GET_TASK",D="ADD_TASK",C="SHOW_DOING",S="SHOW_DONE",P="SHOW_TO_DO",A="FILTER",B="HIDE_MODAL_LOGIN",E="GLOBAL_LOCAL_STORAGE",F="RESTORE_STATE";function I(e){return function(){var t=Object(x.a)(f.a.mark((function t(a){var n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(_.e)(Object(_.a)(Object(_.c)(k,e,"tasks"),"tasks"));case 3:n=t.sent,c=[],n.forEach((function(e){c.push(Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id}))})),a({type:w,payload:c}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}function L(e){return{type:P,payload:e}}function H(e){return{type:E,payload:e}}function G(){return{type:F,payload:[]}}var W=a(6);function R(){var e=Object(O.c)();function t(t){var a;"todo"===t.target.id?e(L()):"doing"===t.target.id?e({type:C,payload:a}):"done"===t.target.id&&e(function(e){return{type:S,payload:e}}())}return Object(W.jsxs)("div",{className:b.a.divPrincipal,children:[Object(W.jsxs)("div",{onClick:t,id:"todo",className:b.a.button,children:[Object(W.jsx)("img",{id:"todo",src:u,className:b.a.img,alt:"todo"}),Object(W.jsx)("span",{id:"todo",className:b.a.span,children:"To Do"})]}),Object(W.jsxs)("div",{onClick:t,id:"doing",className:b.a.button,children:[Object(W.jsx)("img",{id:"doing",src:j,className:b.a.img,alt:"doing"}),Object(W.jsx)("span",{id:"doing",className:b.a.span,children:"Doing"})]}),Object(W.jsxs)("div",{onClick:t,id:"done",className:b.a.button,children:[Object(W.jsx)("img",{id:"done",src:p,className:b.a.img,alt:"done"}),Object(W.jsx)("span",{id:"done",className:b.a.span,children:"Done"})]})]})}var z=a(78),M=a.n(z),q=a(50),J=a.n(q);var K=Object(O.b)((function(e){return{type:e.type}}),(function(e){return{filter:function(t){return e({type:A,payload:t})}}}))((function(e){function t(t){e.filter([e.type,t.target.name])}return Object(W.jsxs)("div",{className:J.a.divPrincipal,children:[Object(W.jsx)("button",{onClick:t,name:"facultad",className:J.a.button,children:"Facultad"}),Object(W.jsx)("button",{onClick:t,name:"trabajo",className:J.a.button,children:"Trabajo"}),Object(W.jsx)("button",{onClick:t,name:"proyectos",className:J.a.button,children:"Proyectos"}),Object(W.jsx)("button",{onClick:t,name:"salud",className:J.a.button,children:"Salud"})]})})),U=a(51),V=a.n(U),Y=a.p+"static/media/facultad.31ab4286.svg",Z=a.p+"static/media/trabajo.03a61b54.svg",Q=a.p+"static/media/proyectos.beca8a53.svg",X=a.p+"static/media/salud.5ae2eec8.svg",$=a(39);function ee(){var e=Object(O.d)((function(e){return e})).tasksShows,t=Object(O.c)();return Object(n.useEffect)((function(){t(L())}),[t]),Object(W.jsx)("div",{className:V.a.divPrincipal,children:null===e||void 0===e?void 0:e.map((function(e,t){return Object(W.jsx)($.b,{className:V.a.link,to:"Details/"+e.id,children:Object(W.jsxs)("div",{className:V.a.card,children:[Object(W.jsx)("span",{className:V.a.spanCard,children:e.title},"span"+t),Object(W.jsx)("img",{className:V.a.img,src:"Facultad"===e.type?Y:"Trabajo"===e.type?Z:"Salud"===e.type?X:Q,alt:""},"img"+t)]},"div"+t)},"link"+t)}))})}function te(){return Object(W.jsxs)("div",{className:M.a.divPrincipal,children:[Object(W.jsx)(K,{className:M.a.filters}),Object(W.jsx)(ee,{})]})}var ae=a(16),ne=a(84),ce=a(28),se=a.n(ce),ie=a(7);var re=function(e,t){var a=e+"GlobalStorage",c=function(e,t){var a=localStorage.getItem(e);return"undefined"===typeof a||"undefined"===a?t:JSON.parse(a)||t}(a,t),s=Object(O.d)((function(e){return e})),i=Object(O.d)((function(e){return e[a]})),r=Object(O.c)();c===t&&localStorage.setItem(a,JSON.stringify(c)),s.hasOwnProperty(a)||r(H(Object(ie.a)({},a,c))),Object(n.useEffect)((function(){var e=s[a];"undefined"!==typeof e&&"undefined"!==e&&localStorage.setItem(a,JSON.stringify(s[a]))}),[e,s,a,i]);var o=function(e){return r(H(Object(ie.a)({},a,e)))};return s[a]&&s[a][0]?[s[a],o]:[i,o]};var oe=function(){var e=re("user",""),t=Object(r.a)(e,2)[1],a=Object(O.c)(),n=function(){var e=Object(x.a)(f.a.mark((function e(n){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),c=new g.a,Object(g.c)(N,c).then((function(e){var n=g.a.credentialFromResult(e).accessToken,c=e.user,s=c.providerData[0],i={id:s.uid,userName:s.email,name:s.displayName,email:s.email,photo:s.photoURL,phone:s.phoneNumber?s.phoneNumber:"",verified:c.emailVerified,token:n};a({type:B,payload:!1}),a(I(s.uid)),t(i),se.a.fire({icon:"success",title:"You are logged succesfuly, enjoy your tools!",showConfirmButton:!0,timer:8500})})).catch((function(e){se.a.fire({icon:"error",title:"Something wrong, try again",showConfirmButton:!0,timer:8500}),console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(W.jsx)("div",{onClick:n,type:"button",className:"d-grid gap-2",children:Object(W.jsxs)("button",{className:"btn btn-success",children:[" login with google",Object(W.jsx)("div",{className:"btn btn-lg btn-github text-uppercase btn-outline col-lg-4",children:Object(W.jsx)(ne.a,{size:"30px"})})]})})},le=a(59),de=a.n(le),be=a(52),ue=a(89),je=a(60),pe=a(67),Oe=a(85),me=a(86),fe=a(14),he=["name"];function xe(e){e.name;var t=Object(ae.a)(e,he),a=re("user",""),c=Object(r.a)(a,2),s=c[0],i=c[1],o=Object(O.c)();Object(n.useEffect)((function(){var e=Object(g.b)(),t=e.currentUser;console.log(e.currentUser),console.log(e),console.log(t),t||i("")}),[]);var l=Object(O.d)((function(e){return e})).hideModalLogin,d=Object(n.useState)(!1),b=Object(r.a)(d,2),u=b[0],j=b[1],p=Object(fe.f)(),m=Object(n.useState)(!1),v=Object(r.a)(m,2),_=v[0],y=v[1];Object(n.useEffect)((function(){y(l),j(l)}),[l]);var k=function(){return y(!1)};function N(){return(N=Object(x.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(g.b)(),e.prev=1,e.next=4,Object(g.d)(t);case 4:se.a.fire({icon:"success",title:"You are logged out succesfuly, I hope see you soon again!",showConfirmButton:!0,timer:8500}),o(G()),i(""),j(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),se.a.fire({icon:"error",title:"Something wrong, try again",showConfirmButton:!0,timer:8500}),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return Object(W.jsxs)("div",{className:de.a.container,children:[Object(W.jsx)("button",{onClick:function(){return j(!0)},className:"me-2 btn",children:Object(W.jsx)(Oe.a,{size:"30px"})}),Object(W.jsxs)(je.a,Object(h.a)(Object(h.a)({show:u,onHide:function(){return j(!1)}},t),{},{children:[Object(W.jsx)(je.a.Header,{closeButton:!0,children:Object(W.jsx)(je.a.Title,{children:"Menu of tools"})}),Object(W.jsxs)(je.a.Body,{children:[Object(W.jsx)("div",{className:"d-grid gap-2",children:Object(W.jsxs)("button",{className:"btn btn-outline-success",onClick:function(){p("/personal-todo/add")},children:[Object(W.jsx)(me.a,{size:"30px"})," Add task"]})}),Object(W.jsxs)("div",{className:de.a.container_buttons_below+" d-grid gap-2",children:[s?Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)("button",{className:"btn btn-outline-secondary",onClick:function(){return N.apply(this,arguments)},children:[Object(W.jsx)(pe.b,{size:"25px",color:"#004D78"})," sign out"]})}):Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)("button",{className:"btn btn-outline-secondary",onClick:function(){return y(!0)},children:[Object(W.jsx)(pe.a,{size:"25px",color:"#004D78"})," sign in"]})}),Object(W.jsx)("p",{children:"Know developer"}),Object(W.jsx)("a",{className:de.a.container_buttons_below_button,href:"https://github.com/imanolcorimayo",rel:"noreferrer",target:"_blank",children:Object(W.jsx)("div",{className:"d-grid gap-2",children:Object(W.jsx)("button",{className:"btn btn-outline-secondary",children:"Git Hub"})})}),Object(W.jsx)("a",{className:de.a.container_buttons_below_button,href:"https://www.linkedin.com/in/imanolcorimayo/",rel:"noreferrer",target:"_blank",children:Object(W.jsx)("div",{className:"d-grid gap-2",children:Object(W.jsx)("button",{className:"btn btn-outline-secondary",children:"LinkedIn"})})})]}),Object(W.jsx)(W.Fragment,{children:Object(W.jsxs)(be.a,{show:_,onHide:k,animation:!1,children:[Object(W.jsx)(be.a.Header,{closeButton:!0,children:Object(W.jsx)(be.a.Title,{children:"Sign in to get access to functions"})}),Object(W.jsx)(be.a.Body,{children:Object(W.jsx)(oe,{})}),Object(W.jsx)(be.a.Footer,{children:Object(W.jsx)(ue.a,{variant:"secondary",onClick:k,children:"Close"})})]})})]})]}))]})}function ve(){var e=Object(O.d)((function(e){return e})),t=e.type,a=e.tasks,c=Object(O.c)(),s=re("user",""),i=Object(r.a)(s,1)[0];return Object(n.useEffect)((function(){c(L())}),[a,c]),Object(n.useEffect)((function(){if(i)return c(I(i.id))}),[c]),Object(W.jsxs)("div",{className:l.a.divPrincipal,children:[Object(W.jsxs)("div",{className:l.a.barTitle,children:[i?Object(W.jsxs)("div",{className:l.a.barTitle_profile,children:[Object(W.jsx)("img",{src:i.photo,alt:"img not found"}),Object(W.jsxs)("span",{children:[" ",i.name]})]}):Object(W.jsx)(W.Fragment,{children:Object(W.jsx)("span",{children:"Sign in on menu"})}),Object(W.jsx)("h1",{className:l.a.h1,children:"todo"===t?"To Do":"doing"===t?"Doing":"Done"}),Object(W.jsx)(xe,{placement:"end",name:"end"})]}),Object(W.jsx)(te,{}),Object(W.jsx)(R,{})]})}var _e=a(27),ge=a.n(_e);function ye(){var e=Object(O.c)(),t=Object(O.d)((function(e){return e})).task,a=re("user",""),c=Object(r.a)(a,1)[0],s=Object(fe.f)();Object(n.useEffect)((function(){console.log(t)}),[t]);var i=Object(fe.g)().id;function o(e){return l.apply(this,arguments)}function l(){return(l=Object(x.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(_.g)(Object(_.c)(Object(_.c)(k,c.id,"tasks"),"tasks",i),Object(h.a)(Object(h.a)({},t),{},{stateTask:a.target.name}));case 3:se.a.fire({icon:"success",title:"Status was changed succesfully to "+a.target.name,showConfirmButton:!0,timer:8500}),s("/personal-todo"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),se.a.fire({icon:"error",title:"Something wrong happened, please try again",showConfirmButton:!0,timer:8500}),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=Object(x.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se.a.fire({icon:"question",title:"\xbfAre you sure that you want delete this task?",input:"text",inputLabel:"We need confirm this action",inputPlaceholder:"Add any word to confirm"});case 2:if(t=e.sent,!t.value){e.next=16;break}return e.prev=5,e.next=8,Object(_.b)(Object(_.c)(Object(_.c)(k,c.id,"tasks"),"tasks",i));case 8:se.a.fire({icon:"success",title:"Task was deleted successfuly",showConfirmButton:!0,timer:8500}),s("/personal-todo"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),se.a.fire({icon:"error",title:"Something wrong happened, please try again",showConfirmButton:!0,timer:8500}),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[5,12]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){e(function(e,t){return function(){var a=Object(x.a)(f.a.mark((function a(n){var c,s;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(_.d)(Object(_.c)(Object(_.c)(k,t,"tasks"),"tasks",e));case 3:c=a.sent,s=c.exists()?c.data():"undefined task",n({type:T,payload:s}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(i,c.id))}),[e,i,c.id]),Object(W.jsxs)("div",{className:ge.a.divPrincipal,children:[Object(W.jsxs)("div",{className:ge.a.barTitle,children:[Object(W.jsx)($.b,{to:"/personal-todo",children:Object(W.jsx)("span",{className:ge.a.leftArrow,children:Object(W.jsx)("i",{className:"fas fa-angle-left"})})}),Object(W.jsxs)("span",{className:ge.a.title,children:["Title: ",null===t||void 0===t?void 0:t.title]}),Object(W.jsx)("img",{className:ge.a.img,src:"Facultad"===(null===t||void 0===t?void 0:t.type)?Y:"Trabajo"===(null===t||void 0===t?void 0:t.type)?Z:"Salud"===(null===t||void 0===t?void 0:t.type)?X:Q,alt:""})]}),Object(W.jsxs)("div",{className:ge.a.cuerpo,children:[Object(W.jsxs)("div",{className:ge.a.decription,children:[Object(W.jsx)("h2",{className:ge.a.h2,children:"Description"}),Object(W.jsx)("div",{className:ge.a.descriptionTextDiv,children:Object(W.jsx)("p",{className:ge.a.descriptionText,children:null===t||void 0===t?void 0:t.description})})]}),Object(W.jsxs)("div",{className:ge.a.buttons,children:[Object(W.jsx)("button",{onClick:o,name:"todo",className:ge.a.button+" btn btn-primary",children:"To Do"}),Object(W.jsx)("button",{onClick:o,name:"doing",className:ge.a.button+" btn btn-secondary",children:"Doing"}),Object(W.jsx)("button",{onClick:o,name:"done",className:ge.a.button+" btn btn-success",children:"Done"}),Object(W.jsx)("button",{onClick:function(){return d.apply(this,arguments)},name:"done",className:ge.a.button+" btn btn-danger",children:"Delete"})]})]})]})}var ke=a(43),Ne=a.n(ke),we=a(47);function Te(){var e=re("user",""),t=Object(r.a)(e,1)[0],a=Object(n.useState)({title:"",type:"",description:""}),c=Object(r.a)(a,2),s=c[0],i=c[1],o=Object(fe.f)();function l(){return(l=Object(x.a)(f.a.mark((function e(a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,Object(we.a)(Object(we.b)(Object(we.d)(k,t.id,"tasks"),"tasks"),Object(h.a)(Object(h.a)({},s),{},{stateTask:"todo"}));case 4:n=e.sent,console.log("Document written with ID: ",n.id),se.a.fire({icon:"success",title:"Success, new task created!",showConfirmButton:!0,timer:8500}),o("/personal-todo"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),se.a.fire({icon:"error",title:"Something wrong happened, please try again",showConfirmButton:!0,timer:8500}),console.error("Error adding document: ",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function d(e){i(Object(h.a)(Object(h.a)({},s),{},Object(ie.a)({},e.target.name,e.target.value)))}return Object(W.jsxs)("div",{className:Ne.a.divPrincipal,children:[Object(W.jsxs)("div",{className:Ne.a.barTitle,children:[Object(W.jsx)($.b,{to:"/personal-todo",children:Object(W.jsx)("span",{className:Ne.a.leftArrow,children:Object(W.jsx)("i",{className:"fas fa-angle-left"})})}),Object(W.jsx)("span",{className:Ne.a.title,children:"Add new task"})]}),Object(W.jsx)("form",{onSubmit:function(e){return l.apply(this,arguments)},children:Object(W.jsxs)("div",{className:Ne.a.body,children:[Object(W.jsxs)("div",{className:"mb-3",children:[Object(W.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:"Task title"}),Object(W.jsx)("input",{value:s.title,name:"title",onChange:d,type:"text",className:"form-control",id:"exampleFormControlInput1",placeholder:"Add title task",required:!0})]}),Object(W.jsxs)("div",{className:"mb-3",children:[Object(W.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",children:"Description"}),Object(W.jsx)("textarea",{value:s.description,onChange:d,name:"description",className:"form-control",id:"exampleFormControlTextarea1",rows:"3"})]}),Object(W.jsx)("label",{htmlFor:"exampleDataList",className:"form-label",children:"Type of task"}),Object(W.jsx)("input",{onChange:d,value:s.type,name:"type",className:"form-control",list:"datalistOptions",id:"exampleDataList",placeholder:"Select one...",required:!0}),Object(W.jsxs)("datalist",{id:"datalistOptions",children:[Object(W.jsx)("option",{value:"Facultad"}),Object(W.jsx)("option",{value:"Trabajo"}),Object(W.jsx)("option",{value:"Proyectos"}),Object(W.jsx)("option",{value:"Salud"})]}),Object(W.jsx)("button",{type:"submit",name:"done",className:Ne.a.button+" btn btn-success",children:"Done"})]})})]})}var De=function(){return Object(W.jsx)("div",{children:Object(W.jsxs)(fe.c,{children:[Object(W.jsx)(fe.a,{path:"/personal-todo/",element:Object(W.jsx)(ve,{})}),Object(W.jsx)(fe.a,{path:"/personal-todo/Details/:id",element:Object(W.jsx)(ye,{})}),Object(W.jsx)(fe.a,{path:"/personal-todo/add",element:Object(W.jsx)(Te,{})})]})})},Ce=a(69),Se=a(87),Pe={tasks:[],tasksShows:[],task:{},type:"todo",hideModalLogin:""};var Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;if(t.type===w)return Object(h.a)(Object(h.a)({},e),{},{tasks:t.payload});if(t.type===T)return Object(h.a)(Object(h.a)({},e),{},{task:t.payload});if(t.type===D);else{if(t.type===P){var a=e.tasks.filter((function(e){return"todo"===e.stateTask}));return Object(h.a)(Object(h.a)({},e),{},{type:"todo",tasksShows:a})}if(t.type===C){var n=e.tasks.filter((function(e){return e.stateTask+""==="doing"}));return Object(h.a)(Object(h.a)({},e),{},{type:"doing",tasksShows:n})}if(t.type===S){var c=e.tasks.filter((function(e){return e.stateTask+""==="done"}));return Object(h.a)(Object(h.a)({},e),{},{type:"done",tasksShows:c})}if(t.type===A){var s=e.tasks.filter((function(e){return e.stateTask+""===""+t.payload[0]&&e.type.toLocaleLowerCase()+""===""+t.payload[1]}));return Object(h.a)(Object(h.a)({},e),{},{tasksShows:s})}if(t.type===B)return Object(h.a)(Object(h.a)({},e),{},{hideModalLogin:t.payload});if(t.type===E)return Object(h.a)(Object(h.a)({},e),t.payload);if(t.type===F)return Pe}return e},Be=a(88),Ee=Object(Ce.createStore)(Ae,Object(Se.composeWithDevTools)(Object(Ce.applyMiddleware)(Be.a)));i.a.render(Object(W.jsx)(c.a.StrictMode,{children:Object(W.jsx)(O.a,{store:Ee,children:Object(W.jsx)($.a,{children:Object(W.jsx)(De,{})})})}),document.getElementById("root"))},27:function(e,t,a){e.exports={divPrincipal:"Details_divPrincipal__2y4FU",barTitle:"Details_barTitle__OkpFH",leftArrow:"Details_leftArrow__2LXzI",title:"Details_title__29aDi",cuerpo:"Details_cuerpo__1_EcQ",img:"Details_img__1qIhJ",buttons:"Details_buttons__ojd8g",button:"Details_button__33_0F",decription:"Details_decription__3ntWw",h2:"Details_h2__CWfND",descriptionText:"Details_descriptionText__3sWUX",descriptionTextDiv:"Details_descriptionTextDiv__2PS86"}},35:function(e,t,a){e.exports={divPrincipal:"NavBar_divPrincipal__3UVWV",button:"NavBar_button__2YMhT",img:"NavBar_img__2EjOe",span:"NavBar_span__AOlqR"}},43:function(e,t,a){e.exports={divPrincipal:"Add_divPrincipal__1R6Q9",barTitle:"Add_barTitle__ixGhI",body:"Add_body__GjPaB",leftArrow:"Add_leftArrow__Ds3YN",title:"Add_title__1_s8G",button:"Add_button__2W1Sz"}},50:function(e,t,a){e.exports={divPrincipal:"Filters_divPrincipal__3PmyY",button:"Filters_button__RpsH8"}},51:function(e,t,a){e.exports={divPrincipal:"Cards_divPrincipal__CVsON",card:"Cards_card__13-kE",spanCard:"Cards_spanCard__vFZu0",img:"Cards_img__E0V7R",link:"Cards_link__20cp_"}},58:function(e,t,a){e.exports={divPrincipal:"Home_divPrincipal__3kPRF",barTitle:"Home_barTitle__3xWKk",barTitle_profile:"Home_barTitle_profile__dzDpf"}},59:function(e,t,a){e.exports={container_buttons_below:"Menu_container_buttons_below__1xUtV",container_buttons_below_button:"Menu_container_buttons_below_button__ZhZJ4"}},78:function(e,t,a){e.exports={divPrincipal:"Body_divPrincipal__1_GBW"}},94:function(e,t,a){},95:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.459f910d.chunk.js.map