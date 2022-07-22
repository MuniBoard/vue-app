import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import Vuex from 'vuex';

const store = new Vuex.Store({
    state: {
        breadcrumbs: []
    },
    mutations: {
        addBreadcrumb(state, payload) {
            state.breadcrumbs.push(payload);
            localStorage.breadcrumbs = JSON.stringify(state.breadcrumbs);
        },
        removeBreadcrumb(state, payload) {
            const foundIndex = state.breadcrumbs.findIndex((other) => other.name === payload.name);
            if(foundIndex >= 0)
            while(foundIndex < state.breadcrumbs.length) {
                state.breadcrumbs.pop();
            }
            localStorage.breadcrumbs = JSON.stringify(state.breadcrumbs);
        },
        initBreadcrumbs(state) {
            if(localStorage.breadcrumbs)
                state.breadcrumbs = JSON.parse(localStorage.breadcrumbs);
        }
    }
});

createApp(App).use(router).use(store).mount('#app')
