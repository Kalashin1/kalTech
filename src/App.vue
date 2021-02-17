<template>
  <Layout>
    <div class="" id="app">
      <router-view/>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'

export default {
  data () {
    return {
      name: 'kala'
    }
  },
  components: {
    'Layout': Layout
  }
}
</script>

<style>
</style>
