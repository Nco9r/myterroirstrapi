<template>
  <div>
    <TheHeader/>
    <Cookies/>
    <nuxt />
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '../components/default/TheHeader'
import TheFooter from '../components/default/TheFooter'
import Cookies from '../components/default/Cookies'

export default {
  components: {
    TheHeader,
    TheFooter,
    Cookies
  }
}
</script>

<style>
html {
  font-family: body, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 62,5%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box; 
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}



@font-face {
  font-family: title;
  font-display: swap;
  src: url('~assets/fonts/Pontiac.otf') format('truetype');
}

@font-face {
  font-family: body;
  font-display: swap;
  src: url('~assets/fonts/Poppins-Regular.ttf') format('truetype');
}

@font-face {
  font-family: bodyBold;
  font-display: swap;
  src: url('~assets/fonts/Poppins-Bold.ttf') format('truetype');
}

@font-face {
  font-family: bodyLight;
  font-display: swap;
  src: url('~assets/fonts/Poppins-Light.ttf') format('truetype');
}


:root {
  --black: #282522;
  --strong: #3B3938;
  --orange: #E5521A; 
  --Body: #555555;
  --beige: #C99C78;
  --white: #FFF; 
  --gray-light: #f3f3f3;
  --gray: #fcfcfc; 
  --orange-light: rgba(229, 84, 26, 0.171);
}

h1, h2, h3, h4, h5 {
  font-family: title, sans-serif;
}
</style>
