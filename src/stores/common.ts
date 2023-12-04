import { defineStore } from "pinia";
import { piniaStore } from "./index";

interface CommonState {
  currency: string;
  language: string;
}

export const useCommonStore = defineStore({
  id: "exchange-common",
  persist: {
    storage: window.localStorage || window.sessionStorage,
    paths: ['language','currency'],
    debug: true,
  },
  state: (): CommonState => ({
    // 计价单位 默认USD
    currency: "USD",
    // 语言设置 默认en-US
    language: "en-US",
  }),
  getters: {
    getCurrency: (state): string => {
      return state.currency;
    },
    getLanguage: (state): string => {
      return state.language;
    },
  },
  actions: {
    setCurrency(currency: string) {
      this.currency = currency;
    },
    setLanguage(language: string) {
      this.language = language;
    },
  },
});

// Need to be used outside the setup
export function useCommonStoreGlobal() {
  return useCommonStore(piniaStore);
}
