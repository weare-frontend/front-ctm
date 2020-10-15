<template>
  <div style="margin-top: 110px">
    <div class="container">
      <b-card-text>
        <div class="row justify-content-center">
          <div class="col-12">
            <h4 class="text-center text-white">สมัครสมาชิก</h4>
          </div>
          <div class="col-12 my-4 text-center">
            <ul class="progressbar">
              <li :class="{ active: step > 1 }">เงื่อนไข</li>
              <li :class="{ active: step > 2 }">รหัสของคุณ</li>
              <li :class="{ active: step > 3 }">ข้อมูลส่วนตัว</li>
              <li :class="{ active: step >= 4 }">เสร็จสิ้น</li>
            </ul>
          </div>
          <form class="form-signin animated fadeIn" v-show="step == 1">
            <div class="row">
              <div class="col-10 offset-1 text-white text-left">
                <p class="text-center text-white">
                  <u>เงื่อนไขและข้อตกลงในการสมัคร</u>
                </p>
                <p class="font-weight-100 small mb-1">
                  1. หมายเลขโทรศัพท์ที่ใช้ ต้องสามารถรับ ข้อความได้
                  เพราะระบบจำเป็นต้องส่งรหัส ยืนยันไปยังหมายเลขโทรศัพท์ของท่าน
                  มิเช่นนั้นจะไม่สามารถทำรายการต่างๆได้
                </p>
                <p class="font-weight-100 small mb-1">
                  2. ชื่อ - นามสกุล จะต้องตรงกับข้อมูลบัญชี
                  มิเช่นนั้นจะไม่สามารถถอนเงินได้
                </p>
                <p class="font-weight-100 small mb-1">
                  3. ต้องใช้บัญชีที่สมัครฝากเงินเข้ามาเท่านั้น
                </p>
                <p class="font-weight-100 small mb-1">
                  4. ถ้าเกิดข้อผิดพลาดของระบบ ให้ทำการ แจ้งพนักงานทันที
                  กรณีที่ไม่แจ้ง ทางเรา ขอสงวนสิทธิ์การถอนเงิน ทุกกรณี
                </p>
                <p class="font-weight-100 small mb-2">
                  5. สมาชิก 1 คน ต่อ 1 ไอดีเท่านั้น
                  กรณีตรวจพบว่ามีการสมัครหลายไอดี ทางเราจะสงวนสิทธิ์การถอน
                  ทุกกรณี
                </p>
              </div>
            </div>
            <div class="col-10 offset-1 text-white text-left mb-2">
              <div class="custom-control custom-checkbox text-left">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  ref="checkBoxCondition"
                  id="checkBoxCondition"
                />
                <label
                  class="custom-control-label text-warning pt-1 font-weight-100"
                  for="checkBoxCondition"
                  >ยอมรับเงื่อนไขทั้งหมด</label
                >
              </div>
            </div>
            <div class="row">
              <div class="col-10 offset-1 text-white text-left mb-2">
                <b-button
                  class="btn btn-light shadow btn-block font-weight-100"
                  @click="nextStepCondition"
                  >ขั้นตอนต่อไป</b-button
                >
              </div>
              <div class="col-10 offset-1 text-white text-left">
                <nuxt-link to="/">
                  <b-button
                    class="btn btn-light shadow btn-block font-weight-100"
                    >กลับ</b-button
                  >
                </nuxt-link>
              </div>
            </div>
          </form>
          <form class="form-signin animated fadeIn" v-show="step == 2">
            <div class="row">
              <div class="col-12 text-white text-left">
                <b-input-group prepend="เบอร์โทร">
                  <b-form-input
                    v-model="inputTel"
                    id="input-tel"
                    type="text"
                    :state="inputTel.length == 10"
                    maxlength="10"
                    placeholder="กรอกเบอร์โทร"
                    oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"
                  ></b-form-input>
                </b-input-group>
                <b-collapse class="py-3" id="collapse-otp">
                  <b-input-group prepend="รหัส OTP">
                    <b-form-input
                      v-model="inputOTP"
                      type="text"
                      :state="inputOTP.length >= 1"
                      placeholder="กรอก OTP"
                      oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"
                    ></b-form-input>
                  </b-input-group>
                  <a
                    class="text-white"
                    v-if="this.coutDownOtp < 0"
                    @click="sendAgainOTP"
                    >ขอ (OTP) ใหม่อีกครั้ง</a
                  >
                  <a class="text-danger" style="font-size: 14px" v-else
                    >จะสามารถลองใหม่อีกครั้งภายใน เวลา
                    {{ this.textContent }} นาที</a
                  >
                  <b-button
                    class="btn btn-light shadow btn-block font-weight-100 mt-2"
                    @click="nextStepOTP"
                    >ยืนยัน OTP</b-button
                  >
                  <nuxt-link to="/">
                    <b-button
                      class="btn btn-light shadow btn-block font-weight-100 mt-2"
                      >ยกเลิก</b-button
                    >
                  </nuxt-link>
                </b-collapse>
                <div id="input-otp">
                  <b-button
                    class="btn btn-light shadow btn-block font-weight-100 mt-2"
                    @click="nextStepPhoneNumber"
                    >ยืนยัน</b-button
                  >
                  <b-button
                    class="btn btn-light shadow btn-block font-weight-100 mt-2"
                    @click.prevent="prev()"
                    >กลับ</b-button
                  >
                </div>
              </div>
            </div>
          </form>
          <form class="form-signin animated fadeIn" v-show="step == 3">
            <div class="row">
              <div class="col-10 offset-1 text-white text-left">
                <div class="row">
                  <div class="col-6 text-white text-left">
                    <label>ชื่อ</label>
                    <b-input
                      v-model="inputFname"
                      type="text"
                      :state="inputFname.length >= 5"
                      class="mb-2 mr-sm-2 mb-sm-0 text-center"
                      placeholder="กรอกชื่อ"
                    ></b-input>
                  </div>
                  <div class="col-6 text-white text-left">
                    <label>นามสกุล</label>
                    <b-input
                      v-model="inputLname"
                      type="text"
                      :state="inputLname.length >= 5"
                      class="mb-2 mr-sm-2 mb-sm-0 text-center"
                      placeholder="กรอกนามสกุล"
                    ></b-input>
                  </div>

                  <div class="col-12 pt-2">
                    <label>ตั้งรหัส PIN เข้าสู่ระบบ</label>
                    <b-input
                      v-model="pincode"
                      :state="pincode.length == 4"
                      class="mb-2 mr-sm-2 mb-sm-0 text-center"
                      placeholder="กรอก PIN 4 หลัก"
                      oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"
                      type="text"
                      maxlength="4"
                    ></b-input>
                  </div>

                  <div class="col-12 text-white text-left pt-2">
                    <label>เลือกธนาคารของลูกค้า</label>
                    <b-form-select
                      v-model="selectedBank"
                      :options="bankOptions"
                      value-field="_id"
                      text-field="description"
                      :state="selectedBank != null"
                    >
                      <template v-slot:first>
                        <b-form-select-option :value="null" disabled
                          >-- เลือกธนาคารของลูกค้า --</b-form-select-option
                        >
                      </template>
                    </b-form-select>
                  </div>
                  <div class="col-12 text-white text-left mb-3">
                    <label>เลขบัญชีธนาคาร</label>
                    <b-input
                      v-model="inputAccount"
                      type="text"
                      :state="inputAccount.length >= 10"
                      maxlength="13"
                      class="mb-2 mr-sm-2 mb-sm-0 text-center"
                      placeholder="กรอกเลขบัญชีธนาคาร"
                    ></b-input>
                  </div>
                </div>
                <b-button
                  class="btn btn-light shadow btn-block font-weight-100 mt-2"
                  @click="registerPlayer"
                  >ยืนยันสมัคร</b-button
                >
                <b-button
                  class="btn btn-light shadow btn-block font-weight-100 mt-2 mb-5"
                  @click.prevent="prev()"
                  >กลับ</b-button
                >
              </div>
            </div>
          </form>
          <!-- <form class="form-signin animated fadeIn" v-show="step == 3">
                    <div class="row">
                        <div class="col-10 offset-1 text-white text-left">
                            <label>ตั้งรหัส PIN เข้าสู่ระบบ</label>
                            <b-input v-model="pincode" class="mb-2 mr-sm-2 mb-sm-0 text-center" placeholder="กรอก PIN 4 หลัก"></b-input>
                        </div>
                        <div class="col-10 offset-1 text-white text-left mb-2 mt-3">
                            <b-button class="btn btn-light shadow btn-block font-weight-100" @click.prevent="next()">ยืนยันการสมัคร</b-button>
                        </div>
                        <div class="col-10 offset-1 text-white text-left">
                            <b-button class="btn btn-light shadow btn-block font-weight-100 mb-5" @click.prevent="prev()">กลับ</b-button>
                        </div>
                    </div>
                </form> -->
          <form class="form-signin animated fadeIn" v-show="step == 4">
            <div class="row">
              <div class="col-10 offset-1">
                <b-alert show>
                  <span class="text-center">ข้อมูลการสมัครสมาชิก</span>
                  <small class="d-block text-danger text-left"
                    >* กรุณาบันทึก ยูสเซอร์เข้าเกม และ รหัสผ่านเข้าเกม ของท่าน
                    หรือ บันทึกภาพหน้าจอไว้</small
                  >
                  <small class="d-block text-danger text-left"
                    >* ท่านสามารถล็อกอินโดยใส่ PIN หรือ รหัสผ่านเข้าเกม
                    เพื่อเข้าสู่ระบบ</small
                  >
                </b-alert>
              </div>
              <div class="col-10 offset-1 mb-2 text-white text-left">
                <label>ยูสเซอร์เข้าเกม</label>
                <b-input-group>
                  <b-form-input
                    ref="copy_username"
                    type="text"
                    v-model="inputUsername"
                    readonly
                    @click="copyClipboard('copy_username')"
                  ></b-form-input>
                  <b-input-group-append
                    is-text
                    @click="copyClipboard('copy_username')"
                  >
                    คัดลอก
                  </b-input-group-append>
                </b-input-group>
              </div>
              <div class="col-10 offset-1 mb-2 text-white text-left">
                <label>รหัสผ่านเข้าเกม</label>
                <b-input-group>
                  <b-form-input
                    ref="copy_password"
                    type="text"
                    v-model="inputPassword"
                    readonly
                    @click="copyClipboard('copy_password')"
                  ></b-form-input>
                  <b-input-group-append
                    is-text
                    @click="copyClipboard('copy_password')"
                  >
                    คัดลอก
                  </b-input-group-append>
                </b-input-group>
              </div>
              <!-- <div class="col-10 offset-1 mb-2 text-white text-left">
                            <label>PIN</label>
                            <b-input-group class="text-left">
                                <b-form-input type="text" readonly></b-form-input>
                                <b-input-group-append is-text>
                                    คัดลอก
                                </b-input-group-append>
                            </b-input-group>
                        </div> -->

              <div class="col-10 offset-1 text-white text-left mb-5 mt-3">
                <b-button
                  class="btn btn-light shadow btn-block font-weight-100"
                  @click="LoginPlayer"
                  >เข้าสู่ระบบ</b-button
                >
              </div>
            </div>
          </form>
        </div>
      </b-card-text>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'register',
  auth: 'guest',
  head() {
    return {
      title: 'Register',
    }
  },
  beforeCreate() {
    this.$store.dispatch('setting/getBrandSetting')
  },
  data() {
    return {
      inputTel: '',
      inputOTP: '',
      inputFname: '',
      inputLname: '',
      inputAccount: '',
      inputUsername: '',
      inputPassword: '',
      showText: false,
      step: 1,
      show: false,
      selectedBank: null,
      textContent: '',
      coutDownOtp: 0,
      pincode: '',
      defaultPassword: 'Aa1234',
      isLoading: null,
    }
  },
  async asyncData({ $axios, route }) {
    let banks
    try {
      banks = await $axios.$get('/api/banks?$limit=50')
    } catch (error) {}
    return { banks }
  },
  computed: {
    bankOptions() {
      return this.banks
        ? this.banks.data.map((v) => ({
            _id: v._id,
            description: v.name,
          }))
        : []
    },
  },
  methods: {
    prev() {
      this.step--
    },
    next() {
      this.step++
    },
    nextStepCondition: async function () {
      if (!this.$refs.checkBoxCondition.checked) {
        this.$toast.global.error({ message: 'กรุณายอมรับเงือนไข' })
      } else {
        this.step++
      }
    },
    nextStepPhoneNumber: async function () {
      let tel = this.inputTel
      this.startTimer()
      if (this.inputTel.match(/^[0-9]+$/)) {
        if (this.inputTel.length != 10) {
          this.$toast.global.error({
            message: 'กรุณากรอกเบอร์โทรให้ครบ 10 หลัก',
          })
        } else {
          try {
            // const otpArray = await this.$axios.$post('/api/otp', {
            //   tel: tel,
            // })
            this.$root.$emit('bv::toggle::collapse', 'collapse-otp')
            this.$toast.global.success({
              message: 'กรุณากรอก OTP ที่ได้รับให้ถูกต้อง',
            })
            document.getElementById('input-otp').style.display = 'none'
            document.getElementById('input-tel').disabled = true
          } catch (error) {
            this.$toast.global.error({ message: error.response.data.message })
          }
        }
      } else {
        this.$toast.global.error({
          message: 'ห้ามค่าว่างและต้องเป็นตัวเลขเท่านั้น',
        })
      }
    },
    sendAgainOTP: async function () {
      let tel = this.inputTel
      this.startTimer()
      try {
        // const otpArray = await this.$axios.$post('/api/otp', {
        //   tel: tel,
        // })
        this.$toast.global.success({
          message: 'กรุณากรอก OTP ที่ได้รับให้ถูกต้อง',
        })
      } catch (error) {
        this.$toast.global.error({ message: error.response.data.message })
      }
    },
    nextStepOTP: async function () {
      let tel = this.inputTel
      try {
        // const checkOtp = await this.$axios.$post('/api/checkotp', {
        //   tel: tel,
        //   otp: this.inputOTP,
        // })
        this.step++
      } catch (error) {
        const { data } = error.response
        this.$toast.global.error({ message: data.message })
      }
    },
    startTimer() {
      this.coutDownOtp = 120
      var minutes, seconds
      var downloadTimer = setInterval(() => {
        minutes = parseInt(this.coutDownOtp / 60, 10)
        seconds = parseInt(this.coutDownOtp % 60, 10)
        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds
        this.textContent = minutes + ':' + seconds
        if (--this.coutDownOtp < 0) {
          clearInterval(downloadTimer)
        }
      }, 1000)
    },
    registerPlayer: async function () {
      let tel = this.inputTel
      if (!this.inputTel) {
        this.$toast.global.error({ message: 'กรุณากรอกข้อมูลให้ครบถ้วน' })
      } else {
        try {
          let body = {
            brands_id: this.$store.state.setting.brand._id,
            username: tel,
            password: this.defaultPassword,
            pincode: this.pincode,
            detail: {
              fname: this.inputFname,
              lname: this.inputLname,
              tel: tel,
              birth_date: '1990-01-01',
            },
            player_bank: {
              type_bank_id: this.selectedBank,
              bank_account: this.inputAccount,
            },
          }

          // Create players-game
          if (this.$store.state.setting.brand.setting.agent_register) {
            this.isLoading = this.$loading.show({
              'is-full-page': true,
            })
            const player = await this.$axios.$post('/api/players', body)
            await this.$auth.loginWith('local', {
              data: {
                username: tel,
                password: this.pincode,
              },
            })
            await this.$axios.$put('/api/players-game', {
              agents_id: this.$store.state.setting.brand.setting.agent_register,
              password: this.defaultPassword,
            })
            // this.inputUsername = player.username
            // this.inputPassword = player.pincode
            this.$auth.fetchUser()
            this.$toast.global.success({ message: 'ลงทะเบียนสำเร็จ' })
            // this.step++
            this.isLoading.hide()
            this.$router.push({
              name: 'index',
            })
          } else {
            this.$toast.global.error({
              message: 'ไม่พบ Agent ID กรุณาตรวจลองใหม่',
            })
          }
        } catch (error) {
          const { data } = error.response
          let messageError = data.message
          switch (data.code) {
            case 400:
              messageError = 'กรอกข้อมูลให้ครบถ้วน'
              break
            case 404:
              messageError = 'ข้อมูลไม่ถูกต้อง'
              break
            default:
              break
          }
          this.$toast.global.error({ message: messageError })
        }
      }
    },
    LoginPlayer: async function () {
      try {
        // Login
        await this.$auth.loginWith('local', {
          data: {
            username: this.inputUsername,
            password: this.inputPassword,
          },
        })
      } catch (error) {
        this.$toast.global.error({
          message: 'ยูสเซอร์หรือรหัสผ่านไม่ถูกต้อง กรุณาตรวจลองใหม่',
        })
      }
    },
    copyClipboard: function (target) {
      this.$refs[target].select()
      document.execCommand('copy')
      this.$toast.global.success({
        message: 'คัดลอกลงคลิปบอร์ดแล้ว',
      })
    },
  },
}
</script>

