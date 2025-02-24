<template>
    <div class="home">
       
        <NavBar />
        <el-container class="full-width">
            <div class="hero-section">
                <picture class="background-image">
                    <!-- 移动端图片 (建议尺寸 750x1334 或 375x667) -->
                    <source media="(max-width: 768px)" srcset="../assets/banner2.png">
                    <!-- 桌面端图片 (建议尺寸 1920x1080 或更大) -->
                    <img src="../assets/banner2-pc.png" alt="banner">
                </picture>
            </div>
            <el-main>
                <!-- <Carousel /> -->
                <!-- 咨询服务 -->
                <section id="consulting">
                    <div class="consulting-container">
                        <h2>CONSULTING</h2>
                        <img src="../assets/特价标签.png" alt="Special Offer" class="special-tag">
                    </div>

                    <el-row :gutter="20" justify="center">
                        <el-col :xs="24" :sm="24" :md="8" v-for="(service, index) in services" :key="index">
                            <div class="service">
                                <img :src="service.image" :alt="service.title" class="service-image">
                                <h3>{{ service.title }}</h3>
                                <p>{{ service.description }}</p>
                            </div>
                        </el-col>
                    </el-row>
                </section>
                <!-- 实施服务 -->
                <section id="serversText">
                    <h2>SERVERS</h2>
                    <el-row v-for="(service, index) in serverServices" :key="index" :gutter="30"
                        :class="['server-row', index % 2 === 1 ? 'reverse' : '']" justify="center" align="middle">
                        <el-col :xs="24" :sm="24" :md="12">
                            <img :src="service.image" :alt="service.title" class="servers-img">
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12" class="d-flex justify-content-center align-items-center">
                            <div class="service-text">
                                <h3>{{ service.title }}</h3>
                                <p>{{ service.description }}</p>
                            </div>
                        </el-col>
                    </el-row>
                </section>
                <!-- 客户 -->
                <section id="customers">
                    <h2>CUSTOMERS</h2>
                    <el-row justify="center">
                        <el-col :span="24">
                            <el-scrollbar>
                                <div class="logo-container">
                                    <div class="logo-wrapper">
                                        <div v-for="(logo, index) in logoList" :key="index" class="logo-item">
                                            <img :src="logo.src" :alt="logo.alt">
                                        </div>
                                    </div>
                                </div>
                            </el-scrollbar>
                        </el-col>
                    </el-row>
                </section>

                <!-- <section id="contact">
        <h2>Contact Us</h2>
        <form action="https://example.com/form-handler" method="post">
            <input type="text" name="name" placeholder="Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="tel" name="phone" placeholder="Phone" required>
            <textarea name="message" placeholder="What do you need?" required></textarea>
            <button type="submit">Submit</button>
        </form>
    </section> -->
            </el-main>
            <el-footer style="padding: 0;">
                <footer>
                    <el-row class="footer-content">
                        <el-col :xs="24" :sm="12" class="contact-info">
                            <p>
                                <el-icon>
                                    <Message />
                                </el-icon>
                                Contact: yujian.renqiuhang@gmail.com
                            </p>
                        </el-col>
                        <el-col :xs="24" :sm="12" class="social-links">
                            <a href="https://t.me/netsuiteuser" target="_blank">
                                <el-icon>
                                    <Promotion />
                                </el-icon>
                                Telegram
                            </a>
                            <a href="https://twitter.com" target="_blank">
                                <el-icon>
                                    <ChatLineRound />
                                </el-icon>
                                Twitter
                            </a>
                            <a href="https://linkedin.com" target="_blank">
                                <el-icon>
                                    <Connection />
                                </el-icon>
                                LinkedIn
                            </a>
                        </el-col>
                    </el-row>
                    <div class="copyright">
                        <p>&copy; 2024 NetSuite Solutions. All rights reserved.</p>
                    </div>
                </footer>
            </el-footer>
        </el-container>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue'
import Carousel from '../components/Carousel.vue'
import customer1 from '../assets/customer-1.jpg';
import customer2 from '../assets/customer-2.jpg';
import customer3 from '../assets/customer-3.png';
import customer4 from '../assets/customer-4.png';
import serverImage1 from '../assets/servers-image-1.png';
import serverImage2 from '../assets/servers-image-2.png';
import serverImage3 from '../assets/servers-image-3.png';
import serverImage4 from '../assets/servers-image-4.png';
import serverImage5 from '../assets/servers-image-5.png';
import serverImage6 from '../assets/servers-image-6.png';
import '../views/Home.css';
import { Menu } from '@element-plus/icons-vue'
import { useTransition } from '@vueuse/core'
import { ChatLineRound, Male } from '@element-plus/icons-vue'

const logoList = ref([
    { src: customer1, alt: 'RSM' },
    { src: customer2, alt: 'infosys' },
    { src: customer3, alt: 'slg lighting' },
    { src: customer4, alt: 'universal' },
    { src: customer1, alt: 'RSM' },
    { src: customer2, alt: 'infosys' },
    { src: customer3, alt: 'slg lighting' },
    { src: customer4, alt: 'universal' },
])

const source = ref(0)
const outputValue = useTransition(source, {
    duration: 1500,
})
source.value = 172000

const services = ref([
    {
        image: serverImage1,
        title: 'Quick Response',
        description: '24/7 technical support to solve your problems promptly.'
    },
    {
        image: serverImage2,
        title: 'Professional Team',
        description: 'NetSuite experts providing professional technical support.'
    },
    {
        image: serverImage3,
        title: 'Global Service',
        description: 'Supporting multilingual and multi-timezone global services.'
    }
]);

const serverServices = ref([
    {
        image: serverImage4,
        title: 'Software Implementation',
        description: 'A professional implementation team provides a complete launch plan, including the necessary requirements analysis, system configuration, data migration, and user training.'
    },
    {
        image: serverImage5,
        title: 'Custom Development',
        description: 'Provide personalized development services based on the specific needs of the enterprise, including functional expansion, process automation, and report customization.'
    },
    {
        image: serverImage6,
        title: 'Training Support',
        description: 'Provide comprehensive user training and technical support to ensure the smooth operation and continuous optimization of the system.'
    }
]);
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
.home {
    position: relative;
    width: 100%;
    min-height: 100vh;
}

.hero-section {
    position: relative;
    width: 100%;
    height: 100vh;
    margin-bottom: 0;
}

.background-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;  /* 保持图片比例填充容器 */
}

/* 确保主要内容区域有白色背景 */
.el-main {
    background-color: #fff;
    position: relative;
    z-index: 1;
    padding-top: 0;
}

h2 {
    height: 100px;
}

.el-col {
    text-align: center;
}

.el-button {
    color: #CBAF6D;
}

.nav-container {
    max-width: 1200px;
    /* 1920px - 360px * 2 = 1200px */
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

.el-menu {
    border-bottom: none;
    width: 100%;
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
        /* 动态计算内容区域宽度 */
    }
}

@media (max-width: 1200px) {
    .nav-container {
        max-width: calc(100% - 40px);
        /* 小屏幕时保留最小边距 */
    }
}

/* 移动端优化 */
@media (max-width: 768px) {
    .hero-section {
        height: 600px;
        margin-bottom: 0;
    }

    .background-image img {
        object-fit: contain;
        object-position: center;
        background-color: #fff;
    }

    /* 调整第一个section的间距 */
    #consulting {
        margin-top: 0;
        padding-top: 20px;
    }
}

/* 平板端优化 */
@media (min-width: 769px) and (max-width: 1024px) {
    .hero-section {
        height: 90vh;
    }
}
</style>