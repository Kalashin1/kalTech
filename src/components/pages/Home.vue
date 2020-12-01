<template>
  <div>
    <app-header></app-header>
    <app-promo v-bind:title="promosTitle" v-bind:promos="promos"></app-promo>
    <app-orders></app-orders>
    <app-promo v-bind:title="breakfastTitle" v-bind:promos="breakfasts"></app-promo>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '../templates/header'
import Promo from '../templates/promo'
import TopOrders from '../templates/TopOrders'
import Footer from '../templates/footer'

export default {
  components: {
    'app-header': Header,
    'app-promo': Promo,
    'app-orders': TopOrders,
    'app-footer': Footer
  },
  data: () => {
    return {
      title: 'Hello',
      breakfastTitle: 'Breakfast Suggestions',
      promosTitle: 'Deals of the day',
      promos: [
        {
          foodName: 'Bangers Mash',
          imgUrl: require('../../assets/images/bangers_mash_slider.jpg'),
          id: 1,
          price: 128
        },
        {
          foodName: 'English Breakfast',
          imgUrl: require('../../assets/images/2363aa263116f988fedb0756923f9282.jpg'),
          id: 2,
          price: 98
        }
      ],
      breakfasts: [
        {
          foodName: 'Lasagna',
          imgUrl: require('../../assets/images/65c37a4f9918aa7847d71f470829b981.jpg'),
          id: 2,
          price: 102
        },
        {
          foodName: 'Scottish Meal',
          imgUrl: require('../../assets/images/4892e8a244a932e86c04c93bdd6d6c8a.jpg'),
          id: 3,
          price: 135
        }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
