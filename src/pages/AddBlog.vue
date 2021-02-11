<template>
  <div>
    <form @submit.prevent="submitPost(post)">
      <div slot="title">
        <h2 class="title">Add a Post</h2>
      </div>
      <div class="input">
        <label for="title">post title</label>
        <input type="text" name="name" id="title" v-model="post.title"/>
      </div>
      <div class="input">
        <label for="body">body</label>
        <textarea name="body" id="body" rows="5" v-model="post.body"></textarea>
      </div>
      <div class="input">
        <label for="language">Select a language</label>
        <select name="language" id="language" v-model="post.language">
          <option aria-readonly selected>Select a language</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
        </select>
      </div>
      <div class="input">
        <label for="scope">select a scope</label>
        <select name="scope" id="scope" v-model="post.scope">
          <option aria-readonly selected>Select a scope</option>
          <option value="frontend">frontend</option>
          <option value="backend">backend</option>
          <option value="devops">devops</option>
          <option value="ui/ux">ui/ux</option>
        </select>
      </div>
      <div slot="submit" ref="submit" class="submit">
        <input type="submit" value="Signup" />
      </div>
    </form>
    <p>{{this.user}}</p>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    async function getUserId () {
      const res = await fetch('http://localhost:3000/user', {
        credentials: 'include'
      })
      if (res.ok) {
        const data = await res.json()
        if (!data.id) {
          next('/login')
          // eslint-disable-next-line
        }
        else {
          next()
        }
      }
    }
    getUserId()
  },
  data () {
    return {
      user: {},
      post: {
        title: '',
        body: '',
        language: '',
        scope: '',
        author: {}
      }
    }
  },
  async created () {
    const res = await fetch('http://localhost:3000/user', {
      credentials: 'include'
    })
    this.$data.user = await res.json()
  },
  methods: {
    async submitPost (post) {
      post.author = this.user
      const res = await fetch('http://localhost:3000/post', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(post)
      })
      const newPost = await res.json()
      console.log(newPost)
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
.title{
  text-align: center;
  color: darkslategray
}
.input input, .input textarea{
  width: 80%;
  padding: .5rem;
  color: darkslategray;
  background: #f3f3f3;
  border-radius: .4rem;
  border: 0px solid darkslategray;
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

.input input:focus, textarea:focus{
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
