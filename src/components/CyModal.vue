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
          class="inline-block flex flex-col align-middle w-full bg-gray-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform ease-in transition-all sm:my-8 sm:max-w-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <slot></slot>
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
  name: 'CyModal',
  components: {
    CyButton,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>