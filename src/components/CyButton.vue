<template>
  <button
    id="cy-button"
    class="relative btn bg-white border-2 border-white focus:outline-none focus:bg-btn-light-green focus:border-btn-bright-green text-h5 text-black"
    v-bind="$attrs"
    v-on="$listeners"
    @mouseenter="setHoverOn"
    @mouseleave="setHoverOff"
    @click="setHoverOff"
  >
    <div class="absolute inset-0">
      <div class="inline-flex items-center justify-center py-3 px-4">
        <svg
          class="fill-current w-5 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13.9 17"
        >
          <path d="M11.332,2.734V0h-8.5V2.734H0v8.2H2.832V13.9H5.9V10.937H8.5V13.9h3.07V10.937H17v-8.2Zm-2.595,5.7H5.9V5.7H8.737Zm5.43,0H11.332V5.7h2.835Z" />
        </svg>
        <span>
          <slot></slot>
        </span>
      </div>
    </div>
    <canvas
      v-show="hover"
      :id="id"
      class="absolute top-0"
      style="z-index: 1; margin-left: -7px; margin-top: -7px"
    >
    </canvas>
  </button>
</template>
<script>
export default {
  name: 'CyButton',
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: '1',
    },
  },
  data() {
    return {
      hover: false,
    }
  },
  mounted() {
    let width = this.$el.offsetWidth
    let height = this.$el.offsetHeight
    var canvasHidden = document.getElementById(this.id)
    var ctxHidden = canvasHidden.getContext('2d')
    var canvasShown = document.getElementById(this.id)
    canvasShown.width = width + 10
    canvasShown.height = height + 10
    var ctxShown = canvasShown.getContext('2d')

    function glitch1() {
      var swidth = width - Math.random() * 100
      var sheight = height - Math.random() * 100
      var dwidth = width / 2 - Math.random() * 100
      var dheight = height / 2 - Math.random() * 100

      var x = Math.random() * width
      var y = Math.random() * height
      var dx = x + Math.random() * 100
      var dy = y + Math.random() * 100

      ctxShown.clearRect(x, y, swidth, sheight)
      ctxShown.fillStyle = '#FFF'
      ctxShown.fillRect(x, y, dwidth, dheight)
      ctxShown.drawImage(canvasHidden, x, y, swidth, sheight, dx, dy, dwidth, dheight)
    }
    function glitch2() {
      var swidth = width - Math.random() * 100
      var sheight = height - Math.random() * 100
      var dwidth = width / 2 - Math.random() * 100
      var dheight = height / 2 - Math.random() * 100

      var x = Math.random() * width
      var y = Math.random() * height
      var dx = x + Math.random() * 100
      var dy = y + Math.random() * 100

      ctxShown.clearRect(x, y, swidth, sheight)
      ctxShown.fillStyle = '#000'
      ctxShown.fillRect(x, y, dwidth, dheight)
      ctxShown.drawImage(canvasHidden, x, y, swidth, sheight, dx, dy, dwidth, dheight)
    }

    setInterval(function () {
      glitch1()
      glitch2()
    }, 1000 / 25)
  },
  methods: {
    setHoverOn() {
      this.hover = true
    },
    setHoverOff() {
      this.hover = false
    },
  },
}
</script>
<style lang="sass">
.btn
  width: 100%
  height: 46px
</style>
