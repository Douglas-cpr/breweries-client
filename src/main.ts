import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/routes'

import '@/assets/styles/variables.css'
import '@/assets/styles/global.css'

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
