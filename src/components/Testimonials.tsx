'use client'

import { motion, useInView, animate } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Quote, Star, MessageSquareQuote } from 'lucide-react'

function AnimatedNumber({ value, suffix = '', isInView, decimals = 0 }: { value: number; suffix?: string; isInView: boolean; decimals?: number }) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let intervalId: NodeJS.Timeout
    let controls: ReturnType<typeof animate>

    const runAnimation = () => {
      setDisplayValue(0)
      controls = animate(0, value, {
        duration: 3,
        ease: 'easeOut',
        onUpdate: (v) => setDisplayValue(decimals > 0 ? parseFloat(v.toFixed(decimals)) : Math.floor(v)),
      })
    }

    runAnimation()

    intervalId = setInterval(() => {
      runAnimation()
    }, 5000)

    return () => {
      clearInterval(intervalId)
      if (controls) controls.stop()
    }
  }, [isInView, value, decimals])

  return (
    <span className="text-2xl sm:text-3xl font-bold text-white drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
      {decimals > 0 ? displayValue.toFixed(decimals) : displayValue}{suffix}
    </span>
  )
}

const testimonials = [
  {
    name: 'Talha Ertürk',
    role: 'Ertürk Kuyumculuk',
    content: 'Online mağazamız için kusursuz bir sistem geliştirdi. Müşteri memnuniyetimiz arttı. Kesinlikle öneriyorum.',
    rating: 5,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Kutluay Tetik',
    role: 'Tetik Grup İnşaat',
    content: 'Caner Bey ile çalışmak gerçekten profesyonel bir deneyimdi. Web sitemizi tam istediğimiz gibi tasarladı.',
    rating: 5,
    gradient: 'from-accent-cyan to-blue-500',
  },
  {
    name: 'Metincan Aytekin',
    role: 'Aytekin Otomotiv',
    content: 'Online randevu sistemi işlerimizi çok kolaylaştırdı. Teknik bilgisi ve iletişimi mükemmel.',
    rating: 4,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Fazıl Mert Koca',
    role: 'Makine Mühendisi',
    content: 'Kişisel portfolio sitem için harika bir iş çıkardı. Modern tasarım ve hızlı performans.',
    rating: 5,
    gradient: 'from-accent-purple to-accent-pink',
  },
  {
    name: 'Merve Şahin',
    role: 'Endüstriyel Tasarım Mühendisi',
    content: 'Her aşamada bilgilendirici ve çözüm odaklı bir yaklaşım sergiledi. Beklentilerimin üzerinde.',
    rating: 5,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    name: 'İsmet Bayraklar',
    role: 'Bayraklar Otomotiv',
    content: 'E-ticaret sitemizi baştan sona yeniledi. Satışlarımız gözle görülür şekilde arttı.',
    rating: 4,
    gradient: 'from-blue-500 to-indigo-500',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 640)
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative py-12 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
      <div className="absolute top-[5%] left-[0%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-accent-purple/25 sm:bg-accent-purple/[0.03] rounded-full blur-[80px] sm:blur-[200px]" />
      <div className="absolute bottom-[5%] right-[0%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-accent-cyan/25 sm:bg-accent-cyan/[0.03] rounded-full blur-[80px] sm:blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 mb-6 border border-white/10"
          >
            <MessageSquareQuote size={28} className="text-accent-cyan" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Müşteri <span className="text-gradient">Yorumları</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto"
          >
            Birlikte çalıştığım müşterilerimin değerli görüşleri
          </motion.p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Gradient Masks - Hidden on mobile */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-r from-dark-950 to-transparent z-10 pointer-events-none" />
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-l from-dark-950 to-transparent z-10 pointer-events-none" />

          {/* Sliding Container */}
          <div className="overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0">
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: isMobile ? 2 : 25,
                  ease: 'linear',
                },
              }}
              className="flex gap-4 sm:gap-6"
            >
              {/* Triple the testimonials for seamless loop */}
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[380px]"
                >
                  <div className="relative h-full group">
                    {/* Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative glass rounded-2xl p-5 sm:p-6 h-full border border-white/10 group-hover:border-accent-cyan/30 transition-all duration-500 overflow-hidden">
                      {/* Top Gradient Line */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.gradient}`} />
                      
                      {/* Quote Icon */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${testimonial.gradient} p-0.5`}>
                          <div className="w-full h-full rounded-xl bg-dark-900 flex items-center justify-center">
                            <Quote size={18} className="text-white" />
                          </div>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <p className="text-gray-300 mb-5 leading-relaxed text-sm sm:text-base line-clamp-3">
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                        <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-white text-sm sm:text-base truncate">{testimonial.name}</h4>
                          <p className="text-xs sm:text-sm text-gray-500 truncate">{testimonial.role}</p>
                        </div>
                      </div>

                      {/* Hover Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 sm:mt-16 pt-8 border-t border-white/5"
        >
          <div className="text-center">
            <AnimatedNumber value={25} suffix="+" isInView={isInView} />
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Mutlu Müşteri</p>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <AnimatedNumber value={5.0} suffix="" isInView={isInView} decimals={1} />
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Ortalama Puan</p>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div className="text-center">
            <AnimatedNumber value={100} suffix="%" isInView={isInView} />
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Memnuniyet</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
