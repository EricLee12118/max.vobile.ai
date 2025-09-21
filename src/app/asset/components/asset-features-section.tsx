"use client";

import Image from "next/image";

export function AssetFeaturesSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Transform Creativity into Enduring Value
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto">
              <Image
                src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/asset1.png"
                alt="Transform Creativity Visual"
                width={500}
                height={500}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-12">
            {/* Feature 1 */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                1. AI-Powered Content Analysis
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Advanced algorithms evaluate content relevance, optimize for trends, and predict market demand—ensuring every piece aligns with audience and commercial goals.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                2. AI-Driven Rights Registration
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Automatically verify ownership, screen compliance, and secure rights via digital fingerprinting and real-time infringement detection—eliminating disputes and delays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}