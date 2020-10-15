<template>
<div style="margin-top:110px">
    <div class="container">
        <b-card-text>
            <div class="row justify-content-center">
                <div class="col-12">
                    <h4 class="text-center text-white">ข้อมูลส่วนตัว</h4>
                </div>
                <div class="col-md-12 col-11 mb-2">
                    <b-input-group size="md">
                        <b-input-group-prepend is-text>
                            ยูสเซอร์เข้าเกม&nbsp;
                        </b-input-group-prepend>
                        <b-form-input type="text" :value="$auth.user.username" ref="user_copy" @click="copyAffiliate('user_copy')" readonly></b-form-input>
                        <b-input-group-append is-text @click="copyAffiliate('user_copy')">
                            คัดลอก
                        </b-input-group-append>
                    </b-input-group>
                </div>
                <!-- <div class="col-md-6 col-11 mb-2">
                    <b-input-group>
                        <b-input-group-prepend is-text>
                            รหัสผ่านเข้าเกม
                        </b-input-group-prepend>
                        <b-form-input type="text" :value="$auth.user.password" ref="pass_copy" @click="copyAffiliate('pass_copy')" readonly></b-form-input>
                        <b-input-group-append is-text @click="copyAffiliate('pass_copy')">
                            คัดลอก
                        </b-input-group-append>
                    </b-input-group>
                </div> -->
            </div>
            <div class="row justify-content-center" v-if="$auth.user">
                <div class="container">
                    <div class="col-10 col-md-12">
                        <div class="row text-white" style="background:rgba(0,0,0,0.2);border-radius: 6px; justify-content: center;">
                            <div class="col-md-2 text-center">
                              <icon-bank :short-name="$auth.user.player_bank.bank_short_name" class="my-md-0 my-2" width="100" />
                            </div>
                            <div class="col-md-5 text-left d-flex align-items-center">
                              <div>
                                <div>
                                    <small><b>ชื่อบัญชี :</b></small>
                                    <small>{{$auth.user.detail.fname}}</small>
                                    <small>{{$auth.user.detail.lname}}</small>
                                </div>
                                <div>
                                  <small><b>เลขที่บัญชี :</b></small>
                                  <small>{{$auth.user.player_bank.bank_account}}</small>
                                </div>
                                <div v-if="$auth.user.refer_code">
                                  <small><b>รหัสผู้เชิญชวน :</b></small>
                                  <small>{{$auth.user.refer_code}}</small>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-5 text-left d-flex align-items-center">
                              <div>
                                <div>
                                  <small><b>ธนาคาร :</b></small>
                                  <small>{{$auth.user.player_bank.bank_name}}</small>
                                </div>
                                <div>
                                  <small><b>รหัส Pincode :</b></small>
                                  <small>{{$auth.user.pincode}}</small>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-12 col-11">
                    <b-button class="btn btn-md btn-light btn-block shadow mb-2 mt-2" v-b-modal.modal-password>
                        <span>เปลี่ยนรหัสผ่านเข้าเกม</span>
                    </b-button>
                    <b-modal id="modal-password" ref="modal-password" class="my-2" @shown="$refs.password.focus()" title="เปลี่ยนรหัสผ่านเข้าเกม" centered no-close-on-backdrop>
                        <b-card ref="modal-pin">
                            <div class="row">
                                <div class="col-12 mb-0">
                                    <div class="form-group">
                                        <input type="text" class="form-control text-center" v-model="password" ref="password" placeholder="กรุณากรอกรหัสผ่านใหม่" oninput="this.value = this.value.replace(/[^0-9a-zA-Z]/g, '').replace(/(\..*)\./g, '$1');"/>
                                        <div class="text-left">
                                            <small class="text-danger">
                                                หมายเหตุ: รหัสผ่านต้องมีตั้งแต่ 6-12 ตัวขึ้นไป และมีภาษาอังกฤษ พิมพ์เล็กและใหญ่ เช่น Abc123
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-card>
                        <template v-slot:modal-footer="{ cancel }">
                            <div class="row w-100 justify-content-center">
                                <div class="col-6">
                                    <b-button type="button" class="btn bg-white btn-block btn-outline-secondary" @click="cancel()">ยกเลิก</b-button>
                                </div>
                                <div class="col-6">
                                    <b-button type="button" @click="resetPassword" class="btn btn-block bg-dark text-white">ยืนยัน</b-button>
                                </div>
                            </div>
                        </template>
                    </b-modal>
                    <b-button class="btn btn-md btn-light btn-block shadow" v-b-modal.modal-pin>
                        <span>เปลี่ยน PIN เข้าสู่ระบบ</span>
                    </b-button>
                    <b-modal id="modal-pin" ref="modal-pin" class="my-2" @shown="$refs.pincodeOne.focus()" title="เปลี่ยน PIN เข้าสู่ระบบ" centered no-close-on-backdrop>
                        <b-card ref="modal-pin">
                            <div class="text-center"></div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group float-label">
                                        <input type="password" ref="pincodeOne" class="form-control text-center" maxlength="4" placeholder="กรุณากรอก PIN 4 หลัก" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"/>
                                    </div>
                                    <div class="form-group float-label">
                                        <input type="password" ref="pincodeTwo" class="form-control text-center" maxlength="4" placeholder="กรุณายืนยัน PIN 4 หลัก" oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');"/>
                                        <div class="text-left">
                                            <small class="text-danger">หมายเหตุ: PIN 4 หลัก ใช้สำหรับล็อคอินเข้าสู่ระบบ</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-card>
                        <template v-slot:modal-footer="{ cancel }">
                            <div class="row w-100 justify-content-center">
                                <div class="col-6">
                                    <b-button type="button" class="btn bg-white btn-block btn-outline-secondary" @click="cancel()">ยกเลิก</b-button>
                                </div>
                                <div class="col-6">
                                    <b-button type="button" @click="resetPincode" class="btn btn-block bg-dark text-white">ยืนยัน</b-button>
                                </div>
                            </div>
                        </template>
                    </b-modal>
                </div>
            </div>
        </b-card-text>
        <br>
    </div>
