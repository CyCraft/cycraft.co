<template>
  <div id="app" class="h-full w-full">
    <transition name="fade-loading-animation">
      <LoadingAnimation v-if="loading" @click="loading = false" class="_loading-wall" />
    </transition>
    <div :class="`_app ${loading ? '_loading' : ''} flex justify-center`">
      <!-- Left glitches descending order -->
      <img
        src="/glitches/SideGlitchAlt3.png"
        class="side-glitch-1 blink-image-1"
        :class="{ showSideGlitch: !scrolling }"
      />
      <img
        src="/glitches/SideGlitchAlt1.png"
        class="side-glitch-2 blink-image-3"
        :class="{ showSideGlitch: !scrolling }"
      />
      <img
        src="/glitches/SideGlitchAlt2.png"
        class="side-glitch-3 blink-image-2"
        :class="{ showSideGlitch: !scrolling }"
      />
      <img
        src="/glitches/SideGlitchAlt4.png"
        class="side-glitch-4 blink-image-3"
        :class="{ showSideGlitch: !scrolling }"
      />
      <!-- Right glitches descending order -->
      <img
        src="/glitches/SideGlitchAlt5.png"
        class="side-glitch-5 blink-image-2"
        :class="{ showSideGlitch: !scrolling }"
      />
      <img
        src="/glitches/SideGlitchAlt6.png"
        class="side-glitch-6 blink-image-1"
        :class="{ showSideGlitch: !scrolling }"
      />
      <img
        src="/glitches/SideGlitchAlt7.png"
        class="side-glitch-7 blink-image-3"
        :class="{ showSideGlitch: !scrolling }"
      />
      <img
        src="/glitches/SideGlitchAlt8.png"
        class="side-glitch-8 blink-image-1"
        :class="{ showSideGlitch: !scrolling }"
      />
      <LandingPage :scrolling="scrolling" />
    </div>
  </div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap')
@import './css/styles.css'
@import './css/app.sass'
@import './css/blink.sass'

._app
  background: black
  &._loading
    position: fixed
    width: 100vw
    height: 100vh
    overflow: hidden
._loading-wall
  height: 100vh
  width: 100vw
  position: fixed
  touch-action: none
  z-index: 2

.fade-loading-animation-enter-active, .fade-loading-animation-leave-active
  transition: opacity 300ms

.fade-loading-animation-enter, .fade-loading-animation-leave-to
  opacity: 0

body
  height: 100vh
  background-color: black
  overscroll-behavior-y: none
  overscroll-behavior-x: none

.showSideGlitch
  visibility: hidden

.side-glitch-1,
.side-glitch-2,
.side-glitch-3,
.side-glitch-4
  position: absolute
  left: 0

.side-glitch-1
  top: 120px
.side-glitch-2
  top: 1200px
.side-glitch-3
  top: 2400px
.side-glitch-4
  top: 4000px

.side-glitch-5,
.side-glitch-6,
.side-glitch-7,
.side-glitch-8
  position: absolute
  right: 0

.side-glitch-5
  top: 400px
.side-glitch-6
  top: 1700px
.side-glitch-7
  top: 2800px
.side-glitch-8
  top: 3700px
</style>

<script>
/*!
 * Run a callback function after scrolling has stopped
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} callback The function to run after scrolling
 */
var scrollStop = function (callback) {
  // Make sure a valid callback was provided
  if (!callback || typeof callback !== 'function') return

  // Setup scrolling variable
  var isScrolling

  // Listen for scroll events
  window.addEventListener(
    'scroll',
    function (event) {
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling)

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function () {
        // Run the callback
        callback()
      }, 0)
    },
    false,
  )
}
import LandingPage from './components/LandingPage.vue'
import LoadingAnimation from './components/LoadingAnimation.vue'

export default {
  name: 'App',
  components: {
    LandingPage,
    LoadingAnimation,
  },
  data() {
    return {
      scrolling: false,
      loading: true,
      timeout: null,
    }
  },
  mounted() {
    window.onscroll = this.handleScroll
    scrollStop(this.handleScrollingStopped)
    setTimeout(() => {
      this.loading = false
    }, 5000)
  },
  methods: {
    handleScroll() {
      if (this.timeout) clearTimeout(this.timeout)
      this.scrolling = true
    },
    handleScrollingStopped() {
      if (this.timeout) clearTimeout(this.timeout)
      this.timeout = setTimeout(() => (this.scrolling = false), 200)
    },
  },
}
</script>
