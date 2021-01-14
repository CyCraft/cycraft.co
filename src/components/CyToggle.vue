<template>
  <button
    type="button"
    aria-pressed="false"
    :class="isOn ? 'bg-toggle-gray ease-out duration-100' : 'bg-black ease-in duration-100'"
    class="relative inline-flex items-center flex-shrink-0 h-9 w-16 border-2 border-white rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
    @click="toggle"
  >
    <span class="sr-only">Use setting</span>
    <span
      :class="isOn ? 'translate-x-8 bg-black ease-out duration-100'  : 'translate-x-1 bg-white ease-in duration-100'"
      class="relative inline-block h-6 w-6 rounded-full shadow transform ring-0 transition ease-in-out duration-200"
    >
      <span
        :class="isOn ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-100'"
        class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
        aria-hidden="true"
      >
        <svg
          class="h-4"
          viewBox="0 0 21 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.942 3.89334V0.402344H3.50097V3.89334H0.0219727V14.3693H3.50097V18.1523H7.27197V14.3693H10.464V18.1523H14.235V14.3693H20.906V3.89334H13.942ZM10.754 11.1713H7.27197V7.67634H10.755L10.754 11.1713ZM17.425 11.1713H13.942V7.67634H17.422L17.425 11.1713Z"
            fill="black"
          />
        </svg>
      </span>
      <span
        :class="isOn ? 'opacity-100 ease-in duration-100' : 'opacity-0 ease-out duration-100'"
        class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
        aria-hidden="true"
      >
        <svg
          class="h-4"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.35497 2.93802V0.822021H3.02697V2.93802H0.917969V9.28802H3.02697V11.581H5.31197V9.28702H7.24697V11.58H9.53197V9.28702H13.575V2.93802H9.35497ZM7.42297 7.34902H5.31197V5.23102H7.42297V7.34902ZM11.466 7.34902H9.35497V5.23102H11.466V7.34902Z"
            fill="white"
          />
        </svg>
      </span>
    </span>
  </button>
</template>
<script>
export default {
  name: 'CyToggle',
  data() {
    return {
      isOn: false,
    }
  },
  methods: {
    toggle() {
      this.isOn = !this.isOn
      this.$emit('input', this.isOn)
    },
  },
}
</script>
