<template lang="pug" src="./contact-us.pug"></template>

<script>
import HeroPhoto from '@/components/block/block-hero-photo/block-hero-photo'
import ContactForm from '@/components/custom/custom-contact-form/custom-contact-form'
import ContactLocations from '@/components/custom/custom-contact-locations/custom-contact-locations'

export default {
  computed: {
    props () {
      return this.$store.state.pages['contact-us']
    }
  },
  components: {
    HeroPhoto,
    ContactForm,
    ContactLocations
  }
}
</script>
