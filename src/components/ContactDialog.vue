<template>
  <!-- start -->
  <div>
    <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full">
      <svg
        v-if="copied"
        class="h-10 w-10 text-green-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>

      <img v-else class="h-10 w-10" src="/cycraft/cy-icon-white.svg" alt="" />
    </div>
    <div class="mt-3 text-center sm:mt-5">
      <div class="mt-6">
        <a
          :href="`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&su=&cc&bcc&body&tf=1`"
          target="_blank"
        >
          <CyButton>Gmail (Browser)</CyButton>
        </a>
      </div>
      <div class="mt-2">
        <a :href="`mailto:${email}`">
          <CyButton>Email (Default)</CyButton>
        </a>
      </div>
      <div class="mt-2 grid grid-cols-3 gap-2">
        <CyButton class="col-span-1" @click="onClickCopy">Copy</CyButton>
        <span class="col-span-2 bg-gray-100 flex flex-row justify-center">
          <input
            class="h-full w-full text-center bg-gray-100 px-1 text-medium focus:outline-none text-gray-500"
            type="text"
            :value="email"
            readonly
          />
        </span>
      </div>
    </div>
  </div>
  <!-- end -->
</template>

<style lang="sass" scoped>
</style>

<script>
import CyButton from './CyButton'
import copy from 'copy-text-to-clipboard'

export default {
  name: 'ContactDialog',
  components: {
    CyButton,
  },
  data() {
    return {
      copied: false,
      email: 'luca@cycraft.co',
    }
  },
  methods: {
    onClickCopy() {
      this.copied = copy(this.email)
    },
  },
}
</script>
