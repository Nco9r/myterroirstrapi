<template>
  <div>
    <section class="hero">
      <div class="content_hero">
        <div class="title_hero">
          <h1>Retrouvez toutes nos <span class="black">actualités</span></h1>
        </div>
        <div class="content">
          <p>
            Suivez l'actualités de nos producteurs, des salons et des événements
            que nous faisons.
          </p>
        </div>
        <div class="cta">
          <nuxt-link to="/boutique"><button>Boutique</button></nuxt-link>
        </div>
        <div class="sociaux">
          <a href="https://fr-fr.facebook.com/myterroir/" target="_blank"
            ><img src="~assets/img/svg/facebook.svg" alt=""
          /></a>
          <a href="https://www.instagram.com/myterroir/?hl=fr" target="_blank"
            ><img src="~assets/img/svg/instagram.svg" alt=""
          /></a>
          <a
            href="https://www.linkedin.com/company/myterroir/?originalSubdomain=fr"
            target="_blank"
            ><img src="~assets/img/svg/linkedin.svg" alt=""
          /></a>
          <p>#leplaisirdugoût</p>
        </div>
      </div>
      <div class="img_hero">
        <img src="~assets/img/png/brasero.jpg" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  background-color: var(--beige);
  background-image: url("~assets/img/png/texture_mt.png");
  background-repeat: repeat;

  background-size: 90%;
  /* display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center; */
  position: relative;
}

.black {
  color: var(--black);
}
.content_hero {
   padding: 150px 20px 50px 20px;
}
 


.content_hero h1 {
  color: var(--white);
  font-size: 32px;
  line-height: 42px;
}

.content_hero p {
  color: var(--white);
  margin-top: 20px;
}

.cta button {
  margin-top: 20px;
  background-color: var(--black);
  padding: 10px 28px;
  color: var(--white);
  font-size: 16px;
  cursor: pointer;
  font-family: bodyBold;
  border: none;
  box-shadow: 5px 5px rgba(5, 5, 5, 0.274);
}

.sociaux {
  display: flex;
  margin-top: 100px;
  align-items: flex-end;
}

.sociaux img {
  width: 30px;
  margin-right: 10px;
}

.img_hero img {
  width: 100%;
  
}


</style>
