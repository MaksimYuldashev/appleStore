<template>
  <main>
    <v-button-back-router/>
    <v-products>
      <v-products-item/>
    </v-products>
  </main>
</template>

<script>
import VCardProduct from "../components/UI/vCardProduct.vue";
import VProducts from "../components/ProductPage/Products/vProducts.vue";
import VProductsItem from "../components/ProductPage/Products/vProductsItem.vue";
import VButtonBackRouter from "../components/UI/vButtonBackRouter.vue";

export default {
  components: {VProductsItem, VProducts, VCardProduct, VButtonBackRouter },
  
}
</script>

