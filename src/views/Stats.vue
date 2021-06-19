<template>
  <div class="app-content">
    <AppHeader/>
    <div class="container">
      <h2 class="title">Here is our stats</h2>
      <bar-chart
        v-if="loaded"
        :chartdata="chartdata"
        :options="options"
      />
    </div>
  </div>
</template>

<script>
import ImageService from '@/services/ImageService.js'
import AppHeader from '@/components/AppHeader'
import BarChart from '@/components/Chart.vue'

export default {
  name: 'BarChartContainer',
  components: {
    AppHeader,
    BarChart
  },
  data() {
    return {
      loaded: false,
      chartdata: null
    }
  },
  mounted() {
    this.loaded = false
    ImageService.getStats()
      .then(response => {
        const userlist = {
          labels: ['New developers', 'New photographers'], 
          datasets: [
            {
              label: 'This month',
              backgroundColor: ['#ffe45e', '#ff6392'],
              data: [response.data.new_developers, response.data.new_photographers]
            }
          ] 
        }
        this.chartdata = userlist
        this.options = {
          responsive: true,
          maintainAspectRatio: false
        }
        this.loaded = true
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>

<style land="scss" scoped>
  .title {
    margin-top: 2rem;
  }
</style>