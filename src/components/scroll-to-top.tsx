"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 监听滚动事件
  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      const maxHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;
      const progress = maxHeight > 0 ? (scrolled / maxHeight) * 100 : 0;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 200); // 滚动超过200px时显示
    };

    // 初始检查
    toggleVisibility();
    
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 平滑滚动到顶部
  const scrollToTop = () => {
    console.log('ScrollToTop clicked!'); // 调试日志
    
    // 尝试多种滚动方法以确保兼容性
    if (window.scrollTo) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // 备用方法
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800/90 backdrop-blur-sm hover:bg-gray-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group flex items-center justify-center"
      aria-label="Back to top"
      type="button"
    >
      {/* 进度环 */}
      <svg
        className="absolute inset-0 w-full h-full transform -rotate-90"
        viewBox="0 0 100 100"
      >
        {/* 背景圆环 */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="4"
          fill="none"
        />
        {/* 进度圆环 */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="rgba(255, 255, 255, 0.8)"
          strokeWidth="4"
          fill="none"
          strokeDasharray={`${2 * Math.PI * 40}`}
          strokeDashoffset={`${2 * Math.PI * 40 * (1 - scrollProgress / 100)}`}
          strokeLinecap="round"
          className="transition-all duration-300 ease-out"
        />
      </svg>
      
      {/* 图标 */}
      <ChevronUp className="relative z-10 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
      
      {/* 悬浮提示 */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
        <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap shadow-lg">
          回到顶部
        </div>
      </div>
    </button>
  );
}