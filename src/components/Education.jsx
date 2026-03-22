import { motion } from 'framer-motion'

const Education = () => {
  const educationData = [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech Computer Science",
      score: "CGPA: 8.06",
      duration: "2023 — Present"
    },
    {
      institution: "Police DAV Public School",
      degree: "Intermediate",
      score: "91%",
      duration: "2022 — 2023"
    },
    {
      institution: "Police DAV Public School",
      degree: "Matriculation",
      score: "89%",
      duration: "2020 — 2021"
    }
  ]

  return (
    <section id="education" className="relative py-32 bg-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col">
          <h2 className="text-sm uppercase tracking-[0.3em] font-medium mb-16 opacity-60 text-center">Academic Tenure</h2>
          
          <div className="flex flex-col border-t border-white/10">
            {educationData.map((edu, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group border-b border-white/10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-white hover:text-black transition-all duration-500 px-6 -mx-6"
              >
                 <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-widest opacity-50 mb-1">{edu.duration}</span>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">{edu.institution}</h3>
                 </div>
                 <div className="md:text-right">
                    <p className="text-xl font-bold uppercase tracking-tight">{edu.degree}</p>
                    <span className="text-sm opacity-60 group-hover:opacity-100">{edu.score}</span>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
