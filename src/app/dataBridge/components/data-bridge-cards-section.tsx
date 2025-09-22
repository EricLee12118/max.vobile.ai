'use client'

import Image from "next/image";
import { useTypedTranslation } from "@/hooks/useTranslation";

export function DataBridgeCardsSection() {
  const { t } = useTypedTranslation();
  return (
    <section className="min-h-screen bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* GenAI Platforms Card */}
        <div className="group relative h-full bg-black border-r border-b border-gray-800 flex flex-col justify-center items-center p-12 cursor-pointer overflow-hidden">
          <div className="text-center space-y-6 z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('dataBridgePage.genAITitle')}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto mb-8">
              {t('dataBridgePage.genAIDescription')}
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
              {t('common.contactUs')}
            </button>
          </div>
          
          {/* Hover Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
            <Image 
              src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/dataBridge1.svg"
              alt="GenAI Platforms"
              fill
              className="object-cover mix-blend-overlay"
            />
          </div>
        </div>

        {/* Content Management Card */}
        <div className="group relative h-full bg-black border-b border-gray-800 flex flex-col justify-center items-center p-12 cursor-pointer overflow-hidden">
          <div className="text-center space-y-6 z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('dataBridgePage.contentManagementTitle')}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto mb-8">
              {t('dataBridgePage.contentManagementDescription')}
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
              {t('common.contactUs')}
            </button>
          </div>
          
          {/* Hover Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
            <Image 
              src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/dataBridge1.svg"
              alt="Content Management"
              fill
              className="object-cover mix-blend-overlay"
            />
          </div>
        </div>

        {/* Developer Card */}
        <div className="group relative h-full bg-black border-r border-gray-800 flex flex-col justify-center items-center p-12 cursor-pointer overflow-hidden">
          <div className="text-center space-y-6 z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('dataBridgePage.developerTitle')}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto mb-8">
              {t('dataBridgePage.developerDescription')}
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
              {t('common.contactUs')}
            </button>
          </div>
          
          {/* Hover Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
            <Image 
              src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/dataBridge1.svg"
              alt="Developer"
              fill
              className="object-cover mix-blend-overlay"
            />
          </div>
        </div>

        {/* Other Service Partner Card */}
        <div className="group relative h-full bg-black flex flex-col justify-center items-center p-12 cursor-pointer overflow-hidden">
          <div className="text-center space-y-6 z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('dataBridgePage.otherServiceTitle')}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto mb-8">
              {t('dataBridgePage.otherServiceDescription')}
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
              {t('common.contactUs')}
            </button>
          </div>
          
          {/* Hover Image */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
            <Image 
              src="https://vobile-apps.oss-cn-hangzhou.aliyuncs.com/apollo/dataBridge1.svg"
              alt="Other Service Partner"
              fill
              className="object-cover mix-blend-overlay"
            />
          </div>
        </div>
      </div>
    </section>
  );
}