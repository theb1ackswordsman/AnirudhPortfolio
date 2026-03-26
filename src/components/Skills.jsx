import { motion } from 'framer-motion'
import { useState } from 'react'

const skillsData = [
  {
    category: "Languages",
    skills: ["C", "C++", "JavaScript", "Python", "Java"],
    color: "#60a5fa",
    accent: "rgba(96, 165, 250, 0.15)",
    span: "md:col-span-2", // wide card
  },
  {
    category: "Frameworks",
    skills: ["HTML & CSS", "NodeJS", "ReactJS", "ExpressJS"],
    color: "#34d399",
    accent: "rgba(52, 211, 153, 0.15)",
    span: "md:col-span-1",
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB"],
    color: "#a78bfa",
    accent: "rgba(167, 139, 250, 0.15)",
    span: "md:col-span-1",
  },
  {
    category: "Web Development",
    skills: ["Responsive Design", "DOM Manipulation", "REST APIs"],
    color: "#f472b6",
    accent: "rgba(244, 114, 182, 0.15)",
    span: "md:col-span-1",
  },
  {
    category: "Soft Skills",
    skills: ["Critical Thinking", "Team Collaboration", "Leadership", "Adaptability"],
    color: "#fbbf24",
    accent: "rgba(251, 191, 36, 0.15)",
    span: "md:col-span-2",
  }
]

const SkillCard = ({ data, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group ${data.span} rounded-2xl overflow-hidden cursor-default`}
      style={{
        border: `1px solid ${isHovered ? data.color + '40' : 'rgba(255,255,255,0.06)'}`,
        transition: 'border-color 0.5s ease',
      }}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${data.accent}, transparent 70%)` }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8">
        {/* Header Row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {/* Glowing dot */}
            <div className="relative">
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-30"
                style={{ backgroundColor: data.color, display: isHovered ? 'block' : 'none' }}
              />
              <span
                className="relative block w-2.5 h-2.5 rounded-full transition-shadow duration-500"
                style={{
                  backgroundColor: data.color,
                  boxShadow: isHovered ? `0 0 12px ${data.color}` : 'none'
                }}
              />
            </div>
            <h3
              className="text-sm md:text-base font-bold uppercase tracking-[0.15em] transition-colors duration-300"
              style={{ color: isHovered ? '#fff' : 'rgba(255,255,255,0.7)' }}
            >
              {data.category}
            </h3>
          </div>
          <span className="text-[10px] font-mono text-white/20 tracking-widest">
            {data.skills.length.toString().padStart(2, '0')} items
          </span>
        </div>

        {/* Skill Pills */}
        <div className="flex flex-wrap gap-2.5">
          {data.skills.map((skill, j) => (
            <motion.span
              key={j}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: (index * 0.08) + (j * 0.04) + 0.3,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{
                scale: 1.08,
                y: -2,
                transition: { duration: 0.2 }
              }}
              className="px-4 py-2 rounded-lg text-xs md:text-sm font-medium tracking-wide cursor-default transition-colors duration-300"
              style={{
                backgroundColor: isHovered ? data.color + '18' : 'rgba(255,255,255,0.04)',
                color: isHovered ? '#fff' : 'rgba(255,255,255,0.6)',
                border: `1px solid ${isHovered ? data.color + '30' : 'rgba(255,255,255,0.06)'}`,
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-all duration-700 ease-out"
        style={{
          width: isHovered ? '100%' : '0%',
          backgroundColor: data.color,
          boxShadow: `0 0 20px ${data.color}80`
        }}
      />
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 md:py-36 bg-black overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono uppercase tracking-[0.4em] text-white/30 mb-3"
            >
              // 04 — Technical Arsenal
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white"
            >
              Skills &amp;{' '}
              <span className="italic font-light tracking-normal normal-case" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Expertise
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-white/30 max-w-xs text-right leading-relaxed hidden md:block"
          >
            A curated stack spanning low-level systems programming to full-stack web architectures.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillsData.map((data, i) => (
            <SkillCard key={i} data={data} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
