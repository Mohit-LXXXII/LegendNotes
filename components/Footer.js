export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-blue-500/20 glass py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0s' }}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-blue rounded-lg flex items-center justify-center">
                <i className="fas fa-book-open text-slate-900 text-lg"></i>
              </div>
              <span className="text-xl font-bold gradient-text">LegendNotes</span>
            </div>
            <p className="text-gray-400 text-sm">Turn your notes into mastery with AI-powered learning.</p>
          </div>

          {/* Product */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Security', 'Updates'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              {[
                { icon: 'fa-twitter', label: 'Twitter' },
                { icon: 'fa-github', label: 'GitHub' },
                { icon: 'fa-linkedin', label: 'LinkedIn' },
                { icon: 'fa-instagram', label: 'Instagram' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-full glass border border-blue-500/20 flex items-center justify-center text-blue-400 hover:border-blue-500/50 hover:text-cyan-400 transition-all"
                  title={social.label}
                >
                  <i className={`fas ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-500/20 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {year} LegendNotes. All rights reserved. Made with <i className="fas fa-heart text-red-500 mx-1"></i> for students.
          </p>
          <div className="flex space-x-6">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
