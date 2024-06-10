<template>
  <footer class="row">
    <div class="col d-flex align-items-center">
      <ul class="d-flex list-unstyled mb-0">
        <li id="magnetic-icon0" class="pe-4 magnetic"><a href="https://www.instagram.com/pra_anang?igsh=OXBocGVtZGJtdHNt&utm_source=qr" target="_blank" class="body-color"><i class="bi bi-instagram"></i></a></li>
        <li id="magnetic-icon1" class="px-4 magnetic"><a href="https://dribbble.com/anprasetyo" target="_blank" class="body-color"><i class="bi bi-dribbble"></i></a></li>
        <li id="magnetic-icon2" class="px-4 magnetic"><i class="bi bi-behance"></i></li>
        <li id="magnetic-icon3" class="px-4 magnetic"><a href="https://www.linkedin.com/in/anang-prasetyo-09318b197/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" class="body-color"><i class="bi bi-linkedin"></i></a></li>
        <li id="magnetic-icon4" class="px-4 magnetic"><a href="https://github.com/anang-prasetyo" target="_blank" class="body-color"><i class="bi bi-github"></i></a></li>
      </ul>
    </div>
    <div class="col-auto text-center d-flex align-items-center">
      <div class="fs-xs2">&copy; Anang Prasetyo 2024</div>
    </div>
    <div class="col d-flex gap-4 align-items-center flex-row-reverse position-relative">
      <div class="dot-display"></div>
      <div id="magnetic-icon5" class="px-3 magnetic">
        <i class="bi text-body" :class="lightMode ? 'bi-sun' : 'bi-moon'" @click="invertTo(), toggleModeAnimation()"></i>
      </div>
      <div class="info-modal">
        <div class="info-modal-close magnetic" @click="isShowInfoModal = false, hideInfoModal()">x</div>
        <ul class="list-unstyled mb-0">
          <li>Beta version 1.0</li>
          <li>Last update June 10, 2024</li>
        </ul>
      </div>
      <div id="magnetic-icon6" class="px-3 magnetic" @mouseover="showInfoModal()" @mouseleave="hideInfoModal()" @click="isShowInfoModal = !isShowInfoModal">
        <i class="bi" :class="isShowInfoModal ? 'bi-info-square-fill' : 'bi-info-square'"></i>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from 'gsap'

const props = defineProps({
  lightMode: Boolean,
})

const emit = defineEmits(['changeMode'])

const styleInvert = ref([
  {
    name: 'filter',
    value: 'invert(-1)'
  },
  {
    name: '-webkit-filter',
    value: 'invert(-1)'
  },
])
const invertTo = () => {
  if(props.lightMode){
    styleInvert.value[0].value = 'invert('+ 0 +')'
    styleInvert.value[1].value = 'invert('+ 0 +')'
  }
  else if(!props.lightMode){
    styleInvert.value[0].value = 'invert('+ 1 +')'
    styleInvert.value[1].value = 'invert('+ 1 +')'
  }
}
const dot = ref('')
const toggleModeAnimation = () => {
  dot.value = document.querySelector('.dot-display')
  setTimeout(()=>{
    dot.value.classList.toggle('dot-display-is-open')
  }, 100)
  setTimeout(()=>{
    emit('changeMode')
    dot.value.classList.toggle('dot-display-is-close')
  }, 700)
  setTimeout(()=>{
    dot.value.classList.remove('dot-display-is-open')
    dot.value.classList.remove('dot-display-is-close')
  }, 800)
}

const isShowInfoModal = ref(false)
const setInfoModal = () => {
  gsap.set('.info-modal', {
    xPercent: 200,
    opacity: 0
  })
}
const showInfoModal = () => {
  gsap.to('.info-modal', {
    xPercent: 0,
    opacity: 1
  })
}
const hideInfoModal = () => {
  if(!isShowInfoModal.value){
    gsap.to('.info-modal', {
      xPercent: 200,
      opacity: 0,
      delay: .5
    })
  }
}

onMounted(()=>{
  setInfoModal()
})
</script>

<style lang="scss" scoped>
button, a{
  cursor: none;
  &:hover{
    cursor: none;
  }
}

footer{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0rem 2rem;
  // border-top: 1px solid var(--bs-border-color);
  height: 50px;
}

.info-modal{
  position: absolute;
  top: -100%;
  right: 5%;
  border: 1px solid var(--bs-body-color);
  padding: 5px 15px;
  background: var(--bs-body-bg);
  font-size: 14px;
  &-close{
    $right: -4%;
    $top: -15%;

    position: absolute;
    border: 1px solid var(--bs-body-color);
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    right: $right;
    top: $top;
    background: var(--bs-body-bg);
    transition: all .5s ease;
    &:hover{
      right: calc($right + 3%);
      top: calc($top + 3%);
      background: var(--bs-body-color);
      color: var(--bs-body-bg);
    }
  }
}
</style>