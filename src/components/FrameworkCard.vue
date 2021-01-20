<template>
  <a :href="url">
    <div
      class="border border-white border-solid relative overflow-hidden"
      style="height: 88px"
    >
      <div
        class="px-2"
        style="position: absolute; left: 0; top: 50%; transform: translate(0,-50%);"
      >
        <div class="text-h3 pl-1">{{title}}</div>
        <div class="text-body3 pl-1">{{textUrl}}</div>
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