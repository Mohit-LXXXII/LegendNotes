export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
              Turn your notes into <span className="gradient-text">mastery</span>
            </h1>
            <p className="text-lg text-gray-300 mb-2">
              AI-powered note analysis that transforms your study sessions into mastery.
            </p>
            <p className="text-base text-gray-400">
              Upload your notes, generate MCQs, create summaries, and track your progress—all powered by advanced AI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-primary">
              <i className="fas fa-rocket mr-2"></i>Get Started
            </button>
            <button className="btn-secondary">
              <i className="fas fa-cloud-upload-alt mr-2"></i>Upload Notes
            </button>
          </div>
        </div>

        <div className="relative flex justify-center animate-float">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 gradient-blue rounded-3xl opacity-20 blur-3xl"></div>
            <div className="glass rounded-3xl p-8 border border-blue-500/30 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 p-4 glass rounded-lg border border-blue-500/20">
                  <i className="fas fa-file-pdf text-2xl text-blue-400"></i>
                  <div>
                    <p className="text-xs text-gray-400">Upload</p>
                    <p className="text-sm font-semibold text-white">PDF, Image, Text</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 glass rounded-lg border border-blue-500/20">
                  <i className="fas fa-brain text-2xl text-cyan-400"></i>
                  <div>
                    <p className="text-xs text-gray-400">AI Analyzes</p>
                    <p className="text-sm font-semibold text-white">Smart Processing</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 glass rounded-lg border border-blue-500/20">
                  <i className="fas fa-graduation-cap text-2xl text-green-400"></i>
                  <div>
                    <p className="text-xs text-gray-400">You Learn</p>
                    <p className="text-sm font-semibold text-white">Master Your Topics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
