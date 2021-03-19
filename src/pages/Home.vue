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

import { mapActions } from 'vuex'
import { types } from '../store/Mutations'

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
          links: ['introduction', 'forms', 'media']
        },
        {
          title: 'css',
          links: ['introduction', 'layouts', 'animations']
        },
        {
          title: 'javascript',
          links: ['introduction', 'DOM', 'ajax']
        }
        // {
        //   title: 'projects',
        //   links: ['html', 'css', 'javascript']
        // },
        // {
        //   title: 'questions',
        //   links: ['html', 'stylesheet', 'javascript']
        // }
      ]
    }
  },
  computed: {
    store () {
      return this.$store
    }
  },
  methods: {
    ...mapActions([
      types.html,
      types.css,
      types.javascript
    ])
  },
  mounted () {
    this.SET_HTML().then(() => console.log('gotten html'))

    this.SET_CSS().then(() => console.log('gotten css'))

    this.SET_JAVASCRIPT().then(() => console.log('gotten javascript'))
  }
}
</script>

<style scoped>

</style>
