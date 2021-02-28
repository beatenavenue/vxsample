import { Mutation, VuexModule, Module } from 'vuex-module-decorators';

export interface MessageData {
  id: number;
  msg: string;
}

export interface MessageState {
  messages: MessageData[];
}

@Module({ name: 'message' })
export default class MessageModule extends VuexModule implements MessageState {
  // state
  messages: MessageData[] = [{ id: 1, msg: 'debug message.' }];

  // mutation
  @Mutation
  public putMessage(addMsg: string): void {
    const maxId: number = Math.max(...this.messages.map(v => v.id));
    const newId: number = maxId <= 0 ? 1 : maxId +1;
    this.messages.push({ id: newId, msg: addMsg });
  }

  @Mutation
  public deleteMessage(id: number): void {
    const el = this.messages.findIndex(d => d.id == id);
    if (el >= 0) {
      this.messages.splice(el, 1);
    }
  }

  // actions
}
