<template>
  <div>
    <transition name="fade">
      <CyModal v-if="showingFrameworkCard" :active="showingFrameworkCard" @close="closeModal">
        <FrameworkCard
          style="margin: 0 auto"
          :isMobile="true"
          :title="frameworkCardTitle"
          :textUrl="frameworkCardTextUrl"
          :url="frameworkCardUrl"
        />
      </CyModal>
    </transition>
    <div class="text-h2 mx-4 text-left">{{ sectionTitle }}</div>

    <div class="flex flex-col justify-center space-y-20 mt-20">
      <!-- Magnetar -->
      <div class="flex flex-col items-center" @click="showMagnetarCard">
        <img src="/magnetar-logo-white.svg" alt="" />
        <img class="mt-6" src="/magnetar-name.svg" alt="" />
        <div class="text-h4 mx-4 mt-8 text-center">{{ magnetarDescription }}</div>
      </div>

      <!-- Blitzar -->
      <div class="flex flex-col items-center" @click="showBlitzarCard">
        <img src="/blitzar-logo-white.svg" alt="" />
        <img class="mt-6" src="/blitzar-name.svg" alt="" />
        <div class="text-h4 mx-4 mt-8 text-center">{{ blitzarDescription }}</div>
      </div>

      <!-- Planetar -->
      <div class="flex flex-col items-center" @click="showPepiconsCard">
        <img src="/planetar-logo-white.svg" alt="" />
        <img class="mt-6" src="/planetar-name.svg" alt="" />
        <div class="text-h4 mx-4 mt-8 text-center">{{ planetarDescription }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
</style>

<script>
import CyModal from './CyModal'
import FrameworkCard from './FrameworkCard'
import PlanetarFrameworkCardSvg from './SVGs/PlanetarFrameworkCardSvg'
import MagnetarFrameworkCardSvg from './SVGs/MagnetarFrameworkCardSvg'
import BlitzarFrameworkCardSvg from './SVGs/BlitzarFrameworkCardSvg'
export default {
  name: 'FrameworkMobile',
  components: {
    FrameworkCard,
    CyModal,
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
      showingFrameworkCard: false,
      svg: 'magnetar',
      frameworkCardTitle: '',
      frameworkCardTextUrl: '',
      frameworkCardUrl: '',
    }
  },
  methods: {
    showPepiconsCard() {
      this.showingFrameworkCard = true
      this.svg = 'planetar'
      this.frameworkCardTitle = 'planetar'
      this.frameworkCardTextUrl = 'planetar.cyraft.co'
      this.frameworkCardUrl = 'https://google.com'
    },
    showMagnetarCard() {
      this.showingFrameworkCard = true
      this.svg = 'magnetar'
      this.frameworkCardTitle = 'magnetar'
      this.frameworkCardTextUrl = 'magnetar.cycraft.co'
      this.frameworkCardUrl = 'https://google.com'
    },
    showBlitzarCard() {
      this.showingFrameworkCard = true
      this.svg = 'blitzar'
      this.frameworkCardTitle = 'blitzar'
      this.frameworkCardTextUrl = 'blitzar.cycraft.co'
      this.frameworkCardUrl = 'https://google.com'
    },
    closeModal() {
      this.showingFrameworkCard = false
      this.frameworkCardTitle = ''
      this.frameworkCardTextUrl = ''
      this.frameworkCardUrl = ''
    },
  },
}
</script>
