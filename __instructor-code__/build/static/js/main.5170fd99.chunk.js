(this["webpackJsonpbody-parts-ebay"]=this["webpackJsonpbody-parts-ebay"]||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/logo.88666ab3.png"},42:function(e,t,a){e.exports=a(72)},51:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),o=a(10),s=a(20),l=a(16),u={user:null},m="SET_USER";var p=Object(l.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{user:t.payload};default:return e}})),d=(a(51),a(17)),v=a(18),h=a(22),f=a(19),E=a(21),b=a(40),g=a.n(b),w=a(9),O=a(13),y=a.n(O),j=a(25),k=a(12),x=a(26),S=a.n(x),C=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={email:"",password:"",username:"",register:!0},a.register=a.register.bind(Object(k.a)(a)),a.login=a.login.bind(Object(k.a)(a)),a}return Object(E.a)(t,e),Object(v.a)(t,[{key:"register",value:function(){var e=Object(j.a)(y.a.mark((function e(){var t,a,n,r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.email,n=t.password,r=t.username,e.next=3,S.a.post("/auth/register",{email:a,username:r,password:n});case 3:c=e.sent,this.props.setUser(c.data);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(j.a)(y.a.mark((function e(){var t,a,n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,a=t.email,n=t.password,e.next=3,S.a.post("/auth/login",{email:a,password:n});case 3:r=e.sent,this.props.setUser(r.data);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.username,c=t.password,i=t.register;return console.log(this.props),r.a.createElement("div",{className:"auth-container"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.register()}},i&&r.a.createElement("div",{className:"input-container"},r.a.createElement("label",null,"username"),r.a.createElement("input",{value:n,onChange:function(t){return e.setState({username:t.target.value})}})),r.a.createElement("div",{className:"input-container"},r.a.createElement("label",null,"email"),r.a.createElement("input",{type:"email",value:a,onChange:function(t){return e.setState({email:t.target.value})}})),r.a.createElement("div",{className:"input-container"},r.a.createElement("label",null,"password"),r.a.createElement("input",{type:"password",value:c,onChange:function(t){return e.setState({password:t.target.value})}})),r.a.createElement("button",null,i?"Register":"Login")),!i&&r.a.createElement("button",{onClick:function(){return e.setState({register:!0})}},"Go To Register"),i&&r.a.createElement("button",{onClick:function(){return e.setState({register:!1})}},"Go To Login"))}}]),t}(n.Component);var T={setUser:function(e){return{type:m,payload:e}}},N=Object(s.b)((function(e){return e}),T)(C),U=(a(70),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("img",{src:g.a})),r.a.createElement("nav",null,r.a.createElement(o.b,{activeClassName:"active",exact:!0,to:"/"},"Home"),r.a.createElement(o.b,{activeClassName:"active",to:"/store"},"Store"),r.a.createElement(o.b,{activeClassName:"active",to:"/profile"},"Profile")))),r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",component:N}),r.a.createElement(w.a,{exact:!0,path:"/store",render:function(){return r.a.createElement("div",null,"Store")}}),r.a.createElement(w.a,{exact:!0,path:"/profile",render:function(){return r.a.createElement("div",null,"Profile")}}),r.a.createElement(w.a,{exact:!0,path:"*",render:function(){return r.a.createElement("div",null,"GET THAT SPOOOKY BUTT OUTTA HERE!!!")}})))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(s.a,{store:p},r.a.createElement(o.a,null,r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.5170fd99.chunk.js.map