import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import Lenis from 'lenis'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
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
  const [cursorText, setCursorText] = useState('')

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`
      }
    }

    const onMouseOver = (e) => {
      const target = e.target
      
      // Check for project card "VIEW" cursor first
      if (target.closest('.project-card')) {
        if (cursorRef.current) {
          cursorRef.current.classList.add('cursor-view')
          cursorRef.current.classList.remove('cursor-hover')
        }
        setCursorText('VIEW')
        return
      }

      // Interactive/text elements that should trigger the inverted large hover state
      const interactiveEls = ['a', 'button', 'h1', 'h2', 'h3', 'p', 'span', 'img', 'svg']
      
      if (
        interactiveEls.includes(target.tagName?.toLowerCase()) || 
        target.closest('a') || 
        target.closest('button') ||
        target?.classList?.contains('interactive')
      ) {
        if (cursorRef.current) {
          cursorRef.current.classList.add('cursor-hover')
          cursorRef.current.classList.remove('cursor-view')
        }
        setCursorText('')
      } else {
        if (cursorRef.current) {
          cursorRef.current.classList.remove('cursor-hover')
          cursorRef.current.classList.remove('cursor-view')
        }
        setCursorText('')
      }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseover', onMouseOver, { passive: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
    }
  }, [])

  return (
    <div className="hidden md:block pointer-events-none z-[10000]">
      <div 
        ref={cursorRef}
        className="custom-cursor flex items-center justify-center font-black" 
        style={{ transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
      >
        <span className="cursor-text absolute scale-0 opacity-0 transition-all duration-300 pointer-events-none">
          {cursorText}
        </span>
      </div>
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
      {/* Global Noise Overlay for premium texture */}
      <div className="noise-overlay" />
      
      <Preloader onComplete={() => setIsLoading(false)} />
      
      {/* 
        The main app is rendered immediately so that heavy IFrames (like the Hero Vimeo background) Mount & buffer during the Preloader. 
        It stays visually hidden (opacity: 0) and unclickable until isLoading becomes false. 
      */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: isLoading ? 0 : 0.2 }}
        className={isLoading ? 'pointer-events-none' : ''}
      >
          <CustomCursor />
          
          <div 
            className="relative z-10 w-full"
          >
            <Hero />
            <About />
            <SectionDivider />
            <Skills />
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
    </main>
  )
}

export default App
