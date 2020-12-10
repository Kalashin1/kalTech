<template>
  <div>
    <app-navbar class="bg-berry"></app-navbar>
    <app-banner :bannerText="bannerText"></app-banner>
    <app-food-list></app-food-list>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from '../templates/navbar'
import Banner from '../templates/banner'
import Footer from '../templates/footer'
import FoodList from '../templates/foodList'

export default {
  components: {
    'app-navbar': Navbar,
    'app-banner': Banner,
    'app-footer': Footer,
    'app-food-list': FoodList
  },
  data: function () {
    return {
      bannerText: 'Pick a chose'
    }
  }
}
</script>

<style scoped>

</style>
