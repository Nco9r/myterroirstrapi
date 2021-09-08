<template>
  <section class="produits">
    <produitCard v-for="allProduct in allProducts" :key="allProduct.id"
    :allProduct=allProduct />
  </section>
</template>

<script>
import { getStrapiMedia } from '../../utils/medias'
import produitCard from '../produits/produitCard'

export default {
    props: {
        allProducts: {
            type: Array,
            default: () => [], 
            }
    },
    methods: {
        getStrapiMedia
    },
    components: {
        produitCard
    }

}
</script>

<style scoped>
a {
  text-decoration: none;
}

.produits {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between !important;
  padding: 20px;
  margin-right: 17px;


}



@media screen and (min-width: 1024px) {
  .produits {
    max-width: 850px;
    margin: 20px auto;
  }

}

@media screen and (min-width: 1200px) {
  .produits {
    max-width: 1500px;
    margin: 20px auto;
    justify-content: space-between;
  }

}
</style>
