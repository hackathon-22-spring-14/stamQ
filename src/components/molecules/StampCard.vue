<template>
  <div id="stampCard" class="card">
    <div class="card-top"></div>
    <!-- Cover -->
    <div class="card-cover">
      <p class="card-title">No.{{ num.toString() }} : {{ name }}</p>
      <img :src="image" />
    </div>

    <!-- Content -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StampCard',
  props: {
    num: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  margin: 10px;
  box-shadow: var(--standardShadow);
}
.card-top {
  height: 5px;
  background-color: var(--primaryDark);
}
.card-title {
  padding: 5px 5px 5px 10px;
  background-color: var(--primary);
  color: var(--textOnPrimary);
}

.card-cover {
  height: 205px;
  width: 170px;
  background-color: whitesmoke;
}

.card-content {
  width: 170px;
  /* Take available height */
  flex: 1;
  background-color: azure;
}

.card-image {
  flex: 1;
  padding: 5px;
}
</style>
