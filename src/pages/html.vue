<template>
  <div style="overflow-x: hidden">
    <HomeLayout>
      <div slot="main">
        html
        {{ language }}
      </div>
      <div slot="sidebar">
       <Sidebar :links="links"></Sidebar>
      </div>
    </HomeLayout>
  </div>
</template>

<script>
import HomeLayout from '@/components/HomeLayout'
import { html } from '../json/language'
import Sidebar from '@/components/Sidebar'

export default {
  components: {
    HomeLayout,
    Sidebar
  },
  data () {
    return {
      links: html
    }
  }
}
</script>

<style>

</style>
