<template>
  <div>
    <main>
      <section class="recapitulatif">
        <p class="important">
          <span class="orange"> Important</span> : Le paiement de la commande se
          fera à la livraison ou au retrait de celle-ci. Merci de votre
          compréhension.
        </p>
        <form @submit="submit">
          <div class="block_left">
            <div class="title_recapitulatif">
              <h2>Informations personnelles</h2>
            </div>
            <div class="label">
              <p>Nom et prénom</p>
              <input type="text" required v-model="form.name" />
            </div>
            <div class="label">
              <p>E-mail</p>
              <input type="email" required v-model="form.email" />
            </div>
            <div class="label">
              <p>Téléphone portable</p>
              <input type="text" required v-model="form.phone" />
            </div>
            <div class="label">
              <p>Code promo</p>
              <input type="text" v-model="form.promo" />
            </div>
            <div class="label">
              <p>Conditions de livraison</p>
              <div class="livraison">
                <p
                  @click=";(retrait = true), (livraison = false)"
                  :class="{ color_orange: retrait }"
                >
                  Retrait
                </p>
                <p
                  @click=";(retrait = false), (livraison = true)"
                  :class="{ color_orange: livraison }"
                >
                  Livraison
                </p>
              </div>
            </div>
            <div class="retrait" v-if="retrait">
              <div class="title_retrait">
                <h5>Conditions de retrait.</h5>
                <p>
                  Commande à retirer au 482 rue du Courdonney <br />
                  33140 Cadaujac du lundi au vendredi de 9h à 18h à la réception
                  du SMS.
                </p>
              </div>
            </div>
            <div class="livraison_card" v-if="livraison">
              <div class="label">
                <p>Adresse</p>
                <input type="text" required v-model="form.adresse" />
              </div>
              <div class="label">
                <p>Adresse complémentaire</p>
                <input type="text" required v-model="form.adresse_2" />
              </div>
              <div class="label">
                <p>Code Postal</p>
                <input type="text" required v-model="form.cp" />
              </div>
              <div class="label">
                <p>Ville</p>
                <input type="text" required v-model="form.ville" />
              </div>
              <div class="label">
                <p>Préférence livraison</p>
                <input
                  type="text"
                  placeholder="14h-18h"
                  required
                  v-model="form.heureLivraison"
                />
              </div>
              <div class="port_livraison">
                <div class="title_retrait">
                  <h5>
                    Frais de livraison.
                  </h5>
                  <p>
                    Livraison dans toute la métropole bordelaise. Au délà
                    veuillez nous contactez.
                  </p>
                  <ul>
                    <li>Commande inférieur à 50€ = 10€ de frais</li>
                    <li>Commande entre 50€ et 100€ = 5€ de frais</li>
                    <li>
                      Commande supérieur à 100€ =
                      <span class="gratuit">Gratuit</span>
                    </li>
                  </ul>
                  <p>
                    À noter que les frais de port seront rajoutés sur la
                    confirmation de commande.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="block_right">
            <cartCheckout />
             <div class="check">
            <input type="checkbox" required @click="checkbox = !checkbox"/>
            <p>
              En cochant cette case, je reconnais avoir pris connaissance des <nuxt-link to='/conditions-generales-ventes'>Conditions Générales de Ventes (CGV)</nuxt-link> du site ainsi que sa Politique de Confidentialité et je les accepte.
            </p>
          </div>
            <div class="cta_cart">
              <nuxt-link to="/boutique">Retour</nuxt-link>
              <button :class="{pointer : !checkbox}">Commandez</button>
            </div>
          </div>
        </form>
        <div class="commande_valide" v-if="valide">
          <div class="svg_valide"></div>
          <div class="content_valide">
            <h2>Merci pour votre commande</h2>
            <p>
              Vous allez recevoir un mail de confirmation de commande! À bientôt
              chez my terroir !
            </p>
          </div>
          <div class="btn_valide" @click="commande = !commande">
            <a href="/boutique"><button>Boutique</button></a>
          </div>
        </div>
      </section>
      <Newsletter/>
    </main>
  </div>
</template>

<script>
import cartCheckout from '../../components/boutique/cartCheckout'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import cart from '../../components/boutique/cart'
import Newsletter from '../../components/default/Newsletter.vue'
// import { mapMutations } from 'vuex'

