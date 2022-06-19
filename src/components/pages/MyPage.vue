<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { defineComponent, Ref, ref } from 'vue'
import { Stamp } from '../../lib/apis/generated'
import { api } from '../../utils/api'
import axios from 'axios'
import Card from '../molecules/StampCard.vue'

export default defineComponent({
  name: 'MyPage',
  components: {
    Card,
  },
  setup() {
    const stampsInfo: Ref<Stamp[]> = ref([])
    axios
      .get('/api/stamps/me', {
        //id: this.username,
        //password: this.password,
      })
      .then((response) => (stampsInfo.value = response.data))

    /*
    (async () => {
      try {
        const { data } = await api.stampsme()
        stampsInfo.value = data
      } catch (e) {
        console.error(e)
      }
    })()*/

    return {
      stampsInfo,
    }
  },
})
</script>

<template>
  <div class="cards">
    <!-- A card with given width -->
    <!--スタンプの数だけv-for-->
    <Card
      v-for="(stamp, index) in stampsInfo"
      :key="index"
      :num="index + 1"
      :image="'data:image/png;base64,' + stamp.image"
      :name="stamp.name!"
    />

    <!-- Repeat other cards -->
  </div>
</template>

<style>
:root {
  /* 色についての設定 */
  --headerColor: ;
  --headerShadowColor: rgba(0, 0, 0, 0.2);
  /* テキストについての設定 */
  --fontSizeTitle: 28px;
  --fontSizeXLarge: 18px;
  --fontSizeLarge: 16px;
  --fontSizeMedium: 14px;
  --fontSizeSmallIcon: 16px;
  --fontSizeIcon: 26px;
  --fontSizePart: 48px;
  --multilineTextLineHeight: 1.5;
}

html {
  padding: 0;
}

.cards {
  display: flex;
  justify-content: center;

  /* Put a card in the next row when previous cards take all width */
  flex-wrap: wrap;
}

.cards-item {
  /* There will be 4 cards per row */
  flex-basis: 170px;
  padding: 10px;
}
</style>
