<template>
  <header class="text-gray-600 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <img src="../../assets/logo.png" class="logo-img" />
        <span class="ml-3 text-xl">StamQ</span>
      </a>
      <nav
        class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"
      >
        <a class="mr-5 hover:text-gray-900" href="/">新規作成</a>
        <a class="mr-5 hover:text-gray-900" href="/gallery">ギャラリー</a>
        <a class="mr-5 hover:text-gray-900" href="/mypage">マイページ</a>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MasterHeader',
})
</script>

<style scoped>
header {
  box-shadow: var(--standardShadow);
}
.logo-img {
  height: 50px;
  width: 50px;
}
</style>
