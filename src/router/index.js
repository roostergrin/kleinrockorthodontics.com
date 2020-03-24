import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from 'pages/404/404'
import scrollBehavior from '@/shared/functionality/scroll-behavior'

const Home = () => import('@/pages/home/home')
const About = () => import('@/pages/about/about')
const WhyUs = () => import('@/pages/why-us/why-us')
const Treatments = () => import('@/pages/treatments/treatments')
const NewPatients = () => import('@/pages/new-patients/new-patients')
const ContactUs = () => import('@/pages/contact-us/contact-us')
const FunAndEvents = () => import('@/pages/fun-and-events/fun-and-events')
const Blog = () => import('@/pages/blog/blog')
const BlogTemplate = () => import('@/pages/blog-template/blog-template')

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      navigation: false,
      component: Home,
      isNuxtLink: true
    },
    {
      path: '/about',
      name: 'About',
      navigation: true,
      component: About,
      isNuxtLink: true
    },
    {
      path: '/why-us',
      name: 'Why Us',
      navigation: true,
      component: WhyUs,
      isNuxtLink: true
    },
    {
      path: '/treatments',
      name: 'Treatments',
      navigation: true,
      component: Treatments,
      isNuxtLink: true
    },
    {
      path: '/new-patients',
      name: 'New Patients',
      navigation: true,
      component: NewPatients,
      isNuxtLink: true
    },
    {
      path: '/contact-us',
      name: 'Contact Us',
      navigation: true,
      component: ContactUs,
      isNuxtLink: true
    },
    {
      path: '/blog',
      name: 'Blog',
      navigation: true,
      component: Blog,
      isNuxtLink: true
    },
    {
      path: '/blog/:blogID',
      component: BlogTemplate
    },
    {
      path: '/fun-and-events',
      name: 'Fun and Events',
      navigation: true,
      component: FunAndEvents,
      isNuxtLink: true
    },
    {
      path: 'https://formsroostergrin.com/kleinrockorthodontics/virtual-page-v2/index.html',
      name: 'Virtual Assessment',
      isNuxtLink: false,
      navigation: true
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
