<template lang="pug" src="./custom-about-offices.pug"></template>

<script>
import BlockTitle from '@/components/block/block-title/block-title'

export default {
  props: {
    props: {
      type: Object
    }
  },
  data: () => ({
    officeIndex: 0,
    imgIndex: 0
  }),
  computed: {
    activeOffice () {
      return this.props.offices[this.officeIndex]
    },
    activeImage () {
      return this.activeOffice.images[this.imgIndex]
    }
  },
  methods: {
    updateOfficeIndex (index) {
      this.officeIndex = index
    },
    updateImageIndex (index) {
      this.imgIndex = index
    }
  },
  watch: {
    // reset imageIndex on office index change
    officeIndex (index) {
      this.imgIndex = 0
    }
  },
  components: {
    BlockTitle
  }
}
</script>
