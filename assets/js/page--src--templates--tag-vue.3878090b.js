(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"2qYH":function(t,e,a){"use strict";a.r(e);a("ma9I");var i=a("BA+P"),s=a("oYx3"),o=a("cGfh"),n={components:{PostCard:i.a},computed:{breadcrumbs:function(){return[{text:"d0rich",href:s.a.home},{text:"blog",href:s.a.blog()},{text:"tags",disabled:!0},{text:this.$page.tag.title,disabled:!0}]}},methods:{changePage:function(t){this.$router.push(s.a.tag(this.$page.tag.title,t))}},mixins:[o.a],metaInfo:function(){return this.createMetaInfo({title:"Tag: ".concat(this.$page.tag.title),description:"All posts of Dorich with tag #".concat(this.$page.tag.title),ogTitle:"Tag for Blog Posts: ".concat(this.$page.tag.title),ogPath:"/blog/tags/".concat(this.$page.tag.title,"/").concat(this.$page.tag.belongsTo.pageInfo.currentPage>1?this.$page.tag.belongsTo.pageInfo.currentPage+"/":"")})}},r=(a("uWL3"),a("7uw+")),c=null,l=a("oCYn"),g=l.default.config.optionMergeStrategies.computed,p={metadata:{siteUrl:"https://d0rich.github.io"}},d=function(t){var e=t.options;e.__staticData?e.__staticData.data=p:(e.__staticData=l.default.observable({data:p}),e.computed=g({$static:function(){return e.__staticData.data}},e.computed))},u=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"mt-7"},[t._v("Blog posts filtered by tag")]),a("div",{staticClass:"hr"}),a("nav",{staticClass:"align-self-start"},[a("v-breadcrumbs",{attrs:{items:t.breadcrumbs}}),a("v-btn",{staticClass:"ml-5 my-5 align-self-start",attrs:{color:"primary",to:t.Router.blog(),exact:""}},[a("v-icon",[t._v("\n        mdi-chevron-left\n      ")]),t._v("\n      Back\n    ")],1)],1),a("nav",{staticClass:"posts-container"},[a("h2",[t._v("Posts tagged "),a("span",{staticClass:"tag-highlight"},[t._v("#"+t._s(t.$page.tag.title))])]),t._l(t.$page.tag.belongsTo.edges,(function(t){return a("post-card",{key:t.node.id,staticClass:"my-2",attrs:{post:t.node}})}))],2),a("nav",[a("v-pagination",{attrs:{length:t.$page.tag.belongsTo.pageInfo.totalPages,value:t.$page.tag.belongsTo.pageInfo.currentPage},on:{input:t.changePage}})],1),a("nav",{staticClass:"align-self-start mt-5"},[a("h2",[t._v("All Tags")]),a("v-chip-group",{attrs:{column:""}},t._l(t.$page.tags.edges,(function(e){return a("v-chip",{key:e.node.id,attrs:{to:e.node.path}},[t._v("\n        #"+t._s(e.node.title)+"\n      ")])})),1)],1)])}),[],!1,null,"6a6ddc74",null);"function"==typeof c&&c(u),"function"==typeof d&&d(u);e.default=u.exports},"BA+P":function(t,e,a){"use strict";var i={name:"PostCard",props:{post:{type:Object,required:!0}}},s=(a("w0fl"),a("7uw+")),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"news-card",style:{paddingLeft:t.post.image?0:void 0},attrs:{to:t.post.path}},[a("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[a("div",[a("div",[a("v-card-title",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"news-card__title",domProps:{innerHTML:t._s(t.post.title)}}),a("v-card-subtitle",[a("time",[t._v(t._s(t.post.date))])])],1),a("v-card-text",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.post.summary)}}),a("div",{staticClass:"pa-2"},t._l(t.post.tags,(function(e){return a("v-chip",{key:e.id,staticClass:"ma-1",attrs:{small:""}},[t._v("\n\t\t\t\t\t\t#"+t._s(e.title)+"\n\t\t\t\t\t")])})),1)],1),t.post.image?a("v-img",{attrs:{src:t.post.image,alt:t.post.title,"max-width":"15%",width:"150px",eager:"","min-height":"100%"}}):t._e()],1)])}),[],!1,null,null,null);e.a=o.exports},COf3:function(t,e,a){},cGfh:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var i=a("7Ql6"),s=function(t,e,a){if(a||2===arguments.length)for(var i,s=0,o=e.length;s<o;s++)!i&&s in e||(i||(i=Array.prototype.slice.call(e,0,s)),i[s]=e[s]);return t.concat(i||Array.prototype.slice.call(e))},o=Object(i.b)({methods:{createMetaInfo:function(t){var e=void 0===t?{}:t,a=e.title,i=void 0===a?"":a,o=e.description,n=void 0===o?"":o,r=e.image,c=void 0===r?"":r,l=e.keywords,g=void 0===l?[]:l,p=e.ogTitle,d=void 0===p?i:p,u=e.ogDescription,f=void 0===u?n:u,m=e.ogPath,v=void 0===m?"":m,h=[{key:"keywords",name:"keywords",content:s(s([],["developer","informational technologies","IT"],!0),g,!0).join(", ")},{key:"og:title",property:"og:title",content:d},{key:"og:url",property:"og:url",content:this.$static.metadata.siteUrl+v}];if(n&&h.push({key:"description",name:"description",content:n}),f&&h.push({key:"og:description",property:"og:description",content:f}),c){var _=c.src||c;h.push({key:"og:image",property:"og:image",content:this.$static.metadata.siteUrl+_},{key:"vk:image",property:"vk:image",content:this.$static.metadata.siteUrl+_})}return{title:i,meta:h}}}})},"nC1/":function(t,e,a){},uWL3:function(t,e,a){"use strict";a("nC1/")},w0fl:function(t,e,a){"use strict";a("COf3")}}]);