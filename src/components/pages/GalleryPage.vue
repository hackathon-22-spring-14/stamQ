<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { defineComponent, Ref, ref } from 'vue'
import { Stamp } from '../../lib/apis/generated'
import { api } from '../../utils/api'
import Card from '../molecules/StampCard.vue'
import axios from 'axios'

export default defineComponent({
  name: 'GalleryPage',
  components: {
    Card,
  },
  setup() {
    const stampsInfo: Ref<Stamp[]> = ref([])
    /*
    (async () => {
      try {
        const { data } = await api.getStamps()
        stampsInfo.value = data
      } catch (e) {
        console.error(e)
      }
    })()*/

    axios
      .get('/api/stamps', {
        //id: this.username,
        //password: this.password,
      })
      .then((response) => (stampsInfo.value = response.data))

    return {
      stampsInfo,
    }
  },
  methods: {
    addCard() {
      this.stampsInfo.push(this.stampsInfo[0])
    },
    reset() {
      this.stampsInfo = [this.stampsInfo[0]]
    },
  },
})
</script>

<template>
  <!--
  <div>
    <p>
      <button style="background-color: whitesmoke" @click="addCard">
        Add new card
      </button>
    </p>
    <p>
      <button style="background-color: whitesmoke" @click="reset">reset</button>
    </p>
  </div>
  -->

  <div class="cards">
    <!-- A card with given width -->
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
