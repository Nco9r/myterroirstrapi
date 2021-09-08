<template>
  <section class="cards">
      <div class="blogCard" v-for="blog in blogsrubrique" :key="blog.id">
          <nuxt-link :key="blog.id"
            :to="{ name: 'blog-slug', params: { slug: blog.slug } }">
              <div class="picture_wrapper">
                  <img :src="getStrapiMedia(blog.image.url)" alt="">
              </div>
              <p class="tagline">{{blog.date}}</p>
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
    width: 50%;
    padding-right: 17px;
    margin-bottom: 45px
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
    object-fit: cover;
}

.tagline {
    margin: 16px 0 10px 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 160%;
    color: #8C8C8C;
    text-transform: capitalize;
}

.title {
    font-weight: 600;
    font-size: 20px;
    line-height: 23px
}

.title h5 { 
    font-weight: 600;
    font-family: bodyBold, sans-serif;
    font-size: 16px;
    color: var(--black);
    line-height: 24px
}



</style>