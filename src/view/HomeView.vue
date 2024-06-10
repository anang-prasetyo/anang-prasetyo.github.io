<template>
  <main data-scroll-container class="d-flex flex-column align-items-center justify-content-center viewport">
    <section class="main-tool-bar">
      <div class="pc-bg">
        <div class="pc-bg-border"></div>
        <div class="pc-bg-lamp-v">
          <div class="pc-bg-lamp-v-f"></div>
        </div>
        <div class="pc-bg-lamp-h">
          <button class="pc-bg-lamp-h-button btn" @click="switchLamp()"><i class="bi bi-power"></i></button>
        </div>
      </div>
      <div class="pc-screen"></div>
      <div class="pc-light"></div>
      <logo-svg class="logo-svg" style="color: rgba(var(--bs-body-bg-rgb), 1);" @mouseenter="animateLogo()"></logo-svg>
      <div class="title">
        <div class="me-2 title-logo" style="height: 2rem;">
          <img src="../assets/logo.png" alt="" class="h-100">
        </div>
        <div id="web-title">A</div>
        <div id="web-title">n</div>
        <div id="web-title">a</div>
        <div id="web-title">n</div>
        <div id="web-title">g</div>
        <div id="web-title">w</div>
        <div id="web-title">e</div>
        <div id="web-title">b</div>
        <div id="web-title">.</div>
      </div>
      <div class="mouse-down-text">scroll down</div>
      <div class="mouse-down">
        <div class="mouse-down-wheel">
          <div class="mouse-down-wheel-loop"></div>
        </div>
      </div>
      <ul class="tab list-unstyled m-0">
        <li class="li-nav">
          <router-link to="/">
            <div class="fw-bold">home</div>
            <i class="bi bi-arrow-down-square-fill"></i>
          </router-link>
        </li>
        <li class="li-nav">
          <router-link to="/docs">
            <div>docs</div>
            <i class="bi bi-arrow-up-right-square"></i>
          </router-link>
        </li>
        <li class="li-nav">
          <router-link to="/projects">
            <div>projects</div>
            <i class="bi bi-arrow-up-right-square"></i>
          </router-link>
        </li>
        <li class="li-nav">
          <router-link to="/about">
            <div>about</div>
            <i class="bi bi-arrow-up-right-square"></i>
          </router-link>
        </li>
        <li class="li-nav">
          <router-link to="/contact">
            <div>contact</div>
            <i class="bi bi-arrow-up-right-square"></i>
          </router-link>
        </li>
      </ul>
    </section>
    <section class="welcome">
      <div  class="welcome-desc">
        <div id="welcome-desc">Portofolio seorang Web</div>
        <div id="welcome-desc">Developer dan Desainer Grafis</div>
        <div id="welcome-desc">dengan visi rebranding identitas</div>
        <div id="welcome-desc">klien yang estetik dan menarik.</div>
      </div>
    </section>

    <section data-scroll class="vh-100 position-relative px-3 px-sm-0 home-intro">
      <div data-speed="0.95" class="fs-1">Halo saya <span class="fw-bold">Anang Prasetyo</span></div>
      <div data-speed="0.85" class="fs-2">fresh graduate Sarjana Teknik Informatika</div>
      <div data-speed="0.75" class="fs-3">Universitas Muhammadiyah Surakarta</div>
      <div data-speed="0.70" class="fs-4">saat ini tinggal di Surakarta, Jawa Tengah.</div>
    </section>

    <section data-scroll class="vh-100 w-100 d-flex justify-content-center position-relative home-keahlian">
      <div class="position-absolute d-flex flex-column align-items-center justify-content-center home-keahlian-isi" style="top: 20vh; transform: translateY(-25%)">
        <div class="text-uppercase fs-1 mb-3 mb-sm-0">keahlian</div>
        <ul class="d-flex flex-column flex-sm-row gap-1 gap-sm-5">
          <li id="li-keahlian">Desain web modern & interaktif</li>
          <li id="li-keahlian">Development web</li>
          <li id="li-keahlian">Desain grafis media sosial</li>
          <li id="li-keahlian">Desain logo</li>
          <li id="li-keahlian">Desain produk</li>
        </ul>
      </div>
      <div id="no01" class="wrapper">
        <div class="boxes">
          <div v-for="s, si in skills.reverse()" :key="si" class="box">
            <img :src="'src/assets/img/logo/'+s.url+'.jpg'" alt="">
          </div>
        </div>
      </div>
      <div id="no02" class="wrapper">
        <div class="boxes">
          <div v-for="s, si in skills.reverse()" :key="si" class="box">
            <img :src="'src/assets/img/logo/'+s.url+'.jpg'" alt="">
          </div>
        </div>
      </div>
    </section>

    <section class="w-100">
      <div class="project">
        <div id="project-head1" class="project-head">
          <div id="project-head-title1" class="project-head-title">web dev</div>
          <div id="project-head-qty1" class="project-head-qty">(3)</div>
        </div>
      </div>
      <div class="gallery1">
        <div class="left">
          <div class="desktopContent">
            <div v-for="wd, wdi in webDev" :key="wdi" class="desktopContentSection1">
              <h1 class="project-list-title">{{ wd.name }}</h1>
              <div class="project-list-desc">{{ wd.desc }}</div>
            </div>
          </div>
        </div>
        <div class="right1">
          <div class="desktopPhotos-border-h"></div>
          <div class="desktopPhotos-border-v"></div>
          <div class="desktopPhotos">
            <div v-for="wd, wdi in webDev" :key="wdi" class="desktopPhoto1 project-list-image">
              <img :src="'src/assets/img/'+wd.url+'.jpg'" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="w-100 d-flex align-items-center justify-content-center">
        <button-dot class="" :value="'Temukan lebih banyak'"></button-dot>
      </div>
    </section>

    <div class="spacer"></div>

    <section class="w-100">
      <div class="project">
        <div id="project-head2" class="project-head">
          <div id="project-head-title2" class="project-head-title">web design</div>
          <div id="project-head-qty2" class="project-head-qty">(3)</div>
        </div>
      </div>
      <div class="gallery2">
        <div class="left">
          <div class="desktopContent">
            <div v-for="wd, wdi in webDesign" :key="wdi" class="desktopContentSection2">
              <h1 class="project-list-title">{{ wd.name }}</h1>
              <div class="project-list-desc">Red is a color often associated with strong emotions such as passion, love, and anger. It's a bold and attention-grabbing color that can evoke feelings of excitement, warmth, and energy.</div>
            </div>
          </div>
        </div>
        <div class="right2">
          <div class="desktopPhotos-border-h"></div>
          <div class="desktopPhotos-border-v"></div>
          <div class="desktopPhotos">
            <div v-for="wd, wdi in webDesign" :key="wdi" class="desktopPhoto2 project-list-image">
              <img :src="'src/assets/img/'+wd.url+'.jpg'" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="w-100 d-flex align-items-center justify-content-center">
        <button-dot class="" :value="'Temukan lebih banyak'"></button-dot>
      </div>
    </section>

    <section class="mt-5">
      <div class="my-container">
        <div v-for="i in 22" :key="i" class="flair-border flair-1" :style="['top: '+getRandomInt(90)+'%', 'left: '+getRandomInt(90)+'%']">
          <div class="flair flair-1x1">
            <img :src="'src/assets/work/1x1-'+i+'.jpg'" alt="">
          </div>
        </div>
        <div v-for="i in 3" :key="i" class="flair-border flair-1" :style="['top: '+getRandomInt(90)+'%', 'left: '+getRandomInt(90)+'%']">
          <div class="flair flair-3x4">
            <img :src="'src/assets/work/3x4-'+i+'.jpg'" alt="">
          </div>
        </div>
        <h4>Beberapa hal keren lainnya..</h4>
      </div>
    </section>

    <section class="vh-100 w-100 position-relative burger-container">
      <div class="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center">
        <div class="mb-5 burger" style="height: 100px;">
          <img src="../assets/work/burger-logo.png" alt="" class="h-100">
        </div>
        <div class="fs-3">Tertarik bekerja sama dengan saya?</div>
        <div class="d-flex gap-5 mt-5">
          <a href="https://wa.me/6282133938464" target="_blank" class="text-decoration-none">
            <button class="btn btn-light d-flex align-items-center gap-3">
              <i class="bi bi-whatsapp"></i>
              <div>Diskusi WhatsApp</div>
            </button>
          </a>
          <a href="mailto:anprasetyo060@gmail.com?" class="text-decoration-none">
            <button class="btn btn-light d-flex align-items-center gap-3">
              <i class="bi bi-envelope"></i>
              <div>Kirim Email</div>
            </button>
          </a>
        </div>
      </div>
    </section>

    <footer class="w-100 container">
      <div class="w-100 text-center my-5">
        <button class="btn btn-light" @click="scrollToTop()">Kembali ke atas <i class="bi bi-arrow-up"></i></button>
      </div>
      <div class="row m-0">
        <div class="col py-3 d-flex gap-1 align-items-center justify-content-center">
          <div style="height: 2rem;">
            <img src="../assets/logo.png" alt="" class="h-100">
          </div>
          <div class="fw-semibold">Anangweb.</div>
        </div>
        <div class="col py-3 d-flex align-items-center justify-content-center">
          <div>&copy; Anang Prasetyo 2023-2024</div>
        </div>
        <div class="col d-flex align-items-center justify-content-center">
          <ul class="list-unstyled d-flex m-0">
            <li id="magnetic-icon0" class="pe-4 magnetic"><a href="https://www.instagram.com/pra_anang?igsh=OXBocGVtZGJtdHNt&utm_source=qr" target="_blank" class="body-color"><i class="bi bi-instagram"></i></a></li>
            <li id="magnetic-icon1" class="px-4 magnetic"><a href="https://dribbble.com/anprasetyo" target="_blank" class="body-color"><i class="bi bi-dribbble"></i></a></li>
            <li id="magnetic-icon2" class="px-4 magnetic"><i class="bi bi-behance"></i></li>
            <li id="magnetic-icon3" class="px-4 magnetic"><a href="https://www.linkedin.com/in/anang-prasetyo-09318b197/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" class="body-color"><i class="bi bi-linkedin"></i></a></li>
            <li id="magnetic-icon4" class="px-4 magnetic"><a href="https://github.com/anang-prasetyo" target="_blank" class="body-color"><i class="bi bi-github"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"
