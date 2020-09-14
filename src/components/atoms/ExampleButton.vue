<template>
  <q-btn :class="`example-button example-button--${kind}`" color="primary" outline>
    <slot>{{ buttonLabel }}</slot>
  </q-btn>
</template>

<style lang="sass" scoped>
// $

.example-button
  &--sm
    font-size: $sm
  &--md
    font-size: $md
  &--lg
    font-size: $lg
</style>

<script>
export default {
  name: 'ExampleButton',
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
