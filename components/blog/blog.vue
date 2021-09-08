<template>
  <section class="cards">
    <blogCard v-for="blog in blogs" :key="blog.id"
    :blog=blog />
  </section>
</template>

<script>
import { getStrapiMedia } from '../../utils/medias'
import blogCard from '../blog/blogCard'

export default {
    props: {
        blogs: {
            type: Array,
            default: () => [], 
            }
    },
    methods: {
        getStrapiMedia
    },
    components: {
        blogCard
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
  justify-content: flex-start;


}



@media screen and (min-width: 1024px) {
  .cards {
    max-width: 850px;
    margin: 20px auto;
  }

}

@media screen and (min-width: 1200px) {
  .cards {
    max-width: 1200px;
    margin: 20px auto;
    justify-content: space-between;
  }
}

@media screen and (min-width: 1400px) {
  .cards {
    max-width: 1400px;
    margin: 20px auto;
    justify-content: space-between;
  }
}
</style>
