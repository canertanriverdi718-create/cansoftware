'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'E-Ticaret Platformu',
    description: 'Modern ve ölçeklenebilir e-ticaret çözümü. React, Node.js ve MongoDB ile geliştirildi.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: 'from-accent-cyan to-primary-500',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
  {
    title: 'Kurumsal Web Sitesi',
    description: 'İnşaat firması için responsive ve SEO uyumlu kurumsal web sitesi.',
    tags: ['Next.js', 'Tailwind CSS', 'SEO'],
    color: 'from-accent-purple to-accent-pink',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    title: 'Mobil Uygulama',
    description: 'iOS ve Android için cross-platform mobil uygulama geliştirmesi.',
    tags: ['React Native', 'Firebase', 'Redux'],
    color: 'from-accent-blue to-accent-cyan',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
  },
  {
    title: 'Dashboard & Analytics',
    description: 'Gerçek zamanlı veri görselleştirme ve analitik dashboard.',
    tags: ['Vue.js', 'D3.js', 'WebSocket'],
    color: 'from-accent-pink to-accent-purple',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    title: 'API Entegrasyonu',
    description: 'Üçüncü parti servislerle entegre RESTful API geliştirmesi.',
    tags: ['Express.js', 'PostgreSQL', 'Docker'],
    color: 'from-primary-500 to-accent-cyan',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  },
  {
    title: 'CRM Sistemi',
    description: 'Müşteri ilişkileri yönetimi için özelleştirilmiş CRM çözümü.',
    tags: ['TypeScript', 'Prisma', 'tRPC'],
    color: 'from-accent-cyan to-accent-purple',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-16 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
      <div className="absolute top-[5%] right-[0%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-accent-cyan/25 sm:bg-accent-cyan/[0.03] rounded-full blur-[80px] sm:blur-[200px]" />
      <div className="absolute bottom-[10%] left-[0%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-accent-purple/25 sm:bg-accent-purple/[0.03] rounded-full blur-[80px] sm:blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-8 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-accent-cyan font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Portfolyo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Deneyimlerim
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Tamamladığım projelerden bazı örnekler
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative glass rounded-2xl overflow-hidden h-full">
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40`} />
                  <div className="absolute inset-0 bg-dark-950/30" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-dark-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      <Github size={20} />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-px bg-gradient-to-br ${project.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full glass border border-accent-cyan/30 text-accent-cyan font-semibold hover:bg-accent-cyan/10 transition-all duration-300"
          >
            Tüm Projeleri Gör
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
