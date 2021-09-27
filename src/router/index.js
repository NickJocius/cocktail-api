import { defineAsyncComponent } from "@vue/runtime-core";
import { createRouter, createWebHistory } from "vue-router";
const Home = defineAsyncComponent(() => import('../views/Home.vue')) ;

const Category = defineAsyncComponent(() =>  import('../views/Category.vue'));
const routes = [
    {
        path: "/",
        name: "home",
        component: Home
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