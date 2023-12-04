import { defineStore } from "pinia";
import { piniaStore } from "./index";

interface UserState {
  token: string;
  invitationCode: string | number;
}

export const useUserStore = defineStore({
  id: "exchange-user",
  persist: {
    storage: window.localStorage || window.sessionStorage,
    paths: ['token'],
    debug: true,
  },
  state: (): UserState => ({
    // 用户登录token
    token: "",
    // 用户注册的邀请码
    invitationCode: "",
  }),
  getters: {
    getToken: (state): string => {
      return state.token;
    },
    getInvitationCode: (state): string | number => {
      return state.invitationCode;
    },
  },
  actions: {
    setToken(token: string) {
      let tempToken = token ?? "";
      this.token = tempToken;
    },
    setInvitationCode(code: string | number) {
      let tempCode = code ?? "";
      this.invitationCode = tempCode;
    },
  },
});

// Need to be used outside the setup
export function useUserStoreGlobal() {
  return useUserStore(piniaStore);
}