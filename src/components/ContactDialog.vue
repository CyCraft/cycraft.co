<template>
  <!-- Background overlay, show/hide based on modal state. -->

  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-700 opacity-75" @click="close"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block align-middle sm:h-screen" aria-hidden="true"
        >&#8203;</span
      >

      <!-- Modal panel, show/hide based on modal state. -->
      <transition
        EnterActiveClass="ease-out duration-500"
        EnterClass="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        EnterToClass="opacity-100 translate-y-0 sm:scale-100"
        LeaveActiveClass="ease-in duration-400"
        LeaveClass="opacity-100 translate-y-0 sm:scale-100"
        LeaveToClass="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div
          v-show="active"
          class="inline-block align-middle w-full bg-gray-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform ease-in transition-all sm:my-8 sm:max-w-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
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

              <img v-else class="h-10 w-10" src="/cy-icon-white.svg" alt="" />
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <div class="mt-6">
                <a
                  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=luca@cycraft.co&su=&cc&bcc&body&tf=1"
                  target="_blank"
                >
                  <CyButton @click="close">Gmail (Browser)</CyButton>
                </a>
              </div>
              <div class="mt-2">
                <a href="mailto:luca@cycraft.co">
                  <CyButton @click="close">Email (Default)</CyButton>
                </a>
              </div>
              <div class="mt-2 grid grid-cols-3 gap-2">
                <CyButton class="mr-2 col-span-1" @click="copy">Copy</CyButton>
                <span class="col-span-2 bg-gray-100 flex flex-row justify-center">
                  <input
                    id="copy-email"
                    class="h-full w-full text-center bg-gray-100 px-1 text-medium focus:outline-none text-gray-500"
                    type="text"
                    value="luca@cycraft.co"
                    readonly
                  />
                </span>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <button
              type="button"
              class="text-h5 inline-flex justify-center w-full border border-transparent shadow-sm px-4 py-2 bg-green-500 text-green-100 hover:bg-green-700 focus:outline-none"
              @click="close"
            >
              Close
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>


<script>
import CyButton from './CyButton'

export default {
  name: 'ContactDialog',
  components: {
    CyButton,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      copied: false,
    }
  },
  methods: {
    close() {
      this.$emit('close')
      setTimeout(() => (this.copied = false), 1000)
    },
    copy() {
      let copyText = document.getElementById('copy-email')
      copyText.select()
      copyText.setSelectionRange(0, 99999)
      document.execCommand('copy')
      this.copied = true
    },
  },
}
</script>