'use client'

import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-slate-900 to-blue-950 flex items-center justify-center z-50 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="animate-fade-in-scale mb-6">
          <div className="w-24 h-24 mx-auto gradient-blue rounded-full flex items-center justify-center shadow-2xl">
            <i className="fas fa-book-open text-slate-900 text-4xl"></i>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white animate-fade-in mt-4">LegendNotes</h1>
        <p className="text-blue-300 text-sm mt-2 animate-fade-in">Turn your notes into mastery</p>
      </div>
    </div>
  )
}
