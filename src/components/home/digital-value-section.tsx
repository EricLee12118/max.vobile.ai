"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTypedTranslation } from "@/hooks/useTranslation";

interface DigitalValueStage {
  id: number;
  titleKey: 'digitalValue.creationTitle' | 'digitalValue.registrationTitle' | 'digitalValue.tradingTitle';
  descriptionKey: 'digitalValue.creationDescription' | 'digitalValue.registrationDescription' | 'digitalValue.tradingDescription';
  image: string;
  alt: string;
}

const digitalValueStages: DigitalValueStage[] = [
  {
    id: 1,
    titleKey: 'digitalValue.creationTitle',
    descriptionKey: 'digitalValue.creationDescription',
    image: "https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/Creation.svg",
    alt: "Creation"
  },
  {
    id: 2,
    titleKey: 'digitalValue.registrationTitle',
    descriptionKey: 'digitalValue.registrationDescription',
    image: "https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/Registration&Monetization.svg",
    alt: "Registration & Monetization"
  },
  {
    id: 3,
    titleKey: 'digitalValue.tradingTitle',
    descriptionKey: 'digitalValue.tradingDescription',
    image: "https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/Trading.svg",
    alt: "Trading"
  }
];

export function DigitalValueSection() {
  const { t } = useTypedTranslation();
  
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl text-left md:text-4xl lg:text-5xl font-bold text-white mb-8">
            {t('digitalValue.title')}
          </h2>
        </div>

        {/* 功能卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {digitalValueStages.map((stage) => (
            <Card 
              key={stage.id} 
              className="bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-8 text-center space-y-6">
                {/* 图标 */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src={stage.image}
                      alt={stage.alt}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    />
                  </div>
                </div>
                
                {/* 内容区域 */}
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">
                    {t(stage.titleKey)}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {t(stage.descriptionKey)}
                  </p>
                </div>
                
                {/* Learn more 按钮 */}
                <div className="pt-4">
                  <Button 
                    variant="secondary"
                    className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-all duration-300 group-hover:scale-105"
                  >
                    {t('digitalValue.learnMore')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}