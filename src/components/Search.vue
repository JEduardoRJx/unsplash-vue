<template>
  <section>
    <div>
      <form>
        <button>
          <img src='../assets/search.svg'/>
        </button>
        <input />
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
export default {
  
}
</script>

<style scoped>
  section {
    height: 10vh;
    background-color: black;
    display: flex;
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
</style>