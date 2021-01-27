<template>
  <div class="flex justify-center h-auto">
    <transition name="fade-dialog">
      <CyModal v-if="showingContactDialog" :active="showingContactDialog" @close="closeContact">
        <ContactDialog />
      </CyModal>
    </transition>
    <div class="flex-col min-width-full justify-center" style="max-width: 900px">
      <!-- Mobile Header -->
      <div class="sm:hidden flex content-center justify-between p-3">
        <Monster />
        <div>
          <Wordmark height="20" style="opacity: 0.1" />
        </div>
      </div>
      <!-- Hero -->
      <div class="flex">
        <div class="hidden sm:flex sm:items-end pt-24 sm:pl-12 sm:pr-4 md:pr-10 lg:pr-20">
          <!-- CyCraft Logo -->
          <div class="object-contain sm:max-w-xs md:max-w-none">
            <img src="/cycraft/cy-craft-logo.svg" alt="" />
          </div>
        </div>
        <!-- Title Text & Button-->
        <div class="flex-col pt-10 px-10 mt-16 sm:mt-32 sm:mr-4">
          <div class="landing-page-title" style="max-width: 300px">
            We <CyTextGlitch :value="scrolling" :glitchAtRandom="true">craft</CyTextGlitch> without
            cruft.
          </div>
          <div class="landing-page-subtitle pt-6" style="max-width: 370px">
            {{ txt.pageSubTitle }}
          </div>
          <div class="mt-24 sm:mt-8 lg:mt-24" style="width: 11rem">
            <CyButton :hasGlitch="true" class="glitch" @click="contactUs">{{
              txt.contactBtn
            }}</CyButton>
          </div>
        </div>
      </div>
      <!-- Projects Section -->
      <div class="mx-0 sm:mx-10 mt-48 sm:mt-64">
        <!-- Section Title -->
        <div class="pl-6 sm:pl-0 text-h2 mb-6">{{ txt.chapterProjects }}</div>
        <!-- Project Grid -->
        <div class="grid gap-10 md:gap-20 grid-cols-1">
          <CyProject
            title="Pepicons"
            img="/projects/pepicons.png"
            url="https://pepicons.com/"
            linkText="pepicons.com"
            :description="txt.descriptionPepicons"
          />
          <CyProject
            title="CineMatch"
            img="/projects/cinematch.png"
            url="https://cine-match.com"
            linkText="cine-match.com"
            :description="txt.descriptionCM"
          />
        </div>
        <div class="pl-6 sm:pl-0 text-h2 mb-6 mt-20">{{ txt.chapterTeamEfforts }}</div>
        <div class="grid gap-10 md:gap-20 grid-cols-1">
          <CyProject
            title="UBI Calculator"
            img="/projects/ubicalculator.png"
            url="http://ubicalculator.com"
            linkText="ubicalculator.com"
            :description="txt.descriptionUBI"
          />
          <CyProject
            title="Peer Learning"
            img="/projects/peerlearning.png"
            url="https://peerlearning.net/"
            linkText="peerlearning.net"
            :description="txt.descriptionPL"
          />
        </div>
      </div>
      <div class="mx-0 sm:mx-10 mt-48 sm:mt-64">
        <div class="text-h2 pl-6 sm:pl-0 text-left">
          <CyTextGlitch :glitchAtRandom="true">{{ txt.chapterFrameworks }}</CyTextGlitch>
        </div>
      </div>
      <FrameworksMobile
        class="sm:hidden mt-20"
        :descriptionPlanetarShort="txt.descriptionPlanetarShort"
        :descriptionMagnetarShort="txt.descriptionMagnetarShort"
        :descriptionBlitzarShort="txt.descriptionBlitzarShort"
        :descriptionPlanetar="txt.descriptionPlanetar"
        :descriptionMagnetar="txt.descriptionMagnetar"
        :descriptionBlitzar="txt.descriptionBlitzar"
      />
      <FrameworksDesktop
        class="hidden sm:block mt-10 mx-10"
        :descriptionPlanetar="txt.descriptionPlanetar"
        :descriptionMagnetar="txt.descriptionMagnetar"
        :descriptionBlitzar="txt.descriptionBlitzar"
      />
      <!-- How we design and code -->
      <div class="mx-10" style="margin-top: 23rem">
        <div class="flex flex-col">
          <div class="" style="max-width: 403px">
            <div class="flex pb-4">
              <div class="text-h2">{{ txt.howWeDesign }}</div>
              <img class="w-5 ml-2 sm:w-10 sm:ml-6" src="/cycraft/cy-icon-white.svg" alt="" />
            </div>
            <div class="text-h4">
              {{ txt.howWeDesignSubtext }}
            </div>
          </div>
          <div class="mt-16 sm:mt-24 flex justify-end">
            <div style="max-width: 403px">
              <div class="flex pb-4 justify-end sm:justify-start">
                <div class="text-h2">
                  <CyTextGlitch :glitchAtRandom="true">{{ txt.howWeCode }}</CyTextGlitch>
                </div>
                <img class="w-5 ml-2 sm:w-10 sm:ml-6" src="/cycraft/cy-icon-white.svg" alt="" />
              </div>
              <div class="text-h4 text-right sm:text-left">
                {{ txt.howWeCodeSubtext }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About Us -->
      <div class="mx-6 mt-72">
        <div class="text-h2">{{ txt.chapterAboutUs }}</div>
        <AboutUsSection
          imgPosition="left"
          :bio="txt.bioLuca"
          :name="txt.nameLuca"
          github="mesqueeb"
          twitter="mesqueeb"
          photoUrl="/photos/LB.jpg"
        />
        <AboutUsSection
          imgPosition="right"
          :bio="txt.bioTadaki"
          :name="txt.nameTadaki"
          github="tdk0718"
          photoUrl="/photos/TM.jpg"
        />
      </div>
      <!-- Contact Us logo -->
      <div class="mx-10 mt-48 sm:mt-72 pb-8 flex flex-col items-center">
        <a style="cursor: pointer" @click="contactUs">
          <img src="/cycraft/contact-us@2x.png" alt="Contact Us Button" />
        </a>
        <div
          v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
          class="contact-us-underline js-underline"
        ></div>
      </div>
      <!-- English or Japanese -->
      <div class="mx-10 mt-4 sm:mt-24 md:mt-32 flex-col justify-end">
        <p class="text-h3 text-center">English? or Japanese?</p>
        <div class="flex justify-center mt-4">
          <CyToggle @input="toggled" />
        </div>
      </div>
      <!-- Copyright and Terms -->
      <div class="mx-10 mt-16 sm:mt-32 md:mt-48 pb-16 flex-col justify-end">
        <p class="text-h3 text-center">
          <CyTextGlitch :glitchAtRandom="true"> &copy; 2020 CyCraft</CyTextGlitch>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import '../css/typography.sass'

.fade-dialog-enter-active, .fade-dialog-leave-active
  transition: opacity .2s ease

.fade-dialog-enter, .fade-dialog-leave-to
  opacity: 0

.landing-page-title
  +header-globals()
  font-style: normal
  font-weight: 500
  font-size: 40px
  line-height: 49px
  @media (max-width: 640px)
    font-weight: 800
    font-size: 48px
    line-height: 58px
    letter-spacing: 0.025em
    text-transform: uppercase
.landing-page-subtitle
  +header-globals()
  font-style: normal
  font-weight: 500
  font-size: 20px
  line-height: 28px
.line
  background: white
  height: 1px
.contact-us-underline
  background: white
  height: 8px
  width: 100%
  margin-top: 24px
</style>

<script>
import anime from 'animejs/lib/anime.es.js'
import Vue from 'vue'
import VueWaypoint from 'vue-waypoint'
import smoothscroll from 'smoothscroll-polyfill'
import Wordmark from './SVGs/Wordmark.vue'
import CyTextGlitch from './CyTextGlitch.vue'
import CyToggle from './CyToggle.vue'
import Monster from './Monster.vue'
import CyButton from './CyButton.vue'
import AboutUsSection from './AboutUsSection.vue'
import CyProject from './CyProject.vue'
import FrameworksMobile from './FrameworksMobile.vue'
import FrameworksDesktop from './FrameworksDesktop.vue'
import ContactDialog from './ContactDialog.vue'
import CyModal from './CyModal.vue'
import { lang } from './lang.js'

smoothscroll.polyfill()
// Waypoint plugin
Vue.use(VueWaypoint)

export default {
  name: 'CycraftHomePage',
  components: {
    CyToggle,
    Monster,
    CyButton,
    AboutUsSection,
    CyProject,
    FrameworksMobile,
    FrameworksDesktop,
    ContactDialog,
    CyModal,
    CyTextGlitch,
    Wordmark,
  },

  props: { scrolling: Boolean },

  data() {
    const _lang = navigator.language
    const selectedLang = _lang.startsWith('ja') ? 'ja' : 'en'
    return {
      show: false,
      showingContactDialog: false,
      selectedLang,
      underlineIsAnimating: false,
      underlineIsExpanded: false,
      // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1],
      },
    }
  },

  computed: {
    txt() {
      const { selectedLang } = this

      const formattedLang = Object.entries(lang).reduce((result, [key, value]) => {
        result[key] = value[selectedLang]
        return result
      }, {})

      return formattedLang
    },
  },
  methods: {
    contactUs() {
      this.showingContactDialog = true
    },
    closeContact() {
      this.showingContactDialog = false
    },
    toggled(isChecked) {
      this.selectedLang = isChecked ? 'ja' : 'en'
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
    animateContactUsUnderline() {
      if (this.underlineIsAnimating) return
      if (this.underlineIsExpanded) return
      this.underlineIsAnimating = true
      anime({
        targets: '.js-underline',
        loop: false,
        scaleX: '1', // -> from '5%' to '100%',
        easing: 'easeInOutQuad',
        duration: 1000,
        complete: () => {
          this.underlineIsAnimating = false
          this.underlineIsExpanded = true
        },
      })
    },
    undoAnimateContactUsUnderline() {
      if (this.underlineIsAnimating) return
      if (!this.underlineIsExpanded) return
      this.underlineIsAnimating = true
      anime({
        targets: '.js-underline',
        loop: false,
        scaleX: '0.05', // -> from '100%' to '5%',
        easing: 'easeInOutQuad',
        duration: 100,
        complete: () => {
          this.underlineIsAnimating = false
          this.underlineIsExpanded = false
        },
      })
    },
    onWaypoint({ going }) {
      // going: in, out
      if (going === this.$waypointMap.GOING_IN) {
        this.animateContactUsUnderline()
        return
      }

      if (going === this.$waypointMap.GOING_OUT) {
        this.undoAnimateContactUsUnderline()
      }
    },
  },
}
</script>
