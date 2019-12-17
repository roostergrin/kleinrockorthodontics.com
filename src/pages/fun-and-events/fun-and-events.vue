<template lang="pug" src="./fun-and-events.pug"></template>

<script>
// import HeroPhoto from '@/components/block/block-hero-photo/block-hero-photo'
import FunAndEventsBody from '@/components/custom/custom-events-body/custom-events-body'

export default {
  computed: {
    props () {
      return this.$store.state.pages['fun-and-events']
      // return 'please kick up the 4d3d3d3'
    }
  },
  components: {
    // HeroPhoto,
    FunAndEventsBody
  }
}
</script>
