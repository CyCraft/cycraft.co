<template>
  <div
    class="h-full w-full flex flex-col justify-center items-center bg-black"
    @click="$emit('click')"
  >
    <div id="loading-animation" class="w-auto bg-black">
      <img src="/cycraft/cycraft-loading-min.gif" alt="loading animation" :draggable="false" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
</style>

<script>
// import lottie from 'lottie-web'
export default {
  name: 'LoadingAnimation',
  //Commented out until we recieve working Lottie animation .json file
  // mounted() {
  //   let loadingContainer = document.getElementById('loading-animation')
  //   lottie.loadAnimation({
  //     container: loadingContainer,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     path: `./animation/data.json`,
  //   })
  // },
}
</script>
