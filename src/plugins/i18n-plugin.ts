import { createI18n } from "vue-i18n";
import messages from '@/i18n/index';
import { useCommonStoreGlobal } from "@/stores/common";
import { storeToRefs } from "pinia";

// 默认初始化语言
const defaultLang = 'zh-CN';

// 创建i18n
const i18nPlugin = () => {
  const commonStore = useCommonStoreGlobal();
  const { getLanguage } = storeToRefs(commonStore);
  return createI18n({
    legacy: false,
    locale: getLanguage.value || defaultLang,
    fallbackLocale: 'en-US',
    messages: messages,
    silentTranslationWarn: true,
    dateTimeFormats: {
      'en-US': {
        short: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        },
      },
    },
  });
};
export default i18nPlugin;