import { Draggable } from "gsap/dist/Draggable"
import { onMounted, ref } from 'vue'
import useDb from '../script/MyDatabase';
import Lenis from 'lenis'
import { useMagnetic } from "../script/MyFunc";
import ButtonDot from '../components/ButtonDot.vue'
import LogoSvg from '../components/LogoSvg.vue'

const { skills, webDev, webDesign } = useDb()
const { addMagnetic } = useMagnetic()

const props = defineProps({
  lightMode: Boolean,
})
const emit = defineEmits(['changeMode'])

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const removeScrolledCursor = () => {
  let cursor = document.querySelector('.cursor')
  let cursorFollower = document.querySelector('.cursor-follower')
  cursor.classList.remove('cursor--scrolled')
  cursorFollower.classList.remove('cursor-follower--scrolled')
}
const addParalax = () => {
  gsap.to("[data-speed]", {
    y: (i, el) => (1 - parseFloat(el.getAttribute("data-speed"))) * ScrollTrigger.maxScroll(window) ,
    ease: "none",
    scrollTrigger: {
      start: 0,
      end: "max",
      invalidateOnRefresh: true,
      scrub: 0
    }
  });
}
const fixedHeader = () => {
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {className: 'main-tool-bar--scrolled', targets: '.main-tool-bar'},
  })
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {className: 'welcome-desc--scrolled', targets: '.welcome-desc'}
  })
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {className: 'cursor--scrolled', targets: '.cursor'}
  })
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {className: 'cursor-follower--scrolled', targets: '.cursor-follower'}
  })
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {className: 'pc-bg--scrolled', targets: '.pc-bg'}
  })
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {className: 'pc-screen--scrolled', targets: '.pc-screen'},
  })
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {className: 'pc-light--scrolled', targets: '.pc-light'},
  })
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {className: 'title--scrolled', targets: '.title'},
  })
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {className: 'title-logo--scrolled', targets: '.title-logo'},
  })
}
const horizontalScroll = () => {
  gsap.set('.wrapper',{xPercent:-50,yPercent:-50})
  gsap.set('#no01',{y:-200})
  gsap.set('#no02',{y:200})

  var boxWidth = 150,
      totalWidth = boxWidth * skills.value.length,  //  * n of boxes
      no01 = document.querySelectorAll("#no01 .box"),
      no02 = document.querySelectorAll("#no02 .box"),
      dirFromLeft = "+=" + totalWidth,
      dirFromRight = "-=" + totalWidth;

  var mod = gsap.utils.wrap(0, totalWidth);

  function marquee(which, time, direction){
    gsap.set(which, {
      x:function(i) {
        return i * boxWidth;
      }
    });
    var action = gsap.timeline()
    .to(which,  {
      x: direction,
      modifiers: {
        x: x => mod(parseFloat(x)) + "px"
      },
      duration: time, 
      ease: 'none',
      repeat: -1,
    });
    return action
  }

  var master = gsap.timeline({paused:true})
  .add(marquee(no01, 50, dirFromLeft))
  .add(marquee(no02, 50, dirFromRight),0)

  // =============================

  var action = gsap.timeline({defaults: {duration: 1, ease:'none'},
    scrollTrigger: {
      trigger: ".wrapper",
      scrub: 0.5,
      start: 'top 100%',
      end: "top 0%",
      onEnter: isActive => master.play(),
      // onLeave: isActive => master.pause(),
      // onLeaveBack: isActive => master.pause(),
      onEnterBack: isActive => master.play(),
      // markers:true
    }})
}
const pinImage = (_target) => {
  const details = gsap.utils.toArray(".desktopContentSection"+_target+":not(:first-child)")
  const photos = gsap.utils.toArray(".desktopPhoto"+_target+":not(:first-child)")

  gsap.set(photos, {yPercent:101})

  const allPhotos = gsap.utils.toArray(".desktopPhoto"+_target)

  // create
  let mm = gsap.matchMedia();

  // add a media query. When it matches, the associated function will run
  mm.add("(min-width: 600px)", () => {

    // this setup code only runs when viewport is at least 600px wide
    // console.log("desktop")
    
    ScrollTrigger.create({
      trigger:".gallery"+_target,
      start:"top top",
      end:"bottom bottom",
      pin:".right"+_target,
    })

    //create scrolltrigger for each details section
    //trigger photo animation when headline of each details section 
    //reaches 80% of window height
    details.forEach((detail, index)=> {

      let headline = detail.querySelector("h1")
      let animation = gsap.timeline()
        .to(photos[index], {yPercent:0})
        .set(allPhotos[index], {autoAlpha:0})
      ScrollTrigger.create({
        trigger:headline,
        start:"top 100%",
        end:"top 50%",
        animation:animation,
        scrub:true,
        markers: false
      })
    })
    
    
    return () => { // optional
      // custom cleanup code here (runs when it STOPS matching)
      console.log("mobile")
    };
  });
}

