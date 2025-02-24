<template>
  <div class="about">
    <NavBar />
    <el-container class="full-width">
      <div class="hero-section">
        <picture class="background-image">
          <!-- 移动端图片 -->
          <source media="(max-width: 768px)" srcset="../assets/banner3.png">
          <!-- 桌面端图片 -->
          <img src="../assets/banner3-pc.png" alt="banner">
        </picture>
      </div>
      <!-- 其他内容 -->
    </el-container>
    <p>TODO</p>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<style>
/* 添加全局样式 */
.full-width {
  width: 100%;
}

.el-container {
  min-height: 100vh;
}
</style>

<style scoped>
.about {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

.hero-section {
  position: relative;
  width: 100%;
  height: 120vh;
  margin-bottom: 0;
}

.background-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center 60px;
  background-color: #2F3968;
}

/* 移动端优化 */
@media (max-width: 768px) {
  .hero-section {
    height: 800px;
    margin-bottom: 0;
  }

  .background-image img {
    object-fit: contain;
    object-position: center 0px;
    background-color: #ffffff;
  }
}

/* 平板端优化 */
@media (min-width: 769px) and (max-width: 1024px) {
  .hero-section {
    height: 110vh;
  }
}
</style>