<template>
<div>
    <client-only>
        <!-- <div class="snowfall">
            <div class="snowflake" v-for="(item, i) in 10" :index="i" :key="i"><span class="small text-white">❅</span>️️</div>
        </div> -->
        <div class="snowflakes">
            <div class="snowflake" v-for="(item, i) in 20" :index="i" :key="i">
                ❅ 
            </div>
        </div>
        <page-header-login v-if="$auth.user"></page-header-login>
        <page-header-logout v-else></page-header-logout>
        <Nuxt />
        <page-body></page-body>
        <comments-placeholder slot="placeholder">
            <div style="margin: 0 auto;min-height: 100vh;display: flex;justify-content: center;align-items: center;text-align: center;">
                <b-spinner class="mx-1" variant="light" type="grow" label="Spinning"></b-spinner>
                <b-spinner class="mx-1" variant="danger" type="grow" label="Spinning"></b-spinner>
                <b-spinner class="mx-1" variant="light" type="grow" label="Spinning"></b-spinner>
                <b-spinner class="mx-1" variant="danger" type="grow" label="Spinning"></b-spinner>
            <!-- <img src="https://i.pinimg.com/originals/91/ae/56/91ae5683045f6dbef16b1482bade938f.png" width="100px" alt="" srcset=""> -->
            </div>
        </comments-placeholder>
    </client-only>
</div>
</template>

<script>
import HeaderLogout from "~/components/header/HeaderLogout.vue";
import HeaderLogin from "~/components/header/HeaderLogin.vue";
import Body from "~/layouts/Body.vue";
export default {
  components: {
    "page-header-logout": HeaderLogout,
    "page-header-login": HeaderLogin,
    "page-body": Body,
  },
  data() {
    return {};
  },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
