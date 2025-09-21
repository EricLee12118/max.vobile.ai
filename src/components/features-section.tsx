"use client";

import { useState, useEffect } from "react";
import { Bot, Zap, Cloud, Rocket, Code, Palette, Database, Shield, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  badge: string;
  details: string[];
}

const features: Feature[] = [
  {
    id: 1,
    title: "AI 驱动开发",
    description: "利用最新的AI技术提升开发效率和代码质量，智能代码补全和自动化测试",
    icon: Bot,
    gradient: "from-gray-600 to-gray-400",
    badge: "HOT",
    details: ["智能代码生成", "自动化测试", "代码质量分析", "性能优化建议"]
  },
  {
    id: 2,
    title: "极速性能",
    description: "采用最新的Next.js 15架构，配合Turbopack实现毫秒级的开发体验",
    icon: Zap,
    gradient: "from-gray-500 to-gray-300",
    badge: "NEW",
    details: ["Turbopack 构建", "边缘渲染", "增量静态生成", "智能预加载"]
  },
  {
    id: 3,
    title: "云原生架构",
    description: "无服务器计算和边缘计算的完美结合，全球CDN加速访问",
    icon: Cloud,
    gradient: "from-gray-700 to-gray-500",
    badge: "STABLE",
    details: ["边缘函数", "全球CDN", "自动扩缩容", "零冷启动"]
  },
  {
    id: 4,
    title: "现代化UI",
    description: "基于Radix UI和Tailwind CSS 4的现代化组件系统，支持深色模式",
    icon: Palette,
    gradient: "from-gray-600 to-gray-400",
    badge: "POPULAR",
    details: ["组件库", "深色模式", "响应式设计", "无障碍支持"]
  },
  {
    id: 5,
    title: "开发者体验",
    description: "TypeScript原生支持，热重载，智能错误提示，提升开发效率",
    icon: Code,
    gradient: "from-gray-500 to-gray-300",
    badge: "DX",
    details: ["TypeScript", "热重载", "错误边界", "开发工具"]
  },
  {
    id: 6,
    title: "数据管理",
    description: "支持多种数据库，内置ORM，实时数据同步和缓存策略",
    icon: Database,
    gradient: "from-gray-700 to-gray-500",
    badge: "FULL",
    details: ["多数据库", "ORM集成", "实时同步", "智能缓存"]
  },
  {
    id: 7,
    title: "安全保障",
    description: "企业级安全标准，内置身份验证，数据加密和访问控制",
    icon: Shield,
    gradient: "from-gray-600 to-gray-400",
    badge: "SECURE",
    details: ["身份验证", "数据加密", "访问控制", "安全审计"]
  },
  {
    id: 8,
    title: "快速部署",
    description: "一键部署到Vercel、Netlify或自定义云平台，CI/CD自动化流程",
    icon: Rocket,
    gradient: "from-gray-500 to-gray-300",
    badge: "EASY",
    details: ["一键部署", "CI/CD", "环境管理", "监控告警"]
  }
];

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="features" className="py-24 relative bg-black">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/10 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* 标题区域 */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 border-gray-600 text-gray-300">
            核心功能
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            2025 年技术亮点
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            探索前沿技术栈，体验未来开发方式。每个功能都经过精心设计，为开发者提供最佳的开发体验。
          </p>
        </div>

        {/* 功能卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.id}
                className={`group relative bg-gray-900/50 backdrop-blur-sm border-gray-700 hover:border-gray-600 transition-all duration-500 hover:scale-105 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={`bg-gradient-to-r ${feature.gradient} text-white border-0 text-xs`}
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-white group-hover:text-gray-200 transition-colors text-lg">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-400 leading-relaxed mb-4">
                    {feature.description}
                  </CardDescription>
                  
                  {/* 功能详情列表 */}
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient} mr-2 flex-shrink-0`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                {/* 悬浮效果 */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300`} />
              </Card>
            );
          })}
        </div>

        {/* 底部CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            还有更多强大功能等待你去探索
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105">
              查看所有功能
            </button>
            <button className="px-8 py-3 border border-gray-600 rounded-xl font-semibold text-gray-300 hover:bg-gray-800 transition-all duration-300">
              技术文档
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}