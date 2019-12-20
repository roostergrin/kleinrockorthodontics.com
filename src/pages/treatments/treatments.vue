<template lang="pug" src="./treatments.pug"></template>

<script>
import HeroPhoto from '@/components/block/block-hero-photo/block-hero-photo'
import TreatmentsInvisalign from '@/components/custom/custom-treatments-invisalign/custom-treatments-invisalign'
import TreatmentsItero from '@/components/custom/custom-treatments-itero/custom-treatments-itero'
import TreatmentsBraces from '@/components/custom/custom-treatments-braces/custom-treatments-braces'
import TreatmentsPhase from '@/components/custom/custom-treatments-phase/custom-treatments-phase'
import TreatmentsBrushing from '@/components/custom/custom-treatments-brushing/custom-treatments-brushing'
import TreatmentsProblems from '@/components/custom/custom-treatments-problems/custom-treatments-problems'

import { activateAnimation, thresholdOptions } from '@/shared/functionality/mixins'

export default {
  mixins: [activateAnimation, thresholdOptions],
  computed: {
    props () {
      return this.$store.state.pages.treatments
    }
  },
  components: {
    HeroPhoto,
    TreatmentsInvisalign,
    TreatmentsItero,
    TreatmentsBraces,
    TreatmentsPhase,
    TreatmentsBrushing,
    TreatmentsProblems
  }
}
</script>
