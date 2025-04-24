<template>
  <div id="app">
    <Header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
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
</style>