<template>
  <section class="container min-vh-100">
    <div class="row">
      <div class="col-12 p-3 h2 text-center">My projects on Github.</div>
      <div class="col-12">
        <ul v-if="newProject" class="row list-unstyled">
          <li v-for="p in newProject" :key="p" class="m-auto m-sm-0 col-11 col-sm-6 col-md-4 col-lg-3 py-2">
            <div class="my-2 project">
              <div class="project-thumb"></div>
              <div class="p-2">
                <div>{{ p.name }}</div>
                <ul class="list-unstyled project-tag d-flex gap-1">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                </ul>
              </div>
            </div>
          </li>
          <!-- <li class="m-auto m-sm-0 col-11 col-sm-6 col-md-4 col-lg-3 py-2">
            <div class="my-2 project">
              <div class="project-thumb">
                <img src="../assets/img/Movies Collection.jpg">
              </div>
              <div class="p-2">
                <div>coba</div>
                <ul class="list-unstyled project-tag d-flex gap-1">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                </ul>
              </div>
            </div>
          </li> -->
        </ul>
      </div>
    </div>
  </section>
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
.project{
  border-radius: var(--border-radius-1);
  border: var(--border-black-2);
  box-shadow: var(--box-shadow-black);
  background: darkslateblue;
  color: var(--color-white);
  &-thumb{
    background: lavender;
    height: 10rem;
    border-radius: inherit;
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
    height: 15rem;
  }
}
</style>