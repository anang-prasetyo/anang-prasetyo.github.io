<template>
  <main id="mainPanel">
    <div class="cursor3" :style="lightMode ? 'filter: invert(0); -webkit-filter: invert(0);' : 'filter: invert(1); -webkit-filter: invert(1);'"></div>
    <div class="cursor3-follower" :style="lightMode ? 'filter: invert(1); -webkit-filter: invert(1);' : 'filter: invert(0); -webkit-filter: invert(0);'"></div>
    <!-- <div class="marker-wrapper">
      <div class="marker">
        <div class="grab"></div>
      </div>
      <div class="active-slide">1/9</div>
    </div> -->

    <div class="slider">
      <div class="slider-wrapper">
        <div class="slider-wrapper-border"></div>
        <div v-for="img, imgi in project" :key="imgi" class="slide-border">
          <div class="slide-number">{{ ((imgi+1)).toString().padStart(2,'0') }}</div>
          <a :href="img.urlDemo" target="_blank" class="slide">
            <img :id="'imgProject'+imgi" :src="'src/assets/img/'+ (img.url) +'.jpg'" alt="">
          </a>
          <div class="slide-title">{{(img.name)}}</div>
        </div>
        <div v-for="img, imgi in projectDraft" :key="imgi" class="slide-border">
          <div class="slide-number">{{ ((imgi+project.length+1)).toString().padStart(2,'0') }}</div>
          <div class="slide slide-closed">
            <img :id="'imgProject'+(project.length+imgi)" :src="'src/assets/img/'+ (img.url) +'.jpg'" alt="">
          </div>
          <div class="slide-title">{{(img.name)}}</div>
        </div>
      </div>
    </div>

    <footer-component :light-mode="lightMode" @change-mode="$emit('changeMode')"></footer-component>
  </main>
</template>

<script setup>
import { gsap } from 'gsap'
import { onMounted, ref, watch } from 'vue'
import useDb from '../script/MyDatabase'
import { useCustomCursor, useMagnetic } from '../script/MyFunc'
import ScrollTrigger from 'gsap/ScrollTrigger'
import FooterComponent from '../components/FooterComponent.vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  lightMode: Boolean,
  position: Object
})


const { project, projectDraft } = useDb()
const { addMagnetic } = useMagnetic()

const target = ref(0)
const current = ref(0)
const ease = ref(0.075)

const _slider = ref('')
const _sliderWrapper = ref('')
const _markerWrapper = ref('')
const _activeSlide = ref('')

const slider = () => _slider.value = document.querySelector(".slider")
const sliderWrapper = () => _sliderWrapper.value = document.querySelector(".slider-wrapper")
const markerWrapper = () => _markerWrapper.value = document.querySelector(".marker-wrapper")
const activeSlide = () => _activeSlide.value = document.querySelector(".active-slide")

const _maxScroll = ref('')
const maxScroll = () => _maxScroll.value = _sliderWrapper.value.offsetWidth - window.innerWidth

function lerp(start, end, factor){
  return start + (end - start) * factor
}

function updateActiveSliderNumber(markerMove, markerMaxMove){
  const partWidth = markerMaxMove / 9
  let currentPart = Math.round((markerMove - 70) / partWidth) +1
  currentPart = Math.min(9, currentPart)
  _activeSlide.value.textContent = `${currentPart} / 9`
}

function update(){
  current.value = lerp(current.value, target.value, ease.value)
  gsap.set(".slider-wrapper", {
    x: -current.value
  })
  // let moveRatio = current.value/_maxScroll.value
  // let markerMaxMove = window.innerWidth - _markerWrapper.value.offsetWidth - 170
  // let markerMove = 70 + moveRatio * markerMaxMove
  // gsap.set(".marker-wrapper", {
  //   x: markerMove
  // })
  // updateActiveSliderNumber(markerMove, markerMaxMove)
  requestAnimationFrame(update)
}

window.addEventListener("resize", ()=>{
  _maxScroll.value = _sliderWrapper.value.offsetWidth - window.innerWidth
})
window.addEventListener("wheel", (e)=>{
  target.value += e.deltaY
  target.value = Math.max(0, target.value)
  target.value = Math.min(_maxScroll.value, target.value)
})


const { ambilEl, ambilPosisi, addEventMouse, gantiCursorEl } = useCustomCursor()

const changeCursor = () => {
  ambilEl('.cursor3', '.cursor3-follower')
  ambilPosisi(props.position.posX, props.position.posY, props.position.mouseX, props.position.mouseY)
  addEventMouse(props.position.mouseX, props.position.mouseY)
  gantiCursorEl('.slide-closed img')
}



