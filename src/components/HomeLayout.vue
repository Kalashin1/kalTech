<template>
  <div class="container">
    <div class="main">
      <slot name="main"></slot>
    </div>
    <div class="sidebar">
      <slot name="sidebar"></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.container{
  display: grid;
  grid-template-columns: 70% 25%;
  grid-gap: 2%
}

@media screen and (max-width: 670px){
  .container{
    grid-template-columns: 1fr !important;
  }
  .sidebar{
    display: none;
  }
}

</style>
