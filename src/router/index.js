import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const HomeView = (()=> import ('../view/HomeView.vue'))
const DocsView = defineAsyncComponent(()=> import ('../view/DocsView.vue'))
const AboutView = defineAsyncComponent(()=> import ('../view/AboutView.vue'))
const ContactView = defineAsyncComponent(()=> import ('../view/ContactView.vue'))
const ProjectsView = defineAsyncComponent(()=> import ('../view/ProjectsView.vue'))
const CobaView = defineAsyncComponent(()=> import ('../view/CobaView.vue'))

const MembuatAplikasiVue = defineAsyncComponent(()=> import ('../components/docs/vuejs/MembuatAplikasiVue.vue'))
const ScssPage = defineAsyncComponent(()=> import ('../components/docs/ScssPage.vue'))
const PerkenalanComponent = defineAsyncComponent(()=> import ('../components/docs/memulai/PerkenalanComponent.vue'))

const router = createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
    { 
      path: '/', 
      component: HomeView,
      meta: {
        enterClass: 'animate__animated animate__fadeIn',
        leaveClass: 'animate__animated animate__fadeOut'
      }
    },
    { 
      path: '/docs',
      component: DocsView,
      // components: {
      //     a: DocsView //you sidebar main component in 'a' name of routed-view
      // },
      children: [
        {
          path: '/docs/',
          components: {
            b: PerkenalanComponent //note that 'b' is the name of child router view
          }
        },
        {
          path: '/docs/membuat-aplikasi-vue',
          components: {
            b: MembuatAplikasiVue //note that 'b' is the name of child router view
          }
        },
        {
          path: '/docs/nesting-class',
          components: {
            b: ScssPage //note that 'b' is the name of child router view
          }
        }
      ],
      meta: {
        enterClass: 'animate__animated animate__fadeIn',
        leaveClass: 'animate__animated animate__fadeOut'
      }
    },
    { 
      path: '/about', 
      name: 'about', 
      component: AboutView,
      meta: {
        enterClass: 'animate__animated animate__fadeIn',
        leaveClass: 'animate__animated animate__fadeOut'
      }
    },
    { 
      path: '/projects', 
      name: 'projects', 
      component: ProjectsView,
      meta: {
        enterClass: 'animate__animated animate__fadeIn',
        leaveClass: 'animate__animated animate__fadeOut'
      }
    },
    { 
      path: '/contact', 
      name: 'contact', 
      component: ContactView,
      meta: {
        enterClass: 'animate__animated animate__fadeIn',
        leaveClass: 'animate__animated animate__fadeOut'
      }
    },
    { 
      path: '/coba', 
      name: 'coba', 
      component: CobaView,
      meta: {
        enterClass: 'animate__animated animate__fadeIn',
        leaveClass: 'animate__animated animate__fadeOut'
      }
    },
  ]
})

export default router