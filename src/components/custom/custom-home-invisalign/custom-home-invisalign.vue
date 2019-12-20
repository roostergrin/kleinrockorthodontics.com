<template lang="pug" src="./custom-home-invisalign.pug"></template>

<script>
import BlockTitle from '@/components/block/block-title/block-title'
import { redirectAndScroll } from '@/shared/functionality/mixins'
export default {
  mixins: [redirectAndScroll],
  props: {
    props: {
      type: Object
    }
  },
  components: {
    BlockTitle
  }
}
</script>
