import './globals.css'
import { AuthProvider } from '@/context/AuthContext'

export const metadata = {
  title: 'LegendNotes - Turn Your Notes Into Mastery',
  description: 'AI-powered note analysis platform. Upload, analyze, and master your notes with smart MCQs, summaries, and flashcards.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </head>
      <body className="bg-slate-900">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
