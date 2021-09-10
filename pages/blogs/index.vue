<template>
  <main>
    <blogFirst :blogsf="blogsf" />
    <div class="categories_blog">
      <hr>
      <div class="title_categorie">
        <p>Catégories</p>
      </div>
      <div class="categorie_flex">
        <!-- <nuxt-link to="/blogs"><p>Tous les articles</p></nuxt-link> -->
        <div
          class="content_categorie"
          v-for="categorie in categorieblogs"
          :key="categorie.id"
        >
          <nuxt-link  :to="{ name: 'categories-slug', params: { slug: categorie.slug } }">
            <p>{{ categorie.name }}</p>
          </nuxt-link>
        </div>
      </div>
      <hr>
    </div>
    <blog :blogs="blogs" />
    <Newsletter />
  </main>
</template>

<script>
import HeroBis from '../../components/features/HeroBis'
import Newsletter from '../../components/default/Newsletter'
import blog from '../../components/blog/blog'
import blogFirst from '../../components/blog/blogFirst'

export default {
  async asyncData({ $strapi }) {
    return {
      blogs: await $strapi.find('blogs?_sort=id:DESC'),
      blogsf: await $strapi.find('blogs?_id=1'),
      categorieblogs: await $strapi.find('blogcategories')
    }
  },
  components: {
    HeroBis,
    blog,
    blogFirst,
    Newsletter
  },
  data() {
    return {
      viande: true,
      fromages: false,
      charcuterie: false
    }
  }
}
</script>

<style scoped>
.nuxt-link-active {
  border-bottom: 2px solid var(--orange);
  transform: translateY(31px);
  color: var(--orange)!important;
  font-family: bodyBold, sans-serif;
}

html {
  overflow: visible!important;
}

.title_section p:nth-child(2) {
  padding: 0 15px;
  font-family: bodyBold, sans-serif;
  color: var(--black);
}
.box_categories {
  display: flex;
  flex-flow: row nowrap;
  overflow: scroll;
  padding-bottom: 20px;
  padding: 5px 15px;
  margin-top: 50px;
}

.categorie_flex {
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
}

.categorie_flex a {
  color: var(--Body); 
  font-size: 14px;
  margin-left: 20px;
}


.content_categorie a p{
  color: var(--Body); 
  font-size: 14px;
  margin-left: 20px;
}
.categories_blog {
  padding: 0px 0px;
  margin-top: 70px;
  display: flex;
  flex-flow: row wrap;
}

.categorie_flex {
   display: flex;
  flex-flow: row wrap;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
}

.content_categorie {
  margin-top: -15px;
  margin-bottom: 10px;
}

.title_categorie {
  position: relative;
}

.title_categorie p {
  font-family: bodyBold;
  color: var(--orange);
  font-size: 18px;
  width: 100px;
  position: relative;
}

.item_categorie {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.item_categorie p {
  font-family: bodyBold, sans-serif;
  font-size: 14px;
  margin-right: 10px;
  border: 1px solid var(--gray);
  border: 1px solid rgb(221, 221, 221);
  padding: 10px 35px;
  text-align: center;
}

.active_categorie p {
  background-color: var(--orange);
  border: none;
  color: var(--white);
  font-family: bodyBold !important;
}
.actualites {
  background-color: var(--gray);
  padding-bottom: 30px;
}

a {
  text-decoration: none;
}

.section_tiret {
  width: 70%;
  height: 1px;
  color: var(--black);
  background-color: rgb(194, 194, 194);
  display: block;

  border: none;
  margin: 15px 15px;
  padding: 0 15px;
}

.section_tiret::after {
  width: 4.5rem;
  position: absolute;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  display: block;
  content: '';
  height: 0.5rem;
  background: var(--orange);
}

.title_section {
  padding-top: 30px;
}

.title_section h2 {
  padding: 5px 15px;
  margin-bottom: 5px;
  font-size: 24px;
  line-height: 38px;
  color: var(--black);
}

.box_cards {
  display: flex;
  flex-flow: row wrap;
  margin-top: 20px;
  margin-left: 15px;
  justify-content: flex-start;
}


.card {
  width: 330px;
  margin: auto;
  margin-bottom: 30px;
  padding-bottom: 10px;
  background-color: var(--white);
}

.card img {
  width: 100%;
  object-fit: cover;
  height: 200px;
}

.infos_card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.infos_card p:nth-child(1) {
  color: var(--white);
  padding: 5px 25px;
  font-family: bodyBold, sans-serif;
  background-color: var(--orange);
}

.infos_card p:nth-child(2) {
  color: var(--orange);
  font-family: bodyBold, sans-serif;
}

.infos_card p {
  font-size: 12px;
}

.title_card {
  display: flex;
  flex-flow: column-reverse;
  padding: 3px 20px 10px 20px;
}

.title_card hr {
  border: none;
  width: 20px;
  background-color: var(--orange);
  height: 2px;
  margin-top: 10px;
  border-radius: 4px;
  margin-right: 5px;
}

.title_card p {
  font-size: 18px;
  font-family: bodyBold, sans-serif;
  color: var(--black);
}

.content_card p {
  padding: 2px 20px 10px 20px;
  font-size: 13px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  line-height: 24px;
  color: var(--black);
}

.cta_actualites button {
  background-color: var(--orange);
  padding: 10px 48px;
  display: flex;
  margin: 40px auto 10px auto;
  color: var(--white);
  cursor: pointer;
  font-size: 16px;
  font-family: bodyBold;
  border: none;
  transition: all 0.3s;
  box-shadow: 5px 5px rgba(177, 78, 12, 0.274);
}

.cta_actualites button:hover {
  box-shadow: 5px 5px rgba(0, 0, 0, 0.274);
  background-color: var(--black);
}

.cta_card {
  display: flex;
  padding: 0 20px 10px 20px;
  justify-content: flex-start;
}

.cta_card a {
  font-size: 14px;
  text-decoration: none;
  color: var(--orange);
  font-family: bodyBold, sans-serif;
}

@media screen and (min-width: 1024px) {
  .box_blog {
    max-width: 900px;
    margin: auto;
  }
  .title_section h2 {
    font-size: 28px;
    background-size: 100%;
    width: 600px;
    height: 100px;
    margin-left: 50px;
    margin-bottom: 90px;
  }

  .card {
    margin-right: 30px;
    width: 400px;
  }
}
@media screen and (min-width: 1200px) {

  .categories_blog {
  max-width: 1200px;
  margin: 670px auto 70px auto;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
}
}

@media screen and (min-width: 1600px) {

  .categories_blog {
  max-width: 1400px;
  margin: 670px auto 70px auto;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
}
}
</style>
