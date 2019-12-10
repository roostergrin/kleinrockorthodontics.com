<template lang="pug" src="./block-hero-photo.pug"></template>

<script>
export default {
  props: {
    props: {
      type: Object
    }
  },
  computed: {
    title () {
      return this.props.title
    },
    img () {
      return this.props.img
    }
  }
}
</script>
