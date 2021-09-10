<template>
  <main>
    <section class="hero"></section>
    <section class="contact">
      <div class="block_form">
        <div class="title_contact">
          <h2>Demande de devis</h2>
          <p>
            Vous avez des questions sur nos produits, notre entreprise ? Vous
            souhaitez obtenir un devis pour un événement ? Ce formulaire est fait pour vous !
          </p>
        </div>
         <form @submit="submitP">
          <div class="label">
            <p>Nom et prénom</p>
            <input type="text" required v-model="form.name" />
          </div>
          <div class="label">
            <p>E-mail</p>
            <input type="mail" required v-model="form.email" />
          </div>
          <div class="label">
            <p>Téléphone</p>
            <input type="phone" required v-model="form.phone" />
          </div>
          <div class="label">
            <p>Société (facultatif)</p>
            <input type="text" />
          </div>
          <div class="label">
            <p>Type de prestations</p>
            <select required v-model="form.prestation">
             <option  selected value="">Choisir dans la liste</option>
              <option value="Cocktails et buffets">Cocktails et buffets</option>
              <option value="Brasero-Plancha">Brasero-Plancha</option>
              <option value="Repas et Grillades">Repas et Grillades</option>
              <option value="Mariages">Mariages</option>
            </select>
          </div>
          <div class="label">
            <p>Nombre de convives</p>
            <input type="number" required v-model="form.convives" />
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
              placeholder="Si vous avez des préférences, veuillez nous les communiquer..."
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
      <div class="block_infos">
        <div class="name">
          <p>My Terroir</p>
        </div>
        <div class="lieu">
          <p>
            482 rue du Courdonney <br />
            33140, Cadaujac
          </p>
        </div>
        <div class="text">
          <p>Nous écrire</p>
          <p>contact@my-terroir.fr</p>
        </div>
        <div class="text">
          <p>Heure d'ouverture</p>
          <p>Lun - Ven : 9h/18h</p>
          <p>Sam : Fermé</p>
          <p>Dim : Fermé</p>
        </div>
      </div>
    </section>
    <Newsletter/>
  </main>
</template>

<script>
import Newsletter from '../components/default/Newsletter.vue';
export default {
  components: {Newsletter},
  data() {
    return {
      form: {
        email: '',
        name: '',
        demande:'',
        message: ''
      },
      loading: false,
      state: true,
      goodNews: false,
      error: false
    }
  },
  methods:{
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
};
</script>

<style scoped>
/* .hero {
  height: 60vh;
  width: 100%;
  background-image: url('~assets/img/png/jambon.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 100% 50%;
} */

.contact {
  height: 100%;
  padding: 120px 0px 0px 0px;
}

.title_contact h2 {
  font-size: 32px;
margin-bottom: 20px;

}

.title_contact p {
  margin-top: 10px;
  font-family: body, sans-serif;
  color: var(--Body);
  font-size: 14px;
margin-bottom: 30px;

  line-height: 26px;
}

.block_form { 
  padding: 0 15px;
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
  border: 1px solid var(--gray-light);

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

.block_infos {
  background-color: var(--gray);
  text-align: center;
  margin-top: 40px;
  padding: 50px 0;
  position: sticky;
  top: 90px;
  height: 100%;
}

.name p {
  color: var(--black);
  font-size: 18px;
  font-family: bodyBold;
  margin-bottom: 10px;
}

.lieu {
  color: var(--Body);
  font-size: 14px;
  line-height: 26px;
  font-family: body;
  margin-top: 20px;
}

.text {
  margin-top: 20px;
}

.text p:nth-child(1) {
  color: var(--Body);
  font-size: 14px;
  line-height: 26px;
  font-family: bodyBold;
  margin-top: 10px;
}

.text p:nth-child(2) {
  color: var(--Body);
  font-size: 14px;
  line-height: 26px;
  font-family: body;
}

.text p:nth-child(3) {
  color: var(--Body);
  font-size: 14px;
  line-height: 26px;
  font-family: body;
}
.text p:nth-child(4) {
  color: var(--Body);
  font-size: 14px;
  line-height: 26px;
  font-family: body;
}

@media screen and (min-width: 1024px) {
  .contact {
   max-width: 900px;
   margin: 0 auto 100px auto; 
   margin-bottom: 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
}

.block_form {
  width: 50%;
}

.block_infos {
  text-align: left;
      padding: 80px 60px 154px 60px;

}
}

@media screen and (min-width: 1024px) {
  .contact {
   max-width: 900px;
   margin: 0 auto 100px auto; 
   margin-bottom: 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
}

.block_form {
  width: 50%;
}

.block_infos {
  text-align: left;
      padding: 80px 60px 154px 60px;

}
}

@media screen and (min-width: 1200px) {
  .contact {
   max-width: 1200px;
      margin: 40px auto 100px auto; 
 
  display: flex;

  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
}

.block_form {
  width: 50%;
}

.block_infos {
  text-align: left;
  margin: 0;
    padding: 80px 160px 194px 100px;

}
}

@media screen and (min-width: 1600px) {
  .contact {
   max-width: 1400px;
      margin: 40px auto 100px auto; 
 
  display: flex;

  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
}

.block_form {
  width: 50%;
}

.block_infos {
  text-align: left;
  margin: 0;
    padding: 80px 160px 194px 100px;

}}

</style>
