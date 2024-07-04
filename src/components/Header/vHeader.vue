<template>
  <div>
    <header
      class="bg-[#eaeaea] dark:bg-black dark:border-2 dark:border-t-0 flex items-center justify-between py-2.5 px-8 mb-7 shadow-custom rounded-bl-[30px] rounded-br-[30px] transition-colors duration-300 relative z-10">
      <div>
        <router-link :to="{name: 'home_page'}" class="font-bold text-[25px] text-[#101010] dark:text-[#eaeaea] font-mono">QPICK</router-link>
      </div>
      <button @click="toggleDarkMode"
        class="bg-gray-400 dark:bg-gray-600 text-gray-800 dark:text-gray-200 p-1 rounded-full focus:outline-none transition-colors duration-300">
        <span v-if="isDark">🌙</span>
        <span v-else>☀</span>
      </button>
      <button @click="toggleBurgerMenu" class="inline-block sm:hidden">
        <svg :class="{ 'stroke-white': isDark, 'stroke-black': !isDark }" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3.5H19M1 10H19M1 16.5H19" :stroke="isDark ? '#eaeaea' : '#101010'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <div class="absolute left-0 top-full bg-[#eaeaea] dark:border-2 dark:bg-black shadow-custom p-4 w-full rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[30px] z-20" :class="{ 'hiddenDis': !burgerMenuOpen }">
        <div class="flex justify-center">
          <div class="flex items-center gap-x-5">
            <div class="relative">
              <router-link :to="{name: 'favorite_page'}">
                <img :src="isDark ? '/Icons/favoriteIconWhite.svg' : '/Icons/favoriteIcon.svg'" alt="Favorite Icon">
              </router-link>
              <span v-if="favoriteCount > 0" class="absolute -top-3 -right-3 bg-orange-500 px-2 rounded-full text-white">{{favoriteCount}}</span>
            </div>
            <div class="relative">
              <router-link :to="{ name: 'basket_page' }">
                <img :src="isDark ? '/Icons/basketIconWhite.svg' : '/Icons/basketIcon.svg'" alt="Basket Icon">
              </router-link>
              <span v-if="basketCount > 0" class="absolute -top-3 -right-3 bg-orange-500 px-2 rounded-full text-white">{{basketCount}}</span>
            </div>
            <button @click="logout"><i class="bx bx-exit text-2xl" :style="{ color: isDark ? 'white' : '#838383' }"></i></button>
          </div>
        </div>
      </div>
      <div class="hidden sm:flex items-center justify-center gap-x-5">
        <div class="relative">
          <router-link :to="{name: 'favorite_page'}">
            <img :src="isDark ? '/Icons/favoriteIconWhite.svg' : '/Icons/favoriteIcon.svg'" alt="Favorite Icon">
          </router-link>
          <span v-if="favoriteCount > 0" class="absolute -top-3 -right-3 bg-orange-500 px-2 rounded-full text-white">{{favoriteCount}}</span>
        </div>
        <div class="relative">
          <router-link :to="{ name: 'basket_page' }">
            <img :src="isDark ? '/Icons/basketIconWhite.svg' : '/Icons/basketIcon.svg'" alt="Basket Icon">
          </router-link>
          <span v-if="basketCount > 0" class="absolute -top-3 -right-3 bg-orange-500 px-2 rounded-full text-white">{{basketCount}}</span>
        </div>
        <button @click="logout"><i class="bx bx-exit text-2xl" :style="{ color: isDark ? 'white' : '#838383' }"></i></button>
      </div>
    </header>
    <div v-if="burgerMenuOpen" class="fixed inset-0 bg-black opacity-80 z-0" @click="toggleBurgerMenu"></div>
  </div>
</template>

<script>
import { useDark } from '@vueuse/core'
import { ref } from 'vue'
import router from "../../router/index.js";
import {mapGetters} from "vuex";

export default {
  data() {
    return {
      isDark: useDark(),
      burgerMenuOpen: ref(false)
    }
  },
  computed: {
    ...mapGetters(['getBasket', 'getFavoriteProducts']),
    basketCount() {
      return this.getBasket.length
    },
    favoriteCount() {
      return this.getFavoriteProducts.length
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDark = !this.isDark
    },
    toggleBurgerMenu() {
      this.burgerMenuOpen = !this.burgerMenuOpen
    },
    logout() {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('user')
      router.push({
        name: 'login_page'
      })
    }
  }
}
</script>

<style scoped>
.hiddenDis {
  display: none;
}
</style>
