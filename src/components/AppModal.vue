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
          <h5 class="title is-5">Info:</h5>
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
          v-if="hasDetails">
          <h5 class="title is-5">Details:</h5>
          <p v-for="(value, field, index) in details" :key="index">
            <span> {{ detailsFields[field] }} </span> {{ value }}
          </p>
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
  data () {
    return {
      detailsFields: {
        make: 'Camera make:',
        model: 'Camera model:',
        focal_length: 'Focal length:',
        aperture: 'Aperture:',
        exposure_time: 'Exposure:',
        iso: 'ISO:',
      }
    }
  },
  computed: {
    hasDetails() {
      return Object.keys(this.details).length;
    },
    details() {
      let detailsObj = {};
      
      for (const key in this.photo.exif) {
        const element = this.photo.exif[key];
        if (Object.hasOwnProperty.call(this.photo.exif, key) && element) {
          detailsObj[key] = element;
        }
      }

      return detailsObj;
    },
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

@media (max-width: 768px) {
  .modal-content {
    flex-direction: column;
    width: 90%;
  }
}

.modal-content .title,
.modal-content .subtitle {
  text-align: left;
}

.modal-image {
  margin-right: 2rem;
}

@media (max-width: 768px) {
  .modal-image {
    margin-right: 0;
  }
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