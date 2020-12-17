<template>
    <div class="bg-white">
      <h4 class="text-2xl sm:text-2xl text-gray-500 bg-gray my-1 font-bold text-center">{{title}}</h4>
      <div class="grid my-2 grid-cols-1 sm:grid-cols-4">
          <div class="flex flex-col mx-0 my-0" v-for="orders in topOrders" :key="orders.id">
              <div class="flex flex-col">
                  <img :src="require(`../../../assets/images/${orders.imgUrl}`)" class="w-full h-8 sm:h-10 object-cover" />
                  <div class="flex justify-center items-center"></div>
              </div>
              <div class="flex flex-col">
                  <h3 class="text-gray-500 cursor-pointer font-bold capitalize text-lg text-center">
                      {{orders.name}}
                  </h3>
                  <h3 class="text-gray-500 cursor-pointer font-bold text-center capitalize text-md">
                      ${{orders.price}}
                  </h3>
                  <h3 class="text-gray-500 cursor-pointer text-center font-bold capitalize text-md">
                      {{orders.noOfOrders}} Orders
                  </h3>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['topOrders'],
  data: function () {
    return {
      title: 'Checkout What Others Are Ordering'
    }
  }
}
</script>

<style scoped>
</style>
