<template>
<div>
    <section class="produits">
        <heroBis/>
        <Produits :allProducts=allProducts />
       </section>
    <Newsletter />
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import Produits from '../../components/produits/produits'
import heroBis from '../../components/features/HeroBis'
import Newsletter from '../../components/default/Newsletter.vue'

export default {

async asyncData({ $strapi, store, error }) {
    try {
      const response = await $strapi.find('produits')
      store.commit('setProducts', response)
    } catch (e) {
      error(e)
    }
  },


  data() {
    return {
      products: [],
    }
  },
  computed: {
    ...mapGetters(['allProducts']),
  },
  methods: {
    ...mapMutations('cart', ['addOne']),
    ...mapMutations('allProducts', ['addProductQuantity']),
  },
  components: {
      Produits,
      heroBis,
      Newsletter
  }
}
</script>

<style>


</style>