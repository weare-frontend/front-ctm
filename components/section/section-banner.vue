<template>
<div>
    <!-- Banner PC   -->
    <div class="desktop row align-items-center mx-0" :style="'width:100%; overflow:hidden; background-image:url('+`${require(`@/assets/img/SECTION_BANNER/BG_SECTION-1-DESKTOP.jpg`)}`+');background-size: contain; background-position: bottom center;background-size: auto;background-repeat: no-repeat;'">
        <div class="col-12 text-center">
            <div class="col-12">
                <br><br><br><br>
            </div>
            <div class="col-12">
                <img class="icon-intab-ani" :src="require(`@/assets/img/SECTION_BANNER/IMG_SECTION-1-DESKTOP.png`)" alt="img-header" style="max-width: 100%;">
            </div>
            <div class="col-12" style="margin-bottom: 15px;" data-aos="fade-up">
                <img class="img-fluid" :src="require(`@/assets/img/SECTION_BANNER/IMG_SECTION-1-1.png`)" fluid alt="img-header">
            </div>
        </div>
    </div>

    <!-- Banner Mobile -->
    <div class="mobile row align-items-center mx-0" :style="'width:100%; overflow:hidden; background-image:url('+`${require(`@/assets/img/SECTION_BANNER/BG_SECTION-1-MOBILE.jpg`)}`+');background-size: contain; background-position: bottom center;background-size: cover;background-repeat: no-repeat;'">
        <div class="col-12 text-center">
            <div class="col-12">
                <br><br><br><br>
            </div>
            <div class="col-12">
                <img  class="icon-intab-ani" :src="require(`@/assets/img/SECTION_BANNER/IMG_SECTION-1-MOBILE.png`)"  alt="img-header" style="max-width: 100%;">
            </div>
            <div class="col-12" style="margin-bottom: 15px;" data-aos="fade-up">
                <img class="img-fluid"  :src="require(`@/assets/img/SECTION_BANNER/IMG_SECTION-1-1.png`)"  fluid alt="img-header">
            </div>
        </div>
    </div>
    
    <!-- Login, Register & Start Game -->
    <div class="text-center text-white manu-button" v-if="!this.$auth.user">
        <h1 class="py-3" style="font-weight: 300;">ครบจบในเว็บเดียว</h1>
        <span v-b-modal.modal-login style="cursor : pointer;">
            <b-img-lazy :src="require(`@/assets/img/SECTION_BANNER/BTN_LOGIN.png`)" style="max-width: 190px;"></b-img-lazy>
        </span>
        <nuxt-link :to="{name : 'register-id' }">
            <b-img-lazy :src="require(`@/assets/img/SECTION_BANNER/BTN_REGISTER.png`)" style="max-width: 190px;"></b-img-lazy>
        </nuxt-link>
        <h4 class="py-4">" ระบบ ฝาก - ถอน อัตโนมัติ "</h4>
    </div>
    <div class="text-center text-white" v-else>
        <div class="desktop btn-start">
            <h1 class="py-3 text-start" style="font-weight: 300; margin-bottom: -10px;">ครบจบในเว็บเดียว</h1>
            <span style="cursor: pointer;" v-b-modal.modal-launch>
                <b-img-lazy :src="require(`@/assets/img/SECTION_BANNER/BTN_START.png`)" class="img_start"></b-img-lazy>
            </span>
            <h4 class="py-1 text-start">" ระบบ ฝาก - ถอน อัตโนมัติ " </h4>
        </div>
        <div class="mobile mt-3">
            <span style="cursor: pointer;" v-b-modal.modal-launch>
                <b-img-lazy :src="require(`@/assets/img/SECTION_BANNER/BTN_START.png`)" class="img_start"></b-img-lazy>
            </span>
        </div>
    </div>

    <!-- modal launch game -->
    <b-modal id="modal-launch" ref="modal-launch" class="my-2" centered hide-footer>
        <template v-slot:modal-header="{ close }">
            <h5 class="text-center w-100">เข้าสู่เว็บเดิมพัน</h5>
            <i class="fas fa-times" aria-hidden="true" @click="close()"></i>
        </template>
        <!-- <div class="text-center mb-2" v-for="(item,index) in gameArray" :key="index">
            <b-card border-variant="dark" header-text-variant="white" style="background-color: #000;">
                <b-card-text>
                
                    <a class="d-none" target="_blank" :ref="`launcher_${item.prefix}`"></a>
                    <span style="cursor : pointer;" @click="launcherGame(item.prefix)">
                        <b-img-lazy :src="require(`~/assets/img/IMG_LOGOGAME/${item.prefix}.png`)" style="max-width: 190px; height: 100px"></b-img-lazy>
                    </span>
                </b-card-text>
            </b-card>
        </div> -->
        <div class="text-center mb-2">
            <b-card border-variant="dark" header-text-variant="white" style="background-color: #000;">
                <b-card-text @click="submitGame">
                  <form
                    target="_blank"
                    ref="formGame"
                    action="https://lavagame.com/api/ext/lawa/login"
                    class="form-playgame"
                    method="post"
                  >
                    <input type="hidden" name="username" value="lava178164460" />
                    <input type="hidden" name="password" value="Aa1234" />
                    <input type="hidden" ref="token" name="token" value="" />
                    <span style="cursor : pointer;">
                        <b-img-lazy style="width: 100%;height: auto;" src="https://i.imgur.com/cvwZR7w.png" ></b-img-lazy>
                    </span>
                  </form>
                    
                </b-card-text>
            </b-card>
        </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameArray: [],
      HOST: process.env.API,
    }
  },
  mounted: async function () {
    // this.getGames()
  },
  methods: {
    async submitGame() {
      this.$axios
        .$post('/api/launchgame', {
          agents_id: this.$auth.user.player_games[0].agents_id,
          account_api: this.$auth.user.player_games[0].account_api,
        })
        .then((res) => {
          if (res.success) {
            window.open(res.data.url, '_blank')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getGames: async function () {
      try {
        const { games = [] } = await this.$axios.$get('/api/games')
        return (this.gameArray = games)
      } catch (error) {
        return (this.gameArray = [])
      }
    },
    launcherGame: async function (game) {
      try {
        const { launcher } = await this.$axios.$post('/api/launcher', {
          game: game,
        })
        if (this.$device.isDesktop) {
          this.$refs[`launcher_${game}`][0].setAttribute(
            'href',
            launcher.desktop
          )
          this.$refs[`launcher_${game}`][0].click()
        } else {
          this.$refs[`launcher_${game}`][0].setAttribute(
            'href',
            launcher.mobile
          )
          this.$refs[`launcher_${game}`][0].click()
        }
        return true
      } catch (error) {
        return false
      }
      console.log(this.$refs[`launcher_${game}`][0])
    },
  },
  computed: {
    theme() {
      console.log(this.$store.state.themeConfig.bannerSection)
      return this.$store.state.themeConfig.bannerSection
      // console.log(this.$store.getters["theme/bannerSection"]);
      // return this.$store.getters["theme/bannerSection"];
    },
  },
}
</script>

<style>
/* Strat Mobile */
@media only screen and (max-width: 480px) {
  .text-start {
    font-size: 18px;
  }

  .btn-start {
    position: absolute;
    top: 2.2%;
    left: 5%;
  }

  .img_start {
    max-width: 230px;
  }

  .jackpot {
    margin-top: 110px;
  }

  .VIDEO-FRAME {
    width: 350px;
    height: 230px;
  }

  .manu-button {
    position: absolute;
    top: 3%;
    left: 13%;
    display: none;
  }
}

/*Close Mobile */

/*Start Desktop */
@media only screen and (min-width: 920px) {
  .btn-start {
    position: absolute;
    top: 3%;
    left: 20%;
    max-width: 50%;
  }

  .img_start {
    max-width: 300px;
  }

  .jackpot {
    margin-top: 160px;
  }

  .VIDEO-FRAME {
    width: 640px;
    height: 420px;
  }

  .manu-button {
    position: absolute;
    top: 3%;
    left: 20%;
    display: block;
    max-width: 50%;
  }
}

/*Close Desktop */
</style>
