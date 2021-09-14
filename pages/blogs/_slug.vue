<template>
  <main>
    <div class="overflow">
      <section class="nav_blog">
        <div class="nav_retour">
          <img src="~assets/img/svg/arrow-left.svg" alt="" />
          <nuxt-link to="/blogs">
            <p>
              Retour <span class="gray">/</span> <span class="gray"> Blog</span>
            </p>
          </nuxt-link>
        </div>
        <div class="share_sociaux">
          <img src="~assets/img/svg/facebook-b.svg" alt="" />
          <img src="~assets/img/svg/instagram-b.svg" alt="" />
          <img src="~assets/img/svg/linkedin-b.svg" alt="" />
        </div>
      </section>
      <section class="article">
        <div class="bloc_top">
          <div class="title_article">
            <h1>{{ blog.title }}</h1>
            <hr />
          </div>
          <div class="infos_article">
            <p>{{ blog.author }}, {{ blog.date }}</p>
          </div>
          <div class="img_article">
            <img :src="getStrapiMedia(blog.image.url)" alt="" />
          </div>
        </div>
        <div class="bloc_bottom">
          <div class="bloc_left_bottom">
            <p>Distributeur de produits authentiques pour professionnels et particuliers . Découvrez notre service traiteur pour toutes occasions.</p>
            <nuxt-link to="/traiteur">En savoir plus</nuxt-link>
          </div>
          <div class="bloc_right_bottom">
            <div
              class="content_article"
              v-html="$md.render(blog.content)"
            ></div>
          </div>
        </div>
      </section>
      <hr />
      <div class="rubrique">
        <div class="title_rubrique">
          <p>Voir aussi</p>
          <nuxt-link to="/blogs">Tout voir</nuxt-link>
        </div>
        <blogRubrique :blogsrubrique="blogsrubrique" />
      </div>
      <Newsletter />
    </div>
  </main>
</template>

<script>
import { getStrapiMedia } from "../../utils/medias";
import Newsletter from "../../components/default/Newsletter";
import blogRubrique from "../../components/blog/blogRubrique";

export default {
  async asyncData({ $strapi, params }) {
    const matchingBlogs = await $strapi.find("blogs", {
      slug: params.slug,
    });
    return {
      blogsrubrique: await $strapi.find("blogs?_sort=id:DESC"),
      blog: matchingBlogs[0],
    };
  },
  components: {
    Newsletter,
    blogRubrique,
  },
  methods: {
    getStrapiMedia,
  },
};
</script>

<style>
.overflow {
  overflow-x: hidden;
}

.nav_blog {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px 20px 15px 20px;
  margin-top: 80px;
  border-top: 1px solid var(--gray-light);
  border-bottom: 1px solid var(--gray-light);
}

.nav_retour {
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
}

.nav_retour a {
  text-decoration: none;
}

.nav_retour p {
  font-size: 14px;
  color: var(--Body);
  font-family: bodyBold;
}

.gray {
  font-size: 14px;
  color: #c4c4c4;
  font-family: body;
  margin-left: 5px;
}

.nav_retour img {
  width: 25px;
  margin-right: 20px;
}

.share_sociaux {
  display: flex;
}

.share_sociaux img {
  width: 20px;
  margin-right: 10px;
}

.article {
  padding: 30px 15px 20px 15px;
}

.title_article h1 {
  color: var(--black);
  font-size: 24px;
  text-align: center;
  line-height: 32px;
}

.bloc_left_bottom {
  display: none;
}

.title_article hr {
  border: none;
  width: 30px;
  margin: 10px auto;
  height: 2px;
  border-radius: 10px;
  background-color: var(--orange);
}

.infos_article p {
  font-size: 12px;
  color: gray;
  font-family: bodyBold, sans-serif;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 15px;
}

.content_article h2 {
  font-family: bodyBold;
  font-size: 16px;
  color: var(--black);
  margin-bottom: -10px;
}

