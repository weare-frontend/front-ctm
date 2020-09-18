<template>
<div style="margin-top:110px">
    <div class="container">
        <b-card-text>
            <div class="row justify-content-center">
                <div class="col-12">
                    <h4 class="text-center text-white">ถอนเงิน</h4>
                    <b-input-group prepend="จำนวนเงิน" append="บาท">
                        <b-form-input type="number" v-model="amount" class="text-right" placeholder="0"></b-form-input>
                    </b-input-group>
                    <b-button class="btn btn-md btn-light btn-block shadow mt-3" v-b-modal.modal-confirm>
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
                        <b-button type="button" class="btn btn-block bg-dark text-white" @click="confrimWithdraw">ยืนยัน</b-button>
                    </div>
                </div>
            </template>
        </b-modal>
    </div>
</div>
</template>

<script>
export default {
    layout: 'defaultPage',
    head() {
        return {
            title: "Withdraw"
        };
    },
    data: () => ({
        amount: "",
    }),
    // props: {
    //     showModalWithdraw: Function,
    // },
    methods: {
        showModalWithdraw: function (params) {
            this.$bvModal.show("modal-confirm");
        },
        confrimWithdraw: async function () {
            if (this.amount) {
                try {
                    this.busy = true;
                    const withdraw = await this.$axios.$post("/api/withdraw", { amount: this.amount })
                    this.$toast.global.success({ message: withdraw.message });
                    this.$bvModal.hide("modal-confirm");
                    this.$auth.fetchUser();
                    this.amount = ""
                } catch (error) {
                    const { data } = error.response;
                    this.$toast.global.error({ message: data.message });
                    this.$bvModal.hide("modal-confirm");
                }
            } else {
                this.$toast.global.error({ message: 'กรุณากรอกจำนวนเงิน' });
            }
        },
    }
}
</script>
