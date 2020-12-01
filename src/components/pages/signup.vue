<template>
  <div>
    <app-navbar class="bg-berry"></app-navbar>
    <app-banner :bannerText="bannerText"></app-banner>
    <div>
      <app-signup-form>
        <div class="py-1" slot="first">
          <input type="text" ref="name" placeholder="Name"/>
        </div>
        <div class="py-1" slot="second">
          <input type="email" ref="email" placeholder="Email"/>
        </div>
        <div class="py-1" slot="third">
          <input type="password" ref="password" placeholder="Password"/>
        </div>
        <div class="py-1" slot="fourth">
          <input type="text" ref="username" placeholder="Username"/>
        </div>
        <div class="py-1" slot="fifth">
          <input type="number" ref="number" placeholder="phoneNumber"/>
        </div>
        <div class="py-1" slot="sixth">
          <input type="text" ref="address" placeholder="Address"/>
        </div>
        <div class="py-1 flex justify-center items-center" slot="submit" ref="submit">
          <input type="submit" value="Signup" class="cursor-pointer px-2 py-1 font-bold capitalize text-center bg-berry text-white shadow-md rounded-lg" />
        </div>
      </app-signup-form>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from '../templates/navbar'
import Footer from '../templates/footer'
import Banner from '../templates/banner'
import signupform from '../templates/signupform'
// queen of doings

export default {
  components: {
    'app-navbar': Navbar,
    'app-footer': Footer,
    'app-banner': Banner,
    'app-signup-form': signupform
  },
  data: () => {
    return {
      bannerText: 'Signup'
    }
  }
}
</script>

<style scoped>

</style>
