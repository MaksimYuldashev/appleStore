<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <v-card-product v-for="product in getProducts" :key="product.id" :product="product"
                      :link="{name: 'product_page_details', params: {category: $route.params.type, name: product.link}}" @addFavoriteProduct="addFavoriteProduct"/>
    </div>
  </div>
</template>

<script>
import VCardProduct from "../../UI/vCardProduct.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {VCardProduct},
  data() {
    return {
      sortOrder: 'asc'
    }
  },
  computed: {
    ...mapGetters(['getProducts']),
  },
  methods: {
    ...mapActions(['loadProducts', 'addFavoriteProduct'])
  },
  created() {
    this.loadProducts({category: this.$route.params.type, order: this.sortOrder})
  }
}
</script>

