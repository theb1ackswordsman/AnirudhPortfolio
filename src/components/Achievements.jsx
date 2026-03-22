import { motion } from 'framer-motion'

const Achievements = () => {
  const achievementsData = [
    { value: "Top 20", label: "IIT Guwahati Game Jam teams" },
    { value: "Dean's List", label: "Top % of college academic standing" },
    { value: "200+", label: "Problems solved on LeetCode & GFG" }
  ]

  return (
    <section id="achievements" className="relative py-32 bg-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col">
          <h2 className="text-sm uppercase tracking-[0.3em] font-medium mb-16 opacity-60 text-center">Achievements (03)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10">
            {achievementsData.map((ach, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group border-b border-white/10 md:border-r last:md:border-r-0 py-16 flex flex-col items-center text-center hover:bg-white hover:text-black transition-all duration-500 px-6"
              >
                 <span className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4">{ach.value}</span>
                 <p className="text-sm uppercase tracking-widest opacity-60 group-hover:opacity-100 max-w-[200px]">{ach.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
