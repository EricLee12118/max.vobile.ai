"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function DataOverviewSection() {
  return (
    <section id="data-overview" className="py-24 relative bg-black">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* 标题 */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Data Overview
          </h2>
        </div>

        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧数据可视化图像 */}
          <div className="lg:col-span-2">
            <Card className="bg-black transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-center">
                  <Image
                    src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/maskImage.png"
                    alt="Data visualization"
                    width={600}
                    height={400}
                    className="w-full h-auto max-w-2xl"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右侧统计数据 */}
          <div className="flex flex-col h-full space-y-8">
            {/* Total Assets Under Management */}
            <Card className="bg-black transition-all duration-300 flex-1 relative overflow-hidden">
              {/* 背景图片 */}
              <div className="absolute inset-0">
                <Image
                  src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/statCardBg1.png"
                  alt="Statistics background"
                  fill
                  className="object-cover opacity-30"
                />
              </div>
              <CardContent className="p-8 relative z-10 h-full flex flex-col justify-start">
                <div className="space-y-6 pt-4">
                  <div className="text-white text-xl md:text-2xl font-medium">
                    Total Assets Under Management
                  </div>
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                    1509 K
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Total Tokenized Assets */}
            <Card className="bg-black transition-all duration-300 flex-1 relative overflow-hidden">
              {/* 背景图片 */}
              <div className="absolute inset-0">
                <Image
                  src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/statCardBg2.png"
                  alt="Statistics background"
                  fill
                  className="object-cover opacity-30"
                />
              </div>
              <CardContent className="p-8 relative z-10 h-full flex flex-col justify-start">
                <div className="space-y-6 pt-4">
                  <div className="text-white text-xl md:text-2xl font-medium">
                    Total Tokenized Assets
                  </div>
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                    TO COME
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}