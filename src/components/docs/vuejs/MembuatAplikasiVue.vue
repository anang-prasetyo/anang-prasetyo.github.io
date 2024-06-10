<template>
  <section>
    <ul class="list-unstyled doc">
      <li class="content">
        <h1>Membuat Aplikasi Vue</h1>
      </li>
      <li class="content">
        <teknik-modular></teknik-modular>
      </li>
      <li class="content">
        <vue-melalui-cdn></vue-melalui-cdn>
      </li>
    </ul>
  </section>
</template>

<script setup>
import TeknikModular from "./files/TeknikModular.vue";
import VueMelaluiCdn from './files/VueMelaluiCdn.vue'

</script>

<style  lang="scss">
.doc .content{
  padding-top: 2rem;
  padding-bottom: 4rem;
  border-top: 1px solid var(--bs-border-color);
  &:first-child{
    border-top-color: transparent;
  }
}
</style>