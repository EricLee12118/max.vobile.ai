"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { HeroSection } from "@/components/hero-section";
import { AssetFeaturesSection, AssetOwnershipSection, AssetCardsSection } from "./components";

export default function AssetPage() {
  // const { t } = useTypedTranslation(); // 暂时注释掉未使用的翻译功能
  return (
    <div className="min-h-screen bg-black text-white">

      {/* 主要内容 */}
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section with Custom Content */}
        <HeroSection 
          videoSrc="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/asset.mp4"
        />
        
        {/* Asset Features Section */}
        <main>
          <AssetFeaturesSection />
          <AssetOwnershipSection />
          <AssetCardsSection />
        </main>
        
        <Footer />
      </div>
      
      <ScrollToTop />
    </div>
  );
}