const lenis = ref('')
const lenisScroll = () => {
  lenis.value = new Lenis()

  lenis.value.on('scroll', (e) => {
    // console.log(e)
  })

  lenis.value.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time)=>{
    lenis.value.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const draggable = () => {
  gsap.registerPlugin(Draggable);
  Draggable.create(".flair-1", {
    bounds: ".my-container",
    inertia: true,
    cursor: 'none'
  });
  Draggable.create(".burger", {
    bounds: ".burger-container",
    inertia: true,
    type: "rotation",
    cursor: 'none'
  });
}

const showAnim = ref('') 
const hideNavOnScroll = () => {
  showAnim.value = gsap.from('.main-tool-bar', { 
    yPercent: -100,
    paused: true,
    duration: 0.2
  }).progress(1);

  ScrollTrigger.create({
    start: "top top",
    end: "max",
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.value.play() : showAnim.value.reverse()
    }
  });
}

const scrollToTop = () => {
  gsap.to(window, { duration: 2, scrollTo: 0 });
}

const infiniteMouseWheelAnimation = () => {
  const tl = gsap.timeline({repeat: -1,});
  tl.set('.mouse-down-wheel-loop', {
    y: -50,
  })
  tl.to('.mouse-down-wheel-loop', {
    y: 50,
    duration: 2
  })
  tl.from('.mouse-down-text', {
    y: -10
  })
  tl.to('.mouse-down-text', {
    y: -10
  })
}

