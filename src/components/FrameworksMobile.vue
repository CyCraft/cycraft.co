<template>
  <div>
    <transition name="fade-dialog">
      <CyModal v-if="showingFrameworkCard" :active="showingFrameworkCard" @close="closeModal">
        <div class="flex flex-col items-center" style="padding: 1rem">
          <FrameworkCard
            :draggable="false"
            :isMobile="true"
            :title="selectedFrameworkDetails.title"
            :textUrl="selectedFrameworkDetails.textUrl"
            :url="selectedFrameworkDetails.url"
          />
          <div class="text-h4 mx-6 mt-8 text-center text-wrap-all">
            {{ selectedFrameworkDetails.description }}
          </div>
        </div>
      </CyModal>
    </transition>

    <div class="flex flex-col justify-center space-y-20">
      <!-- Magnetar -->
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center cursor-pointer" @click="showCardFor('magnetar')">
          <img src="/frameworks/magnetar-logo-white.svg" alt="logo" :draggable="false" />
          <img
            class="mt-6"
            src="/frameworks/magnetar-name.svg"
            alt="magnetar name"
            :draggable="false"
          />
        </div>
        <div class="text-h4 mx-6 mt-8 text-center text-wrap-all">
          {{ descriptionMagnetarShort }}
        </div>
      </div>

      <!-- Blitzar -->
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center cursor-pointer" @click="showCardFor('blitzar')">
          <img src="/frameworks/blitzar-logo-white.svg" alt="logo" :draggable="false" />
          <img
            class="mt-6"
            src="/frameworks/blitzar-name.svg"
            alt="blitzar name"
            :draggable="false"
          />
        </div>
        <div class="text-h4 mx-6 mt-8 text-center text-wrap-all">{{ descriptionBlitzarShort }}</div>
      </div>

      <!-- Planetar -->
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center cursor-pointer" @click="showCardFor('planetar')">
          <img src="/frameworks/planetar-logo-white.svg" alt="logo" :draggable="false" />
          <img
            class="mt-6"
            src="/frameworks/planetar-name.svg"
            alt="planetar name"
            :draggable="false"
          />
        </div>
        <div class="text-h4 mx-6 mt-8 text-center text-wrap-all">
          {{ descriptionPlanetarShort }}
        </div>
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
    descriptionPlanetarShort: { type: String, required: true },
    descriptionMagnetarShort: { type: String, required: true },
    descriptionBlitzarShort: { type: String, required: true },
    descriptionPlanetar: { type: String, required: true },
    descriptionMagnetar: { type: String, required: true },
    descriptionBlitzar: { type: String, required: true },
  },
  data() {
    return {
      showingFrameworkCardFor: '',
      showingFrameworkCard: false,
    }
  },
  computed: {
    selectedFrameworkDetails() {
      const { showingFrameworkCardFor: framework } = this
      const info = {
        planetar: {
          title: 'planetar',
          textUrl: 'planetar.cyraft.co',
          url: 'https://github.com/CyCraft/planetar',
          description: this.descriptionPlanetar,
        },
        magnetar: {
          title: 'magnetar',
          textUrl: 'magnetar.cycraft.co',
          url: 'https://magnetar.cycraft.co',
          description: this.descriptionMagnetar,
        },
        blitzar: {
          title: 'blitzar',
          textUrl: 'blitzar.cycraft.co',
          url: 'https://blitzar.cycraft.co',
          description: this.descriptionBlitzar,
        },
      }
      return info[framework] || {}
    },
  },
  methods: {
    /**
     * @param {'planetar' | 'magnetar' | 'blitzar'} framework
     */
    showCardFor(framework) {
      this.showingFrameworkCardFor = framework
      this.showingFrameworkCard = true
    },
    closeModal() {
      this.showingFrameworkCardFor = ''
      this.showingFrameworkCard = false
    },
  },
}
</script>
