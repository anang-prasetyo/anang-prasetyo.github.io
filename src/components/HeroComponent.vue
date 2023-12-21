<template>
  <section :class="type == 'lg' ? '' : ''">
    <div class="row m-0 border-top border-bottom border-black border-2">
      <div id="boxBorderEnd" class="col-12 col-md-6 text-center text-md-start d-flex flex-column gap-3 justify-content-center align-items-center align-items-sm-start" style="background: #fff;" :style="[type == 'xs' ? 'padding: 0rem 2rem 0rem 2rem; min-height: 50vh;' : 'padding: 0rem 5rem 0rem 5rem; height: 100vh;']">
        <div class="h1 d-flex flex-column">Halo, Saya Anang. <span class="fw-bold" style="color: #F96269;">Fullstack Web Developer.</span></div>
        <div class="h3">Fresh graduate Sarjana Informatika.</div>
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
  
  <div class="fs-1 p-5 bg-black text-white text-center">Portofolio</div>
  <section class="border-2 border-black border-top border-bottom p-4 p-sm-5" style="min-height: 100vh;">
    <div class="row mx-0 row-gap-4">
      <div class="col-12 col-sm-4 p-0 p-sm-2" :class="type == 'md' || type == 'lg' ? ' border-end border-2 border-black' : ''">
        <div>
          <div class="display-5 fw-bold">Anang Prasetyo</div>
          <div class="fs-3">Fullstack Web Developer</div>
        </div>
        <ul class="mt-5 mb-0 list-unstyled fw-light">
          <li><i class="bi bi-globe"></i> https://anang-prasetyo.github.io/</li>
          <li><i class="bi bi-envelope"></i> anprasetyo060@gmail.com</li>
          <li><i class="bi bi-whatsapp"></i> +62 82133938464</li>
          <li><i class="bi bi-instagram"></i> @pra_anang</li>
          <li><i class="bi bi-github"></i> anang-prasetyo</li>
          <li><i class="bi bi-geo-alt"></i> Surakarta, Indonesia</li>
        </ul>
        <div class="border-bottom border-2 border-black d-inline-block w-50 my-5"></div>
        <div>
          <div class="mb-1 fs-5">SKILL</div>
          <ul class="list-unstyled">
            <li><i class="bi bi-check"></i> Adobe Illustrator <span class="text-primary">(Mahir)</span></li>
            <li><i class="bi bi-check"></i> Adobe Photoshop <span class="text-primary">(Mahir)</span></li>
            <li><i class="bi bi-check"></i> CSS <span class="text-primary">(Mahir)</span></li>
            <li><i class="bi bi-check"></i> HTML <span class="text-primary">(Mahir)</span></li>
            <li><i class="bi bi-check"></i> VueJS <span class="text-primary">(Mahir)</span></li>
            <li><i class="bi bi-check"></i> Firebase <span class="text-success">(Bagus)</span></li>
            <li><i class="bi bi-check"></i> Git <span class="text-success">(Bagus)</span></li>
            <li><i class="bi bi-check"></i> Github <span class="text-success">(Bagus)</span></li>
            <li><i class="bi bi-check"></i> JavaScript <span class="text-success">(Bagus)</span></li>
            <li><i class="bi bi-check"></i> Sass <span class="text-success">(Bagus)</span></li>
            <li><i class="bi bi-check"></i> MySQL <span class="text-warning">(Rata-rata)</span></li>
            <li><i class="bi bi-check"></i> PHP <span class="text-warning">(Rata-rata)</span></li>
          </ul>
        </div>
        <div>
          <div class="mt-5 mb-1 fs-5">PENDIDIKAN</div>
          <ul class="list-unstyled d-flex flex-column gap-2">
            <li style="line-height: 1.3rem;">
              <div>S-1 Teknik Informatika</div>
              <div>Universitas Muhammadiyah Surakarta</div>
              <div class="fw-light">
                <div>2018 - 2023</div>
                <div>Surakarta, Jawa Tengah</div>
              </div>
            </li>
            <li style="line-height: 1.3rem;">
              <div>SMAN 6 Surakarta</div>
              <div class="fw-light">
                <div>2015 - 2018</div>
                <div>Surakarta, Jawa Tengah</div>
              </div>
            </li>
            <li style="line-height: 1.3rem;">
              <div>SMPN 8 Surakarta</div>
              <div class="fw-light">
                <div>2012 - 2015</div>
                <div>Surakarta, Jawa Tengah</div>
              </div>
            </li>
            <li style="line-height: 1.3rem;">
              <div>SDN Badran Surakarta</div>
              <div class="fw-light">
                <div>2006 - 2012</div>
                <div>Surakarta, Jawa Tengah</div>
              </div>
            </li>
            <li style="line-height: 1.3rem;">
              <div>RA Al-Islam 2 Surakarta</div>
              <div class="fw-light">
                <div>2004 - 2006</div>
                <div>Surakarta, Jawa Tengah</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-sm-8 p-0 px-sm-4">
        <div>
          <div class="mb-1 fs-5">BIODATA</div>
          <table class="table">
            <tr>
              <td class="fw-light">Nama Lengkap</td>
              <td>: Anang Prasetyo</td>
            </tr>
            <tr>
              <td class="fw-light">Tempat Tanggal Lahir</td>
              <td>: Surakarta, 2 Maret 2000</td>
            </tr>
            <tr>
              <td class="fw-light">Jenis Kelamin</td>
              <td>: Laki-laki</td>
            </tr>
            <tr>
              <td class="fw-light">Alamat</td>
              <td>: Surakarta, Indonesia</td>
            </tr>
            <tr>
              <td class="fw-light">Agama</td>
              <td>: Islam</td>
            </tr>
            <tr>
              <td class="fw-light">Pekerjaan</td>
              <td>: Freelancer</td>
            </tr>
          </table>
        </div>
        <div>
          
          <div class="mt-5 mb-1 fs-5">PENGALAMAN KERJA</div>
          <ul class="list-unstyled d-flex flex-column gap-4">
            <li style="line-height: 1.3rem;">
              <div>Web Sekolahan - SMK 10 November Sukodono Sragen</div>
              <div class="fw-light">
                <div>20 Oktober - 9 November 2023, Sragen, Jawa Tengah</div>
                <div class="mt-2">Membangun website sekolahan dari awal dengan fitur utama Penerimaan Peserta Didik Baru (PPDB). Pihak sekolahan menyambut baik website ini dan membuka kesempatan untuk dapat melanjutkan proyek ini di masa depan.</div>
              </div>
            </li>
            <li style="line-height: 1.3rem;">
              <div>Web Toko Online - Woku.id</div>
              <div class="fw-light">
                <div>Agustus - September 2023, Surakarta, Jawa Tengah</div>
                <div class="mt-2">Mengembangkan website administrasi barang pada sebuah toko kelontong Woku.id dengan fitur utama pengelolaan barang yang lebih mudah dan sederhana daripada sebelumnya. Pengembangan mencakup desain dan fitur yang ada pada website ini.</div>
              </div>
            </li>
            <li style="line-height: 1.3rem;">
              <div>Magang - Diskominfo Karanganyar</div>
              <div class="fw-light">
                <div>17 Mei - 17 Juni 2021, Karanganyar, Jawa Tengah</div>
                <div class="mt-2">Mengerjakan beberapa tugas yaitu mendesain postingan instagram Diskominfo Karanganyar, ikut menjadi tim dokumentasi pada beberapa kegiatan rutin Bupati Karanganyar, Melakukan kegiatan administrasi pada website Diskominfo Karanganyar dan Melakukan pemeliharaan perangkat lunak dan perangkat keras komputer di kantor Diskominfo Karanganyar.</div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div class="mt-5 mb-1 fs-5">HOBI</div>
          <div class="fw-light">Di waktu luang, saya biasanya melihat inspirasi desain web di media sosial. Selain itu saya juga suka mengikuti tips dan trik dalam menulis koding, pada beberapa kesempatan saya mencoba beberapa trik tersebut pada project saya selanjutnya. Terkadang jika ada teknologi baru yang cukup menarik dan belum saya ketahui, saya bersemangat untuk mempelajari hal baru tersebut.</div>
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