const animatedTextIn = () => {
  gsap.from('#web-title', {
    scrollTrigger: {
      trigger: '#web-title',
      toggleActions: 'restart none restart none'
    },
    x: -150,
    scaleY: 0,
    opacity: 0,
    stagger: .05,
    skewX: 50,
  });
  gsap.from('#welcome-desc', {
    scrollTrigger: {
      trigger: '#welcome-desc',
      toggleActions: 'restart none restart none'
    },
    y: 50,
    scaleY: 0,
    opacity: 0,
    stagger: .15
  });
  gsap.from('.li-nav', {
    scrollTrigger: {
      trigger: '.li-nav',
      toggleActions: 'restart none restart none'
    },
    x: 80,
    opacity: 0,
    stagger: .15
  });
  gsap.from('#li-keahlian', {
    scrollTrigger: {
      trigger: '#li-keahlian',
      toggleActions: 'restart none restart none'
    },
    x: -50,
    opacity: 0,
    stagger: .15
  });
  
  for(let _a=1; _a<3; _a++){
    gsap.from('#project-head-title'+_a, {
      scrollTrigger: {
        trigger: '#project-head'+_a,
        toggleActions: 'restart none none none',
      },
      y: 200,
      scaleY: 0,
      opacity: 0,
      skewY: 20
    });
    gsap.from('#project-head-qty'+_a, {
      scrollTrigger: {
        trigger: '#project-head'+_a,
        toggleActions: 'restart none none none'
      },
      y: 200,
      scaleY: 0,
      opacity: 0,
      skewY: 20,
      delay: .25,
    });
  }

  animatedLamp(props.lightMode, 2)
}

