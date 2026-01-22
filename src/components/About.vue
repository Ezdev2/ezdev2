<template>
  <section id="about" class="about">
    <div class="container">
      <div class="section-title">
        <h2>About</h2>
      </div>

      <div class="about-card">
        <div class="about-content">
          <div class="about-left neon-bg">
            <div class="about-img-container">
              <img src="/assets/img/portfolio/ez-profil.jpg" alt="Ezra Fanomezantsoa" class="profile-pic">
              <div class="status-dot"></div>
            </div>
            <div class="brand-text">
              <h3>Ezra F.</h3>
              <p>Developer & Designer</p>
            </div>
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
              <a href="#contact" class="btn">Let’s talk about your project</a>
            </div>
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
.about-card {
  position: relative;
  /* padding: 60px; */
  border-radius: 20px;
  background: linear-gradient(145deg,
      rgba(99, 102, 241, 0.12),
      rgba(0, 0, 0, 0.4));
  backdrop-filter: blur(18px);
  border: 1px solid rgba(99, 102, 241, 0.35);
  box-shadow:
    0 0 60px rgba(99, 102, 241, 0.15),
    inset 0 0 30px rgba(255, 255, 255, 0.03);
}

.section-title {
  text-align: center;
  margin-bottom: 80px;
}

.section-title h2 {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  position: relative;
}

.section-title h2::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background: var(--primary);
  margin: 12px auto 0;
  box-shadow: 0 0 15px var(--primary);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
}


.about-left {
  text-align: center;
  /* background: #6366f13d; */
  border-radius: 20px 0 0 20px;
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-left h3 {
  font-size: 1.4rem;
  color: var(--primary);
  margin-top: 10px;
}

.about-img-container {
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto 20px;
}

.brand-text h3 {
  color: white;
  margin: 0;
  font-size: 1.8rem;
}

.brand-text p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.profile-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  filter: grayscale(100%);
  border: 3px solid var(--primary);
  transition: all 0.4s ease;
}

.about-content:hover .profile-pic {
  filter: grayscale(0%);
  transform: scale(1.05);
  box-shadow: 0 0 20px var(--primary);
}

.status-dot {
  position: absolute;
  bottom: 15px;
  right: 15px;
  width: 25px;
  height: 25px;
  background: #43b581;
  border: 4px solid #1a1a1a;
  border-radius: 50%;
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

.about-info {
  padding: 60px;
}

.about-info h3 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 20px;
  color: var(--primary);
}

.btn {
  display: inline-block;
  padding: 12px 28px;
  background: transparent;
  color: white;
  text-decoration: none;
  color: var(--primary);
  border: 1px solid var(--primary);
  font-weight: 600;
  transition: 0.3s;
  box-shadow: 0 10px 20px rgba(108, 99, 255, 0.2);
}

.btn:hover {
  transform: translateY(-3px);
  /* box-shadow: 0 15px 25px var(--primary); */
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