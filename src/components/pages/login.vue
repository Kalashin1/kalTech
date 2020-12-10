<template>
  <div>
    <app-login-form>
      <div class="py-2" slot="first">
        <input type="text" ref="name" placeholder="Name or Email"/>
      </div>
      <div class="py-2" slot="second">
        <input type="password" ref="password" placeholder="Password"/>
      </div>
      <div class="py-1 flex justify-center items-center" slot="submit" ref="submit">
        <input type="submit" value="Login" class="cursor-pointer px-2 py-1 font-bold capitalize text-center bg-berry text-white shadow-md rounded-lg" />
      </div>
    </app-login-form>
  </div>
</template>

<script>
import Loginform from '../templates/form'
import { HttpModule } from '../../../modules/http-module.js'

export default {
  components: {
    'app-login-form': Loginform
  },
  data: function () {
    return {
      bannerText: 'Login',
      http: new HttpModule()
    }
  },
  methods: {
    loginUser: function () {
      const user = {
        email: this.$refs.name.value,
        password: atob(this.$refs.password.value)
      }
      console.log(user)
    }
  }
}
</script>

<style scoped>

</style>
