<template>
  <div class="icon-info-box">
    <div class="icon-info-top-bar">
      <q-tabs
        v-model="tab"
        dense
        shrink
        narrow-indicator
        align="left"
        indicator-color="icon-color"
        class="transition-class"
        :class="tabsVisible"
      >
        <q-tab :ripple="false" name="vue" label="vue" />
        <q-tab :ripple="false" name="svg" label="svg" />
      </q-tabs>
      <button @click="togglewindow" class="toggle-info-button">
        <!-- left arrow -->
        <svg
          class="toggle-info-button-icon"
          :class="[windowopen ? 'icon-expanded' : '']"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <!-- right arrow -->
        <svg
          class="toggle-info-button-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    <div class="icon-info-bottom-bar"></div>
    <div class="icon-info-top" :class="{ 'icon-info-top-transform': windowopen }">
      <div class="main-icon-container">
        <svg
          class="main-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
          />
        </svg>
        <div class="main-icon-text">airplane</div>
      </div>
    </div>
    <div class="icon-info-bottom" :class="{ 'icon-info-bottom-transform': windowopen }">
      <div class="icon-button-container">
        <div>SVG</div>
        <div class="icon-buttons">
          <IconButton button-type="download" />
          <IconButton button-type="clipboard" />
        </div>
      </div>
      <div class="icon-button-container">
        <div>PNG</div>
        <div class="icon-buttons">
          <IconButton button-type="download" />
          <IconButton button-type="clipboard" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.toggle-info-button
  border: none
  background: transparent
  outline: none
.toggle-info-button:hover
  cursor: pointer
.toggle-info-button-icon
  width: 24px
  height: 24px
  stroke: #9a7aec
  transition: all 0.5s ease
.icon-expanded
  margin-right: 14px
.tabs-fade-out
  visibility: hidden
  opacity: 0
  transition: visibility 0s linear 300ms, opacity 300ms
.tabs-fade-in
  visibility: visible
  opacity: 1
  transition: visibility 0s linear 0s, opacity 300ms
.icon-info-top-bar
  display: flex
  justify-content: space-between
  background-color: white
  position: absolute
  height: 68px
  width: 100%
  z-index: 1
.main-icon
  width: 48px
  height: 48px
  fill: #9a7aec
.icon-info-bottom-bar
  position: absolute
  bottom: 0
  background-color: #fff
  height: 68px
  width: 100%
  z-index: -1
.icon-info-box
  background-color: #707070
  width: 400px
  height: 478px
  position: relative
  overflow: hidden
.main-icon-container
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  margin-top: 20px
.main-icon-text
  font-family: Montserrat, sans-serif
  color: black
  font-size: 30px
.icon-info-top
  background-color: #fff
  width: 400px
  height: 296px
  display: flex
  justify-content: center
  align-items: center
  transition: all 1s ease
.icon-info-top-transform
  transform: translateY(-296px)
.icon-info-bottom
  display: flex
  justify-content: space-around
  align-items: center
  background-color: #E8E8E8
  width: 400px
  height: 182px
  font-family: Montserrat, sans-serif
  font-weight: 800
  color: black
  font-size: 24px
  transition: all 0.75s ease
.icon-info-bottom-transform
  transform: translateY(182px)

.icon-button-container
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
.icon-buttons
  display: flex
  justify-content: center
  align-items: center
</style>

<script>
import IconButton from '../atoms/IconButton'
export default {
  name: 'IconInfo',
  components: {
    IconButton,
  },
  props: {},
  data() {
    return {
      tab: 'vue',
      windowopen: false,
    }
  },
  computed: {
    tabsVisible() {
      return this.windowopen ? 'tabs-fade-in' : 'tabs-fade-out'
    },
  },
  methods: {
    togglewindow() {
      this.windowopen = !this.windowopen
    },
    clicked() {
      console.log('clicked')
    },
  },
}
</script>
