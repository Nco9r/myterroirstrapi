<template>
  <div>
    <header class="top_bar_color">
      <div class="block_header">
        <div class="header_left">
          <a href="/"
            ><div class="logo">
              <img src="~assets/img/svg/logo_mt.svg" alt="" />
            </div>
          </a>
          <div class="items_menu_desktop">
            <nuxt-link
              :class="{ items_menu_scroll: scrollPosition > 100 }"
              to="/"
              >Accueil</nuxt-link
            >
            <nuxt-link
              :class="{ items_menu_scroll: scrollPosition > 100 }"
              to="/traiteur"
              >Traiteur</nuxt-link
            >

            <nuxt-link
              :class="{ items_menu_scroll: scrollPosition > 100 }"
              to="/blogs"
              >Blog</nuxt-link
            >
            <nuxt-link
              :class="{ items_menu_scroll: scrollPosition > 100 }"
              to="/boutique"
              >Boutique</nuxt-link
            >
          </div>
        </div>
        <div class="header_right">
          <div class="items_menu_mobile">
            <div class="cart" @click="cart = !cart">
              <img src="~assets/img/svg/cart.svg" alt="" />
              <p v-if="carts.length > 0">{{ carts.length }}</p>
            </div>
            <span></span>
            <p @click="openMenu = !openMenu">Menu</p>
          </div>
          <div class="cta_header">
            <div class="cart" @click="cart = !cart">
              <img src="~assets/img/svg/cart.svg" alt="" />
              <p v-if="carts.length > 0">{{ carts.length }}</p>
            </div>
            <span></span>
            <nuxt-link to="/contact">
            <button>Contact</button>
            </nuxt-link>
          </div>
        </div>
        <transition name="open" appear>
          <div class="menu_mobile" v-if="openMenu" @click="cart = false">
            <div class="top_bar_menu">
              <div class="logo_menu">
                <img src="~assets/img/svg/logo_mt.svg" alt="" />
              </div>
              <div class="close_menu">
                <p @click="openMenu = !openMenu">Retour</p>
              </div>
            </div>
            <div class="items_menu_mobile_fixed" @click="openMenu = !openMenu">
              <p>MENU</p>
              <nuxt-link to="/">Accueil</nuxt-link>
              <nuxt-link to="/traiteur">Traiteur</nuxt-link>
              <nuxt-link to="/blogs">Blog</nuxt-link>
              <nuxt-link to="/boutique">Boutique</nuxt-link>
            </div>
            <hr />
            <div class="button_contact" @click="openMenu = !openMenu">
              <nuxt-link to="/contact"><button>
                Obtenir mon devis
              </button></nuxt-link>
            </div>
            <div class="sociaux">
              <p>NOUS SUIVRE</p>
              <div class="icons_sociaux">
                <img src="~assets/img/svg/facebook.svg" alt="" />
                <img src="~assets/img/svg/instagram.svg" alt="" />
                <img src="~assets/img/svg/linkedin.svg" alt="" />
              </div>
            </div>
            <div class="copyright">
              <div class="contact_menu">
                <p>+33 (0)7 54 82 76 76</p>
                <p>contact@my-terroir.fr</p>
              </div>
              <div class="legales">
                <p>©My Terroir 2021</p>
                <nuxt-link to="/mentions-legales">Mentions légales</nuxt-link>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </header>
     <div>
    <div class="overlay" v-if="cart" @click="cart = !cart"></div>
    <transition name="cartOpen" appear>
      <section class="panier" v-if="cart">
        <div class="title_panier">
          <h2>Mon panier</h2>
          <svg
            @click="cart = !cart"
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
          <div class="cta_cart" @click="cart = !cart">
            <p>Continuer achats</p>
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
    <!-- <Cart v-if="cart" :cart="cart" /> -->
    <devisHeader :devis="devis" v-if="devis" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations} from "vuex";
