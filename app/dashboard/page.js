'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'

export default function Dashboard() {
  const router = useRouter()
  const { user, loading, logout, isAuthenticated } = useAuth()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/signin')
    }
  }, [loading, isAuthenticated, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-950 flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-4xl text-blue-400 mb-4"></i>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900">
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-40 glass border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-blue rounded-lg flex items-center justify-center">
                <i className="fas fa-book-open text-slate-900 text-lg"></i>
              </div>
              <span className="text-xl font-bold gradient-text">LegendNotes</span>
            </Link>

            <div className="flex items-center space-x-4">
              <span className="text-gray-300 text-sm">Welcome, {user?.name || 'User'}</span>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
              >
                <i className="fas fa-sign-out-alt mr-2"></i>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="glass rounded-2xl p-8 border border-blue-500/20 mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome back, <span className="gradient-text">{user?.name}!</span>
            </h1>
            <p className="text-gray-400 mb-6">
              You're all set. Let's start transforming your learning journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="card-feature p-6 hover-lift">
                <i className="fas fa-cloud-upload-alt text-2xl text-blue-400 mb-3"></i>
                <h3 className="text-lg font-bold text-white mb-2">Upload Notes</h3>
                <p className="text-sm text-gray-400">Start by uploading your study materials</p>
              </button>
              <button className="card-feature p-6 hover-lift">
                <i className="fas fa-question-circle text-2xl text-purple-400 mb-3"></i>
                <h3 className="text-lg font-bold text-white mb-2">Generate MCQs</h3>
                <p className="text-sm text-gray-400">Create practice questions automatically</p>
              </button>
              <button className="card-feature p-6 hover-lift">
                <i className="fas fa-chart-line text-2xl text-green-400 mb-3"></i>
                <h3 className="text-lg font-bold text-white mb-2">Track Progress</h3>
                <p className="text-sm text-gray-400">Monitor your learning analytics</p>
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Documents', value: '0', icon: 'fa-file-pdf', color: 'red' },
              { label: 'MCQs Generated', value: '0', icon: 'fa-question', color: 'blue' },
              { label: 'Learning Hours', value: '0h', icon: 'fa-clock', color: 'purple' },
              { label: 'Accuracy', value: '0%', icon: 'fa-bullseye', color: 'green' },
            ].map((stat, idx) => (
              <div key={idx} className="glass rounded-2xl p-6 border border-blue-500/20 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-2xl text-${stat.color}-400`}>
                    <i className={`fas ${stat.icon}`}></i>
                  </div>
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="glass rounded-2xl p-8 border border-blue-500/20 animate-fade-in">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
            <div className="text-center py-12">
              <i className="fas fa-inbox text-4xl text-gray-600 mb-4"></i>
              <p className="text-gray-400">No activity yet. Start by uploading your first document!</p>
              <button className="btn-primary mt-4">
                <i className="fas fa-cloud-upload-alt mr-2"></i>
                Upload Your First Document
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
