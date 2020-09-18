import Vue from 'vue'
import VueLazyload from "vue-lazyload";
import { IconsPlugin } from 'bootstrap-vue'
Vue.use(IconsPlugin)
Vue.use(VueLazyload, {
  preLoad: 0,
  attempt: 3,
  listenEvents: ["scroll"],
});