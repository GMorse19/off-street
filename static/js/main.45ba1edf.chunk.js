(this["webpackJsonpoff-street"]=this["webpackJsonpoff-street"]||[]).push([[0],{101:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),s=(t(48),t(10)),o=t(11),i=t(13),m=t(12),u=t(5),d=t(6),g=(t(68),t(38)),f=t(39),p=t(40),h=t(19),E={button:{burger:"/off-street/burger.png"}},v={stock:{workShop:"/off-street/carpenter.jpg",birdHouse:"/off-street/birdHouse.jpg",chalkBoard:"/off-street/Chalk.png",standardFlag:"/off-street/Flags/RedWhite&Blue/FlagCutOut.png",oldBoards:"/off-street/Flags/old-boards.jpg",redLine:"/off-street/Flags/RedLine/FireFlagCutOut.jpg"}},b=["/off-street/Logo/LogoOS.png","/off-street/Logo/OSLogo.png"],N=(t(84),function(e){return r.a.createElement("div",null,r.a.createElement(d.Parallax,{className:"custom-class",y:[e.left,e.right],tagOuter:"figure"},r.a.createElement("img",{className:"home-logo-gallery",alt:"logo",src:b[1]})))}),k=(t(85),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState({menuOpen:e.isOpen})},n.hoverButton=function(e){n.setState({image:e})},n.closeMenu=function(){n.setState({menuOpen:!1,image:""})},n.toggleMenu=function(){n.setState((function(e){return{menuOpen:!e.menuOpen}}))},n.imageSelector=function(e){return e},n.images={home:v.stock.standardFlag,about:v.stock.workShop,shop:v.stock.birdHouse,contact:v.stock.chalkBoard,gallery:v.stock.oldBoards},n.state={menuOpen:!1,image:""},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.menuOpen,n=a.image;return r.a.createElement("div",{className:"header"},r.a.createElement(g.fallDown,{className:"menu",isOpen:this.state.menuOpen,onStateChange:function(a){return e.handleChange(a)},width:"100vw"},r.a.createElement(f.a,{fluid:!0},r.a.createElement(p.a,null,r.a.createElement(h.a,{lg:6,xs:6,className:t?"logo-menu-down":"logo-menu"},r.a.createElement("div",{className:"logofloat-padding"},r.a.createElement(N,{left:-30,right:30})),r.a.createElement("div",{className:""},r.a.createElement("img",{key:n,className:t?"image-menu fade-in":"image-menu-closed fade-in",src:this.images["".concat(n)],alt:n}))),r.a.createElement(h.a,{lg:6,xs:6,className:"page-menu"},r.a.createElement("button",{onClick:this.closeMenu,className:"close-button"},"X"),r.a.createElement("div",{className:t?"menu-link-open":"menu-link"},r.a.createElement("a",{name:"home",onMouseOver:function(){return e.hoverButton("home")},onClick:function(){return e.closeMenu()},href:"#/"},"Home"),r.a.createElement("a",{name:"about",onMouseOver:function(){return e.hoverButton("about")},onClick:function(){return e.closeMenu()},href:"#about"},"About"),r.a.createElement("a",{name:"shop",onMouseOver:function(){return e.hoverButton("shop")},onClick:function(){return e.closeMenu()},href:"#shop"},"Shop"),r.a.createElement("a",{name:"contact",onMouseOver:function(){return e.hoverButton("contact")},onClick:function(){return e.closeMenu()},href:"#contact"},"Contact"),r.a.createElement("a",{name:"gallery",onMouseOver:function(){return e.hoverButton("gallery")},onClick:function(){return e.closeMenu()},href:"#gallery"},"Gallery")))))),r.a.createElement("button",{className:"burger-menu"},r.a.createElement("img",{src:E.button.burger,alt:"logo",className:"logo"})))}}]),t}(r.a.Component)),y=(t(86),function(e){return r.a.createElement("div",null,r.a.createElement(f.a,{className:"logo-container"},r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement(d.Parallax,{className:"custom-class logo-div",y:[-50,50],tagOuter:"figure"},r.a.createElement("img",{className:"home-logo",width:"300px",src:b[1],alt:"rustic"})),r.a.createElement("h1",{className:"page-heading"},e.heading)),r.a.createElement(h.a,null,r.a.createElement(d.Parallax,{className:"custom-class",y:[-50,50],tagOuter:"figure"},r.a.createElement("div",{className:"title-div"},r.a.createElement("h1",{className:"title"},"Off Street"),r.a.createElement("h5",null,"Carpentry with a re-purpose")))))))}),w={standard:{cutout:"/off-street/Flags/RedWhite&Blue/FlagCutOut.png",front:"/off-street/Flags/RedWhite&Blue/Flag.jpg",sawdust:"/off-street/Flags/RedWhite&Blue/Flag2.jpg",flat:"/off-street/Flags/RedWhite&Blue/Flag-flat.jpg"},fire:{front:"/off-street/Flags/RedLine/FireFlag.jpg",cutout:"/off-street/Flags/RedLine/FireFlagCutOut.jpg"},blackAndWhite:{front:"/off-street/Flags/B&W/B&W.jpg",angle:"/off-street/Flags/B&W/B&W-angle.jpg",back:"/off-street/Flags/B&W/B&W-back.jpg"},random:{oldBoards:"/off-street/Flags/old-boards.jpg"}},O={chalkBoard:{cutout:"/off-street/Chalk.png"},birdHouse:{front:"/off-street/birdHouse.jpg"}},j=(t(87),function(){return r.a.createElement("div",{className:"intro-container"},r.a.createElement("div",{className:"intro-para"},r.a.createElement(f.a,{fluid:!0},r.a.createElement(p.a,{className:"row row-padding"},r.a.createElement(h.a,{className:"margin-top",xs:12,md:6},r.a.createElement(d.Parallax,{className:"custom-class",y:[30,-20],tagOuter:"figure"},r.a.createElement("div",{className:"image-div"},r.a.createElement("img",{className:"flag-image",src:w.random.oldBoards,alt:"old boards and flag"})))),r.a.createElement(h.a,{xs:12,md:6},r.a.createElement(d.Parallax,{className:"custom-class",y:[-20,20],tagOuter:"figure"},r.a.createElement("p",{className:"para-margin-left"},"Off Street Carpentry was born from over twenty five years of witnessing continuous waste amongst the building trades.")))),r.a.createElement(p.a,{className:"row-padding"},r.a.createElement(h.a,{xs:12,md:6},r.a.createElement(d.Parallax,{className:"custom-class",y:[-20,20],tagOuter:"figure"},r.a.createElement("p",{className:"para-margin-right"}," Often times on job sites, shorter pieces of wood will be disposed of. They clutter up the work area and are generally moved around so much that they become a nuisance. It's just simply easier to throw them in the dumpster."))),r.a.createElement(h.a,{className:"margin-top",xs:12,md:6},r.a.createElement(d.Parallax,{className:"custom-class",y:[-60,60],tagOuter:"figure"},r.a.createElement("div",{className:"image-div"},r.a.createElement("img",{className:"flag-image",src:O.chalkBoard.cutout,alt:"Chalk Board"}))))),r.a.createElement(p.a,{className:"row row-padding full-width"},r.a.createElement(h.a,null,r.a.createElement("p",null,"Knowing that there could be a better, creative way to make use of this waste, a true visionary set out to find different ways to rescue these forlorn timbers."))),r.a.createElement(p.a,{className:"row-padding"},r.a.createElement(h.a,{xs:12,md:6},r.a.createElement(d.Parallax,{scrollAxis:"horizontal",className:"custom-class",x:[-50,30],tagOuter:"figure"},r.a.createElement("div",{className:"image-div-about"},r.a.createElement("img",{className:"flag-image",src:w.blackAndWhite.front,alt:"Black and White Flag"}))))),r.a.createElement(p.a,{className:"row-padding"},r.a.createElement(h.a,{xs:12,md:6},r.a.createElement(d.Parallax,{className:"custom-class",y:[-20,20],tagOuter:"figure"},r.a.createElement("p",{className:"para-margin-right"},"Good old fashioned American entrepreneurship sparked the first product off the line, Ole' Glory herself. The stars and stripes not only began the journey, but it also opened the door for many more creations to come."))),r.a.createElement(h.a,{className:"margin-top margin-bottom",xs:12,md:6},r.a.createElement(d.Parallax,{className:"custom-class",y:[-50,50],tagOuter:"figure"},r.a.createElement("div",{className:"image-div"},r.a.createElement("img",{className:"flag-image2",src:O.birdHouse.front,alt:"Bird House"}))))))))}),B=t(41),F=t(102),C=t(103),x=(t(35),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).handleChange=function(a){e.setState(Object(B.a)({},a.target.name,a.target.value))},e.handleSubmit=function(){console.log("Submit!")},e.state={email:""},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement(F.a,{onSubmit:this.handleSubmit},r.a.createElement(F.a.Group,null,r.a.createElement(F.a.Control,{autoComplete:"off",className:"form-input",type:"email",name:"email",placeholder:"email",value:e,onChange:this.handleChange})),r.a.createElement(C.a,{type:"submit",className:"form-button"},"Submit"))}}]),t}(n.Component)),W=function(){return r.a.createElement("div",{id:"contact",className:"contact-div"},r.a.createElement(f.a,{fluid:!0,className:"contact-container"},r.a.createElement(p.a,{className:"row"},r.a.createElement(h.a,{className:"cream",xs:12,md:6},r.a.createElement("div",null,r.a.createElement("img",{className:"carpenter",src:v.stock.workShop,alt:"carpenter"}),r.a.createElement("img",{className:"carpenter",src:v.stock.workShop,alt:"carpenter"}))),r.a.createElement(h.a,{className:"black",xs:12,md:6},r.a.createElement("div",{className:"black-div"},r.a.createElement("p",{className:"connect-header"},"CONNECT"),r.a.createElement("p",{className:"black-para"},"Join our news letter and stay informed of new products and sales."),r.a.createElement(x,null))))))},S=(t(89),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement(f.a,{className:"footer-container"},r.a.createElement("div",{className:""},r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement("h4",null,"Quick Links"),r.a.createElement("h6",null,r.a.createElement("a",{className:"spacing",href:"/"},"Flags")),r.a.createElement("h6",null,r.a.createElement("a",{className:"spacing",href:"/"},"Byrd Houses")),r.a.createElement("h6",null,r.a.createElement("a",{className:"spacing",href:"/"},"Chalk Boards"))),r.a.createElement(h.a,null,r.a.createElement("div",{className:"spacing"},r.a.createElement("h4",{className:""},"Contact Us"),r.a.createElement("h6",null,r.a.createElement("a",{className:"spacing",href:"/"},"Email")),r.a.createElement("h6",null,r.a.createElement("a",{className:"spacing",href:"/"},"Phone")),r.a.createElement("h6",null,r.a.createElement("a",{className:"spacing",href:"/"},"AboutPage"))))))))}),A=(t(90),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement(y,{heading:"About"}),r.a.createElement(j,null),r.a.createElement(W,null),r.a.createElement(S,null))}}]),t}(r.a.Component)),M=(t(91),function(e){return r.a.createElement("div",{className:"info-div"},r.a.createElement(d.Parallax,{className:"custom-class",y:[20,-20],tagOuter:"figure"},r.a.createElement("h2",null,e.title),r.a.createElement("p",null,e.description)))}),R=(t(92),function(e){return r.a.createElement(p.a,{className:"rows"},r.a.createElement(h.a,{xs:{span:6,offset:3},md:{span:6,offset:4},lg:{span:6,offset:4}},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("div",{className:"image-div"},r.a.createElement("img",{className:"flag-image",src:e.image,alt:e.alt})),r.a.createElement(M,{title:e.title,description:e.description}),r.a.createElement(N,{left:e.left,right:e.right}))))}),P={title:"One mans trash...",description:"Re-use, re-purpose, re-invent. Off Street is committed to utilizing left over and forgotten construction debris to create beautifully unique hand crafted items."},L={title:"Tells a story...",description:'"Rescue Wood" Cut offs and scraps from new house construction to demolition debris, each piece used at Off Street comes with it\'s own unique a history.'},H={title:"Green...",description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"'},T={title:"Reclaimed...",description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"'},D=(t(93),function(){return r.a.createElement("div",{className:"info-section"},r.a.createElement(f.a,{className:"shop-container"},r.a.createElement(R,{image:w.standard.cutout,title:P.title,description:P.description,alt:"American Flag",left:"90",right:"-100"}),r.a.createElement(R,{image:w.random.oldBoards,title:L.title,description:L.description,alt:"Boards under American Flag",left:"-90",right:"100"}),r.a.createElement(R,{image:O.chalkBoard.cutout,title:H.title,description:H.description,alt:"Chalk Board",left:"90",right:"-100"}),r.a.createElement(R,{image:O.birdHouse.front,title:T.title,description:T.description,alt:"Bird House",left:"-90",right:"100"})))}),G=(t(94),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return r.a.createElement("div",{className:"home-page-div"},r.a.createElement(y,null),r.a.createElement(D,null),r.a.createElement(W,null),r.a.createElement(S,null))}}]),t}(r.a.Component)),q=(t(95),[{type:"standard",id:1,class:"one flag-image2",name:"cutout",src:"/off-street/Flags/RedWhite&Blue/FlagCutOut.png"},{type:"standard",id:2,class:"two flag-image2",name:"front",src:"/off-street/Flags/RedWhite&Blue/Flag.jpg"},{type:"item",id:11,class:"three flag-image2",name:"chalkBoard",src:"/off-street/Chalk.png"},{type:"item",id:12,class:"one flag-image2",name:"Bird House",src:"/off-street/birdHouse.jpg"},{type:"standard",id:3,class:"three flag-image2",name:"sawdust",src:"/off-street/Flags/RedWhite&Blue/Flag2.jpg"},{type:"standard",id:4,class:"two flag-image2",name:"flat",src:"/off-street/Flags/RedWhite&Blue/Flag-flat.jpg"},{type:"fire",id:5,class:"four flag-image2",name:"front",src:"/off-street/Flags/RedLine/FireFlag.jpg"},{type:"fire",id:6,class:"three flag-image2",name:"cutout",src:"/off-street/Flags/RedLine/FireFlagCutOut.jpg"},{type:"blackAndWhite",id:7,class:"one flag-image2",name:"front",src:"/off-street/Flags/B&W/B&W.jpg"},{type:"blackAndWhite",id:8,class:"four flag-image2",name:"angle",src:"/off-street/Flags/B&W/B&W-angle.jpg"},{type:"blackAndWhite",id:9,class:"two flag-image2",name:"back",src:"/off-street/Flags/B&W/B&W-back.jpg"},{type:"random",id:10,class:"three flag-image2",name:"oldboards",src:"/off-street/Flags/old-boards.jpg"}].map((function(e){return r.a.createElement("div",{key:e.id,className:"box"},r.a.createElement("div",null,r.a.createElement("h1",null,e.class),r.a.createElement("img",{className:e.class,src:e.src,alt:e.name})))}))),J=function(){return r.a.createElement("div",{id:"container"},r.a.createElement("div",{id:"container2"},q))},U=(t(96),function(){return r.a.createElement("div",{className:"contact-page"},r.a.createElement("h1",null,"Contact Page"))}),Y=(t(97),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement(y,{heading:"Shop"}),r.a.createElement(D,null),r.a.createElement(W,null),r.a.createElement(S,null))}}]),t}(r.a.Component)),z=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={background:"img1 App"},e.listenScrollEvent=function(a){window.scrollY>2e3&&window.scrollY<=3800?e.setState({background:"img2 App"}):window.scrollY>3800?e.setState({background:"img3 App"}):e.setState({background:"img1 App"})},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenScrollEvent)}},{key:"render",value:function(){return r.a.createElement(d.ParallaxProvider,null,r.a.createElement("div",{className:this.state.background},r.a.createElement(k,null),r.a.createElement("div",null,r.a.createElement(u.a,{exact:!0,path:"/",render:function(){return r.a.createElement(G,null)}}),r.a.createElement(u.a,{path:"/about",render:function(){return r.a.createElement(A,null)}}),r.a.createElement(u.a,{path:"/gallery",render:function(){return r.a.createElement(J,null)}}),r.a.createElement(u.a,{path:"/contact",render:function(){return r.a.createElement(U,null)}}),r.a.createElement(u.a,{path:"/shop",render:function(){return r.a.createElement(Y,null)}}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=t(24),K=r.a.createElement(I.a,null,r.a.createElement(z,null));c.a.render(K,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,a,t){},43:function(e,a,t){e.exports=t(101)},48:function(e,a,t){},68:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){}},[[43,1,2]]]);
//# sourceMappingURL=main.45ba1edf.chunk.js.map