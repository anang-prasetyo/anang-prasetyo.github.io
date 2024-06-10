<template>
  <main class="vh-100 d-flex flex-column align-items-center justify-content-center">
    <!-- <h3>This is a Contact Me page</h3> -->
    <div class="d-flex gap-3">
      <button class="btn btn-light" @click="cobaGerak()">coba</button>
      <button class="btn btn-light" @click="resetGerak()">reset</button>
    </div>
    <div class="mid">
      <div class="mid-a">
        <div class="st1">A</div>
        <div class="st1">N</div>
        <div class="st1">A</div>
        <div class="st1">N</div>
        <div class="st1">G</div>
      </div>
      <div class="mid-b">
        <div class="st1">P</div>
        <div class="st1">R</div>
        <div class="st1">A</div>
        <div class="st1">S</div>
        <div class="st1">E</div>
        <div class="st1">T</div>
        <div class="st1">Y</div>
        <div class="st1">O</div>
      </div>
      <div class="mid-c"></div>
    </div>
    <div>
      <button class="btn p-2 mb-3 me-3 border" @click="cobaFlip()">flip</button>
      <button class="btn p-2 mb-3 border" @click="resetFlip()">reset flip</button>
    </div>
    <div class="container px-5 flip-box">
      <div class="row m-0 flip-box-top">
        <div class="col p-5">
          <div class="">Atas</div>
          <div class="">Dolore quae obcaecati ex omnis unde quia neque nisi! Esse, aperiam assumenda consequatur modi natus, consectetur deleniti cupiditate repellat saepe, error ipsa.</div>
        </div>
        <div class="col"></div>
      </div>
      <div class="row m-0 flip-box-back">
        <div class="col"></div>
        <div class="col p-5">
          <div class="">Bawah</div>
          <div class="">Ullam dolores voluptatum quas! Corporis, fuga aperiam enim rerum magni quos culpa vero provident amet nostrum, voluptates reprehenderit beatae nam quis praesentium.</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { gsap } from 'gsap'

const tl = gsap.timeline({defaults: {ease: 'power4.out', duration: .7}})

const cobaGerak = () => {
  gsap.set('.mid', {
    autoAlpha: 1
  })
  gsap.set('.mid-b', {
    xPercent: -10
  })
  gsap.to('.mid', {
    scale: 1.2,
    duration: 4
  })

  tl
    .from(".mid-a .st1", { 
      yPercent: -300,
      stagger: .03,
      skewY: 60,
      skewX: 30,
      scaleY: .9,
      opacity: 0
    })
    .from(".mid-b .st1", { 
      yPercent: 315,
      stagger: .03,
      skewY: 60,
      skewX: 30,
      scaleY: .5,
      opacity: 0
    }, "-=.7")
    .to('.mid-b', {
      xPercent: 0,
      ease: 'elastic.out(1, .5)'
    }, "1.3")
    .from('.mid-c', {
      xPercent: -107,
      opacity: 0,
      ease: 'elastic.out(1, .5)'
    }, "-=.7")

    .to('.mid-a .st1', {
      skewX: 30,
      x: 30,
      scaleX: 0,
      stagger: .03,
      opacity: 0,
      duration: .2
    }, "+=1")
    .to('.mid-b .st1', {
      skewX: 30,
      x: 30,
      scaleX: 0,
      stagger: .03,
      opacity: 0,
      duration: .2
    }, "<")
    .to('.mid-c', {
      xPercent: 200,
      opacity: 0,
      ease: 'elastic.out(1, .5)'
    }, "<")
}
const resetGerak = () => {
  tl.clear()
}

const tl2 = gsap.timeline({defaults: {ease: 'power4.out', duration: .7}})
const cobaFlip = () => {
  tl2.to('.flip-box', {
    rotationY: -180
  })
}
const resetFlip = () => {
  tl2.to('.flip-box', {
    rotationY: 0
  })
}

</script>

<style scoped lang="scss">
.mid{
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 6rem;
  &-a, &-b{
    font-size: 3rem;
    font-weight: 700;
    display: flex;
  }
  &-a{
    line-height: 15px;
  }
  &-b{
    line-height: 50px;
    padding-left: 20px;
  }
  &-c{
    background: var(--bs-body-color);
    height: 4px;
    width: 25px;
    position: absolute;
    left: 0;
    bottom: 31px;
  }
}

.flip-box{
  width: 100%;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
  position: relative;
  padding: 1rem;
  // &:hover{
  //   transform: rotateY(180deg);
  // }
  &-top, &-back{
    border: 1px solid var(--bs-border-color);
    backface-visibility: hidden;
    overflow: hidden;
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: max-content;
  }
  &-top{
  }
  &-back{
    transform: rotateY(180deg);
  }
}

</style>