<template>
  <div>
    <div class="grid grid-cols-1 cursor-pointer sm:grid-cols-3 my-1 bg-gray-500 p-1">
      <div v-for="food in foods" :key="food.id" class="m-0 rounded-lg z-depth-2 grid grid-cols-1 bg-white text-white font-bold p-1">
        <h3 class="text-gray-500 font-bold text-lg block my-0">{{food.foodName}}</h3>
        <div class="divide-berry divide-x-2 block divide-x-solid"></div>
        <div class="">
          <img :src="food.imgUrl" class="w-full h-12 object-cover object-center">
        </div>
        <div class="my-1 mt-2">
          <a class="w-1/6 h-1 rounded-lg hover:bg-red-500 py-0 px-1 text-white text-lg font-bold z-depth-1 text-center bg-berry">
            Order
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['foods']
}
</script>

<style scoped>

</style>
