<template lang="pug" src="./form-contact.pug"></template>

<script>
import api from 'api'
import axios from 'axios'
export default {
  data: () => {
    return {
      firstName: '',
      lastName: '',
      clientEmail: '',
      clientPhone: '',
      isFirstTime: false,
      firstTimeMessage: 'No, I am not a first time patient',
      clientMessage: '',
      postUrl: api + '/rg-mail/v1/contact',
      formSubmitted: false,
      formSuccess: false,
      modalShowing: false
    }
  },
  methods: {
    validate () {
      this.$validator.validateAll()
        .then(result => {
          if (result) {
            this.onSubmit()
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    closeModal () {
      this.formSuccess = false
      this.formSubmitted = false
      setTimeout(() => {
        this.modalShowing = false
      }, 150)
    },
    onSubmit () {
      this.formSubmitted = true
      if (this.isFirstTime) {
        this.firstTimeMessage = 'Yes, I am a first time patient'
      }
      axios.post(this.postUrl, {
        firstName: this.firstName,
        lastName: this.lastName,
        clientEmail: this.clientEmail,
        clientPhone: this.clientPhone,
        firstTime: this.firstTimeMessage,
        clientMessage: this.clientMessage
      })
        .then(res => {
          this.formSuccess = true
          setTimeout(() => {
            this.modalShowing = true
          }, 750)
          setTimeout(() => {
            this.firstName = ''
            this.lastName = ''
            this.clientEmail = ''
            this.clientPhone = ''
            this.isFirstTime = false
            this.clientMessage = ''
          }, 1000)
          setTimeout(() => {
            this.errors.clear()
          }, 1100)
        })
        .catch(e => {
          console.log(e, 'submitted')
        })
    }
  }
}
</script>
