'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp, ChevronDown } from 'lucide-react'

export default function ScrollButtons() {
  const [showButtons, setShowButtons] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isAtBottom, setIsAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = window.innerHeight

      setShowButtons(scrollTop > 200)
      setIsAtTop(scrollTop < 100)
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {showButtons && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed bottom-8 right-8 z-50 flex flex-col gap-3"
        >
          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center transition-all duration-300 ${
              isAtTop 
                ? 'opacity-30 cursor-not-allowed' 
                : 'hover:border-accent-cyan/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]'
            }`}
            disabled={isAtTop}
          >
            <ChevronUp size={24} className="text-white" />
          </motion.button>

          {/* Scroll to Bottom */}
          <motion.button
            onClick={scrollToBottom}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center transition-all duration-300 ${
              isAtBottom 
                ? 'opacity-30 cursor-not-allowed' 
                : 'hover:border-accent-cyan/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]'
            }`}
            disabled={isAtBottom}
          >
            <ChevronDown size={24} className="text-white" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
