<template lang="pug" src="./custom-contact-locations.pug"></template>

<script>
import BlockTitle from '@/components/block/block-title/block-title'

export default {
  props: {
    props: {
      type: Object
    }
  },
  computed: {
    locations () {
      return this.props.locations
    }
  },
  components: {
    BlockTitle
  }
}
</script>
