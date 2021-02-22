<template>
  <div class="container">
    <div class="codebox">
       <div class="text">
           <h2> Learn how to style a webpage</h2>
            <h4>Learm how to add css to your html files, this course is dedicated to equipping you with information enough to become a css god</h4>
        </div>
       <div class="code">
        <code-highlight language="css">
          .foo {
            font-family: sans;
            color: red;
            border: 1px solid green
          }
        </code-highlight>
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
  display: flex;
  margin: 3rem 0;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3%;
  width: 100%
}

.code{
  display: grid;
  grid-column-start: 2;
}
</style>
