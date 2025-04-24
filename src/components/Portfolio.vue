<template>
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Mes réalisations</p>
        </div>
        
        <div class="portfolio-filter">
          <button 
            v-for="filter in filters" 
            :key="filter.id"
            :class="['filter-btn', { active: currentFilter === filter.id }]"
            @click="filterProjects(filter.id)"
          >
            {{ filter.name }}
          </button>
        </div>
        
        <div class="portfolio-grid">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="portfolio-item"
          >
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
                  <a :href="project.image" class="preview-icon">
                    <i class="bi bi-plus-lg"></i>
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
    name: 'PortfolioSection',
    data() {
      return {
        currentFilter: 'all',
        filters: [
          { id: 'all', name: 'Tout' },
          { id: 'web', name: 'Site web & Web app' },
          { id: 'app', name: 'App' },
          { id: 'design', name: 'Design & logo' }
        ],
        projects: [
          {
            id: 1,
            title: 'Casano Site',
            thumbnail: '/assets/img/portfolio/casano-agency-thumb.png',
            image: '/assets/img/portfolio/casano-agency.png',
            link: 'https://casano-site.netlify.app/',
            categories: ['web']
          },
          {
            id: 2,
            title: 'Pinkscrap',
            thumbnail: '/assets/img/portfolio/pinkscrap-thumb.png',
            image: '/assets/img/portfolio/pinkscrap.png',
            link: 'https://pinkscrap2.netlify.app/',
            categories: ['web']
          },
          {
            id: 3,
            title: 'Createak',
            thumbnail: '/assets/img/portfolio/createak-thumb.png',
            image: '/assets/img/portfolio/createak.png',
            link: 'https://createak.mu/',
            categories: ['web']
          },
          {
            id: 4,
            title: 'Artiist',
            thumbnail: '/assets/img/portfolio/artiist-thumb.png',
            image: '/assets/img/portfolio/artiist.png',
            link: 'https://www.artiist.fr/',
            categories: ['web']
          },
          {
            id: 5,
            title: 'Chat App',
            thumbnail: '/assets/img/portfolio/genius-thumb.png',
            image: '/assets/img/portfolio/genius.png',
            link: 'https://my-chat.app/',
            categories: ['web']
          },
          {
            id: 6,
            title: 'Green Cycle Rescue',
            thumbnail: '/assets/img/portfolio/green-cycle-rescue-thumb.png',
            image: '/assets/img/portfolio/green-cycle-rescue.png',
            link: 'https://fansoaezra.wordpress.com/',
            categories: ['web']
          },
          {
            id: 7,
            title: 'Association Mampiarina',
            thumbnail: '/assets/img/portfolio/association-mampiarina-thumb.png',
            image: '/assets/img/portfolio/association-mampiarina.png',
            link: 'https://associationmampiarina.webflow.io/',
            categories: ['web']
          },
          {
            id: 8,
            title: 'Orus Solution',
            thumbnail: '/assets/img/portfolio/orus-solutions-thumb.png',
            image: '/assets/img/portfolio/orus-solutions.png',
            link: 'https://fansoadev.github.io/orussite/',
            categories: ['web']
          },
          {
            id: 9,
            title: 'Car rental',
            thumbnail: '/assets/img/portfolio/location-voiture-thumb.png',
            image: '/assets/img/portfolio/location-voiture.png',
            link: 'https://maki-car-rental-mada.netlify.app/',
            categories: ['web']
          },
          {
            id: 10,
            title: 'Immo project',
            thumbnail: '/assets/img/portfolio/Immo-thumb.png',
            image: '/assets/img/portfolio/Immo.png',
            link: 'https://immoch.my-preprod.space/',
            categories: ['web', 'design']
          },
          {
            id: 11,
            title: 'LaVilla project',
            thumbnail: '/assets/img/portfolio/LaVilla-thumb.png',
            image: '/assets/img/portfolio/LaVilla.png',
            categories: ['design']
          },
          {
            id: 12,
            title: 'Safly Design',
            thumbnail: '/assets/img/portfolio/safly-post-thumb.png',
            image: '/assets/img/portfolio/safly-post.png',
            categories: ['design']
          },
          {
            id: 13,
            title: 'Safly Design',
            thumbnail: '/assets/img/portfolio/safly-mockup-thumb.png',
            image: '/assets/img/portfolio/safly-mockup.png', 
            link: 'https://www.figma.com/proto/kdTsQCZTmkRgTE171vXhXK/Safly?page-id=21%3A2076&node-id=145%3A1262&viewport=336%2C288%2C0.05&scaling=min-zoom&starting-point-node-id=145%3A414',
            categories: ['app', 'design']
          },
          {
            id: 14,
            title: 'Logo gasyware technology',
            thumbnail: '/assets/img/portfolio/logo-gasyW-thumb.png',
            image: '/assets/img/portfolio/logo-gasyW.png',
            categories: ['design']
          },
          {
            id: 15,
            title: 'Logo Createak',
            thumbnail: '/assets/img/portfolio/logo-creat-thumb.png',
            image: '/assets/img/portfolio/logo-creat.png',
            categories: ['design']
          }
        ]
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
      }
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
  
  .filter-btn:hover, .filter-btn.active {
    background-color: var(--primary);
    color: white;
  }
  
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
  }
  
  .portfolio-card {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
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
    height: 230px;
    object-fit: cover;
    display: block;
  }
  
  .portfolio-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
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
  }
  
  .portfolio-links a:hover {
    background-color: white;
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    .portfolio-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  </style>