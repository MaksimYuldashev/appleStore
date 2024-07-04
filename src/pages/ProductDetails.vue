<template>
  <main>
    <v-product>
      <v-product-item :details="getProductDetails"/>
    </v-product>
  </main>
</template>

<script>
import VProduct from "../components/ProductDetails/Product/vProduct.vue";
import VProductItem from "../components/ProductDetails/Product/vProductItem.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {VProductItem, VProduct},
  computed: {
    ...mapGetters(['getProductDetails']),
  },
  methods: {
    ...mapActions(['loadProductDetails'])
  },
  created() {
    const category = this.$route.params.category;
    const productName = this.$route.params.name;
    this.loadProductDetails({ category, productName });
  }
}
</script>
