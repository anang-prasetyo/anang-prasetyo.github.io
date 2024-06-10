<template>
  <main class="h-100 overflow-auto">
    <hero-component></hero-component>
    <drh-component></drh-component>
    <isian-component></isian-component>
    <my-skills />
    <my-projects />

    <section class="d-flex align-items-center border-bottom border-black border-2 display-3 text-center" style="background: #F96269;" :style="type == 'md' || type == 'lg' ? 'min-height: 90vh; line-height: 3.5rem;' : ''">
      <div :style="type == 'lg' ? 'padding: 5rem;' : 'padding: 2rem;'">
        <div style="font-weight: 400;">Bagikan pekerjaan Anda. Seseorang diluar sana mungkin membutuhkannya.</div>
        <a href="https://wa.me/6282133938464?text=Halo%20Anang,%20saya%20ingin%20bertanya%20mengenai%20" target="_blank" class="text-decoration-none" style="color: inherit;">
          <button class="btn btn-dark rounded-0 btn-lg px-5 py-3 mt-4">Mulai Konsultasi</button>
        </a>
      </div>
    </section>

    <footer-component></footer-component>
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { useBreakpoints } from "../script/MyFunc";

const HeroComponent = defineAsyncComponent(()=> import ('../components/HeroComponent.vue'))
const DrhComponent = defineAsyncComponent(()=> import ('../components/DrhComponent.vue'))
const IsianComponent = defineAsyncComponent(()=> import ('../components/IsianComponent.vue'))
const MySkills = defineAsyncComponent(()=> import ('../components/MySkills.vue'))
const MyProjects = defineAsyncComponent(()=> import ('../components/MyProjects.vue'))
const FooterComponent = defineAsyncComponent(()=> import ('../components/FooterComponent.vue'))

const { type } = useBreakpoints()
</script>

<style>

</style>