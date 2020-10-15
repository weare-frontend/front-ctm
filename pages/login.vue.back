<template>
<div>
    <!-- <div class="snowfall">
        <div class="snowflake" v-for="(item, i) in 10" :index="i" :key="i"><span class="small text-white">❅</span>️️</div>
    </div> -->

    <div class="snowflakes" aria-hidden="true">
        <div class="snowflake" v-for="(item, i) in 20" :index="i" :key="i">
            ❅
        </div>
    </div>

    <div class="login">
        <b-card border-variant="dark" header-bg-variant="dark" header-text-variant="white" align="center">
            <b-card-text>
                <div class="row my-2">
                    <div class="col-12">
                        <b-input-group>
                            <b-input-group-prepend is-text>
                                <i class="fas fa-user"></i>
                            </b-input-group-prepend>
                            <b-form-input class="inputLogin" v-model="username" type="text" name="username" placeholder="เบอร์โทร"></b-form-input>
                        </b-input-group>
                    </div>
                </div>
                <div class="row my-2">
                    <div class="col-12">
                        <b-input-group>
                            <b-input-group-prepend is-text>
                                <i class="fas fa-key"></i>
                            </b-input-group-prepend>
                            <b-form-input class="inputLogin" v-model="password" type="password" placeholder="รหัสผ่าน"></b-form-input>
                        </b-input-group>
                    </div>
                </div>
                <div class="row my-3">
                    <div class="col-12">
                        <b-button @click="validateFn()" block variant="danger">เข้าสู่ระบบ</b-button>
                        <b-button @click="lineConnectFn()" block variant="success">เชื่อมต่อไลน์</b-button>
                        <b-button @click="registerFn()" block variant="dark">สมัครสมาชิก</b-button>
                    </div>
                </div>
                <hr style="margin-bottom: 5px;">
                <small class="text-dark">Copyright © 2020 LAVABET88 All Rights Reserved <br>Supported by EXPGaming.com Version 0.1.1 </small>
            </b-card-text>
        </b-card>
    </div>
    <!-- <div class="footerLogin text-center py-2" style="background: #000;">
        <small class="text-white">Copyright © 2020 LAVABET88 All Rights Reserved <br>Supported by EXPGaming.com Version 0.1.1 </small>
    </div> -->

</div>
</template>

<script>
export default {
  layout: 'login',
  auth: 'guest',

  data() {
    return {
      username: '',
      password: '',
      STEP_menu: 1,
    }
  },
  methods: {
    validateFn() {
      if (this.username != '' && this.password != '') {
        this.loginFn()
      } else {
        this.$toast.global.error({
          message: 'เข้าสู่ระบบไม่สำเร็จ กรุณากรอกข้อมูลให้ครบ',
        })
      }
    },
    lineConnectFn() {
      alert('line connection !!')
    },
    registerFn() {
      alert('register !!')
    },
    loginFn() {
      this.$auth
        .loginWith('local', {
          data: {
            username: this.username,
            password: this.password,
          },
        })
        .then(() => {
          this.$store.dispatch('player/getPlayerDetail')
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
    },
  },
}
</script>

<style>
.login {
  margin: 0 auto;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.login .card {
  background-color: #ffffff8c;
}

.headerLogin {
  display: block;
}

.footerLogin {
  display: block;
  background: rgba(0, 0, 0, 0.46);
  width: 100%;
  height: auto;
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

@media only screen and (max-height: 420px) {
  .footerLogin {
    display: none;
  }

  .headerLogin {
    display: none;
  }
}
</style>
