<template>
  <div class="flex-col mb-8">
    <div class="pl-4 sm:pl-0 flex items-center mb-3">
      <span class="text-h3 pr-4 whitespace-nowrap">{{ title }}</span>
      <span class="line mr-4 sm:mr-0 w-full"></span>
    </div>

    <!-- desktop overlay -->
    <a :href="url" target="_blank" class="hidden sm:block">
      <div class="relative mx-auto">
        <img class="h-full w-full" :src="img" alt="Project Photo" />
        <div
          class="absolute flex flex-col justify-center items-center top-0 h-full w-full bg-black opacity-0 hover:opacity-75 transition duration-300 ease-in-out"
        >
          <div class="text-center hidden sm:flex sm:flex-row sm:items-center">
            <div class="text-h1 inline-block">
              {{ linkText }}
            </div>
            <img class="inline-block ml-3" style="height: 37px" src="/external-link.svg" alt="" />
          </div>
        </div>
      </div>
    </a>
    <div class="hidden sm:block text-h4 pt-4 px-4 sm:pt-8 sm:px-0">{{ description }}</div>

    <!-- mobile overlay -->
    <div class="relative mx-auto block sm:hidden">
      <img class="h-full w-full" :src="img" alt="Project Photo" />
      <div
        class="absolute flex flex-col justify-center items-center top-0 h-full w-full bg-black opacity-0 hover:opacity-75 transition duration-300 ease-in-out"
        @click.stop="clicked = true"
      >
        <a :href="url" target="_blank" class="block sm:hidden">
          <div v-if="clicked" class="text-center flex flex-row items-center">
            <div class="text-h3 inline-block">
              {{ linkText }}
            </div>
            <img class="inline-block ml-3" style="height: 12px" src="/external-link.svg" alt="" />
          </div>
        </a>
      </div>
    </div>
    <div class="relative mx-auto block sm:hidden text-h4 pt-4 px-4 sm:pt-8 sm:px-0">
      {{ description }}
    </div>
  </div>
</template>

<style lang="sass" scoped>
</style>

<script>
export default {
  name: 'Project',
  props: {
    textsm: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      required: true,
    },
    linkText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      clicked: false,
    }
  },
}
</script>
