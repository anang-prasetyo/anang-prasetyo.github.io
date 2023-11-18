<template>
  <section class="vh-100">
    <div class="row h-100 m-0 row-gap-5 border border-start-0 border-end-0 border-black border-2">
      <div class="col-12 col-md-6 text-center text-md-start d-flex flex-column gap-3 h-100 justify-content-center border-end border-black border-2" style="background: #F96269; padding: 0rem 5rem 0rem 5rem;">
        <div class="h1 d-flex flex-column">Halo, Saya Anang. <span class="fw-bold" style="color: black;">Fullstack Web Developer.</span></div>
        <div class="h3">Saat ini tinggal di Surakarta, Indonesia.</div>
        <div class="mt-2">
          <button class="btn-custom-1">Undang saya</button>
        </div>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column h-100 justify-content-center" style="background: #253C78;">
        <!-- <div class="box m-auto"></div> -->
        <div class="project-thumb m-auto" style="height: 25rem;">
          <img src="../assets/anang-prasetyo-avatar.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
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
  color: white;
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
    background-color: white;
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