"use client";

import Image from "next/image";
import { useTypedTranslation } from "@/hooks/useTranslation";

export function EcosystemSection() {
  const { t } = useTypedTranslation();
  
  const ecosystemFeatures = [
    {
      id: 1,
      titleKey: 'ecosystem.challengeTitle' as const,
      descriptionKey: 'ecosystem.challengeDescription' as const,
      icon: "https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/FeatureHighlightIcon.svg"
    },
    {
      id: 2,
      titleKey: 'ecosystem.solutionTitle' as const,
      descriptionKey: 'ecosystem.solutionDescription' as const,
      icon: "https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/FeatureHighlightIcon.svg"
    },
    {
      id: 3,
      titleKey: 'ecosystem.ecosystemTitle' as const,
      descriptionKey: 'ecosystem.ecosystemDescription' as const,
      icon: "https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/FeatureHighlightIcon.svg"
    }
  ];
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* 标题 */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            {t('ecosystem.title')}
          </h2>
        </div>

        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左侧视频区域 */}
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
                  src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/homepage3.mp4" 
                  type="video/mp4" 
                />
              </video>
            </div>
          </div>

          {/* 右侧功能列表 */}
          <div className="space-y-12">
            {ecosystemFeatures.map((feature) => (
              <div key={feature.id} className="flex items-start space-x-6 group">
                {/* 图标 */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-800/50 rounded-lg group-hover:bg-gray-700/50 transition-all duration-300">
                    <Image
                      src={feature.icon}
                      alt="Feature icon"
                      width={24}
                      height={24}
                      className="w-6 h-6 filter brightness-0 invert"
                    />
                  </div>
                </div>
                
                {/* 内容 */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {t(feature.descriptionKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}