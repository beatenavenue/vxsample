import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import MessageModule from './messageModule';

export let messageStore: MessageModule;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function initializeStores(store: Store<any>): void {
  messageStore = getModule(MessageModule, store);
}

export const modules = {
  message: MessageModule,
};
