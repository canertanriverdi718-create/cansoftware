'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Tag, User, Share2 } from 'lucide-react'
import Link from 'next/link'

const blogPosts: { [key: string]: {
  id: number
  title: string
  excerpt: string
  content: string[]
  category: string
  date: string
  readTime: string
  gradient: string
  author: string
}} = {
  '1': {
    id: 1,
    title: 'Next.js 14 ile Modern Web Uygulamaları',
    excerpt: 'Next.js 14\'ün yeni özellikleri ve App Router ile nasıl daha performanslı web uygulamaları geliştirebileceğinizi keşfedin.',
    content: [
      'Next.js 14, web geliştirme dünyasında devrim niteliğinde yenilikler getirdi. App Router ile birlikte gelen yeni özellikler, geliştiricilere daha hızlı ve daha verimli uygulamalar oluşturma imkanı sunuyor.',
      'Server Components sayesinde, sunucu tarafında render edilen bileşenler ile client-side JavaScript yükünü önemli ölçüde azaltabilirsiniz. Bu, özellikle büyük ölçekli uygulamalarda performans açısından büyük farklar yaratıyor.',
      'Streaming ve Suspense desteği ile kullanıcılarınıza daha hızlı bir deneyim sunabilirsiniz. Sayfa yüklenirken içerikler kademeli olarak gösterilir, böylece kullanıcılar beklemek zorunda kalmaz.',
      'Metadata API ile SEO optimizasyonu artık çok daha kolay. Her sayfa için dinamik olarak meta taglar oluşturabilir, Open Graph ve Twitter Card desteği ekleyebilirsiniz.',
    ],
    category: 'Web Dev',
    date: '28 Aralık 2025',
    readTime: '8 dk',
    gradient: 'from-accent-cyan to-blue-500',
    author: 'Caner Tanrıverdi',
  },
  '2': {
    id: 2,
    title: 'React State Yönetimi Best Practices',
    excerpt: 'React uygulamalarında state yönetimini optimize etmek için kullanabileceğiniz modern yöntemler.',
    content: [
      'React uygulamalarında state yönetimi, uygulamanızın performansı ve sürdürülebilirliği açısından kritik öneme sahiptir. Doğru yaklaşımı seçmek, kod kalitenizi önemli ölçüde artırır.',
      'useState ve useReducer hook\'ları, basit ve orta karmaşıklıktaki state yönetimi için mükemmel çözümler sunar. Ancak uygulamanız büyüdükçe, daha sofistike çözümlere ihtiyaç duyabilirsiniz.',
      'Context API, prop drilling sorununu çözmek için harika bir araçtır. Ancak sık güncellenen state\'ler için performans sorunlarına yol açabilir. Bu durumda, state\'i daha küçük context\'lere bölmek iyi bir stratejidir.',
      'Zustand, Jotai ve Recoil gibi modern state yönetim kütüphaneleri, Redux\'ın karmaşıklığı olmadan güçlü state yönetimi çözümleri sunar. Projenizin ihtiyaçlarına göre doğru aracı seçmek önemlidir.',
    ],
    category: 'React',
    date: '22 Aralık 2025',
    readTime: '6 dk',
    gradient: 'from-blue-500 to-accent-purple',
    author: 'Caner Tanrıverdi',
  },
  '3': {
    id: 3,
    title: 'TypeScript ile Tip Güvenli Kod',
    excerpt: 'TypeScript\'in güçlü tip sistemini kullanarak daha güvenli ve sürdürülebilir kod yazmanın yolları.',
    content: [
      'TypeScript, JavaScript\'e statik tip kontrolü ekleyerek daha güvenli ve sürdürülebilir kod yazmanızı sağlar. Büyük projelerde hataları erkenden yakalamak için vazgeçilmez bir araçtır.',
      'Generic tipler, yeniden kullanılabilir ve tip-güvenli bileşenler oluşturmanızı sağlar. Array, Promise ve custom utility tipleri için generic\'leri etkin şekilde kullanmak kod kalitenizi artırır.',
      'Type narrowing ve type guards kullanarak, runtime\'da tip kontrolü yapabilir ve TypeScript\'in akıllı tip çıkarımından faydalanabilirsiniz. Bu, özellikle union tipler ile çalışırken önemlidir.',
      'Utility tipler (Partial, Required, Pick, Omit vb.) ile mevcut tiplerden yeni tipler türetebilirsiniz. Bu, kod tekrarını azaltır ve tip tanımlamalarınızı daha DRY (Don\'t Repeat Yourself) hale getirir.',
    ],
    category: 'TypeScript',
    date: '15 Aralık 2025',
    readTime: '10 dk',
    gradient: 'from-accent-purple to-accent-pink',
    author: 'Caner Tanrıverdi',
  },
  '4': {
    id: 4,
    title: 'Tailwind CSS Modern UI Tasarımları',
    excerpt: 'Tailwind CSS kullanarak responsive ve modern arayüzler tasarlamanın püf noktaları.',
    content: [
      'Tailwind CSS, utility-first yaklaşımı ile modern web tasarımını demokratikleştirdi. Artık karmaşık CSS dosyaları yazmadan, doğrudan HTML üzerinde şık tasarımlar oluşturabilirsiniz.',
      'Responsive tasarım, Tailwind\'in güçlü breakpoint sistemi ile çok kolay. sm, md, lg, xl ve 2xl prefix\'leri ile her ekran boyutu için özel stiller tanımlayabilirsiniz.',
      'Dark mode desteği, dark: prefix\'i ile tek satırda eklenebilir. Kullanıcılarınıza karanlık tema seçeneği sunmak artık sadece birkaç class eklemek kadar basit.',
      'Custom theme yapılandırması ile markanızın renklerini, fontlarını ve spacing değerlerini Tailwind\'e entegre edebilirsiniz. tailwind.config.js dosyası üzerinden tüm tasarım sistemini özelleştirebilirsiniz.',
    ],
    category: 'CSS',
    date: '10 Aralık 2025',
    readTime: '5 dk',
    gradient: 'from-teal-500 to-accent-cyan',
    author: 'Caner Tanrıverdi',
  },
}

export default function BlogDetailClient({ id }: { id: string }) {
  const post = blogPosts[id]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
          <p className="text-gray-400 mb-8">Blog yazısı bulunamadı.</p>
          <Link href="/#blog" className="text-accent-cyan hover:underline">
            ← Geri Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Blog&apos;a Geri Dön
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${post.gradient} text-white text-sm font-medium`}>
              <Tag size={14} />
              {post.category}
            </span>
            <span className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-2 text-gray-400 text-sm">
              <Clock size={14} />
              {post.readTime} okuma
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
              <User size={24} className="text-white" />
            </div>
            <div>
              <p className="text-white font-medium">{post.author}</p>
              <p className="text-gray-500 text-sm">Full Stack Developer</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-auto p-3 rounded-full glass border border-white/10 hover:border-accent-cyan/30 transition-colors"
            >
              <Share2 size={18} className="text-gray-400" />
            </motion.button>
          </div>
        </motion.div>

        <div className={`h-1 rounded-full bg-gradient-to-r ${post.gradient} mb-12`} />

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          {post.content.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-gray-300 leading-relaxed mb-6 text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link 
              href="/#blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/10 hover:border-accent-cyan/30 text-white transition-all group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Diğer Yazılar
            </Link>
            <Link 
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-medium hover:shadow-glow-md transition-all"
            >
              İletişime Geç
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
