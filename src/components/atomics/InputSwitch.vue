<template>
  <label class="label">
    <input
      v-model="checked"
      type="checkbox"
      class="label-input"
      @change="sendBool"
    />

    <!-- Circle -->
    <div class="label-circle"></div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputSwitch',
  data: function () {
    return {
      checked: {
        default: false,
      },
    }
  },
  methods: {
    sendBool() {
      this.$emit('changed', this.checked)
    },
  },
})
</script>

<style scoped>
.label {
  display: flex;

  /* Rounded border */
  border-radius: 9999px;

  /* Size */
  height: 32px;
  width: 64px;

  /* OFF status */
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.3);

  /* ON status */
  background-color: #357edd;
  border: 1px solid #357edd;
  /* Push the circle to the right */
  justify-content: flex-end;
}

.label-input {
  /* Hide the input */
  display: none;
}

.label-circle {
  /* Rounded border */
  border-radius: 9999px;

  /* Size */
  width: 32px;

  background-color: #fff;

  /* OFF status */
  border: 1px solid rgba(0, 0, 0, 0.3);
}
</style>
