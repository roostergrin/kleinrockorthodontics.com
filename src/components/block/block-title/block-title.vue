<template lang="pug" src="./block-title.pug"></template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  computed: {
    titleWords () {
      return this.title.split(' ')
    }
  }
}
</script>
