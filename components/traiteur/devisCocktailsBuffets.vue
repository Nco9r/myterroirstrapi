<template>
  <div>
    <transition name="overlay" appear>
      <div class="overlay" v-if="active_devis"></div>
    </transition>
    <div class="devis_mobile">
      <div class="intro" @click="active_devis = !active_devis">
        <p>Obtenir un devis en deux clics</p>
        <p class="fleche_bottom" :class="{ fleche_top: active_devis }">
          <svg
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
              fill="#fff"
            />
          </svg>
        </p>
      </div>
      <div class="formulaire" v-if="active_devis">
        <form @submit="submitP">
          <p class="intro_form">
            Vous souhaitez obtenir un <strong>devis</strong> pour l'organisation
            d'un événement ? Veuillez
            <strong>remplir le formulaire</strong> ci-dessous en détaillant de
            manière précise vos envies. Nous reviendrons vers vous dans les
            <strong>24h jours ouvrés.</strong>
          </p>
          <div class="label">
            <p>Nom et prénom</p>
            <input required type="text" v-model="form.name" />
          </div>
          <div class="label">
            <p>E-mail</p>
            <input required type="mail" v-model="form.email" />
          </div>
          <div class="label">
            <p>Téléphone</p>
            <input required type="phone" v-model="form.phone" />
          </div>
          <div class="label">
            <p>Société (facultatif)</p>
            <input type="text" />
          </div>
          <div class="label">
            <p>Type de prestations</p>
            <select required v-model="form.prestation">
              <option disabled selected value="">Choisir dans la liste</option>
              <option value="L'apéro">L'apéro</option>
              <option value="Buffet Basque">Buffet Basque</option>
              <option value="Buffet Français">Buffet Français</option>
              <option value="Cocktails Basque">Cocktails Basque</option>
              <option value="Cocktails Français">Cocktails Français</option>
            </select>
          </div>
          <div class="label">
            <p>Nombre de convives</p>
            <input required type="number" v-model="form.convives" />
          </div>
          <div class="label">
            <p>Lieu</p>
            <input required
              type="text"
              v-model="form.lieu"
              placeholder="482, rue du Courdonney, 33140, Cadaujac"
            />
          </div>
          <div class="label">
            <p>Date</p>
            <input required type="date" v-model="form.date" placeholder="" />
          </div>
          <div class="label">
            <p>heure</p>
            <input required type="text" v-model="form.heure" placeholder="12h00" />
          </div>
          <div class="label">
            <p>Vos préférences</p>
            <textarea
              type="text"
              v-model="form.details"
              rows="10"
              placeholder="Descriptif (alimentaire, location matériel, location vaisselle, budget…)"
            ></textarea>
          </div>
          <div class="check">
            <input type="checkbox" required />
            <p>
              En cochant cette case vous accepter que les informations fournies
              soient utilisées pour vous contacter suite à votre demande de
              devis.
            </p>
          </div>
          <div class="btn_form">
            <button v-if="state">
              Soumettre votre demande
            </button>
            <button class="loading" v-if="loading">
              Envoi en cours
            </button>
          </div>
          <p class="goodNews" v-if="goodNews">
            Nous avons bien reçu votre demande de devis, nous reviendrons vers
            vous dans les 24h jours ouvrés.
          </p>
          <p class="error" v-if="error">
            Oups, veuillez ressayer ultérieurement ou contacter le support !
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active_devis: false,
      form: {
        name: '',
        phone: '',
        email: '',
        prestation: '',
        lieu: '',
        date: '',
        convives: '',
        heure: '',
        details: '',
      },
      loading: false,
      state: true,
      goodNews: false,
      error: false
    }
  },
  methods: {
    submitP(e) {
      e.preventDefault()
      console.log({ ...this.form })
      ;(this.loading = true), (this.state = false)
        this.$axios
          .post('https://apimyterroir.rouxnicolas.fr/send', { ...this.form })
          .then(
            (res) =>
            (this.form = ''),
            (this.loading = false),
            (this.state = true),
            (this.goodNews = true)
          )
          .catch((error) => {
             ;(this.error = true),
            (this.form = ''),
            (this.loading = false),
            (this.state = true)
          })
    }
  }
}
</script>

<style scoped>
/* Gestion ERREUR */

