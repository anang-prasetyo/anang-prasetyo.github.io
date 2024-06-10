<template>
  <main>
    <section class="container my-5">
      <div class="fs-3 text-center px-4 px-sm-0">Memiliki impian untuk membangun bisnis atau organisasi Anda sendiri di dunia maya? Sekaranglah saatnya untuk mulai membangun bisnis atau organisasi Anda secara online.</div>
    </section>

    <section class="container-lg mb-5 px-0 px-lg-3">
      <div id="siklus1" class="siklus1-border position-relative text-capitalize fs-3 p-4" style="background: #F96269;">
        <div id="siklus1" class="border border-2 border-black" style="height: 20rem;"></div>
        <div id="cycleMobile" style="z-index: 2;">
          <div class="position-absolute py-2 ps-4 pe-3 cycle-right" style="background-color: #F96269; top: 45%; left: 1.65rem; transform: translate(-50%)rotate(-90deg);">
            <div>pembayaran</div>
          </div>
          <div class="position-absolute py-2 ps-4 pe-3 cycle-right" style="background-color: #F96269; top: 0; left: 50%; transform: translateX(-50%);">
            <div>diskusi</div>
          </div>
          <div class="position-absolute ps-3 pe-4 cycle-left" style="background-color: #F96269; bottom: 45%; right: 1.5rem; transform: translate(50%)rotate(-90deg);">
            <div>pengerjaan</div>
          </div>
          <div class="position-absolute mb-2 ps-3 pe-4 cycle-left" style="background-color: #F96269; bottom: 0; left: 50%; transform: translateX(-50%); width: 53%;">
            <div>pencocokan data</div>
          </div>
        </div>
        <div id="cycleDesktop" style="z-index: 2;">
          <div class="position-absolute py-2 ps-4 pe-3 cycle-right" style="background-color: #F96269; top: 0; left: 20%;">
            <div>diskusi</div>
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
    </section>
    
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

    <section class="">
      <div id="pad5" class="d-flex flex-column gap-2 text-center px-4 px-sm-2">
        <div class="display-2" style="font-weight: 400;">Kenalkan diri Anda kepada dunia.</div>
        <div class="lh-sm fs-3">Apakah Anda ingin membangun dari awal atau sekedar ingin mengupgrade website, saya siap membantu mewujudkan impian Anda. Anda tidak perlu tahu tentang teknologi untuk dapat menggunakan web. Anda hanya perlu melakukannya seperti yang Anda lakukan di dunia nyata.</div>
        <!-- <div class="mt-5 d-flex justify-content-center">
          <button class="btn d-inline-flex flex-column align-items-center gap-2 fs-3"><span>Lihat paket</span><i class="d-flex bi bi-arrow-down"></i></button>
        </div> -->
      </div>
    </section>
    
    <section class="mt-5">
      <div class="row m-0 border-top border-black border-2">
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
  </main>
</template>

<script setup>
import { useBreakpoints } from "../script/MyFunc";

const { type } = useBreakpoints()
</script>

<style lang="scss" scoped>
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
</style>