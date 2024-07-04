<template>
  <main>
    <v-basket>
      <v-basket-item />
    </v-basket>
  </main>
</template>

<script>
import VBasket from "../components/BasketPage/vBasket.vue";
import VBasketItem from "../components/BasketPage/vBasketItem.vue";

export default {
  components: {VBasketItem, VBasket},

}
</script>
