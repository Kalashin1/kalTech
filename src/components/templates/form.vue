<template>
  <div class="bg-berry m-2 z-depth-1 rounded-lg grid grid-cols-1 sm:grid-cols-2">
    <div class="hidden sm:block"></div>
    <div class="bg-white" style="border-radius: 0 .5rem .5rem 0">
      <form class="p-1" ref="singup-form">
        <h3 class="text-center text-berry text-lg my-1 text-center font-bold capitalize">
          {{title}}
        </h3>
        <slot name="first"></slot>
        <slot name="second"></slot>
        <slot name="third"></slot>
        <slot name="fourt"></slot>
        <slot name="fifth"></slot>
        <slot name="sixth"></slot>
        <slot name="submit"></slot>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'please sign up'
    }
  }
}
</script>

<style scoped>
 input[type=text], textarea, input[type=number], input[type=email], input[type=password]{
    border: 0;
    width: 95%;
    outline: 0;
    border-bottom: 2px solid #ec96a4;
  }
  input[type=text]:focus, input[type=email]:focus, input[type=password]:focus{
    border: 0;
    outline: 0;
    border-bottom: 2px solid #56961f;
  }
  textarea{
    border: 2px solid #ec96a4;
    border-radius: .7rem
  }
</style>
