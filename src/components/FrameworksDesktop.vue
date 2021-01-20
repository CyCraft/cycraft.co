<template>
  <div>
    <div class="text-h2 text-left">{{ sectionTitle }}</div>

    <div class="grid grid-cols-3 mt-12">
      <!-- Planetar -->
      <div class="flex flex-col items-center cursor-pointer place-self-start" @click="setPlanetar">
        <img src="/planetar-logo-white.svg" alt="" />
        <img class="mt-6" src="/planetar-name.svg" alt="" />
      </div>

      <!-- Magnetar -->
      <div class="flex flex-col items-center cursor-pointer place-self-center" @click="setMagnetar">
        <img src="/magnetar-logo-white.svg" alt="" />
        <img class="mt-6" src="/magnetar-name.svg" alt="" />
      </div>

      <!-- Blitzar -->
      <div class="flex flex-col items-center cursor-pointer place-self-end" @click="setBlitzar">
        <img src="/blitzar-logo-white.svg" alt="" />
        <img class="mt-6" src="/blitzar-name.svg" alt="" />
      </div>
    </div>
    <transition name="icon-fade">
      <div v-show="planetar" id="planetar" class="mt-6">
        <div class="flex flex-row">
          <div class="w-1/2 flex flex-row" style="padding-left: 115px">
            <svg
              style="flex: 1"
              width="432"
              viewBox="0 0 432 211"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path id="planetar-line" d="M431 211V121.5H1V0.5" stroke="white" />
            </svg>
          </div>
          <div class="w-1/2"></div>
        </div>
        <div class="flex flex-row justify-center">
          <div class="flex flex-col justify-center">
            <FrameworkCard title="planetar" textUrl="planetar.cyraft.co" url="https://google.com">
              <PlanetarFrameworkCardSvg style="bottom: -2px; right: -25px" />
            </FrameworkCard>
            <div class="text-body1 mt-4" style="width: 210px">{{ planetarDescription }}</div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="icon-fade">
      <div v-show="magnetar" id="magnetar" class="mt-6">
        <div class="flex flex-row justify-center">
          <svg
            width="2"
            height="208"
            viewBox="0 0 2 208"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path id="magnetar-line" d="M1 208V0" stroke="white" />
          </svg>
        </div>

        <div class="flex flex-row justify-center">
          <div class="flex flex-col justify-center">
            <FrameworkCard title="Magnetar" textUrl="magnetar.cycraft.co" url="https://google.com">
              <MagnetarFrameworkCardSvg style="bottom: -2px; right: -55px" />
            </FrameworkCard>
            <div class="text-body1 mt-4" style="width: 210px">{{ magnetarDescriptionTitle }}</div>
            <div class="text-body1 mt-4" style="width: 210px">{{ magnetarDescription }}</div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="icon-fade">
      <div v-show="blitzar" class="mt-6">
        <div class="flex flex-row">
          <div class="w-1/2"></div>
          <div class="w-1/2 flex flex-row" style="padding-right: 90px">
            <svg
              style="flex: 1"
              width="449"
              viewBox="0 0 449 211"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path id="blitzar-line" d="M1 211V121.5H448.5V0.5" stroke="white" />
            </svg>
          </div>
        </div>
        <div class="flex flex-row justify-center">
          <div class="flex flex-col justify-center">
            <FrameworkCard title="Blitzar" textUrl="blitzar.cycraft.co" url="https://google.com">
              <BlitzarFrameworkCardSvg style="bottom: -2px; right: -5px" />
            </FrameworkCard>
            <div class="text-body1 mt-4" style="width: 210px">{{ blitzarDescription }}</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
import FrameworkCard from './FrameworkCard'
import PlanetarFrameworkCardSvg from './SVGs/PlanetarFrameworkCardSvg'
import MagnetarFrameworkCardSvg from './SVGs/MagnetarFrameworkCardSvg'
import BlitzarFrameworkCardSvg from './SVGs/BlitzarFrameworkCardSvg'
export default {
  name: 'FrameworksDesktop',
  components: {
    FrameworkCard,
    PlanetarFrameworkCardSvg,
    MagnetarFrameworkCardSvg,
    BlitzarFrameworkCardSvg,
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
      planetar: true,
      magnetar: false,
      blitzar: false,
      animateLineId: 'planetar-line',
    }
  },
  methods: {
    setPlanetar() {
      this.animateLineId = 'planetar-line'
      this.planetar = true
      this.magnetar = false
      this.blitzar = false
      this.animateLine()
    },
    setMagnetar() {
      this.animateLineId = 'magnetar-line'
      this.planetar = false
      this.magnetar = true
      this.blitzar = false
      this.animateLine()
    },
    setBlitzar() {
      this.animateLineId = 'blitzar-line'
      this.planetar = false
      this.magnetar = false
      this.blitzar = true
      this.animateLine()
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
<style scoped>
.icon-fade-enter-active {
  transition: all 1.5s ease;
}
.icon-fade-leave-active {
  transition: all 0.3s ease;
}
.icon-fade-enter,
.icon-fade-leave-to {
  opacity: 0;
}
</style>