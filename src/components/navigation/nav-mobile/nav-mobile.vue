<template lang="pug" src="./nav-mobile.pug"></template>

<script>
import MenuButton from '@/components/block/block-menu-button/block-menu-button'
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
    drawerState () {
      return this.$store.state.navDrawer
    }
  },
  methods: {
    toggleDrawer () {
      this.$store.dispatch('VIEW_NAV_DRAWER', !this.drawerState)
    },
    redirectHome () {
      this.$router.push('/')
      this.$store.dispatch('VIEW_NAV_DRAWER', false)
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
  },
  watch: {
    '$store.state.navDrawer' (state) {
      const body = document.querySelector('body')
      state ? body.style.overflow = 'hidden' : body.style.overflow = 'auto'
    },
    '$route' (to, from) {
      if (to.name !== 'Home') {
        this.$store.dispatch('VIEW_NAV_DRAWER', false)
      }
    }
  },
  components: {
    MenuButton
  }
}
</script>