.content_article h3 {
  font-family: bodyBold;
  font-size: 16px;
  color: var(--orange);
  margin-bottom: -10px;
}

.content_article strong {
  color: var(--Body);
  font-family: bodyBold, sans-serif;
}

.content_article {
  padding: 0 5px 0 10px;
}

.content_article p {
  font-size: 14px;

  line-height: 26px;
  color: var(--Body);
  font-family: body;
  margin-bottom: 0px;
}

.content_article img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-left: -25px;
}

.content_article ul {
  background-color: var(--gray);
  padding: 20px 15px;
  color: var(--orange);
  margin-top: 10px;
}

.content_article ul li::marker {
  color: var(--orange);
}

.content_article ul li {
  font-size: 14px;
  line-height: 26px;
  color: var(--black);
  margin-left: 25px;
  font-family: body;
}

.img_article {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: -20px;
}

.img_article img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.rubrique .title_rubrique {
  padding: 20px 20px 10px 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
}

hr {
  border: none;
  width: 100%;
  height: 1px;
  background-color: var(--gray-light);
}

.title_rubrique p:nth-child(1) {
  font-size: 18px;
  font-family: bodyBold, sans-serif;
}

.title_rubrique a {
  text-decoration: none;
  color: var(--Body);
  font-size: 12px;
}

@media screen and (min-width: 768px) {
  .article {
    max-width: 680px;
    margin: auto;
  }

  .overflow {
  overflow-x: visible;
}

  .img_article img {
    width: 100%;
    height: 300px;
  }
}

@media screen and (min-width: 1024px) {
  .nav_blog {
    max-width: 1100px;
    margin: 95px auto 10px;
  }

   .rubrique {
    max-width: 1100px;
    margin: 35px auto 50px;
  }

  .rubrique .title_rubrique {
       padding: 0px;

  }

  .bloc_top {
    max-width: 948px;
    margin: 30px auto;
    text-align: center;
  }

  .article {
    max-width: 1200px;
    margin: auto;
  }

  .title_article {
    margin: 30px auto 20px auto;
  }

  .title_article hr {
    border: none;
    width: 30px;
    margin: 10px auto;
    height: 2px;
    border-radius: 10px;
    background-color: var(--orange);
  }

  .title_article h1 {
    font-size: 32px;
    text-align: center;
    line-height: 64px;
  }

  .infos_article p {
    text-align: center;
    margin-bottom: 50px;
    font-family: body, sans-serif;
  }

  .img_article img {
    width: 100%;
    text-align: center;
    height: 500px;
    object-fit: cover;
    margin: 10px auto 40px auto;
  }

  .bloc_bottom {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    max-width: 1100px;
    margin: 30px auto;
    position: relative;
    height: 100%;

  }

  .bloc_left_bottom {
    width: 20%;
    position: sticky!important;
    top: 120px;
    height: 100%;
    display: flex;
    flex-flow: column;
    position: relative

  }

  .bloc_left_bottom p{
    font-size: 12px;
    width: 200px;
    line-height: 22px;
    margin-bottom: 30px;
    color: var(--Body);
  }


  .bloc_left_bottom a{
    font-size: 14px;
    width: 200px;
    margin-top: 150px;
    line-height: 22px;
    color: var(--orange);
  }

  .bloc_right_bottom {
    width: 60%;
   
    margin-left: 150px;
  }

  .bloc_right_bottom p{
  
    font-size: 16px;
    line-height: 32px;
   
  }
}

@media screen and (min-width: 1200px) {
  .article {
    max-width: 1100px;
    margin: auto;
  }

  .title_article {
    margin: 50px auto 20px auto;
  }

  .title_article hr {
    border: none;
    width: 30px;
    margin: 10px auto;
    height: 2px;
    border-radius: 10px;
    background-color: var(--orange);
  }

  .title_article h1 {
    font-size: 32px;
    text-align: center;
    line-height: 64px;
  }

  .infos_article p {
    text-align: center;
  }
}

