(this.webpackJsonpexcercise=this.webpackJsonpexcercise||[]).push([[0],{33:function(e,t,a){e.exports=a(50)},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=(a(38),a(9)),o=a(10),s=a(12),u=a(11),m=(a(39),a(40),a(8)),d=a(3),p=a(17),b=a.n(p),E=a(25),h=r.a.createContext(),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:null},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://samplerspubcontent.blob.core.windows.net/public/properties.json");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState((function(e,t){return{data:a}}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(h.Provider,{value:this.state.data},r.a.createElement("div",{className:"container-fluid"},this.props.children))}}]),a}(n.Component);h.Consumer,a(42);function v(e){var t=e.headers;return r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e,t){return r.a.createElement("th",{key:t,scope:"col"},e)}))))}var y=function(e){return r.a.createElement("tr",{className:"centeredv-content"},r.a.createElement("td",null,r.a.createElement("img",{src:e.mainImageUrl,className:e.mainImageUrl&&"image-property",alt:"property"})),r.a.createElement("td",null,e.fullAdress),r.a.createElement("td",null,e.yearBuilt),r.a.createElement("td",null,"$"+e.priceFormatted),r.a.createElement("td",null,"$"+e.rentFormmated),r.a.createElement("td",null,e.grossField+"%"),r.a.createElement("td",null,r.a.createElement(m.b,{to:"/detail/".concat(e.id)},r.a.createElement("button",{type:"button",className:"btn btn-outline-success"},"See Details"))))};function g(){return r.a.createElement("div",null,"Loading...")}var j=a(21);var O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US";return new Intl.NumberFormat(t,{minimumFractionDigits:2}).format(e)};var N=function(e,t){var a=t.financial,n=t.address,c=t.physical,l=Object(j.a)(Object(j.a)({},t),{},{yearBuilt:"",priceFormatted:"",rentFormmated:"",grossField:""});return c&&(l.yearBuilt=c.yearBuilt),a&&a.listPrice&&(l.priceFormatted=O(a.listPrice)),a&&a.monthlyRent&&(l.rentFormmated=O(a.monthlyRent)),a&&a.monthlyRent&&a.listPrice&&(l.grossField=Number(12*a.monthlyRent/a.listPrice*100).toFixed(2)),l.fullAdress="".concat(n.address1,", ").concat(n.city,", ").concat(n.state," ").concat(n.zip),r.a.createElement(e,Object.assign({key:t.id},l))},x=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(!this.context)return r.a.createElement(g,null);var e=this.context.properties;return r.a.createElement("table",{className:"table table-dark tableview"},r.a.createElement(v,{headers:["Image","Address","Year Built","List Price","Monthly Rent","Gross Yield"]}),r.a.createElement("tbody",null,e.map((function(e){return N(y,e)}))))}}]),a}(n.Component);x.contextType=h;var k=Object(d.g)(x),w=function(e){return r.a.createElement(m.b,{to:"/detail/".concat(e.id)},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:e.mainImageUrl,className:"card-img-top"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"$"+e.priceFormatted),r.a.createElement("div",{className:"labels-inline"},r.a.createElement("p",null,r.a.createElement("strong",null,"Current rent"),"$"+e.rentFormmated),r.a.createElement("p",null,r.a.createElement("strong",null,"Gross Yield"),e.grossField+"%")),r.a.createElement("p",{className:"card-text"},e.fullAdress))))},F=(a(48),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(!this.context)return r.a.createElement(g,null);var e=this.context.properties;return r.a.createElement("div",{className:"grid"},e.map((function(e){return N(w,e)})))}}]),a}(n.Component));F.contextType=h;var C=F;function B(){return r.a.createElement("nav",{className:"navbar navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand"},"List of Properties"),r.a.createElement("div",{className:"btn-group my-2 my-sm-0",role:"group"},r.a.createElement(m.b,{to:"/list"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"List")),r.a.createElement(m.b,{to:"/grid"},r.a.createElement("button",{type:"button",className:"btn btn-secondary"},"Grid"))))}var I=a(53),P=(a(49),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){if(!this.context)return r.a.createElement(g,null);var e=this.props.match.params.id,t=this.context.properties.find((function(t){return t.id==e}));if(!t.resources)return r.a.createElement("h3",null,"No images found");var a=t.resources.photos,n=t.address;return r.a.createElement(I.a,null,a.map((function(e){return r.a.createElement(I.a.Item,{key:e.id},r.a.createElement("img",{className:"d-block w-100",src:e.url,alt:"First slide"}),r.a.createElement(I.a.Caption,{className:"blackbox"},r.a.createElement("h3",null,n.address1,", ",n.city,", ",n.state," ",n.zip),r.a.createElement("p",null,t.description)))})))}}]),a}(n.Component));P.contextType=h;var A=Object(d.g)(P),R=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(f,null,r.a.createElement(B,null),r.a.createElement("div",{style:{marginTop:20}},r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/list"},r.a.createElement(k,null)),r.a.createElement(d.b,{path:"/grid"},r.a.createElement(C,null)),r.a.createElement(d.b,{path:"/detail/:id"},r.a.createElement(A,null)),r.a.createElement(d.b,{path:"*"},r.a.createElement(d.a,{to:"/list"}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.9fb13972.chunk.js.map