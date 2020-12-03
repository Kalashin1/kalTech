<template>
  <div>
    <nav style="z-index: 100" class="shadow-md fixed w-full sm:relative flex flex-col bg-berry sm:bg-transparent hover:bg-berry sm:flex-row sm:justify-between">
      <div class="flex flex-row justify-between items-center py-1 cursor-pointer">
        <a class="text-xl px-0 font-bold text-white">
          GOODIES
        </a>
       <a class="sm:hidden mx-1 bg-white rounded p-0 border-gray-500 nav-toggler" id="nav-toggler" ref="navToggler" v-on:click="toggleMenu()">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48" ><path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z"/></svg>
       </a>
      </div>
      <div class="divider"></div>
    <ul class="sm:flex flex-col sm:flex-row hidden link h-full" id="navigation" ref="menu">
      <li class="" v-for="link in links" v-bind:key="link"><a @click.prevent="navigate(link)" class="block py-1 text-white sm:py-2 hover:bg-gray-500 hover:text-white px-2 font-bold" href="#">{{ link }}</a></li>
    </ul>
  </nav>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      links: [
        'Home',
        'Menu',
        'Order',
        'Contact',
        'About',
        'Login',
        'Signup'
      ]
    }
  },
  methods: {
    toggleMenu: function () {
      var menuBtn = document.querySelector('#nav-toggler')
      function showMenu () {
        let nav = document.querySelector('#navigation')
        nav.classList.toggle('hidden')
      }
      menuBtn.addEventListener('click', showMenu())
    },
    navigate: function (location) {
      this.$router.push(location)
    }
  }
}
</script>

<style scoped>

</style>
