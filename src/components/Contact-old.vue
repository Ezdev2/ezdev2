<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="section-title">
        <h2>Contact</h2>
        <p>Ready to bring your digital project to life ?</p>
      </div>

      <p class="intro">
        Need a professional website or help making your digital project a reality? <br>
        I'm here to help you turn your ideas into reality. <br>
        Leave me a message below and I'll get back to you as soon as possible.
        Together, let's turn your vision into online success!
      </p>

      <div class="contact-content">
        <!-- Formulaire -->
        <div class="form-container">
          <div class="form-card">
            <form @submit.prevent="handleSubmit" action="https://formspree.io/f/mayravnq" method="POST">
              <div class="form-group">
                <div class="input-wrapper">
                  <input type="text" name="first-name" v-model="form.firstName" required
                    :class="{ 'has-content': form.firstName }" />
                  <label>First Name</label>
                  <div class="input-border"></div>
                </div>
                <div class="input-wrapper">
                  <input type="text" name="last-name" v-model="form.lastName" required
                    :class="{ 'has-content': form.lastName }" />
                  <label>Last Name</label>
                  <div class="input-border"></div>
                </div>
              </div>

              <div class="input-wrapper">
                <input type="email" name="email" v-model="form.email" required :class="{ 'has-content': form.email }" />
                <label>Email Address</label>
                <div class="input-border"></div>
              </div>

              <div class="input-wrapper">
                <textarea name="message" rows="5" v-model="form.message" required
                  :class="{ 'has-content': form.message }"></textarea>
                <label>Your Message</label>
                <div class="input-border"></div>
              </div>

              <button type="submit" class="submit-btn">
                <span class="btn-text">Send Message</span>
                <div class="btn-ripple"></div>
              </button>
            </form>
          </div>
        </div>

        <!-- Infos -->
        <div class="info-container">
          <div class="info-box">
            <i class="bx bx-envelope"></i>
            <h3>Email Address</h3>
            <p><a href="mailto:fansoaezra@gmail.com">fansoaezra@gmail.com</a></p>
          </div>
          <div class="info-box">
            <i class="bx bx-phone-call"></i>
            <h3>Phone</h3>
            <p>+261 34 58 332 43</p>
          </div>
          <div class="info-box">
            <i class="bx bx-share-alt"></i>
            <h3>Social Media</h3>
            <div class="social-links">
              <a href="https://github.com/Ezdev2"><i class="bi bi-github"></i></a>
              <a href="https://www.facebook.com/profile.php?id=100009140898267"><i class="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/ezdev2/"><i class="bi bi-instagram"></i></a>
              <a href="https://www.linkedin.com/in/ezra-fanomezantsoa-00371820b"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$el.querySelector("form").submit();
    },
  },
};
</script>

<style scoped>
.contact-section {
  padding: 60px 20px;
  /* background: #f9f9f9; */
}

.container {
  max-width: 1200px;
  margin: auto;
}

.section-title {
  text-align: center;
  margin-bottom: 32px;
}

.intro {
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.6;
}

.contact-content {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
}

.form-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.form-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
}

.form-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.input-wrapper {
  position: relative;
  margin-bottom: 30px;
}

.input-wrapper input,
.input-wrapper textarea {
  width: 100%;
  padding: 15px 0;
  font-size: 16px;
  color: #fff;
  background: transparent;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  outline: none;
  transition: all 0.3s ease;
}

.input-wrapper label {
  position: absolute;
  top: 15px;
  left: 0;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  pointer-events: none;
  transition: all 0.3s ease;
}

.input-wrapper input:focus,
.input-wrapper textarea:focus,
.input-wrapper input.has-content,
.input-wrapper textarea.has-content {
  border-bottom-color: #fff;
}

.input-wrapper input:focus + label,
.input-wrapper textarea:focus + label,
.input-wrapper input.has-content + label,
.input-wrapper textarea.has-content + label {
  top: -10px;
  font-size: 12px;
  color: #fff;
  font-weight: 600;
}

.input-border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(45deg, #fff, rgba(255, 255, 255, 0.8));
  transition: width 0.3s ease;
}

.input-wrapper input:focus ~ .input-border,
.input-wrapper textarea:focus ~ .input-border {
  width: 100%;
}

.submit-btn {
  position: relative;
  background: linear-gradient(45deg, #fff, rgba(255, 255, 255, 0.9));
  color: #667eea;
  border: none;
  padding: 15px 40px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.submit-btn:active .btn-ripple {
  width: 300px;
  height: 300px;
}

.form-container,
.info-container {
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-box {
  background: #ffffff10;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
}

.info-box h3 {
  margin: 12px 0 8px;
}

.info-box a {
  color: #bebebe;
  text-decoration: none;
}

.social-links a {
  margin-right: 12px;
  font-size: 1.4rem;
  color: #fff;
}

.social-links a:hover {
  color: #0073e6;
}

@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
  }
}
</style>
