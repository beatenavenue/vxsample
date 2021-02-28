import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { initializeStores, modules } from '@/store/store-accessor';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initializer = (store: Store<any>) => initializeStores(store);

export const plugins = [initializer];
export * from '@/store/store-accessor';

Vue.use(Vuex);
export default new Store({ plugins, modules });
