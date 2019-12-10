<template lang="pug" src="./nav-desktop.pug"></template>

<script>
export default {
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
    }
  }
}
</script>
