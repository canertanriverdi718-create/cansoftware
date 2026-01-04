'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Instagram, Twitter, Facebook, Heart, Code2 } from 'lucide-react'

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-400' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-500' },
]

const footerLinks = [
  { name: 'Anasayfa', href: '#home' },
  { name: 'Hakkımda', href: '#about' },
  { name: 'Deneyimlerim', href: '#experience' },
  { name: 'İletişim', href: '#contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[300px] bg-accent-cyan/15 sm:bg-accent-cyan/5 rounded-full blur-[100px] sm:blur-[150px]" />
      <div className="absolute top-10 -right-20 w-[200px] h-[200px] bg-accent-purple/20 rounded-full blur-[80px] sm:hidden" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="relative w-16 h-16 flex items-center justify-center drop-shadow-[0_0_25px_rgba(0,212,255,0.5)] group-hover:drop-shadow-[0_0_35px_rgba(0,212,255,0.7)] transition-all duration-300">
                <Image
                  src="/LOGO.png"
                  alt="CanSoftware Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">
                  <span className="text-accent-cyan drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">CAN</span>
                  <span className="text-white">SOFTWARE</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Profesyonel yazılım hizmetleri ile hayalinizdeki projeleri gerçeğe dönüştürüyorum. Modern, hızlı ve ölçeklenebilir çözümler.
            </p>
            
            {/* Slogan */}
            <div className="glass rounded-xl px-4 py-3 inline-block">
              <p className="text-accent-cyan font-medium flex items-center gap-2">
                <Code2 size={18} />
                <span>Kod ile Fark Yaratın</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/50 group-hover:bg-accent-cyan transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} Can-Software. Tüm hakları saklıdır. 
            <span className="text-accent-cyan mx-1">|</span>
            Made with <Heart size={14} className="text-red-500 mx-1 inline" /> by Caner
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-xl glass text-gray-400 ${social.color} transition-all duration-300 hover:shadow-glow-sm`}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
