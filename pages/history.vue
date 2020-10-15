<template>
<div style="margin-top:110px">
    <h4 class="text-white text-center">ประวัติฝาก-ถอนเงิน</h4>
    <div class="container">
        <div class="col" style="background-color: rgb(8 6 27 / 27%)">
            <div class="text-left">
                <b-tabs content-class="mt-3" align="center">
                    <b-tab title="รายการฝากเงิน">
                        <div v-if="depositData.length > 0">
                            <b-table id="my-table" :items="depositData" :fields="fields" :per-page="perPage" small class="text-white" borderless>
                                <template v-slot:cell(index)="data">
                                    <div class="row" style="margin:5px 0;border-radius: 10px;border: solid 1px #666;">
                                        <div class="col-6 pt-2 text-left">
                                            <div class="form-group">
                                                <span class="text-white">ฝากเงิน</span>
                                                <div class="text-mute text-secondary" style="font-weight: 100;">
                                                    <small>{{data.item.createdAt | formatDate}}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 text-white text-right pt-2">
                                            <div class="form-group">
                                                <span class="text-white">{{data.item.money | currency}}</span>
                                                <div  :class="transactionStatus(data.item.status).class">
                                                    <small> {{transactionStatus(data.item.status).text}}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </b-table>
                            <b-pagination v-model="depositCurrentPage" :total-rows="depositRows" :per-page="perPage" align="center"> </b-pagination>
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
                        <div v-if="withdrawData.length > 0">
                            <b-table id="my-table" :items="withdrawData" :fields="fields" :per-page="perPage"  small class="text-white" borderless>
                                <template v-slot:cell(index)="data">
                                    <div  class="row" style="margin:5px 0;border-radius: 10px; border: solid 1px #666;">
                                        <div class="col-6 pt-2 text-left">
                                            <div class="form-group">
                                                <span class="text-white">ถอนเงิน</span>
                                                <div class="text-mute text-secondary" style="font-weight: 100;">
                                                    <small>{{data.item.createdAt | formatDate}}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 text-white text-right pt-2">
                                            <div class="form-group">
                                                <span class="text-white">{{ (data.item.accept_status === 2 ? data.item.withdraw : data.item.money) | currency }}</span>
                                                <div :class="transactionStatus(data.item.accept_status).class">
                                                    <small> {{transactionStatus(data.item.accept_status).text}}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </b-table>
                            <b-pagination v-model="withdrawCurrentPage" :total-rows="withdrawRows" :per-page="perPage" align="center"  > </b-pagination>
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
const pageLimit = process.env.PAGE_LIMIT
const API_URL = {
  withdraw: '/api/players-withdraw?$sort[createdAt]=-1&accept_status[$ne]=0',
  deposit: '/api/players-deposit-history?$sort[createdAt]=-1',
}
export default {
  layout: 'defaultPage',
  data() {
    return {
      baseURL: {},
      perPage: pageLimit,
      depositCurrentPage: 1,
      withdrawCurrentPage: 1,
      fields: [
        {
          key: 'index',
          label: '',
          class: 'text-center',
        },
      ],
    }
  },
  async asyncData({ $axios, route }) {
    let withdraw, deposit
    try {
      deposit = await $axios.$get(API_URL.deposit, {
        params: {
          $limit: pageLimit,
          $skip: 0,
        },
      })
      withdraw = await $axios.$get(API_URL.withdraw, {
        params: {
          $limit: pageLimit,
          $skip: 0,
        },
      })
    } catch (error) {}
    return {
      deposit,
      withdraw,
    }
  },
  created() {
    let user = this.$store.state.player
    let userL = this.$store.getters['player/option']
    console.log('state: ', user)
    console.log('getters: ', userL)
  },
  methods: {
    fetchWithdraw(page) {
      page = (page - 1) * this.perPage
      this.$axios
        .$get(API_URL.withdraw, {
          params: {
            $limit: this.perPage,
            $skip: page,
            $sort: {
              createdAt: -1,
            },
          },
        })
        .then((res) => (this.withdraw = res))
    },
    fetchDeposit(page) {
      page = (page - 1) * this.perPage
      this.$axios
        .$get(API_URL.deposit, {
          params: {
            $limit: this.perPage,
            $skip: page,
            $sort: {
              createdAt: -1,
            },
          },
        })
        .then((res) => (this.deposit = res))
    },
    transactionStatus(acceptStatus) {
      let status = {
        text: '',
        class: '',
      }
      switch (acceptStatus) {
        case 0:
          status = {
            text: 'ไม่อนุมัติ',
            class: 'text-danger',
          }
          break
        case 1:
          status = {
            text: 'ทำรายการสำเร็จ',
            class: 'text-success',
          }
          break
        case 2:
          status = {
            text: 'รอดำเนินการ',
            class: 'text-warning',
          }
          break

        default:
          break
      }
      return status
    },
  },
  watch: {
    depositCurrentPage() {
      this.fetchDeposit(this.depositCurrentPage)
    },
    withdrawCurrentPage() {
      this.fetchWithdraw(this.withdrawCurrentPage)
    },
  },
  computed: {
    depositData() {
      console.log(this.deposit)
      return this.deposit ? this.deposit.data : []
    },
    withdrawData() {
      return this.withdraw ? this.withdraw.data : []
    },
    withdrawRows() {
      return this.withdraw.total
    },
    depositRows() {
      return this.deposit.total
    },
  },
}
</script>

<style>
.b-pagination a.active {
  background-color: #4caf50;
  color: white;
}

a {
  color: #fff;
}

a:hover {
  color: #fff;
}
.page-link {
  background-color: #fff0;
  border: 1px solid #666666;
}
.page-item.disabled .page-link {
  background-color: #fff0;
  border-color: #666666;
}
.page-item.active .page-link {
  color: #fff;
  background-color: #007bff !important;
  border-color: #007bff !important;
}
</style>
