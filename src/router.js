import Vue from "vue";
import Router from "vue-router";

import Pagination from "./views/Pagination.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "pagination",
      component: Pagination
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/dialog",
      name: "dialog",
      component: () =>
        import(/* webpackChunkName: "dialog" */ "./views/Dialog.vue")
    },
    {
      path: "/select",
      name: "select",
      component: () =>
        import(/* webpackChunkName: "dialog" */ "./views/Select.vue")
    }
  ]
});
