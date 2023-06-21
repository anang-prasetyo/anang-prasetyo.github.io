<template>
  <main>
    <section class="container vh-100 d-flex align-items-center py-3">
      <div class="row h-100 w-100 d-flex justify-content-center align-items-center flex-column flex-md-row gap-5">
        <div class="col-12 col-md text-center text-md-start">
          <div class="h1 d-flex flex-column">Hi, I am Anang. <span style="color: blueviolet;">Fullstack Developer.</span></div>
          <div class="h3">Currently based in Surakarta, Indonesia.</div>
        </div>
        <div class="col-12 col-md">
          <div class="box m-auto"></div>
        </div>
      </div>
    </section>
    <section class="container vh-100">
      <div class="row">
        <div class="col-12 p-3 h2 text-center">This is my project.</div>
        <div class="col-12">
          <ul class="row list-unstyled">
            <li v-for="p in project" :key="p" class="m-auto m-sm-0 col-8 col-sm-6 col-md-4 col-lg-3 col-lg-2 py-2">
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
  </main>
</template>

<script setup>
import { ref } from "vue";

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
</script>

<style lang="scss" scoped>

.box{
  background: lavender;
  height: 9rem;
  width: 9rem;
  border-radius: var(--border-radius-1);
  border: var(--border-black);
  box-shadow: var(--box-shadow-black);
}
.project{
  border-radius: var(--border-radius-1);
  border: var(--border-black);
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
</style>