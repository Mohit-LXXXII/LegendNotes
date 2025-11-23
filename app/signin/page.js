'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { signin } = useAuth()
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const validateForm = () => {
    if (!formData.email.includes('@')) {
      setError('Valid email is required')
      return false
    }
    if (!formData.password) {
      setError('Password is required')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!validateForm()) return

    setLoading(true)
    try {
      signin(formData.email, formData.password)
      router.push('/dashboard')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const demoLogin = () => {
    setFormData({ email: 'demo@example.com', password: 'demo123' })
    // Pre-fill for demo
    setTimeout(() => {
      setLoading(true)
      try {
        signin('demo@example.com', 'demo123')
        router.push('/dashboard')
      } catch (err) {
        // Create demo account if not exists
        const users = JSON.parse(localStorage.getItem('legendnotes_users') || '[]')
        if (!users.some((u) => u.email === 'demo@example.com')) {
          const newUser = {
            id: Date.now().toString(),
            email: 'demo@example.com',
            name: 'Demo User',
            password: btoa('demo123'),
            createdAt: new Date().toISOString(),
          }
          users.push(newUser)
          localStorage.setItem('legendnotes_users', JSON.stringify(users))
        }
        // Try signing in again
        signin('demo@example.com', 'demo123')
        router.push('/dashboard')
      } finally {
        setLoading(false)
      }
    }, 300)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 gradient-blue rounded-lg flex items-center justify-center">
            <i className="fas fa-book-open text-slate-900 text-lg"></i>
          </div>
          <span className="text-2xl font-bold gradient-text">LegendNotes</span>
        </Link>

        {/* Card */}
        <div className="glass rounded-2xl p-8 border border-blue-500/20">
          <h1 className="text-3xl font-bold text-white mb-2 text-center">Welcome Back</h1>
          <p className="text-gray-400 text-center mb-6">Sign in to your LegendNotes account</p>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-4 text-sm">
              <i className="fas fa-exclamation-circle mr-2"></i>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-slate-800 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-slate-800 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  <i className={`fas fa-${showPassword ? 'eye-slash' : 'eye'}`}></i>
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded" />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-400">
                Remember me
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Signing In...
                </>
              ) : (
                <>
                  <i className="fas fa-sign-in-alt mr-2"></i>
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Demo Login */}
          <button
            onClick={demoLogin}
            disabled={loading}
            className="w-full mt-3 px-4 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all disabled:opacity-50"
          >
            <i className="fas fa-user-secret mr-2"></i>
            Try Demo Account
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-blue-500/20"></div>
            <span className="px-3 text-gray-400 text-sm">No account yet?</span>
            <div className="flex-1 h-px bg-blue-500/20"></div>
          </div>

          {/* Sign Up Link */}
          <Link href="/signup" className="block text-center btn-secondary py-3">
            <i className="fas fa-user-plus mr-2"></i>
            Create Account
          </Link>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
            <i className="fas fa-arrow-left mr-1"></i>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
