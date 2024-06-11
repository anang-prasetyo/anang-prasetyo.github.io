<template>
  <main>
    
    <section class="vh-100 d-flex flex-column align-items-center justify-content-center position-relative">
      <div class="cursor2" :style="lightMode ? 'filter: invert(0); -webkit-filter: invert(0);' : 'filter: invert(1); -webkit-filter: invert(1);'"></div>
    <div class="cursor2-follower" :style="lightMode ? 'filter: invert(1); -webkit-filter: invert(1);' : 'filter: invert(0); -webkit-filter: invert(0);'"></div>

      <div class="scroll">
        <div v-for="isi, isix in isian" :key="isix" class="scroll-bar-border" @click="scrollBarChange(isix+1)">
          <div class="scroll-bar" :style="thisSection.current == (isix+1) ? {'opacity': 1} : {'opacity': .25}"></div>
        </div>
        <div v-for="i in 3" :key="i" class="scroll-bar-border" @click="scrollBarChange(i+2)">
          <div class="scroll-bar" :style="thisSection.current == (i+2) ? {'opacity': 1} : {'opacity': .25}"></div>
        </div>
      </div>
      <div v-if="thisSection.current < 3" class="back-text">{{ thisSection.backText }}</div>
      <div v-if="thisSection.current < 3" class="mid" :style="{'opacity': styleTitleEl[0].opacity}">
        <div class="mid-a">
          <div v-for="n, ni in thisSection.name" :key="ni" :class="thisSection.current == 1 ? 'st1' : 'st2'">{{ n }}</div>
        </div>
      </div>
      <div v-if="thisSection.current < 3" class="text-miring">
        <div class="text-miring-isi">
          <div class="text-miring-atas">frontend / backend / designer</div>
          <div class="text-miring-bawah">web / ui / ux / dev</div>
        </div>
      </div>
      <div v-if="thisSection.current < 3" class="back-img">
        <div class="pre-potrait" :style="[thisSection.current == 1 ? {'z-index': 2} : [{'z-index': 1},{'opacity': 0}], {'opacity': styleTitleEl[1].opacity}]">
          <div class="potrait-1"></div>
        </div>
        <div class="pre-potrait" :style="[thisSection.current == 2 ? {'z-index': 2} : [{'z-index': 1},{'opacity': 0}], {'opacity': styleTitleEl[2].opacity}]">
          <div class="potrait-2"></div>
        </div>
      </div>

      <div v-else class="container flip-box">
        <div class="flip-box-top" style="padding-left: 5rem; padding-right: 5rem;">
          <div class="border d-flex align-items-center" style="min-height: 420px; ">
            <div v-if="thisSection.activePage.page3 || thisSection.activePage.page4 || thisSection.activePage.page5" class="row m-0 w-100" :class="thisSection.current == 3 && thisSection.scrollVal == 1 ? 'opacity-0' : ''">
              <div class="col-6 p-5 d-flex align-items-center justify-content-center">
                <h4 class="text-uppercase">tingkat penguasaan</h4>
              </div>
              <div class="col-6 p-5">
                <ul class="list-unstyled">
                  <li><i class="bi bi-check"></i> Adobe Illustrator <span class="text-primary">(Mahir)</span></li>
                  <li><i class="bi bi-check"></i> Adobe Photoshop <span class="text-primary">(Mahir)</span></li>
                  <li><i class="bi bi-check"></i> CSS <span class="text-primary">(Mahir)</span></li>
                  <li><i class="bi bi-check"></i> HTML <span class="text-primary">(Mahir)</span></li>
                  <li><i class="bi bi-check"></i> Sass <span class="text-primary">(Mahir)</span></li>
                  <li><i class="bi bi-check"></i> VueJS <span class="text-primary">(Mahir)</span></li>
                  <li><i class="bi bi-check"></i> Firebase <span class="text-success">(Bagus)</span></li>
                  <li><i class="bi bi-check"></i> Git <span class="text-success">(Bagus)</span></li>
                  <li><i class="bi bi-check"></i> Github <span class="text-success">(Bagus)</span></li>
                  <li><i class="bi bi-check"></i> JavaScript <span class="text-success">(Bagus)</span></li>
                  <li><i class="bi bi-check"></i> MySQL <span class="text-warning">(Rata-rata)</span></li>
                  <li><i class="bi bi-check"></i> PHP <span class="text-warning">(Rata-rata)</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="flip-box-back" style="padding-left: 5rem; padding-right: 5rem; overflow: visible;">
          <div class="border d-flex align-items-center position-relative" style="min-height: 420px; ">
            <div v-if="thisSection.activePage.page3 && thisSection.activePage.page4" class="row m-0 w-100">
              <div class="col-6 p-5 d-flex align-items-center justify-content-center">
                <div class="position-absolute" style="height: 510px; bottom: 0;">
                  <img src="../assets/anang-potrait-halo.png" alt="" class="w-100 h-100" style="filter: grayscale(0);">
                </div>
              </div>
              <div class="col-6 p-5">
                <div class="title-big">halo</div>
                <div class="teks-longgar mt-3 ms-5">Namaku <b>Anang Prasetyo</b> usia 24 tahun. Mulai menyukai desain grafis sejak SMA tetapi malah fokus pada pemrograman web sejak kuliah. Itulah mengapa keindahan dan kegunaan pada sebuah web menjadi fokus saya.</div>
              </div>
            </div>
            <div v-else-if="thisSection.activePage.page4 && thisSection.activePage.page5" class="row m-0 w-100">
              <div class="col-6 p-5">
                <ul class="exp-list">
                  <li>
                    <div>
                      <div><b>Web Developer</b></div>
                      <div>SMK 10 November Sragen</div>
                    </div>
                    <div>Oktober - November 2023</div>
                  </li>
                  <li>
                    <div>
                      <div><b>Web Developer</b></div>
                      <div>Woku.id</div>
                    </div>
                    <div>Agustus - September 2023</div>
                  </li>
                  <li>
                    <div>
                      <div><b>Magang</b></div>
                      <div>Diskominfo Karanganyar</div>
                    </div>
                    <div>Mei - Juni 2021</div>
                  </li>
                </ul>
              </div>
              <div class="col-6 p-5 d-flex align-items-center justify-content-center">
                <h4>PENGALAMAN KERJA</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="thisSection.current >= 3" class="separator"></div>
    </section>

    <footer-component :light-mode="lightMode" @change-mode="$emit('changeMode')"></footer-component>
  </main>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import hoverEffect from 'hover-effect'
