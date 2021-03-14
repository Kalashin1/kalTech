<template>
  <div class="container">
    <h1 class="language">{{language}}</h1>
    <h3 class="topic">{{topic}}</h3>
    <div ref="lesson"></div>
    <!-- <div class="code">
      <highlightjs autodetect :code="lesson[0].code[0]" />
    </div>
    <div class="code">
      <highlightjs autodetect :code="lesson[0].code[1]" />
    </div> -->
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
      language: this.$route.params.language,
      topic: this.$route.params.topic,
      md: `# Marked **bold**
      __<head>
        <meta name="viewport" content="width=device-with" />
      </head>__
      `
    }
  },
  methods: {
    appendBlog (html) {
      this.$refs.lesson.innerHTML = html
      console.log(this.$refs.lesson)
    }
  },
  async mounted () {
    const res = await fetch(`http://localhost:3000/${this.language}?topic=${this.topic}`)
    if (res.ok) {
      this.lesson = await res.json()
      console.log(this.lesson[0].body)
      this.lesson[0].body = marked(this.lesson[0].body)
      console.log(marked(this.lesson[0].body))
      console.log(this.md)
      this.appendBlog(this.lesson[0].body)
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

/* .code::-webkit-scrollbar{
  display: none
} */

@media screen and (max-width: 300px){
  .code{
    max-width: 90% !important
  }
}
.topic{
  margin-bottom: 1rem
}
</style>
