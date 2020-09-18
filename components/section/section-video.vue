<template>
<div>
    <div class="row py-3 mx-0"  data-aos="fade-up">
        <div class="offset-md-1 col-md-10 px-5 py-4 justify-content-center text-center">
           <h6 class="text-danger">สูตรบาคาร่าออนไลน์ ทดลองฟรี</h6>
            <small class="text-white">สมัครเล่น บาคาร่า บนเว็บไซต์ที่ดีที่สุด เล่นง่าย มีสูตรบาคาร่าออนไลน์ แจกกฟรี! ให้แก่สมาชิกที่ทำการสมัครเล่นคาสิโนออนไลน
                อีกทั้งยังสามารถดาวน์โหลด บาคาร่าเล่นบนมือถือได้อีกด้วย นอกจากนี้ บนเว็บไซต์ให้บริการบาคาร่าออนไลน์แห่งนี้
                ยังมีเทคนิคการเอาชนะในเกมส์บาคาร่ามากมาย
            </small>
        </div>
    </div>
    <div class="row py-3 pt-4 mx-0"  data-aos="fade-up">
        <div class="offset-md-1 col-md-5 text-center justify-content-center">
            <div class="VIDEO-FRAME p-5" :style="'margin:0 auto;background-image: url('+require(`@/assets/img/SECTION_VIDEO/HOW-TO.png`)+');background-position: top center;background-size: cover;background-repeat: no-repeat;'">
                <br><iframe style="width:100%;height:100%;" src="https://www.youtube.com/embed/SIWq4RftpO0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        <div class=" col-md-5 text-center justify-content-center">
            <div class="VIDEO-FRAME p-5" :style="'margin:0 auto;background-image: url('+require(`@/assets/img/SECTION_VIDEO/HOW-TO.png`)+');background-position: top center;background-size: cover;background-repeat: no-repeat;'">
                <br><iframe style="width:100%;height:100%;" src="https://www.youtube.com/embed/SIWq4RftpO0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
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

<style>
/* Mobile */
@media only screen and (max-width: 400px) {
  .VIDEO-FRAME {
    width: 350px;
    height: 230px;
  }
}
/* iPad */
@media only screen and (max-width: 600px) {
  .VIDEO-FRAME {
    width: 550px;
    height: 330px;
  }
}
/* PC */
@media only screen and (min-width: 920px) {
  .VIDEO-FRAME {
    width: 640px;
    height: 420px;
  }
}
</style>
