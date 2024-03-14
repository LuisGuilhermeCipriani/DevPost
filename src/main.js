import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
import firebase from './services/firebaseConnection';

let app
firebase.auth().onAuthStateChanged(() => { // Fica o tempo todo olhando se há usuário logado
    if (!app) {
        app = createApp(App).use(router).mount('#app')
    }
})
