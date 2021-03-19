<template>
  <div class="container">
    <a class="scroll-to-top" @click="scrollToTop()">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="48" height="48" viewBox="0 0 48 48"><path d="M20.17 31.17L23 34l10-10-10-10-2.83 2.83L25.34 22H6v4h19.34l-5.17 5.17zM38 6H10c-2.21 0-4 1.79-4 4v8h4v-8h28v28H10v-8H6v8c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4z"/></svg>
    </a>                                                    >
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
    scrollToTop () {
      window.scrollTo({top: 0, behavior: 'smooth'})
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

@media screen and (max-width: 1030px){
  .scroll-to-top{
    display: grid !important;
    align-content: center;
    margin: .5rem;
    justify-items: center;
    grid-template-columns: 1fr !important;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)
  }
}

.scroll-to-top{
  position: fixed;
  bottom: 5rem; right: 8%;
  padding: .5rem;
  z-index: 20;
  display: none;
  cursor: pointer;
  width: 12vw;
  height: 12vw;
  background: green;
  border-radius: 50%
}
</style>
