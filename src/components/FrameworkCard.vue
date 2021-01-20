<template>
  <a :href="url">
    <div
      class="border border-white border-solid relative overflow-hidden framework-card-box"
      style="height: 88px; min-width: 250px"
    >
      <div
        class="px-2"
        style="position: absolute; left: 0; top: 50%; transform: translate(0,-50%);"
      >
        <div class="text-h3 pl-1">{{title}}</div>
        <div class="texturl text-body3 pl-1">{{textUrl}}</div>
      </div>
      <slot></slot>
    </div>
  </a>
</template>
<script>
export default {
  name: 'FrameworkCard',
  props: {
    title: { type: String, required: true },
    textUrl: { type: String, required: true },
    url: { type: String, required: true },
  },
}
</script>
<style lang="sass" scoped>
.framework-card-box
  position: relative
.texturl
  text-decoration: none
.texturl:hover
  text-decoration: underline
.framework-card-box:hover > .texturl
  text-decoration: underline
</style>