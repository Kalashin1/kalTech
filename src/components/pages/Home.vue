<template>
  <div>
    <app-header></app-header>
    <app-promo v-bind:title="promosTitle" v-bind:promos="promos"></app-promo>
    <app-orders></app-orders>
    <app-promo v-bind:title="breakfastTitle" v-bind:promos="breakfasts"></app-promo>
    <app-catalogue :foods="catalogue"></app-catalogue>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '../templates/header'
import Promo from '../templates/promo'
import TopOrders from '../templates/TopOrders'
import Footer from '../templates/footer'
import Catalogue from '../templates/catalogue'
// import { ajax } from 'rxjs/ajax'
// import { HttpModule } from '../../../modules/http-module.js'

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
      breakfastTitle: 'Breakfast Suggestions',
      promosTitle: 'Deals of the day',
      promos: [
        {
          foodName: 'Bangers Mash',
          imgUrl: require('../../../assets/images/bangers_mash_slider.jpg'),
          id: 1,
          prompType: 'discount',
          discountRate: 30,
          discount: true,
          price: 128
        },
        {
          foodName: 'English Breakfast',
          imgUrl: require('../../../assets/images/2363aa263116f988fedb0756923f9282.jpg'),
          id: 2,
          prompType: 'discount',
          discountRate: 30,
          discount: true,
          price: 98
        }
      ],
      breakfasts: [
        {
          foodName: 'Lasagna',
          imgUrl: require('../../../assets/images/65c37a4f9918aa7847d71f470829b981.jpg'),
          id: 2,
          price: 102
        },
        {
          foodName: 'Scottish Meal',
          imgUrl: require('../../../assets/images/4892e8a244a932e86c04c93bdd6d6c8a.jpg'),
          id: 3,
          price: 135
        }
      ],
      catalogue: [
        {
          foodName: 'Irish Breakfast',
          imgUrl: require('../../../assets/images/0069685a38008fcc695377c331dc0223.jpg'),
          id: 1,
          price: 122
        },
        {
          foodName: 'Super Bowels',
          imgUrl: require('../../../assets/images/614665d7c0a8fbe3ae61f57f9e3e06e6.jpg'),
          id: 2,
          price: 111
        },
        {
          foodName: 'Fish Chips',
          imgUrl: require('../../../assets/images/9e78a4740edd0a59485af5a946b3e49e.jpg'),
          id: 3,
          price: 83
        },
        {
          foodName: 'Ninja Meal',
          imgUrl: require('../../../assets/images/c6357c9c494881be19b8ce24eaba16cc.jpg'),
          id: 4,
          price: 93
        },
        {
          foodName: 'Tilapia Chips',
          imgUrl: require('../../../assets/images/21f44684701310ef2b795d8cf920c88e.jpg'),
          id: 5,
          price: 72
        },
        {
          foodName: 'Samurai Food',
          imgUrl: require('../../../assets/images/ddbf8d3a9ddd14eb0e65a2d42cf7ffdd.jpg'),
          id: 6,
          price: 73
        }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
