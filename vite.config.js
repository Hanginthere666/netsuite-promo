import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: './', // 确保 base 配置正确
  resolve: {
    alias: {
      '@': '/src' // 确保别名配置正确
    }
  }
});