const cursorOnMagnetic = () => {
  const addMagneticHover = () => {
    gsap.to('.cursor3', {
      scrollTrigger: {
        trigger: '.magnetic'
      },
      scale: 0,
      duration: .02
    })
    gsap.to('.cursor3-follower', {
      scrollTrigger: {
        trigger: '.magnetic'
      },
      scale: 1.5,
      duration: .02
    })
  }
  const removeMagneticHover = () => {
    gsap.to('.cursor3', {
      scrollTrigger: {
        trigger: '.magnetic'
      },
      scale: 0.5,
      duration: .02
    })
    gsap.to('.cursor3-follower', {
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

const newHeight = ref([])
const newWidth = ref([])
const addTiltImgProjectOnHover = (event, _index) => {
  let mainPanel = document.querySelector('#mainPanel')
  let mainPanelHeight = mainPanel.offsetHeight
  let mainPanelWidth = mainPanel.offsetWidth
  let _x = (event.screenX / mainPanelWidth) * mainPanelHeight
  console.log('pos x -> ',_x);
  let _y = event.screenY
  console.log('pos y -> ',_y);
  let panelProject = document.querySelector('#imgProject'+_index)
  let panelProjectHeight = panelProject.offsetHeight
  let halfPanelProjectHeight = panelProjectHeight / 2
  let panelProjectWidth = panelProject.offsetWidth
  let halfPanelProjectWidth = panelProjectWidth / 2
  
  // if (_x < halfPanelProjectWidth || _x > halfPanelProjectWidth || _y < halfPanelProjectHeight || _y > halfPanelProjectHeight){
  //   newWidth.value.splice(_index, 1, (halfPanelProjectWidth - _x)/10)
  //   newHeight.value.splice(_index, 1, (halfPanelProjectHeight - _y)/10)
  // }
  // else if (_x == halfPanelProjectWidth || _y == halfPanelProjectHeight){
  //   newWidth.value.splice(_index, 1, 0)
  //   newHeight.value.splice(_index, 1, 0)
  // }


  // gsap.to('#imgProject'+_index, {
  //   x: newWidth.value[_index],
  //   y: newHeight.value[_index],
  //   scale: 1.2,
  //   transformOrigin: 'center center'
  // })
  
  // console.log('newHeight -> ',newHeight.value);
  // console.log('newWidth -> ',newWidth.value);
}

const removeTiltImgProjectOnHover = (_index) => {
  // for(let _a=0; _a<(project.value.length+projectDraft.value.length); _a++){
    gsap.to('#imgProject'+_index, {
      x: 0,
      y: 0,
      scale: 1
    })
  // }
}

const isDone = ref(false)


watch(()=>{

})


onMounted(()=> {
  slider()
  sliderWrapper()
  markerWrapper()
  activeSlide()
  maxScroll()
  update()
  changeCursor()
  addMagnetic(7, '#magnetic-icon')
  cursorOnMagnetic()
  isDone.value = true
  for(let _a=0; _a<(project.value.length+projectDraft.value.length); _a++){
    newHeight.value.push(0)
    newWidth.value.push(0)
  }
})
</script>

<style scoped lang="scss">
$project-item-height: 400px;
$project-item-width: 300px;
$project-item-padding: 25px;
$border-color: var(--bs-border-color);

button, a{
  cursor: none;
  &:hover{
    cursor: none;
  }
}

.cursor3 {
  $ukuran-s: 8px;
  $ukuran-m: 20px;

	position: absolute;
	background: var(--bs-body-color);
  // background-clip: text;
  // -webkit-background-clip: text;
  // color: transparent;
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
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background-image: url("src/assets/coming-soon.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    opacity: 0;
  }
  &.active {
    opacity: 1;
    transform: scale(8);
    &::before {
      opacity: 1;
    }
  }
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

main{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

nav{
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 15px;
  text-transform: uppercase;
  opacity: .4;
}

nav > div{
  display: flex;
  gap: 50px;
}


.slider{
  width: 100%;
  height: 100%;
  overflow: hidden;
  &-wrapper{
    width: max-content;
    padding: 0 150px;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    &-border{
      position: absolute;
      width: 100%;
      border-top: 1px solid $border-color;
      border-bottom: 1px solid $border-color;
      left: 0;
      height: calc($project-item-height + ($project-item-padding * 2));
    }
  }
}


.slide{
  width: $project-item-width;
  height: $project-item-height;
  background: gray;

  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.25, 1, 0.3, 1);
  & img{
    transition: all 0.5s cubic-bezier(0.25, 1, 0.3, 1);
    transform-origin: center center;
  }
  &-border{
    height: 100%;
    border-left: 1px solid $border-color;
    padding: $project-item-padding;
    display: flex;
    align-items: center;
    position: relative;
    &:last-child{
      border-right: 1px solid $border-color;
    }
  }
  &-number, &-title{
    position: absolute;
    transform: translateY(-11%);
  }
  &-number{
    top: 11%;
  }
  &-title{
    bottom: 10%;
  }
}
.slide img:hover {
// .slide-border:hover .slide img {
	transform: scale(1.2);
}

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.marker-wrapper{
  position: absolute;
  top: 0;
  left: 0;
  width: max-content;
  height: 100vh;
}

$marker-position-y: 60px;
$marker-position-x: 40px;
.marker{
  position: relative;
  width: 1px;
  height: 100%;
  background: $border-color;
  &:after{
    position: absolute;
    content: "";
    display: block;
    top: $marker-position-y;
    left: -20px;
    width: 40px;
    height: 40px;
    background-color: var(--bs-body-bg);
    border: 1px solid $border-color;
    border-radius: 100%;
  }
}


.active-slide{
  position: absolute;
  top: calc($marker-position-y + 10px);
  left: $marker-position-x;
  font-size: 15px;
  width: max-content;
}

</style>