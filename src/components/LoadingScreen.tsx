'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-950"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Radial Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent-cyan/10 via-transparent to-transparent rounded-full" />
            
            {/* Floating Particles */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent-cyan/60 rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  y: [null, Math.random() * -200 - 100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Logo Container with Rings */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Wrapper - Rings will be centered on this */}
            <div className="relative flex items-center justify-center">
              {/* Rotating Rings Around Logo - Centered */}
              <motion.div
                className="absolute w-[400px] h-[400px] border-2 border-accent-cyan/50 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute w-[470px] h-[470px] border border-accent-purple/40 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute w-[540px] h-[540px] border border-accent-cyan/25 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute w-[610px] h-[610px] border border-accent-pink/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              />

              {/* Glow Behind Logo */}
              <motion.div
                className="absolute w-96 h-96 bg-accent-cyan/30 rounded-full blur-[120px]"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Logo */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                  delay: 0.2,
                }}
                className="relative z-10"
              >
                <motion.div
                  animate={{
                    filter: [
                      'drop-shadow(0 0 30px rgba(0,212,255,0.6))',
                      'drop-shadow(0 0 50px rgba(0,212,255,0.9))',
                      'drop-shadow(0 0 30px rgba(0,212,255,0.6))',
                    ],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Image
                    src="/LOGO.png"
                    alt="CanSoftware Logo"
                    width={350}
                    height={350}
                    className="object-contain brightness-110"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 text-center"
            >
              <h1 className="text-3xl font-bold tracking-tight">
                <span className="text-accent-cyan drop-shadow-[0_0_15px_rgba(0,212,255,0.6)]">CAN</span>
                <span className="text-white">SOFTWARE</span>
              </h1>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink rounded-full"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 text-gray-400 text-sm"
            >
              Yükleniyor...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
