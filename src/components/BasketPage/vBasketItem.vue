<template>
  <div>
    <v-button-back-router/>
    <h1 class="font-semibold text-2xl mb-5 dark:text-white">{{$t('basket')}}</h1>
    <div v-if="getBasket.length === 0" class="flex flex-col items-center">
      <div class="max-w-[500px] flex flex-col items-center">
        <div class="flex flex-col items-center justify-center mb-8 w-[200px] md:w-full">
          <img class="w-full h-full object-cover" src="/Banner/illustration.png">
        </div>
        <div class="mb-8 flex flex-col items-center">
          <h3 class="font-medium text-2xl md:text-3xl">{{$t('basketTitle')}}</h3>
          <p class="text-xl text-center sm:text-left text-[#838383]">{{$t('basketSub')}} :)</p>
        </div>
        <router-link :to="{name: 'home_page'}" class="block w-full bg-black rounded-[20px] text-white text-center shadow-custom py-3">{{$t('catalog')}}</router-link>
      </div>
    </div>
    <div v-else class="flex flex-col gap-y-5 md:flex-row md:gap-y-0 justify-center sm:justify-between gap-x-[120px]">
      <div class="grid grid-cols-1 sm:flex sm:flex-1 flex-wrap justify-center gap-5 w-full">
        <div class="rounded-[30px] shadow-custom bg-white dark:bg-black dark:border-2 p-5 w-full" v-for="product in getBasket">
          <div class="mb-5 flex justify-end">
            <button @click="deleteProductBasket(product.id)">
              <img class="cursor-pointer" src="/Icons/deleteIcon.svg">
            </button>
          </div>
          <div class="flex items-center gap-x-5 mb-5">
            <div class="w-[100px] h-[100px] sm:w-[150px] sm:h-[140px]">
              <img class="w-full h-full object-cover" :src="product.imageSrc">
            </div>
            <div>
              <h2 class="font-medium text-center text-[12px] text-[#1c1c27] dark:text-white">{{product.title}}</h2>
              <span class="block font-semibold text-center text-[15px] text-[#aaa] dark:text-white">{{product.price}} RUB</span>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div class="w-[150px] flex items-center gap-x-5 sm:gap-x-0 sm:justify-between">
              <button @click="decrement(product.id)"><img src="/Icons/minus.svg"></button>
              <span class="font-semibold text-lg dark:text-white">{{product.quantity}}</span>
              <button @click="increment(product.id)"><img src="/Icons/plus.svg"></button>
            </div>
            <div>
              <span class="font-semibold text-base sm:text-lg dark:text-white">{{product.price * product.quantity}} RUB</span>
            </div>
          </div>
        </div>
      </div>
      <div class="sm:w-72 flex flex-col justify-between bg-white dark:bg-black shadow-custom rounded-[30px] h-[130px]">
        <div class="flex items-center justify-between p-5">
          <h3 class="font-semibold dark:text-white">{{$t('total')}}</h3>
          <span class="font-semibold dark:text-white">RUB {{ totalPrice }}</span>
        </div>
        <div>
          <router-link :to="{name: 'placing_page'}" class="block w-full bg-black rounded-[20px] text-white text-center shadow-custom py-3 dark:border-2">{{$t('processing')}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import VButtonBackRouter from "../UI/vButtonBackRouter.vue";

export default {
  components: {VButtonBackRouter},
  data() {
    return {
      count: 1,
    }
  },
  computed: {
    ...mapGetters(['getBasket']),
    totalPrice() {
      return this.getBasket.reduce((total, product) => total + (product.price * product.quantity), 0)
    }
  },
  methods: {
    ...mapActions(['loadBasketProduct', 'updateProductQuantity', 'deleteProductBasket']),
    increment(productID) {
      const product = this.getBasket.find(item => item.id === productID)
      if (product) {
        this.updateProductQuantity({ id: productID, quantity: product.quantity + 1 })
      }
    },
    decrement(productID) {
      const product = this.getBasket.find(item => item.id === productID)
      if (product && product.quantity > 1) {
        this.updateProductQuantity({ id: productID, quantity: product.quantity - 1 })
      }
    }
  },
  created() {
    this.loadBasketProduct()
  }
}
</script>
