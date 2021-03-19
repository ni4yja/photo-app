<template>
  <div class="app-menu-tab">
    <span class="material-icons burger" @click="toggleActive" ref="button">menu</span>
    <section class="app-menu" :class="[showNav ? 'slide-in' : 'slide-out']">
      <div class="app-menu-wrapper" 
        v-show="menuActive"  
        v-closable="{
          exclude: ['button'],
          handler: 'onClose'
        }"
      >
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
import Vue from 'vue'

// This variable will hold the reference to
// document's click handler
let handleOutsideClick

Vue.directive('closable', {
  bind (el, binding, vnode) {
    // Here's the click/touchstart handler
    // (it is registered below)
    handleOutsideClick = (e) => {
      e.stopPropagation()
      // Get the handler method name and the exclude array
      // from the object used in v-closable
      const { handler, exclude } = binding.value

      // This variable indicates if the clicked element is excluded
      let clickedOnExcludedEl = false
      exclude.forEach(refName => {
        // We only run this code if we haven't detected
        // any excluded element yet
        if (!clickedOnExcludedEl) {
          // Get the element using the reference name
          const excludedEl = vnode.context.$refs[refName]
          // See if this excluded element
          // is the same element the user just clicked on
          clickedOnExcludedEl = excludedEl.contains(e.target)
        }
      })

      // We check to see if the clicked element is not
      // the dialog element and not excluded
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        // If the clicked element is outside the dialog
        // and not the button, then call the outside-click handler
        // from the same component this directive is used in
        vnode.context[handler]()
      }
    }
    // Register click/touchstart event listeners on the whole page
    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('touchstart', handleOutsideClick)
  },

  unbind () {
    // If the element that has v-closable is removed, then
    // unbind click/touchstart listeners from the whole page
    document.removeEventListener('click', handleOutsideClick)
    document.removeEventListener('touchstart', handleOutsideClick)
  }
})
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
      if (window.innerWidth <= 768) {
        this.showNav = false
        this.menuActive = false
      }
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