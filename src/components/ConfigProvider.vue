<template>
    <el-config-provider :locale="locale">
      <app />
    </el-config-provider>
  </template>
  
  <script>
    import { defineComponent } from 'vue'
    import { ElConfigProvider } from 'element-plus'
  
    import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
  
    export default defineComponent({
      components: {
        ElConfigProvider,
      },
      setup() {
        return {
          locale: zhCn,
        }
      },
    })
  </script>