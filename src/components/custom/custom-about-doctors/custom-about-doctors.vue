<template lang="pug" src="./custom-about-doctors.pug"></template>

<script>
import BlockTitle from '@/components/block/block-title/block-title'
import BlockRows from '@/components/block/block-content-rows/block-content-rows'

export default {
  props: {
    props: {
      type: Object
    }
  },
  computed: {
    mission () {
      return this.props.mission
    },
    doctors () {
      return this.props.doctors
    },
    animationState () {
      // console.log(this.$store.state.animationState['about-doctors'])
      return this.$store.state.animationState['about-doctors']
    }
  },
  components: {
    BlockTitle,
    BlockRows
  }
}
</script>
