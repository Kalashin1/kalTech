<template>
    <div class="bg-white">
      <h4 class="text-2xl sm:text-2xl text-red-600 my-1 font-bold text-center">{{title}}</h4>
      <div class="grid my-2 grid-cols-1 sm:grid-cols-4">
          <div class="flex flex-col mx-0 my-0" v-for="orders in topOrders" :key="orders.id">
              <div class="flex flex-col">
                  <img :src="orders.imgUrl" class="w-full h-8 sm:h-10 object-cover" />
                  <div class="flex justify-center items-center"></div>
              </div>
              <div class="flex flex-col">
                  <h3 class="text-red-600 font-bold capitalize text-lg text-center">
                      {{orders.name}}
                  </h3>
                  <h3 class="text-red-600 font-bold text-center capitalize text-md">
                      ${{orders.price}}
                  </h3>
                  <h3 class="text-red-600 text-center font-bold capitalize text-md">
                      {{orders.noOfOrders}} Orders
                  </h3>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  data: () => {
    return {
      title: 'Checkout What Others Are Ordering',
      topOrders: [
        {
          name: 'Burger Supreme',
          price: 30,
          imgUrl: require('../../assets/images/f9866d1c4a882f24c80dde154662dcd0.jpg'),
          noOfOrders: 208,
          id: 1
        },
        {
          name: 'Faggot Fab',
          price: 30,
          imgUrl: require('../../assets/images/2015d7e805424daf94bc999c675e742d.jpg'),
          noOfOrders: 238,
          id: 2
        },
        {
          name: 'Waffle Max',
          price: 65,
          imgUrl: require('../../assets/images/waffles2.jpg'),
          noOfOrders: 272,
          id: 3
        },
        {
          name: 'Eaton Moss',
          price: 53,
          imgUrl: require('../../assets/images/92624f368b45cdee5cebedcb3e2d5d5a.jpg'),
          noOfOrders: 284,
          id: 4
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
