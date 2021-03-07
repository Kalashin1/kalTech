<template>
  <div class="container">
    <form @submit.prevent="submit({topic, body, language})">
      <div class="topic">
        <input type="text" v-model="topic" placeholder="topic"/>
      </div>
      <div class="body-content">
        <textarea v-model="body">
          Your content here
        </textarea>
      </div>
      <div class="select-lang">
        <select v-model="language">
          <option selected value="">Choose a language</option>
          <option value="html">html</option>
          <option value="css">css</option>
          <option value="javascript">javascript</option>
        </select>
      </div>
      <div class="submit">
        <input type="submit" value="upload lesson" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      language: '',
      topic: '',
      body: ''
    }
  },
  methods: {
    async submit (lesson) {
      const res = await fetch('http://localhost:3000/' + lesson.language, {
        body: JSON.stringify(lesson),
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      })

      if (res.ok) {
        const data = await res.json()
        console.log(data, res.status)
      }
    }
  }
}
</script>

<style>

.container{
  width: 90%;
  margin: 1rem auto;
}

.container form {
  width: 100%;
}

.body-content textarea, .topic input{
  width: 100%;
  height: 100vh;
  background: #f4f4ef;
  border: 0;
  outline: 0;
  padding: 0 .5rem;
  font-size: 1.2rem
}

.body-content textarea {
  padding: 1rem
}

.topic input {
  max-height: 150px;
  font-size: 4rem;
  border-bottom: 2px solid gray
}

.select-lang select {
  padding: 1rem;
  margin: 1rem;
  font-size: 1.4rem;
  background: #024e0c;
  color: #fff;
  cursor: pointer;
}

.select-lang option {
  cursor: pointer;
  text-transform: capitalize;
  padding: .5rem;
}

.submit{
  margin: 1rem
}

.submit input {
  padding: 1rem 1.4rem;
  background: #024e0c;
  color: #fff;
  text-transform: capitalize;
  border: 0;
  outline: 0;
  font-size: 1.2rem;
  border-radius: .7rem
}
</style>
