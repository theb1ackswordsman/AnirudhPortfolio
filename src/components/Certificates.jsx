import { motion } from 'framer-motion'

const Certificates = () => {
  const certsData = [
    {
      title: "DSA Summer Training",
      issuer: "Spleen Technologies",
      date: "2024"
    },
    {
      title: "Social Media Security",
      issuer: "NPTEL",
      date: "2023"
    },
    {
      title: "Hardware & OS",
      issuer: "Coursera",
      date: "2023"
    }
  ]

  return (
    <section id="certificates" className="relative py-32 bg-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col">
          <h2 className="text-sm uppercase tracking-[0.3em] font-medium mb-16 opacity-60 text-center">Accreditations</h2>
          
          <div className="flex flex-col border-t border-white/10">
            {certsData.map((cert, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group border-b border-white/10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:bg-white hover:text-black transition-all duration-500 px-6 -mx-6"
              >
                 <div>
                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">{cert.title}</h3>
                    <p className="text-sm uppercase tracking-widest opacity-50 mt-1">Issued by {cert.issuer}</p>
                 </div>
                 <span className="text-xl font-light opacity-50">{cert.date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates
