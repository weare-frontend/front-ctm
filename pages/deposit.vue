<template>
  <div style="margin-top: 110px">
    <div class="container">
      <b-card-text>
        <div class="row justify-content-center">
          <div class="col-12">
            <h4 class="text-center text-white">ฝากเงิน</h4>
            <h6 class="subtitle" style="margin-top: 1px; margin-bottom: 5px">
              <u class="text-white">กรุณาใช้บัญชีที่ท่านสมัครโอนมาเท่านั้น</u>
              <small class="text-center d-block text-danger mt-1"
                >** ระบบจะเติมเครดิตให้อัตโนมัติ ภายใน 1-2
                นาทีหลังการโอนเงิน</small
              >
            </h6>
          </div>
        </div>
      </b-card-text>
    </div>
    <div class="container bank-list-block">
      <div class="row">
        <div class="col-12">
          <div
            class="list-group list-group-flush mb-3 position-relative"
            v-for="(item, index) in banks.data"
            :key="index"
          >
            <a class="list-group-item border-top text-dark click-active">
              <div class="row">
                <div class="col-2">
                  <icon-bank class="logo-bank" :short-name="item.bank_detail.short_name" /> 
                </div>
                <div class="col-10 text-left pl-4 bank-detail">
                  <div class="m-0 text-white font-weight-light text-label">
                    เลขบัญชี :
                  </div>
                  <div class="text-white text-left text-value">
                    {{ item.bank_account }}
                  </div>
                  <div class="m-0 text-white font-weight-light text-label">
                    ชื่อบัญชี :
                  </div>
                  <div class="text-white text-left text-value">
                    {{ item.account_name }}
                  </div>
                  <div class="m-0 text-white font-weight-light text-label">
                    ธนาคาร :
                  </div>
                  <div class="text-white text-left text-value">
                    {{ item.bank_detail.name  }}
                  </div>
                </div>
                <i
                  class="fas fa-copy text-white cursor-pointer icon-copy"
                  aria-hidden="true"
                  @click="copyBank(item.bank_account)"
                ></i>
                <!-- <div class="col-3 pl-0 mt-2 d-flex align-items-center" @click="copyBank(item.bank_account)">
                <p class="btn-copy">คัดลอก <br /> <small>เลขบัญชี</small></p>
            </div> -->
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconBank from '@/components/global/IconBank'
const API_URL = `/api/agent-banks?status=1&show_status=1`
export default {
  layout: 'defaultPage',
  components: {
    IconBank,
  },
  head() {
    return {
      title: 'Deposit',
    }
  },
  data: () => ({}),
  async asyncData({ $axios, route }) {
    const banks = await $axios.$get(API_URL, {
      params: {
        // agents_id: this.$auth.user.player_games[0].agents_id,
      },
    })
    return {
      banks,
    }
  },
  methods: {
    copyBank: async function (text) {
      var textInput = document.createElement('input')
      textInput.type = 'text'
      textInput.value = text
      document.body.appendChild(textInput)
      textInput.select()
      document.execCommand('copy')
      await textInput.remove()
      this.$toast.global.success({
        message: 'คัดลอก ' + text + ' ลงคลิปบอร์ดแล้ว',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.bank-list-block {
  padding-bottom: 5rem;
}
.list-group {
  border-radius: 10px;
  border: solid 1px #444;
  background: rgba(0, 0, 0, 0.2);
  a {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0);
  }
}
.icon-copy {
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 25px;
  color: #e2e2e2bf;
  cursor: pointer;
}
.btn-copy {
  width: 100%;
  line-height: 0.8em;
  padding: 6px;
  border: solid 1px #ccc;
  border-radius: 6px;
  color: #ddd;
  cursor: pointer;
}
.bank-detail {
  line-height: 1.5rem;
  font-weight: 100;
}
.text-label {
  width: 15%;
  margin-right: 20px;
  float: left;
  font-size: 1rem;
}
.text-value {
  width: 85%;
  float: right;
  padding-left: 2px;
  font-size: 1rem;
}
@media (hover: hover) {
  .text-label {
    font-size: 1rem;
  }
  .text-value {
    font-size: 1rem;
  }
  .subtitle {
    small {
      font-size: 1rem;
    }
  }
  .logo-bank {
    max-height: 90px;
    max-width: 80px;
  }
}
@media (hover: none) and (pointer: coarse) {
  .bank-detail {
    line-height: 1.1rem;
  }
  .text-label {
    font-size: 0.8rem;
  }
  .text-value {
    font-size: 0.8rem;
  }
  .logo-bank {
    max-height: 70px;
    max-width: 60px;
  }
}
@media only screen and (max-width: 700px) {
  .text-label {
    width: 30%;
  }
  .text-value {
    width: 70%;
  }
}
</style>
