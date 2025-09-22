import { useIntl } from 'react-intl';

type TranslationValues = Record<string, string | number | boolean | Date | null | undefined>;

export function useTranslation() {
  const intl = useIntl();

  const t = (id: string, values?: TranslationValues) => {
    return intl.formatMessage({ id }, values);
  };

  return { t, intl };
}

// 类型安全的翻译键
export type TranslationKey = 
  | 'common.loading'
  | 'common.error'
  | 'common.success'
  | 'common.confirm'
  | 'common.cancel'
  | 'common.save'
  | 'common.delete'
  | 'common.edit'
  | 'common.view'
  | 'common.close'
  | 'common.contactUs'
  | 'navigation.home'
  | 'navigation.creator'
  | 'navigation.asset'
  | 'navigation.dataBridge'
  | 'navigation.marketplace'
  | 'navigation.signIn'
  | 'navigation.language'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.description'
  | 'hero.getStarted'
  | 'hero.learnMore'
  | 'features.title'
  | 'features.subtitle'
  | 'features.feature1.title'
  | 'features.feature1.description'
  | 'features.feature2.title'
  | 'features.feature2.description'
  | 'features.feature3.title'
  | 'features.feature3.description'
  | 'dataOverview.title'
  | 'dataOverview.totalAssets'
  | 'dataOverview.totalTokenized'
  | 'dataOverview.assetsValue'
  | 'dataOverview.tokenizedValue'
  | 'digitalValue.title'
  | 'digitalValue.subtitle'
  | 'digitalValue.creationTitle'
  | 'digitalValue.creationDescription'
  | 'digitalValue.registrationTitle'
  | 'digitalValue.registrationDescription'
  | 'digitalValue.tradingTitle'
  | 'digitalValue.tradingDescription'
  | 'digitalValue.learnMore'
  | 'ecosystem.title'
  | 'ecosystem.subtitle'
  | 'tokenizedIP.title'
  | 'tokenizedIP.subtitle'
  | 'assetPage.heroTitle'
  | 'assetPage.heroSubtitle'
  | 'assetPage.featuresTitle'
  | 'assetPage.feature1Title'
  | 'assetPage.feature1Description'
  | 'assetPage.feature2Title'
  | 'assetPage.feature2Description'
  | 'assetPage.feature3Title'
  | 'assetPage.feature3Description'
  | 'assetPage.feature4Title'
  | 'assetPage.feature4Description'
  | 'assetPage.valuableTitle'
  | 'assetPage.valuableDescription'
  | 'assetPage.creativeTitle'
  | 'assetPage.creativeDescription'
  | 'metaAssetPage.tableHeaders.assetId'
  | 'metaAssetPage.tableHeaders.assetName'
  | 'metaAssetPage.tableHeaders.link'
  | 'metaAssetPage.tableHeaders.impact'
  | 'metaAssetPage.tableHeaders.heat'
  | 'metaAssetPage.tableHeaders.profitability'
  | 'metaAssetPage.tableHeaders.portfolio'
  | 'metaAssetPage.tableHeaders.listingDate'
  | 'metaAssetPage.tableHeaders.type'
  | 'metaAssetPage.noData'
  | 'dataBridgePage.heroTitle'
  | 'dataBridgePage.heroSubtitle'
  | 'dataBridgePage.genAITitle'
  | 'dataBridgePage.genAIDescription'
  | 'dataBridgePage.contentManagementTitle'
  | 'dataBridgePage.contentManagementDescription'
  | 'dataBridgePage.developerTitle'
  | 'dataBridgePage.developerDescription'
  | 'dataBridgePage.otherServiceTitle'
  | 'dataBridgePage.otherServiceDescription'
  | 'ecosystem.title'
  | 'ecosystem.challengeTitle'
  | 'ecosystem.challengeDescription'
  | 'ecosystem.solutionTitle'
  | 'ecosystem.solutionDescription'
  | 'ecosystem.ecosystemTitle'
  | 'ecosystem.ecosystemDescription'
  | 'tokenizedIP.numberOfContents'
  | 'tokenizedIP.assetValue'
  | 'tokenizedIP.comingSoon'
  | 'tokenizedIP.more'
  | 'footer.copyright'
  | 'footer.privacy'
  | 'footer.terms'
  | 'footer.support'
  | 'footer.followUs'
  | 'footer.poweredBy'
  | 'footer.vobileLink';

export function useTypedTranslation() {
  const { t } = useTranslation();
  
  return {
    t: (key: TranslationKey, values?: TranslationValues) => t(key, values)
  };
}