<template>
  <label class="upload-label">
    背景画像を選択
    <input type="file" @change="loadImage" />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputFile',
  props: ['imgInfosProp'],
  data() {
    return {
      imgInfos: this.imgInfosProp,
    }
  },
  methods: {
    loadImage(e) {
      const now = new Date()
      const newImgId =
        'img_' +
        now.getMinutes().toString() +
        now.getSeconds().toString() +
        now.getMilliseconds().toString()

      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = () => {
        this.imgInfos.push({ src: reader.result, id: newImgId })
      }
    },
  },
})
</script>

<style scoped>
.upload-label {
  display: inline-block;
  width: 137px;
  cursor: pointer; /* カーソルを指に */
  margin: 1em 1em; /* まわりの余白 */
  padding: 0.7em 1em; /* 文字まわりの余白 */
  line-height: 1.4; /* 行間 */
  background: #ffffff; /* 背景色 */
  color: rgb(61, 61, 61); /* 文字色 */
  font-size: 0.95em; /* フォントサイズ */
  border-radius: 2.5em; /* 角の丸み */
  transition: 0.2s; /* ホバーをなめらかに */
}
/* ホバー時 */
.upload-label:hover {
  box-shadow: 0 8px 10px -2px rgba(0, 0, 0, 0.2); /* 影を表示 */
}
/* inputは隠す */
.upload-label input {
  display: none;
}
</style>
