import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import Lenis from 'lenis'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import SectionDivider from './components/SectionDivider'
import './App.css'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`
        cursorRef.current.style.top = `${clientY}px`
      }
      if (followerRef.current) {
        // Adding a slight delay formula for the follower can be done here, 
        // but for raw performance matching the original, we just apply it directly.
        // For smoother follower, we could use a custom animation frame loop, but let's keep it simple and fast first.
        followerRef.current.style.left = `${clientX}px`
        followerRef.current.style.top = `${clientY}px`
      }
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <div className="hidden md:block">
      <div 
        ref={cursorRef}
        className="custom-cursor" 
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div 
        ref={followerRef}
        className="cursor-follower" 
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <main className="relative bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black cursor-none">
      <Preloader onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0 }}
        >
          <div className="noise-overlay" />
          <CustomCursor />
          
          <div 
            className="relative z-10 w-full"
          >
            <Hero />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Education />
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <Certificates />
            <SectionDivider />
            <Achievements />
            <SectionDivider />
            <Contact />
            <Footer />
          </div>
        </motion.div>
      )}
    </main>
  )
}

export default App
