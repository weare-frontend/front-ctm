<template>
<div class="header-login">
    <!-- header image desktop-->
    <div class="row header-desktop">
        <div class="col-12 header text-center py-2">
            <nuxt-link :to="{patch : '/'}" class="text-left">
                <!-- <b-img class="header-img" :src="`${themConfig.brandLogo.url || ''}`" fluid></b-img> -->
                <b-img class="header-img" :src="require(`@/assets/img/SECTION_HEADER_LOGO/IMG-LOGO-5.png`)" fluid></b-img>
            </nuxt-link>
        </div>
    </div>
    <!-- header image mobile-->
    <div class="row header-mobile">
        <div class="col-12 header text-left py-2 px-5">
            <nuxt-link :to="{patch : '/'}">
                <b-img class="header-img" style="margin-left: -10px;" :src="require(`@/assets/img/SECTION_HEADER_LOGO/IMG-LOGO-5.png`)"  fluid></b-img>
            </nuxt-link>
        </div>
    </div>
    <!-- manu list -->

    <div class="menu-list my-2 mx-5 header-desktop">
        <div class="row">
            <div style="margin-top: 13px; margin-left: -125px; position: absolute;">
                <b-icon style="cursor: pointer;" variant="light" @click="updateMoney()" icon="arrow-repeat" font-scale="1.5"></b-icon>
            </div>
            <div class="col-md" style="padding: inherit;position: absolute; margin-left: -90px;">
                <small class="text-white">กระเป๋าเงิน <br>
                    <b-img :src="require(`@/assets/img/bag.png`)" fluid width="20px"></b-img>
                    {{credit | currency }}
                </small><br>
            </div>
            <div class="col-md" style="margin-right: -30px;">
                <small class="text-white">กระเป๋าโบนัส <br>
                    <b-img :src="require(`@/assets/img/bitcoin.png`)"  fluid width="20px"></b-img>
                    {{$auth.user.free_credit | currency }}
                </small>
            </div>
            <div class="col-md-2">
                <b-icon style="cursor: pointer;" variant="light" icon="list" font-scale="2" v-b-toggle.sidebar-backdrop></b-icon>
            </div>
        </div>
    </div>

    <!-- money change size mobile-->
    <div class="menu-list header-mobile my-2 mx-4" style="margin-top: 5px;">
        <div class="row">
            <div style="margin-left: -175px;margin-top: 20px;">
                <b-icon style="cursor: pointer;" variant="light" @click="updateMoney()" icon="arrow-repeat" font-scale="1"></b-icon>
            </div>
            <div class="col-5" style="margin-left: -165px; position: fixed; margin-top: 10px;">
                <small class="text-white" style="font-size:11px; ">กระเป๋าเงิน <br>
                    <b-img :src="require(`@/assets/img/bag.png`)" fluid width="15px"></b-img>
                    {{credit | currency }}
                </small><br>
            </div>
            <div class="col-5" style="margin-left: -85px; position: fixed; margin-top: 10px;">
                <small class="text-white" style="font-size:11px;">กระเป๋าโบนัส <br>
                    <b-img :src="require(`@/assets/img/bitcoin.png`)" fluid width="15px"></b-img>
                    {{$auth.user.free_credit | currency }}
                </small>
            </div>
            <div class="col-2" style="margin-left: -28px; position: fixed; margin-top: 5px;">
                <b-icon style="cursor: pointer; margin-left: 7px; margin-top: 5px" variant="light" icon="list" font-scale="2.5" v-b-toggle.sidebar-backdrop></b-icon>
            </div>
        </div>
    </div>

    <!-- sidebar manu -->
    <b-sidebar class="mb-5" id="sidebar-backdrop" title="" bg-variant="dark" text-variant="light" :backdrop-variant="'light'" backdrop right shadow>
        <div class="px-3 py-2 text-center">
            <b-icon icon="person-square" font-scale="3" animation="fade"></b-icon>
        </div>
        <div class="px-3 py-2 text-center">
            <span>{{$auth.user.firstName}}</span>
            <span>{{$auth.user.lastName}}</span>
        </div>
        <div class="px-3 py-2">
            <nuxt-link to="/">
                <b-button size="md" pill class="text-left my-3" block variant="light">
                    <i class="mx-2 fas fa-home" aria-hidden="true"></i>หน้าแรก
                </b-button>
            </nuxt-link>
            <nuxt-link to="/deposit">
                <b-button size="md" pill class="text-left my-3" block variant="light">
                    <i class="mx-2 fas fa-hand-holding-usd" aria-hidden="true"></i>ฝากเงิน
                </b-button>
            </nuxt-link>
            <nuxt-link to="/withdraw">
                <b-button size="md" pill class="text-left my-3" block variant="light">
                    <i class="mx-2 fas fa-donate" aria-hidden="true"></i>ถอนเงิน
                </b-button>
            </nuxt-link>
            <nuxt-link to="/history">
                <b-button size="md" pill class="text-left my-3" block variant="light">
                    <i class="mx-2 fas fa-history" aria-hidden="true"></i>ประวัติฝาก-ถอนเงิน
                </b-button>
            </nuxt-link>
            <!-- <b-button size="md" pill class="text-left my-3" block variant="light">
                <i class="mx-2 fas fa-coins" aria-hidden="true"></i>โอนโบนัสเข้ากระเป๋าหลัก
            </b-button> -->
            <nuxt-link to="/profile">
                <b-button size="md" pill class="text-left my-3" block variant="light">
                    <i class="mx-2 fas fa-user-circle" aria-hidden="true"></i>ข้อมูลส่วนตัว
                </b-button>
            </nuxt-link>
            <!-- <b-button size="md" pill class="text-left my-3" block variant="light">
                <i class="mx-2 fas fa-users" aria-hidden="true"></i>ชวนเพื่อน
            </b-button> -->
            <b-button size="md" pill class="text-left my-3 mb-5" block variant="light" @click="$auth.logout()">
                <i class="mx-2 fas fa-sign-out-alt" aria-hidden="true"></i>ออกจากระบบ
            </b-button>
            <br>
            <br>
            <br>
            <br>
        </div>
    </b-sidebar>

