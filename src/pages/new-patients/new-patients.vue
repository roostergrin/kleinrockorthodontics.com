<template lang="pug" src="./new-patients.pug"></template>

<script>
import HeroPhoto from '@/components/block/block-hero-photo/block-hero-photo'
import PatientsVisit from '@/components/custom/custom-patients-visit/custom-patients-visit'
import PatientsForms from '@/components/custom/custom-patients-forms/custom-patients-forms'
import PatientsFinance from '@/components/custom/custom-patients-finance/custom-patients-finance'
import PatientsContact from '@/components/custom/custom-patients-contact/custom-patients-contact'

export default {
  computed: {
    props () {
      return this.$store.state.pages['new-patients']
    }
  },
  components: {
    HeroPhoto,
    PatientsVisit,
    PatientsForms,
    PatientsFinance,
    PatientsContact
  }
}
</script>
