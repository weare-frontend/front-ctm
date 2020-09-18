<template>
<div class="row foote_r mx-0" style="background: #000;">
    <div class="col-12 mx-0 px-0">
        <hr style="border: solid 2px rgb(200, 78, 86); margin:0px;">
    </div>
    <div class="col-12 my-4 text-center">
        <h3>
            <b-badge variant="dark">slot</b-badge>
            <b-badge variant="dark">slotgame</b-badge>
            <b-badge variant="dark">สล๊อต</b-badge>
        </h3>
    </div>
    <div class="my-1 col-12 text-center">
        <span>
            <b-img-lazy class="mx-1 my-1" style="min-width:40px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/APPLE.png`)" alt=""></b-img-lazy>
            <b-img-lazy class="mx-1 my-1" style="min-width:40px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/ANDROID.png`)" alt=""></b-img-lazy>
        </span><br>
        <small class="text-white">ระบบที่รองรับ</small>
    </div>
    <div class="my-1 col-12 text-center">
        <span>
            <b-img-lazy class="mx-1 my-1" style="min-width:40px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/KBANK.png`)" alt=""></b-img-lazy>
            <b-img-lazy class="mx-1 my-1" style="min-width:40px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/KS-BANK.png`)" alt=""></b-img-lazy>
            <b-img-lazy class="mx-1 my-1" style="min-width:40px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/KT-BANK.png`)" alt=""></b-img-lazy>
            <b-img-lazy class="mx-1 my-1" style="min-width:40px; max-width: 100px; max-width: 40px;" :src="require(`@/assets/img/SECTION_FOOTER/SCB-BANK.png`)" alt=""></b-img-lazy>
        </span><br>
        <small class="text-white">ทำรายการ ฝาก-ถอน ภายใน 5 นาที ตลอด 24 ชั่วโมง</small>
    </div>
    <div class="col-12 my-1 text-center">
        <small class="text-white">Copyright © 2020 LAVABET88 All Rights Reserved <br>Supported by EXPGaming.com Version 0.1.1 </small>
        <br><br>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style>
.footer_ .badge {
    font-weight: 200;
}
</style>
