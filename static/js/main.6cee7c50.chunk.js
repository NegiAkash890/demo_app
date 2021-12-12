(this.webpackJsonpmyntra=this.webpackJsonpmyntra||[]).push([[0],{24:function(e,t,c){},35:function(e,t,c){},43:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var i=c(13),n=c(1),r=c.n(n),s=c(12),a=c.n(s),l=(c(35),c(8)),j=c(16),o=c(3),d=c(10),b=c(26),u=c(14),h=c(27),O=c.n(h),m=c(23),x=c(5),f="FETCH_PRODUCTS",p="FILTER_PRODUCTS",v="FILTER_RESET",g="ADD_WISHLIST",y="REMOVE_WISHLIST",_="ADD_CART",w="REMOVE_CART",S="SEARCH_ITEMS",N={cart:[]};var C=c(4),I={items:[],filtered:[]},T=new Map;T.set("Denim",0),T.set("Levi",1),T.set("H&M",2);var R=new Map;R.set("white",0),R.set("blue",1),R.set("grey",2);var E={wishlist:[]};var k=Object(u.a)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case f:return{filtered:Object(x.a)(n),items:Object(x.a)(n)};case p:var r=Object(C.a)(n,3),s=r[0],a=r[1],l=r[2],j=Object(x.a)(e.items),o=j.filter((function(e){return e.Gender===s&&l[T.get(e.Brand)]&&a[R.get(e.Color)]}));return Object(i.a)(Object(i.a)({},e),{},{filtered:Object(x.a)(o)});case v:return Object(i.a)(Object(i.a)({},e),{},{filtered:Object(x.a)(e.items)});case S:var d=Object(x.a)(e.items),b=d.filter((function(e){return e.Title.toLowerCase().includes(n.toLowerCase())}));return Object(i.a)(Object(i.a)({},e),{},{filtered:Object(x.a)(b)});default:return e}},wishlists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,c=t.type,i=t.payload;switch(c){case g:return{wishlist:[].concat(Object(x.a)(e.wishlist),[i])};case y:var n=i,r=e.wishlist.filter((function(e){return n!=e.ShirtId}));return{wishlist:Object(x.a)(r)};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,c=t.type,i=t.payload;switch(c){case _:return{cart:[].concat(Object(x.a)(e.cart),[i])};case w:var n=i,r=e.cart.filter((function(e){return n!=e.ShirtId}));return{cart:Object(x.a)(r)};default:return e}}}),L={key:"store",storage:O.a},F=Object(m.a)(L,k),z=Object(u.b)(F,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),M=(Object(m.b)(z),z),D=(c(43),c(22)),P=c(28),H=(c(24),c(15)),A=c(19),V=c(2),W=function(){var e=Object(d.d)(),t=function(){e.error("Feature not Ready ! Switch of Large Screens")};return Object(V.jsxs)("div",{className:"mobile_left_container",children:[Object(V.jsx)("div",{className:"sort_tab",children:Object(V.jsx)("div",{className:"header",children:Object(V.jsxs)("button",{type:"button",onClick:t,children:[" ",Object(V.jsx)(A.b,{}),"SORT"]})})}),Object(V.jsx)("div",{className:"filter_tab",children:Object(V.jsx)("div",{className:"header",children:Object(V.jsxs)("button",{type:"button",onClick:t,children:[" ",Object(V.jsx)(H.a,{}),"FILTER"]})})})]})},B=function(){var e=Object(l.b)(),t=Object(n.useState)("all"),c=Object(C.a)(t,2),i=c[0],r=c[1],s=Object(n.useState)([!1,!1,!1]),a=Object(C.a)(s,2),j=a[0],o=a[1],d=Object(n.useState)([!1,!1,!1]),b=Object(C.a)(d,2),u=b[0],h=b[1],O=function(e,t){switch(t){case"gender_filter":r(e.target.value);break;case"brand_filter":if("Denim"===e.target.value){var c=Object(x.a)(u);c[0]=!c[0],h(c)}else if("Levi"===e.target.value){var i=Object(x.a)(u);i[1]=!i[1],h(i)}else if("H&M"===e.target.value){var n=Object(x.a)(u);n[2]=!n[2],h(n)}break;case"color_filter":if("white"===e.target.value){var s=Object(x.a)(j);s[0]=!s[0],o(s)}else if("blue"===e.target.value){var a=Object(x.a)(j);a[1]=!a[1],o(a)}else if("grey"===e.target.value){var l=Object(x.a)(j);l[2]=!l[2],o(l)}}},m=Object(D.useMediaQuery)({query:"(min-width:1024px)"}),f=Object(D.useMediaQuery)({query:"(max-width: 1024px)"});return Object(V.jsxs)(V.Fragment,{children:[f&&Object(V.jsx)(W,{}),m&&Object(V.jsxs)("form",{className:"left_container",children:[Object(V.jsxs)("div",{name:"gender",children:[Object(V.jsx)("h2",{id:"filter",children:"FILTERS"}),Object(V.jsxs)("div",{className:"gender_filter",onChange:function(e){return O(e,"gender_filter")},children:[Object(V.jsxs)("label",{htmlFor:"men",children:[Object(V.jsx)("input",{type:"radio",name:"gender",id:"men",value:"men"}),"Men"]}),Object(V.jsxs)("label",{htmlFor:"women",children:[Object(V.jsx)("input",{type:"radio",name:"gender",id:"women",value:"women"}),"Women"]})]})]}),Object(V.jsx)("h3",{children:"Color"}),Object(V.jsxs)("div",{className:"color_filter",onChange:function(e){return O(e,"color_filter")},children:[Object(V.jsxs)("label",{htmlFor:"white",children:[Object(V.jsx)("input",{type:"checkbox",name:"color",id:"white",value:"white"}),"white"]}),Object(V.jsxs)("label",{htmlFor:"blue",children:[Object(V.jsx)("input",{type:"checkbox",name:"color",id:"blue",value:"blue"}),"blue"]}),Object(V.jsxs)("label",{htmlFor:"grey",children:[Object(V.jsx)("input",{type:"checkbox",name:"color",id:"grey",value:"grey"}),"grey"]})]}),Object(V.jsx)("h3",{children:"Brand"}),Object(V.jsxs)("div",{className:"brand_filter",onChange:function(e){return O(e,"brand_filter")},children:[Object(V.jsxs)("label",{htmlFor:"Denim",children:[Object(V.jsx)("input",{type:"checkbox",name:"brand",id:"Denim",value:"Denim"}),"Denim"]}),Object(V.jsxs)("label",{htmlFor:"Levi",children:[Object(V.jsx)("input",{type:"checkbox",name:"brand",id:"Levi",value:"Levi"}),"Levi"]}),Object(V.jsxs)("label",{htmlFor:"H&M",children:[Object(V.jsx)("input",{type:"checkbox",name:"brand",id:"H&M",value:"H&M"}),"H&M"]}),Object(V.jsxs)("div",{className:"button_grp",children:[Object(V.jsx)("button",{type:"button",id:"filter_button",onClick:function(){var t=j.every((function(e){return!1===e})),c=u.every((function(e){return!1===e}));return"all"===i?alert("Please Select a gender"):!0===t?alert("Please Select a color(s)"):!0===c?alert("Please Select a brand(s)"):e({type:p,payload:[i,j,u]})},children:"Apply"}),Object(V.jsx)("button",{type:"button",id:"reset",onClick:function(){r("all");var t=[!1,!1,!1];o(t),h(t),e({type:v})},children:Object(V.jsx)(P.a,{})})]})]})]})]})},G=(c(45),c(29)),U=(c(46),function(e){return{type:g,payload:e}}),X=function(e){var t=e.visible,c=e.toggleVisible,i=e.type,n=Object(l.b)(),r=Object(d.d)(),s=Object(l.c)((function(e){return e})),a=function(e,t){"cart"===t?(n({type:w,payload:e}),r.show("Items removed from Cart")):(n(function(e){return{type:y,payload:e}}(e)),r.show("Items removed from Wishlist"))};return Object(V.jsxs)("div",{className:!0===t?"slider active":"slider hide",children:[Object(V.jsxs)("div",{className:"slider_info",children:[Object(V.jsx)("p",{children:i}),Object(V.jsx)("button",{type:"button",id:"slider_button",onClick:function(){c()},children:"\xd7"})]}),Object(V.jsx)("div",{className:"items_container",children:"Your Cart"===i?s.cart.cart.map((function(e){return Object(V.jsxs)("div",{className:"cart_container",children:[Object(V.jsx)("div",{className:"img",children:Object(V.jsx)("img",{src:e.images.primary,alt:"shirt_image"})}),Object(V.jsxs)("div",{className:"card_body",children:[Object(V.jsxs)("div",{className:"card_info",children:[Object(V.jsx)("strong",{children:e.Title}),Object(V.jsxs)("strong",{children:["Rs.",e.Price]}),Object(V.jsxs)("strong",{children:["For ",e.Gender," | Size : ",e.size]})]}),Object(V.jsx)("div",{children:Object(V.jsx)("button",{type:"button",id:"remove",onClick:function(){a(e.ShirtId,"cart")},children:"Remove"})})]})]},e.shirtId)})):s.wishlists.wishlist.map((function(e){return Object(V.jsxs)("div",{className:"wishlist_container",children:[Object(V.jsx)("div",{className:"img",children:Object(V.jsx)("img",{src:e.images.primary,alt:"shirt_image"})}),Object(V.jsxs)("div",{className:"wishlist_body",children:[Object(V.jsxs)("div",{className:"wishlist_info",children:[Object(V.jsx)("strong",{children:e.Title}),Object(V.jsx)("ul",{className:"size_list",children:e.size.map((function(e){return Object(V.jsx)("li",{children:e})}))}),Object(V.jsxs)("strong",{children:["Rs.",e.Price]})]}),Object(V.jsx)("div",{children:Object(V.jsx)("button",{type:"button",id:"remove",onClick:function(){a(e.ShirtId,"wishlist")},children:"Remove"})})]})]},e.shirtId)}))})]})},Y=function(){var e=Object(l.b)(""),t=Object(o.f)(),c=Object(n.useState)(""),i=Object(C.a)(c,2),r=i[0],s=i[1],a=Object(n.useState)(!1),j=Object(C.a)(a,2),d=j[0],b=j[1],u=function(e){b((function(e){return!e})),s(e)};return Object(V.jsxs)("div",{className:"top_nav",children:[Object(V.jsx)(X,{visible:d,toggleVisible:u,type:r}),Object(V.jsx)("p",{onClick:function(){return t("/")},id:"logo",children:"Myntra"}),Object(V.jsxs)("div",{className:"right_nav",children:[Object(V.jsx)("input",{type:"search",id:"search_input",placeholder:"Search for Shirts",onChange:function(t){var c;e((c=t.target.value,{type:S,payload:c}))}}),Object(V.jsxs)("ul",{className:"nav_link",children:[Object(V.jsx)("li",{children:Object(V.jsxs)("button",{type:"button",onClick:function(){return u("Your Wishlist")},children:[Object(V.jsx)("small",{children:"Wishlist"}),Object(V.jsx)(H.b,{size:"1.2rem",color:"gray"})]})}),Object(V.jsx)("li",{children:Object(V.jsxs)("button",{type:"button",onClick:function(){return u("Your Cart")},children:[Object(V.jsx)("small",{children:"Cart"}),Object(V.jsx)(G.a,{size:"1.2rem",color:"gray"})]})})]})]})]})},q=(c(47),c(30)),J=function(){var e=Object(d.d)(),t=Object(l.b)(),c=Object(o.e)().state,i=Object(n.useState)(""),r=Object(C.a)(i,2),s=r[0],a=r[1];return Object(V.jsxs)("div",{className:"product_container",children:[Object(V.jsxs)("div",{className:"product_left_container",children:[Object(V.jsx)("img",{src:c.img.primary,alt:"main_image"}),Object(V.jsx)("img",{src:c.img.secondary,alt:"secondary_image",height:"100%"})]}),Object(V.jsxs)("div",{className:"product_right_container",children:[Object(V.jsxs)("div",{children:[Object(V.jsx)("h2",{children:c.title}),Object(V.jsxs)("h2",{children:["Rs. ",c.price]}),Object(V.jsx)("h2",{id:"size",children:"Select Size"}),Object(V.jsx)("div",{className:"boxed",onChange:function(e){a(e.target.value)},children:c.size.map((function(e){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("input",{type:"radio",id:e,name:"shirt_size",value:e},e),Object(V.jsx)("label",{htmlFor:e,children:e})]})}))})]}),Object(V.jsxs)("div",{className:"product_button",children:[Object(V.jsx)("button",{type:"button",id:"cart_button",onClick:function(){var i={ShirtId:c.id,Title:c.title,images:c.img,Price:c.price,Gender:c.gender,size:s};e.success("Item of size ".concat(s," added cart")),t({type:_,payload:i})},children:"Add to Cart"}),Object(V.jsx)("button",{type:"button",id:"wishlist_button",onClick:function(){var i={ShirtId:c.id,Title:c.title,images:c.img,Price:c.price,Gender:c.gender,size:c.size};e.success("Item added to Wishlist"),t(U(i))},children:Object(V.jsx)(q.a,{})})]})]})]},c.id)},Q=(c(48),function(e){var t=e.id,c=e.title,i=e.gender,r=e.price,s=e.color,a=e.size,j=e.img,b=e.Rating,u=e.Brand,h=Object(l.b)(),O=Object(o.f)(),m=Object(d.d)(),x=Object(n.useState)("none"),f=Object(C.a)(x,2),p=f[0],v=(f[1],Object(n.useState)("primary")),g=Object(C.a)(v,2),y=g[0],_=g[1];return Object(V.jsxs)("div",{role:"navigation",className:"card_container",onMouseEnter:function(){return _("secondary")},onMouseLeave:function(){return _("primary")},children:[Object(V.jsx)("div",{role:"navigation",className:"img",onClick:function(){var e={id:t,title:c,gender:i,price:r,color:s,size:a,img:j};O("/product/".concat(t),{state:e})},children:Object(V.jsx)("img",{src:j[y],alt:"shirt_image",width:"240px",height:"360px"})}),Object(V.jsxs)("div",{className:"card_body",children:[Object(V.jsxs)("div",{className:"card_info",children:[Object(V.jsx)("strong",{children:c}),Object(V.jsxs)("strong",{children:["$",r," |"," ",Object(V.jsxs)("span",{children:[" ",Object(V.jsx)(H.c,{}),b]}),Object(V.jsxs)("span",{children:[" | ",u]})]})]}),Object(V.jsxs)("button",{type:"button",id:"wishlist_button",onClick:function(){var e={ShirtId:t,Title:c,images:j,Price:r,Gender:i,size:a};m.success("Item added to wishlist"),h(U(e))},children:[" ",Object(V.jsx)(H.b,{title:"Add to Wishlist"})]}),Object(V.jsx)("button",{type:"button",className:"view_more",style:{display:"".concat(p)},children:Object(V.jsx)(A.a,{})})]})]})}),$=(c(49),function(){var e=Object(n.useState)([]),t=Object(C.a)(e,2),c=(t[0],t[1]),i=Object(l.c)((function(e){return e.products.filtered})),r=Object(n.useState)(""),s=Object(C.a)(r,2),a=(s[0],s[1]),j=Object(l.b)();Object(n.useEffect)((function(){fetch("https://api.npoint.io/e41ba6bd432b54fa051f").then((function(e){return e.json()})).then((function(e){c(e),j(function(e){return{type:f,payload:e}}(e))})).catch((function(e){return console.log(e)}))}),[]);return Object(V.jsxs)("div",{className:"right_container",children:[Object(V.jsx)("form",{children:Object(V.jsxs)("select",{onChange:function(e){switch(a(e.target.value),e.target.value){case"ascn":return i.sort((function(e,t){return parseInt(e.Price,10)>parseInt(t.Price,10)?1:-1}));case"desc":return i.sort((function(e,t){return parseInt(e.Price,10)>parseInt(t.Price,10)?-1:1}));case"tren":return i.sort((function(e,t){return parseInt(e.Rating,10)>parseInt(t.Rating,10)?-1:1}));default:return i}},defaultValue:"default",children:[Object(V.jsx)("option",{value:"default",children:"Default Value"}),Object(V.jsx)("option",{value:"ascn",children:"Price: Low to High"}),Object(V.jsx)("option",{value:"desc",children:"Price: Hight to Low"}),Object(V.jsx)("option",{value:"tren",children:"Trending: Customer Rating"})]})}),Object(V.jsx)("div",{className:"product_list",children:i===[]?Object(V.jsx)("h2",{children:"No Items to Show ;)"}):null===i||void 0===i?void 0:i.map((function(e){return Object(V.jsx)(Q,{id:e.ShirtId,title:e.Title,gender:e.Gender,price:parseFloat(e.Price),color:e.Color,img:e.images,size:e.size,Brand:e.Brand,Rating:parseFloat(e.Rating)},e.ShirtId)}))})]})}),K=function(){return Object(V.jsx)("div",{className:"App",children:Object(V.jsxs)("div",{className:"main_container",children:[Object(V.jsx)(B,{}),Object(V.jsx)($,{})]})})},Z={position:d.b.BOTTOM_CENTER,timeout:5e3,offset:"30px",transition:d.c.SCALE};a.a.render(Object(V.jsx)(r.a.StrictMode,{children:Object(V.jsx)(j.a,{children:Object(V.jsx)(d.a,Object(i.a)(Object(i.a)({template:b.a},Z),{},{children:Object(V.jsxs)(l.a,{store:M,children:[Object(V.jsx)(Y,{}),Object(V.jsxs)(o.c,{children:[Object(V.jsx)(o.a,{path:"/",element:Object(V.jsx)(K,{})}),Object(V.jsx)(o.a,{path:"product",children:Object(V.jsx)(o.a,{path:":pid",element:Object(V.jsx)(J,{})})})]})]})}))})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.6cee7c50.chunk.js.map