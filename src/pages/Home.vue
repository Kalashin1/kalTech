<template>
  <div>
    <HomeLayout>
      <div slot="main">
        <TopArticle></TopArticle>
      </div>
      <div slot="sidebar">
        <Sidebar :links="links"/>
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
  },
  data () {
    return {
      links: [
        {
          title: 'html',
          links: ['learn', 'projects', 'questions']
        },
        {
          title: 'css',
          links: ['learn', 'projects', 'questions']
        },
        {
          title: 'javascript',
          links: ['learn', 'projects', 'questions']
        },
        {
          title: 'projects',
          links: ['html', 'css', 'javascript']
        },
        {
          title: 'questions',
          links: ['html', 'stylesheet', 'javascript']
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
