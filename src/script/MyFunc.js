import { computed, onMounted, onUnmounted, reactive, ref, defineEmits } from "vue";
import TweenMax  from 'gsap'
import gsap from 'gsap'
import $, { get } from 'jquery'

export default function useFunc(){
  let filterUpStr = function(a,b) {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
  
    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
  }
  let filterDownInt = function(a,b) {
    return b.level - a.level
  }

  return { filterDownInt, filterUpStr }
}

export function useBreakpoints() {
  let windowWidth = ref(window.innerWidth)
  
  const onWidthChange = () => windowWidth.value = window.innerWidth
  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))
  
  const type = computed(() => {
    if (windowWidth.value < 550) return 'xs'
    if (windowWidth.value >= 550 && windowWidth.value < 1200) return 'md'
    if (windowWidth.value >= 1200) return 'lg'
    return null; // This is an unreachable line, simply to keep eslint happy.
  })
  
  const isMobile = computed(() => {
    if (windowWidth.value < 550) return true
    if (windowWidth.value >= 550 && windowWidth.value < 1200) return false
    if (windowWidth.value >= 1200) return false
    return null; // This is an unreachable line, simply to keep eslint happy.
  })

  const width = computed(() => windowWidth.value)

  return { width, type, isMobile }
}

export function useCustomCursor(){
  const cursor = ref(''),
      follower = ref(''),
      posX = ref(0),
      posY = ref(0),
      mouseX = ref(0),
      mouseY = ref(0),
      position = reactive({
        posX: 0,
        posY: 0,
        mouseX: 0,
        mouseY: 0
      })

  const ambilEl = (_cursor, _follower) => {
    cursor.value = $(_cursor),
    follower.value = $(_follower);
  }

  const ambilPosisiAwal =  () => {
    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function() {
        position.posX += (position.mouseX - position.posX) / 9;
        position.posY += (position.mouseY - position.posY) / 9;
        TweenMax.set(follower.value, {
          css: {
            left: position.posX - 20,
            top: position.posY - 20
          }
        });
        TweenMax.set(cursor.value, {
          css: {
            left: position.mouseX,
            top: position.mouseY
          }
        });
      }
    });
  }

  const ambilPosisi =  (_posX, _posY, _mouseX, _mouseY) => {
    position.posX = _posX
    position.posY = _posY
    position.mouseX = _mouseX
    position.mouseY = _mouseY
    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function() {
        position.posX += (position.mouseX - position.posX) / 9;
        position.posY += (position.mouseY - position.posY) / 9;
        TweenMax.set(follower.value, {
          css: {
            left: position.posX - 20,
            top: position.posY - 20
          }
        });
        TweenMax.set(cursor.value, {
          css: {
            left: position.mouseX,
            top: position.mouseY
          }
        });
      }
    });
  }

  const addEventMouseAwal = () => {
    $(document).on("mousemove", function(e) {
      position.mouseX = e.pageX;
      position.mouseY = e.pageY;
    });
  }

  const addEventMouse = (_mouseX, _mouseY) => {
    position.mouseX = _mouseX
    position.mouseY = _mouseY
    $(document).on("mousemove", function(e) {
      position.mouseX = e.pageX;
      position.mouseY = e.pageY;
    });
  }

  const gantiCursorEl = (_target) => {
    $(_target).on("mouseenter", function() {
        cursor.value.addClass("active");
        follower.value.addClass("active");
    });
    
    $(_target).on("mouseleave", function() {
        cursor.value.removeClass("active");
        follower.value.removeClass("active");
    });
  }
  
  // const changeCursor = () => {
  //   ambilEl()
  //   ambilPosisi()
  //   addEventMouse()
  //   gantiCursorEl()
  // }

  return { ambilEl, ambilPosisi, addEventMouse, gantiCursorEl, posX, posY, mouseX, mouseY, position, ambilPosisiAwal, addEventMouseAwal }
}

export function useMagnetic(){
  const position = reactive({
    targetEl: [],
    boundingRect: [],
  })

  const cariEl = async(_qty, _target) => {
    for(let _a=0; _a<_qty; _a++){
      position.targetEl.push({
        el: document.querySelector(_target+_a)
      })
    }
  }
  const cariBoundingRect = async(_qty) => {
    for(let _a=0; _a<_qty; _a++){
      position.boundingRect.push({
        br: position.targetEl[_a].el.getBoundingClientRect()
      })
    }
  }
  const addEvent = async(_qty, _target) => {
    for(let _a=0; _a<_qty; _a++){
      window.addEventListener('resize', ()=>{
        position.boundingRect[_a].br = position.targetEl[_a].el.getBoundingClientRect()
      })
      position.targetEl[_a].el.addEventListener('mousemove', (e)=>{
        const mousePosX = e.pageX - position.boundingRect[_a].br.left
        const mousePosY = e.pageY - position.boundingRect[_a].br.top
        gsap.to(String(_target+_a),{
          x: (mousePosX - position.boundingRect[_a].br.width/2) * .4,
          y: (mousePosY - position.boundingRect[_a].br.height/2) * .4,
          duration: .8,
          ease: 'power3.out'
        })
      })
      position.targetEl[_a].el.addEventListener('mouseleave', ()=>{
        gsap.to(String(_target+_a), {
          x: 0,
          y: 0,
          duration: .8,
          ease: 'elastic.out(1,.3)'
        })
      })
    }
  }

  const addMagnetic = async(_qty, _target) => {
    var qty = _qty - 0
    await cariEl(qty, _target)
    .then(()=>{
      cariBoundingRect(qty)
    })
    .then(()=>{
      addEvent(qty, _target)
    })
  }
  return { addMagnetic, position }
}

export function useDisplay(){
  const emit = defineEmits(['changeMode'])
  const dot = ref('')
  
  const toggleModeAnimation = () => {
    dot.value = document.querySelector('.dot-mode')
    setTimeout(()=>{
      dot.value.classList.toggle('dot-mode-is-open')
    }, 100)
    setTimeout(()=>{
      emit('changeMode')
      dot.value.classList.toggle('dot-mode-is-close')
    }, 700)
    setTimeout(()=>{
      dot.value.classList.remove('dot-mode-is-open')
      dot.value.classList.remove('dot-mode-is-close')
    }, 800)
  }
  return { toggleModeAnimation }
}