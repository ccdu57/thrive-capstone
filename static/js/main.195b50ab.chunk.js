(this["webpackJsonpthrive-capstone"]=this["webpackJsonpthrive-capstone"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a.n(i),c=a(9),u=a(1),m=a(2),o=a(4),s=a(3),p=a(5),h=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Meal"),r.a.createElement("th",null,"Remove")))},b=function(e){var t=e.recipieData.map((function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.meal),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeRecipie(a)}},"Delete")))}));return r.a.createElement("tbody",null,t)},v=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.recipieData,a=e.removeRecipie;return r.a.createElement("table",null,r.a.createElement(h,null),r.a.createElement(b,{recipieData:t,removeRecipie:a}))}}]),t}(n.Component),E=a(8),d=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(E.a)({},n,r))},a.onFormSubmit=function(e){e.preventDefault(),a.props.handleSubmit(a.state),a.setState(a.initialState)},a.initialState={name:"",meal:""},a.state=a.initialState,a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.meal;return r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Meal"),r.a.createElement("input",{type:"text",name:"meal",value:a,onChange:this.handleChange}),r.a.createElement("button",{type:"submit"},"Submit"))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={recipies:[]},a.removeRecipie=function(e){var t=a.state.recipies;a.setState({recipies:t.filter((function(t,a){return a!==e}))})},a.handleSubmit=function(e){a.setState({recipies:[].concat(Object(c.a)(a.state.recipies),[e])})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.recipies;return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Thrive Admin Panel"),r.a.createElement("p",null,"Admins can add recipies here."),r.a.createElement(v,{recipieData:e,removeRecipie:this.removeRecipie}),r.a.createElement("h3",null,"Add New"),r.a.createElement(d,{handleSubmit:this.handleSubmit}))}}]),t}(n.Component);a(15);l.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.195b50ab.chunk.js.map