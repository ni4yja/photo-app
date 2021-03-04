<template>
 <div class="modal" :class="{'is-active': modal}">
   <div class="modal-background"></div>
   <div class="modal-content">
      <div class="modal-image"><img :src="photo.urls.small" alt=""></div>
      <div class="modal-info">
        <div class="row">
          <h4 class="title is-4">{{ photo.user.name }}</h4>
          <h4 class="subtitle is-4"><a href="#">@{{ photo.user.username }}</a></h4>
        </div>
        <div class="row">
          <h5 class="title is-5">Info</h5>
          <p class="subtitle is-5">Published on {{ getDate }}</p>
        </div>
        <div class="row flex">
          <p><span class="material-icons">download</span>{{ photo.downloads }}</p>
          <p><span class="material-icons">favorite</span>{{ photo.likes }}</p>
        </div>
        <div class="row" v-if="photo.location.city != null && photo.location.country != null">
          <p class="subtitle is-5">
            <span class="material-icons">location_on</span>
          {{ photo.location.city }}, {{ photo.location.country }}
          </p>
        </div>
        <div class="row" v-if="photo.description != null">
          <h5 class="title is-5">Description:</h5>
          <p class="subtitle is-5">{{ photo.description }}</p>
        </div>
        <div class="row details" 
          v-if="photo.exif.make != null 
            && photo.exif.model != null 
            && photo.exif.focal_length != null
            &&photo.exif.aperture != null
            &&photo.exif.exposure_time != null
            &&photo.exif.iso != null">
          <h5 class="title is-5">Details:</h5>
          <p><span>Camera make:</span> {{ photo.exif.make }}</p>
          <p><span>Camera model:</span> {{ photo.exif.model }}</p>
          <p><span>Focal length:</span> {{ photo.exif.focal_length }}</p>
          <p><span>Aperture:</span> {{ photo.exif.aperture }}</p>
          <p><span>Exposure time:</span> {{ photo.exif.exposure_time }}</p>
          <p><span>ISO:</span> {{ photo.exif.iso }}</p>
        </div>
        <div class="row buttons">
          <a :href="photo.urls.small" target="_blank" class="button">Small</a>
          <a :href="photo.urls.regular" target="_blank" class="button">Regular</a>
          <a :href="photo.urls.full" target="_blank" class="button">Full</a>
        </div>
      </div>
   </div>
   <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
 </div>
</template>

<script>
export default {
  props: {
    modal: {type: Boolean},
    photo: {type: Object} 
  },
  computed: {
    getDate() {
      let date = this.photo.created_at.slice(0, 10);
      return date;
    }
  },  
  methods: {
    closeModal() {
     this.$emit('closeModal');
    }
  }
}
</script>

<style>
.modal-content {
  background: #fff;
  padding: 2rem;
  display: flex;
  width: 60%;
}

.modal-content .title,
.modal-content .subtitle {
  text-align: left;
}

.modal-image {
  margin-right: 2rem;
}

.modal-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.row {
  margin-bottom: 1.6rem;
}

.row.flex {
  display: flex;
}

.row.flex p:first-child {
  margin-right: 3rem;
}

.row p {
  display: flex;
  align-items: center;
}

.row span {
  margin-right: 0.5rem;
}

.row.buttons {
  display: flex;
  margin-top: auto;
}

.row.details .title {
  margin-bottom: .5rem;
}
</style>