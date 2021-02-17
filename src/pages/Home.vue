<template>
  <div style="overflow: hidden">
    <h2>Home</h2>
    <HomeLayout>
      <div slot="main">
        Main
        <TopArticle></TopArticle>
      </div>
      <div style="border: 1px solid green;" slot="sidebar">sidebar</div>
    </HomeLayout>
  </div>
</template>

<script>
import HomeLayout from '../components/HomeLayout'
import TopArticle from '@/components/TopArticle'

export default {
  components: {
    HomeLayout,
    TopArticle
  }
}
</script>

<style scoped>

</style>
