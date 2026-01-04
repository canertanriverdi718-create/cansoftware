'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { name: 'Anasayfa', href: '#home' },
  { name: 'Hakkımda', href: '#about' },
  { name: 'Deneyimlerim', href: '#experience' },
  { name: 'Blog', href: '#blog' },
  { name: 'İletişim', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 glass-strong shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative"
          >
            <Link href="#home" className="flex items-center gap-2 group">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center drop-shadow-[0_0_25px_rgba(0,212,255,0.6)] group-hover:drop-shadow-[0_0_35px_rgba(0,212,255,0.8)] transition-all duration-300">
                <Image
                  src="/LOGO.png"
                  alt="CanSoftware Logo"
                  width={56}
                  height={56}
                  className="object-contain brightness-110 w-full h-full"
                  priority
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-lg font-bold tracking-tight">
                  <span className="text-accent-cyan drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">CAN</span>
                  <span className="text-white">SOFTWARE</span>
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Navigation - Always Visible */}
          <div className="flex items-center gap-1 sm:gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="relative px-2.5 sm:px-5 py-2 text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
