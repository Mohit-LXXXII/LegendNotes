'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import WhyLegendNotes from '@/components/WhyLegendNotes'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import SplashScreen from '@/components/SplashScreen'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
      {showSplash && <SplashScreen />}
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <WhyLegendNotes />
      <Testimonials />
      <Footer />
    </main>
  )
}
