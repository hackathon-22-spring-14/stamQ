<template>
  <MasterHeader />
  <router-view />
  <MasterFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MasterFooter from './organisms/MasterFooter.vue'
import MasterHeader from './organisms/MasterHeader.vue'

export default defineComponent({
  name: 'App',
  components: {
    MasterHeader,
    MasterFooter,
  },
})
</script>

<style>
:root {
  /* 色についての設定 */
  --headerColor: ;
  --headerShadowColor: rgba(0, 0, 0, 0.2);
  --primary: #1976d2;
  --primaryLight: #63a4ff;
  --primaryDark: #004ba0;
  --secondry: #1976d2;
  --secondryLight: #63a4ff;
  --secondryDark: #004ba0;
  --textOnPrimary: #ffffff;
  --textOnSecondry: #ffffff;

  /* 影についての設定 */
  --buttonShadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --buttonTransition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  --buttonShadowHover: 0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgba(0, 0, 0, 0.22);
  --standardShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  --strongShadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  --weakShadow: 0 2px 4px rgba(0, 0, 0, 0.03), 0 3px 6px rgba(0, 0, 0, 0.05);
}

html {
  padding: 0;
}

footer {
  position: bottom;
  bottom: 0;
}
</style>
