# Portfolio Website

A modern, interactive portfolio website showcasing my web development projects and skills. Built with React, GSAP, and Tailwind CSS, featuring smooth animations and a sleek dark theme.

## 🌟 Features

- **Dynamic Animations**: Smooth scroll-triggered animations powered by GSAP
- **Interactive UI**: Engaging user experience with animated components and transitions
- **Responsive Design**: Fully responsive layout optimized for all devices
- **Modern Tech Stack**: Built with React, Tailwind CSS, and modern web technologies
- **Dark Theme**: Professional dark color scheme with custom accent colors
- **Animated Backgrounds**: Custom floating lines component for visual depth

## 🎨 Color Palette

- Background: `#000000` (Black)
- Primary Text: `#FFFFFF` (White)
- Accent 1: `#6f5b3e` (Warm Brown)
- Accent 2: `#2a9d90` (Teal)
- Gray: `#808080` (Text Secondary)

## 🚀 Tech Stack

### Frontend
- **React** - UI library for building component-based interfaces
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Professional-grade animation library

### Additional Technologies
- **Vite** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── NavBar.jsx          # Navigation component
│   │   ├── MiniFooter.jsx      # Footer component
│   │   ├── FloatingLines.jsx   # Animated background
│   │   └── PageLoader.jsx      # Loading animation
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── About.jsx           # About/Tech stack section
│   │   └── Contact.jsx         # Contact form
│   ├── constants/
│   │   └── index.js            # Project data and constants
│   ├── App.jsx                 # Main app component with routing
│   └── main.jsx                # Application entry point
├── public/
│   └── assets/                 # Images and static assets
└── tailwind.config.js          # Tailwind configuration
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📄 Pages

### Home (`/`)
- Hero section with animated introduction
- Featured projects showcase with scroll animations
- Interactive project cards with hover effects

### About (`/about`)
- Personal philosophy and approach
- Comprehensive tech stack display
- Skills organized by category (Core Web, Frontend, Backend, Animation, Tools)
- Profile section with animated rings

### Contact (`/contact`)
- Email and location information
- Social media links
- Animated floating background lines

## 🎯 Key Features Breakdown

### GSAP Animations
- Scroll-triggered animations on project cards
- Smooth image width transitions based on scroll progress
- Configurable easing and scrub values for fluid motion

### Responsive Design
- Mobile-first approach
- Breakpoints for tablets and desktop
- Optimized layouts for all screen sizes

### Projects Showcase
Featured projects (that use various technologies):
- **Zentry Clone** - Advanced GSAP scroll animations and storytelling
- **iPhone 15 Pro** - Three.js 3D modeling with GSAP animations
- **Xora SaaS** - Modern design patterns and layouts
- **HooBank** - React component architecture with Tailwind CSS
- **MiniOffice Suite** - Full-stack with Flask and SQLite
- **Flask REST API** - RESTful backend development

## 🔧 Configuration

### Tailwind CSS
Custom colors are defined in `tailwind.config.js`:
```javascript
colors: {
  'main': '#6f5b3e',
  'gold': '#2a9d90',
  'gray': '#808080',
  'black-100': '#1a1a1a',
  'black-200': '#0a0a0a',
}
```

### GSAP ScrollTrigger
Animations are configured with:
- `start`: Trigger point for animation start
- `end`: Trigger point for animation end
- `scrub`: Smooth animation tied to scroll position

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

This project can be deployed to:
- **Netlify**
- **GitHub Pages**
- Any static hosting service

## 🎨 Customization

### Changing Colors
Update colors in `tailwind.config.js` and component className props.

### Adding Projects
Add project data to `src/constants/index.js`:
```javascript
{
  tag: "Category",
  name: "Project Name",
  description: "Project description",
  img: "/projects/image.png",
  link: "https://project-url.com",
}
```

### Modifying Animations
Adjust GSAP parameters in component `useEffect` hooks:
- `scrub`: Animation smoothness (0.5 - 3)
- `start/end`: Trigger points
- `ease`: Easing function

## 📧 Contact

- **Email**: anas.ezzine.03@gmail.com
- **Location**: Remote / Beni Mellal, BM

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- GSAP for powerful animation capabilities
- Tailwind CSS for utility-first styling
- React community for excellent documentation

---

Built with ❤️ by Anas Ezzine
