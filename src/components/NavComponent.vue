<template>
  <nav class="row border-bottom m-0 w-100">
    <div class="col-2 px-4 d-flex align-items-center">
      <router-link to="/docs" class="d-flex gap-1 align-items-center text-decoration-none text-body magnetic">
        <img src="../assets/logo.png" alt="" style="height: 24px;">
        <b>Anangweb.</b>
      </router-link>
    </div>
    <div class="col menus" :class="route.path.includes('docs') ? '' : ''">
      <ul class="list-unstyled mb-0 d-flex gap-5">
        <li v-for="r, ri in router" :key="ri" :id="'magnetic'+ri" class="d-flex align-items-center magnetic">
          <router-link :to="r.path" class="text-decoration-none text-body fs-xs2 text-capitalize no-hover" :class="r.name === 'docs' && route.path.includes('docs') ? 'active' : ''">{{ r.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="col-2">
      
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router'
import { useCustomCursor, useMagnetic } from "../script/MyFunc";

const lightMode = ref(true)
const { addMagnetic, position } = useMagnetic()

const route = useRoute()
const router = ref([
  {
    name: "home",
    path: "/",
  },
  {
    name: "docs",
    path: "/docs",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "contact",
    path: "/contact",
  },
  // {
  //   name: "coba",
  //   path: "/coba",
  // },
])

onMounted(()=>{
  addMagnetic(router.value.length, '#magnetic')
})

</script>

<style lang="scss" scoped>

.no-hover, a{
	cursor: none;
	&:hover{
		cursor: none;
	}
}

nav {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  height: 50px;
  .menus{
    display: flex;
    justify-content: center;
    & .active, 
    & a.router-link-active {
      font-weight: bold;
    }
  }
}

</style>