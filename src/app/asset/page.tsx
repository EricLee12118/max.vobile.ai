import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function CreatorPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-grid-animated opacity-30" />
      
      {/* 主要内容 */}
      <div className="relative z-10">
        <Header />
        
        <main className="pt-20 pb-20">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Hero Section */}
            <section className="py-20 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Creator Platform
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                Empower your creativity with our advanced creator tools. Build, design, and innovate with cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105">
                  Start Creating
                </button>
                <button className="px-8 py-3 border border-gray-600 rounded-xl font-semibold text-gray-300 hover:bg-gray-800 transition-all duration-300">
                  View Templates
                </button>
              </div>
            </section>

            {/* Features Grid */}
            <section className="py-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                Creator Tools
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Design Studio",
                    description: "Professional design tools for creating stunning visuals",
                    icon: "🎨"
                  },
                  {
                    title: "Code Editor",
                    description: "Advanced code editor with syntax highlighting and auto-completion",
                    icon: "💻"
                  },
                  {
                    title: "Asset Library",
                    description: "Extensive library of assets, templates, and resources",
                    icon: "📚"
                  },
                  {
                    title: "Collaboration",
                    description: "Real-time collaboration tools for team projects",
                    icon: "👥"
                  },
                  {
                    title: "Publishing",
                    description: "One-click publishing to multiple platforms",
                    icon: "🚀"
                  },
                  {
                    title: "Analytics",
                    description: "Detailed analytics and performance insights",
                    icon: "📊"
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
      
      <ScrollToTop />
    </div>
  );
}