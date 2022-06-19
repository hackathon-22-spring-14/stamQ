import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
 // 本番時はgithubリポジトリをルートパスにする
 base: (process.env.NODE_ENV === 'poduction')
    ? '/stamq/' : './',
 build: {
   outDir: 'docs'
 },
 plugins: [vue()]
})

module.exports = {
  outputDir: 'docs'
}
