<template>
<div>
    <div  data-aos="fade-up" class="row mx-0" :style="'background-image:url('+require(`@/assets/img/SECTION_JACKPOT/BG-JACKPOT.png`)+');background-position: center top;background-size: cover;background-repeat: no-repeat;'">
        <div class="col-12 jackpot">
            <carousel-3d :display="3" :autoplay="true" :autoplay-timeout="2400" :height="350" :width="350">
                <slide v-for="(item, i) in 3" :index="i" :key="i">
                    <b-img-lazy :src="require(`@/assets/img/SECTION_JACKPOT/JACKPOT-${i+1}.jpg`)" class="w-100" alt="jakpot bonus"> </b-img-lazy>
                </slide>
            </carousel-3d>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
