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
    viralsweep.setAttribute('src', 'https://app.viralsweep.com/vsa-widget-1f7921-64321.js?sid=64321_558167')
    document.head.appendChild(viralsweep)
  },
  components: {
    BlockTitle
  }
}
</script>