</div>
</template>

<script>
import IconBank from '@/components/global/IconBank'
export default {
  layout: 'defaultPage',
  components: {
    IconBank,
  },
  head() {
    return {
      title: 'Profile',
    }
  },
  data: () => ({
    isLoading: null,
    password: '',
    validator: {
      password:
        'รหัสผ่านต้องมีตั้งแต่ 6-12 ตัว และมีภาษาอังกฤษ พิมพ์เล็กและใหญ่ เช่น Abc123',
    },
  }),
  methods: {
    resetPassword: async function () {
      if (
        !!this.$refs.password.value.match(/[a-z]/g) &&
        !!this.$refs.password.value.match(/[A-Z]/g) &&
        this.$refs.password.value.length >= 6
      ) {
        this.isLoading = this.$loading.show({
          'is-full-page': true,
        })
        this.$axios
          .$patch('/api/players-change-password', {
            password: this.$refs.password.value,
          })
          .then(() => {
            this.$toast.global.success({
              message: 'อัพเดทรหัสเข้าเกมผ่านสำเร็จ',
            })
            this.password = ''
            this.$bvModal.hide('modal-password')
            this.$auth.fetchUser()
          })
          .catch((err) => {
            console.log(err)
            this.$toast.global.error({
              message: 'กรุณาตรวจสอบข้อมูล',
            })
          })
          .finally(() => {
            this.isLoading.hide()
          })
      } else {
        this.$toast.global.error({
          message: this.validator.password,
        })
        this.$refs.password.focus()
      }
    },
    resetPincode: async function () {
      if (this.$refs.pincodeOne.value.length != 4) {
        this.$toast.global.error({
          message: 'ห้ามมีช่องว่างและเป็นตัวเลข 4 หลักเท่านั้น',
        })
        this.$refs.pincodeOne.focus()
        return
      }

      if (!this.$refs.pincodeOne.value.match(/^[0-9]+$/)) {
        this.$toast.global.error({
          message: 'ต้องเป็นตัวเลขเท่านั้น',
        })
        this.$refs.pincodeOne.focus()
        return
      }

      if (this.$refs.pincodeTwo.value.length != 4) {
        this.$toast.global.error({
          message: 'ห้ามว่างและต้องมี 4 หลักเท่านั้น',
        })
        this.$refs.pincodeTwo.focus()
        return
      }

      if (!this.$refs.pincodeTwo.value.match(/^[0-9]+$/)) {
        this.$toast.global.error({
          message: 'ต้องเป็นตัวเลขเท่านั้น',
        })
        this.$refs.pincodeTwo.focus()
        return
      }

      if (this.$refs.pincodeOne.value != this.$refs.pincodeTwo.value) {
        this.$toast.global.error({
          message: 'Pincode ไม่ตรงกัน',
        })
        this.$refs.pincodeTwo.focus()
        return
      }

      this.isLoading = this.$loading.show({
        'is-full-page': true,
      })

      this.$axios
        .$patch('/api/players-change-password', {
          pincode: this.$refs.pincodeOne.value,
        })
        .then(() => {
          this.$toast.global.success({
            message: 'อัพเดท Pincode สำเร็จเรียบร้อย',
          })
          this.$refs.pincodeOne.value = ''
          this.$refs.pincodeTwo.value = ''
          this.$auth.fetchUser()
          this.$bvModal.hide('modal-pin')
        })
        .catch(() => {
          this.$toast.global.error({
            message: 'กรุณาตรวจสอบข้อมูล',
          })
        })
        .finally(() => {
          this.isLoading.hide()
        })
    },
    copyAffiliate: function (target) {
      this.$refs[target].select()
      document.execCommand('copy')
      this.$toast.global.success({
        message: 'คัดลอกลงคลิปบอร์ดแล้ว',
      })
    },
    copyUser: function (target) {
      document.getElementById('cbc1').style.display = 'none'
      document.getElementById('cbc2').style.display = 'block'
      setTimeout(function () {
        document.getElementById('cbc2').style.display = 'none'
        document.getElementById('cbc1').style.display = 'block'
      }, 2400)
      this.$refs[target].select()
      document.execCommand('copy')
      this.$toast.global.success({
        message: 'คัดลอกลงคลิปบอร์ดแล้ว',
      })
    },
  },
}
</script>

<style>
.tooltip {
  font-family: 'Kanit', sans-serif;
}

.tooltip-inner {
  max-width: 350px;
  padding: 0.25rem 0.5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 0.25rem;
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
  content: 'รับโปร';
  padding-left: 0px;
  background-color: #34c251;
  color: #ffffff;
}

.onoffswitch-inner:after {
  content: 'ไม่รับโปร';
  padding-right: 15px;
  background-color: #eeeeee;
  color: #ec1415;
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
  right: 68px;
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
</style>
