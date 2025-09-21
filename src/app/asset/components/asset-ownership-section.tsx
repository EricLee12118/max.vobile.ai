"use client";

export function AssetOwnershipSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <div className="space-y-12">
            {/* Feature 1 - Ownership Clarity */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                1. Ownership Clarity
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Blockchain-backed transparency ensures indisputable rights tracking, global compliance, and protection against unauthorized use or duplication.
              </p>
            </div>

            {/* Feature 2 - Scalable Revenue */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                2. Scalable Revenue
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Fractionalize assets, automate multi-platform distribution, and tap into innovative digital economies to unlock earnings at scale—maximizing value for every creation.
              </p>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className="relative">
            <div className="aspect-square max-w-lg mx-auto">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover rounded-lg"
              >
                <source 
                  src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/asset2.mp4" 
                  type="video/mp4" 
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}