import { gsap } from 'gsap'
import { useCustomCursor, useMagnetic } from "../script/MyFunc";
import FooterComponent from "../components/FooterComponent.vue";

const props = defineProps({
  lightMode: Boolean,
  position: Object
})

const emit = defineEmits(['changeMode'])

const { addMagnetic } = useMagnetic()

const isian = ref([
  {
    name: "Anangweb.",
    backText: "Anang-Web.",
    image1: "src/assets/abstract-nail-polish-texture-detail-1.jpg",
    image2: "src/assets/abstract-nail-polish-texture-detail-2.jpg",
    displacementImage: "src/assets/4.png"
  },
  {
    name: "Anang Prasetyo",
    backText: "Anang-Prasetyo",
    image1: "src/assets/anang-potrait-duotone-1-v2.jpg",
    image2: "src/assets/anang-potrait-duotone-2-v2.jpg",
    displacementImage: "src/assets/14.jpg"
  }
])
const thisSection = ref({
  current: 1,
  scrollVal: 0,
  name: '',
  backText: '',
  activePage: {
    page3: false,
    page4: false,
    page5: false,
  }
})
const mode = ref('light')

const hoverDistortOne = () => {
  new hoverEffect({
    parent: document.querySelector('.potrait-1'),
    intensity: 1,
    image1: isian.value[0].image1,
    image2: isian.value[0].image2,
    displacementImage: isian.value[0].displacementImage,
    imagesRatio: 2,
  });
} 
const hoverDistortTwo = () => {
  new hoverEffect({
    parent: document.querySelector('.potrait-2'),
    intensity: 1,
    image1: isian.value[1].image1,
    image2: isian.value[1].image2,
    displacementImage: isian.value[1].displacementImage,
    imagesRatio: 2,
  });
}

