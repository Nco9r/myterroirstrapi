<template>
  <div>
    <div class="overlay" v-if="cartOpen" @click="cartOpen = !cartOpen"></div>
    <transition name="cartOpen" appear>
      <section class="panier" v-if="cartOpen">
        <div class="title_panier">
          <h2>Mon panier</h2>
          <svg
            @click="cartOpen = !cartOpen"
            xmlns="http://www.w3.org/2000/svg"
            width="23.242"
            height="16.215"
            viewBox="0 0 23.242 16.215"
          >
            <path
              id="Tracé_1781"
              data-name="Tracé 1781"
              d="M-15.034,32.87c.209-4.165,2.718-6.645,6.452-6.97V23.6c-3.734-.325-6.244-2.777-6.452-6.941l-2.779.591a7.99,7.99,0,0,0,1.584,4.046,6.322,6.322,0,0,0,3.166,2.3H-31.823v2.3h18.761a6.21,6.21,0,0,0-3.166,2.333,7.994,7.994,0,0,0-1.584,4.017Z"
              transform="translate(31.823 -16.655)"
              fill="#202020"
            />
          </svg>
        </div>
        <div class="products_panier">
          <p>
            Il y a <strong>{{ carts.length }}</strong> produit<span
              v-if="carts.length > 1"
              >s</span
            >
            dans votre panier
          </p>
        </div>
        <!-- <div class="table_panier">
            <p>Produits</p>
            <p>Quantité</p>
            <p>Prix</p>
        </div> -->
        <div class="items_products_cart">
          <div class="products_items" v-for="cart in carts" :key="cart.id">
            <p class="name">{{ cart.name }}</p>
            <p class="title_products">
              {{ cart.producteurs }}
            </p>
            <div class="price_products">
              <p>{{ cart.prix | currency('') }} €</p>
              <div class="number_products">
                <p
                  @click="removeQuantity(cart.id)"
                  :class="{ opacity : cart.quantite === 1 }"
                >
                  -
                </p>
                <p>{{ cart.quantite }}</p>
                <p @click="addQuantity(cart.id)" :class="{ opacity : cart.quantite === cart.stocks }">+</p>
              </div>
            </div>
            <div class="delete_products">
              <p @click="deleteOne(cart.id)">Supprimer</p>
            </div>
            <hr class="hr_product" />
          </div>
        </div>
        <div class="bottom_of_cart">
          <div class="table_bottom">
            <p>TOTAL</p>
            <p>TTC</p>
          </div>
          <div class="result">
            <div class="dispo">
              <p>Disponibilité</p>
              <p>3/4 jours ouvrés</p>
            </div>
            <div class="price_cart">
              <p v-if="carts.length > 0">{{ total | currency('') }} €</p>
            </div>
          </div>
          <div class="frais_port">
            <div class="bloc_port">
              <div class="content_port">
                Frais de livraion estimés
              </div>
              <div class="price_content">
                <p v-if="total >= 1 && total < 50">10€</p>
                <p v-if="total >= 50 && total < 100">5€</p>
                <p v-if="total >= 100">Gratuit</p>
              </div>
            </div>
          </div>
          <hr />
          <div class="cta_cart" @click="cartOpen = !cartOpen">
            <nuxt-link to="/boutique">Continuer achats</nuxt-link>
            <nuxt-link
              to="/boutique/checkout"
              :class="{ opacity_valide : carts.length < 1 }"
              >Valider</nuxt-link
            >
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      cartOpen: true,
      items: {
        qty: 1
      }
    }
  },
  computed: {
    carts() {
      return this.$store.state.cart.datas
    },
    ...mapGetters('cart', ['total'])
  },
  methods: {
    ...mapMutations('cart', ['addQuantity']),
    ...mapMutations('cart', ['removeQuantity']),
    ...mapMutations('cart', ['deleteOne']),
    ...mapActions('cart', ['sendCart'])
  }
  //     computed: {
  //         carts() {
  //             return this.$store.state.cart.datas
  //         },
  //         ...mapGetters('cart', ['total'])

  //     },
  //     methods: {
  //     ...mapMutations('cart', ['deleteOne'])
  //   },
}
</script>

<style scoped>
/* TRANSITION */

.opacity {
  pointer-events: none;
  color: var(--gray-light);
}

.cartOpen-enter-active {
  animation: open 0.7s ease-in-out;
}

.cartOpen-leave-active {
  animation: close 0.7s ease-in-out;
}

