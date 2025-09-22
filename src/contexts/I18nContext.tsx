'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import type { MessageFormatElement } from 'react-intl';
import { SupportedLocale, DEFAULT_LOCALE, isValidLocale } from '@/lib/i18n';

type Messages = Record<string, string> | Record<string, MessageFormatElement[]>;

// 动态导入翻译文件并扁平化处理
const loadMessages = async (locale: SupportedLocale) => {
  try {
    const messages = await import(`@/locales/${locale}/common.json`);
    // 扁平化嵌套的JSON结构
    const flattenedMessages = flattenMessages(messages.default);
    return flattenedMessages;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // 如果加载失败，回退到默认语言
    const defaultMessages = await import(`@/locales/${DEFAULT_LOCALE}/common.json`);
    return flattenMessages(defaultMessages.default);
  }
};

// 扁平化嵌套对象的工具函数
const flattenMessages = (nestedMessages: Record<string, unknown>, prefix = ''): Record<string, string> => {
  const flattened: Record<string, string> = {};
  
  Object.keys(nestedMessages).forEach((key) => {
    const value = nestedMessages[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'string') {
      flattened[newKey] = value;
    } else if (typeof value === 'object' && value !== null) {
      Object.assign(flattened, flattenMessages(value as Record<string, unknown>, newKey));
    }
  });
  
  return flattened;
};

interface I18nContextType {
  locale: SupportedLocale;
  changeLocale: (newLocale: SupportedLocale) => void;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
  initialLocale?: SupportedLocale;
}

export function I18nProvider({ children, initialLocale }: I18nProviderProps) {
  const [locale, setLocale] = useState<SupportedLocale>(initialLocale || DEFAULT_LOCALE);
  const [messages, setMessages] = useState<Messages>({});
  const [isLoading, setIsLoading] = useState(true);

  // 从localStorage加载保存的语言设置
  useEffect(() => {
    const savedLocale = localStorage.getItem('preferred-locale');
    if (savedLocale && isValidLocale(savedLocale)) {
      setLocale(savedLocale);
    }
  }, []);

  // 当语言改变时加载对应的翻译文件
  useEffect(() => {
    const loadLocaleMessages = async () => {
      setIsLoading(true);
      try {
        const newMessages = await loadMessages(locale);
        setMessages(newMessages);
      } catch (error) {
        console.error('Failed to load locale messages:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadLocaleMessages();
  }, [locale]);

  const changeLocale = (newLocale: SupportedLocale) => {
    setLocale(newLocale);
    localStorage.setItem('preferred-locale', newLocale);
    
    // 更新HTML文档的lang属性
    document.documentElement.lang = newLocale;
  };

  const contextValue: I18nContextType = {
    locale,
    changeLocale,
    isLoading,
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <I18nContext.Provider value={contextValue}>
      <IntlProvider
        locale={locale}
        messages={messages as Record<string, string>}
        defaultLocale={DEFAULT_LOCALE}
        onError={(error) => {
          // 在生产环境中，可以将错误发送到错误监控服务
          if (process.env.NODE_ENV === 'development') {
            console.error('IntlProvider error:', error);
          }
        }}
      >
        {children}
      </IntlProvider>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

export function useLocale() {
  const { locale } = useI18n();
  return locale;
}

export function useChangeLocale() {
  const { changeLocale } = useI18n();
  return changeLocale;
}