import MyShop from '@/components/MyShop.vue'
import FavoritesSneakers from '@/components/FavoritesSneakers.vue'
import MyBasket from '@/components/MyBasket'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: MyShop,
    },
    {
        path: '/favorites',
        component: FavoritesSneakers,
    },
    {
        path: '/basket',
        component: MyBasket,
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router;