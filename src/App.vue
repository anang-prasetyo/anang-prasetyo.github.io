<template>
  <main class="d-flex flex-column gap-5">
    <section class="container vh-100 d-flex align-items-center py-3">
      <div class="row h-100 vw-100 d-flex justify-content-center align-items-center flex-column flex-md-row row-gap-5">
        <div class="col-12 col-md text-center text-md-start">
          <div class="h1 d-flex flex-column">Hi, I am Anang. <span style="color: blueviolet;">Fullstack Developer.</span></div>
          <div class="h3">Currently based in Surakarta, Indonesia.</div>
        </div>
        <div class="col-12 col-md">
          <div class="box m-auto"></div>
        </div>
      </div>
    </section>
    <section class="container min-vh-100">
      <div class="row">
        <div class="col-12 p-3 h2 text-center">I'm great at.</div>
      </div>
      <div class="col-12">
        <ul v-if="newSkills" class="row list-unstyled">
          <li v-for="s, i in newSkills" :key="i" class="m-auto m-sm-0 col-6 col-sm-4 col-md-3 col-lg-2 py-2">
            <div class="my-2 d-flex flex-column align-items-center justify-content-center gap-2 p-3 skill">
              <div class="skill-logo"></div>
              <div class="">{{ s.name }}</div>
              <div v-if="s.level == 5" class="text-primary">Excelent</div>
              <div v-else-if="s.level == 4" class="text-success">Good</div>
              <div v-else-if="s.level == 3" class="text-warning">Average</div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="container min-vh-100">
      <div class="row">
        <div class="col-12 p-3 h2 text-center">My projects on Github.</div>
        <div class="col-12">
          <ul v-if="newProject" class="row list-unstyled">
            <li v-for="p in newProject" :key="p" class="m-auto m-sm-0 col-8 col-sm-6 col-md-4 col-lg-3 py-2">
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
          </ul>
        </div>
      </div>
    </section>
    <section class="container-fluid bg-warning d-flex align-items-center justify-content-center py-4 sosmed-bg">
      <div class="row h-100 w-100 d-flex justify-content-center align-items-center">
        <div class="col p-3 h2 text-center">My contact.</div>
        <div class="col">
          <ul class="list-unstyled d-flex justify-content-center gap-2 m-auto sosmed">
            <li v-for="s in 5" :key="s">{{ s }}</li>
          </ul>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container py-3">Is being developed by Anang in 2023</div>
    </footer>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
const newProject = ref()
const newSkills = ref()

const project = ref([
  {
    name: 'Movies Collection',
    tag: ['']
  },
  {
    name: 'Wedding Agency',
    tag: ['']
  },
  {
    name: 'Invitation',
    tag: ['']
  },
  {
    name: 'Coffee Shop',
    tag: ['']
  },
  {
    name: 'Bookstore',
    tag: ['']
  },
  {
    name: 'Online Shop',
    tag: ['']
  },
  {
    name: 'School Profile',
    tag: ['']
  },
  {
    name: 'Company Profile',
    tag: ['']
  },
])
const skills = ref([
  {
    name: 'HTML',
    level: 5
  },
  {
    name: 'CSS',
    level: 5
  },
  {
    name: 'JavaScript',
    level: 4
  },
  {
    name: 'PHP',
    level: 3
  },
  {
    name: 'Bootstrap',
    level: 4
  },
  {
    name: 'Vuejs',
    level: 5
  },
  {
    name: 'MySQL',
    level: 4
  },
  {
    name: 'Firebase',
    level: 4
  },
  {
    name: 'Git',
    level: 4
  },
  {
    name: 'Github',
    level: 4
  },
  {
    name: 'Codeigniter',
    level: 3
  },
  {
    name: 'Laravel',
    level: 3
  },
])
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
onMounted(() => {
  newSkills.value = skills.value.sort(filterUpStr).sort(filterDownInt)
  newProject.value = project.value.sort(filterUpStr)
})
</script>

<style lang="scss" scoped>

.box{
  background: lavender;
  height: 9rem;
  width: 9rem;
  border-radius: var(--border-radius-1);
  border: var(--border-black-2);
  box-shadow: var(--box-shadow-black);
}
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
  }
}
.sosmed{
  &-bg{
    outline: var(--border-black-3); 
    border-top: 3px solid white; 
    border-bottom: 3px solid white;
  } 
  & li{
    background: lavender;
    height: 2rem;
    width: 2rem;
    border-radius: 3rem;
    border: var(--border-black-2);
    box-shadow: var(--box-shadow-black);
    text-align: center;
  }
}
</style>