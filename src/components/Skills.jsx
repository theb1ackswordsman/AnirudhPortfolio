import { motion } from 'framer-motion'
import { useState } from 'react'

const skillCategories = [
  {
    title: "Languages",
    skills: ["C", "C++", "JavaScript", "Python", "Java"],
    color: "from-blue-500/20 to-cyan-500/5",
    accent: "text-blue-400"
  },
  {
    title: "Frameworks",
    skills: ["ReactJS", "NodeJS", "ExpressJS"],
    color: "from-green-500/20 to-emerald-500/5",
    accent: "text-green-400"
  },
  {
    title: "Web",
    skills: ["HTML", "CSS", "REST APIs", "Responsive Design", "DOM Manipulation"],
    color: "from-pink-500/20 to-rose-500/5",
    accent: "text-pink-400"
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
    color: "from-purple-500/20 to-fuchsia-500/5",
    accent: "text-purple-400"
  },
  {
    title: "Soft Skills",
    skills: ["Critical Thinking", "Leadership", "Adaptability", "Collaboration"],
    color: "from-orange-500/20 to-amber-500/5",
    accent: "text-orange-400"
  }
]

const SkillCard = ({ category, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-6 rounded-3xl glass border border-white/5 overflow-hidden group cursor-default"
    >
      {/* Animated Background Gradient on Hover */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-500`}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
      
      <div className="relative z-10">
        <h3 className={`text-2xl font-bold mb-6 ${category.accent} transition-colors duration-300`}>
          {category.title}
        </h3>
        
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index * 0.1) + (idx * 0.05), type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-slate-300 transition-colors backdrop-blur-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen py-24 flex items-center">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="h-[2px] w-8 bg-accent"></span>
            <h2 className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">Technical Arsenal</h2>
            <span className="h-[2px] w-8 bg-accent"></span>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Skills & <span className="text-gradient">Capabilities</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, idx) => (
            <SkillCard key={idx} category={category} index={idx} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
