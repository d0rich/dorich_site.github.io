(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{S3KG:function(t,e,i){"use strict";i("mqkM")},SHZv:function(t,e,i){"use strict";i.r(e);i("rB9j"),i("UxlC"),i("oVuX"),i("2B1R");var n=i("oYx3"),s={components:{Disqus:i("s2Jo").a},computed:{breadcrumbs:function(){return[{text:"d0rich",href:n.a.home},{text:"blog",href:n.a.blog()},{text:"posts",disabled:!0},{text:this.$page.post.title,disabled:!0}]}},metaInfo:function(){var t=this.$page.post.summary||this.$page.post.content.replace(/<[^>]+>/g,"").substring(0,250)+"...";return{title:this.$page.post.title,meta:[{key:"description",name:"description",content:t},{key:"keywords",name:"keywords",content:"developer, informational technologies, IT, "+this.$page.post.tags.map((function(t){return t.title})).join(", ")},{key:"og:title",property:"og:title",content:"Blog Post: ".concat(this.$page.post.title)},{key:"og:description",property:"og:description",content:t},{key:"og:url",property:"og:url",content:this.$static.metadata.siteUrl+this.$page.post.path},{key:"og:image",property:"og:image",content:this.$static.metadata.siteUrl+this.$page.post.image},{key:"vk:image",property:"vk:image",content:this.$static.metadata.siteUrl+this.$page.post.image}]}}},o=(i("S3KG"),i("KHd+")),r=null,a=i("Kw5r"),u=a.default.config.optionMergeStrategies.computed,c={metadata:{siteUrl:"https://d0rich.github.io"}},d=function(t){var e=t.options;e.__staticData?e.__staticData.data=c:(e.__staticData=a.default.observable({data:c}),e.computed=u({$static:function(){return e.__staticData.data}},e.computed))},h=Object(o.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav",[i("v-breadcrumbs",{staticClass:"align-self-start",attrs:{items:t.breadcrumbs}}),i("v-btn",{staticClass:"ml-5 my-5 align-self-start",attrs:{color:"primary",to:t.Router.blog(),exact:""}},[i("v-icon",[t._v("\n          mdi-chevron-left\n        ")]),t._v("\n        Back\n      ")],1)],1),i("article",[i("div",{staticStyle:{"max-width":"100%"}},[i("h1",[t._v(t._s(t.$page.post.title)+" ")]),i("p",[t._v("Posted on "+t._s(t.$page.post.date))]),i("v-chip-group",t._l(t.$page.post.tags,(function(e){return i("v-chip",{key:e.id,attrs:{to:e.path}},[t._v("\n            #"+t._s(e.title)+"\n          ")])})),1),i("div",{staticClass:"d-flex justify-center"},[t.$page.post.image?i("v-img",{staticClass:"border-light--primary  my-4",attrs:{eager:"","aspect-ratio":1.5,"min-width":"300px","max-width":"600px",width:"100%",src:t.$page.post.image,alt:t.$page.post.title}}):t._e()],1)],1),i("div",{staticClass:"hr"}),i("VueRemarkContent",{staticClass:"markdown-body mb-8",attrs:{id:"article-area"}}),i("section",{staticClass:"disqus"},[i("Disqus",{attrs:{shortname:"dorich"}})],1)],1)])}),[],!1,null,"5cda4584",null);"function"==typeof r&&r(h),"function"==typeof d&&d(h);e.default=h.exports},mqkM:function(t,e,i){},s2Jo:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n="Disqus shortname is required. (To resolve this, go to: https://ktquez.github.io/vue-disqus/setup.html#installation)",s=["api_key","author_s3","category_id","identifier","integration","language","remote_auth_s3","slug","title","url"],o=["name","button","icon","url","logout","width","height"],r=["afterRender","onInit","onIdentify","beforeComment","onNewComment","onPaginate","onReady","preData","preInit","preReset"],a=function(t){return requestAnimationFrame((function(){return requestAnimationFrame(t)}))};function u(t,e,i,n,s,o,r,a,u,c){"boolean"!=typeof r&&(u=a,a=r,r=!1);var d,h="function"==typeof i?i.options:i;if(t&&t.render&&(h.render=t.render,h.staticRenderFns=t.staticRenderFns,h._compiled=!0,s&&(h.functional=!0)),n&&(h._scopeId=n),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(o)},h._ssrRegister=d):e&&(d=r?function(t){e.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),d)if(h.functional){var l=h.render;h.render=function(t,e){return d.call(e),l(t,e)}}else{var p=h.beforeCreate;h.beforeCreate=p?[].concat(p,d):[d]}return i}var c=u({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"min-height":"200px"},attrs:{id:"disqus_thread"}})},staticRenderFns:[]},void 0,{name:"Disqus",props:{shortname:String,pageConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return s.includes(t)}))}},ssoConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return o.includes(t)}))}},lang:{type:String,default:"en"},lazy:{type:Boolean,default:!0},lazyConfig:{type:Object,default:function(){return{root:null,rootMargin:"300px",threshold:.5}}}},data:function(){return{observer:null}},computed:{getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(n);return t}},watch:{lang:function(){this.reset()}},mounted:function(){if(this.lazy)return this.observerDisqus();this.init()},methods:{init:function(){var t=this;if(this.$disqus&&(this.$disqus.reset=this.reset),window.DISQUS)return this.reset();var e=this.setBaseConfig;window.disqus_config=function(){e(this)},this.loadEmbedScript(),this.$route&&this.$watch("$route.path",(function(){return t.reset()}))},reset:function(t){void 0===t&&(t=window.DISQUS);var e=this.setBaseConfig;t.reset({reload:!0,config:function(){e(this)}})},observerDisqus:function(){if("IntersectionObserver"in window)return this.observer=new IntersectionObserver(this.handleObserver,this.lazyConfig),this.observer.observe(this.$el);this.init()},handleObserver:function(t){var e=this;t.forEach((function(t){t.isIntersecting&&(e.observer.disconnect(),e.init())}))},loadEmbedScript:function(){var t=document,e=t.createElement("script");e.setAttribute("id","embed-disqus"),e.setAttribute("data-timestamp",+new Date),e.type="text/javascript",e.async=!0,e.src="//"+this.getShortname+".disqus.com/embed.js",(t.head||t.body).appendChild(e)},setBaseConfig:function(t){this.setPageConfig(t),this.cbDisqus(t),this.ssoConfig&&Object.keys(this.ssoConfig).length&&Object.assign(t.sso,this.ssoConfig),t.language=this.lang},setPageConfig:function(t){var e={url:document.baseURI,identifier:this.$route?this.$route.path:window.location.pathname};Object.assign(t.page,e),this.pageConfig&&Object.keys(this.pageConfig).length&&Object.assign(t.page,this.pageConfig)},cbDisqus:function(t){var e=this;r.forEach((function(i){t.callbacks[i]=[function(t){e.$emit(i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().replace("on-",""),t)}]}))}}},void 0,!1,void 0,!1,void 0,void 0,void 0),d=u({render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"disqus-comment-count",attrs:{href:this.getHref,"data-disqus-url":this.getUrl,"data-disqus-identifier":this.identifier}})},staticRenderFns:[]},void 0,{name:"DisqusCount",inheritAttrs:!1,props:{url:String,shortname:String,identifier:{type:String,required:!0},tag:{type:String,default:"span"}},mounted:function(){this.init()},computed:{getHref:function(){return"a"===this.tag?this.url+"#disqus_thread":null},getUrl:function(){return"span"===this.tag?this.url:null},getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(n);return t}},methods:{init:function(){var t=this;if("DISQUSWIDGETS"in window)return a((function(){return t.reset()}));this.loadCountScript(),this.$route&&this.$watch("$route.path",(function(){return a((function(){return t.reset()}))}))},reset:function(t){void 0===t&&(t=window.DISQUSWIDGETS),t.getCount({reset:!0})},loadCountScript:function(){if(!document.getElementById("dsq-count-scr")){var t=document,e=t.createElement("script");e.async=!0,e.id="dsq-count-scr",e.src="//"+this.getShortname+".disqus.com/count.js",(t.head||t.body).appendChild(e)}}}},void 0,!1,void 0,!1,void 0,void 0,void 0);function h(t,e){void 0===e&&(e={}),t.component("Disqus",c),t.component("DisqusCount",d),t.prototype.$disqus={shortname:e.shortname||null,reset:null}}"undefined"!=typeof window&&void 0!==window.Vue&&window.Vue.use(h)}}]);