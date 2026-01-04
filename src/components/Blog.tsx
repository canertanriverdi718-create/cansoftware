'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, ArrowRight, Tag, Sparkles, Code2, Cpu, Palette } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Next.js 14 ile Modern Web Uygulamaları',
    excerpt: 'Next.js 14\'ün yeni özellikleri ve App Router ile nasıl daha performanslı web uygulamaları geliştirebileceğinizi keşfedin.',
    category: 'Web Dev',
    date: '28 Ara 2025',
    readTime: '8 dk',
    icon: Code2,
    gradient: 'from-accent-cyan to-blue-500',
    glowColor: 'rgba(0,212,255,0.3)',
  },
  {
    id: 2,
    title: 'React State Yönetimi Best Practices',
    excerpt: 'React uygulamalarında state yönetimini optimize etmek için kullanabileceğiniz modern yöntemler.',
    category: 'React',
    date: '22 Ara 2025',
    readTime: '6 dk',
    icon: Sparkles,
    gradient: 'from-blue-500 to-accent-purple',
    glowColor: 'rgba(59,130,246,0.3)',
  },
  {
    id: 3,
    title: 'TypeScript ile Tip Güvenli Kod',
    excerpt: 'TypeScript\'in güçlü tip sistemini kullanarak daha güvenli ve sürdürülebilir kod yazmanın yolları.',
    category: 'TypeScript',
    date: '15 Ara 2025',
    readTime: '10 dk',
    icon: Cpu,
    gradient: 'from-accent-purple to-accent-pink',
    glowColor: 'rgba(168,85,247,0.3)',
  },
  {
    id: 4,
    title: 'Tailwind CSS Modern UI Tasarımları',
    excerpt: 'Tailwind CSS kullanarak responsive ve modern arayüzler tasarlamanın püf noktaları.',
    category: 'CSS',
    date: '10 Ara 2025',
    readTime: '5 dk',
    icon: Palette,
    gradient: 'from-teal-500 to-accent-cyan',
    glowColor: 'rgba(20,184,166,0.3)',
  },
]

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="blog" className="relative py-16 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
      <div className="absolute top-[5%] right-[0%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-accent-purple/25 sm:bg-accent-purple/[0.03] rounded-full blur-[80px] sm:blur-[200px]" />
      <div className="absolute bottom-[10%] left-[0%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-accent-cyan/25 sm:bg-accent-cyan/[0.03] rounded-full blur-[80px] sm:blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-8 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-accent-cyan font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Blog
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Yazılarım & <span className="text-gradient">Makaleler</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Yazılım geliştirme, teknoloji trendleri ve en iyi pratikler hakkında düşüncelerimi paylaşıyorum.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              whileHover={{ y: -12 }}
              className="group relative"
            >
              <Link href={`/blog/${post.id}`} className="block h-full">
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: post.glowColor }}
              />
              
              <div className="relative glass rounded-2xl overflow-hidden h-full flex flex-col border border-white/10 group-hover:border-accent-cyan/30 transition-all duration-500">
                {/* Top Gradient Bar */}
                <div className={`h-1 bg-gradient-to-r ${post.gradient}`} />
                
                {/* Header with Icon */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.gradient} p-0.5`}>
                      <div className="w-full h-full rounded-xl bg-dark-900 flex items-center justify-center">
                        <post.icon size={22} className="text-white" />
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 text-[10px] font-medium text-gray-400 uppercase tracking-wider border border-white/10">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-auto p-6 pt-0">
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>
                    <motion.div
                      whileHover={{ x: 3 }}
                      className="text-accent-cyan"
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link href="/blog">
            <motion.span
              whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(0, 212, 255, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border border-accent-cyan/30 text-white font-semibold hover:border-accent-cyan/60 transition-all duration-500"
            >
              <span>Tüm Yazıları Keşfet</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
