import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect } from 'react'

const Hero = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax scroll effects
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const videoY = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Mouse interaction for 3D video tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the mouse values
  const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 }
  const smoothMouseX = useSpring(mouseX, smoothOptions)
  const smoothMouseY = useSpring(mouseY, smoothOptions)

  // Convert mouse position to subtle rotation angles
  const rotateX = useTransform(smoothMouseY, [-1, 1], [8, -8])
  const rotateY = useTransform(smoothMouseX, [-1, 1], [-8, 8])

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    // Normalize bounds between -1 and 1
    mouseX.set((clientX / innerWidth) * 2 - 1)
    mouseY.set((clientY / innerHeight) * 2 - 1)
  }

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex flex-col bg-black text-white overflow-hidden perspective-1000"
      style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif", perspective: '1000px' }}
    >
      {/* ── Top Navigation Bar ── */}
      <nav
        className="relative z-20 w-full px-6 md:px-8 flex items-center justify-between"
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.12)',
          height: '52px',
        }}
      >
        {/* Left: Logo */}
        <div className="flex items-center">
          <span
            className="text-[22px] font-semibold tracking-tight flex items-center select-none cursor-pointer"
            style={{ letterSpacing: '-0.03em' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Anirudh
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                border: '1.5px solid rgba(255,255,255,0.7)',
                fontSize: '7px',
                fontWeight: 700,
                marginLeft: '2px',
                lineHeight: 1,
              }}
            >
              ®
            </span>
          </span>
        </div>

        {/* Center: Functional Quick Links */}
        <div className="hidden md:flex flex-col items-center leading-tight">
          <span className="text-[11px] font-semibold text-white mb-0.5">Quick Links</span>
          <div className="flex items-center gap-3 text-[11px] text-white/50 font-medium">
            <a href="#home" className="hover:text-white transition-colors cursor-hover interactive">Home</a>
            <span>,</span>
            <a href="#about" className="hover:text-white transition-colors cursor-hover interactive">About</a>
            <span>,</span>
            <a href="#projects" className="hover:text-white transition-colors cursor-hover interactive">Work</a>
            <span>,</span>
            <a href="#contact" className="hover:text-white transition-colors cursor-hover interactive">Contact</a>
          </div>
        </div>

        {/* Right: Location */}
        <div className="hidden md:flex flex-col items-end leading-tight">
          <span className="text-[11px] font-semibold text-white">
            Based in Punjab <span style={{ fontFamily: 'sans-serif' }}>ਪੰਜਾਬ</span>
          </span>
          <span className="text-[11px] text-white/50">Web Designer + Developer</span>
        </div>
      </nav>

      {/* ── Main Hero Body: 60/40 Split ── */}
      <div
        className="w-full flex items-center justify-between px-6 md:px-8 relative z-10"
        style={{ paddingTop: '10vh', paddingBottom: '8vh', minHeight: '65vh' }}
      >
        {/* Left: Aggressive Typography (60%) */}
        <motion.div
          style={{ y: textY, maxWidth: '60%' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
          className="flex-1 pr-4 relative z-20 flex flex-col pointer-events-none"
        >
          <h1 className="flex flex-col select-none">
            <span 
              className="font-bold text-white tracking-tight"
              style={{ fontSize: 'clamp(32px, 4.5vw, 70px)', lineHeight: '1.05' }}
            >
              Designing Moments
            </span>
            <span 
              className="font-medium text-white/60 normal-case italic"
              style={{ fontSize: 'clamp(20px, 2.8vw, 44px)', lineHeight: '1.1', margin: '8px 0 4px 0' }}
            >
              that feel
            </span>
            {/* The massive word uses difference blending to invert the video if it overlaps */}
            <span 
              className="font-black text-white mix-blend-difference"
              style={{ 
                fontSize: 'clamp(40px, 7.1vw, 118px)', 
                lineHeight: '0.85', 
                letterSpacing: '-0.02em',
                marginLeft: '-4px' // Optical alignment
              }}
            >
              INTENTIONAL.
            </span>
          </h1>

          <div className="flex flex-col mt-12 gap-1.5 text-white/40 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
            <span>Quiet Design.</span>
            <span>Clear Intent.</span>
          </div>

          {/* Scroll ↓ Indicator (Micro Interaction) */}
          <div className="mt-16 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">
            <span className="w-10 h-[1px] bg-white/20"></span>
            Scroll
            <motion.div 
              animate={{ y: [0, 5, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              ↓
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Taller Video Card (40%) with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          style={{
            y: videoY,
            rotateX: rotateX,
            rotateY: rotateY,
            width: 'min(38vw, 480px)',
            height: 'min(60vh, 650px)',
            background: '#0a0a0a',
            marginLeft: '-8vw', // Pull video left to underlap the INTENTIONAL text subtly
            zIndex: 10,
            transformStyle: 'preserve-3d'
          }}
          className="relative flex-shrink-0 group interactive cursor-hover shadow-2xl"
        >
          {/* Inner wrapper for hover zoom effect */}
          <div className="absolute inset-0 overflow-hidden w-full h-full">
            <iframe
              src="https://player.vimeo.com/video/1146223612?autoplay=1&loop=1&muted=1&background=1&autopause=0"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 'calc(100% * 16 / 9)',
                height: '100%',
                minWidth: '100%',
                minHeight: 'calc(100% * 9 / 16)',
                transform: 'translate(-50%, -50%) scale(1.05)',
                border: 'none',
                pointerEvents: 'none',
              }}
              className="group-hover:scale-100 transition-transform duration-1000 ease-[0.19,1,0.22,1]"
              title="Showreel"
            />
          </div>
        </motion.div>
      </div>

      {/* ── Skills Ticker Bar ── */}
      <div
        className="w-full flex select-none relative z-20"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.12)',
          borderBottom: '1px solid rgba(255,255,255,0.12)',
          marginTop: '20px',
          height: '42px',
          alignItems: 'center',
          background: '#0a0a0a'
        }}
      >
        <div className="flex items-center whitespace-nowrap animate-[marquee_25s_linear_infinite]">
          {['Art Direction', 'Branding', 'Strategy', 'UI Design', 'Motion', 'Art Direction', 'Branding', 'Strategy', 'UI Design', 'Motion'].map((item, i) => (
            <span key={i} className="flex items-center">
              <span
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 px-12 hover:text-white transition-colors duration-300"
              >
                {item}
              </span>
              <span className="text-white/10 text-[8px]">◆</span>
            </span>
          ))}
        </div>
        <div className="flex items-center whitespace-nowrap animate-[marquee_25s_linear_infinite]" aria-hidden="true">
          {['Art Direction', 'Branding', 'Strategy', 'UI Design', 'Motion', 'Art Direction', 'Branding', 'Strategy', 'UI Design', 'Motion'].map((item, i) => (
            <span key={i} className="flex items-center">
              <span
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50 px-12 hover:text-white transition-colors duration-300"
              >
                {item}
              </span>
              <span className="text-white/10 text-[8px]">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Massive "Anirudh™" Display Text ── */}
      <div
        className="w-full relative z-10 bg-black flex flex-col items-center"
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.12)',
          paddingTop: '4vh',
          paddingBottom: '2vh',
        }}
      >
        <h2
          className="text-white font-black w-full text-center select-none"
          style={{
            fontSize: 'clamp(80px, 22vw, 360px)',
            lineHeight: '0.8',
            letterSpacing: '-0.04em',
            fontWeight: 900,
          }}
        >
          Anirudh<sup style={{ fontSize: '0.35em', verticalAlign: 'super', letterSpacing: '0' }}>™</sup>
        </h2>
      </div>

      {/* ── Short Intro / About Me Section ── */}
      <div 
        className="w-full relative z-10 bg-black flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-12 lg:px-24 py-20 md:py-32"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}
      >
        {/* Left: User Photo */}
        <div className="w-full md:w-5/12 lg:w-4/12 flex justify-center md:justify-start mb-16 md:mb-0">
          <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden group">
            {/* The user will drop their image in /public/me.jpg */}
            <img 
              src="/me.jpg" 
              alt="Anirudh" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-[0.19,1,0.22,1] scale-105 group-hover:scale-100" 
            />
            {/* Minimalist overlay frame */}
            <div className="absolute inset-0 border border-white/20 pointer-events-none z-10"></div>
          </div>
        </div>
        
        {/* Right: Intro Context */}
        <div className="w-full md:w-7/12 lg:w-7/12 flex flex-col justify-center h-full md:pt-8 md:pl-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40 mb-8 block flex items-center gap-4">
            <span className="w-8 h-[1px] bg-white/20"></span>
            About Me
          </span>
          
          <h3 className="text-2xl md:text-4xl lg:text-[42px] font-medium leading-[1.15] text-white select-none tracking-tight">
            I craft digital experiences with a relentless focus on aesthetics, kinetic motion, and aggressive typography.
          </h3>
          
          <p className="text-sm md:text-base text-white/50 mt-10 max-w-xl leading-relaxed font-light">
            My work lives at the intersection of design and engineering—building premium, highly interactive interfaces that feel deliberate and intentional. Let's create something memorable.
          </p>

          <a 
            href="#about" 
            className="mt-12 inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-bold text-white transition-opacity hover:opacity-70 w-fit interactive cursor-hover"
          >
            Read the full story
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>

    </section>
  )
}

export default Hero
