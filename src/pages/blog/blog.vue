<template lang="pug" src="./blog.pug"></template>

<script>
import BlogList from '@/components/custom/custom-blog-list/custom-blog-list'

export default {
  computed: {
    props () {
      return this.$store.state.pages.blog
    },
    blogs () {
      return this.$store.state.sortedBlog
      // return 'please kick up the 4d3d3d3'
    }
  },
  components: {
    BlogList
  }
}
</script>
