<template>
  <div>
    <div class="grid p-1 grid-cols-1 my-1 lg:grid-cols-4">
      <div class="mt-1 pt-2 p-1">
        <!-- Title -->
        <div @click="toggleFilterBox()" class="z-depth-2 rounded-lg p-1 my-0 cursor-pointer text-gray-500 text-xl flex justify-between font-bold capitalize">
          filter
          <svg xmlns="http://www.w3.org/2000/svg" width="42" fill="#9a9eab" class="cursor-pointer" height="42" viewBox="0 0 48 48"><path d="M20 36h8v-4h-8v4zM6 12v4h36v-4H6zm6 14h24v-4H12v4z"/></svg>
        </div>
        <!-- price filter toggle button -->
        <!-- filter box -->
        <div class="p-1 z-depth-2 rounded-lg" ref="filterBox">
          <div @click="togglePriceBox()" class="text-white bg-gray-500 rounded-lg px-1 py-0 flex flex-row justify-between items-center my-0 font-bold capitalize text-md cursor-pointer" >
            price
            <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="#fff" height="24" viewBox="0 0 24 24"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
          </div>
          <!-- price filter form -->
          <div class="flex flex-col justify-center items-center z-depth-2 rounded-lg py-1 px-0 hidden" id="priceBox" ref="priceBox">
            <input type="number" class="my-0 w-2/4" ref="min" placeholder="Enter Min Price">
            <input type="number" class="my-0 w-2/4" ref="max" placeholder="Enter Max Price">
            <div class="py-1 flex justify-center items-center" slot="submit" ref="submit">
              <input type="submit" @click.prevent="priceFilter()" value="filter" class="cursor-pointer px-1 py-0 font-bold capitalize text-center bg-berry text-white dow-md rounded-lg" />
            </div>
          </div>
          <!-- Normal filter by food type section -->
          <div v-for="filter in filters" @click="filterBy(filter)" class="text-gray-500 my-0 font-bold capitalize text-md cursor-pointer" :key="filter">
            {{filter}}
          </div>
          <!-- search food section -->
          <div id="searchbox">
            <input type="text" class="my-0 w-2/4" ref="search" placeholder="Find Food By Name">
            <div class="py-1 flex justify-center items-center" slot="submit" ref="submit">
              <input type="submit" @click.prevent="searchFood()" value="search" class="cursor-pointer px-1 py-0 font-bold capitalize text-center bg-berry text-white shadow-md rounded-lg" />
            </div>
          </div>
        </div>
        <!-- filter box ends -->
      </div>
      <div class="col-span-3 mt-1">
        <app-menu :foods="catalogue" :background="catalogueBackground" :cardBackground="catalogueCardBackground" :title="catalogueTitle" :nameColor="nameColor" :titleColor="titleColor"></app-menu>
      </div>
    </div>
  </div>
</template>

<script>
import Catalogue from './catalogue'
import { ajax } from 'rxjs/ajax'

export default {
  components: {
    'app-menu': Catalogue
  },
  data: function () {
    return {
      catalogueTitle: 'Meals On Offer',
      titleColor: 'text-gray-500',
      nameColor: 'text-white',
      objs: [],
      catalogueBackground: 'bg-white',
      catalogueCardBackground: 'bg-gray-500',
      catalogue: [],
      cloned: [],
      filters: ['snacks', 'food', 'vegies']
    }
  },
  methods: {
    filterBy: function (val) {
      this.catalogue = []
      this.catalogue = this.cloned.filter(food => food.type === val)
      console.log(this.catalogue)
    },
    priceFilter: function () {
      const MIN = this.$refs.min.value
      const MAX = this.$refs.max.value
      this.catalogue = []
      this.catalogue = this.cloned.filter(food => food.price >= MIN && food.price <= MAX)
    },
    togglePriceBox: function () {
      this.$refs.priceBox.classList.toggle('hidden')
    },
    toggleFilterBox: function () {
      this.$refs.filterBox.classList.toggle('hidden')
    },
    searchFood: function () {
      const searchString = this.$refs.search.value
      this.catalogue = []
      this.cloned.forEach(food => {
        if (food.foodName.indexOf(searchString) !== -1) {
          this.catalogue.push(food)
        }
      })
      console.log(this.catalogue)
    }
  },
  created: function () {
    ajax.getJSON('http://localhost:3000/catalogue').subscribe(res => {
      this.catalogue = res
      this.cloned = res
      console.log(this.cloned)
    })
  }
}
</script>

<style scoped>
 input[type=text], textarea, input[type=number]{
    border: 0;
    width: 95%;
    outline: 0;
    border-bottom: 2px solid #ec96a4;
  }
  input[type=text]:focus, input[type=number]:focus{
    border: 0;
    outline: 0;
    border-bottom: 2px solid #56961f;
  }
  #priceBox{
    transition: all .4s cubic-bezier(0.95, 0.05, 0.795, 0.035)
  }
</style>
