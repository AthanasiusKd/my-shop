import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';

const app = createApp(App)
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.component('base-spinner', BaseSpinner);

app.use(router)
app.use(store)
app.mount('#app')
