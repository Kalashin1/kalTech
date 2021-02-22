<template>
  <div class="container">
    <h1>Learn the fundamental languages of the web</h1>
    <h3>Welcome to KTech, here we are dedicated to ensuring that you have access to materials that we help you begin your web development career, we have beginner courses on the fundamental languages of the web; HTML, CSS and JavaScript all for free.</h3>

    <Codebox></Codebox>
    <CssCodeBox></CssCodeBox>
    <javascript-code-box></javascript-code-box>
  </div>
</template>

<script>
import Codebox from '@/components/HtmlCodeBox'
import CssCodeBox from '@/components/CssCodeBox'
import JavascriptCodeBox from '@/components/JavascriptCodeBox'

export default {
  components: {
    Codebox,
    CssCodeBox,
    JavascriptCodeBox
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  display: block;
  padding: .5rem .5rem;
}

h1{
  margin-bottom: 2rem
}

h3, h5, h2, h4{
  margin: 2rem 0;
  font-weight: light;
  color: darkslategray
}

.codebox{
  display: grid;
  margin: 3rem;
  grid-template-columns: 1fr 1fr;
  grid-row: 1fr;
  grid-gap: 5%
}
</style>
