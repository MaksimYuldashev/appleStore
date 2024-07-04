<template>
      <router-link :to="link" class="headphone-container cursor-pointer bg-white dark:bg-black dark:border-2 flex  flex-col items-center justify-between py-5 shadow-custom rounded-[30px] hover:scale-110 transition-transform duration-300">
        <div class="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]">
          <img class="w-full h-full" :src="imageSrc">
        </div>
        <p class="font-semibold text-lg sm:text-xl dark:text-white">{{title}}</p>
      </router-link>
</template>

<script>
export default {
  props: ['title', 'imageSrc', 'link']
}
</script>

<style lang="scss" scoped>

</style>