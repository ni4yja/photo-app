<template>
  <div class="app-content">
    <AppHeader/>
    <div class="cards-container">
      <div class="card" v-for="(collection, index) in collections" :key="index">
        <div class="card-image">
          <figure class="image is-4by3" 
          :style="{ backgroundImage: 'url(' + collection.cover_photo.urls.small + ')' }">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48"
              :style="{ backgroundImage: 'url(' + collection.user.profile_image.medium + ')' }">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ collection.title }}</p>
              <p class="subtitle is-6">{{ collection.user.name }}</p>
            </div>
          </div>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">{{ collection.total_photos }} photos</p>
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
      collections: []
    }
  },
  created() {
    ImageService.getCollections()
      .then(response => {
        this.collections = response.data
        console.log(this.collections)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>

<style>
.cards-container {
  max-width: 80vw;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2vw;
}

@media (max-width: 1024px) {
  .cards-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
  }
}

.image.is-4by3,
.image.is-48x48 {
  background-position: center;
  background-size: cover;
}
</style>