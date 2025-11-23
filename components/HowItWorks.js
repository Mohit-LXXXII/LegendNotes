export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Upload Your Notes',
      desc: 'Simply upload your study materials in PDF, image, or text format. Our system processes them instantly.',
      icon: 'fa-cloud-upload-alt',
    },
    {
      number: '02',
      title: 'AI Analysis',
      desc: 'Our advanced AI analyzes your notes, extracts key concepts, and identifies important patterns.',
      icon: 'fa-microchip',
    },
    {
      number: '03',
      title: 'Learn & Master',
      desc: 'Access generated MCQs, summaries, and flashcards. Track your progress and improve your understanding.',
      icon: 'fa-graduation-cap',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-600/5 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-400 text-lg">Three simple steps to transform your learning journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-20"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative animate-fade-in-up" style={{ animationDelay: `${idx * 0.2}s` }}>
              <div className="glass rounded-2xl p-8 border border-blue-500/20 h-full">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 gradient-blue rounded-full flex items-center justify-center shadow-lg mx-auto relative z-10">
                    <i className={`fas ${step.icon} text-white text-2xl`}></i>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-slate-900 border-2 border-blue-500 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-blue-400 font-bold text-sm">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center">{step.title}</h3>
                <p className="text-gray-400 text-center">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