<style scoped>
body,
html {
  background-color: #000000 !important;
}

.progressbar {
  padding: 0px;
  counter-reset: step;
  height: 60px;
}

.progressbar li {
  list-style-type: none;
  width: 25%;
  float: left;
  font-size: 12px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
}

.progressbar li:before {
  width: 30px;
  height: 30px;
  content: counter(step);
  counter-increment: step;
  line-height: 25px;
  font-size: 18px;
  border: 2px solid #fff;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  background-color: #2d3050 !important;
}

.progressbar li:after {
  width: 100%;
  height: 1px;
  content: '';
  position: absolute;
  background-color: #7d7d7d;
  top: 13px;
  left: -50%;
  z-index: -1;
}

.progressbar li:first-child:after {
  content: none;
}

.progressbar li.active {
  color: #fff;
}

.progressbar li.active:before {
  color: #000;
  border: 3px solid #000;
  border-radius: 50%;
  background-color: #fff !important;
  -webkit-animation-duration: 1.4s;
  /* Safari 4.0 - 8.0 */
  -webkit-animation: fade-img 1.4s infinite;
  animation: fade-img 1.4s infinite;
  animation-duration: 1.4s;
}

.progressbar li.active + li:before {
  background-color: #fff;
}

@keyframes fade-img {
  0% {
    box-shadow: 0 0 1pt 0pt #fff;
  }

  100% {
    box-shadow: 0 0 4pt 1pt #ddd;
  }
}

