export const activateAnimation = {
  methods: {
    activateAnimation ({ el, going }) {
      if (going === 'in') {
        this.$store.dispatch('SET_ANIMATION_STATE', {id: el.id, status: true})
      }
    }
  }
}

// default options for v-waypoint
export const thresholdOptions = {
  data: () => ({
    thresholdOptions: {
      threshold: [0.25, 0.75]
    }
  })
}

// @param { Object | String } element - class/id value to search the DOM for, function was designed to be passed a vue router Object or String (ex: '#top')
export const scrollToElement = {
  methods: {
    scrollToElement (element) {
      if (typeof element === 'object') {
        const id = element.path.replace(/\//, '')
        this.$scrollTo(id)
      } else {
        this.$scrollTo(element)
      }
      this.$store.dispatch('VIEW_NAV_DRAWER', false)
    }
  }
}

export const redirectAndScroll = {
  mixins: [scrollToElement],
  methods: {
    redirectAndScroll (route, id) {
      new Promise((resolve, reject) => {
        resolve(this.$router.push(route))
      })
        .then(() => this.$store.dispatch('VIEW_NAV_DRAWER', false))
        .then(() => this.scrollToElement(id))
    }
  }
}
