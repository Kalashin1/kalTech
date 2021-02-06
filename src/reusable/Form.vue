<template>
  <div class="container" style="overflow: hidden">
    <form @submit.prevent="handleSubmit($event)">
      <slot name="title"></slot>
      <div>
        <slot name="name"></slot>
      </div>
      <div class="error" ref="nameError"></div>
      <div>
        <slot name="email"></slot>
      </div>
       <div class="error" ref="emailError"></div>
      <div>
        <slot name="password"></slot>
      </div>
      <div class="error" ref="passwordError"></div>
        <slot name="submit"></slot>
    </form>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  methods: {
    handleSubmit: async function (e) {
      let myForm = Array.from(e.target)
      let myObj = {}
      myForm.forEach(item => {
        if (item && item.name !== '') {
          myObj[item.name] = item.value
        }
      })
      console.log(myObj)
      if (Object.values(myObj).length > 2) {
        this.fetchResource('http://localhost:3000/signup', myObj)
      }
      if (Object.values(myObj).length < 3) {
        this.fetchResource('http://localhost:3000/login', myObj)
      }
    },
    async fetchResource (url, obj) {
      const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Credentials': true},
        body: JSON.stringify(obj),
        credentials: 'include'
      })
      const data = await res.json()
      console.log(data)
      if (!data.id) {
        this.$refs.nameError.textContent = data.name || ''
        this.$refs.emailError.textContent = data.email || ''
        this.$refs.passwordError.textContent = data.password || ''
      }
    }
  }
}
</script>

<style scoped>
  form{
    width: 94%;
    padding: 1rem;
    margin: 1rem auto;
    border-radius: .9rem;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);
    overflow: hidden;
  }

@media screen and (min-width: 1000px){
  .container{
    width: 80%;
    margin: 1rem auto;
  }
}

.error{
  color: red;
  position: relative;
}

@media screen and (max-width: 400px){
  .error{
    left: 1rem;
  }
}

@media screen and (max-width: 550px){
  .error{
    left: 2rem;
  }
}

@media screen and (max-width: 700px){
  .error{
    left: 3rem;
  }
}

@media screen and (max-width: 900px){
  .error{
    left: 5rem;
  }
}

@media screen and (max-width: 1200px) and (min-width: 900px){
  .error{
    left: 6rem;
  }
}

.container{
  padding: .8rem
}
</style>
