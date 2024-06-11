/* empty css                                                                           */import{_ as p,c as s,d as l,F as k,g,e as a,t as o,r as _,f as i,m as h,h as e,p as b,j as y}from"./index-200e7941.js";const f={class:"py-3 px-4 rounded-3 terminal"},j={class:"terminal-color-2"},v={class:"terminal-color-1"},S={__name:"CodestyleComponent",props:{isianHtml:Array,listStyle:String},setup(n){return(t,d)=>(s(),l("div",f,[(s(!0),l(k,null,g(n.isianHtml,(r,c)=>(s(),l("div",{key:c,class:"fs-xs2 d-flex gap-2"},[a("div",j,o(n.listStyle),1),a("div",v,o(r),1)]))),128))]))}},u=p(S,[["__scopeId","data-v-7b101d98"]]),V=a("h2",{class:"mb-4"},"Teknik Modular",-1),N={class:"fs-5"},C=h('<p>Berikut ini adalah langkah-langkah yang dapat dilakukan untuk membuat aplikasi dengan menggunakan framework Vue js. Dengan mengacu dari laman resmi <a href="https://vuejs.org/" target="_blank">Vue js</a>.</p><p>Sebelum memulai, pastikan syarat berikut ini sudah terpenuhi:</p><ol class="mb-3"><li>Terhubung ke jaringan internet.</li><li>Familiar dengan command line.</li><li>Sudah menginstal <a href="https://nodejs.org/en" target="_blank">Node js</a> versi 18.3 atau lebih tinggi.</li><li>Working directory sudah berada pada tempat yang sama dengan project baru yang akan dibuat.</li></ol><p>Proyek yang akan dibuat menggunakan setup build berdasarkan Vite dan memungkinkan kita menggunakan Vue Single-File Components (SFCs).</p><p>Jalankan perintah berikut pada terminal (tanpa simbol <span class="my-badge">$</span> ):</p>',5),A=a("p",null,[e("Perintah ini akan menginstal dan menjalankan "),a("a",{href:"https://github.com/vuejs/create-vue",target:"_blank"},"create-vue"),e(", alat resmi untuk scaffolding proyek Vue. Akan diberikan petunjuk untuk beberapa fitur opsional seperti TypeScript dan dukungan pengujian:")],-1),P=a("p",null,[e("Jika tidak yakin tentang suatu pilihan, cukup pilih "),a("span",{class:"my-badge"},"No"),e(" dengan menekan enter. Setelah proyek dibuat, ikuti petunjuk untuk menginstal dependensi dan memulai server dev:")],-1),w=a("p",null,"Sekarang seharusnya sudah berhasil menjalankan proyek Vue pertama! Perhatikan bahwa contoh komponen dalam proyek yang dihasilkan ditulis menggunakan Composition API dan "+o("<script setup>")+", bukan Options API.",-1),$=a("p",null,[e("Selama masa pengembangan dan uji coba sebaiknya tetap menggunakan perintah "),a("span",{class:"my-badge"},"npm run dev"),e(" ketika akan menjalankan aplikasi.")],-1),x=a("p",null,"Saat aplikasi sudah siap dikirim ke produksi, jalankan perintah berikut:",-1),H=a("p",null,[e("Ini akan membuat build aplikasi yang siap produksi di direktori ./dist proyek. Lihat "),a("a",{href:"https://vuejs.org/guide/best-practices/production-deployment.html",target:"_blank"},"Panduan Penerapan Produksi"),e(" untuk mempelajari lebih lanjut cara mengirimkan aplikasi ke produksi.")],-1),M=a("p",null,"Folder ./dist inilah yang biasanya diunggah ketika sudah masuk ke tahap hosting.",-1),T={__name:"TeknikModular",setup(n){const t=_([["npm create vue@latest"],["cd <your-project-name>","npm install","npm run dev"],["Project name: … <your-project-name>","Add TypeScript? … No / Yes","Add JSX Support? … No / Yes","Add Vue Router for Single Page Application development? … No / Yes","Add Pinia for state management? … No / Yes","Add Vitest for Unit testing? … No / Yes","Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright","Add ESLint for code quality? … No / Yes","Add Prettier for code formatting? … No / Yes"],["npm run build"]]);return(d,r)=>(s(),l("main",null,[V,a("div",N,[C,i(u,{isianHtml:t.value[0],listStyle:"$"},null,8,["isianHtml"]),A,i(u,{isianHtml:t.value[2],listStyle:"✔"},null,8,["isianHtml"]),P,i(u,{isianHtml:t.value[1],listStyle:"$"},null,8,["isianHtml"]),w,$,x,i(u,{isianHtml:t.value[3],listStyle:"$"},null,8,["isianHtml"]),H,M])]))}};const m=n=>(b("data-v-08e16695"),n=n(),y(),n),I=m(()=>a("h2",{class:"mb-4"},"Menggunakan Vue melalui CDN",-1)),F=m(()=>a("div",{class:"fs-5"},[a("p",null,"Vue dapat digunakan secara langsung melalui CDN dengan tag script:"),a("iframe",{width:"100%",height:"100",src:"//jsfiddle.net/anangPra/p0hy5xLf/1/embedded/html/",allowfullscreen:"allowfullscreen",allowpaymentrequest:"",frameborder:"0"}),a("p",null,"Pada web resmi Vuejs menggunakan unpkg, tetapi juga dapat menggunakan CDN apa pun yang melayani paket npm, misalnya jsdelivr atau cdnjs. Tentu saja, file ini dapat didownload dan menyajikannya sendiri."),a("p",null,'Saat menggunakan Vue dari CDN, tidak ada "build step" yang terlibat. Ini membuat penyiapannya jauh lebih sederhana, dan cocok untuk menyempurnakan HTML statis atau berintegrasi dengan kerangka backend. Namun, kita tidak dapat menggunakan sintaks Single-File Component (SFC).'),a("h4",{class:"mt-5 mb-3"},"Menggunakan Global Build"),a("p",null,"Tautan di atas memuat build global Vue, di mana semua API tingkat atas diekspos sebagai properti pada objek Vue global. Berikut ini contoh lengkap penggunaan build global:"),a("iframe",{width:"100%",height:"370",src:"//jsfiddle.net/anangPra/yo36w1dL/2/embedded/html/",allowfullscreen:"allowfullscreen",allowpaymentrequest:"",frameborder:"0"}),a("p",null,[e("Baca selengkapnya di laman resmi "),a("a",{href:"https://vuejs.org/guide/quick-start.html#using-vue-from-cdn"},"Vue js"),e(".")])],-1)),B=[I,F],Y={__name:"VueMelaluiCdn",setup(n){return(t,d)=>(s(),l("main",null,B))}},D=p(Y,[["__scopeId","data-v-08e16695"]]);const L={class:"list-unstyled doc"},q=a("li",{class:"content"},[a("h1",null,"Membuat Aplikasi Vue")],-1),E={class:"content"},J={class:"content"},R={__name:"MembuatAplikasiVue",setup(n){return(t,d)=>(s(),l("section",null,[a("ul",L,[q,a("li",E,[i(T)]),a("li",J,[i(D)])])]))}};export{R as default};