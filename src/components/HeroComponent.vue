<template>
  <section class="mb-5">
    <div class="row m-0 border-top border-bottom border-black border-2">
      <div id="boxBorderEnd" class="col-12 col-md-6 text-center text-md-start d-flex flex-column gap-3 vh-100 justify-content-center align-items-center align-items-sm-start" style="background: #fff; padding: 0rem 5rem 0rem 5rem;">
        <div class="h1 d-flex flex-column">Halo, Saya Anang. <span class="fw-bold" style="color: black;">Fullstack Web Developer.</span></div>
        <div class="h3">Fresh graduate Sarjana Komputer.</div>
        <div class="h3">Saat ini tinggal di Surakarta, Indonesia.</div>
        <button class="mt-2 btn-custom-1">Undang saya</button>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column vh-100 justify-content-center position-relative" style="background: #253C78;">
        <!-- <div class="box m-auto"></div> -->
        <div class="project-thumb m-auto" style="height: 25rem;">
          <img src="../assets/anang-prasetyo-avatar.png" alt="">
        </div>
        <div id="sticker1" class="position-absolute" style="right: 15%; top: 40%; height: 5rem; transform: rotate(-12deg);">
          <coding-sticker style="color: #253C78; height: 6rem; width: 7rem;" />
        </div>
        <div id="sticker2" class="position-absolute" style="left: 15%; bottom: 15%; height: 8rem; transform: rotate(12deg);">
          <programming-language style="color: #F96269; height: 8rem; width: 12rem;" />
        </div>
      </div>
    </div>
  </section>
  <section class="container my-5">
    <div class="fs-3 text-center">Anda memiliki impian untuk membangun website Anda sendiri dengan desain yang modern dan biaya terjangkau? Ayo segera mulai bangun bisnis / organisasi Anda secara online dan tunjukan kepada dunia.</div>
  </section>
  <section class="my-5">
    <div class="row m-0 fs-1 border-top border-bottom border-black border-2">
      <div id="boxBorderEnd" class="col-12 col-sm-6" style="background: #446BC5; padding: 5rem;">
        <div>Mengunjungi beberapa tempat hanya untuk promosi. Itu melelahkan!</div>
      </div>
      <div class="col-12 col-sm-6" style="background: #829CD9; padding: 5rem;">
        <div>Biarkan mereka yang mencari tahu tentang Anda. Itu menarik!</div>
      </div>
    </div>
    <div class="row m-0 border-bottom border-black border-2">
      <div id="boxBorderEnd" class="col-12 col-sm-6" style="background: #0E182F; padding: 5rem;">
        <div class="d-inline-flex bg-white p-3 border border-2 border-black rounded rounded-4">Selain menggunakan cara umum...</div>
        <img id="img2" src="https://raw.githubusercontent.com/anang-prasetyo/anang-prasetyo.github.io/master/src/assets/ilustrasi/Asset%201-3x.png" alt="" class="img-fluid d-block mx-auto">
      </div>
      <div class="col-12 col-sm-6" style="background: #F96269; padding: 5rem;">
        <div class="d-inline-flex bg-white p-3 border border-2 border-black rounded rounded-4">...Coba juga dengan cara modern!</div>
        <img id="img2" src="https://raw.githubusercontent.com/anang-prasetyo/anang-prasetyo.github.io/master/src/assets/ilustrasi/Asset%2011-3x.png" alt="" class="img-fluid d-block mx-auto">
      </div>
    </div>
  </section>
</template>

<script setup>
import CodingSticker from "../icons/CodingSticker.vue";
import ProgrammingLanguage from "../icons/ProgrammingLanguage.vue";

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

.btn-custom-1{
  --width-btn: 180px;
  --height-btn: 60px;
  width: var(--width-btn);
  height: var(--height-btn);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(15, 15, 15);
  border: none;
  color: #F96269;
  font-weight: 600;
  gap: 8px;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
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
  &:hover::before {
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