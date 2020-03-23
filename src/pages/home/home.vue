<template lang="pug" src="./home.pug"></template>

<script>
import HeroVideo from '@/components/block/block-hero-video/block-hero-video'
import HomeWelcome from '@/components/custom/custom-home-welcome/custom-home-welcome'
import HomeWhy from '@/components/custom/custom-home-why/custom-home-why'
import HomeInvisalign from '@/components/custom/custom-home-invisalign/custom-home-invisalign'
import HomeDoctors from '@/components/custom/custom-home-doctors/custom-home-doctors'
import HomeTestimonials from '@/components/custom/custom-why-reviews/custom-why-reviews'
import CovidMobileBanner from '@/components/custom/custom-mobile-covid-banner/custom-mobile-covid-banner'

export default {
  computed: {
    props () {
      return this.$store.state.pages.home
    }
  },
  components: {
    CovidMobileBanner,
    HeroVideo,
    HomeWelcome,
    HomeWhy,
    HomeInvisalign,
    HomeDoctors,
    HomeTestimonials
  }
}
</script>
