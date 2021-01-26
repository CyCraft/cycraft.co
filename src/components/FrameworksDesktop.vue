<template>
  <div>
    <div class="_mbp-logos-wrapper">
      <div class="_mbp-logos-horizontal">
        <!-- Magnetar -->
        <div
          class="flex flex-col items-center cursor-pointer place-self-start"
          @click="setMagnetar"
        >
          <img src="/magnetar-logo-white.svg" alt="magnetar-logo" :draggable="false" />
          <img class="mt-6" src="/magnetar-name.svg" alt="magnetar" :draggable="false" />
        </div>

        <!-- Blitzar -->
        <div
          class="flex flex-col items-center cursor-pointer place-self-center"
          @click="setBlitzar"
        >
          <img src="/blitzar-logo-white.svg" alt="blitzar-logo" :draggable="false" />
          <img class="mt-6" src="/blitzar-name.svg" alt="blitzar" :draggable="false" />
        </div>

        <!-- Planetar -->
        <div class="flex flex-col items-center cursor-pointer place-self-end" @click="setPlanetar">
          <img src="/planetar-logo-white.svg" alt="planetar-logo" :draggable="false" />
          <img class="mt-6" src="/planetar-name.svg" alt="planetar" :draggable="false" />
        </div>
      </div>
    </div>

    <div style="min-height: 480px" class="mt-6">
      <transition name="icon-fade">
        <div v-show="magnetar" id="magnetar">
          <div class="flex flex-row">
            <div class="w-1/2 flex flex-row" style="padding-left: 107px">
              <svg
                style="flex: 1"
                width="432"
                viewBox="0 0 432 211"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path id="magnetar-line" d="M431 211V121.5H1V0.5" stroke="white" />
              </svg>
            </div>
          </div>
          <div class="w-1/2"></div>

          <div class="flex flex-row justify-center">
            <div class="flex flex-col justify-center" style="width: 250px">
              <FrameworkCard
                title="magnetar"
                textUrl="magnetar.cycraft.co"
                url="https://magnetar.cycraft.co"
              />
              <div class="text-body1 mt-4">{{ magnetarDescriptionTitle }}</div>
              <div class="text-body1 mt-4">{{ magnetarDescription }}</div>
            </div>
          </div>
        </div>
      </transition>

      <transition name="icon-fade">
        <div v-show="blitzar" id="blitzar">
          <div class="flex flex-row">
            <div class="w-1/2"></div>
            <div class="w-1/2 flex flex-row" style="padding-right: 90px">
              <svg
                width="2"
                height="208"
                viewBox="0 0 2 208"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path id="blitzar-line" d="M1 208V0" stroke="white" />
              </svg>
            </div>
          </div>
          <div class="flex flex-row justify-center">
            <div class="flex flex-col justify-center" style="width: 250px">
              <FrameworkCard
                title="blitzar"
                textUrl="blitzar.cycraft.co"
                url="https://blitzar.cycraft.co"
              />
              <div class="text-body1 mt-4">{{ blitzarDescription }}</div>
            </div>
          </div>
        </div>
      </transition>
      <transition name="icon-fade">
        <div v-show="planetar" id="planetar">
          <div class="flex flex-row">
            <div class="w-1/2"></div>
            <div class="w-1/2 flex flex-row" style="padding-right: 115px">
              <svg
                style="flex: 1"
                width="449"
                viewBox="0 0 449 211"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path id="planetar-line" d="M1 211V121.5H448.5V0.5" stroke="white" />
              </svg>
            </div>
          </div>
          <div class="flex flex-row justify-center">
            <div class="flex flex-col justify-center" style="width: 250px">
              <FrameworkCard
                title="planetar"
                textUrl="planetar.cyraft.co"
                url="https://github.com/CyCraft/planetar"
              />
              <div class="text-body1 mt-4">{{ planetarDescription }}</div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.icon-fade-enter-active
  transition: all 1.5s ease

.icon-fade-leave-active
  transition: all 0.3s ease // also update FADE_OUT_MS

.icon-fade-enter,
.icon-fade-leave-to
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
    sectionTitle: {
      type: String,
      default: 'Frameworks',
    },
    planetarDescription: {
      type: String,
      required: true,
    },
    magnetarDescriptionTitle: {
      type: String,
      required: true,
    },
    magnetarDescription: {
      type: String,
      required: true,
    },
    blitzarDescription: {
      type: String,
      required: true,
    },
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
      this.animateLineId = 'planetar-line'
      this.animationTimeout = setTimeout(() => {
        this.planetar = true
        this.animateLine()
      }, FADE_OUT_MS)
    },
    setMagnetar() {
      this.resetAnimation()
      this.animateLineId = 'magnetar-line'
      this.animationTimeout = setTimeout(() => {
        this.magnetar = true
        this.animateLine()
      }, FADE_OUT_MS)
    },
    setBlitzar() {
      this.resetAnimation()
      this.animateLineId = 'blitzar-line'
      this.animationTimeout = setTimeout(() => {
        this.blitzar = true
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
