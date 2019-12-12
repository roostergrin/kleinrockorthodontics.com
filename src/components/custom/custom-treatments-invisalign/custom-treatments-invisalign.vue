<template lang="pug" src="./custom-treatments-invisalign.pug"></template>

<script>
import BlockRows from '@/components/block/block-content-rows/block-content-rows'

export default {
  props: {
    props: {
      type: Object
    }
  },
  data: () => ({
    activeIndex: 0
  }),
  computed: {
    activeSection () {
      const sections = this.props.invisalign_types

      return sections[this.activeIndex]
    }
  },
  methods: {
    updateIndex (index) {
      this.activeIndex = index
    }
  },
  components: {
    BlockRows
  }
}
</script>
