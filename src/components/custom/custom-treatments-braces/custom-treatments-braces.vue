<template lang="pug" src="./custom-treatments-braces.pug"></template>

<script>
import BlockTitle from '@/components/block/block-title/block-title'

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
      return this.props.types[this.activeIndex]
    },
    activeImages () {
      return this.activeSection.images
    }
  },
  methods: {
    updateIndex (index) {
      this.activeIndex = index
    }
  },
  components: {
    BlockTitle
  }
}
</script>
