<template lang="pug" src="./why-us.pug"></template>

<script>
import HeroPhoto from '@/components/block/block-hero-photo/block-hero-photo'
import WhyValue from '@/components/custom/custom-why-value/custom-why-value'
import WhyResults from '@/components/custom/custom-why-results/custom-why-results'
import WhyReviews from '@/components/custom/custom-why-reviews/custom-why-reviews'

export default {
  computed: {
    props () {
      return this.$store.state.pages['why-us']
    }
  },
  components: {
    HeroPhoto,
    WhyValue,
    WhyResults,
    WhyReviews
  }
}
</script>
