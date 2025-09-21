'use client'

import Image from "next/image";

export function AssetCardsSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* VALUABLE Card */}
          <div className="group relative">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 pt-20 transition-all duration-500 group-hover:scale-105 group-hover:bg-gray-800/70">
              <div className="text-center space-y-6">
                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                  VALUABLE
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Transform creativity into tradable assets with streamlined monetization and ownership proof
                </p>
              </div>
            </div>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110">
              <Image 
                src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/valuable.svg" 
                alt="Valuable" 
                width={80} 
                height={80} 
                className="w-20 h-20"
              />
            </div>
          </div>

          {/* CREATIVE Card */}
          <div className="group relative">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 pt-20 transition-all duration-500 group-hover:scale-105 group-hover:bg-gray-800/70">
              <div className="text-center space-y-6">
                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
                  CREATIVE
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Unlock new possibilities through innovative blockchain technology and creative asset tokenization
                </p>
              </div>
            </div>
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110">
              <Image 
                src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/creative.svg" 
                alt="Creative" 
                width={80} 
                height={80} 
                className="w-20 h-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}