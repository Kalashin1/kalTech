<template>
  <div style="overflow: hidden">
    <HomeLayout>
      <div slot="main">
        Main
        <TopArticle></TopArticle>
      </div>
      <div slot="sidebar">
        <Sidebar />
      </div>
    </HomeLayout>
  </div>
</template>

<script>
import HomeLayout from '../components/HomeLayout'
import TopArticle from '@/components/TopArticle'
import Sidebar from '@/components/Sidebar'

export default {
  components: {
    HomeLayout,
    TopArticle,
    Sidebar
  }
}
</script>

<style scoped>

</style>
