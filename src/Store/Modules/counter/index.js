
export const counterModule = {
    namespaced: true,

    state() {
        return {
            count: 5,
        }
    },
    getters: {},
    actions: {
        increment(context, payload) {
            console.log(context);
            setTimeout(() => {
                context.commit('increment', payload);
            }, 2000);
        },
        actionA(context) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    context.commit('increment', { value: 10 })
                    resolve("gopi ");
                }, 2000);
            })
        },
        actionB(context) {
            context.dispatch('actionA').then((response) => {
                console.log(response);
                console.log('from action b');
            })
        }
    },
    mutations: {
        increment(state, payload) {
            state.count += payload.value
        }
    }
} 
