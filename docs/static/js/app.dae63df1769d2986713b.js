webpackJsonp([1],{"+l03":function(t,e,a){t.exports=a.p+"static/img/vuejs-logo.ab1f899.png"},"0Wqb":function(t,e){},"3/Db":function(t,e){},"70Ee":function(t,e){},"9z8b":function(t,e){},HMVE:function(t,e){},HxiF:function(t,e){},NCH5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s=a("/ocq"),n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("p",{staticClass:"footer__body"},[this._v("By Dennis Burger, march 2018")]),this._v(" "),e("p",{staticClass:"footer__body"},[e("a",{attrs:{href:"https://github.com/dutchwebworks/vue-learning",target:"_blank"}},[this._v("View on Github")])])])}]};var r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("h1",{staticClass:"header__title"},[this._v("SPA learning with Vue, Vuex and vue-router")]),this._v(" "),e("nav",{staticClass:"header__nav"},[e("router-link",{attrs:{tag:"a",to:{name:"linkIndex"},"active-class":"is-active","exact-active-class":"is-exact",exact:""}},[this._v("\n\t\t\tOverview\n\t\t")])],1)])},staticRenderFns:[]};var o={components:{appFooter:a("VU/8")(null,n,!1,function(t){a("bw0u")},null,null).exports,appHeader:a("VU/8")(null,r,!1,function(t){a("HMVE")},null,null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"app__container",attrs:{id:"app"}},[e("appHeader"),this._v(" "),e("transition",{attrs:{name:"app__container-",mode:"out-in",type:"animation"}},[e("router-view")],1),this._v(" "),e("appFooter")],1)},staticRenderFns:[]};var c=a("VU/8")(o,l,!1,function(t){a("oh42")},null,null).exports,u=a("ESwS"),d=a.n(u),v=a("Dd8w"),m=a.n(v),_=a("NYxO"),p={created:function(){this.setHighestAndLowestRatedBoolean()},methods:m()({},Object(_.c)(["changeOrder","changeOrderByDesc","setHighestAndLowestRatedBoolean"]),{setOrderBy:function(t){this.changeOrder(t),this.changeOrderByDesc()}}),computed:m()({},Object(_.b)(["filteredMovies","highestRatedMovie","lowestRatedMovie","movies","order","orderByDesc"]))},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"array-sorting"},[a("h1",{staticClass:"heading"},[t._v("Sorting an array with Lodash")]),t._v(" "),t._m(0),t._v(" "),a("h2",{staticClass:"sub-heading"},[t._v("Movie sorting")]),t._v(" "),a("table",{staticClass:"array-sorting__movies",attrs:{cellspacing:"0"}},[a("thead",[a("tr",[a("th",{class:[t.orderByDesc?"sorted-desc":"sorted-asc",{"is-active":"title"==t.order}],on:{click:function(e){t.setOrderBy("title")}}},[a("span",[t._v("Title")])]),t._v(" "),a("th",{class:[t.orderByDesc?"sorted-desc":"sorted-asc",{"is-active":"rating"==t.order}],on:{click:function(e){t.setOrderBy("rating")}}},[a("span",[t._v("Rating")])]),t._v(" "),a("th",{class:[t.orderByDesc?"sorted-desc":"sorted-asc",{"is-active":"year"==t.order}],on:{click:function(e){t.setOrderBy("year")}}},[a("span",[t._v("Year")])]),t._v(" "),a("th",{class:[t.orderByDesc?"sorted-desc":"sorted-asc",{"is-active":"genre"==t.order}],on:{click:function(e){t.setOrderBy("genre")}}},[a("span",[t._v("Genre")])])])]),t._v(" "),a("tbody",t._l(t.filteredMovies,function(e,i){return a("tr",{key:e.index,class:{"is-highest":e.highest,"is-lowest":e.lowest}},[a("td",[t._v(t._s(e.title))]),t._v(" "),a("td",[t._v(t._s(e.rating))]),t._v(" "),a("td",[t._v(t._s(e.year))]),t._v(" "),a("td",[t._v(t._s(e.genre))])])}))]),t._v(" "),a("h2",{staticClass:"sub-heading"},[t._v("Highest rated movie")]),t._v(" "),a("p",{staticClass:"paragraph"},[t._v(t._s(t.highestRatedMovie.title)+", rated a "+t._s(t.highestRatedMovie.rating)+" from the year "+t._s(t.highestRatedMovie.year)+".")]),t._v(" "),a("h2",{staticClass:"sub-heading"},[t._v("Lowest rated movie")]),t._v(" "),a("p",{staticClass:"paragraph"},[t._v(t._s(t.lowestRatedMovie.title)+", rated a "+t._s(t.lowestRatedMovie.rating)+" from the year "+t._s(t.lowestRatedMovie.year)+".")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"paragraph"},[this._v("State of the sorting is stored in "),e("strong",[this._v("Vuex")]),this._v(".")])}]};var g=a("VU/8")(p,h,!1,function(t){a("70Ee")},null,null).exports,f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card__item",class:{"is-alert":t.cardsTotal>t.limit[0],"is-danger":t.cardsTotal>t.limit[1]}},[a("h3",{staticClass:"card__item-heading"},[t._v(t._s(t.card.heading))]),t._v(" "),a("p",{staticClass:"card__item-price"},[t._v(t._s(t._f("euroCurrency")(t.card.price)))]),t._v(" "),a("button",{staticClass:"button button--03",attrs:{disabled:t.cardsTotal>t.limit[2]},on:{click:t.buyCard}},[t._v("\n\t\tBuy card\n\t")])])},staticRenderFns:[]};var b={components:{appCard:a("VU/8")({props:["card","cardsTotal","limit"],methods:{buyCard:function(){this.$emit("incrementCardsTotal",this.card.price)}}},f,!1,function(t){a("qusf")},null,null).exports},data:function(){return{}},methods:m()({},Object(_.c)(["incrementCardsTotal","resetCardsTotal"])),computed:m()({},Object(_.b)(["cards","cardsTotal","limit"]))},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"cards"},[a("h1",{staticClass:"heading"},[t._v("Buy cards, calculation demo")]),t._v(" "),t._m(0),t._v(" "),a("ul",{staticClass:"cards__list"},[a("li",[t._v("When going "),a("strong",[t._v("over "+t._s(t.limit[0])+", the cards will turn orange")]),t._v(".")]),t._v(" "),a("li",[t._v("Going "),a("strong",[t._v("over "+t._s(t.limit[1])+" will turn them red")]),t._v(".")]),t._v(" "),a("li",[t._v("And going "),a("strong",[t._v("over "+t._s(t.limit[2])+" will disable")]),t._v(" the 'Buy card' -button.")])]),t._v(" "),a("h2",{staticClass:"sub-heading"},[t._v("Vuex stored total: "+t._s(t._f("euroCurrency")(t.cardsTotal)))]),t._v(" "),a("p",{staticClass:"cards__reset"},[a("button",{staticClass:"button button--02",on:{click:t.resetCardsTotal}},[t._v("Reset total")])]),t._v(" "),a("div",{staticClass:"cards__grid"},t._l(t.cards,function(e,i){return a("appCard",{key:i,attrs:{card:e,cardsTotal:t.cardsTotal,limit:t.limit},on:{incrementCardsTotal:t.incrementCardsTotal}})}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"paragraph"},[this._v("\n\t\tUsing parent and child components. Repeating child components based\n\t\ton data array in parent. And having the child "),e("code",[this._v("$emit()")]),this._v(" an event to parent.\t\t\t\n\t")])}]};var y=a("VU/8")(b,C,!1,function(t){a("uVfp")},null,null).exports,$={directives:{highlight:{bind:function(t,e){setTimeout(function(){void 0!=e.value.classname&&t.classList.add(e.value.classname),"background"==e.arg?(t.style.color=e.value.color,t.style.backgroundColor=e.value.backgroundColor):t.style.color=e.value.color},e.modifiers.delayed?e.value.delay:0)}}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"customdirective"},[a("h1",{staticClass:"heading"},[t._v("Custom Directives")]),t._v(" "),a("p",{staticClass:"paragraph"},[t._v("Using Vue custom directive attributes to create custom functionality.")]),t._v(" "),a("p",{directives:[{name:"highlight",rawName:"v-highlight",value:{color:"red"},expression:"{ color: 'red' }"}],staticClass:"paragraph customdirective__body"},[t._v("\n        Simple example with one object value.\n    ")]),t._v(" "),a("p",{directives:[{name:"highlight",rawName:"v-highlight:background",value:{color:"deeppink",backgroundColor:"deepskyblue"},expression:"{ color: 'deeppink', backgroundColor: 'deepskyblue' }",arg:"background"}],staticClass:"paragraph customdirective__body"},[t._v("\n        Example directive with a directive argument 'background' and multiple object values.\n    ")]),t._v(" "),a("p",{directives:[{name:"highlight",rawName:"v-highlight:background.delayed",value:{color:"white",backgroundColor:"deeppink",delay:2e3,classname:"has-hightlight"},expression:"{ color: 'white', backgroundColor: 'deeppink', delay: 2000, classname: 'has-hightlight' }",arg:"background",modifiers:{delayed:!0}}],staticClass:"paragraph customdirective__body"},[t._v("\n        Example with a directive argument and a directive modifier. And also adding a classname to the element.\n    ")]),t._v(" "),a("p",{staticClass:"paragraph customdirective__body"},[t._v("Directives can be set globally or localy.")])])},staticRenderFns:[]};var x=a("VU/8")($,k,!1,function(t){a("fkdK")},null,null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"error error--404"},[e("h1",{staticClass:"heading"},[this._v("Error 404")]),this._v(" "),e("p",{staticClass:"paragraph"},[this._v("Page not found")])])}]};var V=a("VU/8")(null,w,!1,function(t){a("3/Db")},null,null).exports,T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"overview"},[a("nav",{staticClass:"overview__nav"},[a("router-link",{staticClass:"overview__nav-item",attrs:{tag:"div",to:{name:"linkNavbuttons"},"active-class":"is-active","exact-active-class":"is-exact"}},[t._v("\n\t\t\tNav. buttons\n\t\t")]),t._v(" "),a("router-link",{staticClass:"overview__nav-item",attrs:{tag:"div",to:{name:"linkVuexCounter"},"active-class":"is-active","exact-active-class":"is-exact"}},[t._v("\n\t\t\tVuex counter\n\t\t")]),t._v(" "),a("router-link",{staticClass:"overview__nav-item",attrs:{tag:"div",to:{name:"linkBuyCards"},"active-class":"is-active","exact-active-class":"is-exact"}},[t._v("\n\t\t\tBuy cards\n\t\t")]),t._v(" "),a("router-link",{staticClass:"overview__nav-item",attrs:{tag:"div",to:{name:"linkTabs"},"active-class":"is-active","exact-active-class":"is-exact"}},[t._v("\n\t\t\tTabs\n\t\t")]),t._v(" "),a("router-link",{staticClass:"overview__nav-item",attrs:{tag:"div",to:{name:"linkPug"},"active-class":"is-active","exact-active-class":"is-exact"}},[t._v("\n\t\t\tPug\n\t\t")]),t._v(" "),a("router-link",{staticClass:"overview__nav-item",attrs:{tag:"div",to:{name:"linkCustomDirectives"},"active-class":"is-active","exact-active-class":"is-exact"}},[t._v("\n\t\t\tCustom Directives\n\t\t")]),t._v(" "),a("router-link",{staticClass:"overview__nav-item",attrs:{tag:"div",to:{name:"linkVuelidate"},"active-class":"is-active","exact-active-class":"is-exact"}},[t._v("\n\t\t\tVuelidate\n\t\t")]),t._v(" "),a("router-link",{staticClass:"overview__nav-item",attrs:{tag:"div",to:{name:"linkArraySorting"},"active-class":"is-active","exact-active-class":"is-exact"}},[t._v("\n\t\t\tArray sorting\n\t\t")]),t._v(" "),a("router-link",{staticClass:"overview__nav-item",attrs:{tag:"div",to:{name:"linkSlideUpDown"},"active-class":"is-active","exact-active-class":"is-exact"}},[t._v("\n\t\t\tSlideUpDown\n\t\t")])],1),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"overview__logo"},[e("img",{staticClass:"overview__logo-img",attrs:{src:a("+l03"),alt:"Vue logo"}})])}]};var D=a("VU/8")(null,T,!1,function(t){a("z8dK")},null,null).exports,E={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home"},[a("h1",{staticClass:"heading"},[t._v("Navigation buttons")]),t._v(" "),t._m(0),t._v(" "),a("p",{staticClass:"home__buttons"},[a("button",{staticClass:"button button--02",on:{click:function(e){t.$router.go(-1)}}},[t._v("\n\t\t\tGo to back one page\n\t\t")]),t._v(" "),a("button",{staticClass:"button button--02",on:{click:function(e){t.$router.push({name:"linkBuyCards"})}}},[t._v("\n\t\t\tGo to Buy Cards demo page\n\t\t")]),t._v(" "),a("button",{staticClass:"button button--02",on:{click:function(e){t.$router.push("/404")}}},[t._v("\n\t\t\tTrigger 404 error\n\t\t")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"paragraph"},[this._v("Scripted navigation button using "),e("strong",[this._v("Vue Router")])])}]};var B=a("VU/8")(null,E,!1,function(t){a("HxiF")},null,null).exports,q={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"pug"},[a("h1",{staticClass:"heading"},[t._v("Pug template")]),a("p",{staticClass:"paragraph"},[t._v("The origin of this template is a Pug file. "),a("strong",[t._v("Webpack compiles the Pug syntax into HTML")]),t._v(" before it's send to the browser. No precompiling needed.")]),a("h2",{staticClass:"sub-heading"},[t._v("Techniques used")]),a("ul",{staticClass:"paragraph"},[a("li",[t._v("Vue")]),a("li",[t._v("Vuex")]),a("li",[t._v("Vue Router")]),a("li",[t._v("Axios")]),a("li",[t._v("Lodash")]),a("li",[t._v("JavaScript ES6 spread operator for "),a("strong",[t._v("mapGetters")]),t._v(" & "),a("strong",[t._v("mapMutations")])])])])}]};var R=a("VU/8")(null,q,!1,function(t){a("NsC/")},null,null).exports,N={data:function(){return{active:!1,duration:300,faqList:[{id:1,active:!1,title:"Whats on my icecream?",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aspernatur cupiditate rerum ut, repellat veniam in, placeat sit porro fuga!"},{id:2,active:!1,title:"Where can I get a fancy red dress?",body:"Mollitia aspernatur cupiditate rerum ut, repellat veniam in, placeat sit porro fuga!"},{id:3,active:!1,title:"Where's the park?",body:"Consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aspernatur cupiditate rerum ut, repellat veniam in, placeat sit porro fuga!"},{id:4,active:!1,title:"Is the internet finally done?",body:"The internet is not finished yet!"}]}},methods:{toggleText:function(){this.active=!this.active}},components:{"vue-slide-up-down":a("coNY").a}},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"slideupdown"},[a("h1",{staticClass:"heading"},[t._v("Slide Up and Down")]),t._v(" "),t._m(0),t._v(" "),a("p",{staticClass:"paragraph"},[t._v("jQuery like slideUp() and slideDown() functions")]),t._v(" "),a("p",{staticClass:"paragraph"},[a("button",{staticClass:"button button--01",on:{click:t.toggleText}},[t._v("\n\t\t\tToggle the text\n\t\t")])]),t._v(" "),a("vue-slide-up-down",{staticClass:"slideupdown__container",attrs:{tag:"section",active:t.active,duration:t.duration}},[a("p",{staticClass:"paragraph"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi repudiandae unde ex aperiam asperiores dicta molestiae, facere suscipit doloribus ipsum!")]),t._v(" "),a("p",{staticClass:"paragraph"},[t._v("Ab quisquam fugiat voluptates voluptatem quis, incidunt nesciunt velit, voluptatum odit esse necessitatibus dolores sint illo et nostrum ullam accusantium.")]),t._v(" "),a("p",{staticClass:"paragraph"},[t._v("Minus quas consequuntur possimus quia autem voluptatem, facilis reiciendis quis recusandae rerum, eum corporis accusamus omnis, labore perspiciatis sed deleniti?")])]),t._v(" "),a("h2",{staticClass:"sub-heading"},[t._v("FAQ like expanding list")]),t._v(" "),a("dl",{staticClass:"faqList"},[t._l(t.faqList,function(e,i){return[a("dt",{staticClass:"faqList__title",class:{"is-active":e.active},on:{click:function(t){e.active=!e.active}}},[t._v("\n\t\t\t\t"+t._s(e.title)+"\n\t\t\t")]),t._v(" "),a("vue-slide-up-down",{staticClass:"faqList__body",class:{"is-active":e.active},attrs:{tag:"dd",active:e.active,duration:t.duration}},[t._v("\n\t\t\t\t"+t._s(e.body)+"\n\t\t\t")])]})],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"paragraph"},[this._v("Using the "),e("a",{staticClass:"slideupdown__link",attrs:{href:"https://github.com/danieldiekmeier/vue-slide-up-down/"}},[this._v("vue-slide-up-down component")]),this._v(".")])}]};var U=a("VU/8")(N,A,!1,function(t){a("tZpf")},null,null).exports,L=a("BO1k"),F=a.n(L),O={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab",attrs:{id:"about-tab","aria-labelledby":"about",tabindex:"0",role:"tabpanel"}},[e("h3",{staticClass:"heading"},[this._v("About")]),this._v(" "),e("p",{staticClass:"paragraph"},[this._v("\n\t\tDistinctio quae nobis molestiae, ullam animi magni ratione voluptatem harum laborum. Dolore.\n\t")])])}]};var S={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab",attrs:{id:"catalog-tab","aria-labelledby":"catalog",tabindex:"0",role:"tabpanel"}},[e("h3",{staticClass:"heading"},[this._v("Catalog")]),this._v(" "),e("p",{staticClass:"paragraph"},[this._v("\n\t\tDistinctio quae nobis molestiae, ullam animi magni ratione voluptatem harum laborum. Dolore.\n\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quae nobis molestiae, ullam animi magni ratione voluptatem harum laborum. Dolore.\n\t")]),this._v(" "),e("p",{staticClass:"paragraph"},[this._v("\n\t\tAdipisicing elit. Distinctio quae nobis molestiae, ullam animi magni ratione voluptatem harum laborum. Dolore.\n\t")])])}]};var M={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab",attrs:{id:"contact-tab","aria-labelledby":"contact",tabindex:"0",role:"tabpanel"}},[e("h3",{staticClass:"heading"},[this._v("Contact")]),this._v(" "),e("p",{staticClass:"paragraph"},[this._v("\n\t\tConsectetur adipisicing elit. Distinctio quae nobis molestiae, ullam animi magni ratione voluptatem harum laborum. Dolore.\n\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quae nobis molestiae, ullam animi magni ratione voluptatem harum laborum. Dolore.\n\t")]),this._v(" "),e("p",{staticClass:"paragraph"},[this._v("\n\t\tFistinctio quae nobis molestiae, ullam animi magni ratione voluptatem harum laborum. Dolore.\n\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quae nobis molestiae, ullam animi magni ratione voluptatem harum laborum. Dolore.\n\t")])])}]};var j={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tab",attrs:{id:"products-tab","aria-labelledby":"products",tabindex:"0",role:"tabpanel"}},[e("h3",{staticClass:"heading"},[this._v("Products")]),this._v(" "),e("p",{staticClass:"paragraph"},[this._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sunt doloremque, incidunt adipisci maiores, minus facere modi vel similique ad!")]),this._v(" "),e("p",{staticClass:"paragraph"},[this._v("Amet eum provident rerum obcaecati dolorum distinctio animi nisi, dolorem in quidem inventore maiores, possimus tenetur atque. Soluta, alias, vel.")]),this._v(" "),e("p",{staticClass:"paragraph"},[this._v("Veritatis iure blanditiis odio magnam nesciunt culpa sapiente consectetur molestiae, minus itaque quaerat amet cum qui officia laborum rerum. Non.")])])}]};var P={components:{appAbout:a("VU/8")(null,O,!1,function(t){a("NCH5")},null,null).exports,appCatalog:a("VU/8")(null,S,!1,function(t){a("fxh4")},null,null).exports,appContact:a("VU/8")(null,M,!1,function(t){a("ezwi")},null,null).exports,appProducts:a("VU/8")(null,j,!1,function(t){a("0Wqb")},null,null).exports},methods:m()({},Object(_.c)(["setSelectedComponent"]),{selectTab:function(t,e){var a=!0,i=!1,s=void 0;try{for(var n,r=F()(this.$refs.tabs.querySelectorAll("li"));!(a=(n=r.next()).done);a=!0){var o=n.value;o.classList.remove("is-active"),o.firstChild.setAttribute("aria-selected","false")}}catch(t){i=!0,s=t}finally{try{!a&&r.return&&r.return()}finally{if(i)throw s}}return e.currentTarget.parentNode.classList.add("is-active"),e.currentTarget.setAttribute("aria-selected","true"),this.setSelectedComponent(t),!1}}),computed:m()({},Object(_.b)(["selectedComponent"]))},H={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"dynamic-components"},[a("h1",{staticClass:"heading"},[t._v("Using Vue dynamic components as tabs")]),t._v(" "),t._m(0),t._v(" "),a("nav",{staticClass:"dynamic-components__nav"},[a("ul",{ref:"tabs",staticClass:"dynamic-components__tab",attrs:{role:"tablist","aria-label":"Business value"}},[a("li",{staticClass:"dynamic-components__tab-item",class:{"is-active":"appCatalog"==t.selectedComponent}},[a("a",{attrs:{href:"#catalog-tab",id:"catalog",role:"tab","aria-selected":"false","aria-controls":"catalog-tab"},on:{click:function(e){e.preventDefault(),t.selectTab("appCatalog",e)}}},[t._v("\n\t\t\t\t\tCatalog\n\t\t\t\t")])]),t._v(" "),a("li",{staticClass:"dynamic-components__tab-item",class:{"is-active":"appProducts"==t.selectedComponent}},[a("a",{attrs:{href:"#products-tab",id:"products",role:"tab","aria-selected":"false","aria-controls":"products-tab"},on:{click:function(e){e.preventDefault(),t.selectTab("appProducts",e)}}},[t._v("\n\t\t\t\t\tProducts\n\t\t\t\t")])]),t._v(" "),a("li",{staticClass:"dynamic-components__tab-item",class:{"is-active":"appAbout"==t.selectedComponent}},[a("a",{attrs:{href:"#about-tab",id:"about",role:"tab","aria-selected":"true","aria-controls":"about-tab"},on:{click:function(e){e.preventDefault(),t.selectTab("appAbout",e)}}},[t._v("\n\t\t\t\t\tAbout\n\t\t\t\t")])]),t._v(" "),a("li",{staticClass:"dynamic-components__tab-item",class:{"is-active":"appContact"==t.selectedComponent}},[a("a",{attrs:{href:"#contact-tab",id:"contact",role:"tab","aria-selected":"false","aria-controls":"contact-tab"},on:{click:function(e){e.preventDefault(),t.selectTab("appContact",e)}}},[t._v("\n\t\t\t\t\tContact\n\t\t\t\t")])])])]),t._v(" "),a(t.selectedComponent,{tag:"component"})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"paragraph"},[this._v("\n\t\tEasily switch (aria enabled) tabs by changing a Vue data property.\n\t\tThe selected tab is saved in "),e("strong",[this._v("Vuex")]),this._v(".\n\t")])}]};var W=a("VU/8")(P,H,!1,function(t){a("vLv0")},null,null).exports,G=a("+cKO"),Y={data:function(){return{age:null,email:null,terms:!1,username:null,coupon:null,coupons:["SUMMER28","FALL44","SPRING2019"]}},methods:{submitForm:function(){alert("Form send")}},computed:{isCouponValid:function(){return this.$v.coupon.validCoupon&&""!=this.coupon&&this.$v.coupon.$dirty}},validations:{username:{required:G.required,minLen:Object(G.minLength)(4)},email:{required:G.required,email:G.email},age:{required:G.required,minVal:Object(G.minValue)(18)},coupon:{validCoupon:function(t){return""==t||null==t||this.coupons.includes(t)}},terms:{required:G.required}}},z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"vuelidate"},[a("div",{staticClass:"vuelidate-grid"},[a("div",{staticClass:"vuelidate-grid__form"},[a("h2",{staticClass:"heading"},[t._v("Form validation using Vuelidate")]),t._v(" "),a("p",{staticClass:"paragraph"},[t._v("Using 3rd party form validation plugin to validate form fields. When they are invalid they show a CSS animation (shake).")]),t._v(" "),a("form",[a("div",{staticClass:"vuelidate-form-grid"},[a("label",{staticClass:"vuelidate__label vuelidate__label--input-field",class:{"has-error":t.$v.username.$error,"is-valid":!t.$v.username.$error&&t.$v.username.$dirty}},[t._v("\n\t\t\t\t\t\tName\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"vuelidate__values",class:{"do-shake":t.$v.username.$error}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"vuelidate__input",class:{"has-error":t.$v.username.$error,"is-valid":!t.$v.username.$error&&t.$v.username.$dirty},attrs:{type:"text",name:"username"},domProps:{value:t.username},on:{blur:function(e){t.$v.username.$touch()},input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),t.$v.username.$error?a("small",{staticClass:"vuelidate__error"},[t._v("\n\t\t\t\t\t\t\tPlease enter you name\n\t\t\t\t\t\t")]):t._e(),t._v(" "),t.$v.username.minLen?t._e():a("small",{staticClass:"vuelidate__error"},[t._v("\n\t\t\t\t\t\t\tName must be at least "+t._s(t.$v.username.$params.minLen.min)+" characters long\n\t\t\t\t\t\t")])]),t._v(" "),a("label",{staticClass:"vuelidate__label vuelidate__label--input-field",class:{"has-error":t.$v.email.$error,"is-valid":!t.$v.email.$error&&t.$v.email.$dirty}},[t._v("\n\t\t\t\t\t\tE-mail\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"vuelidate__values",class:{"do-shake":t.$v.email.$error}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"vuelidate__input",class:{"has-error":t.$v.email.$error,"is-valid":!t.$v.email.$error&&t.$v.email.$dirty},attrs:{type:"email",name:"email"},domProps:{value:t.email},on:{blur:function(e){t.$v.email.$touch()},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t.$v.email.$error?a("small",{staticClass:"vuelidate__error"},[t._v("\n\t\t\t\t\t\t\tPlease enter an e-mail address\n\t\t\t\t\t\t")]):t._e(),t._v(" "),t.$v.email.email?t._e():a("small",{staticClass:"vuelidate__error"},[t._v("\n\t\t\t\t\t\t\tPlease provide a valid e-mail address\n\t\t\t\t\t\t")])]),t._v(" "),a("label",{staticClass:"vuelidate__label vuelidate__label--input-field",class:{"has-error":t.$v.age.$error,"is-valid":!t.$v.age.$error&&t.$v.age.$dirty}},[t._v("\n\t\t\t\t\t\tAge\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"vuelidate__values",class:{"do-shake":t.$v.age.$error}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.age,expression:"age",modifiers:{number:!0}}],staticClass:"vuelidate__input",class:{"has-error":t.$v.age.$error,"is-valid":!t.$v.age.$error&&t.$v.age.$dirty},attrs:{type:"number",placeholder:"Minimum age is "+t.$v.age.$params.minVal.min},domProps:{value:t.age},on:{blur:[function(e){t.$v.age.$touch()},function(e){t.$forceUpdate()}],input:function(e){e.target.composing||(t.age=t._n(e.target.value))}}}),t._v(" "),t.$v.age.$error?a("small",{staticClass:"vuelidate__error"},[t._v("\n\t\t\t\t\t\t\tMinimum age is "+t._s(t.$v.age.$params.minVal.min)+"\n\t\t\t\t\t\t")]):t._e()]),t._v(" "),a("label",{staticClass:"vuelidate__label vuelidate__label--input-field"},[t._v("\n\t\t\t\t\t\tAvailable coupons\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"vuelidate__values"},[a("ul",{staticClass:"vuelidate__coupons"},t._l(t.coupons,function(e){return a("li",[t._v(t._s(e))])}))]),t._v(" "),a("label",{staticClass:"vuelidate__label vuelidate__label--input-field",class:{"has-error":t.$v.coupon.$error,"is-valid":t.isCouponValid}},[t._v("\n\t\t\t\t\t \tCoupon\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"vuelidate__values",class:{"do-shake":t.$v.coupon.$error,"is-valid":t.isCouponValid}},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon,expression:"coupon"}],staticClass:"vuelidate__input",class:{"has-error":t.$v.coupon.$error,"is-valid":t.isCouponValid},attrs:{type:"text",placeholder:"Try out one of the above coupon codes"},domProps:{value:t.coupon},on:{blur:function(e){t.$v.coupon.$touch()},input:function(e){e.target.composing||(t.coupon=e.target.value)}}}),t._v(" "),t.$v.coupon.$error?a("small",{staticClass:"vuelidate__error"},[t._v("\n\t\t\t\t\t\t\t\tCoupon code is invalid\n\t\t\t\t\t\t\t")]):t._e()])]),t._v(" "),a("label",{staticClass:"vuelidate__label",class:{"is-valid":t.terms}},[t._v("\n\t\t\t\t\t \tTerms\n\t\t\t\t\t")]),t._v(" "),a("div",{staticClass:"vuelidate__values",class:{"do-shake":t.$v.terms.$error}},[a("label",{class:{"is-valid":t.terms}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.terms,expression:"terms"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.terms)?t._i(t.terms,null)>-1:t.terms},on:{change:[function(e){var a=t.terms,i=e.target,s=!!i.checked;if(Array.isArray(a)){var n=t._i(a,null);i.checked?n<0&&(t.terms=a.concat([null])):n>-1&&(t.terms=a.slice(0,n).concat(a.slice(n+1)))}else t.terms=s},function(e){t.$v.terms.$touch()}]}}),t._v("\n\t\t\t\t\t\t\t\tI accept the terms of usage\n\t\t\t\t\t\t")]),t._v(" "),t.$v.terms.$error?a("small",{staticClass:"vuelidate__error"},[t._v("\n\t\t\t\t\t\t\tYou must accept our terms and conditions to proceed\n\t\t\t\t\t\t")]):t._e()]),t._v(" "),a("button",{staticClass:"vuelidate__button button button--02",attrs:{disabled:t.$v.$invalid},on:{click:function(e){return e.preventDefault(),t.submitForm(e)}}},[t._v("\n\t\t\t\t\t\tSubmit form\n\t\t\t\t\t")])])])]),t._v(" "),a("div",{staticClass:"vuelidate-grid__validation"},[a("h2",{staticClass:"heading"},[t._v("Vuelidate validation object")]),t._v(" "),a("div",{staticClass:"vuelidate__values"},[a("pre",[t._v(t._s(t.$v))])])])])])},staticRenderFns:[]};var I=a("VU/8")(Y,z,!1,function(t){a("9z8b")},null,null).exports,K={data:function(){return{firstName:"James",lastName:"Dean",nameChanged:!1}},methods:m()({},Object(_.c)(["decrementCounter","incrementCounter"]),{changeName:function(){this.firstName="Master",this.lastName="of Disaster",this.nameChanged=!0}}),computed:m()({},Object(_.b)(["counter"]),{fullName:function(){return this.firstName+" "+this.lastName}})},J={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"counter"},[a("h1",{staticClass:"heading"},[t._v("Counter")]),t._v(" "),a("h3",{staticClass:"sub-heading"},[t._v("Vuex stored counter: "+t._s(t.counter))]),t._v(" "),a("p",{staticClass:"counter__buttons"},[a("button",{staticClass:"button button--02",on:{click:t.incrementCounter}},[t._v("\n\t\t\tIncrement counter\n\t\t")]),t._v(" "),a("button",{staticClass:"button button--02",attrs:{disabled:t.counter<=0},on:{click:t.decrementCounter}},[t._v("\n\t\t\tDecrement counter\n\t\t")])]),t._v(" "),a("hr",{staticClass:"hr"}),t._v(" "),a("p",{staticClass:"paragraph"},[t._v("Testing additional computed properties besides mapGetters")]),t._v(" "),a("p",{staticClass:"paragraph"},[t._v("FullName: "+t._s(t.fullName))]),t._v(" "),a("p",{staticClass:"paragraph"},[a("button",{staticClass:"button button--02",attrs:{disabled:t.nameChanged},on:{click:t.changeName}},[t._v("\n\t\t\t"+t._s(t.nameChanged?"Name was changed":"Change name")+"\n\t\t")])])])},staticRenderFns:[]};var Q=a("VU/8")(K,J,!1,function(t){a("cu8u")},null,null).exports;i.a.use(s.a);var Z=new s.a({mode:"history",routes:[{path:"/",name:"linkIndex",component:D},{path:"/nav-buttons",name:"linkNavbuttons",component:B},{path:"/vuex-counter",name:"linkVuexCounter",component:Q},{path:"/buy-cards",name:"linkBuyCards",component:y},{path:"/tabs",name:"linkTabs",component:W},{path:"/pug",name:"linkPug",component:R},{path:"/custom-directives",name:"linkCustomDirectives",component:x},{path:"/vuelidate",name:"linkVuelidate",component:I},{path:"/array-sorting",name:"linkArraySorting",component:g},{path:"/slide-up-down",name:"linkSlideUpDown",component:U},{path:"*",component:V}]}),X=a("M4fF"),tt={state:{order:"year",orderByDesc:!1,movies:[{title:"The Last Jedi",rating:7.4,year:2017,genre:"Science-Fiction"},{title:"Conan: The Barbarian",rating:6.9,year:1982,genre:"Adventure"},{title:"Lost in Space",rating:5.2,year:1998,genre:"Adventure"},{title:"The Shawshank Redemption",rating:9.3,year:1994,genre:"Crime"},{title:"The Revenant",rating:8,year:2015,genre:"History"},{title:"Home Alone 2",rating:6.6,year:1992,genre:"Comedy"},{title:"The Shining",rating:8.4,year:1980,genre:"Horror"}]},getters:{order:function(t){return t.order},orderByDesc:function(t){return t.orderByDesc},movies:function(t){return t.movies},filteredMovies:function(t){return Object(X.orderBy)(t.movies,[t.order],t.orderByDesc?"desc":"asc")},highestRatedMovie:function(t){return Object(X.maxBy)(t.movies,function(t){return t.rating})},lowestRatedMovie:function(t){return Object(X.minBy)(t.movies,function(t){return t.rating})}},mutations:{changeOrder:function(t,e){t.order=e},changeOrderByDesc:function(t){t.orderByDesc=!t.orderByDesc},setHighestAndLowestRatedBoolean:function(t){var e=Object(X.maxBy)(t.movies,function(t){return t.rating}),a=t.movies.indexOf(e);t.movies[a].highest=!0;var i=Object(X.minBy)(t.movies,function(t){return t.rating}),s=t.movies.indexOf(i);t.movies[s].lowest=!0}}},et={state:{cardsTotal:0,cards:[{id:1,heading:"BMW",price:5.95},{id:2,heading:"Google",price:10.33},{id:3,heading:"Twitter",price:15.99},{id:4,heading:"Amazone",price:50},{id:5,heading:"Bol.com",price:75.25}],limit:[50,100,150]},getters:{cards:function(t){return t.cards},cardsTotal:function(t){return t.cardsTotal},limit:function(t){return t.limit}},mutations:{incrementCardsTotal:function(t,e){t.cardsTotal+=e},resetCardsTotal:function(t){t.cardsTotal=0}}},at={state:{selectedComponent:"appCatalog"},getters:{selectedComponent:function(t){return t.selectedComponent}},mutations:{setSelectedComponent:function(t,e){t.selectedComponent=e}}},it={state:{counter:0},getters:{counter:function(t){return t.counter}},mutations:{incrementCounter:function(t){t.counter++},decrementCounter:function(t){t.counter>0&&t.counter--}}},st=a("UjVw"),nt=a("ukYY"),rt=a("mUbh");i.a.use(_.a);var ot=new _.a.Store({state:{},getters:st,mutations:nt,actions:rt,modules:{ArraySorting:tt,BuyCards:et,Tabs:at,VuexCounter:it}});i.a.use(d.a),i.a.config.productionTip=!1,i.a.filter("euroCurrency",function(t){return Number(t).toLocaleString("nl-NL",{style:"currency",currency:"EUR"})}),new i.a({el:"#app",router:Z,store:ot,components:{App:c},template:"<App/>"})},"NsC/":function(t,e){},UjVw:function(t,e){},bw0u:function(t,e){},cu8u:function(t,e){},ezwi:function(t,e){},fkdK:function(t,e){},fxh4:function(t,e){},mUbh:function(t,e){},oh42:function(t,e){},qusf:function(t,e){},tZpf:function(t,e){},uVfp:function(t,e){},ukYY:function(t,e){},vLv0:function(t,e){},z8dK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.dae63df1769d2986713b.js.map