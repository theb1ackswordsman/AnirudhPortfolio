import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  { 
    title: "Design Systems", 
    desc: "Crafting scalable visual languages, robust component libraries, and pixel-perfect design tokens.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000"
  },
  { 
    title: "Fullstack Eng.", 
    desc: "Building high-performance, resilient end-to-end architectures using modern Node/React stacks.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000"
  },
  { 
    title: "Creative UI/UX", 
    desc: "Designing hyper-immersive, award-winning user interfaces focused on WebGL rendering.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000"
  },
  { 
    title: "Optimization", 
    desc: "Deep-diving into browser rendering pipelines to eliminate lag and ensure 60fps locking.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
  }
];

// React Bits Inspired Text Scramble/Split Effect
const SplitText = ({ children, isHovered }) => {
  return (
    <div className="relative overflow-hidden inline-block">
      {/* Primary Text */}
      <motion.div
        animate={{ y: isHovered ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="block"
      >
        {children}
      </motion.div>
      {/* Secondary Text (Slides in from bottom) */}
      <motion.div
        animate={{ y: isHovered ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-full left-0 w-full block text-white italic"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)", color: "transparent" }}
      >
        {children}
      </motion.div>
    </div>
  )
}

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="about" className="relative py-32 bg-black min-h-screen flex flex-col justify-center">
      
      <div className="container mx-auto px-6 max-w-screen-2xl relative z-10">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] font-medium opacity-60">Capabilities (04)</h2>
          <p className="text-xl md:text-3xl font-light leading-snug opacity-80 max-w-3xl text-right">
            We operate at the exact intersection of digital artistry and hardcore engineering.
          </p>
        </div>

        <div className="flex flex-col border-t border-white/10 group/list">
          {services.map((service, i) => (
            <div 
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative w-full border-b border-white/10 py-10 md:py-16 cursor-pointer overflow-hidden transition-colors duration-500"
            >
              {/* LOCALLY SCOPED BACKGROUND IMAGE */}
              <motion.div 
                initial={false}
                animate={{ 
                  opacity: hoveredIndex === i ? 1 : 0, 
                  scale: hoveredIndex === i ? 1 : 1.05 
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 z-0 pointer-events-none"
              >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img 
                  src={service.img} 
                  alt="bg" 
                  className="w-full h-full object-cover grayscale" 
                />
              </motion.div>

              {/* CONTENT ABOVE IMAGE */}
              <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center md:items-end pointer-events-none px-4 md:px-8">
                {/* Title with React Bits style split animation */}
                <h3 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mix-blend-difference text-white">
                  <SplitText isHovered={hoveredIndex === i}>
                    {service.title}
                  </SplitText>
                </h3>

                {/* Description fades in alongside image */}
                <p className="max-w-xs text-sm md:text-base font-light opacity-50 text-right mt-4 md:mt-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-difference text-white">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
