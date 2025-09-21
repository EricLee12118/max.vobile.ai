"use client";

import { useState, useEffect, useRef } from "react";
import { TrendingUp, Globe, Users, Star, type LucideIcon } from "lucide-react";

interface Stat {
  id: number;
  icon: LucideIcon;
  value: string;
  label: string;
  gradient: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    id: 1,
    icon: Users,
    value: "100",
    suffix: "K+",
    label: "活跃开发者",
    gradient: "from-gray-600 to-gray-400"
  },
  {
    id: 2,
    icon: TrendingUp,
    value: "99.9",
    suffix: "%",
    label: "正常运行时间",
    gradient: "from-gray-500 to-gray-300"
  },
  {
    id: 3,
    icon: Globe,
    value: "180",
    suffix: "+",
    label: "国家和地区",
    gradient: "from-gray-700 to-gray-500"
  },
  {
    id: 4,
    icon: Star,
    value: "4.9",
    suffix: "/5",
    label: "用户评分",
    gradient: "from-gray-600 to-gray-400"
  }
];

function AnimatedNumber({ value, suffix = "", duration = 2000 }: { value: string; suffix?: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) return;

    let startTime: number;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // 使用缓动函数
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (numericValue - startValue) * easedProgress;

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  const formatValue = (val: number) => {
    if (suffix === "K+") {
      return Math.floor(val).toString();
    } else if (suffix === "%") {
      return val.toFixed(1);
    } else if (suffix === "/5") {
      return val.toFixed(1);
    } else {
      return Math.floor(val).toString();
    }
  };

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold group-hover:scale-110 transition-transform duration-300">
      {formatValue(displayValue)}{suffix}
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 bg-gray-900/30 backdrop-blur-sm border-y border-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            数据说话，实力见证
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            全球开发者的信任选择，数万家企业的共同选择
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="text-center group">
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${stat.gradient} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                    <Icon className={`h-6 w-6 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`} />
                  </div>
                </div>
                
                <div className={`bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                
                <div className="text-gray-400 mt-2 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* 额外的信任标识 */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6">
            受到全球知名公司的信任
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            {["Google", "Microsoft", "Vercel", "Netlify", "GitHub"].map((company) => (
              <div
                key={company}
                className="text-gray-500 font-semibold hover:text-gray-300 transition-colors duration-300 cursor-pointer"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}