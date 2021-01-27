<template>
  <div id="app" class="h-full w-full">
    <transition name="fade-loading-animation">
      <LoadingAnimation v-if="loading" class="_loading-wall" />
    </transition>
    <div :class="`_app ${loading ? '_loading' : ''} flex justify-center`">
      <!-- Left glitches descending order -->
      <img
        src="/SideGlitchAlt3.png"
        class="side-glitch-1 blink-image-1"
        :class="{ showSideGlitch: !scrolling }"
      />
      <img
        src="/SideGlitchAlt1.png"
        class="side-glitch-2 blink-image-3"
        :class="{ showSideGlitch: !scrolling }"
      />
      <img
        src="/SideGlitchAlt2.png"
        class="side-glitch-3 blink-image-2"
        :class="{ showSideGlitch: !scrolling }"
      />
      <img
        src="/SideGlitchAlt4.png"
        class="side-glitch-4 blink-image-3"
        :class="{ showSideGlitch: !scrolling }"
      />
      <!-- Right glitches descending order -->
      <img
        src="/SideGlitchAlt5.png"
        class="side-glitch-5 blink-image-2"
        :class="{ showSideGlitch: !scrolling }"
      />
      <img
        src="/SideGlitchAlt6.png"
        class="side-glitch-6 blink-image-1"
        :class="{ showSideGlitch: !scrolling }"
      />
      <img
        src="/SideGlitchAlt7.png"
        class="side-glitch-7 blink-image-3"
        :class="{ showSideGlitch: !scrolling }"
      />
      <img
        src="/SideGlitchAlt8.png"
        class="side-glitch-8 blink-image-1"
        :class="{ showSideGlitch: !scrolling }"
      />
      <CyCraftHomePage :scrolling="scrolling" />
    </div>
  </div>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700;800&display=swap')
@import './assets/styles.css'
@import './css/app.sass'

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
@keyframes blink1
  0%
    opacity: 0
  3%
    opacity: 0.7
  7%
    opacity: 0.2
  16%
    opacity: 0.6
  20%
    opacity: 0.1
  23%
    opacity: 0
  27%
    opacity: 0.4
  28%
    opacity: 0
  36%
    opacity: 0.7
  41%
    opacity: 0
  45%
    opacity: 0.7
  50%
    opacity: 0.3
  67%
    opacity: 0.2
  79%
    opacity: 0.7
  85%
    opacity: 0.5
  92%
    opacity: 0.6
  98%
    opacity: 0.3
  100%
    opacity: 0.6

@keyframes blink2
  0%
    opacity: 0
  6%
    opacity: 0.7
  9%
    opacity: 0.2
  11%
    opacity: 0.6
  17%
    opacity: 0.1
  25%
    opacity: 0
  29%
    opacity: 0.4
  33%
    opacity: 0
  37%
    opacity: 0.7
  40%
    opacity: 0
  42%
    opacity: 0.7
  44%
    opacity: 0.3
  55%
    opacity: 0.2
  62%
    opacity: 0.7
  71%
    opacity: 0.5
  73%
    opacity: 0.6
  84%
    opacity: 0.3
  87%
    opacity: 0.3
  100%
    opacity: 0.6

@keyframes blink3
  0%
    opacity: 0.7
  5%
    opacity: 0.5
  10%
    opacity: 0.2
  15%
    opacity: 0.6
  18%
    opacity: 0.1
  21%
    opacity: 0
  24%
    opacity: 0.3
  33%
    opacity: 0
  39%
    opacity: 0.7
  40%
    opacity: 0
  47%
    opacity: 0.2
  53%
    opacity: 0.3
  55%
    opacity: 0.7
  62%
    opacity: 0
  74%
    opacity: 0.5
  76%
    opacity: 0.1
  80%
    opacity: 0.4
  87%
    opacity: 0.7
  100%
    opacity: 0.1

.blink-image-1
  animation: blink1 normal 1.5s infinite ease-in-out
.blink-image-2
  animation: blink2 normal 1.3s infinite ease-in-out
.blink-image-3
  animation: blink3 normal 1s infinite ease-in-out
.showSideGlitch
  visibility: hidden
.side-glitch-1
  position: absolute
  left: 0
  top: 120px

.side-glitch-2
  position: absolute
  left: 0
  top: 1200px

.side-glitch-3
  position: absolute
  left: 0
  top: 2400px

.side-glitch-4
  position: absolute
  left: 0
  top: 4000px

.side-glitch-5
  position: absolute
  right: 0
  top: 400px

.side-glitch-6
  position: absolute
  right: 0
  top: 1700px

.side-glitch-7
  position: absolute
  right: 0
  top: 2800px

.side-glitch-8
  position: absolute
  right: 0
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
import CyCraftHomePage from './components/CyCraftHomePage.vue'
import LoadingAnimation from './components/LoadingAnimation.vue'

export default {
  name: 'App',
  components: {
    CyCraftHomePage,
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
