<template>
  <div>
    <h1>Blogs</h1>
    {{ isUserAuthenticated() }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: ''
    }
  },
  methods: {
    async getUserId () {
      const res = await fetch('http://localhost:3000/user', {
        credentials: 'include'
      })
      if (res.ok) {
        const data = await res.json()
        this.userId = data.id
      }
    },
    isUserAuthenticated () {
      console.log(this.userId)
      if (this.userId) {
        return true
      }
      else {
        return false
      }
    }
  },
  async beforeMount () {
    await this.getUserId()
    console.log(this.isUserAuthenticated())
    if (!this.isUserAuthenticated()) {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
