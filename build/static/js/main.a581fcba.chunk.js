(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(58)},30:function(e,t,a){},32:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(24),c=a.n(o),r=(a(30),a(6)),i=a(7),s=a(9),m=a(8),u=a(10),d=(a(32),a(60)),v=a(59),h=a(63),b=a(62),p=a(2),E=a(11),g=a.n(E),f=(n.Component,function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onChangeEventName=a.onChangeEventName.bind(Object(p.a)(Object(p.a)(a))),a.onChangeDate=a.onChangeDate.bind(Object(p.a)(Object(p.a)(a))),a.onChangeMeal=a.onChangeMeal.bind(Object(p.a)(Object(p.a)(a))),a.onChangeVenue=a.onChangeVenue.bind(Object(p.a)(Object(p.a)(a))),a.onSubmit=a.onSubmit.bind(Object(p.a)(Object(p.a)(a))),a.state={eventName:"",date:"",meal:"",venue:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/eventplan/edit/"+this.props.match.params.id).then(function(t){e.setState({eventName:t.data.eventName,date:t.data.date,meal:t.data.meal,venue:t.data.venue})}).catch(function(e){console.log(e)})}},{key:"onChangeEventName",value:function(e){this.setState({eventName:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e.target.value})}},{key:"onChangeMeal",value:function(e){this.setState({meal:e.target.value})}},{key:"onChangeVenue",value:function(e){this.setState({venue:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={eventName:this.state.eventName,date:this.state.date,meal:this.state.meal,venue:this.state.venue};g.a.post("http://localhost:4200/eventplan/update/"+this.props.match.params.id,t).then(function(e){return console.log(e.data)}),this.setState({eventName:"",date:"",meal:"",venue:""}),this.props.history.push("/index")}},{key:"render",value:function(){return l.a.createElement("div",{style:{marginTop:50}},l.a.createElement("h3",null,"Edit Event"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Edit Event Name:  "),l.a.createElement("input",{type:"text",value:this.state.eventName,className:"form-control",onChange:this.onChangeEventName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Edit Date: "),l.a.createElement("input",{type:"text",value:this.state.date,className:"form-control",onChange:this.onChangeDate})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Edit Meals: "),l.a.createElement("input",{type:"text",value:this.state.meal,className:"form-control",onChange:this.onChangeMeal})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Edit Venue: "),l.a.createElement("input",{type:"text",value:this.state.venue,className:"form-control",onChange:this.onChangeVenue})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Update Event",className:"btn btn-primary"}))))}}]),t}(n.Component)),N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).delete=a.delete.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"delete",value:function(){g.a.get("/eventplan/delete/"+this.props.obj._id).then(console.log("Deleted")).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null,this.props.obj._id),l.a.createElement("td",null,this.props.obj.eventName),l.a.createElement("td",null,this.props.obj.date),l.a.createElement("td",null,this.props.obj.meal),l.a.createElement("td",null,this.props.obj.venue),l.a.createElement("td",null,l.a.createElement(v.a,{to:"/edit/"+this.props.obj._id,className:"btn btn-primary"},"Edit")),l.a.createElement("td",null,l.a.createElement("button",{onClick:this.delete,className:"btn btn-danger"},"Delete")))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={eventPlans:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/eventplan").then(function(t){e.setState({eventPlans:t.data})}).catch(function(e){console.log(e)})}},{key:"tabRow",value:function(){return this.state.eventPlans.map(function(e,t){return l.a.createElement(N,{obj:e,key:t})})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"ID"),l.a.createElement("td",null,"Event Name"),l.a.createElement("td",null,"Date"),l.a.createElement("td",null,"Meal"),l.a.createElement("td",null,"Venue"))),l.a.createElement("tbody",null,this.tabRow())))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={eventName:"",date:"",meal:"",venue:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("/eventplan/event/"+this.props.match.params.id).then(function(t){e.setState({eventName:t.data.eventName,date:t.data.date,meal:t.data.meal,venue:t.data.venue})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"ID"),l.a.createElement("td",null,"Event Name"),l.a.createElement("td",null,"Date"),l.a.createElement("td",null,"Meal"),l.a.createElement("td",null,"Venue"),l.a.createElement("td",null,"Edit"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,this.props.match.params.id),l.a.createElement("td",null,this.state.eventName),l.a.createElement("td",null,this.state.date),l.a.createElement("td",null,this.state.meal),l.a.createElement("td",null,this.state.venue),l.a.createElement("td",null,l.a.createElement(v.a,{to:"/edit/"+this.props.match.params.id,className:"btn btn-primary"},"Edit"))))))}}]),t}(n.Component),O=a(61),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onChangeEventName=a.onChangeEventName.bind(Object(p.a)(Object(p.a)(a))),a.onChangeDate=a.onChangeDate.bind(Object(p.a)(Object(p.a)(a))),a.onChangeMeal=a.onChangeMeal.bind(Object(p.a)(Object(p.a)(a))),a.onChangeVenue=a.onChangeVenue.bind(Object(p.a)(Object(p.a)(a))),a.onSubmit=a.onSubmit.bind(Object(p.a)(Object(p.a)(a))),a.state={eventName:"",date:"",meal:"",venue:"",identity:"",toLink:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillUnmount",value:function(){this.isCancelled=!0}},{key:"onChangeEventName",value:function(e){this.setState({eventName:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e.target.value})}},{key:"onChangeMeal",value:function(e){this.setState({meal:e.target.value})}},{key:"onChangeVenue",value:function(e){this.setState({venue:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={eventName:this.state.eventName,date:this.state.date,meal:this.state.meal,venue:this.state.venue};g.a.post("/eventplan/add",a).then(function(e){console.log(e.data.msg+", "+e.data.id),!t.isCancelled&&t.setState({identity:e.data.id}),t.setState({toLink:!0})}),console.log("event name is ".concat(this.state.eventName,", date is ").concat(this.state.date,", meals are ").concat(this.state.meal,", venue is ").concat(this.state.venue))}},{key:"render",value:function(){return!0===this.state.toLink?l.a.createElement(O.a,{to:"/event/"+this.state.identity}):l.a.createElement("div",{style:{marginTop:50}},l.a.createElement("h3",null,"Add New Event"),l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Add Event Name:  "),l.a.createElement("input",{type:"text",value:this.state.eventName,className:"form-control",onChange:this.onChangeEventName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Add Date: "),l.a.createElement("input",{type:"text",value:this.state.date,className:"form-control",onChange:this.onChangeDate})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Add Meals: "),l.a.createElement("input",{type:"text",value:this.state.meal,className:"form-control",onChange:this.onChangeMeal})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Add Venue: "),l.a.createElement("input",{type:"text",value:this.state.venue,className:"form-control",onChange:this.onChangeVenue})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"submit",value:"Add Event",className:"btn btn-primary"}))))}}]),t}(n.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="Awesome Event Planner"}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand"},"Awesome Event Planner"),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(v.a,{to:"/",className:"nav-link"},"Home")),l.a.createElement("li",null,l.a.createElement(v.a,{to:"/createlink",className:"nav-link"},"Create")),l.a.createElement("li",null,l.a.createElement(v.a,{to:"/index",className:"nav-link"},"Index")),l.a.createElement("li",null,l.a.createElement(v.a,{to:"/edit/:id",className:"nav-link"},"Edit"))))),l.a.createElement(h.a,null,l.a.createElement(b.a,{path:"/edit/:id",component:f}),l.a.createElement(b.a,{exact:!0,path:"/index",component:j}),l.a.createElement(b.a,{exact:!0,path:"/event/:id",component:C}),l.a.createElement(b.a,{exact:!0,path:"/createlink",component:y}))))}}]),t}(n.Component),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(56);c.a.render(l.a.createElement(d.a,null,l.a.createElement(k,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");w?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):S(e)})}}()}},[[25,2,1]]]);
//# sourceMappingURL=main.a581fcba.chunk.js.map