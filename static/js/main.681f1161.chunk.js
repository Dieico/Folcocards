(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{142:function(e,a){},145:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){},153:function(e,a,t){},154:function(e,a,t){},157:function(e,a,t){},158:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),i=t(37);t(96);function o(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("h1",null,"Balanceamento de Cartas")))}var s=t(23),u=t(18),m=t(19),d=t(21),p=t(20),h=t(22),f=t(7),E=t.n(f),g=t(11),v=t(87),b=t(77),C=t.n(b).a.create({baseURL:"https://formcards.herokuapp.com/",headers:{"Access-Control-Allow-Origin":"*"}}),y=t(78),w=t.n(y),x=t(88),N=t(28),k=t(33),j=t(34),O=t(89),A=t(81),I=t(160),S=t(161),D=t(82),F=t(6);t(145);var L=function(e){var a=Object(n.useState)(!1),t=Object(x.a)(a,2),l=t[0],c=t[1],i=function(){return c(!1)},o=new FormData,s=function(){var e=Object(g.a)(E.a.mark((function e(a){var t,n,r,l,c,i,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a.preventDefault(),t=a.currentTarget,o.append("name",t.name.value),o.append("image",t.image.value),o.append("imagem",t.imagem.files[0]),o.append("at1",t.at1.value),o.append("at2",t.at2.value),o.append("at3",t.at3.value),o.append("description",t.description.value),o.append("spell",t.spell.value),n=!0,r=!1,l=void 0,e.prev=13,c=o.entries()[Symbol.iterator]();!(n=(i=c.next()).done);n=!0)s=i.value,console.log(s[0]+", "+s[1]);e.next=21;break;case 17:e.prev=17,e.t0=e.catch(13),r=!0,l=e.t0;case 21:e.prev=21,e.prev=22,n||null==c.return||c.return();case 24:if(e.prev=24,!r){e.next=27;break}throw l;case 27:return e.finish(24);case 28:return e.finish(21);case 29:return e.next=31,C.put("update/".concat(t.id.value),o);case 31:case"end":return e.stop()}}),e,null,[[13,17,21,29],[22,,24,28]])})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{variant:"outline-dark",size:"sm",onClick:function(){return c(!0)}},"Editar"),r.a.createElement(N.a,{size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:l,onHide:i},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null,"Editor de Carta")),r.a.createElement(F.a,{onSubmit:s},r.a.createElement(N.a.Body,null,r.a.createElement(k.a,{fluid:!0},r.a.createElement(j.a,{className:"Modal"},r.a.createElement(A.a,{id:"first"},r.a.createElement(F.a.Group,{controlId:"name"},r.a.createElement(F.a.Control,{plaintext:!0,defaultValue:e.card.name})),r.a.createElement(F.a.Control,{type:"hidden",id:"id",defaultValue:e.card._id}),r.a.createElement(F.a.Control,{id:"image",type:"hidden",defaultValue:e.card.image}),r.a.createElement(k.a,{className:"d-flex justify-content-center"},r.a.createElement(I.a,{id:"imageshow",src:"https://lh3.google.com/u/0/d/".concat(e.card.image,"?").concat((new Date).getTime()),alt:"Card",thumbnail:!0})),r.a.createElement(F.a.Control,{id:"imagem",type:"file",onChange:function(e){var a=document.getElementById("imageshow"),t=document.getElementById("imagem").files[0],n=new FileReader;n.onloadend=function(){a.src=n.result},t?n.readAsDataURL(t):a.src=""}}),r.a.createElement(F.a.Row,null,r.a.createElement(F.a.Group,{as:A.a,controlId:"at1"},r.a.createElement(F.a.Label,null,"At1"),r.a.createElement(F.a.Control,{size:"sm",type:"number",plaintext:!0,defaultValue:e.card.at1})),r.a.createElement(F.a.Group,{as:A.a,controlId:"at2"},r.a.createElement(F.a.Label,null,"At2"),r.a.createElement(F.a.Control,{size:"sm",plaintext:!0,defaultValue:e.card.at2})),r.a.createElement(F.a.Group,{as:A.a,controlId:"at3"},r.a.createElement(F.a.Label,null,"At3"),r.a.createElement(F.a.Control,{size:"sm",plaintext:!0,defaultValue:e.card.at3}))),r.a.createElement(F.a.Group,{controlId:"spell"},r.a.createElement(F.a.Label,null,"Magias:"),r.a.createElement("hr",null),r.a.createElement(F.a.Control,{as:"textarea",rows:"5",cols:"12",plaintext:!0,defaultValue:e.card.spell}))),r.a.createElement(A.a,null,r.a.createElement(S.a,{className:"d-flex justify-content-center",type:"radio",defaultValue:e.card.affiliation,name:"options",onChange:function(e){o.append("affiliation",e),console.log(e)}},r.a.createElement(D.a,{variant:"light",value:"Africano"},"Africano"),r.a.createElement(D.a,{variant:"light",value:"Indigena"},"Indigena"),r.a.createElement(D.a,{variant:"light",value:"Europeu"},"Europeu"),r.a.createElement(D.a,{variant:"light",value:"Neutro"},"Neutro")),r.a.createElement(F.a.Group,{controlId:"tags"},r.a.createElement(F.a.Label,{column:!0,sm:"5"},"Tags:"),r.a.createElement(F.a.Control,{className:"col d-flex flex-column",defaultValue:e.card.tag})),r.a.createElement(F.a.Group,{controlId:"description"},r.a.createElement(F.a.Label,{column:!0,sm:"5"},"Descri\xe7\xe3o:"),r.a.createElement("hr",null),r.a.createElement(F.a.Control,{className:"col d-flex flex-column",as:"textarea",rows:"20",plaintext:!0,defaultValue:e.card.description})))))),r.a.createElement(N.a.Footer,null,r.a.createElement(O.a,{onClick:i},"Fechar"),r.a.createElement(O.a,{type:"submit"},"Salvar")))))},B=t(85);t(150);function R(e){var a=function(a){a.target.checked?e.search(a.target.value,!0):a.target.checked||e.search(a.target.value,!1)};return r.a.createElement(k.a,{className:"Container"},r.a.createElement(F.a.Group,{s:j.a,controlId:"search"},r.a.createElement(F.a.Row,{className:"align-items-center"},r.a.createElement(A.a,{lg:"1"},r.a.createElement(F.a.Label,{column:!0,sm:"2"},"Fitro:")),r.a.createElement(A.a,{lg:"6"},r.a.createElement(F.a.Control,{type:"text",onChange:function(a){""!==a.target.value?e.searchName(a.target.value):e.update()},placeholder:"Pesquisa com uma palavra chave"})),r.a.createElement(A.a,{sm:"5"},r.a.createElement(F.a.Check,{inline:!0,label:"Africano",onChange:a,type:"checkbox",value:"Africano",id:"Africano"}),r.a.createElement(F.a.Check,{inline:!0,label:"Europeu",onChange:a,type:"checkbox",value:"Europeu",id:"Europeu"}),r.a.createElement(F.a.Check,{inline:!0,label:"Indigena",onChange:a,type:"checkbox",value:"Indigena",id:"Indigena"}),r.a.createElement(F.a.Check,{inline:!0,label:"Neutro",onChange:a,type:"checkbox",value:"Neutro",id:"Neutro"})))))}var V=t(40),G=(t(151),function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",at1:0,at2:0,at3:0,description:"",affiliation:"",spell:"",tag:"",image:null,windows:!1},t.handleSubmit=function(){var e=Object(g.a)(E.a.mark((function e(a){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),(n=new FormData).append("name",t.state.name),n.append("image",t.state.image),n.append("at1",t.state.at1),n.append("at2",t.state.at2),n.append("at3",t.state.at3),n.append("description",t.state.description),n.append("affiliation",t.state.affiliation),n.append("spell",t.state.spell),n.append("tag",t.state.tag),e.next=13,C.post("create",n);case 13:console.log("envio");case 14:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),t.handleImageChange=function(e){console.log(e.target.files[0]),t.setState({image:e.target.files[0]});var a=document.getElementById("imageshow"),n=document.getElementById("imagem").files[0],r=new FileReader;r.onloadend=function(){a.src=r.result},n?r.readAsDataURL(n):a.src=""},t.handleChange=function(e){t.setState(Object(V.a)({},e.target.name,e.target.value))},t.handleChangeRadio=function(e){t.setState({affiliation:e}),console.log(e)},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"handleChangeImgShow",value:function(){var e=Object(g.a)(E.a.mark((function e(a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(k.a,{className:"align-items-center"},r.a.createElement(j.a,null,r.a.createElement("form",{id:"new-card",className:"Neumorphism",onSubmit:this.handleSubmit},r.a.createElement(A.a,{sm:4},r.a.createElement(k.a,{className:"d-flex justify-content-center"},r.a.createElement(I.a,{id:"imageshow",src:"https://via.placeholder.com/350x550",alt:"Card",thumbnail:!0})),r.a.createElement("input",{type:"file",id:"imagem",onChange:this.handleImageChange})),r.a.createElement(A.a,null,r.a.createElement(j.a,null,r.a.createElement(A.a,{sm:6},r.a.createElement(F.a.Control,{type:"text",name:"name",placeholder:"Nome",onChange:this.handleChange,value:this.state.name})),r.a.createElement(A.a,{sm:6,className:"atributs d-flex justify-content-around align-items-center"},r.a.createElement(F.a.Label,null,"At1:"),r.a.createElement(F.a.Control,{type:"number",name:"at1",placeholder:"Atributo 1",onChange:this.handleChange,value:this.state.at1}),r.a.createElement(F.a.Label,null,"At2:"),r.a.createElement(F.a.Control,{type:"number",name:"at2",placeholder:"Atributo 2",onChange:this.handleChange,value:this.state.at2}),r.a.createElement(F.a.Label,null,"At3:"),r.a.createElement(F.a.Control,{type:"number",name:"at3",placeholder:"Atributo 3",onChange:this.handleChange,value:this.state.at3}))),r.a.createElement(j.a,{className:"atributs d-flex justify-content-center"},r.a.createElement(A.a,{sm:6},r.a.createElement(F.a.Control,{type:"text",name:"tag",placeholder:"tags",onChange:this.handleChange,value:this.state.tag})),r.a.createElement(A.a,{sm:6},r.a.createElement(S.a,{className:"d-flex justify-content-center",type:"radio",name:"affiliation",onChange:this.handleChangeRadio,value:this.state.affiliation},r.a.createElement(D.a,{variant:"light",value:"Africano"},"Africano"),r.a.createElement(D.a,{variant:"light",value:"Indigena"},"Indigena"),r.a.createElement(D.a,{variant:"light",value:"Europeu"},"Europeu"),r.a.createElement(D.a,{variant:"light",value:"Neutro"},"Neutro")))),r.a.createElement(j.a,null,r.a.createElement("textarea",{type:"text",name:"spell",placeholder:"Habilidades",onChange:this.handleChange,value:this.state.spell}),r.a.createElement("textarea",{type:"text",name:"description",placeholder:"Descri\xe7\xe3o",onChange:this.handleChange,value:this.state.description})),r.a.createElement("button",{type:"submit"},"Enivar")))))}}]),a}(n.Component)),T=(t(152),t(153),function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={menuOpen:!1,colorcards:{Indigena:"#C9F2D5",Neutro:"#ECECEC",Africano:"#FAD9B2",Europeu:"#FFC0CB"},affiliation:["Indigena","Neutro","Africano","Europeu",""],cards:[],windows:!1},t.registerToSocket=function(){var e=w()("https://formcards.herokuapp.com");e.on("card",(function(e){console.log("Recebi uma nova carta"),t.setState({cards:[e].concat(Object(v.a)(t.state.cards))})})),e.on("cardUpdate",(function(e){t.setState({cards:t.state.cards.map((function(a){return a._id===e._id?e:a}))})})),e.on("cardDelete",(function(e){t.setState({cards:t.state.cards.filter((function(a){return a._id!==e._id}))}),console.log("deleteCard"),console.log(t.state.cards)}))},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.registerToSocket(),e.next=3,C.get("index");case 3:a=e.sent,this.setState({cards:a.data}),this.setState({baseCards:a.data});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deleteId",value:function(){var e=Object(g.a)(E.a.mark((function e(a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.delete("delete/".concat(a));case 2:console.log("delete");case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(g.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get("index");case 2:a=e.sent,this.setState({cards:a.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(g.a)(E.a.mark((function e(a,t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!0===t?this.setState({affiliation:a}):this.setState({affiliation:["Indigena","Neutro","Africano","Europeu",""]});case 1:case"end":return e.stop()}}),e,this)})));return function(a,t){return e.apply(this,arguments)}}()},{key:"searchName",value:function(){var e=Object(g.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post("search/name/".concat(a));case 2:t=e.sent,this.setState({cards:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,a=this;return e=this.state.windows?r.a.createElement(O.a,{onClick:function(){a.setState({windows:!1})}},"Fechar"):r.a.createElement(O.a,{onClick:function(){a.setState({windows:!0})}},"Adicionar carta"),r.a.createElement(k.a,{fluid:!0,className:"all"},r.a.createElement(j.a,{className:"align-items-center search "},r.a.createElement(A.a,{lg:10,className:"d-flex justify-content-center"},r.a.createElement(R,{search:this.search.bind(this),searchName:this.searchName.bind(this),update:this.update.bind(this)})),r.a.createElement(A.a,{lg:2,className:"d-flex justify-content-center"},e)),this.state.windows?r.a.createElement(G,null):null,r.a.createElement(j.a,{className:"contend"},r.a.createElement(A.a,null,this.state.cards.filter((function(e){return a.state.affiliation.includes(e.affiliation)})).map((function(e){return r.a.createElement("article",{key:e._id,style:{backgroundColor:a.state.colorcards[e.affiliation]}},r.a.createElement("header",null,r.a.createElement("h5",null,e.name),r.a.createElement("button",{type:"button",onClick:function(){a.deleteId(e._id)}},r.a.createElement(B.a,{size:20}))),r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:"https://lh3.google.com/u/0/d/".concat(e.image,"?").concat((new Date).getTime()),alt:"Card"})),r.a.createElement("hr",null),r.a.createElement("footer",null,r.a.createElement("div",{className:"atributs"},r.a.createElement("div",{className:"at1"},e.at1),r.a.createElement("div",{className:"at2"},e.at2),r.a.createElement("div",{className:"at3"},e.at3)),r.a.createElement("hr",null),r.a.createElement("div",{className:"effects"},r.a.createElement("div",{className:"affiliation"},r.a.createElement("h6",null,r.a.createElement("b",null,"Filia\xe7\xe3o:")," ",e.affiliation)),r.a.createElement(L,{card:e})),r.a.createElement("hr",null),r.a.createElement("div",{className:"spell"},r.a.createElement("p",null,e.spell))))})))))}}]),a}(n.Component)),_=(t(154),function(e){function a(){return Object(u.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"home"},r.a.createElement(T,null))}}]),a}(n.Component)),z=t(162),H=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(d.a)(this,Object(p.a)(a).call(this,e))).handleChange=function(e){t.setState(Object(V.a)({},e.target.id,e.target.value)),console.log(t.state.password)},t.handleSubmit=function(){var e=Object(g.a)(E.a.mark((function e(a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"1234"===t.state.password&&t.setState({redirect:!0});case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),t.state={password:"",redirect:!1},t}return Object(h.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(s.a,{to:"/home"}):r.a.createElement("section",{className:"login"},r.a.createElement(k.a,null,r.a.createElement(j.a,{className:"justify-content-md-center"},r.a.createElement(z.a,{style:{width:"18rem"},className:"text-center"},r.a.createElement(z.a.Header,null,r.a.createElement(z.a.Title,null,"Digite a senha aqui")),r.a.createElement(z.a.Body,null,r.a.createElement(F.a.Control,{id:"password",onChange:this.handleChange,value:this.state.password,placeholder:"Digite a senha aqui"}),r.a.createElement(z.a.Footer,null,r.a.createElement(O.a,{type:"submit",variant:"secundary",onClick:function(){return e.handleSubmit()}},"Entrar")))))))}}]),a}(n.Component);var U=function(){return r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,component:H}),r.a.createElement(s.b,{path:"/Home",component:_}))};var q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(o,null),r.a.createElement(U,null)))};t(157);c.a.render(r.a.createElement(q,null),document.getElementById("root"))},91:function(e,a,t){e.exports=t(158)},96:function(e,a,t){}},[[91,1,2]]]);
//# sourceMappingURL=main.681f1161.chunk.js.map