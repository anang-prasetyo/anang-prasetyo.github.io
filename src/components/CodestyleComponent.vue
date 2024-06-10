<template>
  <div class="py-3 px-4 rounded-3 terminal">
    <div v-for="ih, ihi in isianHtml" :key="ihi" class="fs-xs2 d-flex gap-2">
      <div class="terminal-color-2">{{ listStyle }}</div>
      <div class="terminal-color-1">{{ ih }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isianHtml: Array,
  listStyle: String
})
</script>

<style lang="scss" scoped>
.terminal {
  background: #2a2d3e;
  font-family: "Menlo", "Monaco", "Consolas", "Courier New", monospace;
  margin-bottom: 1.5rem;
  &-color-1 {
    color: #9ec8f7;
  }
  &-color-2 {
    color: #a390d3;
  }
}
</style>