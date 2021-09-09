<template>
  <main>
    <section class="products_box">
      <div class="categories_products_mobile">
        <div class="top_bar">
          <p>{{ products.name }}</p>
          <div class="rayons" @click="rayons = !rayons">
            <p>Rayons</p>
            <img
              src="@/assets/img/svg/dropdownO.svg"
              alt=""
              :class="{ rotate: rayons }"
            />
          </div>
        </div>
        <div class="open_rayon" v-if="rayons">
          <div class="categorie_mobile" v-for="c in productsC" :key="c.id">
            <nuxt-link
              :key="c.id"
              :to="{ name: 'cat-slug', params: { slug: c.slug } }"
            >
              <p>{{ c.name }}</p>
            </nuxt-link
            >
              
          </div>
          <nuxt-link to='/boutique'><p class="all">Tous les produits</p></nuxt-link>
        </div>
      </div>
      <div class="categories_products_desktop">
        <nuxt-link to='/boutique'>
        <p>Tous les produits</p>
        </nuxt-link>
        <div class="categories_products_desktop" v-for="c in productsC" :key="c.id">
            <nuxt-link
        :key="c.id"
        :to="{ name: 'cat-slug', params: { slug: c.slug } }"
      >
            {{ c.name }}</nuxt-link>
          </div>
        <hr />
      </div>
      <div class="products_cards" v-if="allProduct.length === 0">
          <p>Il n'y a pas d'articles dans cette rubrique</p>
      </div>
      <div class="products_cards" v-if="allProduct.length >= 1">
        <div class="card" v-for="p in allProduct" :key="p.id">
          <div class="img">
            <img :src="getStrapiMedia(p.image.url)" alt="" />
            <p class="addCart" @click="addOne(p)" v-if="p.stocks >= 1">+</p>
            <p class="none" v-if="p.stocks === 0">produit épuisé</p>
          </div>
          <div class="titleProducts">
            <p>{{ p.name }}</p>
          </div>
          <div class="price">
            <p>{{ p.prix | currency("") }}€</p>
            <p>|</p>
            <p>{{ p.poids }}</p>
          </div>
        </div>
      </div>
    </section>

    <Newsletter />
  </main>
</template>

<script>
import HeroBoutique from "../../components/boutique/HeroBoutique";
import Newsletter from "../../components/default/Newsletter";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import Vue2Filters from "vue2-filters";
import { getStrapiMedia } from "../../utils/medias";

export default {
  async asyncData({ $strapi, store, error, params }) {
    const matchingCategories = await $strapi.find("products-categories", {
      slug: params.slug,
    });
    try {
      const response = await $strapi.find("produits");
      store.commit("setProducts", response);
    } catch (e) {
      error(e);
    }
    return {
      productsC: await $strapi.find("products-categories"),
      products: matchingCategories[0],
      allProduct: await $strapi.find("produits", {
        "products_categorie.slug": params.slug,
      }),
    };
  },

  head: {
    title: "Produits de terroir Bordeaux | MyTerroir",
    meta: [
      {
        hid: "Produits de terroir Bordeaux | MyTerroir",
        name: "Produits de terroir Bordeaux | MyTerroir",
        content:
          "Retrouvez la liste de nos produits de terroir que nous avons spécialement sélectionné pour vous. Charcuteries, viandes, fromages il y en a pour tous les gôuts.",
        keywords:
          "Producteurs, Bordeaux, Producteurs-Bordeaux, Boutique, boutique, Produits de terroir, charcuterie, charcuteries, fromage, fromages, viandes, viande, brasero, plancha, mariages, cocktails, buffets, repas",
      },
    ],
  },

  components: {
    HeroBoutique,
    Newsletter,
  },
  data() {
    return {
      rayons: false,
      // products: [],
    };
  },
  mixins: [Vue2Filters.mixin],

  computed: {
    ...mapGetters(["allProducts"]),
  },

  methods: {
    ...mapMutations("cart", ["addOne"]),
    ...mapMutations("charcuterie", ["addProductQuantity"]),
    ...mapMutations("fromages", ["addProductQuantityF"]),
    ...mapMutations("viande", ["addProductQuantityV"]),
    ...mapMutations("charcuterie", ["removeQuantity"]),
    ...mapMutations("fromages", ["removeQuantityF"]),
    ...mapMutations("viande", ["removeQuantityV"]),
    getStrapiMedia,
  },
};
</script>

<style scoped>

.nuxt-link-active {
  color: var(--orange)!important;
  font-family: bodyBold!important;
}

a {
    text-decoration: none;
    color: var(--Body)
}

.products_box {
  display: flex;
  margin: 50px auto 100px auto;
  flex-flow: column;
  height: 100%;
  justify-content: space-between;
  align-items: flex-start;
}

.categories_products_mobile {
  display: flex;
  width: 100%;
  padding: 20px 15px;
  position: sticky;
  position: -webkit-sticky;
  font-size: 14px;
  border-top: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);
  top: 70px;
  margin-bottom: 30px;
  font-family: bodyBold, sans-serif;
  height: 100%;
  background-color: var(--white);
  z-index: 3;
  flex-flow: column;
  justify-content: space-between;
}

