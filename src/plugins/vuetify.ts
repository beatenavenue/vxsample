import Vue from "vue";
import { colors } from "vuetify/lib";
import Vuetify from "vuetify/lib/framework";
import ja from "vuetify/src/locale/ja";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { ja },
    current: "ja"
  },
  theme: {
    themes: {
      light: {
        primary: colors.blue.darken1,
        secondary: colors.blue.darken4,
        accent: colors.red.lighten1
      },
      dark: {
        primary: colors.red.darken1,
        secondary: colors.red.darken4,
        accent: colors.blue.lighten1
      }
    }
  }
});