const switchLamp = () => {
  emit('changeMode')
  setTimeout(()=> {
    animatedLamp(props.lightMode)
  }, 200)
}

const animatedLamp = (_mode, _delay) => {
  let __delay = null
  let _fromBg = null
  let _toBg = null
  _delay ? __delay = _delay : __delay = 0
  _mode ? 
  [_fromBg = 'var(--bs-success)', _toBg = 'var(--bs-danger)']:
  [_fromBg = 'var(--bs-danger)', _toBg = 'var(--bs-success)'] 
  
  const light = () => {
    if(!_mode){
      gsap.to('.pc-light', {
        opacity: 1,
        duration: .2,
        delay: __delay
      });
    }
    else{
      gsap.to('.pc-light', {
        opacity: 0,
      });
    }
  }
  const button = () => {
    if(_mode){
      gsap.set('.pc-bg-lamp-h-button', {
        background: _toBg
      });
    }
    else{
      gsap.set('.pc-bg-lamp-h-button', {
        background: _fromBg
      });
      gsap.to('.pc-bg-lamp-h-button', {
        background: _toBg,
        duration: .2,
        delay: __delay,
      });
    }
  }
  light()
  button()
}

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

onMounted(()=> {
  removeScrolledCursor()
  addParalax()
  fixedHeader()
  horizontalScroll()
  // pinImage(1)
  // pinImage(2)
  // lenisScroll()
  // draggable()
  // hideNavOnScroll()
  // infiniteMouseWheelAnimation()
  // animatedTextIn()
  // animateLogo()
  // addMagnetic(5, '#magnetic-icon')
})
</script>

<style lang="scss" scoped>

button, a{
  cursor: none;
}

