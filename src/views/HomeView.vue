<template>
  <div class="home">
    <div data-aos="fade-up" data-aos-delay="100">
      <About />
    </div>
    
    <div data-aos="fade-up" data-aos-delay="100">
      <Portfolio />
    </div>

    <div data-aos="fade-right" data-aos-delay="300">
      <Skills />
    </div>

    <div data-aos="fade-left" data-aos-delay="200">
      <Resume />
    </div>

  </div>
  <div style="margin-top: 54px;" data-aos-delay="500">
    <Contact />
  </div>
</template>

<script>
import About from '../components/About.vue'
import Resume from '../components/Resume.vue'
import Skills from '../components/Skills.vue'
import Portfolio from '../components/Portfolio.vue'
import Contact from '../components/Contact.vue'

export default {
  name: 'HomeView',
  components: {
    About,
    Resume,
    Skills,
    Portfolio,
    Contact
  }
}
</script>
<style>
@media (min-width: 800px) {
  .home {
    margin: 0 122px;
  }
}
@media (max-width: 700px) {
  .home {
    margin: 0 24px;
  }
}
</style>
