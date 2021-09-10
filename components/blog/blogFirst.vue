<template>
  <section class="getBlog">
    <div class="card_first" v-for="b in blogsf" :key="b.id">
      <div class="block_content">
        <div class="title_blog">
          <p class="categorie">{{b.categorie}}</p>
          <h2>{{ b.title }}</h2>
          <p class="description">{{b.description}}</p>
          <p class="datetime">{{b.date}}</p>
          <nuxt-link
        :key="b.id"
        :to="{ name: 'blogs-slug', params: { slug: b.slug } }"
      ><button>Lire la suite</button></nuxt-link>
        </div>
      </div>
      <div class="block_img">
        <img :src="getStrapiMedia(b.image.url)" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import { getStrapiMedia } from "../../utils/medias";

export default {
  props: ["blogsf"],
  methods: {
    getStrapiMedia,
  },
};
</script>

<style scoped>
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
  background-color: var(--white);
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
  color: var(--orange);
  font-family: bodyBold, sans-serif;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 14px;
}

.block_content h2 {
  font-family: bodyBold, sans-serif;
  color: var(--black);
  line-height: 40px;
  margin-bottom: 30px;
  font-size: 28px;
}

.description {
  font-size: 14px;
  line-height: 28px;
  font-family: body, sans-serif;
  color: var(--Body);
  margin-bottom: 30px;
}

.datetime {
  font-size: 12px;
  font-family: body, sans-serif;
  color: var(--Body);
  margin-bottom: 40px;
}

button {
  background-color: var(--orange);
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
    margin: 120px auto 50px auto;
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
    margin-top: 20px;
  }

  .block_content h2 {
    font-family: bodyBold, sans-serif;
    width: 500px;
    color: var(--black);
    line-height: 42px;
    margin-bottom: 30px;
    font-size: 32px;
  }

  .description {
    font-size: 18px;
    width: 500px;
    line-height: 32px;
    font-family: body, sans-serif;
    color: var(--Body);
    margin-bottom: 30px;
  }

  .datetime {
    font-size: 12px;
    font-family: body, sans-serif;
    color: var(--Body);
    margin-bottom: 40px;
  }

  button {
    background-color: var(--orange);
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
    width: 45%;
    background-color: var(--white);
    height: 500px;
    position: absolute;
    padding: 30px 0px 30px 0px;
    left: 0;
    top: 50px;
    border-radius: 6px;
    z-index: 1;
  }

  .block_img {
    width: 80%;
    justify-content: flex-end;
    display: flex;
    margin-left: 270px;
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
    margin-top: 20px;
  }

  .block_content h2 {
    font-family: bodyBold, sans-serif;
    width: 500px;
    color: var(--black);
    line-height: 42px;
    margin-bottom: 30px;
    font-size: 32px;
  }

  .description {
    font-size: 18px;
    width: 500px;
    line-height: 32px;
    font-family: body, sans-serif;
    color: var(--Body);
    margin-bottom: 30px;
  }

  .datetime {
    font-size: 12px;
    font-family: body, sans-serif;
    color: var(--Body);
    margin-bottom: 40px;
  }

  button {
    background-color: var(--orange);
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
