"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TokenizedIPCard {
  id: number;
  contentCount: string;
  assetValue: string;
  currency: string;
}

const tokenizedIPCards: TokenizedIPCard[] = [
  { id: 1, contentCount: "20", assetValue: "125421", currency: "$" },
  { id: 2, contentCount: "20", assetValue: "125421", currency: "$" },
  { id: 3, contentCount: "20", assetValue: "125421", currency: "$" }
];

export function TokenizedIPSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* 标题 */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Tokenized IP
          </h2>
        </div>

        {/* 卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 前三张卡片 - Coming Soon */}
          {tokenizedIPCards.map((card) => (
            <Card
              key={card.id}
              className="bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              <CardContent className="p-6">
                {/* 内容区域 - 模糊背景 */}
                <div className="relative">
                  {/* 模糊的数据内容（背景层） */}
                  <div className="space-y-4 mb-6 filter blur-sm opacity-30">
                    {/* Number of Contents */}
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-baseline space-x-1">
                          <span className="text-2xl md:text-3xl font-bold text-white">
                            {card.contentCount}
                          </span>
                          <span className="text-gray-400 text-sm">•</span>
                        </div>
                        <div className="text-gray-400 text-xs mt-1">
                          Number of Contents
                        </div>
                      </div>
                    </div>

                    {/* Asset Value */}
                    <div>
                      <div className="flex items-baseline space-x-1">
                        <span className="text-2xl md:text-3xl font-bold text-white">
                          {card.assetValue}
                        </span>
                        <span className="text-gray-400 text-lg">{card.currency}</span>
                      </div>
                      <div className="text-gray-400 text-xs mt-1">
                        Asset Value
                      </div>
                    </div>
                  </div>

                  {/* 锁定图标 - 居中覆盖层 */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-800/70 backdrop-blur-sm rounded-xl">
                      <Image
                        src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/lockIcon.svg"
                        alt="Lock icon"
                        width={32}
                        height={32}
                        className="w-8 h-8 filter brightness-0 invert"
                      />
                    </div>
                  </div>
                </div>

                {/* Coming Soon */}
                <div className="text-center mt-4">
                  <div className="text-white font-semibold text-lg">
                    Coming Soon
                  </div>
                </div>

                {/* 悬浮效果遮罩 */}
                <div className="absolute inset-0 bg-gray-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardContent>
            </Card>
          ))}

          {/* 第四张卡片 - MORE */}
          <Card className="bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group flex items-center justify-center">
            <CardContent className="p-6 flex items-center justify-center h-full">
              <div className="text-center">
                <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">
                  MORE
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}