<template>
<div>
    <page-header-logout class="headerLogin"></page-header-logout>
     <Nuxt />
</div>
</template>

<script>
import HeaderLogout from "~/components/header/HeaderLogout.vue";
export default {
     components: {
        "page-header-logout": HeaderLogout
    },
    data() {
        return {
        }
    }
}
</script>