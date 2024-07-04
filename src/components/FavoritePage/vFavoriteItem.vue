<template>
  <div class="h-[400px] dark:border-2 rounded-[30px] shadow-custom bg-white dark:bg-black p-5 flex flex-col justify-between">
    <div>
      <button @click="deleteFavoriteProduct(product?.id)">
        <img src="/Icons/deleteIcon.svg">
      </button>
    </div>
    <div class="h-[200px] sm:h-[230px] flex justify-center">
      <img class="h-full object-cover" :src="product?.imageSrc">
    </div>
    <div class="flex flex-col lg:flex-row items-center justify-between gap-x-5">
      <h3 class="font-semibold text-center text-[16px] md:text-[16px] text-[#1c1c27] dark:text-white">
        {{ product?.title }}</h3>
      <span class="font-semibold text-[17px] text-[#ffa542] dark:text-white">{{ product?.price }}RUB</span>
    </div>
  </div>
</template>

<script>
import VCardProduct from "../UI/vCardProduct.vue";
import {mapActions} from "vuex";

export default {
  components: {VCardProduct},
  props: ['product'],
  methods: {
    ...mapActions(['deleteFavoriteProduct'])
  }
}
</script>
