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
          <form @submit.prevent="handleSubmit" action="https://formspree.io/f/mayravnq" method="POST">
            <div class="form-row">
              <input type="text" name="first-name" placeholder="Last Name" v-model="form.firstName" required />
              <input type="text" name="last-name" placeholder="First Name" v-model="form.lastName" required />
            </div>
            <div class="form-row">
              <input type="email" name="email" placeholder="Email" v-model="form.email" required />
            </div>
            <div class="form-row">
              <textarea name="message" rows="7" placeholder="Your message" v-model="form.message" required></textarea>
            </div>
            <div class="form-row">
              <input type="submit" value="Send" class="submit-btn" />
            </div>
          </form>
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

.form-container,
.info-container {
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

input[type="text"],
input[type="email"],
textarea {
  flex: 1;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  width: 100%;
}

textarea {
  resize: vertical;
}

.submit-btn {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
  align-self: flex-start;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #555;
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
