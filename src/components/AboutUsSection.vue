<template>
  <div class="about-us-section">
    <div v-if="imgPosition === 'left'" class="flex-col mt-8 pb-8">
      <div class="w-full md:w-5/6 sm:mt-10">
        <div class="flex items-center mb-4">
          <span class="text-h3 whitespace-nowrap"
            ><CyTextGlitch :glitchAtRandom="true">{{ name }}</CyTextGlitch></span
          >
          <span class="line ml-4 w-full"></span>
        </div>
        <div class="flex mt-2">
          <img
            class="_profile-picture w-10 h-10 sm:w-56 sm:h-56 mr-4"
            :src="photoUrl"
            alt="Avatar"
          />
          <div class="flex-col pl-0 sm:pl-4 pr-0 sm:pr-8 md:pr-12 lg:pr-24">
            <p class="text-h4">
              {{ bio }}
            </p>
            <div class="flex items-center mt-6">
              <a
                v-if="github"
                :href="`https://github.com/${github}`"
                class="flex items-center mr-5"
              >
                <img class="h-4 sm:h-8" src="/Github_Mark.svg" />
                <p class="text-h4 ml-3">Github</p>
              </a>
              <a v-if="twitter" :href="`https://twitter.com/${twitter}`" class="flex items-center">
                <img class="h-6 sm:h-12" src="/Twitter_Logo.svg" alt="Twitter Logo" />
                <p class="text-h4 ml-1">Twitter</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="imgPosition === 'right'" class="flex-col mt-8 pb-8">
      <div class="flex justify-start sm:justify-end">
        <div class="w-full md:w-5/6 sm:mt-10">
          <div class="flex items-center mb-4">
            <span class="line hidden sm:block mr-4 ml-4 w-full"></span>
            <span class="text-h3 whitespace-nowrap"
              ><CyTextGlitch :glitchAtRandom="true">{{ name }}</CyTextGlitch></span
            >
            <span class="line block sm:hidden ml-4 w-full"></span>
          </div>
          <div class="flex mt-2 sm:flex-row-reverse">
            <img
              class="_profile-picture w-10 h-10 sm:w-56 sm:h-56 mr-4 sm:mr-0"
              :src="photoUrl"
              alt="Avatar"
            />
            <div class="flex-col pl-0 pr-0 sm:pl-8 md:pl-12 lg:pl-24 sm:pr-4">
              <p class="text-h4">
                {{ bio }}
              </p>
              <div class="flex items-center mt-6">
                <a
                  v-if="github"
                  :href="`https://github.com/${github}`"
                  class="flex items-center mr-5"
                >
                  <img class="h-4 sm:h-8" src="/Github_Mark.svg" />
                  <p class="text-h4 ml-3">Github</p>
                </a>
                <a
                  v-if="twitter"
                  :href="`https://twitter.com/${twitter}`"
                  class="flex items-center"
                >
                  <img class="h-6 sm:h-12" src="/Twitter_Logo.svg" alt="Twitter Logo" />
                  <p class="text-h4 ml-1">Twitter</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.about-us-section
  ._profile-picture
    flex-shrink: 0
    border-radius: 100%
    object-fit: cover
</style>

<script>
import CyTextGlitch from './CyTextGlitch.vue'

export default {
  name: 'AboutUsSection',
  components: { CyTextGlitch },
  props: {
    name: { type: String, required: true },
    bio: { type: String, required: true },
    photoUrl: { type: String, required: true },
    /** username */
    twitter: { type: String, default: '' },
    /** username */
    github: { type: String, default: '' },
    /**
     * @type {'right' | 'left'}
     */
    imgPosition: { type: String, default: 'left' },
  },
}
</script>
