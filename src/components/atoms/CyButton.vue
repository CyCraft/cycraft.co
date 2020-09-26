<template>
  <button :class="`cy-button cy-button--${kind}`">
    <h5>
      <img
        src="cy-icon-black-transparent.svg"
        width="16"
        style="vertical-align: middle; margin-right: 8px; margin-bottom: 2px"
      />{{ buttonLabel }}
    </h5>
  </button>
</template>

<style lang="sass" scoped>
// $
h5
  margin-top: 10px
  margin-bottom: 10px
  font-family: Montserrat, sans-serif
  color: black
  font-size: 14px
  line-height: 18px
  font-weight: 700
  letter-spacing: 1.12px
  text-transform: uppercase

.cy-button
  border: solid
  border-color: black
  border-width: 1px
  background-color: white
  padding: 6px 16px
  cursor: pointer
  &--sm
    font-size: $sm
  &--md
    font-size: $md
  &--lg
    font-size: $lg
</style>

<script>
export default {
  name: 'CyButton',
  props: {
    /**
     * The label to be used.
     */
    buttonLabel: { type: String, default: 'Click me!' },
    /**
     * @type {'sm' | 'md' | 'lg'}
     */
    kind: { type: String, default: 'md' },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>