const tl = gsap.timeline({defaults: {ease: 'power4.out', duration: .7}})
const animateInTitle = (_st) => {
  tl.clear()
  styleTitleEl.value[0].opacity = 1
  gsap.set('.mid', {
    autoAlpha: 1,
    y: -30
  })
  gsap.to('.mid', {
    y: 0,
    duration: 1
  })

  var __st = ''
  _st == 1 ? __st = '.st1' : __st = '.st2'
  tl
    .from((".mid-a "+__st), { 
      yPercent: 315,
      stagger: .03,
      skewY: 60,
      skewX: 30,
      scaleY: .5,
      opacity: 0
    }, "-=.7")
    .to('.mid-a', {
      xPercent: 0,
      ease: 'elastic.out(1, .5)'
    }, "1.3")
}

const animateInImage = (_potrait) => {
  styleTitleEl.value[_potrait].opacity = 1
  var __potrait = ''
  var _location = {
    x: 0,
    y: 0
  }
  _potrait == 1 ? [__potrait = '.potrait-1', _location.x = -600] : [__potrait = '.potrait-2', _location.y = -800]
  gsap.set(__potrait, {
    autoAlpha: 1,
  })

  gsap.from(__potrait, {
    x: _location.x,
    y: _location.y,
    opacity: 0,
    duration: .5,
    ease: 'power4.out'
  })
}
const animateOutTitle = () => {
  tl
    .to('.mid-a .st1', {
      skewX: 30,
      x: 30,
      scaleX: 0,
      stagger: .03,
      opacity: 0,
      duration: .2
    }, "+=.3")
}
const styleTitleEl= ref([
  {
    name: 'mid',
    opacity: 0
  },
  {
    name: 'potrait-1',
    opacity: 0
  },
  {
    name: 'potrait-2',
    opacity: 0
  }
])

const hideEl = () => {
  styleTitleEl.value[0].opacity = 0
  styleTitleEl.value[1].opacity = 0
  styleTitleEl.value[2].opacity = 0
}

const changePage = (delta, _isAllowChange, _isContinue, _isRetry, _jumpTo) => {
  if(_jumpTo){
    thisSection.value.current = _jumpTo
  }
  else{
    if(_isAllowChange && delta == 1 || _isContinue && delta == 1){
      thisSection.value.current++
    }
    else if(_isAllowChange && delta == -1 || _isRetry && delta == -1){
      thisSection.value.current--
    }
  }
  if(_isAllowChange){
    hideEl()
    console.log('boleh diubah');
    console.log('current -> ', thisSection.value.current);
    if(delta == 1){
      if(mode.value === 'light'){
        mode.value = 'dark'
        emit('changeMode', 'dark')
      }
      else{
        mode.value = 'light'
        emit('changeMode', 'light')
      }
      if(thisSection.value.current < 3){
        thisSection.value.name = isian.value[1].name
        thisSection.value.backText = isian.value[1].backText
        setTimeout(() => {
          animateInTitle(thisSection.value.current)
          animateInImage(thisSection.value.current)
        }, 200);
      }
    }
    else if(delta == -1){
      if(mode.value === 'dark'){
        mode.value = 'light'
        emit('changeMode', 'light')
      }
      else{
        mode.value = 'dark'
        emit('changeMode', 'dark')
      }
      if(thisSection.value.current < 3){
        thisSection.value.name = isian.value[0].name
        thisSection.value.backText = isian.value[0].backText
        setTimeout(() => {
          animateInTitle(thisSection.value.current)
          animateInImage(thisSection.value.current)
        }, 200);
      }
    }
  }
  else if(_isRetry){
    if(thisSection.value.current < 3){
      hideEl()
      setTimeout(() => {
        hoverDistortOne()
        hoverDistortTwo()
      }, 400);
      setTimeout(() => {
        animateInTitle(thisSection.value.current)
        animateInImage(thisSection.value.current)
      }, 700);
    }
    console.log('boleh diulangi');
    console.log('current -> ', thisSection.value.current);
  }
  else if(_isContinue){
    console.log('boleh dilanjut');
    console.log('current -> ', thisSection.value.current);
  }
  else if(delta == -1){
    console.log('sudah mentok atas');
  }
  else if(delta == 1 && thisSection.value.current == 5){
    thisSection.value.activePage.page4 = true
    thisSection.value.activePage.page5 = true
    console.log('sudah mentok bawah');
  }
}
const resetActivePage = () => {
  thisSection.value.activePage.page3 = false
  thisSection.value.activePage.page4 = false
  thisSection.value.activePage.page5 = false
}
const twoToThree = () => {
      resetActivePage() 
      backFlip('.flip-box') 
      thisSection.value.activePage.page3 = true
      thisSection.value.activePage.page4 = true
    },
    threeToFour = () => { 
      resetActivePage() 
      topFlip('.flip-box')
      thisSection.value.activePage.page3 = true
      thisSection.value.activePage.page4 = true
      thisSection.value.activePage.page5 = true
    },
    fourToFive = () => { 
      resetActivePage() 
      backFlip('.flip-box') 
      thisSection.value.activePage.page4 = true
      thisSection.value.activePage.page5 = true
    },
    fiveToFour = () => { 
      resetActivePage() 
      topFlip('.flip-box') 
      thisSection.value.activePage.page4 = true
      thisSection.value.activePage.page5 = true
    }
