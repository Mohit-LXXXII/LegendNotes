'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('legendnotes_user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error('Failed to parse user data:', error)
        localStorage.removeItem('legendnotes_user')
      }
    }
    setLoading(false)
  }, [])

  const signup = (email, password, name) => {
    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem('legendnotes_users') || '[]')
    if (existingUsers.some((u) => u.email === email)) {
      throw new Error('User already exists with this email')
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      email,
      name,
      password: btoa(password), // Simple base64 encoding (not secure for production)
      createdAt: new Date().toISOString(),
    }

    // Save to users database
    existingUsers.push(newUser)
    localStorage.setItem('legendnotes_users', JSON.stringify(existingUsers))

    // Log in user
    const { password: _, ...userWithoutPassword } = newUser
    setUser(userWithoutPassword)
    localStorage.setItem('legendnotes_user', JSON.stringify(userWithoutPassword))

    return userWithoutPassword
  }

  const signin = (email, password) => {
    const users = JSON.parse(localStorage.getItem('legendnotes_users') || '[]')
    const foundUser = users.find((u) => u.email === email && u.password === btoa(password))

    if (!foundUser) {
      throw new Error('Invalid email or password')
    }

    const { password: _, ...userWithoutPassword } = foundUser
    setUser(userWithoutPassword)
    localStorage.setItem('legendnotes_user', JSON.stringify(userWithoutPassword))

    return userWithoutPassword
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('legendnotes_user')
  }

  return (
    <AuthContext.Provider value={{ user, loading, signup, signin, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
