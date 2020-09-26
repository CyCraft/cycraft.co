 <template>
  <div class="example pa-md">
    <div class="text-h6 text-white pb-md">Example on a dark background</div>
    <cy-button button-label="contact us" />
  </div>
</template>

<style lang="sass" scoped>
// $

.example
  background: black
</style>

<script>
import CyButton from 'components/atoms/CyButton.vue'

export default {
  components: { CyButton },
}
</script>
