<template>
  <main class="d-flex flex-column position-relative">
    <div class="container py-2 position-absolute top-0 start-0 end-0">
      <!-- <div class="alert alert-primary" role="alert">This site is currently undergoing maintenance, some features may not function properly</div> -->
    </div>
    <hero-component class="" />
    <section class="">
      <div id="pad5" class="d-flex flex-column gap-2 text-center px-4 px-sm-2">
        <div class="display-2" style="font-weight: 400;">Kenalkan diri Anda kepada dunia.</div>
        <div class="lh-sm fs-3">Apakah Anda ingin membangun dari awal atau sekedar ingin mengupgrade website, saya siap membantu mewujudkan impian Anda. Anda tidak perlu tahu tentang teknologi untuk dapat menggunakan web. Anda hanya perlu melakukannya seperti yang Anda lakukan di dunia nyata.</div>
        <div class="mt-5 d-flex justify-content-center">
          <button class="btn d-inline-flex flex-column align-items-center gap-2 fs-3"><span>Lihat paket</span><i class="d-flex bi bi-arrow-down"></i></button>
        </div>
      </div>
    </section>
    <section class="my-5">
      <div class="row m-0 border-top border-bottom border-black border-2">
        <div id="boxBorderEnd" class="col-12 col-md-6 p-5" style="background: #446BC5;" :style="type == 'lg' ? 'height: 100vh;' : ''">
          <img src="https://raw.githubusercontent.com/anang-prasetyo/anang-prasetyo.github.io/master/src/assets/ilustrasi/jenis%20web%404x.png" alt="" class="img-fluid m-auto d-block" :class="type == 'lg' ? 'h-100' : ''">
        </div>
        <div class="col-12 col-md-6 bg-white p-4 p-sm-5 text-capitalize text-center text-sm-start" style="">
          <div class="fs-1">Beragam jenis web</div>
          <div class="fs-3 lh-sm my-5">Sekolahan. Warung kopi. company profile. apapun! ide yang anda miliki bisa diwujudkan menjadi website.</div>
          <ul class="fs-4 list-unstyled text-start d-inline-block">
            <li><i class="bi bi-arrow-right"></i> Website untuk sekolahan</li>
            <li><i class="bi bi-arrow-right"></i> Website untuk karang taruna</li>
            <li><i class="bi bi-arrow-right"></i> Website untuk promosi usaha</li>
            <li><i class="bi bi-arrow-right"></i> Website untuk skripsi</li>
            <li><i class="bi bi-arrow-right"></i> Website untuk jualan</li>
          </ul>
        </div>
      </div>
    </section>
    <section id="paket" class="container-lg mb-5 mt-0 mt-sm-5 text-capitalize">
      <div class="display-1 text-center mb-3 mb-sm-0" style="font-weight: 400;">promo grand opening</div>
      <div class="row m-0 row-gap-3">
        <div class="col-12 col-sm-4 p-0 p-sm-2">
          <div class="border border-2 border-black bg-warning-subtle p-4 p-sm-2 p-md-4" style="">
            <div class="fs-3 mb-3 fw-bold">Basic</div>
            <ul class="list-unstyled text-start">
              <li><i class="bi bi-check"></i> fitur basic</li>
              <li><i class="bi bi-check"></i> konten Statis</li>
              <li><i class="bi bi-check"></i> 5 halaman</li>
              <li><i class="bi bi-check"></i> bebas pilih warna</li>
              <li><i class="bi bi-check"></i> mode terang</li>
              <li><i class="bi bi-check"></i> desain menarik</li>
              <li><i class="bi bi-check"></i> tampilan handphone atau desktop</li>
              <li><i class="bi bi-check"></i> pengalaman pengguna biasa</li>
              <li><i class="bi bi-check"></i> tutorial PDF</li>
              <li><i class="bi bi-check"></i> pengerjaan 7 hari</li>
              <li><i class="bi bi-check"></i> dp 0%</li>
              <li><i class="bi bi-check"></i> garansi 7 hari</li>
            </ul>
            <div class="mt-5" style="line-height: .5rem;">
              Rp.
              <span class="fs-1">500.000</span>
            </div>
            <div><s>Rp. 600.000</s></div>
          </div>
        </div>
        <div class="col-12 col-sm-4 p-0 p-sm-2">
          <div class="border border-2 border-black bg-warning-subtle p-4 p-sm-2 p-md-4" style="">
            <div class="fs-3 mb-3 fw-bold">Unggul</div>
            <ul class="list-unstyled text-start">
              <li><i class="bi bi-check"></i> fitur basic</li>
              <li><i class="bi bi-check"></i> konten Semi Dinamis</li>
              <li><i class="bi bi-check"></i> 10 halaman</li>
              <li><i class="bi bi-check"></i> desain semi custom</li>
              <li><i class="bi bi-check"></i> mode terang atau mode gelap</li>
              <li><i class="bi bi-check"></i> menu admin</li>
              <li><i class="bi bi-check"></i> desain menarik</li>
              <li><i class="bi bi-check"></i> tampilan handphone dan desktop</li>
              <li><i class="bi bi-check"></i> pengalaman pengguna biasa</li>
              <li><i class="bi bi-check"></i> tutorial PDF atau video</li>
              <li><i class="bi bi-check"></i> pengerjaan 30 hari</li>
              <li><i class="bi bi-check"></i> dp 10%</li>
              <li><i class="bi bi-check"></i> garansi 14 hari</li>
            </ul>
            <div class="mt-5" style="line-height: .5rem;">
              Rp.
              <span class="fs-1">1.500.000</span>
            </div>
            <div><s>Rp. 1.700.000</s></div>
          </div>
        </div>
        <div class="col-12 col-sm-4 p-0 p-sm-2">
          <div class="border border-2 border-black bg-warning p-4 p-sm-2 p-md-4" style="">
            <div class="fs-3 mb-3 fw-bold">Pro</div>
            <ul class="list-unstyled text-start">
              <li><i class="bi bi-check"></i> fitur custom</li>
              <li><i class="bi bi-check"></i> konten Dinamis</li>
              <li><i class="bi bi-check"></i> 20 halaman</li>
              <li><i class="bi bi-check"></i> desain custom</li>
              <li><i class="bi bi-check"></i> mode terang dan mode gelap</li>
              <li><i class="bi bi-check"></i> menu admin</li>
              <li><i class="bi bi-check"></i> desain menarik</li>
              <li><i class="bi bi-check"></i> tampilan handphone, tablet dan desktop</li>
              <li><i class="bi bi-check"></i> pengalaman pengguna maksimal</li>
              <li><i class="bi bi-check"></i> tutorial PDF dan video</li>
              <li><i class="bi bi-check"></i> pengerjaan minimal 30 hari</li>
              <li><i class="bi bi-check"></i> dp 10%</li>
              <li><i class="bi bi-check"></i> garansi 30 hari</li>
            </ul>
            <div class="mt-5" style="line-height: .5rem;">
              Rp.
              <span class="fs-1">2.000.000</span>
            </div>
            <div><s>Rp. 2.500.000</s></div>
          </div>
        </div>
      </div>
    </section>
    <my-skills class="mt-5" />
    <my-projects />
    <section class="border-bottom border-black border-2" style="background: #829CD9;">
      <div class="row m-0">
        <div class="col-12 col-sm-8 fs-3">
          <div class="p-4 p-sm-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ullam quam earum? Blanditiis, numquam consequatur? Expedita, aliquam iste, fuga id vitae nemo accusantium cupiditate iusto officiis, perspiciatis odio veritatis ipsa?</p>
          </div>
        </div>
        <!-- <div class="col-4"></div> -->
      </div>
    </section>
    <section class="d-flex align-items-center border-bottom border-black border-2 display-3 text-center" style="background: #F96269;" :style="type == 'md' || type == 'lg' ? 'min-height: 90vh; line-height: 3.5rem;' : ''">
      <div :style="type == 'lg' ? 'padding: 5rem;' : 'padding: 2rem;'">
        <div style="font-weight: 400;">Bagikan pekerjaan Anda. Seseorang diluar sana mungkin membutuhkannya.</div>
        <a href="https://wa.me/6282133938464?text=Halo%20Anang,%20saya%20ingin%20bertanya%20mengenai%20" target="_blank" class="text-decoration-none" style="color: inherit;">
          <button class="btn btn-dark rounded-0 btn-lg px-5 py-3 mt-4">Mulai Konsultasi</button>
        </a>
      </div>
    </section>
    <footer class="footer" style="background: #000; color: #fff;">
      <div class="container py-3 pb-5 px-3 text-center">
        <div class="my-5">
          <button @click="scrollToTop()" class="btn text-white">Kembali ke atas <i class="bi bi-arrow-up-short"></i></button>
        </div>
        <div class="row m-0 row-gap-5">
          <div class="col-12 col-sm-6">
            <div class="d-flex gap-3 align-items-center justify-content-center">
              <img src="./assets/logo.png" alt="" style="height: 2rem;">
              <div>by Anang in 2023.</div>
            </div>
          </div>
          <div class="col-12 col-sm-6 fs-3">
            <ul class="list-unstyled d-flex justify-content-center gap-5 m-auto">
              <li v-for="s in sosmedKu" :key="s">
                <a :href="s.link" target="_blank" style="color: inherit;"><i :class="'bi-'+s.name"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { ref } from "vue"
