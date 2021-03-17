<template>
  <div class="container">
    <div class="codebox">
      <div class="text">
        <slot></slot>
      </div>
      <div class="code">
        <highlightjs :language="lang" :code="code" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['lang', 'code']
}
</script>

<style scoped>
.container{
  width: 100%;
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
  margin: 1rem 0;
  grid-template-columns: 1fr 1fr;
  grid-row: 1fr;
  grid-gap: 5%
}

@media screen and (max-width: 1200px){
  .codebox{
    grid-template-columns: 95% !important;
  }

}

@media screen and (max-width: 535px){
  .code{
    /* transform: translateX(-57px); */
    min-width: 90% !important;
    margin: 1rem auto;
    padding: 4rem 0!important;
    /* overflow-x: scroll */
  }
}
</style>
