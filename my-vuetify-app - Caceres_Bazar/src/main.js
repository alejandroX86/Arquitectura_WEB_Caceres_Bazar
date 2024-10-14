//import { createApp } from 'vue'
//import App from './App.vue'

//createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import 'vuetify/dist/vuetify.min.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(vuetify);

app.mount('#app');