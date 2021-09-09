<template>
  <section class="cards">
      <div class="blogCard" v-for="blog in blogsrubrique" :key="blog.id">
          <nuxt-link :key="blog.id"
            :to="{ name: 'blogs-slug', params: { slug: blog.slug } }">
              <div class="picture_wrapper">
                  <img :src="getStrapiMedia(blog.image.url)" alt="">
              </div>
              <p class="tagline">{{blog.categorie}}</p>
              <div class="title">
                  <h5>{{blog.title}}</h5>
              </div>
          </nuxt-link>
      </div>
  </section>
</template>

<script>
import { getStrapiMedia } from '../../utils/medias'

export default {
    props: {
        blogsrubrique: Array,
    },
    methods: {
        getStrapiMedia
    }

}
</script>

<style scoped>

a {
    text-decoration: none;
}

.cards {
    display: flex; 
    flex-flow: row wrap; 
    align-items: flex-start; 
    justify-content: space-between;
    padding: 20px; 
    margin-right: -17px;
}

.blogCard {
  width: 100%;
  margin-bottom: 45px;
   padding: 0 15Px;
}


.picture_wrapper {
  position: relative;
}

.picture_wrapper::before {
  content: '';
  position: absolute;
  z-index: 2;
  bottom: 4px;
  left: 0;
  right: 0;
  height: 0;
  background-color: var(--orange);
  -webkit-transition: height 0.2s;
  transition: height 0.2s;
}

.picture_wrapper img {
  height: 224px;
  width: 100%;
  border-radius: 4px;
  object-fit: cover;
}

.tagline {
  margin: 16px 0 3px 0;
  font-family: bodyBold;
  font-size: 12px;
  text-transform: uppercase;
  color: var(--orange);
  line-height: 160%;
}

.tagline:hover {
text-decoration: underline;
}

.title {
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
}

.title h5 {
  font-weight: 600;
  font-family: bodyBold, sans-serif;
  font-size: 16px;
  color: var(--black);
  line-height: 24px;
}

.title h5:hover {
text-decoration: underline;
}

.datetime p {
  margin-top: 20px;
  color: var(--Body);
  font-size: 12px;
  font-family: body;
}

@media screen and (min-width: 1024px) {
  .blogCard {
    width: 25%;
    padding: 0;
  }

  .cards {
    display: flex; 
    flex-flow: row wrap; 
    align-items: flex-start; 
    justify-content: space-between;
    margin-top: 50px;
    padding: 0;
    margin-right: -17px;
}



  .title h5 {
    font-size: 20px;
    line-height: 32px;
  }
}

@media screen and (min-width: 1200px) {
  .blogCard {
    width: 32.3%;
    padding: 0;
  }

  .picture_wrapper img {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }

  .title h5 {
  height: 70px;
}
}



</style>