<template>
  <div>
    <div class="fs-1 p-5 bg-black text-white text-center">Daftar Riwayat Hidup</div>
    <section class="border-2 border-black border-top border-bottom p-4 p-sm-5" style="min-height: 100vh;">
      <div class="row mx-0 row-gap-4">
        <div class="col-12 col-sm-4 p-0 p-sm-2" :class="type == 'md' || type == 'lg' ? ' border-end border-2 border-black' : ''">
          <div>
            <div class="display-5 fw-bold">Anang Prasetyo</div>
            <div class="fs-3">Web Developer</div>
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
                <td class="fw-light">Tempat Lahir</td>
                <td>: Surakarta</td>
              </tr>
              <tr>
                <td class="fw-light">Usia</td>
                <td>: 24 Tahun</td>
              </tr>
              <tr>
                <td class="fw-light">Alamat Rumah</td>
                <td>: Surakarta, Indonesia</td>
              </tr>
              <tr>
                <td class="fw-light">Pekerjaan</td>
                <td>: Web Developer</td>
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
  </div>
</template>

<script setup>
import { useBreakpoints } from "../script/MyFunc";

const { type } = useBreakpoints()
</script>

<style>

</style>