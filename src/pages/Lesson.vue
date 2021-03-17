<template>
  <div class="container"                                                       >
    <h1 class="language">{{language}}</h1>
    <h3 class="topic">{{topic}}</h3>
    <div ref="lesson"></div>
    <div class="nav-buttons" v-if="lesson">
      <a href="" @click.prevent="$router.push(`/lesson/${language}/${lesson[0].next}`);">{{lesson[0].next}}</a>
    </div>
  </div>
</template>

<script>
const hljs = require('highlight.js')
const marked = require('marked')

const renderer = {
  code (code, language) {
    return `<pre><code class="hljs ${language}">${hljs.highlight(language, code).value}</code></pre>`
  }
}
marked.use({ renderer })

export default {
  data () {
    return {
      lesson: '',
      state: this.$store.state,
      language: this.$route.params.language,
      topic: this.$route.params.topic
    }
  },
  methods: {
    appendBlog (html) {
      this.$refs.lesson.innerHTML = html
    }
  },
  async mounted () {
    const res = await fetch(`http://localhost:3000/${this.language}?topic=${this.topic}`)
    if (res.ok) {
      this.lesson = await res.json()

      this.lesson[0].body = marked(this.lesson[0].body)

      this.appendBlog(this.lesson[0].body)
    }
  },
  watch: {
    async $route (to, from) {
      this.language = to.params.language
      this.topic = to.params.topic
      console.log(to)
      const res = await fetch(`http://localhost:3000/${this.language}?topic=${this.topic}`)
      if (res.ok) {
        this.lesson = await res.json()

        this.lesson[0].body = marked(this.lesson[0].body)

        this.appendBlog(this.lesson[0].body)
      }
    }
  }
}
</script>

<style scoped>
.container{
  width: 80vw;
  margin: 2rem auto;
}

.language, .topic{
  margin: .5rem 0;
}

.code{
  margin: 1rem auto;
  overflow-x: scroll;
}

p{
  margin: .5rem 0
}

@media screen and (max-width: 300px){
  .code{
    max-width: 90% !important
  }
}
.topic{
  margin-bottom: 1rem
}

.nav-buttons{
  display: flex;
  justify-content: space-between;
  align-content: center
}
</style>
