<template>
    <div class="common-layout">
        <el-container>
            <el-header style="padding: 0;">
                <nav>
                    <div class="logo">
                        <img src="../assets/logo-wihte.png" alt="Logo">
                    </div>
                    <el-button class="menu-btn" @click="showMenu = !showMenu">
                        <el-icon><Menu /></el-icon>
                    </el-button>
                    <div class="nav-links" :class="{ 'show': showMenu }">
                        <a href="#consulting">CONSULTING</a>
                        <a href="#serversText">SERVERS</a>
                        <a href="#customers">CUSTOMERS</a>
                        <a href="#contact">Contact</a>
                    </div>
                </nav>
            </el-header>
            <el-main>
                <section id="banner">
                    <el-carousel height="70vh" :interval="3000" arrow="always">
                        <el-carousel-item v-for="(img, index) in carouselImages" :key="index">
                            <img :src="img.url" :alt="img.alt" class="carousel-img">
                        </el-carousel-item>
                    </el-carousel>
                </section>
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
                            <p>
                                <el-icon>
                                    <Phone />
                                </el-icon>
                                +86 188 0982 8586
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
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
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
import '../components/Home.css';
import { Menu } from '@element-plus/icons-vue'

const carouselImages = ref([
    { url: banner2, alt: '专业团队支持' },
    { url: banner3, alt: '全球服务覆盖' },
    { url: banner1, alt: 'NetSuite 咨询服务' },
])

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

import { useTransition } from '@vueuse/core'
import { ChatLineRound, Male } from '@element-plus/icons-vue'

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

const showMenu = ref(false);
</script>

<style scoped>
h2 {
    height: 100px;
}

.el-col {
    text-align: center;
}
</style>