@keyframes open {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes close {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}

.title_panier svg {
  cursor: pointer;
}
.bloc_port {
  display: flex;
  padding: 5px 20px;
  justify-content: space-between;
  font-size: 13px;
  color: var(--black);
}

.content_port {
  color: rgb(138, 138, 138);
}

.price_content {
  font-family: bodyBold;
  color: var(--orange);
  font-size: 15px;
}
.name {
  font-size: 14px;
  margin-bottom: 10px;
  color: var(--orange);
  font-family: bodyBold, sans-serif;
}

.panier {
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;

  background-color: white;
  z-index: 20;
  padding: 0 15px;
}

.overlay {
  position: fixed;
  inset: 0;
  -webkit-z-index: 10;
  -moz-z-index: 10;
  -ms-z-index: 10;
  -o-z-index: 10;
  z-index: 10;
  cursor: url('~assets/img/svg/arrow_mt.svg'); 
  background-color: rgba(15, 15, 15, 0.863);
}

.products_panier p {
  font-size: 14px;
  color: rgb(138, 138, 138);
}

.opacity {
  color: rgb(223, 223, 223)!important;
  pointer-events: none;
}

.opacity_valide {
  opacity: .3;
  pointer-events: none;
}

.title_panier {
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title_panier h2 {
  font-size: 22px;
  color: var(--black);
}

.table_panier {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--gray);
  padding: 8px 10px;
  margin-top: 30px;
}

strong {
  color: var(--black);
}

.table_panier p {
  font-family: bodyBold, sans-serif;
  font-size: 14px;
  color: var(--black);
}

.products_items {
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  flex-flow: column;
  padding: 0 15px;
}

.title_products {
  font-size: 12px;
  color: var(--Body);

}

.number_products {
  display: flex;
  justify-content: space-between;
  width: 92px;
  cursor: pointer;
}

.number_products input {
  display: flex;
  justify-content: space-between;
}

.number_products p {
  font-weight: bold;
  color: var(--orange);
}

.price_products {
  justify-content: space-between;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: title, sans-serif;
}

.delete_products {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}

.delete_products p {
  border: 1px solid #e9e9e9;
  padding: 10px;
  border-radius: 1px;
  font-size: 14px;
}

.delete {
  margin-left: 15px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: var(--orange);
}

.delete p {
  margin-left: 6.3px;
  margin-top: -3px;
  color: white;
}

.bottom_of_cart {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--gray);
}

.table_bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  margin: 0 15px;
  padding: 8px 10px;
  margin-top: 30px;
}

.table_bottom p {
  font-family: bodyBold, sans-serif;
  font-size: 14px;
}

.result {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  color: rgb(138, 138, 138);
  font-size: 13px;
  margin: 0 10px;
  margin-top: 10px;
}

.dispo p:nth-child(2) {
  color: var(--black);
  font-family: bodyBold, sans-serif;
  font-size: 12px;
}

.price_cart {
  font-size: 32px;
  font-family: title, sans-serif;
  font-weight: bold;
  color: var(--black);
}

.items_products_cart {
  margin-top: 20px;
}

hr {
  border: none;
  width: 90%;
  height: 2px;
  background-color: var(--white);
  display: flex;
  margin: 5px auto 0 auto;
}

.hr_product {
  border: none;
  width: 100%;
  height: 2px;
  background-color: var(--gray);
  display: flex;
  margin: 15px auto 0 auto;
}

.cta_cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 15px;
}

.cta_cart a {
  width: 48%;
  border: none;
  padding: 12px 2px;
  font-family: bodyBold, sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
}

.cta_cart a:nth-child(1) {
  color: white;
  background-color: var(--black);
}

.cta_cart a:nth-child(2) {
  color: white;
  background-color: var(--orange);
}

.paiement {
  margin: 0 15px;
  font-size: 12px;
}

.paiement p:nth-child(1) {
  color: var(--hint);
  font-weight: bold;
}

.paiement p:nth-child(2) {
  color: var(--black);
  font-weight: bold;
}

.icon_cart {
  margin: 10px 15px;
}

.icon_cart img {
  width: 30px;
  margin-right: 10px;
}

.items_products_cart {
  overflow: scroll;
  height: 45%; 
}

@media screen and (min-width: 1024px) {
  .panier {
    width: 40%;
    position: fixed;
    right: 0;
    padding: 0 20px 0 20px;
    z-index: 150;
  }

  .overlay {
    z-index: 140;
  }

  .items_products_cart {
  overflow: scroll;
  height: 53%; 
}

  .title_panier {
    margin-top: 30px;
  }

  .cartOpen-enter-active {
    animation: open 0.3s ease-in-out;
  }

  .cartOpen-leave-active {
    animation: close 0.3s ease-in-out;
  }

  @keyframes open {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes close {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
}

@media screen and (min-width: 1200px) {
  .panier {
    width: 30%;
    position: fixed;
    right: 0;
    z-index: 150;
  }
    .items_products_cart {
  overflow: scroll;
  height: 63%; 
}

}

@media screen and (min-width: 1600px) {
  .panier {
    width: 20%;
    position: fixed;
    right: 0;
    z-index: 150;

    
  }
}
</style>
