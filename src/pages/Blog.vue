<template>
  <div class="container">
    <h4 class="blog-title">{{ blog.title}}</h4>
    <h6 class="blog-author">written by {{ blog.author}}</h6>
    <h6 class="blog-bday">on {{blog.createdAt | filterDate }}</h6>
    <p class="blog-body"> {{blog.body}} </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog: {}
    }
  },
  filters: {
    filterDate (v) {
      return v.slice(0, v.indexOf('T'))
    }
  },
  methods: {
    async getBlog (id) {
      const res = await fetch(`http://localhost:3000/post/${id}`, { credentials: 'include' })
      if (res.ok) {
        this.blog = await res.json()
      }
    }
  },
  mounted () {
    const { id } = this.$route.params
    console.log(id)
    this.getBlog(id)
  },
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
  }
}
</script>

<style scoped>
  .container{
  padding: 1rem .5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  align-content: center;
}

.blog-title, .blog-author, .blog-bday{
  text-transform: capitalize;
  margin: .5rem .3rem;
  text-align: center
}

.blog-bday{
  font-weight: lighter
}

@media screen and (min-width: 670px){
  .container{
    margin: 1rem auto;
    width: 80vw;
  }
}

.blog-bday{
  margin-bottom: 1rem
}

.blog-title{
  text-align: center;
  color: darkslategray;
  font-size: 2rem
}
</style>
