<template lang='pug' src='./custom-blog-body.pug'></template>

<script>
export default {
  name: 'BlogTemplate',
  props: {
    props: {
      type: Object
    }
  },
  computed: {
    title () {
      return this.props.title.rendered
    },
    date () {
      const formattedDate = ((d) => {
        const date = new Date(d)
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()

        return `${month}/${day}/${year}`
      })(this.props.date)

      return formattedDate
    },
    body () {
      return this.props.acf.content.body
    },
    img () {
      return this.props.acf.content.img
    },
    link () {
      return this.props.link
    }
  },
  methods: {
    redirectToBlogs () {
      this.$router.push('/blog')
    }
  }
}
</script>