.top_bar {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.rayons {
  font-family: body, sans-serif;
  display: flex;
  flex-flow: row;
  align-items: center;
}

.open_rayon {
  display: flex;
  flex-flow: row wrap;
}

.rayons img {
  width: 20px;
  transition: all 0.3s;
}

.rotate {
  transform: rotate(180deg);
}

.categorie_mobile {
  display: flex;
  flex-flow: row wrap;
  margin-top: 10px;
  font-size: 12px;
  font-family: body, sans-serif;
  color: var(--Body);
}

.categorie_mobile p {
  margin-right: 20px;
  border: 1px solid var(--gray-light);
  padding: 10px 20px;
  border-radius: 3px;
  margin-bottom: 10px;
}

.all {
   margin-right: 20px;
  border: 1px solid var(--gray-light);
  padding: 10px 20px;
  margin-top: 10px;
  font-size: 12px;
  font-family: body, sans-serif;
  color: var(--Body);
  border-radius: 3px;
  margin-bottom: 10px;
}

.categories_products_desktop {
  display: none;
}

hr {
  margin: 15px 0;
  width: 100%;
  border: none;
  background-color: var(--gray);
  height: 1px;
}

.categories_products p {
  text-transform: uppercase;
  font-family: bodyBold, sans-serif;
  letter-spacing: 1px;
}

.products_cards {
  width: 100%;
  display: flex;
  margin-top: 20px;
  padding: 0 15px 0 15px;
  flex-flow: row wrap;
  align-items: flex-end;
  justify-content: space-between;
}

.card {
  width: 48%;
  margin-bottom: 25px;
}

.img {
  position: relative;
}

.img img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  background-color: var(--gray);
  position: relative;
}

.addCart {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: var(--orange);
  border-radius: 50%;
  font-size: 20px;
  color: var(--white);
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  top: 10px;
  z-index: 2;
  right: 10px;
}

.none {
  position: absolute;
  z-index: 2;
  background-color: var(--orange);
  padding: 10px 20px;
  font-size: 10px;
  color: var(--white);
  display: flex;
  justify-content: center;
  pointer-events: none;
  align-items: center;
  top: 0px;
  right: 0px;
}

.titleProducts {
  margin-top: 5px;
  color: var(--Body);
  height: 50px;
  width: 90%;
  font-size: 12px;
}

.price {
  display: flex;
  flex-flow: row;
  align-items: flex-end;
  margin-top: 10px;
}

.price p:nth-child(1) {
  font-family: bodyBold, sans-serif;
}

.price p:nth-child(2) {
  margin: 0px 10px;
  color: var(--Body);
}

.price p:nth-child(3) {
  font-size: 12px;
  color: var(--Body);
}

@media screen and (min-width: 768px) {
  .card {
    width: 30%;
    margin-bottom: 25px;
  }
}
@media screen and (min-width: 1024px) {
  .card {
    width: 21%;
    margin-bottom: 25px;
  }
}

@media screen and (min-width: 1200px) {
  .products_box {
    display: flex;
    max-width: 1200px;
    margin: 130px auto 100px auto;
    flex-flow: row wrap;
    height: 100%;
    justify-content: space-between;
    align-items: flex-start;
  }

  .categories_products_mobile {
    display: none;
  }

  .categories_products_desktop {
    display: flex;
    position: sticky;
    position: -webkit-sticky;
    top: 150px;
    height: 100%;
    padding: 0 0;
    font-family: bodyBold, sans-serif;
    flex-flow: column;
    align-items: flex-start;
  }

  hr {
    margin: 15px 0;
    width: 100%;
    border: none;
    background-color: var(--gray);
    height: 1px;
  }

  

   .categories_products_desktop a  {
    text-transform: uppercase;
    font-family: body, sans-serif;
    letter-spacing: 1px;
    width: 100%;
    color: var(--black);
    margin-bottom: 20px; 

    font-size: 14px;

  
   }

  .products_cards {
    width: 80%;
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    justify-content: space-between;
  }

  .card {
    width: 22.5%;
    margin-bottom: 25px;
  }

  .img img {
    width: 220px;
    height: 220px;
    background-color: var(--gray);
    position: relative;
    z-index: 2;
  }

  .addCart {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: var(--orange);
    border-radius: 50%;
    font-size: 20px;
    color: var(--white);
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    top: 10px;
    right: 10px;
  }

  .none {
    position: absolute;

    background-color: var(--orange);
    padding: 10px 20px;
    font-size: 12px;
    color: var(--white);
    display: flex;
    justify-content: center;
    pointer-events: none;
    align-items: center;
    top: 0px;
    right: 0px;
  }

  .titleProducts {
    margin-top: 5px;
    color: var(--Body);
    height: 50px;
    font-size: 14px;
  }

  .price {
    display: flex;
    flex-flow: row;
    align-items: flex-end;
    margin-top: 10px;
  }

  .price p:nth-child(1) {
    font-family: bodyBold, sans-serif;
  }

  .price p:nth-child(2) {
    margin: 0px 10px;
    color: var(--Body);
  }

  .price p:nth-child(3) {
    font-size: 12px;
    color: var(--Body);
  }
}

@media screen and (min-width: 1400px) {
  .products_box {
    display: flex;
    max-width: 1400px;
    margin: 130px auto 100px auto;
    flex-flow: row wrap;
    height: 100%;
    justify-content: space-between;
    align-items: flex-start;
  }

  .products_cards {
    justify-content: flex-start;
  }

  .card {
    margin-right: 20px;
  }
  .img {
    position: relative;
  }

  .img img {
    width: 240px;
    object-fit: cover;
    height: 240px;
    background-color: var(--gray);
    position: relative;
  }
}
</style>
