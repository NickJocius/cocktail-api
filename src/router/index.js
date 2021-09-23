import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Cocktails from '../views/Cocktails.vue';
import Category from '../views/Category.vue';
const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/cocktails",
        name: "cocktails",
        component: Cocktails,
    },
    {
        path: "/category/:cat",
        name: "category",
        component: Category,
        props: true,
        
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;