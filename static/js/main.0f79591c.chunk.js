(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(56)},48:function(e,t,a){},49:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(36),l=a.n(o),c=(a(48),a(49),a(50),a(59)),s=a(58),d=a(61),m=a(60),i=a(5),u=a.n(i);function b(e){return r.a.createElement(c.a,{expand:"lg",className:" justify-content-between navbar",sticky:"top",bg:e.Mode,"data-bs-theme":e.Mode},r.a.createElement(s.a,{className:"NavBarStyle"},r.a.createElement(c.a.Brand,{href:"#"},e.title),r.a.createElement(c.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(c.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(d.a,{className:"me-auto"},r.a.createElement(d.a.Link,{className:"li",href:"#"},e.Home)),r.a.createElement("div",{className:"vw-10"},r.a.createElement("button",{className:"btn btn-".concat("Green"===e.darkcolor?"success":"Red"===e.darkcolor?"danger":"primary"," mx-2 ").concat("dark"===e.Mode?"d-flex":"d-none"),onClick:e.count},"Green"===e.darkcolor?"Green":"Red"===e.darkcolor?"Red":"Original"," Mode")),r.a.createElement(m.a,{className:"text-".concat("dark"===e.Mode?"light":"dark")},r.a.createElement(m.a.Check,{type:"switch",id:"custom-switch",label:"Enable ".concat("dark"===e.Mode?"light":"dark"," Mode"),onClick:e.ToggleMode})))))}function g(e){const[t,a]=Object(n.useState)("");return r.a.createElement("div",{className:"container","data-bs-theme":e.Mode,style:{color:"dark"===e.Mode?"white":"black"}},r.a.createElement("h1",{style:{color:"dark"===e.Mode?"white":"black"}},e.Heading),r.a.createElement("div",{className:"mb-3"},r.a.createElement("textarea",{className:"form-control",value:t,id:"myBox",rows:"8",onChange:e=>{a(e.target.value)}})),r.a.createElement("button",{className:"btn btn-".concat("light"===e.Mode?"primary":"Red"===e.color?"success":"Green"===e.color?"primary":"danger"," buttOn mx-1 my-1"),onClick:()=>{const e=t.toUpperCase();a(e)}},"Convert to Uppercase"),r.a.createElement("button",{className:"btn btn-".concat("light"===e.Mode?"primary":"Red"===e.color?"success":"Green"===e.color?"primary":"danger"," buttOn mx-1 my-1"),onClick:()=>{a("")}},"Clear Text"),r.a.createElement("button",{className:"btn btn-".concat("light"===e.Mode?"primary":"Red"===e.color?"success":"Green"===e.color?"primary":"danger"," buttOn mx-1 my-1"),onClick:()=>{const e=t.toLowerCase();a(e)}},"Convert to Lowercase"),r.a.createElement("button",{className:"btn btn-".concat("light"===e.Mode?"primary":"Red"===e.color?"success":"Green"===e.color?"primary":"danger"," buttOn mx-1 my-1"),onClick:()=>{var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)}},"Copy Text"),r.a.createElement("button",{className:"btn btn-".concat("light"===e.Mode?"primary":"Red"===e.color?"success":"Green"===e.color?"primary":"danger"," buttOn mx-1 my-1"),onClick:()=>{let e=t.split(/[ ]+/);a(e.join(" "))}},"Remove Extra Spaces "),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Paragraph Summary"),r.a.createElement("p",null,"Words ",t.split(" ").length-1," And character ",t.length," "),r.a.createElement("p",null,.008*t.split(" ").length,"  Minute to read "),r.a.createElement("h2",null,"Preview"),r.a.createElement("p",null,t.length>0?t:"Enter something first")))}d.a.propTypes={title:u.a.string.isRequired,About:u.a.string.isRequired},d.a.defaultProps={title:"Set Title",About:"Set About"};a(62);var E=a(37);var y=function(e){return e.Alert&&r.a.createElement(E.a,{variant:"warning",className:"justify-content-center position-absolute w-100"},r.a.createElement("div",null," ",r.a.createElement("strong",null,e.Alert.messege)," ",e.Alert.type))};var p=function(){const[e,t]=Object(n.useState)("light"),[a,o]=Object(n.useState)(null),[l,c]=Object(n.useState)(0),[s,d]=Object(n.useState)("Green"),m=(e,t)=>{o({messege:t,type:e}),setTimeout(()=>{o(null)},1e3)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{title:"Textutils",About:"About Me",Mode:e,Home:"Home",ToggleMode:()=>{"dark"===e?(t("light"),document.body.style.backgroundColor="white",m("Light Mode is Enabled","Success"),d("Green"),c(0),document.title="Textutils"):(t("dark"),document.body.style.backgroundColor="#0d0d36",m("Dark Mode is Enabled","Success"),document.title="Textutils-DarkMode Enabled")},count:()=>{let t=l+1;c(t),"dark"===e&&(t%3===2?(document.body.style.background="#4c0000",d("Blue")):t%3===0?(document.body.style.background="#0d0d36",d("Green")):(document.body.style.background="#013e01",d("Red")))},darkcolor:s}),r.a.createElement(y,{Alert:a}),r.a.createElement("div",{className:"container my-3"},r.a.createElement(g,{Heading:"Enter the text below",Mode:e,showAlert:m,color:s})))};var h=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then(t=>{let{getCLS:a,getFID:n,getFCP:r,getLCP:o,getTTFB:l}=t;a(e),n(e),r(e),o(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null))),h()}},[[40,1,2]]]);
//# sourceMappingURL=main.0f79591c.chunk.js.map