import Cart from "../boutique/cart";
import devisHeader from "../default/devisHeader";
export default {
  name: "TheHeader",
  components: {
    Cart,
    devisHeader,
  },
  data() {
    return {
      openMenu: false,
      scrollPosition: null,
      cart: false,
      devis: false,
    };
  },
  computed: {
    carts() {
      return this.$store.state.cart.datas;
    },
     ...mapGetters('cart', ['total'])
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
     ...mapMutations('cart', ['addQuantity']),
    ...mapMutations('cart', ['removeQuantity']),
    ...mapMutations('cart', ['deleteOne']),
  },
};
</script>

<style scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  justify-content: space-between;
  z-index: 100;
  transition: all 0.3s ease-in-out;
}

.top_bar_color {
  background-color: var(--white);
}

.top_bar_flex {
  display: flex;
}

.block_header {
  display: flex;
  align-items: center;
  margin: auto;
  padding: 10px 20px 5px 20px;
  justify-content: space-between;
}

.logo img {
  width: 70px;
  z-index: 100;
}

.cta_header {
  display: none;
}

.menu_mobile {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 30px 15px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--black);
  background-image: url("~assets/img/png/texture_mt.png");
  height: 100%;
  overflow-y: scroll;
  z-index: 2;
}

.top_bar_menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.menu_mobile .logo_menu img {
  width: 80px;
}

.close_menu p {
  background-color: var(--orange);
  padding: 5px 15px;
  font-family: bodyBold, sans-serif;
  box-shadow: 5px 5px rgba(177, 78, 12, 0.274);
  transform: rotate(-3deg) !important;
  color: var(--white) !important;
}

.items_menu_mobile_fixed {
  display: flex;
  flex-flow: column;
  padding: 10% 20px 20px 20px;
}

.items_menu_mobile_fixed p {
  color: var(--white);
  font-size: 14px;
  font-family: bodyBold, sans-serif;
  margin-bottom: 20px;
}

.cart {
  cursor: pointer;
  position: relative;
}

.cart p {
  position: absolute;
  background-color: var(--orange) !important;
  height: 20px;
  font-size: 10px !important;
  width: 20px;
  color: var(--white);
  top: 0;
  left: 15px;
  border-radius: 50%;
  box-shadow: none !important;
  display: flex;
  font-family: bodyBold, sans-serif;
  justify-content: center;
  align-items: center;
  transform: rotate(3deg) !important;
}

.items_menu_mobile_fixed a {
  font-size: 20px;
  text-decoration: none;
  color: var(--white);
  font-family: bodyBold, sans-serif;
  margin-bottom: 5px;
  margin-top: 5px;
  opacity: 0;
  animation: top 1s forwards;
}

