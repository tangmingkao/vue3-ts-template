import { createPinia, Pinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const piniaStore: Pinia = createPinia();
// 使用持久化存储
piniaStore.use(piniaPluginPersistedstate);

export { piniaStore };
