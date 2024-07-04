<template>
  <div class="max-w-[1400px] mx-auto grid grid-rows-layout min-h-screen px-5">
    <v-header/>
    <div>
      <router-view/>
    </div>
    <v-footer/>
  </div>
</template>

<script>
import VHeader from "../components/Header/vHeader.vue";
import VFooter from "../components/Footer/vFooter.vue";

export default {
  components: { VFooter, VHeader }
}
</script>
