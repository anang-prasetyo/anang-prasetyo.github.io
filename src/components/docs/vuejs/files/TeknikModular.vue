<template>
  <main>
    <h2 class="mb-4">Teknik Modular</h2>
    <div class="fs-5">
      <p>Berikut ini adalah langkah-langkah yang dapat dilakukan untuk membuat aplikasi dengan menggunakan framework Vue js. Dengan mengacu dari laman resmi <a href="https://vuejs.org/" target="_blank">Vue js</a>.</p>
      <p>Sebelum memulai, pastikan syarat berikut ini sudah terpenuhi:</p>
      <ol class="mb-3">
        <li>Terhubung ke jaringan internet.</li>
        <li>Familiar dengan command line.</li>
        <li>Sudah menginstal <a href="https://nodejs.org/en" target="_blank">Node js</a> versi 18.3 atau lebih tinggi.</li>
        <li>Working directory sudah berada pada tempat yang sama dengan project baru yang akan dibuat.</li>
      </ol>
      <p>Proyek yang akan dibuat menggunakan setup build berdasarkan Vite dan memungkinkan kita menggunakan Vue Single-File Components (SFCs).</p>
      <p>Jalankan perintah berikut pada terminal (tanpa simbol <span class="my-badge">$</span> ):</p>
      <codestyle-component :isianHtml="isianHtml[0]" :listStyle="'$'"></codestyle-component>
      <p>Perintah ini akan menginstal dan menjalankan <a href="https://github.com/vuejs/create-vue" target="_blank">create-vue</a>, alat resmi untuk scaffolding proyek Vue. Akan diberikan petunjuk untuk beberapa fitur opsional seperti TypeScript dan dukungan pengujian:</p>
      <codestyle-component :isianHtml="isianHtml[2]" :listStyle="'✔'"></codestyle-component>
      <p>Jika tidak yakin tentang suatu pilihan, cukup pilih <span class="my-badge">No</span> dengan menekan enter. Setelah proyek dibuat, ikuti petunjuk untuk menginstal dependensi dan memulai server dev:</p>
      <codestyle-component :isianHtml="isianHtml[1]" :listStyle="'$'"></codestyle-component>
      <p>Sekarang seharusnya sudah berhasil menjalankan proyek Vue pertama! Perhatikan bahwa contoh komponen dalam proyek yang dihasilkan ditulis menggunakan Composition API dan {{ "<script setup>" }}, bukan Options API.</p>
      <p>Selama masa pengembangan dan uji coba sebaiknya tetap menggunakan perintah <span class="my-badge">npm run dev</span> ketika akan menjalankan aplikasi.</p>
      <p>Saat aplikasi sudah siap dikirim ke produksi, jalankan perintah berikut:</p>
      <codestyle-component :isianHtml="isianHtml[3]" :listStyle="'$'"></codestyle-component>
      <p>Ini akan membuat build aplikasi yang siap produksi di direktori ./dist proyek. Lihat <a href="https://vuejs.org/guide/best-practices/production-deployment.html" target="_blank">Panduan Penerapan Produksi</a> untuk mempelajari lebih lanjut cara mengirimkan aplikasi ke produksi.</p>
      <p>Folder ./dist inilah yang biasanya diunggah ketika sudah masuk ke tahap hosting.</p>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import CodestyleComponent from '../../../CodestyleComponent.vue'

const isianHtml = ref([
  ["npm create vue@latest"],
  ["cd <your-project-name>", "npm install", "npm run dev"],
  [
    "Project name: … <your-project-name>", 
    "Add TypeScript? … No / Yes", 
    "Add JSX Support? … No / Yes", 
    "Add Vue Router for Single Page Application development? … No / Yes", 
    "Add Pinia for state management? … No / Yes", 
    "Add Vitest for Unit testing? … No / Yes", 
    "Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright", 
    "Add ESLint for code quality? … No / Yes", 
    "Add Prettier for code formatting? … No / Yes",
  ],
  ["npm run build"]
])
</script>

<style>

</style>