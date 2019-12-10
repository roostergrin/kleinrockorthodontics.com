<template lang="pug" src="./custom-home-testimonials.pug"></template>

<script>
import BlockTitle from '@/components/block/block-title/block-title'

export default {
  props: {
    props: {
      type: Object
    }
  },
  data: () => ({
    currentIndex: 0
  }),
  computed: {
    activeTestimonial () {
      return this.props.testimonials[this.currentIndex]
    }
  },
  methods: {
    updateIndex (index) {
      this.currentIndex = index
    }
  },
  components: {
    BlockTitle
  }
}
</script>
