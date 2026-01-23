<template>
  <div id="app">
    <div v-if="!isResume">
      <Header />
      <main>
        <router-view />
      </main>
    </div>
    <div v-else>
      <button class="go-back" @click="goHome">
        <i class="bi bi-chevron-left"></i>
        <span>Home</span>
      </button>
      <main class="resume-bg">
        <router-view class="resume" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from './components/Header.vue'

const route = useRoute()
const router = useRouter()

const isResume = computed(() => route.path === '/resume')

const goHome = () => {
  router.push('/')
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
  --primary: #6366f1;
  --dark: #121212;
  --light: #f8f9fa;
  --gray: #6c757d;
  --dark-bg: #1a1a1a;
  --card-bg: #252525;
  --link: hsla(160, 100%, 37%, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: var(--dark-bg);
  color: var(--light);
  line-height: 1.6;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
}

section {
  padding: 100px 0;
}

.section-title {
  margin-bottom: 60px;
  text-align: center;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
  margin-bottom: 15px;
}

.section-title h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: var(--primary);
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background-color: var(--primary);
  color: var(--light);
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn:hover {
  background-color: #5254cc;
  transform: translateY(-3px);
}

.go-back {
  position: absolute;
  display: flex;
  gap: 6px;
  padding: 24px 80px;
  background: transparent;
  border: none;
  color: var(--link);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  z-index: 1;
  transition: all 0.25s ease;
}

.go-back i {
  font-size: 1.2rem;
}

.go-back:hover {
  transform: translateX(-4px);
  opacity: 0.85;
}

@media (max-width: 992px) {
  .go-back {
    padding: 8px;
  }
}
</style>