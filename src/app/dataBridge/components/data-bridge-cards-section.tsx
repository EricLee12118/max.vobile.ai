'use client'

import Image from "next/image";

export function DataBridgeCardsSection() {
  return (
    <section className="min-h-screen bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* GenAI Platforms Card */}
        <div className="group relative h-full bg-black border-r border-b border-gray-800 flex flex-col justify-center items-center p-12 cursor-pointer overflow-hidden">
          <div className="text-center space-y-6 z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              GenAI Platforms
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto mb-8">
              Connect to content creation AI platforms
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
              Contact US
            </button>
          </div>
          
          {/* Hover Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
            <Image 
              src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/dataBridge1.svg"
              alt="GenAI Platforms"
              fill
              className="object-cover mix-blend-overlay"
            />
          </div>
        </div>

        {/* Content Management Card */}
        <div className="group relative h-full bg-black border-b border-gray-800 flex flex-col justify-center items-center p-12 cursor-pointer overflow-hidden">
          <div className="text-center space-y-6 z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Content Management
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto mb-8">
              Become an eligible partner for content management and marketing
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
              Contact US
            </button>
          </div>
          
          {/* Hover Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
            <Image 
              src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/dataBridge1.svg"
              alt="Content Management"
              fill
              className="object-cover mix-blend-overlay"
            />
          </div>
        </div>

        {/* Developer Card */}
        <div className="group relative h-full bg-black border-r border-gray-800 flex flex-col justify-center items-center p-12 cursor-pointer overflow-hidden">
          <div className="text-center space-y-6 z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Developer
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto mb-8">
              Provide APIs, SDKs, primitives, and tools for seamless integrations with your systems
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
              Contact US
            </button>
          </div>
          
          {/* Hover Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
            <Image 
              src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/dataBridge1.svg"
              alt="Developer"
              fill
              className="object-cover mix-blend-overlay"
            />
          </div>
        </div>

        {/* Other Service Partner Card */}
        <div className="group relative h-full bg-black flex flex-col justify-center items-center p-12 cursor-pointer overflow-hidden">
          <div className="text-center space-y-6 z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Other Service Partner
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto mb-8">
              Become a solution provider in our ecosystem
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
              Contact US
            </button>
          </div>
          
          {/* Hover Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
            <Image 
              src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/dataBridge1.svg"
              alt="Other Service Partner"
              fill
              className="object-cover mix-blend-overlay"
            />
          </div>
        </div>
      </div>
    </section>
  );
}