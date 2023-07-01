<template>
  <section class="container min-vh-100">
    <div class="row">
      <div class="col-12 p-3 h2 text-center">I'm great at.</div>
    </div>
    <div class="col-12">
      <ul v-if="newSkills" class="row list-unstyled mb-0 d-flex justify-content-center">
        <li v-for="s, i in newSkills" :key="i" class="col-5 col-sm-4 col-md-3 col-lg-2 py-2">
          <div class="my-2 d-flex flex-column align-items-center justify-content-center gap-2 p-3 skill">
            <div class="skill-logo">
              <img :src="'https://github.com/anang-prasetyo/anang-prasetyo.github.io/blob/master/src/assets/img/logo/'+ s.name +'.jpg?raw=true'" :alt="s.name">
            </div>
            <div class="">{{ s.name }}</div>
            <div v-if="s.level == 5" class="text-primary">Excelent</div>
            <div v-else-if="s.level == 4" class="text-success">Good</div>
            <div v-else-if="s.level == 3" class="text-warning">Average</div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue"
import useDb from "../script/MyDatabase"
import useFunc from "../script/MyFunc"

const { skills } = useDb()
const { filterDownInt, filterUpStr } = useFunc()
const newSkills = ref()

onMounted(() => {
  newSkills.value = skills.value.sort(filterUpStr).sort(filterDownInt)
})
</script>

<style lang="scss" scoped>
.skill{
  background: whitesmoke; 
  border-radius: 5px;
  border: 1px solid black;
  border-top: 3px solid black;
  border-left: 3px solid black;
  &-logo{
    background: lavender;
    height: 3rem;
    width: 3rem;
    border-radius: var(--border-radius-1);
    border: var(--border-black-2);
    box-shadow: var(--box-shadow-black);
    overflow: hidden;
    object-fit: cover;
    position: relative;
    & img{
      height: inherit;
      width: inherit;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>