<template>
  <div class="bg-black flex justify-center h-auto">
    <transition name="fade">
      <ContactDialog
        v-if="showingContactDialog"
        :active="showingContactDialog"
        @close="closeContact"
      />
    </transition>
    <div class="flex-col min-width-full justify-center" style="max-width: 1100px">
      <!-- Mobile Header -->
      <div class="sm:hidden flex content-center justify-between p-3">
        <div class="flex items-center">
          <Monster />
        </div>
        <!-- <button class="text-xl text-white" @click="contactUs">Contact</button> -->
      </div>
      <!-- Hero -->
      <div class="flex">
        <div class="hidden sm:flex sm:items-end pt-24 sm:pl-12 sm:pr-4 md:pr-10 lg:pr-20">
          <!-- CyCraft Logo -->
          <div class="object-contain sm:max-w-xs md:max-w-none">
            <img src="/cy-craft-logo.svg" alt="" />
          </div>
        </div>
        <!-- Title Text & Button-->
        <div class="flex-col pt-10 px-10 mt-16 sm:mt-32 sm:mr-4">
          <div class="landing-page-title" style="max-width: 300px">
            {{ txt.pageTitle }}
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
        <div class="flex justify-start mb-6">
          <div class="pl-4 sm:pl-0 text-h2">{{ txt.projectsTitle }}</div>
        </div>
        <!-- Project Grid -->
        <div class="grid gap-10 md:gap-20 grid-cols-1">
          <Project
            :title="txt.pepiconsTitle"
            img="/pepicons.png"
            url="https://pepicons.com/"
            linkText="pepicons.com"
            :description="txt.pepIconsDescription"
          />
          <Project
            :title="txt.cinematchTitle"
            img="/cinematch.png"
            url="https://pepicons.com/"
            linkText="cinematch.com"
            :description="txt.cinematchDescription"
          />
          <Project
            :title="txt.UBITitle"
            img="/ubi.png"
            url="https://pepicons.com/"
            linkText="ubi-calculator.com"
            :description="txt.UBICalculatorDescription"
          />
          <Project
            :title="txt.peerLearningTitle"
            img="/peer-learning.png"
            url="https://pepicons.com/"
            linkText="peer-learning.com"
            :description="txt.peerLearningDescription"
          />
        </div>
      </div>
      <FrameworksMobile
        class="sm:hidden mt-24"
        style="margin-bottom: 23rem"
        :sectionTitle="txt.frameworksSectionTitle"
        :planetarDescription="txt.frameworkMobilePlanetarDescription"
        :magnetarDescription="txt.frameworkMobileMagnetarDescription"
        :blitzarDescription="txt.frameworkMobileBlitzarDescription"
      />
      <FrameworksDesktop
        class="hidden sm:block mt-72 mx-10"
        style="margin-bottom: 23rem"
        :sectionTitle="txt.frameworksSectionTitle"
        :planetarDescription="txt.frameworkDesktopPlanetarDescription"
        :magnetarDescriptionTitle="txt.frameworkDesktopMagnetarDescriptionTitle"
        :magnetarDescription="txt.frameworkDesktopMagnetarDescription"
        :blitzarDescription="txt.frameworkDesktopBlitzarDescription"
      />
      <!-- How we design and code -->
      <div class="mx-10">
        <div class="flex flex-col">
          <div class="" style="max-width: 403px">
            <div class="flex pb-4">
              <div class="text-h2">{{ txt.designTitle }}</div>
              <img class="w-5 ml-2 sm:w-10 sm:ml-6" src="/cy-icon-white.svg" alt="" />
            </div>
            <div class="text-h4">
              {{ txt.designSubTitle }}
            </div>
          </div>
          <div class="mt-16 sm:mt-24 flex justify-end">
            <div style="max-width: 403px">
              <div class="flex pb-4 justify-end sm:justify-start">
                <div class="text-h2">{{ txt.codeTitle }}</div>
                <img class="w-5 ml-2 sm:w-10 sm:ml-6" src="/cy-icon-white.svg" alt="" />
              </div>
              <div class="text-h4 text-right sm:text-left">
                {{ txt.codeSubTitle }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About Us -->
      <div class="mx-10 mt-72">
        <div class="text-h2">{{ txt.aboutUs }}</div>
        <AboutUsSection imgPosition="left" :bio="txt.lucaBio" :name="txt.lucaName" />
        <AboutUsSection imgPosition="right" :bio="txt.tadakiBio" :name="txt.tadakiName" />
      </div>
      <!-- Contact Us logo -->
      <div class="mx-10 mt-48 sm:mt-72 pb-8 flex flex-col items-center">
        <a style="cursor: pointer" @click="contactUs">
          <img src="/contact-us@2x.png" alt="Contact Us Button" />
        </a>
        <div
          v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
          class="contact-us-underline"
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
        <p class="text-h3 text-center">&copy; 2020 CyCraft</p>
      </div>
    </div>
  </div>
</template>

<script>
import CyToggle from './CyToggle.vue'
import Monster from './Monster.vue'
import CyButton from './CyButton.vue'
import AboutUsSection from './AboutUsSection.vue'
import Project from './Project.vue'
import FrameworksMobile from './FrameworksMobile.vue'
import FrameworksDesktop from './FrameworksDesktop.vue'
import ContactDialog from './ContactDialog.vue'

import anime from 'animejs/lib/anime.es.js'
import Vue from 'vue'
import VueWaypoint from 'vue-waypoint'
import smoothscroll from 'smoothscroll-polyfill'

import { lang } from './lang.js'

// Waypoint plugin
Vue.use(VueWaypoint)

export default {
  name: 'CycraftHomePage',
  components: {
    CyToggle,
    Monster,
    CyButton,
    AboutUsSection,
    Project,
    FrameworksMobile,
    FrameworksDesktop,
    ContactDialog,
  },

  data: () => ({
    show: false,
    showingContactDialog: false,
    japanese: false,
    intersectionOptions: {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0, 1],
    }, // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  }),

  computed: {
    txt() {
      const selectedLang = this.japanese ? 'ja' : 'en'

      const formattedLang = Object.entries(lang).reduce((result, [key, value]) => {
        // [key, value]
        // key === 'frameworkMobileBlitzarDescription'
        // value === {
        //   ja: 'japanese',
        //   en: 'A flexible component collection allowing for blitzing fast prototyping with VueJS',
        // }
        result[key] = value[selectedLang]
        return result
      }, {})

      return formattedLang
    },
  },
  mounted() {
    smoothscroll.polyfill()
  },
  methods: {
    contactUs() {
      this.showingContactDialog = true
    },
    closeContact() {
      this.showingContactDialog = false
    },
    toggled(value) {
      this.japanese = value
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
    animateContactUsUnderline() {
      anime({
        targets: '.contact-us-underline',
        loop: false,
        width: '100%', // -> from '5%' to '100%',
        easing: 'easeInOutQuad',
        duration: 1000,
      })
    },
    undoAnimateContactUsUnderline() {
      anime({
        targets: '.contact-us-underline',
        loop: false,
        width: '5%', // -> from '100%' to '5%',
        easing: 'easeInOutQuad',
        duration: 1000,
      })
    },
    onWaypoint({ going }) {
      // going: in, out
      if (going === this.$waypointMap.GOING_IN) {
        this.animateContactUsUnderline()
      }

      if (going === this.$waypointMap.GOING_OUT) {
        this.undoAnimateContactUsUnderline()
      }
    },
  },
}
</script>

<style lang="sass">
@import './src/assets/typography.sass'

.fade-enter-active, .fade-leave-active
  transition: opacity .5s ease

.fade-enter, .fade-leave-to
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
  width: 5%
  margin-top: 24px
</style>
