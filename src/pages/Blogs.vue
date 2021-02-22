<template>
  <div class="container">
    <div v-for="blog in blogs" :key="blog._id" class="blog-container" @click="getBlog(blog._id)">
      <h4 class="blog-title"> {{ blog.title }} </h4>
      <h5 class="blog-author">Written By {{ blog.author.name }}</h5>
      <p class="blog-bday"> Posted on {{ blog.createdAt | filterDate }}</p>
      <h6 class="blog-author">Email @ {{ blog.author.email}}</h6>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: '',
      blogs: [],
      blogAuthor: ''
    }
  },
  filters: {
    filterDate (v) {
      return v.slice(0, v.indexOf('T'))
    }
  },
  methods: {
    async getBlogs () {
      const res = await fetch('http://localhost:3000/posts', {
        credentials: 'include'
      })
      if (res.ok) {
        this.blogs = await res.json()
        this.blogs = this.blogs.reverse()
      }
    },
    getBlog (id) {
      this.$router.push(`/blog/${id}`)
    }
  },
  beforeRouteEnter (to, from, next) {
    async function getUserId () {
      const res = await fetch('http://localhost:3000/user', {
        credentials: 'include'
      })
      if (res.ok) {
        // const data = await res.json()
        // if (!data.id) {
        //   next('/login')
        //   // eslint-disable-next-line
        // }
        // else {
        //   next()
        // }
        next()
      }
    }
    getUserId()
  },
  mounted () {
    this.getBlogs()
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

.blog-container{
  background: #f2f2f2;
  margin: .4rem 0;
  padding: .5rem;
  border-radius: .7rem;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);
}

.blog-container .blog-title, .blog-container .blog-author, .blog-container .blog-bday{
  text-transform: capitalize;
  margin: .5rem .3rem
}

.blog-container .blog-bday{
  font-weight: lighter
}

@media screen and (min-width: 670px){
  .container{
    margin: 1rem auto;
    width: 60vw;
  }
}
</style>
