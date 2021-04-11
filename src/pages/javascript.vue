<template>
  <div style="overflow-x: hidden">
    <HomeLayout>
      <div slot="main">
        javascript
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
import { javascript } from '../json/language'
import Sidebar from '@/components/Sidebar'

export default {
  components: {
    HomeLayout,
    Sidebar
  },
  data () {
    return {
      links: javascript
    }
  }
}
</script>

<style>

</style>
