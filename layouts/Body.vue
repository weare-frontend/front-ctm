<template>
<div> 
    <!-- banner -->
    <layout-section-banner></layout-section-banner>
    <!-- promotion -->
    <layout-section-promotion></layout-section-promotion>
    <!-- tab menu -->
    <layout-section-tab-menu></layout-section-tab-menu>
    <!-- jackpot -->
    <layout-section-jackpot></layout-section-jackpot>
    <!-- video -->
    <layout-section-video></layout-section-video>
    <!-- knowledge -->
    <layout-section-knowledge></layout-section-knowledge>
    <!-- menu-footer -->
    <layout-menu-footer></layout-menu-footer>
    <!-- logo -->
    <section-logo class="py-4"></section-logo>
    <!-- footer -->
    <layout-footer></layout-footer>
    <!-- <h1 class="text-white" v-html="showValue[0].title.rendered"></h1> -->
    <!-- <small class="text-white">{{showValue[0]}}</small> -->
</div>
</template>

<script>
import Banner from '~/components/section/section-banner.vue'
import Promotion from '~/components/section/section-promotion.vue'
import TabMenu from '~/components/section/section-tab-menu.vue'
import Jackpot from '~/components/section/section-jackpot.vue'
import Knowledge from '~/components/section/section-knowledge.vue'
import Video from '~/components/section/section-video.vue'
import MenuFooter from '~/components/section/section-menu-footer.vue'
import Logo from '~/components/section/section-logo.vue'
import Footer from '~/components/section/section-footer.vue'
export default {
  components: {
    'layout-section-banner': Banner,
    'layout-section-promotion': Promotion,
    'layout-section-tab-menu': TabMenu,
    'layout-section-jackpot': Jackpot,
    'layout-section-knowledge': Knowledge,
    'layout-section-video': Video,
    'section-logo': Logo,
    'layout-menu-footer': MenuFooter,
    'layout-footer': Footer,
  },
  data() {
    return {
      STEP_menu: 1,
      mainProps: {
        fluidGrow: true,
        blank: true,
        blankColor: '#181447',
        width: 1068,
        height: 660,
      },
      showValue: [],
    }
  },
}
</script>

<style>
.manu-button {
  position: absolute;
  top: 3%;
  left: 10%;
  display: block;
}

.centered {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
}

.btn-content {
  background: #09062a;
  border-color: #09062a;
}

.content .card {
  background-color: rgba(13, 11, 38, 0.29);
  /* height: 91%; */
}

.content .card-body {
  text-indent: 30px;
  text-align: justify;
}

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

.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.text-header {
  z-index: 8;
  margin-top: 200px;
}

@media only screen and (max-width: 700px) {
  .navTabMenu a {
    padding: 5px;
  }

  .navTabMenu {
    padding-left: 2%;
    padding-right: 2%;
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

@media only screen and (min-width: 920px) {
  .navTabMenu a {
    padding: 0.5rem 1rem;
  }

  .navTabMenu {
    padding-left: 3%;
    padding-right: 3%;
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
</style>
