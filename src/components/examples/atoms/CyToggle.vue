 <template>
  <div class="example pa-md">
    <div class="text-h6 text-white pb-md">Example on a dark background</div>
    <CyToggle />
  </div>
</template>

<style lang="sass" scoped>
// $

.example
  background-color: black
</style>

<script>
import CyToggle from 'components/atoms/CyToggle.vue'

export default {
  components: { CyToggle },
}
</script>
