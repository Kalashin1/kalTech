<template>
  <footer>
    <div class="container">
      <div class="about">
        <h3 class="title">{{title}}</h3>
        <h5 class="text">{{about}}</h5>
      </div>
      <div class="links">
        <div v-for="footerLink in footerLinks" :key="footerLink.title">
          <h3 class="title">{{footerLink.title}}</h3>
          <ul>
            <li v-for="link in footerLink.links" :key="link"><router-link :to="'/'+link">{{link}}</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <p>&copy; 2020 kalashinkov</p>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      title: 'KTech',
      about: 'Ea quis adipisicing nostrud dolore anim anim.Est dolor amet voluptate tempor nulla eu dolore anim amet quis pariatur dolor.',
      footerLinks: [
        {title: 'resources', links: ['why KTech', 'contact', 'FAQ']},
        {title: 'courses', links: ['html', 'css', 'javascript']}
      ]
    }
  }
}
</script>

<style scoped>
  footer{
    display: flex;
    flex-direction: column;
    background: green;
    color: #fff;
    justify-content: center;
    padding: 4rem 3rem;
    padding-bottom: 2rem;
  }

  footer p{
    text-align: center;
    padding: 1rem;
    border-top: 1px solid lightgray;
  }

  @media screen and (max-width: 670px){
    .container{
       grid-template-columns: 1fr !important;
    }
    .links{
      grid-gap: 8% !important
    }
    footer p{
      margin-top: 1.5rem
    }
  }
  .title{
    font-weight: bold;
    color: #fff;
    text-transform: capitalize;
    margin: 1rem
  }
  .container, .links{
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-gap: 5%
  }

  .links ul {
    list-style: none;
  }
  .text{
    padding: .5rem 1rem;
    color: #fff
  }
  .links{
    grid-gap: 20%
  }
  .links ul li a {
    text-decoration: none;
    text-transform: capitalize;
    color: #fff;
    display: block;
    margin: .3rem 1rem;
    padding: .3rem 0;
    transition: all .2s ease;
  }
  .links ul li a:hover{
    text-decoration: underline
  }
</style>
