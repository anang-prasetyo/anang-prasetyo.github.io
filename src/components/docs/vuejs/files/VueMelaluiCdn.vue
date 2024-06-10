<template>
  <main>
    <h2 class="mb-4">Menggunakan Vue melalui CDN</h2>
    <div class="fs-5">
      <p>Vue dapat digunakan secara langsung melalui CDN dengan tag script:</p>
      <iframe width="100%" height="100" src="//jsfiddle.net/anangPra/p0hy5xLf/1/embedded/html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
      <p>Pada web resmi Vuejs menggunakan unpkg, tetapi juga dapat menggunakan CDN apa pun yang melayani paket npm, misalnya jsdelivr atau cdnjs. Tentu saja, file ini dapat didownload dan menyajikannya sendiri.</p>
      <p>Saat menggunakan Vue dari CDN, tidak ada "build step" yang terlibat. Ini membuat penyiapannya jauh lebih sederhana, dan cocok untuk menyempurnakan HTML statis atau berintegrasi dengan kerangka backend. Namun, kita tidak dapat menggunakan sintaks Single-File Component (SFC).</p>
      <h4 class="mt-5 mb-3">Menggunakan Global Build</h4>
      <p>Tautan di atas memuat build global Vue, di mana semua API tingkat atas diekspos sebagai properti pada objek Vue global. Berikut ini contoh lengkap penggunaan build global:</p>
      <iframe width="100%" height="370" src="//jsfiddle.net/anangPra/yo36w1dL/2/embedded/html/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
      <p>Baca selengkapnya di laman resmi <a href="https://vuejs.org/guide/quick-start.html#using-vue-from-cdn">Vue js</a>.</p>
    </div>
  </main>
</template>

<script setup>
import TagstyleComponent from '../../../TagstyleComponent.vue'
</script>

<style scoped>
iframe{
  margin-bottom: 1rem;
}

</style>