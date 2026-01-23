<template>
  <section id="portfolio" class="portfolio">
    <!-- Portfolio Grid View -->
    <div class="portfolio-container">
      <div class="section-title">
        <h2>Portfolio</h2>
        <p>My works</p>
      </div>

      <div class="portfolio-filter">
        <button v-for="filter in filters" :key="filter.id"
          :class="['filter-btn', { active: currentFilter === filter.id }]" 
          @click="filterProjects(filter.id)">
          {{ filter.name }}
        </button>
      </div>

      <div class="portfolio-grid">
        <div v-for="project in filteredProjects" :key="project.id" class="portfolio-item">
          <div class="portfolio-card">
            <div class="portfolio-img">
              <img :src="project.thumbnail" :alt="project.title">
            </div>
            <div class="portfolio-info">
              <h4>{{ project.title }}</h4>
              <div class="portfolio-links">
                <a v-if="project.link" :href="project.link" target="_blank" class="link-icon">
                  <i class="bi bi-link-45deg"></i>
                </a>
                <a @click.prevent="openProjectDetails(project)" class="preview-icon">
                  <i class="bi bi-plus-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Detail Modal - Teleported to body -->
    <Teleport to="body">
      <transition name="modal-fade">
        <div v-if="selectedProject" class="modal-overlay" @click="closeProjectDetails">
          <div class="modal-container" @click.stop>
            <button @click="closeProjectDetails" class="close-button">
              <i class="bi bi-x-lg"></i>
            </button>

            <button @click="closeProjectDetails" class="back-button">
              <i class="bi bi-arrow-left"></i> Back to Portfolio
            </button>

            <div class="project-detail-container">
              <div class="project-image-section">
                <div class="mesh-gradient"></div>
                <div class="image-wrapper">
                  <img 
                    :src="selectedProject.image" 
                    :alt="selectedProject.title"
                    :class="{ 'zoomed': isZoomed }"
                    @click="toggleZoom"
                  >
                </div>
              </div>

              <div class="project-info-section">
                <h2 class="project-title">{{ selectedProject.title }}</h2>
                
                <div class="project-details">
                  <!-- Client Info -->
                  <div class="detail-item">
                    <p class="client-text">{{ selectedProject.client }}</p>
                  </div>

                  <!-- Year & Stack -->
                  <div class="detail-item">
                    <h3>Year & Technologies</h3>
                    <p class="year-text">{{ selectedProject.year }}</p>
                    <div class="tech-stack">
                      <span v-for="(tech, index) in selectedProject.stack" :key="index" class="tech-badge">
                        {{ tech }}
                      </span>
                    </div>
                  </div>

                  <!-- Project Goal -->
                  <div class="detail-item">
                    <h3>Project Goal</h3>
                    <p>{{ selectedProject.goal }}</p>
                  </div>

                  <!-- Key Features -->
                  <div class="detail-item">
                    <h3>Key Features</h3>
                    <ul>
                      <li v-for="(feature, index) in selectedProject.features" :key="index">
                        {{ feature }}
                      </li>
                    </ul>
                  </div>

                  <!-- Description -->
                  <div class="detail-item">
                    <h3>Description</h3>
                    <p>{{ selectedProject.description }}</p>
                  </div>

                  <!-- Project Link -->
                  <div v-if="selectedProject.link" class="project-link">
                    <a :href="selectedProject.link" target="_blank">
                      <i class="bi bi-link-45deg"></i> Visit Live Project
                    </a>
                  </div>
                </div>

                <a href="#contact" @click="closeProjectDetails" class="cta-button">
                  I Want to Build Something Like This
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<script>
import { portfolioData } from '../data/dataPortfolio.js';

export default {
  name: 'PortfolioSection',
  data() {
    return {
      currentFilter: 'all',
      selectedProject: null,
      isZoomed: false,
      filters: portfolioData.filters,
      projects: portfolioData.projects
    }
  },
  computed: {
    filteredProjects() {
      if (this.currentFilter === 'all') {
        return this.projects;
      }
      return this.projects.filter(project =>
        project.categories.includes(this.currentFilter)
      );
    }
  },
  methods: {
    filterProjects(filter) {
      this.currentFilter = filter;
    },
    openProjectDetails(project) {
      this.selectedProject = project;
      this.isZoomed = false;
      document.body.style.overflow = 'hidden';
    },
    closeProjectDetails() {
      this.selectedProject = null;
      this.isZoomed = false;
      document.body.style.overflow = '';
    },
    toggleZoom() {
      this.isZoomed = !this.isZoomed;
    }
  },
  beforeUnmount() {
    document.body.style.overflow = '';
  }
}
</script>

<style scoped>
.portfolio-filter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.filter-btn {
  padding: 8px 20px;
  margin: 5px;
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--light);
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background-color: var(--primary);
  color: white;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 30px;
}

