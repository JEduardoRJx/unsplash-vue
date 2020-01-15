<template>
  <section v-if="imageSet1.length">
    <div>
      <ImgCard  v-for="image of imageSet1"
        v-bind:key="image.id" 
        :image="image" />
    </div>
    <div>
      <ImgCard  v-for="image of imageSet2"
        v-bind:key="image.id" 
        :image="image" />
    </div>
  </section>
</template>

<script>
import ImgCard from './ImgCard'

export default {
  props: {
    imageSet1: Array,
    imageSet2: Array
  },
  components: {
    ImgCard
  },
}
</script>

<style scoped>
  section {
    height: 90vh;
    display: flex;
    overflow: scroll;
  }
</style>