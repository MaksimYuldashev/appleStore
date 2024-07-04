<template>
  <div>
    <h1 class="font-semibold text-[20px] text-black mb-[20px] dark:text-white">{{ $t('headPhone') }}</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-5 group">
      <v-card :link="{name: 'product_page', params: {type: 'wiredHeadphones'}}" :title="$t('wiredHeadPhone')" image-src="/ImageHeadPhone/WiredHeadPhone.png"/>
      <v-card :link="{name: 'product_page', params: {type: 'wirelessHeadphones'}}" :title="$t('wirelessHeadphones')" image-src="/ImageHeadPhone/WirelessHeadphone.png"/>
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