import { createStore } from 'vuex';
import { todoModule } from "./Modules/Todo/index";
import { counterModule } from "./Modules/counter/index";
import auth from './Modules/Auth/index'
import { LOADING_sPINNER_SHOW_MUTATION } from './storeConstants';



export const store = createStore({
    modules:{
        counter: counterModule,
        todos:todoModule,
        auth
    },
    state() {
        return {
            showLoading :false
        }
    },
    getters: {},
    mutations: {
        [LOADING_sPINNER_SHOW_MUTATION](state,payload) {
            state.showLoading = payload;
        }
    },
    actions: {}
})