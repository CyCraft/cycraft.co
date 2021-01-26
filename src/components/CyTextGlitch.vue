<template>
  <div :class="`cy-text-glitch ${value ? '_on' : '_off'}`">
    <TextGlitch
      v-show="value"
      :id="onButton ? 'cy-text-glitch-on-btn' : 'cy-text-glitch-default'"
      class="_glitched"
      :fill="onButton ? '#000000' : 'white'"
      :background="onButton ? undefined : '#000000'"
      :text="$slots.default[0].text"
    />
    <slot v-show="!value" />
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

export default {
  name: 'CyTextGlitch',
  components: { TextGlitch },
  props: { value: Boolean, onButton: Boolean },
}
</script>
