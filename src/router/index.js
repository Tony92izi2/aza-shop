import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "about" */ "../components/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import(/* webpackChunkName: "about" */ "../components/Signup.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../components/ListUserComponent"),
  },
  {
    path: "/editUser/:id",
    name: "editUser",
    component: () => import("../components/EditUserComponent"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import(/* webpackChunkName: "about" */ "../components/Cart.vue"),
  },
  {
    path: "/createProduct",
    name: "createProduct",
    component: () => import("../components/CreateProductComponent"),
  },
  {
    path: "/createCategory",
    name: "createCategory",
    component: () => import("../components/CreateCategoryComponent"),
  },
  {
    path: "/editProduct/:id",
    name: "editProduct",
    component: () => import("../components/EditProductComponent"),
  },
  {
    path: "/viewProduct/:id",
    name: "viewProduct",
    component: () => import("../components/ViewProductComponent"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
