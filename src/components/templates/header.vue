<template>
  <div class="h-screen background-cover background-center" id="header">
    <app-navbar></app-navbar>
    <div class="container flex justify-center items-center">
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div>
         <a class="w-3/5 sm:w-2/4 h-2/5 my-2 flex justify-center rounded-md shadow-lg uppercase font-bold bg-berry cursor-pointer text-center text-white py-1 hover:bg-red-500 px-2" v-for="meal in meals" :key="meal">
            {{meal}}
          </a>
        </div>
        <div class="flex justify-center flex-col items-center">
          <h3 class="sm:text-2xl text-xl font-bold text-white cursor-pointer text-center">
            {{text}}
          </h3>
          <a class="w-3/5 sm:w-2/4 h-2/5 my-2 flex justify-between rounded-md shadow-lg uppercase font-bold bg-berry cursor-pointer text-center text-white py-1 hover:bg-red-500 px-2">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
          </span>
            Order now
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './navbar'

export default {
  components: {
    'app-navbar': Navbar
  },
  data: () => {
    return {
      text: 'Home Of the Best Meals',
      meals: [
        'breakfast',
        'lunch',
        'dessert',
        'snacks',
        'combos',
        'popular'
      ]
    }
  }
}
</script>

<style scoped>
#header{
  background: url(../../assets/images/blur-breakfast-chef-cooking-262978.jpg);
  background-repeat: no-repeat;
}

</style>
