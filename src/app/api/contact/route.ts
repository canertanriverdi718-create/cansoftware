import { NextRequest, NextResponse } from 'next/server'

// Rate limiting için basit in-memory store
const rateLimit = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 dakika
const MAX_REQUESTS = 5 // 1 dakikada max 5 istek

// Input validation
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim()
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimit.get(ip)

  if (!record) {
    rateLimit.set(ip, { count: 1, timestamp: now })
    return true
  }

  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, timestamp: now })
    return true
  }

  if (record.count >= MAX_REQUESTS) {
    return false
  }

  record.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // IP adresi al
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Rate limit kontrolü
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Çok fazla istek gönderdiniz. Lütfen bir dakika bekleyin.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tüm alanlar zorunludur.' },
        { status: 400 }
      )
    }

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'İsim 2-100 karakter arasında olmalıdır.' },
        { status: 400 }
      )
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz.' },
        { status: 400 }
      )
    }

    if (subject.length < 3 || subject.length > 200) {
      return NextResponse.json(
        { error: 'Konu 3-200 karakter arasında olmalıdır.' },
        { status: 400 }
      )
    }

    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Mesaj 10-5000 karakter arasında olmalıdır.' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    }

    // Web3Forms API'ye gönder
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY

    if (!web3formsKey) {
      console.error('WEB3FORMS_ACCESS_KEY tanımlı değil')
      return NextResponse.json(
        { error: 'Sunucu yapılandırma hatası.' },
        { status: 500 }
      )
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: web3formsKey,
        to_email: process.env.CONTACT_EMAIL || 'canert44@outlook.com',
        from_name: sanitizedData.name,
        from_email: sanitizedData.email,
        subject: `[CanSoftware] ${sanitizedData.subject}`,
        message: sanitizedData.message,
        botcheck: false,
      }),
    })

    const result = await response.json()

    if (response.ok && result.success) {
      return NextResponse.json(
        { success: true, message: 'Mesajınız başarıyla gönderildi!' },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: 'Mesaj gönderilemedi. Lütfen tekrar deneyin.' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    )
  }
}

// GET isteklerini reddet
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
