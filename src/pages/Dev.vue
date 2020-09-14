<template>
  <div class="dev-overview q-pa-xl">
    <!-- <div v-if="!filePath" class="mb-xxl">
      <div class="t-h3 my-md">Style Guide</div>
      <router-link :to="ROUTE_PATHS.DEV_STYLE_GUIDE()">Typography and colours</router-link>
    </div> -->
    <ComponentGallery
      :componentFilesList="require.context('../components', true, /^\.\/.*\.vue$/).keys()"
      :noInteractivePreviewFor="['CcStepper']"
    />
  </div>
</template>

<style lang="sass" scoped>
// $

// .dev-overview
</style>

<script>
// import { ROUTE_PATHS } from '~router/routes'
import { ComponentGallery } from 'planetar'

export default {
  name: 'Dev',
  components: { ComponentGallery },
  // data () {
  //   return {
  //     ROUTE_PATHS,
  //   }
  // },
  methods: {},
  computed: {
    filePath() {
      const r = this.$route
      return r.query.filePath
    },
  },
}
</script>
