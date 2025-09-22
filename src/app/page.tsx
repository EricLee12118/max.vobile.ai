import dynamic from "next/dynamic";
import {
  Header,
  Footer,
  ScrollToTop,
  HeroSection,
} from "@/components";

// 懒加载非关键组件提升初始加载性能
const DataOverviewSection = dynamic(() => 
  import("@/components").then(mod => ({ default: mod.DataOverviewSection })),
  { ssr: true }
);
const DigitalValueSection = dynamic(() => 
  import("@/components").then(mod => ({ default: mod.DigitalValueSection })),
  { ssr: true }
);
const EcosystemSection = dynamic(() => 
  import("@/components").then(mod => ({ default: mod.EcosystemSection })),
  { ssr: true }
);
const TokenizedIPSection = dynamic(() => 
  import("@/components").then(mod => ({ default: mod.TokenizedIPSection })),
  { ssr: true }
);

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

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
