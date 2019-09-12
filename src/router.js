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
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "dialog" */ "./views/About.vue")
    }
  ]
});
