<template lang="pug" src="./custom-blog-list.pug"></template>

<script>
import BlockTitle from '@/components/block/block-title/block-title'

export default {
  props: {
    props: {
      type: Object
    },
    blogs: {
      type: Object
    }
  },
  computed: {
    simpleBlogs () {
      return Object.keys(this.blogs).reduce((accum, val) => {
        const obj = this.blogs[val]
        const { title, date, slug, acf: {content} } = obj
        let body = null
        let img = null

        const readableDate = ((d) => {
          const formattedDate = new Date(d)
          const day = formattedDate.getDate()
          const month = formattedDate.getMonth()
          const year = formattedDate.getFullYear()
          return `${month}/${day}/${year}`
        })(date)

        if (content !== null) {
          body = content.body
          img = content.img
        }

        const simpleBlog = {
          title: title.rendered,
          date: readableDate,
          body,
          img,
          slug
        }

        return [...accum, simpleBlog]
      }, [])
    },
    blogGroups () {
      const blogs = this.simpleBlogs

      let chunk = 2
      let arr = []
      for (let i = 0; i < blogs.length; i += chunk) {
        let temparr = blogs.slice(i, i + chunk)
        arr = [...arr, temparr]
      }
      return arr
    }
  },
  methods: {
    blogRedirect (slug) {
      const blogSlug = `/blog/${slug}`
      this.$router.push(blogSlug)
    }
  },
  components: {
    BlockTitle
  }
}
</script>
