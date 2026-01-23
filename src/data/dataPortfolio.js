export const portfolioData = {
  filters: [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web & App' },
    { id: 'app', name: 'App' },
    { id: 'design', name: 'Design & logo' }
  ],
  
  projects: [
    {
      id: 1,
      title: 'SmartParcours',
      thumbnail: '/assets/img/portfolio/smart-thumb.png',
      image: '/assets/img/portfolio/smart.png',
      link: 'https://smartparcours.site/',
      categories: ['web'],
      year: '2025',
      client: 'Thesis Project - OniFRa University (Bachelor L3)',
      stack: ['Vue.js', 'Firebase', 'Groq API'],
      goal: 'Develop an intelligent web platform capable of leveraging academic data and motivational profiles of high school students in Madagascar to provide personalized and relevant career guidance.',
      features: [
        'Artificial Intelligence with Groq API (Llama-3.3-70B-Versatile)',
        'Analysis of school reports and interests',
        'In-depth questionnaire of approximately 25 questions',
        'Differentiated interface for administrators, teachers, and students',
        'Personalized recommendations based on academic and motivational data'
      ],
      description: 'SmartParcours is an innovative web platform that leverages the latest advances in artificial intelligence to provide an intelligent and personalized educational guidance service. The system adopts a holistic approach integrating academic data, student interests, and an in-depth questionnaire to generate personalized recommendations for Malagasy graduates.'
    },
    {
      id: 2,
      title: 'Ondes Actives',
      thumbnail: '/assets/img/portfolio/ondes-thumb.png',
      image: '/assets/img/portfolio/ondes.png',
      link: 'https://ondesactives.com/',
      categories: ['web'],
      year: '2025',
      client: 'Freelance Client - France',
      stack: ['Vue.js', 'Firebase'],
      goal: 'Create a platform to present administrative offers and services to support entrepreneurs and small businesses in their daily management.',
      features: [
        'Complete website developed with Vue.js and Firebase',
        'Full setup: design, development, deployment',
        'Email configuration and custom domain name',
        'Modern and intuitive interface for entrepreneurs',
        'Presentation of administrative solutions and personalized support'
      ],
      description: 'A freelance project lasting one and a half months, where I handled the entire development process, from design to deployment. Ondes Actives supports entrepreneurs in their success by offering comprehensive administrative solutions, simplifying business management to allow them to focus on growing their business.'
    },
    {
      id: 3,
      title: 'Createak',
      thumbnail: '/assets/img/portfolio/createak-thumb.png',
      image: '/assets/img/portfolio/createak.png',
      link: 'https://createak.mu/',
      categories: ['web'],
      year: '2024',
      client: 'Maki Service - Corporate Project for Mauritius',
      stack: ['WordPress', 'WooCommerce', 'Cloudinary', 'Airtable'],
      goal: 'Develop a complete e-commerce platform for selling high-quality products in Mauritius (decoration, living room, office).',
      features: [
        'WordPress E-commerce with Cloudinary and Airtable',
        'Handcrafted product catalog management',
        'Fast delivery and secure payments',
        'Elegant and responsive user interface',
        'Full integration of technical and commercial aspects'
      ],
      description: 'As a project manager at Maki Service, I led the creation of this e-commerce site, participating in development, coding, and technical/commercial aspects. Createak offers meticulously crafted products with exceptional attention to detail, providing elegance and durability to Mauritian customers.'
    },
    {
      id: 4,
      title: 'List of accredited universities and institutions in Madagascar',
      thumbnail: '/assets/img/portfolio/uni-thumb.png',
      image: '/assets/img/portfolio/uni.png',
      link: 'https://universite.smartparcours.site/',
      categories: ['web'],
      year: '2026',
      client: 'Personal Project - Open Source',
      stack: ['Vue.js', 'GitHub', 'jsDelivr', 'JSON'],
      goal: 'Create a web portal providing easy and transparent access to information about recognized higher education institutions in Madagascar.',
      features: [
        'Read-only platform developed with Vue.js',
        'JSON data storage on GitHub',
        'API via jsDelivr for optimal performance',
        'Comprehensive database of accredited universities',
        'Simple and accessible interface for everyone'
      ],
      description: 'A personal open-source project presenting accredited universities in Madagascar. This platform provides easy and transparent access to information about recognized higher education institutions in the country, using GitHub for data storage and jsDelivr for the API. Github repository : https://github.com/ezdev2/Recognized-Universities-Madagascar'
    },
    {
      id: 5,
      title: 'Casano Site',
      thumbnail: '/assets/img/portfolio/casano-agency-thumb.png',
      image: '/assets/img/portfolio/casano-agency.png',
      link: 'https://casano-site.netlify.app/',
      categories: ['web'],
      year: '2024',
      client: 'Freelance Client - France',
      stack: ['HTML', 'JavaScript', 'Bootstrap'],
      goal: 'Develop a modern showcase site to present agency services and maximize customer satisfaction through dedicated after-sales service.',
      features: [
        'Frontend development with HTML, JavaScript, and Bootstrap',
        'Modern and responsive design',
        'Clear presentation of services offered',
        'Interface optimized for conversion',
        'Rapid development (less than one month)'
      ],
      description: 'Freelance project of less than one month where I handled the frontend development. The site presents the agency\'s services: dedicated after-sales service, targeted customer prospecting, and strategic paid advertising to maximize customer satisfaction, increase the customer base, and improve business visibility.'
    },
    {
      id: 6,
      title: 'OniFRa Mahajanga',
      thumbnail: '/assets/img/portfolio/onifra-thumb.png',
      image: '/assets/img/portfolio/onifra.png',
      link: 'https://onifra-mahajanga.netlify.app/',
      categories: ['web'],
      year: '2025',
      client: 'Personal Project - My University',
      stack: ['Vue.js', 'Tailwind CSS', 'Firebase', 'Groq API'],
      goal: 'Create a modern website for the university with an AI-optimized career guidance system to train competent and responsible professionals.',
      features: [
        'Development with Vue.js, Tailwind CSS, and Firebase',
        'AI-optimized orientation test (Groq)',
        'Presentation of courses and university values',
        'Modern and intuitive interface',
        'Project under continuous development'
      ],
      description: 'Personal project for my university, currently in development. The platform presents the university\'s mission: to train competent, responsible professionals with strong ethical values. The site integrates an AI-optimized orientation test feature using Groq.'
    },
    {
      id: 7,
      title: 'MEIGHT',
      thumbnail: '/assets/img/portfolio/meight-thumb.png',
      image: '/assets/img/portfolio/meight.png',
      link: 'https://meight.netlify.app/',
      categories: ['web'],
      year: '2026',
      client: 'Startup Project',
      stack: ['Vue.js', 'Firebase', 'AI'],
      goal: 'Develop an intelligent recruitment platform that analyzes applications using AI to improve the selection process and hiring success rate.',
      features: [
        'AI analysis of candidates against job requirements',
        'Rapid evaluation of hundreds of applications',
        'Team collaboration for hiring decisions',
        'Data-driven decisions',
        'Full development: design, coding, deployment'
      ],
      description: 'Startup project where I handled the entire development using Vue.js, Firebase, and AI. Meight uses advanced algorithms to analyze candidates in seconds, allowing recruiters to quickly evaluate hundreds of applications, collaborate as a team, and make data-driven hiring decisions.'
    },
    {
      id: 8,
      title: 'Vue js Template',
      thumbnail: '/assets/img/portfolio/template-thumb.png',
      image: '/assets/img/portfolio/template.png',
      link: 'https://website-vue-template.netlify.app',
      categories: ['web'],
      year: '2025',
      client: 'Personal Project - Open Source',
      stack: ['Vue.js', 'Vue Router'],
      goal: 'Create a reusable Vue.js template with a simple structure and best practices to accelerate the development of future projects.',
      features: [
        'Modern Vue.js frontend template',
        'Simple structure with pages and router',
        'Reusable and well-organized code',
        'Vue.js development best practices',
        'Ready to use for new projects'
      ],
      description: 'Vue.js frontend template created by myself, with a simple structure including pages and a routing system. This template serves as a basis to accelerate the development of new web projects by providing a solid architecture and best practices.'
    },
    {
      id: 9,
      title: 'Car rental',
      thumbnail: '/assets/img/portfolio/location-voiture-thumb.png',
      image: '/assets/img/portfolio/location-voiture.png',
      link: 'https://maki-car-rental-mada.netlify.app/',
      categories: ['web'],
      year: '2024',
      client: 'Maki Service - Corporate Project for Mauritius',
      stack: ['Vue.js'],
      goal: 'Completely redesign the car rental application to provide a modern and fluid user experience for Mauritian customers.',
      features: [
        'Total redesign to Vue.js for the frontend',
        'Car rental booking application',
        'Modern and intuitive interface',
        'Development in parallel with Createak',
        'Optimized for the Mauritian market'
      ],
      description: 'As a project manager at Maki Service, I led the total redesign of this car rental application to Vue.js. Developed in parallel with Createak, the application allows customers in Mauritius to easily book car rentals with a modern and high-performance interface.'
    },
    {
      id: 10,
      title: 'Ezra\'s Portfolio',
      thumbnail: '/assets/img/portfolio/portfolio-thumb.png',
      image: '/assets/img/portfolio/portfolio.png',
      link: 'https://fansoaezra.epizy.com/',
      categories: ['web'],
      year: '2022',
      client: 'Personal Project',
      stack: ['HTML', 'JavaScript', 'CSS'],
      goal: 'Create my first professional portfolio to present my web development skills and projects.',
      features: [
        'Single page application with HTML and JavaScript',
        'Personal and unique design',
        'Presentation of my first projects',
        'Complete frontend development',
        'Portfolio created in 2022'
      ],
      description: 'My former personal portfolio created in 2022. I handled the entire development of this single-page site with pure HTML and JavaScript. This portfolio represents my beginnings in web development and showcases my first professional projects.'
    },
    {
      id: 11,
      title: 'Kezia\'s Portfolio',
      thumbnail: '/assets/img/portfolio/kezia-thumb.png',
      image: '/assets/img/portfolio/kezia.png',
      link: 'https://keziafa.netlify.app/',
      categories: ['web'],
      year: '2025',
      client: 'Freelance Client - UI/UX Designer',
      stack: ['Vue.js', 'Tailwind CSS'],
      goal: 'Create a modern and professional portfolio to present the profile and work of a UI/UX designer.',
      features: [
        'Development with Vue.js and Tailwind CSS',
        'Modern and clean design',
        'Optimal presentation of design projects',
        'Responsive and high-performance interface',
        'Showcasing professional profile'
      ],
      description: 'Freelance project developed with Vue.js and Tailwind CSS to present the profile of an UI/UX designer. The portfolio highlights the designer\'s skills and projects with a modern, elegant interface perfectly adapted to all screens.'
    },
    {
      id: 12,
      title: 'Pinkscrap',
      thumbnail: '/assets/img/portfolio/pinkscrap-thumb.png',
      image: '/assets/img/portfolio/pinkscrap.png',
      link: 'https://pinkscrap2.netlify.app/',
      categories: ['web'],
      year: '2025',
      client: 'Freelance Client - France',
      stack: ['Vue.js', 'Tailwind CSS', 'Node.js'],
      goal: 'Develop a web application for extracting contacts based on specific categories to facilitate commercial prospecting.',
      features: [
        'Frontend developed with Vue.js and Tailwind CSS',
        'Collaboration with Node.js backend',
        'Contact extraction by category',
        'Intuitive interface for data management',
        'Optimized for sales prospecting'
      ],
      description: 'Freelance project in collaboration with a Node.js backend developer for a client in France. I developed the frontend with Vue.js and Tailwind CSS for this contact extraction application by category, thus facilitating prospecting and customer data management.'
    },
    {
      id: 13,
      title: 'Orus Solution',
      thumbnail: '/assets/img/portfolio/orus-solutions-thumb.png',
      image: '/assets/img/portfolio/orus-solutions.png',
    //   link: 'https://fansoadev.github.io/orussite/',
      categories: ['web'],
      year: '2021',
      client: 'Freelance Client',
      stack: ['Astro JS'],
      goal: 'Perform the frontend integration of a modern showcase site to present the company\'s solutions and services.',
      features: [
        'Frontend integration with Astro JS',
        'Modern and high-performance design',
        'Professional showcase site',
        'Optimized for performance',
        'Project completed in 2021'
      ],
      description: 'Freelance project completed in 2021 where I performed the frontend integration with Astro JS. The site presents the solutions and services of Orus Solution with a modern and high-performance interface, optimized to provide the best possible user experience.'
    },
    {
      id: 14,
      title: 'Green Cycle Rescue',
      thumbnail: '/assets/img/portfolio/green-cycle-rescue-thumb.png',
      image: '/assets/img/portfolio/green-cycle-rescue.png',
      link: 'https://fansoaezra.wordpress.com/',
      categories: ['web'],
      year: '2023',
      client: 'Personal Project',
      stack: ['WordPress'],
      goal: 'Create a complete website for a fictional NGO, featuring a blog and a presentation of environmental actions.',
      features: [
        'Developed with WordPress',
        'Integrated blog for news',
        'Presentation of actions and missions',
        'Ideal for non-profit organizations',
        'Interface adapted to environmental NGOs'
      ],
      description: 'Personal project created in 2023 with WordPress. An ideal site for presenting an environmental NGO, including a blog to share news and actions taken. The site offers all the necessary features to effectively present a non-profit organization.'
    },
    {
      id: 15,
      title: 'Mampiarina Association',
      thumbnail: '/assets/img/portfolio/association-mampiarina-thumb.png',
      image: '/assets/img/portfolio/association-mampiarina.png',
      link: 'https://associationmampiarina.webflow.io/',
      categories: ['web'],
      year: '2024',
      client: 'Mampiarina Association - Madagascar',
      stack: ['Webflow'],
      goal: 'Create a professional website to present the activities and missions of the Malagasy association.',
      features: [
        'Developed with Webflow',
        'Modern and professional design',
        'Presentation of the association\'s activities',
        'Interface adapted to the Malagasy context',
        'Lucrative project completed in 2024'
      ],
      description: 'Lucrative project completed in 2024 for an association in Madagascar. Developed with Webflow, the site professionally and modernly presents the activities, missions, and actions of the Mampiarina Association, facilitating communication with members and the public.'
    },
    {
      id: 16,
      title: 'Artiist',
      thumbnail: '/assets/img/portfolio/artiist-thumb.png',
      image: '/assets/img/portfolio/artiist.png',
      categories: ['design'],
      year: '2024',
      client: 'Freelance Client - France',
      stack: ['WordPress', 'UX/UI Design'],
      goal: 'Redesign the site\'s design and interface to improve user experience and modernize the visual identity.',
      features: [
        'Complete design overhaul',
        'Development with WordPress',
        'Collaboration with backend developer',
        'Modern and intuitive interface',
        'Project completed in 2024'
      ],
      description: 'Freelance project in collaboration with a backend developer for a client in France. I was responsible for the design redesign and development with WordPress, creating a modern interface that significantly improves the user experience and the brand\'s visual identity.'
    },
    {
      id: 17,
      title: 'Chat App',
      thumbnail: '/assets/img/portfolio/genius-thumb.png',
      image: '/assets/img/portfolio/genius.png',
      categories: ['design'],
      year: '2023',
      client: 'Freelance Client - France',
      stack: ['Next.js', 'UX/UI Design'],
      goal: 'Design and integrate a modern messaging application with an intuitive and high-performance user interface.',
      features: [
        'Complete UX/UI design of the application',
        'Frontend integration with Next.js',
        'Collaboration with backend developer',
        'Modern and responsive chat interface',
        'Project completed in 2023'
      ],
      description: 'Freelance project in collaboration with a backend developer for a client in France. I was responsible for the complete design of the application and the frontend integration with Next.js, creating a modern, intuitive, and high-performance messaging interface for an optimal user experience.'
    },
    {
      id: 18,
      title: 'Immo project',
      thumbnail: '/assets/img/portfolio/Immo-thumb.png',
      image: '/assets/img/portfolio/Immo.png',
      categories: ['design'],
      year: '2021 - 2024',
      client: 'MyAgency - Corporate Project',
      stack: ['Vue.js 2', 'Vue.js 3', 'UX/UI Design'],
      goal: 'Create a comprehensive real estate platform with an exceptional user experience and a modern interface.',
      features: [
        'UX/UI Lead for the project',
        'Frontend integration with Vue.js 2 and Vue.js 3',
        'Collaboration with backend team',
        'Confidential project (2021-2024)',
        'Complete real estate platform'
      ],
      description: 'Corporate project at MyAgency over a period from 2021 to 2024, in collaboration with backend developers. I was responsible for user experience (UX), user interface (UI), and frontend integration with Vue.js 2 and Vue.js 3. Link not available due to confidentiality.'
    },
    {
      id: 19,
      title: 'Safly Design',
      thumbnail: '/assets/img/portfolio/safly-post-thumb.png',
      image: '/assets/img/portfolio/safly-post.png',
      categories: ['design'],
      year: '2023',
      client: 'Hackathon Project',
      stack: ['UX Design', 'Project Management'],
      goal: 'Design an innovative solution during a hackathon with a user-centered approach and agile project management.',
      features: [
        'UX Lead for the project',
        'Hackathon project management',
        'User-centered design',
        'Teamwork under time constraints',
        'Project completed in 2023'
      ],
      description: 'Hackathon project carried out in 2023 where I was responsible for the user experience (UX) and project management. Challenge completed in a team with significant time constraints, requiring an agile approach and design centered on user needs.'
    },
    {
      id: 20,
      title: 'Gasyware Technology Logo',
      thumbnail: '/assets/img/portfolio/logo-gasyW-thumb.png',
      image: '/assets/img/portfolio/logo-gasyW.png',
      categories: ['design'],
      year: '2023',
      client: 'Gasyware Technology',
      stack: ['Graphic Design', 'Branding'],
      goal: 'Create a strong and memorable visual identity for the technology company.',
      features: [
        'Professional logo design',
        'Modern visual identity',
        'Design adapted to the tech sector',
        'Complete design lead',
        'Project completed in 2023'
      ],
      description: 'Logo design project carried out in 2023 for Gasyware Technology. I was responsible for the complete design, creating a strong, modern, and memorable visual identity perfectly adapted to the tech sector and reflecting the company\'s values.'
    },
    {
      id: 21,
      title: 'Createak Logo',
      thumbnail: '/assets/img/portfolio/logo-creat-thumb.png',
      image: '/assets/img/portfolio/logo-creat.png',
      categories: ['design'],
      year: '2024',
      client: 'Createak - Maki Service',
      stack: ['Graphic Design', 'Branding', 'Web Design'],
      goal: 'Design the logo and full visual identity of the e-commerce brand Createak.',
      features: [
        'Logo design and visual identity',
        'Associated website design',
        'Complete brand branding',
        'Elegant and professional design',
        'Adapted to the Mauritian market'
      ],
      description: 'Full design project for Createak including the logo design and the brand\'s visual identity, as well as the website design. The branding reflects the elegance and quality of the handcrafted products offered, while being adapted to the Mauritian market and customer expectations.'
    }
  ]
};