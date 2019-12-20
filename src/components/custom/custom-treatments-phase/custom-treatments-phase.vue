<template lang="pug" src="./custom-treatments-phase.pug"></template>

<script>
import BlockTitle from '@/components/block/block-title/block-title'

export default {
  props: {
    props: {
      type: Object
    }
  },
  computed: {
    animationState () {
      return this.$store.state.animationState['treatments-phase']
    }
  },
  components: {
    BlockTitle
  }
}
</script>
