'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()

  return (
    <nav className="fixed w-full top-0 z-40 glass border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-blue rounded-lg flex items-center justify-center shadow-lg">
              <i className="fas fa-book-open text-slate-900 text-lg"></i>
            </div>
            <span className="text-xl font-bold gradient-text">LegendNotes</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {['Features', 'How It Works', 'Why Us', 'Testimonials'].map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {item}
              </a>
            ))}
          </div>

          {isAuthenticated ? (
            <div className="hidden md:flex space-x-3 items-center">
              <div className="w-8 h-8 gradient-blue rounded-full flex items-center justify-center text-sm font-bold text-slate-900">
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <span className="text-gray-300 text-sm">{user?.name}</span>
              <button
                onClick={logout}
                className="px-4 py-2 border border-red-500 text-red-400 rounded-lg hover:bg-red-500/10 transition-all text-sm font-medium"
              >
                <i className="fas fa-sign-out-alt mr-1"></i>
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex gap-4 items-center">
              <Link href="/signin" className="px-6 py-2 text-blue-400 border-2 border-blue-400 rounded-lg hover:bg-blue-400 hover:text-slate-900 transition-all text-sm font-semibold">
                Sign In
              </Link>
              <Link href="/signup" className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                Get Started
              </Link>
            </div>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-blue-400 p-2"
          >
            <i className={`fas fa-${mobileMenuOpen ? 'times' : 'bars'} text-xl`}></i>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-blue-500/20 py-4 space-y-3">
            {['Features', 'How It Works', 'Why Us', 'Testimonials'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium px-4 py-2"
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col space-y-2 px-4">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center space-x-2 px-2 py-2">
                    <div className="w-8 h-8 gradient-blue rounded-full flex items-center justify-center text-sm font-bold text-slate-900">
                      {user?.name?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <span className="text-gray-300 text-sm">{user?.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      logout()
                      setMobileMenuOpen(false)
                    }}
                    className="w-full px-4 py-2 border border-red-500 text-red-400 rounded-lg hover:bg-red-500/10 transition-all text-sm font-medium"
                  >
                    <i className="fas fa-sign-out-alt mr-1"></i>
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className="w-full px-4 py-2 text-blue-400 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-slate-900 transition-all text-sm font-medium text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <i className="fas fa-sign-in-alt mr-1"></i>
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="w-full btn-primary text-sm py-2 text-center block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <i className="fas fa-user-plus mr-1"></i>
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
