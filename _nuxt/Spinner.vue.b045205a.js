import{_ as i}from"./LetterD.57f4735b.js";import{a as t,o as a,e as o,f as e,C as l,J as d}from"./entry.4dfd32b1.js";const f={name:"DAnimationSpinner"},_=t({...f,props:{spinPeriod:{type:Number,default:10},bladeWigglePeriod:{type:Number,default:5}},setup(r){const n="315 315";return(m,p)=>{const s=i;return a(),o("svg",{class:"spinner",viewBox:"0 0 630 630",xmlns:"http://www.w3.org/2000/svg",style:d({"--d-spinner-spin-period":r.spinPeriod+"s","--d-spinner-blade-wiggle-period":r.bladeWigglePeriod+"s"})},[e("defs",null,[l(s,{id:"d-letter"}),e("use",{id:"d-spinner-blade",href:"#d-letter",class:"d-animation-spinner__blade","transform-origin":n}),e("g",{id:"spinner",class:"d-animation-spinner__spinner","transform-origin":n},[e("use",{href:"#d-spinner-blade",transform:"rotate(0)","transform-origin":n}),e("use",{href:"#d-spinner-blade",transform:"rotate(120)","transform-origin":n}),e("use",{href:"#d-spinner-blade",transform:"rotate(240)","transform-origin":n})])]),e("use",{href:"#spinner",transform:"translate( -20 20 )",class:"fill-black","transform-origin":n}),e("use",{href:"#spinner",class:"fill-white","transform-origin":n})],4)}}});export{_};
