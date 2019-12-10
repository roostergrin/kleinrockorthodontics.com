<template lang="pug" src="./custom-why-reviews.pug"></template>

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
    activeReview () {
      return this.props.reviews[this.activeIndex]
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
