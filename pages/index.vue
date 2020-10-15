<template>
<div>
    <Nuxt />
</div>
</template>

<script>
export default {
  layout: 'defaultDasboard',
  data() {
    return {
      isLoading: true,
    }
  },
  asyncData({ store }) {
    let themeConfig = {
      global: {
        themeColor: ' #181447',
        backgroundColor: ' #181447',
      },
      headerSection: {
        brandLogo: {
          description: 'Lucabetth.com ',
          url:
            'http://localhost:3000/_nuxt/assets/img/SECTION_HEADER_LOGO/IMG-LOGO-5.png',
        },
        moneyBagIcon: {
          description: '',
          url: 'http://localhost:3000/_nuxt/assets/img/bag.png',
        },
        bitcoinIcon: {
          description: '',
          url: 'http://localhost:3000/_nuxt/assets/img/bitcoin.png',
        },
      },
      sidebarSection: {},
      bannerSection: {
        background: {
          mobile: {
            description: 'Banner background MOBILE',
            url: require('~/assets/img/SECTION_BANNER/BG_SECTION-1-MOBILE.jpg'),
            // url: 'http://localhost:3000/_nuxt/assets/img/SECTION_BANNER/BG_SECTION-1-MOBILE.jpg',
          },
          desktop: {
            description: 'Banner background DESKTOP',
            url: require('~/assets/img/SECTION_BANNER/BG_SECTION-1-DESKTOP.jpg'),
            // url: 'http://localhost:3000/_nuxt/assets/img/SECTION_BANNER/BG_SECTION-1-DESKTOP.jpg',
          },
        },
        image: {
          mobile: {
            description: 'Banner image MOBILE',
            url: require('~/assets/img/SECTION_BANNER/IMG_SECTION-1-MOBILE.png'),
            // url: 'http://localhost:3000/_nuxt/assets/img/SECTION_BANNER/IMG_SECTION-1-MOBILE.png',
          },
          desktop: {
            description: 'Banner image DESKTOP',
            url: require('~/assets/img/SECTION_BANNER/IMG_SECTION-1-DESKTOP.png'),
            // url: 'http://localhost:3000/_nuxt/assets/img/SECTION_BANNER/IMG_SECTION-1-DESKTOP.png',
          },
        },
        categoryImage: {
          description: '',
          url: require('~/assets/img/SECTION_BANNER/IMG_SECTION-1-1.png'),
          // url: 'http://localhost:3000/_nuxt/assets/img/SECTION_BANNER/IMG_SECTION-1-1.png',
        },
        startBtn: {
          description: '',
          url:
            'http://localhost:3000/_nuxt/assets/img/SECTION_BANNER/BTN_START.png',
        },
        registerBtn: {
          description: '',
          url:
            'http://localhost:3000/_nuxt/assets/img/SECTION_BANNER/BTN_REGISTER.png',
        },
        loginBtn: {
          description: '',
          url:
            'http://localhost:3000/_nuxt/assets/img/SECTION_BANNER/BTN_LOGIN.png',
        },
      },
      promotionSection: {
        images: [
          {
            description: 'Promotion 1',
            url:
              'http://localhost:3000/_nuxt/assets/img/SECTION_SLIDE/IMG_SLIDE-1.png',
          },
          {
            description: 'Promotion 2',
            url:
              'http://localhost:3000/_nuxt/assets/img/SECTION_SLIDE/IMG_SLIDE-2.png',
          },
          {
            description: 'Promotion 4',
            url:
              'http://localhost:3000/_nuxt/assets/img/SECTION_SLIDE/IMG_SLIDE-3.png',
          },
        ],
      },
      tabMenuSection: {
        menu: [
          {
            label: 'หน้าหลัก',
            icon: { description: '', url: '' },
            contents: [
              {
                title: '',
                description: '',
                image: {
                  description: 'HOME',
                  url:
                    'http://localhost:3000/_nuxt/assets/img/SECTION_TAB/HOME.png',
                },
              },
            ],
          },
          {
            label: 'เกมส์',
            icon: {
              description: '',
              url:
                'http://localhost:3000/_nuxt/assets/img/SECTION_TAB/GAME.png',
            },
            contents: [{ description: '', url: '' }],
          },
          {
            label: 'โปรโมชั่น',
            icon: {
              description: '',
              url:
                'http://localhost:3000/_nuxt/assets/img/SECTION_TAB/PROMOTION.png',
            },
            contents: [{ description: '', url: '' }],
          },
          {
            label: 'บทความ',
            icon: {
              description: '',
              url:
                'http://localhost:3000/_nuxt/assets/img/SECTION_TAB/ARTICLE.png',
            },
            contents: [
              {
                title: '',
                description: '',
                thumbnail: {
                  description: '',
                  url:
                    'http://localhost:3000/_nuxt/assets/img/SECTION_TAB/PROMOTION.png',
                },
                linkUrl: '',
              },
            ],
          },
          {
            label: 'ติดต่อเรา',
            icon: {
              description: '',
              url:
                'http://localhost:3000/_nuxt/assets/img/SECTION_TAB/CONTACT.png',
            },
            contents: [{ label: '', url: '' }],
          },
        ],
      },
      jackpotSection: {
        background: {
          mobile: {
            description: 'BG-JACKPOT',
            url:
              'http://localhost:3000/_nuxt/assets/img/SECTION_JACKPOT/BG-JACKPOT.png',
          },
          desktop: {
            description: '',
            url:
              'http://localhost:3000/_nuxt/assets/img/SECTION_JACKPOT/BG-JACKPOT.png',
          },
        },
        images: [
          {
            description: 'JACKPOT-1',
            url:
              'http://localhost:3000/_nuxt/assets/img/SECTION_JACKPOT/JACKPOT-1.jpg',
          },
          {
            description: 'JACKPOT-2',
            url:
              'http://localhost:3000/_nuxt/assets/img/SECTION_JACKPOT/JACKPOT-2.jpg',
          },
          {
            description: 'JACKPOT-3',
            url:
              'http://localhost:3000/_nuxt/assets/img/SECTION_JACKPOT/JACKPOT-3.jpg',
          },
        ],
      },
      videoSection: {
        title: 'สูตรบาคาร่าออนไลน์ ทดลองฟรี',
        description:
          'สมัครเล่น บาคาร่า บนเว็บไซต์ที่ดีที่สุด เล่นง่าย มีสูตรบาคาร่าออนไลน์ แจกกฟรี! ให้แก่สมาชิกที่ทำการสมัครเล่นคาสิโนออนไลน อีกทั้งยังสามารถดาวน์โหลด บาคาร่าเล่นบนมือถือได้อีกด้วย นอกจากนี้ บนเว็บไซต์ให้บริการบาคาร่าออนไลน์แห่งนี้ ยังมีเทคนิคการเอาชนะในเกมส์บาคาร่ามากมาย',
        videos: {
          game: {
            background: { description: '', url: '' },
            linkUrl: 'https://www.youtube.com/embed/SIWq4RftpO0',
          },
          register: {
            background: { description: '', url: '' },
            linkUrl: 'https://www.youtube.com/embed/SIWq4RftpO0',
          },
        },
      },
      knowledgeSection: {
        title: '',
        description: '',
      },
      gameListSection: {
        images: [
          { description: '', url: '' },
          { description: '', url: '' },
          { description: '', url: '' },
          { description: '', url: '' },
        ],
      },
      footerSection: {
        bankList: [
          { description: '', url: '' },
          { description: '', url: '' },
          { description: '', url: '' },
          { description: '', url: '' },
        ],
        copyrightBy: 'LAVABET88',
        SupportedBy: 'EXPGaming.com ',
      },
    }
    // store.commit("theme/SET_THEME_CONFIG", themeConfig);
    // store.commit("SET_THEME_CONFIG", themeConfig);
    // setTimeout(() => {
    //   store.commit('SET_THEME_CONFIG', themeConfig)
    //   isLoading = false
    // }, 5000)
  },
}
</script>
<style scoped>
.loader {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: url('https://i.pinimg.com/originals/91/ae/56/91ae5683045f6dbef16b1482bade938f.png')
    center center no-repeat #181447;
  background-size: 100px;
}
</style>