<template>
  <div class="py-3 px-4 rounded-3 terminal">
    <div class="linecode">
      <div class="terminal-color-tag me-2">{{ "<" + dataTmp[0].tag }}</div>
      <div class="terminal-color-attribute">{{ dataTmp[0].attribute[0].name + "=" }}</div>
      <div class="terminal-color-value">{{ '"' + dataTmp[0].attribute[0].value + '"' }}</div>
      <div class="terminal-color-tag">{{ ">" }}</div>
      <div class="terminal-color-inner">{{ dataTmp[0].inner }}</div>
      <div class="terminal-color-tag">{{ "</" + dataTmp[0].tag + ">" }}</div>
    </div>
    <br>
    <div class="linecode">
      <div class="terminal-color-tag me-2">{{ "<" + dataTmp[1].tag }}</div>
      <div class="terminal-color-attribute">{{ dataTmp[1].attribute[0].name + "=" }}</div>
      <div class="terminal-color-value">{{ '"' + dataTmp[1].attribute[0].value + '"' }}</div>
      <div class="terminal-color-tag">{{ ">" }}</div>
      <div class="terminal-color-inner">{{ dataTmp[1].inner }}</div>
      <div class="terminal-color-tag">{{ "</" + dataTmp[1].tag + ">" }}</div>
    </div>
    <br>
    <div class="linecode">
      <div class="terminal-color-tag-2">
        {{ "<" + dataTmp[2].tag + ">" }}
      </div>
    </div>

    <pre class="mb-0"><code>const { createApp, ref } = Vue

createApp({
  setup() {
    const message = ref('Hello vue!')
    return {
      message
    }
  }
}).mount('#app')</code></pre>
    
    <div class="linecode">
      <div class="terminal-color-tag-2">
        {{ "</" + dataTmp[2].tag + ">" }}
      </div>
    </div>

    
  </div>
  
</template>

<script setup>
import { ref } from "vue"

defineProps({
  // isianHtml: Array,
  // listStyle: String
})
const dataTmp = ref([
  {
    tag: "script",
    attribute: [
      {
        name: "src",
        value: "https://unpkg.com/vue@3/dist/vue.global.js",
      }
    ],
    inner: "",
  },
  {
    tag: "div",
    attribute: [
      {
        name: "id",
        value: "app",
      }
    ],
    inner: "{{ message }}",
  },
  {
    tag: "script",
  }
])
</script>

<style lang="scss" scoped>
.terminal {
  background: #2a2d3e;
  font-family: "Menlo", "Monaco", "Consolas", "Courier New", monospace;
  margin-bottom: 1.5rem;
  &-color-inner {
    color: #fff;
  }
  &-color-value {
    color: #9ec8f7;
  }
  &-color-attribute {
    color: #a390d3;
  }
  &-color-tag {
    color: #92dfa9;
    &-2{
      color: #f07988;
    }
  }
  & pre code{
    color: #fff;
  }
}

.linecode{
  display: flex;
  font-size: .875rem;
  color: #fff;
}
</style>