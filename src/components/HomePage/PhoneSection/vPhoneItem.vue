<template>
  <div>
    <h1 class="font-semibold text-[20px] text-black dark:text-white mb-[20px]">{{$t('phone')}}</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-5 group">
      <v-card :link="{name: 'product_page', params: {type: 'applePhone'}}" :title="$t('applePhone')" image-src="/Phones/Phone.png"/>
      <v-card :link="{name: 'product_page', params: {type: 'carHolders'}}" :title="$t('carHolder')" image-src="/CarHolder/CarHolder.png"/>
    </div>
  </div>
</template>

<script>
import VCard from "../../UI/vCard.vue";

export default {
  components: {VCard}

}
</script>

<style scoped>
.group:hover .headphone-container {
  transform: scale(0.9);
}

.group:hover .headphone-container:hover {
  transform: scale(1.1);
}
</style>