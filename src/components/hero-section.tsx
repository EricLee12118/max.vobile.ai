"use client";

export function HeroSection() {
  return (
    /* 主视觉区域 */
    <section className="relative min-h-[80vh] flex items-center justify-end overflow-hidden">
      {/* 背景视频 */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source 
          src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/homepage2.mp4" 
          type="video/mp4" 
        />
      </video>
      
      {/* 视频遮罩层 */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      {/* 内容区域 */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 flex justify-start">
        <div className="text-left max-w-2xl">
          {/* 主标题 */}
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">
            Making Creative More Valuable™
            </span>
          </div>
          
          {/* 副标题 */}
          <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200">
            Power the Future of the Creative Economy
          </div>
        </div>
      </div>
    </section>
  );
}