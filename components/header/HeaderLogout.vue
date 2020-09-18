<template>
<div class="row">
    <div class="col-12 headerLogout text-center py-3">
        <nuxt-link :to="{patch : '/'}" class="text-center">
            <b-img class="headerLogout-img" :src="require(`@/assets/img/SECTION_HEADER_LOGO/IMG-LOGO-5.png`)" style="margin-top:-11px"></b-img>
        </nuxt-link>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            HOST: process.env.API,
        }
    }
}
</script>

<style>
.headerLogout {
    background: rgba(0, 0, 0, 0.46);
    width: 100%;
    height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    transition: all ease 0.5s;
    -webkit-transition: all ease 0.5s;
    -moz-transition: all ease 0.5s;
    -ms-transition: all ease 0.5s;
    -webkit-backdrop-filter: saturate(125%) blur(10px);
    -moz-backdrop-filter: saturate(125%) blur(10px);
    -ms-backdrop-filter: saturate(125%) blur(10px);
    backdrop-filter: saturate(125%) blur(10px);
}

.headerLogout-img {
    max-width: 200px;
    max-height: 100px;
}

@media only screen and (max-width: 480px) {
    .headerLogout-img {
         max-width: 150px;
        max-height: 75px;
    }
}

@media only screen and (min-width: 920px) {
    .headerLogout-img {
        max-width: 250px;
        max-height: 90px;
    }
}
</style>