</div>
</template>

<script>
export default {
  methods: {
    formatToPrice(value) {
      return new Intl.NumberFormat().format(value)
    },
    updateMoney() {
      this.$store.dispatch('player/getPlayerDetail')
    },
  },
  computed: {
    themConfig() {
      return this.$store.state.themeConfig.headerSection
    },
    credit() {
      return this.$store.state.player.detail
        ? this.$store.state.player.detail.data.credit
        : 0
    },
  },
}
</script>

<style>
.header {
  background: rgba(0, 0, 0, 0.46);
  width: 100%;
  height: 90px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  transition: all ease 0.5s;
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  -ms-transition: all ease 0.5s;
  -webkit-backdrop-filter: saturate(125%) blur(10px);
  -moz-backdrop-filter: saturate(125%) blur(10px);
  -ms-backdrop-filter: saturate(125%) blur(10px);
  backdrop-filter: saturate(125%) blur(10px);
}

.menu-list {
  /* width: 100%; */
  height: 60px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9;
}

.header-mobile {
  display: block;
}

.header-desktop {
  display: none;
}

.header-img {
  max-width: 200px;
  max-height: 100px;
}

@media only screen and (max-width: 700px) {
  .header-img {
    max-width: 150px;
    max-height: 75px;
  }

  .money-desktop {
    display: none;
  }

  .money-mobile {
    display: block;
  }

  .header-mobile {
    display: block;
  }

  .header-desktop {
    display: none;
  }
}

@media only screen and (min-width: 920px) {
  .header {
    height: 100px;
  }

  .header-img {
    max-width: 250px;
    max-height: 90px;
  }

  .money-desktop {
    display: block;
  }

  .money-mobile {
    display: none;
  }

  .header-mobile {
    display: none;
  }

  .header-desktop {
    display: block;
  }
}
</style>
