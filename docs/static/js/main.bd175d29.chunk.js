(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{26:function(e,t,a){e.exports={divPrincipal:"Details_divPrincipal__2y4FU",barTitle:"Details_barTitle__OkpFH",leftArrow:"Details_leftArrow__2LXzI",title:"Details_title__29aDi",cuerpo:"Details_cuerpo__1_EcQ",img:"Details_img__1qIhJ",buttons:"Details_buttons__ojd8g",button:"Details_button__33_0F",decription:"Details_decription__3ntWw",h2:"Details_h2__CWfND",descriptionText:"Details_descriptionText__3sWUX",descriptionTextDiv:"Details_descriptionTextDiv__2PS86"}},34:function(e,t,a){e.exports={divPrincipal:"NavBar_divPrincipal__3UVWV",button:"NavBar_button__2YMhT",img:"NavBar_img__2EjOe",span:"NavBar_span__AOlqR"}},42:function(e,t,a){e.exports={divPrincipal:"Add_divPrincipal__1R6Q9",barTitle:"Add_barTitle__ixGhI",body:"Add_body__GjPaB",leftArrow:"Add_leftArrow__Ds3YN",title:"Add_title__1_s8G",button:"Add_button__2W1Sz"}},48:function(e,t,a){e.exports={divPrincipal:"Filters_divPrincipal__3PmyY",button:"Filters_button__RpsH8"}},49:function(e,t,a){e.exports={divPrincipal:"Cards_divPrincipal__CVsON",card:"Cards_card__13-kE",spanCard:"Cards_spanCard__vFZu0",img:"Cards_img__E0V7R",link:"Cards_link__20cp_"}},57:function(e,t,a){e.exports={divPrincipal:"Home_divPrincipal__3kPRF",barTitle:"Home_barTitle__3xWKk",barTitle_profile:"Home_barTitle_profile__dzDpf"}},58:function(e,t,a){e.exports={container_buttons_below:"Menu_container_buttons_below__1xUtV",container_buttons_below_button:"Menu_container_buttons_below_button__ZhZJ4"}},76:function(e,t,a){e.exports={divPrincipal:"Body_divPrincipal__1_GBW"}},89:function(e,t,a){},90:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a.n(n),s=a(30),i=a.n(s),r=(a(89),a(90),a(13)),o=a(57),l=a.n(o),d=a(34),b=a.n(d),j=a.p+"static/media/check-square-solid.f3a42b26.svg",u=a.p+"static/media/snowboarding-solid.2c965320.svg",p=a.p+"static/media/th-list-solid.ac61fcb0.svg",O=a(19),m=a(1),f=a.n(m),h=a(9),x=a(2),v=a(60),_=a(27),g=a(37),y=Object(v.a)({apiKey:"AIzaSyClsqxQ3kKwx3zklxxkBqh-i2eE4Z_hh5g",authDomain:"list-todo-personal.firebaseapp.com",projectId:"list-todo-personal",storageBucket:"list-todo-personal.appspot.com",messagingSenderId:"756631768915",appId:"1:756631768915:web:26f4843ef4a2da96319ba6"}),N=Object(_.f)(),k=Object(g.b)(y),w="GET_TASKS",D="GET_TASK",T="ADD_TASK",S="SHOW_DOING",C="SHOW_DONE",P="SHOW_TO_DO",A="FILTER",F="HIDE_MODAL_LOGIN",I="GLOBAL_LOCAL_STORAGE";function E(e){return{type:P,payload:e}}function B(e){return{type:I,payload:e}}var L=a(6);function H(){var e=Object(O.c)();function t(t){var a;"todo"===t.target.id?e(E()):"doing"===t.target.id?e({type:S,payload:a}):"done"===t.target.id&&e(function(e){return{type:C,payload:e}}())}return Object(L.jsxs)("div",{className:b.a.divPrincipal,children:[Object(L.jsxs)("div",{onClick:t,id:"todo",className:b.a.button,children:[Object(L.jsx)("img",{id:"todo",src:j,className:b.a.img,alt:"todo"}),Object(L.jsx)("span",{id:"todo",className:b.a.span,children:"To Do"})]}),Object(L.jsxs)("div",{onClick:t,id:"doing",className:b.a.button,children:[Object(L.jsx)("img",{id:"doing",src:u,className:b.a.img,alt:"doing"}),Object(L.jsx)("span",{id:"doing",className:b.a.span,children:"Doing"})]}),Object(L.jsxs)("div",{onClick:t,id:"done",className:b.a.button,children:[Object(L.jsx)("img",{id:"done",src:p,className:b.a.img,alt:"done"}),Object(L.jsx)("span",{id:"done",className:b.a.span,children:"Done"})]})]})}var z=a(76),G=a.n(z),W=a(48),q=a.n(W);var K=Object(O.b)((function(e){return{type:e.type}}),(function(e){return{filter:function(t){return e({type:A,payload:t})}}}))((function(e){function t(t){e.filter([e.type,t.target.name])}return Object(L.jsxs)("div",{className:q.a.divPrincipal,children:[Object(L.jsx)("button",{onClick:t,name:"facultad",className:q.a.button,children:"Facultad"}),Object(L.jsx)("button",{onClick:t,name:"trabajo",className:q.a.button,children:"Trabajo"}),Object(L.jsx)("button",{onClick:t,name:"proyectos",className:q.a.button,children:"Proyectos"}),Object(L.jsx)("button",{onClick:t,name:"salud",className:q.a.button,children:"Salud"})]})})),M=a(49),R=a.n(M),J=a.p+"static/media/facultad.31ab4286.svg",U=a.p+"static/media/trabajo.03a61b54.svg",V=a.p+"static/media/proyectos.beca8a53.svg",Z=a.p+"static/media/salud.5ae2eec8.svg",Q=a(38);function Y(e){var t=Object(O.d)((function(e){return e})).tasksShows,a=Object(O.c)();return Object(n.useEffect)((function(){a(E())}),[a]),Object(L.jsx)("div",{className:R.a.divPrincipal,children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(L.jsx)(Q.b,{className:R.a.link,to:"Details/"+e.id,children:Object(L.jsxs)("div",{className:R.a.card,children:[Object(L.jsx)("span",{className:R.a.spanCard,children:e.title},"span"+t),Object(L.jsx)("img",{className:R.a.img,src:"Facultad"===e.type?J:"Trabajo"===e.type?U:"Salud"===e.type?Z:V,alt:""},"img"+t)]},"div"+t)},"link"+t)}))})}function X(){return Object(L.jsxs)("div",{className:G.a.divPrincipal,children:[Object(L.jsx)(K,{className:G.a.filters}),Object(L.jsx)(Y,{})]})}var $=a(16),ee=a(80),te=a(7);var ae=function(e,t){var a=e+"GlobalStorage",c=function(e,t){var a=window.localStorage.getItem(e);return"undefined"===typeof a?t:JSON.parse(a)||t}(a,t),s=Object(O.d)((function(e){return e})),i=Object(O.d)((function(e){return e[a]})),r=Object(O.c)();c===t&&localStorage.setItem(a,JSON.stringify(c)),s.hasOwnProperty(a)||r(B(Object(te.a)({},a,c))),Object(n.useEffect)((function(){if("undefined"===typeof i)return localStorage.setItem(a,JSON.stringify(null));localStorage.setItem(a,JSON.stringify(i))}),[e,s,i,a]);var o=function(e){return r(B(Object(te.a)({},a,e)))};return s[a]&&s[a][0]?[s[a],o]:[i,o]};var ne=function(){var e=ae("user",""),t=Object(r.a)(e,2)[1],a=Object(O.c)(),n=function(){var e=Object(x.a)(f.a.mark((function e(n){var c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),c=new g.a,Object(g.c)(k,c).then((function(e){var n=g.a.credentialFromResult(e).accessToken,c=e.user,s=c.providerData[0],i={userName:s.email,name:s.displayName,email:s.email,photo:s.photoURL,phone:s.phoneNumber?s.phoneNumber:"",verified:c.emailVerified,token:n};a({type:F,payload:!1}),t(i)})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(L.jsx)("div",{onClick:n,type:"button",className:"d-grid gap-2",children:Object(L.jsxs)("button",{className:"btn btn-success",children:[" login with google",Object(L.jsx)("div",{className:"btn btn-lg btn-github text-uppercase btn-outline col-lg-4",children:Object(L.jsx)(ee.a,{size:"30px"})})]})})},ce=a(58),se=a.n(ce),ie=a(50),re=a(84),oe=a(59),le=a(67),de=a(81),be=a(82),je=a(14),ue=["name"];function pe(e){e.name;var t=Object($.a)(e,ue),a=ae("user",""),c=Object(r.a)(a,2),s=c[0],i=c[1];Object(n.useEffect)((function(){var e=Object(g.b)(),t=e.currentUser;console.log(e.currentUser),console.log(e),console.log(t),t||i("")}),[]);var o=Object(O.d)((function(e){return e})).hideModalLogin,l=Object(n.useState)(!1),d=Object(r.a)(l,2),b=d[0],j=d[1],u=Object(je.f)(),p=Object(n.useState)(!1),m=Object(r.a)(p,2),v=m[0],_=m[1];Object(n.useEffect)((function(){_(o),j(o)}),[o]);var y=function(){return _(!1)};function N(){return(N=Object(x.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(g.b)(),e.prev=1,e.next=4,Object(g.d)(t);case 4:i(""),j(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}return Object(L.jsxs)("div",{className:se.a.container,children:[Object(L.jsx)("button",{onClick:function(){return j(!0)},className:"me-2 btn",children:Object(L.jsx)(de.a,{size:"30px"})}),Object(L.jsxs)(oe.a,Object(h.a)(Object(h.a)({show:b,onHide:function(){return j(!1)}},t),{},{children:[Object(L.jsx)(oe.a.Header,{closeButton:!0,children:Object(L.jsx)(oe.a.Title,{children:"Menu of tools"})}),Object(L.jsxs)(oe.a.Body,{children:[Object(L.jsx)("div",{className:"d-grid gap-2",children:Object(L.jsxs)("button",{className:"btn btn-outline-success",onClick:function(){u("/personal-todo/add")},children:[Object(L.jsx)(be.a,{size:"30px"})," Add task"]})}),Object(L.jsxs)("div",{className:se.a.container_buttons_below+" d-grid gap-2",children:[s?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("p",{children:"Sign out"}),Object(L.jsxs)("button",{className:"btn btn-outline-secondary",onClick:function(){return N.apply(this,arguments)},children:[Object(L.jsx)(le.b,{size:"25px",color:"#004D78"})," sign out"]})]}):Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("p",{children:"Sign in"}),Object(L.jsxs)("button",{className:"btn btn-outline-secondary",onClick:function(){return _(!0)},children:[Object(L.jsx)(le.a,{size:"25px",color:"#004D78"})," sign in"]})]}),Object(L.jsx)("p",{children:"Know developer"}),Object(L.jsx)("a",{className:se.a.container_buttons_below_button,href:"https://github.com/imanolcorimayo",rel:"noreferrer",target:"_blank",children:Object(L.jsx)("div",{className:"d-grid gap-2",children:Object(L.jsx)("button",{className:"btn btn-outline-secondary",onClick:"https://github.com/imanolcorimayo",children:"Git Hub"})})}),Object(L.jsx)("a",{className:se.a.container_buttons_below_button,href:"https://www.linkedin.com/in/imanolcorimayo/",rel:"noreferrer",target:"_blank",children:Object(L.jsx)("div",{className:"d-grid gap-2",children:Object(L.jsx)("button",{className:"btn btn-outline-secondary",onClick:"https://github.com/imanolcorimayo",children:"LinkedIn"})})})]}),Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(ie.a,{show:v,onHide:y,animation:!1,children:[Object(L.jsx)(ie.a.Header,{closeButton:!0,children:Object(L.jsx)(ie.a.Title,{children:"Sign in to get access to functions"})}),Object(L.jsx)(ie.a.Body,{children:Object(L.jsx)(ne,{})}),Object(L.jsx)(ie.a.Footer,{children:Object(L.jsx)(re.a,{variant:"secondary",onClick:y,children:"Close"})})]})})]})]}))]})}function Oe(){var e=Object(O.d)((function(e){return e})),t=e.type,a=e.tasks,c=Object(O.c)(),s=ae("user",""),i=Object(r.a)(s,1)[0];return Object(n.useEffect)((function(){c(E())}),[a,c]),Object(n.useEffect)((function(){c(function(){var e=Object(x.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(_.e)(Object(_.a)(N,"tasks"));case 3:a=e.sent,n=[],a.forEach((function(e){n.push(Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id}))})),t({type:w,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[c]),Object(L.jsxs)("div",{className:l.a.divPrincipal,children:[Object(L.jsxs)("div",{className:l.a.barTitle,children:[i?Object(L.jsxs)("div",{className:l.a.barTitle_profile,children:[Object(L.jsx)("img",{src:i.photo,alt:"img not found"}),Object(L.jsxs)("span",{children:[" ",i.name]})]}):Object(L.jsx)(L.Fragment,{children:Object(L.jsx)("span",{children:"Sign in on menu"})}),Object(L.jsx)("h1",{className:l.a.h1,children:"todo"===t?"To Do":"doing"===t?"Doing":"Done"}),Object(L.jsx)(pe,{placement:"end",name:"end"})]}),Object(L.jsx)(X,{}),Object(L.jsx)(H,{})]})}var me=a(26),fe=a.n(me);v.a({apiKey:"AIzaSyClsqxQ3kKwx3zklxxkBqh-i2eE4Z_hh5g",authDomain:"list-todo-personal.firebaseapp.com",projectId:"list-todo-personal",storageBucket:"list-todo-personal.appspot.com",messagingSenderId:"756631768915",appId:"1:756631768915:web:26f4843ef4a2da96319ba6"});var he=Object(_.f)();function xe(){var e=Object(O.c)(),t=Object(O.d)((function(e){return e})).task,a=Object(je.f)();Object(n.useEffect)((function(){console.log(t)}),[t]);var c=Object(je.g)().id;function s(e){return i.apply(this,arguments)}function i(){return(i=Object(x.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(_.g)(Object(_.c)(he,"tasks",c),Object(h.a)(Object(h.a)({},t),{},{stateTask:n.target.name}));case 3:a("/personal-todo"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function r(){return(r=Object(x.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(_.b)(Object(_.c)(he,"tasks",c));case 3:a("/personal-todo"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){e(function(e){return function(){var t=Object(x.a)(f.a.mark((function t(a){var n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(_.d)(Object(_.c)(N,"tasks",e));case 3:n=t.sent,c=n.exists()?n.data():"undefined task",a({type:D,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(c))}),[e,c]),Object(L.jsxs)("div",{className:fe.a.divPrincipal,children:[Object(L.jsxs)("div",{className:fe.a.barTitle,children:[Object(L.jsx)(Q.b,{to:"/personal-todo",children:Object(L.jsx)("span",{className:fe.a.leftArrow,children:Object(L.jsx)("i",{className:"fas fa-angle-left"})})}),Object(L.jsxs)("span",{className:fe.a.title,children:["Title: ",null===t||void 0===t?void 0:t.title]}),Object(L.jsx)("img",{className:fe.a.img,src:"Facultad"===(null===t||void 0===t?void 0:t.type)?J:"Trabajo"===(null===t||void 0===t?void 0:t.type)?U:"Salud"===(null===t||void 0===t?void 0:t.type)?Z:V,alt:""})]}),Object(L.jsxs)("div",{className:fe.a.cuerpo,children:[Object(L.jsxs)("div",{className:fe.a.decription,children:[Object(L.jsx)("h2",{className:fe.a.h2,children:"Description"}),Object(L.jsx)("div",{className:fe.a.descriptionTextDiv,children:Object(L.jsx)("p",{className:fe.a.descriptionText,children:null===t||void 0===t?void 0:t.description})})]}),Object(L.jsxs)("div",{className:fe.a.buttons,children:[Object(L.jsx)("button",{onClick:s,name:"todo",className:fe.a.button+" btn btn-primary",children:"To Do"}),Object(L.jsx)("button",{onClick:s,name:"doing",className:fe.a.button+" btn btn-secondary",children:"Doing"}),Object(L.jsx)("button",{onClick:s,name:"done",className:fe.a.button+" btn btn-success",children:"Done"}),Object(L.jsx)("button",{onClick:function(){return r.apply(this,arguments)},name:"done",className:fe.a.button+" btn btn-danger",children:"Delete"})]})]})]})}var ve=a(42),_e=a.n(ve),ge=a(51);function ye(){var e=Object(n.useState)({title:"",type:"",description:""}),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(je.f)();function i(){return(i=Object(x.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,Object(ge.a)(Object(ge.b)(N,"tasks"),Object(h.a)(Object(h.a)({},a),{},{stateTask:"todo"}));case 4:n=e.sent,console.log("Document written with ID: ",n.id),s("/personal-todo"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error("Error adding document: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function o(e){c(Object(h.a)(Object(h.a)({},a),{},Object(te.a)({},e.target.name,e.target.value)))}return Object(L.jsxs)("div",{className:_e.a.divPrincipal,children:[Object(L.jsxs)("div",{className:_e.a.barTitle,children:[Object(L.jsx)(Q.b,{to:"/personal-todo",children:Object(L.jsx)("span",{className:_e.a.leftArrow,children:Object(L.jsx)("i",{className:"fas fa-angle-left"})})}),Object(L.jsx)("span",{className:_e.a.title,children:"Add new task"})]}),Object(L.jsx)("form",{onSubmit:function(e){return i.apply(this,arguments)},children:Object(L.jsxs)("div",{className:_e.a.body,children:[Object(L.jsxs)("div",{className:"mb-3",children:[Object(L.jsx)("label",{htmlFor:"exampleFormControlInput1",className:"form-label",children:"Task title"}),Object(L.jsx)("input",{value:a.title,name:"title",onChange:o,type:"text",className:"form-control",id:"exampleFormControlInput1",placeholder:"Add title task",required:!0})]}),Object(L.jsxs)("div",{className:"mb-3",children:[Object(L.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",children:"Description"}),Object(L.jsx)("textarea",{value:a.description,onChange:o,name:"description",className:"form-control",id:"exampleFormControlTextarea1",rows:"3"})]}),Object(L.jsx)("label",{htmlFor:"exampleDataList",className:"form-label",children:"Type of task"}),Object(L.jsx)("input",{onChange:o,value:a.type,name:"type",className:"form-control",list:"datalistOptions",id:"exampleDataList",placeholder:"Select one...",required:!0}),Object(L.jsxs)("datalist",{id:"datalistOptions",children:[Object(L.jsx)("option",{value:"Facultad"}),Object(L.jsx)("option",{value:"Trabajo"}),Object(L.jsx)("option",{value:"Proyectos"}),Object(L.jsx)("option",{value:"Salud"})]}),Object(L.jsx)("button",{type:"submit",name:"done",className:_e.a.button+" btn btn-success",children:"Done"})]})})]})}var Ne=function(){return Object(L.jsx)("div",{children:Object(L.jsxs)(je.c,{children:[Object(L.jsx)(je.a,{path:"/personal-todo/",element:Object(L.jsx)(Oe,{})}),Object(L.jsx)(je.a,{path:"/personal-todo/Details/:id",element:Object(L.jsx)(xe,{})}),Object(L.jsx)(je.a,{path:"/personal-todo/add",element:Object(L.jsx)(ye,{})})]})})},ke=a(77),we={tasks:[],tasksShows:[],task:{},type:"todo",hideModalLogin:""};var De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;if(t.type===w)return Object(h.a)(Object(h.a)({},e),{},{tasks:t.payload});if(t.type===D)return Object(h.a)(Object(h.a)({},e),{},{task:t.payload});if(t.type===T);else{if(t.type===P){var a=e.tasks.filter((function(e){return"todo"===e.stateTask}));return Object(h.a)(Object(h.a)({},e),{},{type:"todo",tasksShows:a})}if(t.type===S){var n=e.tasks.filter((function(e){return e.stateTask+""==="doing"}));return Object(h.a)(Object(h.a)({},e),{},{type:"doing",tasksShows:n})}if(t.type===C){var c=e.tasks.filter((function(e){return e.stateTask+""==="done"}));return Object(h.a)(Object(h.a)({},e),{},{type:"done",tasksShows:c})}if(t.type===A){var s=e.tasks.filter((function(e){return e.stateTask+""===""+t.payload[0]&&e.type.toLocaleLowerCase()+""===""+t.payload[1]}));return Object(h.a)(Object(h.a)({},e),{},{tasksShows:s})}if(t.type===F)return Object(h.a)(Object(h.a)({},e),{},{hideModalLogin:t.payload});if(t.type===I)return Object(h.a)(Object(h.a)({},e),t.payload)}return e},Te=a(83),Se=Object(ke.b)(De,Object(ke.a)(Te.a));i.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(O.a,{store:Se,children:Object(L.jsx)(Q.a,{children:Object(L.jsx)(Ne,{})})})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.bd175d29.chunk.js.map