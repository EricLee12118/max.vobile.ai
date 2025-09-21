"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play, Star, Users, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(2025);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-800/20" />
      
      {/* 浮动装饰元素 */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse" style={{ animationDelay: '4s' }} />

      <div className="relative container mx-auto px-4 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* 标题前的小标签 */}
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-8">
            <Star className="h-4 w-4 text-gray-300" />
            <span className="text-sm text-gray-300">全新 {currentYear} 版本发布</span>
          </div>

          {/* 主标题 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">
              构建未来的
            </span>
            <br />
            <span className="text-gray-200">
              Web 应用
            </span>
          </h1>

          {/* 副标题 */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            体验下一代Web开发技术，使用最新的{" "}
            <span className="text-gray-200 font-semibold">Next.js 15</span>、{" "}
            <span className="text-gray-200 font-semibold">React 19</span> 和{" "}
            <span className="text-gray-200 font-semibold">Tailwind CSS 4</span>{" "}
            构建令人惊叹的用户体验
          </p>

          {/* CTA 按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 border-0 shadow-lg transition-all duration-300 hover:scale-105 group text-lg px-8 py-6"
            >
              开始探索
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-600 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 text-white hover:text-white text-lg px-8 py-6 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              观看演示
            </Button>
          </div>

          {/* 统计数据 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="group">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Users className="h-6 w-6 text-gray-300" />
                <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  100K+
                </div>
              </div>
              <div className="text-gray-400 text-sm">活跃开发者</div>
            </div>
            
            <div className="group">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Zap className="h-6 w-6 text-gray-300" />
                <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  99.9%
                </div>
              </div>
              <div className="text-gray-400 text-sm">正常运行时间</div>
            </div>
            
            <div className="group">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Shield className="h-6 w-6 text-gray-300" />
                <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  企业级
                </div>
              </div>
              <div className="text-gray-400 text-sm">安全保障</div>
            </div>
          </div>
        </div>
      </div>

      {/* 滚动指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}