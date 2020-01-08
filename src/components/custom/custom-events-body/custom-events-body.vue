<template lang="pug" src="./custom-events-body.pug"></template>

<script>
import BlockTitle from '@/components/block/block-title/block-title'

export default {
  props: {
    props: {
      type: Object
    }
  },
  computed: {
    patientList () {
      return this.props.patients
    }
  },
  components: {
    BlockTitle
  }
}
</script>
