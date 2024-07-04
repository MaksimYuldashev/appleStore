import {createRouter,createWebHistory} from "vue-router";
import Base from "../pages/Base.vue";
import HomePage from "../pages/HomePage.vue";
import ProductPage from "../pages/ProductPage.vue";
import productDetails from "../pages/ProductDetails.vue";
import BasketPage from "../pages/BasketPage.vue";
import PlacingOrderPage from "../pages/PlacingOrderPage.vue";
import AboutPage from "../pages/AboutPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import FavoritePage from "../pages/FavoritePage.vue";

const routes = [
    {
      path: '/appleStore',
      children: [
          {
              path: '',
              component: LoginPage,
              name: 'login_page'
          },
          {
              path: '/register',
              component: RegisterPage,
              name: 'register_page'
          }
      ]
    },
    {
        path: '/appleStore',
        component: Base,
        children: [
            {
                path: '/home',
                component: HomePage,
                name: 'home_page'
            },
            {
                path: '/product/:type',
                component: ProductPage,
                name: 'product_page'
            },
            {
                path: '/product-details/:category/:name',
                component: productDetails,
                name: 'product_page_details'
            },
            {
              path: '/favorite',
              component: FavoritePage,
              name: 'favorite_page'
            },
            {
                path: '/basket',
                component: BasketPage,
                name: 'basket_page'
            },
            {
                path: 'placing-order',
                component: PlacingOrderPage,
                name: 'placing_page'
            },
            {
                path: 'about-page',
                component: AboutPage,
                name: 'about_page'
            },
            {
                path: 'placing-order',
                component: PlacingOrderPage,
                name: 'placing_page'
            },
        ]
    }
]

export default createRouter({
    routes: routes,
    history: createWebHistory()
})