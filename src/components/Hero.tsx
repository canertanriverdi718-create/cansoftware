'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Mail, ChevronDown, Sparkles } from 'lucide-react'

const roles = ['Full Stack Developer', 'Web Developer', 'UI/UX Designer']

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 640)
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      alpha: number
    }> = []

    const colors = ['#00d4ff', '#a855f7', '#3b82f6', '#ec4899']
    const particleCount = 180
    const particleSize = { min: 2, max: 4 }
    const particleSpeed = 0.6
    const particleAlpha = { min: 0.4, max: 0.8 }

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
        size: Math.random() * (particleSize.max - particleSize.min) + particleSize.min,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * (particleAlpha.max - particleAlpha.min) + particleAlpha.min,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.alpha
        ctx.fill()

        const connDist = 150
        const connOpacity = 0.3
        const connWidth = 1

        particles.forEach((otherParticle, j) => {
          if (i === j) return
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connDist) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = (connDist - distance) / connDist * connOpacity
            ctx.lineWidth = connWidth
            ctx.stroke()
          }
        })
      })

      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-animated" />
      
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Gradient Orbs - Very subtle */}
      <div className="absolute top-[10%] left-[5%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-accent-cyan/15 sm:bg-accent-cyan/[0.02] rounded-full blur-[80px] sm:blur-[200px]" />
      <div className="absolute bottom-[20%] right-[5%] w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-accent-purple/15 sm:bg-accent-purple/[0.02] rounded-full blur-[80px] sm:blur-[200px]" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
        >
          <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_10px_rgba(0,0,0,0.9)]">CanSoftware</span>
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="h-12 sm:h-14 mb-6 overflow-hidden"
        >
          <motion.h2
            key={currentRole}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-cyan drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            {roles[currentRole]}
          </motion.h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="text-lg sm:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
        >
          Şirketler, bireyler ve projeler için <span className="text-accent-cyan font-bold">profesyonel yazılım çözümleri</span> sunuyorum.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary Button */}
          <motion.a
            href="/Caner_Tanriverdi_CV%202.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-accent-cyan to-primary-500 text-white font-semibold text-lg shadow-glow-md hover:shadow-glow-lg transition-all duration-300 min-w-[220px]"
          >
            <span className="flex items-center justify-center gap-2">
              <FileText size={20} />
              CV'mi Görüntüle
            </span>
          </motion.a>

          {/* Secondary Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, y: -2, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:border-accent-cyan/50 min-w-[220px] glass"
          >
            <span className="flex items-center justify-center gap-2">
              <Mail size={20} />
              İletişime Geçelim
            </span>
          </motion.a>
        </motion.div>

        </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-6 bg-gradient-to-r from-dark-950/80 via-dark-900/50 to-dark-950/80 backdrop-blur-sm border-t border-white/5">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: isMobile ? 2 : 20,
              ease: 'linear',
            },
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="flex gap-8 items-center">
              <span className="text-xl font-bold text-white">Web Geliştirme</span>
              <span className="text-accent-cyan text-xl">✦</span>
              <span className="text-xl font-bold text-gradient">Mobil Uygulama</span>
              <span className="text-accent-purple text-xl">✦</span>
              <span className="text-xl font-bold text-white">E-Ticaret</span>
              <span className="text-accent-pink text-xl">✦</span>
              <span className="text-xl font-bold text-gradient">API Geliştirme</span>
              <span className="text-accent-cyan text-xl">✦</span>
              <span className="text-xl font-bold text-white">Dashboard</span>
              <span className="text-accent-purple text-xl">✦</span>
              <span className="text-xl font-bold text-gradient">UI/UX Tasarım</span>
              <span className="text-accent-pink text-xl">✦</span>
              <span className="text-xl font-bold text-white">Full Stack</span>
              <span className="text-accent-cyan text-xl">✦</span>
              <span className="text-xl font-bold text-gradient">SEO Optimizasyon</span>
              <span className="text-accent-purple text-xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
