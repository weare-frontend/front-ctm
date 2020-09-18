<template>
    <div class="footer-bg">

        <hr data-aos="fade-up" > 

        <div class="col-12 my-5 text-center" data-aos="fade-up">
            <h3>
                <b-badge variant="dark">slot</b-badge>
                <b-badge variant="dark">slotgame</b-badge>
                <b-badge variant="dark">สล๊อต</b-badge>
            </h3>
        </div>
        <div class="row mb-4" data-aos="fade-up">
            <div class="col-md-4 mb-2 col-12 offset-md-2 text-center">
                <div class="mb-3">
                    <b-img-lazy class="mx-2 my-1" style="min-width:45px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/APPLE.png`)" alt=""></b-img-lazy>
                    <b-img-lazy class="mx-2 my-1" style="min-width:45px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/ANDROID.png`)" alt=""></b-img-lazy>
                </div>
                <small class="text-white">ระบบที่รองรับ</small>
            </div>
            <div class="col-md-4 col-12 text-center">
                <div class="mb-3">
                    <b-img-lazy class="mx-2 my-1" style="min-width:45px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/KBANK.png`)" alt=""></b-img-lazy>
                    <b-img-lazy class="mx-2 my-1" style="min-width:45px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/KS-BANK.png`)" alt=""></b-img-lazy>
                    <b-img-lazy class="mx-2 my-1" style="min-width:45px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/KT-BANK.png`)" alt=""></b-img-lazy>
                    <b-img-lazy class="mx-2 my-1" style="min-width:45px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/SCB-BANK.png`)" alt=""></b-img-lazy>
                </div>
                <small class="text-white">ทำรายการ ฝาก-ถอน ภายใน 5 นาที ตลอด 24 ชั่วโมง</small>
            </div>
        </div>
       
        <!-- <div class="my-4 col-12 text-center" data-aos="fade-up">
            <span>
                <b-img-lazy class="mx-1 my-1" style="min-width:40px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/APPLE.png`)" alt=""></b-img-lazy>
                <b-img-lazy class="mx-1 my-1" style="min-width:40px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/ANDROID.png`)" alt=""></b-img-lazy>
            </span><br>
            <small class="text-white">ระบบที่รองรับ</small>
        </div> 
        <div class="my-5 col-12 text-center" data-aos="fade-up">
            <span>
                <b-img-lazy class="mx-1 my-1" style="min-width:40px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/KBANK.png`)" alt=""></b-img-lazy>
                <b-img-lazy class="mx-1 my-1" style="min-width:40px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/KS-BANK.png`)" alt=""></b-img-lazy>
                <b-img-lazy class="mx-1 my-1" style="min-width:40px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/KT-BANK.png`)" alt=""></b-img-lazy>
                <b-img-lazy class="mx-1 my-1" style="min-width:40px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/SCB-BANK.png`)" alt=""></b-img-lazy>
            </span><br>
            <small class="text-white">ทำรายการ ฝาก-ถอน ภายใน 5 นาที ตลอด 24 ชั่วโมง</small>
        </div>
         -->
        <div class="col-12 pb-5 text-center text-white">
            <h5 class="mb-3">Copyright © 2020 LAVABET88 All Rights Reserved </h5>
            <h6 >Supported by EXPGaming.com Version 0.1.1 </h6>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
.footer-bg {
  background: #000;
}
hr {
  border: solid 1px rgb(200, 78, 86);
}
</style>
