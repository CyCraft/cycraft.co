<template>
  <div class="bg-black flex justify-center h-auto">
    <transition name="fade">
      <ContactDialog
        v-show="contact"
        :active="contact"
        @close="closeContact"
      />
    </transition>
    <div
      class="flex-col min-width-full justify-center"
      style="max-width: 1100px"
    >
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
            <img
              src="/cy-craft-logo.svg"
              alt=""
            />
          </div>
        </div>
        <!-- Title Text & Button-->
        <div class="flex-col pt-10 px-10 mt-16 sm:mt-32 sm:mr-4">
          <div
            class="landing-page-title"
            style="max-width: 300px"
          >
            {{pageTitle}}
          </div>
          <div
            class="landing-page-subtitle pt-6"
            style="max-width: 370px"
          >
            {{pageSubTitle}}
          </div>
          <div
            class="mt-24 sm:mt-8 lg:mt-24"
            style="width: 11rem"
          >
            <CyButton
              id="1"
              data-text="CONTACT US"
              class="glitch"
              @click="contactUs"
            >{{contactBtn}}</CyButton>
          </div>
        </div>
      </div>
      <!-- Projects Section -->
      <div class="mx-0 sm:mx-10 mt-48 sm:mt-64">
        <!-- Section Title -->
        <div class="flex justify-start mb-6">
          <div class="pl-4 sm:pl-0 text-h2">{{projectsTitle}}</div>
        </div>
        <!-- Project Grid -->
        <div class="grid gap-10 md:gap-20 grid-cols-1">
          <Project
            :title="pepiconsTitle"
            img="/pepicons.png"
            url="https://pepicons.com/"
            link-text="pepicons.com"
            :description="pepIconsDescription"
          />
          <Project
            :title="cinematchTitle"
            img="/cinematch.png"
            url="https://pepicons.com/"
            link-text="cinematch.com"
            :description="cinematchDescription"
          />
          <Project
            :title="UBITitle"
            img="/ubi.png"
            url="https://pepicons.com/"
            link-text="ubi-calculator.com"
            :description="UBICalculatorDescription"
          />
          <Project
            :title="peerLearningTitle"
            img="/peer-learning.png"
            url="https://pepicons.com/"
            link-text="peer-learning.com"
            :description="peerLearningDescription"
          />
        </div>
      </div>
      <FrameworksMobile
        class="sm:hidden mt-24"
        style="margin-bottom: 23rem"
        :section-title="frameworksSectionTitle"
        :planetar-description="frameworkMobilePlanetarDescription"
        :magnetar-description="frameworkMobileMagnetarDescription"
        :blitzar-description="frameworkMobileBlitzarDescription"
      />
      <FrameworksDesktop
        class="hidden sm:block mt-72 mx-10"
        style="margin-bottom: 23rem"
        :section-title="frameworksSectionTitle"
        :planetar-description="frameworkDesktopPlanetarDescription"
        :magnetar-description-title="frameworkDesktopMagnetarDescriptionTitle"
        :magnetar-description="frameworkDesktopMagnetarDescription"
        :blitzar-description="frameworkDesktopBlitzarDescription"
      />
      <!-- How we design and code -->
      <div class="mx-10">
        <div class="flex flex-col">
          <div
            class=""
            style="max-width: 403px"
          >
            <div class="flex pb-4">
              <div class="text-h2">{{designTitle}}</div>
              <img
                class="w-5 ml-2 sm:w-10 sm:ml-6"
                src="/cy-icon-white.svg"
                alt=""
              />
            </div>
            <div class="text-h4">
              {{designSubTitle}}
            </div>
          </div>
          <div class="mt-16 sm:mt-24 flex justify-end">

            <div style="max-width: 403px">
              <div class="flex pb-4 justify-end sm:justify-start">
                <div class="text-h2">{{codeTitle}}</div>
                <img
                  class="w-5 ml-2 sm:w-10 sm:ml-6"
                  src="/cy-icon-white.svg"
                  alt=""
                />
              </div>
              <div class="text-h4 text-right sm:text-left">
                {{codeSubTitle}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About Us -->
      <div class="mx-10 mt-72">
        <div class="text-h2">{{aboutUs}}</div>
        <!-- Luca -->
        <div class="flex-col mt-8 pb-8">
          <div class="w-full md:w-5/6 sm:mt-10">
            <div class="flex items-center mb-4">
              <span class="text-h3 whitespace-nowrap">{{lucaName}}</span>
              <span class="line ml-4 w-full"></span>
            </div>
            <div class="flex mt-2">
              <img
                class="w-10 h-10 sm:w-56 sm:h-56 rounded-full mr-4"
                src="/martin.jpg"
                alt="Avatar"
              />
              <div class="flex-col pl-0 sm:pl-4 pr-0 sm:pr-8 md:pr-12 lg:pr-24">
                <p class="text-h4 ">
                  {{lucaBio}}
                </p>
                <div class="flex flex-wrap items-center mt-6">
                  <a
                    href="https://twitter.com/Mesqueeb"
                    class="flex items-center lg:mr-5"
                  >
                    <img
                      class="h-6 sm:h-12"
                      src="/Twitter_Logo.svg"
                      alt="Twitter Logo"
                    />
                    <p class="text-h4 ml-1 mr-6">Twitter</p>
                  </a>
                  <a
                    href="https://github.com/mesqueeb"
                    class="flex items-center"
                  >
                    <img
                      class="h-4 sm:h-8"
                      src="/Github_Mark.svg"
                    />
                    <p class="text-h4 ml-3">Github</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Tadaki -->
        <div class="flex-col mt-8 pb-8">
          <div class="flex justify-start sm:justify-end">
            <div class="w-full md:w-5/6 sm:mt-10">
              <div class="flex items-center mb-4">
                <span class="line hidden sm:block mr-4 ml-4 w-full"></span>
                <span class="text-h3 whitespace-nowrap">{{tadakiName}}</span>
                <span class="line block sm:hidden ml-4 w-full"></span>

              </div>
              <div class="flex mt-2 sm:flex-row-reverse">
                <img
                  class="w-10 h-10 sm:w-56 sm:h-56 rounded-full mr-4 sm:mr-0"
                  src="/martin.jpg"
                  alt="Avatar"
                />
                <div class="flex-col pl-0 pr-0  sm:pl-8 md:pl-12 lg:pl-24 sm:pr-4">
                  <p class="text-h4">
                    {{tadakiBio}}
                  </p>
                  <div class="flex items-center mt-6">

                    <a
                      href="https://github.com/mesqueeb"
                      class="flex items-center"
                    >
                      <img
                        class="h-4 sm:h-8"
                        src="/Github_Mark.svg"
                      />
                      <p class="text-h4 ml-3">Github</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Contact Us logo -->
      <div class="mx-10 mt-48 sm:mt-72 pb-8 flex flex-col items-center">
        <a
          style="cursor: pointer"
          @click="contactUs"
        >
          <img
            src="/contact-us@2x.png"
            alt="Contact Us Button"
          />
        </a>
        <div
          v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
          class="contact-us-underline"
        ></div>
      </div>
      <!-- English or Japanese -->
      <div class="mx-10 mt-4 sm:mt-24 md:mt-32 flex-col justify-end">
        <p class="text-h3 text-center">
          English? or Japanese?
        </p>
        <div class="flex justify-center mt-4">
          <cy-toggle @input="toggled" />
        </div>
      </div>
      <!-- Copyright and Terms -->
      <div class="mx-10 mt-16 sm:mt-32 md:mt-48 pb-16 flex-col justify-end">
        <p class="text-h3 text-center">
          &copy; 2020 CyCraft
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CyToggle from './CyToggle.vue'
import Monster from './Monster.vue'
import CyButton from './CyButton.vue'
import CyButtonSimple from './CyButtonSimple.vue'
import Project from './Project.vue'
import FrameworksMobile from './FrameworksMobile.vue'
import FrameworksDesktop from './FrameworksDesktop.vue'
import ContactDialog from './ContactDialog.vue'

import anime from 'animejs/lib/anime.es.js'
import Vue from 'vue'
import VueWaypoint from 'vue-waypoint'
import smoothscroll from 'smoothscroll-polyfill'

// Waypoint plugin
Vue.use(VueWaypoint)

export default {
  name: 'CycraftHomePage',
  components: {
    CyToggle,
    Monster,
    CyButton,
    Project,
    FrameworksMobile,
    FrameworksDesktop,
    ContactDialog,
  },

  data: () => ({
    show: false,
    contact: false,
    japanese: false,
    intersectionOptions: {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0, 1],
    }, // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  }),

  computed: {
    pageTitle() {
      return this.japanese ? 'japanese' : 'We Craft without cruft.'
    },
    pageSubTitle() {
      return this.japanese
        ? '洗練されたアプリの創造で、より良いウェブの世界を目指す。'
        : 'We craft beautiful apps and strive for a better web.'
    },
    contactBtn() {
      return this.japanese ? 'japanese' : 'Contact Us'
    },
    projectsTitle() {
      return this.japanese ? 'japanese' : 'Our Projects'
    },
    pepiconsTitle() {
      return this.japanese ? 'japanese' : 'Pepicons'
    },
    cinematchTitle() {
      return this.japanese ? 'japanese' : 'Cinematch'
    },
    UBITitle() {
      return this.japanese ? 'japanese' : 'UBI Calculator'
    },
    peerLearningTitle() {
      return this.japanese ? 'japanese' : 'Peer Learning'
    },
    pepIconsDescription() {
      return this.japanese
        ? 'Pepiconsは、総数118個の完全オリジナルアイコンパッケージです。 このアイコンセットには、POP!バージョン とPrintバージョンの2種類のバリエーションがあり、どちらもレトロな雰囲気を基調としたアイコンセットになっています。 ウェブサイトのライブプレビューでは、このパックが提供するすべてのアイコンを試用すことができます。'
        : 'Pepicons is a grand total of 118 hand-crafted icons — and counting! This completely original icon set is made in two retro variants: Pop! and Print. A live preview on the website allows you to play around with all the variations the icon pack has to offer.'
    },
    cinematchDescription() {
      return this.japanese
        ? 'CineMatchでは、映画のウォッチリストを作成して友達と共有することができます。 このアプリのユーザーインターフェースは、美しく見やすさを追求したものになっています。'
        : 'With the help of CineMatch a user can create film watchlists and share them with friends. This neat app has a clean user interface that organizes the user’s lists beautifully and with simplicity.'
    },
    UBICalculatorDescription() {
      return this.japanese
        ? 'ベーシックインカムでどれだけ利益を得ているのか疑問に思ったことはありませんか？ UBI Calculatorでは、さまざまなUBIプランで得た収益を正確に把握できるようにするオリジナルプラグインです。'
        : 'Ever wonder how you might benefit through a Universal Basic Income? The UBI Calculator is an ingenius plugin that allows a user to calculate their exact earnings with different UBI plans.'
    },
    peerLearningDescription() {
      return this.japanese
        ? 'PeerLearningは、学生達が協力して互いに学び合うためのオンライン教育ソフトです。 教育分野の助成金によって資金提供を受けているこのソフトには、（ここから微妙→）現在のユーザーテストの利点があります。'
        : 'PeerLearning is an online education software bringing students together to collaborate and learn from one another. Funded by education-focused grants, this software has the benefit of current user testing.'
    },
    designTitle() {
      return this.japanese ? 'japanese' : 'How we design'
    },
    designSubTitle() {
      return this.japanese
        ? 'ユーザーの意図を明確にとらえたデザインで、ユーザーの理想を実現します。'
        : 'With clarity and focus, we enable the user to engage with purpose.'
    },
    codeTitle() {
      return this.japanese ? 'japanese' : 'How we code'
    },
    codeSubTitle() {
      return this.japanese
        ? 'シンプルでモダン、そして適応性の高いコードでデザインの美しさを表現します。'
        : 'Matching the beauty of the design, our code is modern, concise, and adaptive.'
    },
    aboutUs() {
      return this.japanese ? 'japanese' : 'About Us'
    },
    lucaName() {
      return this.japanese ? 'japanese' : 'Luca Ban'
    },
    lucaBio() {
      return this.japanese
        ? 'japanese'
        : 'Has been a technology enthusiast since birth. He thinks of writing code as nothing less than poetry. Believes everything is possible — talent is a skill you teach yourself.'
    },
    tadakiName() {
      return this.japanese ? 'japanese' : 'Tadaki Matsushita'
    },
    tadakiBio() {
      return this.japanese
        ? 'japanese'
        : 'Self taught coder. He has helped companies all over Japan turn their vision into code. Excels at web marketing; and currently loves automation.'
    },
    frameworksSectionTitle() {
      return this.japanese ? 'japanese' : 'Frameworks'
    },
    frameworkDesktopPlanetarDescription() {
      return this.japanese
        ? 'この軽快なVueフレームワークは、リアルタイムに反映されるスタイルガイドを自動生成します。 開発者とデザイナーの相互の創造と開発をより強力にするコンポーネントエクスプローラーが利用できます。'
        : 'This nimble Vue framework creates an auto-generated, living style guide. The styleguide comes complete with an interactive component explorer that both developers and designers will love.'
    },
    frameworkDesktopMagnetarDescriptionTitle() {
      return this.japanese ? 'あなたが望むデータがここに。' : 'Your data, where you want.'
    },
    frameworkDesktopMagnetarDescription() {
      return this.japanese
        ? 'このフレームワークに依存しない同期ソリューションは、任意のDBまたはAPIに自動的に接続し、ローカルでデータを整理・保持しておくことができます。 さらに、直感的でシンプルなUIが組み込まれています。'
        : 'This framework-agnostic syncing solution can automatically connect to any DB or API and keep your data organised for you in a local data store. Plus, it’s got optimistic-UI built right in.'
    },
    frameworkDesktopBlitzarDescription() {
      return this.japanese
        ? 'Blitzarは、VueJSで高速プロトタイピングを可能にする柔軟なコンポーネントコレクションです。'
        : 'Blitzar is a flexible component collection allowing for blitzing fast prototyping with VueJS.'
    },
    frameworkMobilePlanetarDescription() {
      return this.japanese
        ? 'japanese'
        : 'This nimble Vue framework creates an auto-generated, living style guide.'
    },
    frameworkMobileMagnetarDescription() {
      return this.japanese
        ? 'japanese'
        : 'Magnetar is a framework-agnostic syncing solution that keeps your data where you need it.'
    },
    frameworkMobileBlitzarDescription() {
      return this.japanese
        ? 'japanese'
        : 'A flexible component collection allowing for blitzing fast prototyping with VueJS.'
    },
  },
  mounted(){
    smoothscroll.polyfill()
  },
  methods: {
    contactUs() {
      this.contact = true
    },
    closeContact() {
      this.contact = false
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
