<template>
  <div class="container">
    <HeroHome />
    <About />
    <Commande />
    <traiteurHome />
    <Clients />
    <div class="actus">
      <h2>Nos actus</h2>
      <nuxt-link to='/blogs'>
      <p>Tout voir</p>
      </nuxt-link>
    </div>
    <blog :blogs="blogs" />
    <Newsletter />
  </div>
</template>

<script>
import HeroHome from "../components/features/HeroHome";
import About from "../components/features/About";
import Clients from "../components/features/Clients";
import blog from "../components/blog/blog";
import Commande from "../components/features/Commande";
import traiteurHome from "../components/features/traiteurHome";
import Newsletter from "../components/default/Newsletter";

export default {
  async asyncData({ $strapi }) {
    return {
      blogs: await $strapi.find('blogs?_sort=id:DESC&_limit=3'),

    }
  },
  components: {
    HeroHome,
    About,
    Commande,
    traiteurHome,
    blog,
    Clients,
    Newsletter,
  },
};
</script>

<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}

/* @media screen and (min-width: 1024px) {
    .container {
      width: 1250px; 
      margin: auto; 
    }
}

.container {

} */

.actus {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px 15px 50px 15px;
}

a {
  text-decoration: none;
}

.actus h2 {
  position: relative;
}

.actus h2::after {
  content:'';
  background-color: var(--orange);
  z-index: -1;
  left: 0;
  top: 10px;
  right: 0;
  width: 100%;
  height: 15px;
  position: absolute;
}

.actus p {
  font-size: 12px;
  color: var(--Body);
}

@media screen and (min-width: 1200px) {
  .actus {
    max-width: 1200px;
    margin: 60px auto;
    padding: 0;
  }

  .actus p {
    font-size: 14px;
    color: var(--Body);
  }
}


@media screen and (min-width: 1600px) {
  .actus {
    max-width: 1400px;
    margin: 20px auto 60px auto;
  }

  .actus h2 {
    font-size: 32px;
  }

  .actus p {
    font-size: 14px;
    color: var(--Body);
  }
}
</style>
