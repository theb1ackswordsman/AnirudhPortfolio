# ✦ Cinematic WebGL Portfolio

A high-performance, award-winning tier personal portfolio built with React, Vite, Framer Motion, and Three.js. This repository is heavily optimized for both cinematic 60fps animations and seamless mobile usage.

## 🚀 Live Demo
*(Insert your Vercel/Netlify link here)*

## ⚡ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v4 + Vanilla CSS mix-blend-modes
- **Physics/Animation**: Framer Motion & Lenis Scroll
- **WebGL Rendering**: Three.js, React Three Fiber, React Three Postprocessing
- **Shader Effects**: Custom `SoftAurora` Noise Shader & React Bits `Dither` Fluid Shader

## ✨ Core Features

1. **Custom Physics Preloader**: A mathematical spring-physics introduction sequence.
2. **Invisible Shader Caching**: The application strictly separates heavy WebGL compilation from DOM transition periods to ensure mathematically lag-free mounting.
3. **Soft Aurora Hero**: A computationally efficient 3D noise shader operating in the background of a massive typographic hierarchy.
4. **Cinematic Roster (Capabilities)**: Brutalist image-slice reveals inside interactive typography using hardware-accelerated opacities.
5. **Velocity Marquee**: Scroll-linked physics that warp and speed up project titles based on the intensity of the trackpad flick.
6. **WebGL Footer**: A liquid `Dither` shader interacting natively with a custom CSS `mix-blend-difference` overlay.
7. **Extreme Performance Sleep States**: `IntersectionObserver` protocols natively hook into the `<Canvas>` layers, shifting `frameloop="demand"` so WebGL renders cost 0% GPU load when off-screen.

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```
2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```
3. **Run the local dev server**
   ```bash
   npm run dev
   ```
4. **Build for Production**
   ```bash
   npm run build
   ```

## 🌐 Deployment (Vercel)

This project is pre-configured to deploy seamlessly on Vercel.
Simply link this GitHub repository in your Vercel Dashboard, ensure the Build Command is `npm run build` and Output Directory is `dist`. No other configuration needed.

---
*Crafted at the intersection of digital artistry and hardcore engineering.*
