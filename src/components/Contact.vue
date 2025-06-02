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
                  <input 
                    type="text" 
                    name="first-name" 
                    v-model="form.firstName" 
                    required 
                    :class="{ 'has-content': form.firstName }"
                  />
                  <label>First Name</label>
                  <div class="input-border"></div>
                </div>
                <div class="input-wrapper">
                  <input 
                    type="text" 
                    name="last-name" 
                    v-model="form.lastName" 
                    required 
                    :class="{ 'has-content': form.lastName }"
                  />
                  <label>Last Name</label>
                  <div class="input-border"></div>
                </div>
              </div>
              
              <div class="input-wrapper">
                <input 
                  type="email" 
                  name="email" 
                  v-model="form.email" 
                  required 
                  :class="{ 'has-content': form.email }"
                />
                <label>Email Address</label>
                <div class="input-border"></div>
              </div>
              
              <div class="input-wrapper">
                <textarea 
                  name="message" 
                  rows="5" 
                  v-model="form.message" 
                  required
                  :class="{ 'has-content': form.message }"
                ></textarea>
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
          <div class="info-box email-box">
            <div class="info-icon">
              <i class="bx bx-envelope"></i>
            </div>
            <div class="info-content">
              <h3>Email Address</h3>
              <p><a href="mailto:fansoaezra@gmail.com">fansoaezra@gmail.com</a></p>
            </div>
          </div>
          
          <div class="info-box phone-box">
            <div class="info-icon">
              <i class="bx bx-phone-call"></i>
            </div>
            <div class="info-content">
              <h3>Phone</h3>
              <p>+261 34 58 332 43</p>
            </div>
          </div>
          
          <div class="info-box social-box">
            <div class="info-icon">
              <i class="bx bx-share-alt"></i>
            </div>
            <div class="info-content">
              <h3>Social Media</h3>
              <div class="social-links">
                <a href="https://github.com/Ezdev2" class="social-link github">
                  <i class="bi bi-github"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100009140898267" class="social-link facebook">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/ezdev2/" class="social-link instagram">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/ezra-fanomezantsoa-00371820b" class="social-link linkedin">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
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
  padding: 80px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.contact-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: auto;
  position: relative;
  z-index: 1;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
}

.section-title h2 {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.section-title p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
}

.intro {
  text-align: center;
  margin-bottom: 50px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
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

.info-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.info-box {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 20px;
}

.info-box:hover {
  transform: translateX(10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.info-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;
  flex-shrink: 0;
}

.email-box .info-icon {
  background: linear-gradient(45deg, #667eea, #764ba2);
}

.phone-box .info-icon {
  background: linear-gradient(45deg, #f093fb, #f5576c);
}

.social-box .info-icon {
  background: linear-gradient(45deg, #4facfe, #00f2fe);
}

.info-content h3 {
  margin: 0 0 8px 0;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
}

.info-content p {
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
}

.info-content a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-content a:hover {
  color: #fff;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.social-link {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.3s ease;
  z-index: -1;
}

.social-link:hover::before {
  transform: scale(1);
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.github {
  background: rgba(51, 51, 51, 0.3);
}

.github::before {
  background: #333;
}

.facebook {
  background: rgba(24, 119, 242, 0.3);
}

.facebook::before {
  background: #1877f2;
}

.instagram {
  background: rgba(225, 48, 108, 0.3);
}

.instagram::before {
  background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
}

.linkedin {
  background: rgba(10, 102, 194, 0.3);
}

.linkedin::before {
  background: #0a66c2;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .form-group {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .form-card {
    padding: 30px 20px;
  }
  
  .section-title h2 {
    font-size: 2.5rem;
  }
  
  .info-box {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .info-box:hover {
    transform: translateY(-5px);
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 60px 15px;
  }
  
  .section-title h2 {
    font-size: 2rem;
  }
  
  .form-card {
    padding: 25px 15px;
  }
}
</style>