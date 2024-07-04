<template>
  <div>
    <div v-if="isReady" class="flex flex-col items-center justify-center">
      <div class="shadow-custom bg-white dark:bg-black dark:border-2 rounded-[30px] p-5 w-full mb-5">
        <p class="font-semibold text-[17px] text-center dark:text-white">Номер вашего заказа №123123, с Вами свяжется наш
          менеджер.</p>
      </div>
      <div class="w-[200px]">
        <router-link :to="{ name: 'home_page' }"
          class="block w-full bg-black rounded-[20px] dark:border-2 text-white text-center shadow-custom py-3">В каталог
          товаров</router-link>
      </div>
    </div>
    <div v-if="!isReady">
      <v-button-back-router/>
      <h1 class="font-semibold text-xl mb-3 dark:text-white">Оформление заказа</h1>
      <div class="flex flex-col gap-y-5 md:flex-row justify-between gap-x-10">
        <div class="flex-1 rounded-[30px] bg-white dark:bg-black dark:border-2 shadow-custom p-7">
          <div class="flex gap-x-2 mb-3.5">
            <span>
              <svg class="icon" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </span>
            <h2 class="font-medium text-[15px] dark:text-white">Адрес доставки</h2>
          </div>
          <form class="flex flex-col gap-y-4 mb-5">
            <select
              class="rounded-2xl bg-[#d6d6d6] p-2 sm:p-3.5 outline-none font-medium text-[15px] text-[#8e8e8e] appearance-none cursor-pointer"
              v-model="selectedCountry" @change="updateCities" required>
              <option>Страна</option>
              <option value="Россия">Россия</option>
              <option value="Узбекистан">Узбекистан</option>
            </select>
            <select
              class="rounded-2xl bg-[#d6d6d6] p-2 sm:p-3.5 outline-none font-medium text-[15px] text-[#8e8e8e] appearance-none cursor-pointer"
              v-model="selectedCity" required>
              <option v-for="city in cities" :value="city">{{ city }}</option>
            </select>
            <input
              class="rounded-2xl bg-[#d6d6d6] p-2 sm:p-3.5 outline-none font-medium text-[15px] text-[#8e8e8e] appearance-none"
              type="text" placeholder="Адрес почты" required>
            <input
              class="rounded-2xl bg-[#d6d6d6] p-2 sm:p-3.5 outline-none font-medium text-[15px] text-[#8e8e8e] appearance-none"
              type="text" placeholder="Индекс почты" required>
          </form>
          <div>
            <p class="text-center text-[#838383] font-medium text-[14px] sm:text-base dark:text-white">Убедительная просьба, проверяйте
              введенные вами данные на правильность написания</p>
            <p class="text-center text-[#838383] font-medium text-[14px] sm:text-base dark:text-white">Так же вы можете обраться в службу
              поддержки</p>
          </div>
        </div>
        <div class="flex-1 flex flex-col gap-y-5">
          <div class="flex-1 shadow-custom bg-white dark:bg-black dark:border-2 rounded-[30px] p-5">
            <h2 class="font-semibold text-xl mb-6 dark:text-white">Ваш заказ</h2>
            <div class="overflow-y-scroll h-[80px] pr-2 sm:h-[100px] dark::-webkit-scrollbar-track:bg-white">
              <div class="flex justify-between mb-3" v-for="product in getBasket" v-if="getBasket.length > 0">
                <span class="font-medium text-[14px] sm:text-base dark:text-white">{{ product.quantity }}x</span>
                <h3 class="font-medium text-[14px] sm:text-base dark:text-white">{{ product.title }}</h3>
                <span class="font-medium text-[14px] sm:text-base dark:text-white">RUB {{ product.price * product.quantity }}</span>
              </div>
              <div class="flex justify-between mb-3" v-else>
                <span class="font-medium dark:text-white">1x</span>
                <h3 class="font-medium dark:text-white">{{ getSingleProduct.title }}</h3>
                <span class="font-medium dark:text-white">RUB {{ getSingleProduct.price }}</span>
              </div>
            </div>
            <div class="flex justify-between">
              <p class="font-medium dark:text-white">К оплате</p>
              <span class="font-medium dark:text-white">RUB {{ totalPrice || getSingleProduct.price }}</span>
            </div>
          </div>
          <div class="flex-1 shadow-custom bg-white dark:bg-black dark:border-2 rounded-[30px] p-5">
            <div>
              <h2 class="font-semibold text-[17px] mb-5 dark:text-white">Номер получателя</h2>
              <input
                class="w-full rounded-2xl bg-[#d6d6d6] p-2 sm:p-3.5 outline-none font-medium text-[15px] text-[#8e8e8e] appearance-none"
                type="text" placeholder="+998 __ ___ __ __" required>
            </div>
          </div>
          <div>
            <button @click="makeAnOrder"
              class="w-full bg-black rounded-[10px] text-white text-center shadow-custom py-3 dark:border-2">Закончить
              оформление</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import VButtonBackRouter from "../UI/vButtonBackRouter.vue";

export default {
  components: {VButtonBackRouter },
  data() {
    return {
      selectedCity: null,
      selectedCountry: null,
      countries: {
        "Россия": ['Москва', 'Екатеринбург', 'Казань', 'Санкт-Петербург', 'Сочи', 'Ростов-на-Дону', 'Владивосток', 'Красноярск', 'Тюмень', 'Самара', 'Краснодар'],
        "Узбекистан": ['Самарканд', 'Ташкент', 'Фергана', 'Бухара', 'Наманган', 'Хива', 'Джизак', 'Алмалык', 'Ангрен', 'Карши', 'Нукус']
      },
      cities: ['Город'],
      countriesList: ['Страна'],
      isReady: false
    }
  },
  computed: {
    ...mapGetters(['getBasket', 'getSingleProduct']),
    totalPrice() {
      return this.getBasket.reduce((total, product) => total + (product.price * product.quantity), 0);
    }
  },
  created() {
    this.loadBasketProduct()
    this.selectedCountry = this.countriesList[0]
    this.selectedCity = this.cities[0]
    this.isReady = localStorage.getItem('isReady') === 'true'
  },
  methods: {
    ...mapActions(['loadBasketProduct', 'clearBasket']),
    updateCities() {
      this.cities = this.countries[this.selectedCountry]
      this.selectedCity = null
    },
    makeAnOrder() {
      const form = document.querySelector('form')
      if (form.checkValidity()) {
        this.isReady = !this.isReady
        this.clearBasket()
        localStorage.setItem('isReady', this.isReady)
      } else {
        alert('Пожалуйста, заполните все поля')
      }
    }
  }
}
</script>

<style scoped>
select {
  background-image: url('/Icons/selectArrow.svg');
  background-position: right 10px center;
  background-repeat: no-repeat;
  padding-right: 25px;
}

input {
  background-image: url('/Icons/inputIcon.svg');
  background-position: right 10px center;
  background-repeat: no-repeat;
  padding-right: 25px;
}

.icon {
  fill: #000;
}
.dark .icon {
  fill: #fff;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: black;
  border-radius: 5px;
}

::-webkit-scrollbar-track {
  background-color: white;
  border-radius: 5px;
}
</style>