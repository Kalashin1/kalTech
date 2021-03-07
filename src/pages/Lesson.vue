<template>
  <div class="container">
    <h1 class="language">{{language}}</h1>
    <h3 class="topic">{{topic}}</h3>
    <div v-if="lesson" v-html="lesson[0].body"></div>
    <div class="code">
      <code-highlight :language="`${language}`">
      {{lesson[0].code[0]}}
      </code-highlight>
    </div>
  </div>
</template>

<script>
import CodeHighlight from 'vue-code-highlight/src/CodeHighlight.vue'
import 'vue-code-highlight/themes/prism-okaidia.css'
import 'vue-code-highlight/themes/window.css'

export default {
  components: {
    CodeHighlight
  },
  props: ['lesson'],
  data () {
    return {
      language: this.$route.params.language,
      topic: this.$route.params.topic
    }
  },
  async beforeMount () {
    const res = await fetch(`http://localhost:3000/${this.language}?topic=${this.topic}`)
    if (res.ok) {
      this.$props.lesson = await res.json()
      console.log(this.$props.lesson.body)
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
  overflow-x: scroll
}

/* .code::-webkit-scrollbar{
  display: none
} */

.topic{
  margin-bottom: 1rem
}
</style>
