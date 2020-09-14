 <template>
  <div class="example pa-md">
    <div class="text-h6 text-white pb-md">Example on a dark background</div>
    <ExampleButton />
  </div>
</template>

<style lang="sass" scoped>
// $

.example
  background: black
</style>

<script>
import ExampleButton from 'components/atoms/ExampleButton.vue'

export default {
  components: { ExampleButton },
}
</script>
