<template>
  <button class="icon-button" @click="$emit('click')">
    <svg
      v-if="buttonType === 'download'"
      class="button-icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    </svg>
    <svg
      v-else
      class="button-icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
      />
    </svg>
  </button>
</template>

<style lang="sass" scoped>
.icon-button
  border: none
  background: white
  outline: none
  width: 40px
  height: 40px
  border-radius: 10px
  margin: 10px
.icon-button:hover
  cursor: pointer
.button-icon
  width: 24px
  height: 24px
  stroke: #9a7aec
</style>

<script>
export default {
  name: 'IconButton',
  props: {
    // /**
    //  * The type of button: can be 'download' or 'clipboard'
    //  */
    buttonType: { type: String, required: true, default: 'download' },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>
