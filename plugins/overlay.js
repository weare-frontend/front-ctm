import Vue from 'vue'
// Import component
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'
// Init plugin
Vue.use(Loading, {
  color: '#fff',
  loader: 'dots',
  width: 100,
  height: 100,
  backgroundColor: '#000',
  opacity: 0.7,
  zIndex: 9999,
})

// export default function ({ $axios, redirect }) {
//   var loading
//   $axios.onRequest((config) => {
//     if (process.client) {
//       loading = Vue.$loading.show({
//         // Optional parameters
//         container: null,
//       })
//     }
//   })
//   $axios.onError((error) => {
//     if (process.client) {
//       loading.hide()
//     }
//   })
//   $axios.onResponse((error) => {
//     if (process.client) {
//       loading.hide()
//     }
//   })
// }
