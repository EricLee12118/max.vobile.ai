import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function AssetPage() {
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
                Meta Asset Hub
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                Discover, manage, and trade digital assets in the metaverse. Your gateway to the digital economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105">
                  Explore Assets
                </button>
                <button className="px-8 py-3 border border-gray-600 rounded-xl font-semibold text-gray-300 hover:bg-gray-800 transition-all duration-300">
                  Create Asset
                </button>
              </div>
            </section>

            {/* Asset Categories */}
            <section className="py-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                Asset Categories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "NFT Collections",
                    description: "Unique digital collectibles and artwork",
                    icon: "🎭",
                    count: "12.5K+"
                  },
                  {
                    title: "3D Models",
                    description: "High-quality 3D assets for virtual worlds",
                    icon: "🏗️",
                    count: "8.3K+"
                  },
                  {
                    title: "Virtual Land",
                    description: "Plots and properties in virtual environments",
                    icon: "🏞️",
                    count: "3.2K+"
                  },
                  {
                    title: "Digital Wearables",
                    description: "Fashion and accessories for avatars",
                    icon: "👔",
                    count: "15.7K+"
                  }
                ].map((category, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {category.description}
                    </p>
                    <div className="text-gray-300 font-semibold">
                      {category.count} assets
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Assets */}
            <section className="py-20">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
                Featured Assets
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Cyber City Building",
                    price: "2.5 ETH",
                    category: "3D Model",
                    creator: "DigitalArchitect"
                  },
                  {
                    name: "Neon Avatar Suit",
                    price: "0.8 ETH",
                    category: "Wearable",
                    creator: "StyleMaster"
                  },
                  {
                    name: "Abstract Art #001",
                    price: "1.2 ETH",
                    category: "NFT",
                    creator: "ArtistDAO"
                  }
                ].map((asset, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                      <div className="text-6xl opacity-50">🖼️</div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {asset.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        by {asset.creator}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">
                          {asset.category}
                        </span>
                        <span className="text-white font-semibold">
                          {asset.price}
                        </span>
                      </div>
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