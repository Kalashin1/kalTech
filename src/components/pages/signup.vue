<template>
  <div>
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
        <div class="py-1" slot="fifth">
          <input type="number" ref="number" placeholder="phoneNumber"/>
        </div>
        <div class="py-1" slot="sixth">
          <input type="text" ref="address" placeholder="Address"/>
        </div>
        <div class="py-1 flex justify-center items-center" slot="submit" ref="submit">
          <input type="submit" @click.prevent="showRefs()" value="Signup" class="cursor-pointer px-2 py-1 font-bold capitalize text-center bg-berry text-white shadow-md rounded-lg" />
        </div>
      </app-signup-form>
    </div>
  </div>
</template>

<script>
import signupform from '../templates/form'
import { HttpModule } from '../../../modules/http-module.js'
// queen of doings

export default {
  components: {
    'app-signup-form': signupform
  },
  data: function () {
    return {
      bannerText: 'Signup',
      valid: false,
      http: new HttpModule()
    }
  },
  methods: {
    showRefs: function () {
      var signupForm = {
        name: this.$refs.name.value,
        password: this.$refs.password.value,
        email: this.$refs.email.value,
        address: this.$refs.address.value,
        number: this.$refs.number.value,
        cart: [],
        orders: [],
        id: Math.floor(Math.random() * 10000000)
      }
      console.log(signupForm)
      this.http.post('http://localhost:3000/users', signupForm).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
