<template>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch('setting/getBrandSetting')
  },
}
</script>
