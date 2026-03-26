import { motion } from 'framer-motion'
import Magnetic from './Magnetic'
import Dither from './Dither'

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 bg-black border-t border-white/10 min-h-[70vh] flex flex-col justify-center overflow-hidden">
      
      {/* React Bits Dither Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Dither
          waveColor={[1, 1, 1]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.5}
          colorNum={4}
          waveAmplitude={0.4}
          waveFrequency={3}
          waveSpeed={0.03}
        />
        {/* Dark overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 pointer-events-none">
        <div className="flex flex-col items-center text-center">
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] font-medium mb-10 text-white mix-blend-difference"
          >
            Get in Touch
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10vw] leading-[0.9] font-black uppercase tracking-tighter mb-16 text-white mix-blend-difference"
          >
            Let's craft<br/>Something<br/>Brilliant<span className="opacity-20">®</span>
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col items-center gap-10 pointer-events-auto"
          >
            <Magnetic>
              <a href="mailto:kaushalanirudh27@gmail.com" className="pill-button text-2xl px-12 py-6 border-white/50 bg-black/20 backdrop-blur-sm hover:bg-white hover:text-black block transition-all duration-300">
                kaushalanirudh27@gmail.com
              </a>
            </Magnetic>

            <div className="flex gap-10 opacity-60">
               <Magnetic>
                 <a href="https://github.com/theb1ackswordsman" target="_blank" rel="noreferrer" className="text-sm uppercase tracking-widest hover:underline mix-blend-difference text-white">Github</a>
               </Magnetic>
               <Magnetic>
                 <a href="https://www.linkedin.com/in/anirudh-kaushal-32b28926a/" target="_blank" rel="noreferrer" className="text-sm uppercase tracking-widest hover:underline mix-blend-difference text-white">Linkedin</a>
               </Magnetic>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
