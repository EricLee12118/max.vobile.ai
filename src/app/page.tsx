import {
  Header,
  Footer,
  ScrollToTop,
  HeroSection,
  DataOverviewSection,
  DigitalValueSection,
  EcosystemSection,
  TokenizedIPSection,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] bg-grid-animated opacity-30" />
      
      {/* 主要内容 */}
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <main>
          <DataOverviewSection />
          <DigitalValueSection />
          <EcosystemSection />
          <TokenizedIPSection />
        </main>
        
        <Footer />
      </div>
      
      {/* 回到顶部按钮 */}
      <ScrollToTop />
    </div>
  );
}
