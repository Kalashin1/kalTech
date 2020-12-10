<template>
  <div>
    <app-navbar class="bg-berry"></app-navbar>
    <app-banner :bannerText="bannerText"></app-banner>
    <component :is="component"></component>
    <div class="flex justify-center">
      <div @click="changeComponent('app-'+btnText)" class="w-1/5 py-1 capitalize text-center rounded-md my-1 px-2 bg-berry text-white font-bold hover:bg-red-600 focus:bg-red-600 cursor-pointer">
        {{btnText}}
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from '../templates/navbar'
import Banner from '../templates/banner'
import Footer from '../templates/footer'
import Login from '../pages/login'
import Signup from '../pages/signup'
export default {
  components: {
    'app-navbar': Navbar,
    'app-footer': Footer,
    'app-banner': Banner,
    'app-login': Login,
    'app-signup': Signup
  },
  data: function () {
    return {
      component: 'app-signup',
      btnText: 'login',
      bannerText: 'Login/Signup'
    }
  },
  methods: {
    changeComponent: function (val) {
      this.component = val
      if (val === 'app-signup') {
        this.btnText = 'login'
        // eslint-disable-next-line
      } 
      else if (val === 'app-login') {
        this.btnText = 'signup'
      }
    }
  }
}
</script>

<style scoped>

</style>
