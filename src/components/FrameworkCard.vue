<template>
  <a :href="url" class="framework-card-box">
    <div
      class="border border-white border-solid relative overflow-hidden"
      style="height: 88px; width: 250px; position: relative"
    >
      <div
        class="px-2"
        style="position: absolute; left: 0; top: 50%; transform: translate(0, -50%)"
      >
        <div class="text-h3 pl-4">{{ title }}</div>
        <div class="text-body3 pl-4 flex">
          <div class="texturl">{{ textUrl }}</div>
        </div>
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
.texturl
  border-bottom: thin solid rgba(0,0,0,0)
  transition: all 250ms ease
.framework-card-box:hover .texturl
  border-bottom: thin solid white
</style>
