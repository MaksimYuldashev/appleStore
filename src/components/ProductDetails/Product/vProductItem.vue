<template>
  <div v-if="details">
    <v-button-back-router/>
    <div class="w-full bg-white dark:bg-black dark:border-2 shadow-custom rounded-[30px] flex flex-col items-center mb-[30px]">
      <div class="my-10 max-w-[200px] h-[200px] sm:max-w-[300px] sm:h-[300px]">
        <img class="w-full h-full" :src="details.imageSrc">
      </div>
      <div class="w-full px-9 mb-5 flex flex-col items-center sm:flex-row  justify-between">
        <h3 class="font-bold text-[16px] text-center sm:text-left sm:text-[25px] text-[#1c1c27] dark:text-white">{{ details.title }}</h3>
        <span class="font-semibold text-[20px] sm:text-[28px] text-[#df6464] dark:text-white">{{ details.price }} RUB</span>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-between gap-x-[30px]">
      <div class="flex-1 mb-5 sm:mb-0 p-5 flex flex-col justify-center bg-[#f9f9f9] dark:bg-black dark:border-2 rounded-2xl shadow-custom cursor-pointer"
           :style="{ height: showDescription ? 'auto' : '50px' }" @click="clickHandlerShowDescription">
        <div class="mb-2">
          <h1 class="font-semibold text-center sm:text-left text-xl text-[#1c1c27] dark:text-white">{{$t('descAndCharact')}}</h1>
        </div>
        <div v-if="showDescription">
          <ul>
            <li class="font-medium leading-7 dark:text-white" v-for="(detail, key) in details.specifications" :key="key">
              {{ detail }}
            </li>
          </ul>
          <h2 class="font-semibold text-center sm:text-left text-xl text-[#1c1c27] dark:text-white">{{$t('peculiarities')}}</h2>
          <ul>
            <li class="font-medium leading-7 dark:text-white" v-for="feature in details.features" :key="feature">{{ feature }}</li>
          </ul>
        </div>
      </div>
      <div class="flex justify-between sm:flex-col sm:justify-start gap-y-5 gap-x-2">
        <router-link :to="{name: 'placing_page'}" @click.native="buyProduct(details.id)" class="flex-1 sm:flex-grow-0 flex items-center justify-center rounded-xl p-[14px] text-white bg-[#101010] dark:border-2 shadow-custom text-[15px] font-medium">{{$t('buy')}}
        </router-link>
        <button
            @click="addToBasket"
            class="flex-1 sm:flex-grow-0 flex items-center justify-center gap-x-[10px] rounded-xl px-3 sm:p-[14px] text-white bg-[#101010] dark:border-2 shadow-custom text-[15px] font-medium">
          <img src="/Icons/basket.svg">
          {{$t('addBasket')}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import VButtonBackRouter from "../../UI/vButtonBackRouter.vue";

export default {
  components: {VButtonBackRouter},
  props: ['details'],
  data() {
    return {
      showDescription: false,
      isFavorite: false,
    }
  },
  computed: {
    ...mapGetters(['getBasket']),
  },
  methods: {
    ...mapActions(['addProductToBasket', 'buySingleProduct']),
    addToBasket() {
      this.addProductToBasket(this.details)
      this.isReady = false
      localStorage.setItem('isReady', this.isReady)
    },
    clickHandlerShowDescription() {
      this.showDescription = !this.showDescription;
    },
    buyProduct(productID) {
      this.buySingleProduct(productID)
      this.isReady = false
      localStorage.setItem('isReady', this.isReady)
    }
  }
}
</script>
