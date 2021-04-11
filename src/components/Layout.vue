<template>
  <div>
    <PageTop></PageTop>
    <Navbar></Navbar>
    <slot></slot>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageTop from '@/components/PageTop'

export default {
  components: {
    'Navbar': Navbar,
    'Footer': Footer,
    PageTop
  }
}
</script>

<style scoped>

</style>
