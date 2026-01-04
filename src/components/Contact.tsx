'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Phone, MapPin, Mail, Send, CheckCircle, MessageCircle, Sparkles } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+90 553 239 6891',
    href: 'tel:+905532396891',
    color: 'from-emerald-400 to-green-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    icon: MapPin,
    label: 'Konum',
    value: 'Ankara / Yenimahalle',
    href: 'https://maps.google.com/?q=Yenimahalle,Ankara',
    color: 'from-accent-cyan to-blue-500',
    bgColor: 'bg-accent-cyan/10',
  },
  {
    icon: Mail,
    label: 'E-posta',
    value: 'canert44@outlook.com',
    href: 'mailto:canert44@outlook.com',
    color: 'from-accent-purple to-pink-500',
    bgColor: 'bg-accent-purple/10',
  },
]


export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Client-side validation
    if (formState.name.length < 2) {
      setError('İsim en az 2 karakter olmalıdır.')
      setIsLoading(false)
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formState.email)) {
      setError('Geçerli bir e-posta adresi giriniz.')
      setIsLoading(false)
      return
    }

    if (formState.subject.length < 3) {
      setError('Konu en az 3 karakter olmalıdır.')
      setIsLoading(false)
      return
    }

    if (formState.message.length < 10) {
      setError('Mesaj en az 10 karakter olmalıdır.')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setIsSubmitted(true)
        setFormState({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        setError(data.error || 'Mesaj gönderilemedi. Lütfen tekrar deneyin.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setError('Bağlantı hatası. Lütfen tekrar deneyin.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-16 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
      <div className="absolute top-[5%] left-[0%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-accent-cyan/25 sm:bg-accent-cyan/[0.03] rounded-full blur-[80px] sm:blur-[200px]" />
      <div className="absolute bottom-[5%] right-[0%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-accent-purple/25 sm:bg-accent-purple/[0.03] rounded-full blur-[80px] sm:blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={ref} className="text-center mb-10 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-cyan/20 mb-6"
          >
            <MessageCircle size={16} className="text-accent-cyan" />
            <span className="text-accent-cyan font-medium text-sm">Hadi Konuşalım</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Projenizi <span className="text-gradient">Hayata Geçirelim</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Fikirlerinizi dinlemek ve size en uygun çözümü sunmak için sabırsızlanıyorum. 
            Hemen iletişime geçin, 24 saat içinde size dönüş yapayım.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact Info Cards - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.label === 'Konum' ? '_blank' : undefined}
                rel={info.label === 'Konum' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="group block relative overflow-hidden"
              >
                <div className="relative glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`relative w-12 h-12 rounded-xl ${info.bgColor} flex items-center justify-center`}>
                      <info.icon size={22} className={`bg-gradient-to-br ${info.color} bg-clip-text text-transparent`} style={{ color: info.color.includes('emerald') ? '#34d399' : info.color.includes('cyan') ? '#00d4ff' : '#a855f7' }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{info.label}</p>
                      <p className="text-base font-semibold text-white group-hover:text-accent-cyan transition-colors">
                        {info.value}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Sparkles size={16} className="text-accent-cyan" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Quick Response Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border border-accent-cyan/20"
            >
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <p className="text-sm text-gray-300">
                <span className="text-white font-medium">Ortalama yanıt süresi:</span> 2 saat içinde
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 relative"
          >
            <div className="relative">
              {/* Form Container */}
              <div className="glass-strong rounded-3xl p-8 border border-white/5">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Mesaj Gönderin</h3>
                  <p className="text-gray-400 text-sm">Formu doldurun, size en kısa sürede dönüş yapayım.</p>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-dark-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300"
                        placeholder="Caner Tanrıverdi"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        E-posta Adresiniz
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-dark-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Konu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-dark-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300"
                      placeholder="Web Sitesi Projesi"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3.5 rounded-xl bg-dark-800/50 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan/50 focus:ring-2 focus:ring-accent-cyan/20 transition-all duration-300 resize-none"
                      placeholder="Projeniz hakkında detaylı bilgi verin..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitted || isLoading}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-all duration-500 ${
                      isSubmitted
                        ? 'bg-green-500 text-white'
                        : 'bg-gradient-to-r from-accent-cyan via-primary-500 to-accent-purple text-white shadow-glow-md hover:shadow-glow-lg'
                    }`}
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle size={20} />
                        Mesajınız Gönderildi!
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Mesaj Gönder
                      </>
                    )}
                  </motion.button>
                </form>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-cyan/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-purple/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
