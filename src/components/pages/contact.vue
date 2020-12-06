<template>
  <div>
    <app-navbar class="bg-berry"></app-navbar>
    <app-contact-form>
      <div class="py-2" slot="first">
        <input type="text" ref="name" placeholder="Name"/>
      </div>
      <div class="py-2" slot="second">
        <input type="email" ref="email" placeholder="Email"/>
      </div>
      <div class="py-2" slot="third">
        <input type="text" ref="subject" placeholder="Subject"/>
      </div>
      <div class="py-2" slot="fourt">
        <textarea cols="10" rows="5" ref="message" placeholder="Message"></textarea>
      </div>
      <div class="py-1 flex justify-center items-center" slot="submit" ref="submit">
        <input type="submit" value="Login" class="cursor-pointer px-2 py-1 font-bold capitalize text-center bg-berry text-white shadow-md rounded-lg" />
      </div>
    </app-contact-form>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from '../templates/navbar'
import Form from '../templates/form'
import Footer from '../templates/footer'

export default {
  components: {
    'app-navbar': Navbar,
    'app-footer': Footer,
    'app-contact-form': Form
  }
}
</script>
<style scoped>

</style>
