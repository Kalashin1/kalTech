<template>
  <div class="bg-berry m-2 z-depth-1 rounded-lg grid grid-cols-1 sm:grid-cols-2">
    <div class="hidden sm:block"></div>
    <div class="bg-white" style="border-radius: 0 .5rem .5rem 0">
      <form class="px-1" ref="form" @submit.prevent="showFormData(formData)">
      <h3 class="text-center text-berry text-lg my-1 text-center font-bold capitalize">
        {{title}}
      </h3>
        <div class="py-1">
          <input name="password" type="password" v-model="formData.password" placeholder="Password" />
        </div>
        <div>
          <a class="cursor-pointer text-red-500 my-1 text-center flex justify-center capitalize underline">
            Forgot Password?
          </a>
        </div>
        <div class="py-1 flex justify-center items-center">
          <input type="submit" value="Login" class="cursor-pointer px-2 py-1 font-bold capitalize text-center bg-berry text-white shadow-md rounded-lg" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      title: 'Please login',
      formData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    showFormData: function (obj) {
      const formObj = {
        username: this.$refs.form.username.value,
        password: atob(this.$refs.form.password.value)
      }
      console.log(formObj)
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
    border-bottom: 2px solid #56961f;
  }
</style>
