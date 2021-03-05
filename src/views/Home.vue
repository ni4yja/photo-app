<template>
  <div class="app-content">
    <AppHeader/>
    <AppModal :modal="isVisible" :photo="details" v-if="isVisible" @closeModal="closeModal"/>
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
</template>

<script>
import ImageService from '@/services/ImageService.js'
import AppHeader from '@/components/AppHeader'
import AppModal from '@/components/AppModal'
import { Stack, StackItem } from 'vue-stack-grid'

export default {
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
      console.log(this.details);
    },
    closeModal() {
      this.isVisible = false;
    }
  }
}
</script>

<style>

</style>