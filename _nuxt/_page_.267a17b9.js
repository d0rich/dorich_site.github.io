import{_ as T}from"./AsyncSafeSeoWithOg.vue.6025b249.js";import{_ as L}from"./Mask.8ff4fe38.js";import M from"./Icon.75888977.js";import{_ as S}from"./Btn.69bbf8ef.js";import{a as q,g as O,b as V}from"./blog.2c1659e6.js";import{a as y,o as a,e as _,H as p,B as c,f as e,G as A,t as h,u as o,F as x,h as k,c as m,k as b,b as w,a3 as r,l as F}from"./entry.12b53ddf.js";import{C as W}from"./Chip.36885c31.js";import{_ as Y}from"./Shape.vue.6794cf3c.js";/* empty css                  */import{_ as j}from"./nuxt-link.6cfaf371.js";import{d as z}from"./date.8706a179.js";/* empty css                 */import H from"./ContentList.6b508b32.js";import{u as E,q as G}from"./query.0e83fb0e.js";/* empty css                 */import"./config.1be13334.js";import"./Icon.vue.ba7fd542.js";/* empty css                *//* empty css                 */import"./ContentQuery.887a956e.js";import"./utils.f814d42c.js";const I={class:"blog-tile overflow-x-hidden",style:{"--page-bg-color":"#262626"}},Q=e("div",{class:"blog-tile__frame--top"},null,-1),R=e("div",{class:"blog-tile__frame--bottom"},null,-1),J={class:"blog-tile__link__image-wrapper"},K=e("div",{class:"blog-tile__link-image-overlay"},null,-1),U=e("div",{style:{height:"5rem","pointer-events":"none"}},null,-1),X={class:"max-w-2xl mx-auto px-3"},Z={style:{padding:"var(--shape-card-padding)"}},ee={class:"text-right font-bold"},te={class:"text-3xl font-bold text-cyan-200 mb-2"},ae={class:"text-right mt-3 -mr-5"},oe=e("div",{style:{height:"5rem","pointer-events":"none"}},null,-1),ne=y({__name:"Tile",props:{article:null},setup(t){return(u,l)=>{const n=W,s=Y,i=j;return a(),_("div",I,[Q,R,p(i,{class:"blog-tile__link",to:t.article._path},{default:c(()=>[e("div",J,[e("div",{class:"blog-tile__link__image",style:A(`background-image: url(${t.article.image});`)},null,4)]),K,U,e("div",X,[p(s,{"shape-class":"bg-black bg-opacity-70","shape-style":"clip-path: var(--shape-card);"},{default:c(()=>[e("div",Z,[e("div",ee,[e("time",null,h(("dateToDayMonthYear"in u?u.dateToDayMonthYear:o(z))(t.article.date)),1)]),e("h2",te,h(t.article.title),1),e("p",null,h(t.article.description),1),e("div",ae,[(a(!0),_(x,null,k(t.article.tags,d=>(a(),m(n,{key:d,class:"blog-tile__link__tag"},{default:c(()=>[b(" #"+h(d),1)]),_:2},1024))),128))])])]),_:1})]),oe]),_:1},8,["to"])])}}}),se={class:"w-fit text-2xl font-bold"},le={key:2,class:"mx-1"},ie={key:3,class:"mx-1"},re=y({__name:"Pagination",props:{currentPage:{type:Number,default:1},allPages:{type:Number,required:!0},baseLink:{type:String,required:!0}},setup(t){const u=t;function l(s){return q(u.baseLink,s)}const n=w(()=>Array.from({length:7},(s,i)=>i-3+u.currentPage).filter(s=>s>=1&&s<=u.allPages));return(s,i)=>{const d=M,g=S;return a(),_("nav",se,[t.currentPage>1?(a(),m(g,{key:0,class:"inline-block mx-1",to:l(t.currentPage-1)},{default:c(()=>[p(d,{name:"ic:baseline-arrow-back-ios"})]),_:1},8,["to"])):r("",!0),o(n).includes(1)?r("",!0):(a(),m(g,{key:1,class:"inline-block mx-1",to:l(1)},{default:c(()=>[b(" 1 ")]),_:1},8,["to"])),o(n).includes(1)?r("",!0):(a(),_("span",le," ... ")),(a(!0),_(x,null,k(o(n),f=>(a(),m(g,{key:f,class:"inline-block mx-1",to:l(f)},{default:c(()=>[b(h(f),1)]),_:2},1032,["to"]))),128)),o(n).includes(t.allPages)?r("",!0):(a(),_("span",ie," ... ")),o(n).includes(t.allPages)?r("",!0):(a(),m(g,{key:4,class:"inline-block mx-1",to:l(t.allPages)},{default:c(()=>[b(h(t.allPages),1)]),_:1},8,["to"])),t.currentPage<t.allPages?(a(),m(g,{key:5,class:"inline-block mx-1",to:l(t.currentPage+1)},{default:c(()=>[p(d,{name:"ic:baseline-arrow-forward-ios"})]),_:1},8,["to"])):r("",!0)])}}}),ce={class:"mb-96"},me={class:"relative isolate px-3 max-w-3xl mx-auto my-10 overflow-hidden"},_e=e("div",{class:"max-w-lg"},[e("h1",{class:"text-6xl sm:text-8xl font-serif mb-5 text-cyan-300"},"Blog"),e("p",{class:"first-letter:bg-cyan-600"}," Welcome to my blog! Here you will find news, articles, and insights related to software development, programming languages, technology trends, and more. My goal is to provide informative and engaging content that is useful for developers of all levels. ")],-1),ue={key:0},qe=y({__name:"[page]",setup(t){const u=F(),l=w(()=>Number(u.params.page||1)),{itemsOnPage:n}=V(),s=O(),{data:i}=E(`blog/pages-count/${n}`,()=>G("/blog/").only("_path").where(s).find(),{server:!0,transform:g=>Math.ceil(g.length/n)}),d={path:"/blog",without:["excerpt","body"],where:s,limit:n,skip:(l.value-1)*n,sort:[{date:-1}]};return(g,f)=>{const $=T,B=L,v=re,C=ne,D=H;return a(),_("div",ce,[p($,{title:"Blog"}),e("div",me,[_e,p(B,{mask:"owl",color:"",outline:"",class:"h-full absolute top-0 right-0 -z-10 brightness-[25%] sm:brightness-100 transition-all"})]),o(i)?(a(),_("section",ue,[o(i)>1?(a(),m(v,{key:0,class:"mx-auto my-10 max-w-md","current-page":o(l),"all-pages":o(i),"base-link":"/blog"},null,8,["current-page","all-pages"])):r("",!0),e("nav",null,[p(D,{query:d},{default:c(({list:N})=>[(a(!0),_(x,null,k(N,P=>(a(),m(C,{key:P._path,article:P},null,8,["article"]))),128))]),_:1})]),o(i)>1?(a(),m(v,{key:1,class:"mx-auto my-10 max-w-md","current-page":o(l),"all-pages":o(i),"base-link":"/blog"},null,8,["current-page","all-pages"])):r("",!0)])):r("",!0)])}}});export{qe as default};
