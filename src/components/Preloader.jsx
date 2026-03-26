import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const greetings = [
  "Hello", "Hola", "Bonjour", "नमस्ते", "Ciao", "Salut", "こんにちは", "안녕하세요", "مرحبا", "Oi!"
]
const name = "ANIRUDH KAUSHAL"

const Preloader = ({ onComplete }) => {
  const [index, setIndex] = useState(0)
  const [showName, setShowName] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [loading, setLoading] = useState(true)

  // momentum timing
  const getDelay = (idx) => {
    if (idx === 0) return 1200
    const delays = [400, 300, 200, 150, 100, 80]
    return delays[idx - 1] || 80
  }

  useEffect(() => {
    if (!showName) {
      if (index < greetings.length - 1) {
        const timer = setTimeout(() => {
          setIndex(prev => prev + 1)
        }, getDelay(index))
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => {
          setShowName(true)
        }, 600)
        return () => clearTimeout(timer)
      }
    } else if (!isExiting) {
      const timer = setTimeout(() => {
        setIsExiting(true)
        setTimeout(() => {
          setLoading(false)
          onComplete()
        }, 900) // fire after the fade-out is mostly done
      }, 1500) // Hold name for 1.5s
      return () => clearTimeout(timer)
    }
  }, [index, showName, isExiting, onComplete])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black overflow-hidden select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          {/* Subtle Background Metadata */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] overflow-hidden select-none">
             {[...Array(15)].map((_, i) => (
               <div key={i} className="whitespace-nowrap font-mono text-[10vw] leading-none uppercase tracking-tighter italic">
                  ANIRUDH KAUSHAL SYSTEM INIT
               </div>
             ))}
          </div>

          <div className="relative z-10 w-full flex items-center justify-center h-full">
            <AnimatePresence mode="popLayout">
              {!showName ? (
                <motion.p 
                  key={greetings[index]}
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ 
                    opacity: 0, 
                    scale: 1.5, 
                    filter: "blur(15px)",
                    transition: { duration: 0.3 } 
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="text-[12vw] md:text-[9vw] font-black text-white leading-none tracking-tighter uppercase italic"
                >
                  {greetings[index]}
                </motion.p>
              ) : (
                <AnimatePresence>
                  {!isExiting && (
                    <motion.div
                      key="name-container"
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 1.05,
                        transition: { duration: 0.6, ease: 'easeInOut' }
                      }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col items-center"
                    >
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ delay: 0.5 }}
                        className="text-xs md:text-sm uppercase tracking-[0.8em] mb-6 font-medium text-white/60"
                      >
                        Creative Portfolio
                      </motion.span>
                      <h1 className="text-[10vw] md:text-[8vw] font-black text-white leading-none tracking-tighter uppercase italic text-center">
                        {name}
                      </h1>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.8, duration: 1.2 }}
                        className="h-[1px] bg-white/20 mt-8 w-64" 
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
