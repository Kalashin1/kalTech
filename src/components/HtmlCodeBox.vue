<template>
  <div class="codebox">
    <div class="code">
      <code-highlight language="xml">
        &lt;head&gt;
          &lt;title&gt;trial&lt;/title&gt;
        &lt;/head&gt;
      </code-highlight>
    </div>
    <div class="text">
      <h2> Learn html in a breeze</h2>
      <h4>Get started with Modern HTML 5 lessons to help you embark on your web development journey. In no time you can already an HTML pro.</h4>
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
  grid-template-columns: 1fr 3fr;
  grid-row: 1fr;
  grid-gap: 5%
}
</style>
