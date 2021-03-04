<template>
  <div id="app">
    <div class="app-container">
      <AppHeader></AppHeader>
      <AppModal :modal="isVisible" :photo="details" v-if="isVisible" @closeModal="closeModal"></AppModal>
      <div class="images-grid">
        <stack
          :column-min-width="300"
          :gutter-width="15"
          :gutter-height="15"
          monitor-images-loaded
        >
          <stack-item
            v-for="(photo, index) in photos"
            :key="index"
            style="transition: transform 300ms"
          >
            <img class="images-grid--item" :src="photo.urls.small" :alt="photo.alt_description" @click="openModal(photo)"/>
          </stack-item>
        </stack>
      </div>
    </div>
  </div>
</template>

<script>
import ImageService from '@/services/ImageService.js'
import AppHeader from '@/components/AppHeader'
import AppModal from '@/components/AppModal'
import { Stack, StackItem } from 'vue-stack-grid'

export default {
  name: "app",
  components: {
    AppHeader,
    Stack,
    StackItem,
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
      console.log(this.details.exif);
    },
    closeModal() {
      this.isVisible = false;
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.images-grid {
  max-width: 80vw;
  margin: 0 auto;
}

.images-grid--item {
  width: 100%;
  height: auto;
  border-radius: 12px;
}
</style>