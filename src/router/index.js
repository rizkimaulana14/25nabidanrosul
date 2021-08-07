import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/list-nabi",
        name: "ListNabi",
        component: () =>
            import ("../views/ListNabi.vue"),
    },
    {
        path: "/detail-nabi/:nama",
        name: "DetailNabi",
        component: () =>
            import ("../views/DetailNabi.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;