<template>
  <div>
    <app-navbar class="bg-berry"></app-navbar>
    <app-banner :bannerText="bannerText"></app-banner>
    <app-details></app-details>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from '../templates/navbar'
import Banner from '../templates/banner'
import Footer from '../templates/footer'
import Details from '../templates/about-details'

export default {
  components: {
    'app-navbar': Navbar,
    'app-footer': Footer,
    'app-banner': Banner,
    'app-details': Details
  },
  data: function () {
    return {
      bannerText: 'About us'
    }
  }
}
</script>

<style scoped>

</style>
