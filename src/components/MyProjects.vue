<template>
  <main class="border-2 border-bottom border-black" style="background: #B1C1E7;">
    <section class="container min-vh-100 d-flex flex-column justify-content-center">
      <div class="row py-5">
        <div class="col-12 p-3 fs-1 text-center">Proyek saya.</div>
        <div class="col-12">
          <ul v-if="newProject" class="row list-unstyled">
            <li v-for="p, pi in newProject" :key="pi" class="m-auto m-sm-0 col-10 col-sm-6 col-md-4 col-lg-3 py-2">
              <div class="my-2 project">
                <div v-if="p.isOpen" class="project-thumb">
                  <img :src="'https://github.com/anang-prasetyo/anang-prasetyo.github.io/blob/master/src/assets/img/' + p.url +'.jpg?raw=true'">
                </div>
                <div v-else-if="!p.isOpen && p.isShowPoster" class="project-thumb position-relative">
                  <div class="position-absolute top-50 start-0 translate-middle-y p-2 w-100 text-center bg-body-secondary text-black border-top border-bottom border-2 border-black" style="z-index: 2;">Segera hadir</div>
                  <img :src="'https://github.com/anang-prasetyo/anang-prasetyo.github.io/blob/master/src/assets/img/' + p.url +'.jpg?raw=true'">
                </div>
                <div v-else class="project-thumb d-flex align-items-center">
                  <div class="p-2 w-100 text-center bg-body-secondary text-black border-top border-bottom border-2 border-black">Segera hadir</div>
                </div>
                <div class="py-2 px-3 d-flex justify-content-between align-items-center">
                  <div>
                    <div>{{ p.name }}</div>
                    <ul v-if="p.isOpen" class="list-unstyled project-tag d-flex gap-1">
                      <li v-for="pt, pti in newProject[pi].tag" :key="pti" class="text-capitalize">{{ pt }}</li>
                    </ul>
                    <ul v-else class="list-unstyled d-flex gap-1">
                      <li class="bg-light" style="width: 5rem; height: 1rem; border-radius: 10px; opacity: .5;"></li>
                    </ul>
                  </div>
                  <div v-if="p.isOpen">
                    <a :href="p.urlDemo" target="_blank" class="d-flex buttonku">Demo</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import useDb from "../script/MyDatabase";
import useFunc from "../script/MyFunc";

const newProject = ref()

const { project } = useDb()
const { filterUpStr } = useFunc()

onMounted(() => {
  newProject.value = project.value.sort(filterUpStr)
})
</script>

<style lang="scss" scoped>

.buttonku{
  background: white;
  color: black;
  border-radius: 5px;
  padding: 5px 12px 0px 12px;
  outline: 2px solid white;
  border: 2px solid black;
  box-shadow: 0px 4px black;
  position: relative;
  text-decoration: none;
  &:hover{
    transform: translateY(1px);
    box-shadow: 0px 0px black;
  }
  &::after{
    content: '';
    background: #A1B4E2;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    mix-blend-mode: darken;
  }
}

.project{
  border-radius: 12px;
  // border-radius: var(--border-radius-1);
  border: var(--border-white-2);
  box-shadow: var(--box-shadow-black);
  background: #253C78;
  color: var(--color-white);
  &-thumb{
    background: #A1B4E2;
    border-bottom: 2px solid white;
    height: 10rem;
    border-radius: 10px;
    overflow: hidden;
    & img{
      height: inherit;
      width: 100%;
      object-fit: cover;
    }
  }
  &-tag li{
    font-size: 12px;
    &::after{
      content: ','
    }
    &:last-child::after{
      content: '.'
    }
  }
}
@media (max-width: 576px) {
  .project-thumb{
    height: 12rem;
  }
  .buttonku{
    padding: 5px 12px;
  }
}
</style>