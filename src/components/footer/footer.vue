<template lang="pug" src="./footer.pug"></template>

<script>
import { redirectAndScroll } from '@/shared/functionality/mixins'
export default {
  mixins: [redirectAndScroll],
  computed: {
    props () {
      return this.$store.state.app.footer
    }
  },
  methods: {
    redirectToContactForm () {
      const { path } = this.$route

      if (path === '/contact-us') {
        this.$store.dispatch('VIEW_NAV_DRAWER', false)
        this.scrollToElement('#contact-form')
      } else {
        this.redirectAndScroll('contact-us', '#contact-form')
      }
    }
  }
}
</script>