main{
  overflow-y: auto;
}
.main-tool-bar {
  height: 100vh;
  background: rgb(33, 35, 40);
  // background: var(--bs-body-color);
  color: var(--bs-body-bg);
  z-index: 5;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  font-size: 6rem;
  font-weight: 600;
  transition: ease 0.4s;
  &--scrolled {
    height: 50px;
    font-size: 16px;
    font-weight: 400;
    background: var(--bs-body-bg);
    color: var(--bs-body-color);
    & .tab{
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      display: flex;
      flex-direction: row !important;
      justify-content: center;
      gap: 3rem !important;
      align-items: center;
      & li a{
        color: var(--bs-body-color) !important;
        & i{
          display: none !important;
          font-size: 2rem;
        }
      }
    }
    & .title{
      bottom: 50% !important;
      transform: translateY(50%);
      line-height: normal !important;
    }
  }
  & .title{
    position: absolute;
    bottom: 5%;
    left: 5%;
    font-weight: 600;
    line-height: 5rem;
    display: flex;
    color: rgba(var(--bs-body-bg-rgb), .75);
    &-logo{
      display: none;
      &--scrolled{
        display: flex;
      }
    }
    &--scrolled{
      color: var(--bs-body-color);
      left: 1.5rem;
      align-items: center;
    }
  }
  & .tab{
    font-size: 14px;
    font-weight: 400;
    position: absolute;
    bottom: 0%;
    right: 5%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    & li a{
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: flex-end;
      text-decoration: none;
      color: rgba(var(--bs-body-bg-rgb), .75);
      & div{
        text-transform: capitalize;
      }
      & i{
        font-size: 2rem;
      }
    }
  }
  & .pc{
    &-bg{
      position: absolute;
      width: 100%;
      background: black;
      height: 200px;
      top: 0;
      left: 0;
      &-border{
        position: absolute;
        background: rgb(33, 35, 40);
        // background: var(--bs-body-color);
        height: 50%;
        width: 100%;
        bottom: 0;
        left: 0;
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
      }
      &-lamp{
        $warna-lampu: rgb(50, 50, 55);
        &-h{
          position: absolute;
          background: $warna-lampu;
          width: 50%;
          height: 50px;
          left: 50%;
          top: 5%;
          transform: translateX(-50%);
          border-radius: 10px;
          z-index: 3;
          &-button{
            position: absolute;
            height: 30px;
            width: 30px;
            right: 5%;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 100%;
            & i{
              display: flex;
              font-size: 24px;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
        &-v{
          position: absolute;
          background: $warna-lampu;
          width: 100px;
          height: 45%;
          bottom: 50%;
          left: 50%;
          transform: translateX(-50%);
          &-f{
            position: absolute;
            background: $warna-lampu;
            width: 70%;
            height: 50%;
            bottom: -20%;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 7px;
          }
        }
      }
      &--scrolled{
        display: none;
      }
    }
    &-light{
      position: absolute;
      background: linear-gradient(180deg, rgba(255, 255, 255, .25) 0%, transparent 100%);
      clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
      height: 94%;
      width: 80%;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      &--scrolled{
        display: none;
      }
    }
    &-screen{
      position: absolute;
      background: var(--bs-body-color);
      // background: rgb(33, 35, 40);
      border: 2px solid rgb(28, 30, 35);
      width: 97%;
      height: 80%;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      &--scrolled{
        display: none;
      }
    }
  }
}

.logo-svg{
  height: 5rem;
  position: absolute;
  left: 20%;
  bottom: 25%;
}

.welcome{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  &-desc{
    position: absolute;
    top: 25%;
    right: 5%;
    font-size: 2rem;
    line-height: 1;
    color: rgba(var(--bs-body-color-rgb), .75);
    width: 35%;
    z-index: 5;
    filter: invert(1);
    &--scrolled{
      color: var(--bs-body-bg);
      // top: 15%;
      z-index: 4;
    }
  }
}

.project{
  border-bottom: 1px solid var(--bs-border-color);
  &-head{
    display: flex;
    height: 100%;
    padding: 0px 4rem;
    &-title{
      font-size: 9rem;
      text-transform: capitalize;
      line-height: 9rem;
    }
    &-qty{
      font-size: 2rem;
      font-weight: lighter;
    }
  }
  &-list{
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-top: 1rem;
    & li{
      list-style: none;
    }
    &-title{
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    &-desc{
      font-size: 2rem;
      line-height: 1;
    }
    &-image{
      // width: 300px;
      width: 100%;
      height: 400px;
      background: gray;
      overflow: hidden;
      & img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform-origin: center;
        // transform-origin: 90% center;
      }
    }
  }
}

.wrapper{
  $width: 150px;
  
  position:absolute;
  width: 100%;
  height: 50px;
  left: 50%;
  top: 25vh;
  // background:grey;
  overflow:hidden;
  & .box{
    position:absolute;
    width: $width;
    height:50px;
    // background-color:grey;
    color:black;
    font-size:40px;
    font-weight:600;
    line-height:50px;
    text-align:center;
    & img{
      height: 50px;
    }
  }
  & .boxes {
    position:relative;
    left: -$width;
    height: 50px;
  }
}

.spacer {
	width:100%;
	height:50vh;
	// background:#ddd;
}

.gallery1, .gallery2 {
  display:flex;	
  /* outline:1px solid red; */
  & h1 {
    font-size: 1rem;
    // font-size:clamp(2em, 4vw, 6em);
    text-transform: uppercase;
  }
  & p {
    font-size:clamp(1.4em, 2.5vw, 3.5em);
    line-height:1.4;
  }
}

.left {
	width:50%;
}

.right{
  &1, &2 {
    height:100vh;
    /* outline:1px solid purple; */
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    position: relative;
  }
}

.desktop{
  &Content {
    margin:auto;
    width:80%;
    &Section{
      &1, &2 {
        min-height:100vh;
        /* outline:1px solid green; */
        display:flex;
        flex-direction:column;
        justify-content:center;
      }
    }
  }
  &Photo{
    &1, &2 {
      position:absolute;
      width:100%;
      height:100%;
    }
    &s {
      width: 90%;
      height: 400px;
      // border-radius:20px;
      position:relative;
      overflow:hidden;
      // box-shadow:4px 4px 4px rgba(0, 0, 0, 0.4);
      &-border{
        &-h{
          position: absolute;
          width: 100%;
          height: calc(400px + 1%);
          border-top: 1px solid var(--bs-border-color);
          border-bottom: 1px solid var(--bs-border-color);
        }
        &-v{
          position: absolute;
          width: 91%;
          height: calc(400px + 10%);
          border-left: 1px solid var(--bs-border-color);
          border-right: 1px solid var(--bs-border-color);
        }
      }
    }
  }
}

.my-container {
  position: relative;
  width: 100vw;
  height: 150vh;
  & h4 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    pointer-events: none;
    font-size: 3rem;
    z-index: 0;
  }
}

.flair {
  object-fit: contain;
  transform-origin: center center;
  &-border{
    position: absolute;
    z-index: 1;
    padding: 10px 10px 20px 10px;
    background: ghostwhite;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  }
  &-1x1{
    $panjang: 200px;
    width: $panjang;
    height: $panjang;
  }
  &-3x4{
    $panjang: 150px;
    $lebar: 200px;
    width: $panjang;
    height: $lebar;
  }
  & img{
    width: 100%;
    // height: 100%;
  }
}

.mouse-down{
  $bottom: 8%;

  position: absolute;
  bottom: $bottom;
  left: 50%;
  transform: translateX(-50%);
  border: 2px solid rgba(var(--bs-body-bg-rgb), .25);
  height: 40px;
  width: 30px;
  border-radius: 15px;
  &-text{
    font-size: 12px;
    font-weight: 200;
    position: absolute;
    bottom: calc($bottom + 40px);
    left: 50%;
    transform: translateX(-50%);
  }
  &-wheel{
    position: absolute;
    left: 50%;
    bottom: calc($bottom + 17px);
    transform: translateX(-50%);
    height: 14px;
    width: 4px;
    background: rgba(var(--bs-body-bg-rgb), .25);
    border-radius: 10px;
    overflow: hidden;
    &-loop{
      background: rgba(var(--bs-body-bg-rgb), 1);
      width: 100%;
      height: 300%;
      position: absolute;
      bottom: 0;
    }
  }
}
</style>