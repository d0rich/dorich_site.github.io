(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0If4":function(t,e,o){"use strict";var n={name:"ProjectBlock",props:{project:{required:!0,type:Object}}},c=(o("Q1MX"),o("PI6C"),o("KHd+")),a=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"project-block"},[o("v-card",{attrs:{to:t.project.path}},[t.project.image?o("v-img",{attrs:{height:"200px",src:t.project.image,alt:t.project.title,eager:""}}):t._e(),o("v-card-title",{staticClass:"project-block__title"},[t._v(t._s(t.project.title))]),o("v-card-subtitle",[o("time",{attrs:{datetime:t.project.date}},[t._v(t._s(t.project.date))])]),t.project.tags.length>0?o("v-divider"):t._e(),t.project.tags.length>0?o("v-card-text",t._l(t.project.tags,(function(e){return o("v-chip",{key:e.id,staticClass:"ma-1"},[t._v("\n        #"+t._s(e.title)+"\n      ")])})),1):t._e()],1)],1)}),[],!1,null,"2a45b2e4",null);e.a=a.exports},Oy6M:function(t,e,o){},PI6C:function(t,e,o){"use strict";o("Oy6M")},Q1MX:function(t,e,o){"use strict";o("uCZU")},nj2y:function(t,e,o){"use strict";o.r(e);o("ma9I");var n=o("0If4"),c=o("oYx3"),a={name:"Technology",components:{ProjectBlock:n.a},computed:{breadcrumbs:function(){return[{text:"d0rich",href:c.a.home},{text:"portfolio",href:c.a.portfolio()},{text:"technologies",disabled:!0},{text:this.$page.technology.title,disabled:!0}]}},methods:{changePage:function(t){this.$router.push(c.a.projectTech(this.$page.technology.title,t))}},metaInfo:function(){return{title:"Technology: ".concat(this.$page.technology.title),meta:[{key:"description",name:"description",content:"All projects of Dorich that use ".concat(this.$page.technology.title)},{key:"og:title",property:"og:title",content:"Technology for IT Project: ".concat(this.$page.technology.title)},{key:"og:description",property:"og:description",content:"All projects of Dorich that use ".concat(this.$page.technology.title)},{key:"og:url",property:"og:url",content:"https://d0rich.github.io/portfolio/technologies/".concat(this.$page.technology.title,"/").concat(this.$page.technology.belongsTo.pageInfo.currentPage>1?this.$page.technology.belongsTo.pageInfo.currentPage+"/":"")},{key:"robots",name:"robots",content:"noindex,follow"}]}}},s=(o("y6Jh"),o("KHd+")),i=null,r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",{staticClass:"mt-7"},[t._v("Projects filtered by technology")]),o("div",{staticClass:"hr"}),o("nav",{staticClass:"align-self-start"},[o("v-breadcrumbs",{attrs:{items:t.breadcrumbs}}),o("v-btn",{staticClass:"ml-5 my-5 align-self-start",attrs:{color:"primary",to:t.Router.portfolio(),exact:""}},[o("v-icon",[t._v("\n        mdi-chevron-left\n      ")]),t._v("\n      Back\n    ")],1)],1),o("nav",[o("h1",[t._v("Projects where "),o("span",{staticClass:"tech-highlight"},[t._v(t._s(t.$page.technology.title))]),t._v(" is used")]),o("div",{staticClass:"projects-container"},t._l(t.$page.technology.belongsTo.edges,(function(t){return o("project-block",{key:t.node.id,staticClass:"my-2",attrs:{project:t.node}})})),1)]),o("nav",[o("v-pagination",{attrs:{length:t.$page.technology.belongsTo.pageInfo.totalPages,value:t.$page.technology.belongsTo.pageInfo.currentPage},on:{input:t.changePage}})],1),o("nav",{staticClass:"align-self-start mt-3"},[o("h2",[t._v("All Technologies")]),o("v-chip-group",{attrs:{column:""}},t._l(t.$page.technologies.edges,(function(e){return o("v-chip",{key:e.node.id,attrs:{to:e.node.path}},[t._v("\n        "+t._s(e.node.title)+"\n      ")])})),1)],1)])}),[],!1,null,"e7db1c0a",null);"function"==typeof i&&i(r);e.default=r.exports},u1Zd:function(t,e,o){},uCZU:function(t,e,o){},y6Jh:function(t,e,o){"use strict";o("u1Zd")}}]);