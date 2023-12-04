import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

export default function useLoginStatus() {
  const userStore = useUserStore();
  const { getToken } = storeToRefs(userStore);
  return {
    isLogin: !!getToken.value,
  }
}
