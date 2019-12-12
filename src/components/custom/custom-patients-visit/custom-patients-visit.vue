<template lang="pug" src="./custom-patients-visit.pug"></template>

<script>
import BlockTitle from '@/components/block/block-title/block-title'

export default {
  props: {
    props: {
      type: Object
    }
  },
  computed: {
    content () {
      return this.props.content
    }
  },
  components: {
    BlockTitle
  }
}
</script>
