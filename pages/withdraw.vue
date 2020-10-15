<template>
<div style="margin-top:110px">
    <div class="container">
        <b-card-text>
            <div class="row justify-content-center">
                <div class="col-12">
                    <h4 class="text-center text-white">ถอนเงิน</h4>
                    <b-input-group prepend="จำนวนเงิน" append="บาท">
                        <input type="number" v-model="amount" class="text-right" placeholder="0" @keypress="checkDecimal" />
                    </b-input-group>
                    <b-button class="btn btn-md btn-success btn-block shadow mt-3" :disabled="!validAmount" v-b-modal.modal-confirm>
                        <span>แจ้งถอนเงิน</span>
                    </b-button>
                </div>
            </div>
        </b-card-text>
        <b-modal id="modal-confirm" ref="modal-confirm" class="my-2" centered no-close-on-backdrop>
            <template v-slot:modal-header="{ close }">
                <span class="text-center w-100">ยืนยันถอนเงิน</span>
            </template>
            <div class="text-center">
                <i class="fa fa-exclamation-circle text-warning fa-5x" aria-hidden="true"></i>
            </div>
            <div class="text-center mt-2">
                <span>ต้องการถอนเงินใช่หรือไม่ ?</span>
            </div>
            <template v-slot:modal-footer="{ cancel }">
                <div class="row w-100 justify-content-center">
                    <div class="col-6">
                        <b-button type="button" class="btn bg-white btn-block btn-outline-secondary" @click="$bvModal.hide('modal-confirm')">ยกเลิก</b-button>
                    </div>
                    <div class="col-6">
                        <b-button type="button" class="btn btn-block bg-dark text-white" :disabled="isLoading" @click="confrimWithdraw">ยืนยัน</b-button>
                    </div>
                </div>
            </template>
        </b-modal>
    </div>
</div>
</template>

<script>
import inputValidator from '@/mixins/inputValidator'
export default {
  layout: 'defaultPage',
  mixins: [inputValidator],
  head() {
    return {
      title: 'Withdraw',
    }
  },
  data: () => ({
    amount: '',
    minimum: 10,
    isLoading: false,
  }),
  computed: {
    validAmount() {
      return this.amount != '' && this.amount >= this.minimum
    },
  },
  methods: {
    showModalWithdraw: function (params) {
      this.$bvModal.show('modal-confirm')
    },
    confrimWithdraw() {
      if (this.validAmount) {
        this.isLoading = true
        this.$axios
          .$post('/api/players-withdraw', {
            amount: this.amount,
            agents_id: this.$auth.user.player_games[0].agents_id,
            account_api: this.$auth.user.player_games[0].account_api,
          })
          .then((res) => {
            this.$toast.global.success({ message: 'ดำเนินการแจ้งถอนสำเร็จ' })
            this.$auth.fetchUser()
            this.amount = ''
          })
          .catch((err) => {
            const { data } = err.response
            this.$toast.global.error({ message: data.message })
          })
          .finally(() => {
            this.$bvModal.hide('modal-confirm')
            this.isLoading = false
          })
      }
    },
  },
}
</script>
