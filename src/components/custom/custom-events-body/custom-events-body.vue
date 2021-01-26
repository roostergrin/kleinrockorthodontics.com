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
  mounted: () => {
    let viralsweep = document.createElement('script')
    viralsweep.setAttribute('src', 'https://app.viralsweep.com/vsa-widget-d861a3-81244.js?sid=81244_251491')
    document.head.appendChild(viralsweep)
  },
  components: {
    BlockTitle
  }
}
</script>