.text-validation {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
}

.onoffswitch {
  position: relative;
  width: 90px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.onoffswitch-checkbox {
  display: none;
}

.onoffswitch-label {
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid #d1d1d1;
  border-radius: 20px;
}

.onoffswitch-inner {
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
}

.onoffswitch-inner:before,
.onoffswitch-inner:after {
  display: block;
  float: left;
  width: 50%;
  height: 30px;
  padding: 0;
  line-height: 30px;
  font-size: 14px;
  color: white;
  font-family: Trebuchet, Arial, sans-serif;
  font-weight: bold;
  box-sizing: border-box;
}

.onoffswitch-inner:before {
  content: 'ON';
  padding-left: 10px;
  background-color: #34c251;
  color: #ffffff;
}

.onoffswitch-inner:after {
  content: 'OFF';
  padding-right: 10px;
  background-color: #eeeeee;
  color: #999999;
  text-align: right;
}

.onoffswitch-switch {
  display: block;
  width: 15px;
  margin: 7.5px;
  background: #ffffff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 56px;
  border: 2px solid #d1d1d1;
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
}

.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
  margin-left: 0;
}

.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
  right: 0px;
}

.custom-select.is-invalid,
.was-validated .custom-select:invalid {
  border-color: #dc3545;
  padding-right: calc(0.75em + 2.3125rem);
  background-color: #dc3545;
}
</style>
