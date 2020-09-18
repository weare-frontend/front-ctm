<template>
<div class="row py-3 menuTab mx-0" data-aos="fade-up">
    <div data-aos="fade-up" class="col-12" :style="'overflow:hidden; background-image:url('+require(`@/assets/img/SECTION_TAB/BG.png`)+');background-size: cover;'">
        <div class="col-12 justify-content-center py-2 px-0">
            <b-nav class="text-center justify-content-center ">
                <b-nav-item class="navTabMenu" @click="STEP_menu=1">
                    <img :src="require(`@/assets/img/SECTION_TAB/HOME.png`)" class="icon-intab-ani" alt style="max-height: 6vw; min-height: 30px;" />
                    <br><small class="textTabMenu">หน้าหลัก</small>
                </b-nav-item>
                <b-nav-item class="navTabMenu" @click="STEP_menu=2">
                    <img :src="require(`@/assets/img/SECTION_TAB/GAME.png`)" class="icon-intab-ani" alt style="max-height: 6vw; min-height: 30px;" />
                    <br><small class="textTabMenu">เกมส์</small>
                </b-nav-item>
                <b-nav-item class="navTabMenu" @click="STEP_menu=3">
                    <img :src="require(`@/assets/img/SECTION_TAB/PROMOTION.png`)" class="icon-intab-ani" alt style="max-height: 6vw; min-height: 30px;" />
                    <br><small class="textTabMenu">โปรโมชั่น</small>
                </b-nav-item>
                <b-nav-item class="navTabMenu" @click="STEP_menu=4">
                    <img :src="require(`@/assets/img/SECTION_TAB/ARTICLE.png`)" class="icon-intab-ani" alt style="max-height: 6vw; min-height: 30px;" />
                    <br><small class="textTabMenu">บทความ</small>
                </b-nav-item>
                <b-nav-item class="navTabMenu" @click="STEP_menu=5">
                    <img :src="require(`@/assets/img/SECTION_TAB/CONTACT.png`)" class="icon-intab-ani" alt style="max-height: 6vw; min-height: 30px;" />
                    <br><small class="textTabMenu">ติดต่อเรา</small>
                </b-nav-item>
            </b-nav>
        </div>
    </div>
    <!-- หน้าแรก -->
    <div class="offset-md-1 col-md-10 py-5 px-5 justify-content-center text-left" v-show="STEP_menu==1" id="home" data-aos="fade-up">
        <div class="row">
            <div class="col-md-6 col-sm-12 py-2" style="margin: auto;">
                <b-img-lazy class="icon-intab-ani" :src="require(`@/assets/img/SECTION_TAB/TAB-1.png`)" fluid alt=""></b-img-lazy>
            </div>
            <div class="col-md-6 col-sm-12 py-2 text-center my-auto">
                <h6 class="text-danger">คาสิโนออนไลน์ บนเว็บไซต์อันดับ 1 ในประเทศไทย<br></h6>
                <small class="text-white">เล่นคาสิโนออนไลน์บนเว็บไซต์ที่ดีที่สุด Lucabetth.com อาณาจักรศูนย์รวมของเกมส์คาสิโนออนไลน์ยอดฮิตมากมาย ไม่ว่าจะเป็น บาคาราออนไลน์ เสือมังกรออนไลน์ รูเล็ตออนไลน์ แบล็คแจ็คออนไลน์ และเกมส์อื่นๆ อีกมากมาย</small>
                <small class="text-white">โดยสามารถเลือกเล่นได้อย่างไม่รู้เบื้องบนเว็บไซต์ที่ให้บริการคาสิโนออนไลน์ที่ดีที่สุด ครบวงจรไปด้วยเกมส์คาสิโนและระบบธุรกรรมการเงิน ที่สามารถฝากถอนอัตโนมัติไม่จำเป็นต้องรอพนักงาน</small>
            </div>
        </div>
    </div>
    <!-- เกมส์ -->
    <div class="offset-md-1 col-md-10 col-sm-12 py-5 px-5 justify-content-center text-left" v-show="STEP_menu==2" id="game">
        <div class="row px-4">
            <div class="col-md-4 col-sm-6">
                <div class="row">
                    <div class="col-md-12 col-sm-6">
                        <b-img-lazy :src="require(`@/assets/img/SECTION_TAB/GAME-SA-GAMING.png`)" style="width:100%" alt=""></b-img-lazy>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="row">
                    <div class="col-md-12 col-sm-12 py-1">
                        <b-img-lazy :src="require(`@/assets/img/SECTION_TAB/GAME-SEXY-GAMING.png`)" style="width:100%" alt=""></b-img-lazy>
                    </div>
                    <div class="col-md-12 col-sm-12 py-1">
                        <b-img-lazy :src="require(`@/assets/img/SECTION_TAB/GAME-PRETTY-GAMING.png`)" style="width:100%" alt=""></b-img-lazy>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12 py-2">
                <div class="row">
                    <div class="col-12 py-1">
                        <b-img-lazy :src="require(`@/assets/img/SECTION_TAB/GAME-AG-GAMING.png`)" style="width:100%" alt=""></b-img-lazy>
                    </div>
                    <div class="col-12 py-1">
                        <b-img-lazy :src="require(`@/assets/img/SECTION_TAB/GAME-DREAM-GAMING.png`)" style="width:100%" alt=""></b-img-lazy>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 py-2">
                <b-button block variant="dark" size="sm">Slot Game</b-button>
            </div>
            <div class="col-md-3 col-sm-6 py-2">
                <b-button block variant="dark" size="sm">Card Game</b-button>
            </div>
            <div class="col-md-3 col-sm-6 py-2">
                <b-button block variant="dark" size="sm">Lotterty Online</b-button>
            </div>
            <div class="col-md-3 col-sm-6 py-2">
                <b-button block variant="dark" size="sm">Sport Betting</b-button>
            </div>
        </div>
    </div>
    <!-- โปรโมชั่น -->
    <div class="offset-md-1 col-md-10 py-5 px-5 justify-content-center text-left" v-show="STEP_menu==3" id="promotion">
        <div class="row px-5">
            <div class="col-md-4 col-sm-12 py-2">
                <b-img-lazy :src="require(`@/assets/img/SECTION_TAB/PROMOTION-1.jpg`)" style="width:100%" alt=""></b-img-lazy>
            </div>
            <div class="col-md-4 col-sm-12 py-2">
                <b-img-lazy :src="require(`@/assets/img/SECTION_TAB/PROMOTION-2.jpg`)" style="width:100%" alt=""></b-img-lazy>
            </div>
            <div class="col-md-4 col-sm-12 py-2">
                <b-img-lazy :src="require(`@/assets/img/SECTION_TAB/PROMOTION-3.jpg`)" style="width:100%" alt=""></b-img-lazy>
            </div>
        </div>
        <div class="row px-5">
            <div class="col"></div>
            <div class="col-md-4 col-sm-12 py-2">
                <b-img-lazy :src="require(`@/assets/img/SECTION_TAB/PROMOTION-4.jpg`)" style="width:100%" alt=""></b-img-lazy>
            </div>
            <div class="col-md-4 col-sm-12 py-2">
                <b-img-lazy :src="require(`@/assets/img/SECTION_TAB/PROMOTION-5.jpg`)" style="width:100%" alt=""></b-img-lazy>
            </div>
            <div class="col"></div>
        </div>
    </div>
    <!-- บทความ -->
    <div class="offset-md-1 col-md-10 py-5 px-5 justify-content-center text-left" v-show="STEP_menu==4" id="article">
        <div class="row">
            <div class="col-md-4 col-sm-12 py-2">
                <b-card :img-src="require(`@/assets/img/SECTION_TAB/ARTICLE-1.png`)" img-alt="Image" img-top tag="article">
                    <b-card-title>
                        <h6>สร้างรายได้จากคาสิโนบนมือถือได้เงินจริง</h6>
                    </b-card-title>
                    <b-card-text>
                        <small>สร้างคาสิโนออนไลน์ ถือว่าเป็นอีกช่องทางการสร้างรายได้เสริมให้กับใครหลายๆคนได้จริง เพราะว่าปัจจุบันนี้ถ้าหากเราอยากเล่นเกมคาสิโนออนไลน์ เราสามารถเล่นเกมคาสิโนออนไลน์ได้ง่ายๆ ผ่านมือถือเข้าร่วมเกมคาสิโนออนไลน์มือถือได้เงินจริงเล่นเกมคาสิโนออนไลน์สร้างรายได้ให้กับตัวเราเอง มีคนมากมายสามารถสร้างรายได้จากการเล่น</small>
                    </b-card-text>
                </b-card>
            </div>
            <div class="col-md-4 col-sm-12 py-2">
                <b-card :img-src="require(`@/assets/img/SECTION_TAB/ARTICLE-2.png`)" img-alt="Image" img-top tag="article">
                    <b-card-title>
                        <h6>เกมยิงปลาคาสิโน เกมส์การเดิมพันรูปแบบใหม่ที่ได้รับความนิยมอย่างมาก</h6>
                    </b-card-title>
                    <b-card-text>
                        <small>เกมยิงปลาคาสิโนออนไลน์ เกมส์การพนันรูปแบบใหม่ที่ได้รับความนิยมอย่างมาก เกมยิงปลาคาสิโน เล่มเกมส์การเดิมพันอีกหนึ่งรูปแบบที่ได้รับความนิยมอย่างมากบนเกมคาสิโนออนไลน์ในตอนนี้ หลายๆคนชื่นชอบการเล่นเกมยิงปลาคาสิโน เพราะว่าเราเล่นเกมคาสิโน 1 เกม แตกต่างกันตรงที่เกมนี้ เล่นแล้วมันส์</small>
                    </b-card-text>
                </b-card>
            </div>
            <div class="col-md-4 col-sm-12 py-2">
                <b-card :img-src="require(`@/assets/img/SECTION_TAB/ARTICLE-3.png`)" img-alt="Image" img-top tag="article">
                    <b-card-title>
                        <h6>ทางลัดสู่การเป็นเศรษฐีด้วยการเล่นบาคาร่า </h6>
                    </b-card-title>
                    <b-card-text>
                        <small>หากคุณเป็นหนึ่งคนที่กำลังสนใจเล่นบาคาร่าและอยากรวย จำเป็นต้องติดตามบทความนี้ไว้ให้ดีๆ เพราะเราจะบอกเทคนิคทางลัดสู่การเป็นเศรษฐีด้วยการเล่นบาคาร่าให้ทุกท่านได้ทราบกัน ซึ่งจะมีวิธีอะไรบ้าง ไปติดตามกันเลยค่ะ</small>
                    </b-card-text>
                </b-card>
            </div>
        </div>
    </div>
    <!-- ติดต่อเรา -->
    <div class="offset-md-1 col-md-10 py-5 px-5 justify-content-center text-left" v-show="STEP_menu==5" id="contact">
        <div class="row">
            <div class="col-12 py-2 text-center">
                <b-img-lazy style="width:100%" :src="require(`@/assets/img/SECTION_TAB/BG-CONTACT.png`)" alt="Image 1"></b-img-lazy>
            </div>
        </div>
    </div>
    <div class="offset-md-1 col-md-10 px-5 justify-content-center mb-4 text-center" data-aos="fade-up">
        <h6 class="text-danger">คาสิโนออนไลน์ เครดิตฟรี</h6>
        <small class="text-white">สนใจเล่นคาสิโนออนไลน์ บนเว็บไซต์ที่ดีที่สุด มั่นคง ปลอดภัย เล่นง่าน ได้เงินจริง ทดลองเล่นคาสิโนออนไลน์ฟรี Lucaclub88.com
            ให้บริการเกมส์คาสิโนออนไลน์มากกว่า 200 เกมส์ ผู้เล่นสามารถเลือกเล่นได้เล่นตามต้องการ อีกทั้งยังสามารถดาวน์โหลดคาสิโนออนไลน์
            มาไว้บนโทรศัพท์มือถือเล่นได้ทุกที่ทุกเวลา ทั้งระบบปฎิบัติการ andriod และ ios
        </small>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      STEP_menu: 1,
    }
  },
}
</script>



<style scoped>
.menuTab .card {
  background-color: #040035;
  height: 100%;
}

.menuTab .card-title {
  color: #e15d5c;
}

.menuTab .card-text {
  color: white;
}

.textTabMenu {
  color: #e15d5c;
}

@media only screen and (max-width: 700px) {
  .navTabMenu a {
    padding: 5px;
  }

  .navTabMenu {
    padding-left: 2%;
    padding-right: 2%;
  }
}

@media only screen and (min-width: 920px) {
  .navTabMenu a {
    padding: 0.5rem 1rem;
  }

  .navTabMenu {
    padding-left: 3%;
    padding-right: 3%;
  }
}
</style>
