# Can-Software - Personal Software Services Website

An ultra-premium, highly professional personal software services website built with **Next.js 14 (App Router)**.

## Features

- 🎨 **Modern Design** - Glassmorphism, depth layering, and advanced motion effects
- ⚡ **High Performance** - Optimized Next.js architecture
- 📱 **Fully Responsive** - Mobile-first design for all devices
- 🎭 **Advanced Animations** - Smooth scroll-triggered animations with Framer Motion
- 🌐 **SEO Optimized** - Meta tags, semantic HTML, and best practices
- 🎯 **Professional UI/UX** - High contrast colors, vivid gradients, and premium feel

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter font family
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles with Tailwind
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/
│   ├── Navbar.tsx       # Glassmorphism navigation
│   ├── Hero.tsx         # Animated hero section with particles
│   ├── About.tsx        # About section with stats
│   ├── Experience.tsx   # Portfolio/projects grid
│   ├── Testimonials.tsx # Auto-sliding testimonials
│   ├── Contact.tsx      # Contact form and info cards
│   └── Footer.tsx       # Footer with social links
```

## Sections

1. **Hero** - Full-screen animated header with particle effects and CTAs
2. **About** - Personal introduction with animated statistics
3. **Experience** - Project portfolio with hover effects
4. **Testimonials** - Auto-sliding customer reviews
5. **Contact** - Contact form with glassmorphism cards
6. **Footer** - Social links and newsletter signup

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
- `primary` - Main brand colors
- `accent.cyan` - Highlight color
- `accent.purple` - Secondary accent
- `dark` - Background shades

### Content
Update content in individual component files in `src/components/`.

## Build for Production

```bash
npm run build
npm start
```

## License

© 2024 Can-Software. All rights reserved.
