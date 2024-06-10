<template>
  <section :class="type == 'lg' ? '' : ''">
    <div class="row m-0 border-top border-bottom border-black border-2">
      <div id="boxBorderEnd" class="col-12 col-md-6 text-center text-md-start d-flex flex-column gap-3 justify-content-center align-items-center align-items-sm-start" style="background: #fff;" :style="[type == 'xs' ? 'padding: 0rem 2rem 0rem 2rem; min-height: 50vh;' : 'padding: 0rem 5rem 0rem 5rem; height: 100vh;']">
        <div class="h1 d-flex flex-column">Halo, Saya Anang. <span class="fw-bold" style="color: #F96269;">Front-end Web Developer.</span></div>
        <div class="h3">Fresh graduate Sarjana Informatika.</div>
        <div class="h3">Saat ini tinggal di Surakarta, Indonesia.</div>
        <a href="https://wa.me/6282133938464?text=Halo%20Anang,%20saya%20ingin%20bertanya%20mengenai%20" target="_blank" class="text-decoration-none" style="color: inherit;">
          <button class="btn btn-dark rounded-0 btn-lg px-5 py-3 mt-4">Mulai Diskusi</button>
        </a>
        <!-- <button class="mt-2 btn-custom-1">Undang saya</button> -->
      </div>
      <div class="col-12 col-md-6 d-flex flex-column justify-content-center position-relative" style="background: #253C78;" :style="type == 'xs' ? 'padding: 3rem; min-height: 50vh;' : 'height: 100vh;'">
        <!-- <div class="box m-auto"></div> -->
        <div class="project-thumb m-auto" :style="type == 'md' || type == 'lg' ? 'height: 25rem;' : ''">
          <img src="../assets/anang-prasetyo-avatar.png" alt="">
        </div>
        <div id="sticker1" class="position-absolute" style="right: 15%; top: 40%; height: 5rem; transform: rotate(-12deg);">
          <coding-sticker style="color: #253C78; height: 6rem; width: 7rem; animation: float 19s ease infinite reverse;" />
        </div>
        <div id="sticker2" class="position-absolute" style="left: 15%; bottom: 15%; height: 8rem; transform: rotate(12deg);">
          <programming-language style="color: #F96269; height: 8rem; width: 12rem; animation: float 24s ease infinite reverse;" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CodingSticker from "../icons/CodingSticker.vue";
import ProgrammingLanguage from "../icons/ProgrammingLanguage.vue";
import { useBreakpoints } from "../script/MyFunc";

const { type } = useBreakpoints()

</script>

<style scoped lang="scss">

.btn-custom-1{
  --width-btn: 180px;
  --height-btn: 60px;
  width: var(--width-btn);
  height: var(--height-btn);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(249, 98, 105);
  // background-color: rgb(15, 15, 15);
  border: none;
  color: black;
  // color: #F96269;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(249, 98, 105, 0.103);
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
  &::before {
    width: var(--width-btn);
    height: var(--width-btn);
    position: absolute;
    content: "";
    background-color: #F96269;
    border-radius: 50%;
    left: -100%;
    top: 0;
    transition-duration: .3s;
    mix-blend-mode: difference;
  }
  &:hover::before, &:active::before {
    transition-duration: .3s;
    transform: translate(100%,-50%);
    border-radius: 0;
  }
  &:active {
    transform: translate(5px,5px);
    transition-duration: .3s;
  }
}



</style>