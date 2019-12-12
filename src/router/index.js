import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from 'pages/404/404'
import scrollBehavior from '@/shared/functionality/scroll-behavior'

const Home = () => import('@/pages/home/home')
const About = () => import('@/pages/about/about')
const WhyUs = () => import('@/pages/why-us/why-us')
const Treatments = () => import('@/pages/treatments/treatments')
const NewPatients = () => import('@/pages/new-patients/new-patients')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      navigation: false,
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      navigation: true,
      component: About
    },
    {
      path: '/why-us',
      name: 'Why Us',
      navigation: true,
      component: WhyUs
    },
    {
      path: '/treatments',
      name: 'Treatments',
      navigation: true,
      component: Treatments
    },
    {
      path: '/new-patients',
      name: 'New Patients',
      navigation: true,
      component: NewPatients
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      navigation: true,
      component: Home
    },
    {
      path: '/*',
      name: '404',
      navigation: false,
      component: PageNotFound
    }
  ],
  scrollBehavior
})

router.beforeResolve((to, from, next) => {
  /* eslint-disable */
  if (to.hash === "") {
    /* eslint-enable */
    window.scrollTo(0, 0)
  }
  next()
})

export default router
