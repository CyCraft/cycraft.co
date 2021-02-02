<template>
  <div>
    <!-- Framework Logos -->
    <div class="_mbp-logos-wrapper">
      <div class="_mbp-logos-horizontal">
        <!-- Magnetar Logo -->
        <div
          class="flex flex-col items-center cursor-pointer place-self-start"
          @click="setMagnetar"
        >
          <img
            src="/frameworks/magnetar-logo-white.svg"
            alt="magnetar-logo"
            :draggable="false"
          />
          <img
            class="mt-6"
            src="/frameworks/magnetar-name.svg"
            alt="magnetar"
            :draggable="false"
          />
        </div>

        <!-- Blitzar Logo -->
        <div
          class="flex flex-col items-center cursor-pointer place-self-center"
          @click="setBlitzar"
        >
          <img
            src="/frameworks/blitzar-logo-white.svg"
            alt="blitzar-logo"
            :draggable="false"
          />
          <img
            class="mt-6"
            src="/frameworks/blitzar-name.svg"
            alt="blitzar"
            :draggable="false"
          />
        </div>

        <!-- Planetar Logo -->
        <div
          class="flex flex-col items-center cursor-pointer place-self-end"
          @click="setPlanetar"
        >
          <img
            src="/frameworks/planetar-logo-white.svg"
            alt="planetar-logo"
            :draggable="false"
          />
          <img
            class="mt-6"
            src="/frameworks/planetar-name.svg"
            alt="planetar"
            :draggable="false"
          />
        </div>
      </div>
    </div>

    <!-- Framework Lines and Cards -->
    <div
      style="min-height: 480px"
      class="mt-6"
    >
      <!-- Magnetar Line -->
      <div
        v-show="magnetar"
        id="magnetar"
      >
        <div class="flex flex-row">
          <div
            class="w-1/2 flex flex-row"
            style="padding-left: 107px"
          >
            <svg
              style="flex: 1"
              width="433"
              viewBox="0 0 433 211"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="magnetar-line"
                d="M1.5 0V120H431.5V210.5"
                stroke="white"
                stroke-width="2"
              />
            </svg>

          </div>
        </div>
      </div>
      <!-- Magnetar Card -->
      <transition
        name="fade-framework-card"
        mode="out-in"
      >
        <div
          v-show="magnetar"
          id="magnetar"
        >
          <div class="w-1/2"></div>

          <div class="flex flex-row justify-center">
            <div
              class="flex flex-col justify-center"
              style="width: 250px"
            >
              <FrameworkCard
                title="magnetar"
                textUrl="magnetar.cycraft.co"
                url="https://magnetar.cycraft.co"
              />
              <div class="text-body1 mt-4 text-wrap-all">{{ descriptionMagnetar }}</div>
            </div>
          </div>
        </div>
      </transition>
      <!-- Blitzar Line -->
      <div
        v-show="blitzar"
        id="blitzar"
      >
        <div class="flex flex-row">
          <div class="w-1/2"></div>
          <div
            class="w-1/2 flex flex-row"
            style="padding-right: 90px"
          >
            <svg
              width="2"
              height="208"
              viewBox="0 0 2 208"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="blitzar-line"
                d="M0.5 0.5V415.5"
                stroke="white"
                stroke-width="2"
              />
            </svg>

          </div>
        </div>
      </div>
      <!-- Blitzar Card -->
      <transition
        name="fade-framework-card"
        mode="out-in"
      >
        <div
          v-show="blitzar"
          id="blitzar"
        >
          <div class="flex flex-row justify-center">
            <div
              class="flex flex-col justify-center"
              style="width: 250px"
            >
              <FrameworkCard
                title="blitzar"
                textUrl="blitzar.cycraft.co"
                url="https://blitzar.cycraft.co"
              />
              <div class="text-body1 mt-4 text-wrap-all">{{ descriptionBlitzar }}</div>
            </div>
          </div>
        </div>
      </transition>
      <!-- Planetar Line -->
      <div
        v-show="planetar"
        id="planetar"
      >
        <div class="flex flex-row">
          <div class="w-1/2"></div>
          <div
            class="w-1/2 flex flex-row"
            style="padding-right: 115px"
          >
            <svg
              style="flex: 1"
              width="450"
              viewBox="0 0 450 211"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="planetar-line"
                d="M449 0V120H1V212.5"
                stroke="white"
                stroke-width="2"
              />
            </svg>

          </div>
        </div>
      </div>
      <!-- Planetar Card -->
      <transition
        name="fade-framework-card"
        mode="out-in"
      >
        <div
          v-show="planetar"
          id="planetar"
        >
          <div class="flex flex-row justify-center">
            <div
              class="flex flex-col justify-center"
              style="width: 250px"
            >
              <FrameworkCard
                title="planetar"
                textUrl="planetar.cyraft.co"
                url="https://github.com/CyCraft/planetar"
              />
              <div class="text-body1 mt-4 text-wrap-all">{{ descriptionPlanetar }}</div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.fade-framework-card-enter-active
  transition: all 1.5s ease
  transition-delay: 0.7s

.fade-framework-card-leave-active
  transition: all 0.3s ease // also update FADE_OUT_MS

.fade-framework-card-enter,
.fade-framework-card-leave-to
  opacity: 0

._mbp-logos-wrapper
  width: 100%
  height: 210px
  position: relative
  display: flex
  justify-content: center
._mbp-logos-horizontal
  width: 100%
  min-width: 750px
  position: absolute
  display: grid
  grid-template-columns: auto auto auto
  justify-content: space-between
</style>

<script>
import anime from 'animejs/lib/anime.es.js'
import FrameworkCard from './FrameworkCard'

const FADE_OUT_MS = 300

export default {
  name: 'FrameworksDesktop',
  components: {
    FrameworkCard,
  },
  props: {
    descriptionPlanetar: { type: String, required: true },
    descriptionMagnetar: { type: String, required: true },
    descriptionBlitzar: { type: String, required: true },
  },
  data() {
    return {
      blitzar: true,
      planetar: false,
      magnetar: false,
      animateLineId: 'blitzar-line',
      animationTimeout: null,
    }
  },
  methods: {
    resetAnimation() {
      this.magnetar = false
      this.blitzar = false
      this.planetar = false
      if (this.animationTimeout) {
        clearTimeout(this.animationTimeout)
      }
    },
    setPlanetar() {
      this.resetAnimation()
      this.animationTimeout = setTimeout(() => {
        this.planetar = true
        this.animateLineId = 'planetar-line'
        this.animateLine()
      }, FADE_OUT_MS)
    },
    setMagnetar() {
      this.resetAnimation()
      this.animationTimeout = setTimeout(() => {
        this.magnetar = true
        this.animateLineId = 'magnetar-line'
        this.animateLine()
      }, FADE_OUT_MS)
    },
    setBlitzar() {
      this.resetAnimation()
      this.animationTimeout = setTimeout(() => {
        this.blitzar = true
        this.animateLineId = 'blitzar-line'
        this.animateLine()
      }, FADE_OUT_MS)
    },
    animateLine() {
      const svgPath = document.getElementById(this.animateLineId)
      anime({
        targets: svgPath,
        loop: false,
        direction: 'normal',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
      })
    },
  },
}
</script>
