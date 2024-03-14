import { createRouter, createWebHistory } from "vue-router";

import firebase from './services/firebaseConnection';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            meta: { // Não permite que qualquer usuário acesse a página. Precisa estar autenticado
                requiresAuth: true,
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/perfil/:userid',
            component: Perfil,
            props: true, // É necessário estar ativo para que o endereço pegue a informação por props
            meta: {
                requiresAuth: true,
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    // Vai verificar as rotas. Se meta estiver com requiresAuth ativo a variável requiresAuth abaixo recebe true, senão false;
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth);

    // Se a rota é bloqueada e o usuário não está logado é redirecionado para a página de login
    if (requiresAuth && !firebase.auth().currentUser) {
        next('/login');
    } else { // Senão o usuário pode seguir
        next();
    }
})

export default router;