<template>
  <main id="app">
    <Search @submitQuery="submitQuery" />
    <ImgContainer :imageSet1="imageSet1" 
      :imageSet2="imageSet2" />
  </main>
</template>

<script>
import Search from './components/Search'
import ImgContainer from './components/ImgContainer';
import { searchImages } from './apiCalls';



export default {
  name: 'app',
  components: {
    Search,
    ImgContainer,
  },
  data() {
    return {
      imageSet1: [],
      imageSet2: []
    }
  },
  methods: {
    async submitQuery(query) {
      this.imageSet1 = [];
      this.imageSet2 = [];
      const response = await searchImages(query)
      response.results.forEach((img, index) => {
        if (index % 2) {
          this.imageSet2.push({
            color: img.color,
            raw: img.urls.raw,
            regular: img.urls.regular, 
            id: img.id, 
            width: img.width, 
            height: img.height
          })
        } else {
          this.imageSet1.push({
            color: img.color,
            raw: img.urls.raw,
            regular: img.urls.regular, 
            id: img.id, 
            width: img.width, 
            height: img.height
          })
        }
      })
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>