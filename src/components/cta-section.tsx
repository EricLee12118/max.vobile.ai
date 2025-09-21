"use client";

import { ArrowRight, Download, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 via-gray-800/20 to-gray-900/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* 主标题 */}
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 mb-8">
            <Sparkles className="h-5 w-5 text-gray-300" />
            <span className="text-white font-medium">准备好开始了吗？</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">
              让我们一起
            </span>
            <br />
            <span className="text-gray-200">
              构建未来
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            加入数万名开发者的行列，使用最先进的技术栈创建下一个令人惊叹的应用程序。
            免费开始，随时升级。
          </p>
          
          {/* CTA 按钮组 */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 border-0 shadow-xl transition-all duration-300 hover:scale-105 group text-lg px-10 py-6"
            >
              <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
              免费开始使用
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-600 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 text-white hover:text-white border-2 text-lg px-10 py-6 group"
            >
              <Code className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              查看源代码
            </Button>
          </div>
          
          {/* 特色标签 */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" />
              <span>免费使用</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" />
              <span>开源项目</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" />
              <span>社区支持</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse" />
              <span>持续更新</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 底部装饰线 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent" />
    </section>
  );
}