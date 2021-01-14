<template>
  <div>
    <div class="text-h2 mx-4 text-left">{{sectionTitle}}</div>

    <div class="flex flex-col justify-center space-y-20 mt-20">
      <!-- Planetar -->
      <div class="flex flex-col items-center">
        <img
          src="/planetar-logo-white.svg"
          alt=""
        />
        <img
          class="mt-6"
          src="/planetar-name.svg"
          alt=""
        />
        <div class="text-h4 mx-4 mt-8 text-center">{{planetarDescription}}</div>
      </div>

      <!-- Magnetar -->
      <div class="flex flex-col items-center">
        <img
          src="/magnetar-logo-white.svg"
          alt=""
        />
        <img
          class="mt-6"
          src="/magnetar-name.svg"
          alt=""
        />
        <div class="text-h4 mx-4 mt-8 text-center">{{magnetarDescription}}</div>
      </div>

      <!-- Blitzar -->
      <div class="flex flex-col items-center">
        <img
          src="/blitzar-logo-white.svg"
          alt=""
        />
        <img
          class="mt-6"
          src="/blitzar-name.svg"
          alt=""
        />
        <div class="text-h4 mx-4 mt-8 text-center">{{blitzarDescription}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FrameworkMobile',
  props: {
    sectionTitle: {
      type: String,
      default: 'Frameworks',
    },
    planetarDescription: {
      type: String,
      required: true,
    },
    magnetarDescription: {
      type: String,
      required: true,
    },
    blitzarDescription: {
      type: String,
      required: true,
    },
  },
}
</script>