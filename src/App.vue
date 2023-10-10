<template>
  <main class="d-flex flex-column gap-5 position-relative">
    <div class="container py-2 position-absolute top-0 start-0 end-0">
      <div class="alert alert-primary" role="alert">This site is currently undergoing maintenance, some features may not function properly</div>
    </div>
    <section class="container vh-100 d-flex align-items-center py-3">
      <div class="row h-100 vw-100 d-flex justify-content-center align-items-center flex-column flex-md-row row-gap-5">
        <div class="col-12 col-md text-center text-md-start">
          <div class="h1 d-flex flex-column">Hi, I am Anang. <span style="color: blueviolet;">Fullstack Developer.</span></div>
          <div class="h3">Currently based in Surakarta, Indonesia.</div>
        </div>
        <div class="col-12 col-md">
          <div class="box m-auto"></div>
        </div>
      </div>
    </section>
    <my-skills />
    <my-projects />
    <section class="container-fluid bg-warning d-flex align-items-center justify-content-center py-4 sosmed-bg">
      <div class="row h-100 w-100 d-flex justify-content-center align-items-center">
        <div class="col p-3 h2 text-center m-auto">My contact.</div>
        <div class="col">
          <ul class="list-unstyled d-flex justify-content-center gap-2 m-auto sosmed">
            <li v-for="s in sosmedKu" :key="s"><i :class="'bi-'+s.name"></i></li>
          </ul>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container py-3 px-3 text-center">Is being developed by Anang in 2023</div>
    </footer>
  </main>
</template>

<script setup>
import MySkills from "./components/MySkills.vue";
import MyProjects from "./components/MyProjects.vue";
import { ref } from "vue";

const sosmedKu = ref([
  { name:'github', link:"https://www.github.com/" },
  { name:'whatsapp', link:"https://www.github.com/" },
  { name:'instagram', link:"https://www.github.com/" },
  { name:'linkedin', link:"https://www.github.com/" },
  { name:'telegram', link:"https://www.github.com/" },
])
</script>

<style lang="scss" scoped>

.box{
  background: lavender;
  height: 9rem;
  width: 9rem;
  border-radius: var(--border-radius-1);
  border: var(--border-black-2);
  box-shadow: var(--box-shadow-black);
}


.sosmed{
  &-bg{
    outline: var(--border-black-3); 
    border-top: 3px solid white; 
    border-bottom: 3px solid white;
  } 
  & li{
    background: lavender;
    height: 2rem;
    width: 2rem;
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