<template>
<div class="container tayo">
<div class="row">
  <div v-if="tayo === null"><h1>loading</h1></div>
  <div v-for="(tayo, index) in tayo" :key="index">
  <b-card
    title="farhan ammar"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
     {{tayo.body}}
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
</div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: 'farhan ammar ',
      tayo: null
    }
  },
  mounted () {
    setTimeout(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(data => {
          this.tayo = data.data
        })
    }, 3000)
  }
}
</script>

<style  scoped>
.tayo{
  border: 1px solid red;
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
  .tayo {
    justify-content: center;
  }
}

</style>