import MySkills from "./components/MySkills.vue";
import MyProjects from "./components/MyProjects.vue";
import HeroComponent from "./components/HeroComponent.vue";
import { useBreakpoints } from "./script/MyFunc";
// import { Vue3Lottie } from 'vue3-lottie'
// import AstronautJSON from './assets/animasi/website.json'

const { type } = useBreakpoints()
const sosmedKu = ref([
  { name:'github', link:"https://github.com/anang-prasetyo" },
  { name:'whatsapp', link:"https://wa.me/6282133938464?text=Halo%20Anang,%20saya%20ingin%20bertanya%20mengenai%20" },
  { name:'instagram', link:"https://www.instagram.com/pra_anang" },
  // { name:'linkedin', link:"https://www.github.com/" },
  // { name:'telegram', link:"https://www.github.com/" },
  { name:'envelope', link:"http://mail.google.com/mail/?view=cm&fs=1&tf=1&to=TO_anprasetyo060@gmail.com&su=SUBJECT&body=BODY" },
])

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
.sosmed{
  &-bg{
    outline: var(--border-black-3); 
    border-top: 3px solid white; 
    border-bottom: 3px solid white;
  } 
  & li{
    background: lavender;
    height: 2.5rem;
    width: 2.5rem;
    font-size: 1.5rem;
    border-radius: 3rem;
    border: var(--border-black-2);
    box-shadow: var(--box-shadow-black);
    text-align: center;
    padding: 5px;
  }
}
@media (max-width: 576px) {
  .sosmed{
    & li{
      padding: 0px;
    }
  }
}
</style>