<template>
  <div class="produitCard">
    <div>
      <!-- <nuxt-link
        :key="blog.id"
        :to="{ name: 'blogs-slug', params: { slug: blog.slug } }"
      > -->
        <div class="picture_wrapper" v-if="allProduct.image.url">
          <img :src="getStrapiMedia(allProduct.image.url)" alt="" />
        </div>
        <p class="tagline">{{ allProduct.producteurs }} - {{ allProduct.poids }}.</p>
        <div class="title">
          <h5>{{ allProduct.name }}</h5>
          <div class="quantite_price">
              <div class="quantite">
                  <div class="count" @click="removeQuantity(allProduct.id)">
                      <p>-</p>
                  </div>
                  <div class="number_quantite">
                      {{allProduct.quantite}}
                  </div>
                  <div class="count" @click="addProductQuantity(allProduct.id)">
                      <p>+</p>
                  </div>
              </div>
              <div class="price">
                  <p>{{allProduct.prix | currency('')}}</p>
              </div>
          </div>
          <button @click="addOne(allProduct)">Ajouter</button>
        </div>
      <!-- </nuxt-link> -->
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '../../utils/medias'
import { mapMutations } from 'vuex'


export default {
  props: {
    allProduct: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    getStrapiMedia,
    ...mapMutations('cart', ['addOne']),
    ...mapMutations(['addProductQuantity']),
    ...mapMutations(['removeQuantity']),



  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.produitCard {
  width: 100%;
  margin-bottom: 45px;
   margin-right: -17px;
   padding-right: -17px;
}

.picture_wrapper {
  position: relative;
}

.picture_wrapper::before {
  content: '';
  position: absolute;
  z-index: 2;
  bottom: 4px;
  left: 0;
  right: 0;
  height: 0;
  background-color: var(--orange);
  -webkit-transition: height 0.2s;
  transition: height 0.2s;
}

.picture_wrapper img {
  height: 180px;
  width: 100%;
  object-fit: cover;
}

.tagline {
  margin: 16px 0 10px 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 160%;
  color: #8c8c8c;
  text-transform: capitalize;
}



.title h5 {
  font-weight: 600;
  font-family: bodyBold, sans-serif;
  font-size: 14px;
  height: 70px;
  color: var(--black);
  line-height: 24px;
}

.quantite_price {
    display: flex; 
    margin-top: 20px;
    flex-flow: row wrap; 
    justify-content: space-between; 
}

.quantite {
    display: flex; 
    flex-flow: row wrap; 
    width: 35%;
    align-items: center;
    justify-content: space-between; 
}

.count p {
    font-size: 10Px;
    font-family: bodyBold;
}

.number_quantite p{
    font-size: 10Px;
}

.price p{
    font-size: 22px;
    font-family: title, sans-serif;
}

.price p::after {
    content: '€ ttc';
    font-size: 14px; 
    font-family: body;
    margin-left: 2px;
}

button {
    margin-top: 10px;
    width: 100%;
    border: none; 
    padding: 8px 24px; 
    background-color: var(--orange); 
    color: var(--white); 
    font-family: bodyBold; 
    font-size: 14px;

}

@media screen and (min-width: 1024px) {
  .produitCard {
    width: 33.3%;
  }

  .title h5 {
    font-size: 20px;
    line-height: 32px;
  }
}

@media screen and (min-width: 1200px) {
  .produitCard {
    width: 33.3%;
    padding-right: 40px;
  }

  .picture_wrapper img {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }
}
</style>
