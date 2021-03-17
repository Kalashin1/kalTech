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
    <button @click.prevent="getStoreHTML()">get data from store</button>
    <button @click.prevent="getStoreCSS()">get CSS data from store</button>
    <button @click.prevent="getStoreJavascript()">get js data from store</button>
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
    ]),
    getStoreHTML () {
      console.log(this.store.state.HTML)
      this.SET_HTML().then(() => console.log(this.store.state.HTML, 'hello'))
    },
    getStoreCSS () {
      console.log(this.store.state.CSS)
      this.SET_CSS().then(() => console.log(this.store.state.CSS))
    },
    getStoreJavascript () {
      console.log(this.store.state.javascript)
      this.SET_JAVASCRIPT().then(() => console.log(this.store.state.javascript))
    }
  }
}
</script>

<style scoped>

</style>
