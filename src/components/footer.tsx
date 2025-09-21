import Link from "next/link";
import { Sparkles, Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerSections = [
  {
    title: "产品",
    links: [
      { name: "功能特性", href: "#features" },
      { name: "定价方案", href: "#pricing" },
      { name: "更新日志", href: "#changelog" },
      { name: "路线图", href: "#roadmap" },
    ],
  },
  {
    title: "开发者",
    links: [
      { name: "API 文档", href: "#api" },
      { name: "SDK", href: "#sdk" },
      { name: "开发指南", href: "#guides" },
      { name: "示例代码", href: "#examples" },
    ],
  },
  {
    title: "支持",
    links: [
      { name: "帮助中心", href: "#help" },
      { name: "社区论坛", href: "#community" },
      { name: "联系我们", href: "#contact" },
      { name: "状态页面", href: "#status" },
    ],
  },
  {
    title: "公司",
    links: [
      { name: "关于我们", href: "#about" },
      { name: "博客", href: "#blog" },
      { name: "招聘", href: "#careers" },
      { name: "隐私政策", href: "#privacy" },
    ],
  },
];

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#github" },
  { name: "Twitter", icon: Twitter, href: "#twitter" },
  { name: "LinkedIn", icon: Linkedin, href: "#linkedin" },
  { name: "Email", icon: Mail, href: "#email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900/50 backdrop-blur-xl border-t border-gray-800">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* 主要内容区域 */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* 品牌和描述 */}
            <div className="lg:col-span-1 space-y-6">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="relative">
                  <Sparkles className="h-8 w-8 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  <div className="absolute inset-0 h-8 w-8 bg-gray-300 blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                </div>
                <span className="text-xl font-bold text-white">
                  Future App 2025
                </span>
              </Link>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                构建未来，从今天开始。使用最新的Web技术创造令人惊叹的用户体验，让每个想法都能成为现实。
              </p>
              
              {/* 社交媒体链接 */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-800 hover:border-gray-600 transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5 text-gray-500 group-hover:text-gray-300 transition-colors duration-300" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 链接区域 */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerSections.map((section) => (
                  <div key={section.title} className="space-y-4">
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-gray-500 hover:text-gray-300 transition-colors duration-300 text-sm"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* 底部版权信息 */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Future App. 保留所有权利。使用{" "}
              <span className="text-gray-300">Next.js 15</span> +{" "}
              <span className="text-gray-300">React 19</span> +{" "}
              <span className="text-gray-300">Tailwind CSS 4</span> 构建
            </div>
            
            <div className="flex items-center space-x-1 text-gray-500 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>by developers for developers</span>
            </div>
          </div>
        </div>
      </div>

      {/* 底部渐变装饰 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/50 to-transparent" />
    </footer>
  );
}