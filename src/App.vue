<template>
  <main id="app">
    <Search />
    <ImgContainer />
  </main>
</template>

<script>
import Search from './components/Search'
import ImgContainer from './components/ImgContainer';


export default {
  name: 'app',
  components: {
    Search,
    ImgContainer,
  }
}
</script>

<style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>