<template>
  <div>
    <Form @submit.prevent="handleSubmit($event)">
      <div slot="title">
        <h2 class="title">Signup</h2>
      </div>
      <div slot="name" class="input">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div slot="email" class="input">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div slot="password" class="input">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div slot="submit" class="submit">
        <input type="submit" value="Signup" />
      </div>
    </Form>
  </div>
</template>

<script>
import Form from '../reusable/Form'

export default {
  components: {
    'Form': Form
  },
  data: function () {
    return {
      name: '',
      password: '',
      email: ''
    }
  }
}
</script>

<style scoped>
.title{
  text-align: center;
  color: darkslategray
}
.input input{
  width: 80%;
  padding: .5rem;
  color: darkslategray;
  background: #f3f3f3;
  border-radius: .4rem;
  border: 1px solid darkslategray;
}

.input{
  margin-top: .5rem;
  display: flex;
  flex-direction: column;
   display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.input label{
  display: flex;
  align-self: flex-start;
  justify-self: flex-start;
  margin-left: 2.4rem;
}

@media screen and (min-width: 600px){
  .input label {
    margin-left: 4rem !important
  }
}
@media screen and (min-width: 1000px){
  .input label {
    margin-left: 5rem !important
  }
}

@media screen and (min-width: 1200px){
  .input label {
    margin-left: 6rem !important;
  }
}

.input input:focus{
  border: 0;
  outline: 0;
}

.submit{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem
}

.submit input {
  padding: 12px 20px;
  color: #fff;
  background: green;
  border:0;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: bold;
  border-radius: .7rem;
}
</style>
