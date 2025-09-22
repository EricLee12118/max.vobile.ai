export const SUPPORTED_LOCALES = {
  'en': { code: 'en', name: 'English', flag: '🇺🇸' },
  'zh-cn': { code: 'zh-cn', name: '中文简体', flag: '🇨🇳' },
  'zh-tw': { code: 'zh-tw', name: '中文繁體', flag: '🇹🇼' },
  'ja': { code: 'ja', name: '日本語', flag: '🇯🇵' },
  'ko': { code: 'ko', name: '한국어', flag: '🇰🇷' },
  'es': { code: 'es', name: 'Español', flag: '🇪🇸' },
} as const;

export type SupportedLocale = keyof typeof SUPPORTED_LOCALES;

export const DEFAULT_LOCALE: SupportedLocale = 'en';

export const getLocaleInfo = (locale: SupportedLocale) => {
  return SUPPORTED_LOCALES[locale] || SUPPORTED_LOCALES[DEFAULT_LOCALE];
};

export const isValidLocale = (locale: string): locale is SupportedLocale => {
  return locale in SUPPORTED_LOCALES;
};