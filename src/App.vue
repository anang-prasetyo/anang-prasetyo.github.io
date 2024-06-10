<template>
  <main class="d-flex flex-column position-relative bg-body text-body" :data-bs-theme="displayMode.name">
    <div class="cursor" :class="route.path == '/projects' || route.path == '/about' || route.path == '/contact' ? 'd-none' : ''"></div>
		<div class="cursor-follower" :class="route.path == '/projects' || route.path == '/about' || route.path == '/contact' ? 'd-none' : ''"></div>
    <!-- <div class="container py-2 position-absolute top-0 start-0 end-0">
      <div class="alert alert-primary" role="alert">This site is currently undergoing maintenance, some features may not function properly</div>
    </div> -->
    
    <!-- <preload-component></preload-component> -->
    <!-- <preload-curtain></preload-curtain> -->
    <nav-component v-if="route.path !== '/'"></nav-component>

    <router-view v-slot="{ Component, route }" :class="route.path !== '/' ? '' : ''" @change-mode="handleChangeMode" :light-mode="lightMode" :position="position">
      <transition 
        :enter-active-class="route.meta.enterClass"
        mode="out-in"
      >
        <component :is="Component"></component>
      </transition>
    </router-view>
    
  </main>
</template>

<script setup>
import { defineAsyncComponent, onMounted, reactive, ref } from "vue"
import { useCustomCursor } from "./script/MyFunc";


const NavComponent = defineAsyncComponent(()=> import ('./components/NavComponent.vue'))
// const PreloadComponent = defineAsyncComponent(()=> import ('./components/PreloadComponent.vue'))
import PreloadComponent from './components/PreloadComponent.vue'
import { useRoute } from "vue-router";
const PreloadCurtain = defineAsyncComponent(()=> import ('./components/PreloadCurtain.vue'))

const route = useRoute()
const lightMode = ref(true)
const displayMode = reactive({
  name: 'light'
})

const handleChangeMode = (_a) => {
  if(_a){
    if(_a === 'light'){
      lightMode.value = true
    }
    else if(_a === 'dark'){
      lightMode.value = false
    }
    displayMode.name = _a
  }
  else{
    lightMode.value = !lightMode.value
    if (lightMode.value){
      displayMode.name = 'light'
    }
    else {
      displayMode.name = 'dark'
    }
    console.log('biasa');
  }
}

const { ambilEl, position, ambilPosisiAwal, addEventMouseAwal } = useCustomCursor()

onMounted(() => {
  ambilEl('.cursor', '.cursor-follower')
  ambilPosisiAwal()
  addEventMouseAwal()
})
</script>

<style lang="scss" scoped>
main{
  overflow: hidden;
  transition: all .3s;
}
.page{
  position: absolute;
  top: 30px;
}
</style>