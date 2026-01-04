'use client'

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Code2, Briefcase, GraduationCap, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { icon: Code2, label: 'Yıllık Deneyim', value: 3, suffix: '+' },
  { icon: Briefcase, label: 'Tamamlanan Proje', value: 25, suffix: '+' },
  { icon: GraduationCap, label: 'Sertifika', value: 10, suffix: '+' },
]

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let intervalId: NodeJS.Timeout
    let controls: ReturnType<typeof animate>

    const runAnimation = () => {
      setDisplayValue(0)
      controls = animate(0, value, {
        duration: 4,
        ease: 'easeOut',
        onUpdate: (v) => setDisplayValue(Math.floor(v)),
      })
    }

    runAnimation()

    intervalId = setInterval(() => {
      runAnimation()
    }, 6000)

    return () => {
      clearInterval(intervalId)
      if (controls) controls.stop()
    }
  }, [isInView, value])

  return (
    <span className="text-4xl font-bold text-white drop-shadow-[0_0_20px_rgba(0,212,255,0.4)]">
      {displayValue}{suffix}
    </span>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-16 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
      <div className="absolute top-[10%] left-[0%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-accent-purple/25 sm:bg-accent-purple/[0.03] rounded-full blur-[80px] sm:blur-[200px]" />
      <div className="absolute bottom-[10%] right-[0%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-accent-cyan/25 sm:bg-accent-cyan/[0.03] rounded-full blur-[80px] sm:blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-md mx-auto flex items-center justify-center">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-3xl blur-2xl" />
              
              {/* Main Visual Container */}
              <div className="relative glass-strong rounded-3xl p-2 sm:p-4">
                {/* Profile Photo */}
                <Image
                  src="/FOTO.jpg"
                  alt="Caner Tanrıverdi"
                  width={500}
                  height={600}
                  className="rounded-2xl w-[250px] sm:w-[500px] sm:h-[600px] object-contain"
                  style={{ imageRendering: 'crisp-edges' }}
                  quality={100}
                  priority
                  unoptimized
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="space-y-6">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="inline-block text-accent-cyan font-semibold text-sm uppercase tracking-widest mb-3"
                >
                  Hakkımda
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-4xl sm:text-5xl font-bold text-white mb-6"
                >
                  Ben{' '}
                  <span className="text-gradient">Caner Tanrıverdi</span>
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="space-y-4 text-gray-300 text-lg leading-relaxed"
              >
                <p>
                  Yazılım dünyasına olan tutkum, karmaşık problemlere zarif çözümler üretme arzumdan doğdu. <span className="text-white font-semibold">Ankara Bilim Üniversitesi Siber Güvenlik</span> ve <span className="text-white font-semibold">Ankara Üniversitesi Web Tasarım</span> bölümlerinden aldığım eğitimle teknik altyapımı güçlendirdim.
                </p>
                <p>
                  Şu an aktif olarak bir yazılım firmasında <span className="text-accent-cyan font-semibold">Full Stack Developer</span> pozisyonunda görev yapıyorum. Modern teknolojiler ve en iyi pratiklerle projelerinizi hayata geçiriyorum.
                </p>
                <p>
                  İster kurumsal bir web sitesi, ister özel bir yazılım çözümü olsun - her projede <span className="text-white font-semibold">kalite, performans ve kullanıcı deneyimini</span> ön planda tutuyorum.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55 }}
                className="grid sm:grid-cols-2 gap-3 pt-4"
              >
                <a href="tel:+905532396891" className="group flex items-center gap-4 glass rounded-2xl p-5 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300 border border-white/5 hover:border-accent-cyan/30">
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.4)] transition-all">
                    <Phone size={24} className="text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Telefon</p>
                    <p className="text-lg font-semibold text-white group-hover:text-accent-cyan transition-colors">+90 553 239 6891</p>
                  </div>
                </a>
                <a href="mailto:canert44@outlook.com" className="group flex items-center gap-4 glass rounded-2xl p-5 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 border border-white/5 hover:border-accent-purple/30">
                  <div className="w-14 h-14 rounded-xl bg-accent-purple/10 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all">
                    <Mail size={24} className="text-accent-purple" />
                  </div>
                  <div className="min-w-0 overflow-hidden">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">E-posta</p>
                    <p className="text-base sm:text-lg font-semibold text-white group-hover:text-accent-purple transition-colors truncate">canert44@outlook.com</p>
                  </div>
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 pt-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative glass rounded-2xl p-6 text-center border border-white/10 hover:border-accent-cyan/30 transition-all duration-500 overflow-hidden">
                      {/* Glow line at top */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-60" />
                      
                      {/* Icon with glow */}
                      <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 mb-4 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-500">
                        <stat.icon size={28} className="text-accent-cyan group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      {/* Counter */}
                      <div className="mb-2">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                      </div>
                      
                      {/* Label */}
                      <div className="text-sm text-gray-400 font-medium tracking-wide">{stat.label}</div>
                      
                      {/* Bottom accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
