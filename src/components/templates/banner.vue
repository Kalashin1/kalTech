<template>
  <div id="banner" class="h-8 text-xl flex text-white font-bold uppercase justify-center items-center">
    {{bannerText}}
  </div>
</template>

<script>
export default {
  props: ['bannerText']
}
</script>

<style scoped>
  #banner{
    background: url(../../../assets/images/bg-img2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>