.goodNews {
  background-color: rgb(242, 255, 242);
  color: green;
  padding: 20px 25px;
  width: 100%;
  font-size: 14px;
  margin: 0px auto 20px auto;
}

.error {
  background-color: rgb(255, 206, 206);
  color: rgb(128, 0, 0);
  padding: 10px 15px;
  font-size: 14px;
  width: 100%;
  margin: 20px auto;
}

.loading {
  pointer-events: none;
  opacity: 0.2;
}
/* TRANSITION */

.overlay-enter-active {
  animation: openOverlay 0.3s ease-in-out;
}

@keyframes openOverlay {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.overlay-leave-active {
  animation: closeOverlay 0.3s ease-in-out;
}

@keyframes closeOverlay {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.devis-enter-active {
  animation: openDevis 0.3s ease-in-out;
}

.intro-enter-active {
  animation: openDevis 0.3s ease-in-out;
}

@keyframes openDevis {
  from {
    transform: translateY(300px);
  }
  to {
    transform: translateY(0);
  }
}

.intro {
  cursor: pointer;
}

.intro_form {
  font-size: 13px;
  line-height: 26px;
  color: var(--black);
  margin-bottom: 20px;
}

.intro p {
  font-size: 14px;
  font-family: bodyBold, sans-serif;
  color: var(--white);
}

.overlay {
  position: absolute;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.603);
  left: 0;
  right: 0;
  position: fixed;
  z-index: 10;
}

form {
  overflow: scroll;
  padding: 15px 20px;
  height: 65vh;
  background-color: var(--gray);
  z-index: 20;
}

.label {
  margin-bottom: 10px;
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
  font-size: 11px;
  opacity: 0.4;
  font-family: body, sans-serif;
}

.label textarea {
  width: 100%;
  border: none;
  background-color: white;
  padding: 16px 19px;
  font-size: 16px;
  font-family: body, sans-serif;
  outline: none;
  border-radius: 0px;
  -webkit-appearance: none;
}


.label textarea::placeholder {
    font-size: 11px;
  opacity: 0.4;
  font-family: body, sans-serif;
}

.title_form_two h4 {
  color: var(--orange);
  font-weight: lighter;
  font-size: 28px;
  margin-top: 50px;
  text-transform: uppercase;
  line-height: 28px;
  margin-bottom: 10px;
}

select {
  -webkit-appearance: none;
  padding: 18px 14px;
  background-color: var(--black);
  color: var(--white);
  background-image: url('~/assets/img/svg/dropdown.svg');
  outline: none;
  width: 100%;
  font-family: bodyBold, sans-serif;
  position: relative;
  margin-bottom: 10px;
  font-size: 14px;
  background-repeat: no-repeat;
  background-position: 92% 48%;
  background-size: 22px;
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
  color: var(--black);
}

input[type='checkbox' i] {
  background-color: var(--black) !important;
  width: 30px;
  height: 20px;
  border-radius: 0px;
  -webkit-appearance: none;
  outline: none;
  transition: all 0.3s;
}

input[type='checkbox' i]:checked {
  background-color: var(--orange) !important;
  width: 30px;
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

.btn_form button {
  margin: 20px auto;
  padding: 12px 16px;
  width: 100%;
  font-family: bodyBold, sans-serif;
  background-color: var(--orange);
  border: none;
  text-decoration: none;
  color: var(--white);
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  outline: none;
}

.btn_form button:hover {
  background-color: var(--black);
}

.btn_form button svg {
  margin-right: 10px;
}

@media screen and (min-width: 768px){
    form {
    padding: 15px 75px;
}

    
}

@media screen and (min-width: 1024px){
    form {
    padding: 15px 65px;
}

 .devis_mobile {
    width: 70%;
    margin: auto; 
  }
    
}

@media screen and (min-width: 1200px) {
  .devis_mobile {
    position: absolute;
    bottom: 0;
    margin: auto;
    position: fixed;
    z-index: 20;
    width: 50%;
    overflow: scroll;
  }

  form {
    padding: 15px 65px; 
  }

  .intro {
    padding: 15px 50px;

  }
}

@media screen and (min-width: 1600px) {
  .devis_mobile {
    position: absolute;
    bottom: 0;
    margin: auto;
    position: fixed;
    z-index: 20;
    width: 40%;
    overflow: scroll;
  }

  form {
    padding: 15px 65px; 
  }

  .intro {
    padding: 15px 50px;

  }
}
</style>
