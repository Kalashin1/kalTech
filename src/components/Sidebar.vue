<template>
  <div class="sidebar">
    <a class="close-btn" @click="closeSidebar()">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="white" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"/></svg>
    </a>
    <div class="container" v-for="link in links" :key="link.title">
      <h3 v-if="link.title.indexOf('/') !== -1" class="title">
        {{link.title.slice(link.title.indexOf('/') +1)}}
      </h3>
      <h3 v-else class="title">
        {{link.title}}
      </h3>
      <ul class="links">
        <li v-for="sidelink in link.links" :key="sidelink">
          <a  href="" @click.prevent="go(link.title, sidelink)">{{sidelink}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { bus } from '../main'
export default {
  data () {
    return {
    }
  },
  methods: {
    closeSidebar () {
      bus.$emit('close')
    },
    go (...links) {
      let [link1, link2] = [...links]
      this.$router.push(`lesson/${link1}/${link2}`)
    }
  },
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

.container{
  padding: 1rem .5rem;
  display: fixed;
  scrollbar-width: none;
}
.title{
  text-transform: capitalize;
  margin: .8rem 0;
  color: darkslategrey
}
.links{
  list-style: none;
}
.links li a{
  text-transform: capitalize;
  text-decoration: none;
  transition: all .2s linear;
  display: block;
  margin-top: .5rem;
  padding: .3rem .2rem;
  color: darkgray;
  font-weight: bold;
}

.links li a:hover{
  text-decoration: underline;
}

.close-btn{
  display: none;
  cursor: pointer
}

@media screen and (max-width: 1030px){
  .close-btn{
    display: grid !important;
    align-content: center;
    margin: .5rem;
    justify-items: flex-end
  }
  .links li a {
    color: white !important
  }
  .title{
    color: #f2f2f2 !important
  }
}
</style>
