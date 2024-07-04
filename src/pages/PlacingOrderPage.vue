<template>
  <main>
    <v-placing>
      <v-placing-item/>
    </v-placing>
  </main>
</template>

<script>
import VPlacing from "../components/PlacingPage/vPlacing.vue";
import VPlacingItem from "../components/PlacingPage/vPlacingItem.vue";

export default {
  components: {VPlacingItem, VPlacing}

}
</script>

<style lang="scss" scoped>

</style>