const scrollEvent = () => {
  window.addEventListener("wheel", event => {
    var _isAllowChange = false
    var _isContinue = false
    var _isRetry = false
    const delta = Math.sign(event.deltaY);
    
    thisSection.value.current == 1 && delta == 1 ? _isAllowChange = true :
    thisSection.value.current == 2 && delta == -1 ? _isAllowChange = true :
    thisSection.value.current == 2 && delta == 1 ? [_isContinue = true, twoToThree()] :
    thisSection.value.current == 3 && delta == 1 ? [_isContinue = true, threeToFour()] :
    thisSection.value.current == 4 && delta == 1 ? [_isContinue = true, fourToFive()] :
    thisSection.value.current == 3 && delta == -1 ? _isRetry = true :
    thisSection.value.current == 4 && delta == -1 ? [_isRetry = true, twoToThree()] :
    thisSection.value.current == 5 && delta == -1 ? [_isRetry = true, fiveToFour()] :
    _isAllowChange = false
    thisSection.value.scrollVal = delta
    changePage(delta, _isAllowChange, _isContinue, _isRetry)
  });
}
scrollEvent()

const scrollBarChange = (_a) => {
  console.log('nilai _a -> ', _a);
  var __scrollVal = null
  if(thisSection.value.current < _a){
    __scrollVal = 1
    thisSection.value.scrollVal = __scrollVal
    if(thisSection.value.current == 1){
      changePage(__scrollVal, true, false, false, _a)
    }
    else{
      if(thisSection.value.current == 2){
        twoToThree()
        console.log('ke 3');
      }
      else if(thisSection.value.current == 3){
        threeToFour()
        console.log('ke 4');
      }
      else if(thisSection.value.current == 4){
        fourToFive()
        console.log('ke 5');
      }
      changePage(__scrollVal, false, true, false, _a)
    }
  }
  else if(thisSection.value.current > _a){
    __scrollVal = -1
    thisSection.value.scrollVal = __scrollVal
    if(thisSection.value.current == 2){
      changePage(__scrollVal, true, false, false, _a)
    }
    else{
      if(thisSection.value.current == 4){
        twoToThree()
      }
      else if(thisSection.value.current == 5){
        fiveToFour()
      }
      changePage(__scrollVal, false, false, true, _a)
    }
  }
}

const tl2 = gsap.timeline({defaults: {ease: 'back.inOut(1.7)', duration: .17}})
const backFlip = (_target) => {
  setTimeout(()=>{
    gsap.set(_target+'-back', {
      yPercent: -50,
    })
    gsap.from(_target, {
      height: 344,
    })
    tl2.to(_target, {
      rotationY: -180,
      duration: .01,
    })
  }, 100)
}
const topFlip = (_target) => {
  setTimeout(()=> {
    gsap.from(_target, {
      height: 344,
    })
    tl2.to(_target, {
      rotationY: 0,
    })
  }, 100)
}

const { ambilEl, ambilPosisi, addEventMouse } = useCustomCursor()

const changeCursor = () => {
  ambilEl('.cursor2', '.cursor2-follower')
  ambilPosisi(props.position.posX, props.position.posY, props.position.mouseX, props.position.mouseY)
  addEventMouse(props.position.mouseX, props.position.mouseY)
}

const isDone = ref(false)

