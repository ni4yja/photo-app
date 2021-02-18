<template>
  <div id="app">
    <div class="app-container">
      <div class="search-field">
        <input type="text"
          v-model="query"
          @keypress.enter="showResults"
        >
        <button @click="showResults">Search</button>
      </div>
      <div class="images-grid">
        <stack
          :column-min-width="300"
          :gutter-width="15"
          :gutter-height="15"
          monitor-images-loaded
        >
          <stack-item
            v-for="(image, index) in images"
            :key="index"
            style="transition: transform 300ms"
          >
            <img :src="image.urls.small" :alt="image.alt_description" />
          </stack-item>
        </stack>
      </div>
      <!-- <p v-for="(image, index) in images" :key="index">
        <img :src="image.urls.small" :alt="image.alt_description" />
      </p> -->
    </div>
  </div>
</template>

<script>
import ImageService from '@/services/ImageService.js'
import { Stack, StackItem } from 'vue-stack-grid';

export default {
  name: "app",
  components: {
    Stack,
    StackItem
  },
  data() {
    return {
      query: 'amsterdam',
      images: []
    }
  },
  methods: {
    showResults() {
      ImageService.getImages(this.query)
      .then(response => {
        this.images = response.data.results
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.images-grid {
  max-width: 80vw;
  margin: 0 auto;
}

img {
  width: 100%;
  height: auto;
  border-radius: 12px;
}
</style>