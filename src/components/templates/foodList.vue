<template>
  <div>
    <div class="grid grid-cols-1 my-1 sm:grid-cols-4">
      <div class="col-span-3 mt-1">
        <app-menu :foods="catalogue" :background="catalogueBackground" :cardBackground="catalogueCardBackground" :title="catalogueTitle" :titleColor="titleColor"></app-menu>
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
      objs: [],
      catalogueBackground: 'bg-white',
      catalogueCardBackground: 'bg-gray-500',
      catalogue: []
    }
  },
  created: function () {
    ajax.getJSON('http://localhost:3000/catalogue').subscribe(res => {
      this.catalogue = res
    })
  }
}
</script>

<style scoped>

</style>
