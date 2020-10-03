<template>
  <div class="title-container" :class="[textsm ? 'text-sm' : 'text-md']">
    <span><slot></slot></span>
    <div class="line"></div>
  </div>
</template>
<style lang="sass" scoped>
//$
.text-md
  +t-h5()
  color: #fff
.text-sm
  +t-h5()
  color: #fff
  font-size: 11px
  line-height: 15px
.title-container
  display: flex
  align-items: center
.line
  background: white
  height: 1px
  margin-left: 6px
  width: 100%
</style>
<script>
export default {
  name: 'TitleSeparator',
  props: {
    textsm: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