@keyframes top {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

.items_menu_mobile_fixed a:nth-child(2) {
  animation-delay: 0.2s;
}
.items_menu_mobile_fixed a:nth-child(3) {
  animation-delay: 0.3s;
}

.items_menu_mobile_fixed a:nth-child(4) {
  animation-delay: 0.4s;
}

.items_menu_mobile_fixed a:nth-child(5) {
  animation-delay: 0.5s;
}

.items_menu_mobile_fixed a:nth-child(6) {
  animation-delay: 0.6s;
}

hr {
  border: none;
  width: 30px;
  height: 2px;
  margin: 0 20px;
  border-radius: 10px;
  background-color: var(--white);
}

.button_contact button {
  margin-top: 30px;
  background-color: var(--orange);
  padding: 12px 48px;
  margin-left: 20px;
  text-align: center;
  color: var(--white);
  font-size: 16px;
  font-family: bodyBold;
  border: none;
  cursor: pointer;
}

.sociaux {
  margin: 50px 20px;
}

.sociaux img {
  width: 30px;
  margin-right: 5px;
}

.sociaux p {
  color: var(--white);
  font-size: 14px;
  font-family: bodyBold, sans-serif;
  margin-bottom: 20px;
}

.copyright {
  display: flex;
  position: absolute;
  justify-content: space-between;
  bottom: 20px;
  left: 30px;
  right: 20px;
}

.copyright p {
  font-size: 12px;
  color: var(--white);
  font-family: bodyBold, sans-serif;
}

.contact_menu p:nth-child(2) {
  margin-top: 5px;
  font-family: body, sans-serif;
}
.legales a {
  color: var(--white) !important;
  text-decoration: none;
  font-size: 12px;
  margin: 0;
  padding: 0;
}

.items_menu_mobile {
  display: flex;
  align-items: center;
  width: 150px;
  justify-content: space-between;
}

.items_menu_mobile .cart {
  position: relative;
}

.items_menu_mobile .cart .number_cart {
  margin-top: -5px;
  background-color: var(--orange);
  text-align: center;
  position: absolute;
  width: 19px;
  border-radius: 50%;
  height: 19px;
  margin-left: -5px;
}

.items_menu_mobile .cart img {
  width: 30px;
}

.items_menu_mobile span {
  width: 2px;
  height: 26px;
  border: none;
  background-color: var(--black);
}

.items_menu_mobile p {
  background-color: var(--black);
  padding: 5px 15px;
  font-family: bodyBold, sans-serif;
  box-shadow: 5px 5px rgba(5, 5, 5, 0.274);
  transform: rotate(-3deg) !important;
  color: var(--white) !important;
  font-size: 14px;
}

.items_menu_desktop {
  display: none;
}

.nuxt-link-exact-active {
  color: var(--orange) !important;
  text-decoration: none;
  font-family: bodyBold, sans-serif;
}

.open-enter-active {
  animation: slide 0.3s;
}

.open-leave-active {
  animation: slideClose 0.3s;
}

@keyframes slide {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideClose {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

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

.cta_cart p {
  width: 48%;
  border: none;
  padding: 12px 2px;
  font-family: bodyBold, sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
   color: white;
  background-color: var(--black);
  text-decoration: none;
  cursor: pointer;
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

@media screen and (min-width: 768px) {
  .menu_mobile {
    width: 50%;
    right: 0;
  }

  

  .open-enter-active {
    animation: slide 0.3s;
  }

  .open-leave-active {
    animation: slideClose 0.3s;
  }

  @keyframes slide {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideClose {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
}

@media screen and (min-width: 1024px) {
  header {
    width: 100%;
    /* backgrou
    nd-color: var(--gray); */
    
  }

  .block_header {
    max-width: 900px;
    margin: auto;
    padding: 20px 0;
  }

  .cart {
    cursor: pointer;
  }
  .menu_mobile {
    display: none;
  }

  .cta_header {
    display: flex;
    width: 300px;
    justify-content: space-between;
    align-items: center;
  }

  .cta_header span {
    width: 2px;
    height: 26px;
    border: none;
    background-color: var(--black);
  }

  .cta_header .cart img {
    width: 30px;
  }

  .nuxt-link-exact-active {
    background-color: var(--black);
    padding: 5px 10px;
    box-shadow: 5px 5px rgba(5, 5, 5, 0.274);
    transform: rotate(-3deg) !important;
    color: var(--white) !important;
    z-index: 3 !important;
  }

  .header_left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .logo img {
    width: 70px;
  }

  .items_menu_desktop {
    margin-left: 50px;
    display: flex;
    align-items: center;
  }

  .items_menu_mobile {
    display: none;
  }

  .items_menu_desktop a {
    margin-right: 30px;
    font-size: 13px;
    font-family: bodyBold;
    text-decoration: none;
    color: #585858;
    transition: all 0.3s;
  }

  .cta_header {
    display: flex;
  }

  .cta_header button {
    background-color: var(--orange);
    padding: 12px 26px;
    color: var(--white);
    font-size: 13px;
    font-family: bodyBold;
    border: none;
    cursor: pointer;
  }

  .items_menu_desktop a:hover {
    color: var(--orange) !important;
  }

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
  .block_header {
    max-width: 1200px;
    margin: auto;
    padding: 20px 0;
  }

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
  .block_header {
    max-width: 1400px;
    margin: auto;
    padding: 20px 0;
  }

   .panier {
    width: 20%;
    position: fixed;
    right: 0;
    z-index: 150;

    
  }
}
</style>
