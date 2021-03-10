<template>
  <section class="hero is-medium is-primary app-header">
    <div class="hero-body">
      <div 
        v-if="this.images.length && getUrl != 'undefined'"
        class="app-cover" 
        :style="{ backgroundImage: 'url(' + getUrl + ')' }">
      </div>
      <p class="title">Powered by creators everywhere</p>
      <div class="search-field">
        <input 
          type="text"
          placeholder="Search free hight-resolution photos"
          class="input"
          v-model="query"
          @keypress.enter="showResults"
        >
      </div>
      <div class="image-info">
        <p v-if="this.images.length && getUser != 'undefined'" class="subtitle is-4">Photo by {{ getUser }} ({{ getDate }})</p>
        <p v-if="this.images.length && getLikes != 'undefined'" class="subtitle is-4">Likes: {{ getLikes }}</p>
        <p v-if="this.images.length && getWidth != 'undefined' && getHeight != 'undefined'" class="subtitle is-4">Dimensions: {{ getWidth }} × {{ getHeight }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import ImageService from '@/services/ImageService.js'
export default {
data() {
  return {
    query: '',
    images: ''
  }
},
computed: {
  getUrl() {
    let url = this.images[0].urls.full;
    return url;
  },
  getUser() {
    let user = this.images[0].user.name;
    return user;
  },
  getDate() {
    let date = this.images[0].created_at.slice(0, 10);
    return date;
  },
  getLikes() {
    let likes = this.images[0].likes;
    return likes;
  },
  getWidth() {
    let width = this.images[0].width;
    return width;
  },
  getHeight() {
    let height = this.images[0].height;
    return height;
  }
},
methods: {
    showResults() {
      ImageService.getSearch(this.query)
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

<style scoped>
.app-header {
  position: relative;
  z-index: 11;
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

.app-cover:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
}

.search-field {
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;
}

.title, .subtitle, p {
  position: relative;
  z-index: 10;
  color: #fff;
}

.image-info {
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 3rem;
}
</style>