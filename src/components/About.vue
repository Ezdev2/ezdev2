<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-title">
        <h2>About</h2>
      </div>

      <div class="about-content">
        <div class="about-img">
          <img src="/assets/img/portfolio/ez-profil.png" alt="Ezra Fanomezantsoa">
        </div>

        <div class="about-info">
          <h3>Developer &amp; Web Designer</h3>

          <div class="info-grid">
            <div class="info-group">
              <div class="info-item">
                <strong>My Name:</strong>
                <span>Ezra Fanomezantsoa</span>
              </div>
              <div class="info-item">
                <strong>Phone:</strong>
                <span>+261 34 58 332 43</span>
              </div>
              <div class="info-item">
                <strong>Address:</strong>
                <span>Antananarivo 101, MADAGASCAR</span>
              </div>
            </div>

            <div class="info-group">
              <div class="info-item">
                <strong>Availability:</strong>
                <span>Yes</span>
              </div>
              <div class="info-item">
                <strong>Email:</strong>
                <span><a href="mailto:fansoaezra@gmail.com">fansoaezra@gmail.com</a></span>
              </div>
              <div class="info-item">
                <strong>Freelance:</strong>
                <span>Yes</span>
              </div>
            </div>
          </div>

          <div class="about-description">
            <p>
              Front-End Developer with 3+ years of experience building responsive and scalable web applications using
              Vue.js and React.js. Delivered over 10 user-centered products with a strong focus on usability,
              accessibility, and performance. Experienced in agile workflows, team collaboration, and cross-functional
              project delivery.
            </p>
            <p>
              Beyond my passion for the digital field, community building is my specialty. I enjoy exploring people’s
              personalities and helping them solve their potential issues using my skills.
            </p>
          </div>

          <div class="cv-download">
            <a href="#contact" download class="btn">Let’s talk about your project</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.about-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  align-items: center;
}

.about-img {
  position: relative;
}

.about-img::before {
  content: '';
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100%;
  height: 100%;
  border: 5px solid var(--primary);
  z-index: -1;
}

.about-img img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.about-info h3 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: var(--primary);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.info-item {
  margin-bottom: 15px;
}

.info-item strong {
  display: block;
  font-weight: 600;
  color: var(--light);
}

.info-item span {
  color: var(--gray);
}

.info-item a {
  color: var(--primary);
  text-decoration: none;
}

.about-description p {
  margin-bottom: 20px;
  line-height: 1.8;
}

.cv-download {
  margin-top: 30px;
}

@media (max-width: 992px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .about-img {
    margin-bottom: 30px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>