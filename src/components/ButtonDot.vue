<template>
  <button class="my-button" @mouseenter="addAnimation()" @mouseleave="removeAnimation()">
    <div class="button-dot-animate"></div>
    <div class="text">{{ value }}</div>
  </button>
</template>

<script setup>
import { ref } from "vue"

defineProps({
  value: String,
})

const buttonEl = ref('')

const ambilEl = () => {
  buttonEl.value = document.querySelector('.button-dot-animate')
}

const addAnimation = () => {
  buttonEl.value = document.querySelector('.button-dot-animate')
  buttonEl.value.classList.toggle('button-dot-animate-is-open')
}
const removeAnimation = () => {
  buttonEl.value.classList.remove('button-dot-animate-is-open')
  buttonEl.value.classList.toggle('button-dot-animate-is-close')
  setTimeout(()=>{
    buttonEl.value.classList.remove('button-dot-animate-is-close')
  }, 500)
}
</script>

<style scoped lang="scss">
.my-button{
  border: none;
  outline: none;
  padding: 5px 15px;
  text-transform: capitalize;
  position: relative;
}
.button-dot-animate{
  width: 100%;
  height: 100%;
  background: var(--bs-body-color);
  position: absolute;
  bottom: 0%;
  left: 0%;
  clip-path: circle(10px at 0% 100%);
	transition: clip-path 50ms;
	mix-blend-mode: difference;
	filter: invert(1);
	-webkit-filter: invert(1);
  &-is-open, &-is-close{
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    transition: clip-path 1.3s;
  }
  &-is-open{
    clip-path: circle(200% at 100% 100%);
  }
  &-is-close{
    clip-path: circle(10px at 0% 100%);
  }
}
</style>