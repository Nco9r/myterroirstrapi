<template>
  <main>
    <section class="hero"></section>
    <section class="contact">
      <div class="block_form">
        <div class="title_contact">
          <h2>Contact</h2>
          <p>
            Vous avez des questions sur nos produits, notre entreprise ? Vous
            voulez juste dire bonjour ? Ce formulaire est fait pour vous !
          </p>
        </div>
        <form>
          <div class="form_group">
            <label for="">Objet</label>
            <select name="" id="select">
              <option value="presse">Presse</option>
              <option value="clients">Commentaires clients</option>
              <option value="presse">Une question</option>
            </select>
          </div>
          <div class="form_group">
            <label for="">Votre email</label>
            <input type="email" placeholder="votre@email.fr" required />
          </div>
          <div class="form_group">
            <label for="">Votre message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Ecrire ici"
              required
            ></textarea>
          </div>
          <div class="form_group">
            <button>Soumettre</button>
          </div>
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
          <p>Sam : 10h/17h</p>
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
  padding: 120px 0px 0px 0px;
}

.title_contact h2 {
  font-size: 32px;
  padding: 0 20px;
}

.title_contact p {
  margin-top: 10px;
  font-family: body, sans-serif;
  color: var(--Body);
  font-size: 14px;
  padding: 0 20px;

  line-height: 26px;
}

form {
  margin-top: 30px;
  padding: 0 20px;
}

.form_group {
  display: flex;
  flex-flow: column;
  margin-bottom: 15px;
}

.form_group label {
  font-size: 12px;
  font-family: bodyBold, sans-serif;
  color: var(--Body);
  margin-bottom: 5px;
}

.form_group label::after {
  content: "*";
}

.form_group select {
  -webkit-appearance: none;
  padding: 18px 14px;
  background-color: var(--black);
  color: var(--white);
  background-image: url("~/assets/img/svg/dropdown.svg");
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

.form_group input::placeholder {
  font-family: body, sans-serif;
  opacity: 0.3;
  font-size: 14px;
}

.form_group textarea::placeholder {
  font-family: body, sans-serif;
  opacity: 0.3;
  font-size: 14px;
}

.form_group input {
  width: 100%;
  border: none;
  background-color: white;
  padding: 16px 14px;
  border: 1px solid var(--gray-light);
  font-size: 16px;
  outline: none;
  border-radius: 0px;
  -webkit-appearance: none;
}

.form_group textarea {
  width: 100%;
  border: none;
  background-color: white;
  padding: 16px 14px;
  border: 1px solid var(--gray-light);
  font-size: 16px;
  outline: none;
  border-radius: 0px;
  -webkit-appearance: none;
}

.form_group button {
  width: 50%;
  background-color: var(--orange);
  color: white;
  margin-top: 10px;
  border: none;
  font-family: bodyBold, sans-serif;
  padding: 16px 14px;
}

.block_infos {
  background-color: var(--gray);
  text-align: center;
  margin-top: 40px;
  padding: 50px 0;
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

@media screen and (min-width: 1200px) {
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

}
}

</style>
