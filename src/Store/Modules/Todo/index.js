 export const todoModule = {
    namespaced: true,
    state(){
        return {
            todos: [
                { id: 1, text: 'Gopi', done: true },
                { id: 2, text: 'siri', done: false },
                { id: 3, text: 'nandu', done: true },
                { id: 4, text: 'nikky', done: false },
            ],
        }
    },
    getters:{
        selectedTodoById: (state) => (id) => {
            return state.todos.find(todos => todos.id === id)
        },
        doneTodo(state) {
            return state.todos.filter(todos => todos.done);
        },
        donetodoListCount(state, getters) {
            return getters.doneTodo.length
        }
    },
    actions:{},
    mutations:{}
} 

