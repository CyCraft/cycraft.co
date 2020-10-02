<template>
  <button :class="`cy-button cy-button--${kind}`">
    <div class="_button-text">
      <img
        src="cy-icon-black-transparent.svg"
        width="16"
        style="vertical-align: middle; margin-right: 8px; margin-bottom: 2px"
      />{{ buttonLabel }}
    </div>
  </button>
</template>

<style lang="sass" scoped>
// $
._button-text
  +t-h5()
  margin-top: 10px
  margin-bottom: 10px
  color: black
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
