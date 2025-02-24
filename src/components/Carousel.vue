<template>
    <section id="banner">
        <el-carousel height="70vh" :interval="3000" arrow="always">
            <el-carousel-item v-for="(img, index) in carouselImages" :key="index">
                <img :src="img.url" :alt="img.alt" class="carousel-img">
            </el-carousel-item>
        </el-carousel>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import banner1 from '../assets/banner1-pc.png';
import banner2 from '../assets/banner2-pc.png';
import banner3 from '../assets/banner3-pc.png';

const carouselImages = ref([
    { url: banner2, alt: '专业团队支持' },
    { url: banner3, alt: '全球服务覆盖' },
    { url: banner1, alt: 'NetSuite 咨询服务' },
])
</script>

<style scoped>
#banner {
    height: auto;
    overflow: hidden;
    background: linear-gradient(135deg, #ffffff);
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.carousel-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* Element Plus 轮播图自定义样式 */
.el-carousel {
    width: 100%;
}

/* 自定义轮播图箭头样式 */
.el-carousel__arrow {
    background-color: rgba(47, 57, 104, 0.8) !important;
}

.el-carousel__arrow:hover {
    background-color: #2F3968 !important;
}

/* 自定义指示器样式 */
.el-carousel__indicators {
    bottom: 20px;
}

.el-carousel__button {
    width: 12px !important;
    height: 12px !important;
    border-radius: 50% !important;
    background-color: rgba(255, 255, 255, 0.8) !important;
}
</style>