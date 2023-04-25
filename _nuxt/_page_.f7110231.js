import{_ as w}from"./AsyncSafeSeoWithOg.vue.807a930b.js";import{_ as C}from"./Mask.0fbb8230.js";import{_ as $}from"./Pagination.vue.a688841b.js";import D from"./Icon.2925af87.js";import{C as T}from"./Chip.ccf2e271.js";import{_ as N}from"./Shape.vue.4662ee51.js";import{a as k,o as e,e as r,C as u,w as h,f as t,J as P,k as g,t as p,u as a,F as _,h as m,c as l,Y as B,b as S,v as f}from"./entry.800d670c.js";import{_ as M}from"./nuxt-link.79f16639.js";import{d as V}from"./date.8706a179.js";import{u as Y}from"./asyncData.65f33e21.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Btn.vue.85c6c1b2.js";import"./utils.9962b8d6.js";import"https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";const I={class:"project-tile overflow-x-hidden",style:{"--page-bg-color":"#262626"}},L=t("div",{class:"project-tile__frame--top"},null,-1),z=t("div",{class:"project-tile__frame--bottom"},null,-1),A={class:"project-tile__link__image-wrapper"},E=t("div",{class:"project-tile__link-image-overlay"},null,-1),F=t("div",{style:{height:"5rem","pointer-events":"none"}},null,-1),W={class:"max-w-2xl mx-auto px-3"},J={style:{padding:"var(--shape-card-padding)"}},O={class:"text-right"},R={class:"font-bold"},q={class:"text-3xl font-bold text-red-200 mb-2"},G={class:"my-2"},H={class:"text-right mt-3 -mr-5"},K=t("div",{style:{height:"5rem","pointer-events":"none"}},null,-1),Q={name:"ProjectsTile"},U=k({...Q,props:{project:null},setup(o){return(i,c)=>{const s=D,x=T,y=N,d=M;return e(),r("div",I,[L,z,u(d,{class:"project-tile__link",to:o.project.url},{default:h(()=>[t("div",A,[t("div",{class:"project-tile__link__image",style:P(`background-image: url(${o.project.image});`)},null,4)]),E,F,t("div",W,[u(y,{"shape-class":"bg-black bg-opacity-90","shape-style":"clip-path: var(--shape-card);"},{default:h(()=>[t("div",J,[t("div",O,[g(" Last updated: "),t("time",R,p(("dateToDayMonthYear"in i?i.dateToDayMonthYear:a(V))(o.project.last_updated)),1)]),t("h2",q,p(o.project.title),1),t("p",G,p(o.project.description),1),t("p",null,[g(" Complexity: "),(e(!0),r(_,null,m(o.project.complexity,n=>(e(),l(s,{key:n,class:"text-red-200",name:"ic:sharp-star"}))),128)),(e(!0),r(_,null,m(5-(o.project.complexity||0),n=>(e(),l(s,{key:n,class:"text-red-200",name:"ic:sharp-star-outline"}))),128))]),t("div",H,[(e(!0),r(_,null,m(o.project.tags,n=>(e(),l(x,{key:n,class:"project-tile__link__tag"},{default:h(()=>[g(" #"+p(n),1)]),_:2},1024))),128))])])]),_:1})]),K]),_:1},8,["to"])])}}}),X={class:"pb-[50vh]"},Z={class:"relative isolate px-3 max-w-3xl mx-auto my-10 overflow-hidden"},tt=t("div",{class:"max-w-lg"},[t("h1",{class:"text-6xl sm:text-8xl font-serif mb-5 text-red-300"}," Projects "),t("p",{class:"first-letter:bg-red-600"}," Explore my portfolio of IT projects - a collection of custom documentation websites that showcase my technical skills and expertise in solving complex IT problems with innovative solutions. "),t("p",{class:"first-letter:bg-red-600"}," Browse through for valuable insights into my approach to information technology. ")],-1),et={key:0},gt=k({__name:"[page]",setup(o){const i=B(),c=S(()=>Number(i.params.page||1)),{data:s}=Y(`/projects/pages/${c.value}`,()=>$fetch(`/api/projects/${c.value}`));return(x,y)=>{const d=w,n=C,v=$,b=U;return e(),r("div",X,[u(d,{title:"Projects"}),t("div",Z,[tt,u(n,{mask:"spider",color:"",outline:"",class:"h-full absolute top-0 right-0 -z-10 brightness-[25%] sm:brightness-100 transition-all"})]),a(s)?(e(),r("section",et,[a(s)._pagesCount>1?(e(),l(v,{key:0,class:"mx-auto my-10 max-w-md","current-page":a(c),"all-pages":a(s)._pagesCount,"base-link":"/projects"},null,8,["current-page","all-pages"])):f("",!0),t("nav",null,[(e(!0),r(_,null,m(a(s).items,j=>(e(),l(b,{key:j.url,project:j},null,8,["project"]))),128))]),a(s)._pagesCount>1?(e(),l(v,{key:1,class:"mx-auto my-10 max-w-md","current-page":a(c),"all-pages":a(s)._pagesCount,"base-link":"/projects"},null,8,["current-page","all-pages"])):f("",!0)])):f("",!0)])}}});export{gt as default};