@media screen and (min-width: 1200px) {


  .nav_blog {
    max-width: 1100px;
    margin: 95px auto 10px;
  }

   .rubrique {
    max-width: 1100px;
    margin: 35px auto 50px;
  }

  .rubrique .title_rubrique {
       padding: 0px;

  }

  .bloc_top {
    max-width: 948px;
    margin: 30px auto;
    text-align: center;
  }

  .article {
    max-width: 1200px;
    margin: auto;
  }

  .title_article {
    margin: 30px auto 20px auto;
  }

  .title_article hr {
    border: none;
    width: 30px;
    margin: 10px auto;
    height: 2px;
    border-radius: 10px;
    background-color: var(--orange);
  }

  .title_article h1 {
    font-size: 32px;
    text-align: center;
    line-height: 64px;
  }

  .infos_article p {
    text-align: center;
    margin-bottom: 50px;
    font-family: body, sans-serif;
  }

  .img_article img {
    width: 100%;
    text-align: center;
    height: 500px;
    object-fit: cover;
    margin: 10px auto 40px auto;
  }

  .bloc_bottom {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    max-width: 1100px;
    margin: 30px auto;
    position: relative;
    height: 100%;

  }

  .bloc_left_bottom {
    width: 20%;
    position: sticky!important;
    top: 120px;
    height: 100%;
    display: flex;
    flex-flow: column;
    position: relative

  }

  .bloc_left_bottom p{
    font-size: 12px;
    width: 200px;
    line-height: 22px;
    margin-bottom: 30px;
    color: var(--Body);
  }


  .bloc_left_bottom a{
    font-size: 14px;
    width: 200px;
    margin-top: 150px;
    line-height: 22px;
    color: var(--orange);
  }

  .bloc_right_bottom {
    width: 60%;
   
    margin-left: 150px;
  }

  .bloc_right_bottom p{
  
    font-size: 16px;
    line-height: 32px;
   
  }
}

@media screen and (min-width: 1600px) {


  .nav_blog {
    max-width: 1400px;
    margin: 95px auto 10px;
  }

  .bloc_top {
    max-width: 948px;
    margin: 30px auto;
    text-align: center;
  }

  .article {
    max-width: 1400px;
    margin: auto;
  }

  .title_article {
    margin: 30px auto 20px auto;
  }

  .title_article hr {
    border: none;
    width: 30px;
    margin: 10px auto;
    height: 2px;
    border-radius: 10px;
    background-color: var(--orange);
  }

  .title_article h1 {
    font-size: 32px;
    text-align: center;
    line-height: 64px;
  }

  .infos_article p {
    text-align: center;
    margin-bottom: 50px;
    font-family: body, sans-serif;
  }

  .img_article img {
    width: 100%;
    text-align: center;
    height: 500px;
    object-fit: cover;
    margin: 10px auto 40px auto;
  }

  .bloc_bottom {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    max-width: 1400px;
    margin: 30px auto;
    position: relative;
    height: 100%;

  }

  .bloc_left_bottom {
    width: 20%;
    position: sticky!important;
    top: 120px;
    height: 100%;

    position: relative

  }

  .bloc_left_bottom p{
    font-size: 12px;
    width: 200px;
    line-height: 22px;
    margin-bottom: 30px;
    color: var(--Body);
  }


  .bloc_left_bottom a{
    font-size: 14px;
    width: 200px;
    margin-top: 50px;
    line-height: 22px;
    color: var(--orange);
  }

  .bloc_right_bottom {
    width: 60%;
   
    margin-left: 150px;
  }

  .bloc_right_bottom p{
  
    font-size: 16px;
    line-height: 32px;
   
  }

   .rubrique {
    max-width: 1400px;
    margin: 35px auto 50px;
  }
}
</style>
