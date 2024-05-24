import { createRouter, createWebHistory } from 'vue-router'
import ItemManagement from "../view/ItemManagement.vue"
import userData from "../view/userData.vue"
const routes = [

    { path: '/products-list', component: userData},
    { path: '/', component: userData},
    { path: '/curd', component: ItemManagement }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes:routes
})

export default router
