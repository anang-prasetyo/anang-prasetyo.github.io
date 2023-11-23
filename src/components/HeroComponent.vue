<template>
  <section :class="type == 'lg' ? 'mb-5' : ''">
    <div class="row m-0 border-top border-bottom border-black border-2">
      <div id="boxBorderEnd" class="col-12 col-md-6 text-center text-md-start d-flex flex-column gap-3 justify-content-center align-items-center align-items-sm-start" style="background: #fff;" :style="[type == 'xs' ? 'padding: 0rem 2rem 0rem 2rem; min-height: 50vh;' : 'padding: 0rem 5rem 0rem 5rem; height: 100vh;']">
        <div class="h1 d-flex flex-column">Halo, Saya Anang. <span class="fw-bold" style="color: #F96269;">Fullstack Web Developer.</span></div>
        <div class="h3">Fresh graduate Sarjana Komputer.</div>
        <div class="h3">Saat ini tinggal di Surakarta, Indonesia.</div>
        <a href="https://wa.me/6282133938464?text=Halo%20Anang,%20saya%20ingin%20bertanya%20mengenai%20" target="_blank" class="text-decoration-none" style="color: inherit;">
          <button class="btn btn-dark rounded-0 btn-lg px-5 py-3 mt-4">Mulai Diskusi</button>
        </a>
        <!-- <button class="mt-2 btn-custom-1">Undang saya</button> -->
      </div>
      <div class="col-12 col-md-6 d-flex flex-column justify-content-center position-relative" style="background: #253C78;" :style="type == 'xs' ? 'padding: 3rem; min-height: 50vh;' : 'height: 100vh;'">
        <!-- <div class="box m-auto"></div> -->
        <div class="project-thumb m-auto" :style="type == 'md' || type == 'lg' ? 'height: 25rem;' : ''">
          <img src="../assets/anang-prasetyo-avatar.png" alt="">
        </div>
        <div id="sticker1" class="position-absolute" style="right: 15%; top: 40%; height: 5rem; transform: rotate(-12deg);">
          <coding-sticker style="color: #253C78; height: 6rem; width: 7rem; animation: float 19s ease infinite reverse;" />
        </div>
        <div id="sticker2" class="position-absolute" style="left: 15%; bottom: 15%; height: 8rem; transform: rotate(12deg);">
          <programming-language style="color: #F96269; height: 8rem; width: 12rem; animation: float 24s ease infinite reverse;" />
        </div>
      </div>
    </div>
  </section>
  <section class="container my-5">
    <div class="fs-3 text-center px-4 px-sm-0">Memiliki impian untuk membangun bisnis atau organisasi Anda sendiri di dunia maya? Sekaranglah saatnya untuk mulai membangun bisnis atau organisasi Anda secara online.</div>
  </section>
  <div class="container-lg mb-5 px-0 px-lg-3">
    <div id="siklus1" class="siklus1-border position-relative text-capitalize fs-3 p-4" style="background: #F96269;">
      <div id="siklus1" class="border border-2 border-black" style="height: 20rem;"></div>
      <div id="cycleMobile" style="z-index: 2;">
        <div class="position-absolute py-2 ps-4 pe-3 cycle-right" style="background-color: #F96269; top: 45%; left: 1.65rem; transform: translate(-50%)rotate(-90deg);">
          <div>pilih paket dan desain</div>
        </div>
        <div class="position-absolute py-2 ps-4 pe-3 cycle-right" style="background-color: #F96269; top: 0; left: 50%; transform: translateX(-50%);">
          <div>pengerjaan</div>
        </div>
        <div class="position-absolute ps-3 pe-4 cycle-left" style="background-color: #F96269; bottom: 45%; right: 1.5rem; transform: translate(50%)rotate(-90deg);">
          <div>pencocokan data</div>
        </div>
        <div class="position-absolute mb-2 ps-3 pe-4 cycle-left" style="background-color: #F96269; bottom: 0; left: 50%; transform: translateX(-50%);">
          <div>pembayaran</div>
        </div>
      </div>
      <div id="cycleDesktop" style="z-index: 2;">
        <div class="position-absolute py-2 ps-4 pe-3 cycle-right" style="background-color: #F96269; top: 0; left: 20%;">
          <div>pilih paket dan desain</div>
        </div>
        <div class="position-absolute py-2 ps-4 pe-3 cycle-right" style="background-color: #F96269; top: 0; right: 20%;">
          <div>pengerjaan</div>
        </div>
        <div class="position-absolute mb-1 mb-lg-0 ps-3 pe-4 cycle-left" style="background-color: #F96269; bottom: 0; right: 20%;">
          <div>pencocokan data</div>
        </div>
        <div class="position-absolute mb-1 mb-lg-0 ps-3 pe-4 cycle-left" style="background-color: #F96269; bottom: 0; left: 20%;">
          <div>pembayaran</div>
        </div>
      </div>
    </div>
  </div>
  <section class="mt-5">
    <div class="row m-0 border-top border-black border-2">
      <div id="boxBorderEnd" class="col-12 col-md-6 p-5" style="background: #FB9DA1;" :style="type == 'lg' ? 'height: 100vh;' : ''">
        <img src="https://raw.githubusercontent.com/anang-prasetyo/anang-prasetyo.github.io/master/src/assets/ilustrasi/apa%20itu%20internet%404x.png" alt="" class="img-fluid m-auto d-block" :class="type == 'lg' ? 'h-100' : ''">
      </div>
      <div class="col-12 col-md-6 bg-white p-4 p-sm-5 text-center text-sm-start" style="">
        <div class="fs-1">Apa itu web atau website?</div>
        <div class="fs-3 lh-sm mt-5">Secara sederhana, web diartikan sebagai sebuah tempat di dunia maya yang dapat menyimpan berbagai informasi seperti teks, gambar maupun suara. Seperti bangunan di dunia nyata, web juga memiliki wujud dan alamat. Untuk mengakses web diperlukan jaringan internet dan web browser.</div>
      </div>
    </div>
  </section>
  <section class="">
    <div class="row m-0 fs-1 border-top border-bottom border-black border-2">
      <div id="boxBorderEnd" class="col-12 col-sm-6" style="background: #446BC5; padding: 5rem;">
        <div>Mengunjungi beberapa tempat hanya untuk promosi. Itu melelahkan!</div>
      </div>
      <div class="col-12 col-sm-6" style="background: #829CD9; padding: 5rem;">
        <div>Biarkan mereka yang mencari tahu tentang Anda. Itu menarik!</div>
      </div>
    </div>
    <div class="row m-0 border-bottom border-black border-2 fs-4">
      <div id="boxBorderEnd" class="col-12 col-sm-6 p-5" style="background: #0E182F;">
        <div class="d-inline-flex bg-white p-4 border border-2 border-black rounded rounded-4">Selain menggunakan cara umum...</div>
        <img id="img2" src="../assets/ilustrasi/anang-holding-megaphone.png" alt="" class="img-fluid d-block mx-auto">
      </div>
      <div class="col-12 col-sm-6 p-5" style="background: #F96269;">
        <div class="d-inline-flex bg-white p-4 border border-2 border-black rounded rounded-4">...Coba juga dengan cara modern!</div>
        <img id="img2" src="../assets/ilustrasi/anang-browsing-internet.png" alt="" class="img-fluid d-block mx-auto">
      </div>
    </div>
  </section>
  <section class="mb-5">
    <div class="row m-0 border-bottom border-black border-2">
      <div id="boxBorderEnd" class="col-12 col-md-6 p-5" style="background: #B1C1E7;" :style="type == 'lg' ? 'height: 100vh;' : ''">
        <img src="https://raw.githubusercontent.com/anang-prasetyo/anang-prasetyo.github.io/master/src/assets/ilustrasi/pentingnya%20website%404x.png" alt="" class="img-fluid m-auto d-block" :class="type == 'lg' ? 'h-100' : ''">
      </div>
      <div class="col-12 col-md-6 bg-white p-4 p-sm-5 text-center text-sm-start" style="">
        <div class="fs-1">Pentingnya Website</div>
        <div class="fs-3 lh-sm my-5">Perkembangan teknologi yang semakin canggih, hampir semua kegiatan manusia dapat dilakukan secara online. Oleh karena itu kita perlu mengikuti alur perkembangan teknologi. Manfaat website antara lain :</div>
        <ul class="fs-4 list-unstyled text-start d-inline-block">
          <li><i class="bi bi-arrow-right"></i> Web sebagai sarana Informasi</li>
          <li><i class="bi bi-arrow-right"></i> Web sebagai sarana Promosi</li>
          <li><i class="bi bi-arrow-right"></i> Web sebagai sarana Komunikasi</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import CodingSticker from "../icons/CodingSticker.vue";
