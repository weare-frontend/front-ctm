<template>
  <img
    :style="{ 
      backgroundColor: bankObject ? bankObject.color : '#E5E5E5',
      padding: padding,
      borderRadius: borderRadius,
    }"
    class="img-fluid"
    :src="src"
    :alt="`Logo ${shortName} bank`"
    srcset=""
    :width="width"
    :height="height"
  />
</template>

<script>
import banksJson from '~/assets/img/IMG_LOGOBANK/banks'
export default {
  props: {
    shortName: {
      type: String,
      required: true,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    padding: {
      type: String,
      default: '10px',
    },
    borderRadius: {
      type: String,
      default: '10px',
    },
  },
  data: () => ({
    banksJson,
    bankObject: null,
  }),
  computed: {
    src() {
      let bank, fileName
      bank = Object.keys(banksJson.th).find((v) => v === this.shortName)
      if (bank) {
        this.bankObject = banksJson.th[bank]
        return require(`@/assets/img/IMG_LOGOBANK/th/${bank}.svg`)
      } else {
        return require(`@/assets/img/IMG_LOGOBANK/default.png`)
      }
    },
  },
}
</script>
