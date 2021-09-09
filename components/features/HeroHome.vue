<template>
  <section class="getBlog">
    <div class="card_first">
      <div class="block_content">
        <div class="title_blog">
          <p class="categorie">My Terroir</p>
          <h2>Le spécialiste des produits de <span class="black">Terroir</span></h2>
          <p class="description">
            Depuis 2016, My Terroir s’est spécialisé dans la sélection et la
            livraison à domicile de produits de terroir , fromages et
            charcuteries de qualités. Tous nos produits sont choisis
            minutieusement auprès d’artisans.
          </p>
          <nuxt-link to='/boutique'>
            <button>Boutique</button>
          </nuxt-link>
        </div>
      </div>
      <div class="block_img">
        <img src="~assets/img/png/brasero.jpg" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroBoutique",
  data() {
    return {
      slickOptions: {
        dots: false,
        arrows: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0,
        infinite: true,
        speed: 700,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "cubic-bezier(.945,0,0,1)",
      },
    };
  },
  methods: {
    Prev() {
      this.$refs.carousel.prev();
    },
    Next() {
      this.$refs.carousel.next();
    },
  },
};
</script>

<style scoped>

.black {
  color: var(--black);
}
.card_first {
  display: flex;
  align-items: center;
  flex-flow: column-reverse;
  position: relative;
}

.block_content {
  display: flex;
  flex-flow: column;
  width: 100%;
  background-color: var(--orange);
  background-image: url("~assets/img/png/texture.png");
  height: 500px;
  background-size: 40%;
  padding: 5px 15px 30px 15px;
  left: 0;
  margin-top: 0px;
  z-index: 1;
}

.block_img {
  width: 100%;
  justify-content: flex-end;
  display: flex;
}

.block_img img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.categorie {
  text-transform: uppercase;
  color: var(--black);
  font-family: bodyBold, sans-serif;
  margin-bottom: 20px;
  margin-top: 50px;
  font-size: 14px;
}

.block_content h2 {
  font-family: title, sans-serif;
  color: var(--white);
  line-height: 40px;
  margin-bottom: 30px;
  font-size: 28px;
}

.description {
  font-size: 14px;
  line-height: 28px;
  font-family: body, sans-serif;
  color: var(--white);
  margin-bottom: 30px;
}

.datetime {
  font-size: 12px;
  font-family: body, sans-serif;
  color: var(--white);
  margin-bottom: 40px;
}

button {
  background-color: var(--black);
  padding: 10px 48px;
  color: var(--white);
  font-size: 14px;
  cursor: pointer;
  font-family: bodyBold;
  border: none;
}

@media screen and (min-width: 1024px) {
  .getBlog {
    max-width: 1000px;
    margin: 120px auto 650px auto;
  }

  .card_first {
    display: flex;
    align-items: center;
    flex-flow: wrap nowrap;
    position: relative;
  }

  .block_content {
    display: flex;
    flex-flow: column;
    width: 60%;
    background-color: var(--black);
    height: 500px;
    position: absolute;
    padding: 30px 30px 30px 60px;
    left: 0;
    top: 50px;
    border-radius: 6px;
    z-index: 1;
  }

  .block_img {
    width: 70%;
    justify-content: flex-end;
    display: flex;
    position: absolute;
    top: 50%;
    right: 0;
  }

  .block_img img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 6px;
  }

  .categorie {
    text-transform: uppercase;
    color: var(--orange);
    font-family: bodyBold, sans-serif;
    margin-bottom: 20px;
    margin-top: 50px;
  }

  .block_content h2 {
      font-family: title, sans-serif;

    width: 500px;
    color: var(--white);
    line-height: 42px;
    margin-bottom: 30px;
    font-size: 32px;
  }

  .description {
    font-size: 18px;
    width: 500px;
    line-height: 32px;
    font-family: body, sans-serif;
    color: var(--white);
    margin-bottom: 30px;
  }

  .datetime {
    font-size: 12px;
    font-family: body, sans-serif;
    color: var(--white);
    margin-bottom: 40px;
  }

  button {
    background-color: var(--black);
    padding: 10px 48px;
    color: var(--white);
    font-size: 16px;
    cursor: pointer;
    font-family: bodyBold;
    border: none;
  }
}

@media screen and (min-width: 1200px) {
  .getBlog {
    max-width: 1200px;
    margin: 120px auto;
  }

  .card_first {
    display: flex;
    align-items: center;
    flex-flow: wrap nowrap;
    position: relative;
  }

  .block_content {
    display: flex;
    flex-flow: column;
    width: 50%;
    background-color: var(--orange);
    height: 500px;
    position: absolute;
    padding: 30px 30px 30px 60px;
    left: 0;
    top: 50px;
    border-radius: 6px;
    z-index: 1;
  }

  .block_img {
    width: 70%;
    justify-content: flex-end;
    display: flex;
    position: absolute;
    top: 50%;
    right: 0;
  }

  .block_img img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    border-radius: 6px;
  }

  .categorie {
    text-transform: uppercase;
    color: var(--black);
    font-family: bodyBold, sans-serif;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .block_content h2 {
      font-family: title, sans-serif;

    width: 500px;
    color: var(--white);
    line-height: 42px;
    margin-bottom: 20px;
    font-size: 32px;
  }

  .description {
    font-size: 18px;
    width: 500px;
    line-height: 32px;
    font-family: body, sans-serif;
    color: var(--white);
    margin-bottom: 30px;
  }

  .datetime {
    font-size: 12px;
    font-family: body, sans-serif;
    color: var(--white);
    margin-bottom: 40px;
  }

  button {
    background-color: var(--black);
    padding: 10px 48px;
    color: var(--white);
    font-size: 16px;
    cursor: pointer;
    font-family: bodyBold;
    border: none;
  }
}
@media screen and (min-width: 1600px) {
  .getBlog {
    max-width: 1400px;
    margin: 120px auto;
  }
}
</style>
