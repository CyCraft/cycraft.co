<template>
  <a
    :href="url"
    class="framework-card-box border border-white border-solid relative overflow-hidden"
    :class="isMobile ? '_mobile' : ''"
    style="height: 88px; width: 250px; position: relative; display: block"
  >
    <div class="px-2" style="position: absolute; left: 0; top: 50%; transform: translate(0, -50%)">
      <div class="text-h3 pl-4">{{ title }}</div>
      <div class="text-body3 pl-4 flex">
        <div class="texturl">{{ textUrl }}</div>
      </div>
    </div>
    <PlanetarFrameworkCardSvg
      v-show="title === 'planetar'"
      class="absolute"
      style="bottom: -2px; right: -25px"
    />
    <MagnetarFrameworkCardSvg
      v-show="title === 'magnetar'"
      class="absolute"
      style="bottom: -2px; right: -55px"
    />
    <BlitzarFrameworkCardSvg
      v-show="title === 'blitzar'"
      class="absolute"
      style="bottom: -2px; right: -5px"
    />
  </a>
</template>
<script>
import PlanetarFrameworkCardSvg from './SVGs/PlanetarFrameworkCardSvg'
import MagnetarFrameworkCardSvg from './SVGs/MagnetarFrameworkCardSvg'
import BlitzarFrameworkCardSvg from './SVGs/BlitzarFrameworkCardSvg'

export default {
  name: 'FrameworkCard',
  components: { PlanetarFrameworkCardSvg, MagnetarFrameworkCardSvg, BlitzarFrameworkCardSvg },
  props: {
    /**
     * @type { 'planetar' | 'magnetar' | 'blitzar' }
     */
    title: {
      type: String,
      validator: (val) => ['planetar', 'magnetar', 'blitzar'].includes(val),
      required: true,
    },
    textUrl: { type: String, required: true },
    url: { type: String, required: true },
    isMobile: { type: Boolean, default: false },
  },
}
</script>

<style lang="sass" scoped>
.texturl
  border-bottom: thin solid rgba(0,0,0,0)
  transition: all 250ms ease
.framework-card-box:hover .texturl
  border-bottom: thin solid white

.framework-card-box._mobile
  .texturl
    border-bottom: thin solid white
</style>
