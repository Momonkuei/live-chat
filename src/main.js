import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';

// import firebase auth service
import { projectAuth } from './firebase/config';

let app;

projectAuth.onAuthStateChanged(() => {
	if (!app) {
		// 如果 app 沒有值，就執行渲染
		app = createApp(App).use(router).mount('#app');
	}
});
