import Vue from 'vue'

Vue.filter('formatDate', (date) => {
  if (!date) return ''
  let _d = new Date(date)
  let y = _d.getFullYear()
  let m = _d.getMonth() + 1
  let d = _d.getDate()
  let h = _d.getHours()
  let mn = _d.getMinutes()
  let s = _d.getSeconds()
  return `${y}-${('0' + m).slice(-2)}-${('0' + d).slice(-2)} ${('0' + h).slice(
    -2
  )}:${('0' + mn).slice(-2)}:${('0' + s).slice(-2)}`
})

Vue.filter('currency', (value) => {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
  }).format(value || 0)
})

Vue.filter('currency', (value) => {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
  }).format(value || 0)
})
