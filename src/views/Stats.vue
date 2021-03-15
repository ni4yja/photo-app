<template>
  <div class="app-content">
    <AppHeader/>
    <div class="chart">
      <canvas ref="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import ImageService from '@/services/ImageService.js'
import AppHeader from '@/components/AppHeader'
import {PolarArea} from 'vue-chartjs'

export default {
  components: {
    AppHeader
  },
  extends: PolarArea,
  data() {
    return {
      downloads: [],
      views: []
    }
  },
  created() {
    this.showStats()
  },
  mounted() {
    this.renderChart({
      labels: ['Downloads', 'Views'],
      datasets: [
        {
          label: 'Data One',
          data: [this.downloads, this.views],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
        ],
        }
      ]
    })
  },
  methods: {
    showStats() {
      ImageService.getStats()
      .then(response => {
        this.downloads = response.data.downloads
        this.views = response.data.views
        console.log(response.data)
        console.log(this.downloads)
        console.log(this.views)
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
    }
  }
}
</script>

<style>

</style>