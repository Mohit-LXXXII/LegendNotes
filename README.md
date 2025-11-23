# LegendNotes Landing Page

A modern, premium landing page for the LegendNotes AI-powered note analysis platform built with Next.js 14, React, and Tailwind CSS.

## Features

- ✨ Modern blue-themed UI with glassmorphism effects
- 🎨 Smooth animations and gradient effects
- 📱 Fully responsive design (mobile-first)
- ⚡ Next.js 14 App Router (Fast)
- 🎯 Beautiful sections: Hero, Features, How It Works, Why Us, Testimonials, Footer
- 🌙 Dark theme optimized for premium feel
- 🎭 Splash screen with logo animation

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
LegendNotes/
├── app/
│   ├── layout.js              # Root layout with metadata
│   ├── page.js                # Main landing page component
│   └── globals.css            # Global styles and animations
├── components/
│   ├── Navbar.js              # Navigation bar
│   ├── Hero.js                # Hero section
│   ├── Features.js            # Features showcase
│   ├── HowItWorks.js          # 3-step workflow
│   ├── WhyLegendNotes.js      # Benefits section
│   ├── Testimonials.js        # Student testimonials
│   ├── Footer.js              # Footer
│   └── SplashScreen.js        # Intro animation
├── package.json
├── next.config.js
├── tailwind.config.cjs
├── postcss.config.cjs
└── README.md
```

## Technologies

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Icons**: Font Awesome 6
- **Language**: JavaScript

## Customization

### Colors
Edit `tailwind.config.cjs` to change the color palette.

### Content
Modify individual component files in `/components` to update text and features.

### Animations
Check `app/globals.css` for custom animations and effects.

## Performance

- Optimized for fast load times
- Lazy-loaded components with Next.js
- CSS animations for smooth transitions
- Responsive images and icons

## Browser Support

Works on all modern browsers including Chrome, Firefox, Safari, and Edge.

---

Built with ❤️ for students everywhere.
