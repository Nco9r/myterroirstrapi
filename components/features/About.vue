<template>
  <section class="about">
    <div class="about_content">
      <h2>dénicheur de <span>produits</span> authentiques.</h2>
      <hr />
      <p>
        Notre secret : de bons <strong>produits</strong> achetés directement au <strong>producteur</strong>, une
        équipe <strong>passionnée</strong>, motivée et quelques bons <strong>livres</strong> de grand-mères. Bon
        on avoue : il nous aura fallu 5 ans, <strong>beaucoup de travail</strong>, de nombreux
        <strong>voyages</strong> et autant de rencontres pour pouvoir vous proposer en toute
        humilité notre <strong>expertise</strong> en la matière. Pourquoi chercher compliqué
        quand nous pouvons vous <strong>régaler en toute simplicité!</strong>
      </p>
      <nuxt-link to='/boutique'>
      <button>
        Boutique
      </button>
      </nuxt-link>
    </div>
    <div class="about_img">
      <img src="~assets/img/png/authentiques.jpg" alt="image de produits" />
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
  font-family: bodyBold, sans-serif; 
  color: var(--black);
}
.about {
  display: flex;
  flex-flow: column;
  padding: 30px 15px;
}

.about_content h2 {
  color: var(--black);
  font-size: 24px;
  line-height: 32px;
}



.about_content hr {
  border: none;
  width: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 2px;
  border-radius: 10px;
  background-color: var(--orange);
}

.about_content p {
  color: var(--Body);
  font-size: 14px;
  margin-top: 20px;
  line-height: 28px;
}

.about_content button {
  margin-top: 30px;
  background-color: var(--orange);
  padding: 12px 48px;
  color: var(--white);
  border: none; 
  font-size: 14px;
  font-family: bodyBold;
  cursor: pointer;
  transition: all .3s; 
  width: 100%;
  margin-bottom: 30px;
}

.about_content button:hover {
   background-color: var(--black);
}

.about_img {
  display: flex;
  flex-flow: column;
  margin-top: 20px;
  position: relative;
}

.about_img img {
  width: 100%;

 

}

@media screen and (min-width: 1024px) {
  .about {
    display: flex;
    flex-flow: row;
    margin: 700px auto 100px auto;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1000px;
  }

  .about_content {
      width: 40%;
  }

  .about_content h2 {
      width: 500px;
      font-size: 32px; 
      line-height: 44px;
  }

  .about_content p {
      font-size: 14px; 
      line-height: 26px;
      width: 450px;
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
    margin: 700px auto 50px auto;
  }
}

@media screen and (min-width: 1600px) {
  .about_content p {
    width: 500px;
  }

  .about {
    max-width: 1400px;
    margin: 750px auto 50px auto;
  }
}


</style>
