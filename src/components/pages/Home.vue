<template>
  <div>
    <app-header></app-header>
    <app-promo v-bind:title="promosTitle" v-bind:promos="promos"></app-promo>
    <app-orders v-bind:topOrders="topOrders"></app-orders>
    <app-promo v-bind:title="breakfastTitle" v-bind:promos="breakfasts"></app-promo>
    <app-catalogue :foods="catalogue" :background="catalogueBackground" :cardBackground="catalogueCardBackground" :nameColor="nameColor" :title="catalogueText" :titleColor="titleColor"></app-catalogue>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '../templates/header'
import Promo from '../templates/promo'
import TopOrders from '../templates/TopOrders'
import Footer from '../templates/footer'
import Catalogue from '../templates/catalogue'
import { ajax } from 'rxjs/ajax'

export default {
  components: {
    'app-header': Header,
    'app-promo': Promo,
    'app-orders': TopOrders,
    'app-footer': Footer,
    'app-catalogue': Catalogue
  },
  data: function () {
    return {
      title: 'Hello',
      titleColor: 'text-white',
      catalogueText: 'Our Meals',
      catalogueBackground: 'bg-gray-500',
      catalogueCardBackground: 'bg-white',
      breakfastTitle: 'Breakfast Suggestions',
      promosTitle: 'Deals of the day',
      nameColor: 'text-gray-500',
      topOrders: [],
      promos: [],
      breakfasts: [],
      catalogue: []
    }
  },
  created: function () {
    ajax.getJSON('http://localhost:3000/catalogue').subscribe(res => {
      this.catalogue = res
    })
    ajax.getJSON('http://localhost:3000/foods').subscribe(res => {
      this.breakfasts = res
    })
    ajax.getJSON('http://localhost:3000/promos').subscribe(res => {
      this.promos = res
    })
    ajax.getJSON('http://localhost:3000/top-orders').subscribe(res => {
      this.topOrders = res
    })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
