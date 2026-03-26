import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="relative py-12 bg-black border-t border-white/10 px-6">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-10">
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] font-medium"
        >
           © {new Date().getFullYear()} Anirudh Kaushal — Jalandhar, IN
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex gap-10 text-xs uppercase tracking-widest"
        >
           <a href="#home" className="hover:opacity-100 transition-opacity">Back to top</a>
           <a href="https://github.com/theb1ackswordsman" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity cursor-hover interactive">Built with Love</a>
        </motion.div>

      </div>
    </footer>
  )
}

export default Footer
