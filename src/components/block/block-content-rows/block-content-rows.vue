<template lang="pug" src="./block-content-rows.pug"></template>

<script>
export default {
  props: {
    props: {
      type: Object
    }
  },
  computed: {
    images () {
      return this.props.images
    },
    paragraphs () {
      return this.props.paragraphs
    }
  }
}
</script>
