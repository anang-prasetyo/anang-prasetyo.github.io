<template>
  <main id="left-hover-panel" class="vh-100">
    <div class="cursor4" :style="lightMode ? 'filter: invert(0); -webkit-filter: invert(0);' : 'filter: invert(1); -webkit-filter: invert(1);'"></div>
    <div class="cursor4-follower" :style="lightMode ? 'filter: invert(1); -webkit-filter: invert(1);' : 'filter: invert(0); -webkit-filter: invert(0);'"></div>
    <div class="row m-0 w-100 border-top border-bottom">
      <div class="col-4 p-5 d-flex justify-content-center align-items-center">
        <ul class="m-0" @mousemove="animateOnMouseMove($event)" @mouseleave="resetLogoPos()">
          <li>
            <h5><b>Email</b></h5>
            <div>anprasetyo060@gmail.com</div>
          </li>
          <li class="mt-4">
            <h5><b>Whatsapp</b></h5>
            <div>+62 82133938464</div>
          </li>
          <li class="mt-4">
            <h5><b>Home</b></h5>
            <div>Surakarta, Indonesia</div>
          </li>
        </ul>
      </div>
      <div class="col-4 p-5">
        <div class="">
          <form class="formulir">
          <!-- <form action="https://api.web3forms.com/submit" method="POST" class="formulir"> -->
            <input type="hidden" name="access_key" value="91465317-6ab2-4aef-8d75-d8450ce5e5c9">
            <label for="name">name</label>
            <input type="text" name="name" required>
            <label for="email">email</label>
            <input type="email" name="email" required>
            <label for="message">message</label>
            <textarea name="message" required></textarea>
            <!-- <input type="hidden" name="redirect" value="https://web3forms.com/success"> -->
            <!-- <input type="hidden" name="redirect" value="http://localhost:5173/contact"> -->
            <button-dot class="mt-4" :value="'Submit Form'"></button-dot>
            <!-- <button type="submit">Submit Form</button> -->
          </form>
        </div>
      </div>
      <div class="col-4 d-flex align-items-center justify-content-center">
        <div class="logo">
          <logo-svg id="logo-animate-hover1" style="position: absolute; z-index: 1;"></logo-svg>
          <logo-svg id="logo-animate-hover2" style="position: absolute; z-index: 0; color: gainsboro;"></logo-svg>
        </div>
      </div>
    </div>
    <footer-component :light-mode="lightMode" @change-mode="$emit('changeMode')"></footer-component>
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import ButtonDot from '../components/ButtonDot.vue'
import LogoSvg from "../components/LogoSvg.vue";
import gsap from 'gsap'
import { useCustomCursor, useMagnetic } from "../script/MyFunc";
import FooterComponent from "../components/FooterComponent.vue";

const props = defineProps({
  lightMode: Boolean,
  position: Object
})

const { addMagnetic } = useMagnetic()

const animateLogo = () => {
  const tl = gsap.timeline({defaults: {ease: 'power4.out', duration: .7}})
  gsap.set('#anangweb-logo #Path-1', {
    xPercent: 20,
    duration: 1
  })
  gsap.set('#anangweb-logo #Path-2', {
    xPercent: -20,
    duration: 1
  })
  gsap.set('#anangweb-logo #Path-3', {
    opacity: 0
  })
  tl
    .to('#anangweb-logo #Path-1', {
      xPercent: -60
    })
    .to('#anangweb-logo #Path-2', {
      xPercent: 60
    }, "-=.7")
    .to('#anangweb-logo #Path-3', {
      opacity: 1
    })
    .to('#anangweb-logo #Path-1', {
      xPercent: 0
    })
    .to('#anangweb-logo #Path-2', {
      xPercent: -0
    }, "-=.7")
}

const animateOnMouseMove = (event) => {
  let _y = event.screenY
  let panel = document.querySelector('#left-hover-panel')
  let heightPanel = panel.offsetHeight
  let halfPanel = heightPanel/2
  let new_y = 0

  if (_y < halfPanel || _y > halfPanel){
    new_y = _y - halfPanel
  }
  else if (_y == halfPanel){
    new_y = 0
  }

  gsap.to('#logo-animate-hover1', {
    y: new_y,
    delay: .05
  })
  gsap.to('#logo-animate-hover2', {
    y: new_y,
    delay: .15
  })
}

const resetLogoPos = () => {
  gsap.to('#logo-animate-hover1', {
    y: 0,
    delay: .05
  })
  gsap.to('#logo-animate-hover2', {
    y: 0,
    delay: .15
  })
}

const { ambilEl, ambilPosisi, addEventMouse } = useCustomCursor()

const changeCursor = () => {
  ambilEl('.cursor4', '.cursor4-follower')
  ambilPosisi(props.position.posX, props.position.posY, props.position.mouseX, props.position.mouseY)
  addEventMouse(props.position.mouseX, props.position.mouseY)
}

const cursorOnMagnetic = () => {
  const addMagneticHover = () => {
    gsap.to('.cursor4', {
      scrollTrigger: {
        trigger: '.magnetic'
      },
      scale: 0,
      duration: .02
    })
    gsap.to('.cursor4-follower', {
      scrollTrigger: {
        trigger: '.magnetic'
      },
      scale: 1.5,
      duration: .02
    })
  }
  const removeMagneticHover = () => {
    gsap.to('.cursor4', {
      scrollTrigger: {
        trigger: '.magnetic'
      },
      scale: 0.5,
      duration: .02
    })
    gsap.to('.cursor4-follower', {
      scrollTrigger: {
        trigger: '.magnetic'
      },
      scale: 1,
      duration: .02
    })
  }
  let itemMagnetic = document.querySelectorAll('.magnetic')
  itemMagnetic.forEach((item)=>{
    item.addEventListener('mouseover', function() {
      addMagneticHover()
    })
    item.addEventListener('mouseleave', function() {
      removeMagneticHover()
    })
  })
}

onMounted(()=>{
  animateLogo()
  cursorOnMagnetic()
  changeCursor()
  addMagnetic(7, '#magnetic-icon')
})
</script>

<style scoped lang="scss">
button, a{
  cursor: none;
  &:hover{
    cursor: none;
  }
}

main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.separator{
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: var(--bs-border-color);
}

.logo{
  $ukuran: 150px;
  height: $ukuran;
  width: $ukuran;
  display: flex;
  align-items: center;
  position: relative;
}

.formulir{
  display: flex;
  flex-direction: column;
  // width: 500px;
  & label{
    text-transform: capitalize;
    margin-top: 20px;
    margin-bottom: 0px;
  }
  & textarea{
    min-height: 7rem;
  }
  & input, & textarea{
    padding: 3px 9px;
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

.cursor4 {
  $ukuran-s: 8px;
  $ukuran-m: 20px;

	position: absolute;
	background: var(--bs-body-color);
	width: $ukuran-s;
	height: $ukuran-s;
	border-radius: 100%;
	z-index: 21;
	transition: 0.5s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
			0.2s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
	user-select: none;
  -webkit-user-select: none;
  pointer-events: none;
	transform: scale(0.5);
  &-follower {
    position: absolute;
    background: rgba(var(--bs-body-color-rgb), 1);
    mix-blend-mode: difference;
    width: $ukuran-m;
    height: $ukuran-m;
    border-radius: 100%;
    z-index: 21;
    transition: 0.6s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
        0.4s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
    user-select: none;
    -webkit-user-select: none;
    pointer-events: none;
    transform: translate(14px, 14px);
    &.active {
      opacity: 0.3;
      transform: scale(0);
    }
  }
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