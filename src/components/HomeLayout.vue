<template>
  <div>
    <a class="toggle" @click="showSidebar()">
      <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="20" viewBox="0 0 320 512"><path xmlns="http://www.w3.org/2000/svg" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
    </a>
    <div class="container" @click.self="closeSidebar()">
      <div class="main">
        <slot name="main"></slot>
      </div>
      <div class="sidebar" ref="sidebar" v-if="sidebar" >
        <slot name="sidebar"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from '../main'

export default {
  data () {
    return {
      sidebar: true
    }
  },
  methods: {
    showSidebar () {
      this.sidebar = true
    },
    closeSidebar () {
      this.sidebar = false
    }
  },
  created () {
    if (window.screen.width < 670) {
      this.closeSidebar()
    }
    console.log(window.screen.width)
    bus.$on('close', () => this.closeSidebar())
  }
}
</script>

<style scoped>
.container{
  display: grid;
  padding: .5rem 1rem;
  overflow: hidden;
  grid-template-columns: 80% 20%;
  grid-gap: 4%;
}

@media screen and (max-width: 670px){
  .container{
    grid-template-columns: 1fr !important;
  }
  .toggle{
    display: flex !important
  }
  .sidebar{
    position: absolute;
    top: 0; left: 0;
    display:grid;
    width: 85vw;
    transition: all .4s linear;
    background: #f3f3f3;
    /* border: 1px solid green */
  }
}

@media screen and (min-width: 670px) and (max-width: 100px){
  .container{
    grid-template-columns: 70% 30% !important
  }
}

.sidebar{
  padding: 0 .2rem;
}

.toggle{
  position: fixed;
  bottom: 5rem; left: 20rem;
  padding: .5rem;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 60px; height: 60px;
  border-radius: 50%;
}
</style>
