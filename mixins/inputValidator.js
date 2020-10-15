export default {
  methods: {
    checkNumber($event) {
      const letters = /[0-9]/
      if ($event.key.match(letters)) {
        return true
      } else {
        $event.preventDefault()
      }
    },
    checkDecimal($event) {
      const letters = /[0-9\\.]/
      if ($event.key.match(letters)) {
        return true
      } else {
        $event.preventDefault()
      }
    },
  },
}
