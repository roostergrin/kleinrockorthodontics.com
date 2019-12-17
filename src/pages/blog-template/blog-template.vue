
<template lang='pug' src='./blog-template.pug'></template>

<script>
import BlogBody from '@/components/custom/custom-blog-body/custom-blog-body'
export default {
  name: 'BlogTemplate',
  computed: {
    blog () {
      const id = this.$route.params.blogID
      return this.$store.state.blog.find(blog => blog.slug === id)
    }
  },
  components: {
    BlogBody
  }
}
</script>
