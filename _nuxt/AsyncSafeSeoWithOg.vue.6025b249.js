import{a as s,p as g,o as a,c as l,B as u,k as p,t as S,a3 as c}from"./entry.12b53ddf.js";const m=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),d=(t,e)=>(o,n)=>(g(()=>t({...m(o),...n.attrs},n)),()=>{var i,r;return e?(r=(i=n.slots).default)==null?void 0:r.call(i):null}),f={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},y=s({name:"Title",inheritAttrs:!1,setup:d((t,{slots:e})=>{var n,i,r;return{title:((r=(i=(n=e.default)==null?void 0:n.call(e))==null?void 0:i[0])==null?void 0:r.children)||null}})}),h=s({name:"Meta",inheritAttrs:!1,props:{...f,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:d(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),v=s({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var o,n;return(n=(o=e.slots).default)==null?void 0:n.call(o)}}),b=s({__name:"AsyncSafeSeoWithOg",props:{title:null,ogTitle:null,description:null,image:null},setup(t){return(e,o)=>{const n=y,i=h,r=v;return a(),l(r,null,{default:u(()=>[t.title?(a(),l(n,{key:0},{default:u(()=>[p(S(t.title),1)]),_:1})):c("",!0),t.title||t.ogTitle?(a(),l(i,{key:1,property:"og:title",content:t.ogTitle||t.title},null,8,["content"])):c("",!0),t.description?(a(),l(i,{key:2,name:"description",content:t.description},null,8,["content"])):c("",!0),t.description?(a(),l(i,{key:3,property:"og:description",content:t.description},null,8,["content"])):c("",!0)]),_:1})}}});export{b as _};
