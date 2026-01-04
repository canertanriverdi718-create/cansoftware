'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, ArrowRight, ArrowLeft, Code2, Sparkles, Cpu, Palette } from 'lucide-react'
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

export default function BlogPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/#blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-accent-cyan transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Ana Sayfa
          </Link>
        </motion.div>

        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Blog <span className="text-gradient">Yazıları</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Yazılım geliştirme, teknoloji trendleri ve en iyi pratikler hakkında düşüncelerimi paylaşıyorum.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
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
                  <div className={`h-1.5 bg-gradient-to-r ${post.gradient}`} />
                  
                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${post.gradient} p-0.5`}>
                        <div className="w-full h-full rounded-xl bg-dark-900 flex items-center justify-center">
                          <post.icon size={26} className="text-white" />
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 text-xs font-medium text-gray-400 uppercase tracking-wider border border-white/10">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors duration-300">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/5">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                      <motion.div
                        whileHover={{ x: 3 }}
                        className="flex items-center gap-2 text-accent-cyan font-medium text-sm"
                      >
                        Oku
                        <ArrowRight size={16} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  )
}
