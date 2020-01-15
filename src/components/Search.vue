<template>
  <section class='search-section'>
    <div>
      <form v-on:submit.prevent="onSubmit">
        <button v-on:click="onSubmit" type='button'>
          <img src='../assets/search.svg'/>
        </button>
        <input placeholder="Search photos" 
          type="text"
          @input="setSearchTerm"/>
        <button>
          <img src='../assets/clear.svg'/>
        </button>
      </form>
    </div>
    <div>
      <h1>searchTerm Here</h1>
    </div>
  </section>
</template>

<script>
import { randomPhoto } from '../apiCalls';

export default {
  props: {
    method: { submitQuery: Function}
  },
  data() {
    return {
      randomImage: '',
      searchTerm: ''
    }
  },
  async mounted() {
    const image = await this.getRandomPhoto();
    this.randomImage = image;
    document.getElementsByClassName('search-section')[0].style.backgroundImage = `url(${this.randomImage})`
  },
  methods: {
    async getRandomPhoto() {
      const response = await randomPhoto();
      return response.urls.regular;
    },
    setSearchTerm() {
      let searchTerm = event.target.value;
      this.searchTerm = searchTerm;
    },
    onSubmit() {
      this.$emit('submitQuery', this.searchTerm)
    },
  }
}
</script>

<style scoped>
  section {
    height: 10vh;
    background-color: black;
    display: flex;
    justify-content: space-around;
    justify-content: center;
    align-items: center;
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  div {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    height: 50px;
    width: 80%;
    border-radius: 30px;
    overflow: hidden;
    display: flex;
  }

  button {
    height: 100%;
    width: 50px;
    border: none;
    padding: 10px;
  }

  button:hover {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    font-size: 1.75em;
    padding: 1% 3%;
  }

  h1 {
    font-size: 3em;
    color: white;
  }
</style>