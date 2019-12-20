<template lang="pug" src="./nav-desktop.pug"></template>

<script>
import { scrollToElement, redirectAndScroll } from '@/shared/functionality/mixins'
export default {
  mixins: [scrollToElement, redirectAndScroll],
  props: {
    props: {
      type: Object
    },
    links: {
      type: Array
    }
  },
  computed: {
    phone () {
      return this.props.nav_info.phone
    },
    logo () {
      return this.props.nav_info.logo
    },
    navState () {
      return this.$store.state.navState
    },
    activeRoute () {
      return this.$route.name
    }
  },
  methods: {
    redirectHome () {
      this.$router.push('/')
    },
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
