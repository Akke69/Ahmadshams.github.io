import{r as a,j as e,L as i,m as u}from"./vendor-DgHs0kF1.js";import{s as r}from"./styles-BMfF9tGN.js";const p="/assets/memainmod-BhpCQFS-.png",l=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),w=({onToggleStars:c,showStars:d})=>{const[m,x]=a.useState(l),[t,h]=a.useState(0);return a.useEffect(()=>{const n=()=>{const s=window.scrollY||window.pageYOffset,o=document.getElementById("navy");s-t>.1?(l&&x(!1),o.classList.add("hidden")):s-t<.1&&o.classList.remove("hidden"),s<1&&o.classList.remove("hidden"),h(s)};return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[t]),e.jsxs("section",{className:"relative w-full h-screen mx-auto overflow-x-hidden",children:[e.jsxs("div",{className:`absolute inset-0 top-[120px] max-w-7xl mx-auto ${r.paddingX} flex flex-row items-start gap-5 z-10`,children:[e.jsxs("div",{className:"flex flex-col justify-center items-center mt-5",children:[e.jsx("div",{className:"w-5 h-5 rounded-full bg-[#aaa6c3]"}),e.jsx("div",{className:"w-1 sm:h-80 h-40 violet-gradient"})]}),e.jsxs("div",{children:[e.jsxs("h1",{className:`${r.heroHeadText} text-white`,children:["Hi, I'm ",e.jsx("span",{className:"text-[#6f0af2]",children:"Ahmad Shames"}),","]}),e.jsxs("p",{className:`${r.heroSubText} mt-2 text-white-100`,children:["A Mechanical Engineer, Innovator, and future Entrepreneur. ",e.jsx("br",{className:"sm:block hidden"}),"I focus on developing efficient & practical solutions",e.jsx("br",{className:"sm:block hidden"})," to engineering problems."]}),e.jsx("img",{className:"absolute object-cover h-auto w-3/4 sm:w-1/2 z-[-1] left-[40%] top-0 sm:left-[500px] xs:left-[200px] top-[150px]",src:p,alt:"me"}),e.jsxs("div",{className:"mt-10 flex flex-col items-start",children:[e.jsx(i,{to:"contact",smooth:!0,duration:1e3,className:"bg-secondary text-white px-5 py-3 rounded-md cursor-pointer mb-4",style:{backgroundColor:"#6F03F2",minWidth:"100px"},children:"Contact Me!"}),e.jsx("button",{onClick:c,className:"toggle-stars-button bg-secondary text-white px-5 py-3 rounded-md cursor-pointer",style:{backgroundColor:"#6F03F2",minWidth:"100px"},children:d?"Hide Stars":"Show Stars"})]})]})]}),m&&e.jsx("div",{className:"absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10",children:e.jsx(i,{to:"about",smooth:!0,duration:500,children:e.jsx("div",{className:"w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2",children:e.jsx(u.div,{animate:{y:[0,24,0]},transition:{duration:1.5,repeat:1/0,repeatType:"loop"},className:"w-3 h-3 rounded-full bg-secondary mb-1"})})})})]})};export{w as default};