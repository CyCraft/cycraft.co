<template>
  <div :class="`cy-text-glitch`">
    <TextGlitch
      v-show="isGlitching"
      :id="onButton ? 'cy-text-glitch-on-btn' : 'cy-text-glitch-default'"
      class="_glitched"
      :fill="onButton ? '#000000' : 'white'"
      :background="onButton ? undefined : '#000000'"
      :text="$slots.default[0].text"
    />
    <slot v-show="!isGlitching" />
  </div>
</template>

<style lang="sass">
.cy-text-glitch
  position: relative
  display: inline-block
  ._glitched
    position: absolute
</style>

<script>
import TextGlitch from 'vue-text-glitch'
import { roll } from 'roll-anything'

function randomExecution(callback) {
  // start an interval that executes `callback()` at random intervals
  // make sure it's on average about 4-5 times per minute
  // make sure it doesn't execute twice within 10 seconds
  return setInterval(() => {
    const rolled = roll(1, 3)
    if (rolled === 3) callback()
  }, 10 * 1000)
}

export default {
  name: 'CyTextGlitch',
  components: { TextGlitch },
  props: {
    value: Boolean,
    onButton: Boolean,
    /**
     * When `true` it will glitch at random for 5 seconds about 4-5 times per minute.
     */
    glitchAtRandom: Boolean,
  },
  data() {
    return { isGlitchingAtRandom: false, interval: null }
  },
  mounted() {
    if (!this.glitchAtRandom) return
    this.interval = randomExecution(() => {
      this.isGlitchingAtRandom = true
      setTimeout(() => {
        this.isGlitchingAtRandom = false
      }, 5000)
    })
  },
  beforeDestroy() {
    if (this.interval) clearTimeout(this.interval)
    this.interval = null
  },
  computed: {
    isGlitching() {
      if (this.value) return true

      return this.isGlitchingAtRandom
    },
  },
}
</script>
