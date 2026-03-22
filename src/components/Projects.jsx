import { motion, useScroll, useTransform, useSpring, useVelocity, useAnimationFrame, useMotionValue } from 'framer-motion'
import { useRef } from 'react'

const wrap = (min, max, v) => {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}

const projectsData = [
  {
    title: "GoPlanner",
    category: "MERN Travel Planner",
    year: "2024",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200",
    color: "#0f172a", // Dark Blue
    link: "#"
  },
  {
    title: "HerbTrace",
    category: "Ayurvedic Traceability",
    year: "2024",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1200",
    color: "#14532d", // Dark Green
    link: "#"
  },
  {
    title: "Facade",
    category: "Psychological Game",
    year: "2023",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
    color: "#4c0519", // Dark Red
    link: "#"
  }
]

const ProjectCard = ({ project, index }) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  // Smooth mask reveal
  const clipProgress = useSpring(useTransform(scrollYProgress, [0, 0.5], [0, 100]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  const clipPath = useTransform(clipProgress, (value) => `inset(0 ${100 - value}% 0 0)`)

  const handleMouseEnter = () => {
    document.documentElement.style.setProperty('--bg-color', project.color)
  }

  const handleMouseLeave = () => {
    document.documentElement.style.setProperty('--bg-color', '#000000') // Revert to pure black
  }

  return (
    <motion.div 
      ref={container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group relative flex flex-col gap-6 mb-32 last:mb-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-card bg-zinc-900 border border-white/5 cursor-pointer">
        <motion.div 
          style={{ clipPath }}
          className="absolute inset-0 z-10 overflow-hidden"
        >
          {/* Extreme image parallax inside the card */}
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]) }}
            className="w-full h-[140%] -top-[20%] relative"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1500ms] ease-[0.16,1,0.3,1] group-hover:scale-[1.15]"
            />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-white/5 -z-1" />
      </div>

      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2">
           <div className="overflow-hidden h-6">
             <motion.div 
               className="flex flex-col group-hover:-translate-y-6 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]"
             >
               <span className="text-sm font-medium opacity-40 uppercase tracking-widest">{project.category}</span>
               <span className="text-sm font-medium opacity-100 uppercase tracking-widest text-white italic">View Project</span>
             </motion.div>
           </div>
           <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">{project.title}</h3>
        </div>

        <div className="relative overflow-hidden h-14 w-12 flex flex-col items-end">
           <motion.div 
             className="flex flex-col group-hover:-translate-y-14 transition-transform duration-500 ease-[0.76, 0, 0.24, 1]"
           >
              <span className="text-5xl font-black opacity-10 leading-none">0{index + 1}</span>
              <span className="text-xl font-bold opacity-100 leading-none h-14 flex items-center justify-end">®</span>
           </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

const ParallaxText = ({ children, baseVelocity = 100 }) => {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false })
  
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)
  const skewX = useTransform(smoothVelocity, [-1000, 1000], [-5, 5])

  const directionFactor = useRef(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (velocityFactor.get() < 0) { directionFactor.current = -1 }
    else if (velocityFactor.get() > 0) { directionFactor.current = 1 }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="marquee-container border-y border-white/10 py-8 mb-32 bg-white text-black overflow-hidden flex">
      <motion.div 
        style={{ x, skewX }}
        className="flex gap-10 items-center whitespace-nowrap px-10"
      >
        {[...Array(20)].map((_, i) => (
          <span key={i} className="text-6xl md:text-8xl font-black uppercase tracking-tighter shrink-0">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 transition-colors duration-1000">
      
      {/* Velocity Reactive Marquee */}
      <ParallaxText baseVelocity={2}>
        Featured Works © プロジェクト
      </ParallaxText>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
