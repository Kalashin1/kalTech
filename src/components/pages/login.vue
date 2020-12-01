<template>
  <div>
    <app-navbar class="bg-berry"></app-navbar>
    <app-banner :bannerText="bannerText"></app-banner>
    <app-form></app-form>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from '../templates/navbar'
import Footer from '../templates/footer'
import Banner from '../templates/banner'
import loginform from '../templates/loginform'

export default {
  components: {
    'app-navbar': Navbar,
    'app-footer': Footer,
    'app-banner': Banner,
    'app-form': loginform
  },
  data: () => {
    return {
      bannerText: 'Login'
    }
  }
}
</script>

<style scoped>

</style>
