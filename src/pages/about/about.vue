<template lang="pug" src="./about.pug"></template>

<script>
import HeroPhoto from '@/components/block/block-hero-photo/block-hero-photo'
import AboutDoctors from '@/components/custom/custom-about-doctors/custom-about-doctors'
import AboutStaff from '@/components/custom/custom-about-staff/custom-about-staff'
import AboutOffices from '@/components/custom/custom-about-offices/custom-about-offices'

import { activateAnimation } from '@/shared/functionality/mixins'

export default {
  mixins: [activateAnimation],
  data: () => ({
    thresholdOptions: {
      threshold: [0.10, 0.90]
    }
  }),
  computed: {
    props () {
      return this.$store.state.pages.about
    }
  },
  components: {
    HeroPhoto,
    AboutDoctors,
    AboutStaff,
    AboutOffices
  }
}
</script>
