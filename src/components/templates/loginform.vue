<template>
  <div class="bg-berry m-2 z-depth-1 rounded-lg grid grid-cols-1 sm:grid-cols-2">
    <div class="hidden sm:block"></div>
    <div class="bg-white" style="border-radius: 0 .5rem .5rem 0">
      <form class="px-1">
      <h3 class="text-center text-berry text-lg my-1 text-center font-bold capitalize">
        {{title}}
      </h3>
        <div class="py-1">
          <input type="text" placeholder="Name or Email"/>
        </div>
        <div class="py-1">
          <input type="password" placeholder="Password" />
        </div>
        <div class="py-1 flex justify-center items-center">
          <input type="submit" value="Login" class="px-2 py-1 font-bold capitalize text-center bg-berry text-white shadow-md rounded-lg" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      title: 'Please login'
    }
  }
}
</script>

<style scoped>
  input[type=text], input[type=password]{
    border: 0;
    width: 95%;
    outline: 0;
    border-bottom: 2px solid #ec96a4;
  }
  input[type=text]:focus, input[type=password]:focus{
    border: 0;
    outline: 0;
    border-bottom: 2px solid #3f681c;
  }
</style>
