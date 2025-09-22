"use client";

import { useTypedTranslation } from "@/hooks/useTranslation";

interface HeroSectionProps {
  videoSrc?: string;
  customTitle?: string;
  customSubtitle?: string;
  useTranslation?: boolean;
}

export function HeroSection({ 
  videoSrc = "https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/homepage2.mp4",
  customTitle,
  customSubtitle,
  useTranslation = true
}: HeroSectionProps = {}) {
  const { t } = useTypedTranslation();  

  const getContent = () => {
    if (!useTranslation) {
      return {
        title: customTitle || t('hero.title'),
        subtitle: customSubtitle || t('hero.subtitle')
      };
    }
    
    // 根据路由使用不同的翻译键或自定义内容
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      
      if (pathname === '/asset') {
        return {
          title: customTitle || t('assetPage.heroTitle'),
          subtitle: customSubtitle || t('assetPage.heroSubtitle')
        };
      } else if (pathname === '/dataBridge') {
        return {
          title: customTitle || t('dataBridgePage.heroTitle'),
          subtitle: customSubtitle || t('dataBridgePage.heroSubtitle')
        };
      }
    }
    
    // 默认使用主页翻译
    return {
      title: customTitle || t('hero.title'),
      subtitle: customSubtitle || t('hero.subtitle')
    };
  };
  
  const content = getContent();
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
        style = {{
          transform: "scale(-1, 1)"
        }}
      >
        <source 
          src={videoSrc} 
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
            {content.title}
            </span>
          </div>
          
          {/* 副标题 */}
          {content.subtitle && (
            <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200">
              {content.subtitle}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}