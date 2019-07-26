import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import {
  VApp,
  VBtn,
  VBtnToggle,
  VCard,
  VCheckbox,
  VDivider,
  VGrid,
  VIcon,
  VList,
  VProgressLinear,
  VTextField
} from 'vuetify';

Vue.use(Vuetify, {
  components: {
    VApp,
    VBtn,
    VBtnToggle,
    VCard,
    VCheckbox,
    VDivider,
    VGrid,
    VIcon,
    VList,
    VProgressLinear,
    VTextField
  },
  theme: {
    // primary: manifestJSON.theme_color
    primary: '#673ab7',
    secondary: '#3f51b5',
    accent: '#03a9f4',
    error: '#f44336',
    warning: '#ffc107',
    info: '#4caf50',
    success: '#9c27b0'      
  }
});

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
