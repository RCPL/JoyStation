<template>
<ul class="search-label-list active">
  <li v-for="tag in tags" :key="tag">
    <a href="#">{{tag}}</a>
  </li>
</ul>
</template>

<script>
export default {
  name: 'Tags',
  data() {
    return {
      tags: [
        'Short','Long',
        'Easy','Challenging',
        'Fun','Boring',
        'Stories','Games','Collectables',
        'Artistic',''
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
