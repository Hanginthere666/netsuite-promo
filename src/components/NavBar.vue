<template>
  <el-header style="padding: 0;">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
      @select="handleSelect" background-color="rgba(47, 57, 104, 0.6)" text-color="#CBAF6D" active-text-color="#CBAF6D">
      <div class="nav-container">
        <div class="nav-logo-wrapper">
          <router-link to="/">
            <img src="../assets/logo-wihte.png" alt="Logo" class="logo-img">
          </router-link>
        </div>
        <div class="flex-grow" />
        
        <!-- 移动端菜单按钮 -->
        <div class="mobile-menu-btn" @click="showMenu = !showMenu" 
             :class="{ 'is-active': showMenu }">
          <span class="hamburger-line"></span>
        </div>

        <!-- 导航菜单 -->
        <div class="nav-menu" :class="{ 'show': showMenu }">
          <el-menu-item index="2">
            <router-link to="/">HOME</router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link to="/about">ABOUT</router-link>
          </el-menu-item>
          <!-- <el-menu-item index="4">CUSTOMERS</el-menu-item>
          <el-menu-item index="5">Contact</el-menu-item> -->
        </div>
      </div>
    </el-menu>
  </el-header>
</template>

<script setup>
import { ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'

const activeIndex = ref('1')
const showMenu = ref(false)

const handleSelect = (key) => {
  console.log(key)
}
</script>

<style>
.el-menu {
  background-color: rgba(47, 57, 104, 0.6) !important;
  transition: background-color 0.3s ease;
  border-bottom: none;
  width: 100%;
}

.el-menu:hover {
  background-color: rgba(47, 57, 104, 1) !important;
}
</style>

<style scoped>
.nav-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
}

.flex-grow {
  flex-grow: 1;
}

.nav-logo-wrapper {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.nav-logo-wrapper a {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 48px;
  margin-right: 20px;
}

.el-menu-item {
  font-size: 16px;
  font-weight: bold;
}

.el-menu-item a {
  text-decoration: none;
  color: inherit;
}

/* 响应式布局 */
@media (max-width: 1920px) {
  .nav-container {
    max-width: calc(100% - 720px);
  }
}

@media (max-width: 1200px) {
  .nav-container {
    max-width: calc(100% - 40px);
  }
}

.mobile-menu-btn {
  display: none;
  width: 26px;
  height: 20px;
  position: relative;
  cursor: pointer;
  padding: 0;
  background: none;
  border: none;
  margin-right: 10px;
}

.hamburger-line,
.hamburger-line::before,
.hamburger-line::after {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #CBAF6D;
  transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  border-radius: 2px;
}

.hamburger-line {
  top: 50%;
  transform: translateY(-50%);
}

.hamburger-line::before {
  top: -7px;
}

.hamburger-line::after {
  bottom: -7px;
}

/* 点击动画优化 */
.mobile-menu-btn.is-active .hamburger-line {
  background-color: transparent;
}

.mobile-menu-btn.is-active .hamburger-line::before {
  transform: translateY(7px) rotate(45deg);
}

.mobile-menu-btn.is-active .hamburger-line::after {
  transform: translateY(-7px) rotate(-45deg);
}

/* 添加悬停效果 */
.mobile-menu-btn:hover .hamburger-line,
.mobile-menu-btn:hover .hamburger-line::before,
.mobile-menu-btn:hover .hamburger-line::after {
  background-color: #fff;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }

  .nav-menu {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: rgba(47, 57, 104, 0.95);
    flex-direction: column;
    padding: 10px 0;
    z-index: 1000;
  }

  .nav-menu.show {
    display: flex;
  }

  .nav-menu .el-menu-item {
    width: 100%;
    text-align: center;
    padding: 15px 0;
  }
}

/* 桌面端样式 */
@media (min-width: 769px) {
  .nav-menu {
    display: flex;
    align-items: center;
  }
}
</style>