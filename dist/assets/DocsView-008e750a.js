import{u as N}from"./MyDatabase-5defe286.js";import{_ as T,k as y,a as D,o as I,b,c as s,d as t,e,f as i,w as g,h as x,n as w,i as a,F as n,g as u,t as _,s as L,m as z,p as B,j as H}from"./index-200e7941.js";import{S as M}from"./ScrollTrigger-facc6abe.js";const p=o=>(B("data-v-85afe043"),o=o(),H(),o),j={class:"container-fluid"},A={class:"row mb-0"},F={id:"sidebar-left",class:"col-2 border-end position-fixed h-100 top-0 start-0",style:{}},P={class:"px-3"},q={class:"list-unstyled mb-0 d-flex flex-column gap-1"},E=p(()=>e("li",{class:"py-3 mb-2",style:{"min-height":"51.72px"}},null,-1)),G={class:"pb-2"},O=p(()=>e("div",null,[e("b",null,"Memulai")],-1)),R={class:"list-unstyled text-secondary"},W={class:"list-unstyled"},J={id:"baseCanvas",class:"col min-vh-100",style:{padding:"3rem 5rem","padding-top":"4rem",margin:"0 16.66666667%"}},K=z('<section class="mt-5" data-v-85afe043><div class="row mb-0" data-v-85afe043><div class="col" data-v-85afe043><div class="border rounded rounded-3 p-3" data-v-85afe043><div data-v-85afe043>Halaman sebelumnya</div><div class="text-primary" data-v-85afe043>Tag</div></div></div><div class="col" data-v-85afe043><div class="border rounded rounded-3 p-3" data-v-85afe043><div data-v-85afe043>Halaman selanjutnya</div><div class="text-primary" data-v-85afe043>HTML Lanjutan</div></div></div></div></section>',1),Q={id:"sidebar-right",class:"col-2 border-start position-fixed h-100 top-0 end-0",style:{}},U={class:"pt-5 mt-3"},X=p(()=>e("div",{class:"mb-3"},[e("b",null,"ON THIS PAGE")],-1)),Y={key:0,class:"list-unstyled text-secondary"},Z={__name:"DocsView",emits:["changeMode"],setup(o,{emit:$}){y.registerPlugin(M);const m=D(),{docs:d}=N(),S=()=>{let v=document.querySelector(".cursor"),h=document.querySelector(".cursor-follower");v.classList.add("cursor--scrolled"),h.classList.add("cursor-follower--scrolled")},k=()=>{y.to(".menus",{scrollTrigger:{trigger:".menus",start:"top -80",end:99999},background:"var(--bs-body-bg)"})};return I(()=>{S(),k()}),(v,h)=>{const f=b("router-link"),V=b("router-view");return s(),t("main",j,[e("div",A,[e("div",F,[e("aside",P,[e("ul",q,[E,e("li",G,[O,e("ul",R,[e("li",null,[i(f,{to:"/docs",class:w(["text-capitalize",a(m).path==="/docs"?"text-primary":"text-secondary"])},{default:g(()=>[x("Perkenalan")]),_:1},8,["class"])])])]),(s(!0),t(n,null,u(a(d),(l,r)=>(s(),t("li",{key:r,class:"pb-2"},[e("div",null,[e("b",null,_(l.name),1)]),e("ul",W,[(s(!0),t(n,null,u(l.chapter,(c,C)=>(s(),t("li",{key:C},[i(f,{to:"/docs/"+c.name.replaceAll(" ","-"),class:w(["text-capitalize",a(m).path==="/docs/"+c.name.replaceAll(" ","-")?"text-primary":"text-secondary"])},{default:g(()=>[x(_(c.name),1)]),_:2},1032,["to","class"])]))),128))])]))),128))])])]),e("div",J,[i(V,{name:"b"}),K]),e("div",Q,[e("aside",U,[X,a(d)?(s(),t("ul",Y,[(s(!0),t(n,null,u(a(d)[1].chapter[0].lists,(l,r)=>(s(),t("li",{key:r,class:"text-capitalize"},_(l),1))),128))])):L("",!0)])])])])}}},ae=T(Z,[["__scopeId","data-v-85afe043"]]);export{ae as default};