import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function DataBridgePage() {
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
                DataBridge
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                Seamlessly connect and synchronize data across multiple platforms and ecosystems. 
                Bridge the gap between different data sources with our intelligent integration platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105">
                  Get Started
                </button>
                <button className="px-8 py-3 border border-gray-600 rounded-xl font-semibold text-gray-300 hover:bg-gray-800 transition-all duration-300">
                  View Documentation
                </button>
              </div>
            </section>

            {/* Data Flow Visualization */}
            <section className="py-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                Data Flow Architecture
              </h2>
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  {/* Source Systems */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-center text-white mb-6">Source Systems</h3>
                    {[
                      { name: "Database", icon: "🗄️" },
                      { name: "APIs", icon: "🔌" },
                      { name: "Cloud Storage", icon: "☁️" },
                      { name: "IoT Devices", icon: "📡" }
                    ].map((source, index) => (
                      <div
                        key={index}
                        className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-center hover:border-gray-600 transition-colors"
                      >
                        <div className="text-3xl mb-2">{source.icon}</div>
                        <div className="text-gray-300">{source.name}</div>
                      </div>
                    ))}
                  </div>

                  {/* DataBridge Center */}
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-600 rounded-xl p-8 relative">
                      <div className="text-6xl mb-4">🌉</div>
                      <h3 className="text-2xl font-bold text-white mb-4">DataBridge</h3>
                      <p className="text-gray-400 text-sm">
                        Intelligent data processing, transformation, and routing hub
                      </p>
                      
                      {/* Animated arrows */}
                      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                        <div className="text-gray-500 text-2xl animate-pulse">←</div>
                      </div>
                      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                        <div className="text-gray-500 text-2xl animate-pulse">→</div>
                      </div>
                    </div>
                  </div>

                  {/* Target Systems */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-center text-white mb-6">Target Systems</h3>
                    {[
                      { name: "Analytics", icon: "📊" },
                      { name: "Machine Learning", icon: "🤖" },
                      { name: "Data Warehouse", icon: "🏢" },
                      { name: "Applications", icon: "📱" }
                    ].map((target, index) => (
                      <div
                        key={index}
                        className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-center hover:border-gray-600 transition-colors"
                      >
                        <div className="text-3xl mb-2">{target.icon}</div>
                        <div className="text-gray-300">{target.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="py-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Real-time Sync",
                    description: "Instant data synchronization across all connected systems",
                    icon: "⚡"
                  },
                  {
                    title: "Data Transformation",
                    description: "Advanced ETL capabilities with custom transformation rules",
                    icon: "🔄"
                  },
                  {
                    title: "Monitoring & Alerts",
                    description: "Comprehensive monitoring with intelligent alerting system",
                    icon: "📈"
                  },
                  {
                    title: "Security & Compliance",
                    description: "Enterprise-grade security with full compliance support",
                    icon: "🔒"
                  },
                  {
                    title: "Scalable Architecture",
                    description: "Auto-scaling infrastructure that grows with your needs",
                    icon: "📡"
                  },
                  {
                    title: "API Gateway",
                    description: "Unified API layer for seamless data access and management",
                    icon: "🚪"
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

            {/* Stats */}
            <section className="py-20 bg-gray-900/30 backdrop-blur-sm border-y border-gray-800 rounded-xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Trusted by Leading Organizations
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: "Data Sources Connected", value: "10,000+" },
                  { label: "Records Processed Daily", value: "500M+" },
                  { label: "Uptime Guarantee", value: "99.99%" },
                  { label: "Enterprise Clients", value: "2,500+" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {stat.label}
                    </div>
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