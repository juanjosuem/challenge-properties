(this.webpackJsonpexcercise=this.webpackJsonpexcercise||[]).push([[0],{38:function(e,t,a){e.exports=a(55)},43:function(e,t,a){},45:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(43),a(44),a(45),a(11)),i=a(6),s=a(24),m=a.n(s),u=a(31),d=a(36),E=a(57),p="https://samplerspubcontent.blob.core.windows.net/public/properties.json",f=r.a.createContext(),h=function(e){var t=Object(n.useState)(null),a=Object(d.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(f.Provider,{value:l},r.a.createElement(E.a,{fluid:!0},e.children))},b=a(59);function v(e){var t=e.headers;return r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e,t){return r.a.createElement("th",{key:t,scope:"col"},e)}))))}var g=a(58),y=function(e){var t=e.id,a=e.fullAdress,n=e.yearBuilt,l=e.priceFormatted,c=e.rentFormmated,i=e.grossField,s=e.imageUrl;return r.a.createElement("tr",{className:"centeredv-content"},r.a.createElement("td",null,r.a.createElement(g.a,{src:s,roundedCircle:!0,className:"image-property"})),r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,l),r.a.createElement("td",null,c),r.a.createElement("td",null,i),r.a.createElement("td",null,r.a.createElement(o.b,{to:"/detail/".concat(t)},r.a.createElement("button",{type:"button",className:"btn btn-outline-success"},"See Details"))))};function x(){return r.a.createElement("div",null,"Loading...")}var F=a(28);var j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en-US";return new Intl.NumberFormat(t,{minimumFractionDigits:2}).format(e)};var N=function(e,t){var a=t.financial,n=t.address,l=t.physical,c=t.mainImageUrl,o=Object(F.a)(Object(F.a)({},t),{},{yearBuilt:"----",priceFormatted:"----",rentFormmated:"----",grossField:"----",imageUrl:c||"https://via.placeholder.com/200x130?text=No image"});return l&&(o.yearBuilt=l.yearBuilt),a&&a.listPrice&&(o.priceFormatted="$"+j(a.listPrice)),a&&a.monthlyRent&&(o.rentFormmated="$"+j(a.monthlyRent)),a&&a.monthlyRent&&a.listPrice&&(o.grossField=Number(12*a.monthlyRent/a.listPrice*100).toFixed(2)+"%"),o.fullAdress="".concat(n.address1,", ").concat(n.city,", ").concat(n.state," ").concat(n.zip),r.a.createElement(e,Object.assign({key:t.id},o))},w=(a(52),function(){var e=Object(n.useContext)(f);return e?r.a.createElement(b.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement(v,{headers:["Image","Address","Year Built","List Price","Monthly Rent","Gross Yield"]}),r.a.createElement("tbody",null,e.properties.map((function(e){return N(y,e)})))):r.a.createElement(x,null)}),k=a(65),O=function(e){var t=e.id,a=e.fullAdress,n=e.priceFormatted,l=e.rentFormmated,c=e.grossField,i=e.imageUrl;return r.a.createElement(o.b,{to:"/detail/".concat(t)},r.a.createElement(k.a,null,r.a.createElement(k.a.Img,{variant:"top",src:i,className:"card-img-top"}),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,n),r.a.createElement("div",{className:"labels-inline"},r.a.createElement("p",null,r.a.createElement("strong",null,"Current rent")," ",l),r.a.createElement("p",null,r.a.createElement("strong",null,"Gross Yield")," ",c)),r.a.createElement(k.a.Text,null,a))))},B=(a(53),function(){var e=Object(n.useContext)(f);return e?r.a.createElement("div",{className:"grid"},e.properties.map((function(e){return N(O,e)}))):r.a.createElement(x,null)}),C=a(61),P=a(60),I=a(64),A=function(e){var t=e.resources,a=null===t||void 0===t?void 0:t.photos.slice(1,t.photos.length);return r.a.createElement(P.a,null,t?r.a.createElement(I.a,{className:"carousel"},a.map((function(e){return r.a.createElement(I.a.Item,{key:e.id},r.a.createElement("img",{className:"d-block w-100",src:e.url,alt:"First slide"}))}))):r.a.createElement("h5",null,"The property does not have images"))},R=function(e){var t=e.address,a=e.description;return r.a.createElement(P.a,null,r.a.createElement("h5",null,"Address:"),r.a.createElement("p",null,t.address1,", ",t.city,", ",t.state," ",t.zip),r.a.createElement("h5",null,"Description:"),r.a.createElement("span",null,a))},U=(a(54),function(e){var t=e.match,a=Object(n.useContext)(f);if(!a)return r.a.createElement(x,null);var l=t.params.id,c=a.properties.find((function(e){return e.id===Number(l)}));return r.a.createElement(C.a,null,r.a.createElement(A,c),r.a.createElement(R,c))}),G=a(63),L=a(62),S=function(){var e=Object(i.h)().pathname,t=Object(i.g)();return r.a.createElement(G.a,{bg:"light",variant:"light"},r.a.createElement(G.a.Brand,{href:"#home"},"List of Properties"),r.a.createElement(G.a.Collapse,{className:"justify-content-end"},-1===e.indexOf("/detail")?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.b,{to:"/list"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"List")),r.a.createElement(o.b,{to:"/grid"},r.a.createElement("button",{type:"button",className:"btn btn-secondary"},"Grid"))):r.a.createElement(L.a,{variant:"success",onClick:function(){return t.goBack()}},"Go Back")))},T={marginTop:16},D=function(){return r.a.createElement(h,null,r.a.createElement(o.a,null,r.a.createElement(S,null),r.a.createElement("div",{style:T},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/list",component:w}),r.a.createElement(i.b,{exact:!0,path:"/grid",component:B}),r.a.createElement(i.b,{exact:!0,path:"/detail/:id",component:U}),r.a.createElement(i.b,{path:"*"},r.a.createElement(i.a,{to:"/list"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.eaf08a4d.chunk.js.map