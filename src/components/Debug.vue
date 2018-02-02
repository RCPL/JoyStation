<template>
  <nav>
    <router-link to="three">3-way which way?</router-link>
		<router-link to="face">how you feelin?</router-link>
    <router-link to="two">Side to side</router-link>
    <router-link to="tags">Tag!!</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'debug'
  }
</script>

<style lang="scss" scoped>
  nav {
    background-color:rgb(255, 166, 0);
    line-height: 1.5em;
    
  }
  a {
    color: white;
    text-decoration: none;
    padding: 0 0.25em;
  }
</style>
