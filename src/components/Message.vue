<template>
  <v-container fluid fill-height>
    <v-layout child-flex>
      <v-card class="pa-5 my-5 mx-0" flat>
        <v-row>
          <v-col>
            <v-text-field v-model="msg" class="px-5" label="メッセージ" fluid>
              <template v-slot:append>
                <v-btn color="red" class="my-2"><v-icon v-text="'mdi-pencil'" /></v-btn>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-data-table class="ma-5" :headers="header" hide-default-footer />
        </v-row>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Message extends Vue {
  header = [{text:'#',value:'id'},{text:'内容',value:'msg'}];
  msg = '';
}
</script>

<style lang="scss" scoped>
.maincard {
  background: blue;
}
</style>