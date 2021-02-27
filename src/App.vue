<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1><v-icon v-text="'mdi-comment-outline'" class="px-2" />めっせーじ！</h1>
    </v-app-bar>

    <v-main class="main">
      <Message />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Message from "./components/Message.vue";

export default Vue.extend({
  name: "App",

  components: {
    Message
  },

  data: () => ({
    //
  })
});
</script>

<style scoped>
.main { background: darkslategray; }
</style>