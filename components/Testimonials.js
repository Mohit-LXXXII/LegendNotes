export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Medical Student',
      avatar: 'S',
      quote: 'LegendNotes has been a game-changer for my studies. I can now cover more material in less time.',
      rating: 5,
    },
    {
      name: 'Raj Patel',
      role: 'Engineering Student',
      avatar: 'R',
      quote: 'The MCQ generator is incredibly accurate. It helps me prepare for exams much more effectively.',
      rating: 5,
    },
    {
      name: 'Emma Wilson',
      role: 'Law Student',
      avatar: 'E',
      quote: 'I love how the app summarizes complex concepts. My notes are now more organized and useful.',
      rating: 5,
    },
    {
      name: 'Ali Hassan',
      role: 'Computer Science Student',
      avatar: 'A',
      quote: 'The flashcard feature combined with progress tracking keeps me motivated throughout my studies.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Loved by <span className="gradient-text">Students</span>
          </h2>
          <p className="text-gray-400 text-lg">See what students are saying about LegendNotes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all animate-fade-in-up hover-lift"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400"></i>
                ))}
              </div>
              <p className="text-gray-300 mb-6 text-base italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 gradient-blue rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
