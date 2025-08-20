```markdown
# Kezhou’s Portfolio Website

## Table of Contents
1. [Project Overview](#project-overview)  
2. [Tech Stack](#tech-stack)  
3. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Development](#development)  
   - [Production Build](#production-build)  
4. [Folder Structure](#folder-structure)  
5. [Key Components](#key-components)  
6. [Data & Configuration](#data--configuration)  
7. [Styling & Assets](#styling--assets)  
8. [Deployment](#deployment)  
9. [Future Enhancements](#future-enhancements)  
10. [License](#license)

---

## Project Overview  
Kezhou’s portfolio website showcases photography and videography work, personal profile, and contact information. Built with Next.js and React, it features server-side image fetching via Cloudinary, responsive layouts, and multilingual work categories.

## Tech Stack  
- **Framework:** Next.js 13  
- **UI:** React 18, Tailwind CSS  
- **Image Optimization:** Cloudinary  
- **Animations:** Framer Motion  
- **Icons:** Lucide React  
- **Bundler/Tooling:** PostCSS, Autoprefixer  
- **Linting:** ESLint  

## Getting Started

### Prerequisites  
- Node.js ≥ 16.x  
- npm or yarn  
- Cloudinary account + credentials  

### Installation  
```bash
git clone https://github.com/your-username/kezhou-portfolio.git
cd kezhou-portfolio
npm install
# or
yarn
```  
Create a `.env.local` with:  
```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Development  
```bash
npm run dev
# or
yarn dev
```  
Open [http://localhost:3000](http://localhost:3000).

### Production Build  
```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Folder Structure  
```
/
├── public/              
├── pages/               
│   ├── index.js         
│   ├── about.js         
│   ├── contact.js       
│   ├── athletics.js     
│   └── exposition.js    
├── components/          
│   ├── Navbar.js
│   ├── Footer.js
│   ├── PhotoGallery.js
│   ├── ContactPage.js
│   └── AboutPage.js
├── lib/                 
│   ├── cloudinary.js
│   └── getImages.js
├── styles/              
│   ├── globals.css
│   ├── postcss.config.js
│   └── tailwind.config.js
├── mockData.js          
├── package.json
└── README.md
```

## Key Components

### Navbar.js  
Responsive navigation with dropdowns for “Work” categories.

### PhotoGallery.js  
Grid display of images; shows fallback text when empty.

### AboutPage.js  
Profile, experience, skills, and resume download.

### ContactPage.js  
Responsive contact form with mailto submission.

### Footer.js  
Footer with © 2025 Kezhou TONG.

## Data & Configuration

- **mockData.js:** Multilingual work categories.  
- **cloudinary.js:** Cloudinary setup using env variables.  
- **getImages.js:** Serverless API for image fetching and URL optimization.

## Styling & Assets

- Utility-first styles via Tailwind CSS.  
- Global font imports and scrollbar customization in `globals.css`.  
- Animations powered by Framer Motion.

## Deployment

1. Configure environment variables on Vercel/Netlify.  
2. Connect GitHub repo.  
3. Set `CLOUDINARY_*` vars.  
4. Push to `main`; auto-deploy triggers.

## Future Enhancements
- **Dynamic Work Subpages**: Expand `mockData.js` to include new categories (e.g., `Landscape`, `Portrait`, `Events`), and create corresponding pages under `pages/` (e.g., `landscape.js`, `portrait.js`).  
- **Automated Routing**: Implement dynamic route generation in `pages/work/[category].js`, fetching data based on URL parameters instead of static pages.  
- **CMS Integration**: Replace `mockData.js` with a headless CMS (e.g., Contentful, Sanity) for real-time category and content management.  
- **Category Filters**: Add client-side filtering and sorting on gallery pages, enabling users to refine by date, location, or camera settings.  
- **Localization**: Extend multilingual support beyond EN/ZH to additional languages via `i18next` or Next.js i18n routing.  

## License  
MIT License © 2025 Kezhou TONG.  
```