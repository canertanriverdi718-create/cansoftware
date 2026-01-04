'use client'

import { motion } from 'framer-motion'

export default function Marquee() {
  return (
    <div className="fixed top-[72px] left-0 right-0 z-40 overflow-hidden py-3 bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950 border-b border-white/5">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 12,
            ease: 'linear',
          },
        }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="flex gap-8 items-center">
            <span className="text-lg font-bold text-gradient">Yazılım Hizmetleri</span>
            <span className="text-accent-cyan text-lg">✦</span>
            <span className="text-lg font-bold text-white">Web Sitesi Geliştirme</span>
            <span className="text-accent-purple text-lg">✦</span>
            <span className="text-lg font-bold text-gradient">Profesyonel Hizmetler</span>
            <span className="text-accent-pink text-lg">✦</span>
            <span className="text-lg font-bold text-white">Mobil Uygulama</span>
            <span className="text-accent-cyan text-lg">✦</span>
            <span className="text-lg font-bold text-gradient">E-Ticaret Çözümleri</span>
            <span className="text-accent-purple text-lg">✦</span>
            <span className="text-lg font-bold text-white">API Geliştirme</span>
            <span className="text-accent-pink text-lg">✦</span>
            <span className="text-lg font-bold text-gradient">Kurumsal Yazılım</span>
            <span className="text-accent-cyan text-lg">✦</span>
            <span className="text-lg font-bold text-white">Full Stack Developer</span>
            <span className="text-accent-purple text-lg">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
