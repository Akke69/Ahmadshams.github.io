import{j as n,m as r}from"./vendor-DgHs0kF1.js";import{s as i}from"./styles-BMfF9tGN.js";const h=t=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:t}}}),l=(t,a,s,e)=>({hidden:{x:t==="left"?100:t==="right"?-100:0,y:t==="up"?100:t==="down"?-100:0,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:a,delay:s,duration:e,ease:"easeOut"}}}),y=(t,a,s,e)=>({hidden:{x:t==="left"?"-100%":t==="right"?"100%":0,y:t==="up"||t==="down"?"100%":0},show:{x:0,y:0,transition:{type:a,delay:s,duration:e,ease:"easeOut"}}}),o=(t,a)=>({hidden:{},show:{transition:{staggerChildren:t,delayChildren:a||0}}}),u=(t,a)=>function(){return n.jsxs(r.section,{variants:o(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.1},className:`${i.padding} max-w-7xl mx-auto relative z-0`,children:[n.jsx("span",{className:"hash-span",id:a,children:" "}),n.jsx(t,{})]})};export{u as S,l as f,y as s,h as t};