const cursorOnMagnetic = () => {
  const addMagneticHover = () => {
    gsap.to('.cursor2', {
      scrollTrigger: {
        trigger: '.magnetic'
      },
      scale: 0,
      duration: .02
    })
    gsap.to('.cursor2-follower', {
      scrollTrigger: {
        trigger: '.magnetic'
      },
      scale: 1.5,
      duration: .02
    })
  }
  const removeMagneticHover = () => {
    gsap.to('.cursor2', {
      scrollTrigger: {
        trigger: '.magnetic'
      },
      scale: 0.5,
      duration: .02
    })
    gsap.to('.cursor2-follower', {
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

watch(() => {
})

onMounted(() => {
  hoverDistortOne()
  hoverDistortTwo()
  changeCursor()
  cursorOnMagnetic()
  addMagnetic(7, '#magnetic-icon')
  thisSection.value.name = isian.value[0].name
  thisSection.value.backText = isian.value[0].backText
  setTimeout(() => {
    animateInTitle(thisSection.value.current)
    animateInImage(thisSection.value.current)
  }, 200);
  isDone.value = true
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
  overflow: hidden;
}

.title-big{
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
}
.teks-longgar{
  line-height: 32px;
  letter-spacing: 1px;
  font-size: 20px;
}
.separator{
  height: 100%;
  width: 1px;
  background: var(--bs-border-color);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.exp-list{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 0;
  padding-left: 0;
  & li{
    border-bottom: 1px solid var(--bs-border-color);
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:last-child{
      border-bottom-color: transparent;
    }
  }
}
.flip-box{
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
  position: relative;
  &-top, &-back{
    backface-visibility: hidden;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translateY(-50%);
    width: 100%;
    height: max-content;
  }
  &-back{
    transform: rotateY(180deg);
  }
}
// .skill{
//   &-top, &-bottom{
//     position: absolute;
//     left: 0;
//     &-list{
//       margin-bottom: 0;
//       list-style: none;
//       display: flex;
//       gap: 5rem;
//     }
//     &-icon{
//       width: 40px;
//       & img{
//         height: 100%;
//         width: 100%
//       }
//     }
//   }
//   &-top{
//     top: 11%;
//     transform: translateY(-11%);
//   }
//   &-bottom{
//     bottom: 10%;
//     transform: translateY(-11%);
//     &-list{
//       flex-direction: row-reverse;
//     }
//   }
// }

.cursor2 {
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

section{
  overflow: hidden;
}

.scroll{
  position: absolute;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 9;
  &-bar{
    background: var(--bs-body-color);
    width: 3px;
    height: 50px;
    transition: all .5s ease;
    &-border{
      background: transparent;
      padding: 0px 20px;
    }
  }
}

.mid{
  margin-top: 6rem;
  margin-bottom: 6rem;
  z-index: 5;
  &-a{
    display: flex;
    gap: 10px;
    & .st1, & .st2{
      line-height: 15px;
      font-size: 3.5rem;
      font-weight: 800;
      min-width: 15px;
      // font-family: 'Telegraf-Slanted';
    }
  }
}

.back{
  &-text, &-img{
    position: absolute;
    left: 50%;
    z-index: 0;
  }
  &-text{
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--bs-border-color);
    opacity: .3;
    color: transparent;
    text-align: center;
    font-size: 20rem;
    font-weight: 800;
    text-wrap: nowrap;
    // font-family: 'Telegraf-Slanted';
  }
  &-img{
    top: 0;
    transform: translateX(-50%);
    height: 100%;
    min-width: 295.46px;
    border-right: 1px solid var(--bs-border-color);
    border-left: 1px solid var(--bs-border-color);
    padding: 1rem;
  }
}
.text-miring{
  position: absolute;
  width: calc(266px + 4rem);
  height: calc(538px + 4rem);
  &-isi{
    position: relative;
    height: 100%;
    width: 100%;
  }
  &-atas, &-bawah{
    position: absolute;
    font-size: 12px;
    text-transform: uppercase;
    word-spacing: 4px;
  }
  &-atas{
    top: 1rem;
    right: -47%;
    transform: translateX(25%) rotate(90deg);
    transform-origin: 0% 100%;
  }
  &-bawah{
    bottom: 1rem;
    left: -45%;
    transform: rotate(90deg) translate(-.5rem, -50%);
    transform-origin: right;
  }
}

$potrait-height: 538px;
$potrait-width: 262px;
.pre-potrait{
  background: var(--bs-body-bg-rgb);
  overflow: hidden;
  height: $potrait-height;
  width: $potrait-width;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.potrait{
  width: 100%;
  height: 100%;
  &-1, &-2{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: $potrait-height;
    width: $potrait-width;
  }
}

</style>