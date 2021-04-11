<template>
  <div class="container">
    <form>
      <div class="details">
        <h2>Contact Us</h2>
        <div class="input">
          <input type="email" placeholder="your email here" />
        </div>
        <div class="input">
          <input type="text" placeholder="your name here" />
        </div>
        <div class="input">
          <input type="text" placeholder="your subject here" />
        </div>
      </div>
      <div class="message">
        <textarea placeholder="your message here">
        </textarea>
        <div class="submit">
          <input type="submit" value="send message" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }
}
</script>

<style>
.container {
  width: 90%;
  margin: 1rem auto
}

.container form{
  display: grid;
  grid-template-columns: repeat(2, 1fr)
}

input[type=text], input[type=email] {
  border: 0;
  outline: 0;
  border-bottom: 1px solid gray;
  width: 80%;
  margin: 1rem 0;
  padding: 1.5rem .5rem
}

.message{
  border-left: 2px solid gray;
  padding: 0 1rem;
}

.message textarea {
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 1.2rem;
  height: 60vh
}

input[type=submit] {
  padding: 1rem 1.4rem;
  font-size: 1.2rem;
  background:  #024e0c;
  color: #fff;
  outline: 0;
  border: 0;
  text-transform: capitalize;
  font-weight: bold;
  width: 100%;
  cursor: pointer
}
</style>
