import { createApp } from 'vue'
import './index.scss'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'


// createApp(App).mount('#app')

function bootstrap() {
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)
  app.mount('#app')
}

bootstrap()