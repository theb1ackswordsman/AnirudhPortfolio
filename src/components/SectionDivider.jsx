import { motion } from 'framer-motion'

const SectionDivider = () => {
  return (
    <div className="w-full px-6 overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-[1px] bg-white opacity-20"
      />
    </div>
  )
}

export default SectionDivider
