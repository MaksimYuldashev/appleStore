<template>
  <section class="mb-5">
    <v-button-back-router/>
    <div class="grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-5 md:grid-cols-3">
      <slot/>
    </div>
  </section>
</template>

<script>
import VButtonBackRouter from "../UI/vButtonBackRouter.vue";

export default {
  components: {VButtonBackRouter}

}
</script>
