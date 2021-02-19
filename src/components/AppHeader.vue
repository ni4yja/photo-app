<template>
  <div class="app-header">
    <div v-if="this.images.length && getUrl != 'undefined'" 
      class="app-cover" 
      :style="{ backgroundImage: 'url(' + getUrl + ')' }"></div>
    <div class="search-field">
      <input type="text"
        v-model="query"
        @keypress.enter="showResults"
      >
    </div>
  </div>
</template>

<script>
import ImageService from '@/services/ImageService.js'
export default {
data() {
  return {
    query: 'amsterdam',
    images: ''
  }
},
computed: {
  getUrl() {
    let url = this.images[0].urls.full;
    return url;
  }
},
methods: {
    showResults() {
      ImageService.getSearch(this.query)
      .then(response => {
        this.images = response.data.results
        //console.log(this.images)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
    }
  }
}
</script>

<style>
.app-header {
  min-height: 400px;
  background: antiquewhite;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  margin-bottom: 2rem;
}

.app-cover {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
}

.search-field {
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;
}
</style>