(this["webpackJsonpoff-street"]=this["webpackJsonpoff-street"]||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){},102:function(e,a,t){},103:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){},106:function(e,a,t){},107:function(e,a,t){},108:function(e,a,t){},109:function(e,a,t){},110:function(e,a,t){},111:function(e,a,t){},115:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),c=t.n(r),s=(t(59),t(10)),o=t(11),i=t(13),m=t(12),u=t(6),d=t(7),g=(t(79),t(43)),f=t(44),h=t(45),E=t(22),p={button:{burger:"/off-street/burger.png"},media:{facebook:"/off-street/facebook.svg",twitter:"/off-street/twitter.svg",pinterest:"/off-street/pinterest.svg"}},v={stock:{workShop:"/off-street/carpenter.jpg",birdHouse:"/off-street/birdHouse.jpg",chalkBoard:"/off-street/Chalk.png",standardFlag:"/off-street/Flags/RedWhite&Blue/FlagCutOut.png",oldBoards:"/off-street/Flags/old-boards.jpg",redLine:"/off-street/Flags/RedLine/FireFlagCutOut.jpg",contactBanner:"/off-street/carp-banner.jpg"}},N=["/off-street/Logo/LogoOS.png","/off-street/Logo/OSLogo.png"],b=(t(95),function(e){return l.a.createElement("div",null,l.a.createElement(d.Parallax,{className:"custom-class",y:[e.left,e.right],tagOuter:"figure"},l.a.createElement("img",{className:"home-logo-gallery",alt:"logo",src:N[1]})))}),k=(t(96),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState({menuOpen:e.isOpen})},n.hoverButton=function(e){n.setState({image:e})},n.closeMenu=function(){n.setState({menuOpen:!1,image:""})},n.toggleMenu=function(){n.setState((function(e){return{menuOpen:!e.menuOpen}}))},n.imageSelector=function(e){return e},n.images={home:v.stock.standardFlag,about:v.stock.workShop,shop:v.stock.birdHouse,contact:v.stock.chalkBoard,gallery:v.stock.oldBoards},n.state={menuOpen:!1,image:""},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.menuOpen,n=a.image;return l.a.createElement("div",{className:"header"},l.a.createElement(g.fallDown,{className:"menu",isOpen:this.state.menuOpen,onStateChange:function(a){return e.handleChange(a)},width:"100vw"},l.a.createElement(f.a,{fluid:!0},l.a.createElement(h.a,null,l.a.createElement(E.a,{lg:6,xs:6,className:t?"logo-menu-down":"logo-menu"},l.a.createElement("div",{className:"logofloat-padding"},l.a.createElement(b,{left:-30,right:30})),l.a.createElement("div",{className:""},l.a.createElement("img",{key:n,className:t?"image-menu fade-in":"image-menu-closed fade-in",src:this.images["".concat(n)],alt:n}))),l.a.createElement(E.a,{lg:6,xs:6,className:"page-menu"},l.a.createElement("button",{onClick:this.closeMenu,className:"close-button"},"X"),l.a.createElement("div",{className:t?"menu-link-open":"menu-link"},l.a.createElement("a",{name:"home",className:"a-link-menu",onMouseOver:function(){return e.hoverButton("home")},onClick:function(){return e.closeMenu()},href:"#/"},"Home"),l.a.createElement("a",{name:"about",className:"a-link-menu",onMouseOver:function(){return e.hoverButton("about")},onClick:function(){return e.closeMenu()},href:"#about"},"About"),l.a.createElement("a",{name:"shop",className:"a-link-menu",onMouseOver:function(){return e.hoverButton("shop")},onClick:function(){return e.closeMenu()},href:"#shop"},"Shop"),l.a.createElement("a",{name:"contact",className:"a-link-menu",onMouseOver:function(){return e.hoverButton("contact")},onClick:function(){return e.closeMenu()},href:"#contact"},"Contact"),l.a.createElement("a",{name:"gallery",className:"a-link-menu",onMouseOver:function(){return e.hoverButton("gallery")},onClick:function(){return e.closeMenu()},href:"#gallery"},"Gallery")))))),l.a.createElement("button",{className:"burger-menu"},l.a.createElement("img",{src:p.button.burger,alt:"logo",className:"logo"})))}}]),t}(l.a.Component)),w=(t(97),function(e){return l.a.createElement("div",null,l.a.createElement(f.a,{className:"logo-container"},l.a.createElement(h.a,null,l.a.createElement(E.a,null,l.a.createElement(d.Parallax,{className:"custom-class logo-div",y:[-50,50],tagOuter:"figure"},l.a.createElement("img",{className:"home-logo",width:"300px",src:N[1],alt:"rustic"})),l.a.createElement("h1",{className:"page-heading"},e.heading)),l.a.createElement(E.a,null,l.a.createElement(d.Parallax,{className:"custom-class",y:[-50,50],tagOuter:"figure"},l.a.createElement("div",{className:"title-div"},l.a.createElement("h1",{className:"title"},"Off Street"),l.a.createElement("h5",null,"Carpentry with a re-purpose")))))))}),y={standard:{cutout:"/off-street/Flags/RedWhite&Blue/FlagCutOut.png",front:"/off-street/Flags/RedWhite&Blue/Flag.jpg",sawdust:"/off-street/Flags/RedWhite&Blue/Flag2.jpg",flat:"/off-street/Flags/RedWhite&Blue/Flag-flat.jpg"},fire:{front:"/off-street/Flags/RedLine/FireFlag.jpg",cutout:"/off-street/Flags/RedLine/FireFlagCutOut.jpg"},blackAndWhite:{front:"/off-street/Flags/B&W/B&W.jpg",angle:"/off-street/Flags/B&W/B&W-angle.jpg",back:"/off-street/Flags/B&W/B&W-back.jpg"},random:{oldBoards:"/off-street/Flags/old-boards.jpg"}},O={chalkBoard:{cutout:"/off-street/Chalk.png"},birdHouse:{front:"/off-street/birdHouse.jpg"}},F=(t(98),function(){return l.a.createElement("div",{className:"intro-container"},l.a.createElement("div",{className:"intro-para"},l.a.createElement(f.a,{fluid:!0},l.a.createElement(h.a,{className:"row row-padding"},l.a.createElement(E.a,{className:"margin-top",xs:12,md:6},l.a.createElement(d.Parallax,{className:"custom-class",y:[30,-20],tagOuter:"figure"},l.a.createElement("div",{className:"image-div"},l.a.createElement("img",{className:"flag-image",src:y.random.oldBoards,alt:"old boards and flag"})))),l.a.createElement(E.a,{xs:12,md:6},l.a.createElement(d.Parallax,{className:"custom-class",y:[-20,20],tagOuter:"figure"},l.a.createElement("p",{className:"para-margin-left"},"Off Street Carpentry was born from over twenty five years of witnessing continuous waste amongst the building trades.")))),l.a.createElement(h.a,{className:"row-padding"},l.a.createElement(E.a,{xs:12,md:6},l.a.createElement(d.Parallax,{className:"custom-class",y:[-20,20],tagOuter:"figure"},l.a.createElement("p",{className:"para-margin-right"}," Often times on job sites, shorter pieces of wood will be disposed of. They clutter up the work area and are generally moved around so much that they become a nuisance. It's just simply easier to throw them in the dumpster."))),l.a.createElement(E.a,{className:"margin-top",xs:12,md:6},l.a.createElement(d.Parallax,{className:"custom-class",y:[-60,60],tagOuter:"figure"},l.a.createElement("div",{className:"image-div"},l.a.createElement("img",{className:"flag-image",src:O.chalkBoard.cutout,alt:"Chalk Board"}))))),l.a.createElement(h.a,{className:"row row-padding full-width"},l.a.createElement(E.a,null,l.a.createElement("p",null,"Knowing that there could be a better, creative way to make use of this waste, a true visionary set out to find different ways to rescue these forlorn timbers."))),l.a.createElement(h.a,{className:"row-padding"},l.a.createElement(E.a,{xs:12,md:6},l.a.createElement(d.Parallax,{className:"custom-class",y:[-50,30],tagOuter:"figure"},l.a.createElement("div",{className:"image-div-about"},l.a.createElement("img",{className:"flag-image",src:y.blackAndWhite.front,alt:"Black and White Flag"}))))),l.a.createElement(h.a,{className:"row-padding"},l.a.createElement(E.a,{xs:12,md:6},l.a.createElement(d.Parallax,{className:"custom-class",y:[-20,20],tagOuter:"figure"},l.a.createElement("p",{className:"para-margin-right"},"Good old fashioned American entrepreneurship sparked the first product off the line, Ole' Glory herself. The stars and stripes not only began the journey, but it also opened the door for many more creations to come."))),l.a.createElement(E.a,{className:"margin-top margin-bottom",xs:12,md:6},l.a.createElement(d.Parallax,{className:"custom-class",y:[-50,50],tagOuter:"figure"},l.a.createElement("div",{className:"image-div"},l.a.createElement("img",{className:"flag-image2",src:O.birdHouse.front,alt:"Bird House"}))))))))}),j=t(46),B=t(118),C=t(117),S=(t(40),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).handleChange=function(a){e.setState(Object(j.a)({},a.target.name,a.target.value))},e.handleSubmit=function(){console.log("Submit!")},e.state={email:""},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state.value;return l.a.createElement(B.a,{onSubmit:this.handleSubmit},l.a.createElement(B.a.Group,null,l.a.createElement(B.a.Control,{autoComplete:"off",className:"form-input",type:"email",name:"email",placeholder:"email",value:e,onChange:this.handleChange})),l.a.createElement(C.a,{type:"submit",className:"form-button"},"Submit"))}}]),t}(n.Component)),x=function(){return l.a.createElement("div",{id:"contact",className:"contact-div"},l.a.createElement(f.a,{fluid:!0,className:"contact-container"},l.a.createElement(h.a,{className:"row"},l.a.createElement(E.a,{className:"cream",xs:12,md:6},l.a.createElement("div",null,l.a.createElement("img",{className:"carpenter",src:v.stock.workShop,alt:"carpenter"}),l.a.createElement("img",{className:"carpenter",src:v.stock.workShop,alt:"carpenter"}))),l.a.createElement(E.a,{className:"black",xs:12,md:6},l.a.createElement("div",{className:"black-div"},l.a.createElement("p",{className:"connect-header"},"CONNECT"),l.a.createElement("p",{className:"black-para"},"Join our news letter and stay informed of new products and sales."),l.a.createElement(S,null))))))},W=(t(100),function(){return l.a.createElement("div",{className:"footer"},l.a.createElement(f.a,{className:"footer-container"},l.a.createElement("div",{className:""},l.a.createElement(h.a,null,l.a.createElement(E.a,null,l.a.createElement("h4",null,"Quick Links"),l.a.createElement("h6",null,l.a.createElement("a",{className:"spacing a-link-menu",href:"/"},"Flags")),l.a.createElement("h6",null,l.a.createElement("a",{className:"spacing a-link-menu",href:"/"},"Byrd Houses")),l.a.createElement("h6",null,l.a.createElement("a",{className:"spacing a-link-menu",href:"/"},"Chalk Boards"))),l.a.createElement(E.a,null,l.a.createElement("div",{className:"spacing"},l.a.createElement("h4",{className:""},"Contact Us"),l.a.createElement("h6",null,l.a.createElement("a",{className:"spacing a-link-menu",href:"/"},"Email")),l.a.createElement("h6",null,l.a.createElement("a",{className:"spacing a-link-menu",href:"/"},"Phone")),l.a.createElement("h6",null,l.a.createElement("a",{className:"spacing a-link-menu",href:"#/about"},"AboutPage"))))))))}),A=(t(101),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement(w,{heading:"About"}),l.a.createElement(F,null),l.a.createElement(x,null),l.a.createElement(W,null))}}]),t}(l.a.Component)),R=(t(102),function(){return l.a.createElement("div",{className:"splash-intro-container"},l.a.createElement("div",{className:"splash-intro-para"},l.a.createElement(f.a,{fluid:!0},l.a.createElement(h.a,null,l.a.createElement(E.a,null,l.a.createElement("h1",null,"Rescue, Repurpose, and Return."),l.a.createElement("br",null),l.a.createElement("p",null,"Our mission at Off Street is to ",l.a.createElement("span",{style:{color:"blue"}},"rescue")," the forgotten scraps and cutoffs from construction projects from their inevitable trip to the depths of a dumpster. ",l.a.createElement("span",{style:{color:"blue"}},"Re-purpose")," these forlorn timbers and ",l.a.createElement("span",{style:{color:"blue"}},"return")," a quality hand crafted item with it's own unique history. We like to think of it as a sort of retirement plan for forgotten wood."))))))}),M=(t(103),function(){return l.a.createElement("div",null,l.a.createElement(f.a,{fluid:!0},l.a.createElement(h.a,{className:"row row-padding"},l.a.createElement(E.a,{xs:12,md:6},l.a.createElement("div",{className:"image-div"},l.a.createElement("img",{className:"flag-image",src:y.random.oldBoards,alt:"old boards and flag"}))),l.a.createElement(E.a,{xs:12,md:6},l.a.createElement("div",{className:"image-div"},l.a.createElement("img",{className:"flag-image",src:y.standard.cutout,alt:"American Flag"}))))))}),P=t(119),H=(t(104),function(){return l.a.createElement("div",{className:"carousel-div"},l.a.createElement("h1",null,"Best Sellers"),l.a.createElement(P.a,{className:"carousel-container"},l.a.createElement(P.a.Item,null,l.a.createElement("img",{className:"carousel-image",src:y.standard.cutout,alt:"American Flag",height:"200vh"}),l.a.createElement("img",{className:"carousel-image",src:y.standard.flat,alt:"American Flag",height:"200vh"}),l.a.createElement("img",{className:"carousel-image",src:y.standard.sawdust,alt:"American Flag",height:"200vh"})),l.a.createElement(P.a.Item,null,l.a.createElement("img",{className:"carousel-image",src:y.standard.cutout,alt:"American Flag",height:"200vh"}),l.a.createElement("img",{className:"carousel-image",src:y.standard.flat,alt:"American Flag",height:"200vh"}),l.a.createElement("img",{className:"carousel-image",src:y.standard.sawdust,alt:"American Flag",height:"200vh"})),l.a.createElement(P.a.Item,null,l.a.createElement("img",{className:"carousel-image",src:y.standard.cutout,alt:"American Flag",height:"200vh"}),l.a.createElement("img",{className:"carousel-image",src:y.standard.flat,alt:"American Flag",height:"200vh"}),l.a.createElement("img",{className:"carousel-image",src:y.standard.sawdust,alt:"American Flag",height:"200vh"}))))}),L=(t(105),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",{className:"home-page-div"},l.a.createElement(w,null),l.a.createElement(R,null),l.a.createElement(H,null),l.a.createElement(M,null),l.a.createElement(x,null),l.a.createElement(W,null))}}]),t}(l.a.Component)),T=(t(106),[{type:"standard",id:1,class:"one flag-image2",name:"cutout",src:"/off-street/Flags/RedWhite&Blue/FlagCutOut.png"},{type:"standard",id:2,class:"two flag-image2",name:"front",src:"/off-street/Flags/RedWhite&Blue/Flag.jpg"},{type:"item",id:11,class:"three flag-image2",name:"chalkBoard",src:"/off-street/Chalk.png"},{type:"item",id:12,class:"one flag-image2",name:"Bird House",src:"/off-street/birdHouse.jpg"},{type:"standard",id:3,class:"three flag-image2",name:"sawdust",src:"/off-street/Flags/RedWhite&Blue/Flag2.jpg"},{type:"standard",id:4,class:"two flag-image2",name:"flat",src:"/off-street/Flags/RedWhite&Blue/Flag-flat.jpg"},{type:"fire",id:5,class:"four flag-image2",name:"front",src:"/off-street/Flags/RedLine/FireFlag.jpg"},{type:"fire",id:6,class:"three flag-image2",name:"cutout",src:"/off-street/Flags/RedLine/FireFlagCutOut.jpg"},{type:"blackAndWhite",id:7,class:"one flag-image2",name:"front",src:"/off-street/Flags/B&W/B&W.jpg"},{type:"blackAndWhite",id:8,class:"four flag-image2",name:"angle",src:"/off-street/Flags/B&W/B&W-angle.jpg"},{type:"blackAndWhite",id:9,class:"two flag-image2",name:"back",src:"/off-street/Flags/B&W/B&W-back.jpg"},{type:"random",id:10,class:"three flag-image2",name:"oldboards",src:"/off-street/Flags/old-boards.jpg"}].map((function(e){return l.a.createElement("div",{key:e.id,className:"box"},l.a.createElement("div",null,l.a.createElement("img",{className:e.class,src:e.src,alt:e.name})))}))),I=function(){return l.a.createElement("div",{id:"container"},l.a.createElement("div",{id:"container2"},T))},q=(t(107),function(){return l.a.createElement("div",{className:"contact-page"},l.a.createElement(f.a,{fluid:!0},l.a.createElement(h.a,null,l.a.createElement(E.a,{className:"heading-contact-div"},l.a.createElement("h1",{className:"heading-contact"},"Contact Off Street"))),l.a.createElement(h.a,{className:"contact-page-info"},l.a.createElement(E.a,null,l.a.createElement("h4",{className:"contact-link-header"},"CUSTOMER SERVICE"),l.a.createElement("a",{className:"contact-page-link",href:"#/"},"Email Customer Service"),l.a.createElement("h6",null,"Monday - Friday"),l.a.createElement("h6",null," 9am - 5pm ET"),l.a.createElement("h6",null,"Phone#",l.a.createElement("a",{className:"contact-page-link",href:"/"}," (617)-555-5555")),l.a.createElement("h6",null,"Donate")),l.a.createElement(E.a,null,l.a.createElement("h4",{className:"contact-link-header"},"OFFICE"),l.a.createElement("h6",null,"4567 West Belcherton St."),l.a.createElement("h6",null,"Boston, MA 014560")),l.a.createElement(E.a,null,l.a.createElement("h4",{className:"contact-link-header"},"CONNECT WITH US"),l.a.createElement("a",{className:"contact-page-link",href:"/"},l.a.createElement("img",{src:p.media.facebook,alt:"facebook",width:"30px"})),l.a.createElement("br",null),l.a.createElement("a",{className:"contact-page-link",href:"/"},l.a.createElement("img",{src:p.media.twitter,alt:"twitter",width:"30px"})),l.a.createElement("br",null),l.a.createElement("a",{className:"contact-page-link",href:"/"},l.a.createElement("img",{src:p.media.pinterest,alt:"pinterest",width:"30px"})),l.a.createElement("br",null)))))}),D=(t(108),function(e){return l.a.createElement("div",{className:"info-div"},l.a.createElement(d.Parallax,{className:"custom-class",y:[20,-20],tagOuter:"figure"},l.a.createElement("h2",null,e.title),l.a.createElement("p",null,e.description)))}),G=(t(109),function(e){return l.a.createElement(h.a,{className:"rows"},l.a.createElement(E.a,{xs:{span:6,offset:3},md:{span:6,offset:4},lg:{span:6,offset:4}},l.a.createElement("div",{className:"image-wrapper"},l.a.createElement("div",{className:"image-div"},l.a.createElement("img",{className:"flag-image",src:e.image,alt:e.alt})),l.a.createElement(D,{title:e.title,description:e.description}),l.a.createElement(b,{left:e.left,right:e.right}))))}),U={title:"One mans trash...",description:"Re-use, re-purpose, re-invent. Off Street is committed to utilizing left over and forgotten construction debris to create beautifully unique hand crafted items."},J={title:"Tells a story...",description:'"Rescue Wood" Cut offs and scraps from new house construction to demolition debris, each piece used at Off Street comes with it\'s own unique a history.'},Y={title:"Green...",description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"'},z={title:"Reclaimed...",description:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"'},K=(t(110),function(){return l.a.createElement("div",{className:"info-section"},l.a.createElement(f.a,{className:"shop-container"},l.a.createElement(G,{image:y.standard.cutout,title:U.title,description:U.description,alt:"American Flag",left:"90",right:"-100"}),l.a.createElement(G,{image:y.random.oldBoards,title:J.title,description:J.description,alt:"Boards under American Flag",left:"-90",right:"100"}),l.a.createElement(G,{image:O.chalkBoard.cutout,title:Y.title,description:Y.description,alt:"Chalk Board",left:"90",right:"-100"}),l.a.createElement(G,{image:O.birdHouse.front,title:z.title,description:z.description,alt:"Bird House",left:"-90",right:"100"})))}),Q=(t(111),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement(w,{heading:"Shop"}),l.a.createElement(K,null),l.a.createElement(x,null),l.a.createElement(W,null))}}]),t}(l.a.Component)),V=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={background:"img1 App"},e.listenScrollEvent=function(a){window.scrollY>1e3&&window.scrollY<=2200?e.setState({background:"img2 App"}):window.scrollY>2200?e.setState({background:"img3 App"}):e.setState({background:"img1 App"})},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenScrollEvent)}},{key:"render",value:function(){return l.a.createElement(d.ParallaxProvider,null,l.a.createElement("div",{className:this.state.background},l.a.createElement(k,null),l.a.createElement("div",null,l.a.createElement(u.a,{exact:!0,path:"/",render:function(){return l.a.createElement(L,null)}}),l.a.createElement(u.a,{path:"/about",render:function(){return l.a.createElement(A,null)}}),l.a.createElement(u.a,{path:"/gallery",render:function(){return l.a.createElement(I,null)}}),l.a.createElement(u.a,{path:"/contact",render:function(){return l.a.createElement(q,null)}}),l.a.createElement(u.a,{path:"/shop",render:function(){return l.a.createElement(Q,null)}}))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=t(27),$=l.a.createElement(X.a,null,l.a.createElement(V,null));c.a.render($,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,a,t){},54:function(e,a,t){e.exports=t(115)},59:function(e,a,t){},79:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){}},[[54,1,2]]]);
//# sourceMappingURL=main.bf72bbf6.chunk.js.map