export default {
  components: {
    cartCheckout,
    Newsletter
  },
  data() {
    return {
      retrait: true,
      checkbox: false,
      livraison: false,
      valide: false,
      form: {
        name: '',
        email: '',
        phone: '',
        promo: '',
        cp: '',
        adresse: '',
        adresse_2: '',
        heureLivraison: '',
        ville: ''
      },
      cart: {
        name: 'ok'
      }
    }
  },
  methods: {
    submit(e) {
      e.preventDefault()
      // return this.$store.dispatch('cart'['SendCart'])
      this.$axios
        .post('https://apimyterroir.rouxnicolas.fr/shop', [
          this.form,
          this.$store.state.cart.datas,
          this.total
        ])
        .then((res) => (this.form = ''), (this.valide = true))
        .catch(e)
      this.error = true
    }
  },
  computed: {
    carts() {
      return this.$store.state.cart.datas
    },
    ...mapGetters('cart', ['total'])
  }
}
</script>

<style scoped>
.important {
  color: var(--Body);
  font-family: body;
  font-size: 12px;
  line-height: 22px;
  margin-bottom: 20px;
}
.recapitulatif {
  padding: 100px 15px 20px 15px;
  background-color: var(--gray);
}

.bloc_port {
  display: flex;
  margin-top: 10px;
  padding: 5px 10px;
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

.title_recapitulatif h2 {
  font-size: 20px;
  line-height: 34px;
  color: var(--black);
  margin-bottom: 10px;
}

.orange {
  color: var(--orange);
  font-family: bodyBold;
}

.label {
  margin-bottom: 15px;
}

.label p {
  padding: 10px 0 8px 5px;
  font-size: 12px;
  color: var(--Body);
  font-family: bodyBold;
}

.label input {
  width: 100%;
  border: none;
  background-color: white;
  padding: 16px 19px;
  border: 1px solid var(--gray-light);
  font-size: 16px;
  outline: none;
  border-radius: 0px;
  -webkit-appearance: none;
}

.label input::placeholder {
  font-size: 14px;
  color: var(--hint);
  font-family: body, sans-serif;
}

.livraison {
  display: flex;
  font-size: 12px;
  font-family: body;
}

.livraison p:nth-child(1) {
  background-color: var(--white);
  padding: 12px 0;
  display: flex;
  border: 1px solid var(--gray-light);
  justify-content: center;
  align-items: center;
  color: var(--orange);
  font-size: 14px;
  width: 130px;
}

.color_orange {
  background-color: var(--orange) !important;
  color: white !important;
}

.livraison p:nth-child(2) {
  background-color: white;
  border: 1px solid var(--gray-light);
  padding: 12px 0px;
  color: var(--orange);
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-left: 20px;
}

.retrait {
  margin: 20px 0px 40px 0px;
  padding: 15px;
  background-color: var(--black);
}

.retrait h5 {
  color: var(--white);
  font-size: 16px;
  font-family: bodyBold;
}

.retrait p {
  color: var(--white);
  margin-top: 10px;
  font-size: 12px;
}

.port_livraison {
  padding: 20px 15px;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: var(--black);
}

.port_livraison h5 {
  color: white;
  font-family: bodyBold;
  font-size: 16px;
}

.port_livraison p {
  color: white;
  font-family: body;
  font-size: 12px;
  margin-top: 5px;
}

.port_livraison ul {
  margin-top: 10px;
  margin-bottom: 10px;
}

.port_livraison ul li {
  color: var(--orange);
  font-size: 12px;
  margin-bottom: 5px;
}

.gratuit {
  color: white;
}

.check {
  display: flex;
  margin-top: 20px;
}

.check input {
  margin-right: 10px;
}

.check p {
  margin-top: -2px;
  font-size: 12px;
  line-height: 20px;
  color: var(--black);
}

.check p a {
  color: var(--orange);
  text-decoration: underline;
}

.pointer {
  pointer-events: none; 
  opacity: .3;
}

input[type='checkbox' i] {
  background-color: var(--black) !important;
  width: 50px;
  height: 20px;
  border-radius: 0px;
  -webkit-appearance: none;
  outline: none;
  transition: all 0.3s;
}

input[type='checkbox' i]:checked {
  background-color: var(--orange) !important;
  width: 50px;
  height: 20px;
  -webkit-appearance: none;
  display: flex;
  transition: all 0.3s;
}

input[type='checkbox' i]:checked::after {
  content: 'x';
  font-size: 16px;
  color: white;
  font-weight: bold;
  display: flex;
  margin: auto;
}

.cta_cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
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

.cta_cart button {
  width: 48%;
  border: none;
  padding: 12px 2px;
  font-family: bodyBold, sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
}

.cta_cart a:nth-child(1) {
  color: white;
  background-color: var(--black);
}

.cta_cart button:nth-child(2) {
  color: white;
  background-color: var(--orange);
}



.panier {
  background-color: var(--gray);
}

input {
  background-color: transparent;
  border: none;
}

.title_panier {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title_panier h2 {
  font-weight: lighter;
  font-size: 22px;
  line-height: 36px;
}

.products_panier p {
  font-size: 14px;
  color: rgb(138, 138, 138);
}

.price_cart p {
  font-size: 32px;
  font-family: title, sans-serif;
  font-weight: bold;
  color: var(--black);
}

.opacity {
  opacity: 0;
  pointer-events: none;
}

.title_panier {
  margin-top: 30px;
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
  background-color: var(--white);
  padding: 0 5px;
}

.title_products {
  font-size: 14px;
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

.name {
  font-size: 12px;
  margin-bottom: 10px;
  color: var(--orange);
  font-family: bodyBold, sans-serif;
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

.bottom_of_cart {
  background-color: var(--gray);
}

.table_bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 8px 10px;
  margin-top: 30px;
}

.table_bottom p {
  font-weight: bold;
}

.result {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 8px 10px;
  color: rgb(138, 138, 138);
  font-size: 13px;
  margin-top: 10px;
}

.dispo p:nth-child(2) {
  color: var(--black);
  font-weight: bold;
}

.price_cart {
  font-size: 42px;
  font-family: bebas-neue-pro, sans-serif;
  font-weight: bold;
  color: var(--black);
}

.items_products_cart {
  margin-top: 20px;
  background-color: var(--white);
  padding: 10px 20px;
  height: 50vh;
  overflow: scroll;
}

hr {
  border: none;
  width: 100%;
  height: 2px;
  background-color: var(--gray);
  display: flex;
  margin: 5px auto 0 auto;
}

.hr_product {
  border: none;
  width: 100%;
  height: 2px;
  background-color: var(--white);
  display: flex;
  margin: 15px auto 0 auto;
}

.cta_cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
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

.delete {
  margin-left: 15px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: var(--orange);
}
.commande_valide {
  position: fixed;
  background-color: var(--black);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url('~assets/img/png/texture_mt.png');
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  bottom: 0;
  right: 0;
  z-index: 90;
  padding: 0 30px;
}

.content_valide h2 {
  color: white;
  font-size: 32px;
  line-height: 46px;
  text-align: center;
}

.content_valide p {
  color: white;
  margin-top: 20px;
  padding: 0 10px;
  line-height: 24px;
  text-align: center;
  font-size: 14px;
}

.btn_valide button {
  margin: 30px 15px;
  padding: 12px 46px;
  font-family: bodyBold, sans-serif;
  background-color: var(--orange);
  border: none;
  box-shadow: 4px 4px rgba(218, 71, 9, 0.486);
  text-decoration: none;
  color: white;
  font-size: 14px;
  cursor: pointer;
  outline: none;
}

.btn_valide button svg {
  margin-right: 10px;
}

@media screen and (min-width: 768px) {
  form {
    padding: 10px 50px;
  }
}

@media screen and (min-width: 1024px) {
  main {
    background-image: url('~assets/img/png/traiteur.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
  }

    .important {
      max-width: 1000px;
    margin: 10px auto;
  }

  .recapitulatif {
    padding: 100px 0px;
  }

  form {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1000px;
    margin: 10px auto;
  }

  .block_right {
    width: 45%;
    position: sticky;
    top: 130px;
  }

  .block_left {
    width: 45%;
  }

  .title_panier {
    margin-top: 0px;
  }
}

@media screen and (min-width: 1200px) {

  .important {
      max-width: 1200px;
    margin: 10px auto;
  }
  form {
     max-width: 1200px;
    margin: 20px auto 40px auto;
    padding: 30px 0;
  }

   .block_right {
    width: 45%;
    position: sticky;
    top: 150px;
  }

}

@media screen and (min-width: 1400px) {
  main {
    background-image: url('~assets/img/png/traiteur.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
  }

   .important {
      max-width: 1400px;
    margin: 20px auto 40px auto;
  }

  .recapitulatif {
    padding: 100px 150px;
  }

  form {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1400px;
    margin: 10px auto;
    padding: 10px 0;
  }

  .block_right {
    width: 45%;
    position: sticky;
    top: 130px;
  }

  .block_left {
    width: 45%;
  }

  .title_panier {
    margin-top: 0px;
  }
}
</style>
