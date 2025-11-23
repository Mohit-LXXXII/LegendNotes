export default function WhyLegendNotes() {
  const reasons = [
    {
      title: 'Lightning Fast',
      desc: 'Process your notes in seconds with our optimized AI algorithms.',
      icon: 'fa-bolt',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Highly Accurate',
      desc: 'AI-powered analysis ensures precise MCQs, summaries, and insights.',
      icon: 'fa-bullseye',
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'Boost Productivity',
      desc: 'Save hours of manual work and focus on what matters—learning.',
      icon: 'fa-rocket',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Easy to Use',
      desc: 'Intuitive interface designed for students. No technical skills required.',
      icon: 'fa-hand-holding-heart',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Always Available',
      desc: 'Access your notes and learning materials anytime, anywhere.',
      icon: 'fa-globe',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Affordable',
      desc: 'Premium features at student-friendly pricing. No hidden costs.',
      icon: 'fa-dollar-sign',
      color: 'from-teal-500 to-blue-500',
    },
  ]

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why <span className="gradient-text">LegendNotes?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Designed for students who want to study smarter, not harder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all hover-lift animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${reason.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <i className={`fas ${reason.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-gray-400 text-sm">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <button className="btn-primary">
            <i className="fas fa-star mr-2"></i>Start Your Journey Now
          </button>
        </div>
      </div>
    </section>
  )
}
