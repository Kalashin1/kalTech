<template>
  <div class="container">
    <div class="codebox">
      <div class="code">
        <code-highlight language="javascript">
          const foo = 'jon doe'
          console.log(foo)
        </code-highlight>
      </div>
      <div class="text">
        <h2> Learn how to use client side javascript</h2>
        <h4>Learm how to use javascript for clientside scripting purposes, add interactivity and slick behaviour with javascript.</h4>
      </div>
    </div>
  </div>
</template>

<script>
import CodeHighlight from 'vue-code-highlight/src/CodeHighlight.vue'
import 'vue-code-highlight/themes/prism-solarizedlight.css'
import 'vue-code-highlight/themes/window.css'

export default {
  components: {
    CodeHighlight
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
  grid-gap: 5%
}

.code{
  display: grid;
  grid-column-start: 1 ;
}
</style>
