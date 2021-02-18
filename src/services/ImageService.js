import axios from 'axios'

let api_key = process.env.VUE_APP_API_KEY

const apiClient = axios.create({
  baseURL: `https://api.unsplash.com`,
  headers: {
    Authorization:
      "Client-ID " + `${api_key}`,
      "Accept-Version": "v1"
  }
})

export default {
  getImages(topic) {
    return apiClient.get('/search/photos?query=' + `${topic}` + '&per_page=20')
  }
}