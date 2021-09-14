<template>
  <div class="blogCard">
    <div>
      <nuxt-link
        :key="blog.id"
        :to="{ name: 'blogs-slug', params: { slug: blog.slug } }"
      >
        <div class="picture_wrapper" v-if="blog.image.url">
          <img :src="getStrapiMedia(blog.image.url)" alt="" />
        </div>
        <p class="tagline">{{ blog.categorie }}</p>
        <div class="title">
          <h5>{{ blog.title }}</h5>
        </div>
        <div class="datetime">
          <p>{{blog.date}}</p>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '../../utils/medias'

export default {
  props: {
    blog: {
      type: Object,
      default: () => ({})
    }
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
    width: 32%;
    padding: 0;
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
