<template>
  <button
    id="cy-button"
    class="simple-btn bg-white border-2 border-white focus:outline-none hover:bg-btn-light-green focus:border-btn-bright-green text-h5 text-black"
    v-bind="$attrs"
    v-on="$listeners"
  >

    <div class="inline-flex items-center py-3 px-1">
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

  </button>
</template>
<script>
export default {
  name: 'CyButtonSimple',
  inheritAttrs: false,
}
</script>
<style lang="sass">
.simple-btn
  width: 100%
  height: 46px
</style>
