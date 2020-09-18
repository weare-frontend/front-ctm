<template>
<div style="margin-top:110px">
    <h4 class="text-white text-center">ประวัติฝาก-ถอนเงิน</h4>
    <div class="container">
        <div class="col" style="background-color: rgb(8 6 27 / 27%)">
            <div class="text-left">
                <b-tabs content-class="mt-3" align="center">
                    <b-tab title="รายการฝากเงิน">
                        <div v-if="depositArray.length > 0">
                            <b-table id="my-table" :items="depositArray" :fields="fields" :per-page="perPage" :current-page="DepositCurrentPage" small class="text-white" borderless>
                                <template v-slot:cell(index)="data">
                                    <div class="row" style="margin:5px 0;border-radius: 10px;border: solid 1px #666;">
                                        <div class="col-6 pt-2 text-left">
                                            <div class="form-group">
                                                <span class="text-white">ฝากเงิน</span>
                                                <div class="text-mute text-secondary" style="font-weight: 100;">
                                                    <small>{{dateHistory(data.item.created_at)}}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 text-white text-right pt-2">
                                            <div class="form-group">
                                                <span class="text-white">{{formatToPrice(data.item.amountDeposit)}}</span>
                                                <div :class="{'text-info': data.item.status=='pending','text-success': data.item.status=='successful','text-danger': data.item.status=='canceled'}">
                                                    <small v-text="data.item.status=='pending' ? 'รอดำเนินการ' : (data.item.status=='successful' ? 'ทำรายการสำเร็จ' : 'ยกเลิก')"> {{data.item.status}}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </b-table>
                            <b-pagination v-model="DepositCurrentPage" :total-rows="depositRows" :per-page="perPage" align="center"> </b-pagination>
                        </div>
                        <div class="row" style="margin:5px 0;border-radius: 0px;" v-else>
                            <div class="col pt-2 pb-2 text-center text-white">
                                <i class="text-muted fa fa-history fa-4x"></i>
                                <p class="text-muted mt-2 mb-0">ไม่มีรายการฝากเงิน</p>
                                <small class="text-muted">หากมีรายการ รายการไม่แสดงโปรดแจ้งพนักงาน</small>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="รายการถอนเงิน">
                        <div v-if="withdrawArray.length">
                            <b-table id="my-table" :items="withdrawArray" :fields="fields" :per-page="perPage" :current-page="WithdrawCurrentPage" small class="text-white" borderless>
                                <template v-slot:cell(index)="data">
                                    <div class="row" style="margin:5px 0;border-radius: 10px; border: solid 1px #666;">
                                        <div class="col-6 pt-2 text-left">
                                            <div class="form-group">
                                                <span class="text-white">ถอนเงิน</span>
                                                <div class="text-mute text-secondary" style="font-weight: 100;">
                                                    <small>{{dateHistory(data.item.created_at)}}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 text-white text-right pt-2">
                                            <div class="form-group">
                                                <span class="text-white">{{formatToPrice(data.item.amountWithdraw)}}</span>
                                                <div :class="{'text-info': data.item.status=='pending','text-success': data.item.status=='successful','text-danger': data.item.status=='canceled'}">
                                                    <small v-text="data.item.status=='pending' ? 'รอดำเนินการ' : (data.item.status=='successful' ? 'ทำรายการสำเร็จ' : 'ยกเลิก')"> {{data.item.status}}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </b-table>
                            <b-pagination v-model="WithdrawCurrentPage" :total-rows="withdrawRows" :per-page="perPage" align="center"> </b-pagination>
                        </div>
                        <div class="row" style="margin:5px 0;border-radius: 0px;" v-else>
                            <div class="col pt-2 pb-2 text-center text-white">
                                <i class="text-muted fa fa-history fa-4x"></i>
                                <p class="text-muted mt-2 mb-0">ไม่มีรายการถอนเงิน</p>
                                <small class="text-muted">หากมีรายการ รายการไม่แสดงโปรดแจ้งพนักงาน</small>
                            </div>
                        </div>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    layout: 'defaultPage',
    data() {
        return {
            perPage: 4,
            DepositCurrentPage: 1,
            WithdrawCurrentPage: 1,
            fields: [{
                key: 'index',
                label: '',
                class: 'text-center'
            }, ],
        }
    },
    async asyncData({ $axios, route }) {
        const historyArray = await $axios.$get("/api/history");
        const depositArray = historyArray.deposit ? historyArray.deposit : [];
        const withdrawArray = historyArray.withdraw ? historyArray.withdraw : [];
        return {
            historyArray,
            depositArray,
            withdrawArray
        }
    },
    methods: {
        addZero: function (i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        },
        dateHistory: function (date) {
            let current_datetime = new Date(date)
            var m = this.addZero(current_datetime.getMonth() +1);
            var d = this.addZero(current_datetime.getDate());
            var h = this.addZero(current_datetime.getHours());
            var m = this.addZero(current_datetime.getMinutes());
            var s = this.addZero(current_datetime.getSeconds());
            let formatted_date = current_datetime.getFullYear() + "-" + m + "-" + d + " " +  h + ":" + m + ":" + s
            return formatted_date;
        },
        formatToPrice(value) {
            return new Intl.NumberFormat().format(value);
        },
    },
    computed: {
        withdrawRows() {
            return this.withdrawArray.length
        },
        depositRows() {
            return this.depositArray.length
        }
    }
}
</script>

<style>
.b-pagination a.active {
    background-color: #4CAF50;
    color: white;
}

a {
    color: #fff;
}

a:hover {
    color: #fff;
}
</style>
