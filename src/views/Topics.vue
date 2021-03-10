<template>
  <div class="app-content">
    <AppHeader/>
    <!-- <button class="button" @click="getImages">Get topics</button> -->
    <div class="select">
      <select
        v-model="orderBy"
        @change="getImages"
      >
        <option value="featured">Featured</option>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="position">Position</option>
      </select>
    </div>
    <div class="cards-container">
      <div class="card" v-for="(topic, index) in topics" :key="index">
        <div class="card-image">
          <figure class="image is-4by3" 
          :style="{ backgroundImage: 'url(' + topic.cover_photo.urls.small + ')' }">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ topic.title }}</p>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">{{ topic.total_photos }} photos</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import ImageService from '@/services/ImageService.js'
import AppHeader from '@/components/AppHeader'
export default {
  components: {
    AppHeader
  },
  data() {
    return {
      topics: [],
      orderBy: 'featured'
    }
  },
  methods: {
    getImages() {
      ImageService.getTopics()
      .then(response => {
        this.topics = response.data
        console.log(this.topics)
        console.log(this.orderBy)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
    }
  }
}
</script>

<style>
.select {
  margin-top: 2rem;
}
</style>