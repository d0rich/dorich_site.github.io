import b from"./Icon.300d7e69.js";import{_ as y}from"./Btn.vue.200d53c5.js";/* empty css                */import{u as h}from"./utils.9962b8d6.js";import{a as w,b as p,o as t,e as u,c as r,w as c,H as P,l as n,u as i,k as g,F as L,h as N,t as x}from"./entry.56fb57e7.js";const B={class:"w-fit text-2xl font-bold"},D={key:2,class:"mx-1"},C={key:3,class:"mx-1"},T={name:"DPagination"},A=w({...T,props:{currentPage:{type:Number,default:1},allPages:{type:Number,required:!0},baseLink:{type:String,required:!0}},setup(e){const m=e,{getLinkToPaginatedPage:_}=h();function s(a){return _(m.baseLink,a)}const o=p(()=>Array.from({length:7},(a,f)=>f-3+m.currentPage).filter(a=>a>=1&&a<=m.allPages));return(a,f)=>{const k=b,l=y;return t(),u("nav",B,[e.currentPage>1?(t(),r(l,{key:0,class:"inline-block mx-1",to:s(e.currentPage-1)},{default:c(()=>[P(k,{name:"ic:baseline-arrow-back-ios"})]),_:1},8,["to"])):n("",!0),i(o).includes(1)?n("",!0):(t(),r(l,{key:1,class:"inline-block mx-1",to:s(1)},{default:c(()=>[g(" 1 ")]),_:1},8,["to"])),i(o).includes(1)?n("",!0):(t(),u("span",D," ... ")),(t(!0),u(L,null,N(i(o),d=>(t(),r(l,{key:d,class:"inline-block mx-1",to:s(d)},{default:c(()=>[g(x(d),1)]),_:2},1032,["to"]))),128)),i(o).includes(e.allPages)?n("",!0):(t(),u("span",C," ... ")),i(o).includes(e.allPages)?n("",!0):(t(),r(l,{key:4,class:"inline-block mx-1",to:s(e.allPages)},{default:c(()=>[g(x(e.allPages),1)]),_:1},8,["to"])),e.currentPage<e.allPages?(t(),r(l,{key:5,class:"inline-block mx-1",to:s(e.currentPage+1)},{default:c(()=>[P(k,{name:"ic:baseline-arrow-forward-ios"})]),_:1},8,["to"])):n("",!0)])}}});export{A as _};
