<template>
<div class="error">
    <div class="row my-2">
        <div class="col-12 text-center">
            <div class="mb-3">
                <i class="fa fa-exclamation-triangle fa-6x text-white"></i>
            </div>
            <h4 class="text-white mb-3">ERROR 404</h4>
            <nuxt-link to="/">
                <b-button class="btn btn-success">หน้าหลัก</b-button>
            </nuxt-link>
        </div>
    </div>
</div>
</template>

<style>
.error {
    margin: 0 auto;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>