.portfolio-card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.portfolio-card:hover {
  transform: translateY(-10px);
}

.portfolio-img {
  position: relative;
}

.portfolio-img img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}

.portfolio-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  color: white;
  padding: 20px;
  transform: translateY(100%);
  transition: all 0.3s ease;
  opacity: 0;
}

.portfolio-card:hover .portfolio-info {
  transform: translateY(0);
  opacity: 1;
}

.portfolio-info h4 {
  margin-bottom: 10px;
}

.portfolio-links {
  display: flex;
  gap: 10px;
}

.portfolio-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--primary);
  color: white;
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;
}

.portfolio-links a:hover {
  background-color: white;
  color: var(--primary);
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  .portfolio-img img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    display: block;
  }
}
</style>

<!-- Global styles for modal (not scoped) -->
<style>
/* Modal Overlay & Container */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 20px;
}

.modal-container {
  position: relative;
  width: 100%;
  max-width: 1600px;
  background: #0a0a0a;
  border-radius: 20px;
  padding: 40px;
  max-height: 90vh;
  overflow-y: auto;
}

/* Custom scrollbar for modal */
.modal-container::-webkit-scrollbar {
  width: 8px;
}

.modal-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

.modal-container::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 10px;
}

/* Modal Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .modal-container,
.modal-fade-leave-active .modal-container {
  transition: transform 0.3s ease;
}

.modal-fade-enter-from .modal-container,
.modal-fade-leave-to .modal-container {
  transform: scale(0.9);
}

/* Close Button */
.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-button:hover {
  background: var(--primary);
  transform: rotate(90deg);
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 30px;
}

.back-button:hover {
  background: var(--primary);
  color: white;
  transform: translateX(-5px);
}

.project-detail-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.project-image-section {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  padding: 40px;
  display: flex;
  align-items: start;
  justify-content: center;
}

.mesh-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.3) 0px, transparent 50%),
    radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 0.2) 0px, transparent 50%),
    radial-gradient(at 52% 99%, hsla(354, 98%, 61%, 0.3) 0px, transparent 50%),
    radial-gradient(at 10% 29%, hsla(256, 96%, 67%, 0.2) 0px, transparent 50%),
    radial-gradient(at 97% 96%, hsla(38, 60%, 74%, 0.2) 0px, transparent 50%),
    radial-gradient(at 33% 50%, hsla(222, 67%, 73%, 0.3) 0px, transparent 50%),
    radial-gradient(at 79% 53%, hsla(343, 68%, 79%, 0.2) 0px, transparent 50%);
  filter: blur(80px);
  opacity: 0.6;
}

.image-wrapper {
  position: relative;
  z-index: 1;
  max-width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  cursor: zoom-in;
}

.image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.image-wrapper img.zoomed {
  transform: scale(1.5);
  cursor: zoom-out;
}

.project-info-section {
  color: white;
  padding: 20px;
}

.project-title {
  font-size: 36px;
  margin-bottom: 30px;
  color: var(--primary);
}

.project-details {
  margin-bottom: 40px;
}

.detail-item {
  margin-bottom: 30px;
}

.detail-item h3 {
  font-size: 18px;
  color: var(--primary);
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.client-text {
  font-size: 16px;
  line-height: 1.8;
  color: #a0a0a0;
  font-style: italic;
}

.year-text {
  font-size: 16px;
  color: #d0d0d0;
  margin-bottom: 10px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.tech-badge {
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid var(--primary);
  border-radius: 20px;
  font-size: 14px;
  color: #d0d0d0;
}

.detail-item p {
  font-size: 16px;
  line-height: 1.8;
  color: #d0d0d0;
}

.detail-item ul {
  list-style: none;
  padding: 0;
}

.detail-item ul li {
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
  color: #d0d0d0;
}

.detail-item ul li:before {
  content: "→";
  position: absolute;
  left: 0;
  color: var(--primary);
}

.project-link {
  margin-top: 20px;
}

.project-link a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--link);
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease;
}

.project-link a:hover {
  color: white;
  transform: translateX(5px);
}

.cta-button {
  display: inline-block;
  padding: 16px 32px;
  background: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

@media (max-width: 1024px) {
  .project-detail-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .project-image-section {
    padding: 20px;
  }

  .modal-container {
    padding: 30px 20px;
  }
}

@media (max-width: 768px) {
  .project-title {
    font-size: 28px;
  }

  .back-button {
    font-size: 14px;
    padding: 10px 20px;
  }

  .cta-button {
    font-size: 16px;
    padding: 14px 28px;
  }

  .modal-overlay {
    padding: 10px;
  }

  .modal-container {
    padding: 20px 15px;
    max-height: 95vh;
  }

  .close-button {
    top: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
    font-size: 18px;
  }
}
</style>