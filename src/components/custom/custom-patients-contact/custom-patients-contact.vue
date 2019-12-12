<template lang="pug" src="./custom-patients-contact.pug"></template>

<script>
import BlockTitle from '@/components/block/block-title/block-title'
import ContactForm from '@/components/form/form-contact/form-contact'

export default {
  props: {
    props: {
      type: Object
    }
  },
  components: {
    BlockTitle,
    ContactForm
  }
}
</script>
