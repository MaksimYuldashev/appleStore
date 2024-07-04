<template>
  <div>
    <div class="scale-100 hover:scale-110 cursor-pointer transition-transform duration-300 h-[400px] dark:border-2 rounded-[30px] shadow-custom bg-white dark:bg-black p-5 flex flex-col justify-between">
      <div @click="addFavorite">
        <i class='bx bx-heart text-2xl font-medium' :style="{ color: isFavorite ? 'orange' : '#838383' }"></i>
      </div>
      <router-link :to="link" class="h-[200px] sm:h-[230px] flex justify-center">
        <img class="h-full object-cover" :src="product?.imageSrc">
      </router-link>
      <div class="flex flex-col lg:flex-row items-center justify-between gap-x-5">
        <h3 class="font-semibold text-center text-[16px] md:text-[16px] text-[#1c1c27] dark:text-white">
          {{ product.title }}</h3>
        <span class="font-semibold text-[17px] text-[#ffa542] dark:text-white">{{ product.price }}RUB</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product', 'link'],
  data() {
    return {
      isFavorite: false
    }
  },
  methods: {
    addFavorite() {
      this.isFavorite = !this.isFavorite
      this.$emit('addFavoriteProduct', this.product)
    }
  }
}
</script>

<style scoped>

</style>