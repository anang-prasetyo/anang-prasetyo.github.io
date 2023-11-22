import { computed, onMounted, onUnmounted, ref } from "vue";

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