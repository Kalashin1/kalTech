<template>
  <div>
    <nav class="nav-wrapper">
      <div class="logo-and-toggle">
        <a>HeroLand</a>
        <a class="toggle" @click="toggleMenu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="20px" fill="green"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg></a>
      </div>

      <ul class="links" ref="menu">
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/html">html</router-link></li>
        <li><router-link to="/css">css</router-link></li>
        <li><router-link to="/javascript">javascript</router-link></li>
        <li><router-link to="/blogs">blogs</router-link></li>
      </ul>

    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu: function () {
      this.$refs.menu.classList.toggle('show')
    }
  }
}
</script>

<style scoped>
.nav-wrapper{
  display: grid;
  position: sticky;
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
  padding: 0;
  margin:0;
  border-top: 1px solid #f4f4f4;
  background: #fff;
  color: green;
  font-weight: bold;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center
}

.toggle{
  margin-left: auto;
  display: none;
  cursor: pointer;
}

.nav-wrapper .logo-and-toggle{
  display: grid;
  padding: 0 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  text-transform: uppercase;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center
}

.links{
  display: flex;
  list-style: none;
  justify-content: flex-end;
}

.links li a{
  display: block;
  font-weight: bold;
  padding: 22px 32px;
  text-decoration: none;
  cursor: pointer;
  color: green;
  text-transform: capitalize
}

.links li a:hover{
  color: #f2f2f2;
  background: green
}

@media screen and (max-width: 670px){
  .nav-wrapper{
    grid-template-columns: 1fr !important;
  }
  .links{
    display: none;
    flex-direction: column !important;
  }
  .nav-wrapper .logo-and-toggle{
    padding: 1rem 1rem !important;
  }
  .toggle{
    display: block !important;
  }
}

.show{
  display: flex !important;
  transition: all 3s ease;
}

@keyframes show{
  from{
    display: none;
  }
  to{
    display: flex !important;
  }
}
</style>
