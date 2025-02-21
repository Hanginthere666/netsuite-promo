import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App);
app.use(ElementPlus);  // 添加这行
app.mount('#app');
