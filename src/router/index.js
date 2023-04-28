import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path:'/',
      name:'testrouter',
      component:()=>import('../views/TestRouter.vue')
    }              
  ]
})

export default router
