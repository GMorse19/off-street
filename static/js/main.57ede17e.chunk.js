(this["webpackJsonpoff-street"]=this["webpackJsonpoff-street"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},138:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),o=a.n(r),c=(a(65),a(6)),i=a(7),s=a(9),m=a(8),u=a(10),d=a(13),f=(a(85),a(48)),p=a(49),g=a(50),h=a(24),E={button:{burger:"/off-street/burger.png"},media:{facebook:"/off-street/Stock/facebook.svg",twitter:"/off-street/Stock/twitter.svg",pinterest:"/off-street/Stock/pinterest.svg"},logo:{logo:"/off-street/Logo/OSLogo.png"}},b={stock:{workShop:"/off-street/Stock/carpenter.jpg",workShopSmall:"/off-street/Stock/carpenterSmall.jpg",birdHouse:"/off-street/Stock/birdHouse.jpg",chalkBoard:"/off-street/Stock/Chalk.png",standardFlag:"/off-street/Flags/RedWhite&Blue/FlagCutOut.png",standardFlagSmall:"/off-street/Flags/RedWhite&Blue/FlagCutOutSmall.png",oldBoards:"/off-street/Flags/old-boards.jpg",redLine:"/off-street/Flags/RedLine/FireFlagCutOut.jpg",contactBanner:"/off-street/Stock/carp-banner.jpg",debris:"/off-street/Stock/debris.jpg",debrisSmall:"/off-street/Stock/debrisSmall.jpg",junkyard:"/off-street/Stock/junkyard.jpg",jobSite:"/off-street/Stock/jobSite.jpg",woodBg:"/off-street/Stock/wood-bg.jpg",bottleOpener:"/off-street/Stock/BottleOpenerSet.jpg",logo:"/off-street/Logo/OSLogo.png"}},k=["/off-street/Logo/LogoOS.png","/off-street/Logo/OSLogo.png"],y=(a(101),function(e){return l.a.createElement("div",null,l.a.createElement(d.Parallax,{className:"custom-class",y:[e.left,e.right],tagOuter:"figure"},l.a.createElement("img",{className:"home-logo-gallery",alt:"logo",src:k[1]})))}),v=(a(102),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({menuOpen:e.isOpen})},n.hoverButton=function(e){n.setState({image:e})},n.closeMenu=function(){n.setState({menuOpen:!1,image:""})},n.toggleMenu=function(){n.setState((function(e){return{menuOpen:!e.menuOpen}}))},n.imageSelector=function(e){return e},n.images={home:b.stock.standardFlag,about:b.stock.workShop,shop:b.stock.birdHouse,contact:b.stock.chalkBoard,gallery:b.stock.oldBoards,donations:b.stock.workShop},n.state={menuOpen:!1,image:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.menuOpen,n=t.image;return l.a.createElement("div",{className:"header"},l.a.createElement(f.fallDown,{className:"menu",isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleChange(t)},width:"100vw"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(g.a,null,l.a.createElement(h.a,{lg:6,xs:6,className:a?"logo-menu-down":"logo-menu"},l.a.createElement("div",{className:"logofloat-padding"},l.a.createElement(y,{left:-30,right:30})),l.a.createElement("div",{className:""},l.a.createElement("img",{key:n,className:a?"image-menu fade-in":"image-menu-closed fade-in",src:this.images["".concat(n)],alt:n}))),l.a.createElement(h.a,{lg:6,xs:6,className:"page-menu"},l.a.createElement("button",{onClick:this.closeMenu,className:"close-button"},"X"),l.a.createElement("div",{className:a?"menu-link-open":"menu-link"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{name:"home",className:"a-link-menu",onMouseOver:function(){return e.hoverButton("home")},onClick:function(){return e.closeMenu()},href:"#/"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{name:"about",className:"a-link-menu",onMouseOver:function(){return e.hoverButton("about")},onClick:function(){return e.closeMenu()},href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{name:"shop",className:"a-link-menu",onMouseOver:function(){return e.hoverButton("shop")},onClick:function(){return e.closeMenu()},href:"#shop"},"Shop")),l.a.createElement("li",null,l.a.createElement("a",{name:"contact",className:"a-link-menu",onMouseOver:function(){return e.hoverButton("contact")},onClick:function(){return e.closeMenu()},href:"#contact"},"Contact")),l.a.createElement("li",null,l.a.createElement("a",{name:"gallery",className:"a-link-menu",onMouseOver:function(){return e.hoverButton("gallery")},onClick:function(){return e.closeMenu()},href:"#gallery"},"Gallery")),l.a.createElement("li",null,l.a.createElement("a",{name:"donations",className:"a-link-menu",onMouseOver:function(){return e.hoverButton("donations")},onClick:function(){return e.closeMenu()},href:"#donations"},"Donations")),l.a.createElement("li",null,l.a.createElement("a",{name:"how-to",className:"a-link-menu",onMouseOver:function(){return e.hoverButton("how-to")},onClick:function(){return e.closeMenu()},href:"#how-to"},"How To")))))))),l.a.createElement("button",{className:"burger-menu"},l.a.createElement("img",{src:E.button.burger,alt:"logo",className:"logo"})))}}]),a}(l.a.Component)),w=a(144),N=(a(103),function(e){return l.a.createElement("div",null,l.a.createElement(p.a,{className:"logo-container"},l.a.createElement(g.a,null,l.a.createElement(h.a,null,l.a.createElement(d.Parallax,{className:"custom-class",y:[-50,50],tagOuter:"figure"},l.a.createElement("img",{className:"home-logo",src:k[1],alt:"rustic"})),l.a.createElement(d.Parallax,{className:"custom-class",y:[-50,50],tagOuter:"figure"},l.a.createElement("div",{className:"title-div"},l.a.createElement("h1",{className:"title"},"Off Street")))),l.a.createElement(h.a,null,l.a.createElement("h1",{className:"tagline"},e.tagline),l.a.createElement("h1",{className:"page-heading"},e.heading),e.tagline&&l.a.createElement(w.a,{className:"splash-shop-button",href:"#shop"},"SHOP")))))}),O={standard:{cutout:"/off-street/Flags/RedWhite&Blue/FlagCutOut.png",front:"/off-street/Flags/RedWhite&Blue/Flag.jpg",sawdust:"/off-street/Flags/RedWhite&Blue/Flag2.jpg",flat:"/off-street/Flags/RedWhite&Blue/Flag-flat.jpg"},fire:{front:"/off-street/Flags/RedLine/FireFlag.jpg",cutout:"/off-street/Flags/RedLine/FireFlagCutOut.jpg"},blackAndWhite:{front:"/off-street/Flags/B&W/B&W.jpg",angle:"/off-street/Flags/B&W/B&W-angle.jpg",back:"/off-street/Flags/B&W/B&W-back.jpg"},random:{oldBoards:"/off-street/Flags/old-boards.jpg"}},C={chalkBoard:{cutout:"/off-street/Stock/Chalk.png"},birdHouse:{front:"/off-street/Stock/birdHouse.jpg"}},j=(a(104),function(e){return l.a.createElement("div",{className:"info-div"},l.a.createElement(d.Parallax,{className:"custom-class",y:[20,-20],tagOuter:"figure"},l.a.createElement("h2",null,e.title),l.a.createElement("span",{className:"info-product-description"},e.description)))}),S=(a(105),function(e){return l.a.createElement(g.a,{className:"rows"},l.a.createElement(h.a,{xs:{span:6,offset:3},md:{span:6,offset:4},lg:{span:6,offset:4}},l.a.createElement("div",{className:"image-wrapper"},l.a.createElement("div",{className:"image-div"},l.a.createElement("img",{className:"flag-image",src:e.image,alt:e.alt})),l.a.createElement("div",{className:"product-container-description"},l.a.createElement(j,{title:e.title,description:e.description})),l.a.createElement(y,{left:e.left,right:e.right}))))}),B={one:{title:"One humans trash...",description:l.a.createElement("p",null,"Re-use, re-purpose, re-invent. Off Street is committed to utilizing left over and forgotten construction debris to create beautifully unique hand crafted items.")},two:{title:"Tells a story...",description:l.a.createElement("p",null,"Authenticated Off Street brand products come with their own unique history. Each piece has a story to tell.")},three:{title:"Green...",description:l.a.createElement("p",null,'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"')},four:{title:"Reclaimed...",description:l.a.createElement("p",null,'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"')},five:{title:"Craftsmen, creators and conservationists.",description:l.a.createElement("p",null,"Off Street Carpentry was born from over twenty five years of witnessing continuous waste amongst the building trades.")},six:{title:"Waste Not Want Not.",description:l.a.createElement("p",null,"Often times on job sites, shorter pieces of wood will be disposed of. They clutter up the work area and are generally moved around so much that they become a nuisance. It's just simply easier and more productive for workers to throw them in the dumpster.")},seven:{title:"One Humans Trash...",description:l.a.createElement("p",null,"Knowing that there could be a better, more creative way to make use of this waste, Off Street made it their mission to find different ways to rescue and re-purpose these forlorn timbers.")},eight:{title:"That's the Spirit!",description:l.a.createElement("p",null,"Good old fashioned American entrepreneurship sparked the first product off the line, Ole' Glory herself. The stars and stripes began the journey, but the possibilities are endless and Off Street's mission is to find a use for all forgotten and discarded wood.")}},F=(a(106),function(){return l.a.createElement("div",{className:"info-section"},l.a.createElement(p.a,{className:"shop-container"},l.a.createElement(S,{image:O.standard.cutout,title:B.five.title,description:B.five.description,alt:"American Flag",left:"90",right:"-100"}),l.a.createElement(S,{image:O.random.oldBoards,title:B.six.title,description:B.six.description,alt:"Boards under American Flag",left:"-90",right:"100"}),l.a.createElement(S,{image:C.chalkBoard.cutout,title:B.seven.title,description:B.seven.description,alt:"Chalk Board",left:"90",right:"-100"}),l.a.createElement(S,{image:O.standard.cutout,title:B.eight.title,description:B.eight.description,alt:"Bird House",left:"-90",right:"100"}),l.a.createElement(S,{image:C.chalkBoard.cutout,title:B.two.title,description:B.two.description,alt:"Bird House",left:"-90",right:"100"})))}),x=a(51),W=a(145),P=(a(42),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(x.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){console.log("Submit!")},e.state={email:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.value;return l.a.createElement(W.a,{onSubmit:this.handleSubmit},l.a.createElement(W.a.Group,null,l.a.createElement(W.a.Control,{autoComplete:"off",className:"form-input",type:"email",name:"email",placeholder:"email",value:e,onChange:this.handleChange})),l.a.createElement(w.a,{type:"submit",className:"form-button"},"Submit"))}}]),a}(n.Component)),M=function(){return l.a.createElement("div",{id:"contact",className:"contact-div"},l.a.createElement(p.a,{fluid:!0,className:"contact-container"},l.a.createElement(g.a,{className:"row"},l.a.createElement(h.a,{className:"cream",xs:12,md:6},l.a.createElement("div",{className:"display"},l.a.createElement("img",{className:"carpenter",src:b.stock.logo,alt:"carpenter"}))),l.a.createElement(h.a,{className:"black",xs:12,md:6},l.a.createElement("div",{className:"black-div"},l.a.createElement("p",{className:"connect-header"},"CONNECT"),l.a.createElement("p",{className:"black-para"},"Join our news letter and stay informed of new products and sales."),l.a.createElement(P,null))))))},L=(a(108),function(){return l.a.createElement("div",{className:"footer"},l.a.createElement(p.a,{className:"footer-container"},l.a.createElement("div",{className:""},l.a.createElement(g.a,null,l.a.createElement(h.a,null,l.a.createElement("h4",{className:"link-header"},"Quick Links"),l.a.createElement("h6",null,l.a.createElement("a",{className:"spacing a-link-menu",href:"#item-shop/flag"},"Flags")),l.a.createElement("h6",null,l.a.createElement("a",{className:"spacing a-link-menu",href:"#shop"},"Shop")),l.a.createElement("h6",null,l.a.createElement("a",{className:"spacing a-link-menu",href:"#gallery"},"Gallery")),l.a.createElement("h6",null,l.a.createElement("a",{className:"spacing a-link-menu",href:"#donations"},"Donations"))),l.a.createElement(h.a,null,l.a.createElement("div",{className:""},l.a.createElement("h4",{className:"link-header"},"Who is Off Street"),l.a.createElement("h6",null,l.a.createElement("a",{className:"spacing a-link-menu",href:"#contact"},"Contact")),l.a.createElement("h6",null,l.a.createElement("a",{className:"spacing a-link-menu",href:"#contact"},"Media")),l.a.createElement("h6",null,l.a.createElement("a",{className:"spacing a-link-menu",href:"#about"},"About"))))))))}),H=(a(109),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement(N,{heading:"About"}),l.a.createElement(F,null),l.a.createElement(M,null),l.a.createElement(L,null))}}]),a}(l.a.Component)),A=(a(110),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleParallax=function(e){var t=window.innerWidth>=800;n.setState({parallax:t})},n.state={props:e,backgroundImage:e.backgroundUrl,parallax:window.innerWidth>=800},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleParallax)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleParallax)}},{key:"render",value:function(){var e=this.state,t=e.props,a=e.backgroundImage,n=e.parallax;return l.a.createElement("div",{className:"inforow-wrapper"},l.a.createElement(d.Parallax,{className:"custom-class",y:n?t.y:t.x,tagOuter:"figure"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(g.a,{className:"inforow-div parallax",style:{padding:t.padding,color:t.sectionColor,backgroundImage:"url(".concat(a,")"),backgroundColor:t.backgroundColor}},l.a.createElement(h.a,{lg:12},l.a.createElement("h1",{style:{color:t.headerColor}},t.header),l.a.createElement("p",{className:"inforow-content",style:{color:t.contentColor}},t.content),t.image&&l.a.createElement("img",{width:300,src:t.image,alt:t.imageName}),t.href&&l.a.createElement("p",null,l.a.createElement(w.a,{className:"inforow-button",style:{backgroundColor:t.buttonColor},href:t.href},t.buttonContent)))))))}}]),a}(l.a.Component)),R=(a(111),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleParallax=function(e){var t=window.innerWidth>=800;n.setState({parallax:t})},n.state={props:e,parallax:window.innerWidth>=800},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleParallax)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleParallax)}},{key:"render",value:function(){var e=this.state,t=e.props,a=e.parallax,n=t.backgroundUrl,r=t.backgroundUrl2;return l.a.createElement("div",null,l.a.createElement(p.a,{fluid:!0,className:"infocol-container"},l.a.createElement(g.a,null,l.a.createElement(h.a,{xs:12,lg:6,style:{backgroundColor:t.backgroundColor,backgroundImage:"url(".concat(n,")")},className:"infocol-col"},l.a.createElement(d.Parallax,{className:"custom-class",y:a?t.y:t.x,tagOuter:"figure"},l.a.createElement("img",{className:"about-image",width:t.width,src:t.image,alt:t.name}),l.a.createElement("h1",null,t.header),l.a.createElement("p",{style:{color:t.color,padding:"2%"}},t.content),t.buttonLink&&l.a.createElement(w.a,{href:t.buttonLink,style:{backgroundColor:t.buttonBackground,borderColor:t.buttonBackground,color:t.buttonColor}},t.buttonContent))),l.a.createElement(h.a,{xs:12,lg:6,style:{backgroundColor:t.backgroundColor2,backgroundImage:"url(".concat(r,")")},className:"infocol-col"},l.a.createElement(d.Parallax,{className:"custom-class",y:a?t.y2:t.x2,tagOuter:"figure"},l.a.createElement("img",{className:"about-image",width:t.width2,src:t.image2,alt:t.name2}),l.a.createElement("p",{style:{color:t.color2,padding:"2%"}},t.content2),t.buttonLink2&&l.a.createElement(w.a,{href:t.buttonLink2,style:{backgroundColor:t.buttonBackground2,borderColor:t.buttonBackground2,color:t.buttonColor2}},t.buttonContent2))),t.col3&&l.a.createElement(h.a,null,l.a.createElement("div",null)))))}}]),a}(l.a.Component)),T=(a(112),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",{className:"home-page-div"},l.a.createElement(N,{tagline:'"Carpentry with a repurpose"'}),l.a.createElement(A,{header:"Rescue, Repurpose, Reinvent",sectionColor:"#e3e1e1",headerFont:"5vh",contentColor:"#DBC2A0",contentFont:"25px",content:"Our mission at Off Street is to rescue the forgotten scraps and cutoffs from construction projects and save them from their inevitable trip to the depths of a dumpster. Re-purpose these forlorn timbers and return a quality hand crafted item with it's own unique history.",buttonColor:"#111",buttonContent:"ABOUT",href:"#about",padding:"2%",backgroundColor:"#555"}),l.a.createElement(A,{y:[-10,10],header:"Unique, hand crafted items.",sectionColor:"#000",headerFont:"5vh",content:"Visit our shop and browse through our one of a kind items, listed weekly.",buttonContent:"SHOP",href:"#item-shop/flag",padding:"7%",backgroundUrl:b.stock.birdHouse}),l.a.createElement(R,{header:"Become a donor.",sectionColor:"#000",headerFont:"5vh",content:"Have extra, unwanted material? Maybe you would like to contribute by becoming an authenticated Off Street builder. Either way, contact Off Street to see how you can help.",contentFont:"25px",buttonColor:"#000",buttonContent:"DONATE",href:"#shop",padding:"6%",backgroundColor:"#e3e1e1",backgroundUrl2:b.stock.jobSite}),l.a.createElement(M,null),l.a.createElement(L,null))}}]),a}(l.a.Component)),D=[{type:"flag",style:"standard",id:"1",class:"one flag-image2",description:l.a.createElement("p",null,"Custom made, hand painted American Flag made with rescue wood from construction sites in the Boston area. Each stripe and union is burned individually."),name:"Full Color American Flag",price:"$40.00",src:"/off-street/Flags/RedWhite&Blue/FlagCutOut.png",gallery:[{src:"/off-street/Flags/RedWhite&Blue/Flag.jpg",id:1},{src:"/off-street/Flags/RedWhite&Blue/Flag2.jpg",id:2},{src:"/off-street/Flags/RedWhite&Blue/Flag.jpg",id:3},{src:"/off-street/Flags/RedWhite&Blue/Flag-flat.jpg",id:4},{src:"/off-street/Flags/B&W/B&W-back.jpg",id:5}]},{type:"flag",style:"standard",id:"2",class:"two flag-image2",name:"front",src:"/off-street/Flags/RedWhite&Blue/Flag.jpg"},{type:"item",style:"chalk board",id:"11",class:"three flag-image2",description:l.a.createElement("p",null,"Hand Made chalk board and organizer made with re-purposed Off Street rescue wood."),name:"Chalk Board",price:"$60.00",src:"/off-street/Stock/Chalk.png",gallery:[{src:"/off-street/Stock/ChalkSide.jpg",id:1}]},{type:"item",style:"bird house",id:"17",class:"one flag-image2",description:l.a.createElement("p",null,'Hidden compartment bird house. From house keys to adult beverages, hide what ever you like inside this beautifully hand crafted "byrd" house.'),name:"Byrd House",price:"$70.00",src:"/off-street/Stock/birdHouse.jpg",gallery:[{}]},{type:"flag",style:"standard",id:"3",class:"three flag-image2",name:"sawdust",src:"/off-street/Flags/RedWhite&Blue/Flag2.jpg"},{type:"flag",style:"standard",id:"4",class:"two flag-image2",name:"flat",src:"/off-street/Flags/RedWhite&Blue/Flag-flat.jpg"},{type:"flag",style:"fire",id:"5",class:"four flag-image2",description:l.a.createElement("p",null,"Honor your fire fighters with this hand crafted, carefully burned fire flag."),name:"Fire Flag",price:"$40.00",src:"/off-street/Flags/RedLine/FireFlagCutOut.jpg",gallery:[{src:"/off-street/Flags/RedLine/FireFlag.jpg",id:1},{src:"/off-street/Flags/B&W/B&W-back.jpg",id:2}]},{type:"flag",style:"fire",id:"6",class:"three flag-image2",name:"cutout",src:"/off-street/Flags/RedLine/FireFlag.jpg"},{type:"flag",style:"blackAndWhite",id:"7",class:"one flag-image2",description:l.a.createElement("p",null,"Black and white hand burned flag."),name:"front",price:"$40.00",src:"/off-street/Flags/B&W/B&W.jpg",gallery:[{src:"/off-street/Flags/B&W/B&W-angle.jpg",id:1},{src:"/off-street/Flags/B&W/B&W-back.jpg",id:2}]},{type:"flag",style:"blackAndWhite",id:"8",class:"four flag-image2",name:"angle",src:"/off-street/Flags/B&W/B&W-angle.jpg"},{type:"flag",style:"blackAndWhite",id:"9",class:"two flag-image2",name:"back",src:"/off-street/Flags/B&W/B&W-back.jpg"},{type:"flag",style:"random",id:"10",class:"three flag-image2",name:"oldboards",src:"/off-street/Flags/old-boards.jpg"},{type:"item",style:"pumpkin",id:"16",class:"three flag-image2",description:l.a.createElement("p",null,"Halloween jack-o-lantern made from 4x4 block."),name:"Block Pumkin",price:"$10.00",src:"/off-street/Stock/4x4Pump.jpg",gallery:[{}]},{type:"item",style:"bottle opener",id:"12",class:"two flag-image2",description:l.a.createElement("p",null,"One of a kind bottle opener and hook set made from one piece of re-purposed fir and hardware."),story:l.a.createElement("p",null,"This piece was made from a stud that was removed from a house in Newton MA during a renovation in 2015. The house was originally built in 1896."),name:"Bottle Opener",price:"$50.00",src:"/off-street/Stock/BottleOpenerSet.jpg",gallery:[{src:"/off-street/Stock/BottleOpenerCloseUp.jpg",id:1},{src:"/off-street/Stock/BottleOpenerParts.jpg",id:2}]},{type:"item",style:"chalk board",id:"13",class:"one flag-image2",name:"Chalk Board",src:"/off-street/Stock/ChalkSide.jpg"},{type:"item",style:"pumkin",description:l.a.createElement("p",null,"One of a kind Pumkin cutout made with scrap plywood."),id:"14",class:"three flag-image2",name:"Jack-O-Lantern",price:"$30.00",src:"/off-street/Stock/PlyWoodPump.jpg",gallery:[{}]},{type:"item",style:"table",id:"15",class:"two flag-image2",name:"Scrap Wood Table",price:"$99.95",src:"/off-street/Stock/TableMashup.jpg",gallery:[{}]}],I=(a(113),D.sort((function(){return Math.random()-.5})).map((function(e){return l.a.createElement("div",{key:e.id,className:"box"},l.a.createElement("div",null,l.a.createElement("a",{href:"#/description/".concat(e.id)},l.a.createElement("img",{className:e.class,src:e.src,alt:e.name}))))}))),U=function(){return l.a.createElement("div",{className:"gallery-background"},l.a.createElement("div",{className:"gallery-words"},l.a.createElement("p",null,"Gallery")),l.a.createElement("div",{id:"container"},l.a.createElement("div",{id:"container2"},I)))},q=(a(114),function(){return l.a.createElement("div",{className:"contact-page"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(g.a,null,l.a.createElement(h.a,{className:"heading-contact-div"},l.a.createElement("h1",{className:"heading-contact"},"Contact Off Street"))),l.a.createElement(g.a,{className:"contact-page-info"},l.a.createElement(h.a,null,l.a.createElement("h4",{className:"contact-link-header"},"CUSTOMER SERVICE"),l.a.createElement("a",{className:"contact-page-link",href:"#/"},"Email Customer Service"),l.a.createElement("h6",null,"Monday - Friday"),l.a.createElement("h6",null," 9am - 5pm ET"),l.a.createElement("h6",null,"Phone#",l.a.createElement("a",{className:"contact-page-link",href:"/"}," (617)-555-5555")),l.a.createElement("h6",null,"Donate")),l.a.createElement(h.a,null,l.a.createElement("h4",{className:"contact-link-header"},"OFFICE"),l.a.createElement("h6",null,"4567 West Belcherton St."),l.a.createElement("h6",null,"Boston, MA 014560")),l.a.createElement(h.a,null,l.a.createElement("h4",{className:"contact-link-header"},"CONNECT WITH US"),l.a.createElement("a",{className:"contact-page-link",href:"/"},l.a.createElement("img",{src:E.media.facebook,alt:"facebook",width:"30px"})),l.a.createElement("br",null),l.a.createElement("a",{className:"contact-page-link",href:"/"},l.a.createElement("img",{src:E.media.twitter,alt:"twitter",width:"30px"})),l.a.createElement("br",null),l.a.createElement("a",{className:"contact-page-link",href:"/"},l.a.createElement("img",{src:E.media.pinterest,alt:"pinterest",width:"30px"})),l.a.createElement("br",null)))))}),z=(a(115),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement(N,{heading:"Shop"}),l.a.createElement(A,{backgroundColor:"#e7eeed",backgroundUrl:b.stock.woodBg,header:l.a.createElement("span",null,"Craftsmen, creators and conservationists."),sectionColor:"#e7eeed",headerFont:"7vh",content:l.a.createElement("span",null,"Building a cleaner, brighter world one board at a time."),buttonContent:"Shop",href:"#item-shop/item",padding:"7%"}),l.a.createElement(R,{name:"American Flag",backgroundColor:"#000",backgroundColor2:"#f3edbe",image:b.stock.standardFlag,fontSize2:"4vh",y:[-20,20],width:"300",content2:l.a.createElement("span",null,"Check out our list of Hand crafted flags"),buttonContent:"SHOP",buttonLink:"#item-shop/flag",buttonBackground:"#e3e1e1",buttonColor:"#000"}),l.a.createElement(R,{name:"",name2:"Bottle Opener",backgroundColor:"#e3e1e1",backgroundColor2:"#000",backgroundImage:"",backgroundImage2:"",buttonBackground:"#f3edbe",buttonBackground2:"",buttonColor:"#000",buttonColor2:"",buttonContent:"SHOP",buttonContent2:"",buttonLink:"#item-shop/item",buttonLink2:"",content:l.a.createElement("span",null,"One of a kind bottle opener and hook set. Perfect for any she shed or man cave."),content2:"",fontSize:"4vh",fontSize2:"",image:"",image2:b.stock.bottleOpener,x:[0,0],y:[0,0],width:"300"}),l.a.createElement(R,{name:"Bird House",name2:"",backgroundColor:"#000",backgroundColor2:"#f3edbe",backgroundImage:"",backgroundImage2:"",buttonBackground:"",buttonBackground2:"#e3e1e1",buttonColor:"",buttonColor2:"#000",buttonContent:"",buttonContent2:"SHOP",buttonLink:"",buttonLink2:"#item-shop/item",color:"",color2:"#000",content:"",content2:l.a.createElement("span",null,"Browse through a catalog of our unique hand made items."),fontSize:"",fontSize2:"4vh",image:b.stock.birdHouse,image2:"",x:[0,0],y:[0,0],width:"300"}),l.a.createElement(A,{sectionColor:"#FFF",padding:"7%",backgroundUrl:b.stock.contactBanner}),l.a.createElement(M,null),l.a.createElement(L,null))}}]),a}(l.a.Component)),$=(a(116),function(){return l.a.createElement("div",{id:"donations"},l.a.createElement("div",{className:"donation-header"},l.a.createElement("p",null,"Acceptable Donations -- What Does Off Street Take?")),l.a.createElement("div",{className:"donation-sub-header"},l.a.createElement("p",null,"Off Street is constantly searching for new ways to re-purpose unwanted materials. Our list of acceptable items will always be changing. Please contact us with any questions about what we do and do not accept."),l.a.createElement(w.a,{variant:"secondary",href:"#contact"},"Contact")),l.a.createElement("div",{className:"donation-content"},l.a.createElement(p.a,null,l.a.createElement(g.a,null,l.a.createElement(h.a,{lg:6,sm:6,xs:12},l.a.createElement("div",{className:"donation-col"},l.a.createElement("h1",null,"Wood"),l.a.createElement("p",null,"If you're running a construction project and have any excess materials that were destined for the landfill, please contact us. We are interested in any cutoffs and scraps as long as they're at least two feet in length and any older pieces of scrap lumber from demolition. No need to remove Nails and screws. We can take care of that part. We just want to save the wood."),l.a.createElement("p",null,"Below, you can find examples of what Off Street is interested in. This is by no means a complete list, so don't hesitate to contact us if you have any questions."),l.a.createElement("ul",null,l.a.createElement("li",null,"Dimensional lumber no shorter than two feet"),l.a.createElement("li",null,"2x4 -- 2x12"),l.a.createElement("li",null,"4X4 -- 6x6"),l.a.createElement("li",null,"Plywood no smaller than 2'x2'"),l.a.createElement("li",null,"Strapping"),l.a.createElement("li",null,"ledger board")))),l.a.createElement(h.a,{lg:6,sm:6,xs:12},l.a.createElement("div",{className:"donation-col"},l.a.createElement("h1",null,"Hardware"),l.a.createElement("p",null,"Are you removing old doors and windows? Random pieces of old furniture? Any old or worn out hardware items that no longer function as they were originally intended, Off Street is interested in re-purposing them."),l.a.createElement("p",null,"Below are some examples of what we like to work with."),l.a.createElement("ul",null,l.a.createElement("li",null,"Hinges/ hinge pins"),l.a.createElement("li",null,"Door knobs"),l.a.createElement("li",null,"Strike plates"),l.a.createElement("li",null,"Latches, hooks"),l.a.createElement("li",null,"Bolts, Screws, Nails"),l.a.createElement("li",null,"Anything that looks cool or unique")))),l.a.createElement(h.a,{lg:6,sm:6,xs:12},l.a.createElement("div",{className:"donation-col"},l.a.createElement("h1",null,"Tools"),l.a.createElement("p",null,"Do you have any old tools laying around collecting dust? Maybe you have come across some in a remodeling project? Off Street is interested in them. Rusty, broken, or seemingly useless tools need a home and we can often times match them up with rescue wood and create something of value."),l.a.createElement("p",null,"Example list, below. Please contact us if you have any questions."),l.a.createElement("ul",null,l.a.createElement("li",null,"Wrenches"),l.a.createElement("li",null,"Hammers"),l.a.createElement("li",null,"Screw Drivers"),l.a.createElement("li",null,"Hand Saws"),l.a.createElement("li",null,"Chisels"),l.a.createElement("li",null,"Putty Knives/ Trowels"),l.a.createElement("li",null)))))),l.a.createElement("div",{className:"donation-footer"},l.a.createElement(L,null))))}),G=a(146),J=(a(117),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={id:e.props.match.params.id,type:D.find((function(t){return t.id===e.props.match.params.id})).type,src:D.find((function(t){return t.id===e.props.match.params.id})).src,name:D.find((function(t){return t.id===e.props.match.params.id})).name,description:D.find((function(t){return t.id===e.props.match.params.id})).description,price:D.find((function(t){return t.id===e.props.match.params.id})).price,gallery:D.find((function(t){return t.id===e.props.match.params.id})).gallery},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.state,t=e.src,a=e.name,n=e.description,r=e.price,o=e.gallery,c=e.type,i=[];return o&&(i=o.map((function(e){return l.a.createElement(G.a.Item,{key:e.id},l.a.createElement("div",null,l.a.createElement("img",{className:"product-image-jsx",src:e.src,alt:e.name}),l.a.createElement("h1",null,e.name)))}))),l.a.createElement("div",{className:"product-display"},l.a.createElement(p.a,null,l.a.createElement(g.a,null,l.a.createElement(h.a,null,l.a.createElement("h1",null,a))),l.a.createElement(g.a,{className:"justify-content-md-center description-row"},l.a.createElement(h.a,{lg:8},l.a.createElement("div",{className:"product-description"},l.a.createElement("span",null,n),l.a.createElement("p",null,"Price: ",r)))),l.a.createElement(g.a,null,l.a.createElement(h.a,null,l.a.createElement("img",{className:"product-image",src:t,alt:a}))),l.a.createElement(g.a,{className:"justify-content-md-center description-row"},l.a.createElement(h.a,{lg:2,md:2,sm:4,xs:4},l.a.createElement(w.a,{className:"product-display-button",href:"#shop"},"Purchase")),l.a.createElement(h.a,{lg:2,md:2,sm:4,xs:4},l.a.createElement(w.a,{className:"product-display-button",href:"#item-shop/".concat(c)},c," SHOP")),l.a.createElement(h.a,{lg:2,md:2,sm:4,xs:4},l.a.createElement(w.a,{className:"product-display-button",href:"#gallery"},"Gallery"))),l.a.createElement(g.a,{className:"justify-content-md-center description-row"}),l.a.createElement(g.a,null,l.a.createElement(h.a,null,o&&l.a.createElement(G.a,null,i)))))}}]),a}(l.a.Component)),Y=(a(118),function(e){return l.a.createElement("div",{className:"product-info"},l.a.createElement(p.a,null,l.a.createElement(g.a,null,l.a.createElement(h.a,{lg:12},l.a.createElement("h1",null,e.header))),l.a.createElement("h1",null,e.props)))}),K=(a(119),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={type:e.props.match.params.id},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){var e=this.state.type,t=D.filter((function(t){return t.type===e})).map((function(e){return l.a.createElement(g.a,{className:"justify-content-md-center"},l.a.createElement(h.a,{lg:6},l.a.createElement("div",{key:e.id,className:"itemshop"},l.a.createElement("div",{className:"itemshop-jsx"},l.a.createElement("p",{className:"itemshop-title"},e.name),l.a.createElement("a",{href:"#/description/".concat(e.id)},l.a.createElement("img",{className:"itemshop-image",src:e.src,alt:e.name})),l.a.createElement("span",{className:"itemshop-description"},e.description),l.a.createElement("p",null,l.a.createElement(w.a,{href:"#/description/".concat(e.id),className:"itemshop-button"},"Purchase"))))))}));return l.a.createElement("div",null,l.a.createElement(Y,{props:t,header:e}))}}]),a}(l.a.Component)),V=(a(120),a(55)),X=a.n(V),Q=(a(138),function(e){return l.a.createElement("div",{className:"video"},l.a.createElement(p.a,null,l.a.createElement(g.a,null,l.a.createElement(h.a,null,l.a.createElement("div",null,l.a.createElement("p",{className:"video-header"},e.header),l.a.createElement("p",{className:"video-description"},e.description)))),l.a.createElement(g.a,{className:"video-player"},l.a.createElement(h.a,{lg:{span:8,offset:2}},l.a.createElement(X.a,{url:e.url,width:"100%",height:"100%",controls:!0}))),l.a.createElement(g.a,null,l.a.createElement(h.a,null,l.a.createElement("div",{className:"video-pdf-div"},e.pdf&&l.a.createElement("a",{href:e.pdf},e.pdfName))))))}),Z=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"how-to"},l.a.createElement(Q,{url:"https://youtu.be/3PkN5NJ7Aco",header:"American Flag Build",description:"A quick video showing the details behind building an Off Street flag"}))}}]),a}(l.a.Component),_=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={background:"img1 App"},e.listenScrollEvent=function(t){window.scrollY>1e3&&window.scrollY<=3e3?e.setState({background:"img2 App"}):window.scrollY>3e3?e.setState({background:"img3 App"}):e.setState({background:"img1 App"})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenScrollEvent)}},{key:"render",value:function(){return l.a.createElement(d.ParallaxProvider,null,l.a.createElement("div",{className:this.state.background},l.a.createElement(v,null),l.a.createElement("div",null,l.a.createElement(u.a,{exact:!0,path:"/",render:function(){return l.a.createElement(T,null)}}),l.a.createElement(u.a,{path:"/about",render:function(){return l.a.createElement(H,null)}}),l.a.createElement(u.a,{path:"/gallery",render:function(){return l.a.createElement(U,null)}}),l.a.createElement(u.a,{path:"/contact",render:function(){return l.a.createElement(q,null)}}),l.a.createElement(u.a,{path:"/shop",render:function(){return l.a.createElement(z,null)}}),l.a.createElement(u.a,{path:"/donations",render:function(){return l.a.createElement($,null)}}),l.a.createElement(u.a,{path:"/description/:id",render:function(e){return l.a.createElement(J,{props:e})}}),l.a.createElement(u.a,{path:"/item-shop/:id",render:function(e){return l.a.createElement(K,{props:e})}}),l.a.createElement(u.a,{path:"/how-to",render:function(){return l.a.createElement(Z,null)}}))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=a(29),te=l.a.createElement(ee.a,null,l.a.createElement(_,null));o.a.render(te,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,a){},60:function(e,t,a){e.exports=a(142)},65:function(e,t,a){},85:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.57ede17e.chunk.js.map