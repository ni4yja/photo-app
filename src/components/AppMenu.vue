<template>
  <div>
    <span class="material-icons burger" @click="toggleActive">menu</span>
    <section class="app-menu" :class="[showNav ? 'slide-in' : 'slide-out']">
      <div class="app-menu-wrapper" v-show="menuActive">
        <router-link class="title is-5" to="/">Photo App Logo</router-link>
        <nav class="nav">
          <router-link class="subtitle is-5" :to="{ name: 'home' }">Home</router-link>
          <router-link class="subtitle is-5" :to="{ name: 'collections' }">Collections</router-link>
          <router-link class="subtitle is-5" :to="{ name: 'topics' }">Topics</router-link>
          <router-link class="subtitle is-5" :to="{ name: 'stats' }">Stats</router-link>
        </nav>
        <p class="credits">Made on Vue.js by <a href="https://twitter.com/ni4yja">ni4yja</a></p>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showNav: window.innerWidth > 768,
      menuActive: window.innerWidth > 768
    }
  },
  methods: {
    toggleActive() {
      this.menuActive = !this.menuActive
      this.showNav = !this.showNav
    },
    onClose() {
      this.showNav = false
    }
  }
}
</script>

<style lang="scss">
.app-menu {
  width: 20rem;
  height: 100vh;
  position: fixed;
  border-right: 1px solid gray;
  padding: 2rem;

  &-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.nav {
  display: flex;
  flex-direction: column;
}

.nav a {
  text-transform: uppercase;
}

.nav .router-link-exact-active {
  font-weight: bold;
}

.burger {
  display: none;
  position: fixed;
  right: 2rem;
  top: 1.6rem;
  z-index: 12;
}

@media (max-width: 768px) {
  .burger {
    display: block;
  }

  .app-menu {
    border: none;
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    background: #fff;
    border-right: 1px solid gray;
    z-index: 100;
  }
}

.slide-in {
  animation: slide-in 0.5s forwards;
  -webkit-animation: slide-in 0.5s forwards;
}

.slide-out {
  animation: slide-out 0.5s forwards;
  -webkit-animation: slide-out 0.5s forwards;
}

@keyframes slide-in {
  100% { transform: translateX(0%); }
}

@-webkit-keyframes slide-in {
  100% { -webkit-transform: translateX(0%); }
}
    
@keyframes slide-out {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}

@-webkit-keyframes slide-out {
  0% { -webkit-transform: translateX(0%); }
  100% { -webkit-transform: translateX(-100%); }
}
</style>