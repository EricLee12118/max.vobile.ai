"use client";

import Image from "next/image";
import Link from "next/link";
import { LinkedinIcon, TwitterIcon } from "lucide-react";
import { useTypedTranslation } from "@/hooks/useTranslation";

export function Footer() {
  const { t } = useTypedTranslation();
  return (
    <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-xl px-4 sm:px-12 py-6 sm:py-10 text-base font-medium leading-relaxed">
      {/* Mobile Layout */}
      <div className="flex flex-col gap-6 sm:hidden">
        {/* Logo Section */}
        <div>
          <Image
            src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/siteLogo.svg"
            alt="Vobile Logo"
            width={140}
            height={36}
            className="h-9 w-auto"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          <div className="text-gray-300 text-sm leading-relaxed">
            {t('footer.poweredBy')}{" "}
            <a 
              href="https://www.vobile.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline"
            >
              {t('footer.vobileLink')}
            </a>
          </div>
          
          <div>
            <Link 
              href="https://max.vobile.ai/agreement/privacyPolicy" 
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              {t('footer.privacy')}
            </Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="space-y-3">
          <div className="text-white font-semibold text-sm uppercase tracking-wider">
            {t('footer.followUs')}
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/company/vobile/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-800/70 border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
            
            <a 
              href="https://x.com/vobile?s=21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-800/70 border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 group"
              aria-label="Twitter/X"
            >
              <TwitterIcon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex items-start gap-12">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image
            src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/siteLogo.svg"
            alt="Vobile Logo"
            width={140}
            height={36}
            className="h-9 w-auto"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 space-y-5">
          <div className="text-gray-300 text-sm leading-relaxed">
            {t('footer.poweredBy')}{" "}
            <a 
              href="https://www.vobile.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline"
            >
              {t('footer.vobileLink')}
            </a>
          </div>
          
          <div>
            <Link 
              href="https://max.vobile.ai/agreement/privacyPolicy" 
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              {t('footer.privacy')}
            </Link>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex-shrink-0 space-y-4 text-right">
          <div className="text-white font-semibold text-sm uppercase tracking-wider">
            {t('footer.followUs')}
          </div>
          
          <div className="flex justify-end space-x-4">
            <a 
              href="https://www.linkedin.com/company/vobile/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-800/70 border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
            
            <a 
              href="https://x.com/vobile?s=21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-800/70 border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 group"
              aria-label="Twitter/X"
            >
              <TwitterIcon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}