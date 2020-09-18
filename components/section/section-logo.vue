<template>
<div class="container" data-aos="fade-up">
    <div class="row justify-content-center px-2 py-2">
      <div class="col-3 col-lg mb-3 text-center px-1 game-items" v-for="(item, i) in 4" :index="i" :key="i">
        <b-img-lazy  
          class="game-logo"
          :src="require(`@/assets/img/SECTION_ICON/ICON-${i+1}.png`)" alt=""></b-img-lazy>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.game-logo {
  min-width: 50px;
  max-width: 100px;
  width: 100%;
}
</style>

