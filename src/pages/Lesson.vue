<template>
  <div class="container">
    <h1 class="language">{{language}}</h1>
    <h3 class="topic">{{topic}}</h3>
    <p>
      Ad minim id enim culpa laborum ullamco fugiat nostrud consectetur. Id esse laborum aliqua ullamco eu labore non nisi tempor incididunt. Irure ullamco ea consequat ea eiusmod non deserunt. Incididunt tempor culpa reprehenderit pariatur reprehenderit anim cillum est dolore ea. Sunt fugiat occaecat nulla pariatur sit sunt veniam esse non. Dolore laborum culpa exercitation aute qui minim consectetur velit ut cillum. Est id sit excepteur ullamco id esse et deserunt incididunt sint.Aute anim nulla aliquip aute sunt. Cupidatat laborum incididunt nulla irure consectetur aute aliqua Lorem excepteur laborum ullamco ad anim consequat. Ut consequat adipisicing ex sit qui quis.
    </p>
    <div class="code">
      <code-highlight :language="`${language}`">
        .foo {
          border-radius: 50%;
          background: red;
          text-transform: capitalize;
          text-align: left
        }

        .bar{
          color: red;
          border: white 2px solid;
          background: lightgray
        }
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
  data () {
    return {
      language: this.$route.params.language,
      topic: this.$route.params.topic
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
