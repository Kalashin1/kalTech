<template>
  <div>
    <Navbar></Navbar>
    <slot></slot>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    'Navbar': Navbar,
    'Footer': Footer
  }
}
</script>

<style scoped>

</style>
