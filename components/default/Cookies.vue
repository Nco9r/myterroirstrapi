<template>
  <div class="cookies" v-if="cook">
      <div class="content_cookies">
          <div class="content">
              <p>Coucou, c'est nous les cookies ! <br><span class="light">(Promis vous nous trouverez qu'ici...)</span></p>
          </div>
          <div class="button">
              <button class="next" @click="cook = !cook">En savoir plus</button>
              <button class="ok" @click="valide">Accepter</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            cook: false,
        }
    },
    mounted(){
        const cookies = this.$cookies.get('Cookies_MyTerroir')
        this.cook = cookies === undefined
    },
    methods: {
      valide() {
          this.cook = !this.cook
          this.$cookies.set('Cookies_MyTerroir', true,{
            path: '/',
            maxAge: 60 * 60 * 24 * 365
            })
        }
    }
}
</script>

<style scoped>
.light {
    font-size: 10px;
    font-family: bold, sans-serif;
    color: var(--Body);
}

.cookies {
    overflow-y: scroll; 
}

.content_cookies {
    width: 100%;
    position: fixed; 
    display: flex; 
    left: 0;
    right: 0;
    bottom: 0;
    flex-flow: column;
    margin: 0px auto;
    padding: 30px 15px 20px 15px; 
    overflow-y: scroll!important;
    z-index: 300; 
    background-color: var(--gray-light);
}

.logo_cookies {
    margin: 30px 0;
    text-align: center;
}

.logo_cookies img {
    width: 70px;
}

.content p {
    font-weight: 400;
    line-height: 22Px;
    color: var(--black);
    margin-bottom: 10px;
    width: 100%;
    font-size: 12px;
    font-family: bodyBold, sans-serif;
    margin-top: 5px;
}

.title_cookies h3 {
    font-family: bodyBold, sans-serif; 
    color: var(--black)
}

.button {
    display: flex; 
    flex-flow: row nowrap; 
    align-items: center;
    justify-content: space-between;
}



.next {
    margin: 10px auto 0 auto;
  background-color: var(--gray);
  padding: 10px;
  color: var(--black);
  font-size: 10px;
  width: 55%;
  margin-right: 15px;
  font-family: bodyBold, sans-serif;
  border: none;

    cursor: pointer;

}

.ok {
    margin: 10px auto 0 auto;
  background-color: var(--black);
  padding: 10px;
  color: var(--white);
  font-size: 10px;
  width: 95%;
  font-family: bodyBold, sans-serif;
  border: none;
    cursor: pointer;


}

@media screen and (min-width: 1024px) {
    .content_cookies {
        width: 100%;
        right: 20px;
        left: 0;
        flex-flow: row;
        align-items: center;

     

    }
}

@media screen and (min-width: 1024px) {
    .content_cookies {
        width: 80%;
    }

    .button {
        display: flex; 
        flex-flow: row wrap;
        width: 30%;
    }
    .next {
        width: 100%;
    }
}

</style>