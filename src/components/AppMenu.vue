<template>
  <section class="app-menu">
    <router-link class="title is-5" to="/">Photo App Logo</router-link>
    <nav class="nav">
      <router-link class="subtitle is-5" :to="{ name: 'home' }">Home</router-link>
      <router-link class="subtitle is-5" :to="{ name: 'collections' }">Collections</router-link>
      <router-link class="subtitle is-5" :to="{ name: 'topics' }">Topics</router-link>
      <router-link class="subtitle is-5" :to="{ name: 'stats' }">Stats</router-link>
    </nav>
    <p class="credits">Made on Vue.js by <a href="https://twitter.com/ni4yja">ni4yja</a></p>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.app-menu {
  width: 20rem;
  height: 100vh;
  position: fixed;
  border-right: 1px solid gray;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
</style>