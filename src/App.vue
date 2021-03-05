<template>
  <div id="app">
    <div class="app-container">
      <AppMenu/>      
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppMenu from '@/components/AppMenu'

export default {
  name: "app",
  components: {
    AppMenu
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

.app-container {
  position: relative;
  display: flex;
}

.app-content {
  width: calc(100% - 20rem);
  position: relative;
  left: 20rem;
}

.images-grid {
  max-width: 80vw;
  margin: 0 auto;
  padding: 0 2rem 2rem;
}

.images-grid--item {
  width: 100%;
  height: auto;
  border-radius: 12px;
}
</style>