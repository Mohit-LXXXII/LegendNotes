export default function Features() {
  const features = [
    {
      icon: 'fa-cloud-upload-alt',
      title: 'Upload Notes',
      desc: 'Support for PDF, images, and text files. Upload your study materials in any format.',
      color: 'blue',
    },
    {
      icon: 'fa-question-circle',
      title: 'Auto MCQ Generator',
      desc: 'Automatically generate multiple-choice questions from your notes for better retention.',
      color: 'purple',
    },
    {
      icon: 'fa-lightbulb',
      title: 'Smart Summaries',
      desc: 'AI-powered summaries extract key concepts and important points instantly.',
      color: 'yellow',
    },
    {
      icon: 'fa-cards',
      title: 'Flashcards',
      desc: 'Create interactive flashcards automatically to reinforce learning and memory.',
      color: 'pink',
    },
    {
      icon: 'fa-chart-line',
      title: 'Progress Tracking',
      desc: 'Monitor your learning progress with detailed analytics and performance metrics.',
      color: 'green',
    },
    {
      icon: 'fa-sparkles',
      title: 'AI-Powered Insights',
      desc: 'Get personalized recommendations based on your learning patterns and weak areas.',
      color: 'cyan',
    },
  ]

  const colorMap = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    yellow: 'from-yellow-500 to-yellow-600',
    pink: 'from-pink-500 to-pink-600',
    green: 'from-green-500 to-green-600',
    cyan: 'from-cyan-500 to-cyan-600',
  }

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to transform your learning experience with AI-powered tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="card-feature animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${colorMap[feature.color]} rounded-lg flex items-center justify-center mb-4 shadow-lg flex-shrink-0`}>
                <i className={`fas ${feature.icon} text-white text-xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 truncate">{feature.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