import ProgrammingLanguage from "../icons/ProgrammingLanguage.vue";
import { useBreakpoints } from "../script/MyFunc";

const { type } = useBreakpoints()

</script>

<style scoped lang="scss">
.box{
  background: lavender;
  height: 9rem;
  width: 9rem;
  border-radius: var(--border-radius-1);
  border: var(--border-black-2);
  box-shadow: var(--box-shadow-black);
}

.cycle{
  &-right{
    background-size: .7rem;
    background-repeat: no-repeat;
    background-position: 0 14px;
    padding-left: 1.3rem;
    padding-right: 1rem;
    background-image: url(https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/6196c797f76aeb859035a12a_arrowhead-right.svg);
  }
  &-left{
    background-size: .7rem;
    background-repeat: no-repeat;
    background-position: 100% 8px;
    padding-left: 1rem;
    padding-right: 1.3rem;
    background-image: url(https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/6196c797fad72026bb5ff0a0_arrowhead-left.svg);
  }
}

.btn-custom-1{
  --width-btn: 180px;
  --height-btn: 60px;
  width: var(--width-btn);
  height: var(--height-btn);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(249, 98, 105);
  // background-color: rgb(15, 15, 15);
  border: none;
  color: black;
  // color: #F96269;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(249, 98, 105, 0.103);
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
  &::before {
    width: var(--width-btn);
    height: var(--width-btn);
    position: absolute;
    content: "";
    background-color: #F96269;
    border-radius: 50%;
    left: -100%;
    top: 0;
    transition-duration: .3s;
    mix-blend-mode: difference;
  }
  &:hover::before, &:active::before {
    transition-duration: .3s;
    transform: translate(100%,-50%);
    border-radius: 0;
  }
  &:active {
    transform: translate(5px,5px);
    transition-duration: .3s;
  }
}



</style>