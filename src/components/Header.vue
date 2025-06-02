<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">
            <span>EF</span>
          </router-link>
        </div>

        <nav :class="['navbar', { 'active': menuActive }]">
          <ul class="menu-list">
            <li><router-link to="/" @click="closeMenu">Home</router-link></li>
            <li><router-link to="/#about" @click="closeMenu">About me</router-link></li>
            <li><router-link to="/#portfolio" @click="closeMenu">Portfolio</router-link></li>
            <li><router-link to="/#resume" @click="closeMenu">CV</router-link></li>
            <li><router-link to="/#contact" @click="closeMenu">Contact</router-link></li>
          </ul>
        </nav>

        <div class="social-links">
          <a href="https://github.com/Ezdev2" target="_blank"><i class="bi bi-github"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100009140898267" target="_blank"><i
              class="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/ezdev2/" target="_blank"><i class="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/in/ezra-fanomezantsoa-00371820b" target="_blank"><i
              class="bi bi-linkedin"></i></a>
        </div>

        <div class="menu-toggle" @click="toggleMenu">
          <template v-if="menuActive">
            <i class="bi bi-x-lg"></i>
          </template>
          <template v-else>
            <i class="bi bi-list"></i>
          </template>
        </div>
      </div>
    </div>

    <div class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="animate__animated animate__fadeInDown">
            Turning ideas into
            <br>real life <span class="highlight">products</span>
            <br>is my calling.
          </h1>
          <router-link to="/#portfolio" class="btn animate__animated animate__fadeInUp">View Projects</router-link>
        </div>
      </div>
    </div>
  </header>

</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      menuActive: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    closeMenu() {
      this.menuActive = false;
    }
  }
}
</script>

<style scoped>
.header {
  position: relative;
  background-color: var(--dark-bg);
  display: flex;
  flex-direction: column;
}

.header .container {
  max-width: 1200px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.logo a {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
}

.logo span {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar ul {
  display: flex;
  list-style: none;
}

.navbar ul li {
  margin: 0 15px;
}

.navbar ul li a {
  color: var(--light);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.navbar ul li a:hover {
  color: var(--primary);
}

.social-links {
  display: flex;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: var(--card-bg);
  color: var(--light);
  border-radius: 50%;
  margin-left: 10px;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background-color: var(--primary);
  transform: translateY(-3px);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hero {
  height: 90vh;
  padding: 122px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../assets/mee.jpg') no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.1;
}

.hero-content {
  z-index: 1;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 30px;
}

.highlight {
  color: var(--primary);
}

@media (max-width: 992px) {
  .header-content {
    height: 80px;
  }

  .navbar {
    position: fixed;
    top: 44px;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: var(--dark-bg);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    z-index: 100;
  }

  .navbar.active {
    right: 0;
  }

  .navbar ul {
    flex-direction: column;
    align-items: center;
  }

  .navbar ul li {
    margin: 15px 0;
  }

  .menu-toggle {
    display: flex;
    z-index: 101;
  }

  .menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .menu-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  .hero h1 {
    font-size: 2.8rem;
  }
}

@media (max-width: 768px) {
  .social-links {
    display: none;
  }

  .hero {
    padding: 12px;
  }

  .hero h1 {
    font-size: 2.2rem;
    text-align: center;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>