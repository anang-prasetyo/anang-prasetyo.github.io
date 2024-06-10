<template>
  <main class="container-fluid">
    <div class="row mb-0">
      <div id="sidebar-left" class="col-2 border-end position-fixed h-100 top-0 start-0" style="">
        <aside class="px-3">
          <ul class="list-unstyled mb-0 d-flex flex-column gap-1">
            <li class="py-3 mb-2" style="min-height: 51.72px;">
              <!-- <router-link to="/docs" class="d-flex gap-1 align-items-center text-decoration-none text-body">
                <img src="../assets/logo.png" alt="" style="height: 24px;">
                <b>ANANG-WEB</b>
              </router-link> -->
            </li>
            <li class="pb-2">
              <div><b>Memulai</b></div>
              <ul class="list-unstyled text-secondary">
                <li>
                  <router-link to="/docs" class="text-capitalize" :class="route.path === '/docs' ? 'text-primary' : 'text-secondary'">Perkenalan</router-link>
                </li>
              </ul>
            </li>
            <li v-for="d, di in docs" :key="di" class="pb-2">
              <div><b>{{ d.name }}</b></div>
              <ul class="list-unstyled">
                <li v-for="dc, dci in d.chapter" :key="dci">
                  <router-link :to="'/docs/' + dc.name.replaceAll(' ', '-')" class="text-capitalize" :class="route.path === '/docs/'+dc.name.replaceAll(' ', '-') ? 'text-primary' : 'text-secondary'">{{ dc.name }}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </aside>
      </div>
      <div id="baseCanvas" class="col min-vh-100" style="padding: 3rem 5rem; padding-top: 4rem; margin: 0 16.66666667%;">

        <router-view name="b"></router-view>

        <section class="mt-5">
          <div class="row mb-0">
            <div class="col">
              <div class="border rounded rounded-3 p-3">
                <div>Halaman sebelumnya</div>
                <div class="text-primary">Tag</div>
              </div>
            </div>
            <div class="col">
              <div class="border rounded rounded-3 p-3">
                <div>Halaman selanjutnya</div>
                <div class="text-primary">HTML Lanjutan</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div id="sidebar-right" class="col-2 border-start position-fixed h-100 top-0 end-0" style="">
        <aside class="pt-5 mt-3">
          <div class="mb-3"><b>ON THIS PAGE</b></div>
          <ul v-if="docs" class="list-unstyled text-secondary">
            <li v-for="d, di in docs[1].chapter[0].lists" :key="di" class="text-capitalize">{{ d }}</li>
          </ul>
        </aside>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import useDb from '../script/MyDatabase'
import { useRoute } from 'vue-router'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()
const { docs } = useDb()
const emit = defineEmits(['changeMode'])

const addScrolledCursor = () => {
  let cursor = document.querySelector('.cursor')
  let cursorFollower = document.querySelector('.cursor-follower')
  cursor.classList.add('cursor--scrolled')
  cursorFollower.classList.add('cursor-follower--scrolled')
}

const navBg = () => {
  gsap.to('.menus', {
    scrollTrigger: {
      trigger: '.menus',
      start: 'top -80',
      end: 99999,
    },
    background: 'var(--bs-body-bg)'
  })
}

onMounted(()=>{
  // emit('changeMode', 'light')
  addScrolledCursor()
  navBg()
})

</script>

<style lang="scss" scoped>
button, a{
  cursor: none;
}
a{
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
}
</style>