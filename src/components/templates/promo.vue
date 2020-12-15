<template>
  <div class="bg-white">
    <h4 class="text-2xl sm:text-2xl text-gray-500 my-1 font-bold text-center">{{title}}</h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 px-0 py-0">
      <div class="mx-0 shadow-lg mb-2" v-for="promo in promos" v-bind:key="promo.id">
        <div class="relative">
          <div>
            <h3 id="food-name" class="cursor-pointer py-0 my-0 text-white bg-berry block w-full text-center absolute font-bold text-xl sm:text-2xl">
            {{ promo.foodName }}
            </h3>
            <div class="border-2 circle-price border-white absolute text-lg text-white hover:bg-red-500 bg-berry items-center cursor-pointer font-bold rounded-full w-4 h-4 flex flex-col justify-center">
              -30%
              <div class="text-md">
                 $ {{promo.price}}
              </div>
            </div>
          </div>
          <img class="w-full h-12 sm:h-16 object-cover" :src="require(`../../../assets/images/${promo.imgUrl}`)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['promos', 'title'],
  data: () => {
    return {
    }
  }
}
</script>

<style scoped>
.circle-price, #food-name{
  position: absolute;
  top: 50%; left :35%;
  transform: translateY(-50%);
}
#food-name{
  top : 80%;left: 0;
  transform: translateY(-80%);
  text-align: center;
}
</style>
