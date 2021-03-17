<template>
  <div class="container"                                                       >
    <h1 class="language">{{language}}</h1>
    <h3 class="topic">{{topic}}</h3>
    <div ref="lesson"></div>
    <div class="nav-buttons" v-if="lesson">
      <a href="" @click.prevent="$router.push(`/lesson/${language}/${lesson.prev}`);">{{lesson.prev}}</a>
      <a href="" @click.prevent="$router.push(`/lesson/${language}/${lesson.next}`);">{{lesson.next}}</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { types } from '../store/Mutations'

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
      language: this.$route.params.language,
      topic: this.$route.params.topic
    }
  },
  computed: {
    ...mapGetters([
      'getLesson'
    ]),
    store () {
      return this.$store
    }
  },
  methods: {
    appendBlog (html) {
      this.$refs.lesson.innerHTML = html
    },
    ...mapActions([
      types.html,
      types.css,
      types.javascript
    ])
  },
  mounted () {
    this.SET_HTML().then(() => console.log('gotten html'))

    this.SET_CSS().then(() => console.log('gotten css'))

    this.SET_JAVASCRIPT().then(() => {
      this.lesson = this.getLesson(this.language, this.topic)
      this.appendBlog(marked(this.lesson.body))
    })
  },
  watch: {
    $route (to, from) {
      this.language = to.params.language
      this.topic = to.params.topic
      this.lesson = this.getLesson(this.language, this.topic)
      this.appendBlog(marked(this.lesson.body))
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

.nav-buttons a{
  text-decoration: none;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1rem 0;
}
</style>
