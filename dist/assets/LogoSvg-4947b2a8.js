import{_ as a,r as u,c as i,d as l,e as c,t as _,p,j as g,m}from"./index-d15a610e.js";const v=t=>(p("data-v-c55921d8"),t=t(),g(),t),y=v(()=>c("div",{class:"button-dot-animate"},null,-1)),b={class:"text"},f={__name:"ButtonDot",props:{value:String},setup(t){const o=u(""),n=()=>{o.value=document.querySelector(".button-dot-animate"),o.value.classList.toggle("button-dot-animate-is-open")},s=()=>{o.value.classList.remove("button-dot-animate-is-open"),o.value.classList.toggle("button-dot-animate-is-close"),setTimeout(()=>{o.value.classList.remove("button-dot-animate-is-close")},500)};return(r,e)=>(i(),l("button",{class:"my-button",onMouseenter:e[0]||(e[0]=d=>n()),onMouseleave:e[1]||(e[1]=d=>s())},[y,c("div",b,_(t.value),1)],32))}},S=a(f,[["__scopeId","data-v-c55921d8"]]),L={},h={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 248.96 189.92"},$=m('<title>anangweb-logo</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="anangweb-logo"><polygon id="Path-1" points="64.36 189.58 64.54 189.92 229.34 103.33 229.26 84.7 64.46 0 64.36 0.19 64.36 23.56 201.69 94.14 64.36 166.3 64.36 189.58" fill="currentColor"></polygon><polygon id="Path-2" points="187.56 189.82 187.51 189.92 22.71 103.33 22.8 84.7 187.56 0.02 187.56 23.63 50.37 94.14 187.56 166.22 187.56 189.82" fill="currentColor"></polygon><polygon id="Path-3" points="248.96 22.63 248.96 46.09 0.04 170.03 0 169.95 0 146.59 248.96 22.63" fill="currentColor"></polygon></g></g></g>',2),w=[$];function x(t,o,n,s,r,e){return i(),l("svg",h,w)}const D=a(L,[["render",x]]);export{S as B,D as L};
