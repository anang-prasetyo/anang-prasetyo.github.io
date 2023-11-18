<template>
  <main class="d-flex flex-column position-relative">
    <div class="container py-2 position-absolute top-0 start-0 end-0">
      <!-- <div class="alert alert-primary" role="alert">This site is currently undergoing maintenance, some features may not function properly</div> -->
    </div>
    <hero-component class="mb-5" />
    <section class="container my-5">
      <div id="pad5" class="d-flex flex-column gap-2 text-center">
        <div class="display-4 fw-bold">Mulai kenalkan diri Anda kepada dunia.</div>
        <div class="fs-3 lh-sm">Apakah Anda ingin membangun dari awal atau sekedar ingin mengupgrade website, saya siap membantu mewujudkan impian Anda. Anda tidak perlu tahu tentang teknologi untuk dapat menggunakan web. Anda hanya perlu melakukannya seperti yang Anda lakukan di dunia nyata.</div>
      </div>
    </section>
    <my-skills class="mt-5" />
    <my-projects />
    <section class="container-fluid d-flex align-items-center justify-content-center py-4 sosmed-bg" style="background: #253C78;">
      <div class="row h-100 w-100 d-flex justify-content-center align-items-center">
        <div class="col p-3 h2 text-center m-auto text-white">Kontak saya.</div>
        <div class="col">
          <ul class="list-unstyled d-flex justify-content-center gap-2 m-auto sosmed">
            <li v-for="s in sosmedKu" :key="s"><i :class="'bi-'+s.name"></i></li>
          </ul>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container py-3 px-3 text-center">by Anang in 2023</div>
    </footer>
  </main>
</template>

<script setup>
import { ref } from "vue"
import MySkills from "./components/MySkills.vue";
import MyProjects from "./components/MyProjects.vue";
import HeroComponent from "./components/HeroComponent.vue";
// import { Vue3Lottie } from 'vue3-lottie'
// import AstronautJSON from './assets/animasi/website.json'

const sosmedKu = ref([
  { name:'github', link:"https://github.com/anang-prasetyo" },
  { name:'whatsapp', link:"https://wa.me/6282133938464?text=Halo%20Anang,%20saya%20ingin%20bertanya%20mengenai%20" },
  { name:'instagram', link:"https://www.instagram.com/pra_anang/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" },
  // { name:'linkedin', link:"https://www.github.com/" },
  // { name:'telegram', link:"https://www.github.com/" },
  { name:'envelope', link:"http://mail.google.com/mail/?view=cm&fs=1&tf=1&to=TO_anprasetyo060@gmail.com&su=SUBJECT&body=BODY" },
])
</script>

<style lang="scss" scoped>
.sosmed{
  &-bg{
    outline: var(--border-black-3); 
    border-top: 3px solid white; 
    border-bottom: 3px solid white;
  } 
  & li{
    background: lavender;
    height: 2.5rem;
    width: 2.5rem;
    font-size: 1.5rem;
    border-radius: 3rem;
    border: var(--border-black-2);
    box-shadow: var(--box-shadow-black);
    text-align: center;
    padding: 5px;
  }
}
@media (max-width: 576px) {
  .sosmed{
    & li{
      padding: 0px;
    }
  }
}
</style>