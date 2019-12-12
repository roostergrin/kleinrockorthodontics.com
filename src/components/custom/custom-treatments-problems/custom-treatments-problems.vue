<template lang="pug" src="./custom-treatments-problems.pug"></template>

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
    activeProblem () {
      return this.props.problems[this.activeIndex]
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
