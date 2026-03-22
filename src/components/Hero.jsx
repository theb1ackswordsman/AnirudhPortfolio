import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import Magnetic from './Magnetic'
import SoftAurora from './SoftAurora'

const name = "ANIRUDH KAUSHAL"

const Hero = () => {
  const headlineRef = useRef(null)
  
  // Use MotionValues instead of React State to avoid component re-renders on mouse move
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Apply spring physics directly to the motion values for smooth hardware-accelerated movement
  const springConfig = { damping: 20, stiffness: 150, mass: 0.1 }
  const headlineX = useSpring(mouseX, springConfig)
  const headlineY = useSpring(mouseY, springConfig)

  const handleMouseMove = (e) => {
    if (!headlineRef.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = headlineRef.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY
    
    const power = 0.015
    mouseX.set(distanceX * power)
    mouseY.set(distanceY * power)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  }

  const charVariants = {
    hidden: { y: "150%" },
    visible: {
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] flex flex-col justify-end px-6 pb-20 overflow-hidden"
    >
      
      <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none overflow-hidden h-full my-auto">
        <SoftAurora 
          speed={3.0}
          scale={1.2}
          brightness={1.5}
          color1="#ff0055"
          color2="#00ffff"
          bandHeight={0.6}
          bandSpread={1.8}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           className="flex flex-col mb-12"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-sm uppercase tracking-[0.3em] font-medium mb-4"
          >
            Fullstack Developer © 2026
          </motion.span>
          
          <motion.h1 
            ref={headlineRef}
            style={{ x: headlineX, y: headlineY }}
            className="text-[15vw] leading-[0.8] font-black uppercase tracking-tighter -ml-[0.5vw] flex flex-wrap mix-blend-difference"
          >
            {name.split(" ").map((word, wordIdx) => (
              <span key={wordIdx} className="reveal-text mr-[2vw] mb-[1vw]">
                {word.split("").map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    variants={charVariants}
                    className="char"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
            <motion.span 
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 0.2, rotate: 0 }}
              transition={{ duration: 2, delay: 1 }}
              className="text-[10vw] inline-block align-top ml-2"
            >
              ®
            </motion.span>
          </motion.h1>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-xl md:text-2xl font-light max-w-xl leading-snug opacity-80"
          >
            Designing intelligent and visually engaging digital experiences. Combining algorithmic thinking with creative interfaces.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-col gap-4 text-right items-end"
          >
            <Magnetic>
              <a href="#projects" className="pill-button group relative overflow-hidden block">
                <span className="relative z-10">View Projects</span>
                <motion.div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
            </Magnetic>
            <div className="flex gap-6 opacity-60 hover:opacity-100 transition-opacity">
               <Magnetic>
                 <a href="https://github.com/kaushalanirudh27" target="_blank" rel="noreferrer" className="text-sm uppercase tracking-widest hover:underline transition-all">Github</a>
               </Magnetic>
               <Magnetic>
                 <a href="https://linkedin.com/in/anirudhkaushal" target="_blank" rel="noreferrer" className="text-sm uppercase tracking-widest hover:underline transition-all">Linkedin</a>
               </Magnetic>
            </div>
          </motion.div>
        </div>

      </div>
      
    </section>
  )
}

export default Hero
