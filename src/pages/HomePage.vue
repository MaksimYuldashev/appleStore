<template>
  <main>
    <v-banner>
      <v-banner-item/>
    </v-banner>

    <v-headphones>
      <v-headphones-item/>
    </v-headphones>

    <v-phone>
      <v-phone-item/>
    </v-phone>
  </main>
</template>

<script>
import VBanner from "../components/HomePage/Banner/vBanner.vue";
import VBannerItem from "../components/HomePage/Banner/vBannerItem.vue";
import VPhone from "../components/HomePage/PhoneSection/vPhone.vue";
import VPhoneItem from "../components/HomePage/PhoneSection/vPhoneItem.vue";
import VHeadphones from "../components/HomePage/Headphones/vHeadphones.vue";
import VHeadphonesItem from "../components/HomePage/Headphones/vHeadphonesItem.vue";

export default {
  components: {
    VHeadphonesItem,
    VHeadphones, VPhoneItem, VPhone, VBannerItem, VBanner
  }
}
</script>

<style lang="scss" scoped>

</style>