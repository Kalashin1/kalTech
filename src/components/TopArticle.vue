<template>
  <div class="container">
    <h1>Learn the fundamental languages of the web</h1>
    <h3>Welcome to KTech, here we are dedicated to ensuring that you have access to materials that we help you begin your web development career, we have beginner courses on the fundamental languages of the web; HTML, CSS and JavaScript all for free.</h3>

    <CodeBox lang="xml" :code="html">
      <slot>
        <h1> Learn html in a breeze</h1>
        <h3>Get started with Modern HTML 5 lessons to help you embark on your web development journey. In no time you can already an HTML pro.</h3>
      </slot>
    </CodeBox>

    <CodeBox lang="css" :code="css">
      <slot>
        <h1> Learn how to style a webpage</h1>
        <h3>Learm how to add css to your html files, this course is dedicated to equipping you with information enough to become a css god</h3>
      </slot>
    </CodeBox>

    <CodeBox lang="javascript" :code="js">
      <slot>
        <h1> Learn how to use client side javascript</h1>
        <h3>Learm how to use javascript for clientside scripting purposes, add interactivity and slick behaviour with javascript.</h3>
      </slot>
    </CodeBox>
  </div>
</template>

<script>
import CodeBox from '@/components/CodeBox'

export default {
  components: {
    CodeBox
  },
  data () {
    return {
      html: `<head>
  <title>trial</title>
</head>`,
      css: `.foo {
            font-family: sans;
            color: red;
            border: 1px solid green
          }`,
      js: `const foo = 'jon doe'
console.log(foo)`
    }
  }
}
</script>

<style scoped>
.container{
  width: 100%;
  display: block;
  padding: .5rem .3rem;
}

@media screen and (max-width: 1030px){

  h1{
    text-overflow: ellipsis !important;
  }
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
