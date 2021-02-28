<template>
  <v-container fluid fill-height>
    <v-layout child-flex>
      <v-card class="pa-5 my-5 mx-0" flat>
        <v-row>
          <v-col>
            <v-text-field v-model="msg" class="px-5" label="メッセージ" fluid>
              <template v-slot:append>
                <v-btn
                  :disabled="disablePut"
                  @click="putMessage"
                  color="green"
                  class="my-2"
                >
                  <v-icon v-text="'mdi-pencil'" />
                </v-btn>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-data-table
            class="ma-5"
            :headers="header"
            :items="messageData"
            hide-default-footer
          >
            <template v-slot:[`item.op`]="{ item }">
              <v-spacer />
              <v-btn @click="deleteMessage(item.id)" color="red" dark>
                <v-icon v-text="'mdi-trash-can-outline'" />
              </v-btn>
            </template>
          </v-data-table>
        </v-row>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MessageData } from '../store/messageModule';
import store, { messageStore } from '@/store';

@Component
export default class Message extends Vue {
  header = [
    { text: '#', value: 'id' },
    { text: '内容', value: 'msg' },
    { text: '', value: 'op' },
  ];

  msg = '';
  // data = [{ id: 1, msg: 'aaa' }];

  get messageData(): MessageData[] {
    return messageStore.messages;
  }

  get disablePut(): boolean {
    return !(this.msg.length > 0);
  }

  putMessage() {
    messageStore.putMessage(this.msg);
    this.msg = '';
  }

  deleteMessage(id: number) {
    messageStore.deleteMessage(id);
  }
}
</script>

<style lang="scss" scoped>
.maincard {
  background: blue;
}
</style>
