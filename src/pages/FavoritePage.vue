<template>
  <main>
    <v-favorite>
      <v-favorite-item v-for="product in getFavoriteProducts" :key="product.id" :product="product"/>
    </v-favorite>
  </main>
</template>

<script>
import VFavorite from "../components/FavoritePage/vFavorite.vue";
import VFavoriteItem from "../components/FavoritePage/vFavoriteItem.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {VFavoriteItem, VFavorite},

  computed: {
    ...mapGetters(['getFavoriteProducts'])
  },
  methods:{
    ...mapActions(['loadFavoriteProducts'])
  },
  created() {
    this.loadFavoriteProducts()
  }
}
</script>
