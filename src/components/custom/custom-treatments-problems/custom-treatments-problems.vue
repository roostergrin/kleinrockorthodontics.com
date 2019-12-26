<template lang="pug" src="./custom-treatments-problems.pug"></template>

<script>
import BlockTitle from '@/components/block/block-title/block-title'

export default {
  props: {
    props: {
      type: Object
    }
  },
  created () {
    this.counter = setInterval(() => {
      this.updateIndex('increment')
    }, this.timeout)
  },
  data: () => ({
    counter: null,
    timeout: 6000,
    activeIndex: 0
  }),
  computed: {
    activeProblem () {
      return this.props.problems[this.activeIndex]
    }
  },
  methods: {
    jumpToIndex (index) {
      clearInterval(this.counter)
      this.counter = setInterval(() => {
        this.updateIndex('increment')
      }, this.timeout)
      this.activeIndex = index
    },
    updateIndex (str) {
      const increment = () => {
        if (this.activeIndex === this.props.problems.length - 1) {
          this.activeIndex = 0
        } else {
          this.activeIndex++
        }
      }
      const decrement = () => {
        if (this.activeIndex === 0) {
          this.activeIndex = this.props.problems.length - 1
        } else {
          this.activeIndex--
        }
      }
      str === 'increment' ? increment() : decrement()
    }
  },
  components: {
    BlockTitle
  }
}
</script>
