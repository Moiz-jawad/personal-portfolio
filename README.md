# 🚀 Personal Portfolio Website

> A modern, interactive portfolio website showcasing my work as a Full-Stack Developer. Built with cutting-edge web technologies and featuring immersive 3D experiences.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-0.181.0-000000?logo=three.js)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14.2-88CE02?logo=greensock)](https://gsap.com/)

## ✨ Live Demo

🌐 **[View Live Portfolio](https://moiz-jawad.github.io/personal-portfolio/)**

---

## 📸 Preview

### Key Features

- 🎨 **Immersive 3D Experiences** - Interactive 3D models powered by React Three Fiber
- 🎭 **Smooth Animations** - GSAP-powered scroll-triggered animations
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **High Performance** - Optimized rendering with code splitting and lazy loading
- 🎯 **Modern UI/UX** - Clean, professional design with smooth interactions
- 📧 **Contact Form** - Integrated EmailJS for seamless communication

---

## 🛠️ Tech Stack

### Core Technologies

- **React 19.2.0** - Latest React with modern hooks and features
- **Vite 7.2.4** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework

### 3D & Graphics

- **Three.js 0.181.0** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **@react-three/postprocessing** - Post-processing effects

### Animation & Interactions

- **GSAP 3.14.2** - Professional animation library
- **@gsap/react** - React hooks for GSAP
- **ScrollTrigger** - Scroll-based animations

### Additional Libraries

- **EmailJS** - Contact form integration
- **React Responsive** - Media query hooks

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/moiz-jawad/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The production build will be in the `dist` directory.

### Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
# or
yarn deploy
# or
pnpm deploy
```

---

## 📁 Project Structure

```
personal-portfolio/
├── public/
│   ├── images/          # Static images and assets
│   └── models/          # 3D model files (.glb)
├── src/
│   ├── components/      # Reusable React components
│   │   ├── HeroModels/  # 3D hero section components
│   │   ├── Models/      # 3D model components
│   │   └── ...
│   ├── sections/        # Page sections
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ShowcaseSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── TechStack.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── constants/       # Data and configuration
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── vite.config.js       # Vite configuration
└── package.json
```

---

## 🎯 Key Sections

### 🏠 Hero Section

- Animated text slider showcasing skills
- Interactive 3D room scene
- Particle effects
- Smooth scroll-to-counter animation

### 💼 Work Showcase

- Featured projects with descriptions
- Scroll-triggered animations
- Responsive image galleries

### 📈 Experience Timeline

- Professional work experience
- Animated timeline with gradient effects
- Company logos and responsibilities

### 🛠️ Tech Stack

- Interactive 3D tech icons
- Hover effects and animations
- Skills categorization

### 📧 Contact Form

- EmailJS integration
- Form validation
- Success/error feedback
- 3D computer model visualization

---

## ⚡ Performance Optimizations

This portfolio is built with performance in mind:

- ✅ **Code Splitting** - Lazy loading for sections
- ✅ **Image Optimization** - Lazy loading and proper sizing
- ✅ **3D Model Optimization** - Optimized GLB files
- ✅ **Memoization** - React.memo for expensive components
- ✅ **Canvas Optimization** - Demand-based rendering
- ✅ **ScrollTrigger Cleanup** - Proper animation cleanup
- ✅ **Bundle Optimization** - Manual chunks for better caching

---

## 🎨 Customization

### Updating Personal Information

Edit `src/constants/index.js` to update:

- Personal details
- Work experience
- Projects
- Tech stack
- Social media links

### Styling

The project uses Tailwind CSS. Customize styles in:

- `src/index.css` - Global styles and utilities
- Component-level Tailwind classes

### 3D Models

Replace 3D models in `public/models/`:

- Update model paths in `src/constants/index.js`
- Ensure models are optimized GLB files

---

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run predeploy` - Build before deployment
- `npm run deploy` - Deploy to GitHub Pages

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/moiz-jawad/personal-portfolio/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is private and personal. All rights reserved.

---

## 👨‍💻 Author

**Moiz Jawad**

- Portfolio: [Live Site](https://moiz-jawad.github.io/personal-portfolio/)
- GitHub: [@moiz-jawad](https://github.com/moiz-jawad)

---

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - For amazing 3D capabilities
- [GSAP](https://gsap.com/) - For smooth animations
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) - For React integration with Three.js
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first styling
- [Vite](https://vitejs.dev/) - For blazing-fast development experience

---

## 📊 Project Stats

- ⚡ Built with React 19 and Vite
- 🎨 3D models powered by Three.js
- 📱 Fully responsive design
- ⚡ Optimized for performance
- 🎯 SEO-friendly structure

---

<div align="center">

**⭐ If you like this project, give it a star! ⭐**

Made with ❤️ by [Moiz Jawad](https://github.com/moiz-jawad)

</div>
