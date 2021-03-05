import axios from 'axios'

const api_key = process.env.VUE_APP_API_KEY

const apiClient = axios.create({
  baseURL: `https://api.unsplash.com`,
  headers: {
    Authorization:
      "Client-ID " + `${api_key}`,
      "Accept-Version": "v1"
  }
})

export default {
  getSearch(topic) {
    return apiClient.get('/search/photos?query=' + `${topic}` + '&per_page=1')
  },
  getRandom() {
    return apiClient.get('/photos/random?count=20')
  },
  getCollections() {
    return apiClient.get('/collections?per_page=12')
  }
}