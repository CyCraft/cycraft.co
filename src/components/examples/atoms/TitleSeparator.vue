 <template>
  <div class="example pa-md" style="width: 400px">
    <div class="text-h6 text-white pb-md">Examples on a dark background</div>
    <div class="body1 text-white">Medium text size</div>

    <TitleSeparator>PopIcons</TitleSeparator>
    <div class="body1 text-white">Small text size</div>

    <TitleSeparator textsm>PopIcons</TitleSeparator>
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
