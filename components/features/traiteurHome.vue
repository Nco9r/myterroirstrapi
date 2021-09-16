<template>
  <section class="about">
    <div class="about_content">
      <h2>Le service traiteur de my terroir</h2>
      <hr />
      <p>
        Cassez les codes, choisissez un
        traiteur sur Bordeaux pas comme les
        autres qui vous propose une sélection de produits de
        qualité dénichée chez des
        producteurs artisanaux en France, Espagne et en Italie.
        Vous organisez votre mariage, un anniversaire ou
        simplement des retrouvailles entre copains.
        Choisissez avec nous les produits qui s’accorderont au
        mieux avec votre événement. Nous pouvons nous occuper
        des services complémentaires comme la vaisselle ou le
        mobilier.
      </p>
      <nuxt-link to="/traiteur"
        ><button>
          Nos prestations
        </button></nuxt-link
      >
    </div>
    <div class="about_img">
      <img src="~assets/img/png/traiteur.jpg" alt="image de produits" />
      <div class="cublic">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
strong {
  color: var(--Body);
}

.about {
  display: flex;
  flex-flow: column;
  padding: 50px 15px;
}

.about_content h2 {
  color: var(--black);
  font-size: 24px;
  line-height: 34px;
}

.about_content hr {
  border: none;
  width: 30px;
  margin: 10px 0;
  height: 2px;
  border-radius: 10px;
  background-color: var(--orange);
}

.about_content p {
  color: var(--Body);
  font-size: 14px;
  margin-top: 20px;
  line-height: 26px;
  margin-bottom: 10px;
}

.about_content button {
  margin-top: 20px;
  background-color: var(--orange);
  padding: 10px 48px;
  color: var(--white);
  font-size: 14px;
  width: 100%;
  margin-bottom: 30px;
  font-family: bodyBold;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.overbutton {
  margin-top: 10px !important;
  background-color: transparent !important;
  padding: 10px 48px;
  color: var(--orange) !important;
  font-size: 14px;
  width: 100%;
  border: 1px solid var(--orange) !important;
  font-family: bodyBold;
  border: none;
  margin-bottom: 30px;
  cursor: pointer;
  transition: all 0.3s;
}

.about_content button:hover {
  background-color: var(--black);
}

.about_img {
  display: flex;
  flex-flow: column;
  margin-top: 20px;
}

.about_img img {
  width: 100%;
}



@media screen and (min-width: 1024px) {
 .about {
    display: flex;
    flex-flow: row-reverse;
    margin: 50px auto 50px auto;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 900px;
  }

  .about_content {
      width: 40%;
  }

  .about_content h2 {
      width: 400px;
      font-size: 32px; 
      line-height: 44px;
  }

  .about_content p {
      font-size: 14px; 
      line-height: 26px;
      width: 350px;
  }

  .about_img {
      width: 48%;
      position: relative;
  }

  .about_img img {
  max-width: 100%;
    height: 320px;
    object-fit: cover;
  }

  .cublic {
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    right: -44px;
    width: 52%;
    background-color: var(--orange);
    -webkit-transform: translateY(10%);
    -ms-transform: translateY(10%);
    transform: translateY(10%);
  }

  .about_content button {
    width: 200Px;
    padding: 11px 30px; 
  }
}
@media screen and (min-width: 1200px) {
  .about_content p {
    width: 500px;
  }

  .about {
    max-width: 1200px;
    margin: 50px auto 50px auto;
  }
}

@media screen and (min-width: 1600px) {
  .about_content p {
    width: 500px;
  }

  .about {
    max-width: 1400px;
    margin: 50px auto 50px auto;
  }
}
</style>
