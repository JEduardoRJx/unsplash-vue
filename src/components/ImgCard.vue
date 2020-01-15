<template>
  <a :href='image.raw' 
    target="_blank" 
    rel="noopener noreferrer">
    <img :src='image.regular' />
  </a>
</template>

<script>
export default {
  props: {
    image: Object
  }
}
</script>

<style scoped>
  a {
    margin: 10px;
  }
  img {
    max-width: 100%;
  }
</style>