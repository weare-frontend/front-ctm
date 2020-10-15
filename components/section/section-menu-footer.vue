<template>
  <div class="footer text-center py-2" v-if="$auth.user">
    <div class="no-gutters">
      <div class="col-auto mx-auto">
        <div
          style="max-width: 600px; margin: 0 auto; width: 100%"
          class="row justify-content-center"
        >
          <div class="col-3 menu-item">
            <nuxt-link to="/" class="btn btn-link-default text-white">
              <i class="fas fa-home" aria-hidden="true"></i>
              <br />
              <span>หน้าแรก</span>
            </nuxt-link>
          </div>
          <div class="col-3 menu-item">
            <nuxt-link to="/deposit" class="btn btn-link-default text-white">
              <i class="fas fa-hand-holding-usd" aria-hidden="true"></i>
              <br />
              <span>ฝากเงิน</span>
            </nuxt-link>
          </div>
          <div class="col-3 menu-item">
            <nuxt-link to="/withdraw" class="btn btn-link-default text-white">
              <i class="fa fa-donate" aria-hidden="true"></i>
              <br />
              <span>ถอนเงิน</span>
            </nuxt-link>
          </div>
          <div class="col-3 menu-item">
            <nuxt-link to="/history" class="btn btn-link-default text-white">
              <i class="fa fa-history" aria-hidden="true"></i>
              <br />
              <span>ประวัติฝาก-ถอน</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mobile footerLogout text-center py-2" v-else>
    <div class="pt-4 pb-4 bt-footer">
      <nuxt-link :to="{ name: 'register-id' }" class="bt-txfooter">
        สมัครสมาชิก
      </nuxt-link>
    </div>
    <div class="pt-4 pb-4 bt-footer" v-b-modal.modal-login>
      <a class="bt-txfooter" style="cursor: pointer">เข้าสู่ระบบ</a>
    </div>

    <!-- Modal Login  -->
    <b-modal
      id="modal-login"
      ref="modal-login"
      class="my-2"
      centered
      hide-footer
      no-close-on-backdrop
    >
      <template v-slot:modal-header="{ close }">
        <h5 class="text-center w-100">ล็อคอินเข้าสู่ระบบ</h5>
        <i class="fas fa-times" aria-hidden="true" @click="close()"></i>
      </template>
      <b-card border-variant="dark" header-text-variant="white" align="center">
        <b-card-text>
          <div class="row my-2">
            <div class="col-12">
              <b-input-group>
                <b-input-group-prepend is-text>
                  <i class="fas fa-user"></i>
                </b-input-group-prepend>
                <b-form-input
                  class="inputLogin"
                  v-model="username"
                  type="text"
                  name="username"
                  placeholder="เบอร์โทร"
                  oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"
                ></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="row my-2">
            <div class="col-12">
              <b-input-group>
                <b-input-group-prepend is-text>
                  <i class="fas fa-key"></i>
                </b-input-group-prepend>
                <b-form-input
                  class="inputLogin"
                  v-model="password"
                  type="password"
                  placeholder="รหัสผ่าน"
                ></b-form-input>
              </b-input-group>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mb-2" v-if="false">
              <b-button @click="registerWithLINE()" block variant="success"><i class="fab fa-line"></i> เข้าสู่ระบบผ่านไลน์</b-button>
            </div>
            <div class="col-12">
              <b-button @click="loginFn()" block variant="dark" :disabled="!isValid || isLoading"> {{ isLoading ? loginProcessText : loginText  }} </b-button>
            </div>
          </div>
          <hr style="margin-bottom: 5px" />
          <small class="text-dark" style="font-size: 10px"
            >Copyright © 2020 Central All Rights Reserved <br />Supported by
            Lavagaming.com Version 0.1.1
          </small>
        </b-card-text>
      </b-card>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      STEP_menu: 1,
      isLoading: false,
      loginText: 'เข้าสู่ระบบ',
      loginProcessText: 'กำลังเข้าสู่ระบบ...',
    }
  },
  methods: {
    loginFn() {
      this.isLoading = true
      this.$auth
        .loginWith('local', {
          data: {
            username: this.username,
            password: this.password,
          },
        })
        .then(() => {
          this.$store.dispatch('player/getPlayerDetail')
          this.resetForm()
          this.$router.push({
            name: 'index',
          })
        })
        .catch(({ response }) => {
          let message = 'เข้าสู่ระบบไม่สำเร็จ กรุณาตรวจลองใหม่'
          switch (response.data.code) {
            case 401:
              message = 'ยูสเซอร์หรือรหัสผ่านไม่ถูกต้อง กรุณาตรวจลองใหม่'
              break
            default:
              break
          }
          this.$toast.global.error({ message })
        })
        .finally(() => (this.isLoading = false))
    },
    resetForm() {
      this.username = ''
      this.password = ''
    },
  },
  computed: {
    isValid() {
      return this.username.length >= 10 && this.password.length >= 4
    },
  },
}
</script>

<style lang="scss" scoped>
.menuFooter-img {
  max-width: 30px;
  max-height: auto;
}
.footerLogout {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
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

.bt-footer {
  background-image: linear-gradient(
    rgb(55, 62, 158),
    rgb(12, 12, 83),
    rgb(10, 20, 54)
  );
  border: 1px solid #000;
  width: 50%;
  padding: 10px 0px;
  float: right;
  margin-top: -20px;
}

a.bt-txfooter {
  color: #fff;
  font-size: 25px;
  font-weight: 100;
  filter: drop-shadow(0px 1px 1px #fff);
}

.footer {
  background: rgba(0, 0, 0, 0.67);
  width: 100%;
  height: 75px;
  position: fixed;
  bottom: 0;
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
.menu-item {
  span {
    font-size: 0.8rem;
  }
}
@media (hover: none) and (pointer: coarse) {
  .menu-item {
    span {
      font-size: 0.6rem;
    }
  }
}
</style>
