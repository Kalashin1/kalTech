<template>
  <div>
    <a class="toggle" @click="showSidebar()">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="28" viewBox="0 0 480 512"><path xmlns="http://www.w3.org/2000/svg" d="M212.686 315.314L120 408l32.922 31.029c15.12 15.12 4.412 40.971-16.97 40.971h-112C10.697 480 0 469.255 0 456V344c0-21.382 25.803-32.09 40.922-16.971L72 360l92.686-92.686c6.248-6.248 16.379-6.248 22.627 0l25.373 25.373c6.249 6.248 6.249 16.378 0 22.627zm22.628-118.628L328 104l-32.922-31.029C279.958 57.851 290.666 32 312.048 32h112C437.303 32 448 42.745 448 56v112c0 21.382-25.803 32.09-40.922 16.971L376 152l-92.686 92.686c-6.248 6.248-16.379 6.248-22.627 0l-25.373-25.373c-6.249-6.248-6.249-16.378 0-22.627z"/></svg>
    </a>
    <div class="container">
      <div class="main">
        <slot name="main"></slot>
        <a class="scroll-to-top" @click="scrollToTop()">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="48" height="48" viewBox="0 0 48 48"><path d="M20.17 31.17L23 34l10-10-10-10-2.83 2.83L25.34 22H6v4h19.34l-5.17 5.17zM38 6H10c-2.21 0-4 1.79-4 4v8h4v-8h28v28H10v-8H6v8c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4z"/></svg>
        </a>
      </div>
      <transition name="show">
        <div class="sidebar" ref="sidebar" v-if="sidebar" >
          <slot name="sidebar"></slot>
        </div>
      </transition>
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
    },
    scrollToTop () {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  },
  created () {
    if (window.screen.width < 670) {
      this.closeSidebar()
    }
    bus.$on('close', () => this.closeSidebar())
  }
}
</script>

<style scoped>
.container{
  display: grid;
  padding: .5rem 1.5rem;
  grid-template-columns: 72% 20%;
  grid-gap: 7%;
}

@media screen and (max-width: 1030px){
  .container{
    grid-template-columns: 100% !important;
    padding: .5rem .3rem;
  }
  .toggle, .scroll-to-top{
    display: grid !important;
    align-content: center;
    margin: .5rem;
    justify-items: center;
    grid-template-columns: 1fr !important;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)
  }
  .sidebar{
    position: fixed;
    top: 0; left: 0;
    z-index: 31;
    display:grid;
    scrollbar-width: none;
    width: 85vw;
    transition: all .4s linear;
    background: #178a17;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);
    height: 100vh;
    overflow: scroll
  }

  .sidebar::-webkit-scrollbar{
    display: none
  }
}

.sidebar{
  padding: 0 .4rem;
  border-left: 1px solid #f5f5f5;
}

.toggle, .scroll-to-top{
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

.scroll-to-top {
  bottom: 12rem
}

/* Teransition classes */
/* enter classes */
.show-enter{
  transform: translate(-600px);
  opacity: 0
}
.show-enter-active{
  transition: all .2s linear;
}
.show-leave-to{
  opacity: 0;
  transform: translate(-600px)
}
.show-leave-active{
  transition: all .2s linear;
}

</style>
