 <template>
  <div class="example pa-md" style="width: 400px">
    <div class="text-h6 text-white pb-md">Example on a dark background</div>
    <TitleSeparator> Example Title </TitleSeparator>
  </div>
</template>

<style lang="sass" scoped>
// $

.example
  background-color: black
</style>

<script>
import TitleSeparator from 'components/atoms/TitleSeparator.vue'

export default {
  components: { TitleSeparator },
}
</script>
