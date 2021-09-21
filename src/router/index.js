import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Cocktails from '../views/Cocktails.vue';
import Category from '../views/Category.vue';
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/cocktails",
        name: "Cocktails",
        component: Cocktails,
    },
    {
        path: "/category/:name",
        name: "Category",
        component: Category,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;