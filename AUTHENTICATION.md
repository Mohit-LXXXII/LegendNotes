# LegendNotes Authentication System Documentation

## 📋 Table of Contents
- [Overview](#overview)
- [Authentication Flow](#authentication-flow)
- [Components & Files](#components--files)
- [Features](#features)
- [User Data Structure](#user-data-structure)
- [How to Use](#how-to-use)
- [Testing](#testing)
- [Security Considerations](#security-considerations)
- [Future Enhancements](#future-enhancements)

---

## 🎯 Overview

LegendNotes includes a complete authentication system with:
- **User Registration** (Sign Up)
- **User Login** (Sign In)
- **Session Management** (Logout)
- **Protected Routes** (Dashboard)
- **User Context** (Global auth state)
- **Local Storage** (Persistent sessions)

### Tech Stack
- **Next.js 14** — Server & client-side routing
- **React 18** — UI components & state management
- **Context API** — Global authentication state
- **localStorage** — Client-side persistence

---

## 🔄 Authentication Flow

```
┌─────────────────────────────────────────────────────────┐
│                    LegendNotes App                      │
└─────────────────────────────────────────────────────────┘
                         │
                         ▼
        ┌─────────────────────────────────────┐
        │      AuthProvider (Context)         │
        │  Manages user state & auth methods  │
        └─────────────────────────────────────┘
                         │
                 ┌───────┴───────┐
                 ▼               ▼
          ┌──────────────┐  ┌──────────────┐
          │  Sign Up     │  │  Sign In     │
          │  Page        │  │  Page        │
          └──────┬───────┘  └──────┬───────┘
                 │                 │
                 └────────┬────────┘
                          ▼
                  ┌──────────────────┐
                  │ AuthContext.js   │
                  │ - signup()       │
                  │ - signin()       │
                  │ - logout()       │
                  └────────┬─────────┘
                           │
                           ▼
                  ┌──────────────────┐
                  │   localStorage   │
                  │ Store user data  │
                  └──────────────────┘
                           │
                           ▼
                  ┌──────────────────┐
                  │   Dashboard      │
                  │ (Protected route)│
                  └──────────────────┘
```

### Step-by-Step Flow

1. **User visits Sign Up page** → `/signup`
2. **Enters details** → Name, Email, Password
3. **Click "Create Account"** → Validation triggers
4. **signup() called** → AuthContext method
5. **User stored in localStorage** → 'legendnotes_user'
6. **AuthProvider updates state** → Sets user & isAuthenticated
7. **Redirect to Dashboard** → `/dashboard`
8. **Dashboard checks auth** → Verifies user exists
9. **Shows user dashboard** → Personalized experience

---

## 📁 Components & Files

### 1. **context/AuthContext.js** (Core)
Manages all authentication logic.

```javascript
AuthProvider
├── signup(email, password, name)
├── signin(email, password)
└── logout()

useAuth() hook for component access
```

**Responsibilities:**
- User state management
- Sign up validation
- Sign in validation
- Logout functionality
- localStorage persistence
- Auto-load on page reload

---

### 2. **app/signup/page.js** (Sign Up Page)
User registration page.

**Features:**
- Full name input
- Email input
- Password input
- Confirm password input
- Form validation
- Error messages
- Success feedback
- Link to Sign In page
- Social auth placeholders
- Back to home link

---

### 3. **app/signin/page.js** (Sign In Page)
User login page.

**Features:**
- Email input
- Password input
- Show/hide password toggle
- "Remember me" checkbox
- Forgot password link
- Demo account button
- Social auth options
- Link to Sign Up page
- Back to home link

---

### 4. **app/dashboard/page.js** (Dashboard)
Protected user dashboard.

**Features:**
- Auth check (redirects if not logged in)
- Welcome message with user name
- User profile avatar
- Quick action cards
- Stats display (documents, MCQs, hours, accuracy)
- Recent activity section
- Logout button

---

### 5. **components/Navbar.js** (Updated)
Navigation bar now shows auth status.

**Changes:**
- Shows "Sign In" & "Get Started" when logged out
- Shows user avatar & logout button when logged in
- Responsive mobile menu

---

### 6. **app/layout.js** (Root Layout)
Updated to wrap entire app with AuthProvider.

```javascript
<AuthProvider>
  {children}
</AuthProvider>
```

---

## ✨ Features

### Sign Up
- ✅ Full name validation
- ✅ Email format validation
- ✅ Password strength requirement (6+ chars)
- ✅ Password confirmation matching
- ✅ Duplicate email prevention
- ✅ Secure password encoding (base64)
- ✅ User ID generation
- ✅ Timestamp recording
- ✅ Auto-login after signup
- ✅ Error message display

### Sign In
- ✅ Email/password matching
- ✅ Case-sensitive authentication
- ✅ Remember me option
- ✅ Demo account support
- ✅ Show/hide password toggle
- ✅ Error handling
- ✅ Loading states
- ✅ Session persistence

### Dashboard
- ✅ Protected route
- ✅ Auto-redirect if not authenticated
- ✅ User profile display
- ✅ Loading state
- ✅ Logout functionality
- ✅ Quick action cards
- ✅ Statistics display
- ✅ Recent activity section

---

## 👤 User Data Structure

### User Object (in localStorage)
```javascript
{
  id: "1234567890",                    // Unique timestamp ID
  email: "user@example.com",           // User email
  name: "John Doe",                    // Full name
  createdAt: "2025-11-23T10:30:00Z"   // ISO timestamp
}
```

### All Users Storage (legendnotes_users)
```javascript
[
  {
    id: "1234567890",
    email: "user@example.com",
    name: "John Doe",
    password: "ZGVtbzEyMw==",  // base64 encoded
    createdAt: "2025-11-23T10:30:00Z"
  },
  // ... more users
]
```

### Current User Storage (legendnotes_user)
The currently logged-in user is stored here for quick access.

---

## 🚀 How to Use

### Sign Up Flow
1. Click "Get Started" button on homepage
2. Enter full name, email, password
3. Confirm password
4. Click "Create Account"
5. Auto-redirected to dashboard

### Sign In Flow
1. Click "Sign In" button on navbar
2. Enter email & password
3. (Optional) Check "Remember me"
4. Click "Sign In"
5. Redirected to dashboard

### Demo Account
1. Go to Sign In page
2. Click "Try Demo Account" button
3. Auto-fills demo credentials
4. Logs in automatically

### In Your Components
```javascript
import { useAuth } from '@/context/AuthContext'

export default function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <>
      {isAuthenticated ? (
        <>
          <p>Welcome {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please sign in to continue</p>
      )}
    </>
  )
}
```

### Protected Route
```javascript
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'

export default function ProtectedPage() {
  const router = useRouter()
  const { user, loading, isAuthenticated } = useAuth()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/signin')
    }
  }, [loading, isAuthenticated, router])

  if (loading) return <div>Loading...</div>

  return <div>Protected content for {user?.name}</div>
}
```

---

## 🧪 Testing

### Test Cases

#### 1. **Sign Up - Success**
- Input: valid name, email, password
- Expected: User created, redirected to dashboard

#### 2. **Sign Up - Missing Fields**
- Input: empty fields
- Expected: Error message shown

#### 3. **Sign Up - Short Password**
- Input: password < 6 chars
- Expected: Error message "Password must be at least 6 characters"

#### 4. **Sign Up - Password Mismatch**
- Input: password ≠ confirm password
- Expected: Error message "Passwords do not match"

#### 5. **Sign Up - Duplicate Email**
- Input: email already exists
- Expected: Error message "User already exists with this email"

#### 6. **Sign In - Success**
- Input: valid email & password
- Expected: User logged in, redirected to dashboard

#### 7. **Sign In - Invalid Credentials**
- Input: wrong password
- Expected: Error message "Invalid email or password"

#### 8. **Sign In - Demo Account**
- Action: Click "Try Demo Account"
- Expected: Logs in with demo@example.com, shows dashboard

#### 9. **Logout**
- Action: Click logout button
- Expected: User logged out, redirected to home

#### 10. **Session Persistence**
- Action: Sign in, refresh page
- Expected: User still logged in (from localStorage)

### Manual Testing Steps

```bash
# 1. Open app at http://localhost:3000

# 2. Test Sign Up
- Click "Get Started"
- Fill form with: name, email, password
- Click "Create Account"
- Verify dashboard shows

# 3. Test Sign Out
- Click logout button
- Verify redirected to home

# 4. Test Sign In
- Click "Sign In"
- Enter credentials
- Click "Sign In"
- Verify dashboard shows

# 5. Test Remember Me
- Check "Remember me"
- Sign in
- Check localStorage in DevTools

# 6. Test Demo Account
- Click "Try Demo Account"
- Verify logs in and shows dashboard
```

---

## 🔒 Security Considerations

### Current Implementation
⚠️ **For Development Only** — Uses basic base64 encoding

### Production Recommendations

#### 1. **Replace base64 with bcrypt**
```javascript
import bcrypt from 'bcryptjs'

// During signup
const hashedPassword = await bcrypt.hash(password, 10)

// During signin
const isValid = await bcrypt.compare(password, hashedPassword)
```

#### 2. **Use a Real Database**
```javascript
// Instead of localStorage
import { db } from '@/lib/firebase'
await db.collection('users').add(userData)
```

#### 3. **Add JWT Authentication**
```javascript
import jwt from 'jsonwebtoken'

const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)
```

#### 4. **Environment Variables**
```env
NEXT_PUBLIC_API_URL=https://api.legendnotes.com
JWT_SECRET=your-secret-key
DB_CONNECTION=mongodb://...
```

#### 5. **HTTPS Only**
- Never send credentials over HTTP
- Use HTTPS in production

#### 6. **Input Validation**
```javascript
// Validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if (!emailRegex.test(email)) throw new Error('Invalid email')

// Validate password strength
const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
```

#### 7. **Rate Limiting**
- Limit sign up attempts per IP
- Limit sign in attempts per email
- Implement CAPTCHA

#### 8. **Audit Logging**
- Log all auth events
- Track failed login attempts
- Monitor suspicious activity

---

## 🚀 Future Enhancements

### Short Term
- [ ] Forgot password functionality
- [ ] Email verification
- [ ] Multi-factor authentication (2FA)
- [ ] Social auth (Google, GitHub, Facebook)
- [ ] Profile editing page
- [ ] Avatar upload

### Medium Term
- [ ] JWT tokens
- [ ] Refresh token rotation
- [ ] Session expiration
- [ ] Activity history
- [ ] Device management
- [ ] Login notifications

### Long Term
- [ ] OAuth2 integration
- [ ] LDAP/AD support
- [ ] SSO implementation
- [ ] API key management
- [ ] Role-based access control (RBAC)
- [ ] Advanced security features

---

## 📊 Database Schema (When Ready)

```sql
-- Users Table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  avatar_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE
);

-- Sessions Table
CREATE TABLE sessions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  token VARCHAR(255),
  expires_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Audit Log
CREATE TABLE audit_logs (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  action VARCHAR(100),
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🔗 API Integration Example

```javascript
// When ready to use real backend

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function signup(email, password, name) {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, name })
  })
  
  if (!response.ok) throw new Error('Signup failed')
  return await response.json()
}

export async function signin(email, password) {
  const response = await fetch(`${API_URL}/auth/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  
  if (!response.ok) throw new Error('Signin failed')
  const { token, user } = await response.json()
  localStorage.setItem('token', token)
  return user
}
```

---

## 📚 Useful Resources

- [Next.js Authentication Docs](https://nextjs.org/docs/authentication)
- [React Context API](https://react.dev/reference/react/useContext)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [bcryptjs Library](https://www.npmjs.com/package/bcryptjs)
- [JWT Guide](https://jwt.io/)

---

**Last Updated:** November 23, 2025  
**Status:** ✅ Development Ready

For production deployment, implement the security recommendations before going live!
