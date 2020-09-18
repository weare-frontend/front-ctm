<template>
<div style="margin-top:110px">
    <div class="container">
        <b-card-text>
            <div class="row justify-content-center">
                <div class="col-12">
                    <h4 class="text-center text-white">ฝากเงิน</h4>
                    <h6 class="subtitle" style="margin-top: 1px; margin-bottom: 5px;">
                        <u style="color: #FFF;">กรุณาใช้บัญชีที่ท่านสมัครโอนมาเท่านั้น</u>
                        <small class="text-center d-block text-danger">** ระบบจะเติมเครดิตให้อัตโนมัติ ภายใน 1-2 นาทีหลังการโอนเงิน</small>
                    </h6>
                </div>
            </div>
        </b-card-text>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="list-group list-group-flush mb-3" style="border-radius: 10px;border: solid 1px #444;background: rgba(0,0,0,0.2);" v-for="(item,index) in bankList" :key="index">
                    <a class="list-group-item border-top text-dark click-active" style="border-radius: 10px;background: rgba(0,0,0,0);">
                        <div class="row">
                            <div class="col-2">
                                <b-img class="logo-bank" rounded :src="getImageLogoBank(item.bank.prefix)" fluid></b-img>
                            </div>
                            <div class="col-7 text-left" style="line-height: .8em; font-weight:100;">
                                <div class="m-0 text-white text-right text-label mt-2">
                                    เลขบัญชี :
                                </div>
                                <div class="text-white text-left text-value mt-2">
                                    {{item.accountNumber}}
                                </div>
                                <div class="m-0 text-white text-right text-label">
                                    ชื่อบัญชี :
                                </div>
                                <div class="text-white text-left text-value">
                                    {{item.accountName}}
                                </div>
                                <div class="m-0 text-white text-right text-label">
                                    ธนาคาร :
                                </div>
                                <div class="text-white text-left text-value">
                                    {{item.bank.description}}
                                </div>
                            </div>
                            <div class="col-3 pl-0 mt-2" @click="copyBank(item.accountNumber)">
                                <p style="line-height: .8em; padding:6px;border:solid 1px #ccc;border-radius:6px;color:#ddd; cursor:pointer;">
                                    คัดลอก
                                    <br />
                                    <small>เลขบัญชี</small>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    layout: 'defaultPage',
    head() {
        return {
            title: "Deposit"
        };
    },
    data() {
        return {
            logoBank: [{
                    prefix: "scb",
                    image: require("~/assets/img/IMG_LOGOBANK/scb.png")
                },
                {
                    prefix: "bay",
                    image: require("~/assets/img/IMG_LOGOBANK/bay.png")
                },

                {
                    prefix: "bkk",
                    image: require("~/assets/img/IMG_LOGOBANK/bkk.png")
                },
                {
                    prefix: "kbank",
                    image: require("~/assets/img/IMG_LOGOBANK/kbank.png")
                },
            ]
        }
    },
    async asyncData({ $axios, route }) {
        const bankArray = await $axios.$get("/api/bank");
        const bankList = bankArray.list ? bankArray.list : [];
        return {
            bankArray,
            bankList
        }
    },
    methods: {
        getImageLogoBank: function (prefix) {
            let logoBank = this.logoBank.find(item => {
                return item.prefix == prefix
            });
            return logoBank.image
        },
        copyBank: async function (text) {
            var textInput = document.createElement("input");
            textInput.type = "text";
            textInput.value = text;
            document.body.appendChild(textInput);
            textInput.select();
            document.execCommand("copy");
            await textInput.remove();
            this.$toast.global.success({
                message: "คัดลอก " + text + " ลงคลิปบอร์ดแล้ว",
            });
        },
    }

}
</script>

<style>
.text-label {
    width: 30%;
    float: left;
    font-size: 10px;
}

.text-value {
    width: 70%;
    float: right;
    font-size: 13px;
    padding-left: 2px;
}

.logo-bank {
    max-width: 100px;
    max-height: 80px;
}

@media only screen and (max-width: 700px) {
    .logo-bank {
        max-width: 60px;
        max-height: 60px;
    }
}

@media only screen and (min-width: 920px) {
    .logo-bank {
        max-width: 100px;
        max-height: 80px;
    }
}
</style>
