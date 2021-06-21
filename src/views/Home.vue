<template>
  <div class="app-content">
    <AppHeader/>
    <AppModal :modal="isVisible" :photo="details" v-if="isVisible" @closeModal="closeModal"/>
    <div class="cards-container">
      <div class="card" v-for="(photo, index) in photos" :key="index">
        <div class="card-image">
          <figure class="image is-4by3" 
          :style="{ backgroundImage: 'url(' + photo.urls.small + ')' }"
          :alt="photo.alt_description" @click="openModal(photo)">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageService from '@/services/ImageService.js'
import AppHeader from '@/components/AppHeader'
import AppModal from '@/components/AppModal'

export default {
  components: {
    AppHeader,
    AppModal
  },
  data() {
    return {
      photos: [],
      isVisible: false,
      details: []
    }
  },
  created() {
    ImageService.getRandom()
      .then(response => {
        this.photos = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
  methods: {
    openModal(photo) {
      this.isVisible = true;
      this.details = photo;
    },
    closeModal() {
      this.isVisible = false;
    }
  }
}
</script>

<style>
.app-content {
  width: calc(100% - 20rem);
  position: relative;
  left: 20rem;
}

@media (max-width: 768px) {
  .app-content {
    left: 0;
    width: 100%;
  }
}
</style>